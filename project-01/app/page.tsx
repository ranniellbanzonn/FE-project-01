export default function Home() {
  return (
    <>
      <main className="bg-black min-h-screen flex justify-center items-center py-20">
        <div className="text-white w-[26rem] py-10 rounded-xl bg-[#161616] flex flex-col justify-center items-center text-center">
          {/* profile image */}

          <img
            src="./avatar-jessica.jpeg"
            className="w-[6rem] rounded-full mb-6"
            alt="profile picture"
          />
          {/* name */}
          <h1 className="font-bold text-2xl mb-1">Jessica Randall</h1>
          <p className="font-semibold text-xs text-amber-500 mb-6 ">
            London, United Kingdom
          </p>
          <p className="text-gray-400 mb-6">
            "Front-end Developer and avid reader."
          </p>

          {/* socials */}
          <div className=" w-full px-10 flex flex-col gap-4 font-bold">
            <div className=" bg-[#333333] rounded px-4 py-3">
              <p>GitHub</p>
            </div>
            <div className=" bg-[#333333] rounded px-4 py-3">
              <h1>Frontend Mentor</h1>
            </div>
            <div className=" bg-[#333333] rounded px-4 py-3">
              <h1>LinkedIn</h1>
            </div>
            <div className=" bg-[#333333] rounded px-4 py-3">
              <h1>Twitter</h1>
            </div>
            <div className=" bg-[#333333] rounded px-4 py-3">
              <h1>Instagram</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
