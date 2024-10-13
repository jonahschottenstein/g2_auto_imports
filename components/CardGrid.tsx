"use client";

import { CardGridChildProps, CardGridProps } from "@/types";
import { usePathname } from "next/navigation";
import React, { cloneElement, isValidElement } from "react";

const CardGrid: React.FC<CardGridProps> = ({ children }: CardGridProps) => {
	const pathName = usePathname();
	const gridStyles = pathName === "/" ? "" : "md:grid-cols-3 lg:grid-cols-4";

	return (
		<div
			className={`card-grid grid grid-cols-1 sm:grid-cols-2 ${gridStyles} gap-4 md:gap-5 lg:gap-6`}>
			{React.Children.map(children, (child) => {
				if (pathName !== null && isValidElement<CardGridChildProps>(child)) {
					if (typeof child.type === "function") {
						return cloneElement(child, { pathName });
					}
				}

				return child;
			})}
		</div>
	);
};

export default CardGrid;
