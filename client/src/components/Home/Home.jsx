import Img1 from "../../assets/img.png";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>


      
        <div className="w-full h-full ">
          <div className="flex text-center justify-around p-20">
            <div className="text-right mt-[10rem] ml-10">
              <div className="text-5xl font-semibold">
                Enhance your own SkillSet
              </div>
              <div className="mt-5">
                <div className="text-4xl  ">Learn from the best</div>
                <Link to={'all-courses'}>


                <button className="mt-3 text-white bg-slate-500 p-5 text-xl rounded-lg">
                  Explore Now
                </button>
                </Link>
              </div>
            </div>

            <div>
              <img src={Img1} className="mr-10 shadow-2xl" />
            </div>
          </div>
        </div>  
      
    </>
  );
};

export default Home;
