<script setup lang="ts">
//
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="WindPlus" subtitle="WindPlus Components" />

    <Card title="Alert">
      <div class="alert alert-primary">Hello World</div>
      <div class="alert alert-secondary">Hello World</div>
    </Card>

    <Card title="Button">
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
    </Card>

    <Card title="Input Group">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group input-group-inner mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input
          type="text"
          class="form-control pl-10"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </div>
    </Card>

    <Card title="Nav">
      <ul class="nav nav-tabs-alt">
        <li>
          <a href="#" class="nav-item active">Item 1</a>
        </li>
        <li>
          <a href="#" class="nav-item">Item 1</a>
        </li>
        <li>
          <a href="#" class="nav-item">Item 1</a>
        </li>
      </ul>
    </Card>
  </div>
</template>

<style scoped></style>
