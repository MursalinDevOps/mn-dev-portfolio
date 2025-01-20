import { FiInstagram } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center md:my-20" id="hero">
      <div className="">
        <div className="flex items-center justify-center gap-5">
          <div>
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://i.ibb.co.com/GJW59ny/IMG-20240627-WA0006.jpg"
            />
          </div>
          <div className="">
            <h3 className="text-3xl font-semibold">Mursalin <small className="text-xs">( 18Y)</small></h3>
            <p className="flex items-center gap-2"><span><img className="w-8 rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/255px-Flag_of_Bangladesh.svg.png" alt="" /></span> Based in Bangladesh </p>
          </div>
        </div>
        <div className="relative animate__animated animate__fadeInLeftBig">
          <h1 className="text-4xl md:text-7xl font-semibold spaceGrotesk">
            <span className="pl-14"> MERNSTACK</span> <br />
            DEVELOPER
          </h1>
          {/* <button className=" border py-3 px-6 absolute bottom-1 -right-16 rounded-full text-white font-medium bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 hover:via-purple-400 shadow-md transition-transform transform hover:scale-105">
            Contact Me
          </button> */}
        </div>
      </div>
      {/* social icons */}
      <div className="mt-4 flex gap-4">
        <a
          href="https://github.com/MursalinDevOps"
          target="_blank"
          className="w-12 h-12 p-2 rounded-full border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 hover:text-black hover:border-black ease-in-out hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6 text-gray-300 group-hover:text-gray-800"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <a
          href="https://www.linkedin.com/in/md-mursalin-751880288/"
          target="_blank"
          className="w-12 h-12 p-2 rounded-full border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 hover:text-black hover:border-black ease-in-out hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-6 h-6 text-gray-300 group-hover:text-gray-800"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a
          href="https://www.facebook.com/mn.mursalin.177308"
          target="_blank"
          className="w-12 h-12 p-2 rounded-full border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:text-black hover:border-black hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-6 h-6 text-gray-300 group-hover:text-gray-800"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a
          href="https://www.instagram.com/mn_mursalin/"
          target="_blank"
          className="w-12 h-12 p-2 rounded-full border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:text-black hover:border-black hover:-translate-y-1"
        >
          <FiInstagram className="text-2xl"></FiInstagram>
        </a>
        <a
          href="https://x.com/Mn_Mursalin"
          target="_blank"
          className="w-12 h-12 p-2 rounded-full border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:text-black hover:border-black hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 group-hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 0h-7.5L12 7.4 7.1 0H0l8.5 12.2L0 24h7.6l4.4-6.3L16.5 24h7.5l-9-12z"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
