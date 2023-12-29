import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-10">

   <div className="text-9xl">
<FaExclamationCircle/>
   </div>
   <div className="flex flex-col justify-center items-center gap-2">
   <h1 className="text-3xl font-bold">Payment Fail</h1>
   <Link to={"/subscribe"} className="text-xl text-white bg-red-500 p-3  uppercase font-bold rounded-md ">Try Again</Link>
   </div>


    </div>
  )
}

export default PaymentFail