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
                    <div className="hero-block hero-left">
                        <div className={"title-block"}>
                            <PageTitle>NutiPita</PageTitle>
                            <h3 className={"subtitle"}>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </span>
                                <span>
                                    Lorem ipsum dolor sit amet.
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="hero-block hero-right">

                    </div>
                </div>
            </article>
        </section>
    );
};

export default Home;