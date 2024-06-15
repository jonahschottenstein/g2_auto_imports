import MakeModelSelector from "@/components/MakeModelSelector";
import MakesForm from "@/components/MakesForm";
import RequestImportForm from "@/components/RequestImportForm";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
	const makes = await prisma.make.findMany();
	// const models = await prisma.model.findMany();
	// const production = await prisma.production.findMany();

	return (
		<div className="form-page h-full pt-20">
			<MakesForm makes={makes} />
			<Link href={"/request-import-form/step_2"}>{"=>"}</Link>
		</div>
	);
};
/* const page = async () => {
	const makes = await prisma.make.findMany();
	const models = await prisma.model.findMany();
	const production = await prisma.production.findMany();

	return (
		<div className="form-page h-full pt-20">
			<RequestImportForm
				makes={makes}
				models={models}
				production={production}
			/>
			<Link href={"/request-import-form/step_2"}>{"=>"}</Link>
		</div>
	);
}; */

export default page;
