import "./Header.css"

export const Header = () => {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <a className="logo" href="#">LearnIt</a>
            <nav className="navigation">
                <a href="#">Home</a>
                <a href="#">Courses</a>
                {/* <!-- Logged-in users --> */}
                <a href="#">Create Course</a>
                <button className="logout-popup">Logout</button>
                {/* <!-- Guest users --> */}
                <button className="btnLogin-popup">Login</button>
                <button className="register-popup">Register</button>
            </nav>
        </header>
    )
}