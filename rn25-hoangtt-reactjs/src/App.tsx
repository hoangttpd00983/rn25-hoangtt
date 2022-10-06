import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pic01 from "./images/pexels-nout-gons-378570.jpeg";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container-fluid">
          <h1 className="header_title pt-2 pb-2 m-0">The Pulpit Rock</h1>
        </div>
      </header>
      <section className="content pt-3 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-12">
              <ul className="list-group list-group-flush content-left mb-4">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <div className="content_center mb-4">
                <h2>The Walk</h2>
                <p>
                  This is a lead paragraph. It stands out from regular
                  paragraphs.
                </p>
                <img src={pic01} className="img-fluid" alt="..."></img>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="content-right p-2">
                <div className="content_right-inner">
                  <h3>Whats</h3>
                  <p>zxnmczxczxcxz</p>
                </div>
                <div className="content_right-inner">
                  <h3>Whats</h3>
                  <p>zxnmczxczxcxz</p>
                </div>
                <div className="content_right-inner">
                  <h3>Whats</h3>
                  <p>zxnmczxczxcxz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container-fluid">
          <p className="text-center p-1 m-0">CopyRight</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
