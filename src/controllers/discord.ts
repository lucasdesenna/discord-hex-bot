import { RequestHandler } from "express";
import { syncAllDiscordApplicationCommands } from "services/discordCommands";
import system from "system";
import { blueText, greenText } from "utils/text";

export const handleSyncApplicationCommands: RequestHandler = async (
  _,
  res,
  next
) => {
  console.log(blueText("Syncing application (/) commands..."));

  try {
    await syncAllDiscordApplicationCommands(system);
    console.log(greenText("Application (/) commands synced."));
    res.status(201).send();
  } catch (error) {
    console.error("Failed to sync (/) commands:", error);
    next(error);
  }
};
