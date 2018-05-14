const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');
const jwt = require('express-jwt');
const app = express();

const secret = 'hello world'; // process.env.SECRET;

app.use(bodyParser());

app.get('*.*', express.static(__dirname));

app.post('/api/login/', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    if (email === 'yariv@nerdeez.com', password === '123456') {
        return res.json({
            jwt: jsonwebtoken.sign({
                id: 1,
                email: email
            }, secret, {expiresIn: 60 * 60})
        });
    } else {
        return res.status(401).json({
            INVALID: ['invalid login']
        });
    }
});

app.get('/api/task/',
    jwt({secret: secret})
 ,function(req, res) {
     
    return res.json([
        {
            title: 'stam todo',
            id: 1
        },
        {
            title: 'stam todo1',
            id: 2
        },
        {
            title: 'stam todo2',
            id: 3
        },
        {
            title: 'stam todo3',
            id: 4
        },
    ])
});

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(3000, function() {
    console.log('we are now listening on port 3000');
});
