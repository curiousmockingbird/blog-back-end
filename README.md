
### Research & Planning Log

##### Friday, December 2
* 10:30 - 11:00 AM: <span style="color:red">Online research:</span> Checking out [React: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning-login/share?account=56745513&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Freact-creating-and-hosting-a-full-stack-site-15153869%3Ftrk%3Dshare_ent_url%26shareId%3DQ%252FAAp11LRy2iIxC%252B9b50Hg%253D%253D)
* 11:00 AM: <span style="color:red">Action:</span> Updated Node.js on my computer (v19.2.0) through npm-based node version manager N.
* 11:35 AM: <span style="color:red">Online research:</span> Researching how to add Stylesheets to a React App.
* 11:50 AM: <span style="color:red">Action:</span> Successfully implemented custom stylesheet in sample React App.
* 12:05 AM: <span style="color:red">Online research:</span> Checking out the React Router DOM npm package.
* 12:20 AM: <span style="color:red">Action:</span> Trying out the React Router DOM in a sample React App.
* 12:55 AM: <span style="color:red">Action:</span> Trying out the { userParams } hook from the React Router DOM in a sample React App.
* 13:30 AM: <span style="color:red">Action:</span> Working on Capstone Proposal.
* 13:50 AM: <span style="color:red">Online Research & Action:</span> Trying out the npm Express package.
* 14:00 AM: <span style="color:red">Action:</span> Experimenting with the npm Express package endpoints.
* 14:30 AM: <span style="color:red">Research & Action:</span> Experimenting with middleware functionality in Express.

##### Monday, December 5
* 06:30 AM: <span style="color:red">Research & Action:</span> Experimenting with api endpoints using Express and Node.js in sample project.
* 07:00 AM: <span style="color:red">Research & Action:</span> Experimenting with MongoDB to store data and make it permanent for apps.
* 12:10 AM: <span style="color:red">Action:</span> Successfully integrated MongoDB with sample React backend app.
* 12:20 AM: <span style="color:red">Action:</span> Initialized Mongo Demon to interact with database via the Mongo terminal shell.
* 12:30 AM: <span style="color:red">Action:</span> Using MongoDB driver npm package to make queries to the database through Node.js.
* 12:50 AM: <span style="color:red">Action:</span> Getting familiar with MongoDB operators.
* 13:10 AM: <span style="color:red">Action:</span> Successfully integrated Express server with MongoDB to store database data.
* 13:55 AM: <span style="color:red">Research:</span> Knowing about { useState, useEffect } React hooks to add logic that will be executed outside of the normal component rendering.

#### Thursday, December 8
* 17:30 PM <span style="color:red">Action:</span> Successfully added .env file to store password and user name for MongoDB connection without exposure.

#### Friday, December 9
* 10:45 AM <span style="color:red">Action:</span> WIP: Working on endpoint to allow the client side to READ the data for a given article through Express.
* 12:05 PM <span style="color:red">Action:</span> Successfully created api endpoint to search articles by name using Express app. I was able to access the articles' data through Postman (as I haven't worked on the front-end yet). 
In the process, I learned that every time I change my location (e.g. working from a café or so) I need to add the IP address of the place where I am connecting to the internet to my MongoDB cluster network settings. Otherwise, I wouldn't be able to access the data from my databases there.
* 12:35 PM <span style="color:red">Action:</span> WIP: Working on endpoint to allow the client side to UPDATE the data for a given article property (upVotes) using Express. This is going to allow users to up-vote an article they liked.
* 14:15 PM <span style="color:red">Action:</span> Successfully added api endpoint to UPDATE upVotes prop for articles on cloud database. Users are able to up-vote their favorite articles. Refactor server.js to import db connection from db.js to have dryer code.
* 14:30 PM <span style="color:red">Action:</span> WIP: Working on endpoint to allow the client side to CREATE(add) data for a given article property (comments). This is going to allow users to add comments to an article.
* 14:50 PM <span style="color:red">Action:</span> Successfully added api endpoint to CREATE(add) comments for articles. Users are able to leave comments for articles.
* 14:55 PM <span style="color:red">Action:</span> WIP: Enable the front-end to make the api requests defined above (up-voting and leaving comments). We are going to use Axios library to handle network requests.
* 15:15 PM <span style="color:red">Action:</span> WIP: Installed Axios library into front-end directory.
* 15:53 PM <span style="color:red">Action:</span> WIP: Adding initial components for the front-end. Installed react-router-dom into front-end directory. 
* 16:43 PM <span style="color:red">Action:</span> WIP: Working on App.js in the front-end directory.

#### Saturday, December 10
* 12:00 AM <span style="color:red">Action:</span> Added endpoint that returns number of articles in the database. I was also able to show that number in the web browser, in the first local build of the site. 
* 12:20 AM <span style="color:red">Action:</span> Added setInterval() within useEffect() to automatically fetch data (number of articles)from database. 
* 14:20 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> WIP: Adding components to blog. Working on SignIn and SignUp sections of the LogInHeader. 
* 14:40 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Installed bootstrap npm package.

#### Sunday, December 11
* 15:30 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> WIP: Formatting blog's sign-in/sign-up page.
* 13:30 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> WIP: Working on blogControl and sign-in pages. 
* 14:20 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> WIP: Adding Firebase Auth to project. Creating test user to test log-in, sig-up & sign-out functionalities. 
* 15:20 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Added .env to root directory to store Firebase configuration keys. 
* 15:57 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> WIP: Adding authorization functionality to sign-in/sign-up component.

#### Monday, December 12 
* 18:57 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Finished adding Firebase Auth to sign-in/sign-up & sign-out. Added userEmail props from BlogControl into Welcome.js.

#### Tuesday, December 13 
* 10:57 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Install sass npm package in front-end directory.
* 19:27 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Add @mixins to handle media queries with sass.

#### Wednesday, December 14 
* 12:35 PM <span style="color:red">Action:</span> <span style="color:blue">(Back-end)</span> Added api endpoint to READ all the articles from database.
#### Friday, December 16 
* 12:35 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Add breakpoint to bootstrap columns to make article rows at md size.
#### Sunday, December 18 
* 16:35 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Add Bootstrap card style to ArticlesList component.
* 22:15 PM <span style="color:red">Action:</span> <span style="color:blue">(Back-end)</span> Add concurrently npm package to make easier serving back-end and starting react front end.
* 22:35 PM <span style="color:red">Action:</span> <span style="color:blue">(Back-end)</span> Add Twitter npm package.
* 22:40 PM <span style="color:red">Action:</span> <span style="color:blue">(Back-end)</span> WIP: Accessing Twitter trends api endpoints through custom express app.
#### Tuesday, December 20
* 10:15 AM <span style="color:red">Action:</span> <span style="color:blue">(Back-end)</span> Refactor Express app URL route for up-voting. Successfully implemented up-voting functionality in front-end.
* 17:35 PM <span style="color:red">Action:</span> <span style="color:blue">(Front-end)</span> Successfully added comments functionality to front-end.
* 18:35 PM <span style="color:red">Action:</span> <span style="color:blue">(Back-end)</span> Successfully added endpoint to load 9 articles from collection at a time starting from the 10th article in ArticlesList component, and keep that pattern.


[Link to front-end repository](https://github.com/curiousmockingbird/blog-front-end.git)