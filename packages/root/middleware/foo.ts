export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  if (import.meta.server) {
    return
  }
  // skip middleware on client side entirely
  if (import.meta.client) {
    return
  }
  // or only skip middleware on initial client load
  const nuxtApp = useNuxtApp()
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) {
    return
  }
  // eslint-disable-next-line no-console
  console.log(to)
})
