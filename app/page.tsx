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
		<main className="flex flex-col flex-1 pt-header">
			<Hero />
			<WhatIsSection />
			<AboutUsSection />
			<FeaturedInventorySection featuredInventory={featuredInventory} />
			<FAQSection />
		</main>
	);
}
