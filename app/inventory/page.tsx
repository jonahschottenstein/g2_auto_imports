import React from "react";
import { inventory } from "@/inventory";
import { CarCard } from "@/components";
import CardGrid from "@/components/CardGrid";

/* const page = () => {
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
}; */

// !Need to figure out if you want Footer to be visible. Removed this style previously.

const Page = () => {
	return (
		<main className="flex-1 pt-header">
			<div className="inventory-page w-full px-4 md:px-6 lg:px-8 py-12 h-full min-h-[calc(100vh_-_74px)]">
				<div className="mb-6 sm:mb-10 max-w-2xl mx-auto text-center">
					<h1 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl">
						Inventory
					</h1>
				</div>
				<div className="inventory-page-content max-w-screen-xl mx-auto">
					<CardGrid>
						{inventory.map(
							(
								{ imageSrc, year, make, model, features, price, pageUrl },
								index
							) => {
								return (
									<CarCard
										key={`${year}-${make.name}-${model.name}-card`}
										href={pageUrl}
										image={imageSrc}
										name={`${year} ${make.name} ${model.name}`}
										features={features}
										price={price}
										pathName="/inventory"
										index={index}
									/>
								);
							}
						)}
					</CardGrid>
				</div>
			</div>
		</main>
	);
};

export default Page;
