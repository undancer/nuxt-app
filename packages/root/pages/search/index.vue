<script setup lang="ts">
const { data } = await useAsyncData('map', () => {
  return queryContent('/map').where({ _type: 'yaml' }).find()
})
</script>

<template>
  search
  {{ data }}
</template>

<style scoped lang="scss">

</style>
