import express from "express";//const express = require('express'); exprss를 호출하고
const app = express(); //add에 담고

const PORT = 4000;

const handleListening = () => 
console.log(`Listening on: http://localhost:${PORT}`);
/*function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}*/


const handleHome = (req, res) => res.send("hello from my ass");
/*function handleHome(req, res) {
    res.send("hello from home"); //그것에 대한 응답하는 방식이지!
}*/


const handleProfile = (req, res) => res.send("You are on my profile");
/*function handleProfile(req, res){
    res.send("You are on my profile"); 그것에 대한 응답하는 방식이지!
}*/

app.get("/", handleHome); //기본적인 라우트!

app.get("/profile", handleProfile); //기본적인 라우트!

app.listen(PORT, handleListening); //4000 port를  listen