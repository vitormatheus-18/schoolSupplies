import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {


  
  // //Utilizando upsert
  // const query = await prisma.student.upsert({
  //   where: {
  //     id: 1
  //   },
  //   create: {
  //     name: 'Juliana',
  //     classes: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  //   update: {
  //     name: 'Juliana Guimarães',
  //   },
  // });
  //Criando com relacionamento
  // const query = await prisma.discipline.create({
  //   data: {
  //     name: 'Desenho técnico',
  //     material: {
  //       create: {
  //         name: 'Papel milimetrado',
  //         quantity: 30,
  //       },
  //     },
  //     teacher: {
  //       create: {
  //         name: 'Orlando Carvalho',
  //       },
  //     },
  //   },
  // });
  // console.log(query);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
