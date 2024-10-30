import {FC, ReactNode, HTMLAttributes, useRef} from 'react';
import {motion, useInView} from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
}

const AnimatedContactBox: FC<Props> = ({children}) => {

    const ref = useRef<HTMLDivElement>(document.createElement("div"));

    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 50}}
            className={"contact-box"}
            transition={{duration: 1.2}}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedContactBox;