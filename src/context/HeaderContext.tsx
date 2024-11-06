import {createContext, Dispatch, FC, SetStateAction, ReactNode, useState} from "react";

interface ContextProps {
    headerHeight: number;
    setHeaderHeight: Dispatch<SetStateAction<number>>;

    pageTitle: string;
    setPageTitle: Dispatch<SetStateAction<string>>;

    pageTitleVisible: boolean;
    setPageTitleVisible: Dispatch<SetStateAction<boolean>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const HeaderContext = createContext<ContextProps>({} as ContextProps);

interface ProviderProps{
    children: ReactNode;
}

const HeaderContextProvider : FC<ProviderProps> = ({children}) =>{

    const [headerHeight, setHeaderHeight] = useState<number>(114);
    const [pageTitle, setPageTitle] = useState<string>("");
    const [pageTitleVisible, setPageTitleVisible] = useState<boolean>(false);


    return(
        <HeaderContext.Provider value={{headerHeight, setHeaderHeight, pageTitle, setPageTitle, pageTitleVisible, setPageTitleVisible}}>
            {children}
        </HeaderContext.Provider>
    );
}

export default HeaderContextProvider;