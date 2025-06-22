import React, { useEffect, useState } from "react";
import AdHeader from "../../AdCommon/AdHeader";
import AdNavHeader from "../../AdCommon/AdNavHeader";
import axios from "axios";

function BlogsManage() {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Blog");
    console.log(res.data);
    setblogs(res.data);
  };

  const [blogdata, setblogdata] = useState({
    id: "",
    title: "",
    name: "",
    comment: "",
    date: "",
    img: "",
    description: "",
  });

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Blog/${id}`);
    console.log(res.data);
    setblogdata(res.data);
  };

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Blog/${id}`);
    console.log(res.data);
    fetchdata();
  };

  // Update Form

  const [blogopen, setblogopen] = useState(null);
  const [updateblog, setupdateblog] = useState({
    id: "",
    title: "",
    name: "",
    comment: "",
    date: "",
    img: "",
    description: "",
  });

  const modal = (id) => {
    setblogopen(id);
    setupdateblog(id);
  };

  const datachange = (e) => {
    setupdateblog({
      ...updateblog,
      [e.target.name]: e.target.value,
    });
    // console.log(updateblog)
  };

  const updatedata = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:3000/Blog/${updateblog.id}`,
      updateblog
    );
    console.log(res.data);
    fetchdata();

    setupdateblog({
      id: "",
      title: "",
      name: "",
      comment: "",
      date: "",
      img: "",
      description: "",
    });

    setblogopen(null);
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Blogs Manage" name="Manage" />

      <div className="container py-5">
        <h1 className="display-4 fw-bold text-center text-secondary my-3 mb-4">
          <u>Blogs Management</u>
        </h1>
        <table className="table table-success table-striped table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Comment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((data) => {
                console.log(data);
                return (
                  <tr className="text-center">
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    <td>{data.comment}</td>
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
                        data-bs-target="#staticBackdrop"
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
                );
              })}
          </tbody>
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
                <div className="col-lg-12" data-wow-delay="0.1s">
                  <div className="blog-item">
                    <h4 className="text-center fw-bold text-primary my-3 ">
                      <u>View Your Product</u>
                    </h4>
                    <div className="blog-img">
                      <img
                        src={blogdata.img}
                        className="img-fluid rounded-top w-100"
                        style={{ height: "100%" }}
                        alt="Image"
                      />
                    </div>
                    <div className="blog-content rounded-bottom p-4">
                      <div className="blog-date">{blogdata.date}</div>
                      <div className="blog-comment my-3">
                        <div className="small">
                          <span className="fa fa-user text-primary" />
                          <span className="ms-2">{blogdata.name}</span>
                        </div>
                        <div className="small">
                          <span className="fa fa-comment-alt text-primary" />
                          <span className="ms-2">
                            {blogdata.comment} Comments
                          </span>
                        </div>
                      </div>
                      <a href="#" className="h4 d-block mb-3">
                        {blogdata.title}
                      </a>
                      <p className="mb-3">{blogdata.description}</p>
                      <div className="div d-flex justify-content-between">
                        <a href="#" className>
                          Read More <i className="fa fa-arrow-right" />
                        </a>
                        <button
                          type="button"
                          class="btn btn-secondary"
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

        {blogopen && (
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-body">
                  <div className="bg-secondary p-5 rounded">
                    <h4 className="text-warning text-center fw-bold mb-4">
                      <u>Add Your Blogs</u>
                    </h4>
                    <form>
                      <div className="row g-4">
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="Title"
                              placeholder="Your Title"
                              value={updateblog && updateblog.title}
                              onChange={datachange}
                              name="title"
                            />
                            <label htmlFor="name">Your Title</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              value={updateblog && updateblog.name}
                              onChange={datachange}
                              name="name"
                            />
                            <label htmlFor="email">Your Name</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="comment"
                              placeholder="Your Comment"
                              value={updateblog && updateblog.comment}
                              onChange={datachange}
                              name="comment"
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
                              placeholder="Your Date"
                              value={updateblog && updateblog.date}
                              onChange={datachange}
                              name="date"
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
                              placeholder="Place Your Image"
                              value={updateblog && updateblog.img}
                              onChange={datachange}
                              name="img"
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
                              value={updateblog && updateblog.description}
                              onChange={datachange}
                              name="description"
                              style={{ height: 160 }}
                              defaultValue={""}
                            />
                            <label htmlFor="message">Your Description</label>
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
                                onClick={() => setblogopen(null)}
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

export default BlogsManage;
