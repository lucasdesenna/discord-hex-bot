export interface DiscordConfigs {
  APP_ID: string;
  BOT_TOKEN: string;
  OAUTH2_SECRET: string;
  PUBLIC_KEY: string;
}

const discordConfigs: DiscordConfigs = {
  APP_ID: process.env["APP_ID"] as string,
  BOT_TOKEN: process.env["BOT_TOKEN"] as string,
  OAUTH2_SECRET: process.env["OAUTH2_SECRET"] as string,
  PUBLIC_KEY: process.env["PUBLIC_KEY"] as string,
};

export default discordConfigs;
