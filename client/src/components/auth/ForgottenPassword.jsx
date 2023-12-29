import { useState } from "react";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmitForgotPassword = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <h1 className="text-3xl">Forgotten Password</h1>
        <form onSubmit={handleSubmitForgotPassword}>
          <div className="w-full h-20 flex flex-col gap-5 ">
            <input
              className="bg-slate-200 rounded-md p-2 mt-10"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="abc@gmail.com"
              value={email}
            />
          </div>

          <button
            className="w-full text-lg rounded-lg p-3 h-10 flex mt-5 items-center justify-center  bg-slate-400 text-white"
            type="submit"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
