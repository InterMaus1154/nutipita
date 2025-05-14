import {FC, lazy, ReactNode, Suspense, useContext, useLayoutEffect, startTransition} from 'react';
import "./App.css";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import {Routes, Route, useLocation} from "react-router-dom";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HeaderContext} from "./context/HeaderContext.ts";
import Spinner from "./components/spinner/Spinner.tsx";
import Gallery from "./pages/gallery/Gallery.tsx";

const Home = lazy(() => import("./pages/home/Home.tsx"));
const Contact = lazy(() => import("./pages/contact/Contact.tsx"));
const Products = lazy(() => import("./pages/products/Products.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const Wrapper: FC<{ children: ReactNode }> = ({children}) => {

    const location = useLocation();

    const {setNavVisible} = useContext(HeaderContext);

    useLayoutEffect(() => {
        startTransition(() => {
            setNavVisible(false);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });
        });
    }, [location.pathname, setNavVisible]);
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
        <button aria-label={"Go back to top"} title={"Go back to top"} onClick={scrollToTop}
                className={!isHeaderVisible ? "scroll-top-button" : "scroll-top-button hidden"}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </button>
    );
}


const App: FC = () => {

    return (
        <div className={"app-component"}>
            <Header/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Wrapper>
                        <Routes>
                            <Route path={"*"} element={<NotFound/>}/>
                            <Route index path={"/"} element={<Home/>}/>
                            <Route path={"/contact"} element={<Contact/>}/>
                            <Route path={"/products"} element={<Products/>}/>
                            <Route path={"/gallery"} element={<Gallery />} />
                        </Routes>
                    </Wrapper>
                </Suspense>
            </main>
            <Footer/>
            <ScrollToButton/>
        </div>
    );
};

export default App;