<template>
  <v-app>
    <v-theme-provider>
      <component :is="$route.meta.layout || 'div'">
        <router-view />
      </component>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .main {
    min-height: 600px;
  }
  .container {
    max-width: 800px;
  }
</style>
