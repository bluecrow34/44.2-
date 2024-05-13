import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ login }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        if (result.success) {
            history.push("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
    }

    return (
        <div className="LoginForm">
            <h3>Log In</h3>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="card-form">
                        <label>Username</label>
                        <input name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="card-form">
                        <label>Password</label>
                        <input name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required />

                    </div>

                    <button onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;