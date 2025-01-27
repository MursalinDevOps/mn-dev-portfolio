import { useLocation } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import 'animate.css';

const Contact = () => {
    const location = useLocation();
    // Tooltip state for email
    const [emailTooltip, setEmailTooltip] = useState("");

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setEmailTooltip("Email Address Copied!");
            setTimeout(() => setEmailTooltip(""), 3000); // Reset tooltip after 2 seconds
        } catch (err) {
            console.error("Failed to copy text: ", err);
            setEmailTooltip("Failed to copy!");
            setTimeout(() => setEmailTooltip(""), 2000);
        }
    };

    const contactContainerClass =
        location.pathname === "/"
            ? "bg-[#0a0a0a] text-base-300" // Homepage styles
            : "bg-gradient-to-tr from-[#003333] to-[#000000] min-h-screen text-white";

    return (
        <div className={`${contactContainerClass} pb-12 px-6`}>
            {location.pathname !== "/" && (
                <nav>
                    <NavBar />
                </nav>
            )}

            <section className="w-10/12 mx-auto">
                <h2 className="text-4xl font-semibold text-base-300 mb-8">Let's Connect</h2>
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-medium animate__animated animate__bounce">Hi There!</h3>
                    <p className="text-lg md:text-xl md:w-[500px] mx-auto my-6">
                        I’m currently looking for a junior MERNSTACK or Frontend Developer role.
                        My inbox is always open. Whether you have a
                        question, or just want to say hi, feel free to reach out.
                    </p>
                    <div className="relative flex flex-col items-center md:w-[500px] mx-auto">
                        <button
                            className="flex justify-center items-center border-white/50 hover:bg-black hover:border-white text-white/70 btn-outline text-md gap-3 btn w-full cursor-copy"
                            onClick={() => handleCopy("mursalin.dev@gmail.com")}
                            onMouseEnter={() => setEmailTooltip("Click to copy")}
                            onMouseLeave={() => setEmailTooltip("")}
                        >
                            <FaEnvelope />
                            mursalin.dev@gmail.com
                        </button>
                        {emailTooltip && (
                            <span className="absolute top-full mt-2 bg-white text-black text-xs py-1 px-2 rounded shadow-lg">
                                {emailTooltip}
                            </span>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
