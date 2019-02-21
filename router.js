import express from "express";

export const userRouter = express.Router(); //export(default 아님)

userRouter.get("/",(req,res) => res.send("user index")); //user로 접근시 "/"여기home
userRouter.get("/edit",(req,res) => res.send("user edit"));//user/edit 접근시
userRouter.get("/password",(req,res) => res.send("user passwoed"));//user/pasword 접근시