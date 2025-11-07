import React from "react";


function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* 🏪 Brand Info */}
          <div className="col-md-4">
            <h4 className="fw-bold text-success mb-3">FreshMart</h4>
            <p className="text-light opacity-75">
              Your trusted online grocery store delivering fresh fruits,
              vegetables, and daily essentials straight to your doorstep.
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  🛒 Shop
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  📦 Orders
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  📞 Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* 📍 Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fa-solid fa-location-dot me-2 text-success"></i>
                123 Green Street, Lahore, Pakistan
              </li>
              <li>
                <i className="fa-solid fa-phone me-2 text-success"></i>
                +92 300 1234567
              </li>
              <li>
                <i className="fa-solid fa-envelope me-2 text-success"></i>
                support@freshmart.com
              </li>
            </ul>

            {/* 🌐 Social Media Icons */}
            <div className="mt-3 d-flex gap-3">
              <a href="#" className="social-icon text-light">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon text-light">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-icon text-light">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="social-icon text-light">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ⚖️ Copyright */}
        <div className="text-center mt-4 border-top pt-3 small opacity-75">
          © {new Date().getFullYear()} FreshMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
