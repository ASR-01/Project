import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin4Fill } from "react-icons/ri";

const ViewLectures = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lectures = [],
}) => {
  if (!isOpen) {
    return null;
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };


  const handleClose = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };

  return (
    <>
      <div
        style={{
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
        }}
        className="fixed bg-white text-black z-30 w-[100%] text-center h-screen"
      >
        <div className="flex justify-between items-center mx-10 py-5">
          <h1 className="ml-20 text-3xl font-sans font-bold">{courseTitle}</h1>
          <button onClick={handleClose} className="text-3xl">
            <IoCloseSharp />
          </button>
        </div>

        <div className="p-16">
          <div
            className="grid grid-cols-2 min-h-screen "
            style={{ gridTemplateColumns: "3fr 1fr" }}
          >
            <div className="flex flex-col mx-20  items-start w-full">
              <h1 className="text-3xl font-bold">{courseTitle}</h1>
              <h1 className="text-2xl font-bold opacity-20">#{id}</h1>
              <div>
                <h1 className="text-3xl font-bold my-5">Lectures</h1>
              </div>
              <div className="shadow-xl w-[80%] rounded-md border-neutral-300 border-2">
                <VideoCard
                  title={"React"}
                  num={"1"}
                  description={"Lecture num 1"}
                  courseId={id}
                  lectureId={"jdk162893137JAS"}
                  deleteButtonHandler={deleteButtonHandler}
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div>
                <h1 className="font-bold text-2xl uppercase ">Add lectures</h1>
              </div>
              <form
                className="flex flex-col items-center gap-5 pt-5 w-full"
                onSubmit={(e) =>
                  addLectureHandler(e, title, courseId, description, vedio)
                }
              >
                <input
                  className="bg-slate-200 w-full rounded-md p-2"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  name="text"
                  placeholder="title"
                  value={title}
                />

                <input
                  className="bg-slate-200 w-full rounded-md p-2"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  name="text"
                  placeholder="Description"
                  value={description}
                />

                <label
                  htmlFor="choose-file"
                  className="text-center w-full font-bold border-slate-400 p-2 border-2 rounded-xl"
                >
                  Choose File
                </label>
                <input
                  id="choose-file"
                  className="hidden"
                  type="file"
                  onChange={changeVideoHandler}
                />

                {videoPrev && (
                  <video
                    controlsList="nodownload"
                    controls
                    src={videoPrev}
                  ></video>
                )}

                <button
                  className="w-full bg-slate-400 text-white border-2 rounded-md p-1"
                  type="submit"
                >
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default ViewLectures;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <>
      <div className="flex  items-center   justify-between m-10">
        <div className="flex flex-col items-start gap-1">
          <h1 className="font-bold text-xl">{`#${num} ${title}`}</h1>
          <h3 className="text-xl opacity-60">{description}</h3>
        </div>

        <button onClick={() => deleteButtonHandler(courseId, lectureId)}>
          <RiDeleteBin4Fill />
        </button>
      </div>
    </>
  );
}
