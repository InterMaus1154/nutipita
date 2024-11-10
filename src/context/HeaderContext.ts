import {createContext, Dispatch, SetStateAction} from "react";

interface IHeaderContext {
    isHeaderVisible: boolean;
    setHeaderVisible: Dispatch<SetStateAction<boolean>>;
}

export const HeaderContext = createContext<IHeaderContext>({} as IHeaderContext);