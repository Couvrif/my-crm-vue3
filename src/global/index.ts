import { App } from 'vue'
import { registerPropties } from './register-properties'

export function globalRegister(app: App) {
  app.use(registerPropties)
}
