import { Fragment, useEffect } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { useNavigate } from "react-router-dom";
import { PageLinks } from "../../appData/Constants";
import "./nav.css";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  let currentPath = window.location.pathname.replace(/\//g,'');
  useEffect(() => {
    initTE({ Collapse, Dropdown });
  }, []);
  return (
    <Fragment>
      {/*Main navigation container*/}
      <nav
        className="nav-bg flex-no-wrap relative flex w-full items-center justify-between bg-neutral-900 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Collapsible navigation container */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            {/* Left navigation links */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row sm:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2">
                {/* Home link */}
                <span
                  className={currentPath=='home'?"cursor-pointer text-white hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400":"text-slate-400 hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer"}
                >
                  News Feed
                </span>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2">
                {/* Profile link */}
                <span
                  className={currentPath=='profile'?"cursor-pointer text-white hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400":"text-slate-400 hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer"}
                  data-te-nav-link-ref
                >
                  Profile
                </span>
              </li>
            </ul>
          </div>

          {/* Right elements */}
          <div className="relative flex items-center">
            {/* Container with two dropdown menus */}
            <div className="relative" data-te-dropdown-ref>
              {/* First dropdown trigger */}
              <a
                className="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                {/* Dropdown trigger icon */}
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                {/* Notification counter */}
                <span className="absolute -mt-2.5 ml-2 rounded-[0.37rem] bg-danger px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-white">
                  1
                </span>
              </a>
            </div>
            <div className="relative" data-te-dropdown-ref>
              {/* Second dropdown trigger */}
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-500 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                {/* User avatar */}
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: "25px", width: "25px" }}
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div className="relative cursor-pointer">
              {/* First dropdown trigger */}
              <a
                className="hidden-arrow mr-4 ml-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                aria-expanded="false"
              >
                {/* Dropdown trigger icon */}
                <span
                  className="[&>svg]:w-5"
                  onClick={(e: any) => {
                    navigate(PageLinks.LOGIN);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
