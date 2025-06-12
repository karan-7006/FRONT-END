import React, { useState } from "react";

const Task3Q1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h4 className="mb-3 text-primary text-center">User Form</h4>
      <form onSubmit={handleSubmit}>
        {["name", "email", "password"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label text-capitalize">{field}:</label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={`form-control ${errors[field] ? "is-invalid" : ""}`}
            />
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
          </div>
        ))}

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="alert alert-success mt-4">
          <h6>Submitted Data:</h6>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Task3Q1;
