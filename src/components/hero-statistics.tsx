import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  { fallback: "CN", image: "/person-1.svg" },
  { fallback: "CN", image: "/person-2.svg" },
  { fallback: "CN", image: "/person-3.svg" },
];

export function HeroStatistics() {
  return (
    <article className="hidden md:flex items-center gap-2">
      <Card className="bg-[#F5F5F5] p-4 rounded-lg flex flex-col gap-2 w-1/2 border-none">
        <span className="text-sm flex items-center gap-2">
          <span className="block w-2 h-2 rounded-full bg-[#22C55E] text-sm"></span>
          Total users
        </span>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {users.map((user, index) => (
              <Avatar
                className={`w-6 h-6 ${index !== 0 ? "-ml-2" : ""}`}
                key={index}
              >
                <AvatarImage
                  className="w-6 h-6 object-cover"
                  src={user.image}
                />
                <AvatarFallback>{user.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-2xl">52,630</span>
        </div>
      </Card>
      <Card className="bg-[#F5F5F5] p-4 rounded-lg flex flex-col gap-2 w-1/2 border-none">
        <span className="text-sm flex items-center gap-2">
          <span className="block w-2 h-2 rounded-full bg-[#22C55E] text-sm"></span>
          Trade volume
        </span>
        <div className="flex items-center gap-2">
          <span className="text-2xl">$1,288,314,266</span>
        </div>
      </Card>
    </article>
  );
}
