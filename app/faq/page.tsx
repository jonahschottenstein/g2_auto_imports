import { FAQContent } from "@/components/FAQSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "FAQ",
};

const Page = () => {
	const faqData = [
		{
			question: "Question 1",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat veniam, debitis eos molestiae provident praesentium perspiciatis adipisci eaque. Iure quam tenetur ratione ex molestias totam laudantium quae placeat accusamus.",
		},
		{
			question: "Question 2",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat veniam, debitis eos molestiae provident praesentium perspiciatis adipisci eaque. Iure quam tenetur ratione ex molestias totam laudantium quae placeat accusamus.",
		},
		{
			question: "Question 3",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat veniam, debitis eos molestiae provident praesentium perspiciatis adipisci eaque. Iure quam tenetur ratione ex molestias totam laudantium quae placeat accusamus.",
		},
		{
			question: "Question 4",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat veniam, debitis eos molestiae provident praesentium perspiciatis adipisci eaque. Iure quam tenetur ratione ex molestias totam laudantium quae placeat accusamus.",
		},
		{ question: "Question 5", answer: "Answer 5" },
	];

	return (
		<main className="flex-1 pt-header">
			<div className="faq-page w-full px-4 md:px-6 lg:px-8 py-12 h-full min-h-section">
				<div className="mb-6 sm:mb-10 max-w-2xl mx-auto text-center">
					<h1 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl">
						Frequently Asked Questions
					</h1>
				</div>
				<div className="faq-page-content max-w-screen-xl mx-auto">
					<FAQContent faqData={faqData} faqCategory="Category" />
				</div>
			</div>
		</main>
	);
};

export default Page;
