# 🚀 MyPortfolio (Full-Stack Monorepo)

Bu proje, **Turborepo** kullanılarak yönetilen, yüksek performanslı bir **Monorepo** mimarisidir. Web, Mobil ve Backend katmanlarını tek bir çatı altında toplayarak modern bir yazılım geliştirme sürecini sergiler.

## 🏗 Proje Yapısı

Proje üç ana uygulamadan oluşmaktadır:

- **`apps/web`**: **React.js** ve **Vite** kullanılarak geliştirilen kişisel portfolyo web sitesi.
- **`apps/mobile`**: **React Native** (TypeScript) ile geliştirilen, çapraz platform mobil uygulama.
- **`apps/api`**: İletişim formlarını ve verileri işleyen, **Node.js** tabanlı backend servisi.
- **`packages/`**: Tüm uygulamalar arasında paylaşılan ortak konfigürasyonlar (TSConfig, ESLint, vb.).

## 🛠 Teknoloji Yığını (Tech Stack)

- **Frontend:** React.js, TypeScript, Tailwind CSS
- **Mobile:** React Native, Expo/CLI
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (İletişim formu verileri için)
- **Monorepo Aracı:** Turborepo

## 🌟 Öne Çıkan Özellikler

- **Çapraz Platform:** Portfolyoma hem tarayıcı üzerinden hem de mobil uygulama üzerinden erişilebilir.
- **Aktif İletişim Formu:** Web ve mobil üzerinden gönderilen mesajlar doğrudan **PostgreSQL** veritabanına kaydedilir.
- **Shared Logic:** Turborepo sayesinde doğrulama şemaları ve tip tanımlamaları tüm platformlarda ortak kullanılır.

## 🚀 Başlangıç

1. **Depoyu klonlayın:**
   ```bash
   git clone [https://github.com/alikaklk/MyPortfolio.git](https://github.com/alikaklk/MyPortfolio.git)
