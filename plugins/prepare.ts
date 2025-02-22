import type { Plugin } from "@gasket/core";

declare module '@gasket/core' {
  interface GasketConfig {
    prepareData?: {
      message: string;
    }
  }

  interface GasketActions {
    getPrepareData: () => Promise<{
      message: string;
    }>
  }
}

const plugin: Plugin = {
  name: 'prepare',
  actions: {
    getPrepareData: async (gasket) => {
      await gasket.isReady;
      const message = process.env.NEXT_PUBLIC_MESSAGE;
      const prepareData = gasket.config.prepareData;
      return {
        message: `env: ${message}  config: ${prepareData?.message} ${new Date().getTime()}`
      }
    }
  },
  hooks: {
    prepare: async (gasket, config) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      config.prepareData = {
        message: 'Hello, world!'
      }
      Object.assign(process.env, {
        NEXT_PUBLIC_MESSAGE: 'Hello, world!'
      });
      return config;
    }
  }
}

export default plugin;
