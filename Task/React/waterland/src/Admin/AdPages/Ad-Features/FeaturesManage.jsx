import React, { useEffect, useState } from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import AdNavHeader from '../../AdCommon/AdNavHeader'
import axios from 'axios';
import { data } from 'react-router-dom';

function FeaturesManage() {

  const [features, setfeatures] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Features")
    console.log(res.data);
    setfeatures(res.data);
  }

  const [featuredata, setfeaturedata] = useState({
    id: "",
    title: "",
    description: "",
    img: ""
  });

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Features/${id}`)
    console.log(res.data)
    setfeaturedata(res.data)
  };

  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Features/${id}`)
    console.log(res.data);
    fetchdata();
  }

  // Form Update...

  const [featureupdate, setfeatureupdate] = useState(null);
  const [updatedata, setupdatedata] = useState({
    id: "",
    title: "",
    description: "",
    img: ""
  });

  const openmodal = (id) => {
    setfeatureupdate(id);
    setupdatedata(id);
  };

  const changedata = (e) => {
    setupdatedata({
      ...updatedata,
      [e.target.name]: e.target.value
    });
    console.log(updatedata);
  };

  const submitdata = async (e) => {
    e.preventDefault()

    const res = await axios.put(`http://localhost:3000/Features/${updatedata.id}`, updatedata);
    console.log(res.data);
    fetchdata();

    setupdatedata({
      id: "",
      title: "",
      description: "",
      img: ""
    });
    setfeatureupdate(null);
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Manage Features" subtitle="Features" />

      <div className="container py-5">
        <h1 className='fw-bold text-primary text-center mb-4'><u>Features Management</u></h1>
        <table class="table table-striped table-hover table-primary">
          <thead>
            <tr className='text-center'>
              <th scope="col">#id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          {
            features && features.map((data) => {
              console.log(data);
              return (
                <tbody>
                  <tr className='text-center'>
                    <th scope="row">{data.id}</th>
                    <td>{data.title}</td>
                    <td style={{ width: "500px" }}>{data.description}</td>
                    <td>
                      <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => getdata(data.id)}>View</button>
                      <button className='btn btn-warning mx-2' data-bs-toggle="modal" data-bs-target="#secondModal" onClick={() => openmodal(data)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => deletedata(data.id)}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <h1 className="mb-4 text-center fw-bold mb-4" style={{ color: "darkslateblue" }}><u>View Feature</u></h1>
                <div className="position-relative rounded overflow-hidden" style={{ maxWidth: "100%", height: "400px" }}>
                  <img
                    src={featuredata.img}
                    className="w-100 h-100"
                    alt="Feature"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4"
                    style={{ background: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <h4 className="text-white">{featuredata.title}</h4>
                    <p className="text-white mb-3" style={{ maxWidth: "400px" }}>
                      {featuredata.description}
                    </p>
                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                      Read More <i className="fa fa-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <button type="button" className="btn btn-primary">Understood</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          updatedata && (
            <div class="modal fade" id="secondModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="secondModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-body">
                    <div className='container py-3'>
                      <div className="p-5 rounded" style={{ backgroundImage: "url('https://images.pexels.com/photos/4253060/pexels-photo-4253060.jpeg')", backgroundRepeat: "no-repeat", objectFit: "cover", backgroundSize: "100% 100%" }}>
                        <h1 className="mb-4 text-center fw-bold mb-4" style={{ color: "darkslateblue" }}><u>Add Your Features</u></h1>
                        <form>
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-floating">
                                <input type="text" name='title' value={updatedata && updatedata.title} onChange={changedata} className="form-control" id="name" placeholder="Your title" style={{ color: "darkslateblue" }} />
                                <label htmlFor="name">Your title</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-floating">
                                <input type="url" name='img' value={updatedata && updatedata.img} onChange={changedata} className="form-control" id="image" placeholder="your Images url" style={{ color: "darkslateblue" }} />
                                <label htmlFor="image">your Images url</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-floating">
                                <textarea className="form-control" name='description' value={updatedata && updatedata.description} onChange={changedata} placeholder="Leave a message here Desc" id="message" style={{ height: 160, color: "darkslateblue" }} defaultValue={""} />
                                <label htmlFor="message">Message</label>
                              </div>
                            </div>
                            <div className="row mt-4">
                              <div className="col-md-6">
                                <button className="btn btn-light w-100 py-3" style={{ color: "darkslateblue", fontSize: "20px" }} onClick={submitdata} data-bs-dismiss="modal">update blogs</button>
                              </div>
                              <div className="col-md-6">
                                <button className="btn btn-light w-100 py-3" style={{ color: "darkslateblue", fontSize: "20px" }} onClick={() => setfeatureupdate(null)} data-bs-dismiss="modal">cancle blogs</button>
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
          )
        }

      </div>


    </div>

  )
}

export default FeaturesManage
