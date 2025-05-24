import {FC} from 'react';
import AnimatedBox from "../../components/AnimatedBox.tsx";
import "./contact.css";

const Contact: FC = () => {

    return (
        <section className={"page contact-page"}>
            <article className={"contact-details"}>
                <h2 className={"section-title"}>Contacts</h2>
                <div className="contact-wrapper">
                    <AnimatedBox className="contact-box">
                        <a href={"tel:+447754226325"} className="icon-wrapper"
                           aria-label={"Phone number: +447754226325 "}>
                            <img src="icon/phoneicon.png" alt="Phone icon" aria-hidden={true}/>
                        </a>
                        <a href="tel:+447754226325" className="contact-info">+447754226325</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <a href={"mailto:nutipita@gmail.com"} className="icon-wrapper email-icon"
                           aria-label={"Email address: nutipita@gmail.com"}>
                            <img src={"icon/email.png"} alt={"Email icon"} aria-hidden={true}/>
                        </a>
                        <a className={"contact-info"} href="mailto:nutipita@gmail.com">nutipita@gmail.com</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <a href={"https://wa.me/447754226325"} className="icon-wrapper"
                           aria-label={"Whatsapp number: +447754226325"}>
                            <img src="icon/whatsappicon.png" alt="Whatsapp icon" aria-hidden={true}/>
                        </a>
                        <a href="https://wa.me/447754226325" className="contact-info">+447754226325</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <a target={"_blank"} href="https://maps.app.goo.gl/dHEy2pm6o8jzjoc79" className={"icon-wrapper"}
                           aria-label={"Location of our bakery"}>
                            <img src="icon/mapicon.png" alt="Bakery location" aria-hidden={true}/>
                        </a>
                        <a target={"_blank"} href="https://maps.app.goo.gl/dHEy2pm6o8jzjoc79"
                           className={"contact-info"}>
                            Unit 13,Langhedge IE,N182TQ
                        </a>
                    </AnimatedBox>
                    <AnimatedBox className={"contact-box"}>
                        <a target={"_blank"} href="https://www.facebook.com/nutipita" className={"icon-wrapper"}
                           aria-label={"Nuti Pita Bakery Facebook Page"}>
                            <img src="icon/fb.png" alt="Nuti pita facebook" aria-hidden={true}/>
                        </a>
                        <a target={"_blank"} href="https://www.facebook.com/nutipita">
                            Visit us on Facebook!
                        </a>
                    </AnimatedBox>
                </div>
            </article>
            <article className="location-details">
                <h2 className="section-title">Map</h2>
                <AnimatedBox className="location-wrapper">
                    <iframe
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.762984332095!2d-0.07179262352363315!3d51.60923127183663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f17cc8cf0fd%3A0x6e1d731a6bd483b3!2sNuti%20Pita!5e0!3m2!1sen!2suk!4v1748110346640!5m2!1sen!2suk"}
                        allowFullScreen={true} loading="lazy"
                        title={"Google map of the location"}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </AnimatedBox>
            </article>
        </section>
    );
};

export default Contact;