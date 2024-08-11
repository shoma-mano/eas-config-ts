#!/usr/bin/env node
import { defineCommand, runMain } from "citty";
import { writeFileSync } from "fs";
import createJITI from "jiti";
import { join, resolve } from "path";

const main = defineCommand({
  async run() {
    const projectDir = process.cwd();

    // プロジェクトディレクトリからeas.config.tsをインポート
    const rootDir = resolve(projectDir, "eas.config.ts");
    // Create jiti instance for loading initial config
    const jiti = createJITI(rootDir, { interopDefault: true });
    const config = jiti(join(projectDir, "eas.config.ts"));

    writeFileSync(
      join(projectDir, "eas.json"),
      JSON.stringify(config, null, 2),
    );

    // show complete message
    console.log("eas.json created successfully");
  },
});

runMain(main);
