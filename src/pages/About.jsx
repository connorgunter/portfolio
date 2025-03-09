import "../css/About.css";
function Home() {
  return (
    <div id="about" className="text-center p-5">
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center">
      <h2 className="anta-regular text-[30px] mr-[10px]">About</h2>
      <img className="w-[40px]" src="../../images/info.png"/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <img
          className="shadow-[0_4px_8px_rgba(0,0,0,0.1)] w-[250px] h-auto mt-5 md:mt-0 rounded-[50%] border-[3px] border-solid border-[black] mb-5 md:mb-0"
          src="../../images/headshot.png"
        />
        <p className="text-[#333] text-lg leading-[1.6] max-w-[600px] my-5 text-left">
          I grew up in a charming town in southern Maine, surrounded by a
          community deeply rooted in various trade professions. However, I
          recognized early on that my ambitions reached beyond the traditional
          trades. I am a fullstack developer with experience using technologies such as, React, JavaScript, CSS, Node, Django and more. This field captivates me
          with its constant evolution and the opportunity it offers for creative
          expression. As I navigate my professional journey, I am excited to
          contribute my skills and enthusiasm to the dynamic world of
          technology, demonstrating a commitment to innovation and pushing the
          boundaries of what is possible.
        </p>
      </div>
    </div>
  );
}

export default Home;
