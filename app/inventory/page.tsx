import React from "react";
import { inventory } from "@/inventory";
import { CarCard } from "@/components";

const page = () => {
	return (
		<main className="pt-[72px] flex-1">
			<h1 className="text-center text-2xl mt-8 font-display uppercase font-bold">
				Inventory
			</h1>
			<ul className="inventory-container p-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{inventory.map(
					({ imageSrc, year, make, model, price, pageUrl }, index) => (
						<li key={`${year}-${make}-${model}-${index}`} className="">
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
		</main>
	);
};

export default page;
