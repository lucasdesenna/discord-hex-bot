import { Collection } from "discord.js";
import pingCommandBlueprint from "./ping";
import CommandBlueprint from "types/CommandBlueprint";

const COMMANDS: Collection<string, CommandBlueprint> = new Collection();

[pingCommandBlueprint].forEach((commandBlueprint) => {
  COMMANDS.set(commandBlueprint.definition.name, commandBlueprint);
});

export default COMMANDS;
