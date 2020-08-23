import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Let's Connect</h4>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.linkedin.com/in/meiannaoeser/"
              target="_blank"
            >
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://github.com/meianna"
              target="_blank"
            >
              <i className="fab fa-fw fa-github"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.instagram.com/meiannaaa/"
              target="_blank"
            >
              <i className="fab fa-fw fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="mailto: meianna.oeser@gmail.com"
            >
              <i className="fas fa-fw fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
