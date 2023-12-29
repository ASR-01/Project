import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-screen">
    <h1 className="text-5xl font-bold mb-10">You have a Pro Pack</h1>
    <div className="flex flex-col  shadow-2xl p-11 rounded-md">
    
      <div className="bg-slate-400 w-full text-center px-10 py-4 rounded-md">
        <h1 className="text-xl text-white">Payment Success</h1>
      </div>

      <div className="flex gap-7  flex-col mt-3 ">
        <h2 className=" w-[20vw] text-center text-lg">congratulations you are a pro member and you can have access to all the premium content</h2>
        <h1 className="text-bold text-9xl w-full flex items-center justify-center "><FaCheckCircle/></h1>
       <Link className="text-center text-bold text-xl text-red-700 mb-6" to={"/profile"}>Go to Profile</Link>

     <h1 className="text-center font-bold text-2xl">Reference : qweuriouqrio  </h1>
    </div>
  </div>
  </div>
  )
}

export default PaymentSuccess