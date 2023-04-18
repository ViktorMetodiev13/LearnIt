import { Register } from "../Register/Register";
import "./Header.css"
import { Link, Route } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <Link className="logo" to="/">LearnIt</Link>
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/catalog">Courses</Link>
                {/* <!-- Logged-in users --> */}
                <Link to="/create-course">Create Course</Link>
                <Link className="logout-popup" to="logout">Logout</Link>
                {/* <!-- Guest users --> */}
                <Link className="btnLogin-popup" to="/login">Login</Link>
                <Link className="register-popup" to="/register">Register</Link>
            </nav>
        </header>
    )
}