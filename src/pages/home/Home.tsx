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
                            A Family Tradition of Quality.
                        </h3>
                    </div>
                    <p>
                        Established in 2025 by Tamas and Gabriella, a married  couple with over 30 years of baking experience, Nutipita is a family-run artisan bakery that specializes in premium, handmade pita bread.
                    </p>
                    {/*<div className={"links"}>*/}
                    {/*    <a href={"#"} className={"link"}>Our Story</a>*/}
                    {/*    <a href={"#"} className={"link"}>Products</a>*/}
                    {/*</div>*/}
                </div>
            </article>
            <article className={"story-section home-section"}>
                <h2 className={"section-title"}>Where Quality Meets Care</h2>
                <div className={"section-block"}>
                    <AnimatedBox className={"paragraph"}>
                            At Nutipita, quality isn’t just a promise—it’s a tradition. As a family business, we ensure
                            that
                            every piece of pita bread is crafted with care and attention to detail.
                    </AnimatedBox>
                    <AnimatedBox className={"paragraph"}>
                            From small supermarkets to large restaurant chains, we supply a wide range of businesses
                            with
                            our freshly baked products. Our hands-on approach allows us to maintain the highest
                            standards,
                            ensuring that every batch of pita meets the expectations of our valued customers.
                    </AnimatedBox>
                </div>
            </article>
            <article className={"attributes-section full-width"}>
                <div className={"_wrapper home-section"}>
                    <h2 className={"section-title"}>What sets us apart?</h2>
                    <div className={"attribute-boxes-container"}>
                        <AnimatedBox className="attribute-box">
                            <div className="box-header">
                                <FontAwesomeIcon icon={faSeedling}/>
                                Authentic Craftsmanship
                            </div>
                            <p className="box-content">
                                With over 30 years of experience, Tamas and Gabriella put their expertise into every
                                pita, using only the finest ingredients and traditional techniques.
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
                </div>
            </article>
            <article className={"cta-section home-section full-width"}>
                <div className={"_wrapper"}>
                    <h2 className={"section-title"}>We Would Be Happy to Supply You!</h2>
                    <div className="links">
                        <AnimatedBox>
                            <NavLink to={"/contact"} className="link">Contact Us!</NavLink>
                        </AnimatedBox>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Home;