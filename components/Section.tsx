import { SectionProps } from "@/types";
import React from "react";

const Section = ({ h2, children }: SectionProps) => {
	return (
		<section className="section w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24 border-t-2 border-t-slate-100 first:border-t-0">
			<div className="mb-6 sm:mb-10 max-w-2xl mx-auto text-center">
				<h2 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl mb-8">
					{h2}
				</h2>
			</div>
			<div className="section-content-wrapper max-w-screen-xl mx-auto">
				{children}
			</div>
		</section>
	);
};

export default Section;
