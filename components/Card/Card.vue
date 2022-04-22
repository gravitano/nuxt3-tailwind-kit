<script setup lang="ts">
type Classes = {
  wrapper?: string;
  header?: string;
  body?: string;
  footer?: string;
};

const props = withDefaults(
  defineProps<{
    title?: string;
    body?: string;
    bordered?: boolean;
    classes?: Classes;
    hideHeader?: boolean;
    hideFooter?: boolean;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
  }>(),
  {
    bordered: false,
    classes: () => ({
      wrapper: 'border border-gray-200 rounded-lg bg-white',
      header: '',
      body: '',
      footer: '',
    }),
  }
);
</script>

<template>
  <div :class="classes.wrapper">
    <CardHeader
      v-if="!hideHeader"
      :title="title"
      :bordered="bordered"
      :class="[classes.header, headerClass]"
    />
    <CardBody :class="[classes.body, bodyClass]" :bordered="bordered">
      <slot />
    </CardBody>
    <CardFooter
      v-if="!hideFooter"
      :class="[classes.footer, footerClass]"
      :bordered="bordered"
    />
  </div>
</template>

<style scoped></style>
