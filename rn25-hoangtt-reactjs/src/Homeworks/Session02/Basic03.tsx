import React from 'react'
import pic03 from "./../../images/3.jpg";
type Props = {}

function Basic03({}: Props) {
  return (
    <>
        <section className='section03'>
            <div className='section03_box'>
                <div className='section03_inner'>
                    <div className='section03_inner-img mb-3'><img src={pic03} alt=""></img></div>
                    <div className='section03_inner-content'>
                        <p className='section03_inner-tag'>Technology</p>
                        <h3 className='section03_inner-title'>Harman Kadon Onyx Studio Mini, Review & Experiences</h3>
                        <p className='section03_inner-date'>Feb 21, 2021 by <span>drfurion</span></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Basic03