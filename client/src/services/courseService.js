const BASE_URL = 'http://localhost:3030/jsonstore/courses';

export const getAll = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    const courses = Object.values(data);

    return courses;
};

export const getOne = async (courseId) => {
    const response = await fetch(`${BASE_URL}/${courseId}`);
    const course = await response.json();

    return course;
};

export const createCourse = async (courseData) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(courseData)
    });

    const result = await response.json();

    return result;
};

export const editCourse = async (courseId, courseData) => {
    const response = await fetch(`${BASE_URL}/${courseId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(courseData)
    });

    const data = await response.json();

    return data;
};

export const deleteCourse = async (courseId) => {
    // POTENTIAL ERROR BECAUSE OF THE ADDED AWAIT 
    const response = await fetch(`${BASE_URL}/${courseId}`, {
        method: 'DELETE'
    });
};