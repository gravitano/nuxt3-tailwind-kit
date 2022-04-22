<script setup lang="ts">
import EyeIcon from '~icons/ri/eye-line';
import PencilIcon from '~icons/ri/pencil-line';
import TrashIcon from '~icons/ri/delete-bin-line';
import CheckIcon from '~icons/ri/check-line';
import XIcon from '~icons/ri/close-line';
</script>

<template>
  <div class="space-y-5">
    <Card title="Default">
      <Dropdown label="Dropdown">
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
        <DropdownItem>Item 4</DropdownItem>
        <DropdownItem>Item 5</DropdownItem>
      </Dropdown>
    </Card>

    <Card title="Divider">
      <Dropdown label="Dropdown">
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Item 4</DropdownItem>
        <DropdownItem>Item 5</DropdownItem>
      </Dropdown>
    </Card>
    <Card title="Icon">
      <Dropdown label="Dropdown">
        <DropdownItem :icon="EyeIcon">View</DropdownItem>
        <DropdownItem divider />
        <DropdownItem :icon="PencilIcon">Edit</DropdownItem>
        <DropdownItem :icon="TrashIcon">Delete</DropdownItem>
        <DropdownItem divider />
        <DropdownItem :icon="CheckIcon">Approve</DropdownItem>
        <DropdownItem :icon="XIcon">Reject</DropdownItem>
      </Dropdown>
    </Card>
    <Card title="Right" body-class="flex justify-center">
      <Dropdown label="Dropdown" right>
        <DropdownItem :icon="EyeIcon">View</DropdownItem>
        <DropdownItem divider />
        <DropdownItem :icon="PencilIcon">Edit</DropdownItem>
        <DropdownItem :icon="TrashIcon">Delete</DropdownItem>
        <DropdownItem divider />
        <DropdownItem :icon="CheckIcon">Approve</DropdownItem>
        <DropdownItem :icon="XIcon">Reject</DropdownItem>
      </Dropdown>
    </Card>
  </div>
</template>

<style scoped></style>
