import * as core from "@actions/core";
import * as fs from "fs";
import * as yaml from "js-yaml";

async function run(): Promise<void> {
  try {
    const projectYmlPath: string = core.getInput("project-yml-path");

    if (!fs.existsSync(projectYmlPath)) {
      core.setFailed(`The file path for project.yml file does not exist or is not found: ${projectYmlPath}`);
      process.exit(1);
    }

    core.debug(`Running task with ${projectYmlPath}`);

    const projectYmlFile = fs.readFileSync(projectYmlPath, { encoding: "utf8" });
    const projectYmlFileContent: any = yaml.load(projectYmlFile);
    const bundleShortVersionString: string = projectYmlFileContent.settings.base.MARKETING_VERSION;

    core.setOutput("app-version", bundleShortVersionString);
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`);
  }
}

run();
