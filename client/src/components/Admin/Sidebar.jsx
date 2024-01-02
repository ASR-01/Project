import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { CgCircleci } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="m-h-full w-full flex flex-col justify-start items-center shadow-xl border-1">
      <div className="flex flex-col w-full items-center justify-start mt-10 gap-16 text-[1.5rem] font-mono font-semibold">
        <div>
          <Link to={"/admin/dash-board"} className="flex items-center gap-3">
            <MdDashboardCustomize />
            Dashboard
          </Link>
        </div>

        <div>
          <Link to={"/admin/admin-courses"} className="flex items-center gap-3">
            <CgCircleci />
            AdminCourses
          </Link>
        </div>

        <div>
          <Link
            to={"/admin/create-courses"}
            className="flex items-center gap-3"
          >
            <FaCirclePlus />
            CreateCourses
          </Link>
        </div>

        <div>
          <Link to={"/admin/users"} className="flex items-center gap-3">
            <FaUsers />
            Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
