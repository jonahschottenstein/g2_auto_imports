import React from "react";
import Section from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface FAQItemProps {
	question: string;
	answer: string;
}

interface FAQContainerProps {
	children: React.ReactNode[];
}

interface FAQContentProps {
	faqData: FAQItemProps[];
	faqCategory?: string;
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat veniam, debitis eos molestiae provident praesentium perspiciatis adipisci eaque. Iure quam tenetur ratione ex molestias totam laudantium quae placeat accusamus.
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

const FAQItem = ({ question, answer }: FAQItemProps) => {
	return (
		<li className="faq-item border-t-2 border-t-slate-100 first:border-t-0 font-sans">
			<details className="faq-item-details relative group">
				<summary className="summary flex justify-between items-center list-none py-4 cursor-pointer">
					<h3 className="text-lg font-medium select-none">{question}</h3>
					{/* 
                    Warning: Because the <summary> element has a default role of button (which strips all roles from child elements), this example will not work for users of assistive technologies such as screen readers. The <h4> will have its role removed and thus will not be treated as a heading for these users.

                    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
                    */}
					<FontAwesomeIcon
						icon={faAngleDown as IconProp}
						className="size-5 flex group-open:hidden"
					/>
					<FontAwesomeIcon
						icon={faAngleUp as IconProp}
						className="size-5 hidden group-open:flex"
					/>
				</summary>
				<p className="mb-4 text-base">{answer}</p>
			</details>
		</li>
	);
};

const FAQContainer = ({ children }: FAQContainerProps) => {
	return <ul className="faq-container">{children}</ul>;
};

export const FAQContent = ({ faqData, faqCategory }: FAQContentProps) => {
	return (
		<div className="faq-content max-w-2xl mx-auto">
			{faqCategory && (
				<h2 className="text-xl font-medium font-display uppercase">
					{faqCategory}
				</h2>
			)}
			<FAQContainer>
				{faqData.map(({ question, answer }) => (
					<FAQItem key={question} question={question} answer={answer} />
				))}
				{/* <div className="mt-10 lg:mt-20 text-center">
					<Link
						href="/inventory"
						className="w-fit m-auto border-2 border-blue-600 text-base py-2 px-4 rounded-full block font-sans cursor-pointer text-center text-blue-600 hover:bg-blue-700 hover:text-white hover:border-transparent"
						aria-label="View all FAQs">
						View all FAQs
					</Link>
				</div> */}
			</FAQContainer>
		</div>
	);
};

const FAQSection = () => {
	return (
		<Section h2="Frequently Asked Questions">
			<FAQContent faqData={faqData} />
			<div className="mt-12 lg:mt-24 text-center">
				<Link
					href="/faq"
					className="w-fit m-auto border-2 border-blue-600 text-base py-2 px-4 rounded-full block font-sans cursor-pointer text-center text-blue-600 hover:bg-blue-700 hover:text-white hover:border-transparent"
					aria-label="View all FAQs">
					View all FAQs
				</Link>
			</div>
		</Section>
	);
};

export default FAQSection;
