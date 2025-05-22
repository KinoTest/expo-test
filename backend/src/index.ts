import express from "express"
import cors from "cors";
import { PrismaClient } from "../prisma/PrismaClient/index.js"
import tasksEndpoints from "./endpoints/taskEndpoints.js";
if (process.env.NODEENV !== 'PRODUCTION') {
  const dotenv = await import('dotenv')
  dotenv.config();
} 

const server = express();
const prisma = new PrismaClient()

server.use(cors())
server.use(tasksEndpoints)

server.listen(process.env.PORT, () => { 
  console.log("Server running at PORT: ", process.env.PORT); 
}).on("error", (error) => {
  //TODO: exceptionService
  throw new Error(error.message);
});

server.on('exit', async ()=>{
  try {
    await prisma.$disconnect()
  } catch (exception) {
    console.error(exception) //TODO: Exception handler service
    await prisma.$disconnect()
    process.exit(1)
  }
})

export {
  prisma,
}