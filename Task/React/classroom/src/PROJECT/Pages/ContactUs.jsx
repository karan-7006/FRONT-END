import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function ContactUs() {
  return (
    <div>
      <Header />

      {/* Contact Form Section */}
      <section className="container my-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <h3 className="text-danger mb-3 fw-bold">Send us a Message</h3>
            <form>
              <div className="mb-3">
                <label className="form-label text-danger fw-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-danger fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-danger fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning text-danger fw-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="col-md-6">
            <h3 className="text-danger fw-bold mb-3">Reach Us At</h3>
            <p className="text-dark fs-5">
              📍 <strong>Noodles Nation HQ</strong>
              <br />
              123 Spice Street, Food City, India
              <br />
              <strong>Phone:</strong> +91 98765 43210
              <br />
              <strong>Email:</strong> contact@noodlesnation.com
            </p>
            <h5 className="text-danger mt-4 fw-semibold">Opening Hours:</h5>
            <ul className="list-unstyled text-dark fs-5">
              <li>Mon - Fri: 11:00 AM - 10:00 PM</li>
              <li>Sat - Sun: 12:00 PM - 11:00 PM</li>
            </ul>
            <p className="mt-3 fs-5 text-dark">
              We'd love to hear your feedback, catering requests, or just your
              noodle stories!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
