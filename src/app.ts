import configs from "configs";
import { registerRestApiRoutes } from "routes";
import { registerDiscordInteractionHandlers } from "services/discordInteractions";
import system from "system";
import { greenText } from "utils/text";

registerRestApiRoutes(system);
registerDiscordInteractionHandlers(system);

system.dicordClient.login(configs.DISCORD.BOT_TOKEN);

system.expressApp.listen(configs.SERVER.PORT, () => {
  console.log(greenText(`Listening on port ${configs.SERVER.PORT}`));
});
