import ngPreset from 'jest-preset-angular/presets/index.js';

globalThis.ngJest = {
  skipNgcc: false,
  tsconfig: 'tsconfig-esm.spec.json',
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const jestConfig = {
  ...ngPreset.defaultsESM,
  globals: {
    'ts-jest': {
      ...ngPreset.defaultsESM.globals["ts-jest"],
      tsconfig: '<rootDir>/tsconfig-esm.spec.json',
    },
  },
  globalSetup: 'jest-preset-angular/global-setup.mjs',
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    "^rxjs(/operators)?$": '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
    "^rxjs/testing":
      "<rootDir>node_modules/rxjs/dist/cjs/testing/index.js",
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest-esm.ts'],
}

export default jestConfig;
