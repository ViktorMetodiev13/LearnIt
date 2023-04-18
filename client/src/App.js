import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateCourse } from "./components/CreateCourse/CreateCourse";
import { Catalog } from "./components/Catalog/Catalog";
import { EditCourse } from "./components/EditCourse/EditCourse";
import { NotFound } from "./components/NotFound/NotFound";


function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create-course" element={<CreateCourse />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
