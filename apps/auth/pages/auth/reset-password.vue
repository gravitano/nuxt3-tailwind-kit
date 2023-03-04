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
    password: string().required().label('Password'),
    passwordConfirmation: string().required().label('Password Confirmation'),
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
      <AuthHeader
        title="Reset Password"
        subtitle="Please enter your new password"
      />

      <VInput name="email" label="Email" placeholder="Email" />
      <VInput name="password" label="Password" placeholder="Password" />
      <VInput
        name="passwordConfirmation"
        label="Password Confirmation"
        placeholder="Password Confirmation"
      />

      <VButton type="submit" color="primary" block>
        Submit
      </VButton>
    </form>
  </div>
</template>
