# eas-config-ts

A TypeScript-based configuration generator for EAS (Expo Application Services).

## Installation

```bash
pnpm add -D eas-config-ts
```

## Usage

1. Create an `eas.config.ts` file in your project root with your EAS configuration.

```typescript
export default defineEasConfig({
  build: {
    // your config
  },
});
```

2. Run the following command to generate `eas.json`

```bash
npx gen-eas-config
```

test
