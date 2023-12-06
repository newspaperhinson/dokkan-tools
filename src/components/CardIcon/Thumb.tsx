import Image from "next/image";

interface ThumbProps {
  id: number;
}

export default function Thumb({ id }: ThumbProps) {
  return (
    <Image
      style={{
        position: "absolute",
        zIndex: 10,
      }}
      src={`/assets/global/card/card_${id}_thumb.png`}
      height={150}
      width={150}
      alt=""
    />
  );
};