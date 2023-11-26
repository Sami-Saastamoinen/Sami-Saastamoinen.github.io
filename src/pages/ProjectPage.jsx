import TextCard from "../components/TextCard";
import START from "../assets/START.jpg";
import Dash from "../assets/Dash.png";
import Portfolio from "../assets/Portfolio.jpg";
import Market from "../assets/Market.jpg";
import Haven from "../assets/Haven.jpg";

const ProjectPage = () => {
  return (
    <div className="flex flex-col place-items-center pt-24">
      <h1 className="font-major text-5xl text-text dark:dark py-10 text-center">
        projects
      </h1>
      <p className="font-source text-lg lg:text-xl text-text dark:dark text-center pb-10 px-5 whitespace-pre-line">
        {`Here are some of the projects that I have worked on mainly as a part of my studies:`}
      </p>
      <TextCard
        title="start"
        text="As a collab project with Teleste and TAMK, we are creating a .NET application for the company. START is used to create & simulate test data for real railway systems."
        image={START}
        link="https://github.com/Teleste-Official/START"
        linkText="Learn more on GitHub"
      />
      <TextCard
        title="forest haven resort"
        text="Currently developed project between SW & IB students for 'Software Project' course. The project is a website for a resort. The site is built with React and Tailwind."
        image={Haven}
        link="https://github.com/timosiu/Software-Project2023"
        linkText="Learn more on GitHub"
      />
      <TextCard
        title="this website"
        text="This portfolio website is a personal project of mine. It is built with React and Tailwind. The source code is available on GitHub."
        image={Portfolio}
        link="https://github.com/Sami-Saastamoinen/Sami-Saastamoinen.github.io"
        linkText="Learn more on GitHub"
      />
      <TextCard
        title="dash"
        text="DASH is a personal multiwidget dashboard application coded with React Native. Dash was done as a group project for the course 'Advanced Software Development'."
        image={Dash}
        link="https://github.com/Sameli84/dashing-dashboard"
        linkText="Learn more on GitHub"
      />
      <TextCard
        title="disc market"
        text="Disc market is a web application for buying and selling disc golf discs, created as a final project for 'Web Programming' course. The application was built with React."
        image={Market}
      />
    </div>
  );
};

export default ProjectPage;
