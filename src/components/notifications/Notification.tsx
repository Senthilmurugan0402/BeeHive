import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../common/components/navigation/NavBar";

const Notification: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <NavBar />
      <div className=" pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 bg-indigo-100 h-screen">
        <div className="w-full md:w-4/4 lg:w-5/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
          <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2 bg-white">
            <div className="pt--10 pr-0 pb-10 pl-0">
              <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div className="flex items-center flex-1 min-w-0">
                    <img
                      src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill"
                      className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                    />
                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p className="text-lg font-bold text-gray-800 truncate">
                        Engineering Manager
                      </p>
                      <p className="text-gray-600 text-md">Slack</p>
                    </div>
                  </div>
                  <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                    <a
                      href=""
                      className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg"
                    >
                      Mark as Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2 bg-white">
            <div className="pt--10 pr-0 pb-10 pl-0">
              <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div className="flex items-center flex-1 min-w-0">
                    <img
                      src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill"
                      className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                    />
                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p className="text-lg font-bold text-gray-800 truncate">
                        Engineering Manager
                      </p>
                      <p className="text-gray-600 text-md">Slack</p>
                    </div>
                  </div>
                  <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                    <a
                      href=""
                      className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg"
                    >
                      Mark as Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2 bg-white">
            <div className="pt--10 pr-0 pb-10 pl-0">
              <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div className="flex items-center flex-1 min-w-0">
                    <img
                      src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill"
                      className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                    />
                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p className="text-lg font-bold text-gray-800 truncate">
                        Engineering Manager
                      </p>
                      <p className="text-gray-600 text-md">Slack</p>
                    </div>
                  </div>
                  <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                    <a
                      href=""
                      className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg"
                    >
                      Mark as Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Notification;
