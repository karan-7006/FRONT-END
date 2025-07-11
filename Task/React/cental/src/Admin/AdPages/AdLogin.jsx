import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { redirect, useNavigate } from 'react-router-dom';

function AdLogin() {

    useEffect(()=> {
        if(localStorage.getItem("AdminId")){
            redirect("/DashBoard")
        }
    },[])

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

            if (email == "" || password == "") {
                console.log("Pls field required..!")
                toast.error("Please Fill Required Info")
                return false
            }

            // Match Email
            const res = await axios.get(`http://localhost:3000/Admin?email=${email}`)
            console.log(res.data)
            if (res.data.length === 0) {
                console.log("Email id does not match...!")
                toast.error("Email id does not match...!")
                return false
            }

            let Admin = res.data[0]
            // Match Password
            if (Admin.password !== password) {
                console.log("Password does not Match")
                toast.error("Password does not Match")
                return false
            }

            localStorage.setItem("AdminId", Admin.id)
            localStorage.setItem("AdminName", Admin.name)
            redirect("/DashBoard")
            toast.success("Login Successful")
            console.log("Login Successful")

        } catch (error) {

        }

    }

    return (
        <div className="container mt-5">

            <h1 className='text-center fw-bold text-primary'><u>Admin Login Page</u></h1>

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
                        <p>Not a member? <a href="#!">Register</a></p>
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
    );
}

export default AdLogin
