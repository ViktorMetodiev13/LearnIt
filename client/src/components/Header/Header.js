import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import { AuthContext } from "../../contexts/authContext";

export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);

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
                        <Link className="logout-popup" to="logout">Logout</Link>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <Link className="btnLogin-popup" to="/login">Login</Link>
                        <Link className="register-popup" to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}