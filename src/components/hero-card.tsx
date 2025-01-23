import { Card, CardContent } from "./ui/card";

import Image from "next/image";

export function HeroCard() {
  return (
    <Card className="w-[300px] h-[300px] rounded-md shadow-md overflow-hidden">
      <Image
        src="/image-1.png"
        alt="Card hero image"
        width={800}
        height={400}
      />
      <CardContent></CardContent>
    </Card>
  );
}
