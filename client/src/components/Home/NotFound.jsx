import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
       <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-9xl">404</h1>
        <p className="text-3xl mt-5">Sorry we are unable to find the Page you are Looking for</p>
        <Link className="text-2xl mt-5 rounded-lg bg-slate-400 p-3 text-white" to={'/'}>Go back to Home Page</Link>
       </div>
    </div>
  )
}

export default NotFound