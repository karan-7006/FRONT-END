import React, { useEffect, useState } from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import AdNavHeader from '../../AdCommon/AdNavHeader'
import axios from 'axios';

function TeamManage() {

    const [team, setteam] = useState([]);

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/team")
        console.log(res.data);
        setteam(res.data)
    }

    const [teamdata, setteamdata] = useState({
        id: "",
        name: "",
        role: "",
        img: "",
        description: ""
    })

    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/team/${id}`)
        console.log(res.data);
        setteamdata(res.data);
    }

    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/team/${id}`)
        console.log(res.data);
        fetchdata();
    }

    // Update Form

    const [Update, setupdate] = useState(null);
    const [updatedata, setupdatedata] = useState({
        id: "",
        name: "",
        role: "",
        img: "",
        description: ""
    });

    const openmodal = (id) => {
        setupdate(id)
        setupdatedata(id)
    };

    const changedata = (e) => {
        setupdatedata({
            ...updatedata,
            [e.target.name]: e.target.value
        });
        console.log(updatedata);
    };

    const submit = async (e) => {
        e.preventDefault()

        const res = await axios.put(`http://localhost:3000/team/${updatedata.id}`, updatedata);
        console.log(res.data);
        fetchdata();

        setupdatedata({
            id: "",
            name: "",
            role: "",
            img: "",
            description: ""
        });
        setupdate(null)
    }

    return (
        <div>
            <AdHeader />
            <AdNavHeader title="Manage Team" subtitle="Team" />

            <div className="container py-5">
                <h1 className='fw-bold text-primary text-center mb-4'><u>Team Management</u></h1>
                <table className="table table-striped table-hover table-primary">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Description</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    {
                        team && team.map((data) => {
                            console.log(data)
                            return (
                                <tbody>
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.role}</td>
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
                                <div className="team-item p-4">
                                    <div className="team-content">
                                        <div className="d-flex justify-content-between border-bottom pb-4">
                                            <div className="text-start">
                                                <h4 className="mb-0">{teamdata.name}</h4>
                                                <p className="mb-0">{teamdata.role}</p>
                                            </div>
                                            <div>
                                                <img
                                                    src={teamdata.img}
                                                    className="img-fluid rounded"
                                                    style={{ width: 275, height: 200 }}
                                                    alt
                                                />
                                            </div>
                                        </div>
                                        <div className="team-icon rounded-pill d-flex justify-content-center my-4 p-3">
                                            <a
                                                className="btn btn-primary btn-sm-square rounded-circle me-3"
                                                href
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a
                                                className="btn btn-primary btn-sm-square rounded-circle me-3"
                                                href
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a
                                                className="btn btn-primary btn-sm-square rounded-circle me-3"
                                                href
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                            <a
                                                className="btn btn-primary btn-sm-square rounded-circle me-0"
                                                href
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                        <p className="text-center mb-0">
                                            {teamdata.description}
                                        </p>
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
                                                <h1 className="mb-4 text-center fw-bold mb-4" style={{ color: "darkslateblue" }}><u>Update Your Team</u></h1>
                                                <form>
                                                    <div className="row g-4">
                                                        <div className="col-lg-12 col-xl-6">
                                                            <div className="form-floating">
                                                                <input type="text" name='name' value={updatedata && updatedata.name} onChange={changedata} className="form-control" id="name" placeholder="Your Name" style={{ color: "darkslateblue" }} />
                                                                <label htmlFor="name">Your Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-xl-6">
                                                            <div className="form-floating">
                                                                <input type="text" name='role' value={updatedata && updatedata.role} onChange={changedata}  className="form-control" id="role" placeholder="Your Role" style={{ color: "darkslateblue" }} />
                                                                <label htmlFor="name">Your Role</label>
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
                                                                <button className="btn btn-light w-100 py-3" style={{ color: "darkslateblue", fontSize: "20px" }} onClick={submit} data-bs-dismiss="modal">update blogs</button>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <button className="btn btn-light w-100 py-3" style={{ color: "darkslateblue", fontSize: "20px" }} onClick={() => setupdate(null)} data-bs-dismiss="modal">cancle blogs</button>
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

export default TeamManage
