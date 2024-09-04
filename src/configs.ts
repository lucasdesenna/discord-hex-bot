import packageJson from "../package.json";
import { AppConfigs, Configs, DiscordConfigs } from "types/Configs.js";

const resolveRepositoryUrl = (repositoryString: string) =>
  repositoryString.replace("github:", "https://github.com/");

const appConfigs: AppConfigs = {
  REPOSITORY_URL: resolveRepositoryUrl(packageJson.repository),
  VERSION: packageJson.version,
};

const discordConfigs: DiscordConfigs = {
  APP_ID: process.env["APP_ID"] as string,
  BOT_TOKEN: process.env["BOT_TOKEN"] as string,
  OAUTH2_SECRET: process.env["OAUTH2_SECRET"] as string,
  PUBLIC_KEY: process.env["PUBLIC_KEY"] as string,
};

const configs: Configs = {
  APP: appConfigs,
  DISCORD: discordConfigs,
};

export default configs;
