import React, { useEffect, useState } from 'react';
import { firestoreDB } from '../Firebase/firebase';
import MyContext from './MyContext';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function MyContextWrapper(props) {
    // Updated state to match the API fields: Age, DOB, Email, name, password
    const [user, setuser] = useState({
        Age: "",
        DOB: "",
        Email: "",
        name: "",
        password: ""
    });

    // Array to store all users from database
    const [allUsers, setallusers] = useState([]);
    const navigate = useNavigate();

    // Function to fetch users from Firestore database in real-time
    const getUsers = () => {
        try {
            // Create a query reference to the 'users' collection in the Firestore database
            const q = query(collection(firestoreDB, 'users'));

            // onSnapshot sets up a real-time listener for changes in the 'users' collection
            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                // Map each document to an object with its data and ID
                const userArray = QuerySnapshot.docs.map((doc) => ({
                    ...doc.data(),   // Spread all fields from the Firestore document
                    id: doc.id       // Attach the unique document ID
                }));

                // Update the component state with the new array of users
                setallusers(userArray);
            });

            return unsubscribe;

        } catch (error) {
            console.log(error);
            toast.error(error.message || "Error fetching users");

            // Return a no-op function in case of error to prevent crash in cleanup
            return () => { };
        }
    };

    // Set up real-time listener on component mount
    useEffect(() => {
        const unsubscribe = getUsers();

        return () => {
            unsubscribe(); // Clean up the real-time listener
        };
    }, []);

    // Add user to the database after validation
    const addUser = async () => {
        const { Age, DOB, Email, name, password } = user;

        // Validate all required fields
        if (!Age.toString().trim() || !DOB.trim() || !Email.trim() ||
            !name.trim() || !password.trim()) {
            toast.error("All fields are required");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        // Age validation
        const ageNumber = parseInt(Age);
        if (isNaN(ageNumber) || ageNumber < 1 || ageNumber > 150) {
            toast.error("Please enter a valid age between 1 and 150");
            return;
        }

        // Password validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        // Date of Birth validation
        const dobDate = new Date(DOB);
        const today = new Date();
        if (dobDate > today) {
            toast.error("Date of Birth cannot be in the future");
            return;
        }

        try {
            // Add user object to the 'users' collection
            await addDoc(collection(firestoreDB, "users"), user);
            toast.success("User added successfully");

            // Reset user state after successful addition
            setuser({
                Age: "",
                DOB: "",
                Email: "",
                name: "",
                password: ""
            });

            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error.message || "Error adding user");
        }
    };

    // Delete user from database
    const deleteUser = async (item) => {
        try {
            // Delete the document in 'users' collection, whose id == item.id
            await deleteDoc(doc(firestoreDB, "users", item.id));
            toast.success("User deleted successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.message || "Error deleting user");
        }
    };

    // Prepare for editing
    // You must call this function before calling the editUser function
    const editUserHandler = (item) => {
        setuser(item);
    };

    // Save edited user to database
    const editUser = async () => {
        const { Age, DOB, Email, name, password } = user;

        // Validate all required fields
        if (!Age.toString().trim() || !DOB.trim() || !Email.trim() ||
            !name.trim() || !password.trim()) {
            toast.error("All fields are required");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        // Age validation
        const ageNumber = parseInt(Age);
        if (isNaN(ageNumber) || ageNumber < 1 || ageNumber > 150) {
            toast.error("Please enter a valid age between 1 and 150");
            return;
        }

        // Password validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        // Date of Birth validation
        const dobDate = new Date(DOB);
        const today = new Date();
        if (dobDate > today) {
            toast.error("Date of Birth cannot be in the future");
            return;
        }

        try {
            // Update current user object in 'users' collection in database
            // where document id == user.id
            await setDoc(doc(firestoreDB, 'users', user.id), user);
            toast.success("User updated successfully");

            // Reset the global state for single user after successful update
            setuser({
                Age: "",
                DOB: "",
                Email: "",
                name: "",
                password: ""
            });

            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error.message || "Error updating user");
        }
    };

    return (
        <MyContext.Provider
            value={{
                getUsers,
                addUser,
                user,
                setuser,
                allUsers,
                deleteUser,
                editUser,
                editUserHandler
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}

export default MyContextWrapper;