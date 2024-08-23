import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export type CommandHandler = (
  interaction: ChatInputCommandInteraction
) => Promise<void>;

type CommandBlueprint = {
  definition: SlashCommandBuilder;
  handler: CommandHandler;
};

export default CommandBlueprint;
