import Image from "next/image";

export default function Rarity() {
  return (
    <Image
      style={{
        position: "absolute",
        top: "5.55rem",
        left: "-0.13rem",
        zIndex: 20,
      }}
      src={"/assets/global/card/thumb/rarity_LR.png"}
      height={70}
      width={70}
      alt=""
    />
  );
}