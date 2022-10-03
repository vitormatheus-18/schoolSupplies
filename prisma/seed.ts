import { teachers } from './populateEntities/teachers'
import { disciplines } from './populateEntities/disciplines'
import { materials } from './populateEntities/materials'
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (let discipline of disciplines) {
    await prisma.discipline.create({
      data: discipline
    })
    console.log(`Created user with id: ${discipline.name}`)
  }
  console.log(`Seeding finished.`)
}

main().catch(e => {
  console.log(e);
  process.exit(1)
}).finally(() => {
  prisma.$disconnect();
})

// const materialData: Prisma.MaterialCreateInput[] = [
//   {
//     name: 'boots',
//     quantity: 2,
//     disciplines:{
//         create: [
//             {
//                 name:'Soldagem',
//             },
//         ],
//     },
//   },
//   {
//     name: 'Notebook',
//     quantity: 0,
//     disciplines:{
//         create: [
//             {
//                 name:'Usinagem',
//             },
//         ],
//     },
//   }
// ]

// async function main() {
//     console.log(`Start seeding ...`)
//     for (const u of materialData) {
//       const material = await prisma.material.deleteMany()
//       console.log(`Created user with id: ${material}`)
//     }
//     console.log(`Seeding finished.`)
//   }
  
//   main()
//     .catch((e) => {
//       console.error(e)
//       process.exit(1)
//     })
//     .finally(async () => {
//       await prisma.$disconnect()
//     })
  