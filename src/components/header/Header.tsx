import {FC} from 'react';
import "./header.css";
/**
 * Page header
 * @constructor
 */
const Header: FC = () => {
    return (
        <header className={"full-width"}>
            <div className="_wrapper">
                <h1 aria-label={"Nutipita"}>
                    <img src="/icon/logo.png" alt="Logo of Nutipita bakery"/>
                </h1>
                <nav>
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