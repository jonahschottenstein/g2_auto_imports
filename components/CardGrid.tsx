"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface CardGridProps {
	children: React.ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
	const pathName = usePathname();
	const gridStyles = pathName === "/" ? "" : "md:grid-cols-3 lg:grid-cols-4";

	return (
		<div
			className={`card-grid grid grid-cols-1 sm:grid-cols-2 ${gridStyles} gap-4`}>
			{children}
		</div>
	);
};

export default CardGrid;
