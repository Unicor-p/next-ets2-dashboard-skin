<script setup lang="ts">
  import { TabGroup, TabList, TabPanels } from '@headlessui/vue';
  import type { Component } from 'vue';

  import Overlay from '@/components/Overlay.vue';
  import Tab from '@/components/tab-group/Tab.vue';

  import NavbarOverlayAbout from '@/features/navbar/NavbarOverlayAbout.vue';
  import NavbarOverlaySkin from '@/features/navbar/NavbarOverlaySkin.vue';
  import NavbarOverlayPreference from '@/features/navbar/preference/NavbarOverlayPreference.vue';

  type Props = {
    show?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    show: true
  });

  type TabsType = {
    icon: string;
    label: string;
    component: Component;
  };

  const tabs: TabsType[] = [
    {
      icon: 'route',
      label: 'Skin',
      component: NavbarOverlaySkin
    },
    {
      icon: 'route',
      label: 'Preferences',
      component: NavbarOverlayPreference
    },
    {
      icon: 'route',
      label: 'About',
      component: NavbarOverlayAbout
    }
  ];
</script>

<template>
  <Overlay :show="props.show" class="pt-16 p-4">
    <TabGroup>
      <TabList class="space-x-2 flex justify-center items-center text-sm">
        <Tab v-for="tab in tabs" :key="tab.label" :icon="tab.icon">
          {{ $t(tab.label) }}
        </Tab>
      </TabList>
      <TabPanels>
        <component :is="tab.component" v-for="tab in tabs" :key="tab.label" />
      </TabPanels>
    </TabGroup>
  </Overlay>
</template>
