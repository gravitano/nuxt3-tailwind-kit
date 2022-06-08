<script setup lang="ts">
import { ref, computed, toRefs, watch } from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
  TransitionRoot,
} from '@headlessui/vue';
import { useField } from 'vee-validate';
import CheckIcon from '~icons/heroicons-outline/check';
import ChevronDownIcon from '~icons/heroicons-outline/chevron-down';
import XIcon from '~icons/heroicons-outline/x';

type Item = {
  text: string;
  value: string | number;
};

type Props = {
  modelValue?: Item | string | null;
  searchBy?: string;
  displayText?: string;
  placeholder?: string;
  label?: string;
  items: Item[];
  name?: string;
  rules?: string;
  clearable?: boolean;
  notFoundText?: string;
  noDataText?: string;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  searchBy: 'text',
  displayText: 'text',
  placeholder: 'Search...',
  label: '',
  rules: '',
  items: () => [],
  noDataText: 'No data.',
  notFoundText: 'Nothing found.',
});

const emit = defineEmits(['update:modelValue', 'update:query']);

const { modelValue, searchBy, items, name, rules } = toRefs(props);
const { value: selected, errorMessage } = useField(name, rules, {
  initialValue: modelValue.value,
});
const query = ref('');

watch(modelValue, (val) => {
  selected.value = val;
});

watch(selected, (val) => {
  emit('update:modelValue', val);
});

watch(query, (val) => {
  emit('update:query', val);

  if (val === '') {
    selected.value = '';
  }
});

const filteredItems = computed(() =>
  query.value === ''
    ? items.value
    : items.value.filter((item) =>
        item[searchBy.value]
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
);

const clear = () => {
  selected.value = '';
  query.value = '';
};
</script>

<template>
  <Combobox v-model="selected" class="mb-4" as="div">
    <ComboboxLabel v-if="label" class="mb-2 font-medium">
      {{ label }}
    </ComboboxLabel>
    <div class="relative mt-1">
      <div
        class="relative w-full text-left bg-white border border-gray-300 rounded cursor-default focus:outline-none focus-within:ring focus-within:ring-primary-500 focus-within:border-primary-500 focus-within:ring-opacity-50 sm:text-sm overflow-hidden transition duration-300"
      >
        <ComboboxInput
          class="w-full border-none focus:ring-0 py-3 pl-3 pr-20 leading-5 text-gray-600"
          :display-value="(item) => item[displayText] || ''"
          :placeholder="placeholder"
          @change="query = $event.target.value"
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-4">
          <button
            v-if="clearable"
            type="button"
            class="mr-1 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-full p-1 transition duration-300"
            @click="clear"
          >
            <XIcon class="w-6 h-6" aria-hidden="true" />
          </button>
          <ComboboxButton>
            <ChevronDownIcon class="w-6 h-6 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </div>
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leave-from="opacity-100"
        leave-to="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions
          class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <div
            v-if="filteredItems.length === 0 && query === ''"
            class="cursor-default select-none relative py-2 px-4 text-gray-700"
          >
            {{ noDataText }}
          </div>

          <div
            v-if="filteredItems.length === 0 && query !== ''"
            class="cursor-default select-none relative py-2 px-4 text-gray-700"
          >
            {{ notFoundText }}
          </div>

          <ComboboxOption
            v-for="(item, idx) in filteredItems"
            :key="idx"
            v-slot="{ selected, active }"
            as="template"
            :value="item"
          >
            <li
              class="cursor-default select-none relative py-2 pl-10 pr-4"
              :class="{
                'bg-gray-100': active,
                'text-gray-900': !active,
              }"
            >
              <span
                class="block truncate"
                :class="{
                  'font-medium text-primary-500': selected,
                  'font-normal': !selected,
                }"
              >
                {{ item[displayText] }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500"
              >
                <CheckIcon class="w-5 h-5" aria-hidden="true" />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
  <div class="text-error text-sm mt-1">{{ errorMessage }}</div>
</template>
