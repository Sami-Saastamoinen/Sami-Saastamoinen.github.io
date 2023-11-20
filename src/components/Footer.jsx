import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const Links = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "projects", url: "/projects" },
    { name: "contact", url: "/contact" },
  ];

  return (
    <div className="flex flex-col sticky top-[100vh] sm:flex-row justify-center items-center bg-card dark:dark p-10 gap-x-40 lg:gap-x-72 xl:gap-x-96 gap-y-10">
      <ul className="flex flex-col items-center sm:items-start">
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-xl my-1">
            <Link
              to={link.link}
              className="font-major text-text hover:text-accent dark:dark duration-300 underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col items-center sm:items-start">
        <li className="text-xl my-1">
          <a
            href="https://www.linkedin.com/in/samisaastamoinen/"
            className="text-text hover:text-accent dark:dark duration-300 flex items-center gap-2"
          >
            <FaLinkedin size={20} />
            @samisaastamoinen
          </a>
        </li>
        <li className="text-xl my-1">
          <a
            href="https://github.com/Sami-Saastamoinen/"
            className="text-text hover:text-accent dark:dark duration-300 flex items-center gap-2"
          >
            <FaGithub /> @Sami-Saastamoinen
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
