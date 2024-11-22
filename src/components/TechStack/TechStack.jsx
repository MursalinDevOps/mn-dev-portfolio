import { useEffect, useState } from "react";

const TechStack = () => {
    const [technologies, setTechnologies] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then((res)=>res.json())
        .then((data)=>setTechnologies(data))
        .catch((err)=>{console.log(err)})
    },[])
    return (
        <div className="md:w-10/12 mx-auto">
            <div className="text-base-100 mb-5">
            <h2 className="text-4xl font-semibold mb-2">Tech Stack</h2>
            <p className="">Technologies which I have learned and mostly use in my projects</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-base-100">
            {
                technologies.map((technology,idx)=><div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded p-4 flex gap-4 items-center text-center transition duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 ">
                    <div className="w-10 h-10">
                    <img className="" src={technology.image} alt="" />
                    </div>
                    <p>{technology.tech_name}</p>
                </div>)
            }
            </div>
            
        </div>
    );
};

export default TechStack;