# 🚀 MyPortfolio (Full-Stack Monorepo)

A professional, high-performance **Full-Stack Monorepo** managed by **Turborepo**. This project features a unified development environment with a web app, a mobile app, and a secure backend.

## 🏗 Project Structure

Managed via **Turborepo**, the project is organized as follows:

- **`apps/web`**: Personal portfolio website built with **React.js** and **Vite**.
- **`apps/mobile`**: Cross-platform mobile application developed with **React Native**.
- **`apps/api`**: Backend service built with **Node.js** & **Express** to handle contact forms securely.
- **`packages/`**: Shared **TypeScript** configurations, **ESLint** rules, and common UI types.

## 🛠 Tech Stack & Dependencies

### 💻 Frontend (Web)
- **Core:** React.js 18+
- **Tooling:** Vite, TypeScript
- **Styling:** Tailwind CSS / CSS Modules

### 📱 Mobile
- **Core:** React Native (TypeScript)
- **Navigation:** React Navigation
- **Icons:** Lucide React / Vector Icons

### ⚙️ Backend & Database
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** **PostgreSQL** (Relational storage for secure data persistence)
- **ORM:** Prisma or Drizzle
- **Security:** Environment variables for sensitive data protection

### 🔧 Infrastructure
- **Monorepo Tooling:** Turborepo
- **Package Manager:** npm

## 🌟 Key Features

- **Cross-Platform Accessibility:** Modern web experience and native mobile app in one repo.
- **Secure Contact System:** Functional contact form that persists user messages to a private PostgreSQL database.
- **Type Safety:** Shared TypeScript interfaces across API, Web, and Mobile.
- **Monorepo Efficiency:** Unified workflow for faster development.

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (Latest LTS)
- **PostgreSQL** (Local or Cloud instance)

### 2. Installation
```bash
# Clone the repository
git clone [https://github.com/alikaklk/MyPortfolio.git](https://github.com/alikaklk/MyPortfolio.git)
cd MyPortfolio

# Install all dependencies
npm install


# Clone the repository
git clone [https://github.com/alikaklk/MyPortfolio.git](https://github.com/alikaklk/MyPortfolio.git)
cd MyPortfolio

# Install all dependencies
npm install

### 3. Environment Setup (Action Required)
# To protect sensitive information, create a .env file in apps/api/ and provide your own database credentials using the following format:

DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:YOUR_PORT/YOUR_DATABASE"
PORT=3001

# Note: The .env file is ignored by Git for security purposes.

### 4. Running the Project
# Launch all platforms simultaneously:

npx turbo run dev
Developed with ❤️ by alikaklk
