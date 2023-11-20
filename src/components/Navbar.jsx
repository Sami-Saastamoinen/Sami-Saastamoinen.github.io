import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
          <a href={"/"}>
            Sami <br /> &nbsp;Saastamoinen
          </a>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-8 text-text hover:text-accent dark:dark duration-300 md:hidden cursor-pointer absolute right-7 top-7 sm:right-8 sm:top-8"
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`md:flex md:items-center  ${isMenuOpen ? "" : "hidden"}`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-10 text-lg md:my-1 my-5">
              <a
                href={link.url}
                className="font-major text-text hover:text-accent dark:dark duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
