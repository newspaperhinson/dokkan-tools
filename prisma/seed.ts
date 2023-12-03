import { Class, PrismaClient, Rarity, Type } from "@prisma/client";
const prisma = new PrismaClient();

interface CardSeed {
  id: number;
  name: string;
  character: { name: string };
  rarity: Rarity;
  class?: Class;
  type: Type;
}
interface EnemySeed {
  stage: number;
  level: number;
  class?: Class;
  type: Type;
}

async function main() {
  // cards to be created
  const cards: CardSeed[] = [
    // Jaco
    {
      id: 1009120,
      name: "Galactic Messenger",
      character: { name: "Jaco" },
      rarity: "SSR",
      type: "AGL",
    },
    // Zarbon & Dodoria
    {
      id: 1023000,
      name: "Followers of His Ideals",
      character: { name: "Zarbon & Dodoria" },
      rarity: "UR",
      class: "EXTREME",
      type: "TEQ",
    },
    // Tenshinhan
    {
      id: 1020270,
      name: "Support In the Nick of Time",
      character: { name: "Tenshinhan" },
      rarity: "SSR",
      type: "PHY",
    },
    // Krillin
    {
      id: 1020020,
      name: "A Veteran's Ingenuity and Perseverance",
      character: { name: "Krillin" },
      rarity: "SSR",
      type: "AGL",
    },
    // Super Baby 1
    {
      id: 1016390,
      name: "Tuffle Power Evolved",
      character: { name: "Super Baby 1" },
      class: "EXTREME",
      rarity: "UR",
      type: "AGL",
    },
    // Goku (Youth)
    {
      id: 1016560,
      name: "Endless Death-Match",
      character: { name: "Goku (Youth)" },
      rarity: "SSR",
      type: "INT",
    },
    // Demon King Piccolo
    {
      id: 1016631,
      name: "King of the Evil Realm",
      character: { name: "Demon King Piccolo" },
      rarity: "UR",
      class: "EXTREME",
      type: "STR",
    },
    // Piccolo
    {
      id: 1017490,
      name: "Kami and Demon King United",
      character: { name: "Piccolo"},
      rarity: "UR",
      class: "SUPER",
      type: "PHY",
    },
    // Cell (1st Form)
    {
      id: 1017340,
      name: "A Monster with Goku's Ki",
      character: { name: "Cell (1st Form)" },
      rarity: "UR",
      class: "EXTREME",
      type: "TEQ",
    },
    // Super Saiyan God SS Evolved Vegeta
    {
      id: 1020341,
      name: "True Warrior Race",
      character: { name: "Super Saiyan God SS Evolved Vegeta" },
      rarity: "LR",
      class: "SUPER",
      type: "INT",
    },
  ];

  // create cards
  cards.forEach(async (card) => {
    await prisma.card.upsert({
      where: { id: card.id },
      update: {},
      create: {
        id: card.id,
        name: card.name,
        character: {
          create: { name: card.character.name },
        },
        rarity: card.rarity,
        type: card.type,
      }
    });
  });

  const ultimateClash = await prisma.ultimateClash.upsert({
    where: { session: 69 },
    update: {},
    create: {
      session: 69,
      start: new Date("2023-11-30T16:00:00.000+08:00"),
      end: new Date("2023-12-22T15:59:59.999+08:00"),
    },
  });

  // enemies to be created
  const enemies: EnemySeed[] = [
    // Jaco
    {
      stage: 1,
      level: 1,
      class: "SUPER",
      type: "TEQ"
    },
    // Zarbon & Dodoria
    {
      stage: 1,
      level: 5,
      class: "EXTREME",
      type: "AGL"
    },
    // Tenshinhan
    {
      stage: 2,
      level: 1,
      class: "SUPER",
      type: "INT",
    },
    // Krillin
    {
      stage: 2,
      level: 2,
      class: "SUPER",
      type: "STR",
    },
    // Super Baby 1
    {
      stage: 2,
      level: 5,
      class: "EXTREME",
      type: "PHY",
    },
    // Goku (Youth)
    {
      stage: 3,
      level: 1,
      class: "SUPER",
      type: "AGL",
    },
    // Demon King Piccolo
    {
      stage: 3,
      level: 2,
      class: "EXTREME",
      type: "INT",
    },
    // Piccolo
    {
      stage: 3,
      level: 3,
      class: "SUPER",
      type: "STR",
    },
    // Cell (1st Form)
    {
      stage: 3,
      level: 4,
      class: "EXTREME",
      type: "PHY",
    },
    // Super Saiyan God SS Evolved Vegeta
    {
      stage: 3,
      level: 5,
      class: "SUPER",
      type: "TEQ",
    },
  ];

  enemies.forEach(async (enemy, index) => {
    await prisma.ultimateClashEnemy.upsert({
      where: { session_cardId: { session: ultimateClash.session, cardId: cards[index].id }, },
      update: {},
      create: {
        session: ultimateClash.session,
        stage: enemy.stage,
        level: enemy.level,
        cardId: cards[index].id,
        class: enemy.class,
        type: enemy.type,
      },
    });
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