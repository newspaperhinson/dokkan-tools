import Image from "next/image";

export default function Thumb() {
  return (
    <Image
      style={{
        position: "absolute",
        zIndex: 10,
      }}
      src={"/assets/global/card/thumb/card_1020340.png"}
      height={150}
      width={150}
      alt=""
    />
  );
};