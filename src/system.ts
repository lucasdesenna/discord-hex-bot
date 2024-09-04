import System from "types/System";
import configs from "configs";
import { REST, Client, GatewayIntentBits } from "discord.js";

const system: System = {
  discordRestApi: new REST({ version: "10" }).setToken(
    configs.DISCORD.BOT_TOKEN
  ),
  discordClient: new Client({ intents: [GatewayIntentBits.Guilds] }),
};

export default system;
