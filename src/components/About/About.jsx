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
           <section className="md:w-10/12 mx-auto pt-20">
      <h2 className="text-4xl font-bold text-base-300 mb-8">About Me</h2>
           <div className="text-white px-6 border border-gray-500 rounded-lg bg-transparent md:py-10">
      <div className=" rounded-lg px-2 py-6 md:px-6 max-w-lg mx-auto text-center">
        <img
          src="https://i.ibb.co.com/0Xm4kRR/IMG-20240109-204149.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
        />
        <p className="text-lg text-base-300 leading-relaxed" id="about-description">
          I'm a 18 year old self-taught developer based in Bangladesh 🇧🇩, practicing web
          development for more than 1 year. During this time, I've worked with
          various technologies and built several projects. Currently, I'm
          focused on front-end development and am looking for an part-time job or internship to
          apply my skills and grow as a developer within a team environment.
        </p>
      </div>
    </div>
           </section>
        </div>
    );
};

export default About;