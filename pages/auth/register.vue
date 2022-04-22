<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

useHead({
  title: 'Register',
});

definePageMeta({
  layout: 'auth',
});

const { handleSubmit } = useForm({
  validationSchema: object({
    name: string().required().label('Name'),
    email: string().required().email().label('Email'),
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
        <h1 class="text-4xl font-bold">Register</h1>
        <p class="text-gray-500">Please enter your credentials</p>
      </div>

      <FormInput name="name" label="Name" placeholder="Name" />
      <FormInput name="email" label="Email" placeholder="Email" />
      <FormInput
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />

      <div class="mb-4 flex gap-2 justify-between items-center">
        <label class="flex flex-wrap gap-2 items-center text-sm">
          <input
            type="checkbox"
            class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"
          />

          <span> I agree with </span>
          <nuxt-link
            to="/toc"
            class="text-primary-500 hover:underline font-semibold text-sm inline"
          >
            Terms and Condition
          </nuxt-link>
        </label>
      </div>

      <v-btn type="submit" color="primary" block size="lg" class="mb-2">
        Login
      </v-btn>

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

<style scoped></style>
