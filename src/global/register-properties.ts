import { App } from "vue";
import mitt from "mitt";

export function registerPropties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return new Date(value).toJSON().substring(0, 10);
    },
  };
}

export function registerMitt(app: App) {
  const Mitt = mitt();
  app.config.globalProperties.$Bus = Mitt;
}
