import {FC} from 'react';
import "./App.css";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

const App: FC = () => {
    return (
        <div className={"app-component"}>
            <Header />
            <main>

            </main>
            <Footer />
        </div>
    );
};

export default App;