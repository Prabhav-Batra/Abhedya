export const Leaderboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="relative w-full max-w-9xl p-8 rounded-xl bg-gray-1000 shadow-lg">
        <div className="absolute inset-0 bg-[size:40px_40px] opacity-10"></div>
        <h1 className="text-5xl font-bold text-teal-400 text-center mb-6">
          LEADERBOARD
        </h1>
        <div className="flex flex-wrap justify-center items-end space-x-6 mb-8">
          <div className="bg-teal-900 p-4 w-32 h-40 rounded-lg flex flex-col items-center shadow-md">
            <div className="w-20 h-20 bg-gray-800 rounded-full mb-2"></div>
            <p className="text-white font-semibold text-center">
              NAME
              <br />
              ROLL NO
            </p>
          </div>
          <div className="bg-teal-900 p-6 w-40 h-48 rounded-lg flex flex-col items-center shadow-md">
            <div className="w-24 h-24 bg-gray-800 rounded-full mb-2"></div>
            <p className="text-white font-semibold text-center">
              NAME
              <br />
              ROLL NO
            </p>
          </div>
          <div className="bg-teal-900 p-4 w-28 h-36 rounded-lg flex flex-col items-center shadow-md">
            <div className="w-16 h-16 bg-gray-800 rounded-full mb-2"></div>
            <p className="text-white font-semibold text-center">
              NAME
              <br />
              ROLL NO
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center bg-teal-700 px-6 py-3 rounded-full text-white">
            <span className="font-bold w-8">4.</span>
            <div className="w-6 h-6 bg-gray-800 rounded-full mr-4"></div>
            <span className="flex-grow">NAME</span>
            <span>ROLL NUMBER</span>
          </div>
          <div className="flex items-center bg-teal-700 px-6 py-3 rounded-full text-white">
            <span className="font-bold w-8">5.</span>
            <div className="w-6 h-6 bg-gray-800 rounded-full mr-4"></div>
            <span className="flex-grow">NAME</span>
            <span>ROLL NUMBER</span>
          </div>
          <div className="flex items-center bg-teal-700 px-6 py-3 rounded-full text-white">
            <span className="font-bold w-8">6.</span>
            <div className="w-6 h-6 bg-gray-800 rounded-full mr-4"></div>
            <span className="flex-grow">NAME</span>
            <span>ROLL NUMBER</span>
          </div>
          <div className="flex items-center bg-teal-700 px-6 py-3 rounded-full text-white">
            <span className="font-bold w-8">7.</span>
            <div className="w-6 h-6 bg-gray-800 rounded-full mr-4"></div>
            <span className="flex-grow">NAME</span>
            <span>ROLL NUMBER</span>
          </div>
          <div className="flex items-center bg-teal-700 px-6 py-3 rounded-full text-white">
            <span className="font-bold w-8">8.</span>
            <div className="w-6 h-6 bg-gray-800 rounded-full mr-4"></div>
            <span className="flex-grow">NAME</span>
            <span>ROLL NUMBER</span>
          </div>
        </div>
      </div>
    </div>
  );
};
