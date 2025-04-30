import React, { useState } from "react";
import { FiMail, FiList } from "react-icons/fi";
// import { FiVideo } from "react-icons/fi";
// import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const EditPersonalInfoPage = () => {
  const [activeTab, setActiveTab] = useState("Personal Information");
  const [isBouncing, setIsBouncing] = useState(false);
  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };
  const tabs = [
    { id: "Personal Information", label: "Personal Information" },
    { id: "Channel Information", label: "Channel Information" },
    { id: "Change Password", label: "Change Password" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Personal Information":
        return (
          <div className="bg-white flex h-96 flex-col p-4 w-full sm:flex-row  px-18">
            <div className=" w-2xl">
              <h2 className="heading-title">
                Personal Info
              </h2>
              <p className=" p  mb-6">
                Update your photo and personal details.
              </p>
            </div>

            <form className=" rounded-lg border boder  w-full space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-2">
                  <label className="block mb-1 text-sm">First name</label>
                  <input
                    type="text"
                    placeholder="React"
                    className="w-full p-2  border boder rounded "
                  />
                </div>
                <div className="p-2">
                  <label className="block mb-1 text-sm">Last name</label>
                  <input
                    type="text"
                    placeholder="Patterns"
                    className="w-full p-2  border boder  rounded text-white"
                  />
                </div>
              </div>

              <div className="p-2">
                <label className=" mb-1 text-sm">Email address</label>
                <div className="flex items-center p-2  border boder rounded ">
                  <span className="mr-2">{<FiMail />}</span>
                  <input
                    type="email"
                    placeholder="patternsreact@gmail.com"
                    className=" "
                  />
                </div>
              </div>

              <div className="flex justify-end  border-t py-4 pr-4   boder space-x-2">
                <button
                  type="button"
                  className="ml-4 border boder bg-white text-black cursor-pointer  px-4 py-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="plan-btn"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        );
      case "Channel Information":
        return (
          <div className="bg-white  flex flex-col p-4   sm:flex-row  px-18">
            <div className="w-2xl">
              <h2 className="heading-title">
                Channel Info
              </h2>
              <p className="p mb-6">
                {" "}
                Update your Channel details here.
              </p>
            </div>

            <div className="   w-full border rounded-2xl boder  flex items-center justify-center">
              <div className="w-full  p-3 rounded-lg  space-y-6">
                <div className="w-full">
                  <label className=" text-sm font-medium mb-1">Username</label>
                  <div className="flex mt-1">
                    <span className=" items-center px-3  rounded-l-md border boder">
                      vidplay.com/
                    </span>
                    <input
                      type="text"
                      value="reactpatterns"
                      placeholder="reactpatterns"
                      className="w-full px-3 py-2 rounded-r-md  border boder "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    value="I'm a Product Designer..."
                    placeholder="I'm a Product Designer..."
                    className="w-full p-3  border boder rounded-md  resize-none"
                  />
                </div>

                <div className="w-full ">
                  <label className=" text-sm font-medium mb-1">Font</label>
                  <div className=" w-full items-center space-x-2">
                    <select className="border w-78 bg text-white boder  px-3 py-2 rounded-md">
                      <option>Regular</option>
                      <option>Bold</option>
                      <option>Italic</option>
                    </select>
                  </div>
                  <div></div>
                </div>

                <label className="block text-sm font-medium mb-1">
                  Timezone
                </label>
                <div className="flex">
                  {/* <span className="mr-2">{<FiMail />}</span> */}
                  <select className="w-full border bg border-gray-600 text-white px-3 py-2 rounded-md">
                    <option>
                      (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                    </option>
                    <option>(UTC+01:00) Berlin</option>
                    <option>(UTC-05:00) New York</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4 py-2 px-4">
                  <button
                    type="button"
                    className="ml-4 border boder bg-white text-black cursor-pointer  px-4 py-3"
                  >
                    Cancel
                  </button>
                  <button className="plan-btn  ">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Change Password":
        return (
          <div className="bg-white  flex  flex-col p-4 w-full sm:flex-row px-18">
            <div className="w-2xl">
              <h2 className="heading-title">
                Password
              </h2>
              <p className="pmb-6">
                Please enter your current password to change your password.
              </p>
            </div>

            <form className="rounded-lg border boder w-full space-y-4">
              <div className="p-2">
                <label className="block mb-1 text-sm">Current password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full p-2 border boder rounded  "
                />
              </div>

              <div className="p-2">
                <label className="block mb-1 text-sm">New password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full p-2 border boder rounded "
                />
                <p className="text-xs  mt-1">
                  Your new password must be more than 8 characters.
                </p>
              </div>

              <div className="p-2">
                <label className="block mb-1 text-sm">Confirm password</label>
                <input
                  type="password"
                  placeholder="Re-enter new password"
                  className="w-full p-2 border boder rounded "
                />
              </div>

              <div className="flex justify-end border-t py-4 px-4 border-gray-200 space-x-2">
                <button
                  type="button"
                  className="ml-4 border boder bg-white text-black cursor-pointer  px-4 py-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="plan-btn"
                >
                  Update password
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white pb-6">
      <div>
        <img
          src="https://cloudinary-marketing-res.cloudinary.com/image/upload/ar_2.5,c_fill,g_auto,w_1300/q_auto/f_auto/hiking_dog_mountain.jpg"
          className="w-full h-96"
          alt=""
        />
      </div>
      <div className=" px-2 sm:flex  justify-between sm:px-15 ">
        <div className="flex  gap-4 mt-7 ">
          <img
            src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5"
            alt="Channel"
            className="rounded-full  border-2 border-white -mt-17"
          />
          <div>
            <h1 className="heading-title">React Patterns</h1>
            <p className="p">@reactpatterns</p>
          </div>
        </div>
        <div className="flex flex-col mt-2 justify-center">
          <button
            onClick={handleClick}
            className={`plan-btn transition-transform duration-300 ${
              isBouncing ? "animate-bounce" : ""
            }`}
          >
            View Channel
          </button>
        </div>
      </div>
      <div className="w-full mx-auto mt-8">
        <div className="flex border-b-3 mx-12  border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              scroll={{ x: 1000 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1  text-center  font-semibold transition-colors duration-200 ${
                activeTab === tab.id
                  ? "border-b-2 mx-10 mb-2 p-2  active text-white"
                  : "text-gray-400 font-light  "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className=" bg-gray-50  rounded-b-md p mt-2">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfoPage;
