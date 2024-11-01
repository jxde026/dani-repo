import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Viajes</h1>
          <p>Viaja por arg,</p>
        </div>
        <div>
          <a href="/">
            <i className=" "></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Trouubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a>Proyecto final de Streambe realizado por:</a>
          <a>Abyayay Nazareno | Gaona Tiziano</a>
          <a>Garcia Daniela | Ramos Williams </a>
          <a> Yadon Gadiel</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
