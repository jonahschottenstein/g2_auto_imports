"use client";

import { FormContextType, User } from "@/types";
import { createContext, useContext, useState } from "react";

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState({
		make: { id: 0, name: "" },
		model: { id: 0, name: "", makeId: 0 },
		productionYears: { startYear: 0, endYear: 0 },
		contactInfo: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			zipCode: "",
			// comments: "",
		},
	});

	const updateUserData = (values: Partial<User>) => {
		console.log("updateUserData", values);
		setUser({ ...user, ...values });
	};

	console.log("USER", user);

	return (
		<FormContext.Provider value={{ user, updateUserData }}>
			{children}
		</FormContext.Provider>
	);
}

export function useForm() {
	const context = useContext(FormContext);

	if (!context) {
		throw new Error("useForm must be used within a FormProvider");
	}

	return context.user;
}

export function useFormUpdater() {
	const context = useContext(FormContext);

	if (!context) {
		throw new Error("useFormUpdater must be used within a FormProvider");
	}

	return context.updateUserData;
}
