const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center items-center my-20 ">

           <div className="space-y-5">
           <div className="flex items-center justify-center gap-5">
            <div>
                <img className="w-20 h-20 rounded-full" src="https://i.ibb.co.com/0Xm4kRR/IMG-20240109-204149.jpg" />
            </div>
            <div className="">
                <h3 className="text-3xl font-semibold">Mursalin</h3>
                <p>Based in Dhaka, Bangladesh</p>
            </div>
           </div>
           <div className="relative">
            <h1 className="text-8xl font-semibold "><span className="pl-10 font-thin"> MERNSTACK</span> <br />
            DEVELOPER </h1>
            <button className="border py-3 px-6 text-white absolute bottom-4 -right-14 rounded-full">Contact Me</button>
           </div>
           </div>
        </div>
    );
};

export default Hero;