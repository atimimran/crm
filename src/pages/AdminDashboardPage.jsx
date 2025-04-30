import React from "react";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaEdit, FaTrash } from "react-icons/fa";
import { FiEye, FiUser, FiHeart } from "react-icons/fi";
const AdminDashboardPage = () => {
  // const videos = [
  //   {
  //     status: 'Published',
  //     image: 'https://via.placeholder.com/40',
  //     title: 'JavaScript Fundamentals: Variables and Data Types',
  //     likes: 921,
  //     dislikes: 49,
  //     date: '9/22/2023',
  //     toggle: true,
  //   },
  //   {
  //     status: 'Unpublished',
  //     image: 'https://via.placeholder.com/40',
  //     title: 'React Hooks Explained: useState and useEffect',
  //     likes: 2520,
  //     dislikes: 279,
  //     date: '9/21/2023',
  //     toggle: false,
  //   },
  //   {
  //     status: 'Unpublished',
  //     image: 'https://via.placeholder.com/40',
  //     title: 'Mastering Async Await in JavaScript',
  //     likes: 943,
  //     dislikes: 244,
  //     date: '9/20/2023',
  //     toggle: false,
  //   },
  //   {
  //     status: 'Unpublished',
  //     image: 'https://via.placeholder.com/40',
  //     title: 'Building a ToDo App with React and Context API',
  //     likes: 760,
  //     dislikes: 302,
  //     date: '9/19/2023',
  //     toggle: false,
  //   },
  //   {
  //     status: 'Unpublished',
  //     image: 'https://via.placeholder.com/40',
  //     title: 'Responsive Web Design with Tailwind CSS',
  //     likes: 2630,
  //     dislikes: 317,
  //     date: '9/18/2023',
  //     toggle: false,
  //   },
  //   {
  //     status: 'Published',
  //     image: 'https://via.placeholder.com/40',
  //     title: 'Getting Started with Express.js',
  //     likes: 137,
  //     dislikes: 107,
  //     date: '9/17/2023',
  //     toggle: true,
  //   },
  //   {
  //     status: 'Unpublished',
  //     image: 'https://via.placeholder.com/40',
  //     title: 'State Management with Redux',
  //     likes: 1250,
  //     dislikes: 386,
  //     date: '9/16/2023',
  //     toggle: false,
  //   }
  // ];
  return (
    <>
      <main className="flex-1 bg-white  p-6">
        <h1 className="heading-title ">Welcome Back, React Patterns</h1>
        <p className="p mb-2 ">Seamless Video Management, Elevated Results.</p>

        <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-4 mb-6">
          <div className="active p-4 ">
            <div className="bg w-13 my-2 rounded-full p-4">
              {<FiEye size={20} />}
            </div>

            <p className="text-sm">Total views</p>
            <h2 className="text-2xl  font-semibold">221,234</h2>
          </div>
          <div className="active p-4 ">
            <div className="bg w-13 my-2 rounded-full p-4">
              {<FiUser size={20} />}
            </div>
            <p className="text-sm">Total subscribers</p>
            <h2 className="text-2xl font-semibold">4,053</h2>
          </div>
          <div className="active p-4 ">
            <div className="bg w-13 my-2 rounded-full p-4">
              {<FiHeart size={20} />}
            </div>
            <p className=" text-sm  text-custom-primary">Total likes</p>
            <h2 className="text-2xl font-semibold">63,021</h2>
          </div>
        </div>

        <div className="p-0 overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300 rounded-lg">
            <thead className="active">
              <tr>
                <th className="heading-two p-3 text-left">Status</th>
                <th className="heading-two text-left">Publish</th>
                <th className="heading-two">Uploaded</th>
                <th className="heading-two  ">Rating</th>
                <th className="heading-two text-left">Date uploaded </th>
                <th className="heading-two  "></th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t bg ">
                <td className="p-3">
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6  peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:bg rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:bg"></div>
                  </label>
                </td>

                <td className="p-3">
                  <span className="px-2 py-1 rounded  heading-two active">
                    Published
                  </span>
                </td>

                <td className="p-3">
                  <div className=" sm:flex items-center justify-center gap-3">
                    <img
                      src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5"
                      alt="thumb"
                      className="w-16 h-16   rounded-full "
                    />
                    <p
                      className=" heading-two font-medium"
                      title="This is a very long video title about MERN stack that should truncate nicely"
                    >
                      This is a very long video title about MERN stack should
                      truncate nicely
                    </p>
                    <div></div>
                  </div>
                </td>

                <td className="p-3   ">
                  <div className="sm:flex space-x-4  justify-center">
                    <div
                      className="active heading-two rounded-full p-4 "
                 
                    >
                      921 likes
                    </div>
                    <div
                      className="active heading-two rounded-full p-4 "
                    
                    >
                      564 Dislikes
                    </div>
                  </div>
                </td>

                <td className="p-3 heading-two  ">2025-04-28</td>
                <td>
                  <div className="flex gap-2">
                    <FaTrash className="cursor-pointer heading-two" size={20} />
                    <FaEdit className=" cursor-pointer heading-two" size={20} />
                  </div>
                </td>
              </tr>
              <tr className="border-t boder bg ">
                <td className="p-3">
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6  peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:bg-amber-100 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:bg"></div>
                  </label>
                </td>

                <td className="p-3">
                  <span className="px-2 py-1 rounded  heading-two active">
                    UnPublished
                  </span>
                </td>

                <td className="p-3">
                  <div className=" sm:flex items-center justify-center gap-3">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/4c10b7f5-f630-42e5-a1c1-315ffc182774.jpg"
                      alt="thumb"
                      className="w-16 h-16   rounded-full   "
                    />
                    <p
                      className=" heading-two font-medium"
                      title="This is a very long video title about MERN stack that should truncate nicely"
                    >
                      How to create these types of file using new technolgy with us come start now
                    </p>
                    <div></div>
                  </div>
                </td>

                <td className="p-3   ">
                  <div className="sm:flex space-x-4  justify-center">
                    <div
                      className="active heading-two rounded-full p-4 "
                 
                    >
                      268 likes
                    </div>
                    <div
                      className="active heading-two rounded-full p-4 "
                    
                    >
                      100 Dislikes
                    </div>
                  </div>
                </td>

                <td className="p-3 heading-two  ">2024-20-08</td>
                <td>
                  <div className="flex gap-2">
                    <FaTrash className="cursor-pointer heading-two " size={20} />
                    <FaEdit className=" cursor-pointer heading-two " size={20} />
                  </div>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default AdminDashboardPage;
