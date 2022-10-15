import React, { Component } from "react";

type Props = {};

type State = {
  currentSecond: number;
};

export default class Countdown extends Component<Props, State> {
  DEFAULT_MAX_SECOND: number;
  constructor(props: Props) {
    super(props);
    //properties
    this.DEFAULT_MAX_SECOND = 100;

    //State
    this.state = {
      currentSecond: this.DEFAULT_MAX_SECOND,
    };
  }

  render() {
    return <div>{this.state.currentSecond}</div>;
  }
}
