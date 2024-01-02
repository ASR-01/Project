/* eslint-disable react/prop-types */

import { useState } from "react";
import { GiCrossedBones } from "react-icons/gi";

const Photo_upload = ({ handleCloseModal, handleUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload(selectedFile);
    setSelectedFile(null);
    handleCloseModal();
  };

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-gray-800 bg-opacity-50 w-full h-screen">
      <div className="flex flex-col justify-start items-center min-h-[30vh] w-[40vw] bg-white z-40">
        <h1 className="text-2xl font-bold py-3">Change Photo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-6 w-full">
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 bg-white text-gray-700"
            />
          </div>

          <div className="mt-6 w-full">
            <button
              type="submit"
              className="cursor-pointer bg-slate-300 text-slate-500 font-bold px-[9.5vw] py-2 rounded-lg"
            >
              Change Photo
            </button>
          </div>

          <div className="relative flex justify-end text-3xl left-[5rem] bottom-[9rem]">
            <button onClick={handleCloseModal}>
              {" "}
              <GiCrossedBones />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Photo_upload;
