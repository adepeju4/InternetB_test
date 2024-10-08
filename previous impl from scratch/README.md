# Project Name
Total Lawyers

## Introduction

This project is a web application that utilizes HTML, SCSS for styling, and TypeScript for scripting. The SCSS files are compiled into CSS using the `sass` command. This README will guide you through setting up the development environment and running the necessary commands to get started.

## Prerequisites

- Node.js and npm installed on your machine. You can download them from the [official Node.js website](https://nodejs.org/).

## Setting up the Development Environment

1. **Clone the repository:**

    ```sh
    cd InternetB_test_test
    git clone https://github.com/adepeju4/InternetB_test_test.git

2. **Install dependencies:** Run the following command to install all the necessary npm packages:

    ```sh
    npm install

3. **Compile SCSS to CSS:** Use the following command to watch for changes in your SCSS files and compile them to CSS:

    ```sh
    npm run sass-watch

4. **Start the development server:**
    Run the following command to start the development server:

    ```sh
    npm run dev

## Explanation

HTML, SCSS, and TypeScript: The project utilizes HTML for the structure of the web pages, SCSS for styling, and TypeScript for scripting. TypeScript is a strongly typed programming language that builds on JavaScript, providing better tooling at any scale.

npm install: This command installs all the dependencies listed in the package.json file. These dependencies are required for the project to run correctly.

sass --watch: This command watches the app.scss file in the src/styles directory for any changes and compiles it into a main.css file in the dist directory. This ensures that your styles are always up-to-date with your SCSS changes.

npm run dev: This command starts the development server, allowing you to see your changes in real-time as you develop your application.

TypeScript Implementation
The TypeScript file (script.ts) includes the following functionalities:

Dropdown Menu:

- Toggles the visibility of the dropdown menu when the dropdown toggle is clicked.
- Updates the value of the dropdown input when an item is selected from the dropdown menu.
- Removes the 'invalid' class from the dropdown input when an item is selected.

## Running the Project

After setting up the development environment, you can open the index.html by running ```npm run dev`` file in your browser to see the project in action. Make sure to keep the sass --watch command running to continuously compile SCSS to CSS as you make changes.

PS: This project uses vite as its build tool.

Conclusion
Follow the steps above to set up your development environment and start working on the project. If you encounter any issues, please refer to the documentation or reach out to me directly.

Happy coding!
