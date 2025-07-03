import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdHeader from '../AdCommon/AdHeader';

function AdminEdit() {
    const redirect = useNavigate();

    const [admin, setAdmin] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/Admin/${localStorage.getItem("AdminId")}`);
            setAdmin(res.data);
        } catch (error) {
            console.error("Failed to fetch admin data");
            toast.error("Error fetching admin data");
        }
    };

    const handleChange = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        });
    };

    const updateAdmin = async (e) => {
        e.preventDefault();

        const { name, email, password } = admin;

        if (!name.trim() || !email.trim() || !password.trim()) {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            const res = await axios.patch(`http://localhost:3000/Admin/${admin.id}`, admin);
            localStorage.setItem("AdminName", res.data.name);
            toast.success("Admin Profile Updated");
            redirect("/DashBoard");
        } catch (error) {
            console.error("Update error", error);
            toast.error("Failed to update admin profile");
        }
    };

    return (
        <div>
            <AdHeader />

            <section className="vh-100 bg-image"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/4253060/pexels-photo-4253060.jpeg')",
                    backgroundSize: 'cover'
                }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "50px", overflow: "hidden" }}>
                                <div className="card-body p-3" style={{ backgroundColor: "whitesmoke", borderRadius: "50px" }}>
                                    <h1 className='text-center fw-bold my-5' style={{ color: "steelblue" }}><u>Edit Admin Profile</u></h1>

                                    <form onSubmit={updateAdmin}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                name='name'
                                                value={admin.name}
                                                onChange={handleChange}
                                                className="form-control form-control-lg"
                                                style={{ color: "steelblue" }}
                                            />
                                            <label className="form-label">Admin Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                name='email'
                                                value={admin.email}
                                                onChange={handleChange}
                                                className="form-control form-control-lg"
                                                style={{ color: "steelblue" }}
                                            />
                                            <label className="form-label">Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                name='password'
                                                value={admin.password}
                                                onChange={handleChange}
                                                className="form-control form-control-lg"
                                                style={{ color: "steelblue" }}
                                            />
                                            <label className="form-label">Password</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input className="form-check-input me-2" type="checkbox" id="termsCheck" />
                                            <label className="form-check-label" htmlFor="termsCheck">
                                                I agree to the <a href="#!" className="text-body"><u style={{ color: "steelblue" }}>terms</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-primary btn-block btn-lg">
                                                Update Profile
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdminEdit;
