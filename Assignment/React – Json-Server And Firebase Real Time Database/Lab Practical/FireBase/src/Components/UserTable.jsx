import React, { useContext, useEffect } from 'react';

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBCard, MDBCardBody, MDBInputGroup, MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import MyContext from '../Context/MyContext';

function UserTable() {
    const { allUsers, deleteUser, editUserHandler, setuser } = useContext(MyContext)

    //using this to reset the global state variable 
    //whenever the page redirects to current(UserTable) page happens, this will be called
    useEffect(() => {
        setuser({
            Age: "",
            DOB: "",
            Email: "",
            name: "",
            password: ""
        })
    }, []);

    // Function to calculate age from date of birth
    const calculateAge = (dob) => {
        if (!dob) return 'N/A';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    // Function to format date
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Function to get status badge color based on age
    const getStatusByAge = (age) => {
        if (age < 18) return { status: 'Minor', color: 'warning' };
        if (age >= 18 && age < 30) return { status: 'Young Adult', color: 'primary' };
        if (age >= 30 && age < 60) return { status: 'Adult', color: 'success' };
        return { status: 'Senior', color: 'info' };
    };

    // Function to get gradient avatar color based on name
    const getAvatarGradient = (name) => {
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        ];
        const index = name ? name.charCodeAt(0) % colors.length : 0;
        return colors[index];
    };

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
            {/* Header Section */}
            <MDBCard className="shadow-0 border-0">
                <MDBCardBody
                    className='d-flex align-items-center px-5 py-4 rounded-0 justify-content-between'
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '200px',
                        height: '200px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        filter: 'blur(40px)'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-30px',
                        left: '-30px',
                        width: '150px',
                        height: '150px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '50%',
                        filter: 'blur(30px)'
                    }}></div>

                    {/* Logo and Heading */}
                    <div className='d-flex align-items-center gap-4' style={{ zIndex: 1 }}>
                        <div className="d-flex align-items-center justify-content-center" style={{
                            width: '80px',
                            height: '80px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}>
                            <MDBIcon fas icon="users-cog" className="text-white" style={{ fontSize: '32px' }} />
                        </div>
                        <div>
                            <h1 className='text-white mb-1' style={{
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                letterSpacing: '-0.5px'
                            }}>
                                User Management
                            </h1>
                            <p className='text-white-50 mb-0' style={{ fontSize: '1.1rem' }}>
                                React Firebase Dashboard
                            </p>
                        </div>
                    </div>

                    {/* Add User Button */}
                    <div style={{ zIndex: 1 }}>
                        <Link to="/adduser" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '12px 32px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#667eea',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            transform: 'translateY(0)',
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                            }}>
                            <MDBIcon fas icon="user-plus" />
                            Add New User
                        </Link>
                    </div>
                </MDBCardBody>
            </MDBCard>

            {/* Stats Cards */}
            <MDBContainer className="my-5">
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <MDBCard className="h-100 shadow-3 border-0" style={{ borderRadius: '16px' }}>
                            <MDBCardBody className="text-center">
                                <div className="d-flex align-items-center justify-content-center mb-3" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    borderRadius: '50%',
                                    margin: '0 auto'
                                }}>
                                    <MDBIcon fas icon="users" className="text-white fs-4" />
                                </div>
                                <h4 className="fw-bold text-primary">{allUsers.length}</h4>
                                <p className="text-muted mb-0">Total Users</p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <MDBCard className="h-100 shadow-3 border-0" style={{ borderRadius: '16px' }}>
                            <MDBCardBody className="text-center">
                                <div className="d-flex align-items-center justify-content-center mb-3" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                    borderRadius: '50%',
                                    margin: '0 auto'
                                }}>
                                    <MDBIcon fas icon="user-check" className="text-white fs-4" />
                                </div>
                                <h4 className="fw-bold text-success">{allUsers.filter(user => calculateAge(user.DOB) >= 18).length}</h4>
                                <p className="text-muted mb-0">Adults</p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <MDBCard className="h-100 shadow-3 border-0" style={{ borderRadius: '16px' }}>
                            <MDBCardBody className="text-center">
                                <div className="d-flex align-items-center justify-content-center mb-3" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                    borderRadius: '50%',
                                    margin: '0 auto'
                                }}>
                                    <MDBIcon fas icon="user-clock" className="text-white fs-4" />
                                </div>
                                <h4 className="fw-bold text-warning">{allUsers.filter(user => calculateAge(user.DOB) < 18).length}</h4>
                                <p className="text-muted mb-0">Minors</p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <MDBCard className="h-100 shadow-3 border-0" style={{ borderRadius: '16px' }}>
                            <MDBCardBody className="text-center">
                                <div className="d-flex align-items-center justify-content-center mb-3" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                    borderRadius: '50%',
                                    margin: '0 auto'
                                }}>
                                    <MDBIcon fas icon="user-tie" className="text-white fs-4" />
                                </div>
                                <h4 className="fw-bold text-info">{allUsers.filter(user => calculateAge(user.DOB) >= 60).length}</h4>
                                <p className="text-muted mb-0">Seniors</p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>

                {/* Table Card */}
                <MDBCard className="shadow-4 border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                    <MDBCardBody className="p-0">
                        <MDBTable align='middle' hover responsive className="mb-0">
                            <MDBTableHead style={{ backgroundColor: '#f8fafc' }}>
                                <tr>
                                    <th scope='col' className="fw-bold text-dark py-4 px-4" style={{ fontSize: '15px' }}>
                                        <MDBIcon fas icon="hashtag" className="me-2 text-muted" />
                                        Sr. No
                                    </th>
                                    <th scope='col' className="fw-bold text-dark py-4" style={{ fontSize: '15px' }}>
                                        <MDBIcon fas icon="user" className="me-2 text-muted" />
                                        User Information
                                    </th>
                                    <th scope='col' className="fw-bold text-dark py-4" style={{ fontSize: '15px' }}>
                                        <MDBIcon fas icon="birthday-cake" className="me-2 text-muted" />
                                        Age
                                    </th>
                                    <th scope='col' className="fw-bold text-dark py-4" style={{ fontSize: '15px' }}>
                                        <MDBIcon fas icon="calendar-alt" className="me-2 text-muted" />
                                        Date of Birth
                                    </th>
                                    <th scope='col' className="fw-bold text-dark py-4" style={{ fontSize: '15px' }}>
                                        <MDBIcon fas icon="info-circle" className="me-2 text-muted" />
                                        Status
                                    </th>
                                    <th scope='col' className="fw-bold text-dark py-4" style={{ fontSize: '15px' }}>
                                        <MDBIcon fas icon="cogs" className="me-2 text-muted" />
                                        Actions
                                    </th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {allUsers.length > 0 ?
                                    allUsers.map((value, index) => {
                                        const userAge = value.Age || calculateAge(value.DOB);
                                        const statusInfo = getStatusByAge(userAge);

                                        return (
                                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                <td className="px-4 py-4">
                                                    <div className="d-flex align-items-center justify-content-center" style={{
                                                        width: '35px',
                                                        height: '35px',
                                                        backgroundColor: '#e2e8f0',
                                                        borderRadius: '8px',
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        color: '#475569'
                                                    }}>
                                                        {index + 1}
                                                    </div>
                                                </td>
                                                <td className="py-4">
                                                    <div className='d-flex align-items-center'>
                                                        <div
                                                            className='d-flex align-items-center justify-content-center position-relative'
                                                            style={{
                                                                width: '55px',
                                                                height: '55px',
                                                                background: getAvatarGradient(value.name),
                                                                borderRadius: '16px',
                                                                fontSize: '18px',
                                                                fontWeight: '700',
                                                                color: 'white',
                                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                                                            }}
                                                        >
                                                            {value.name ? value.name.charAt(0).toUpperCase() : 'U'}
                                                            <div style={{
                                                                position: 'absolute',
                                                                bottom: '-2px',
                                                                right: '-2px',
                                                                width: '18px',
                                                                height: '18px',
                                                                backgroundColor: '#10b981',
                                                                borderRadius: '50%',
                                                                border: '3px solid white'
                                                            }}></div>
                                                        </div>
                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1 text-dark' style={{ fontSize: '16px' }}>
                                                                {value.name || 'N/A'}
                                                            </p>
                                                            <p className='text-muted mb-0' style={{ fontSize: '14px' }}>
                                                                <MDBIcon fas icon="envelope" className="me-1" />
                                                                {value.Email || 'N/A'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3" style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                                                            borderRadius: '10px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <MDBIcon fas icon="calendar" className="text-orange" />
                                                        </div>
                                                        <div>
                                                            <p className='fw-bold mb-1 text-dark' style={{ fontSize: '16px' }}>
                                                                {userAge} years
                                                            </p>
                                                            <p className='text-muted mb-0' style={{ fontSize: '12px' }}>
                                                                {userAge < 18 ? 'Minor' : userAge >= 60 ? 'Senior' : 'Adult'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4">
                                                    <div>
                                                        <p className='fw-bold mb-1 text-dark' style={{ fontSize: '14px' }}>
                                                            {formatDate(value.DOB)}
                                                        </p>
                                                        <p className='text-muted mb-0' style={{ fontSize: '12px' }}>
                                                            {value.DOB ? new Date(value.DOB).toLocaleDateString('en-US', { weekday: 'long' }) : 'N/A'}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="py-4">
                                                    <MDBBadge
                                                        color={statusInfo.color}
                                                        pill
                                                        style={{
                                                            fontSize: '12px',
                                                            padding: '8px 16px',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        {statusInfo.status}
                                                    </MDBBadge>
                                                </td>
                                                <td className="py-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <MDBTooltip tag="span" title="Edit this user">
                                                            <Link
                                                                onClick={() => editUserHandler(value)}
                                                                to="/edituser"
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    backgroundColor: '#f0f9ff',
                                                                    borderRadius: '10px',
                                                                    textDecoration: 'none',
                                                                    color: '#0ea5e9',
                                                                    transition: 'all 0.2s ease'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.target.style.backgroundColor = '#0ea5e9';
                                                                    e.target.style.color = 'white';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.target.style.backgroundColor = '#f0f9ff';
                                                                    e.target.style.color = '#0ea5e9';
                                                                }}
                                                            >
                                                                <MDBIcon fas icon="edit" />
                                                            </Link>
                                                        </MDBTooltip>

                                                        <MDBTooltip tag="span" title="Delete this user">
                                                            <Link
                                                                onClick={() => deleteUser(value)}
                                                                to=""
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    backgroundColor: '#fef2f2',
                                                                    borderRadius: '10px',
                                                                    textDecoration: 'none',
                                                                    color: '#ef4444',
                                                                    transition: 'all 0.2s ease'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.target.style.backgroundColor = '#ef4444';
                                                                    e.target.style.color = 'white';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.target.style.backgroundColor = '#fef2f2';
                                                                    e.target.style.color = '#ef4444';
                                                                }}
                                                            >
                                                                <MDBIcon fas icon="trash" />
                                                            </Link>
                                                        </MDBTooltip>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }) : (
                                        <tr>
                                            <td colSpan="6" className="text-center py-5">
                                                <div className="d-flex flex-column align-items-center" style={{ padding: '60px 20px' }}>
                                                    <div className="mb-4" style={{
                                                        width: '120px',
                                                        height: '120px',
                                                        background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <MDBIcon fas icon="users" className="text-muted" style={{ fontSize: '40px' }} />
                                                    </div>
                                                    <h3 className='text-muted mb-3' style={{ fontWeight: '600' }}>No users found</h3>
                                                    <p className='text-muted mb-4' style={{ fontSize: '16px', maxWidth: '400px' }}>
                                                        Your user database is empty. Start building your community by adding your first user.
                                                    </p>
                                                    <Link to="/adduser" style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        padding: '14px 28px',
                                                        fontSize: '16px',
                                                        fontWeight: '600',
                                                        color: 'white',
                                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                        borderRadius: '12px',
                                                        textDecoration: 'none',
                                                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                                                        transition: 'all 0.2s ease'
                                                    }}>
                                                        <MDBIcon fas icon="plus" />
                                                        Add First User
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default UserTable;