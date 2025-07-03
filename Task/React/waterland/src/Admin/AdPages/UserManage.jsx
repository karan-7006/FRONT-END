import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdNavHeader from '../AdCommon/AdNavHeader';
import AdHeader from '../AdCommon/AdHeader';

function UserManage() {
    const [form, setform] = useState([]);
    const [formopen, setformopen] = useState(null);
    const [updateform, setupdateform] = useState({
        id: "",
        name: "",
        email: "",
        status: ""
    });

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/user");
        setform(res.data);
    };

    const modal = (user) => {
        setformopen(user.id); // Set modal open
        setupdateform({
            id: user.id,
            name: user.name,
            email: user.email,
            status: user.status
        });
    };

    const datachange = (e) => {
        setupdateform({
            ...updateform,
            [e.target.name]: e.target.value,
        });
    };

    const updatedata = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/user/${updateform.id}`, updateform);
            fetchdata();
        } catch (error) {
            console.error("Error updating user:", error);
        }
        setupdateform({ id: "", name: "", email: "", status: "" });
        setformopen(null);
    };

    return (
        <div>
            <AdHeader />
            <AdNavHeader title="Manage Status" name="Status" />

            <div className="container py-5">
                <h1 className="display-4 fw-bold text-center text-primary my-3 mb-4">
                    <u>Status Management</u>
                </h1>
                <table className="table table-success table-striped table-hover">
                    <thead>
                        <tr className="text-center">
                            <th>#Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            form && form.map((data) => (
                                <tr className="text-center" key={data.id}>
                                    <th>{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.status}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary mx-2"
                                            data-bs-toggle="modal" data-bs-target="#secondModal"
                                            onClick={() => modal(data)}
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {
                formopen && (
                    <div className="modal fade" id="secondModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="secondModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="secondModalLabel">Second Modal Title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    Content for the second modal...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success">Got it!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
}

export default UserManage;
