<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

useHead({
  title: 'Forgot Password',
})

definePageMeta({
  layout: 'auth',
})

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().email().label('Email'),
  }),
})

const onSubmit = handleSubmit((values) => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg p-8 w-full max-w-md mx-auto" @submit="onSubmit">
      <AuthHeader title="Forgot Password" subtitle="Please enter your email" />

      <VInput name="email" label="Email" placeholder="Email" />

      <VButton type="submit" color="primary" block>
        Send Password Reset Link
      </VButton>
    </form>
  </div>
</template>
