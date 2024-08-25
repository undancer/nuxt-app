<script lang="ts" setup>
import { defineProps } from 'vue-demi'

interface Props {
  x: number
  y: number
  z: number
}

const {
  x,
  y,
  z,
} = withDefaults(defineProps<Props>(), {
  x: 1,
  y: 1,
  z: 1,
})
</script>

<template>
  <h3>default layout</h3>
  <p>x:{{ x }} y:{{ y }} z:{{ z }}</p>
</template>

<style lang="scss" scoped>
</style>
