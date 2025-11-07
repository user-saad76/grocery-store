import React from "react";

function CategoryHeader() {
  return (
    <section className="category-header bg-light shadow-sm py-3">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

        {/* Category Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-success dropdown-toggle px-4 py-2"
            type="button"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-list me-2"></i> All Categories
          </button>

          <ul className="dropdown-menu shadow-sm mt-2" aria-labelledby="categoryDropdown">
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-apple-whole me-2 text-success"></i> Fruits
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-carrot me-2 text-success"></i> Vegetables
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-cheese me-2 text-success"></i> Dairy & Cheese
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-bottle-droplet me-2 text-success"></i> Beverages
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-bread-slice me-2 text-success"></i> Bakery
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-fish me-2 text-success"></i> Meat & Seafood
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-cookie-bite me-2 text-success"></i> Snacks
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-leaf me-2 text-success"></i> Organic Items
              </a>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="input-group search-bar" style={{ maxWidth: "400px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search groceries..."
            aria-label="Search"
          />
          <button className="btn btn-success" type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoryHeader;
