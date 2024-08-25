import "dotenv/config";
import { bulkOverwriteDiscordApplicationCommands } from "services/discordCommands";
import system from "system";
import COMMANDS, { commandDefinitionsAsJson } from "commands";
import { asBulletPoint, blueText, greenText } from "utils/text";

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
