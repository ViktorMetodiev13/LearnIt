import "./Register.css";

export const Register = () => {
    return (
        <div className="register-page">
            <div className="form">
                <h1>Create Your Account</h1>
                <form className="login-form">
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <input type="password" name="repass" placeholder="confirm password" />
                    <button>Sign Up</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
            </div>
        </div>
    )
}