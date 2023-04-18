import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/courses'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const courses = Object.values(result);

    return courses;
};

export const getOne = async (courseId) => {
    const result = await request.get(`${baseUrl}/${courseId}`);

    return result;
}

export const create = async (courseData) => {
    const result = await request.post(baseUrl, courseData);

    return result;
};


