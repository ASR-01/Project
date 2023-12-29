import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen  w-full gap-10">
        <div className="text-2xl">
          Welcome to <span className="font-semibold">COURSE-MART</span>
        </div>
        <form onSubmit={handleLoginSubmitForm}>

        <div className="w-full h-20 flex flex-col gap-5 ">
          
          <label className="text-xl" htmlFor="name">
            Name
          </label>
          <input
            className="bg-slate-200 rounded-md p-2"
            type='text'
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="enter your name"
            value={name}
          />
        </div>

        <div className="w-full h-20 flex flex-col gap-5 mt-5">
          
          <label className="text-xl" htmlFor="Email">
            Email
          </label>
          <input
            className="bg-slate-200 rounded-md p-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="abc@gmail.com"
            value={email}
          />
        </div>



          <div className="w-full h-20 flex flex-col gap-5 mt-5">
            <label className="text-xl" htmlFor="password">
              password
            </label>
            <input
              className="bg-slate-200 rounded-md p-2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="enter your password"
              value={password}
            />
          </div>
          <button  className="w-full text-xl rounded-lg p-3 h-10 flex mt-5 items-center justify-center  bg-slate-400 text-white" type="submit">Register</button>
        </form>
        <div className="text-xl">
          Already Registered ?{" "}
          <Link className=" text-slate-500 font-bold" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
