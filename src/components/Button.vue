<script setup lang="ts">
  import Icon from '@/components/Icon.vue';

  type Props = {
    icon: string;
    as?: string;
    active?: boolean;
    type?: 'button' | 'submit' | 'reset';
  };

  const props = withDefaults(defineProps<Props>(), {
    as: 'button',
    active: false,
    type: 'button'
  });
</script>

<template>
  <component
    :is="as"
    :type="type"
    class="p-1.5 rounded-3xl focus:backdrop-blur-3xl focus:bg-beige/5 hover:backdrop-blur-3xl hover:bg-beige/5"
    :class="{
      'bg-gradient-accent': props.active
    }"
  >
    <Icon :name="props.icon" class="w-3.5 h-3.5 text-white" />
  </component>
</template>
