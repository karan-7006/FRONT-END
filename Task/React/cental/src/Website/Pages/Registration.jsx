import axios from 'axios';
import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Registration() {

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
        })
        console.log(form)
    }

    const submit = async (e) => {
        e.preventDefault();

        if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
            console.log("Please Fill required Details")
            toast.error("Please Fill required Details")
            return false
        }

        const res = await axios.post("http://localhost:3000/user", form)
        console.log(res.data)
        redirect("/Login")
        toast.success("Registration SuccessFull...")
    }

    return (
        <div>
            <section class="vh-100 bg-image" style={{
                backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"
            }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3 mt-4">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15, }}>
                                    <div className="card-body p-3">
                                        <h1 className='text-center fw-bold text-primary my-5'><u>User Registration Page</u></h1>
                                        <form onSubmit={submit}>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" value={form.name} onChange={getchange} name='name' id="form3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" value={form.email} onChange={getchange} name='email' id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" value={form.password} onChange={getchange} name='password' id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body-light">Register</button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/Login" className="fw-bold text-body"><u>Login here</u></Link></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration
