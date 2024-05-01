<script setup lang="ts">
  type Props = {
    show?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    show: true
  });
</script>

<template>
  <div
    class="backdrop-blur-xl bg-beige/5 w-[100dvw] h-[100dvh] transition-opacity duration-300 opacity-0 fixed top-0 left-0 -z-10"
    :class="{
      'opacity-100 !z-10': props.show
    }"
  >
    <div>
      <slot />
    </div>
  </div>
</template>
