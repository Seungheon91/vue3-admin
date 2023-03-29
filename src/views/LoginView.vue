<script setup>
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import SectionFullScreen from '@/components/section/SectionFullScreen.vue'
import CardBox from '@/components/card/CardBox.vue'
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="base">
      <CardBox :class="cardClass" is-form @submit.prevent="submit"> </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>