import {FC, useContext, useEffect} from 'react';
import PageTitle from "../components/PageTitle.tsx";
import {HeaderContext} from "../context/HeaderContext.tsx";

const Home: FC = () => {

    const {setPageTitle} = useContext(HeaderContext);

    useEffect(()=>{
        setPageTitle("Home");
    }, [setPageTitle]);

    return (
        <section className={"page"}>
            <PageTitle>NutiPita</PageTitle>
            <h2>Welcome to Nuti Pita!</h2>
        </section>
    );
};

export default Home;