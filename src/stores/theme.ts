import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useTheme } from 'vuetify';
import { ThemeNames } from '@/constants/themeNames';
import { useLocalStorrage } from '@/use/useLocalStorrage';
import type { IThemeStore } from '@/types/store.types';

export const useThemeStore = defineStore(
  'themeStore',
  () => {
    const theme = useTheme();
    const themeLabel = ref<string>('Светлая');
    const themeName = ref<string>(theme.global.name.value);
    const LSTheme = useLocalStorrage<IThemeStore>('themeStore');
    if (LSTheme) {
      themeLabel.value = LSTheme.themeLabel;
      themeName.value = LSTheme.themeName;
      theme.global.name.value = LSTheme.themeName;
    }

    const toggleTheme = () => {
      if (theme.global.name.value === ThemeNames.dark.name) {
        theme.global.name.value = ThemeNames.light.name;
        themeLabel.value = ThemeNames.light.label;
        themeName.value = ThemeNames.light.name;
      } else {
        theme.global.name.value = ThemeNames.dark.name;
        themeLabel.value = ThemeNames.dark.label;
        themeName.value = ThemeNames.dark.name;
      }
    };

    return { toggleTheme, themeLabel, themeName };
  },
  { persist: true }
);
