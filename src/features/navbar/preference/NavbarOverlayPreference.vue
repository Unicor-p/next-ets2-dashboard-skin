<script setup lang="ts">
  import { TabPanel } from '@headlessui/vue';
  import { ref } from 'vue';

  import Button from '@/components/Button.vue';
  import Debug from '@/components/Debug.vue';
  import FormRow from '@/components/form/FormRow.vue';
  import Input from '@/components/form/Input.vue';

  import TagsChoicesField, {
    type Tag
  } from '@/features/navbar/preference/TagsChoicesField.vue';

  type SearchForm = {
    search?: string;
    tags: Tag[];
  };

  const tags: Tag[] = [
    {
      label: 'Tag1'
    },
    {
      label: 'Tag2'
    }
  ];

  const searchForm = ref<SearchForm>({
    search: '',
    tags: [tags[0]]
  });

  const stateForm = ref({
    showTags: false,
    showFiles: false
  });
</script>

<template>
  <TabPanel class="mt-8">
    <form>
      <FormRow id="floating_outlined" :label="$t('Ssearch ...')" class="mb-4">
        <template #field>
          <Input
            id="floating_outlined"
            v-model="searchForm.search"
            type="search"
          />
        </template>
        <template #prepend>
          <Button
            icon="target"
            :active="stateForm.showTags"
            @click="stateForm.showTags = !stateForm.showTags"
          />
          <Button icon="target" />
          <Button icon="target" />
        </template>
      </FormRow>
      <div class="overflow-hidden relative">
        <FormRow
          class="transition-all duration-300 ease-in-out flex justify-start items-center"
          :class="{
            'opacity-0 -translate-y-full max-h-0 mb-0': !stateForm.showTags,
            'opacity-100 translate-y-0 max-h-6 mb-4': stateForm.showTags
          }"
        >
          <template #field>
            <TagsChoicesField v-model="searchForm.tags" :tags="tags" />
          </template>
        </FormRow>
      </div>
    </form>

    <Debug>{{ JSON.stringify(searchForm, null, 2) }}</Debug>
  </TabPanel>
</template>
