import { Fragment, useEffect, useState } from "react";
import NavBar from "../../common/components/navigation/NavBar";
import { APIData } from "../../common/appData/DataTypes";
import { InitialData } from "../../common/appData/InitalValues";
import { firestore, storage } from "../../common/appData/FireBase";
import moment from "moment";
import { Modal, Ripple, initTE } from "tw-elements";
import { toast } from "react-hot-toast";
import { useAppStateAPI } from "../../common/appData/AppStateAPI";

const Profile: React.FC = () => {
  const [profileDetails, setProfileDetails] = useState<any>(
    InitialData.userDetails
  );
  const [profilePicture, setProfilePicture] = useState<any>({});
  const { setShowPreloader } = useAppStateAPI();
  let documentId = localStorage.getItem("documentId");

  const getProfileDetails = async () => {
    if (documentId) {
      setShowPreloader(true);
      const profileRef = firestore.collection("users").doc(documentId);
      const profileSnapshot = await profileRef.get();

      if (profileSnapshot.exists) {
        const profileData = profileSnapshot.data();
        if (profileData) {
          let data = { ...profileData };
          // Sort the array by datetime
          if (data.userPostData) {
            data.userPostData = data.userPostData.sort(
              (a: APIData.UserPostDetails, b: APIData.UserPostDetails) =>
                b.postCreatedData.localeCompare(a.postCreatedData)
            );
          }
          setProfileDetails(data);
        }
      }
      setShowPreloader(false);
    }
  };
  const loadUploadedfile = async (fileInput: any) => {
    let file = fileInput.files[0];
    if (documentId) {
      setShowPreloader(true);
      const storageRef = storage.ref();
      const imageRef = storageRef.child(file.name);
      await imageRef.put(file);

      // Get the download URL of the uploaded image
      const imageUrl = await imageRef.getDownloadURL();
      const docRef = await firestore.collection("users").doc(documentId);

      docRef
        .update({
          userimage: imageUrl,
          // update more fields as needed
        })
        .then(() => {
          getProfileDetails();
          setProfilePicture({});
          toast.success("Image Added Successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
      setShowPreloader(false);
    }
  };
  useEffect(() => {
    initTE({ Modal, Ripple });
    getProfileDetails();
  }, []);
  return (
    <Fragment>
      <NavBar />
      <div className="h-full bg-indigo p-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div
            x-data="{ openSettings: false }"
            className="absolute right-12 mt-4 rounded"
          ></div>
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src={
                profileDetails.userimage
                  ? profileDetails?.userimage
                  : "../../assets/images/profile.png"
              }
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{profileDetails?.username}</p>
              <span className="cursor-pointer" title="Edit Profile Picture">
                <button
                  type="button"
                  className="inline-block rounded bg-black px-2 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenter"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <i
                    className="fa fa-pencil-square-o float-right text-white text-xs"
                    aria-hidden="true"
                  ></i>
                </button>
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {profileDetails?.userlocation}
            </p>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">
                Personal Info &nbsp;
              </h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">
                    {profileDetails?.username}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Birthday:</span>
                  <span className="text-gray-700">
                    {moment(profileDetails?.userdob).format("MMMM Do YYYY")}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Joined:</span>
                  <span className="text-gray-700">
                    {profileDetails.createdat}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="text-gray-700">
                    {profileDetails.usermobile
                      ? profileDetails.usermobile
                      : "N/A"}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">
                    {profileDetails?.useremail}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Bio&nbsp;</h4>
              <p className="mt-2 text-gray-700">{profileDetails.userabout}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full 2xl:w-2/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Posts</h4>
            <div className="container mx-auto py-8">
              <div className="flex flex-wrap -mx-4">
                {profileDetails.userPostData &&
                profileDetails.userPostData.length > 0 ? (
                  profileDetails.userPostData.map(
                    (post: APIData.UserPostDetails) => {
                      return (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                          <div className="bg-white rounded-lg shadow-lg">
                            <img
                              className="w-full h-40 object-cover rounded-t-lg"
                              src={
                                post.postImage
                                  ? post.postImage
                                  : "../../assets/images/noimage.png"
                              }
                            />
                            <div
                              className="p-4"
                            >
                              <p title={post.postText} style={{
                                height: "42px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }} className="text-gray-600">{post.postText}</p>
                            </div>
                            <div className="text-base text-gray-500 text-left pr-3 pb-2 pl-2">
                              {post.postCreatedData}
                            </div>
                            <div className="text-base text-gray-500 text-right pr-3 pb-2">
                              <i
                                className="fa fa-thumbs-up text-apptheme"
                                aria-hidden="true"
                              >
                                {post.postcomments.length > 0 && (
                                  <span className="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
                                    {post.postcomments.length}
                                  </span>
                                )}
                              </i>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )
                ) : (
                  <div className="text-center text-slate-500 text-xl">
                    No Post to show
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        <div
          data-te-modal-init
          className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenter"
          tabIndex={-1}
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog"
        >
          <div
            data-te-modal-dialog-ref
            className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
          >
            <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                {/* Modal Title */}
                <h5
                  className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="exampleModalScrollableLabel"
                >
                  Profile Image
                </h5>
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="relative p-4">
                <div className="mb-3">
                  <label
                    htmlFor="formFile"
                    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                  ></label>
                  <input
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    accept="image/*"
                    id="formFile"
                    onChange={(e: any) => {
                      setProfilePicture(e.target);
                    }}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-modal-dismiss
                  data-te-ripple-color="light"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={(e: any) => {
                    e.preventDefault();
                    loadUploadedfile(profilePicture);
                  }}
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-color="light"
                  data-te-modal-dismiss
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
