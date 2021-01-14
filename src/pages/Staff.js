import React from "react";
import "../assets/css/staffPage.css";
import { useHistory } from "react-router-dom";


function Staff() {
  let history = useHistory();

  const editValueDefalt = (evt) => {
    evt.preventDefault();
    history.push("/chakriya-natthanicha-webapp/staffEditValueDefaule");

  };
  return (
    <div className="staff d-flex justify-content-center align-items-center p-5">
      <div class="card mt-5 p-4 sh-lg" style={{ borderRadius: 20 }}>
        <div class="card-body">
          <h5 class="card-title text-center h5">Staff login</h5>
          <form onSubmit={editValueDefalt}>
            <div class="form-group">
              <label >Username</label>
              <input
                class="form-control"
                id="username"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label >Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="row d-flex justify-content-around align-items-center mt-5">
              <button
                type="submit"
                class="btn btn-lg btn-primary mr-5"
                style={{ backgroundColor: "#B3B842", border: "none" }}
              >
                login
              </button>
              <button
                type="reset"
                class="btn btn-secondary btn-lg"
                style={{ backgroundColor: "#353E3B", border: "none" }}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Staff;
