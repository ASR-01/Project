const Subscribe = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col  shadow-2xl p-11 rounded-md">
        <div className="bg-slate-400 w-full text-center px-10 py-4 rounded-md">
          <h1 className="text-xl text-white">Pro Pack - $20</h1>
        </div>

        <div className="flex gap-7  flex-col mt-3 ">
          <h2 className="text-xl">Join the Pro Pack and get access to all the courses</h2>
          <h1 className="text-bold w-full text-center">$20 Only</h1>
          <button className="w-full text-center font-bold bg-red-500 px-8 py-2 text-white rounded-md">
            Buy Now
          </button>
        </div>
        <div className="bg-slate-700 rounded-md mt-2 text-white p-4">
          <h2>100% refund at Cancellation</h2>
          <p>* Terms and conditions apply</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
