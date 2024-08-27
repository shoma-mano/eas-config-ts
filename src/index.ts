//  cli
export type CliConfig = {
  /**
   * The compatible versions of EAS CLI with this config
   */
  version?: string;

  /**
   * If all changes are required to be committed before building or submitting
   */
  requireCommit?: boolean;

  /**
   * Version policy defines whether the version of your app should be based on your local project
   * or values stored on EAS servers (remote).
   *
   * - `local`: The `autoIncrement` is based on your local project values.
   * - `remote`: The `autoIncrement` is based on the values stored on EAS servers.
   */
  appVersionSource?: "local" | "remote";

  /**
   * Specifies whether EAS CLI should prompt to configure Push Notifications credentials.
   * Defaults to true if expo-notifications is in your project dependencies, otherwise false.
   */
  promptToConfigurePushNotifications?: boolean;
};

//  build
export type CommonBuildConfig = {
  /**
   * @typedef {Object} BuildProfileConfig
   */

  /**
   * When set to true, EAS CLI won't require you to configure credentials when building the app.
   * Defaults to false.
   * @type {boolean}
   * @default false
   */
  withoutCredentials?: boolean;

  /**
   * The name of the build profile that the current one should inherit values from.
   * This value can't be specified per platform.
   * @type {string}
   */
  extends?: string;

  /**
   * The source of credentials used to sign the application archive.
   * @type {'local' | 'remote'}
   * @default 'remote'
   */
  credentialsSource?: "local" | "remote";

  /**
   * Deprecated: Name of the release channel for the Classic Updates service, which is only supported in SDK 49 and lower.
   * If you do not specify a channel, your binary will pull releases from the default channel.
   * @type {string}
   */
  releaseChannel?: string;

  /**
   * The EAS Update channel where this build will look for updates.
   * Standalone builds will check for and download updates matching platform, native runtime, and channel.
   * @type {string}
   */
  channel?: string;

  /**
   * The method of distributing your app.
   * @type {'store' | 'internal'}
   */
  distribution?: "store" | "internal";

  /**
   * If set to true, this field will produce a development build.
   * For the build to be successful, the project must have expo-dev-client installed and configured.
   * Defaults to false.
   * @type {boolean}
   * @default false
   */
  developmentClient?: boolean;

  /**
   * The resource class that will be used to run this build.
   * To see mapping for each platform, see Android-specific resource class field and iOS-specific resource class field.
   * @type {'default' | 'medium' | 'large'}
   */
  resourceClass?: "default" | "medium" | "large";

  /**
   * Optional override of the prebuild command used by EAS.
   * For example, you can specify prebuild --template example-template to use a custom template.
   * @type {string}
   */
  prebuildCommand?: string;

  /**
   * List of paths (or patterns) where EAS Build is going to look for the build artifacts.
   * Use applicationArchivePath for specifying the path for uploading the application archive.
   * Build artifacts are uploaded even if the build fails.
   * @type {string[]}
   */
  buildArtifactPaths?: string[];

  /**
   * Version of Node.js used for build.
   * @type {string}
   */
  node?: string;

  /**
   * Version of Yarn used for build.
   * @type {string}
   */
  yarn?: string;

  /**
   * Version of pnpm used for build.
   * @type {string}
   */
  pnpm?: string;

  /**
   * Version of Bun used for build. You can also use a specific version.
   * @type {string}
   */
  bun?: string;

  /**
   * Deprecated: Version of expo-cli used to prebuild your app. It only affects managed projects on Expo SDK 45 and lower.
   * For newer SDKs, EAS Build will use the versioned Expo CLI. It is included with expo library.
   * @type {string}
   */
  expoCli?: string;

  /**
   * Environment variables that should be set during the build process.
   * It should only be used for values that you would commit to your git repository and not for passwords or secrets.
   * @type {Object}
   */
  env?: Record<string, any>;

  /**
   * Controls how EAS CLI bumps your application build version.
   * Defaults to false.
   * @type {boolean}
   * @default false
   */
  autoIncrement?: boolean;

  /**
   * Cache configuration. This feature is intended for caching values that require a lot of computation.
   * @type {Object}
   */
  cache?: {
    /**
     * Disables caching. Defaults to false.
     * @type {boolean}
     * @default false
     */
    disabled?: boolean;
    /**
     * Cache key. You can invalidate the cache by changing this value.
     * @type {string}
     */
    key?: string;
    /**
     * List of the paths that will be saved after a successful build and restored at the beginning of the next one.
     * Both absolute and relative paths are supported, where relative paths are resolved from the directory with eas.json.
     * @type {string[]}
     */
    paths?: string[];
  };

  /**
   * Custom workflow file name that will be used to run this build.
   * You can also specify this property on platform level for platform-specific workflows.
   * @type {string}
   */
  config?: string;
};

export type AndroidBuildConfig = {
  /**
   * When set to true, EAS CLI won't require you to configure credentials when building the app.
   * Defaults to false.
   * @type {boolean}
   * @default false
   */
  withoutCredentials?: boolean;

  /**
   * Image with build environment.
   * @type {string}
   */
  image?: string;
  /**
   * The Android-specific resource class that will be used to run this build.
   * Defaults to 'medium'.
   * @type {'default' | 'medium' | 'large'}
   * @default 'medium'
   */
  resourceClass?: "default" | "medium" | "large";

  /**
   * Version of Android NDK.
   * @type {string}
   */
  ndk?: string;

  /**
   * Controls how EAS CLI bumps your application build version.
   * Defaults to false.
   * @type {boolean | 'version' | 'versionCode'}
   * @default false
   */
  autoIncrement?: boolean | "version" | "versionCode";

  /**
   * Type of the artifact you want to build. It controls which Gradle task will be used to build the project.
   * @type {'app-bundle' | 'apk'}
   */
  buildType?: "app-bundle" | "apk";

  /**
   * Gradle task that will be used to build your project.
   * @type {string}
   */
  gradleCommand?: string;

  applicationArchivePath?: string; // Defaults to 'android/app/build/outputs/**/*.{apk,aab}'
  config?: string;
} & CommonBuildConfig;

export type IOSBuildConfig = {
  /**
   * @typedef {Object} IOSBuildConfig
   */

  /**
   * When set to true, EAS CLI won't require you to configure credentials when building the app.
   * This comes in handy when using EAS Build custom builds. Defaults to false.
   * @type {boolean}
   * @default false
   */
  withoutCredentials?: boolean;

  /**
   * If set to true, creates build for iOS Simulator. Defaults to false.
   * @type {boolean}
   * @default false
   */
  simulator?: boolean;

  /**
   * Provisioning method used for "distribution": "internal" when you have an Apple account with Apple Developer Enterprise Program membership.
   * You can choose if you want to use adhoc or universal provisioning. The latter is recommended as it does not require you to register each individual device.
   * If you don't provide this option and you still authenticate with an enterprise team, you'll be prompted which provisioning method to use.
   * @type {'universal' | 'adhoc'}
   */
  enterpriseProvisioning?: "universal" | "adhoc";

  /**
   * Controls how EAS CLI bumps your application build version. Defaults to false.
   *
   * Allowed values:
   * - "version" - bumps the patch of expo.version (for example, 1.2.3 to 1.2.4).
   * - "buildNumber" (or true) - bumps the last component of expo.ios.buildNumber (for example, 1.2.3.39 to 1.2.3.40).
   * - false - versions won't be bumped automatically (default).
   *
   * Based on the value of cli.appVersionSource in eas.json, the values will be updated locally in your project or on EAS servers.
   * @type {boolean | 'version' | 'buildNumber'}
   * @default false
   */
  autoIncrement?: boolean | "version" | "buildNumber";

  /**
   * Image with build environment.
   * @type {string}
   */
  image?: string;

  /**
   * The iOS-specific resource class that will be used to run this build. Defaults to medium.
   * @type {'default' | 'medium' | 'large'}
   * @default 'medium'
   */
  resourceClass?: "default" | "medium" | "large";

  /**
   * Version of bundler.
   * @type {string}
   */
  bundler?: string;

  /**
   * Version of fastlane.
   * @type {string}
   */
  fastlane?: string;

  /**
   * Version of CocoaPods.
   * @type {string}
   */
  cocoapods?: string;

  /**
   * Xcode project's scheme. If a project has multiple schemes, you should set this value.
   * If the project has only one scheme, it will be detected automatically.
   * If the project has multiple schemes and this value is not set, EAS CLI will prompt you to select one of them.
   * @type {string}
   */
  scheme?: string;

  /**
   * Xcode project's Build Configuration.
   *
   * For an Expo project, the value is "Release" or "Debug". Defaults to "Release".
   * For a bare React Native project, defaults to the value specified in the scheme.
   * It takes priority over developmentClient.
   * @type {string}
   * @default 'Release'
   */
  buildConfiguration?: string;

  /**
   * Path (or pattern) where EAS Build is going to look for the application archive.
   * EAS Build uses the fast-glob npm package for pattern matching. You should modify that path only if you are using a custom Gymfile.
   * The default is ios/build/Build/Products/*-iphonesimulator/*.app when building for simulator and ios/build/*.ipa in other cases.
   * @type {string}
   */
  applicationArchivePath?: string;

  /**
   * Custom workflow file name that will be used to run this iOS build.
   * You can also specify this property on profile level for platform-agnostic workflows.
   * @type {string}
   */
  config?: string;
} & CommonBuildConfig;

export type BuildConfig = {
  android?: AndroidBuildConfig;
  ios?: IOSBuildConfig;
} & CommonBuildConfig;

//  submit
export type AndroidSubmitConfig = {
  /**
   * @typedef {Object} GooglePlayConfig
   */

  /**
   * Path to the JSON file with Google Service Account Key used to authenticate with Google Play.
   * @type {string}
   */
  serviceAccountKeyPath?: string;

  /**
   * The track of the application to use.
   * @type {'production' | 'beta' | 'alpha' | 'internal'}
   */
  track?: "production" | "beta" | "alpha" | "internal";

  /**
   * The status of a release.
   * @type {'completed' | 'draft' | 'halted' | 'inProgress'}
   */
  releaseStatus?: "completed" | "draft" | "halted" | "inProgress";

  /**
   * The initial fraction of users who are eligible to receive the release. Should be a value from 0 (no users) to 1 (all users). Works only with inProgress release status.
   * @type {number}
   */
  rollout?: number;

  /**
   * Indicates that the changes sent with this submission will not be reviewed until they are explicitly sent for review from the Google Play Console UI.
   * Defaults to false.
   * @type {boolean}
   * @default false
   */
  changesNotSentForReview?: boolean;

  /**
   * The application ID that is used when accessing Service Account Key managed by Expo. It does not have any effect if you are using local credentials. In most cases this value will be autodetected. However, if you have multiple product flavors, this value might be necessary.
   * @type {string}
   */
  applicationId?: string;
};

export type IOSSubmitConfig = {
  /**
   * @typedef {Object} AppStoreConfig
   */

  /**
   * Your Apple ID username (you can also set the EXPO_APPLE_ID env variable).
   * @type {string}
   */
  appleId?: string;

  /**
   * App Store Connect unique application Apple ID number. When set, results in skipping the app creation step.
   * @type {string}
   */
  ascAppId?: string;

  /**
   * Your Apple Developer Team ID.
   * @type {string}
   */
  appleTeamId?: string;

  /**
   * A unique ID for your app that is not visible on the App Store, will be generated unless provided.
   * @type {string}
   */
  sku?: string;

  /**
   * Primary language. Defaults to "en-US".
   * @type {string}
   * @default "en-US"
   */
  language?: string;

  /**
   * The name of your company, needed only for the first submission of any app to the App Store.
   * @type {string}
   */
  companyName?: string;

  /**
   * The name of your app as it will appear on the App Store. Defaults to expo.name from the app config.
   * @type {string}
   */
  appName?: string;

  /**
   * The path to your App Store Connect Api Key .p8 file.
   * @type {string}
   */
  ascApiKeyPath?: string;

  /**
   * The Issuer ID of your App Store Connect Api Key.
   * @type {string}
   */
  ascApiKeyIssuerId?: string;

  /**
   * The Key ID of your App Store Connect Api Key.
   * @type {string}
   */
  ascApiKeyId?: string;

  /**
   * The bundle identifier that will be used when accessing submit credentials managed by Expo. It does not have any effect if you are using local credentials. In most cases, this value will be autodetected. However, if you have multiple Xcode schemes and targets, this value might be necessary.
   * @type {string}
   */
  bundleIdentifier?: string;

  /**
   * The path to your store configuration file.
   * @type {string}
   */
  metadataPath?: string;
};

export type SubmitConfig = {
  android?: AndroidSubmitConfig;
  ios?: IOSSubmitConfig;
};

export type EasConfig = {
  cli?: CliConfig;
  build?: Record<string, BuildConfig>;
  submit?: Record<string, SubmitConfig>;
};

export const defineEasConfig = (config: EasConfig) => config;
