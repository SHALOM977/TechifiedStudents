const express = require('express'); 
const dotenv = require('dotenv'); 
 
dotenv.config(); 
 
const app = express(); 
 
// JSON Parsing Middleware 
app.use(express.json()); 
 
// Custom Middleware (Bonus) 
app.use((req, res, next) => { 
    Console.log(`${req.method} ${req.url}`); 
    Next(); 
}); 
 
// Serve Static HTML 
app.use(express.static('public')); 
 
 
// GET / 
app.get('/', (req, res) => { 
    res.send('My Week 2 API!'); 
}); 
 
 
// POST /user 
app.post('/user', (req, res) => { 
    const { name, email } = req.body; 
 
    if (!name || !email) { 
        return res.status(400).json({ 
            message: 'Name and Email are required' 
        }); 
    } 
 
    res.json({ 
        Message: `Hello, ${name}!` 
    }); 
}); 
 
 
// GET /user/:id 
app.get('/user/:id', (req, res) => { 
    const id = req.params.id; 
 
    res.json({ 
        Message: `User ${id} profile` 
    }); 
}); 
 
  
// Start Server 
const PORT = process.env.PORT || 3000; 
 
app.listen(PORT, () => { 
    Console.log(`Server running on port ${PORT}`); 
}); 
 
