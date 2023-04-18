import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateCourse } from "./components/CreateCourse/CreateCourse";
import { Catalog } from "./components/Catalog/Catalog";
import { EditCourse } from "./components/EditCourse/EditCourse";


function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <EditCourse />
            </main>

            <Footer />
        </div>
    );
}

export default App;
