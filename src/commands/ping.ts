import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import CommandBlueprint from "types/CommandBlueprint";

const PING_COMMAND: CommandBlueprint = {
  definition: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  handler: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply("Pong!");
  },
};

export default PING_COMMAND;
