import { CarCard, Hero } from "@/components";
import { inventory } from "@/inventory";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function Home() {
	const featuredInventory = inventory.filter((car) => car.featured);
	const firstMake = await prisma.make.findFirst();
	console.log("firstMake", firstMake);

	return (
		// <main className="h-full flex flex-col items-center justify-between">
		// <main className="flex flex-col flex-1 items-center justify-between">
		<main className="flex flex-col flex-1">
			<Hero />
			<section className="featured-inventory-section w-full mt-8">
				<h2 className="text-center text-2xl">Featured Inventory</h2>
				{/* <ul className="flex flex-wrap"> */}
				<ul className="grid grid-cols-1 p-8 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{featuredInventory.map(
						({ imageSrc, year, make, model, price, pageUrl }, index) => (
							<li key={`${year}-${make}-${model}-${index}`}>
								<CarCard
									imageSrc={imageSrc}
									year={year}
									make={make}
									model={model}
									price={price}
									pageUrl={pageUrl}
								/>
							</li>
						)
					)}
				</ul>
			</section>
		</main>
	);
}

// TODO:
/* 
	- On Form Submission:
		- on-screen confirmation that form was submitted
		- automatic email sent to user
		- grant gets email with user's info
			- name
			- email
			- phone
			- state
			- comments
		- save user's info to database or spreadsheet

	- Add "required" indicators to form inputs (*)
	- Adjust styling on invalid inputs
	- Reconsider 2-letter minimum for first/last name inputs
		- Maybe just make sure it's at least one *letter* (not number or symbol or space)

	- When a form page is refreshed:
		- Have something pop up that tells them this will reset the form
		- If they confirm they want to refresh, router.push(step_1)

	- Add form stepper that works properly

	- Add page for View Inventory link
		- Don't need to worry about now, but toprank imports has a filter for the inventory. That could be something to add at some point.
			- Will want to do it differently than they do, though, because there is an option for model that doesn't work until you select make. I think I would want the model filter to be invisible until make is selected
	- Figure out Hero height styling
	- Make Form component (DRY)
	- ProductionYearsSelector should maybe use grid auto columns
	- Don't know if you need "Request Import" <h1> on the Form pages. Takes up a lot of space
	- form-nav-container with BackLink and NextLink should probably be its own component
	- Fix Back/Next button placement in Form
	- Think you should put Back/Next Links inside <Form>
	- Figure out how to change error messages in ContactForm
	- Figure out if you should disable submit button before inputs are completed
	- Add client and server side validation for Steps 1-3
	- Finish client and server side validation for Step 4
	- Add FormReview Step (Step 5)
	- Add Footer content
	- Add your Links to NavBar
	- Fix vehicle/[id]/page.tsx styling
		- Add pt-[72px] to <main>
		- Make table nicer
		- Make description nicer
		- Make Footer stay at bottom of page
	- Go through and make sure you're typing everything you're supposed to and you're typing correctly
	- Organize
		- Make sure types are all where they belong, components are where they belong, utility functions are where they belong, etc.
	
*/
