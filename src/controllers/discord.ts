import COMMAND_INDEX from "commands";
import { RequestHandler } from "express";
import { syncDiscordApplicationCommands } from "services/discordCommands";
import system from "system";
import { blueText, greenText } from "utils/text";

export const handleSyncApplicationCommands: RequestHandler = async (
  _,
  res,
  next
) => {
  console.log(blueText("Syncing application (/) commands..."));

  try {
    await syncDiscordApplicationCommands(system, COMMAND_INDEX.DEFINITIONS);
    console.log(greenText("Application (/) commands synced."));
    res.status(201).send();
  } catch (error) {
    console.error("Failed to sync (/) commands:", error);
    next(error);
  }
};
