import express from "express";//const express = require('express'); exprss를 호출하고
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; //export 한걸 import

const app = express(); //add에 담고


const handleHome = (req, res) => res.send("hello from my ass");
/*function handleHome(req, res) {
    res.send("hello from home"); //그것에 대한 응답하는 방식
}*/

const handleProfile = (req, res) => res.send("You are on my profile");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));


app.get("/", handleHome); //기본적인 라우트!

app.get("/profile", handleProfile);

app.use("/user", userRouter); // use(해당Router을 전부 사용) 


export default app;