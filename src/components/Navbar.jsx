import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "projects", url: "/projects" },
    { name: "contact", url: "/contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between backdrop-blur  py-4 px-10 md:pr-20 lg:pr-40">
        <div className="font-major text-xl sm:text-2xl cursor-pointer flex items-center text-text hover:text-accent dark:dark duration-300">
          <Link to={"/"}>
            Sami <br /> &nbsp;Saastamoinen
          </Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-8 text-text hover:text-accent dark:dark duration-300 md:hidden cursor-pointer absolute right-7 top-7 sm:right-8 sm:top-8"
        >
          {isMenuOpen ? (
            <HiMiniXMark size={32} />
          ) : (
            <HiMiniBars3BottomRight size={32} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center  ${isMenuOpen ? "" : "hidden"}`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-10 text-lg md:my-1 my-5">
              <Link
                to={link.url}
                className="font-major text-text hover:text-accent dark:dark duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
