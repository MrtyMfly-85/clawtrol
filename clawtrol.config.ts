import type { ClawtrolConfig } from './src/lib/config';

const config: ClawtrolConfig = {
  title: 'Clawtrol Center',

  modules: [
    'overview',
    'screen',
    'terminal',
    'files',
    'sessions',
    'tasks',
    'memory',
    'cron',
    'logs',
    'network',
    'subagents',
  ],

  theme: {
    preset: 'nova',
    mode: 'dark',
    accent: '#3b82f6',
  },

  openclaw: {
    gatewayPort: 18789,
    workspace: '/Users/mrtymfly85/.openclaw/workspace',
  },

  port: 4781,
};

export default config;
