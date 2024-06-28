import FormStepper from "@/components/FormStepper";
import ProductionForm from "@/components/ProductionForm";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
	const production = await prisma.production.findMany();

	return (
		<div className="form-page flex flex-col flex-1 overflow-auto">
			<FormStepper steps={["Make", "Model", "Year(s)", "Contact", "Review"]} />
			<ProductionForm production={production} />
		</div>
	);
};

export default page;
