import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as courseService from './services/CourseService';
import { AuthContext } from "./contexts/authContext";
import * as authService from "./services/authService";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateCourse } from "./components/CreateCourse/CreateCourse";
import { Catalog } from "./components/Catalog/Catalog";
import { EditCourse } from "./components/EditCourse/EditCourse";
import { NotFound } from "./components/NotFound/NotFound";
import { CourseDetails } from "./components/CourseDetails/CourseDetails";

import "./App.css";

function App() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        courseService.getAll()
            .then(result => {
                setCourses(result);
            });
    }, []);

    const onCreateCourseSubmit = async (data) => {
        const newCourse = await courseService.create(data);

        setCourses(state => ([...state, newCourse]));

        navigate('/catalog');
    }

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            
            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    }

    const context = {
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={context}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create-course" element={<CreateCourse onCreateCourseSubmit={onCreateCourseSubmit} />} />
                        <Route path="/catalog" element={<Catalog courses={courses} />} />
                        <Route path="/catalog/:courseId" element={<CourseDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
