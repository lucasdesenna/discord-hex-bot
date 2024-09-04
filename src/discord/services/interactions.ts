import {
  CommandInteraction,
  Interaction,
  MessageComponentInteraction,
} from "discord.js";
import COMMANDS from "discord/commands";
import { redText } from "utils/text";

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

export const handleDiscordInteraction = async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    await handleDiscordCommandInteraction(interaction);
  } else if (interaction.isMessageComponent()) {
    await handleDiscordMessageInteraction(interaction);
  }
  console.log(redText("Unknown interaction type:"), interaction);
};
