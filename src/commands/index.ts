import { Collection } from "discord.js";
import PING_COMMAND from "./ping";
import {
  ContextMenuCommandBlueprint,
  SlashCommandBlueprint,
} from "types/CommandBlueprint";
import HEX_COMMAND from "./hex";

type CommandBlueprintCollection = Collection<
  string,
  ContextMenuCommandBlueprint | SlashCommandBlueprint
>;

const COMMANDS: CommandBlueprintCollection = new Collection();

[PING_COMMAND, HEX_COMMAND].forEach((commandBlueprint) => {
  COMMANDS.set(commandBlueprint.definition.name, commandBlueprint);
});

export const commandDefinitionsAsJson = (
  commands: CommandBlueprintCollection = COMMANDS
) => commands.map((command) => command.definition.toJSON());

export default COMMANDS;
