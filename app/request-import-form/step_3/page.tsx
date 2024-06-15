import ProductionForm from "@/components/ProductionForm";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
	const production = await prisma.production.findMany();

	return (
		<div className="form-page h-full pt-20">
			<ProductionForm production={production} />
			<div className="step-buttons-container w-full flex justify-between">
				<Link href={"/request-import-form/step_2"}>{"<="}</Link>
				<Link href={"/request-import-form/step_4"}>{"=>"}</Link>
			</div>
		</div>
	);
};

export default page;
