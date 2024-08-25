import configs from "configs";
import {
  RESTGetAPIApplicationCommandResult,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  RESTPutAPIApplicationCommandsResult,
  Routes,
} from "discord.js";
import System from "types/System";

export const getDiscordApplicationCommands = async ({
  discordRestApi,
}: System) =>
  discordRestApi.get(
    Routes.applicationCommands(configs.DISCORD.APP_ID)
  ) as Promise<RESTGetAPIApplicationCommandResult[]>;

export const bulkOverwriteDiscordApplicationCommands = async (
  { discordRestApi }: System,
  commands: RESTPostAPIChatInputApplicationCommandsJSONBody[]
) =>
  discordRestApi.put(Routes.applicationCommands(configs.DISCORD.APP_ID), {
    body: commands,
  }) as Promise<RESTPutAPIApplicationCommandsResult[]>;

export const bulkDeleteDiscordApplicationCommands = async ({
  discordRestApi,
}: System) =>
  discordRestApi.put(Routes.applicationCommands(configs.DISCORD.APP_ID), {
    body: [],
  }) as Promise<RESTPutAPIApplicationCommandsResult>;
