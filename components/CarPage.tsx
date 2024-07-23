"use client";

import { useFormUpdater } from "@/context/request-import-form-context";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { Car } from "@/types";
import { useRouter } from "next/navigation";

interface VehicleDetails {
	vehicleDetails: Car | undefined;
}

const CarPage = ({ vehicleDetails }: VehicleDetails) => {
	const updateUserData = useFormUpdater();
	const router = useRouter();

	const carTitle = vehicleDetails
		? `${vehicleDetails.year} ${vehicleDetails.make.name} ${vehicleDetails.model.name}`
		: "Vehicle not found";

	const displayKeys = ["year", "make", "model", "price", "mileage", "features"];

	const handleClick = () => {
		if (!vehicleDetails?.make.id) return;

		const data = {
			make: { id: vehicleDetails?.make.id, name: vehicleDetails?.make.name },
			model: {
				id: vehicleDetails?.model.id,
				name: vehicleDetails?.model.name,
				makeId: vehicleDetails?.model.makeId,
			},
			productionYears: {
				startYear: vehicleDetails?.year,
				endYear: vehicleDetails?.year,
			},
		};

		sessionStorage.setItem("userData", JSON.stringify(data));

		updateUserData(data);

		router.push("/request-import-form/step_4");
	};

	return (
		<div className="p-8 flex flex-col max-w-screen-xl m-auto">
			<h1 className="text-center text-4xl sm:text-5xl font-display font-bold uppercase">
				{carTitle}
			</h1>
			<div className="car-page flex flex-col gap-8 my-8 md:flex-row">
				<div className="image-and-button-container w-full h-auto md:w-8/12 flex flex-col gap-1">
					<Image
						className="w-full h-auto object-contain self-start rounded-lg"
						src={vehicleDetails?.imageSrc || "/"}
						alt={`Image of ${carTitle}`}
						width={100}
						height={100}
						priority
					/>
					<CustomButton
						styles="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none font-sans"
						handleClick={handleClick}>
						Request Import
					</CustomButton>
				</div>
				{vehicleDetails ? (
					<table className="flex-1">
						{/* <thead>
								<tr className="font-display">
									<th colSpan={2}>Vehicle Details</th>
								</tr>
							</thead> */}
						<tbody>
							{Object.entries(vehicleDetails).map(([key, value]) => {
								if (displayKeys.includes(key)) {
									return (
										<tr className="first:border-t border-b border-gray-300">
											<td className="py-2 text-gray-700 font-display text-sm uppercase">
												{key}
											</td>
											<td className="py-2 text-gray-600 font-sans font-bold text-base">
												{key === "features" ? (
													<ul className="list-disc pl-4">
														{value.map((feature: string) => (
															<li>{feature}</li>
														))}
													</ul>
												) : (
													value.name || value
												)}
											</td>
										</tr>
									);
								}
							})}
						</tbody>
					</table>
				) : (
					<p>No vehicle details available</p>
				)}
			</div>
			<div className="vehicle-description-container max-w-2xl">
				<h2 className="text-2xl font-display uppercase mb-2">Description</h2>
				<p className="vehicle-description font-sans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					deserunt sed aut optio quibusdam nobis qui officiis ipsam harum magni
					veritatis fuga, quisquam ex autem voluptatem delectus exercitationem,
					reiciendis veniam quidem dolore nulla perferendis? Ea quod, similique
					deleniti modi accusantium qui minus et ab aliquam maiores, dignissimos
					aspernatur earum minima.
				</p>
			</div>
		</div>
	);
};

export default CarPage;
