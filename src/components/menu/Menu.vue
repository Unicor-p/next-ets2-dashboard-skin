<script setup lang="ts">
  import MenuBadge from '@/components/menu/MenuBadge.vue';
</script>

<template>
  <nav class="flex justify-between py-2">
    <div class="flex justify-start items-center mx-2 w-full space-x-2">
      <MenuBadge icon="target" :expended="true">v2.0.0</MenuBadge>
      <MenuBadge icon="target" :expended="true">v1.44.1.5</MenuBadge>
    </div>
    <div class="flex-none">
      <div class="bg-gradient-accent text-white rounded-3xl px-4 py-2 text-2xl">
        Mon 04:55 AM
      </div>
    </div>
    <div class="flex justify-end items-center mx-2 w-full space-x-2">
      <MenuBadge icon="target" direction="right" :active="true">
        Plein écran
      </MenuBadge>
      <MenuBadge icon="menu" direction="right">Menu</MenuBadge>
    </div>
  </nav>
</template>
