# Task Management App

A simple task management application built with React. The app allows users to add, delete, and edit tasks while persisting the data using `localStorage` (no backend required).

## Features
- Add new tasks with a title, priority, due date, and status.
- View all tasks in a table format.
- Delete tasks.
- Data is stored in the browser's `localStorage`, so it persists even after a page reload.

## Technologies Used
- React (with functional components and hooks)
- Ant Design (for UI components)
- TypeScript (for type safety)
- LocalStorage (for data persistence)

## Setup and Run the App Locally

### Prerequisites
Before running the app locally, you will need to have `Node.js` and `npm` installed on your machine. If you don’t have them installed, download and install from the following:
- [Node.js](https://nodejs.org/)

### Steps to Run the App

1. **Clone the repository**  
   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/subhana0304/Task-Management-App

2. **Live Site**
https://verdant-bubblegum-482f82.netlify.app/



























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
