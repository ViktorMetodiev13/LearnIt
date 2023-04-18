import { Link } from "react-router-dom";
import "./Catalog.css";
import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = ({
    courses
}) => {
    return (
        <section id="catalog-page">
            <h1>All Courses</h1>
            <div className="outDIV-element">
                {courses.map(x => <CatalogItem key={x._id} {...x} />)}
            </div>

            {courses.length === 0 && (
                <h3>No courses yet. Want to create one yourself? <Link to="/create-course">Create Course</Link></h3>
            )}
        </section>
    )
}