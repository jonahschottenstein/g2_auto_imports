import { CarData } from "@/types";

const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const db = new Database("prisma/dev.db");

async function seedDatabase() {
	const results: CarData[] = [];

	fs.createReadStream(
		path.resolve(__dirname, "../data/car-database-updated.csv")
	)
		.pipe(parse({ columns: true, from_line: 1 }))
		.on("data", (data: any) => {
			// Extract the relevant columns and ignore the 'Country' column
			// const { Make, Model, ProductionStartYear, ProductionEndYear } = data;
			const Make = data["Make"];
			const Model = data["Model"];
			const ProductionStartYear = parseInt(data["Production_Start_Year"], 10);
			const ProductionEndYear = parseInt(data["Production_End_Year"], 10);

			// Log the parsed data
			console.log("Parsed data:", data);
			console.log(
				"Make:",
				Make,
				"Model:",
				Model,
				"Production_Start_Year:",
				ProductionStartYear,
				"Production_End_Year:",
				ProductionEndYear
			);

			// Validation: Check for empty values
			if (
				!Make ||
				!Model ||
				isNaN(ProductionStartYear) ||
				isNaN(ProductionEndYear)
			) {
				console.error("Error: Missing value in CSV row:", data);
				return;
			}
			results.push({ Make, Model, ProductionStartYear, ProductionEndYear });
		})
		.on("end", () => {
			const insertMake = db.prepare("INSERT INTO Make (name) VALUES (?)");
			const insertModel = db.prepare(
				"INSERT INTO Model (name, makeId) VALUES (?, ?)"
			);
			const insertProduction = db.prepare(
				"INSERT INTO Production (startYear, endYear, modelId) VALUES (?, ?, ?)"
			);
			// const insertProduction = db.prepare(
			// 	"INSERT INTO Production (year, modelId) VALUES (?, ?)"
			// );
			// const insertProductionStartYear = db.prepare(
			// 	"INSERT INTO Production_Start_Year (year, modelId) VALUES (?, ?)"
			// );
			// const insertProductionEndYear = db.prepare(
			// 	"INSERT INTO Production_End_Year (year, modelId) VALUES (?, ?)"
			// );

			const makesMap = new Map<string, number>();
			const modelsMap = new Map<string, { id: number; makeId: number }>();

			db.transaction(() => {
				for (const {
					Make,
					Model,
					ProductionStartYear,
					ProductionEndYear,
				} of results) {
					if (!Make) {
						console.error("Error: Make name is empty or null");
						continue;
					}

					let makeId = makesMap.get(Make);
					if (!makeId) {
						const result = insertMake.run(Make);
						makeId = result.lastInsertRowid as number;
						makesMap.set(Make, makeId);
					}

					let modelEntry = modelsMap.get(`${Model}-${makeId}`);
					if (!modelEntry) {
						const result = insertModel.run(Model, makeId);
						modelEntry = { id: result.lastInsertRowid as number, makeId };
						modelsMap.set(`${Model}-${makeId}`, modelEntry);
					}

					// insertProduction.run(Number(Production), modelEntry.id);
					// insertProductionStartYear.run(
					// 	Number(ProductionStartYear),
					// 	modelEntry.id
					// );
					// insertProductionEndYear.run(Number(ProductionEndYear), modelEntry.id);
					insertProduction.run(
						ProductionStartYear,
						ProductionEndYear,
						modelEntry.id
					);
				}
			})();

			console.log("Database seeding completed");
		});
}

seedDatabase().catch((e) => {
	console.error(e);
});
