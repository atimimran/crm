import React from 'react';
import { FiUpload } from "react-icons/fi";

const UploadVideoModalPopup = () => {
  return (
    <>
      <div className="border bg-black h-full border-white">
        <div className="flex justify-between items-center px-4 py-3 border-b border-white">
          <h2 className="font-semibold text-white text-base">Upload Videos</h2>
          <button className="btn-signup" type="button">
            Save
          </button>
        </div>

        <form className="p-6 space-y-6">
          <label
            htmlFor="upload"
            className="block border border-dashed border-white max-w-3xl mx-auto cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center py-16">
              <div
                className="bg-purple-400 text-purple-600 rounded-full p-6 mb-4"
                aria-hidden="true"
              >
                <FiUpload />
              </div>
              <p className="font-semibold text-white mb-1">
                Drag and drop video files to upload
              </p>
              <p className="text-gray-400 mb-4 max-w-xs text-center">
                Your videos will be private until you publish them.
              </p>
              <button
                type="button"
                className="btn-signup"
              >
                Select Files
              </button>
              <input
                id="upload"
                type="file"
                multiple
                className="hidden"
                aria-label="Upload video files"
                required
              />
            </div>
          </label>

          <div className="max-w-3xl mx-auto space-y-4">
            <label className="block text-white text-sm" htmlFor="thumbnail">
              Thumbnail<span className="text-purple-400">*</span>
            </label>
            <input
              id="thumbnail"
              type="file"
              className="bg-black border border-white text-white px-3 py-2 w-full max-w-3xl file:bg-purple-400 file:text-black file:px-4 file:py-2 file:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]"
              required
            />

            <label className="block text-white text-sm" htmlFor="title">
              Title<span className="text-purple-400">*</span>
            </label>
            <input
              id="title"
              type="text"
              className="bg-black border border-white text-white px-3 py-2 w-full max-w-3xl"
              required
            />

            <label className="block text-white text-sm" htmlFor="description">
              Description<span className="text-purple-400">*</span>
            </label>
            <textarea
              id="description"
              rows="6"
              className="bg-black border border-white text-white px-3 py-2 w-full max-w-3xl resize-none"
              required
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadVideoModalPopup;
