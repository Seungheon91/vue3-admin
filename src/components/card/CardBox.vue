<script setup>
import { computed, useSlots } from 'vue'
import CardBoxBody from '@/components/card/CardBoxBody.vue'
import CardBoxFooter from '@/components/card/CardBoxFooter.vue'

const props = defineProps({
  rounded: {
    type: String,
    default: 'rounded-2xl'
  },
  flex: {
    type: String,
    default: 'flex-col'
  },
  hasComponentLayout: Boolean,
  hasTable: Boolean,
  isForm: Boolean,
  isHoverable: Boolean,
  isModal: Boolean
})

const emit = defineEmits(['submit'])

const slots = useSlots()

const hasFooterSlot = computed(() => slots.footer && !!slots.footer())

const componentClass = computed(() => {
  const base = [
    props.rounded,
    props.flex,
    props.isModal ? 'dark:bg-slate-900' : 'dark:bg-slate-900/70'
  ]

  if (props.isHoverable) {
    base.push('hover:shadow-lg transition-shadow duration-500')
  }

  return base
})

const submit = (event) => {
  emit('submit', event)
}
</script>

<template>
  <component
    :is="isForm ? 'form' : 'div'"
    :class="componentClass"
    class="bg-white flex"
    @submit="submit"
  >
    <slot v-if="hasComponentLayout" />
    <template v-else>
      <CardBoxBody :no-padding="hasTable">
        <slot />
      </CardBoxBody>
      <CardBoxFooter v-if="hasFooterSlot">
        <slot name="footer" />
      </CardBoxFooter>
    </template>
  </component>
</template>