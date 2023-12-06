import Image from "next/image";
import { Class, Type } from "@prisma/client";

interface TypeAssetProps {
  _class: Class | null;
  type: Type;
}

export default function TypeAsset({ _class, type }: TypeAssetProps) {
  // define map for mapping class into image index string
  const map = {
    "SUPER": "01",
    "EXTREME": "02",
  };

  return (
    <Image
      style={{
        position: "absolute",
        top: "0.275rem",
        left: "6.51rem",
        zIndex: 20,
      }}
      src={`/assets/jp/card/thumb/type_${type}_${_class? map[_class]: "00"}.png`}
      height={50}
      width={50}
      alt=""
    />
  );
}