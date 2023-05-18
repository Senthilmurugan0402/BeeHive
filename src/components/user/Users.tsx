import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../common/components/navigation/NavBar";
import { firestore } from "../../common/appData/FireBase";
import { useAppStateAPI } from "../../common/appData/AppStateAPI";
import { APIData } from "../../common/appData/DataTypes";
import { toast } from "react-hot-toast";

const Users: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);
  const [userList, setUsersList] = useState<any[]>([]);
  const [userSearch, setUserSearch] = useState("");
  const { setShowPreloader } = useAppStateAPI();
  let documentId = localStorage.getItem("documentId");

  const getUsersList = async () => {
    setShowPreloader(true);
    const snapshot = await firestore.collection("users").get();
    let users: any[] = [];
    let followingUsers: any[] = [];

    snapshot.forEach(async (doc) => {
      const user = doc.data();
      if (doc.id && documentId && documentId != doc.id) {
        const profileRef = firestore.collection("users").doc(documentId);
        const profileSnapshot = await profileRef.get();

        if (profileSnapshot.exists) {
          const profileData = profileSnapshot.data();
          if (profileData) {
            followingUsers = profileData["followers"];
          }
        }

        users.push({
          username: user.username,
          userimage: user.userimage,
          userabout: user.userabout,
          docid: doc.id,
          followers:
            followingUsers.length > 0 &&
            followingUsers.filter((user) => {
              if (user.docid == doc.id) {
                return true;
              } else {
                return false;
              }
            }),
        });
        console.log(users);
        users = users.sort((a, b) => {
          if (a.followers.length >0 && b.followers.length ==0) {
            return -1; // `a` comes before `b`
          }
          if (a.followers.length ==0 && b.followers.length >0) {
            return 1; // `b` comes before `a`
          }
          return 0; // Maintain the existing order
        });
        setShowPreloader(false);
        setUsers(users);
        setUsersList(users);
      }
    });
  };

  const updateFollowers = async (
    docid: string,
    name: string,
    followStatus: boolean
  ) => {
    if (documentId) {
      setShowPreloader(true);
      let followingUsers: any[] = [];
      const profileRef = firestore.collection("users").doc(documentId);
      const profileSnapshot = await profileRef.get();

      if (profileSnapshot.exists) {
        const profileData = profileSnapshot.data();
        if (profileData) {
          followingUsers = profileData["followers"];
        }
      }
      if (followStatus == false) {
        followingUsers = followingUsers.filter((user) => user.docid != docid);
      } else if (followStatus) {
        followingUsers.push({
          docid: docid,
          userName: name,
        });
      }
      profileRef
        .update({
          followers: followingUsers,
        })
        .then(() => {
          toast.success("Follower List Updated");
          getUsersList();
        })
        .catch((error) => {
          toast.error(error);
        });
      setShowPreloader(false);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  useEffect(() => {
    if (userSearch != "") {
      let exisitingUserData = userList;
      exisitingUserData = exisitingUserData.filter((data) =>
        data.username.toLowerCase().match(userSearch)
      );
      setUsers(exisitingUserData);
    } else {
      setUsers(userList);
    }
  }, [userSearch]);
  return (
    <Fragment>
      <NavBar />
      <div className="pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20 bg-indigo-100 h-screen">
        <div className="w-full md:w-4/4 lg:w-5/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
          <div className="w-full md:w-4/4 lg:w-5/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
            <div className="pt-4 pr-10 pb-4 pl-10 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between shadow-xl bg-white rounded-lg">
              <div>
                <p className="text-xl font-bold text-gray-900">
                  People You May Follow
                </p>
                <p className="text-sm mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">
                  Discover the joy of meeting potential
                </p>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
                <p className="sr-only">Search People</p>
                <div className="relative">
                  <div className="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
                    <p>
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21
                    21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </p>
                  </div>
                  <input
                    placeholder="Search People "
                    type="search"
                    onChange={(e: any) => {
                      setUserSearch(e.target.value);
                    }}
                    className="border block pt-2 pr-0 pb-2 pl-10 w-full py-2
                pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            {users &&
              users.length > 0 &&
              users.map((user: any) => {
                return (
                  <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2 bg-white">
                    <div className="pt--10 pr-0 pb-10 pl-0">
                      <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                          <div className="flex items-center flex-1 min-w-0">
                            <img
                              src={
                                user.userimage != "image_url"
                                  ? user.userimage
                                  : "../../assets/images/profile.png"
                              }
                              className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                            />
                            <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                              <p className="text-lg font-bold text-gray-800 truncate">
                                {user.username}
                              </p>
                              <p className="text-gray-600 text-md">
                                {user.userabout}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                            {user.followers == false ? (
                              <span
                                onClick={(e: any) => {
                                  updateFollowers(
                                    user.docid,
                                    user.username,
                                    true
                                  );
                                }}
                                className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg cursor-pointer"
                              >
                                Follow +
                              </span>
                            ) : (
                              <span
                                onClick={(e: any) => {
                                  updateFollowers(
                                    user.docid,
                                    user.username,
                                    false
                                  );
                                }}
                                className="bg-apptheme pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg  cursor-pointer"
                              >
                                Following
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Users;
