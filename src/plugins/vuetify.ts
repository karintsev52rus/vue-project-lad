import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomLightTheme = {
  label: 'Светлая',
  dark: false,
  colors: {
    background: '#F5F5F5',
    surface: '#E0E0E0',
    primary: '#00897B',
    'primary-lighten-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-lighten-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
};

const myCustomDarkTheme = {
  label: 'Темная',
  dark: true,
  colors: {
    background: '#424242',
    surface: '#212121',
    primary: '#00897B',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
};

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme
    }
    //
  }
});
