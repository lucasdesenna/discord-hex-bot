import appConfigs, { AppConfigs } from "./app";
import serverConfigs, { ServerConfigs } from "./server";
import discordConfigs, { DiscordConfigs } from "./discord";

export interface Configs {
  APP: AppConfigs;
  DISCORD: DiscordConfigs;
  SERVER: ServerConfigs;
}

const configs: Configs = {
  APP: appConfigs,
  DISCORD: discordConfigs,
  SERVER: serverConfigs,
};

export default configs;
