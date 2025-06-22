import React, { useState } from "react";
import AdHeader from "../../AdCommon/AdHeader";
import AdNavHeader from "../../AdCommon/AdNavHeader";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

function TeamAdd() {

  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    name: "",
    role: "",
    img: "",
  });

  const getChange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleteam = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/customer", form);
    console.log(res.data);
    redirect("/TeamManage");
    setform({
      id: "",
      name: "",
      role: "",
      img: "",
    });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Your Team" name="Team" />

      <div className="container py-5">
        <h1 className="text-center text-secondary fw-bold display-4 mb-5">
          <u>Team Management</u>
        </h1>
        <div className="bg-secondary p-5 rounded">
          <h4 className="text-warning text-center fw-bold mb-4">
            <u>Add Your Team</u>
          </h4>
          <form onSubmit={handleteam}>
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
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    value={form.role}
                    onChange={getChange}
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
                    value={form.img}
                    onChange={getChange}
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
                <button className="btn btn-light w-100 py-3">
                  Submit Your Data
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeamAdd;
