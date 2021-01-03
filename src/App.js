import React, { Fragment } from "react";
import NavBar from "./components/navBar";
import Deposit from "./components/deposit";

function App(props) {
  return (
    <Fragment>
      <header className="App-header">
        <NavBar />
      </header>
      <div className="container">
        <div className="py-3">
          <Deposit />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
