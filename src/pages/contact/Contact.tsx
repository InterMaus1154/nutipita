import {FC} from 'react';
import AnimatedBox from "../../components/AnimatedBox.tsx";
import "./contact.css";
import {Helmet} from "react-helmet-async";

const Contact: FC = () => {

    return (
        <section className={"page contact-page"}>
            {/*custom header*/}
            <Helmet>
                <title>Contact Us - Nuti Pita: Fresh, Handmade, Authentic Pita Bread in London</title>
                <meta name="description"
                      content="Have a question or want to place a pita order? Contact Nuti Pita, a London-based family bakery specializing in fresh, handmade pita bread. We'd love to hear from you!"/>
                <meta property="og:title"
                      content="Contact - Nuti Pita: Fresh, Handmade, Authentic Pita Bread in London"/>
                <meta property="og:description"
                      content="Have a question or want to place a pita order? Contact Nuti Pita, a London-based family bakery specializing in fresh, handmade pita bread. We'd love to hear from you!"/>
                <meta property="og:url" content="https://nutipita.co.uk/contact"/>
                <meta property="og:image" content="https://nutipita.co.uk/icon/icon_300x300.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:locale" content="en_GB"/>
                <link rel="canonical" href="https://nutipita.co.uk/contact"/>
            </Helmet>
            {/*---content---*/}
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
                        <a href={"mailto:sales@nutipita.co.uk"} className="icon-wrapper email-icon"
                           aria-label={"Email address: sales@nutipita.co.uk"}>
                            <img src={"icon/email.png"} alt={"Email icon"} aria-hidden={true}/>
                        </a>
                        <a className={"contact-info"} href="mailto:sales@nutipita.co.uk">sales@nutipita.co.uk</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <a href={"https://wa.me/447754226325"} className="icon-wrapper"
                           aria-label={"Whatsapp number: +447754226325"}>
                            <img src="icon/whatsappicon.png" alt="Whatsapp icon" aria-hidden={true}/>
                        </a>
                        <a href="https://wa.me/447754226325" className="contact-info">+447754226325</a>
                    </AnimatedBox>
                    <AnimatedBox className="contact-box">
                        <a target={"_blank"} href="https://maps.app.goo.gl/nFHW525ojXRzFnqL6" className={"icon-wrapper"}
                           aria-label={"Location of our bakery"}>
                            <img src="icon/mapicon.png" alt="Bakery location" aria-hidden={true}/>
                        </a>
                        <a target={"_blank"} href="https://maps.app.goo.gl/nFHW525ojXRzFnqL6"
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
                            Folow us on Facebook!
                        </a>
                    </AnimatedBox>
                    <AnimatedBox className={"contact-box"}>
                        <a target={"_blank"} href="https://www.instagram.com/nutipita/" className={"icon-wrapper"}
                           aria-label={"Nuti Pita Bakery Instagram Page"}>
                            <img src="icon/insta.png" alt="Nuti pita instagram" aria-hidden={true}/>
                        </a>
                        <a target={"_blank"} href="https://www.instagram.com/nutipita/">
                            Follow us on Instagram!
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