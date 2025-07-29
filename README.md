# 🚀 Anas Adnan – Developer Portfolio

Welcome to my personal developer portfolio!  
This is a modern, animated, and fully responsive website built with React + TypeScript + Vite. It reflects my passion for software engineering and showcases the key aspects of my background, skills, and experiences — all crafted into a sleek, smooth, and intuitive interface.

---

## 🌟 Overview

This portfolio is more than just a website — it’s a structured presentation of who I am as a developer. It demonstrates my ability to combine visual design with functional frontend engineering using powerful tools like:

- ⚛️ **React + TypeScript** for component-based architecture and type safety  
- 🎨 **Material UI (MUI)** for responsive and consistent styling  
- 🎞️ **Framer Motion** to bring smooth, elegant animations to life  
- 💡 **Modular components** and clean code for scalability and reusability  

---

## 📂 Pages & Features

- **Home:** Overview of what I do – frontend, UI/UX, Git, responsive design  
- **Education:** Academic background & technical certifications  
- **Projects:** Dynamic card list of practical web apps built with various stacks  
- **Contact:** Styled form with email dialog and social media links  

---

## 🚀 Getting Started

Follow these instructions to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/anas-abujaber/Portfolio-React.git
cd Portfolio-React
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Your app should now be running at [http://localhost:5173](http://localhost:5173)

---

## 🧰 Tech Stack

- React  
- TypeScript  
- Vite  
- Material UI  
- Framer Motion  
- React Router  
- Email integration (via `mailto:`)

---

## 🔎 ESLint Configuration (Optional)

If you're using ESLint, consider enhancing it with type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

You can also install:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

Then extend config with:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

---

## 📱 Responsive Design

Every section is optimized for desktop, tablet, and mobile view using MUI’s grid and breakpoints.

---

## 📬 Contact

Feel free to reach out via the contact page or connect with me on social media. I'm open to collaborations, freelance opportunities, or any technical discussions.

> Built with 💙 by Anas Adnan — Software Engineering student, React enthusiast, and lifelong learner.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).