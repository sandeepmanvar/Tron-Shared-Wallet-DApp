import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <Fragment>
      <div className="col-md-6 offset-md-3">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
          />
        </div>
        <div className="text-right">
          <button className="btn btn-success mr-1">Login</button>
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
