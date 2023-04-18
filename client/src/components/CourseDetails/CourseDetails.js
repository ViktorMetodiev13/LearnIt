import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as courseService from '../../services/CourseService'

import "./CourseDetails.css";

export const CourseDetails = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        courseService.getOne(courseId)
            .then(result => {
                setCourse(result);
            });
    }, [courseId]);

    return (
        <section id="game-details">
        <h1>Course Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={course.imageUrl} />
                <h1>{course.title}</h1>
                <span className="levels">Time to Complete: {course.weeks} weeks</span>
                <p className="type">{course.category}</p>
            </div>

            <p className="text">{course.description}</p>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>
    </section>
    )
}