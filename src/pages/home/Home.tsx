import {FC, useContext, useEffect} from 'react';
import PageTitle from "../../components/PageTitle.tsx";
import {HeaderContext} from "../../context/HeaderContext.tsx";
import "./home.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faSeedling} from "@fortawesome/free-solid-svg-icons";
import AnimatedBox from "../../components/AnimatedBox.tsx";

const Home: FC = () => {

    const {setPageTitle} = useContext(HeaderContext);

    useEffect(() => {
        setPageTitle("Home");
    }, [setPageTitle]);

    return (
        <section className={"page home-page"}>
            <article className={"home-hero full-width"}>
                <div className={"_wrapper home-section"}>
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
            <article className={"story-section home-section"}>
                <h2 className={"section-title"}>Our Story</h2>
                <div className="story-blocks">
                    <div className="story-block">

                    </div>
                    <div className="story-block">

                    </div>
                </div>
            </article>
            <article className={"attributes-section home-section"}>
                <h2 className={"section-title"}>What sets us apart?</h2>
                <div className={"attribute-boxes-container"}>
                    <AnimatedBox className="attribute-box">
                        <div className="box-header">
                            <FontAwesomeIcon icon={faSeedling}/>
                            Authentic Craftsmanship
                        </div>
                        <p className="box-content">
                            With over 30 years of experience, Tamas and Gabriella put their expertise into every pita, using only the finest ingredients and traditional techniques.
                        </p>
                    </AnimatedBox>
                    <AnimatedBox className="attribute-box">
                        <div className="box-header">
                            <FontAwesomeIcon icon={faUsers}/>
                            Family-Owned
                        </div>
                        <p className="box-content">
                            Being a family-run business, we take pride in maintaining personal oversight, ensuring
                            consistency and quality with each and every batch.
                        </p>
                    </AnimatedBox>
                    <AnimatedBox className="attribute-box">
                        <div className="box-header">
                            <FontAwesomeIcon icon={faGlobe}/>
                            Wide Reach
                        </div>
                        <p className="box-content">
                            We proudly supply everything from small local supermarkets to large restaurant chains,
                            always maintaining the highest quality standards.
                        </p>
                    </AnimatedBox>
                </div>
            </article>
        </section>
    );
};

export default Home;