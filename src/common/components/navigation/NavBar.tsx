import { Fragment, useEffect } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { useNavigate } from "react-router-dom";
import { PageLinks } from "../../appData/Constants";
import "./nav.css";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  let currentPath = window.location.pathname.replace(/\//g, "");
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
              <li
                className="mb-4 lg:mb-0 lg:pr-2"
                onClick={(e: any) => {
                  e.preventDefault();
                  navigate(PageLinks.HOME);
                }}
              >
                {/* Home link */}
                <span
                  className={
                    currentPath == "home"
                      ? "cursor-pointer text-white hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                      : "text-slate-400 hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer"
                  }
                >
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;
                  News Feed
                </span>
              </li>
              <li
                className="mb-4 lg:mb-0 lg:pr-2"
                onClick={(e: any) => {
                  e.preventDefault();
                  navigate(PageLinks.USERS);
                }}
              >
                {/* People link */}
                <span
                  className={
                    currentPath == "users"
                      ? "cursor-pointer text-white hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                      : "text-slate-400 hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer"
                  }
                  data-te-nav-link-ref
                >
                  <i className="fa fa-users" aria-hidden="true"></i>&nbsp;
                  People
                </span>
              </li>
            </ul>
          </div>

          {/* Right elements */}
          <div className="relative flex items-center">
            {/* Container with two dropdown menus */}
            <div className="relative cursor-pointer">
              {/* First dropdown trigger */}
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row sm:flex-row"
                data-te-navbar-nav-ref
              >
                <li
                  className="mb-4 lg:mb-0 lg:pr-2"
                  onClick={(e: any) => {
                    e.preventDefault();
                    navigate(PageLinks.PROFILE);
                  }}
                >
                  {/* Profile link */}
                  <span
                    className={
                      currentPath == "profile"
                        ? "cursor-pointer text-white hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                        : "text-slate-400 hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer"
                    }
                    data-te-nav-link-ref
                  >
                    <i className="fa fa-id-badge" aria-hidden="true"></i>&nbsp;
                    Profile
                  </span>
                </li>
                <li
                  className="mb-4 lg:mb-0 lg:pr-2"
                  onClick={(e: any) => {
                    e.preventDefault();
                    localStorage.clear();
                    navigate(PageLinks.LOGIN);
                  }}
                >
                  {/* Logout link */}
                  <span className="text-slate-400 hover:text-white opacity-100 focus:text-white opacity-100 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;
                    logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
