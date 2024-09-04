import { Client, REST } from "discord.js";

type System = {
  discordClient: Client;
  discordRestApi: REST;
};

export default System;
