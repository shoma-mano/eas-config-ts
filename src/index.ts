import type { CommonConfig } from "./common";

type AndroidBuildConfig = {
} & CommonConfig;

type BuildConfig = {
  android?: AndroidBuildConfig; 
}

type EasConfig = {
    build:Record<string, BuildConfig>;
}

export const defineEasConfig = (config: EasConfig) => config