# React Responsive Portfolio  

## Description  
Personal portfolio using react components and pages to create a dynamic experince browsing the portfolio application.    

## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)       
* [Deployed App](#deployed-app) 
* [Questions](#questions)  

## Installation  
No installs or downloads needed. App runs in browser as is  

## Usage  
This is a react application using a few different components the are passed into the main App.js to render a fully functional front end portfolio. 
The components included are a Navbar with a home and portfolio link. This component is passed directly to the App.js file so the navbar is displayed at all times throughout any part of the app. 

A footer component which is also passed to App.js to be displayed at all times with links to a personal email, phone number, linkedin profile, github account and a downloadable PDF resume. 

A Header component passed to App.js and a Project.js component that passes props so it can be used and called in the Portfolio.js page component. The Portfolio page passes a the Project.js component for each project added to the portfolio page using props. 

The About.js page returns a simple about me div with a profile photo. All of these pages and components are passed into the App.js where we use react-router-dom to control the navigation of the application. This allows the single page application to route to the necessary end point and display the proper pages when the navbar links are clicked. The portfolio is mobile friendly, using Bootstrap frameowrk for styling along with custom CSS styles.  

![react-responsive-portfolio (1)](https://user-images.githubusercontent.com/70814349/110693459-4eb07300-819c-11eb-9d97-2cad88bf42f1.gif)

## Credits  
[Particles.js](https://www.npmjs.com/package/react-particles-js) <br>
[Font Awesome hamburger icon](https://fontawesome.com/icons/bars?style=solid) <br>
[GitHub Pages Deployment](https://create-react-app.dev/docs/deployment/#github-pages) <br>

## Deployed App
[Lucah's Portfolio](https://lucahendicott.github.io/react-responsive-portfolio/)

## Questions  
Contact information for any questions about this application:
* https://github.com/lucahendicott  
* lucahdavid88@gmail.com  
