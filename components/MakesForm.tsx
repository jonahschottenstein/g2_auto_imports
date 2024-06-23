"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import { Make } from "@/types";
import MakeModelSelector from "./MakeModelSelector";
import Link from "next/link";
import { BackLink, NextLink } from "./CustomLinks";

interface MakesFormProps {
	makes: Make[];
}

const MakesForm = ({ makes }: MakesFormProps) => {
	const user = useForm();
	const updateUserData = useFormUpdater();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;

		if (!target.className.includes("make-option")) return;
		// ? Not sure I should use className here

		const data = {
			make: { id: Number(target.id), name: target.value },
			model: {
				id: 0,
				name: "",
				makeId: 0,
			},
			productionYears: {
				startYear: 0,
				endYear: 0,
			},
		};

		updateUserData(data);
	};

	const makeIsSelected = user.make?.id && user.make.name;

	return (
		<div className="form-container px-8 h-full flex flex-col">
			<h2 className="text-center text-2xl mb-4">Select Make</h2>
			<form className="request-import-form makes-form flex flex-col h-[calc(100%-50px)]">
				<MakeModelSelector
					category="make"
					options={makes}
					stateValue={user.make?.name || ""}
					handleChange={handleChange}
				/>
				<div className="form-nav-container w-full flex justify-around p-4">
					<BackLink href="/request-import-form/step_1" isDisabled={true} />
					<NextLink
						href="/request-import-form/step_2"
						isDisabled={!makeIsSelected}
					/>
				</div>
			</form>
		</div>
	);
};

export default MakesForm;
