import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { Instagram, LinkedIn, GmailLight } from "@skill-icons/react";

export default function Contact() {
    // TypeScript için ref tipini tanımladık
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_ej3pifd',   // Service ID
                'template_1zzc84i',   // Template ID
                form.current,
                'FdupUMh1QY59RW65u'   // Public Key
            )
            .then(() => {
                alert("Message sent successfully! 🚀");
                form.current?.reset();
            }, (error) => {
                alert("Something went wrong, please try again.");
                console.error("EmailJS Error:", error.text);
            });
        }
    };

    return (
        <div className={styles.ContactPageContainer}>
            <div className={styles.ContactFormContainer}>
                <h2 className={styles.ContactTitle}>Get In Touch</h2>
                
                <form ref={form} onSubmit={sendEmail} className={styles.ContactForm}>
                    <div className={styles.InputGroup}>
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter your name" required />
                    </div>

                    <div className={styles.InputGroup}>
                        <label>Surname</label>
                        <input type="text" name="surname" placeholder="Enter your surname" required />
                    </div>

                    <div className={styles.InputGroup}>
                        <label>Message</label>
                        <textarea name="message" placeholder="How can I help you?" rows={4} required></textarea>
                    </div>

                    <button type="submit" className={styles.ContactInputButton}>
                        Submit
                    </button>
                </form>

                <div className={styles.SocialSeparator}>
                    <span>OR CONNECT WITH ME</span>
                </div>

                <div className={styles.SocialLinks}>
                    <a href="https://www.instagram.com/debugdays_ali" target="_blank" rel="noreferrer" className={styles.SocialIcon}>
                        <Instagram />
                    </a>
                    <a href="https://www.linkedin.com/in/ali-k-36b73331b?" target="_blank" rel="noreferrer" className={styles.SocialIcon}>
                        <LinkedIn />
                    </a>
                    <a href="mailto:ali.kaklk3657@gmail.com" className={styles.SocialIcon}>
                        <GmailLight />
                    </a>
                </div>
            </div>
        </div>
    );
}