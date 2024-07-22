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
			<div className="p-8 flex flex-col max-w-screen-xl m-auto">
				<h1 className="text-center text-5xl mb-4 font-display font-bold uppercase">
					{carTitle}
				</h1>
				<div className="car-page flex flex-col gap-8 my-8 md:flex-row">
					<Image
						className="w-full h-auto md:w-8/12 object-contain self-start"
						src={vehicleDetails?.imageSrc || "/"}
						alt={`Image of ${carTitle}`}
						width={100}
						height={100}
						priority
					/>
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
														value
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
