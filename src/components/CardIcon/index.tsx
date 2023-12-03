import Background from "./Background";
import Thumb from "./Thumb";
import Type from "./Type";
import Rarity from "./Rarity";

export default function CardIcon() {
  return (
    <div className="relative mx-12">
      <Thumb />
      <Background />
      <Rarity />
      <Type />
    </div>
  )
}