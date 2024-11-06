import {FC, useContext, useEffect} from 'react';
import PageTitle from "../components/PageTitle.tsx";
import {HeaderContext} from "../context/HeaderContext.tsx";

const Home: FC = () => {

    const {setPageTitle} = useContext(HeaderContext);

    useEffect(() => {
        setPageTitle("Home");
    }, [setPageTitle]);

    return (
        <section className={"page"}>
            <PageTitle>NutiPita</PageTitle>
            <h2>Welcome to Nuti Pita!</h2>
            <div>
                <p>Nutipita is a family-run artisan Pita Bakery established in 2025, specializing in high-quality pita
                    bread.
                </p>
                <p>Founded by Tamas, a seasoned baker with over 30 years of experience, Nutipita proudly supplies
                    everything
                    from small supermarkets to large restaurant chains.
                </p>
                <p>As a family business, we are committed to maintaining the highest standards, ensuring that every pita
                    is
                    crafted with care and precision for an exceptional taste,pocket and texture.
                </p>
                <p>Quality is our tradition,
                    and it’s what sets us apart.
                </p>
            </div>
        </section>
    );
};

export default Home;