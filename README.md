# Express Note Taker
For this project, I wrote backend code with express, and connected it to an existing front end for a note taking app. The app is deployed to the web via heroku. 

![Note taker app screenshot](/public/assets/images/notetaker.png)

The user can write a note and 'save' it. Upon saving the note, it is saved as a json POST request in the file 'db.json' in the 'db' folder of this directory. 

![POST request folder for this app](/public/assets/images/dbjson.png)

Upon saving, the users notes are stored and able to view on the left hand column of the page. 

After clicking the delete button, the clicked note is deleted from the server-side, in the 'db.json' folder. This is done using the DELETE request method. 

## This application is able to view and use via Heroku. [See the live app here](https://powerful-shelf-37149.herokuapp.com/)

## Technologies Used for this Project 

 - [Node.js](https://nodejs.org/en/)
 - [Express.js](https://expressjs.com/)
 - [JavaScript](https://www.javascript.com/)
 - [Bootstrap](https://getbootstrap.com/)
 - [Heroku](https://heroku.com/)

