"use client";

import { useFormUpdater } from "@/context/request-import-form-context";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { CarTableProps, VehicleDetails } from "@/types";
import { useRouter } from "next/navigation";
import ImageGrid from "./ImageGrid";
import ImageCarousel from "./ImageCarousel";
import ImageGalleryModal from "./ImageGalleryModal";

const formatLabel = (str: string) => {
	switch (str) {
		case "vin":
			return "VIN";
		case "driveType":
			return "Drive Type";
		case "exteriorColor":
			return "Exterior Color";
		case "interiorColor":
			return "Interior Color";
		default:
			return str;
	}
};

const CarTable = ({ vehicleDetails, displayKeys }: CarTableProps) => {
	return (
		<table className="car-table flex-1 mt-4 w-full">
			<tbody>
				{Object.entries(vehicleDetails).map(([key, value]) => {
					if (displayKeys.includes(key)) {
						return (
							<tr
								key={`${key}-row`}
								className="first:border-t border-b border-gray-300">
								<td className="py-2 text-black font-sans text-base font-semibold capitalize border-r border-gray-300 pl-2 pr-4">
									{/* {key} */}
									{formatLabel(key)}
								</td>
								<td className="py-2 text-gray-700 font-sans text-base pl-4">
									{key === "features" ? value.join(", ") : value.name || value}
								</td>
							</tr>
						);
					}
				})}
			</tbody>
		</table>
	);
};

const CarPage = ({ vehicleDetails, images }: VehicleDetails) => {
	const updateUserData = useFormUpdater();
	const router = useRouter();
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		null
	);
	const [showFullGrid, setShowFullGrid] = useState(false);

	useEffect(() => {
		if (selectedImageIndex !== null || showFullGrid) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [selectedImageIndex, showFullGrid]);

	const handleImageClick = (index: number) => {
		console.log("HANDLE IMAGE CLICK");
		setShowFullGrid(false);
		setSelectedImageIndex(index);
	};

	const handleLastImageClick = () => {
		setShowFullGrid(true);
	};

	const closeModal = () => {
		setSelectedImageIndex(null);
		setShowFullGrid(false);
	};

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

	const displayKeys = [
		"price",
		"year",
		"make",
		"model",
		"trim",
		"vin",
		"transmission",
		"driveType",
		"engine",
		"mileage",
		"exteriorColor",
		"interiorColor",
		"features",
	];

	return (
		<div className="w-full px-4 md:px-6 lg:px-8 pt-4 pb-8">
			<div className="max-w-screen-xl mx-auto flex flex-col">
				<div className="vehicle-heading">
					<h1 className="font-display text-2xl">{`${vehicleDetails?.year} ${vehicleDetails?.make.name} ${vehicleDetails?.model.name}`}</h1>
				</div>
				<ImageGrid
					images={images}
					onImageClick={handleImageClick}
					onLastImageClick={handleLastImageClick}
					totalPhotosCount={images.length}
				/>
				{selectedImageIndex !== null && (
					<ImageCarousel
						images={images}
						currentIndex={selectedImageIndex}
						onClose={closeModal}
					/>
				)}
				{showFullGrid && (
					<ImageGalleryModal
						images={images}
						onImageClick={handleImageClick}
						onClose={closeModal}
					/>
				)}
				<div className="grid gap-1 grid-rows-1 md:grid-cols-[repeat(6,_minMax(10rem,_1fr))]">
					<div className="block relative md:col-span-4 object-cover w-full h-full cursor-pointer">
						<CustomButton
							styles="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none font-sans mt-4 w-full"
							ariaLabel="Request import"
							handleClick={handleClick}>
							Request Import
						</CustomButton>
					</div>
				</div>
				{vehicleDetails && (
					<div className="grid gap-1 grid-rows-1 md:grid-cols-[repeat(6,_minMax(10rem,_1fr))]">
						<div className="block relative md:col-span-4 object-cover w-full h-full">
							<CarTable
								vehicleDetails={vehicleDetails}
								displayKeys={displayKeys}
							/>
						</div>
					</div>
				)}
				<div className="vehicle-description-container max-w-2xl mt-4">
					<h2 className="text-xl font-display uppercase my-2">Description</h2>
					<p className="vehicle-description font-sans mb-4">
						{vehicleDetails?.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CarPage;
