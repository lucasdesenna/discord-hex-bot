export enum NodeEnv {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

export interface ServerConfigs {
  NODE_ENV: NodeEnv;
  PORT: number;
}

const serverConfigs: ServerConfigs = {
  NODE_ENV:
    NodeEnv[process.env["NODE_ENV"] as keyof typeof NodeEnv] ||
    NodeEnv.DEVELOPMENT,
  PORT: parseInt(process.env["PORT"] as string),
};

export default serverConfigs;
