const express = require('express');
const app = express();
app.use(express.json());

const port1 = process.env.PORT || 3000;

// Get Request to show Hellp 
let helloData = 'Hello Express JS'
app.get('/hello',(req,res) => {
    res.send(helloData);
})
app.listen(port1, () =>{
    console.log("http://127.0.0.1:3000/hello");
});

// Get request with Querry paramters 
const port2 = process.env.PORT || 3001;
app.get('/user',(req,res) => {
    const userName = req.query.firstname || "Pritesh";
    const userLast = req.query.lastname || "Patel";
    res.json({ 
        firstName: userName, 
        lastName: userLast 
    });
})
app.listen(port2, () =>{
    console.log("http://127.0.0.1:3001/user?firstname=John&lastname=Smith");
});

// Post Reqest 
const port3 = process.env.PORT || 3002;
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json({ 
        firstName: firstname, 
        lastName: lastname 
    });
});
app.listen(port3, () => {
    console.log(`http://127.0.0.1:3002/user/firstname/lastname`);
});

