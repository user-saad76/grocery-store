import React from "react";
import { Link } from 'react-router'


function FreshMilk({ products }) {
  console.log("products",products)
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">
        🥛 Fresh <span className="text-success">Milk</span>
      </h2>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
               <Link to = {`/product/${product.id}`} style={{textDecoration:'none',color:'black'}} >
                <h5 className="card-title">{product.title}</h5>
               </Link>
                <p className="card-text text-success fw-bold">
                  Rs {product.price}
                </p>
                <button className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreshMilk;
