#!/usr/bin/env node
import { defineCommand, runMain } from "citty";
import { writeFileSync } from "fs";
import createJITI from "jiti";
import { join, resolve } from "path";

const main = defineCommand({
  async run() {
    const projectDir = process.cwd();
    const jiti = createJITI(projectDir, { interopDefault: true });
    const config = jiti(join(projectDir, "eas.config.ts"));

    // remove empty fields
    Object.keys(config).forEach((key) => {
      if (!config[key]) {
        delete config[key];
      }
    });

    writeFileSync(
      join(projectDir, "eas.json"),
      JSON.stringify(config, null, 2),
    );

    // show complete message
    console.log("eas.json created successfully");
  },
});

runMain(main);
