import system from "system";
import COMMANDS, { commandDefinitionsAsJson } from "discord/commands";
import { asBulletPoint, blueText, greenText } from "utils/text";
import configs from "configs";
import {
  RESTPostAPIApplicationCommandsJSONBody,
  Routes,
  RESTPutAPIApplicationCommandsResult,
} from "discord.js";
import System from "types/System";

const bulkOverwriteDiscordApplicationCommands = async (
  { discordRestApi }: System,
  commands: RESTPostAPIApplicationCommandsJSONBody[]
) =>
  discordRestApi.put(Routes.applicationCommands(configs.DISCORD.APP_ID), {
    body: commands,
  }) as Promise<RESTPutAPIApplicationCommandsResult[]>;

(async () => {
  console.log(
    blueText(
      `Updating the following discord commands:\n${COMMANDS.map((command) =>
        asBulletPoint(command.definition.name)
      ).join("\n")}\n`
    )
  );
  try {
    await bulkOverwriteDiscordApplicationCommands(
      system,
      commandDefinitionsAsJson(COMMANDS)
    );
    console.log(greenText("Discord commands successfully updated."));
    process.exit(0);
  } catch (err) {
    console.error("Failed to update discord commands:", err);
    process.exit(1);
  }
})();
