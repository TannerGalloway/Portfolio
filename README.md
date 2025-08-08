# Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

This repository contains the code for my personal portfolio website, built using React and Vite. The site showcases my skills, products i've tested, projects i've built, and provides a way to contact me.

[Visit Portfolio](https://TannerGalloway.github.io/Portfolio)

## Features

- **Hero Section:** An engaging introduction to grab visitors' attention.
- **About Me:** Information about my background, interests, and career aspirations.
- **Skills:** An overview of my technical skillset (languages, frameworks, testing methodologies, tools, etc.).
- **Products & Projects:** A curated list of my key products i've tested and projects i've built, including descriptions, technologies used testing methodologies, and links to live demos or repositories.
- **Contact Me:** A functional contact form allowing visitors to send me emails directly.
  - Integrated with **Formspree** for seamless email delivery without needing a dedicated backend.
- **Responsive Design:** Fully responsive layout ensuring optimal viewing experience across all devices (desktops, tablets, and smartphones).

## Technologies Used

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Languages:** HTML, CSS, JavaScript
- **Styling:** Tailwind CSS
- **Contact Form Service:** Formspree API

## Setup and Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/TannerGalloway/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    Choose the package manager you used (npm or yarn):

    ```bash
    npm install
    ```

3.  **Configure Formspree (Important):**

    - Sign up or log in to [Formspree](https://formspree.io/).
    - Create a new project & form.
    - Create an `.env` file at the root of the repo with the keys `VITE_FORMSPREE_PROJECT_ID` and `VITE_FORMSPREE_FORM_ID` that include **your unique Formspree endpoint IDs**.
    - Update the `formspree.json` file to include **your email**.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite in your terminal).

## Deployment

This application is built as a static site and can be easily deployed to various hosting platforms like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3/CloudFront
- Firebase Hosting

The live version is currently deployed on github pages.
