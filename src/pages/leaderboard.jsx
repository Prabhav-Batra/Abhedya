import thirteenBSvg from './assets/13 B.svg'

const Details = ({ name, roll, srno }) => {
  return (
    <div class="flex items-center bg-teal-700 px-9 py-3 rounded-full text-white">
      <span className="font-bold w-8">{srno}.</span>
      <div className="w-7 h-6 bg-gray-800 rounded-full mr-7"></div>
      <span className="flex-grow">{name}</span>
      <span className="mr-8">{roll}</span>
    </div>
  )
}



const Leaderboard = () => {
  return (<body className="bg-black">
    <div className="bg-black min-h-screen min-w-screen ">
      <p1 className="text-9xl border-l-8 bg-gradient-to-b from-teal-900 to-transparent text-transparent bg-clip-text mx-auto flex justify-center mt-30 font-extrabold">LEADERBOARD</p1>
      <div className="bg-[#1E1E1E] rounded-xl  min-h-200 mx-50 p-10">
        <div className="flex flex-wrap justify-center items-end space-x-10 mb-8">

          <div className="bg-teal-900 p-4 w-32 h-40 rounded-lg flex flex-col items-center shadow-md">
            <div className="w-20 h-20 bg-gray-800 rounded-full mb-2"></div>
            <p className="text-white font-semibold text-center">NAME<br />ROLL NO</p>
          </div>


          <div className="bg-teal-900 p-6 w-40 h-48 rounded-lg flex flex-col items-center shadow-md">
            <div className="w-24 h-24 bg-gray-800 rounded-full mb-2"></div>
            <p className="text-white font-semibold text-center">NAME<br />ROLL NO</p>
          </div>


          <div className="bg-teal-900 p-4 w-28 h-36 rounded-lg flex flex-col items-center shadow-md">
            <div className="w-16 h-16 bg-gray-800 rounded-full mb-2"></div>
            <p className="text-white font-semibold text-center">NAME<br />ROLL NO</p>
          </div>
        </div>

        <div class="space-y-4 ">

          <Details name="John Doe" roll="1234" srno="4" />
          <Details name="John Doe" roll="1234" srno="5" />
          <Details name="John Doe" roll="1234" srno="6" />
          <Details name="John Doe" roll="1234" srno="7" />
          <Details name="John Doe" roll="1234" srno="8" />
          <Details name="John Doe" roll="1234" srno="9" />
          <Details name="John Doe" roll="1234" srno="10" />
        </div>



      </div>
      <img src={thirteenBSvg} alt="" className="fixed bottom-0 left-0 w-100 h-100 " />


    </div>

  </body>
  )
}
export default Leaderboard;

