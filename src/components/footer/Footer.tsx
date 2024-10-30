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
                Nuti Pita &copy; {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;