import { useState } from "react";
import video from "../../assets/video (2160p).mp4";

const CourseDetailPage = () => {
  const [lectureNum, setLectureNum] = useState(0);

  const lectures = [
    {
      id: 1,
      title: "React",
      description: "MERN Stack Development",
      video: {
        url: video,
      },
    },

    {
      id: 2,
      title: "Javascript",
      description: "Web development",
      video: {
        url: "11",
      },
    },

    {
      id: 3,
      title: "HTML",
      description: "Full Stack Development",
      video: {
        url: "10",
      },
    },

    {
      id: 4,
      title: "Backend",
      description: "MERN backend",
      video: {
        url: "9",
      },
    },
  ];
  return (
    <div
      className="grid grid-cols-2 min-h-screen "
      style={{ gridTemplateColumns: "3fr 1fr" }}
    >
      <div className="w-full h-full">
        <video
          className="w-full"
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={lectures[lectureNum].video.url}
        />
        <div className="flex flex-col w-full my-6 p-5">
          <h1 className="font-bold text-5xl  my-2 ">
            #{lectureNum + 1} {lectures[lectureNum].title}{" "}
          </h1>
          <h2 className="font-bold text-4xl my-2">Description </h2>
          <h3 className=" text-2xl mb-5">{lectures[lectureNum].description}</h3>
        </div>
      </div>
      <div className="w-full  flex flex-col justify-start items-center ">
        {lectures.map((item, index) => (
          <button key={item.id} className="w-full border-2 py-5 "  onClick={()=>setLectureNum(index)}>
            <h1 className="font-bold text-xl">
              #{index + 1} {item.title}
            </h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailPage;
