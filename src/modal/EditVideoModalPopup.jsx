import React  from 'react';
import { FiX, FiUpload } from "react-icons/fi";

const EditVideoModalPopup = () => {
    

  return (
    <div className="flex items-center justify-center p-4">
      <div className="active rounded-lg w-full max-w-xl p-6 relative bg">
        <button className="absolute top-3 right-3 heading-two ">
          <FiX />
        </button>

        <h2 className="heading-two">Edit Video</h2>
        <p className="p">Share where you’ve worked on your profile.</p>

       
        <div className="mb-4">
          <label className="heading-two mb-2 block">Thumbnail*</label>
          <label htmlFor="upload" className="block border border-dashed border-gray-400 rounded-md cursor-pointer">
            <div className="flex flex-col items-center justify-center py-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/4c10b7f5-f630-42e5-a1c1-315ffc182774.jpg"
                alt="Thumbnail Preview"
                className="w-full h-48 object-cover rounded"
              />
              <div className="mt-2  heading-two flex items-center gap-2">
                <FiUpload /> Upload Thumbnail
              </div>
            </div>
            <input
              id="upload"
              type="file"
              accept="image/*"
              className="hidden"
              
            />
          </label>
        </div>

        
        <div className="mb-4">
          <label className="heading-two">Title*</label>
          <input
            type="text"
            className="w-full p-2 rounded heading-two border"
            placeholder="State Management with Redux"
          />
        </div>

       
        <div className="mb-4">
          <label className="heading-two">Description*</label>
          <textarea
            rows="4"
            className="w-full p-2 rounded heading-two border"
            placeholder="State Management with Redux is a comprehensive guidebook. State Management with Redux is a comprehensive guidebook. State Management with Redux is a comprehensive guidebook"
          />
        </div>

     
        <div className="flex  justify-center gap-2 mt-5">
        <button    className="btn-signup w-full ml-0 " > Cancle</button>
          <button className="btn-signup px-6 py-2 w-full   ">Finish</button>
        </div>
      </div>
    </div>
  );
};

export default EditVideoModalPopup;
