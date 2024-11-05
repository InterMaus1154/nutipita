import {FC, useEffect, useRef, useContext} from 'react';
import "./header.css";
import {NavLink} from "react-router-dom";
import {HeaderContext} from "../../context/HeaderContext.tsx";

/**
 * Page header
 * @constructor
 */
const Header: FC = () => {

    const headerRef = useRef<HTMLElement>(document.createElement("header"));

    const {setHeaderHeight, pageTitle, pageTitleVisible} = useContext(HeaderContext);

    useEffect(() => {

        const onResize = () => {
            setHeaderHeight(headerRef.current.getBoundingClientRect().height);
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };

    }, [setHeaderHeight]);

    useEffect(()=>{
        if(headerRef.current){
            setHeaderHeight(headerRef.current.getBoundingClientRect().height);
        }
    }, [setHeaderHeight]);

    return (
            <header className={"full-width"} ref={headerRef}>
                <div className="_wrapper">
                    <div className={"slogan-wrapper"}>
                        <h1 aria-label={"Nutipita"} title={"Go to home page"}>
                            <NavLink to={"/"}>
                                <img src="/icon/logo3.png" alt="Logo of Nutipita bakery"/>
                            </NavLink>
                        </h1>
                        <h2>Artisan Pita Bakery</h2>
                    </div>
                    <h2 className={pageTitleVisible ? "page-title float-in" : "page-title-hidden"}>{pageTitle}</h2>
                    <nav className={`${pageTitleVisible ? "nav-float-out":"nav-float-in" }`}>
                        <ul>
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/products"}>Products</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/gallery"}>Gallery</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}>Contacts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};

export default Header;