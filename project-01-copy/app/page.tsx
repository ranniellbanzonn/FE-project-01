export default function Home() {
  return (
    <>
      <main className="bg-black min-h-screen flex py-20 flex-col justify-center items-center">
        <div className="bg-[#161616] text-white w-[26rem] rounded-xl py-10 text-center  items-center flex flex-col  px-10">
          <img
            src="./avatar-jessica.jpeg"
            className="w-[6rem] h-[6rem] rounded-full mb-6"
            alt=""
          />
          <h1 className="text-2xl font-bold">Jessica Randall</h1>
          <p className="text-amber-500 text-xs font-bold mb-6">
            London, United Kingdom
          </p>
          <p className="text-gray-400 mb-6">
            "Front-end Developer and avid reader."
          </p>

          <div className="w-full flex flex-col gap-4">
            <div className="bg-[#333333] rounded font-bold py-3">GitHub</div>
            <div className="bg-[#333333] rounded font-bold py-3">
              Frontend Mentor
            </div>
            <div className="bg-[#333333] rounded font-bold py-3">LinkedIn</div>
            <div className="bg-[#333333] rounded font-bold py-3">Twitter</div>
            <div className="bg-[#333333] rounded font-bold py-3">Instagram</div>
          </div>
        </div>
      </main>
    </>
  );
}
