
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
* 14:00 AM: <span style="color:red">Action:</span> Experimenting with the npm Express package generated endpoints.
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
* 17:30 PM <span style="color:red">Action:</span> Successfully added .env file to store without exposure password and user name for MongoDB connection.
#### Friday, December 9
* 10:45 AM <span style="color:red">Action:</span> WIP: Working on endpoint to allow the client side to READ the data for a given article through Express.
* 12:05 PM <span style="color:red">Action:</span> Successfully created api endpoint to search article by name using an Express app. I was able to access the articles' data through Postman (as I haven't worked on the front-end yet). 
In the process, I learned that every time I change my location (e.g. working from a café or so) I need to add the IP address of the place where I am connecting to the internet to my MongoDB cluster network settings. Otherwise, I wouldn't be able to access the data from my databases there.
* 12:35 PM <span style="color:red">Action:</span> WIP: Working on endpoint to allow the client side to UPDATE the data for a given article property (upVotes) using Express. This is going to allow users to up-vote an article they liked.
* 14:15 PM <span style="color:red">Action:</span> Successfully added api endpoint to UPDATE upVotes prop for articles on cloud database. Users are able to up-vote their favorite articles. Refactor server.js to import db connection from db.js to have dryer code.
* 14:30 PM <span style="color:red">Action:</span> WIP: Working on endpoint to allow the client side to CREATE(add) data for a given article property (comments). This is going to allow users to add comments to an article.
* 14:50 PM <span style="color:red">Action:</span> Successfully added api endpoint to CREATE(add) comments for articles. Users are able to leave comments for articles.
* 14:55 PM <span style="color:red">Action:</span> WIP: Enable the front-end to make the api requests defined above (up-voting and leaving comments). We are going to use Axios library to handle network requests.
* 15:15 PM <span style="color:red">Action:</span> WIP: Installed Axios library into front-end directory.
* 15:53 PM <span style="color:red">Action:</span> WIP: Adding initial components for the front-end. Installed react-router-dom into front-end directory." 