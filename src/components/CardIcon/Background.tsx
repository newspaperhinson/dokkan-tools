import Image from "next/image";
import { Rarity, Type } from "@prisma/client";

interface BackgroundProps {
  rarity: Rarity;
  type: Type;
}

export default function Background({ rarity, type }: BackgroundProps) {
  // define map for mapping rarity into image index string
  // "UR" => "03"
  const map = {
    "N": "00",
    "R": "01",
    "SR": "02",
    "SSR": "03",
    "UR": "03",
    "LR": "03",
  };

  return (
    <Image
      style={{
        position: "absolute",
        top: "1.3rem",
        left: "0.95rem",
        zIndex: 0,
      }}
      src={`/assets/global/card/thumb/bg_${type}_${map[rarity]}.png`}
      height={120}
      width={120}
      alt=""
    />
  );
}