import { useLocation } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

const Projects = () => {
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
                <h2 className="text-4xl font-bold text-base-300 mb-8">Projects</h2>
                    <h2 className="text-xl text-center text-base-300 flex justify-center items-center">This section is under construction :)</h2>
                <div>
                </div>

            </section>
        </div>
    );
};

export default Projects;