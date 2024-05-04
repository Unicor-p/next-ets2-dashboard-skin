<script setup lang="ts">
  import { type UseSwipeDirection, useSwipe } from '@vueuse/core';
  import { ref } from 'vue';

  import { useFullscreen } from '@/vendor/fullscreen/useFullscreen';

  import ButtonText from '@/components/ButtonText.vue';
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
        <ButtonText icon="target" :expended="true">v2.0.0</ButtonText>
        <ButtonText icon="target" :expended="true">v1.44.1.5</ButtonText>
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
        <ButtonText
          icon="target"
          direction="right"
          :active="isOnFullscreen"
          :expended="true"
          @click="toggleFullscreen"
        >
          {{ $t('Fullscreen') }}
        </ButtonText>
        <ButtonText
          icon="menu"
          direction="right"
          :expended="true"
          :active="showOverlay"
          @click="showOverlay = !showOverlay"
        >
          {{ $t('Menu') }}
        </ButtonText>
      </template>
    </Menu>

    <Menu
      :class="{
        'opacity-0 z-0': !showDiscreteNavbar,
        'opacity-100 z-20': showDiscreteNavbar
      }"
    >
      <template #center>
        <div
          class="p-1 backdrop-blur-xl bg-beige/5 text-white rounded-3xl"
          @click="showDiscreteNavbar = false"
        >
          &mldr;
        </div>
      </template>
    </Menu>
  </header>

  <NavbarOverlay :show="showOverlay" />
</template>
