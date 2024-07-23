import React from "react";
import { inventory } from "@/inventory";
import { CarCard } from "@/components";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
	href: string;
	src: string;
	alt: string;
	title: string;
	description: string;
}

const Card = ({ href, src, alt, title, description }: CardProps) => {
	return (
		<Link className="group block" href={href}>
			<div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl ">
				<Image
					className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
					src={src}
					alt={alt}
					width={200}
					height={200}
				/>
			</div>

			<div className="pt-4">
				<h3 className="relative inline-block font-medium font-sans text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 ">
					{title}
				</h3>
				<p className="mt-1 font-sans text-gray-600 ">{description}</p>
			</div>
		</Link>
	);
};

interface CardGridProps {
	children: React.ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
	return (
		<div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8  lg:grid-cols-3">
			{children}
		</div>
	);
};

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
							<Card
								key={`${year}-${make.name}-${model.name}-card`}
								href={pageUrl}
								src={imageSrc}
								alt="Alt text"
								title={`${year} ${make.name} ${model.name}`}
								description={price}
							/>
						);
					})}
				</CardGrid>
			</div>
		</main>
	);
};
/* const page = () => {
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
}; */

export default page;
