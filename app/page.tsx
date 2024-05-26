import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
	return (
		<main className="h-full flex flex-col items-center justify-between">
			<Hero />
		</main>
	);
}
