<template>
    <SearchResultItem
    v-for="advert in adverts" 
    :key="advert.id" 
    :advert="advert"/>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { IAdvert } from '@/types/serverData.types';
import SearchResultItem from './SearchResultItem.vue';

const props = defineProps<{adverts: IAdvert[]}>()
const {adverts} = toRefs(props)

</script>

<style scoped>

</style>