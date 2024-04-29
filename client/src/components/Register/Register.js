import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = ({
    onRegisterSubmit
}) => {
    const [values, setValues] = useState({
        'username': '',
        'password': '',
        'confirmPassword': ''
    });

    const changeHanlder = (e) => {
        setValues(state => ({ 
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onRegisterSubmit(values);
    };

    return (
        <div className="register-page">
            <div className="form">
                <h1>Create Your Account</h1>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={values.username}
                        onChange={changeHanlder}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={changeHanlder}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password"
                        value={values.confirmPassword}
                        onChange={changeHanlder}
                    />
                    <button>Sign Up</button>
                    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}