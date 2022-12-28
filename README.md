
# [Link to deployed site](https://cuban-blog.uw.r.appspot.com/)

### [Link to front-end repository](https://github.com/curiousmockingbird/blog-front-end.git)

#### Name of student: Harold Mesa
#### Name of project: The Cuban Blog
#### Project's Purpose or Goal: 
* _A blog about Cuba, its most relevant recent events, its culture, and traveler's tips._
#### Absolute minimum features the project requires to meet this purpose or goal:
* User accounts granting access to a list of articles once logged in.
* Articles will have a comments section, and up-vote functionality. Users won't be able to add multiple up-votes, neither adding comments without being logged in as well.
* The blog will have a "Most voted articles" section, showing the most popular articles in descending order.
* Each article will be related to a tag (e.g. #Havana, #music, #history, etc). The blog will have a section to look for articles by any specific tag.
* Users can bookmark their preferred articles and access them in a "Bookmarks" section.
#### Tools, frameworks, libraries, APIs, modules and/or other resources:
* _Front-end:_
  - React.js (including HTML, CSS, JavaScript, and Bootstrap).
  - React Router DOM npm package.
  - React hooks.
* _Back end:_
  - Node.js
  - npm Express package.
  - Middleware functionality.
  - MongoDB to store data for each article (e.g: Article name, article content/text, tags related to the articles, date published, up-votes, comments, etc.)
  - Axios library to handle network requests.
  - Firebase Auth to handle user creation and authentication (including auth tokens and firebase-admin package).
  - MongoDB Atlas Cloud service to host the database for the blog.

#### Once I finish developing the minimum viable product (MVP), I will work on:
* Users will see a list of trending topics related to Cuba (hashtags) from Twitter.
* Functionality to share an article on Twitter and/or Facebook.
#### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
* npm i twitter package, an asynchronous library for the Twitter REST and Streaming API.
* Accounts in the Twitter for developers and Facebook for developer portals to generate a Consumer Keys and Auth Tokens to access data from these platforms.

