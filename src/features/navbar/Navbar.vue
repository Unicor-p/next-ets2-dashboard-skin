<script setup lang="ts">
  import { type UseSwipeDirection, useSwipe } from '@vueuse/core';
  import { ref } from 'vue';

  import { useFullscreen } from '@/vendor/fullscreen/useFullscreen';

  import Button from '@/components/Button.vue';
  import Menu from '@/components/Menu.vue';

  import NavbarOverlay from '@/features/navbar/NavbarOverlay.vue';

  const showDiscreteNavbar = ref<boolean>(false);
  const showOverlay = ref<boolean>(false);

  const navbarTargetRef = ref<HTMLElement | null>(null);
  useSwipe(navbarTargetRef, {
    onSwipeEnd(e, direction: UseSwipeDirection) {
      if (direction === 'down') {
        showDiscreteNavbar.value = false;
      } else if (direction === 'up') {
        showDiscreteNavbar.value = true;
      }
    }
  });

  const { toggleFullscreen, isOnFullscreen } = useFullscreen();
</script>

<template>
  <header ref="navbarTargetRef">
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
        <Button
          icon="target"
          direction="right"
          :active="isOnFullscreen"
          :expended="true"
          @click="toggleFullscreen"
        >
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
      :class="{
        'opacity-0 z-0': !showDiscreteNavbar,
        'opacity-100 z-20': showDiscreteNavbar
      }"
    >
    </Menu>
  </header>

  <NavbarOverlay :show="showOverlay" />
</template>
