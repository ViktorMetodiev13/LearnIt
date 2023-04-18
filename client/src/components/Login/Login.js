import { Link } from "react-router-dom";

import "./Login.css";

export const Login = () => {
    return (
        <div className="login-page">
            <div className="form">
                <h1>Have an Account?</h1>
                <form className="login-form">
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <button>Sign in</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}