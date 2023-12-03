import Image from "next/image";

export default function Background() {
  return (
    <Image
      style={{
        position: "absolute",
        top: "1.3rem",
        left: "0.95rem",
        zIndex: 0,
      }}
      src={"/assets/global/card/thumb/bg_INT_03.png"}
      height={120}
      width={120}
      alt=""
    />
  );
}