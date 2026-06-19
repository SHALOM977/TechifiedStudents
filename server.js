const express =require ('express');
const app= express();
const port =3000;
//Middle ware
app.use(express.json());

app.use((req,res,next)=>{
    // It log every resquest
console.log(`${req.method} ${req.url} - ${new Date()},`)
next() //Passes to the next handeler (required)
});






// app.post('/echo',(req,res)=>{
//     console.log(req.body);
//     res.json({ echoed: req.body })//req.body is the parsed JSON body of the request, 
//                                  // and we send it back in the response as a JSON 
//                                  // object with an "echoed" key.
// })

app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    res.send(id);
    console.log(id);

})



app.get('/search',)

// app.listen(port, ()=> {
//     console.log(`Example app listening on port ${port}`)
// })







app.get('/',(req,res)=>{
    res.send('Hello from express!')
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})