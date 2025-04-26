import { Router, Request, Response } from "express";
import { jsonMiddleware } from "../middlewares/parsingMiddlewares.js";
import TasksController from "../controllers/TasksController.js";

const router = Router()
const tasksController = new TasksController()

router.get('/task/{:id}', async (request: Request<{ id?: string }>, response: Response) => {
    const output = await tasksController.get(request.params.id)
    response.status(200).send(output)
  })
  
router.put('/task/', jsonMiddleware, async (request: Request, response: Response) => {
    console.log(request.body)
    response.status(200).send(JSON.stringify(request.body))
    //TODO: Update database row
})

export default router