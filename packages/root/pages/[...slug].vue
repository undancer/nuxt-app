<script setup lang="ts">
import { onMounted } from 'vue-demi'
import { NuxtLayout } from '#components'
import { definePageMeta, useAppConfig, useRoute, useRouter } from '#imports'
// import { definePageMeta } from '#app'

definePageMeta({
  name: 'main',
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
    page
    theme: {{ theme }}
    {{ router }}
    {{ route }}
    <NuxtLayout />
  </div>
</template>
