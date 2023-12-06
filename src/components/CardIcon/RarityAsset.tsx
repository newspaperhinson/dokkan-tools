import Image from "next/image";
import { Rarity } from "@prisma/client";

interface RarityAssetProps {
  rarity: Rarity;
}

export default function RarityAsset({ rarity }: RarityAssetProps) {
  return (
    <Image
      style={{
        position: "absolute",
        top: "5.55rem",
        left: "-0.13rem",
        zIndex: 20,
      }}
      src={`/assets/global/card/thumb/rarity_${rarity}.png`}
      height={70}
      width={70}
      alt=""
    />
  );
}