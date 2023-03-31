<script setup>
import { reactive } from 'vue'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import SectionFullScreen from '@/components/section/SectionFullScreen.vue'
import CardBox from '@/components/card/CardBox.vue'
import FormCheckRadio from '@/components/form/FormCheckRadio.vue'
import FormField from '@/components/form/FormField.vue'
import FormControl from '@/components/form/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import { useRouter } from 'vue-router'

const form = reactive({
  name: 'admin',
  password: '1111111',
  remember: true
})

const router = useRouter()

const submit = () => {
  router.push('/')
}
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="base">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="login" help="Please enter your login">
          <FormControl v-model="form.name" :icon="mdiAccount" name="name" autocomplete="username" />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Remember"
          :input-value="true"
        />

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>