import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pic01 from "./images/pexels-nout-gons-378570.jpeg";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Basic01 from "./Homeworks/Session02/Basic1/Basic01";
import Basic02 from "./Homeworks/Session02/Basic2/Basic02";
import Basic03 from "./Homeworks/Session02/Basic3/Basic03";
import BtNumber from "./components/Bt/BtNumber";
import Countdown from "./components/Bt/Countdown";
import Blockui1 from "./Homeworks/Session02/Blockui1";
import BlockUi2 from "./Homeworks/Session02/BlockUi2";
function App() {
  let propFooter = "This web page is a part of a demonstration of fluid web design made by www.w3schools.com. Resize the browser window to see thecontent response to the resizing."
  let isLogin = true
  return (
    // <div className="wrapper">
    //   <header className="header">
    //     <div className="container-fluid">
    //       <h1 className="header_title pt-2 pb-2 m-0">The Pulpit Rock</h1>
    //     </div>
    //   </header>
    //   <section className="content pt-3 pb-5">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-md-3 col-12">
    //           <ul className="list-group list-group-flush content-left mb-4">
    //             <li className="list-group-item">The Drive</li>
    //             <li className="list-group-item">The Walk</li>
    //             <li className="list-group-item">The Return</li>
    //             <li className="list-group-item">The End</li>
    //           </ul>
    //         </div>
    //         <div className="col-md-6 col-12">
    //           <div className="content_center mb-4">
    //             <h2>The Walk</h2>
    //             <p>
    //               The walk to the Pulpit Rock will take you approximately two
    //               hours, give or take an hour depending on the weather
    //               conditions and your physical shape.
    //             </p>
    //             <img src={pic01} className="img-fluid" alt="..."></img>
    //           </div>
    //         </div>
    //         <div className="col-md-3 col-12">
    //           <div className="content-right p-2">
    //             <div className="content_right-inner">
    //               <h3>What?</h3>
    //               <p>
    //                 The Pulpit Rock is a part of a mountain that looks like a
    //                 pulpit.
    //               </p>
    //             </div>
    //             <div className="content_right-inner">
    //               <h3>Where?</h3>
    //               <p>The Pulpit Rock is in Norway.</p>
    //             </div>
    //             <div className="content_right-inner">
    //               <h3>Price?</h3>
    //               <p>The walk is free!</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
      // <footer className="footer">
      //   <div className="container-fluid">
      //     <p className="text-center p-1 m-0">
      //       This web page is a part of a demonstration of fluid web design made
      //       by www.w3schools.com. Resize the browser window to see the content
      //       response to the resizing.
      //     </p>
      //   </div>
      // </footer>
    // </div>
    // <>
    // <Header isLogin = {isLogin}/>
    // <Main/>
    // <Footer propFooter={propFooter}/>
    // </>
    <>
      {/* <Basic01/>
      <Basic02/>
      <Basic03/>   */}
      {/* <BtNumber/>
      <Countdown/> */}
      {/* <Blockui1 text="Bandwidth" color1="#e54d4c" color2="#f75354" percentage={20}/>
      <Blockui1 text="Storage" color1="#2db8cd" color2="#31c8dd" percentage={50}/>
      <Blockui1 text="Users" color1="#4ac25e" color2="#51d567" percentage={70}/>
      <Blockui1 text="Visitor" color1="#e9c318" color2="#fcd518" percentage={30}/>
      <Blockui1 text="Emails" color1="#bb70d5" color2="#cb79e7" percentage={45}/>
      <Blockui1 text="Basic" color1="#eb59d6" color2="#fe60e8" percentage={80}/>
      <Blockui1 text="Others" color1="#5890da" color2="#619bec" percentage={37}/> */}
      <BlockUi2/>
    </>
   
  );
}
export default App;
