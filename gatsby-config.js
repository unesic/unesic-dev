const path = require("path");

module.exports = {
	siteMetadata: {
		siteUrl: "https://unesic.io/",
		title: "unesic.io",
	},
	plugins: [
		{
			resolve: "gatsby-plugin-root-import",
			options: {
				src: path.join(__dirname, "src"),
				pages: path.join(__dirname, "src/pages"),
				components: path.join(__dirname, "src/components"),
			},
		},
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "TODO: CHANGE THIS",
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "@chakra-ui/gatsby-plugin",
			options: {
				resetCSS: true,
				isUsingColorMode: true,
			},
		},
	],
};
