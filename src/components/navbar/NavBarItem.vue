<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useStyleStore } from '@/stores/style.js'
import { useMainStore } from '@/stores/main.js'
import { mdiChevronUp, mdiChevronDown } from '@mdi/js'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import NavbarMenuList from '@/components/navbar/NavbarMenuList.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['menu-click'])

const is = computed(() => {
  if (props.item.href) {
    return 'a'
  }

  if (props.item.to) {
    return RouterLink
  }

  return 'div'
})

const isDropdownActive = ref(false)

const styleStore = useStyleStore()

const componentClass = computed(() => {
  const base = [
    isDropdownActive.value
      ? `${styleStore.navBarItemLabelActiveColorStyle} dark:text-slate-400`
      : `${styleStore.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${styleStore.navBarItemLabelHoverStyle}`,
    props.item.menu ? 'lg:py-2 lg:px-3' : 'py-2 px-3'
  ]

  if (props.item.isDesktopNoLabel) {
    base.push('lg:w-16', 'lg:justify-center')
  }

  return base
})

const itemLabel = computed(() =>
  props.item.isCurrentUser ? useMainStore().userName : props.item.label
)

const menuClick = (event) => {
  emit('menu-click', event, props.item)

  if (props.item.menu) {
    isDropdownActive.value = !isDropdownActive.value
  }
}

const menuClickDropdown = (event, item) => {
  emit('menu-click', event, item)
}

const root = ref(null)

const forceClose = (event) => {
  if (root.value && !root.value.contains(event.target)) {
    isDropdownActive.value = false
  }
}

onMounted(() => {
  if (props.item.menu) {
    window.addEventListener('click', forceClose)
  }
})

onBeforeMount(() => {
  if (props.item.menu) {
    window.removeEventListener('click', forceClose)
  }
})
</script>

<template>
  <BaseDivider v-if="props.item.isDivider" nav-bar />
  <component
    :is="is"
    v-else
    ref="root"
    class="block lg:flex items-center relative cursor-pointer"
    :class="componentClass"
    :to="item.to ?? null"
    :href="item.href ?? null"
    :target="item.target ?? null"
    @click="menuClick"
  >
    <div
      class="flex items-center"
      :class="{
        'bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0':
          props.item.menu
      }"
    >
      <BaseIcon
        v-if="props.item.icon"
        :path="props.item.icon"
        class="transition-colors"
        :size="24"
      />
      <span
        class="px-2 transition-colors"
        :class="{ 'lg:hidden': props.item.isDesktopNoLabel && props.item.icon }"
      >
        {{ itemLabel }}
      </span>
      <BaseIcon
        v-if="props.item.menu"
        :path="isDropdownActive ? mdiChevronUp : mdiChevronDown"
        :size="24"
        class="hidden lg:inline-flex transition-colors"
      />
    </div>
    <div
      v-if="props.item.menu"
      class="text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"
      :class="{ 'lg:hidden': !isDropdownActive }"
    >
      <NavbarMenuList :menu="props.item.menu" @menu-click="menuClickDropdown" />
    </div>
  </component>
</template>