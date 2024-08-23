import configs, { Configs } from "configs";

const discordURL = (endpoint: string) =>
  "https://discord.com/api/v10/" + endpoint;

const discordHeaders = (configs: Configs) => ({
  Authorization: `Bot ${configs.DISCORD.BOT_TOKEN}`,
  "Content-Type": "application/json; charset=UTF-8",
  "User-Agent": `DiscordBot (${configs.APP.REPOSITORY_URL}, ${configs.APP.VERSION})`,
});

export const discordRequest = async (
  endpoint: string,
  body?: any,
  requestMap?: Request
) => {
  const res = await fetch(discordURL(endpoint), {
    ...requestMap,
    headers: discordHeaders(configs),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }

  return res;
};

export const installGlobalCommands = async (commands: string[]) => {
  // API endpoint to overwrite global commands
  const endpoint = `applications/${configs.DISCORD.APP_ID}/commands`;

  try {
    // This is calling the bulk overwrite endpoint: https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
    await discordRequest(endpoint, { method: "PUT", body: commands });
  } catch (err) {
    console.error(err);
  }
};
