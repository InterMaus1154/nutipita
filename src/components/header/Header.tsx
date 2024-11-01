import {FC, useEffect, useRef, useState} from 'react';
import "./header.css";
import {NavLink} from "react-router-dom";

/**
 * Page header
 * @constructor
 */
const Header: FC = () => {

    const ref = useRef<HTMLDivElement>(document.createElement("div"));

    const [isFloating, setIsFloating] = useState<boolean>(false);

    useEffect(()=>{

        const observer = new IntersectionObserver(entries => {
            if(!entries[0].isIntersecting){
                setIsFloating(true);
            }else{
                setIsFloating(false);
            }
        });

        observer.observe(ref.current);

    }, []);

    return (
        <>
            <div className={"header-observer"} ref={ref}></div>
            <header className={isFloating ? "full-width float" : "full-width"}>
                <div className="_wrapper">
                    <div className={"slogan-wrapper"}>
                        <h1 aria-label={"Nutipita"} title={"Go to home page"}>
                            <NavLink to={"/"}>
                                <img src="/icon/logo3.png" alt="Logo of Nutipita bakery"/>
                            </NavLink>
                        </h1>
                        <h2>Artisan Pita Bakery</h2>
                    </div>
                    <nav>
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
        </>

    );
};

export default Header;