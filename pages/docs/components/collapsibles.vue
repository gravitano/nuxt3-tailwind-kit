<script setup lang="ts">
const items = ref([
  {
    title: 'Item 1',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita
      et veniam odio non. Facilis fugit qui error, optio pariatur provident
      vitae sint, possimus illo consequatur dignissimos velit quaerat voluptas!`,
  },
  {
    title: 'Item 2',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita
      et veniam odio non. Facilis fugit qui error, optio pariatur provident
      vitae sint, possimus illo consequatur dignissimos velit quaerat voluptas!`,
  },
]);
const items2 = ref([
  {
    title: 'Item 1',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita
      et veniam odio non. Facilis fugit qui error, optio pariatur provident
      vitae sint, possimus illo consequatur dignissimos velit quaerat voluptas!`,
  },
  {
    title: 'Item 2',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita
      et veniam odio non. Facilis fugit qui error, optio pariatur provident
      vitae sint, possimus illo consequatur dignissimos velit quaerat voluptas!`,
  },
]);
</script>

<template>
  <div>
    <Collapsible title="Collapse">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita
      et veniam odio non. Facilis fugit qui error, optio pariatur provident
      vitae sint, possimus illo consequatur dignissimos velit quaerat voluptas!
    </Collapsible>

    <CollapsibleGroup :items="items" />

    <CollapsibleGroup :items="items2" accordion />

    <CollapsibleGroup>
      <Collapsible title="Collapse 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        expedita et veniam odio non. Facilis fugit qui error, optio pariatur
        provident vitae sint, possimus illo consequatur dignissimos velit
        quaerat voluptas!
      </Collapsible>
      <Collapsible title="Collapse 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        expedita et veniam odio non. Facilis fugit qui error, optio pariatur
        provident vitae sint, possimus illo consequatur dignissimos velit
        quaerat voluptas!
      </Collapsible>
    </CollapsibleGroup>
  </div>
</template>

<style scoped></style>
