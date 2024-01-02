import { Link } from "react-router-dom";
import Img2 from "../../assets/avatar.jpg";
import { data } from "../../assets/docs/terms-and-conditions";
import { RiSecurePaymentFill } from "react-icons/ri";
const About = () => {
  return (
    <div className="w-full m-h-screen flex justify-center items-start mt-10 mb-10">
      <div className="w-[50%] flex justify-center items-center flex-col shadow-2xl">
        <h1 className="text-5xl font-bold my-10">About Us</h1>
        <div className="flex items-center justify-between gap-10 mb-10">
          <div className="w-[8vw]">
            <img src={Img2} />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl font-bold">Aditya Singh Rawat</h1>
            <p>Hi i am Aditya Singh Rawat i am a FullStack web developer</p>
          </div>
        </div>
       
        <div className="flex justify-center gap-10 items-center w-full mt-10">
          <p className="w-[30vw] text-l">
            Join and learn the best skills to start your Journey of becoming
            SuccessFull we provide best tutors and management for your smooth
            Journey
          </p>

          <Link to={"/subscribe"} className="text-slate-700 font-bold text-xl ">
            CHECKOUT PLANS
          </Link>
        </div>

        <div className="flex flex-col items-center mt-7 ">
          <div className="w-[35vw] box-border ">
            <h1 className="mb-5 font-bold text-2xl">Terms and Conditions</h1>

            <div className="box-border  overflow-y-scroll  h-[25vh]">
              <h1>{data}</h1>
              <p className="my-5 text-xl font-bold">
                Refund Only available for 7 Days *
              </p>
            </div>

            <div className="flex items-center gap-2 ">
              <div className="text-2xl ">
                {" "}
                <RiSecurePaymentFill />
              </div>
              <div>
                <h2 className="text-xl font-bold my-5">
                  {" "}
                  Payment Secured by RazorPay
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
