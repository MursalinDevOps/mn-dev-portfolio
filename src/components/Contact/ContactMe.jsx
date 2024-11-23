import { useLocation } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";

const ContactMe = () => {
    const location = useLocation();
      // Separate tooltip state for email and phone
    const [emailTooltip, setEmailTooltip] = useState("");
    const [phoneTooltip, setPhoneTooltip] = useState("");

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === "email") {
            setEmailTooltip("Email Address Copied!");
            setTimeout(() => setEmailTooltip(""), 2000); // Reset tooltip after 2 seconds
        } else if (type === "phone") {
            setPhoneTooltip("Phone Number Copied!");
            setTimeout(() => setPhoneTooltip(""), 2000); // Reset tooltip after 2 seconds
        }
    };

    return (
        <div className={`min-h-screen items-center  ${location.pathname !== '/' ? 'bg-[#0a0a0a]' : ''}`}>
            {/* Navbar */}
            {location.pathname !== '/' && (
                <nav>
                    <NavBar />
                </nav>
            )}

            {/* Main Content */}
            <div className="w-10/12 mx-auto pt-20">
                <h2 className="text-4xl font-semibold text-base-300 mb-8">Contact Me</h2>
                <div className="grid grid-cols-12 gap-5 border border-[#333] rounded-lg shadow-lg bg-[#111] py-10">
                    {/* Contact Info */}
                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start p-10 space-y-4">
                        <div className="mx-auto space-y-3">
                            <p className="text-lg font-semibold text-gray-300 flex items-center">
                                📧 
                                <span
                                    className="ml-3 cursor-copy relative"
                                    onClick={() => handleCopy("mursalin.dev@gmail.com", "email")}
                                    onMouseEnter={() => setEmailTooltip("Click to copy")}
                                    onMouseLeave={() => setEmailTooltip("")}
                                >
                                    mursalin.dev@gmail.com
                                    {emailTooltip && (
                                        <span className="absolute -top-8 left-0 bg-black text-white text-xs py-1 px-2 rounded shadow-lg">
                                            {emailTooltip}
                                        </span>
                                    )}
                                </span>
                            </p>
                            <p className="text-lg font-semibold text-gray-300 flex items-center">
                                📞 
                                <span
                                    className="ml-3 cursor-copy relative"
                                    onClick={() => handleCopy("+88 01865292505", "phone")}
                                    onMouseEnter={() => setPhoneTooltip("Click to copy")}
                                    onMouseLeave={() => setPhoneTooltip("")}
                                >
                                    +88 01865292505
                                    {phoneTooltip && (
                                        <span className="absolute top-8 left-0 bg-black text-white text-xs py-1 px-2 rounded shadow-lg">
                                            {phoneTooltip}
                                        </span>
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center border-l">
                        <form className="w-full max-w-md bg-[#111] p-6 rounded-lg shadow-lg">
                            <h2 className="text-lg font-semibold text-gray-300 pb-5 text-center">
                                Send a direct message
                            </h2>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-lg outline-none placeholder-gray-500 mb-4"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-lg outline-none placeholder-gray-500 mb-4"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-lg outline-none placeholder-gray-500 resize-none mb-4"
                                rows="5"
                            />
                            <button
                                type="submit"
                                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;