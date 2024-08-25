import COMMANDS from "commands";
import configs from "configs";
import {
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  Routes,
} from "discord.js";
import System from "types/System";

export const syncDiscordApplicationCommands = async (
  { discordRestApi }: System,
  commands: RESTPostAPIChatInputApplicationCommandsJSONBody[]
) =>
  discordRestApi.put(Routes.applicationCommands(configs.DISCORD.APP_ID), {
    body: commands,
  });

export const syncAllDiscordApplicationCommands = (system: System) =>
  syncDiscordApplicationCommands(
    system,
    COMMANDS.map((command) => command.definition.toJSON())
  );
