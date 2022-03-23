import path from 'path';

export interface AppConfig {
  configFilePath: string;
  app: {
    window: {
      sizeLocked: boolean;
      maximizable: boolean;
      minimizable: boolean;
      alwaysOnTop: boolean;
      allowMultipleWindow: boolean;
      size: number[];
    };
  };
  project: {
    defaultName: string;
    autoSave: boolean;
    autoSaveInterval: number;
  };
  codeGeneration: {
    html: {
      minified: boolean;
    };
  };
}

const AppDefaultConfig: AppConfig = {
  app: {
    window: {
      allowMultipleWindow: false,
      alwaysOnTop: false,
      maximizable: false,
      minimizable: false,
      size: [800, 600],
      sizeLocked: false,
    },
  },
  codeGeneration: { html: { minified: false } },
  configFilePath: path.join(process.cwd(), 'config.json'),
  project: { autoSave: false, autoSaveInterval: 0, defaultName: '' },
};

export default AppDefaultConfig;
