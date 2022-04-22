<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

useHead({
  title: 'Forgot Password',
});

definePageMeta({
  layout: 'auth',
});

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().email().label('Email'),
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
        <h1 class="text-4xl font-bold">Forgot Password</h1>
        <p class="text-gray-500">Please enter your email</p>
      </div>

      <FormInput name="email" label="Email" placeholder="Email" />

      <v-btn type="submit" color="primary" block size="lg" class="mb-2">
        Submit
      </v-btn>
    </form>
  </div>
</template>

<style scoped></style>
