import { defineNuxtRouteMiddleware, navigateTo } from '#imports'

export function withQuery(defaults) {
  return defineNuxtRouteMiddleware((to) => {
    let edited: boolean = false
    const { query } = to
    Object.entries(defaults).forEach(([key, value]) => {
      if (query[key] === undefined) {
        query[key] = value
        edited = true
      }
    })
    if (edited) {
      return navigateTo({ ...to, query })
    }
  })
}
