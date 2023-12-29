
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen  w-full gap-10">
      
        <div className="text-4xl font-bold">
          Contact Us
        </div>
        <form onSubmit={handleContactSubmitForm}>

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
              Message
            </label>
            <textarea
              className="bg-slate-200 rounded-md p-20  mb-10 text-start"
              onChange={(e) => setMessage(e.target.value)}
              rows="4" cols="40"
              placeholder="your message"
              value={message}
            >
           </textarea>
          </div>
          <button  className="w-full text-xl rounded-lg p-3 h-10 flex mt-[8vw] items-center justify-center  bg-slate-400 text-white" type="submit">Send</button>
        </form>
        <div className="text-xl">
          Request a Course ?{" "}
          <Link className=" text-slate-500 font-bold" to={"/request-new-course"}>
            Click
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact
