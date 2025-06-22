import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";

function Cars() {
  <Helmet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <script src="js/main.js"></script>
  </Helmet>;

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Vehicle");
    // console.log(res.data);
    setCars(res.data);
  };

  return (
    <div>
      <Header />
      <NavHeader title="Our Cars" name="Categories" />

      <div>
        {/* Car categories Start */}
        <div className="container-fluid categories py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize mb-3">
                Vehicle <span className="text-primary">Categories</span>
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
          </div>

          <div className="container my-4">
            <div className="row">
              {cars &&
                cars.map((data, index) => {
                  console.log(data);
                  return (
                    <div className="col-md-4 mb-5">
                      <div
                        className="card car-card mx-auto"
                        style={{ maxWidth: "22rem" }}
                      >
                        <img
                          src={data.img}
                          className="car-img-top p-3"
                          alt="Car"
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">{data.name}</h5>
                          <p className="text-muted mb-1"></p>
                          <div className="mb-3">
                            <span className="text-warning">
                              {data.review} &#9733;&#9733;&#9733;&#9733;&#9734;
                            </span>
                          </div>
                          <div className="price text-danger fw-bold fs-4 mb-3">
                            ${data.price}/day
                          </div>

                          <div className="row text-muted text-center small g-2 mb-3">
                            <div className="col-4">
                              <i className="bi bi-person-fill me-1"> Seat: {data.Seat}</i>
                            </div>
                            <div className="col-4">
                              <i className="bi bi-calendar3 me-1"> Year: {data.year}</i>
                            </div>
                            <div className="col-4">
                              <i className="bi bi-speedometer2 me-1"> Avg: {data.mileage}km</i>
                            </div>
                          </div>

                          <button className="btn btn-danger w-100 rounded-pill">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Car categories End */}

        {/* Car Steps Start */}
        <div className="container-fluid steps py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize text-white mb-3">
                Cental<span className="text-primary"> Process</span>
              </h1>
              <p className="mb-0 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="steps-item p-4 mb-4">
                  <h4>Come In Contact</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    dolorem!
                  </p>
                  <div className="setps-number">01.</div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="steps-item p-4 mb-4">
                  <h4>Choose A Car</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    dolorem!
                  </p>
                  <div className="setps-number">02.</div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="steps-item p-4 mb-4">
                  <h4>Enjoy Driving</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    dolorem!
                  </p>
                  <div className="setps-number">03.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Car Steps End */}
        {/* Banner Start */}
        <div
          className="container-fluid banner py-5 wow zoomInDown"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="banner-item rounded">
              <img
                src="img/banner-1.jpg"
                className="img-fluid rounded w-100"
                alt
              />
              <div className="banner-content">
                <h2 className="text-primary">Rent Your Car</h2>
                <h1 className="text-white">Interested in Renting?</h1>
                <p className="text-white">
                  Don't hesitate and send us a message.
                </p>
                <div className="banner-btn">
                  <a
                    href="#"
                    className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2"
                  >
                    WhatchApp
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}
      </div>

      <Footer />
    </div>
  );
}

export default Cars;
