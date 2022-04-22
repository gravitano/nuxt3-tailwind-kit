<script setup lang="ts">
import EyeIcon from '~icons/ri/eye-line';
import PencilIcon from '~icons/ri/pencil-line';
import TrashIcon from '~icons/ri/delete-bin-line';
import CheckIcon from '~icons/ri/check-line';
import XIcon from '~icons/ri/close-line';
import IconUser from '~icons/ri/user-line';
import IconArrowDown from '~icons/ri/arrow-down-s-line';
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Dropdown" subtitle="Dropdown component" />

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
    <Card title="Custom Button Activator" body-class="flex justify-center">
      <Dropdown right>
        <template #activator>
          <DropdownButton
            as="button"
            type="button"
            class="text-gray-600 hover:bg-gray-200 hover:text-indigo-500 px-2 py-2 rounded"
            v-slot="{ open }"
          >
            <span
              :class="[open ? 'text-indigo-500' : '']"
              class="flex items-center gap-2"
            >
              <IconUser class="i-ri-user-line w-5 h-5" />
              <span class="hidden sm:inline">Admin</span>
              <IconArrowDown class="i-ri-arrow-down-s-line w-5 h-5" />
            </span>
          </DropdownButton>
        </template>

        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Setting</DropdownItem>
        <DropdownItem divider></DropdownItem>
        <DropdownItem>Logout</DropdownItem>
      </Dropdown>
    </Card>
  </div>
</template>

<style scoped></style>
