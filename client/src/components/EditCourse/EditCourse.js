import { useState, useEffect } from "react"
import { getOne } from "../../services/courseService";
import { useParams } from "react-router-dom";

export const EditCourse = ({
    onEditCourseSubmit,
}) => {
    const [course, setCourse] = useState({});
    // const [values, setValues] = useState({
    //     'title': course.title,
    //     'genre': course.genre,
    //     'weeks': course.weeks,
    //     'imageUrl': course.imageUrl,
    //     'description': course.description
    // });
    const { courseId } = useParams();

    useEffect(() => {
        getOne(courseId)
            .then(result => {
                setCourse(result);
            })
    }, [courseId]);

    const { title, genre, weeks, imageUrl, description } = course;

    const changeHandler = (e) => {
        setCourse(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onEditCourseSubmit(course);
    };

    return (
        <section className="edit-page">
            <div className="form">
                <h1>Edit Course</h1>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Course Name"
                        defaultValue={title}
                        value={title}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        id="category"
                        name="genre"
                        placeholder="Enter course category"
                        defaultValue={genre}
                        value={genre}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        id="maxLevel"
                        name="weeks"
                        min="1"
                        placeholder="Number of weeks"
                        defaultValue={weeks}
                        value={weeks}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo"
                        defaultValue={imageUrl}
                        value={imageUrl}
                        onChange={changeHandler}
                    />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Course description"
                        defaultValue={description}
                        value={description}
                        onChange={changeHandler}
                    ></textarea>
                    <button>Edit Course</button>
                </form>
            </div>
        </section>
    )
}