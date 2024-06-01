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

	const displayKeys = ["year", "make", "model", "price"];

	return (
		<main>
			<div className="p-8">
				<h1 className="text-center text-2xl mb-4">{carTitle}</h1>
				<div className="car-page flex flex-col">
					<Image
						src={vehicleDetails?.imageSrc || "/"}
						alt={`Image of ${carTitle}`}
						width={100}
						height={100}
						style={{
							aspectRatio: "4 / 3",
							objectFit: "cover",
							width: "100%",
							height: "auto",
						}}
					/>
					{vehicleDetails ? (
						<table>
							<thead>
								<tr>
									<th colSpan={2}>Vehicle Details</th>
								</tr>
							</thead>
							<tbody>
								{Object.entries(vehicleDetails).map(([key, value]) => {
									if (displayKeys.includes(key)) {
										return (
											<tr>
												<td>{key}</td>
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
			</div>
		</main>
	);
};

export default Page;
