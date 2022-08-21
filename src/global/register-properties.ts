import { App } from 'vue'

export function registerPropties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return new Date(value).toJSON().substring(0, 10)
    }
  }
}
