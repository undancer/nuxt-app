<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'
import { onMounted } from 'vue-demi'
import { NuxtLayout } from '#components'
import { definePageMeta, useAppConfig, useRoute, useRouter } from '#imports'
// import { definePageMeta } from '#app'

definePageMeta({
  name: 'main',
  middleware: [
    function (to: RouteLocationNormalized) {
      // eslint-disable-next-line no-console
      console.log(to.name)
    },
    'my-middleware',
  ],
})

const config = useAppConfig()
const router = useRouter()
const route = useRoute()

const theme = `theme-${config.theme.name}-default`

onMounted(() => {

})
</script>

<template>
  <div>
    {{ router }}
    {{ route }}
    <NuxtLayout :name="theme" />
  </div>
</template>
