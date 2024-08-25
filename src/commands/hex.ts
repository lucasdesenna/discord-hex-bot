import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  ActionRowBuilder,
  InteractionReplyOptions,
  UserSelectMenuBuilder,
} from "discord.js";
import CommandBlueprint from "types/CommandBlueprint";

const memberSelectorRow = () => {
  const select = new UserSelectMenuBuilder()
    .setCustomId("member-selector")
    .setPlaceholder("Select a channel member");

  return new ActionRowBuilder().addComponents(select);
};

const HEX_COMMAND: CommandBlueprint = {
  definition: new SlashCommandBuilder()
    .setName("hex")
    .setDescription("Hexes a channel member."),
  handler: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply({
      content: "Choose a channel member to hex:",
      components: [memberSelectorRow()],
    } as InteractionReplyOptions);
  },
};

export default HEX_COMMAND;
