import { Fragment, useEffect } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { useNavigate } from "react-router-dom";

const NewsFeed: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    initTE({ Collapse, Dropdown });
  }, []);
  return (
    <Fragment>
      <div
        className="h-screen overflow-hidden flex"
        style={{ background: "#edf2f7" }}
      >
        <div className="w-full flex flex-row flex-wrap">
          <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap">
            {/* Begin Navbar*/}
            <div className="w-full md:w-4/4 lg:w-5/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
              <div className="bg-white w-full shadow rounded-lg p-5">
                <textarea
                  className="bg-gray-200 w-full rounded-lg shadow border p-2"
                  rows={5}
                  placeholder="Speak your mind"
                ></textarea>

                <div className="w-full flex flex-row flex-wrap mt-3">
                  <div className="w-1/3">
                    <select className="w-full p-2 rounded-lg bg-gray-200 shadow border float-left">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div className="w-2/3">
                    <button
                      type="button"
                      className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-col">
                <div className="bg-white mt-3">
                  <img
                    className="border rounded-t-lg shadow-lg "
                    src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  />
                  <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                    A Pretty Cool photo from the mountains. Image credit to
                    @danielmirlea on Unsplash.
                  </div>
                  <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
                    <div className="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                      Like
                    </div>
                    <div className="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                      Comment
                    </div>
                  </div>

                  <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
                    <div className="w-full">
                      <div className="w-full text-left text-xl text-gray-600">
                        @Some Person
                      </div>
                      A Pretty Cool photo from the mountains. Image credit to
                      @danielmirlea on Unsplash. A Pretty Cool photo from the
                      mountains. Image credit to @danielmirlea on Unsplash.
                    </div>
                    <section className="w-full text-left text-xl text-gray-600 py-8">
                      <div className="w-full">
                        <form className="mb-6 w-full">
                          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label htmlFor="comment" className="sr-only">
                              Your comment
                            </label>
                            <textarea
                              id="comment"
                              rows={6}
                              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                              placeholder="Write a comment..."
                              required
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                          >
                            Post comment
                          </button>
                        </form>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="bg-white mt-3">
                  <img
                    className="border rounded-t-lg shadow-lg "
                    src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  />
                  <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                    A Pretty Cool photo from the mountains. Image credit to
                    @danielmirlea on Unsplash.
                  </div>
                  <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                    <div className="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                      Like
                    </div>
                    <div className="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                      Comment
                    </div>
                  </div>
                </div>

                <div className="bg-white mt-3">
                  <img
                    className="border rounded-t-lg shadow-lg "
                    src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  />
                  <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                    A Pretty Cool photo from the mountains. Image credit to
                    @danielmirlea on Unsplash.
                  </div>
                  <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                    <div className="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                      Like
                    </div>
                    <div className="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                      Comment
                    </div>
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

export default NewsFeed;
