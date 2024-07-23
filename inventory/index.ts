import { Car } from "@/types";

export const inventory: Car[] = [
	{
		id: "P35W-0901053",
		imageSrc: "/P35-0901053_07.jpg",
		year: 1999,
		make: { id: 8, name: "Mitsubishi" },
		model: { id: 539, name: "Delica Star Wagon", makeId: 8 },
		price: "$5,000",
		mileage: "100,000 KM",
		features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
		pageUrl: "/vehicle/P35W-0901053",
		featured: true,
	},
	{
		id: "PEDW-0402421",
		imageSrc: "/PE8W-0402421_04.JPG",
		year: 1999,
		make: { id: 8, name: "Mitsubishi" },
		model: { id: 538, name: "Delica Space Gear", makeId: 8 },
		price: "$6,000",
		mileage: "100,000 KM",
		features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
		pageUrl: "/vehicle/PEDW-0402421",
		featured: true,
	},
];
