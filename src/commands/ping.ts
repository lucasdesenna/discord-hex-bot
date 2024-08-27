import { SlashCommandBuilder } from "discord.js";
import CommandBlueprint from "types/CommandBlueprint";

const PING_COMMAND: CommandBlueprint<SlashCommandBuilder> = {
  definition: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  commandInteractionHandler: (interaction) => interaction.reply("Pong!"),
};

export default PING_COMMAND;
