import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import TasksController from "./controllers/TasksController.js";
import bodyParser from "body-parser";

interface OptionalIdParam {
  id?: string
}

const jsonMiddleware = bodyParser.json()
const tasksController = new TasksController()

// configures dotenv to work in your application
dotenv.config();
const app = express();

app.use(cors())

const PORT = process.env.PORT;

app.get('/task/{:id}', async (request: Request<OptionalIdParam>, response: Response) => {
  const output = await tasksController.get(request.params.id)
  response.status(200).send(output)
})

app.put('/task/', jsonMiddleware, async (request: Request, response: Response) => {
  console.log(request.body)
  response.status(200).send(JSON.stringify(request.body))
  //TODO: Update database row
})

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});