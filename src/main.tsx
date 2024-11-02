import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import HeaderContextProvider from "./context/HeaderContext.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <HeaderContextProvider>
            <App/>
        </HeaderContextProvider>
    </BrowserRouter>
);
