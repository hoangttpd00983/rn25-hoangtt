import React, { Component } from "react";

type Props = {
  propFooter : string
};

type State = {};

export default class Footer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <footer className="footer">
          <div className="container-fluid">
            <p className="text-center p-1 m-0">
              {this.props.propFooter}
            </p>
          </div>
        </footer>
      </>
    );
  }
}
