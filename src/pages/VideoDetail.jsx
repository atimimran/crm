import React from "react";
import { useParams } from "react-router-dom";
import { FiThumbsUp , FiThumbsDown , FiSave , FiDownload } from "react-icons/fi";
const VideoDetail = () => {
  const { id } = useParams();

  return (
    <div className="bg-white min-h-screen p-4 ">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="w-full aspect-video boder mb-4">
            <iframe
              className="border-2 boder w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="border-1 boder p-4 ">
            <h1 className="heading-title">
              How to Learn React in 2025
            </h1>
            <p className="mb-2 p">
              1.5M views • 2 days ago
            </p>
          

            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Channel"
                  className="  w-20 h-20 rounded-full"
                />
                <div>
                  <p className="heading-title">CodeWithBro</p>
                  <p className="p">1.2M subscribers</p>
                </div>
                <button className="plan-btn">
                  Subscribe
                </button>
              </div>

              <div className="flex space-x-3 text-sm text-white ">
                <button className="px-6 py-1 bg rounded hov-bg">
                  {<FiThumbsUp className="inline " />} Like
                </button>
                <button className="px-3 py-1 bg rounded hov-bg">
                {<FiThumbsDown className="inline " />}  Dislike
                </button>
                <button className="px-3 py-1 bg rounded hov-bg">
                {<FiSave className="inline " />} Save
                </button>
                <button className="px-3 py-1 bg rounded hov-bg">
                {<FiDownload className="inline " />} Download
                </button>
              </div>
            </div>

            <div className="bg  p-4 rounded mb-6">
              <p className="text-white">
                React tutorial for beginners. Step-by-step guide to help you
                learn React in 2025.
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading-title">Comments</h2>
            <div className="space-y-4">
              <div>
                <p>
                  <strong>Ali:</strong> This is so helpful!
                </p>
              </div>
              <div>
                <p>
                  <strong>Sara:</strong> Amazing content, subbed!
                </p>
              </div>
              <div>
                <p>
                  <strong>John:</strong> Great explanation!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="heading-title">Up Next</h3>

          <div className="border-1 w-120 boder flex space-x-3 ">
            <img
              src="https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg"
              className="w-50 h-30 object-cover rounded"
              alt="Related video"
            />
            <div>
              <h1 className="heading-title" >Mastering React Hooks</h1>
             
              <p className="p mb-0">Teckhub</p>
              <p className="p m-0 ">1.5M views • 2 days ago</p>
            </div>
          </div>

          <div className="border-1  boder w-120 flex space-x-3 mt-5 ">
            <img
              src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              className="w-50 h-30 object-cover rounded"
              alt="Related video"
            />
            <div>
            <h1 className="heading-title" >React Router in 10 Minutes Only Here</h1>
             
              <p className="p">ReactMaster</p>
              <p className="p m-0">1.5M views • 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
