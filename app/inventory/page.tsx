import React from "react";
import { inventory } from "@/inventory";
import { CarCard } from "@/components";
import CardGrid from "@/components/CardGrid";

const page = () => {
	return (
		<main className="pt-[72px] flex-1">
			<div className="inventory-page w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12 mx-auto h-full">
				<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
					<h1 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl ">
						Inventory
					</h1>
				</div>
				<CardGrid>
					{inventory.map(({ imageSrc, year, make, model, price, pageUrl }) => {
						return (
							<CarCard
								key={`${year}-${make.name}-${model.name}-card`}
								href={pageUrl}
								image={imageSrc}
								name={`${year} ${make.name} ${model.name}`}
								price={price}
							/>
						);
					})}
				</CardGrid>
			</div>
		</main>
	);
};

export default page;
