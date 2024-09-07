import { genApiGatewayEvent } from "../../generators";

export const discordPingEvent = genApiGatewayEvent({
  path: "/",
  httpMethod: "POST",
  body: '{ "type": 1 }',
});

export const nonDiscordPingEvent = genApiGatewayEvent({
  path: "/",
  httpMethod: "POST",
  body: '{ "type": 2 }',
});
