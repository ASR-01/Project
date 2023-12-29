/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import react from "../../assets/react.png";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { GiCrossedBones } from "react-icons/gi";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openChangePhotoModal = () => {
    setIsModalOpen(true);
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

  const handleModalForm = (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-start my-10 items-center">
      <h1 className="font-bold text-4xl">Profile</h1>
      <div className="flex  justify-center gap-12 w-full mt-6 items-center">
        <div className="flex flex-col justify-center gap-2 items-center">
          <div className="w-[11vw] rounded-full bg-slate-700">
            <img className="rounded-full" src={avatar} />
          </div>
          <button
            className="text-red-300 font-bold text-2xl"
            onClick={openChangePhotoModal}
          >
            Change Photo
          </button>
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
        <div className="flex flex-wrap w-full items-center p-10">
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

      {isModalOpen && (
        <ChangePhotoComponent
          handleModalForm={handleModalForm}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Profile;

function ChangePhotoComponent({ handleModalForm, setIsModalOpen }) {
  const closeChangePhotoModal = () => {
    setIsModalOpen(false);
  };

  
  const [image, setImage] = useState("");
  const [ImagePreview, setImagePreview] = useState("");

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      console.log("File loaded successfully");
      setImagePreview(reader.result);
      setImage(file);
    };

    reader.onerror = (error) => {
      console.error("Error occurred while reading the file:", error);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      className="fixed flex justify-center items-center inset-0 bg-gray-800 bg-opacity-50 w-full h-screen z-30"
      onClick={closeChangePhotoModal}
    >
      <div className="flex flex-col justify-start items-center h-[30vh] w-[40vw] bg-white">
        <h1 className="text-2xl font-bold py-3">Change Photo</h1>
        <form onSubmit={(e) => handleModalForm(e, image)}>
          {ImagePreview && <img src={ImagePreview} className="w-[10vw]" />}
          <div className="mt-6 w-full">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-slate-500 hover:bg-slate-700 text-white font-bold px-[10vw] py-3 rounded-lg"
            >
              Upload File
            </label>
            <input
              id="file-upload"
              type="file"
              className=""
              onChange={changeImage}
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
            <button onClick={closeChangePhotoModal}>
              {" "}
              <GiCrossedBones />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
