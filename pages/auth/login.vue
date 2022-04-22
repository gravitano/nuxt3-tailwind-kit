<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

useHead({
  title: 'Login',
});

definePageMeta({
  layout: 'auth',
});

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().label('Email'),
    password: string().required().label('Password'),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg p-8 w-full max-w-md mx-auto" @submit="onSubmit">
      <div class="mb-4 space-y-1">
        <h1 class="text-4xl font-bold">Login</h1>
        <p class="text-gray-500">Please enter your credentials</p>
      </div>

      <FormInput name="email" label="Email" placeholder="Email" />
      <FormInput name="password" label="Password" placeholder="Password" />

      <div class="mb-4 flex gap-2 justify-between items-center">
        <label class="flex gap-2 items-center text-sm">
          <input
            type="checkbox"
            class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"
          />
          Remember me
        </label>
        <nuxt-link
          to="/auth/forgot-password"
          class="text-primary-500 hover:underline font-semibold text-sm"
        >
          Forgot Password?
        </nuxt-link>
      </div>

      <v-btn type="submit" color="primary" block size="lg" class="mb-2">
        Login
      </v-btn>

      <!-- <button
        class="px-3 py-2.5 rounded-md mb-4 font-semibold inline-flex w-full items-center justify-center bg-primary-500 text-white border-primary-500 focus:ring focus:ring-primary-500 focus:ring-offset-1 transition duration-300 hover:bg-primary-600 hover:border-primary-600"
      >
        Login
      </button> -->

      <div class="text-gray-600 text-sm">
        Don't have account?
        <nuxt-link
          to="/auth/forgot-password"
          class="text-primary-500 hover:underline font-semibold text-sm"
        >
          Register
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
