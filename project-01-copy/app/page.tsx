export default function Home() {
  return (
    <>
      <main className="flex text-white justify-center  bg-black min-h-screen py-20  px-10">
        <div className="flex flex-col justify-center items-center text-center w-[26rem] rounded py-10 bg-[#161616]">
          <img
            src="./avatar-jessica.jpeg"
            className="w-[6rem] rounded-full mb-6"
            alt=""
          />
          <h1 className="text-2xl font-bold">Jessica Randall</h1>
          <p className="text-xs text-amber-500 font-bold mb-6">
            London, United Kingdom
          </p>
          <p className="text-gray-400 mb-6">
            "Front-end Developer and avid reader."
          </p>

          <div className="w-full px-10 flex flex-col gap-4 font-bold ">
            <div className="bg-[#333333] py-4 rounded">
              <p>GitHub</p>
            </div>
            <div className="bg-[#333333] py-4 rounded">
              <p>Frontend Mentor</p>
            </div>
            <div className="bg-[#333333] py-4 rounded">
              <p>LinkedIn</p>
            </div>
            <div className="bg-[#333333] py-4 rounded">
              <p>Twitter</p>
            </div>
            <div className="bg-[#333333] py-4 rounded">
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
