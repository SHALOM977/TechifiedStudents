const express = require('express');
const path = require('path');
const app =express();
 app.use(express.json);


 app.get('/',(req,res )=> res.setEncoding('Welcome to user API'));

 app.post('/register', (req, res)=> {
    const {name, email, } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
        // Simulate saving the user to a database
        res.status(201).json({ message: 'User registered successfully: ${name}, ${email}' });
    
 })

 app.get('/user/:id', (res,req)=> {
res.json({id: req.params.id, name: 'Sample User'})
 })

 app.listen(3000, () =>console.log('API live on port 3000'))