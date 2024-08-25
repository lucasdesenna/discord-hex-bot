import configs from "configs";
import { NodeEnv } from "configs/server";
import { registerRestApiRoutes } from "routes";
import { syncAllDiscordApplicationCommands } from "services/discordCommands";
import { registerDiscordInteractionHandlers } from "services/discordInteractions";
import system from "system";

registerRestApiRoutes(system);
registerDiscordInteractionHandlers(system);

if (configs.SERVER.NODE_ENV === NodeEnv.PRODUCTION)
  syncAllDiscordApplicationCommands(system);

system.dicordClient.login(configs.DISCORD.BOT_TOKEN);
