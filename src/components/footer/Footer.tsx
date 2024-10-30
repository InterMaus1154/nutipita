import {FC} from 'react';
import "./footer.css";
/**
 * Page footer
 * @constructor
 */
const Footer: FC = () => {
    return (
        <footer className={"full-width"}>
            <div className="_wrapper">
                <span className={"copy"}>
                    Nuti Pita &copy; {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
};

export default Footer;