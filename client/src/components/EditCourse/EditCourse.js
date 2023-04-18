import "./EditCourse.css";

export const EditCourse = () => {
    return (
        <section className="edit-page">
            <div className="form">
                <h1>Edit Course</h1>
                <form className="login-form">
                    <input type="text" id="title" name="title" placeholder="Course Name" />
                    <input type="text" id="category" name="category" placeholder="Enter course category" />
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="Number of weeks" />
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo" />
                    <textarea id="description" name="description" placeholder="Course description"></textarea>
                    <button>Edit Course</button>
                </form>
            </div>
        </section>
    )
}
