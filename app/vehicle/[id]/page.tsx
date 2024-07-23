import React from "react";
import { inventory } from "@/inventory";
import { Car } from "@/types";
import CarPage from "@/components/CarPage";
import { FormProvider } from "@/context/request-import-form-context";

const Page = ({ params }: { params: { id: string } }) => {
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
};

export default Page;
