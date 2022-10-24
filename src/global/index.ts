import { App } from "vue";
import { registerPropties, registerMitt } from "./register-properties";

export function globalRegister(app: App) {
  app.use(registerPropties);
  app.use(registerMitt);
}
