import { useState } from "react"
import { Link } from "react-router-dom"

export const Login = ({
    onLoginSubmit,
}) => {
    let [values, setValues] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onLoginSubmit(values);
    };

    return (
        <div className="login-page">
            <div className="form">
                <h1>Have an Account?</h1>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="email"
                        id="email"
                        placeholder="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <button>Sign in</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}