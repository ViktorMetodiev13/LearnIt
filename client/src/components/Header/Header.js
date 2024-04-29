import { Link, useNavigate } from "react-router-dom";
import "./navigation.css";

export const Header = ({
    onLogout,
    auth
}) => {
    const navigate = useNavigate();

    const onLoginClick = (e) => {
        e.preventDefault();

        navigate("/login");
    };

    const onRegisterClick = (e) => {
        e.preventDefault();

        navigate("/register");
    };

    const onUserAccountClick = (e) => {
        e.preventDefault();
    };

    const isAuthenticated = auth._id;

    return (

        <header>
            {/* <!-- Navigation --> */}
            <Link className="logo" to="/">LearnIt</Link>
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/catalog">Courses</Link>
                {isAuthenticated && (
                    <>
                        <Link to="/create-course">Create Course</Link>
                        <Link to="/user-details" onClick={onUserAccountClick}>{auth.email}</Link>
                        <button className="logout-popup" onClick={onLogout}>Logout</button>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <button className="btnLogin-popup" onClick={onLoginClick}>Login</button>
                        <button className="register-popup" onClick={onRegisterClick}>Register</button>
                    </>
                )}
            </nav>
        </header >
    )
}