import About from "./About/About";
import ContactMe from "./Contact/ContactMe";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import TechStack from "./TechStack/TechStack";

const Root = () => {
    {/* bg-gradient-to-b from-[#003333] to-[#0a0a0a] */ }
    {/*0. bg-gradient-to-b from-[#330000] to-[#0a0a0a] */ }
    {/*1. bg-gradient-to-tr from-[#003333] to-[#000000] */ }
    {/*2. bg-gradient-to-r from-[#1a001a] to-[#0a0a0a] */ }
    return (
        <div className="w-full">
            <header className=" bg-gradient-to-b from-[#003333] to-[#0a0a0a]
             min-h-screen lg:min-h-svh">
                {/* navbar */}
                <Navbar></Navbar>
                {/* hero */}
                <div className="text-base-300 flex justify-center items-center lg:mt-32">
                    <Hero></Hero>
                </div>
            </header>
            {/* bg-gradient-to-r from-black/90 via-black to-black/90 */}
            <main className="bg-[#0a0a0a] ">
                <section>
                    <TechStack></TechStack>
                </section>
                <section>
                    <Projects></Projects>
                </section>
                <section>
                    <About></About>
                </section>
                <section>
                    <ContactMe></ContactMe>
                </section>
            </main>
            <footer className="bg-[#0a0a0a] py-5 text-base-300">
                <div className="flex justify-center">
                    Made with  <span className="px-3 text-[#923ee6]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    </span>  by Mursalin
                </div>
            </footer>
        </div>
    );
};

export default Root;