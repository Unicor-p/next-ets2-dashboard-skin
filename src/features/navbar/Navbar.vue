<script setup lang="ts">
  import { ref } from 'vue';

  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icon.vue';
  import Menu from '@/components/Menu.vue';

  import NavbarOverlay from '@/features/navbar/NavbarOverlay.vue';

  const showDiscreteNavbar = ref<boolean>(false);
  const showOverlay = ref<boolean>(false);
</script>

<template>
  <header>
    <Menu
      class="transition-all duration-300"
      :class="{
        'opacity-0 z-0': showDiscreteNavbar,
        'opacity-100 z-20': !showDiscreteNavbar
      }"
    >
      <template #left>
        <Button icon="target" :expended="true">v2.0.0</Button>
        <Button icon="target" :expended="true">v1.44.1.5</Button>
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
        <Button icon="target" direction="right" :active="true"
:expended="true">
          {{ $t('Fullscreen') }}
        </Button>
        <Button
          icon="menu"
          direction="right"
          :expended="true"
          :active="showOverlay"
          @click="showOverlay = !showOverlay"
        >
          {{ $t('Menu') }}
        </Button>
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
  </header>

  <NavbarOverlay :show="showOverlay" />
</template>
