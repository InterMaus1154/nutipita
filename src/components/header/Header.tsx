import {FC, useRef} from 'react';
import "./header.css";
import {NavLink} from "react-router-dom";

/**
 * Page header
 * @constructor
 */
const Header: FC = () => {

    const headerRef = useRef<HTMLElement>(document.createElement("header"));

    return (
            <header className={"full-width"} ref={headerRef}>
                <div className="_wrapper">
                    <div className={"slogan-wrapper"}>
                        <h1 aria-label={"Nutipita"} title={"Go to home page"}>
                            <NavLink to={"/"}>
                                <img src="/icon/logo_new.png" alt="Logo of Nutipita bakery"/>
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
    );
};

export default Header;