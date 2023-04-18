import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/courses'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const courses = Object.values(result);

    return courses;
};