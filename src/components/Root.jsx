import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import TechStack from "./TechStack/TechStack";

const Root = () => {
    return (
        <div>
            {/* bg-gradient-to-b from-[#003333] to-[#0a0a0a] */}
            {/*0. bg-gradient-to-b from-[#330000] to-[#0a0a0a] */}
            {/*1. bg-gradient-to-tr from-[#003333] to-[#000000] */}
            {/*2. bg-gradient-to-r from-[#1a001a] to-[#0a0a0a] */}
            
            <header className="bg-gradient-to-b from-[#003333] to-[#0a0a0a]
             min-h-screen lg:min-h-svh">
                {/* navbar */}
                <nav>
                    <Navbar></Navbar>
                </nav>
                {/* hero */}
                <section className="text-base-300 flex justify-center items-center lg:mt-32">
                    <Hero></Hero>
                </section>
            </header>
            {/* bg-gradient-to-r from-black/90 via-black to-black/90 */}
            <main className="bg-[#0a0a0a]">
                <section className="py-16">
                    <TechStack></TechStack>
                </section>
            </main>
        </div>
    );
};

export default Root;