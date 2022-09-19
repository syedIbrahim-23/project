import React from "react";
import Navbar from "./Navbar";
import homeImage from "../images/Storeily_Image-600x639-1.png";

function Home() {
  return (
    <>
      <Navbar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Sell your products <br />
                    Faster on
                    <strong className="brand-name"> Storeily </strong>
                  </h1>

                  <h2 className="my-3">
                    Storeily connects you to a huge community of buyers and
                    sellers. Chat with them in real time and seal the deal
                  </h2>

                  <div className="mt-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.worxstax.storeily"
                      className="btn-get-started"
                    >
                      Download Now
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={homeImage}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
