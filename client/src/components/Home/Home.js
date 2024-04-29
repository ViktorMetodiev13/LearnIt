import { Link } from "react-router-dom";
import "./welcome.css";

export const Home = () => {
    return (
        <div className="welcome-message">
            <h1>Learn without limits</h1>
            <h3>Looking to start, switch, or advance your career?</h3>
            <h3>LearnIt is the perfect place for you. With our professional courses you can achieve the height of success in
                no time</h3>
            <p>Don't know where to start? We suggest <Link to="/catalog">Courses</Link></p>
        </div>
    )
}