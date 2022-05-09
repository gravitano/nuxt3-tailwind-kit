<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold mb-4 text-center">Counter</h1>
    <h3 class="text-4xl font-semibold text-center mb-5">{{ counter.count }}</h3>
    <div class="space-x-4 text-center">
      <button class="btn btn-primary btn-icon" @click="counter.decrement">
        -
      </button>
      <button class="btn btn-secondary btn-icon" @click="counter.increment">
        +
      </button>
    </div>
  </div>
</template>
