import {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone,faEnvelope, faLocationPin} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp, faTiktok, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Contact: FC = () => {

    return (
        <section className={"page contact-page"}>
            <article className={"contact-details"}>
                <h2 className="section-title">Contacts</h2>
                <div className="contact-wrapper">
                    <div className="contact-box">
                        <h3 className="contact-box-header">Email</h3>
                        <a href={"mailto:nutipita@gmail.com"} className="icon-wrapper">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                        <a className={"contact-info"} href="mailto:nutipita@gmail.com">nutipita@gmail.com</a>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-header">Mobile</h3>
                        <a href={"tel:+447754226325"} className="icon-wrapper">
                            <FontAwesomeIcon icon={faPhone}/>
                        </a>
                        <a href="tel:+447754226325" className="contact-info">+447754226325</a>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-header">WhatsApp</h3>
                        <a href={"https://wa.me/447754226325"} className="icon-wrapper">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                        <a href="https://wa.me/447754226325" className="contact-info">+447754226325</a>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-header">Instagram</h3>
                        <a className="icon-wrapper">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="" className={"contact-info"}>@nutipita</a>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-header">TikTok</h3>
                        <a className="icon-wrapper">
                            <FontAwesomeIcon icon={faTiktok}/>
                        </a>
                        <a href="" className={"contact-info"}>@nutipita</a>
                    </div>
                    <div className="contact-box">
                        <h3 className={"contact-box-header"}>Location</h3>
                        <a href="https://maps.app.goo.gl/dHEy2pm6o8jzjoc79" className={"icon-wrapper"}>
                            <FontAwesomeIcon icon={faLocationPin} />
                        </a>
                        <a href="https://maps.app.goo.gl/dHEy2pm6o8jzjoc79" className={"contact-info"}>
                            N18 2TQ
                        </a>
                    </div>
                </div>
            </article>
            <article className="location-details">
                <h2 className="section-title">Location</h2>
                <div className="location-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.762802503636!2d-0.07179262345169503!3d51.60923460325893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761e9818999969%3A0xd47e022c32f85e4a!2sLanghedge%20Industrial%20Estate%2C%20Langhedge%20Ln%2C%20London%20N18%202TQ!5e0!3m2!1shu!2suk!4v1730292277961!5m2!1shu!2suk"
                        allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </article>
        </section>
    );
};

export default Contact;