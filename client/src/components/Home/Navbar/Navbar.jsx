import { Link } from "react-router-dom";
import ColorModeSwitcher from "../../ColorModeSwicther/ColorModeSwitcher";

const Navbar = () => {
  const isAuthenticated = true;

  return (
    <div className="flex h-10  w-full items-center justify-between p-10 bg-slate-600 text-xl text-white">
      <Link to={'/'} className="text-xl">COURSE-MART</Link>
      <div className="flex items-center justify-evenly gap-20 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/all-courses"}>All courses</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
        {isAuthenticated ? (
          <>
            <div className="flex items-center justify-evenly gap-5">
              <Link to={"/profile"}>Profile</Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-evenly gap-5">
              <Link to={"/login"}>Login</Link>
            </div>
          </>
        )}
        <ColorModeSwitcher/>
      </div>
    </div>
  );
};

export default Navbar;
