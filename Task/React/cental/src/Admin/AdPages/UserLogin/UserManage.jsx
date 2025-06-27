import React, { useEffect, useState } from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import NavHeader from '../../../Website/Common/NavHeader'
import axios from 'axios';
import { data } from 'react-router-dom';

function UserManage() {

    const [form, setform] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/user");
        console.log(res.data);
        setform(res.data);
    };

    const [formdata, setformdata] = useState({
        id: "",
        name: "",
        email: "",
        status: ""
    });

    const [formopen, setformopen] = useState(null);
    const [updateform, setupdateform] = useState({
        id: "",
        name: "",
        email: "",
        status: ""
    });

    const modal = (id) => {
        setformopen(id);
        setupdateform(id);
    };

    const datachange = (e) => {
        setupdateform({
            ...updateform,
            [e.target.name]: e.target.value,
        });
        console.log(updateform);
    };

    const updatedata = async (e) => {
        e.preventDefault();

        const res = await axios.put(`http://localhost:3000/user/${updateform.id}`, updateform);
        console.log(res.data);
        fetchdata();

        setupdateform({
            id: "",
            name: "",
            email: "",
            status: ""
        });

        setformopen(null);
    };


    return (
        <div>
            <AdHeader />
            <NavHeader title="Manage Status" name="Status" />

            <div className="container py-5">
                <h1 className="display-4 fw-bold text-center text-secondary my-3 mb-4">
                    <u>Status Management</u>
                </h1>
                <table className="table table-success table-striped table-hover">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            form && form.map((data) => {
                                console.log(data);
                                return (
                                    <tr className="text-center">
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.status}</td>
                                        <td>
                                            <button
                                                className="btn btn-secondary mx-2"
                                                data-bs-toggle="modal" data-bs-target="#userModal"
                                                onClick={()=> modal(data)}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {
                formopen && (
                    <div class="modal fade" id="userModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <form>
                                        <h1 className='text-center fw-bold text-primary my-4'><u>User Status</u></h1>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="email" value={updateform && updateform.email} name='email' id="email" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example1cg">Your Email</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" value={updateform && updateform.status} onChange={datachange} name='status' id="status" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Status</label>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" class="btn btn-success me-3" data-bs-dismiss="modal" onClick={updatedata}>Update Status</button>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setformopen(null)}>Close</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>

    )
}

export default UserManage
