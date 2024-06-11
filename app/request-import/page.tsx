import React from "react";
import { PrismaClient } from "@prisma/client";
import MakeModelSelector from "@/components/MakeModelSelector";

const prisma = new PrismaClient();

const Page = async () => {
	const makes = await prisma.make.findMany();
	console.log("MAKES", makes);
	const models = await prisma.model.findMany();
	console.log("MODELS", models);
	const production = await prisma.production.findMany();
	console.log("PRODUCTION", production);

	return (
		<div className="request-import-page flex flex-col h-full mt-[72px] px-8">
			<h1 className="text-center text-xl">Request Import</h1>
			<form className="request-import-form h-full overflow-y-auto">
				<MakeModelSelector category="make" options={makes} />
			</form>
		</div>
	);
};

export default Page;

/* 
Idea: Each form input is it's own page
    e.g., Select Make > Select Model > Select Year Range

make, model, year, color, maxBudget

Should probably use state hook for this form

Maybe make a component for each type of input
Then put form info in an object with an input-type property

I don't want the user to be able to choose a min year that's greater than the the max year they chose or a max year that's less than the min year they chose. 

Why do I have inputName and name properties? I don't remember how they differ.

make > model > year

Options:
    Disable max year until min year is selected and use JavaScript to set the min year of the max year input

    Use number inputs, but show an error and don't allow them to submit until error is resolved

    Use a range input

Questions:

    Is a minimum price input necessary?

    Would someone ever be interested in both transmission types? Would they not want to have to only pick one?
 */

/* 
    const minYearMax = maxYearMin || 2024;
    const maxYearMin = minYearMax || 1950;
    const [yearRange, setYearRange] = useState({
        minYear: 1950,
        maxYear: 2024
    })
*/
