import {HeaderContext} from "./HeaderContext.ts";

import {FC, ReactNode, useState} from 'react';


interface IProvider {
    children: ReactNode;
}

const HeaderContextProvider: FC<IProvider> = ({children}) => {

    const [isHeaderVisible, setHeaderVisible] = useState<boolean>(true);

    return (
        <HeaderContext.Provider value={{isHeaderVisible, setHeaderVisible}}>
            {children}
        </HeaderContext.Provider>
    );
};

export default HeaderContextProvider;