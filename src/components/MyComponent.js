// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hoi Dan It",
    address: "Ha noi",
    age: 26,
  };
  handleClick = (event) => {
    console.log(">>> click my button");

    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMouseOver(event) {
    // console.log(event);
  }
  handlOnChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm {this.state.age}
        <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
          <input
            type="text"
            onChange={(event) => { this.handlOnChangeInput(event) }}
          >
          </input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
