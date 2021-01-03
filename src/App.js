import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navBar";
import Deposit from "./components/deposit";
import Toast from "./components/common/toast";
import config from "./config.json";
import Utils from "./utils/index";
import AppContext from "./components/context/appContext";

function App(props) {
  const [tronWeb, setTronWeb] = useState(false);
  const [contract, setContract] = useState(false);

  useEffect(() => {
    async function getTronWeb() {
      try {
        const tronweb = await Utils.gettronweb();
        if (tronweb) {
          setTronWeb(tronweb);
        }
      } catch (error) {
        toast.error(<Toast message={error.message} />);
      }
    }
    getTronWeb();
  }, [tronWeb]);

  useEffect(() => {
    async function setupContract() {
      try {
        if (tronWeb) {
          const instance = await tronWeb.contract().at(config.contractAddress);
          setContract(instance);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setupContract();
  }, [tronWeb, contract]);
  return (
    <AppContext.Provider value={{ tronWeb, contract }}>
      <Fragment>
        <header className="App-header">
          <NavBar />
        </header>
        <div className="container">
          <div className="py-3">
            <Deposit />
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={false}
          newestOnTop
          closeButton={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
        />
      </Fragment>
    </AppContext.Provider>
  );
}

export default App;
