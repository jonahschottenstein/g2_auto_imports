import { inventory } from "@/inventory";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const inventoryEntries: MetadataRoute.Sitemap = inventory.map(({ id }) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/vehicle/${id}`,
	}));

	// ? Do I need to add post-request and post-contact pages?
	// ? Should steps 2-4 be in sitemap?

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/request-import-form/step_1`,
		},
		// {
		// 	url: `https://g2autoimports.com/request-import-form/step_2`,
		// },
		// {
		// 	url: `https://g2autoimports.com/request-import-form/step_3`,
		// },
		// {
		// 	url: `https://g2autoimports.com/request-import-form/step_4`,
		// },
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/inventory`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/faq`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact/form`,
		},
		...inventoryEntries,
	];
}
