import "dotenv/config";
import { bulkDeleteDiscordApplicationCommands } from "services/discordCommands";
import system from "system";
import { blueText, greenText } from "utils/text";

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
