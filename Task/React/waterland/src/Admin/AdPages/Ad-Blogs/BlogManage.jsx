import React, { useEffect, useState } from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import AdNavHeader from '../../AdCommon/AdNavHeader'
import axios from 'axios'

function BlogManage() {

    const [blog, setblog] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blog")
        console.log(res.data);
        setblog(res.data);
    };

    const [blogdata, setblogdata] = useState({
        id: "",
        badge: "",
        img: "",
        date: "",
        title: "",
        description: ""
    })

    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`)
        console.log(res.data);
        setblogdata(res.data);
    }

    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/blog/${id}`)
        console.log(res.data);
        fetchdata();
    }

    // Update Data

    const [update, setupdate] = useState(null);
    const [updatedata, setupdatedata] = useState({
        id: "",
        badge: "",
        img: "",
        date: "",
        title: "",
        description: ""
    })

    const openmodal = (id) => {
        setupdate(id)
        setupdatedata(id)
    }

    const changedata = (e) => {
        setupdatedata({
            ...updatedata,
            [e.target.name]: e.target.value
        })
        console.log(updatedata);
    };

    const submit = async (e) => {
        e.preventDefault()

        const res = await axios.put(`http://localhost:3000/blog/${updatedata.id}`, updatedata)
        console.log(res.data)
        fetchdata();

        setupdatedata({
            id: "",
            badge: "",
            img: "",
            date: "",
            title: "",
            description: ""
        })

        setupdate(null);
    }

    return (
        <div>
            <AdHeader />
            <AdNavHeader title="Manage Blogs" subtitle="Blogs" />

            <div className="container py-5">
                <h1 className='fw-bold text-primary text-center mb-4'><u>Blogs Management</u></h1>
                <table class="table table-striped table-hover table-primary">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Badge</th>
                            <th scope="col">Date</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    {
                        blog && blog.map((data) => {
                            console.log(data);
                            return (
                                <tbody>
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td scope="row">{data.badge}</td>
                                        <td scope="row" style={{ width: "100px" }}>{data.date}</td>
                                        <td scope="row" style={{ width: "200px" }}>{data.title}</td>
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
                                <h1 className="text-center fw-bold mb-4" style={{ color: "darkslateblue" }}>
                                    <u>View Feature</u>
                                </h1>

                                <div className="d-flex flex-row flex-nowrap overflow-auto">
                                    <div className="card shadow-lg me-3" style={{ minWidth: "320px", border: "none", borderRadius: "1rem" }}>
                                        <div className="position-relative">
                                            <img
                                                src={blogdata.img}
                                                className="card-img-top rounded-top"
                                                alt="Blog"
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute top-0 start-0 badge bg-primary m-3"
                                                style={{ fontSize: "0.85rem", padding: "0.5rem 0.75rem", borderRadius: "0.75rem" }}
                                            >
                                                {blogdata.badge}
                                            </span>
                                            <span
                                                className="position-absolute bottom-0 end-0 text-white bg-dark bg-opacity-75 px-3 py-1 mb-1 me-1 rounded-pill"
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                <i className="fas fa-clock me-2" />
                                                {blogdata.date}
                                            </span>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title fw-semibold mb-2">{blogdata.title}</h5>
                                            <p className="card-text text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                                                {blogdata.description}
                                            </p>
                                            <a href="#" className="btn btn-outline-primary rounded-pill">
                                                Read More <i className="fas fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <button type="button" className="btn btn-primary px-4 py-2 rounded-pill">
                                        Understood
                                    </button>
                                    <button type="button" className="btn btn-secondary px-4 py-2 rounded-pill" data-bs-dismiss="modal">
                                        Close
                                    </button>
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
                                                <h1 className="mb-4 text-center fw-bold mb-4" style={{ color: "darkslateblue" }}><u>Add Your Blogs</u></h1>
                                                <form>
                                                    <div className="row g-4">
                                                        <div className="col-lg-12 col-xl-6">
                                                            <div className="form-floating">
                                                                <input type="text" name='badge' value={updatedata && updatedata.badge} onChange={changedata} className="form-control" id="badge" placeholder="Your Badge" style={{ color: "darkslateblue" }} />
                                                                <label htmlFor="name">Your Badge</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-xl-6">
                                                            <div className="form-floating">
                                                                <input type="date" name='date' value={updatedata && updatedata.date} onChange={changedata} className="form-control" id="date" placeholder="Your Date" style={{ color: "darkslateblue" }} />
                                                                <label htmlFor="name">Your Date</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="text" name='title' value={updatedata && updatedata.title} onChange={changedata} className="form-control" id="title" placeholder="Your title" style={{ color: "darkslateblue" }} />
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
                                                                <button className="btn btn-light w-100 py-3" style={{ color: "darkslateblue", fontSize: "20px" }} data-bs-dismiss="modal" onClick={submit}>update blogs</button>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <button className="btn btn-light w-100 py-3" style={{ color: "darkslateblue", fontSize: "20px" }} data-bs-dismiss="modal" onClick={()=> setupdatedata(null)} >cancle blogs</button>
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

export default BlogManage
