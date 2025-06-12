import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function AboutUs() {
  return (
    <div>
      <Header />

      {/* Logo Section */}
      <div className="text-center bg-danger pt-3 pb-3">
        <h1 className="text-light fw-bold mt-3">About Noodles Nation</h1>
        <p className="text-warning fs-5">Where every slurp tells a story!</p>
      </div>

      {/* Content Section */}
      <section className="container my-5">
        {/* First Row */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.pexels.com/photos/7594054/pexels-photo-7594054.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Delicious Noodles"
              className="img-fluid rounded shadow"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
                filter: "sepia(100%)",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-warning rounded shadow-sm h-100 d-flex flex-column justify-content-center">
              <h3 className="text-danger fw-bold mb-3">Our Story</h3>
              <p className="text-danger fs-5 mb-3">
                Born from a passion for noodles and a love for bold flavors,{" "}
                <span className="fw-semibold text-dark">Noodles Nation</span> is
                your go-to destination for everything noodle. From classic ramen
                to modern fusion dishes, we bring you the best of noodle culture
                in every bowl.
              </p>
              <p className="text-danger fs-5 mb-0">
                Our chefs craft each dish with fresh ingredients, authentic
                techniques, and a sprinkle of creativity. Join us on this
                flavorful journey and discover why we're the{" "}
                <span className="fw-semibold text-dark">
                  nation of noodles!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src="https://images.pexels.com/photos/7594061/pexels-photo-7594061.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Delicious Noodles"
              className="img-fluid rounded shadow"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
                filter: "sepia(100%)",
              }}
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="p-4 bg-warning rounded shadow-sm h-100 d-flex flex-column justify-content-center">
              <h3 className="text-danger fw-bold mb-3">Our Mission</h3>
              <p className="text-danger fs-5 mb-3">
                At <span className="fw-semibold text-dark">Noodles Nation</span>
                , we believe every bowl tells a story. We are committed to
                bringing authentic flavors with a modern twist, making every
                noodle experience unforgettable.
              </p>
              <p className="text-danger fs-5 mb-0">
                Our mission is to unite noodle lovers everywhere and celebrate
                the rich culture behind every slurp. Join us in our quest to
                explore, innovate, and share the joy of noodles with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Banner */}
      <div className="bg-danger text-center py-4">
        <h3 className="text-warning fw-bold mb-2">
          🍜 Join the Nation of Noodles!
        </h3>
        <p className="text-light fs-5 mb-0">
          From street-side classics to creative twists, we promise a bowl you'll
          remember.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
