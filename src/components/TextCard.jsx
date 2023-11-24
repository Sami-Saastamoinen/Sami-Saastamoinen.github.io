import PropTypes from "prop-types";

const TextCard = ({ title, text, image }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-center overflow-hidden mb-10 w-3/4 md:w-11/12 bg-card rounded-2xl">
      <div className="flex-col w-full h-full p-5">
        <h1 className="font-major text-2xl lg:text-3xl text-text dark:dark pb-2">
          {title}
        </h1>
        <p className=" font-source text-text dark:dark lg:w-3/4">{text}</p>
      </div>
      <img
        src={image}
        alt=""
        className="min-h-fit w-full object-cover md:h-full md:w-80 lg:w-96"
      />
    </div>
  );
};

TextCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default TextCard;
