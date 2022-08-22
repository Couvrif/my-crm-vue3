import Store from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const login = Store()
  const permissions = login.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return Boolean(permissions.find((item) => item === verifyPermission))
}
