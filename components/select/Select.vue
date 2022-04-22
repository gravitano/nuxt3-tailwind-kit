<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import type { SelectItem } from './types';
import CheckIcon from '~icons/ri/check-line';
import SelectorIcon from '~icons/heroicons-outline/selector';

type Props = {
  modelValue: SelectItem;
  items: SelectItem[];
  placeholder?: string;
  hideCheckIcon?: boolean;
  outlined?: boolean;
  large?: boolean;
  small?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  placeholder: 'Choose',
  hideCheckIcon: false,
  outlined: false,
  large: false,
  small: false,
});

const emit = defineEmits(['update:modelValue']);

const { modelValue } = toRefs(props);

const selected = ref<SelectItem | undefined>(modelValue.value);

watch(modelValue, (val) => {
  selected.value = val;
});

watch(selected, (val) => {
  emit('update:modelValue', val);
});
</script>

<template>
  <Listbox v-model="selected" class="w-full">
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full py-2 pl-3 pr-10 text-left rounded-md border border-gray-300 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-primary-300 focus-visible:border-primary-500 transition duration-300"
        :class="[
          outlined
            ? 'bg-transparent border-icon-inverse text-inverse-subdued'
            : 'bg-white',
          small ? 'py-2 text-sm' : '',
          large ? 'py-3' : '',
        ]"
      >
        <span class="block truncate">{{ selected?.text || placeholder }}</span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <SelectorIcon class="w-5 h-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="item in items"
            :key="item.text"
            :value="item"
            as="template"
          >
            <div class="px-1">
              <li v-if="item.divider" class="border-b -mx-1"></li>
              <li
                v-else
                :class="[
                  'cursor-default select-none relative py-2 pr-4 rounded',
                  active ? 'bg-gray-100' : 'text-gray-900',
                  !hideCheckIcon ? 'pl-10' : 'pl-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium text-primary-500' : 'font-normal',
                    'block truncate',
                  ]"
                >
                  {{ item.text }}
                </span>
                <span
                  v-if="selected && !hideCheckIcon"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500"
                >
                  <CheckIcon class="w-5 h-5" aria-hidden="true" />
                </span>
              </li>
            </div>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
