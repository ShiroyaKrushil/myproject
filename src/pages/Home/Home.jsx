import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-3 col-sm-4  bg-light  p-5 m-3 box ">
                <h2 className="text-center">Company</h2>
                <span className="span text-center">0</span>
              </div>
              <div className="col-md-3 col-sm-4  bg-light  p-5 m-3 box">
                <h2 className="text-center">Vehicle</h2>
                <span className="span text-center">0</span>
              </div>
              <div className="col-md-3 col-sm-4  bg-light  p-5 m-3 box">
                <h2 className="text-center">Driver</h2>
                <span className="span text-center">0</span>
              </div>
              <div className="col-md-3 col-sm-4  bg-light  p-5 m-3 box">
                <h2 className="text-center">Customer</h2>
                <span className="span text-center">0</span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
<div className="main d-flex">
  <div className="main_left"></div>
  <div className="main_right"></div>
</div>;
