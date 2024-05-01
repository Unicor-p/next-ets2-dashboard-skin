<script setup lang="ts">
  import { Tab } from '@headlessui/vue';

  import Icon from '@/components/Icon.vue';

  type Props = {
    icon: string | null;
  };

  const props = withDefaults(defineProps<Props>(), {
    icon: null
  });
</script>

<template>
  <Tab v-slot="{ selected }" as="template">
    <div
      class="text-white rounded-3xl py-1 px-2 flex justify-start items-center space-x-3"
      :class="{
        'bg-gradient-accent': selected,
        'backdrop-blur-xl bg-beige/5': !selected
      }"
    >
      <div v-if="props.icon !== null" class="flex-none">
        <Icon :name="props.icon" class="w-4 h-4 text-white" />
      </div>
      <div class="pe-1">
        <slot />
      </div>
    </div>
  </Tab>
</template>
