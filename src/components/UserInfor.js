import React from "react";

class UserInfor extends React.Component {
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
      name: event.target.value,
    });
  };
  handlOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label>Your name : </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handlOnChangeInput(event);
            }}
          ></input>

          <label>Your age : </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handlOnChangeAge(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
