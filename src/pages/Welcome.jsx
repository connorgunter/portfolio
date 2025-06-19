import "../css/Welcome.css";

function Welcome() {
  return (
    <div
      id="welcome"
      className="welcome-bg flex flex-col items-center justify-center w-screen h-screen"
    >
      <div className="h-auto mb-5">
        <h3 className="anta-regular text-white pl-5 text-base md:text-lg lg:text-xl">
          Hello there, Welcome to my site
        </h3>
        <h1 className="anta-regular text-white text-3xl md:text-4xl lg:text-5xl font-normal not-italic pl-5 rounded-lg">
          Connor Gunter
        </h1>
        <h1 className="anta-regular text-white text-3xl md:text-4xl lg:text-5xl font-normal not-italic pl-5 rounded-lg">
          Full Stack Developer
        </h1>
      </div>

      <div className="pb-10 flex flex-wrap justify-center">
        <a
          href="https://github.com/connorgunter"
          target="_blank"
          rel="noreferrer"
        >
          <button className="m-3 anta-regular bg-[#1d2625] border-solid border-4 border-[#b7673c] text-white px-6 py-4 text-l uppercase tracking-widest hover:bg-[#b7673c] hover:text-black">
            Github &gt;
          </button>
        </a>

        <a
          href="https://docs.google.com/document/d/1qpXN1VkGcw36cyfMNcXxAYU4ySbDw_0SRyBPapW0GHg/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="m-3 anta-regular bg-[#1d2625] border-solid border-4 border-[#b7673c] text-white px-6 py-4 text-l uppercase tracking-widest hover:bg-[#b7673c] hover:text-black">
            Resume &gt;
          </button>
        </a>

        <a href="#services">
          <button className="m-3 anta-regular bg-[#1d2625] border-solid border-4 border-[#b7673c] text-white px-6 py-4 text-l uppercase tracking-widest hover:bg-[#b7673c] hover:text-black">
            Services &gt;
          </button>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
