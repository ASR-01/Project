/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import react from "../../assets/react.png";
import { MdDeleteOutline } from "react-icons/md";
import Photo_upload from "./Photo _Upload/Photo_upload";
import { useState } from "react";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = (file) => {

    setUploadedImage(URL.createObjectURL(file));
    setIsModalOpen(false); 
  };


  const user = {
    name: "Aditya",
    email: "Aditya@123",
    createdAt: String(new Date().toDateString()),
    role: "admin",
    Subscription: {
      status: "active",
    },
    playlist: [
      {
        course: 1,
        poster: react,
      },
    ],
  };

  const removeFromPlaylistHandler = () => {
    console.log("Removed");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-start my-10 items-center">
      <h1 className="font-bold text-5xl  text-left mr-[35vw] mb-11 ">Profile</h1>
      <div className="flex  justify-center gap-12 w-full mt-6 items-center">
        <div className="flex flex-col justify-center gap-2 items-center">
          <div className="w-[11vw] rounded-full bg-slate-700">
          {uploadedImage ? (
              <img className="rounded-full" src={uploadedImage} alt="Uploaded" />
            ) : (
              <img className="rounded-full" src={avatar} alt="Avatar" />
            )}
          </div>
          <button
            className="text-red-300 font-bold text-2xl"
            onClick={handleOpenModal}
          >
            Change Photo
          </button>
          {isModalOpen && (
            <Photo_upload
              handleCloseModal={handleCloseModal}
              handleUpload={handleUpload}
            />
          )}
        </div>

        <div className="flex flex-col gap-4 text-2xl">
          <h1>
            Name : <span>{user.name}</span>
          </h1>
          <h1>
            Email : <span>{user.email}</span>
          </h1>
          <h1>
            CreatedAt : <span>{user.createdAt.split("i")[1]}</span>
          </h1>

          <div className="flex flex-col  justify-start gap-4 items-center ">
            {user.role !== "admin" && (
              <div className="flex gap-3 items-center ">
                <h1>Subscription : </h1>
                {user.Subscription.status == "active" ? (
                  <>
                    <button className="text-xl font-bold bg-slate-400 p-3 rounded-md text-white">
                      Cancel Subscription
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="text-xl font-bold bg-slate-400 p-3 rounded-md text-white"
                      to={"/subscribe"}
                    >
                      Subscribe
                    </Link>
                  </>
                )}
              </div>
            )}

            <div className="flex gap-3">
              <Link
                className="text-xl font-bold bg-slate-400 p-3 rounded-md text-white"
                to={"/update-profile"}
              >
                Update Profile
              </Link>

              <Link
                className="text-xl ml-4 font-bold bg-slate-400 p-3 rounded-md text-white"
                to={"/change-password"}
              >
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-left w-[50%] my-6">Playlist</h1>
      {user.playlist.length > 0 && (
        <div className="flex flex-wrap w-full items-center px-10 ">
          {user.playlist.map((items) => (
            <div
              key={items.course}
              className="flex flex-col w-[12vw] border-2 shadow-xl m-3 p-2"
            >
              <img src={items.poster} className="object-contain" />
              <div className="flex items-center justify-between  my-3">
                <Link
                  to={`/courses/${items.course}`}
                  className="bg-slate-200 p-2 text-red-500 font-bold"
                >
                  Watch Now
                </Link>
                <button
                  className="bg-slate-200 p-2 text-red-500 text-3xl"
                  onClick={() => removeFromPlaylistHandler(items.course)}
                >
                  <MdDeleteOutline />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
