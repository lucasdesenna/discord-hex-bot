import {
  CommandInteraction,
  Interaction,
  MessageComponentInteraction,
} from "discord.js";
import COMMANDS from "commands";
import { blueText, greenText } from "utils/text";
import System from "types/System";

const handleInvalidInteraction = async (interaction: any) => {
  console.error("unknown interaction type", interaction);
};

export const handleDiscordCommandInteraction = (
  interaction: CommandInteraction
) => {
  const { commandName } = interaction;
  const interactionHandler =
    COMMANDS.get(commandName)?.commandInteractionHandler ??
    handleInvalidInteraction;

  return interactionHandler(interaction);
};

export const handleDiscordMessageInteraction = async (
  interaction: MessageComponentInteraction
) => {
  let handleInteraction = handleInvalidInteraction;
  const commandName = interaction.message.interaction?.commandName;

  if (commandName) {
    const handlers =
      COMMANDS.get(commandName)?.messageComponentInteractionHandlers;

    if (handlers) {
      handleInteraction =
        handlers[interaction.customId] ?? handleInvalidInteraction;
    }
  }

  await handleInteraction(interaction);
};

export const registerDiscordInteractionHandlers = async ({
  dicordClient,
}: System) => {
  console.log(blueText("Registering Discord interaction handlers..."));

  dicordClient.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      await handleDiscordCommandInteraction(interaction);
    } else if (interaction.isMessageComponent()) {
      await handleDiscordMessageInteraction(interaction);
    }
    console.log(interaction);
  });

  console.log(greenText("Discord interaction handlers registered."));
};
