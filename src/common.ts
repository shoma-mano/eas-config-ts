export type CommonConfig = {
    withoutCredentials?: boolean;
    extends?: string;
    credentialsSource?: 'local' | 'remote';
    releaseChannel?: string;
    channel?: string;
    distribution?: 'store' | 'internal';
    developmentClient?: boolean;
    resourceClass?: 'default' | 'medium' | 'large';
    prebuildCommand?: string;
    buildArtifactPaths?: string[];
    node?: string;
    yarn?: string;
    pnpm?: string;
    bun?: string;
    expoCli?: string;
    env?: Record<string, string>;
    autoIncrement?: boolean;
    cache?: {
      disabled?: boolean;
      key?: string;
      paths?: string[];
    };
    config?: string;
  };
  