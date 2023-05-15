import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-md-4">
      <a
        class="btn"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
        style={{marginTop:'-83px'}}
      >
        <i class="fa-solid fa-bars"></i>
      </a>

      <div
        class="offcanvas  offcanvas-start"
        tabindex=""
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "280px", background: "#0f172a" }}
      >
        <div class="offcanvas-header"></div>
        <div className="offcanvas-body">
          <div className="container">
            <div className="row">
              <div>
                <img
                  src={require("../src/assets/images/teacher-2.jpg")}
                  style={{ marginLeft: "55px" }}
                  className="profile-img"
                  alt=""
                />
                <h6 className="text-center pt-3" style={{ color: "white" }}>
                  john doe
                </h6>
                <h6 className="text-center" style={{ color: "gray" }}>
                  john@gmail.com
                </h6>
              </div>
              <div className="sidebar-menu">
                <ul>
                  <li className="nav-link">
                    <Link to="/">
                      <i class="fa-solid fa-house"></i>Home
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/company">
                      <i class="fa-solid fa-building"></i>Company
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/vehicle">
                      <i class="fa-solid fa-car"></i>Vehicle
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/driver">
                      <i class="fa-solid fa-id-card"></i>Driver
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/customer">
                      <i class="fa-solid fa-person"></i>Customer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
