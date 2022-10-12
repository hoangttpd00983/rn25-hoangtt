import React from 'react'
import pic01 from "./../../images/1.jpg";
type Props = {}

function basic01({}: Props) {
  return (
    <>
      <div className='wrapper'>
        <div className='box'>
          <div className='box__inner'>
            <div className='box__inner-image'>
              <img src={pic01} alt=""></img>
            </div>
            <div className='box__inner-content'>
              <h2 className='box__inner-content-title'>Clothing & Apparel</h2>
              <p>Accessories</p>
              <p>Bags</p>
              <p>Kid's Fashion</p>
              <p>Mens</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default basic01

