<template>
    <div class="d-flex">
      <div :key="index" v-for="(breadcrumb, index) in breadcrumbs" class="breadcrumbs">
        <router-link class="breadcrumb_link" v-if="breadcrumb.link" :to="{ path: breadcrumb.link, query: $route.query }">{{
          breadcrumb.title + ' > '
        }}</router-link>
        <p v-else>{{ breadcrumb.title }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { IBreadcrumb } from '@/types/UI.types';
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const breadcrumbs = ref<IBreadcrumb[]>([]);
  
  breadcrumbs.value = route.meta.breadcrumb(route);
  
  watch(route, (newRoute) => {
    breadcrumbs.value = newRoute.meta.breadcrumb(route);
  });
  </script>
  
<style  scoped>
.breadcrumbs{
    margin: 5px;
}
.breadcrumb_link{
    color: var(--green);
    text-decoration: none;
}
</style>