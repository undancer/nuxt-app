<script setup lang="ts">
import { definePageMeta, queryContent } from '#imports'

definePageMeta({
  redirect: {
    path: '/map/2/version',
  },
})

const { data, status } = await useAsyncData('', () => {
  return queryContent('')
    .where({})
    .findOne()
})
</script>

<template>
  {{ data }}
  {{ status }}
  <no-script>
    ???
  </no-script>
</template>
