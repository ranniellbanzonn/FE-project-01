export default function Home() {
  return (
    <>
      <nav className="bg-[#161616] py-6 text-white px-10">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl text-amber-500">Logo</div>
          <div>
            <ul className="flex gap-6">
              <a href="/" className="hover:text-amber-500">
                <li>Home</li>
              </a>
              <a href="/about" className="hover:text-amber-500">
                <li>About</li>
              </a>
              <a href="/contact" className="hover:text-amber-500">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <main className="bg-black min-h-screen text-white py-20 flex justify-center text-center items-center">
        <div className="flex justify-center flex-col bg-[#161616] w-[26rem] px-10 py-10 rounded-xl items-center">
          <img
            src="./avatar-jessica.jpeg"
            className="w-[6rem] rounded-full mb-6"
            alt=""
          />
          <h1 className="font-bold text-2xl">Jessica Randall</h1>
          <p className="text-xs mb-6 font-bold text-amber-500">
            London, United Kingdom
          </p>
          <p className="text-gray-400 mb-6">
            "Front-end Developer and avid reader."
          </p>
          <div className=" w-full ">
            <a href="https://github.com/ranniellbanzonn">
              <button className="bg-[#333333] font-bold w-full hover:bg-black hover:cursor-pointer py-3 rounded mb-4">
                GitHub
              </button>
            </a>
            <a href="https://calendly.com/ranniellbanzon">
              <button className="bg-[#333333] font-bold w-full hover:bg-black hover:cursor-pointer py-3 rounded mb-4">
                Frontend Mentor
              </button>
            </a>
            <a href="https://www.linkedin.com/in/ranniellbanzon/">
              <button className="bg-[#333333] font-bold w-full hover:bg-black hover:cursor-pointer py-3 rounded mb-4">
                LinkedIn
              </button>
            </a>
            <a href="https://www.linkedin.com/in/ranniellbanzon/">
              <button className="bg-[#333333] font-bold w-full hover:bg-black hover:cursor-pointer py-3 rounded mb-4">
                Twitter
              </button>
            </a>
            <a href="https://www.instagram.com/wanniellsaur/">
              <button className="bg-[#333333] font-bold w-full hover:bg-black hover:cursor-pointer py-3 rounded mb-4">
                Instagram
              </button>
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-[#161616] py-20 text-white px-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            <p>Terms and Conditions </p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex gap-10">
            <p>Created by Wonder Makers</p>
            <p>© 2025 Ranniellsaur</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
