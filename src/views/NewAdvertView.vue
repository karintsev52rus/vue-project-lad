<template>
    <div>
        <h1 class="text-center py-7">{{ $route.meta.title }}</h1>
        <div class="form_container">
          <NewAdvertForm
          :advertTypes="advertTypes"
          :cities="cities"
          :instruments="instruments"
          :styles="styles"

          />
      </div>
    </div>
</template>

<script setup lang="ts">
import NewAdvertForm from '@/components/NewAdvertForm/NewAdvertForm.vue'
import { useFiltersStore } from '@/stores/filters';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
const filterStore = useFiltersStore()
const {cities, styles, instruments, advertTypes} = storeToRefs(filterStore)
const {getFiltersData} = filterStore

onMounted(()=>{
  getFiltersData()
})
</script>

<style scoped>

</style>