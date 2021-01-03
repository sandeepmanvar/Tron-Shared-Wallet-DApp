import React, { Fragment } from "react";

function Deposit(props) {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <h5 className="card-title">Deposit TRX to Smart Contract</h5>
                  <h6>Contract Address: N/A</h6>
                </div>
                <div className="col-lg-8">
                  <a className="btn btn-success mr-1">25 TRX</a>
                  <a className="btn btn-warning mr-1">50 TRX</a>
                  <a className="btn btn-success mr-1">100 TRX</a>
                  <a className="btn btn-success mr-1">200 TRX</a>
                  <a className="btn btn-success mr-1">500 TRX</a>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="number"
                      min=""
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Other Amount"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-right">
                  <hr />
                  <button className="btn btn-outline-danger mr-2">
                    <i className="fas fa-sync-alt"></i> &nbsp;Reset
                  </button>
                  <button className="btn btn-outline-primary">
                    <i class="fas fa-arrow-alt-circle-right"></i>
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
