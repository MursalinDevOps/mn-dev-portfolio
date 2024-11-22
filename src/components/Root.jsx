import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import TechStack from "./TechStack/TechStack";

const Root = () => {
    return (
        <div>
            <header className="bg-gradient-to-br from-[#1a1a40] to-[#4b006e] w-full min-h-screen lg:min-h-svh">
                {/* navbar */}
                <nav>
                    <Navbar></Navbar>
                </nav>
                {/* hero */}
                <section className="text-white flex justify-center items-center lg:mt-32">
                    <Hero></Hero>
                </section>
            </header>
            <main>
                <section className="bg-black py-16">
                    <TechStack></TechStack>
                </section>
            </main>
        </div>
    );
};

export default Root;