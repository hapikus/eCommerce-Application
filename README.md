# eCommerce-Application

![eCommerce-Application](./public/temp.png)

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

- React: A popular JavaScript library for building user interfaces.
- TypeScript: A superset of JavaScript that adds static typing to the language.
- Vite: A fast and lightweight build tool for modern web applications.

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