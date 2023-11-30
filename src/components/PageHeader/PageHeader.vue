<template>
    <v-app-bar height="90" class="header_container">
      <v-container class="container header_container fill-height pa-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-app-bar-title>Musicmates</v-app-bar-title>
        
        <ThemeSwitcher/>
        
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <PageNavigation/>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { PathNames } from '@/constants/routes';
  import PageNavigation from '../PageNavigation/PageNavigation.vue';
  import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.vue';
  const drawer = ref(false)


  
</script>

<style>
  .theme_switch_container {
    display: flex;
    align-items: center;
  }

</style>
