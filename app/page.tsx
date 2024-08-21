import { CarCard, Hero } from "@/components";
import { inventory } from "@/inventory";
import Link from "next/link";
import Image from "next/image";
import { Car } from "@/types";
import WhatIsSection from "@/components/WhatIsSection";
import AboutUsSection from "@/components/AboutUsSection";

interface CardProps {
	href: string;
	src: string;
	alt: string;
	title: string;
	description: string;
}

const Card = ({ href, src, alt, title, description }: CardProps) => {
	return (
		<Link className="group block" href={href}>
			<div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl ">
				<Image
					className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
					src={src}
					alt={alt}
					width={200}
					height={200}
				/>
			</div>

			<div className="pt-4">
				<h3 className="relative inline-block font-medium font-sans text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 ">
					{title}
				</h3>
				<p className="mt-1 font-sans text-gray-600 ">{description}</p>
			</div>
		</Link>
	);
};

interface CardGridProps {
	children: React.ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
	return (
		<div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
			{children}
		</div>
	);
};

interface FeaturedInventorySectionProps {
	featuredInventory: Car[];
}

const FeaturedInventorySection = ({
	featuredInventory,
}: FeaturedInventorySectionProps) => {
	return (
		// TODO: Should probably change div to section
		<div className="featured-inventory-section w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24 border-t-2 border-t-slate-100">
			<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
				<h2 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl ">
					Featured Inventory
				</h2>
			</div>
			<CardGrid>
				{featuredInventory.map(
					({ imageSrc, year, make, model, price, pageUrl }) => {
						return (
							<Card
								key={`${year}-${make.name}-${model.name}-card`}
								href={pageUrl}
								src={imageSrc}
								alt="Alt text"
								title={`${year} ${make.name} ${model.name}`}
								description={price}
							/>
						);
					}
				)}
			</CardGrid>
			<div className="mt-10 lg:mt-20 text-center">
				<a
					className="relative inline-block font-medium md:text-lg font-sans text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black "
					href="/inventory">
					View all inventory
				</a>
			</div>
		</div>
	);
};

export default async function Home() {
	const featuredInventory = inventory.filter((car) => car.featured);

	return (
		// * You changed pt to 32px because its child has pt of 40px (at large screen size)
		<main className="flex flex-col flex-1 pt-[32px]">
			<Hero />
			<WhatIsSection />
			<AboutUsSection />
			<FeaturedInventorySection featuredInventory={featuredInventory} />
		</main>
	);
}

/* 
	Request Import Form
		- Think you should probably make the nav buttons sticky/fixed
		- Also maybe put them on either side of the form
		Make
			<main>
				height: auto
				min-height: auto
			<div className="form-page">
				overflow-y: auto
		Model
			<main>
				height: auto
				min-height: auto
			<div className="form-page">
				overflow-y: auto
		Year(s)
			<main>
				min-height: auto
				height: auto
			<div className="form-page">
				overflow-y: auto
			<form> > <div>
				overflow-y: visible
		Contact
			<main>
				min-height: auto
				height: auto
			<div className="form-page">
				overflow-y: auto
			<div className="form-container">
				height: auto
					(not sure necessary)
			<form>
				height: auto
					(not sure necessary)
			<div className="contact-form-fields">
				overflow-y: visible
					(not sure necessary)
		Review
			<main>
				min-height: auto
				height: auto
			<div className="form-page">
				overflow-y: auto
			<textarea>
				this.style.height=this.scrollHeight + "px"
			

			
*/

// TODO:
/* 
Don't like how What's Tokyo-Imports? => Your Gateway to Authentic JDM Imports looks on home page
// - Now the years page and post-request page are too small
ASK YOURSELF: WHAT ISN'T WORKING? FIX THAT FIRST
In order:
	// 1. Hamburger menu
	// 2. Form refresh
	// 3. FormStepper on refresh
	// 	- Think you can make your own stepper
	// 	- Keep state in Stepper and sessionStorage
	// 	- Use Preline UI Stepper as reference
	4. Invalid input styling
	5. Scroll selected form inputs into view
	6. In desktop, when a nav link is clicked, a transition causes the links to disappear for a sec
*/
/* 
	- Form has autofill on Chrome but not Safari. May need to add manually for Safari
	- Nav Buttons for MakesForm and ModelsForm are in different places
	- Years Form Nav Buttons overflow screen
	- Inventory page shows Footer. Not sure if I want that
	- Need to add Request Import Button on vehicle page
		- Start form process, filling in info up to ContactForm
	- Maybe add pointer-events: none to hero image
	- Need to collapse hamburger menu on smaller screen sizes when a link is clicked
	- Add CAPTCHA to form
	- Look at this for form submission: 
		- https://react.dev/reference/react-dom/components/form#noun-labs-1201738-(2)
	- If you keep using sessionStorage, you should clear it onSubmit or when leaving the form
	- On mobile, PostRequest h1 needs more margin-top
	// - Should autofocus First Name
	// 	- Actually, there are accessibility issues, so maybe not
	- Don't know if I should make ContactForm (and FormReview) height auto
	// - Right now, ProductionForm is wider than the rest
	// 	- Back/Next buttons are further apart
	- Don't know if I should add pt-[72px] to this <main> element like I did for the Form pages
	- If you refresh Indeed form, it takes you back to the beginning
	//- Should have first and last name displays on review page because that's how you asked for that information
	- Would be nice to add animation when switching Form pages
	// - Should last name be required?
	- Need to erase sessionStorage data when leaving form
	- Need to set browser back/forward buttons when filling out form so it doesn't go from Step_2 to Step_3 to Step_2, for example
	- Need to figure out how to keep BackLink and NextLink at bottom of ProductionYears page on reload
	- If elements are selected using data from sessionStorage, scroll them into view
		- Think I need to use ref
	// - Think I need to add form data to session storage in case page is reloaded
	- Consider putting FormStepper back in layout.tsx. Think it'd be ok to have visible on PostRequest page
		- And if it helps performance, it'd probably be worth it
		- Don't know if I'll be able to do anything from layout.tsx about page reload though
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
	// - Need to add state and comments form fields
	// - Add "required" indicators to form inputs (*)
	- Adjust styling on invalid inputs
	// - Reconsider 2-letter minimum for first/last name inputs
	// 	- Maybe just make sure it's at least one *letter* (not number or symbol or space)

	- When a form page is refreshed:
		- Have something pop up that tells them this will reset the form
		- If they confirm they want to refresh, router.push(step_1)

	- Add form stepper that works properly

	// - Add page for View Inventory link
		// - Don't need to worry about now, but toprank imports has a filter for the inventory. That could be something to add at some point.
			// - Will want to do it differently than they do, though, because there is an option for model that doesn't work until you select make. I think I would want the model filter to be invisible until make is selected
	- Figure out Hero height styling
	- Make Form component (DRY)
	- ProductionYearsSelector should maybe use grid auto columns
	// - Don't know if you need "Request Import" <h1> on the Form pages. Takes up a lot of space
	- form-nav-container with BackLink and NextLink should probably be its own component
	- Fix Back/Next button placement in Form
	// - Think you should put Back/Next Links inside <Form>
	- Figure out how to change error messages in ContactForm
	- Figure out if you should disable submit button before inputs are completed
	- Add client and server side validation for Steps 1-3
	- Finish client and server side validation for Step 4
	// - Add FormReview Step (Step 5)
	// - Add Footer content
	// - Add your Links to NavBar
	- Fix vehicle/[id]/page.tsx styling
		// - Add pt-[72px] to <main>
		- Make table nicer
		- Make description nicer
		- Make Footer stay at bottom of page
	- Go through and make sure you're typing everything you're supposed to and you're typing correctly
	- Organize
		- Make sure types are all where they belong, components are where they belong, utility functions are where they belong, etc.
	
*/
