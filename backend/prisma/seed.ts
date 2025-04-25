import { PrismaClient } from '../prisma/PrismaClient/client.js'
const prisma = new PrismaClient()
async function main() {
  const tasks = await prisma.task.createMany({
    data: [
        {
            id: '0',
            description: 'Un',
            done: false
        },
        {
            id: '1',
            description: 'Outro',
            done: true
        },
        {
            id: '2',
            description: 'Fin',
            done: false
        },
    ],
  })
  console.log({ tasks })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })