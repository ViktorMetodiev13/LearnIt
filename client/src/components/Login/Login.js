import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import { AuthContext } from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Username: 'username',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Username]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div id="login-page" className="auth">
            <div className="form">
                <h1>Have an Account?</h1>
                <form className="login-form" method="POST" onSubmit={onSubmit}>
                    <input type="text" placeholder="username" name={LoginFormKeys.Username} value={values[LoginFormKeys.Username]} onChange={changeHandler} />
                    <input type="password" placeholder="password" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} />
                    <button>Sign in</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}