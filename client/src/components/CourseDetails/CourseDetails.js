import { Link, useParams } from "react-router-dom";
import "./details.css";
import { useEffect, useState } from "react";
import { getOne } from "../../services/courseService";

export const CourseDetails = ({
    onDeleteCourseSubmit
}) => {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        getOne(courseId)
            .then(result => {
                setCourse(result);
            })
    }, [courseId]);

    const { title, genre, weeks, imageUrl, description, _id } = course;

    const onDeleteClick = () => {
        window.confirm(`Are you sure you want to delete this course?`);

        onDeleteCourseSubmit(course._id);
    };

    return (
        <section id="game-details">
            <h1>Course Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={imageUrl} />
                    <h1>{title}</h1>
                    <span className="levels">Time to Complete: {weeks} weeks</span>
                    <p className="type">{genre}</p>
                </div>

                <p className="text">{description}</p>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/catalog/${_id}/edit`} className="button">Edit</Link>
                    <button className="button" onClick={onDeleteClick}>Delete</button>
                </div>
            </div>
        </section>
    )
}