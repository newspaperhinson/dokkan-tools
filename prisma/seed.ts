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