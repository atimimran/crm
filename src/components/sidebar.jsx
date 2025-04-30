import React, { useState } from "react";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiFolder,
  FiUsers,
} from "react-icons/fi";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
     
      <div
        className={` bottom-100 md:static w-full ${
          isOpen ? "md:w-64" : "md:w-18"
        } border-r-2 border-white bg dark:bg-black  text-white z-50 transition-all duration-500 md:flex-col hidden md:flex`}
      >
        <div className="flex md:flex-col w-full md:h-screen justify-around md:justify-start py-8 px-4 md:px-2 relative">
         
          <button
            className="hidden md:block absolute top-4 right-4 text-white hov-bg p-1 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
          </button>

         
          <div className="flex md:flex-col gap-2 md:gap-6 mt-8 md:mt-6">
            <SidebarItem icon={<FiHome />} label="Home" isOpen={isOpen} />
            <SidebarItem icon={<FiClock />} label="History" isOpen={isOpen} />
            <SidebarItem icon={<FiFolder />} label="Collections" isOpen={isOpen} />
            <SidebarItem icon={<FiUsers />} label="Subscribers" isOpen={isOpen} />
          </div>

         
          <div className="md:flex md:flex-col gap-2 mt-auto mb-4">
            <SidebarButton icon={<FiHelpCircle />} label="Support" isOpen={isOpen} />
            <SidebarButton icon={<FiSettings />} label="Setting" isOpen={isOpen} />
          </div>
        </div>
      </div>

     
      <div className="md:hidden fixed bottom-0 left-0 w-full bg border-t-2 boder flex justify-around py-2 z-50">
        <MobileNavItem icon={<FiHome />} label="Home" />
        <MobileNavItem icon={<FiClock />} label="History" />
        <MobileNavItem icon={<FiFolder />} label="Collections" />
        <MobileNavItem icon={<FiUsers />} label="Subscribers" />
      </div>
    </>
  );
};


const SidebarItem = ({ icon, label, isOpen }) => {
  return (
    <div className="flex items-center md:justify-center   lg:justify-start gap-3 border boder  p-2 cursor-pointer hov-bg transition-all duration-200">
      <span className="text-xl">{icon}</span>
      <span
        className={`transition-all duration-300   ${
          isOpen ? "opacity-100 max-w-xs ml-1" : "opacity-0 max-w-0 ml-0"
        } hidden md:inline`}
      >
        {label}
      </span>
    </div>
  );
};


const SidebarButton = ({ icon, label, isOpen }) => {
  return (
    <button className="flex items-center gap-2 border boder  hov-bg px-4 py-2">
      <span className="text-xl">{icon}</span>
      <span
        className={`transition-all duration-300  ${
          isOpen ? "opacity-100 max-w-xs ml-1" : "opacity-0 max-w-0 ml-0"
        } hidden md:inline`}
      >
        {label}
      </span>
    </button>
  );
};


const MobileNavItem = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center justify-center text-white">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs">{label}</span>
    </button>
  );
};

export default Sidebar;
