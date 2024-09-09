import FormStepper from "@/components/FormStepper";
import ModelsForm from "@/components/ModelsForm";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const page = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) => {
	console.log("SEARCH PARAMS", searchParams);
	const models = await prisma.model.findMany();
	// const models = await prisma.model.findMany({
	// 	where: { makeId: Number(searchParams.id) },
	// });

	return (
		<div className="form-page w-full flex flex-col flex-1 items-center overflow-x-hidden px-4 md:px-6 lg:px-8">
			<FormStepper steps={["Make", "Model", "Years", "Contact"]} />
			<ModelsForm models={models} />
		</div>
	);
};

export default page;
