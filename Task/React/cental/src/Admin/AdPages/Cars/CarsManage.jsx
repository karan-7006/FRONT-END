import React, { useEffect, useState } from "react";
import AdHeader from "../../AdCommon/AdHeader";
import AdNavHeader from "../../AdCommon/AdNavHeader";
import axios from "axios";

function CarsManage() {
  const [car, setcar] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Vehicle");
    console.log(res.data);
    setcar(res.data);
  };

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Vehicle/${id}`);
    console.log(res.data);
    setcardata(res.data);
  };

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Vehicle/${id}`);
    console.log(res.data);
    fetchdata();
  };

  const [cardata, setcardata] = useState({
    id: "",
    img: "",
    name: "",
    review: "",
    price: "",
    Seat: "",
    year: "",
    mileage: "",
  });

  // Update Form

  const [caropen, setcaropen] = useState(null);
  const [updatecar, setupdatecar] = useState({
    id: "",
    img: "",
    name: "",
    review: "",
    price: "",
    Seat: "",
    year: "",
    mileage: "",
  });

  const openmodal = (id) => {
    setcaropen(id);
    setupdatecar(id);
  };

  const datachange = (e) => {
    setupdatecar({
      ...updatecar,
      [e.target.name]: e.target.value,
    });
    // console.log(updatecar);
  };

  const updatedata = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:3000/Vehicle/${updatecar.id}`,
      updatecar
    );
    console.log(res.data);
    fetchdata();
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="CarsManage" name="Cars" />

      <div className="container py-5">
        <h1 className="display-4 fw-bold text-center text-secondary my-3 mb-4">
          <u>Cars Management</u>
        </h1>
        <table className="table table-success table-striped table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">Review</th>
              <th scope="col">Price</th>
              <th scope="col">Seat</th>
              <th scope="col">year</th>
              <th scope="col">Mileage</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {car &&
            car.map((data) => {
              console.log(data);
              return (
                <tbody>
                  <tr className="text-center">
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.review}</td>
                    <td>${data.price}/day</td>
                    <td>{data.Seat}</td>
                    <td>{data.year}</td>
                    <td>{data.mileage}km</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => getdata(data.id)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-secondary mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1"
                        onClick={() => openmodal(data)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removedata(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div className="col">
                  <h4 className="text-center fw-bold text-primary my-3 ">
                    <u>View Your Cars</u>
                  </h4>
                  <div
                    className="card car-card mx-auto"
                    style={{ maxWidth: "30rem" }}
                  >
                    <img
                      src={cardata.img}
                      className="car-img-top p-3"
                      alt="Car"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{cardata.name}</h5>
                      <p className="text-muted mb-1"></p>
                      <div className="mb-3">
                        <span className="text-warning">
                          {cardata.review} &#9733;&#9733;&#9733;&#9733;&#9734;
                        </span>
                      </div>
                      <div className="price text-danger fw-bold fs-4 mb-3">
                        ${cardata.price}/day
                      </div>

                      <div className="row text-muted text-center small g-2 mb-3">
                        <div className="col-4">
                          <i className="bi bi-person-fill me-1">
                            {" "}
                            Seat: {cardata.Seat}
                          </i>
                        </div>
                        <div className="col-4">
                          <i className="bi bi-calendar3 me-1">
                            {" "}
                            Year: {cardata.year}
                          </i>
                        </div>
                        <div className="col-4">
                          <i className="bi bi-speedometer2 me-1">
                            {" "}
                            Avg: {cardata.mileage}km
                          </i>
                        </div>
                      </div>

                      <div className="div d-flex justify-content-between">
                        <button className="btn btn-primary w-100 rounded-pill me-2">
                          Book Now
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary rounded-pill"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {caropen && (
          <div
            class="modal fade"
            id="staticBackdrop1"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                {/* <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div> */}
                <div class="modal-body">
                  <div className="container">
                    <h1 className="text-center text-secondary fw-bold display-4 mt-2 mb-4">
                      <u>Cars Management</u>
                    </h1>
                    <div className="bg-secondary p-5 rounded">
                      <h4 className="text-warning text-center fw-bold mb-4">
                        <u>Add Your Blogs</u>
                      </h4>
                      <form>
                        <div className="row g-4">
                          <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input
                                value={updatecar && updatecar.name}
                                onChange={datachange}
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
                                value={updatecar && updatecar.review}
                                onChange={datachange}
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
                                value={updatecar && updatecar.price}
                                onChange={datachange}
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
                                value={updatecar && updatecar.Seat}
                                onChange={datachange}
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
                                value={updatecar && updatecar.year}
                                onChange={datachange}
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
                                value={updatecar && updatecar.mileage}
                                onChange={datachange}
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
                                value={updatecar && updatecar.img}
                                onChange={datachange}
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
                            <div className="row">
                              <div className="col-md-6">
                                <button
                                  className="btn btn-light w-100 py-3"
                                  data-bs-dismiss="modal"
                                  onClick={updatedata}
                                >
                                  update blogs
                                </button>
                              </div>
                              <div className="col-md-6">
                                <button
                                  className="btn btn-light w-100 py-3"
                                  data-bs-dismiss="modal"
                                >
                                  cancle blogs
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarsManage;
