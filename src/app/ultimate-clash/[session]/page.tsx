import prisma from "@/libs/prisma";
import CardIcon from "@/components/CardIcon";
import { Card, Prisma } from "@prisma/client";

// define type for Ultimate Clash Enemy including card and character
type UltimateClashEnemy = Prisma.UltimateClashEnemyGetPayload<{
  include: {
    card: {
      include: {
        character: true,
      },
    };
  },
}>

// generate params for all sessions
export async function generateStaticParams() {
  const ultimateClashes = await prisma.ultimateClash.findMany({});

  return ultimateClashes.map((ultimateClash) => (ultimateClash.session));
};

export default async function UltimateClashPage({ params }: { params: { session: string }}) {
  // get enemies of that session
  const enemies: UltimateClashEnemy[] = await prisma.ultimateClashEnemy.findMany({
    where: { session: parseInt(params.session, 10) },
    include: {
      card: {
        include: {
          character: true,
        }
      },
    },
    orderBy: [
      { level: "asc" },
      { stage: "asc" },
    ],
  });

  // group enemies by level
  const levels: UltimateClashEnemy[][] = enemies.reduce((
    accumulator: UltimateClashEnemy[][],
    current: UltimateClashEnemy
  ) => {
    // arr contains enemies of the same level
    const arr = accumulator.find((enemies) => (enemies.some((enemy) => (enemy.level === current.level))));
    
    if (arr) {
      arr.push(current);
    } else {
      accumulator.push([current]);
    }
    return accumulator;
  }, []);

  return (
    <div className="h-full flex flex-col">
      {levels.map((level, index) => (
        <div key={index}>
          <p>{`Level ${index+1}`}</p>
          {level.map((enemy, index) => (
            <div key={index}>
              <CardIcon
                id={enemy.cardId}
                rarity={enemy.card.rarity}
                _class={enemy.class}
                type={enemy.type}
                hideRarity={true}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};