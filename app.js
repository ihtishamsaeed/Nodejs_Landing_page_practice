const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs");
// EXPRESS SPECIFIC
app.use('/static', express.static('static'));  // For serving static files
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

//PUG SPECIFIC 
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory
//endpoint
app.get('/', (req, res) => {
    const con = "this is the content";
    const params = { 'title': 'Pug template', "content": con };
    res.status(200).render('index.pug', params); //render is use for template
});
app.post('/', (req, res) => {
    // console.log(req.body); req.body is java script object
    const name = req.body.name
    const age = req.body.age
    const gender = req.body.gender
    address = req.body.address
    const more = req.body.more
    let outputToWrite  = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}, More about him/here: ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);
    const params = { 'message': 'your form has been submitted' };
    res.status(200).render('index.pug', params); //render is use for template
});






//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
