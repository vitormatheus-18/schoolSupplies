import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const materialData: Prisma.MaterialCreateInput[] = [
  {
    name: 'boots',
    quantity: 2,
    disciplines:{
        create: [
            {
                name:'Soldagem',
            },
        ],
    },
  },
  {
    name: 'Notebook',
    quantity: 0,
    disciplines:{
        create: [
            {
                name:'Usinagem',
            },
        ],
    },
  }
]

async function main() {
    console.log(`Start seeding ...`)
    for (const u of materialData) {
      const material = await prisma.material.create({
        data: u,
      })
      console.log(`Created user with id: ${material.id}`)
    }
    console.log(`Seeding finished.`)
  }
  
  main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
  