import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Register() {

    const redirect = useNavigate();

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    });

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        const { name, email, password } = form;

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Basic empty check
        if (!name.trim() || !email.trim() || !password.trim()) {
            toast.error("Please fill all fields");
            return;
        }

        // Email format validation
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return;
        }

        // Password length validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try {
            // Check for duplicate email
            const res = await axios.get(`http://localhost:3000/user?email=${email}`);
            if (res.data.length > 0) {
                toast.error("Email already exists");
                return;
            }

            // Submit form
            const response = await axios.post("http://localhost:3000/user", form);
            console.log(response.data);
            toast.success("Registration Successful");
            redirect("/Login");

        } catch (error) {
            console.error("Registration Error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <div
                className="min-vh-100 d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/4253060/pexels-photo-4253060.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="p-5 shadow" style={{ width: '100%', maxWidth: '600px', borderRadius: '50px', backgroundColor: "whitesmoke" }}>
                    <h2 className="text-center display-5 fw-bold mb-4 text-danger">
                        <u>Register</u>
                    </h2>

                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={getchange}
                                className="form-control text-danger"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={getchange}
                                className="form-control text-danger"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={getchange}
                                className="form-control text-danger"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-danger w-100">
                            Register
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <p className="text-muted">
                            Already have an account?{' '}
                            <NavLink to="/Login" className="text-decoration-none text-danger">
                                Login
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
