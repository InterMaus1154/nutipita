import {FC, useState} from 'react';
import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

/**
 * Page header
 * @constructor
 */
const Header: FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className={"full-width"}>
            <div className="_wrapper">
                <div className={"slogan-wrapper"}>
                    <div className={"inner-slogan-wrapper"}>
                        <h1 aria-label={"Nutipita"}>
                            <img src="/icon/logo.png" alt="Logo of Nutipita bakery"/>
                        </h1>
                        <h2>Artisan Pita Bread Bakery</h2>
                    </div>
                    {/*<FontAwesomeIcon onClick={() => {*/}
                    {/*    setIsMenuOpen(!isMenuOpen)*/}
                    {/*}} icon={faBars} className={"fa-icon"}/>*/}
                </div>
                <nav className={isMenuOpen ? "is-visible" : ""}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;