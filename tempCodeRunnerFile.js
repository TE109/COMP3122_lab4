const express = require('express');
const app = express();
const port1 = process.env.PORT || 3000;
app.post('/t/:name',(req,res){
    res.json(req.params.name)
})