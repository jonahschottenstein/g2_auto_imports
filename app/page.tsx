import { CarCard, Hero } from "@/components";
import { inventory } from "@/inventory";
import Image from "next/image";

export default function Home() {
	const featuredInventory = inventory.filter((car) => car.featured);

	return (
		// <main className="h-full flex flex-col items-center justify-between">
		// <main className="flex flex-col flex-1 items-center justify-between">
		<main className="flex-1">
			<Hero />
			<section className="featured-inventory-section w-full mt-8">
				<h2 className="text-center text-2xl">Featured Inventory</h2>
				{/* <ul className="flex flex-wrap"> */}
				<ul className="grid grid-cols-1 p-8 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{featuredInventory.map(
						({ imageSrc, year, make, model, price, pageUrl }, index) => (
							<li key={`${year}-${make}-${model}-${index}`}>
								<CarCard
									imageSrc={imageSrc}
									year={year}
									make={make}
									model={model}
									price={price}
									pageUrl={pageUrl}
								/>
							</li>
						)
					)}
				</ul>
			</section>
		</main>
	);
}
