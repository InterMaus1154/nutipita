import {Dispatch, FC, MutableRefObject, SetStateAction} from 'react';

interface Props {
    _ref: MutableRefObject<HTMLButtonElement>;
    isNavVisible: boolean;
    setNavVisible: Dispatch<SetStateAction<boolean>>;
}

const HamburgerNavButton: FC<Props> = ({_ref, isNavVisible, setNavVisible}) => {
    return (
        <button ref={_ref}
                className={isNavVisible ? "hamburger-button hamburger-open" : "hamburger-button"}
                aria-label={"Toggle navigation menu"} onClick={() => {
            setNavVisible(!isNavVisible)
        }}>
            <span className={"hamburger-line"}></span>
            <span className={"hamburger-line"}></span>
            <span className={"hamburger-line"}></span>
        </button>
    );
};

export default HamburgerNavButton;