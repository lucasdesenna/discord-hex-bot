import { Client, REST } from "discord.js";
import { Express } from "express";

type System = {
  discordClient: Client;
  discordRestApi: REST;
  expressApp: Express;
};

export default System;
