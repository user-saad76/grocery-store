import React from "react";


function PaymentDetails() {
  return (
    <section className="container my-5">
      <h2 className="fw-bold text-center mb-4">
        Why Shop With <span className="text-success">Us?</span>
      </h2>

      <div className="row g-4">
        {/* 💳 Secure Payment */}
        <div className="col-md-3">
          <div className="info-card text-center p-4 shadow-sm border-0 h-100">
            <div className="icon-box mb-3 bg-primary bg-opacity-10 text-primary">
              <i className="fa-solid fa-credit-card"></i>
            </div>
            <h5 className="fw-bold">Secure Payment</h5>
            <p className="text-muted">
              We offer safe and encrypted payment options for a worry-free
              shopping experience.
            </p>
          </div>
        </div>

        {/* 🏷️ Great Discounts */}
        <div className="col-md-3">
          <div className="info-card text-center p-4 shadow-sm border-0 h-100">
            <div className="icon-box mb-3 bg-danger bg-opacity-10 text-danger">
              <i className="fa-solid fa-tag"></i>
            </div>
            <h5 className="fw-bold">Exciting Discounts</h5>
            <p className="text-muted">
              Enjoy amazing deals and weekly discounts on your favorite grocery
              and home items.
            </p>
          </div>
        </div>

        {/* 🚚 Home Delivery */}
        <div className="col-md-3">
          <div className="info-card text-center p-4 shadow-sm border-0 h-100">
            <div className="icon-box mb-3 bg-success bg-opacity-10 text-success">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h5 className="fw-bold">Fast Home Delivery</h5>
            <p className="text-muted">
              Get your groceries delivered to your doorstep quickly and safely —
              no need to step out!
            </p>
          </div>
        </div>

        {/* 🏆 Product Quality */}
        <div className="col-md-3">
          <div className="info-card text-center p-4 shadow-sm border-0 h-100">
            <div className="icon-box mb-3 bg-warning bg-opacity-10 text-warning">
              <i className="fa-solid fa-award"></i>
            </div>
            <h5 className="fw-bold">Premium Quality</h5>
            <p className="text-muted">
              Our products are carefully sourced and checked to ensure the best
              freshness and quality for your family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentDetails;
