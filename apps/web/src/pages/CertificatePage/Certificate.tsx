import SoftwarePersonaCertificate from "../../../../images/sertifika.png"
import styles from "../CertificatePage/Certificate.module.css";

export default function Certificate() {
    return(
        
            <div className={styles.certificatePageContainer}>
                <h1 className={styles.title}>Certificates</h1>
                
                <div className={styles.certificateCard}>
                    <h2 className={styles.cardTitle}>
                        Yazılım Mesleki Gelişim Programı Katılım Sertifikası
                    </h2>
                    <img src={SoftwarePersonaCertificate} alt="Software Persona Certificate" className={styles.cardImage} />
                </div>

            </div>
        
    )
}