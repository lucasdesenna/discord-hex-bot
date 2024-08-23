import { Client, REST } from "discord.js";
import { Express } from "express";

type System = {
  expressApp: Express;
  discordRestApi: REST;
  dicordClient: Client;
};

export default System;
