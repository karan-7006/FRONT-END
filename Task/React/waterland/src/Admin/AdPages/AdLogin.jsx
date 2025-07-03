import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function AdLogin() {
    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("AdminId")) {
            redirect("/DashBoard");
        }
    }, []);

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        const { email, password } = form;

        if (email.trim() === "" || password.trim() === "") {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const res = await axios.get(`http://localhost:3000/Admin?email=${email}`);

            if (res.data.length === 0) {
                toast.error("Email id does not match");
                return;
            }

            const admin = res.data[0];

            if (admin.password !== password) {
                toast.error("Password does not match");
                return;
            }

            localStorage.setItem("AdminId", admin.id);
            localStorage.setItem("AdminName", admin.name);
            toast.success("Login Successful");
            redirect("/DashBoard");

        } catch (error) {
            console.error("Login Error", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/4253060/pexels-photo-4253060.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="p-5 shadow"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '50px',
                    backgroundColor: "whitesmoke"
                }}
            >
                <h2 className="text-center display-5 fw-bold mb-4" style={{ color: "steelblue" }}>
                    <u>Admin Login</u>
                </h2>

                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={getchange}
                            className="form-control"
                            placeholder="Enter admin email"
                            required
                            style={{ color: "steelblue" }}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={getchange}
                            className="form-control"
                            placeholder="Enter password"
                            required
                            style={{ color: "steelblue" }}
                        />
                    </div>

                    <div className="mb-3 text-end">
                        <a href="#" className="text-decoration-none" style={{ color: "steelblue" }}>
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-muted">
                        Not an admin? <NavLink to="/" className="text-decoration-none" style={{ color: "steelblue" }}>Go to Home</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdLogin;
