import React from "react";
import { inventory } from "@/inventory";
import { Car } from "@/types";
import CarPage from "@/components/CarPage";
import { FormProvider } from "@/context/request-import-form-context";
import { promises as fs } from "fs";
import path from "path";

const Page = async ({ params }: { params: { id: string } }) => {
	const vehicleDetails: Car | undefined = inventory.find(
		({ id }) => id === params.id
	);
	// * Not sure if you typed this correctly

	const imageDirectory = path.join(
		process.cwd(),
		`/public/images/${vehicleDetails?.id}`
	);
	const imageFileNames = (await fs.readdir(imageDirectory)).map(
		(fileName) => `/images/${vehicleDetails?.id}/${fileName}`
	);

	return (
		<main className="flex-1 pt-[72px]">
			<FormProvider>
				<CarPage vehicleDetails={vehicleDetails} images={imageFileNames} />
			</FormProvider>
		</main>
	);
};
/* const Page = ({ params }: { params: { id: string } }) => {
	const vehicleDetails: Car | undefined = inventory.find(
		({ id }) => id === params.id
	);
	// * Not sure if you typed this correctly

	return (
		<main className="flex-1 pt-[72px]">
			<FormProvider>
				<CarPage vehicleDetails={vehicleDetails} />
			</FormProvider>
		</main>
	);
}; */

export default Page;
