/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
import vuetify from './vuetify';
import pinia from './pinia';
import type { App } from 'vue';

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(pinia);
}
