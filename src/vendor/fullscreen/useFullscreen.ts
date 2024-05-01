import { useFullscreen as useFullscreenVueUse } from '@vueuse/core';

const { isFullscreen, toggle } = useFullscreenVueUse();

const toggleFullscreen = () => {
  toggle();
};

export const useFullscreen = () => ({
  toggleFullscreen,
  isOnFullscreen: isFullscreen
});
