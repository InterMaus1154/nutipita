import {FC, ReactNode, useContext, useEffect, useRef} from 'react';
import {HeaderContext} from "../context/HeaderContext.tsx";

interface Props {
    children: ReactNode;
}

const PageTitle: FC<Props> = ({children}) => {

    const ref = useRef<HTMLHeadingElement>(document.createElement("h2"));

    const {setPageTitleVisible, headerHeight} = useContext(HeaderContext);

    useEffect(()=>{

        if(!ref.current) return;

        const observer = new IntersectionObserver(entries => {
            if(!entries[0].isIntersecting){
                setPageTitleVisible(true);
            }else{
                setPageTitleVisible(false);
            }
        }, {
            rootMargin: (-1 * headerHeight - 9) + "px"
        });

        observer.observe(ref.current);

        return () =>{
            observer.disconnect();
        }

    }, [headerHeight, setPageTitleVisible]);

    return (
        <h2 ref={ref} className={"section-title"}>
            {children}
        </h2>
    );
};

export default PageTitle;