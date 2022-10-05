import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pic01 from "./images/pexels-nout-gons-378570.jpeg";

function App() {
  return (
    <div className="container-fluid wrapper">
      <div className="header mb-4">
        <h1>The Pulpit Rock</h1>
      </div>
      <div className="row align-items-start">
        <div className="col-md-3 col-12">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-md-6 col-12">
          <h1 className="display-2">The Walk</h1>
          <p className="lead">
            This is a lead paragraph. It stands out from regular paragraphs.
          </p>
          <img
            src={pic01}
            className="img-fluid"
            alt="..."
          ></img>
        </div>
        <div className="col-md-3 col-12 col-right">
          <div className="col-line">
            <h3>Whats</h3>
            <p>zxnmczxczxcxz</p>
          </div>
          <div className="col-line">
            <h3>Whats</h3>
            <p>zxnmczxczxcxz</p>
          </div>
          <div className="col-line">
            <h3>Whats</h3>
            <p>zxnmczxczxcxz</p>
          </div>
        </div>
      </div>
      <footer>The copyright</footer>
    </div>
  );
}
export default App;
