import type { StorybookConfig } from "@storybook/nextjs-vite";
import { join, dirname } from "path";
import path from "path";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest")
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {}
  },
  staticDirs: ["../public"],
  
  async viteFinal(config) {
    // Add path aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sume/ui': path.resolve(__dirname, '../../packages/ui/src'),
    };

    // Fix Node.js modules resolution for browser
    config.define = {
      ...config.define,
      global: 'globalThis',
    };

    // Configure optimized dependencies
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['@sume/ui'],
    };

    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
