<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'
import { onMounted } from 'vue-demi'
import { ContentRenderer, NuxtLayout } from '#components'
import { definePageMeta, useAppConfig, useAsyncData, useRoute, useRouter } from '#imports'
// import { definePageMeta } from '#app'

definePageMeta({
  name: 'main',
  middleware: [
    function (to: RouteLocationNormalized) {
      // eslint-disable-next-line no-console
      console.log(to.name)
    },
    // 'my-middleware',
  ],
})

const config = useAppConfig()
const router = useRouter()
const route = useRoute()

const {
  x = 1,
  y = 1,
  z = 1,
} = route.params

const theme = `theme-${config.theme.name}-default`

const { data, status } = await useAsyncData('foo', () => {
  const { path: _path } = route
  return queryContent('').where({ _path }).findOne()
})

onMounted(() => {

})
</script>

<template>
  <div>
    <p>{{ router.getRoutes().length }}</p>
    <ContentRenderer
      v-if="status === 'success'"
      :value="data"
    />
    <NuxtLayout :name="theme" :x="x" :y="y" :z="z" />
  </div>
</template>
