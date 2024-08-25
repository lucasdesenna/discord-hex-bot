import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import { RequestHandler } from "express";
import {
  bulkDeleteDiscordApplicationCommands as bulkDeleteDiscordApplicationGlobalCommands,
  bulkOverwriteDiscordApplicationCommands as bulkOverwriteDiscordApplicationGlobalCommands,
} from "services/discordCommands";
import system from "system";
import { asBulletPoint, blueText, greenText } from "utils/text";

export const bulkOverwriteDiscordApplicationGlobalCommandsController: RequestHandler =
  async ({ body }, res, next) => {
    const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = body;

    console.log(
      blueText(
        `Overwritting the following discord commands:\n${commands
          .map((command) => asBulletPoint(command.name))
          .join("\n")}\n}`
      )
    );
    try {
      await bulkOverwriteDiscordApplicationGlobalCommands(system, commands);
      console.log(greenText("Discord commands successfully overwritten."));
      res.status(201).send();
    } catch (err) {
      console.error("Failed to overwrite discord commands:", err);
      next(err);
    }
  };

export const bulkDeleteDiscordApplicationGlobalCommandsController: RequestHandler =
  async (_, res, next) => {
    console.log(blueText("Deleting all discord commands..."));
    try {
      await bulkDeleteDiscordApplicationGlobalCommands(system);
      console.log(greenText("Discord commands successfully deleted."));
      res.status(201).send();
    } catch (err) {
      console.error("Failed to delete discord commands:", err);
      next(err);
    }
  };
