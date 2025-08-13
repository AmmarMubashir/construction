import heroBg from "../assets/heroBg.jpg";
import Navbar from "../components/Navbar.jsx";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <div
        className=" min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        {/* Content */}
        <div className="">
          {/* <Navbar /> */}

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight">
              Building Your Vision,{" "}
              <span className="block">
                On <span className="text-yellow-400">Time</span> &{" "}
                <span className="text-yellow-400">On Budget</span>
              </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              We specialize in turning your construction visions into tangible
              results. Our commitment to quality and efficiency ensures your
              project is completed on time and within budget.
            </p>

            <button className="bg-[#003084] hover:bg-[#003084] text-[#ffc326] px-4 py-2 rounded-full cursor-pointer">
              Get A Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
