import { useLocation } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

const About = () => {
  const location = useLocation();

  const containerClass =
    location.pathname === '/'
      ? 'bg-[#0a0a0a] text-base-300' // Homepage styles
      : 'bg-gradient-to-tr from-[#003333] to-[#000000] min-h-screen text-white'; // Non-homepage styles
  return (
    <div className={`${containerClass} pb-12 px-6`}>
      {location.pathname !== '/' && (
        <nav>
          <NavBar />
        </nav>
      )}
      {/* <section className="md:w-10/12 mx-auto pt-20">
        <h2 className="text-4xl font-semibold text-base-300 mb-8">About Me</h2>
        <div className="text-white px-6 border border-gray-500 rounded-lg bg-transparent md:py-10">
          <div className="flex items-center rounded-lg px-2 py-6 max-w-lg mx-auto text-center md:text-left">
            <img
              src="https://i.ibb.co.com/0Xm4kRR/IMG-20240109-204149.jpg"
              alt="Profile"
              className="w-[220px] border-4 h-[250px] rounded-sm mx-auto mb-6 object-cover"
            />
            <p className="text-lg text-base-300 leading-relaxed" id="about-description">
              I'm a 18 year old self-taught developer from Dhaka, Bangladesh. I'm practicing web
              development for more than a year. During this time, I've worked with
              various technologies and built several projects. Currently, I'm
              focused on front-end development and am looking for an part-time job or internship to
              apply my skills and grow as a developer within a team environment.
            </p>
          </div>
        </div>
      </section> */}
      <section className="w-10/12 mx-auto">
        <h2 className="text-4xl font-semibold text-base-300 mb-8">About Me</h2>
        <div className="  flex-col-reverse md:flex-row flex justify-between items-center ">
          <div className="flex-1"><p className="text-lg md:text-xl text-base-300 leading-relaxed" id="about-description">
            I'm a 18 year old self-taught developer from Dhaka, Bangladesh. I'm practicing web
            development for more than a year. During this time, I've worked with
            various technologies and built several projects. Currently, I'm
            focused on front-end development and am looking for an part-time job or internship to
            apply my skills and grow as a developer within a team environment.
          </p></div>
          <div className="flex-1"><img
            // src="https://i.ibb.co.com/0Xm4kRR/IMG-20240109-204149.jpg"
            src="https://i.ibb.co.com/9T03cTL/IMG-20250127-185232-removebg-preview-2.png"
            alt="Profile"
            className="w-[220px] h-[250px] rounded-sm mx-auto mb-6 object-cover"
          /></div>
        </div>
      </section>
    </div>
  );
};

export default About;