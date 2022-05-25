<script setup lang="ts">
import { useForm } from "vee-validate";
import { object, string } from "yup";

const { handleSubmit, values } = useForm({
  validationSchema: object({
    name: string().required().label("Name"),
    email: string().required().email().label("Email"),
    password: string().required().label("Password"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Form" subtitle="Form component" />

    <form @submit="onSubmit">
      <Card title="Form" footer-class="flex gap-2">
        <pre>{{ values }}</pre>

        <FormInput name="name" label="Name" placeholder="Name" />
        <FormInput name="email" label="Email" placeholder="Email" />
        <FormInput
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />
        <FormSwitch name="agree" label="I agree with TOC" />

        <template #footer>
          <Button type="submit" color="primary">Submit</Button>
          <Button text>Cancel</Button>
        </template>
      </Card>
    </form>
  </div>
</template>

<style scoped></style>
