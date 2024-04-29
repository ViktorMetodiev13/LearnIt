import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
    return (
        <div className="welcome-message">
            <h1>Error 404 - Page Not Found</h1>
            <p>Get back to <Link className="links" id="links" to="/">Home</Link></p>
            <p>Want to learn? <Link className="links" id="links" to="/catalog">Courses</Link></p>
        </div>
    )
}