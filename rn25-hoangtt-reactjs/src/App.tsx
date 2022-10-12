import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pic01 from "./images/pexels-nout-gons-378570.jpeg";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Basic01 from "./Homeworks/Session02/Basic01"
import Basic02 from "./Homeworks/Session02/Basic02"
import Basic03 from "./Homeworks/Session02/Basic03";
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
      <Basic01/>
      <Basic02/>
      <Basic03/>  
    </>
   
  );
}
export default App;
