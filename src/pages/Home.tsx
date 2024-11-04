import {FC} from 'react';
import PageTitle from "../components/PageTitle.tsx";

const Home: FC = () => {
    return (
        <section className={"page"}>
            <PageTitle>NutiPita</PageTitle>
            <h2>Welcome to Nuti Pita!</h2>
        </section>
    );
};

export default Home;