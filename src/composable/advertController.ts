import type { INewFormData } from '@/types/serverData.types';
import { useAuthStore } from '@/stores/auth';
import { dataService } from './dataService';
import { useAlertStore } from '@/stores/alert';
import { alertTypes } from '@/constants/alertTypes';
import { AxiosError } from 'axios';

export const createAdvert = async (formData: INewFormData) => {
  const alertStore = useAlertStore();
  const { showAlert } = alertStore;
  const authStore = useAuthStore();
  const { userId, token } = authStore;

  try {
    const { advertDescription, city, instrument, advertType, style } = formData;
    const publishedDate = new Date();
    if (userId && token) {
      const newAdvertData = {
        advertDescription,
        city,
        style,
        instrument,
        advertType,
        publishedDate,
        userId
      };
      const data = await dataService.createAdvert(newAdvertData, token);
      showAlert({ text: data.message, type: alertTypes.sucsess });
      return data.advertId;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      showAlert({ text: error.response?.data.message, type: alertTypes.error });
    } else if (error instanceof Error) {
      showAlert({ text: error.message, type: alertTypes.error });
    } else {
      showAlert({ text: 'не удалось создать новое объявление', type: alertTypes.error });
    }
  }
};

export const getAdvert = async (advertId: string) => {
  const alertStore = useAlertStore();
  const { showAlert } = alertStore;
  try {
    const advertData = await dataService.getAdvert(advertId);
    return advertData;
  } catch (error) {
    if (error instanceof AxiosError) {
      showAlert({ text: error.response?.data.message, type: alertTypes.error });
    } else if (error instanceof Error) {
      showAlert({ text: error.message, type: alertTypes.error });
    } else {
      showAlert({ text: 'Не удалось получить объявление', type: alertTypes.error });
    }
  }
};
