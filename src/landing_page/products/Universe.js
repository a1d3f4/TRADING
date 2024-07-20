import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Tradease Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 p-3 mt-5">
          <img src="media/images/smallcase-logo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div><button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button></div>
      </div>
    </div>
  );
}

export default Universe;
