import React, { useState } from "react";
import { FiFilm ,FiX , FiCheck} from "react-icons/fi";
const UploadedVideoSuccessfullyModalPopup = () => {
     const [showbutton, setShowSidebar] = useState(true);
      
      const toggleSidebar = () => {
        setShowSidebar(showbutton);
      };
  return (
    <>
    <div className='flex bg-gray-500 rounded-sm items-center py-10 justify-center' >
        <div className='bg-gray-950 p-5  w-5/6 sm:w-2xl rounded-2xl  border-gray-400  border '  >
            <button onClick={toggleSidebar} className="text-white "  >
                        <FiX size={24} />
                      </button>
            <h1 className='text-white font-bold text-2xl' >Uploaded Video</h1>
            <p className='text-white' >Track your video uploading process.</p>
            <div className="w-3/3 sm:w-1x1   " >
            <div class="  p-4  border-white border mt-4 flex space-x-4">
    <div class="flex-shrink-0">
      <div class="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center">
        {<FiFilm/>}
      </div>
    </div>
    <div class="flex flex-col justify-center w-4xl  text-white">
      <span class="text-sm font-normal">Dashboard prototype recording.mp4</span>
      <span class="text-xs font-light mt-0.5">16 MB</span>
      <div class="flex items-center space-x-2 mt-2 text-white text-sm font-normal">
   <div class="w-8 h-8 text-black rounded-full bg-purple-400 flex items-center justify-center">
           {<FiCheck/>}
         </div>
        <span>Uploaded Successfully</span>
        
      </div>
      
    </div>
    
  </div>
  

            </div>
            <div className=" md:flex items-center gap-4 mt-5  ">
            <button    className="border text-white border-white mb-2 sm:mb-0 px-25 py-3 cursor-pointer" > Cancle</button>
          <button    className="  px-25 py-3 bg-purple-400 " > Finish</button>


        
        </div>  
        </div>
    </div>
    </>
  )
}

export default UploadedVideoSuccessfullyModalPopup;