import { useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <h1 className="text-3xl">Change Password</h1>
        <form onSubmit={handleSubmitChangePassword}>
          <div className="w-full h-20 flex flex-col gap-5 ">
            <input
              className="bg-slate-200 rounded-md p-2 mt-10"
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              name="password"
              placeholder="Old password"
              value={oldPassword}
            />
          </div>

          <div className="w-full h-20 flex flex-col gap-5 ">
            <input
              className="bg-slate-200 rounded-md p-2 mt-10"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              name="password"
              placeholder="New password"
              value={newPassword}
            />
          </div>

          <button
            className="w-full text-lg rounded-lg p-3 h-10 flex mt-5 items-center justify-center  bg-slate-400 text-white"
            type="submit"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
