import React from "react";
import axios from "axios"; // Import Axios

function OpenAccount() {

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Tradease account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button>
          <a class="nav-link active" href="http://localhost:3002/signup">
          Signup
        </a>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
