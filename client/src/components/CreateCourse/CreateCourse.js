import { useState } from 'react';

import "./CreateCourse.css";

export const CreateCourse = ({
    onCreateCourseSubmit,
}) => {
    const [values, setValues] = useState({
        title: '',
        category: '',
        weeks: '',
        imageUrl: '',
        description: ''
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateCourseSubmit(values);
    }

    return (
        <section className="create-page">
            <div className="form" onSubmit={onSubmit}>
                <h1>Create Course</h1>
                <form className="login-form">
                    <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" placeholder="Course title" />
                    <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter course category" />
                    <input value={values.weeks} onChange={onChangeHandler} type="number" id="maxLevel" name="weeks" min="1" placeholder="Number of weeks" />
                    <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo" />
                    <textarea value={values.description} onChange={onChangeHandler} id="description" name="description"  placeholder="Course description"></textarea>
                    <button>Create Course</button>
                </form>
            </div>
        </section>
    )
}