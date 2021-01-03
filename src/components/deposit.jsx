import React, { Fragment, useContext, useEffect, useState } from "react";
import Toast from "./common/toast";
import AppContext from "./context/appContext";

function Deposit(props) {
  const depositValues = [25, 50, 100, 200, 500];
  const [depositAmount, setDepositAmount] = useState(0);
  const [contractAddress, setContractAddress] = useState("n/a");
  const [walletAddress, setWalletAddress] = useState("n/a");
  const [clickedAmount, setClickedAmount] = useState(0);
  const { tronWeb, contract, toast } = useContext(AppContext);

  useEffect(() => {
    if (tronWeb) setWalletAddress(tronWeb.defaultAddress.base58);
    if (tronWeb && contract)
      setContractAddress(tronWeb.address.fromHex(contract.address));
  }, [tronWeb, contract]);

  const handleDeposit = async () => {
    try {
      if (!tronWeb)
        throw new Error(
          "Connect Tron Wallet: Make sure your Tron wallet (e.g. TronLink) is enabled, and refresh the page."
        );
      const deposit = await tronWeb.trx.sendTransaction(
        contractAddress,
        tronWeb.toSun(depositAmount)
      );
      if (deposit) {
        console.log(deposit);
        toast.success(<Toast message="Deposit successful" />);
      }
    } catch (err) {
      toast.error(<Toast message={err.message} />);
    }
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <h5 className="card-title">Deposit TRX to Smart Contract</h5>

                  <h6>
                    <strong>Contract Address:</strong>
                    <a
                      href={`https://shasta.tronscan.org/#/contract/${contractAddress}`}
                    >
                      &nbsp;{contractAddress}
                    </a>
                  </h6>

                  <h6>
                    <strong>My Tron Address:</strong>&nbsp;{walletAddress}
                  </h6>
                </div>
                <div className="col-lg-8">
                  {depositValues.map((amount, index) => (
                    <button
                      className={
                        parseInt(clickedAmount) === parseInt(amount)
                          ? "btn btn-warning mr-1"
                          : "btn btn-success mr-1"
                      }
                      key={index}
                      value={amount}
                      onClick={(event) => {
                        setClickedAmount(event.target.value);
                        setDepositAmount(
                          parseInt(depositAmount) + parseInt(event.target.value)
                        );
                      }}
                    >
                      {amount} TRX
                    </button>
                  ))}
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Other Amount"
                      min="1"
                      value={depositAmount}
                      onChange={(event) => {
                        setDepositAmount(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-right">
                  <hr />
                  <button
                    className="btn btn-outline-danger mr-2"
                    onClick={() => {
                      setClickedAmount(0);
                      setDepositAmount(0);
                    }}
                  >
                    <i className="fas fa-sync-alt"></i> &nbsp;Reset
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    onClick={handleDeposit}
                  >
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    &nbsp;Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Deposit;
