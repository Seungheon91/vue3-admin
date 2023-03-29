<script setup>
import { useStyleStore } from '@/stores/style.js'
import { gradientBgBase, gradientBgDark } from '@/colors'
import { computed } from 'vue'

const props = defineProps({
  bg: {
    type: String,
    required: true
  }
})

const colorClass = computed(() => {
  if (useStyleStore().darkMode) {
    return gradientBgDark
  }

  switch (props.bg) {
    case 'base':
      return gradientBgBase
  }

  return ''
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center" :class="colorClass">
    <slot card-class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl" />
  </div>
</template>