import "./Footer.css"

export const Footer = () => {
    return (
        <section className="footer-page">
            <div className="footer">
                <h1 className="mainlogo"><a href="#">LearnIt</a></h1>
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                    <li>Payment options</li>
                </ul>
                <div className="contact-us">
                    <h1>Follow us on:</h1>
                    <div className="icons">
                        <a href="#">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}