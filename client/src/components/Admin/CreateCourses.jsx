/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "./Sidebar";

const CreateCourses = () => {
  const [title, setTTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

 

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };


  const handleCreateCoursesForm = (e) => {
    e.preventDefault();
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
    <div
      className="grid grid-cols-2 min-h-screen "
      style={{ gridTemplateColumns: "5fr 1fr" }}
    >
      <div className="flex flex-col justify-start mt-10  items-center min-h-screen w-full gap-7">
        <div className="text-5xl">
          <span className="font-bold uppercase">Create Course</span>
        </div>
        <form
          onSubmit={handleCreateCoursesForm}
          className="w-[40vw] p-10  flex  flex-col gap-5  "
        >
          <div className="w-full h-10 flex flex-col ">
            <input
              className="bg-slate-200 rounded-md p-2"
              type="text"
              onChange={(e) => setTTitle(e.target.value)}
              name="title"
              placeholder=" title"
              value={title}
            />
          </div>

          <div className="w-full h-20 flex flex-col">
            <input
              className="bg-slate-200 rounded-md p-2 mt-5"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              placeholder="description"
              value={description}
            />
          </div>

          <div className="w-full h-20 flex flex-col">
            <input
              className="bg-slate-200 rounded-md p-2"
              type="text"
              onChange={(e) => setCreatorName(e.target.value)}
              name="name"
              placeholder="Creator Name"
              value={creatorName}
            />
          </div>

          <div className="w-full h-20 flex flex-col">
            <select
              className="bg-slate-200 rounded-md p-2"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value={""} disabled selected>
                Category
              </option>
              {categories.map((item) => {
                return (
                  <option  key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="w-full flex flex-col">
            <label
              htmlFor="choose-file"
              className="text-center font-bold border-slate-400 p-2 border-2 rounded-xl"
            >
              Choose File
            </label>
            <input
              id="choose-file"
              className="hidden"
              type="file"
              onChange={changeImageHandler}
            />

            {imagePrev && (
             <div className="flex items-center ml-[12rem] mt-10">

             <img
                src={imagePrev}
                className="w-[10vw] object-contain"
              />
             </div>
            )}
          </div>

          <button
            className="w-full text-xl rounded-lg p-3 h-10 flex mt-5 items-center justify-center  bg-slate-400 text-white"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>

      <Sidebar />
    </div>
  );
};

export default CreateCourses;
