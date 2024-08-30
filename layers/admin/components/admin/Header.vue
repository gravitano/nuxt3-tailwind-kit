<script lang="ts" setup>
import { useAuthStore } from '~~/stores/auth'

defineEmits(['menu:click'])

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/auth/login')
}
</script>

<template>
  <header class="bg-white border-b border-gray-200">
    <div class="pr-6 pl-3 py-3 flex gap-2 items-center justify-between">
      <button
        class="flex-shrink-0 px-4 py-2 rounded inline sm:hidden"
        @click="$emit('menu:click')"
      >
        <Icon name="ri:menu-line" class="w-5 h-5" />
      </button>

      <div class="relative sm:w-3/12">
        <Icon
          name="ri-search-line"
          class="text-gray-400 absolute left-3 w-5 h-5 top-2.5"
        />
        <input
          type="search"
          placeholder="Search"
          class="
            pl-10
            py-2
            appearance-none
            border-none
            focus:border-none
            focus:ring-0
            rounded-lg
            focus:outline-none
            w-full
          "
        >
      </div>

      <VDropdown right>
        <template #activator>
          <VDropdownButton
            v-slot="{ open }"
            as="button"
            type="button"
            class="
              text-gray-600
              hover:bg-gray-200
              hover:text-indigo-500
              px-2
              py-2
              rounded
            "
          >
            <span
              :class="[open ? 'text-indigo-500' : '']"
              class="flex items-center gap-2"
            >
              <Icon name="ri:user-line" class="w-5 h-5" />
              <span class="hidden sm:inline"> {{ auth.user?.name }} </span>
              <Icon
                name="ri:arrow-down-s-line"
                class="i-ri-arrow-down-s-line w-5 h-5"
              />
            </span>
          </VDropdownButton>
        </template>

        <VDropdownItem>Profile</VDropdownItem>
        <VDropdownItem>Setting</VDropdownItem>
        <VDropdownItem divider />
        <VDropdownItem @click="logout">
          Logout
        </VDropdownItem>
      </VDropdown>
    </div>
  </header>
</template>
