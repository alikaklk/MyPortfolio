# 🚀 MyPortfolio (Full-Stack Monorepo)

A professional, high-performance **Full-Stack Monorepo** managed by **Turborepo**. This project showcases a unified development environment featuring a web app, a mobile app, and a robust backend.

## 🏗 Project Structure

Managed via **Turborepo**, the project is organized as follows:

- **`apps/web`**: Personal portfolio website built with **React.js** and **Vite**.
- **`apps/mobile`**: Cross-platform mobile application developed with **React Native**.
- **`apps/api`**: Backend service built with **Node.js** & **Express** to handle contact forms.
- **`packages/`**: Shared **TypeScript** configurations, **ESLint** rules, and common UI types.

## 🛠 Tech Stack & Dependencies

### 💻 Frontend (Web)
- **Core:** React.js 18+
- **Tooling:** Vite, TypeScript
- **Styling:** Tailwind CSS / CSS Modules
- **Data Fetching:** Axios / TanStack Query

### 📱 Mobile
- **Core:** React Native (TypeScript)
- **Navigation:** React Navigation
- **Icons:** Lucide React / Vector Icons

### ⚙️ Backend & Database
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** **PostgreSQL** (Relational storage)
- **ORM:** Prisma or Drizzle
- **Validation:** Zod (for contact form validation)

### 🔧 Infrastructure
- **Monorepo Tooling:** Turborepo
- **Package Manager:** npm (or pnpm)

## 🌟 Key Features

- **Cross-Platform Accessibility:** Modern web experience and native mobile app in one repo.
- **Database Integration:** Contact forms that persist messages directly to a PostgreSQL database.
- **Type Safety:** Shared TypeScript interfaces across API, Web, and Mobile.
- **Monorepo Efficiency:** Single `npm install` for the entire ecosystem.

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (Latest LTS)
- **PostgreSQL** (Local installation or Cloud instance like Supabase/Neon)

### 2. Installation & Setup
```bash
# Clone the repository
git clone [https://github.com/alikaklk/MyPortfolio.git](https://github.com/alikaklk/MyPortfolio.git)
cd MyPortfolio

# Install all dependencies for all apps at once
npm install
