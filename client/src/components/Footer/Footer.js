import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
    return (
        <section className="footer-page">
            <div className="footer">
                <h1 className="mainlogo"><Link to="/">LearnIt</Link></h1>
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                    <li>Payment options</li>
                </ul>
                <div className="contact-us">
                    <h1>Follow us on:</h1>
                    <div className="icons">
                        <Link to="/linkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link to="/instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link to="/facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}