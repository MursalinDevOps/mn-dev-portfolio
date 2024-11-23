import About from "./About/About";
import ContactMe from "./Contact/ContactMe";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import TechStack from "./TechStack/TechStack";

const Root = () => {
    {/* bg-gradient-to-b from-[#003333] to-[#0a0a0a] */}
    {/*0. bg-gradient-to-b from-[#330000] to-[#0a0a0a] */}
    {/*1. bg-gradient-to-tr from-[#003333] to-[#000000] */}
    {/*2. bg-gradient-to-r from-[#1a001a] to-[#0a0a0a] */}
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
                <About></About>
                </section>
                <section>
                <ContactMe></ContactMe>
                </section>
            </main>
        </div>
    );
};

export default Root;