import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'datetime-bug-repro',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
