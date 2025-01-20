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
    const contactContainerClass =
        location.pathname === '/'
            ? 'bg-[#0a0a0a] text-base-300' // Homepage styles
            : 'bg-gradient-to-tr from-[#003333] to-[#000000] min-h-screen text-white';
    return (
        <div className={`${contactContainerClass} pb-12 px-6`}>
            {location.pathname !== '/' && (
                <nav>
                    <NavBar />
                </nav>
            )}

            {/* Main Content */}
            <div className="md:w-10/12 mx-auto pt-20">
                <h2 className="text-4xl font-semibold text-base-300 mb-8">Contact Me</h2>
                <div className="grid grid-cols-12 md:gap-5 border border-gray-500 rounded-lg shadow-lg bg-transparent md:py-10">
                    {/* Contact Info */}
                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start p-10 space-y-4 border-b md:border-b-0 md:border-r border-gray-500">
                        <div className="mx-auto  py-20  md:py-0">
                            <p className="text-lg font-semibold text-gray-300 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>


                                <span
                                    className="ml-3 cursor-copy relative"
                                    onClick={() => handleCopy("+88 01865292505", "phone")}
                                    onMouseEnter={() => setPhoneTooltip("Click to copy")}
                                    onMouseLeave={() => setPhoneTooltip("")}
                                >
                                    +880 1865292505
                                    {phoneTooltip && (
                                        <span className="absolute top-8 left-0 bg-black text-white text-xs py-1 px-2 text-center rounded shadow-lg">
                                            {phoneTooltip}
                                        </span>
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                        <form className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-lg">
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
                                Send it my way !
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;