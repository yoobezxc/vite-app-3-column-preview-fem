import PropTypes from "prop-types";
import sedans from "../images/icon-sedans.svg";
import suvs from "../images/icon-suvs.svg";
import luxury from "../images/icon-luxury.svg";

function Card({ title, index, color, position }) {
  const icons = [sedans, suvs, luxury];
  const setColorBG = [
    { orange: "bg-bright-orange" },
    { darkCyan: "bg-dark-cyan" },
    { veryDarkCyan: "bg-very-dark-cyan" },
  ];
  const setColorText = [
    { orange: "text-bright-orange" },
    { darkCyan: "text-dark-cyan" },
    { veryDarkCyan: "text-very-dark-cyan" },
  ];
  const setPosition = [
    { first: "rounded-t-lg lg:rounded-l-lg lg:rounded-r-none" },
    { mid: "rounded-none" },
    { last: "rounded-b-lg lg:rounded-r-lg lg:rounded-l-none" },
  ];
  const setDescription = [
    {
      first:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      mid: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      last: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];

  return (
    <>
      <div
        className={`flex w-72 flex-col gap-8 p-10 font-['Lexend_Deca'] text-sm font-light text-white ${setColorBG[index][color]} ${setPosition[index][position]}`}
      >
        <div>
          <img src={icons[index]} alt="" />
        </div>
        <h1 className="font-['Big_Shoulders_Display'] text-4xl font-bold uppercase">
          {title}
        </h1>
        <p className="text-[#f2f2f2]">{setDescription[index][position]}</p>
        <div>
          <button
            className={`rounded-full bg-white px-6 py-3 font-normal ${setColorText[index][color]}  hover:bg-inherit hover:text-white hover:ring-2 hover:ring-white`}
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Card;
