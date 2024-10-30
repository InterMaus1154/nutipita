import {FC} from 'react';

/**
 * Page footer
 * @constructor
 */
const Footer: FC = () => {
    return (
        <footer>
            NutiPita &copy; {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;