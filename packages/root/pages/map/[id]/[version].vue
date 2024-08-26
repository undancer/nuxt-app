<script setup lang="ts">
import {
  // defineOptions,
  definePageMeta,
  useRoute,
} from '#imports'
import { withQuery } from '~/utils/withQuery'
// import { NuxtPage } from '#components'

// defineOptions({
//   components: {
//     NuxtPage,
//   },
// })

// const default_center = '100,100'
// const default_zoom = 10

definePageMeta({
  middleware: [
    withQuery({ center: '100,100', zoom: 10 }),
  ],
})

const route = useRoute()
const { id, version } = route.params

const center: string = 'x,y' // [x, y].join(',')
const zoom = 1
</script>

<template>
  map version
  {{ id }} , {{ version }}
  {{ center }}, {{ zoom }}

  <client-only>
    <IMap />
  </client-only>
</template>

<style scoped lang="scss">

</style>
