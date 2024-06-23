import Link from "next/link";

interface CustomLink {
	href: string;
	title: string;
}

interface ProgressLink {
	href: string;
	isDisabled: boolean;
}

export const PrimaryBlockLink = ({ href, title }: CustomLink) => {
	return (
		<Link
			href={href}
			className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none sm:w-60">
			{title}
		</Link>
	);
};

export const SecondaryBlockLink = ({ href, title }: CustomLink) => {
	return (
		<Link
			href={href}
			className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 sm:w-60">
			{title}
		</Link>
	);
};

export const NextLink = ({ href, isDisabled }: ProgressLink) => {
	const styles = isDisabled
		? "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 opacity-50 pointer-events-none"
		: "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 ";
	return (
		<Link
			href={href}
			className={styles}
			aria-disabled={isDisabled}
			tabIndex={isDisabled ? -1 : undefined}>
			Next
			<svg
				className="flex-shrink-0 size-4"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M5 12h14"></path>
				<path d="m12 5 7 7-7 7"></path>
			</svg>
		</Link>
	);
};

export const BackLink = ({ href, isDisabled }: ProgressLink) => {
	const styles = isDisabled
		? "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 opacity-50 pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
		: "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800";
	return (
		<Link
			href={href}
			className={styles}
			aria-disabled={isDisabled}
			tabIndex={isDisabled ? -1 : undefined}>
			<svg
				className="flex-shrink-0 size-4"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M19 12H5"></path>
				<path d="m12 19-7-7 7-7"></path>
			</svg>
			Back
		</Link>
	);
};
