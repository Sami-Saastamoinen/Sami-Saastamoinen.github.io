import TextCard from "../components/TextCard";
import Computer from "../assets/Computer.jpg";
import Printer3D from "../assets/3dPrinter.jpg";
import DiscGolf from "../assets/DiscGolf.jpg";
import VideoGames from "../assets/Videogames.jpg";

const AboutPage = () => {
  const dob = new Date("2001-01-23");
  let age = new Date().getFullYear() - dob.getFullYear();
  const m = new Date().getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && new Date().getDate() < dob.getDate())) {
    age--;
  }

  return (
    <div className="flex flex-col place-items-center pt-24">
      <h1 className="font-major text-5xl text-text dark:dark py-10 text-center">
        about me
      </h1>
      <p className="font-source text-lg lg:text-xl text-text dark:dark text-center pb-10 px-5 whitespace-pre-line">
        {`I'm a ${age} year old Software Engineer from Tampere, Finland. I have recently graduated with a Bachelor's degree in ICT Engineering specializing in Software Engineering from Tampere University of Applied Sciences.
        
        Here's a few of my hobbies and objects of interest:`}
      </p>
      <TextCard
        title="computers"
        text="I have always been intrested at computers and all tech in general. It has always intrigued me how they work, so learning to code was a natural step for me. Currently I'm  a last year student at TAMK."
        image={Computer}
      />
      <TextCard
        title="3d printers"
        text="Started the 3D printing hobby this year. I'm very keen on tinkering with things. Along with it I have started to learn CAD modeling which could be a very useful skill in the future."
        image={Printer3D}
      />
      <TextCard
        title="disc golf"
        text="Got introduced to disc golf in 2020 by a friend and have been completely hooked ever since. It has been a great way to spend time outside and balance the otherwise tech heavy life."
        image={DiscGolf}
      />
      <TextCard
        title="video games"
        text="Of course I have to also mention video games. My main genres are FPS and Racing. Mainly CSs and CODs from the FPS games. Racing (mostly drifting) takes place in Assetto Corsa with occasional rally."
        image={VideoGames}
      />
    </div>
  );
};

export default AboutPage;
