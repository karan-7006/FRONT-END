import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Login() {
    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            redirect("/");
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

        // Form Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === "" || password.trim() === "") {
            toast.error("Please fill all fields");
            return false;
        }

        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try {
            const res = await axios.get(`http://localhost:3000/user?email=${email}`);

            if (res.data.length === 0) {
                toast.error("Email does not exist");
                return;
            }

            const user = res.data[0];

            if (user.status === "block") {
                toast.error("Your account has been blocked");
                return;
            }

            if (user.password !== password) {
                toast.error("Incorrect password");
                return;
            }

            localStorage.setItem("userId", user.id);
            localStorage.setItem("username", user.name);
            toast.success("Login Successful");
            redirect("/");

        } catch (error) {
            console.error("Login Error", error);
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
                        <u>Login</u>
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
                                placeholder="Enter your Email"
                                style={{ color: "steelblue" }}
                                required
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
                                placeholder="Enter your password"
                                required
                                style={{ color: "steelblue" }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none" style={{ color: "steelblue" }}>
                            Forgot Password?
                        </a>
                    </div>

                    <div className="text-center mt-3">
                        <p className="text-muted">
                            Don't have an account?{' '}
                            <NavLink to="/Register" className="text-decoration-none" style={{ color: "steelblue" }}>
                                Register
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
