<script setup lang="ts">
  type Props = {
    id: string;
    type?: 'text' | 'search';
  };

  const props = withDefaults(defineProps<Props>(), {
    type: 'text'
  });

  const model = defineModel<string>();
</script>

<template>
  <input
    :id="props.id"
    v-model="model"
    :type="props.type"
    class="block px-4 pb-2 pt-2 w-full text-xs text-white backdrop-blur-3xl bg-beige/5 rounded-3xl border-1 border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
  />
</template>
