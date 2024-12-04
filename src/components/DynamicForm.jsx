import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { Alert } from "react-bootstrap";
import { mockApiData } from "./data/data";


const DynamicForm = ({ formType }) => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fields = mockApiData[formType]?.fields || [];
    setFormFields(fields);
    setFormData({});
    setErrors({});
    setProgress(0);
    setSuccessMessage("");
  }, [formType]);

  const calculateProgress = (data) => {
    const requiredFields = formFields.filter((field) => field.required);
    const completedFields = requiredFields.filter((field) => data[field.name]);
    return (completedFields.length / requiredFields.length) * 100;
  };

  const validateField = (field, value) => {
    const error = {};
    if (field.required && !value) {
      error[field.name] = `${field.label} is required`;
    } else if (field.type === "number" && value && isNaN(value)) {
      error[field.name] = `${field.label} must be a valid number`;
    } else if (field.type === "text" && value && value.length < 2) {
      error[field.name] = `${field.label} must be at least 2 characters`;
    } else {
        error[field.name] = '';
    }
    return error;
  };

  const handleChange = (e, field) => {
    setSuccessMessage("");
    const { name, value } = e.target;

    if (field.name === "cardNumber" && !/^\d*$/.test(value)) {
        return; 
    }

    if (field.name === "cvv" && (!/^\d{0,4}$/.test(value) || value.length > 4)) {
        return; 
      }

    const newErrors = { ...errors, ...validateField(field, value) };
    if (!newErrors[field.name]) delete newErrors[field.name];

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    setErrors(newErrors);

    // Dynamically calculate progress
    setProgress(calculateProgress(updatedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    formFields.forEach((field) => {
      const validationError = validateField(field, formData[field.name]);
      if(validationError[field.name])
        Object.assign(newErrors, validationError);
    });

    console.log(Object.keys(newErrors));
    
    if (Object.keys(newErrors).length === 0) {
        const fields = mockApiData[formType]?.fields || [];
        setFormFields(fields);
        setFormData({});
        setErrors({});
        setProgress(0);
        setSuccessMessage("Form Submitted Successfully!");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="text-center mb-3">{formType} -  Form</h3>
      <ProgressBar progress={progress} />
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={field.name} className="form-label">
              {field.label}
            </label>
            {field.type === "dropdown" ? (
              <select
              id={field.name}
              className="form-select"
              name={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            >
              <option value="" disabled>
                -- Select --
              </option>
              {field.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                className="form-control"
                name={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field)}
              />
            )}
            {errors[field.name] && (
              <div className="text-danger mt-1">{errors[field.name]}</div>
            )}
          </div>
        ))}
        <button type="submit" className="btn w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
