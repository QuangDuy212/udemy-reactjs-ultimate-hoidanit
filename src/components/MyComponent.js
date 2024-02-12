// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="Duy Nguyen" age="30" />
        <hr />
        <DisplayInfor name="Quang Duy" age={20} />
      </div>
    );
  }
}

export default MyComponent;
