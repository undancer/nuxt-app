import type { RouteLocationNormalized } from 'vue-router'
import { defineNuxtRouteMiddleware } from '#imports'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // eslint-disable-next-line no-console
  console.log(to.name, from.name)
  if (to.params.id === '1') {
    return abortNavigation()
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (to.path !== '/') {
    return navigateTo('/')
  }
})
