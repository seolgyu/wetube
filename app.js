import express from "express";//const express = require('express'); exprss를 호출하고
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express(); //add에 담고

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use(해당Router을 전부 사용) 
app.use(routes.videos, videoRouter);

export default app;