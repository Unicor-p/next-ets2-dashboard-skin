<script setup lang="ts">
  import Icon from '@/components/Icon.vue';

  type Props = {
    direction: 'left' | 'right';
    icon: string;
    active: boolean;
    expended: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    direction: 'left',
    active: false,
    expended: false
  });
</script>

<template>
  <div
    class="backdrop-blur-xl bg-beige/5 text-white rounded-3xl flex justify-center items-center text-base group overflow-hidden hover:bg-white/25 hover:cursor-pointer focus:bg-white/25 focus:cursor-pointer"
    :class="{
      'flex-row-reverse': props.direction === 'right',
      'bg-white/25': props.active
    }"
  >
    <div
      class="rounded-full bg-white/35 flex justify-center items-center p-2 z-10"
      :class="{
        'bg-gradient-accent': props.active
      }"
    >
      <Icon :name="props.icon" class="w-4 h-4 text-white" />
    </div>
    <div
      class="flex justify-center items-center py-1 whitespace-nowrap opacity-0 w-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-focus:opacity-100 group-focus:translate-x-0 group-hover:w-32 group-focus:w-32"
      :class="{
        '-translate-x-[150%]': props.direction === 'left',
        'translate-x-[150%]': props.direction === 'right',
        'opacity-100 !translate-x-0 w-32': props.active,
        'opacity-100 translate-x-0 w-32 xl:opacity-0 xl:w-0':
          props.expended && !props.active
      }"
    >
      <span class="px-4">
        <slot />
      </span>
    </div>
  </div>
</template>
