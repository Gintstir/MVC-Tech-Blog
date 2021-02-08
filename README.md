# **MVC-Tech-Blog** ![badge](https://img.shields.io/badge/License-Apache~2.0-brightgreen.svg)  

Deployed Site: <br>
https://vast-retreat-80302.herokuapp.com/


## **Description**

MVC-Tech-Blog is a full-stack blogging app.<br> It takes user generated posts and comments and organizes them in an easy to read format.



## **Acceptance Criteria** / **User Story**

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

If any changes are made to the Database, you must rebuild the db.  To do so, in `server.js` change `force: false` to `force: true` them run the command `npm start`.  Now change `force: true` back to `force: false` and rerun the `npm start` command.  Your changes should have taken effect.  If you are publishing to Heroku, changes must also be pushed to Heroku with the command `git push heroku main`.  The updated site can be viewed using `heroku open` in the terminal.  



## **Screenshots**
A .gif of the walktrough: <br>
![Walkthrough](public/assests/images/MVC-Tech-Blog.gif) <br>


## **Contributing**

Please refer to the **[Contributor Covenant](https://www.contributor-covenant.org/)** for contribution guidelines.

## **Technology**

This project was completed using: 
- `Node.js`
- `Sequelize`
- `MySQL2`
- `Dotenv`
- `Express`
- `Insomnia`
- `bcrypt`
- `express-handlebars`
- `express-sessio`
- `bootstrap`
- `connect-session-sequelize`

## **Tests**  

No test need to be run at this time. 

## **Questions**

For any questions, comments, or feedback please feel free to reach out: <br>
- **[Github](https://github.com/gintstir)** 
- **<gint.stirbys@gmail.com>**

## **License** 

Copyright © Gintautas Stirbys, 2021.  All Rights Reserved.

This Project is licensed under the **[Apache~2.0](https://www.apache.org/licenses/LICENSE-2.0)** license.

-------------------------------------------------
<br>
<br>

### **Mockup**:
<br>

![Mockup](public/assests/images/14-mvc-homework-demo-01.gif)

