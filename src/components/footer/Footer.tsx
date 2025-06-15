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
                    Nuti Pita &copy;: Fresh, Handmade, Authentic Pita Bread in London - from {new Date().getFullYear()}
                </span>
                <a href={"https://maps.app.goo.gl/nFHW525ojXRzFnqL6"} target={"_blank"} title={"Open map in new page"}>
                    Unit 13, Langhedge Industrial Estate, N18 2TQ, London
                </a>
            </div>
        </footer>
    );
};

export default Footer;