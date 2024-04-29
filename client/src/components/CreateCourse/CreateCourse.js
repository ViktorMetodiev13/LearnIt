import { useState } from "react";

export const CreateCourse = ({
    onCreateCourseSubmit
}) => {
    const [values, setValues] = useState({
        'title': '',
        'genre': '',
        'maxLevel': '',
        'weeks': '',
        'description': ''
    });

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateCourseSubmit(values);
    };

    return (
        <section className="create-page">
            <div className="form">
                <h1>Create Course</h1>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Course Name"
                        value={values.title}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        placeholder="Enter course genre"
                        value={values.category}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        id="maxLevel"
                        name="weeks"
                        min="1"
                        placeholder="Number of weeks"
                        value={values.weeks}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Course description"
                        value={values.description}
                        onChange={changeHandler}
                    ></textarea>
                    <button>Create Course</button>
                </form>
            </div>
        </section>
    )
}