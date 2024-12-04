import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
  const [formType, setFormType] = useState("");

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  };

  return (
    <div id="root">
      <header>
        <h1>Dynamic Form Builder</h1>
      </header>
      <main>
        <div className="mb-4">
          <label htmlFor="formType" className="form-label">
            Select Form Type:
          </label>
          <select
            id="formType"
            className="form-select"
            value={formType}
            onChange={handleFormTypeChange}
          >
            {!formType && (
              <option value="" disabled hidden>
                -- Select --
              </option>
            )}
            <option value="User Information">User Information</option>
            <option value="Address Information">Address Information</option>
            <option value="Payment Information">Payment Information</option>
          </select>
        </div>
        {formType && <DynamicForm formType={formType} />}
      </main>
      <footer>
        <p>© 2024 Dynamic Form. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
