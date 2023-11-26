const ContactPage = () => {
  const email = (
    <a
      href="mailto:sami.saastamoinen0@gmail.com"
      className="font-source text-accent dark:dark underline font-bold"
    >
      Email me
    </a>
  );
  const linkedin = (
    <a
      href="https://www.linkedin.com/in/samisaastamoinen/"
      className="font-source text-accent dark:dark underline font-bold"
    >
      @samisaastamoinen
    </a>
  );
  const github = (
    <a
      href="https://github.com/Sami-Saastamoinen/"
      className="font-source text-accent dark:dark underline font-bold"
    >
      @Sami-Saastamoinen
    </a>
  );

  return (
    <div className="flex flex-col place-items-center pt-24">
      <h1 className="font-major text-5xl text-text dark:dark py-10 text-center">
        contact me
      </h1>
      <p className="font-source text-lg lg:text-xl text-text dark:dark text-center pb-10 px-5 whitespace-pre-line">
        Need to contact me? Here&apos;s a few ways to do so:
        <br />
        <br />
        {email}
        <br />
        <br />
        LinkedIn: {linkedin}
        <br />
        <br />
        GitHub: {github}
      </p>
    </div>
  );
};

export default ContactPage;
