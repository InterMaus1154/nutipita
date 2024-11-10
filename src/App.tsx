import {FC, ReactNode, useContext, useLayoutEffect} from 'react';
import "./App.css";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contact from "./pages/contact/Contact.tsx";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HeaderContext} from "./context/HeaderContext.ts";


const Wrapper: FC<{ children: ReactNode }> = ({children}) => {

    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [location.pathname]);

    return children;
}

const ScrollToButton: FC = () => {

    const {isHeaderVisible} = useContext(HeaderContext);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button aria-label={"Go back to top"} onClick={scrollToTop} className={!isHeaderVisible ? "scroll-top-button" : "scroll-top-button hidden"}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </button>
    );
}


const App: FC = () => {

    return (
        <div className={"app-component"}>
            <Header/>
            <main>
                <Wrapper>
                    <Routes>
                        <Route path={"*"} element={<NotFound/>}/>
                        <Route index path={"/"} element={<Home/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Routes>
                </Wrapper>
            </main>
            <Footer/>
            <ScrollToButton/>
        </div>
    );
};

export default App;