
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
const Footer = () => {
  return (
    <div className="bg-slate-600  p-4 m-auto w-full text-white flex items-center justify-between ">
    <div className="text-xl font-bold text-right">

        <div>ALL RIGHT RESERVED</div>
        <div>Course-Mart</div>
    </div>
    <div className="flex items-center justify-center gap-10 text-3xl">
        <SiFacebook/>
        <SiInstagram/>
        <SiGithub/>
    </div>

    </div>
  )
}

export default Footer