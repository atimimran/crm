import React, { useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
// import { FiVideo } from "react-icons/fi";
// import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const ChannelEmptyVideoPage = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [isBouncing, setIsBouncing] = useState(false);

  const tabs = [
    { id: "videos", label: "Videos" },
    { id: "playlist", label: "Playlist" },
    { id: "tweets", label: "Tweets" },
    { id: "subscribed", label: "Subscribed" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "videos":
        return (
          <div className="bg-white  px-4 ">
            <div className="grid py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
              <div className=" ">
                <div className="relative">
                  <img
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-full aspect-video object-cover "
                  />
                  <div className="  bg-black absolute bottom-0 w-15 m-2 text-center rounded-sm right-0 p-1    ">
                    <p className="text-sm text-white   ">11:00</p>
                  </div>
                </div>

                <div className="pt-3">
                  <h1 className="heading-title mb-1">
                    How to Learn React in 2025 With us
                  </h1>
                  <p className="mb-4">
                    1.5M views • 2 days ago
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="relative">
                  <img
                    src="https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-full aspect-video object-cover "
                  />
                  <div className="  bg-black absolute bottom-0 w-15 m-2 text-center rounded-sm right-0 p-1    ">
                    <p className="text-sm text-white   ">20:45</p>
                  </div>
                </div>
                <div className="pt-3">
                  <h1 className="heading-title mb-1">
                    How to Learn React in 2025 With us Join Today We Are With
                    You
                  </h1>
                  <p className=" mb-4">
                    1.5M views • 2 days ago
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="relative">
                  <img
                    src="https://cloudinary-marketing-res.cloudinary.com/image/upload/ar_2.5,c_fill,g_auto,w_1300/q_auto/f_auto/musician_interview.jpg"
                    alt="Video Thumbnail"
                    className="w-full aspect-video object-cover "
                  />
                  <div className="  bg-black absolute bottom-0 w-15 m-2 text-center rounded-sm right-0 p-1    ">
                    <p className="text-sm text-white   ">10:86</p>
                  </div>
                </div>
                <div className="pt-3">
                  <h1 className="heading-title">
                    Tailwind CSS v4 Full Course 2025 | Master Tailwind in One
                    Hour
                  </h1>
                  <p className=" mb-4">
                    1.5M views • 2 days ago
                  </p>
                </div>
              </div>

              <div className=" ">
                <div className="relative">
                  <img
                    src="https://cloudinary-marketing-res.cloudinary.com/image/upload/ar_2.5,c_fill,g_auto,w_1300/q_auto/f_auto/graphic_wall_pose.jpg"
                    alt="Video Thumbnail"
                    className="w-full aspect-video object-cover "
                  />
                  <div className="  bg-black absolute bottom-0 w-15 m-2 text-center rounded-sm right-0 p-1    ">
                    <p className="text-sm text-white   ">01:65</p>
                  </div>
                </div>
                <div className="pt-3">
                  <h1 className=" heading-title">
                    Custom themes with TailwindCSS in under 9 minutes
                  </h1>
                  <p className=" mb-4">
                    1.5M views • 2 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "playlist":
        return (
          <div className="bg-white px-4 ">
            <div className="grid py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-10">
              <div className=" "> 
                <div className="relative">
                  <img
                    src="https://cloudinary-marketing-res.cloudinary.com/image/upload/ar_2.5,c_fill,g_auto,w_1300/q_auto/f_auto/musician_interview.jpg  "
                    alt="Video Thumbnail"
                    className="w-full aspect-video object-cover "
                  />
                  <div className=" absolute bottom-0  w-full backdrop-blur-md   border-t-2 flex justify-between bg-black opacity-80 text-white  px-2 py-1 rounded">
                    <div>
                      <h1 className="text-white text-2xl">Playlist</h1>
                      <p className="mb-4">
                        1.5M views • 2 days ago
                      </p>
                    </div>
                    <div className="  flex items-center  px-2 py-1 ">
                      <p className="mb-4">24 Videos</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h1 className="heading-title">
                    How to Learn React in 2025 With us
                  </h1>
                  <p className="">
                    Full Courses join us today
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="relative">
                  <img
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-full aspect-video object-cover "
                  />
                  <div className=" absolute bottom-0 w-full backdrop-blur-md   border-t-2 flex justify-between bg-black opacity-80 text-white  px-2 py-1 rounded">
                    <div>
                      <h1 className="text-white text-2xl">Playlist</h1>
                      <p className=" mb-4">
                        1.5M views • 2 days ago
                      </p>
                    </div>
                    <div className="   px-2 py-1  flex items-center ">
                      <p className="mb-4">24 Videos</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h1 className="heading-title">
                    How to Learn React in 2025 With us
                  </h1>
                  <p className="">
                    Full Courses join us today
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "tweets":
        return (
          <div class=" bg-white px-16 pt-2 h-96   ">
            <div class="flex space-x-4 border-b-1 pt-4 boder pb-6 ">
              <img
                alt="Profile"
                class="w-20  h-25 sm:h-20  rounded-full "
                src="https://storage.googleapis.com/a1aa/image/4c10b7f5-f630-42e5-a1c1-315ffc182774.jpg"
                width="40"
              />
              <div class="">
                <div class="flex   space-x-2 text-sm font-semibold text-white">
                  <h1 className="heading-title" >React Patterns</h1>
                 
                  <span class="font-normal text-gray-400">5 hours ago</span>
                </div>
                <p class="p">
                  Exploring the latest features in JavaScript ES11! The language
                  keeps evolving. #JavaScript #ES11
                </p>
                <div class="mt-2 flex space-x-6  text-white text-sm ">
                  <button class="flex items-center space-x-1 hover:text-purple-400  cursor-pointer">
                    <span>{<FiThumbsUp className="inline" />} 425</span>
                  </button>
                  <button class="flex cursor-pointer   hover:text-purple-400 focus:outline-none">
                    <span>{<FiThumbsUp className="inline" />} 87</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex space-x-4 pt-4 border-b-1 border-gray-400 pb-6 ">
              <img
                alt="Profile"
                class="w-20  h-25 sm:h-20 rounded-full "
                src="https://cloudinary-marketing-res.cloudinary.com/image/upload/ar_1.0,c_fill,g_auto,w_867/q_auto/f_auto/musician_interview.jpg"
              />
              <div class="">
                <div class="flex   space-x-2 text-sm font-semibold text-white">
                <h1 className="heading-title" >Tailwind Course</h1>
               
                  <span class="font-normal text-gray-400">16 hours ago</span>
                </div>
                <p class="p">
                  Exploring the latest features in JavaScript ES11! The language
                  keeps evolving.#JavaScript #ES11
                </p>
                <div class="mt-2 flex space-x-6  text-white text-sm ">
                  <button class="flex items-center space-x-1 hover:text-purple-400  cursor-pointer">
                    <span>{<FiThumbsUp className="inline" />} 255</span>
                  </button>
                  <button class="flex cursor-pointer   hover:text-purple-400 focus:outline-none">
                    <span>{<FiThumbsUp className="inline" />} 128</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "subscribed":
        return (
          <div className="bg-white h-96 ">
            <div className=" mx-12 mt-5  flex items-center  relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-white absolute left-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className=" w-full pl-10 pr-4 bg py-2 border  text-white rounded-md "
              />
            </div>
            <div className="flex justify-between pl-8 px-12 mt-8">
              <div className="flex space-x-2">
                <div>
                  <img
                    alt="Profile"
                    class="w-20  h-20 sm:h-20  rounded-full "
                    src="https://storage.googleapis.com/a1aa/image/4c10b7f5-f630-42e5-a1c1-315ffc182774.jpg"
                    width="40"
                  />
                </div>
                <div className="flex flex-col justify-center space-x-0">
                  <h1 className="heading-title ">
                       Code Master
                  </h1>
                  <p className="p ">20K Subscribers</p>
                </div>
              </div>
              <div className="mt-3">
                <button className=" plan-btn">
                  Subscribed
                </button>
              </div>
            </div>
            <div className=" flex justify-between pl-8 px-12 mt-6">
              <div className="flex space-x-2">
                <div>
                  <img
                    alt="Profile"
                    class="w-20  h-20 sm:h-20  rounded-full "
                    src="https://storage.googleapis.com/a1aa/image/4c10b7f5-f630-42e5-a1c1-315ffc182774.jpg"
                    width="40"
                  />
                </div>
                <div className="flex flex-col justify-center space-x-0">
                  <h1 className="heading-title">
                     Code Master
                  </h1>
                  <p className="p">20K Subscribers</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="ml-4 border boder bg-white text-black cursor-pointer  px-4 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        );

      //     <div className="flex flex-col items-center  pt-6    text-center text-white  w-full bg-black">
      //     <div className="flex items-center justify-center mb-4">
      //         <div className="bg-purple-300 rounded-full p-4">
      //             <i className="fas fa-play text-2xl text-purple-700">{<FiVideo />}</i>
      //         </div>
      //     </div>
      //     <h1 className="font-bold text-lg">No subscribed available</h1>
      //     <p>There are no subscribed here available. Please try to search something else.</p>
      // </div>;
      default:
        return null;
    }
  };

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };
  return (
    <main className="bg-white pb-6  ">
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
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Channel"
            className="rounded-full  border-2 border-white -mt-17"
          />
          <div>
            <h1 className="heading-title">React Patterns</h1>
            <p className=" p ">@reactpatterns</p>
            <p className=" p ">
              600k Subscribers · 220 Subscribed
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-2 justify-center">
          <button
            onClick={handleClick}
            className={`plan-btn transition-transform duration-300 ${
              isBouncing ? "animate-bounce" : ""
            }`}
          >
            <FiThumbsUp className="inline" /> Subscribe
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
                  ? "border-b-2 mx-10 mb-2 p-2 active cursor-pointer     text-white"
                  : "text-gray-400 font-light cursor-pointer   "
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
    </main>
  );
};

export default ChannelEmptyVideoPage;
