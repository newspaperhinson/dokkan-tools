import Image from "next/image";

export default function Rarity() {
  return (
    <Image
      style={{
        position: "absolute",
        top: "0.275rem",
        left: "6.51rem",
        zIndex: 20,
      }}
      src={"/assets/jp/card/thumb/type_INT_01.png"}
      height={50}
      width={50}
      alt=""
    />
  );
}