import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-component-library',
  outputTargets: [
    reactOutputTarget({
      outDir: '../stencil-react-component-library/src/app',
      hydrateModule: '@demo/stencil-component-library/hydrate',
      esModules: true
    }),
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
  testing: {
    browserHeadless: "shell",
  },
};
