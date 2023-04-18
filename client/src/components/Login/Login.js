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
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}