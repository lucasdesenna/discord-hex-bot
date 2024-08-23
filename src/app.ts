import configs from "configs";
import { registerRestApiRoutes } from "routes";
import { registerDiscordInteractionHandlers } from "services/discordInteractions";
import system from "system";

registerRestApiRoutes(system);
registerDiscordInteractionHandlers(system);
system.dicordClient.login(configs.DISCORD.BOT_TOKEN);
