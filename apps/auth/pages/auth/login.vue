<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { useAuthStore } from '~~/stores/auth'

useHead({
  title: 'Login',
})

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
  }),
})

const auth = useAuthStore()
const router = useRouter()
const error = ref()
const route = useRoute()

const { store } = useAuthStorage()

const onSubmit = handleSubmit(async (values) => {
  const { data, error: err } = await useFetch('/api/auth/login', {
    method: 'post',
    body: values,
  })

  const token = data.value.data.token
  const user = data.value.data.user

  store(token, user)

  auth.user = user
  auth.loggedIn = true

  if (!err.value && !data.value.error)
    router.push((route.query as any).next || '/')
  else
    error.value = err.value || data.value.error?.message
})
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg px-10 py-8 w-full max-w-md mx-auto" @submit="onSubmit">
      <AuthHeader title="Login" subtitle="Please enter your credentials" />

      <div v-if="error" class="alert alert-error mb-4">
        {{ error }}
      </div>

      <VInput name="email" label="Email" placeholder="Email" />
      <VInput name="password" label="Password" placeholder="Password" type="password" />

      <div class="mb-5 flex gap-2 justify-between items-center">
        <label class="flex gap-2 items-center text-sm">
          <input
            type="checkbox"
            class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"
          >
          Remember me
        </label>
        <nuxt-link to="/auth/forgot-password" class="text-primary-500 hover:underline font-semibold text-sm">
          Forgot Password?
        </nuxt-link>
      </div>

      <VButton type="submit" color="primary" block class="mb-5">
        Login
      </VButton>

      <!-- <button
        class="px-3 py-2.5 rounded-md mb-4 font-semibold inline-flex w-full items-center justify-center bg-primary-500 text-white border-primary-500 focus:ring focus:ring-primary-500 focus:ring-offset-1 transition duration-300 hover:bg-primary-600 hover:border-primary-600"
      >
        Login
      </button> -->

      <div class="text-gray-600 text-sm">
        Don't have account?
        <nuxt-link to="/auth/register" class="text-primary-500 hover:underline font-semibold text-sm">
          Register
        </nuxt-link>
      </div>
    </form>
  </div>
</template>
