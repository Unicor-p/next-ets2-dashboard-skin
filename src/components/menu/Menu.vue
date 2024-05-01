<script setup lang="ts"></script>

<template>
  <nav class="flex justify-between py-2 fixed top-0 w-full">
    <div class="flex justify-start items-center mx-2 w-full space-x-2">
      <slot name="left" />
    </div>
    <div class="flex-none">
      <slot name="center" />
    </div>
    <div class="flex justify-end items-center mx-2 w-full space-x-2">
      <slot name="right" />
    </div>
  </nav>
</template>
