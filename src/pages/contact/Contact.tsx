import {FC, useContext, useEffect} from 'react';
import AnimatedBox from "../../components/AnimatedBox.tsx";
import "./contact.css";
import {HeaderContext} from "../../context/HeaderContext.tsx";
import PageTitle from "../../components/PageTitle.tsx";

const Contact: FC = () => {

    const {setPageTitle} = useContext(HeaderContext);

    useEffect(()=>{
        setPageTitle("Contacts");
    }, [setPageTitle]);

    return (
        <section className={"page contact-page"}>
            <article className={"contact-details"}>
                <PageTitle>Contacts</PageTitle>
                <div className="contact-wrapper">
                    <AnimatedBox className="contact-box">
                        <h3 className="contact-box-header">Mobile</h3>
                        <a href={"tel:+447754226325"} className="icon-wrapper">
                            <img src="icon/phoneicon.png" alt="Phone icon" aria-hidden={true}/>
                        </a>
                        <a href="tel:+447754226325" className="contact-info">+447754226325</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <h3 className="contact-box-header">Email</h3>
                        <a href={"mailto:nutipita@gmail.com"} className="icon-wrapper email-icon">
                            <img src={"icon/email.png"} alt={"Email icon"} aria-hidden={true}/>
                        </a>
                        <a className={"contact-info"} href="mailto:nutipita@gmail.com">nutipita@gmail.com</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <h3 className="contact-box-header">WhatsApp</h3>
                        <a href={"https://wa.me/447754226325"} className="icon-wrapper">
                            <img src="icon/whatsappicon.png" alt="Whatsapp icon" aria-hidden={true}/>
                        </a>
                        <a href="https://wa.me/447754226325" className="contact-info">+447754226325</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <h3 className="contact-box-header">Instagram</h3>
                        <a className="icon-wrapper">
                            <img src="icon/instaicon.png" alt="Instagram icon" aria-hidden={true}/>
                        </a>
                        <a href="" className={"contact-info"}>@nutipita</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <h3 className="contact-box-header">TikTok</h3>
                        <a className="icon-wrapper">
                            <img src="icon/tiktokicon.png" alt="Tiktok icon" aria-hidden={true}/>
                        </a>
                        <a href="" className={"contact-info"}>@nutipita</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <h3 className={"contact-box-header"}>Location</h3>
                        <a href="https://maps.app.goo.gl/dHEy2pm6o8jzjoc79" className={"icon-wrapper"} >
                            <img src="icon/mapicon.png" alt="Map pin icon" aria-hidden={true}/>
                        </a>
                        <a style={{textAlign: "center"}} href="https://maps.app.goo.gl/dHEy2pm6o8jzjoc79"
                           className={"contact-info"}>
                            Unit ? N18 2TQ
                        </a>
                    </AnimatedBox>
                </div>
            </article>
            <article className="location-details">
                <h2 className="section-title">Map</h2>
                <AnimatedBox className="location-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.762984332091!2d-0.0717926231477124!3d51.60923127183671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761e9818999969%3A0xd47e022c32f85e4a!2sLanghedge%20Industrial%20Estate%2C%20Langhedge%20Ln%2C%20London%20N18%202TQ!5e0!3m2!1sen!2suk!4v1730372582475!5m2!1sen!2suk"
                        allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </AnimatedBox>
            </article>
        </section>
    );
};

export default Contact;