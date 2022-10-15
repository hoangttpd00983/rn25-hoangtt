// import React, { Component } from 'react'

// type Props = {}

// type State = {
//   numberState : number
// }

// export default class BtNumber extends Component<Props, State> {
//   constructor (props: Props){
//     super(props);
//     this.state = {
//       numberState : 0
//     }
//   }
//   handleClick = () => {
//     this.setState({ numberState: this.state.numberState + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.numberState}</p>
//         <button onClick={this.handleClick}>Click</button>
//       </div>

//     )
//   }
// }
import React, { useState } from "react";

type Props = {};

function BtNumber({}: Props) {
  const [numberState, setnumberState] = useState(0);
  const handleClick = () => {
    setnumberState(numberState + 1);
  };
  return (
    <div>
      <p>{numberState}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default BtNumber;
