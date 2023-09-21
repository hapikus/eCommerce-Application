# eCommerce-Application

[Deploy](https://hapikus.github.io/eCommerce-Application/)

![Снимок экрана 2023-09-22 012035](https://github.com/hapikus/eCommerce-Application/assets/84094895/867aba82-0ea6-4f0d-8560-37aba67ca6dd)

## Table of Contents

- [Description](#description)
- [Technology Stack](#technology-stack)
- [Available Scripts](#available-scripts)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)

## Description

eCommerce-Application is a web application built with React and TypeScript using the Vite build tool. It provides an interactive and user-friendly interface for browsing and purchasing products from an online store. The application aims to offer a seamless shopping experience to customers while allowing developers to easily extend and customize the codebase.

## Technology Stack

The project uses the following technologies:

- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing to the language.
- **Vite**: A fast and lightweight build tool for modern web applications.
- **Redux Toolkit**: Redux Toolkit is a set of tools and conventions that simplify the process of managing application state in a predictable and efficient manner.
- **Axios**: Axios is a popular JavaScript library used for making HTTP requests, making it easy to interact with APIs and fetch data from servers.
- **Jest**: JavaScript testing framework that provides a simple and efficient way to write unit tests, ensuring the reliability and quality of your code.
- **ESLint**: ESLint is a widely-used linter that helps maintain code quality by identifying and fixing code style issues and potential errors.
- **Prettier**: Prettier is an opinionated code formatter that enforces consistent code formatting across the project, making the codebase more readable and maintainable.
- **Husky**: Husky is a tool that allows you to set up pre-commit and pre-push hooks, ensuring code quality checks are performed before changes are committed or pushed to the repository.
- **Ant Design**: Ant Design is a comprehensive design system and UI library that provides a wide range of components and styles to create visually appealing and consistent user interfaces.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the development server provided by Vite. It will start the application in development mode and automatically open it in your default web browser. Any changes made to the source code will trigger a hot reload, updating the application in real-time.

### `npm run build`

Builds the production version of the application. It runs TypeScript compilation and then uses Vite to create an optimized build for deployment. The output will be available in the `dist` folder.

### `npm run lint`

Runs ESLint to check the project for any code quality issues. It enforces the defined code style and helps catch potential bugs early on.

### `npm run format`

Formats the source code using Prettier to ensure consistent code formatting across the project.

### `npm run prepare`

Installs Husky, a tool that helps set up Git hooks, to automatically run tasks like linting and testing before committing code.

### `npm test`

Runs Jest to execute unit tests for the application. It helps ensure the stability and correctness of the codebase.

## Getting Started

To get a local copy of the project up and running, follow the steps below:

### Prerequisites

Before starting, ensure you have the following installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/en/download/) and follow the installation instructions for your operating system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hapikus/eCommerce-Application.git
   ```
2. Change into the project directory:

   ```bash
    cd eCommerce-Application
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server and view the application locally, run the following command:

   ```bash
   npm run dev
   ```

The development server will start, and the application will be accessible at the address shown in the console. 
Check the console output for the actual address and port number where the application is running. It will be displayed in the following format:

   ```bash
   Local:   http://127.0.0.1:XXXX/
   ```

Now, you can open your browser and navigate to the displayed address to interact with the eCommerce-Application.
