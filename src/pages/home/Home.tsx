import {FC} from 'react';
import "./home.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faSeedling} from "@fortawesome/free-solid-svg-icons";
import AnimatedBox from "../../components/AnimatedBox.tsx";
import {NavLink} from "react-router-dom";

const Home: FC = () => {
    return (
        <section className={"page home-page"}>
            <article className={"home-hero full-width"}>
                <div className={"_wrapper home-section"}>
                    <div className={"title-block"}>
                        <h2 className={"section-title"}>Welcome to Nutipita!</h2>
                        <h3 className={"subtitle"}>
                            At Nutipita, quality isn’t just a promise—it’s a tradition
                        </h3>
                    </div>
                    <div className={"links"}>
                        <a href={"#"} className={"link"}>Our Story</a>
                        <a href={"#"} className={"link"}>Products</a>
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
            <article className={"cta-section home-section full-width"}>
                <div className={"_wrapper"}>
                    <h2 className={"section-title"}>Join Us in Our Journey</h2>
                    <h3 className="subtitle">Experience the taste of artisan pita bread with Nutipita—where quality and tradition meet in every bite.</h3>
                    <div className="links">
                        <NavLink to={"/contact"} className="link">Contact Us!</NavLink>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Home;