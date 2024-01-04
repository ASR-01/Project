import { LineChart,DoughnutChart } from "./Chart";
import Sidebar from "./Sidebar";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div
      className="grid grid-cols-2 min-h-screen "
      style={{ gridTemplateColumns: "5fr 1fr" }}
    >
      <div className="py-16 box-border flex flex-col justify-start items-center">
        <h1>Last Change was on {String(new Date()).split("G")[0]}</h1>
        <div className="w-full text-left uppercase text-3xl font-bold mt-5">
          <h1 className="mx-16">Dashboard</h1>
        </div>
        <div className="flex items-center justify-around gap-[5vw] my-20">
          <DataBox
            title={"Views"}
            quantity={14}
            quantityPercentage={30}
            profit={true}
          />
          <DataBox
            title={"Users"}
            quantity={123}
            quantityPercentage={30}
            profit={true}
          />
          <DataBox
            title={"Subscription"}
            quantity={5}
            quantityPercentage={20}
            profit={false}
          />
        </div>

        <div className="flex items-center justify-start p-5 min-w-[70vw] shadow-2xl min-h-[50vh]">
          <div className="text-2xl my-5 w-full text left font-bold">
            <h1 className="mx-20">Views Graph</h1>
            <LineChart/>
          </div>
        </div>

        <div
          className="grid grid-cols-2 mt-5 "
          style={{ gridTemplateColumns: "wfr 1fr" }}
        >
          <div className="flex items-center text-left shadow-2xl w-[40vw] min-h-[50vh]">
            <div className=" w-full text left font-bold">
              <h1 className=" text-2xl mx-10">Progress Bar</h1>
              <div className="flex flex-col item-left p-10">
                <Box title={"Views"} value={30} profit={true} />
                <Box title={"Users"} value={78} profit={true} />
                <Box title={"Subscription"} value={20} profit={false} />
              </div>
            </div>
          </div>

          <div className="flex items-center ml-[15vw] w-[23vw] justify-start shadow-2xl min-h-[50vh]">
            <div className="text-2xl my-5 w-full gap-5 flex flex-col items-center justify-center text left font-bold">
              <h1>Users </h1>
              {/* Circle  Here */}
             <div>
               <DoughnutChart/>
             </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Dashboard;

const Box = ({ title, value, profit }) => {
  return (
    <>
      <div className="flex-flex-col  items-start my-3">
        <h1>{title}</h1>
        <div className="flex items-center justify-center gap-1">
          <div>{profit ? "0%" : `-${value}%`}</div>
          <progress className="w-full rounded-md bg-red-500" value={profit ? value :0} max={"100"}/>
          <h1>{`${value > 100 ? value : 100}%`}</h1>
        </div>
      </div>
    </>
  );
};

const DataBox = ({ title, quantity, quantityPercentage, profit }) => {
  return (
    <>
      <div className="flex flex-col gap-2  p-8 shadow-xl w-[18vw] rounded-md border-2">
        <h1 className="text-[17px] font-sans">{title}</h1>
        <div className="flex items-center gap-5">
          <div className="font-bold text-2xl">{quantity}</div>
          <div>
            {profit ? (
              <>
                <div className="flex items-center gap-1 justify-center text-xl">
                  <div> {quantityPercentage}%</div>
                  <FaArrowUp className="text-green-500 font-thin" />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center text-xl gap-1">
                  <div> {quantityPercentage}%</div>
                  <FaArrowDown className="text-red-500 font-thin" />
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <h1 className="text-slate-400 text-xl">Since last Month</h1>
        </div>
      </div>
    </>
  );
};
