import { defineAppConfig } from '#imports'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    // myLayer?: {
    //   /** Project name */
    //   name?: string
    // }
  }
}

export default defineAppConfig({
  foo: 'bar',
  theme: {
    name: 'foo',
  },
})
