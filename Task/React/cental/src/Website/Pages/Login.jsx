import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            redirect("/")
        }
    }, [])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const redirect = useNavigate();

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    };

    const submit = async (e) => {
        e.preventDefault();

        try {

            const { email, password } = form

            if (email === "" || password === "") {
                console.log("Please fill required details...!")
                toast.error("Please fill required details...!")
                return false
            }

            // Match Email
            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)
            if (res.data.length === 0) {
                console.log("Email does not match...!!")
                toast.error("Email does not match...!!")
                return false
            }

            let user = res.data[0]

            // Status Check
            if (user.status === "block") {
                console.log("Your account is blocked...!!")
                toast.error("Your account is blocked...!!")
                return false
            }

            // Match Password
            if (user.password !== password) {
                console.log("Password does not match...!!")
                toast.error("Password does not match...!!")
                return false
            }

            localStorage.setItem("userId", user.id)
            localStorage.setItem("username", user.name)
            redirect("/")
            console.log("Login Successfull")
            toast.success("Login Successfull")

        } catch (error) {

        }
    }

    return (
        <div className="container mt-5">

            <h1 className='text-center fw-bold text-primary'><u>User Login Page</u></h1>

            <form onSubmit={submit}>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                    <MDBInput wrapperClass='mb-4' value={form.email} onChange={getchange} name='email' label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' value={form.password} onChange={getchange} name='password' label='Password' id='form2' type='password' />

                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4">Sign in</MDBBtn>

                    <div className="text-center">
                        <p>Not a member? <Link to="/Registration">Register</Link></p>
                        <p>or sign up with:</p>

                        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='twitter' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='google' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='github' size="sm" />
                            </MDBBtn>

                        </div>

                    </div>

                </MDBContainer>
            </form>

        </div>
    )
}

export default Login
