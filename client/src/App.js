import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { login, register, logout } from "./services/authService";
import { createCourse, deleteCourse, editCourse, getAll } from './services/courseService';

import './App.css';

import { Catalog } from './components/Catalog/Catalog';
import { CourseDetails } from './components/CourseDetails/CourseDetails';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { NotFound } from './components/NotFound/NotFound';
import { EditCourse } from './components/EditCourse/EditCourse';

function App() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        getAll()
            .then(result => {
                setCourses(result);
            });
    }, []);

    const onCreateCourseSubmit = async (courseData) => {
        try {
            const newCourse = await createCourse(courseData);

            setCourses(state => ([...state, newCourse]));

            navigate('/catalog');
        } catch (error) {
            console.log("There is an error regarding the create course request.");
        };
    };

    const onEditCourseSubmit = async (courseData) => {
        try {
            const newCourseData = await editCourse(courseData._id, courseData);

            setCourses(state => state.map(c => c._id === courseData._id ? newCourseData : c));

            navigate(`/catalog/${courseData._id}`);
        } catch (error) {
            console.log("There is an error regarding the edit course request.");
        }
    };

    const onDeleteCourseSubmit = async (courseId) => {
        console.log(courseId);
        try {
            await deleteCourse(courseId);

            setCourses(state => state.filter(course => course._id !== courseId));

            navigate('/catalog');
        } catch (error) {
            console.log("There is an error regarding the delete course request.");
        };
    };

    const onLoginSubmit = async (userData) => {
        try {
            const result = await login(userData);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log("There is an error regarding the login request.");
        };
    };

    const onRegisterSubmit = async (userData) => {
        const { confirmPassword, ...submitedData } = userData;
        console.log(submitedData);
        if (confirmPassword !== userData.password) {
            alert("Passwords don\'t match");
            return;
        };

        try {
            const result = await register(submitedData);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log("There is an error regarding the register request.");
        };
    };

    const onLogout = async () => {
        await logout();

        setAuth({});
    };

    return (
        <>
            <Header onLogout={onLogout} auth={auth} />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />}></Route>
                    <Route path='/register' element={<Register onRegisterSubmit={onRegisterSubmit} />}></Route>
                    <Route path='/logout'></Route>
                    <Route path='/create-course' element={<CreateCourse onCreateCourseSubmit={onCreateCourseSubmit} />}></Route>
                    <Route path='/catalog' element={<Catalog courses={courses} />}></Route>
                    <Route path='/catalog/:courseId' element={<CourseDetails onDeleteCourseSubmit={onDeleteCourseSubmit} />}></Route>
                    <Route path='/catalog/:courseId/edit' element={<EditCourse onEditCourseSubmit={onEditCourseSubmit} />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
