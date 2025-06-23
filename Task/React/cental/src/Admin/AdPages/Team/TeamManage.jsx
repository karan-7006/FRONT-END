import React, { useEffect, useState } from "react";
import AdHeader from "../../AdCommon/AdHeader";
import AdNavHeader from "../../AdCommon/AdNavHeader";
import axios from "axios";

function TeamManage() {
  const [team, setteam] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/customer");
    console.log(res.data);
    setteam(res.data);
  };

  const [teamdata, setteamdata] = useState({
    id: "",
    name: "",
    role: "",
    img: "",
  });

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/customer/${id}`);
    console.log(res.data);
    setteamdata(res.data);
  };

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/customer/${id}`);
    console.log(res.data);
    fetchdata();
  };

  // update Form

  const [teamopen, setteamopen] = useState(null);
  const [updateteam, setupdateteam] = useState({
    id: "",
    name: "",
    role: "",
    img: "",
  });

  const datachange = (e) => {
    setupdateteam({
      ...updateteam,
      [e.target.name]: e.target.value,
    });
  };

  const modal = (id) => {
    setteamopen(id);
    setupdateteam(id);
  };

  const updatedata = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:3000/customer/${updateteam.id}`,
      updateteam
    );
    console.log(res.data);
    fetchdata();

    setupdateteam({
      id: "",
      name: "",
      role: "",
      img: "",
    });

    setteamopen(null);
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Team Manage" name="Team" />

      <div className="container py-5">
        <h1 className="display-4 fw-bold text-center text-secondary my-3 mb-4">
          <u>Team Management</u>
        </h1>
        <table className="table table-success table-striped table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {team &&
            team.map((data) => {
              console.log(data);
              return (
                <tbody>
                  <tr className="text-center">
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.role}</td>
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
                        onClick={() => modal(data)}
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
                <div className="team-item p-4 pt-0">
                  <h4 className="text-center fw-bold text-primary my-3 ">
                    <u>View Your Team</u>
                  </h4>
                  <div className="team-img">
                    <img
                      src={teamdata.img}
                      className="img-fluid rounded w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="team-content pt-4">
                    <h4>{teamdata.name}</h4>
                    <p>{teamdata.role}</p>
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href="#"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-secondary"
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

        {teamopen && (
          <div
            class="modal fade"
            id="staticBackdrop1"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel1"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-body">
                  <div className="bg-secondary p-5 rounded">
                    <h4 className="text-warning text-center fw-bold mb-4">
                      <u>Add Your Team</u>
                    </h4>
                    <form>
                      <div className="row g-4">
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              value={updateteam && updateteam.name}
                              onChange={datachange}
                              name="name"
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                            />
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              value={updateteam && updateteam.role}
                              onChange={datachange}
                              name="role"
                              type="text"
                              className="form-control"
                              id="role"
                              placeholder="Your Role"
                            />
                            <label htmlFor="email">Your Role</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              value={updateteam && updateteam.img}
                              onChange={datachange}
                              name="img"
                              type="url"
                              className="form-control"
                              id="img"
                              placeholder="img"
                            />
                            <label htmlFor="phone">Insert Your Image</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-md-6">
                              <button
                                className="btn btn-light w-100 py-3"
                                onClick={updatedata} 
                                data-bs-dismiss="modal"
                              >
                                update blogs
                              </button>
                            </div>
                            <div className="col-md-6">
                              <button
                                className="btn btn-light w-100 py-3"
                                onClick={() => setteamopen(null)}
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
        )}
      </div>
    </div>
  );
}

export default TeamManage;
