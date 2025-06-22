import React, { useState } from "react";
import AdHeader from "../../AdCommon/AdHeader";
import AdNavHeader from "../../AdCommon/AdNavHeader";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

function CarsAdd() {

  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    img: "",
    name: "",
    review: "",
    price: "",
    Seat: "",
    year: "",
    mileage: "",
  });

  const getChange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };


  const handlecar = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/Vehicle", form);
    console.log(res.data);
    redirect("/CarsManage");
    setform({
      id: "",
      img: "",
      name: "",
      review: "",
      price: "",
      Seat: "",
      year: "",
      mileage: "",
    });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Your Cars" name="cars" />

      <div className="container py-5">
        <h1 className="text-center text-secondary fw-bold display-4 mb-5">
          <u>Cars Management</u>
        </h1>
        <div className="bg-secondary p-5 rounded">
          <h4 className="text-warning text-center fw-bold mb-4">
            <u>Add Your Blogs</u>
          </h4>
          <form onSubmit={handlecar}>
            <div className="row g-4">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    value={form.name}
                    onChange={getChange}
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Enter Name</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    value={form.review}
                    onChange={getChange}
                    name="review"
                    type="text"
                    className="form-control"
                    id="review"
                    placeholder="Your Review"
                  />
                  <label htmlFor="email">Enter Review</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    value={form.price}
                    onChange={getChange}
                    name="price"
                    type="price"
                    className="form-control"
                    id="price"
                    placeholder="Price"
                  />
                  <label htmlFor="phone">Enter Price</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    value={form.Seat}
                    onChange={getChange}
                    name="Seat"
                    type="tel"
                    className="form-control"
                    id="Sear"
                    placeholder="Seat"
                  />
                  <label htmlFor="project">Enter Seat</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    value={form.year}
                    onChange={getChange}
                    name="year"
                    type="tel"
                    className="form-control"
                    id="year"
                    placeholder="Year"
                  />
                  <label htmlFor="subject">Enter Year</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    value={form.mileage}
                    onChange={getChange}
                    name="mileage"
                    type="tel"
                    className="form-control"
                    id="Mileage"
                    placeholder="Mileage"
                  />
                  <label htmlFor="subject">Enter Mileage</label>
                </div>
              </div>
              <div className="col-log-12">
                <div className="form-floating">
                  <input
                    value={form.img}
                    onChange={getChange}
                    name="img"
                    type="url"
                    className="form-control"
                    id="img"
                    placeholder="Image"
                  />
                  <label htmlFor="subject">Insert Your Image</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light w-100 py-3">
                  SUbmit Your Data
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarsAdd;
