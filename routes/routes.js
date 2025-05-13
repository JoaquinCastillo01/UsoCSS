const express = require('express');
const path = require('path');

const router = express.Router();

//Ruta principal

router.get("/",(req,res)=>{
     res.sendFile(path.join(__dirname,"/../views/index.html"))
});

router.get("/index.html",(req,res)=>{
     res.sendFile(path.join(__dirname,"/../views/index.html"))
});

//Ruta about
router.get("/about.html",(req,res)=>{
     res.sendFile(path.join(__dirname,"/../views/about.html"))
});

//Ruta chocolate
router.get("/chocolate.html",(req,res)=>{
     res.sendFile(path.join(__dirname,"/../views/chocolate.html"))
});

//Ruta contact
router.get("/contact.html",(req,res)=>{
     res.sendFile(path.join(__dirname,"/../views/contact.html"))
});

//Ruta testimonial
router.get("/testimonial.html",(req,res)=>{
     res.sendFile(path.join(__dirname,"/../views/testimonial.html"))
});

module.exports=router;