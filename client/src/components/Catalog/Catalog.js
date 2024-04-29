import { Link } from "react-router-dom";

import "./catalog.css";

import { CatalogItem } from './CatalogItem/CatalogItem'

export const Catalog = ({
    courses
}) => {
    return (
        <section id="catalog-page">
            <h1>All Courses</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            <div className="outDIV-element">
                {courses.map(c => 
                    <CatalogItem key={c._id} {...c} />
                )}
            </div>

            {/* <!-- Display paragraph: If there is no games  --> */}
            {courses.length === 0 && (
                <>
                    <h3 className="no-articles">No courses yet</h3>
                    <h3>Want to create one yourself? <Link to="/create-course">Create Course</Link></h3>
                </>
            )}

        </section>
    )
}