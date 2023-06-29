import ChatGPT from "./chatgpt";
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const chatgpt = new ChatGPT();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
const port = 8000;

app.post("/ask", async (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    const message = await chatgpt.ask(question);
    res.status(200).send(message.content);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`ChatGPT app listening on port : ${port}`);
});
