import {FC} from 'react';
import "./App.css";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contact from "./pages/contact/Contact.tsx";
/*import font awesome*/
import "./assets/fa/all.css";

const App: FC = () => {
    return (
        <div className={"app-component"}>
            <Header/>
            <main>
                <Routes>
                    <Route path={"*"} element={<NotFound />}/>
                    <Route index path={"/"} element={<Home />} />
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};

export default App;