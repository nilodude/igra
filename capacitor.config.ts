import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'igra',
  webDir: 'www',
  plugins: {
		Keyboard: {
			resize: KeyboardResize.Body,
			style: KeyboardStyle.Dark,
			resizeOnFullScreen: true,
		},
	},
};

export default config;
