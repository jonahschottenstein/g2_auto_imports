import { FAQContent } from "@/components/FAQSection";
import faqs from "@/faqs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "FAQ",
	description:
		"Answers to frequently asked questions about our import process.",
};

const Page = () => {
	return (
		<main className="flex-1 pt-header">
			<div className="faq-page w-full px-4 md:px-6 lg:px-8 py-12 h-full min-h-section">
				<div className="mb-6 sm:mb-10 max-w-2xl mx-auto text-center">
					<h1 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl">
						Frequently Asked Questions
					</h1>
				</div>
				<div className="faq-page-content max-w-screen-xl mx-auto">
					<FAQContent faqData={faqs} />
				</div>
			</div>
		</main>
	);
};

export default Page;
