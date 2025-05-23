import { Router, Request, Response } from "express";
import { jsonMiddleware } from "../middlewares/parsingMiddlewares.js";
import TasksController from "../controllers/TasksController.js";

const router = Router()

router.get('/task/{:id}', async (request: Request<{ id?: string }>, response: Response) => {
    const output = await TasksController.get(request.params.id)
    if (output === null) response.status(404).json(output)
    response.status(200).json(output)
  })
  
//TODO: jsonValidationMiddleware
router.put('/task/', jsonMiddleware, async (request: Request, response: Response) => {
    const updatedTask = await TasksController.put(request.body)
    if (updatedTask === null) {
      response.status(404).send()
      return
    }
    response.status(200).json(updatedTask)
})

router.delete('/task/{:id}', async (request: Request, response: Response) => {
  if (request.params.id === undefined) {
    const result = await TasksController.flush()
    if ( result.failed.length > 0 ) response.status(500)
    response.json(result)
  }
  response.status(500).send('Not implemented')
})

export default router