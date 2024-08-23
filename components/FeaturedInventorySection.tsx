import React from "react";
import Section from "./Section";
import CardGrid from "./CardGrid";
import CarCard from "./CarCard";
import Link from "next/link";
import { Car } from "@/types";

interface FeaturedInventorySectionProps {
	featuredInventory: Car[];
}

const FeaturedInventorySection = ({
	featuredInventory,
}: FeaturedInventorySectionProps) => {
	return (
		<Section h2="Featured Inventory">
			<CardGrid>
				{featuredInventory.map(
					({ imageSrc, year, make, model, price, pageUrl }) => {
						return (
							<CarCard
								href={pageUrl}
								image={imageSrc}
								name={`${year} ${make.name} ${model.name}`}
								price={price}
							/>
						);
					}
				)}
			</CardGrid>
			<div className="mt-10 lg:mt-20 text-center">
				<Link
					href="/inventory"
					className="w-fit m-auto border-2 border-blue-600 text-base py-2 px-4 rounded-full block font-sans cursor-pointer text-center text-blue-600 hover:text-blue-700">
					View all inventory
				</Link>
			</div>
		</Section>
	);
};

export default FeaturedInventorySection;
