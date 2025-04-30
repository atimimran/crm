import React, { useState } from "react";

import {
  FiSearch,
  FiMenu,
  FiX,
  FiThumbsUp,
  FiFolder,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";

import DarkModeToggle from "./DarkModeToggle.jsx";

const Header = ({}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div>
        <nav className="flex items-center dark:bg-black justify-between p-4 bg text-white w-full border-b-2 border-white transition-colors duration-500">
          <div className="flex items-center">
            <img
              alt="Logo"
              className="rounded-full w-10 h-10"
              src="https://placehold.co/50x50"
            />
          </div>

          <div className="hidden md:flex flex-grow justify-center">
            <div className="relative w-full max-w-md">
              <input
                className="bg dark:bg-black text-white border boder pl-10 pr-4 py-2 w-full focus:outline-none transition-colors duration-500"
                placeholder="Search"
                type="text"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
                <FiSearch />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DarkModeToggle />
            <a className="ml-4 border boder text-white px-4 py-2" href="#">
              Log in
            </a>
            <button className="btn-signup"> Sign up</button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setShowSearch(!showSearch)}>
              <FiSearch size={22} />
            </button>
            <button onClick={toggleSidebar}>
              <FiMenu size={26} />
            </button>
          </div>
        </nav>

        {showSearch && (
          <div className="md:hidden bg-black border-b-2 border-white p-2 transition-colors duration-500">
            <input
              className="bg-black text-white border border-white px-4 py-2 w-full focus:outline-none transition-colors duration-500"
              placeholder="Search"
              type="text"
            />
          </div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white border-r-2 border-white z-50 transform transition-colors duration-500 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b-2 border-white transition-colors duration-500">
            <img
              alt="Logo"
              className="rounded-full w-10 h-10"
              src="https://placehold.co/50x50"
            />
            <button onClick={toggleSidebar}>
              <FiX size={24} />
            </button>
          </div>
          <div className="p-4 flex flex-col gap-3 transition-colors duration-500">
            <SidebarItem icon={<FiThumbsUp />} label="Liked Videos" />
            <SidebarItem icon={<FiFolder />} label="My Content" />
            <SidebarItem icon={<FiHelpCircle />} label="Support" />
            <SidebarItem icon={<FiSettings />} label="Settings" />
          </div>
          <div className="mt-auto p-4 border-t-2 border-white flex items-end gap-3 transition-colors duration-500">
            <img
              alt="User"
              className="rounded-full w-10 h-10"
              src="https://placehold.co/50x50"
            />
            <div>
              <h4 className="font-semibold">React Patterns</h4>
              <p className="text-sm">@reactpatterns</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 border border-white p-2 cursor-pointer hover:bg-purple-500 transition-colors duration-500">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Header;
