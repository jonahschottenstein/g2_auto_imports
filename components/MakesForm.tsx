"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import { Make } from "@/types";
import MakeModelSelector from "./MakeModelSelector";
import Link from "next/link";

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
			<form className="request-import-form makes-form h-full overflow-y-auto">
				<MakeModelSelector
					category="make"
					options={makes}
					stateValue={user.make?.name || ""}
					handleChange={handleChange}
				/>
			</form>
			<div className="form-nav-container w-full flex justify-around">
				<Link
					href={"/request-import-form/step_2"}
					className={
						makeIsSelected
							? "next-form-link"
							: "next-form-link pointer-events-none"
					}
					aria-disabled={!makeIsSelected}
					tabIndex={!makeIsSelected ? -1 : undefined}>
					{">"}
				</Link>
			</div>
		</div>
	);
};

export default MakesForm;
