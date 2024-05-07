import Image from "next/image";
import chevron from "@/assets/icons/chevron-down.svg";
export default function Home() {
  return (
    <button className="text-red-500">
      hello
      <Image src={chevron} alt="chevron" height={100} width={100} />
    </button>
  );
}
