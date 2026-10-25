import React, { useState } from "react";
import SoftwarePersonaCertificate from "../../../../images/sertifika.png";
import styles from "../CertificatePage/Certificate.module.css";

interface CertificateItem {
  id: number;
  title: string;
  image: string;
}

/* Orijinal tek bir sertifika tanımı */
const originalCertificate: CertificateItem = {
  id: 1,
  title: "Yazılım Mesleki Gelişim Programı Katılım Sertifikası",
  image: SoftwarePersonaCertificate,
};

export default function Certificate() {
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFocused) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div className={styles.certificatePageContainer}>
      <div className={styles.starsBackground}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`${styles.star} ${styles[`star-${i + 1}`]}`} />
        ))}
      </div>

      {/* Başlık ve tekil sertifika dahil tüm alanın blurlanması için ana kapsayıcı */}
      <div className={`${styles.mainContentWrapper} ${isFocused ? styles.blurAllPages : ""}`}>
        <h1 className={styles.title}>Certificates</h1>

        <div className={styles.certificateGrid}>
          <div
            className={`${styles.certificateItemWrapper} ${isFocused ? styles.pausedAnimation : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsFocused(true)}
          >
            <div className={styles.imageContainer}>
              <img src={originalCertificate.image} alt={originalCertificate.title} className={styles.cardImage} />
            </div>
            <h2 className={styles.cardTitle}>{originalCertificate.title}</h2>
          </div>
        </div>
      </div>

      {/* Odak Görünümü (Pop-up Değil, Siyah Perde Yok) */}
      {isFocused && (
        <div className={styles.focusOverlay} onClick={() => setIsFocused(false)}>
          <div className={styles.focusContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsFocused(false)}>
              &times;
            </button>
            <h2 className={styles.focusTitle}>{originalCertificate.title}</h2>
            <div className={styles.focusImageWrapper}>
              <img src={originalCertificate.image} alt={originalCertificate.title} className={styles.focusImage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}