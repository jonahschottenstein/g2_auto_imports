import { inventory } from "@/inventory";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const inventoryEntries: MetadataRoute.Sitemap = inventory.map(({ id }) => ({
		url: `https://g2autoimports.com/vehicle/${id}`,
	}));

	// ? Do I need to add post-request and post-contact pages?

	return [
		{
			url: `https://g2autoimports.com/request-import-form/step_1`,
		},
		{
			url: `https://g2autoimports.com/request-import-form/step_2`,
		},
		{
			url: `https://g2autoimports.com/request-import-form/step_3`,
		},
		{
			url: `https://g2autoimports.com/request-import-form/step_4`,
		},
		{
			url: `https://g2autoimports.com/inventory`,
		},
		{
			url: `https://g2autoimports.com/faq`,
		},
		{
			url: `https://g2autoimports.com/contact/form`,
		},
		...inventoryEntries,
	];
}
