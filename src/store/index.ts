import loginStore from './login'

export default function Store() {
  return {
    login: loginStore()
  }
}
