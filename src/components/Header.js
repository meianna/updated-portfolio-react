import React from "react";

const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img
          className="img-fluid mb-5"
          width="500"
          height="500"
          src="assets/img/circle-cropped.png"
          alt="photo of Meianna"
        />
        <h1 className="masthead-heading text-uppercase mb-0">Meianna Oeser</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Web Developer - Digital Marketer - Strategic Thinker
        </p>
      </div>
    </header>
  );
};

export default Header;
