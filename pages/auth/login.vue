<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg p-8 w-full max-w-md mx-auto">
      <div class="mb-4 space-y-1">
        <h1 class="text-4xl font-bold">Login</h1>
        <p class="text-gray-500">Please enter your credentials</p>
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-1 text-gray-700" for="email"
          >Email</label
        >
        <input
          type="text"
          id="email"
          class="px-4 py-3 rounded-lg border-gray-400 w-full focus:ring focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500 transition duration-300"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-4">
        <label class="block font-medium mb-1 text-gray-700" for="password"
          >Password</label
        >
        <input
          type="password"
          id="password"
          class="px-4 py-3 rounded-lg border-gray-400 w-full focus:ring focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500 transition duration-300"
          placeholder="Enter your password"
        />
      </div>

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

      <button
        class="rounded-lg px-4 py-3 mb-4 font-semibold inline-flex w-full items-center justify-center bg-primary-500 text-white border-primary-500 focus:ring focus:ring-primary-500 focus:ring-offset-1 transition duration-300 hover:bg-primary-600 hover:border-primary-600"
      >
        Login
      </button>

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
