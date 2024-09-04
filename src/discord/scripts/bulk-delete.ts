import configs from "configs";
import { Routes, RESTPutAPIApplicationCommandsResult } from "discord.js";
import system from "system";
import System from "types/System";
import { blueText, greenText } from "utils/text";

const bulkDeleteDiscordApplicationCommands = async ({
  discordRestApi,
}: System) =>
  discordRestApi.put(Routes.applicationCommands(configs.DISCORD.APP_ID), {
    body: [],
  }) as Promise<RESTPutAPIApplicationCommandsResult>;

(async () => {
  console.log(blueText("Deleting all discord commands..."));
  try {
    await bulkDeleteDiscordApplicationCommands(system);
    console.log(greenText("Discord commands successfully deleted."));
    process.exit(0);
  } catch (err) {
    console.error("Failed to delete discord commands:", err);
    process.exit(1);
  }
})();
