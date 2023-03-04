<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

useHead({
  title: 'Register',
})

definePageMeta({
  layout: 'auth',
})

const { handleSubmit } = useForm({
  validationSchema: object({
    name: string().required().label('Name'),
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
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
      <AuthHeader title="Register" subtitle="Please enter your credentials" />

      <VInput name="name" label="Name" placeholder="Name" />
      <VInput name="email" label="Email" placeholder="Email" />
      <VInput
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />

      <div class="mb-5 flex gap-2 justify-between items-center">
        <label class="flex flex-wrap gap-2 items-center text-sm">
          <input
            type="checkbox"
            class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"
          >

          <span> I agree with </span>
          <nuxt-link
            to="/toc"
            class="text-primary-500 hover:underline font-semibold text-sm inline"
          >
            Terms and Condition
          </nuxt-link>
        </label>
      </div>

      <VButton type="submit" color="primary" block class="mb-5">
        Register
      </VButton>

      <div class="text-gray-600 text-sm">
        Already have an account?
        <nuxt-link
          to="/auth/login"
          class="text-primary-500 hover:underline font-semibold text-sm"
        >
          Login
        </nuxt-link>
      </div>
    </form>
  </div>
</template>
