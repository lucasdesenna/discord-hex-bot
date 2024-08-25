import { Collection } from "discord.js";
import PING_COMMAND from "./ping";
import CommandBlueprint from "types/CommandBlueprint";
import HEX_COMMAND from "./hex";

type CommandCollection = Collection<string, CommandBlueprint>;

const COMMANDS: CommandCollection = new Collection();

[PING_COMMAND, HEX_COMMAND].forEach((commandBlueprint) => {
  COMMANDS.set(commandBlueprint.definition.name, commandBlueprint);
});

export const commandDefinitionsAsJson = (
  commands: CommandCollection = COMMANDS
) => commands.map((command) => command.definition.toJSON());

export default COMMANDS;
