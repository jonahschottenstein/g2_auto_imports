import { Hero } from "@/components";
import { inventory } from "@/inventory";
import WhatIsSection from "@/components/WhatIsSection";
import AboutUsSection from "@/components/AboutUsSection";
import FeaturedInventorySection from "@/components/FeaturedInventorySection";
import FAQSection from "@/components/FAQSection";

export default async function Home() {
	const featuredInventory = inventory.filter((car) => car.featured);

	return (
		// * You changed pt to 32px because its child has pt of 40px (at large screen size)
		// pt is 74px now because added 2px border bottom to header
		<main className="flex flex-col flex-1 pt-[74px]">
			<Hero />
			<WhatIsSection />
			<AboutUsSection />
			<FeaturedInventorySection featuredInventory={featuredInventory} />
			<FAQSection />
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
! TESTING

// ! Should change ProductionForm h1 to Select Years, because the user is selecting the startYear and endYear
! Should maybe make steps in FormStepper clickable. Have them take user to that page.
! Think I should clear sessionStorage onSubmit
	- Then can pass email to PostRequest with searchParams
// ! When manually enter url to step 5 on request-import-form, can submit without filling out car info. Should prevent this.
// * height: 100% on body is preventing min-height: 100vh from working on main, but I think height: 100% on body is required to get bottom of container to line up with bottom of page on desktop and top of address bar on mobile
// ! For form pages, could maybe conditionally add styles.
// 	- On pages that shouldn't exceed 100vh (makes, models, years, post-request), can set min-height: 100%
! Should maybe use getStaticProps on step_1/page.tsx. https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
! FormReview has h1, h3, h4, but no h2. If you keep the page/component, fix this
! Don't forget about FAQ Section
! Need to replace Tokyo-Imports with G2 Auto Imports
? Should I make min-height of Home page Section 100vh?
	- Not sure "What's Tokyo Imports?" Section looks good with height < 100vh
// ! Need to figure out Desktop => Mobile layouts
// 	- I've been adding space at the bottoms of pages so they don't overflow the viewport, but it looks bad on Desktop
// ! Lighthouse says first CarCard Image loaded lazily on mobile. Need to add priority.
! Lighthouse saying CarCard Images not sized correctly on mobile
// ! CarCard car title is an h3 element. When you use CarCards on /inventory page, there is only an h1 element, no h2s. Need to figure this out.
! Think you used the index for Make, Model, etc. options. Need to put real for values, ids, etc
! Look at passing data with searchParams for request-import-form
! Use useFormStatus to change UI to show user what's happening
! Maybe pass user email to PostContact using params
? Is it an issue that you're using UserSchema for StandAloneContactForm in the POST function?
// ! Need to adjust alignment on PostContact page 
	- (and maybe PostRequest)
! Make StandAloneContactForm comments section minimum character requirement 1 character
// ! Properly size CarPage images
// ! Figure out sizes prop for CarCard image
// 	- Has to work for Featured Inventory Section and Inventory page
// 	- Will need conditional logic
! Maybe see if you can add priority to Image conditionally if it's in the viewport / above the fold
// ! Add priority to first CarCard Image on Inventory page
? Should import all components to index.ts (Look into why)
? Don't know if Request Import button width should fill container at large sizes
// ! Getting 500 internal server error on load of page 1 of request import form because you're using document.querySelector(".selector") before page has loaded in MakeModelSelector
! Layout on Chrome/Safari is slightly different than on Firefox
	- e.g., Request import form nav buttons 
	- Look for other instances
! Think I want more space at the bottom of Request Import Form Contact page
! Should probably add more detail for the Comments textarea explaining what its purpose is, like how ADPList does.
// ! Will need to update schema for required comments OR make a second schema for contact page form
! Think you need more consistency with typefaces and uppercase/lowercase usage
! Look at adding more and/or styling PostRequest/PostContact components
! sessionStorage contactInfo object has a key called contactInfo with all the data--it's redundant
? Does Grant want an email list (that user can opt in/out of)?
? Does Grant want to add text saying user won't be sent mass emails?
// ! ContactForm at /contact/form should make comments required, right?
! Figure out what happens if Form submission doesn't work
! Need to combine ContactForm components (you have 2 versions)
! You're at the point where you're about to start touching up styling more. You should make classes so you don't have to manually go through and change a style on each individual element
	- e.g., primary-color, primary-link, etc.
- On primary button/link:
	- Hover should make bg-color lighter, not darker
- On secondary button/link:
	- Hover should fill background and make text white
- Wonder if you could use 180 degree camera to take pictures of inside of car and use something like three.js to make it so you can look around inside car
- Clamp font sizes of Hero section (make fluid)
- I think it's better for images of cars to face right
// ! Make it so NavBar doesn't re-render on page reload
! Hero image doesn't work on mobile
! NavBar takes up too much room on mobile landscape
	- Maybe:
		- Make NavBar height 60px (same as Nike)
		- Make it disappear on scroll down and reappear on scroll up
// ! NavBar Links show, then are replaced with HamburgerMenuButton on mobile
// 	- Fixed this, but takes too long
// 	- Need to speed up
! On CarPage, space between CarTable and Description is bigger than between the rest of the elements
! FIGURE OUT WHY IMAGES ARE LOADING SLOWLY
	// - ISSUE MAY BE DEV TOOLS

// - //! Fix heading hierarchy in WhatIsSection
// - //! Padding is not uniform across all pages. Needs to be fixed.
	// - e.g., on CarPage
// Should make a Section component that takes SectionContent as child
// MakeModelSelector doesn't scroll to selected item when Request Import link is clicked from Home page because selectedMakeRef.current is null
// 	- Need stateValue dependency to get MakeModelSelector to scroll to selected item on page visit
// 	- But when it's a dependency, it also scrolls the item to the bottom every time an item is clicked
// 	- Use IntersectionObserver
// Makes page Nav buttons are higher up than on Model page
// 	- Because on mobile you can't see them without scrolling
// 		- Need to figure out what to do for this
// Don't like how What's Tokyo-Imports? => Your Gateway to Authentic JDM Imports looks on home page
// - Now the years page and post-request page are too small
ASK YOURSELF: WHAT ISN'T WORKING? FIX THAT FIRST
In order:
	// 1. Hamburger menu
	// 2. Form refresh
	// 3. FormStepper on refresh
	// 	- Think you can make your own stepper
	// 	- Keep state in Stepper and sessionStorage
	// 	- Use Preline UI Stepper as reference
	// 4. Invalid input styling
	// 5. Scroll selected form inputs into view
	// 6. In desktop, when a nav link is clicked, a transition causes the links to disappear for a sec
*/
/* 
	- Form has autofill on Chrome but not Safari. May need to add manually for Safari
	// - Nav Buttons for MakesForm and ModelsForm are in different places
	// - Years Form Nav Buttons overflow screen
	// - //! Inventory page shows Footer. Not sure if I want that
	// - Need to add Request Import Button on vehicle page
	// 	- Start form process, filling in info up to ContactForm
	// - Maybe add pointer-events: none to hero image
	// - Need to collapse hamburger menu on smaller screen sizes when a link is clicked
	// - Add CAPTCHA to form
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
	// - If you refresh Indeed form, it takes you back to the beginning
	//- Should have first and last name displays on review page because that's how you asked for that information
	- Would be nice to add animation when switching Form pages
	// - Should last name be required?
	// - Need to erase sessionStorage data when leaving form
	- Need to set browser back/forward buttons when filling out form so it doesn't go from Step_2 to Step_3 to Step_2, for example
	- Need to figure out how to keep BackLink and NextLink at bottom of ProductionYears page on reload
	// - If elements are selected using data from sessionStorage, scroll them into view
	// 	- Think I need to use ref
	// - Think I need to add form data to session storage in case page is reloaded
	// - Consider putting FormStepper back in layout.tsx. Think it'd be ok to have visible on PostRequest page
		// - And if it helps performance, it'd probably be worth it
		// - Don't know if I'll be able to do anything from layout.tsx about page reload though
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
	// - //! Adjust styling on invalid inputs
	// - Reconsider 2-letter minimum for first/last name inputs
	// 	- Maybe just make sure it's at least one *letter* (not number or symbol or space)

	- When a form page is refreshed:
		- Have something pop up that tells them this will reset the form
		- If they confirm they want to refresh, router.push(step_1)

	// - Add form stepper that works properly

	// - Add page for View Inventory link
		// - Don't need to worry about now, but toprank imports has a filter for the inventory. That could be something to add at some point.
			// - Will want to do it differently than they do, though, because there is an option for model that doesn't work until you select make. I think I would want the model filter to be invisible until make is selected
	// - Figure out Hero height styling
	- Make Form component (DRY)
	// - ProductionYearsSelector should maybe use grid auto columns
	// - Don't know if you need "Request Import" <h1> on the Form pages. Takes up a lot of space
	- form-nav-container with BackLink and NextLink should probably be its own component
	// - Fix Back/Next button placement in Form
	// - Think you should put Back/Next Links inside <Form>
	// - Figure out how to change error messages in ContactForm
	- Figure out if you should disable submit button before inputs are completed
	- Add client and server side validation for Steps 1-3
	// - Finish client and server side validation for Step 4
	// - Add FormReview Step (Step 5)
	// - Add Footer content
	// - Add your Links to NavBar
	// - Fix vehicle/[id]/page.tsx styling
	// 	// - Add pt-[72px] to <main>
	// 	- Make table nicer
	// 	- Make description nicer
	// 	- Make Footer stay at bottom of page
	- Go through and make sure you're typing everything you're supposed to and you're typing correctly
	- Organize
		- Make sure types are all where they belong, components are where they belong, utility functions are where they belong, etc.
	
*/
