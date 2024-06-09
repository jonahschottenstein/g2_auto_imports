import React from "react";

const Page = () => {
	return <div>Page</div>;
};

export default Page;

/* 
Should probably use state hook for this form

Maybe make a component for each type of input
Then put form info in an object with an input-type property

I don't want the user to be able to choose a min year that's greater than the the max year they chose or a max year that's less than the min year they chose. 

Why do I have inputName and name properties? I don't remember how they differ.

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

const formData = {
	yearRange: [
		{
			inputName: "min-year-number",
			inputType: "number",
			label: "Min. year",
			id: "vehicle-min-year",
			name: "vehicle-min-year",
			min: "1950",
			max: "2024",
		},
		{
			inputName: "max-year-number",
			inputType: "number",
			label: "Max. year",
			id: "vehicle-max-year",
			name: "vehicle-max-year",
			min: "1950",
			max: "2024",
		},
	],
	make: ["mazda", "mitsubishi", "nissan", "toyota"],
	// model: carModels[`${carMake}`]
	comments: {
		inputName: "comments",
		inputType: "textarea",
		label: "Comments",
		id: "comments",
		name: "",
	},
};
