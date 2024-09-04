import configs from "configs";
import { Routes, RESTGetAPIApplicationCommandResult } from "discord.js";
import system from "system";
import System from "types/System";
import { blueText, greenText } from "utils/text";

const getDiscordApplicationCommands = async ({ discordRestApi }: System) =>
  discordRestApi.get(
    Routes.applicationCommands(configs.DISCORD.APP_ID)
  ) as Promise<RESTGetAPIApplicationCommandResult[]>;

(async () => {
  console.log(blueText("Getting discord commands."));
  try {
    const results = await getDiscordApplicationCommands(system);
    console.log(greenText("Discord commands successfully fetched:\n"), results);
    process.exit(0);
  } catch (err) {
    console.error("Failed to update discord commands:", err);
    process.exit(1);
  }
})();
