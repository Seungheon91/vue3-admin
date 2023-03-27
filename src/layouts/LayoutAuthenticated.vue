<script setup>
import { ref } from 'vue'
import { useStyleStore } from '@/stores/style.js'
import menuNavBar from '@/menuNavBar.js'
import NavBar from '@/layouts/NavBar.vue'

const layoutAsidePadding = 'xl:pl-60'
const styleStore = useStyleStore()

const isAsideMobileExpanded = ref(false)

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode()
  }
}

console.log(menuNavBar)
</script>

<template>
  <div
    :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded
    }"
  >
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-positionlg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
        @menu-click="menuClick"
      />
    </div>
  </div>
</template>
