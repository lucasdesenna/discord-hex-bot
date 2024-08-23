import packageJson from "../../package.json";

const resolveRepositoryUrl = (repositoryString: string) =>
  repositoryString.replace("github:", "https://github.com/");

export interface AppConfigs {
  REPOSITORY_URL: string;
  VERSION: string;
}

const appConfigs: AppConfigs = {
  REPOSITORY_URL: resolveRepositoryUrl(packageJson.repository),
  VERSION: packageJson.version,
};

export default appConfigs;
