import React, { useState } from "react";
import AdHeader from "../../AdCommon/AdHeader";
import AdNavHeader from "../../AdCommon/AdNavHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogsAdd() {
  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    title: "",
    name: "",
    comment: "",
    date: "",
    img: "",
    description: "",
  });

  const getChange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleblog = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/Blog", form);
    console.log(res.data);
    redirect("/BlogsManage");
    setform({
      id: "",
      title: "",
      name: "",
      comment: "",
      date: "",
      img: "",
      description: "",
    });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Your Blogs" name="Blogs" />

      <div className="container py-5">
        <h1 className="text-center text-secondary fw-bold display-4 mb-5">
          <u>Blogs Management</u>
        </h1>
        <div className="bg-secondary p-5 rounded">
          <h4 className="text-warning text-center fw-bold mb-4">
            <u>Add Your Blogs</u>
          </h4>
          <form onSubmit={handleblog}>
            <div className="row g-4">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={getChange}
                    className="form-control"
                    id="Title"
                    placeholder="Your Title"
                  />
                  <label htmlFor="name">Your Title</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={getChange}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="email">Your Name</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    name="comment"
                    onChange={getChange}
                    value={form.comment}
                    className="form-control"
                    id="comment"
                    placeholder="Your Comment"
                  />
                  <label htmlFor="phone">Your Comment</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    onChange={getChange}
                    value={form.date}
                    placeholder="Your Date"
                  />
                  <label htmlFor="project">Enter Date</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="url"
                    className="form-control"
                    id="img"
                    name="img"
                    value={form.img}
                    onChange={getChange}
                    placeholder="Place Your Image"
                  />
                  <label htmlFor="subject">Your Img</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Leave a message here"
                    id="description"
                    style={{ height: 160 }}
                    name="description"
                    value={form.description}
                    onChange={getChange}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Your Description</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light w-100 py-3">
                  Submit Your Blog!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogsAdd;
