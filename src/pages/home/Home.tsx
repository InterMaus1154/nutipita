import {FC, useContext, useEffect} from 'react';
import PageTitle from "../../components/PageTitle.tsx";
import {HeaderContext} from "../../context/HeaderContext.tsx";
import "./home.css";

const Home: FC = () => {

    const {setPageTitle} = useContext(HeaderContext);

    useEffect(() => {
        setPageTitle("Home");
    }, [setPageTitle]);

    return (
        <section className={"page home-page"}>
            <article className={"home-hero full-width"}>
                <div className={"_wrapper"}>
                    <div className={"title-block"}>
                        <PageTitle>Welcome to Nutipita!</PageTitle>
                        <h3 className={"subtitle"}>
                            At Nutipita, quality isn’t just a promise—it’s a tradition
                        </h3>
                    </div>
                    <div className={"hero-links"}>
                        <a href={"#"} className={"hero-link"}>Our Story</a>
                        <a href={"#"} className={"hero-link"}>Products</a>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Home;