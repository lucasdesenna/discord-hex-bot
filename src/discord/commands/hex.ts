import {
  ActionRowBuilder,
  InteractionReplyOptions,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ApplicationCommandType,
  ContextMenuCommandBuilder,
  StringSelectMenuInteraction,
} from "discord.js";
import CommandBlueprint, {
  commandInteractionHandler,
  messageComponentInteractionHandler,
} from "types/CommandBlueprint";

const hexes = [
  {
    name: "The Curse of Roaming Solitude",
    description:
      "Moves target server member to an empty voice channel whenerver they say something.",
    activationHandler: () => {},
  },
];

const hexSelectionRow = () => {
  const hexSelect = new StringSelectMenuBuilder()
    .setCustomId("hexSelect")
    .setPlaceholder("Select a hex")
    .addOptions(
      ...hexes.map((hex) =>
        new StringSelectMenuOptionBuilder()
          .setLabel(hex.name)
          .setDescription(hex.description)
          .setValue(hex.name)
      )
    );

  return new ActionRowBuilder().addComponents(hexSelect);
};

const initialHandler: commandInteractionHandler = async (interaction) => {
  await interaction.reply({
    content: "Select a hex:",
    components: [hexSelectionRow()],
    ephemeral: true,
  } as InteractionReplyOptions);
};

const hexSelectionHandler: messageComponentInteractionHandler = async (
  interaction
) => {
  await interaction.reply({
    content: `User ${
      interaction.user.displayName
    } is now under the effect of "${
      (interaction as StringSelectMenuInteraction).values[0]
    }"`,
    ephemeral: true,
  } as InteractionReplyOptions);
};

const HEX_COMMAND: CommandBlueprint<ContextMenuCommandBuilder> = {
  definition: new ContextMenuCommandBuilder()
    .setName("hex")
    .setType(ApplicationCommandType.User),
  commandInteractionHandler: initialHandler,
  messageComponentInteractionHandlers: { hexSelect: hexSelectionHandler },
};

export default HEX_COMMAND;
