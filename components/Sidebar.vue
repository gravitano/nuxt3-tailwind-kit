<script lang="ts" setup>
import IconHome from '~icons/ri/home2-line';
import IconPosts from '~icons/ri/book2-line';
import IconPages from '~icons/ri/book-line';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
  }>(),
  {
    modelValue: false,
  }
);

const { modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(props.modelValue);

watch(
  modelValue,
  (val) => {
    isOpen.value = val;
  },
  { immediate: true }
);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

const menus = ref([
  {
    icon: markRaw(IconHome),
    text: 'Dashboard',
    to: '/',
  },
  {
    text: 'Components',
    icon: markRaw(IconPosts),
    children: [
      {
        text: 'Buttons',
        to: '/docs/components/buttons',
      },
      {
        text: 'Collapsible',
        to: '/docs/components/collapsibles',
      },
      {
        text: 'Card',
        to: '/docs/components/cards',
      },
      {
        text: 'Dropdown',
        to: '/docs/components/dropdowns',
      },
      {
        text: 'Select',
        to: '/docs/components/selects',
      },
      {
        text: 'Autocomplete',
        to: '/docs/components/autocompletes',
      },
      {
        text: 'Forms',
        to: '/docs/components/forms',
      },
      {
        text: 'WindPlus',
        to: '/docs/components/windplus',
      },
    ],
  },
  {
    text: 'Pages',
    icon: markRaw(IconPages),
    children: [
      {
        text: 'Login',
        to: '/auth/login',
      },
      {
        text: 'Register',
        to: '/auth/register',
      },
      {
        text: 'Forgot Password',
        to: '/auth/forgot-password',
      },
      {
        text: 'Reset Password',
        to: '/auth/reset-password',
      },
      {
        text: 'Counter',
        to: '/counter',
      },
      {
        text: 'Content',
        to: '/content',
      },
      {
        text: 'Blog',
        to: '/blog',
      },
    ],
  },
]);
</script>

<template>
  <ModalBackdrop v-if="isOpen" @click="isOpen = false" />

  <aside
    class="px-2 w-10/12 sm:w-[300px] border-r h-screen fixed sm:sticky top-0 border-gray-200 pb-2 bg-white z-10 flex-col transition-all duration-300 transform sm:transform-none"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- nav header -->
    <div
      class="flex justify-between gap-2 items-center px-4 border-b border-gray-200 -mx-2 sm:border-none"
    >
      <nuxt-link
        to="/"
        class="py-5 w-full font-bold text-lg text-indigo-500 flex gap-2 items-center justify-between sm:justify-center"
      >
        <div class="flex gap-2 items-center justify-center">
          Nuxt 3 Tailwind
        </div>
      </nuxt-link>
      <button
        class="i-ri-close-line w-6 h-6 text inline sm:hidden"
        @click="isOpen = false"
      ></button>
    </div>

    <!-- menu -->
    <ul class="flex-grow">
      <SidebarItem v-for="menu in menus" :key="menu.text" :menu="menu" />
    </ul>
  </aside>
</template>

<style scoped></style>
