import FormStepper from "@/components/FormStepper";
import ModelsForm from "@/components/ModelsForm";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
	const models = await prisma.model.findMany();

	return (
		<div
			// className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-auto"
			className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-clip">
			<FormStepper steps={["Make", "Model", "Year(s)", "Contact", "Review"]} />
			<ModelsForm models={models} />
		</div>
	);
};

export default page;
