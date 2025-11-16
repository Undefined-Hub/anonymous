import React, { useState } from "react";
import "./App.css";

export default function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        accepted: false
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(null);

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setSubmitted({ name: form.name, email: form.email });
    };

    return (
        <div className="form-wrap">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    Name
                    <input name="name" value={form.name} onChange={handleChange} />
                </label>
                {errors.name && <div className="error">{errors.name}</div>}

                <label>
                    Email
                    <input name="email" value={form.email} onChange={handleChange} />
                </label>
                {errors.email && <div className="error">{errors.email}</div>}

                <label>
                    Password
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                </label>
                {errors.password && <div className="error">{errors.password}</div>}

                <label>
                    Confirm Password
                    <input type="password" name="confirm" value={form.confirm} onChange={handleChange} />
                </label>
                {errors.confirm && <div className="error">{errors.confirm}</div>}

                <label className="checkbox">
                    <input type="checkbox" name="accepted" checked={form.accepted} onChange={handleChange} /> I accept terms
                </label>
                {errors.accepted && <div className="error">{errors.accepted}</div>}

                <button type="submit">Register</button>
            </form>

            {submitted && (
                <div className="result">
                    <h3>Submitted</h3>
                    <pre>{JSON.stringify(submitted, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}