const HomePage = () => {
  return (
    <div className="flex flex-col place-items-center pt-60">
      <h1 className="font-major text-7xl md:text-8xl text-text dark:dark py-10 px-5 text-center">
        hello world
      </h1>
      <p className="font-source text-lg lg:text-xl text-text dark:dark text-center pb-10 px-5 whitespace-pre-line">
        {`Stereotypical enough? :smile:
        
        Anyway, welcome to my website.`}
      </p>
    </div>
  );
};

export default HomePage;
