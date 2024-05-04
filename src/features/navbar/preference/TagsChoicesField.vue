<script setup lang="ts">
  import Button from '@/components/Button.vue';

  export type Tag = {
    label: string;
  };

  type Props = {
    tags: Tag[];
  };

  const props = defineProps<Props>();
  const model = defineModel<Tag[]>({ default: [] });

  const isTagInArray = (tag: Tag): boolean => {
    const result = model.value.find(
      (currentTag: Tag) => currentTag.label === tag.label
    );

    return result !== undefined;
  };

  const toggleTag = (tag: Tag): void => {
    if (isTagInArray(tag)) {
      model.value = model.value.filter(
        (currentTag: Tag) => currentTag.label !== tag.label
      );
    } else {
      model.value.push(tag);
    }
  };
</script>

<template>
  <div class="space-x-1 flex justify-start items-center text-xs">
    <div
      v-for="tag in props.tags"
      :key="tag.label"
      class="rounded-3xl border-1 border-accent-primary px-2 pb-0.5 pt-1 text-white cursor-pointer"
      :class="{
        'bg-gradient-accent': isTagInArray(tag),
        'backdrop-blur-3xl bg-beige/5': !isTagInArray(tag)
      }"
      @click="toggleTag(tag)"
    >
      {{ tag.label }}
    </div>
    <Button icon="target" @click="model = []" />
  </div>
</template>
