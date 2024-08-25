import { ChatInputCommandInteraction, Interaction } from "discord.js";
import COMMANDS from "commands";
import { CommandHandler } from "types/CommandBlueprint";
import { blueText, greenText } from "utils/text";
import System from "types/System";

const handleInvalidInteraction: CommandHandler = async ({ commandName }) => {
  console.error("unknown interaction type", commandName);
};

export const handleDiscordInteraction: CommandHandler = async (interaction) => {
  const { commandName } = interaction;

  const interactionHandler = commandName
    ? COMMANDS.get(commandName)?.handler || handleInvalidInteraction
    : handleInvalidInteraction;

  await interactionHandler(interaction);
};

export const registerDiscordInteractionHandlers = async ({
  dicordClient,
}: System) => {
  console.log(blueText("Registering Discord interaction handlers..."));

  dicordClient.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;

    await handleDiscordInteraction(interaction as ChatInputCommandInteraction);
  });

  console.log(greenText("Discord interaction handlers registered."));
};
