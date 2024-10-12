import { Car } from "@/types";

export const inventory: Car[] = [
	{
		id: "P35W-0901053",
		imageSrc: "/images/P35W-0901053/DSC00904.JPEG",
		price: "$16,000",
		year: 1999,
		make: { id: 8, name: "MITSUBISHI" },
		model: { id: 539, name: "DELICA (STAR WAGON)", makeId: 8 },
		trim: "GLX (High Roof)",
		vin: "P35W-0901053",
		transmission: "4-Speed Automatic",
		driveType: "Part-Time 4WD",
		engine: "2476 cc 4D56 TD I4",
		mileage: "108,XXX mi",
		exteriorColor: "Green",
		interiorColor: "Grey",
		// mileage: "100,000 KM",
		features: ["Turbo-Diesel", "4x4", "High Roof"],
		description:
			"The 1999 Mitsubishi Delica Star Wagon is a versatile and rugged van, highly regarded for its off-road capabilities and spacious interior. Designed with four-wheel drive, it offers excellent traction and stability, making it ideal for outdoor adventures and challenging terrains. The Delica features a boxy design, maximizing interior space for passengers and cargo, with seating for up to eight. Its high ground clearance and durable construction contribute to its ability to handle rough conditions. Powered by a reliable diesel engine, the 1999 Delica is known for its durability, practicality, and distinctive utilitarian charm, appealing to adventure seekers and enthusiasts alike.",
		pageUrl: "/vehicle/P35W-0901053",
		featured: true,
	},
	{
		id: "PEDW-0402421",
		imageSrc: "/images/PEDW-0402421/DSC00905.JPEG",
		price: "Price TBD",
		year: 1999,
		make: { id: 8, name: "MITSUBISHI" },
		model: { id: 538, name: "DELICA (SPACE GEAR)", makeId: 8 },
		trim: "Chamonix (High-Roof)",
		vin: "PEDW-0402421",
		// ! Ask if the VIN is correct
		transmission: "Automatic",
		driveType: "Full-Time 4WD",
		engine: "2.8 L 4M40 TD I4",
		mileage: "91,XXX mi",
		exteriorColor: "White",
		interiorColor: "Black",
		// mileage: "100,000 KM",
		features: ["Turbo-Diesel", "4x4", "High Roof"],
		description:
			"The 1999 Mitsubishi Delica Space Gear is a multi-purpose van that combines practicality with the capability to handle tough terrains. Equipped with a robust four-wheel-drive system, the Space Gear is designed for adventure, offering off-road versatility while maintaining a comfortable ride on paved roads. Its tall, boxy design provides generous interior space, accommodating up to eight passengers, with flexible seating arrangements to optimize cargo capacity. The Delica Space Gear is powered by a reliable diesel or gasoline engine, known for fuel efficiency and longevity. With its elevated ground clearance and durable build, the 1999 Delica Space Gear is favored by outdoor enthusiasts for both urban and off-road driving, blending utility with a distinctive, rugged style.",
		pageUrl: "/vehicle/PEDW-0402421",
		featured: true,
	},
];
