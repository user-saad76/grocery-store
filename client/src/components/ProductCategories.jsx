import React from "react";
import milkImg from "../assets/milk cow.jpg";
import fruitsImg from "../assets/fruits.webp";
import vegetablesImg from "../assets/vegatables.jpg";
import flourImg from "../assets/flour.webp";
import meatImg from "../assets/meat.jpg";
import eggsImg from "../assets/eggs.jpg";
import snacksImg from "../assets/snacks and drinks.avif";

// 🆕 Import new category images
import stationaryImg from "../assets/stationery.webp";
import bakeryImg from "../assets/bakery products.jpg";
import homeEssentialsImg from "../assets/house essentails.avif";
import womenProductsImg from "../assets/makeup-bag-essential-1494336241.avif";
import menProductsImg from "../assets/men cosmetics.avif";
import cookingEssentialsImg from "../assets/food products.jpg";
import houseCleaningImg from "../assets/house cleaning.jpg";
import { Link } from 'react-router'



function ProductCategories() {
  return (
    <section className="container my-5">
      <h2 className="fw-bold text-center mb-4">
        Shop by <span className="text-success">Category</span>
      </h2>

      <div className="row g-4">
        {/* 🥛 Milk */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={milkImg} className="card-img-top category-img" alt="Fresh Milk" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Fresh Milk</h5>
              <p className="text-muted small">
                Pure & fresh dairy milk from trusted farms.
              </p>
              <Link className="btn btn-sm btn-outline-success rounded-pill mt-auto" to="/freshMilk">
                View
              </Link>
            </div>
          </div>
        </div>

        {/* 🍎 Fruits */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={fruitsImg} className="card-img-top category-img" alt="Fruits" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Fruits</h5>
              <p className="text-muted small">
                Juicy, handpicked seasonal fruits.
              </p>
              <Link className="btn btn-sm btn-outline-success rounded-pill mt-auto" to = "/fruits">
                View
              </Link>
            </div>
          </div>
        </div>

        {/* 🥕 Vegetables */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={vegetablesImg} className="card-img-top category-img" alt="Vegetables" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Vegetables</h5>
              <p className="text-muted small">
                Crisp, green, and organic vegetables.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🌾 Flour */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={flourImg} className="card-img-top category-img" alt="Flour" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Flour & Grains</h5>
              <p className="text-muted small">
                Premium flour, rice, and grains for daily use.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🍖 Meat */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={meatImg} className="card-img-top category-img" alt="Fresh Meat" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Fresh Meat</h5>
              <p className="text-muted small">
                High-quality, tender cuts of meat.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🥚 Eggs */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={eggsImg} className="card-img-top category-img" alt="Eggs" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Eggs</h5>
              <p className="text-muted small">
                Farm-fresh eggs rich in protein.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🍪 Snacks & Drinks */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={snacksImg} className="card-img-top category-img" alt="Snacks & Drinks" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Snacks & Drinks</h5>
              <p className="text-muted small">
                Tasty snacks & refreshing beverages for every moment.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* ✏️ Stationary */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={stationaryImg} className="card-img-top category-img" alt="Stationary" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Stationary</h5>
              <p className="text-muted small">
                Pens, notebooks, and office essentials.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🧁 Bakery Products */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={bakeryImg} className="card-img-top category-img" alt="Bakery Products" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Bakery Products</h5>
              <p className="text-muted small">
                Freshly baked bread, cakes, and pastries.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🏠 Home Essentials */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={homeEssentialsImg} className="card-img-top category-img" alt="Home Essentials" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Home Essentials</h5>
              <p className="text-muted small">
                Daily household items for comfort & care.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 👩 Women Products */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={womenProductsImg} className="card-img-top category-img" alt="Women Products" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Women Products</h5>
              <p className="text-muted small">
                Personal care & beauty essentials for women.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 👨 Men Products */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={menProductsImg} className="card-img-top category-img" alt="Men Products" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Men Products</h5>
              <p className="text-muted small">
                Grooming & personal care for men.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🍳 Cooking Essentials */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={cookingEssentialsImg} className="card-img-top category-img" alt="Cooking Essentials" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Cooking Essentials</h5>
              <p className="text-muted small">
                Oils, spices, and ingredients for every meal.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

        {/* 🧹 House Cleaning */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card category-card text-center shadow-sm border-0 h-100">
            <img src={houseCleaningImg} className="card-img-top category-img" alt="House Cleaning" />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">House Cleaning</h5>
              <p className="text-muted small">
                Cleaners, detergents, and disinfectants for your home.
              </p>
              <button className="btn btn-sm btn-outline-success rounded-pill mt-auto">
                View
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductCategories;
