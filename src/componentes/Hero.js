import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroIMG" src={props.heroImg} />
        <div className={props.heroName}>
          <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
              {props.btnText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
