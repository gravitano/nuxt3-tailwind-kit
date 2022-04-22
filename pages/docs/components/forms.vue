<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

const { handleSubmit } = useForm({
  validationSchema: object({
    name: string().required().label('Name'),
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Form" subtitle="Form component" />

    <Card title="Default" footer-class="flex gap-2">
      <FormInput name="name" label="Name" placeholder="Name" />
      <FormInput name="email" label="Email" placeholder="Email" />
      <FormInput
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />

      <template #footer>
        <v-btn type="submit" color="primary">Submit</v-btn>
        <v-btn text>Cancel</v-btn>
      </template>
    </Card>

    <form @submit="onSubmit">
      <Card title="Validation" footer-class="flex gap-2">
        <FormInput name="name" label="Name" placeholder="Name" />
        <FormInput name="email" label="Email" placeholder="Email" />
        <FormInput
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />

        <template #footer>
          <v-btn type="submit" color="primary">Submit</v-btn>
          <v-btn text>Cancel</v-btn>
        </template>
      </Card>
    </form>
  </div>
</template>

<style scoped></style>
