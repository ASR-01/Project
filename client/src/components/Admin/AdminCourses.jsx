import Sidebar from "./Sidebar";
import { MdDeleteOutline } from "react-icons/md";
import Img from "../../assets/react.png";

const AdminCourses = () => {
  const courses = [
    {
      _id: "#5666745466562h",
      poster: {
        url: Img,
      },
      title: "rawat.aditya002@gmail.com",
      category: "Web development",
      creator: "Aditya Rawat",
      view: 11,
      lectures: 1,
    },
    {
      _id: "#5666745466562h",
      poster: {
        url: Img,
      },
      title: "rawat.aditya002@gmail.com",
      category: "Web development",
      creator: "Aditya Rawat",
      view: 11,
      lectures: 1,
    },
    {
      _id: "#5666745466562h",
      poster: {
        url: Img,
      },
      title: "rawat.aditya002@gmail.com",
      category: "Web development",
      creator: "Aditya Rawat",
      view: 11,
      lectures: 1,
    },


    {
      _id: "#5666745466562h",
      poster: {
        url: Img,
      },
      title: "rawat.aditya002@gmail.com",
      category: "Web development",
      creator: "Aditya Rawat",
      view: 11,
      lectures: 1,
    },

  ];

  const updateCourseHandler = (id) => {
    console.log("Admin", id);
  };
  const deleteCourseHandler = (id) => {
    console.log("Id", id);
  };
  return (
    <div
      className="grid grid-cols-2 min-h-screen "
      style={{ gridTemplateColumns: "5fr 1fr" }}
    >
      <div className="flex flex-col justify-start mt-20 items-center overflow-x-auto w-full ">
        <div className="text-3xl uppercase w-full text-center font-mono font-bold">
          <h1>ALL Admin Courses</h1>
        </div>

        <div className="ml-[20vw]">
          <table className="  min-h-screen  m-20">
            <thead>
              <tr>
                <th>ID</th>
                <th>POSTER</th>
                <th>TITLE</th>
                <th>CATEGORY</th>
                <th>CREATOR</th>
                <th>VIEWS</th>
                <th>LECTURES</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="border-2">
              {courses.map((item) => (
                <Row
                  key={item._id}
                  item={item}
                  updateCourseHandler={updateCourseHandler}
                  deleteCourseHandler={deleteCourseHandler}
                />
              ))}
            </tbody>
          </table>
          <h1 className="font-bold w-full  text-center uppercase">
            ALL Available Courses in Database
          </h1>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default AdminCourses;
const Row = ({ item, updateCourseHandler, deleteCourseHandler }) => {
  return (
    <tr className="border-2">
      <td>{item._id}</td>
      <td>
        <img src={item.poster.url} />
      </td>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td>{item.creator}</td>
      <td>{item.view}</td>
      <td>{item.lectures}</td>
      <td>
        <div className="flex justify-around gap-10 items-center">
          <button
            onClick={() => updateCourseHandler(item._id)}
            className="w-[10vw] bg-red-400 text-white rounded-md   p-2"
          >
            View Lectures
          </button>
          <button
            onClick={() => deleteCourseHandler(item._id)}
            className="text-red-600 text-2xl mr-3"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </td>
    </tr>
  );
};
