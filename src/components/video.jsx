import React from 'react';
import { Link } from 'react-router-dom';
import { FiThumbsUp } from "react-icons/fi";
const Video = () => {
  return (
    <>
    <div className="bg-black py-5 px-2 h-screen sm:px-6 lg:px-8">
      <div className="  grid grid-cols-2 max-w-8xl  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
      <Link to="/video/1" className="group border-1 p-2 border-gray-700">
  <img
    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    alt="Video Thumbnail"
    className="w-full aspect-video object-cover group-hover:opacity-80"
  />
  <div className="mt-3 flex items-start space-x-3">
    <img
      src="https://randomuser.me/api/portraits/men/75.jpg"
      alt="Channel Logo"
      className="w-10 h-10 rounded-full"
    />
    <div>
      <h1 className="text-md font-semibold text-white">
        How to Learn React in 2025
      </h1>
      <h2 className="text-sm text-white">CodeWithBro</h2>
      <p className="text-sm text-white">1.5M views • 2 days ago</p>
      <p className="text-sm text-white mt-1">React tutorial for beginners. Step-by-step guide.</p>
    </div>
  </div>
</Link>
        
        

      </div>
    </div>






{/* //////////////////////////////////////////// */}
 {/* ye ek layout hai tweets grid ka jss ko abhii mny  tweets k tab mein lagaya hai channelemtyvideo k page mein 
    <main class=" bg-black p-6   ">
   <div class="flex space-x-4 border-b-1 border-gray-400 pb-6 ">
    <img alt="Profile" class="w-20  rounded-full " src="https://storage.googleapis.com/a1aa/image/4c10b7f5-f630-42e5-a1c1-315ffc182774.jpg" width="40"/>
    <div class="">
     <div class="flex   space-x-2 text-sm font-semibold text-white">
      <span>
       React Patterns
      </span>
      <span class="font-normal text-gray-400">
       5 hours ago
      </span>
     </div>
     <p class="mt-1 text-base font-normal text-white leading-relaxed">
      Exploring the latest features in JavaScript ES11! The language keeps evolving.
      <i class="fas fa-lightbulb">
      </i>
      #JavaScript #ES11
     </p>
     <div class="mt-2 flex space-x-6  text-white text-sm ">
      <button class="flex items-center space-x-1 hover:text-purple-400  cursor-pointer">
      
       <span  >
      {<FiThumbsUp className='inline' />}   425
       </span>
      </button>
      <button class="flex cursor-pointer   hover:text-purple-400 focus:outline-none">
       
       <span>
       {<FiThumbsUp className='inline' />}  87
       </span>
      </button>
     </div>
    </div>
   </div>
  </main>




  /////////////////////////////////////
    {/* ye ek layout hai playlist grid ka jss ko abhii mny  playlist k tab mein lagaya hai channelemtyvideo k page mein 
    <div className="bg-black mt-10 px-4">
              <div className="grid py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <div  className=" ">
                    <div className="relative">
                      <img
                        src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        alt="Video Thumbnail"
                        className="w-full aspect-video object-cover "
                      />
                      <div className=" absolute top-45 w-full backdrop-blur-md   border-t-2 flex justify-between bg-black opacity-80 text-white  px-2 py-1 rounded">
                        <div>
                        <h1 className='text-white' >Playlist</h1>
                      <p className="text-sm text-gray-400 mb-4">
              1.5M views • 2 days ago
            </p>
            </div>
            <div className="  bg-opacity-70 text-xs px-2 py-1 rounded">
            <p className="text-sm text-white   mb-4">
             24 Videos
            </p>
                      </div>

                      
                    
                      </div>
                     
                    </div>
                    <div className="p-3">
                      <h1 className="text-white font-semibold text-sm mb-1">
                        How to Learn React in 2025 With us
                      </h1>
                      <p className="text-gray-400 text-xs">
                        Full Courses join us today
                      </p>
                    </div>
                  </div>
                 </div>
            </div> */}




  {/* ////////////////////////////////// */}
{/* ye ek layout hai video grid ka jss ko abhii mny  videos k tab mein lagaya hai channelemtyvideo k page mein  */}
{/* <div className='flex bg-black  ' >
  <div className='mx-10' >
  <div>
  <img
    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    alt="Video Thumbnail"
    className="w-85 aspect-video object-cover group-hover:opacity-80"
  />
  </div>
  <div>
  <h1 className="text-1xl font-medium text-white max-w-85  mb-2">
              How to Learn React in 2025 With us Full Courses
            </h1> <p className="text-sm text-gray-400 mb-4">
              1.5M views • 2 days ago
            </p>
  </div>
  </div>
  <div>
</div>
</div> */}










    </>


    
  );
};

export default Video;
