const DOMAIN = "patissonlabs.com";
const BASE_URL = `https://${DOMAIN}`;

export const siteConfig = {
	title: "Patisson Labs",
	domain: DOMAIN,
	baseUrl: BASE_URL,
	email: {
		contact: `contact@${DOMAIN}`
	},
	ogImage: `${BASE_URL}/images/banner.png`,
	favicon: `${BASE_URL}/images/logo_square_outline_bw.svg`,
	webManifest: `${BASE_URL}/manifest.json`
};
