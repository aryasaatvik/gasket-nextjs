import { makeGasket } from "@gasket/core";
import pluginCommand from "@gasket/plugin-command";
import pluginDocs from "@gasket/plugin-docs";
import pluginDocusaurus from "@gasket/plugin-docusaurus";
import pluginLogger from "@gasket/plugin-logger";
import pluginMetadata from "@gasket/plugin-metadata";
import pluginWebpack from "@gasket/plugin-webpack";
import pluginWinston from "@gasket/plugin-winston";
import pluginNextjs from "@gasket/plugin-nextjs";
import pluginIntl from "@gasket/plugin-intl";

import pluginPrepare from "@/plugins/prepare";

const gasket = makeGasket({
	plugins: [
		pluginPrepare,
		pluginCommand,
		pluginDocs,
		pluginDocusaurus,
		pluginLogger,
		pluginMetadata,
		pluginWebpack,
		pluginWinston,
		pluginNextjs,
		pluginIntl,
	],
	intl: {
		locales: ["en-US", "fr-FR"],
		defaultLocale: "en-US",
		managerFilename: "intl.ts",
	},
});

export default gasket;
