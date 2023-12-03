import prisma from "@/libs/prisma";
import CardIcon from "@/components/CardIcon";

// generate params for all sessions
export async function generateStaticParams() {
  const ultimateClashes = await prisma.ultimateClash.findMany({});

  return ultimateClashes.map((ultimateClash) => (ultimateClash.session));
};

export default async function UltimateClashPage({ params }: { params: { session: string }}) {
  // get enemies of that session
  const enemies = await prisma.ultimateClashEnemy.findMany({
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

  return (
    <div className="text-center">
      {enemies.map((enemy, index) => (
        <div key={index}>
          <span>{enemy.cardId}</span>
          <span>{enemy.card.character.name}</span>
        </div>
      ))}
      <CardIcon />
    </div>
  );
};