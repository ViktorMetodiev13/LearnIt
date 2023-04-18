import "./CreateCourse.css";

export const CreateCourse = () => {
    return (
        <section className="create-page">
            <div className="form">
                <h1>Create Course</h1>
                <form className="login-form">
                    <input type="text" id="title" name="title" placeholder="Course Name" />
                    <input type="text" id="category" name="category" placeholder="Enter course category" />
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="Number of weeks" />
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo" />
                    <textarea name="description" id="description" placeholder="Course description"></textarea>
                    <button>Create Course</button>
                </form>
            </div>
        </section>
    )
}