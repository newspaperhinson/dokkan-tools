import Background from "./Background";
import Thumb from "./Thumb";
import TypeAsset from "./TypeAsset";
import RarityAsset from "./RarityAsset";
import { Class, Rarity, Type } from "@prisma/client";

interface CardIconProps {
  id: number;
  rarity: Rarity;
  _class: Class | null;
  type: Type;
  hideRarity?: boolean;
}

export default function CardIcon({ id, rarity, _class, type, hideRarity }: CardIconProps) {
  return (
    <div className="relative aspect-square w-full">
      <Thumb
        id={id}
      />
      <Background
        rarity={rarity}
        type={type}
      />
      {!hideRarity && <RarityAsset 
        rarity={rarity}
      />}
      <TypeAsset 
        _class={_class}
        type={type}
      />
    </div>
  )
}