import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    //destructuring array/object
    const { listUsers } = this.props; //object
    // console.log(listUsers);
    // console.table(listUsers);
    //const { listUsers } = this.props.listUsers
    // props => properties
    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser ? "Hide List User:" : "Show List User:"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name} </div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
