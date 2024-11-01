import Cata from "../assets/catamarca.jpg";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination" id="title1">
      <h1>Títulos</h1>
      <p>Lorem ipsum sit amet </p>

      <div className="first-des">
        <div className="des-text">
          <h2>Header</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Cata} />
          <img alt="img" src={Cata} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
