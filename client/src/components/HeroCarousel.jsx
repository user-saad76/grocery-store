import React from "react";
import WallpaperFirst from "../assets/vegatables.png";
import WallpaperSecond from "../assets/bakery.jpg";
import WallpaperThird from "../assets/snack.png";

function HeroCarousel() {
  return (
    <section className="hero-section position-relative">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* 🥦 Slide 1 */}
          <div className="carousel-item active">
            <img
              src={WallpaperFirst}
              className="d-block w-100 hero-img"
              alt="Fresh Fruits and Vegetables"
            />
            <div className="carousel-caption d-block text-start">
              <div className="info-box bg-light p-4 rounded shadow-lg">
                <h2 className="fw-bold text-success mb-3">
                  Fresh Fruits & Vegetables Delivered Daily
                </h2>
                <p className="lead text-dark mb-4">
                  Pick from the freshest harvest — organic, juicy, and handpicked just for you.
                </p>
                <button className="btn btn-success px-4 py-2 rounded-pill">
                  Shop Now <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* 🥛 Slide 2 */}
          <div className="carousel-item">
            <img
              src={WallpaperSecond}
              className="d-block w-100 hero-img"
              alt="Dairy Products"
            />
            <div className="carousel-caption d-block text-start">
              <div className="info-box bg-light p-4 rounded shadow-lg">
                <h2 className="fw-bold text-warning mb-3">
                  Fresh Dairy & Bakery Essentials
                </h2>
                <p className="lead text-dark mb-4">
                  From creamy milk to warm bread — your daily essentials at the best prices.
                </p>
                <button className="btn btn-warning text-white px-4 py-2 rounded-pill">
                  Explore Offers <i className="fa-solid fa-tags ms-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* 🍪 Slide 3 */}
          <div className="carousel-item">
            <img
              src={WallpaperThird}
              className="d-block w-100 hero-img"
              alt="Snacks and Beverages"
            />
            <div className="carousel-caption d-block text-start">
              <div className="info-box bg-light p-4 rounded shadow-lg">
                <h2 className="fw-bold text-danger mb-3">
                  Refreshing Beverages & Crispy Snacks
                </h2>
                <p className="lead text-dark mb-4">
                  Grab your favorite snacks and drinks to energize your day anytime!
                </p>
                <button className="btn btn-danger px-4 py-2 rounded-pill">
                  View Deals <i className="fa-solid fa-bolt ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default HeroCarousel;
