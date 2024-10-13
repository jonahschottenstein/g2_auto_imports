import FormStepper from "@/components/FormStepper";
import MakesForm from "@/components/MakesForm";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
	const makes = await prisma.make.findMany();

	return (
		<div className="form-page w-full flex flex-col flex-1 items-center overflow-x-hidden px-4 md:px-6 lg:px-8">
			<FormStepper steps={["Make", "Model", "Years", "Contact"]} />
			<MakesForm makes={makes} />
		</div>
	);
};

export default page;
