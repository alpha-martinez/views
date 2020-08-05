const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.body);

    res.sendFile(__dirname+'/views/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html')
})

app.get('/blog', (req, res) => {
    res.sendFile(__dirname+'/views/blog-directory.html')
})

app.listen(8080, () => {
    console.log('listening to port 8080'); //you can check it in your terminal
});


