import React, { Component } from "react";
import pic01 from "../images/pexels-nout-gons-378570.jpeg";

type Props = {};

type State = {};

export default class Main extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <section className="content pt-3 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-12">
                <ul className="list-group list-group-flush content-left mb-4">
                  <li className="list-group-item">The Drive</li>
                  <li className="list-group-item">The Walk</li>
                  <li className="list-group-item">The Return</li>
                  <li className="list-group-item">The End</li>
                </ul>
              </div>
              <div className="col-md-6 col-12">
                <div className="content_center mb-4">
                  <h2>The Walk</h2>
                  <p>
                    The walk to the Pulpit Rock will take you approximately two
                    hours, give or take an hour depending on the weather
                    conditions and your physical shape.
                  </p>
                  <img src={pic01} className="img-fluid" alt="..."></img>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="content-right p-2">
                  <div className="content_right-inner">
                    <h3>What?</h3>
                    <p>
                      The Pulpit Rock is a part of a mountain that looks like a
                      pulpit.
                    </p>
                  </div>
                  <div className="content_right-inner">
                    <h3>Where?</h3>
                    <p>The Pulpit Rock is in Norway.</p>
                  </div>
                  <div className="content_right-inner">
                    <h3>Price?</h3>
                    <p>The walk is free!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
