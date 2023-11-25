import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const jaco = await prisma.card.upsert({
    where: { id: 1009120 },
    update: {},
    create: {
      id: 1009120,
      name: "Galactic Messenger",
      character: {
        create: { name: "Jaco" }
      },
      rarity: "SSR",
      type: "AGL"
    }
  });

  const jacoUC = await  prisma.ultimateClashEnemy.upsert({
    where: { session_level_stage: { session: 68, level: 1, stage: 1 } },
    update: {},
    create: {
      ultimateClash: {
        create: {
          session: 68,
          start: new Date("2023-10-31T16:00:00"),
          end: new Date("2023-11-24T15:59:59"),
        },
      },
      level: 1,
      stage: 1,
      card: {
        connect: { id: 1009120 },
      },
      rarity: "UR",
      class: "SUPER",
      type: "AGL", 
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })