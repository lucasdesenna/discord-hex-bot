export interface AppConfigs {
  REPOSITORY_URL: string;
  VERSION: string;
}

export interface DiscordConfigs {
  APP_ID: string;
  BOT_TOKEN: string;
  OAUTH2_SECRET: string;
  PUBLIC_KEY: string;
}

export interface Configs {
  APP: AppConfigs;
  DISCORD: DiscordConfigs;
}
