import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import { MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function AddUser() {

    //data store reference
    const context = useContext(MyContext);

    const { user, setuser, addUser } = context;

    const setUser = (e) => {
        setuser({
            ...user, [e.target.name]: e.target.value
        })
    }

    // Calculate age from DOB
    const calculateAge = (dob) => {
        if (!dob) return '';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    // Handle DOB change and auto-calculate age
    const handleDOBChange = (e) => {
        const dob = e.target.value;
        const calculatedAge = calculateAge(dob);

        setuser({
            ...user,
            DOB: dob,
            Age: calculatedAge.toString()
        });
    };

    return (
        <div className="container w-75">

            <form>
                <div className="d-flex align-items-center mt-2 mb-3">
                    <MDBTooltip tag="span" title="Go back to View page">
                        <Link to="/" className="me-4">
                            <MDBIcon fas color='body' icon="arrow-left" size="2x" />
                        </Link>
                    </MDBTooltip>
                    <h1 className='m-0' style={{ fontSize: "36px" }}>Add new User</h1>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label mb-0">Full Name</label>
                    <input
                        type="text"
                        value={user.name}
                        onChange={setUser}
                        className="form-control form-control-lg"
                        id="name"
                        name='name'
                        placeholder="Enter full name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label mb-0">Email Address</label>
                    <input
                        type="email"
                        value={user.Email}
                        onChange={setUser}
                        className="form-control form-control-lg"
                        id="Email"
                        name='Email'
                        placeholder="Enter email address"
                    />
                </div>

                <div className="mb-3">
                    <div className="d-flex justify-content-start mb-4" style={{ gap: '5%' }}>
                        <div className="d-flex flex-column" style={{ width: '45%' }}>
                            <label htmlFor="DOB" className="form-label mb-0">Date of Birth</label>
                            <input
                                type="date"
                                value={user.DOB}
                                onChange={handleDOBChange}
                                className="form-control form-control-lg"
                                id="DOB"
                                name='DOB'
                                max={new Date().toISOString().split('T')[0]} // Prevent future dates
                            />
                        </div>

                        <div className="d-flex flex-column" style={{ width: '45%' }}>
                            <label htmlFor="Age" className="form-label mb-0">Age</label>
                            <input
                                type="number"
                                value={user.Age}
                                onChange={setUser}
                                className="form-control form-control-lg"
                                id="Age"
                                name='Age'
                                placeholder="Age will be calculated automatically"
                                min="1"
                                max="150"
                                readOnly={user.DOB ? true : false} // Make readonly if DOB is filled
                            />
                            {user.DOB && (
                                <small className="text-muted">Age calculated from Date of Birth</small>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label mb-0">Password</label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={setUser}
                        className="form-control form-control-lg"
                        id="password"
                        name='password'
                        placeholder="Enter password (minimum 6 characters)"
                        minLength="6"
                    />
                    <small className="text-muted">Password must be at least 6 characters long</small>
                </div>

                {/* User Information Summary */}
                {(user.name || user.Email || user.Age || user.DOB) && (
                    <div className="mb-4 p-3 bg-light rounded">
                        <h6 className="mb-2">User Information Summary:</h6>
                        <div className="row">
                            {user.name && (
                                <div className="col-md-6">
                                    <strong>Name:</strong> {user.name}
                                </div>
                            )}
                            {user.Email && (
                                <div className="col-md-6">
                                    <strong>Email:</strong> {user.Email}
                                </div>
                            )}
                            {user.Age && (
                                <div className="col-md-6">
                                    <strong>Age:</strong> {user.Age} years old
                                </div>
                            )}
                            {user.DOB && (
                                <div className="col-md-6">
                                    <strong>Date of Birth:</strong> {new Date(user.DOB).toLocaleDateString()}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="d-flex gap-3">
                    <button
                        type="submit"
                        onClick={(e) => { e.preventDefault(); addUser(); }}
                        className="btn btn-primary"
                        style={{ fontSize: "20px" }}
                    >
                        <MDBIcon fas icon="user-plus" className="me-2" />
                        Add User
                    </button>

                    <Link to="/" className="btn btn-secondary" style={{ fontSize: "20px" }}>
                        <MDBIcon fas icon="times" className="me-2" />
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default AddUser;