import React from "react";
import Image from "next/image";
import { inventory } from "@/inventory";
import { Car } from "@/types";

const Page = ({ params }: { params: { id: string } }) => {
	const vehicleDetails: Car | undefined = inventory.find(
		({ id }) => id === params.id
	);
	// * Not sure if you typed this correctly

	const carTitle = vehicleDetails
		? `${vehicleDetails.year} ${vehicleDetails.make} ${vehicleDetails.model}`
		: "Vehicle not found";

	const displayKeys = ["year", "make", "model", "price", "mileage", "features"];

	return (
		<main className="flex-1 pt-[72px]">
			<div className="p-8 flex flex-col">
				<h1 className="text-center text-2xl">{carTitle}</h1>
				<div className="car-page flex flex-col gap-8 my-8 sm:flex-row">
					<Image
						className="w-full h-auto sm:w-8/12"
						src={vehicleDetails?.imageSrc || "/"}
						alt={`Image of ${carTitle}`}
						width={100}
						height={100}
						priority
					/>
					{vehicleDetails ? (
						<table className="h-fit flex-1">
							<thead>
								<tr>
									<th colSpan={2}>Vehicle Details</th>
								</tr>
							</thead>
							<tbody>
								{Object.entries(vehicleDetails).map(([key, value]) => {
									if (displayKeys.includes(key)) {
										return (
											<tr className="border-b-2 border-gray-400">
												<td>{key.slice(0, 1).toUpperCase() + key.slice(1)}</td>
												<td>{value}</td>
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
				<div className="vehicle-description-container">
					<h2>Description</h2>
					<p className="vehicle-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						deserunt sed aut optio quibusdam nobis qui officiis ipsam harum
						magni veritatis fuga, quisquam ex autem voluptatem delectus
						exercitationem, reiciendis veniam quidem dolore nulla perferendis?
						Ea quod, similique deleniti modi accusantium qui minus et ab aliquam
						maiores, dignissimos aspernatur earum minima.
					</p>
				</div>
			</div>
		</main>
	);
};

export default Page;
