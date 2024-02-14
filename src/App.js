import logo from "./logo.svg";
import "./App.scss";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "./action/actions";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world with &amp; Hoi Dan IT
        <MyComponent></MyComponent>
      </div>
    );
  }
}

// function App(props) {
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello world with Reactjs (Hoi Dan IT)</p>
//         <div>Count: {props.count}</div>

//         <button onClick={() => props.increaseCounter()}>Increase Count</button>

//         <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
//       </header>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
