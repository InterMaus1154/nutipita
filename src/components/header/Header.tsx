import {FC, useRef, Fragment, useEffect, useContext} from 'react';
import "./header.css";
import {NavLink} from "react-router-dom";
import {HeaderContext} from "../../context/HeaderContext.ts";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * Page header
 * @constructor
 */
const Header: FC = () => {

    const headerRef = useRef<HTMLElement>(document.createElement("header"));
    const observerRef = useRef<HTMLDivElement>(document.createElement("div"));
    const navRef = useRef<HTMLElement>(document.createElement("nav"));
    const buttonRef = useRef<HTMLButtonElement>(document.createElement("button"));

    const {isHeaderVisible, setHeaderVisible, setNavVisible, isNavVisible} = useContext(HeaderContext);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setHeaderVisible(entries[0].isIntersecting);
        });

        observer.observe(observerRef.current);

        return () => {
            observer.disconnect();
        }

    }, [setHeaderVisible]);

    useEffect(()=>{

        const handleClick = (e: MouseEvent) =>{

            if(buttonRef.current.contains(e.target as Node)) return;

            if(isNavVisible && navRef.current && !navRef.current.contains(e.target as Node)) {
                setNavVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () =>{
            document.removeEventListener("mousedown", handleClick);
        }

    }, [isNavVisible, setNavVisible])


    return (
        <Fragment>
            <header className={!isHeaderVisible ? "full-width float" : "full-width"} ref={headerRef}>
                <div className="_wrapper">
                    <div className={"slogan-wrapper"}>
                        <h1 aria-label={"Nutipita"} title={"Go to home page"}>
                            <NavLink to={"/"} onClick={()=>{setNavVisible(false)}}>
                                <img src="/icon/logo_new.png" alt="Logo of Nutipita bakery"/>
                            </NavLink>
                        </h1>
                        <h2>Artisan Pita Bakery</h2>
                        {/*<button onClick={() => {setNavVisible(!isNavVisible)}} className={"hamburger-button"} aria-label={"Toggle navigation menu"} title={"Toggle navigation menu"}>*/}
                        {/*    <FontAwesomeIcon icon={faBars}/>*/}
                        {/*</button>*/}
                        <button ref={buttonRef} className={isNavVisible ? "hamburger-button hamburger-open": "hamburger-button"} aria-label={"Toggle navigation menu"} onClick={()=>{setNavVisible(!isNavVisible)}}>
                            <span className={"hamburger-line"}></span>
                            <span className={"hamburger-line"}></span>
                            <span className={"hamburger-line"}></span>
                        </button>
                    </div>
                    <nav className={isNavVisible? "nav-visible" : "nav-hidden"} ref={navRef}>
                        <ul>
                            <li>
                                <NavLink onClick={()=>setNavVisible(false)} to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={()=>setNavVisible(false)} to={"/products"}>Products</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={()=>setNavVisible(false)} to={"/gallery"}>Gallery</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={()=>setNavVisible(false)} to={"/contact"}>Contacts</NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
            <div className={"header-observer"} aria-hidden={true} ref={observerRef}></div>
        </Fragment>

    );
};

export default Header;