import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import pingCommandBlueprint from "./ping";
import { CommandHandler } from "types/CommandBlueprint";

const COMMAND_BLUEPRINTS = [pingCommandBlueprint];

const COMMAND_INDEX: {
  DEFINITIONS: RESTPostAPIChatInputApplicationCommandsJSONBody[];
  HANDLERS_BY_COMMAND_NAME: Record<string, CommandHandler>;
} = {
  DEFINITIONS: [],
  HANDLERS_BY_COMMAND_NAME: {},
};

COMMAND_BLUEPRINTS.forEach((commandBlueprint) => {
  COMMAND_INDEX.DEFINITIONS.push(commandBlueprint.definition.toJSON());
  COMMAND_INDEX.HANDLERS_BY_COMMAND_NAME[commandBlueprint.definition.name] =
    commandBlueprint.handler;
});

export default COMMAND_INDEX;
