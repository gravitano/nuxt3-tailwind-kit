<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  email: string;
  phone: string;
  website: string;
  form: {
    title: string;
    description: string;
  };
}>();
</script>

<template>
  <div id="contact" c class="px-4 xl:px-0 py-6 sm:py-20 bg-blue-600">
    <div class="container mx-auto">
      <div class="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20">
        <div class="w-full sm:w-6/12">
          <h3 class="font-semibold text-4xl mb-1 text-white">
            {{ title }}
          </h3>
          <div class="text-blue-300 mb-5 sm:mb-8">
            {{ description }}
          </div>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="flex gap-2 items-center text-white hover:text-blue-300"
              >
                <div
                  class="w-10 h-10 bg-white text-blue-600 rounded-full grid place-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                {{ email }}
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                class="flex gap-2 items-center text-white hover:text-blue-300"
              >
                <div
                  class="w-10 h-10 bg-white text-blue-600 rounded-full grid place-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                {{ phone }}
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                class="flex gap-2 items-center text-white hover:text-blue-300"
              >
                <div
                  class="w-10 h-10 bg-white text-blue-600 rounded-full grid place-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                {{ website }}
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-6/12">
          <div class="space-y-1 sm:mb-8 mb-6">
            <h3 class="font-semibold text-white text-3xl">
              {{ form.title }}
            </h3>
            <p class="text-blue-300 max-w-md">
              {{ form.description }}
            </p>
          </div>

          <form>
            <div class="mb-4">
              <label for="name" class="mb-1 block font-semibold text-white"
                >Name</label
              >
              <input
                class="px-3 py-2 border w-full rounded-md"
                name="name"
                label="Name"
                placeholder="Your name"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="mb-1 block font-semibold text-white"
                >Email</label
              >
              <input
                class="px-3 py-2 border w-full rounded-md"
                name="email"
                label="Email"
                placeholder="Your email"
              />
            </div>
            <div class="mb-4">
              <label for="phone" class="mb-1 block font-semibold text-white"
                >Phone Number</label
              >
              <input
                class="px-3 py-2 border w-full rounded-md"
                type="tel"
                name="phone"
                label="Phone Number"
                placeholder="Your phone number"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="mb-1 block font-semibold text-white"
                >Message</label
              >
              <textarea
                rows="4"
                class="px-3 py-2 border w-full rounded-md"
                name="message"
                label="Message"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="px-6 py-2.5 w-full cursor-pointer rounded-lg transition duration-300 border text-lg bg-white border-white text-blue-600 font-semibold hover:bg-blue-300 hover:border-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
