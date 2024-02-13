// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Duy Nguyen", age: "16" },
      { id: 2, name: "Quang Duy", age: "20" },
      { id: 3, name: "Duy vippro", age: "25" },
    ],
  };
  //JSX
  // DRY : don't repeat yourself
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
