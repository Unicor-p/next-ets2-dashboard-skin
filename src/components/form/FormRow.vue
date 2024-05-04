<script setup lang="ts">
  type Props = {
    id?: string;
    label?: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <div class="w-full">
    <div class="relative w-full">
      <slot name="field" />
      <label
        v-if="props.label !== undefined"
        :for="props.id"
        class="absolute text-xs text-white bg-transparent duration-300 transform -translate-y-7 pt-0.5 left-2 scale-90 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:pt-0 peer-placeholder-shown:left-2 peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus:text-white peer-focus:pt-0.5 peer-focus:left-2"
        >{{ props.label }}</label
      >
      <div class="flex justify-end items-center absolute end-1 bottom-1">
        <slot name="prepend" />
      </div>
    </div>
    <div class="ms-3 mt-1 text-xs text-white/25 italic">
      <slot name="help" />
    </div>
  </div>
</template>
