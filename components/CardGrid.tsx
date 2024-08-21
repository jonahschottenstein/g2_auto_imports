import React from "react";

interface CardGridProps {
	children: React.ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
	return (
		<div className="card-grid grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
			{children}
		</div>
	);
};

export default CardGrid;
