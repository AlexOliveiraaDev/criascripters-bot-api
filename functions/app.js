const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const serverless = require("serverless-http");

const prisma = new PrismaClient();
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  return "Hello World";
});

app.use("/", router);
module.exports.handler = serverless(app);
