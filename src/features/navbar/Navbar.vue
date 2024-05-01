<script setup lang="ts">
  import { ref } from 'vue';

  import Icon from '@/components/Icon.vue';
  import Menu from '@/components/menu/Menu.vue';
  import MenuBadge from '@/components/menu/MenuBadge.vue';

  const showDiscreteNavbar = ref<boolean>(false);
</script>

<template>
  <Menu
    class="transition-all duration-300"
    :class="{
      'opacity-0 z-0': showDiscreteNavbar,
      'opacity-100 z-20': !showDiscreteNavbar
    }"
  >
    <template #left>
      <MenuBadge icon="target" :expended="true">v2.0.0</MenuBadge>
      <MenuBadge icon="target" :expended="true">v1.44.1.5</MenuBadge>
    </template>
    <template #center>
      <div
        class="bg-gradient-accent text-white rounded-3xl px-4 py-2 text-2xl cursor-pointer"
        @click="showDiscreteNavbar = true"
      >
        Mon 04:55 AM
      </div>
    </template>
    <template #right>
      <MenuBadge icon="target" direction="right" :active="true">
        {{ $t('Fullscreen') }}
      </MenuBadge>
      <MenuBadge icon="menu" direction="right">
        {{ $t('Menu') }}
      </MenuBadge>
    </template>
  </Menu>

  <Menu
    class="transition-all duration-300"
    :class="{
      'opacity-0 z-0': !showDiscreteNavbar,
      'opacity-100 z-20': showDiscreteNavbar
    }"
  >
    <template #center>
      <div
        class="text-white rounded-3xl p-3 text-2xl backdrop-blur-xl bg-beige/5 cursor-pointer"
        @click="showDiscreteNavbar = false"
      >
        <Icon name="target" class="w-6 h-6 text-white" />
      </div>
    </template>
  </Menu>
</template>
