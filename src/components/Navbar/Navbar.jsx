import { NavLink } from "react-router-dom"
export default function NavBar() {
    //  hover:shadow-[0_0_30px_#6d8787] transition-shadow duration-300
    // hover:shadow-[0_0_20px_5px_#6d8787] transition-shadow duration-300
    return (
        <nav className="navbar flex justify-center">
            <div className="navbar-center flex border-base-300 rounded-full glossy-bg shadow-2xl md:hover:shadow-[0_0_20px_5px_#6d8787] transition-shadow duration-300">
                <ul className="menu menu-horizontal text-black font-semibold">
                <NavLink className="px-4 md:px-10 rounded-full py-2" to='/'>Home</NavLink>
                <NavLink className="px-4 md:px-10 rounded-full py-2" to='/about'>About</NavLink>
                <NavLink className="px-4 md:px-10 rounded-full py-2" to='/projects'>Projects</NavLink>
                <NavLink className="px-4 md:px-10 rounded-full py-2" to='/contact'>Contact</NavLink>
                </ul>
            </div>

        </nav>
    )
}