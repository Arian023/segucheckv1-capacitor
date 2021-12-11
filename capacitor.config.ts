import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.segucheck.app',
  appName: 'SeguCheck',
  webDir: 'build',
  bundledWebRuntime: false,
  "server": {
    "url": "http://10.0.2.2:3000",
    "cleartext": true
  }
};

export default config;
