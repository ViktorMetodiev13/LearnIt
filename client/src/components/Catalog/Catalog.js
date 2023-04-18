import "./Catalog.css";

export const Catalog = () => {
    return (
        <section id="catalog-page">
            <h1>All Courses</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            <div className="outDIV-element">
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/reactLogo.jpg" />
                        <h6>React JS</h6>
                        <h2>Technology, Coding, JS</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/js-advanced-image.jpg" />
                        <h6>JS Advanced</h6>
                        <h2>Coding, JS-advanced</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/angular-image.jpg" />
                        <h6>Angular</h6>
                        <h2>Angular, TypeScript</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>
            </div>

            {/* <!-- Display paragraph: If there is no games  --> */}
            <h3 className="no-articles">No courses yet</h3>
            <h3>Want to create one yourself? <a href="#">Create Course</a></h3>
        </section>
    )
}