<script setup lang="ts">
const genItems = (max = 5) =>
  Array.from({ length: max }, (v, k) => ({
    title: `Item ${k + 1}`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita
      et veniam odio non. Facilis fugit qui error, optio pariatur provident
      vitae sint, possimus illo consequatur dignissimos velit quaerat voluptas!`,
  }));
const items = ref(genItems());
const items2 = ref(genItems());
</script>

<template>
  <div class="space-y-5">
    <PageHeader
      title="Collapsible"
      subtitle="Collapsible and Accordion component"
    />

    <Card title="Default">
      <Collapsible title="Collapse">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        expedita et veniam odio non. Facilis fugit qui error, optio pariatur
        provident vitae sint, possimus illo consequatur dignissimos velit
        quaerat voluptas!
      </Collapsible>
    </Card>

    <Card title="Items Prop">
      <CollapsibleGroup :items="items" />
    </Card>

    <Card title="Accordion">
      <CollapsibleGroup :items="items2" accordion />
    </Card>

    <Card title="Collapsible Group">
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
    </Card>
  </div>
</template>

<style scoped></style>
