"use client";

import { useFormUpdater } from "@/context/request-import-form-context";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { Car, CarTableProps, VehicleDetails } from "@/types";
import { useRouter } from "next/navigation";
import ImageGrid from "./ImageGrid";
import ImageCarousel from "./ImageCarousel";
import ImageGalleryModal from "./ImageGalleryModal";

// const CarPageOld = ({ vehicleDetails }: VehicleDetails) => {
// 	const updateUserData = useFormUpdater();
// 	const router = useRouter();

// 	const carTitle = vehicleDetails
// 		? `${vehicleDetails.year} ${vehicleDetails.make.name} ${vehicleDetails.model.name}`
// 		: "Vehicle not found";

// 	const displayKeys = ["year", "make", "model", "price", "mileage", "features"];

// 	const handleClick = () => {
// 		if (!vehicleDetails?.make.id) return;

// 		const data = {
// 			make: { id: vehicleDetails?.make.id, name: vehicleDetails?.make.name },
// 			model: {
// 				id: vehicleDetails?.model.id,
// 				name: vehicleDetails?.model.name,
// 				makeId: vehicleDetails?.model.makeId,
// 			},
// 			productionYears: {
// 				startYear: vehicleDetails?.year,
// 				endYear: vehicleDetails?.year,
// 			},
// 		};

// 		sessionStorage.setItem("userData", JSON.stringify(data));

// 		updateUserData(data);

// 		router.push("/request-import-form/step_4");
// 	};

// 	return (
// 		<div className="p-8 flex flex-col max-w-screen-xl m-auto">
// 			<h1 className="text-center text-4xl sm:text-5xl font-display font-bold uppercase">
// 				{carTitle}
// 			</h1>
// 			<div className="car-page flex flex-col gap-8 my-8 md:flex-row">
// 				<div className="image-and-button-container w-full h-auto md:w-8/12 flex flex-col gap-1">
// 					<Image
// 						className="w-full h-auto object-contain self-start rounded-lg"
// 						src={vehicleDetails?.imageSrc || "/"}
// 						alt={`Image of ${carTitle}`}
// 						width={100}
// 						height={100}
// 						priority
// 					/>
// 					<CustomButton
// 						styles="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none font-sans"
// 						handleClick={handleClick}>
// 						Request Import
// 					</CustomButton>
// 				</div>
// 				{vehicleDetails ? (
// 					<table className="flex-1">
// 						{/* <thead>
// 								<tr className="font-display">
// 									<th colSpan={2}>Vehicle Details</th>
// 								</tr>
// 							</thead> */}
// 						<tbody>
// 							{Object.entries(vehicleDetails).map(([key, value]) => {
// 								if (displayKeys.includes(key)) {
// 									return (
// 										<tr className="first:border-t border-b border-gray-300">
// 											<td className="py-2 text-gray-700 font-display text-sm uppercase">
// 												{key}
// 											</td>
// 											<td className="py-2 text-gray-600 font-sans font-bold text-base">
// 												{key === "features" ? (
// 													<ul className="list-disc pl-4">
// 														{value.map((feature: string) => (
// 															<li>{feature}</li>
// 														))}
// 													</ul>
// 												) : (
// 													value.name || value
// 												)}
// 											</td>
// 										</tr>
// 									);
// 								}
// 							})}
// 						</tbody>
// 					</table>
// 				) : (
// 					<p>No vehicle details available</p>
// 				)}
// 			</div>
// 			<div className="vehicle-description-container max-w-2xl">
// 				<h2 className="text-2xl font-display uppercase mb-2">Description</h2>
// 				<p className="vehicle-description font-sans">
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
// 					deserunt sed aut optio quibusdam nobis qui officiis ipsam harum magni
// 					veritatis fuga, quisquam ex autem voluptatem delectus exercitationem,
// 					reiciendis veniam quidem dolore nulla perferendis? Ea quod, similique
// 					deleniti modi accusantium qui minus et ab aliquam maiores, dignissimos
// 					aspernatur earum minima.
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

/* interface ImageGridItemProps {
	src: string;
	alt: string;
	hasOverlay: boolean;
	index: number;
} */

/* interface ImageGridProps {
	galleryData: ImageGridItemProps[];
} */

/* const galleryData = [
	{ src: "/P35-0901053_07.jpg", alt: "alt0", hasOverlay: false, index: 0 },
	{ src: "/P35-0901053_07.jpg", alt: "alt1", hasOverlay: false, index: 1 },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt2", hasOverlay: false, index: 2 },
	{ src: "/P35-0901053_07.jpg", alt: "alt3", hasOverlay: false, index: 3 },
	{ src: "/P35-0901053_07.jpg", alt: "alt4", hasOverlay: false, index: 4 },
	{ src: "/P35-0901053_07.jpg", alt: "alt5", hasOverlay: false, index: 5 },
	{ src: "/P35-0901053_07.jpg", alt: "alt6", hasOverlay: false, index: 6 },
	{ src: "/P35-0901053_07.jpg", alt: "alt7", hasOverlay: false, index: 7 },
	{ src: "/P35-0901053_07.jpg", alt: "alt8", hasOverlay: true, index: 8 },
]; */

/* const images = [
	{ src: "/PE8W-0402421_04.JPG", alt: "alt0" },
	{ src: "/P35-0901053_07.jpg", alt: "alt1" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt2" },
	{ src: "/P35-0901053_07.jpg", alt: "alt3" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt4" },
	{ src: "/P35-0901053_07.jpg", alt: "alt5" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt6" },
	{ src: "/P35-0901053_07.jpg", alt: "alt7" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt8" },
	{ src: "/P35-0901053_07.jpg", alt: "alt9" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt10" },
	{ src: "/P35-0901053_07.jpg", alt: "alt11" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt12" },
	{ src: "/P35-0901053_07.jpg", alt: "alt13" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt14" },
	{ src: "/P35-0901053_07.jpg", alt: "alt15" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt6" },
	{ src: "/P35-0901053_07.jpg", alt: "alt17" },
	{ src: "/PE8W-0402421_04.JPG", alt: "alt18" },
	{ src: "/P35-0901053_07.jpg", alt: "alt19" },
]; */

/* export const ImageModal = ({ index }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);

	const handleSwiperChange = (swiper) => {
		// console.log("SWIPER", swiper);
		setActiveIndex(swiper.activeIndex);
	};

	const handleItemClick = (index) => {
		console.log(`${index}`);
		console.log("INDEX", index, typeof index);
		console.log("SWIPER HIC", swiperRef.current.swiper);
		if (!swiperRef.current) return;
		if (!index) return;
		setActiveIndex(index);
		swiperRef.current.swiper.slideTo(index);
		// swiperRef.current.swiper.activeIndex = index;
		// swiperRef.current.swiper.realIndex = index;
	};

	return (
		<>
			<button
				type="button"
				className="image-modal-button py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none absolute top-0 left-0 bottom-0 right-0"
				aria-haspopup="dialog"
				aria-expanded="false"
				aria-controls="hs-vertically-centered-modal"
				data-hs-overlay="#hs-vertically-centered-modal"
				onClick={() => handleItemClick(index)}></button>

			<div
				id="hs-vertically-centered-modal"
				className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
				role="dialog"
				tabIndex={-1}
				aria-labelledby="hs-vertically-centered-modal-label">
				<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
					<div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
						<div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
							<h3
								id="hs-vertically-centered-modal-label"
								className="font-bold text-gray-800 dark:text-white">
								Modal title
							</h3>
							<button
								type="button"
								className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
								aria-label="Close"
								data-hs-overlay="#hs-vertically-centered-modal">
								<span className="sr-only">Close</span>
								<svg
									className="shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path d="M18 6 6 18"></path>
									<path d="m6 6 12 12"></path>
								</svg>
							</button>
						</div>
						<div className="p-4 overflow-y-auto">
							<Carousel
								swiperRef={swiperRef}
								onClick={handleItemClick}
								onChange={handleSwiperChange}
							/>
						</div>
						<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
							<button
								type="button"
								className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
								data-hs-overlay="#hs-vertically-centered-modal">
								Close
							</button>
							<button
								type="button"
								className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}; */

/* export const ImageGridItem = ({
	src,
	alt,
	hasOverlay,
	index,
}: ImageGridItemProps) => {
	return (
		<div className="image-grid-item group block relative overflow-hidden rounded-lg first:row-span-2 first:col-span-2 md:first:row-span-4 md:first:col-span-4">
			<Image
				className="w-full h-full size-40 object-cover bg-gray-100 rounded-lg"
				src={src}
				alt={alt}
				width={100}
				height={100}
			/>
			<div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
				<div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
					<svg
						className="shrink-0 size-3"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
					<span className="text-xs">View</span>
				</div>
			</div>

			{index === 8 ? <GalleryModal /> : <ImageModal index={index} />}
		</div>
	);
}; */

/* const ImageGrid = ({ galleryData }: ImageGridProps) => {
	return (
		<div className="image-grid grid overflow-x-auto gap-1 grid-rows-[repeat(2,_8rem)] grid-cols-[repeat(6,_minMax(10rem,_1fr))] md:grid-rows-[repeat(4,_100px)]">
			{galleryData.map(({ src, alt, hasOverlay }, index) => {
				return (
					<ImageGridItem
						key={`image-${index}`}
						src={src}
						alt={alt}
						hasOverlay={hasOverlay}
						index={index}
					/>
				);
			})}
		</div>
	);
}; */

// const CarPage = ({ vehicleDetails }: VehicleDetails) => {
// 	const updateUserData = useFormUpdater();
// 	const router = useRouter();

// 	const handleClick = () => {
// 		if (!vehicleDetails?.make.id) return;

// 		const data = {
// 			make: { id: vehicleDetails?.make.id, name: vehicleDetails?.make.name },
// 			model: {
// 				id: vehicleDetails?.model.id,
// 				name: vehicleDetails?.model.name,
// 				makeId: vehicleDetails?.model.makeId,
// 			},
// 			productionYears: {
// 				startYear: vehicleDetails?.year,
// 				endYear: vehicleDetails?.year,
// 			},
// 		};

// 		sessionStorage.setItem("userData", JSON.stringify(data));

// 		updateUserData(data);

// 		router.push("/request-import-form/step_4");
// 	};

// 	const displayKeys = ["year", "make", "model", "price", "mileage", "features"];

// 	return (
// 		<div className="p-2 flex flex-col max-w-screen-xl m-auto space-y-4 md:px-10">
// 			<div className="vehicle-heading">
// 				<h1 className="font-display text-2xl mt-2">{`${vehicleDetails?.year} ${vehicleDetails?.make.name} ${vehicleDetails?.model.name}`}</h1>
// 			</div>
// 			<ImageGrid galleryData={galleryData} />
// 			<CustomButton
// 				styles="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none font-sans"
// 				handleClick={handleClick}>
// 				Request Import
// 			</CustomButton>

// 			{vehicleDetails ? (
// 				<table className="flex-1">
// 					{/* <thead>
// 								<tr className="font-display">
// 									<th colSpan={2}>Vehicle Details</th>
// 								</tr>
// 							</thead> */}
// 					<tbody>
// 						{Object.entries(vehicleDetails).map(([key, value]) => {
// 							if (displayKeys.includes(key)) {
// 								return (
// 									<tr className="first:border-t border-b border-gray-300">
// 										<td className="py-2 text-black font-sans text-base font-semibold capitalize border-r border-gray-300 pl-2 pr-4">
// 											{key}
// 										</td>
// 										<td className="py-2 text-gray-700 font-sans text-base pl-4">
// 											{key === "features"
// 												? value.join(", ")
// 												: value.name || value}
// 										</td>
// 									</tr>
// 								);
// 							}
// 						})}
// 					</tbody>
// 				</table>
// 			) : (
// 				<p>No vehicle details available</p>
// 			)}
// 			<div className="vehicle-description-container max-w-2xl">
// 				<h2 className="text-xl font-display uppercase my-2">Description</h2>
// 				<p className="vehicle-description font-sans">
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
// 					deserunt sed aut optio quibusdam nobis qui officiis ipsam harum magni
// 					veritatis fuga, quisquam ex autem voluptatem delectus exercitationem,
// 					reiciendis veniam quidem dolore nulla perferendis? Ea quod, similique
// 					deleniti modi accusantium qui minus et ab aliquam maiores, dignissimos
// 					aspernatur earum minima.
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// const CarPageOld2 = ({ vehicleDetails }: VehicleDetails) => {
// 	const updateUserData = useFormUpdater();
// 	const router = useRouter();
// 	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
// 		null
// 	);
// 	const [showFullGrid, setShowFullGrid] = useState(false);

// 	useEffect(() => {
// 		if (selectedImageIndex !== null || showFullGrid) {
// 			document.body.style.overflow = "hidden";
// 		} else {
// 			document.body.style.overflow = "auto";
// 		}

// 		return () => {
// 			document.body.style.overflow = "auto";
// 		};
// 	}, [selectedImageIndex, showFullGrid]);

// 	const handleImageClick = (index: number) => {
// 		console.log("HANDLE IMAGE CLICK");
// 		setShowFullGrid(false);
// 		setSelectedImageIndex(index);
// 	};

// 	const handleLastImageClick = () => {
// 		setShowFullGrid(true);
// 	};

// 	const closeModal = () => {
// 		setSelectedImageIndex(null);
// 		setShowFullGrid(false);
// 	};

// 	const handleClick = () => {
// 		if (!vehicleDetails?.make.id) return;

// 		const data = {
// 			make: { id: vehicleDetails?.make.id, name: vehicleDetails?.make.name },
// 			model: {
// 				id: vehicleDetails?.model.id,
// 				name: vehicleDetails?.model.name,
// 				makeId: vehicleDetails?.model.makeId,
// 			},
// 			productionYears: {
// 				startYear: vehicleDetails?.year,
// 				endYear: vehicleDetails?.year,
// 			},
// 		};

// 		sessionStorage.setItem("userData", JSON.stringify(data));

// 		updateUserData(data);

// 		router.push("/request-import-form/step_4");
// 	};

// 	const displayKeys = ["year", "make", "model", "price", "mileage", "features"];

// 	return (
// 		<div className="p-2 flex flex-col max-w-screen-xl m-auto space-y-4 md:px-10">
// 			<div className="vehicle-heading">
// 				<h1 className="font-display text-2xl mt-2">{`${vehicleDetails?.year} ${vehicleDetails?.make.name} ${vehicleDetails?.model.name}`}</h1>
// 			</div>
// 			<ImageGrid
// 				images={images}
// 				onImageClick={handleImageClick}
// 				onLastImageClick={handleLastImageClick}
// 				totalPhotosCount={images.length}
// 			/>
// 			{selectedImageIndex !== null && (
// 				<ImageCarousel
// 					images={images}
// 					currentIndex={selectedImageIndex}
// 					onClose={closeModal}
// 				/>
// 			)}
// 			{showFullGrid && (
// 				<ImageGalleryModal
// 					images={images}
// 					onImageClick={handleImageClick}
// 					onClose={closeModal}
// 				/>
// 			)}
// 			<CustomButton
// 				styles="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none font-sans"
// 				handleClick={handleClick}>
// 				Request Import
// 			</CustomButton>

// 			{vehicleDetails ? (
// 				<table className="flex-1">
// 					{/* <thead>
// 								<tr className="font-display">
// 									<th colSpan={2}>Vehicle Details</th>
// 								</tr>
// 							</thead> */}
// 					<tbody>
// 						{Object.entries(vehicleDetails).map(([key, value]) => {
// 							if (displayKeys.includes(key)) {
// 								return (
// 									<tr className="first:border-t border-b border-gray-300">
// 										<td className="py-2 text-black font-sans text-base font-semibold capitalize border-r border-gray-300 pl-2 pr-4">
// 											{key}
// 										</td>
// 										<td className="py-2 text-gray-700 font-sans text-base pl-4">
// 											{key === "features"
// 												? value.join(", ")
// 												: value.name || value}
// 										</td>
// 									</tr>
// 								);
// 							}
// 						})}
// 					</tbody>
// 				</table>
// 			) : (
// 				<p>No vehicle details available</p>
// 			)}
// 			<div className="vehicle-description-container max-w-2xl">
// 				<h2 className="text-xl font-display uppercase my-2">Description</h2>
// 				<p className="vehicle-description font-sans mb-4">
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
// 					deserunt sed aut optio quibusdam nobis qui officiis ipsam harum magni
// 					veritatis fuga, quisquam ex autem voluptatem delectus exercitationem,
// 					reiciendis veniam quidem dolore nulla perferendis? Ea quod, similique
// 					deleniti modi accusantium qui minus et ab aliquam maiores, dignissimos
// 					aspernatur earum minima.
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

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
