import {HeaderContext} from "./HeaderContext.ts";

import {FC, ReactNode, useState} from 'react';


interface IProvider {
    children: ReactNode;
}

const HeaderContextProvider: FC<IProvider> = ({children}) => {

    const [isHeaderVisible, setHeaderVisible] = useState<boolean>(true);
    const [isNavVisible, setNavVisible] = useState<boolean>(false);

    return (
        <HeaderContext.Provider value={{isHeaderVisible, setHeaderVisible, isNavVisible, setNavVisible}}>
            {children}
        </HeaderContext.Provider>
    );
};

export default HeaderContextProvider;