import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const cors = require("cors");
const serverless = require("serverless-http");

const prisma = new PrismaClient();
const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.send("Teste!");
});

app.get("/test", async (req: Request, res: Response) => {
  res.send("test!");
  //const word = await prisma.words.findMany()
  //res.json(word)
});

app.use("/", router);
module.exports.handler = serverless(app);
