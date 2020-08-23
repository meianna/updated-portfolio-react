import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    Modern Dashboard
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/dashboard.png"
                  alt="screenshot of home screen of dashboard app"
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    Astrologica
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/explore.gif"
                  alt="gif of screen scroll-through of astrologica explore page"
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    Weather App
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/juneau.png"
                  alt="screenshot of weather app displaying current and future forecast for Juneau"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal1Label"
                    >
                      Modern Dashboard
                    </h2>

                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="/assets/img/portfolio/dashboard.png"
                            className="d-block w-100"
                            alt="screenshot of home screen of dashboard app"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="/assets/img/portfolio/movie.png"
                            className="d-block w-100"
                            alt="screenshot of movie finder page of app"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="/assets/img/portfolio/recipe.png"
                            className="lock w-100"
                            alt="screenshot of recipe finder page of app"
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                    <p className="mb-4 mt-4">
                      My team and I collaborated on this personalized dashboard
                      app designed for modern times. The app displays relevant
                      information like Covid-19 updates and contains news and
                      entertainment features.
                    </p>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onclick="window.open('https://github.com/meianna/Project1-Group5','_blank')"
                    >
                      GitHub repo
                    </button>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onclick="window.open('https://meianna.github.io/Project1-Group5/','_blank')"
                    >
                      Launch app
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="portfolio-modal modal fade"
        id="portfolioModal2"
        tabindex="-2"
        role="dialog"
        aria-labelledby="portfolioModal2Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal2Label"
                    >
                      Astrologica
                    </h2>

                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>

                    <div
                      id="carouselExampleControls2"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="/assets/img/portfolio/explore.gif"
                            class="d-block w-100"
                            alt="gif of screen scroll-through of astrologica explore page"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="/assets/img/portfolio/signup.gif"
                            class="d-block w-100"
                            alt="gif of astrologica signup page"
                          />
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        href="#carouselExampleControls2"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#carouselExampleControls2"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>

                    <p class="mb-4 mt-4">
                      I worked with my team to create a full-stack astrology app
                      called Astrologica. We built out the backend with
                      authentication and designed the frontend with a
                      user-friendly interface.
                    </p>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      onclick="window.open('https://github.com/meianna/astrology-app-project-2','_blank')"
                    >
                      GitHub repo
                    </button>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      onclick="window.open('https://astrology-app-astrologica.herokuapp.com/','_blank')"
                    >
                      Launch app
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="portfolio-modal modal fade"
        id="portfolioModal3"
        tabindex="-3"
        role="dialog"
        aria-labelledby="portfolioModal3Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal3Label"
                    >
                      Weather App
                    </h2>

                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>

                    <div
                      id="carouselExampleControls3"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="/assets/img/portfolio/juneau.png"
                            class="d-block w-100"
                            alt="screenshot of weather app displaying current and future forecast for Juneau"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="/assets/img/portfolio/newport.png"
                            class="d-block w-100"
                            alt="screenshot of weather app displaying current and future forecast for Newport"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="/assets/img/portfolio/honolulu.png"
                            class="lock w-100"
                            alt="screenshot of weather app displaying current and future forecast for Honolulu"
                          />
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        href="#carouselExampleControls3"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#carouselExampleControls3"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>

                    <p class="mb-4 mt-4">
                      I created this simple weather app that allows the user to
                      search for weather by city. A current and 5-day forecast
                      are displayed featuring various weather conditions for the
                      selected city.
                    </p>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      onclick="window.open('https://github.com/meianna/hw6-weather-dashboard','_blank')"
                    >
                      GitHub repo
                    </button>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      onclick="window.open('https://meianna.github.io/hw6-weather-dashboard/','_blank')"
                    >
                      Launch app
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
