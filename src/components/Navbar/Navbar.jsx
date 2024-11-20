import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2c3e50]">
        <div className="container flex flex-col items-center md:flex-row md:justify-between py-8 md:items-center md:gap-0 gap-5">
          <NavLink to="/" className="font-bold text-white text-3xl">
            START FRAMEWORK
          </NavLink>
          <ul className="flex gap-5 text-white items-center">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${
                    isActive ? "bg-[#1abc9c] text-white" : null
                  }`
                }
              >
                <span className="font-bold py-6">ABOUT</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${
                    isActive ? "bg-[#1abc9c] text-white" : null
                  }`
                }
              >
                <span className="font-bold">PORTFOLIO</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${
                    isActive ? "bg-[#1abc9c] text-white" : null
                  }`
                }
              >
                <span className="font-bold"> CONTACT</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
