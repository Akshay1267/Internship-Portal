import React from "react";
import "../styles/HeaderMainDash.css";

export default function HeaderMain({ menuActive, toggleMenu }) {
  return (
    <header className="bg-white py-5 shadow-sm sticky top-0 z-50">
      <div className="w-full px-5 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-4 md:mb-0">
          <img
            src="/logo.jpeg"
            alt="Hair Coaction Logo"
            className="h-20 w-20 object-cover rounded-xl shadow"
          />
          <a
            href="/"
            className="text-3xl font-bold text-[#6C5CE7] uppercase tracking-wider text-center md:text-left"
          >
            Hair Coaction
          </a>
        </div>
        <nav className="w-full md:w-auto order-3 md:order-none">
          <ul
            className={`${
              menuActive ? "flex" : "hidden"
            } md:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 mt-5 md:mt-0 items-center`}
          >
            <li>
              <a
                href="/about"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/#courses"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#internships"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Internships
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex gap-4">
          <a
            href="/login"
            className="inline-block px-5 py-3.5 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all "
          >
            My Courses
          </a>
          {/* logout button  */}
          <button
            className="Btn"
            onClick={async () => {
              try {
                await axios.post(
                  "http://localhost:3000/user/logout",
                  {},
                  {
                    withCredentials: true,
                  }
                );
                alert("Logged out");
                navigate("/");
              } catch (error) {
                console.error("Logout failed:", error);
                alert("Logout failed. Try again.");
              }
            }}
          >
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </div>
            <div className="text">Logout</div>
          </button>

        </div>
        <button
          className="md:hidden ml-auto text-2xl text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
