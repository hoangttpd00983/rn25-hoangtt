import React from "react";
import pic02 from "./../../../images/2.jpg";
import './style.css';
type Props = {};

function basic02({}: Props) {
  return (
    <>
      <section className="section02">
        <div className="section02_box">
          <div className="section02_box-inner">
            <div className="section02_box-image">
              <img src={pic02} alt=""></img>
            </div>
            <div className="section02_box-content">
              <h5 className="section02_box-content-title pb-2">YOUNG SHOP</h5>
              <a className="product_name mb-2" href="">Samsung UHD TV 24inch</a>
              <div className="section02_icon mb-2">
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <span className="quantity_rating">02</span>
              </div>    
              <p className="price">$599</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default basic02;
