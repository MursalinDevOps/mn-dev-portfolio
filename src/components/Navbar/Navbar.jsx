import { NavLink } from "react-router-dom"
export default function NavBar() {
    return (
        <nav className="navbar flex justify-center">
            <div className="navbar-center hidden lg:flex border-base-300 rounded-full glossy-bg shadow-2xl">
                <ul className="menu menu-horizontal text-black font-semibold">
                <NavLink className="px-10 rounded-full py-2" to='/'>Home</NavLink>
                <NavLink className="px-10 rounded-full py-2" to='/about'>About Me</NavLink>
                <NavLink className="px-10 rounded-full py-2" to='/projects'>Projects</NavLink>
                </ul>
            </div>

        </nav>
    )
}