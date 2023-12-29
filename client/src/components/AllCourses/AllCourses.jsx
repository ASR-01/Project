/* eslint-disable react/prop-types */
import { useState } from "react";
import Img3 from "../../assets/react.png";
import { Link } from "react-router-dom";

const CourseTheme = ({
  title,
  imgSrc,
  views,
  creator,
  lecturesCount,
  description,
  id,
  addToPlaylistHandler,
}) => {
  return (
    <div className="flex flex-col items-start w-full gap-2 p-4 font-bold">
      <img src={imgSrc} className="w-[12vw] object-contain" />
      <h1>{title}</h1>
      <p className="uppercase"> {description}</p>
      <h2>Creator : {creator}</h2>
      <h3>Count : {lecturesCount}</h3>
      <h4>Views : {views}</h4>

      <div className="flex items-center gap-2">
        <Link className="bg-red-400 p-2 text-white" to={`/courses/${id}`}>
          <button onClick={()=>addToPlaylistHandler(id)}>Watch Now</button>
        </Link>

        <button className="text-red-400">Add to playlist</button>
      </div>
    </div>
  );
};

const AllCourses = () => {
  const [keyword, setKeyword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState("");

  const addToPlaylistHandler = () => {
    console.log("Hi");
  };

  const categories = [
    "Web development",
    "App Development",
    "Data Science",
    "Game Development",
    "Data Engineer",
    "Devops Engineer",
  ];

  return (
    <div className="flex w-full justify-center items-start min-h-screen">
      <div className="flex items-center flex-col mt-10  gap-2 border-gray-600">
        <input
          className="px-10 w-[40vw] border-2 border-slate-400 "
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="search a course"
        />
        <div className="mt-10 flex p-2 gap-10 w-[34vw] overflow-x-scroll">
          {categories.map((items, index) => {
            return (
              <button
                className=" min-w-[15vw] p-2 rounded-md bg-slate-400"
                key={index}
                onClick={() => setCategory(items)}
              >
                <h1> {items}</h1>
              </button>
            );
          })}
        </div>

        <div className="flex my-5 justify-evenly items-start flex-wrap  border-slate-200 shadow-xl border-2 rounded-xl">
          <CourseTheme
            title={"React"}
            id={1}
            views={0}
            imgSrc={Img3}
            addToPlaylistHandler={addToPlaylistHandler}
            description={"Hi Welcome to my React  "}
            creator={"Aditya"}
            lecturesCount={19}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
