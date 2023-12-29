import { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmitUpdateProfile = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <h1 className="text-5xl">Update Profile</h1>
        <form onSubmit={handleSubmitUpdateProfile}>
          <div className="w-full h-20 flex flex-col gap-5 ">
            <input
              className="bg-slate-200 rounded-md p-3 mt-11"
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="New Name"
              value={name}
            />
          </div>

          <div className="w-full h-20 flex flex-col gap-5 ">
            <input
              className="bg-slate-200 rounded-md p-3 mt-11"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="New Email"
              value={email}
            />
          </div>

          <button
            className="w-full text-lg rounded-lg p-4 h-11 flex mt-5 items-center justify-center  bg-slate-400 text-white"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
