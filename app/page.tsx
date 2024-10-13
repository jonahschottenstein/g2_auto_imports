import { Hero } from "@/components";
import { inventory } from "@/inventory";
import WhatIsSection from "@/components/WhatIsSection";
import AboutUsSection from "@/components/AboutUsSection";
import FeaturedInventorySection from "@/components/FeaturedInventorySection";
import FAQSection from "@/components/FAQSection";

export default async function Home() {
	const featuredInventory = inventory.filter((car) => car.featured);

	return (
		<main className="flex flex-col flex-1 pt-header">
			<Hero />
			<WhatIsSection />
			<AboutUsSection />
			<FeaturedInventorySection featuredInventory={featuredInventory} />
			<FAQSection />
		</main>
	);
}
