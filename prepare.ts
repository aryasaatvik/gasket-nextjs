import { Plugin } from "@gasket/core";

declare module '@gasket/core' {
  interface GasketConfig {
    prepareData: {
      message: string;
    }
  }
}

const plugin: Plugin = {
  name: 'prepare',
  hooks: {
    prepare: async (gasket, config) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      config.prepareData = {
        message: 'Hello, world!',
      }
      return config;
    }
  }
}

export default plugin;
