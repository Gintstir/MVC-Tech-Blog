# **MVC-Tech-Blog** ![badge](https://img.shields.io/badge/License-Apache~2.0-brightgreen.svg)  

https://vast-retreat-80302.herokuapp.com/


## **Description**

MVC-Tech-Blog is a full-stack blogging app.<br> It takes user generated posts and comments and organizes them is a easy to read, fun to use way.



## Acceptance Criteria / User Story

- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes existing blog posts if any  have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
- THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
- THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
- WHEN I am idle on the page for more than a set time
- THEN I am automatically signed out of the site

## **Table of Contents**

* *[Installation](#installation)*
* *[Usage Instructions](#usage-instructions)*
* *[Contributing](#contributing)*
* *[Technology](#technology)*
* *[Tests](#tests)*
* *[Questions](#questions)*
* *[License](#license)*
* 


## **Installation**

To use/try this application, first- `clone` or `fork/clone` this repository(see contributing section).<br> Install the required dependencies for this project using the command: `npm install` or `npm i`. This will install: **[mySQL](https://www.npmjs.com/package/mysql2)**,  **[dotenv](https://www.npmjs.com/package/dotenv)**, **[express](https://www.npmjs.com/package/express)**, **[sequelize](https://www.npmjs.com/package/sequelize)**, **[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)**, **[bcrypt](https://www.npmjs.com/package/bcrypt)**, **[bcrypt](https://www.npmjs.com/package/bcrypt)**, **[express-handlebars](https://www.npmjs.com/package/express-handlebars)**, and **[express-session](https://www.npmjs.com/package/express-session)**. 



## **Usage-instructions**





## **Screenshots**
A .gif of the walktrough: <br>
![Walkthrough](assets/Project_13_ecommerce-backend.gif) <br>

Successfully POST request to Products: <br>
![Creating a Product](assets/Insomnia-Create-Product.png)

Sucessful GET request for all Categories: <br>
![All Categories](assets/Insomnia-Read-Category-All.png)


## **Contributing**

Please refer to the **[Contributor Covenant](https://www.contributor-covenant.org/)** for contribution guidelines.

## **Technology**

This project was completed using: 
- `Node.js`
- `Sequelize`
- `MySQL2`
- `Dotenv`
- `Express`
- `Insomnia`.

## **Tests**  

No test need to be run at this time. 

## **Questions**

For any questions, comments, or feedback please feel free to reach out: <br>
- **[Github](https://github.com/gintstir)** 
- **<gint.stirbys@gmail.com>**

## **License** 

Copyright © Gintautas Stirbys, 2021.  All Rights Reserved.

This Project is licensed under the **[Apache~2.0](https://www.apache.org/licenses/LICENSE-2.0)** license.
## Acceptance Criteria

- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes existing blog posts if any  have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
- THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
- THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
- WHEN I am idle on the page for more than a set time
- THEN I am automatically signed out of the site


## Mockup 

![Mockup](public/assests/images/14-mvc-homework-demo-01.gif)

## Technical Acceptance Criteria: 40%

- Application’s folder structure follows the Model-View-Controller paradigm.

- Uses the express-handlebars (Links to an external site.) package to use Handlebars.js for your Views.

- Application must be deployed to Heroku.

## Deployment

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository contains application code.

## Application Quality: 15%

- User experience is intuitive and easy to navigate.

- User interface style is clean and polished.

- Application resembles the mock-up functionality provided in the Challenge instructions.

## Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality README file with description, screenshot, and link to deployed application.