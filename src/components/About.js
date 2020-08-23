import React from "react";

const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <p className="lead">
              Hi there! I'm Meianna, a Portland native living in San Francisco.
              I work in digital marketing and I am happy to be taking a Full
              Stack Coding Boot Camp to unlock more opportunities. After
              completing this course I hope to find a way to leaverage my new
              web development skills to benefit my marketing role. Outside of
              class I enjoy sports, traveling, and spending time with friends.
              These days I mostly spend my time learning to code, learning to
              cook, and exploring the Bay Area (in a mask).
            </p>
            <div className="col-lg-12 text-center">
              <button
                className="btn btn-light btn-lg mt-4"
                type="submit"
                onclick="window.open('/assets/resume/Meianna-Oeser-Resume.pdf')"
              >
                View resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
