<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';

  type Props = {
    name: string;
  };

  const props = defineProps<Props>();
  const icon = defineAsyncComponent(
    () => import(`@/assets/svg/${props.name}.svg`)
  );
</script>

<template>
  <component :is="icon" />
</template>
