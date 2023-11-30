import { defineStore } from 'pinia';
import { ref } from 'vue';
import { alertTypes } from '@/constants/alertTypes';
import type { IAlertOptions } from '@/types/store.types';

export const useAlertStore = defineStore('alertStore', () => {
  const isShow = ref<boolean>(false);
  const message = ref<string>('');
  const alertType = ref<string>(alertTypes.sucsess);

  const showAlert = (alertOptions: IAlertOptions) => {
    const { text, type } = alertOptions;
    isShow.value = true;
    message.value = text;
    alertType.value = type;
  };

  const hideAlert = () => {
    isShow.value = false;
    message.value = '';
  };

  return { isShow, message, alertType, showAlert, hideAlert };
});
