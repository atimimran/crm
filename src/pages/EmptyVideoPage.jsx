import React from "react";
import { FiVideo } from "react-icons/fi";
export const EmptyVideoPage = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center text-white min-h-screen w-full bg-white">
            <div className="flex items-center justify-center mb-4">
                <div className="bg rounded-full p-4">
                    <i className="fas fa-play text-2xl">{<FiVideo />}</i>
                </div>
            </div>
            <h1 className="heading-title ">No videos available</h1>
            <p className="p text-black  " >There are no videos here available. Please try to search something else.</p>
        </div>
    );
};

export default EmptyVideoPage;
