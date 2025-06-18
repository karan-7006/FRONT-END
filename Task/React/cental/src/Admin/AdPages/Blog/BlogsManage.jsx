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

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Blogs Manage" name="Manage" />

      <div className="container py-5">
        <h1 className="display-4 fw-bold text-center text-secondary my-3">
          Blogs Management
        </h1>
        <table className="table table-success table-striped table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">title</th>
              <th scope="col">date</th>
              <th scope="col">comment</th>
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
                      <button className="btn btn-warning">View</button>
                      <button className="btn btn-secondary mx-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogsManage;
