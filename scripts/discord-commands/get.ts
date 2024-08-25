import "dotenv/config";
import { getDiscordApplicationCommands } from "services/discordCommands";
import system from "system";
import { blueText, greenText } from "utils/text";

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
