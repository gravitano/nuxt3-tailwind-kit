<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg p-8 w-full">
      <div class="mb-4 space-y-1">
        <h1 class="text-4xl font-bold">Login</h1>
        <p class="text-gray-500">Please enter your credentials</p>
      </div>

      <div class="mb-4">
        <label class="block font-semibold mb-1" for="email">Email</label>
        <input
          type="text"
          id="email"
          class="form-input"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-4">
        <label class="block font-semibold mb-1" for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-input"
          placeholder="Enter your password"
        />
      </div>

      <div class="mb-4 flex gap-2 justify-between items-center">
        <label class="block flex gap-2 items-center text-sm">
          <input type="checkbox" class="w-4 h-4" />
          Remember me
        </label>
        <nuxt-link
          to="/auth/forgot-password"
          class="text-blue font-semibold text-sm"
        >
          Forgot Password?
        </nuxt-link>
      </div>

      <button class="btn-primary mb-4 block w-full">Login</button>

      <div class="text-gray-600 text-sm">
        Don't have account?
        <nuxt-link
          to="/auth/forgot-password"
          class="text-blue font-semibold text-sm"
        >
          Register
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
