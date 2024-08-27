import { Car } from "@/types";

export const inventory: Car[] = [
	{
		id: "P35W-0901053",
		imageSrc: "/images/P35W-0901053/DSC00904.JPEG",
		year: 1999,
		make: { id: 8, name: "MITSUBISHI" },
		model: { id: 539, name: "DELICA STAR WAGON", makeId: 8 },
		price: "$5,000",
		mileage: "100,000 KM",
		features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
		pageUrl: "/vehicle/P35W-0901053",
		featured: true,
	},
	{
		id: "PEDW-0402421",
		imageSrc: "/images/PEDW-0402421/DSC00905.JPEG",
		year: 1999,
		make: { id: 8, name: "MITSUBISHI" },
		model: { id: 538, name: "DELICA SPACE GEAR", makeId: 8 },
		price: "$6,000",
		mileage: "100,000 KM",
		features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
		pageUrl: "/vehicle/PEDW-0402421",
		featured: true,
	},
];
