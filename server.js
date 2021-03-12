// Required express, filesystem and path for this program
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const path = require('path');
const app = express();
// Server port, able to be deployed on heroku
const PORT = process.env.PORT || 3000;
// JSON responses
app.use(express.json());
// Serve static files with this program
app.use(express.static('public')); 
// Serves these html files at these routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname,  '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname,  '/public/notes.html')));


// gets the notes from db.json when route /api/notes is hit
app.get('/api/notes', (req, res) => {
    let contents = fs.readFileSync('db/db.json', 'utf8');
    res.send(contents);
}); 

// adds user inputted note to db.json when submitted on the site
app.post('/api/notes', (req, res)=> {
    let contents = fs.readFileSync('db/db.json', 'utf8');
    let contentArray = JSON.parse(contents);
    let requestBody = req.body;
    requestBody.id = Math.random().toString(36).substring(2); //random ID generation. https://dev.to/healeycodes/javascript-one-liners-that-make-me-excited-56aj
    contentArray.push(requestBody);
    fs.writeFileSync('db/db.json', JSON.stringify(contentArray, null, 4));
    res.status(200).send('Success');
})


// removes a specifically clicked note from array, then updates the page when delete button is clicked
app.delete('/api/notes/:id', (req, res) => {
    let contents = fs.readFileSync('db/db.json', 'utf8');
    let contentArray = JSON.parse(contents);
    contentArray.forEach(note => {
        if (req.params.id === note.id){
            contentArray = contentArray.filter(note => note.id !== req.params.id);
            fs.writeFileSync('db/db.json', JSON.stringify(contentArray, null, 4));
            res.status(200).send('Success');                      
        }
    });
})

// Log this when server is started, listens for posts/gets/deletes on site
app.listen(PORT, () => console.log(`listening on port ${PORT}`));