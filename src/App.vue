<script setup lang="ts">
  import { isSdk } from '@/sdk';

  import Icon from '@/components/Icon.vue';

  import Menu from '@/features/menu/Menu.vue';
</script>

<template>
  <header>
    <Menu />
    <Icon name="brakes_temperature" class="w-16 h-16" />

    SDK : {{ isSdk }}
  </header>
</template>
