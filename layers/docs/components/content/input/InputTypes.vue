<script setup lang="ts">
const types = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'date',
  'time',
  'datetime-local',
  'month',
  'week',
  'color',
  'file',
  'range',
]

const form = reactive({
  'text': '',
  'password': '',
  'email': '',
  'number': 0,
  'url': '',
  'tel': '',
  'search': '',
  'date': '',
  'time': '',
  'datetime-local': '',
  'month': '',
  'week': '',
  'color': '',
  'file': '',
  'range': 0,
})
</script>

<template>
  <VInput
    v-for="type in types"
    :key="type"
    v-model="form[type]"
    :type="type"
    :label="type"
    placeholder="This is placeholder"
    wrapper-class="mb-4"
  />
  <pre class="mt-4">Values: {{ form }}</pre>
</template>
