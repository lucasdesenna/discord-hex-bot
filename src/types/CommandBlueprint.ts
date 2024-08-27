import {
  CommandInteraction,
  ContextMenuCommandBuilder,
  MessageComponentInteraction,
  SlashCommandBuilder,
} from "discord.js";

export type commandInteractionHandler = (
  interaction: CommandInteraction
) => Promise<any>;

export type messageComponentInteractionHandler = (
  interaction: MessageComponentInteraction
) => Promise<any>;

type CommandBlueprint<BuilderType> = {
  definition: BuilderType;
  commandInteractionHandler: commandInteractionHandler;
  messageComponentInteractionHandlers?: Record<
    string,
    messageComponentInteractionHandler
  >;
};

export type ContextMenuCommandBlueprint =
  CommandBlueprint<ContextMenuCommandBuilder>;

export type SlashCommandBlueprint = CommandBlueprint<SlashCommandBuilder>;

export default CommandBlueprint;
