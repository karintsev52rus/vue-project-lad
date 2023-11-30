<template>
    <div class="theme_switch_container">
          <v-switch
            true-value="темная"
            false-value="светлая"
            :label="themeLabel"
            @click="toggleTheme"
          >
          </v-switch>
        </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore()
const {themeLabel} = storeToRefs(themeStore) 
const {toggleTheme} = themeStore


</script>

<style scoped>

</style>