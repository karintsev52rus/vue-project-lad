import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { LoginData } from '@/types/store.types';
import { dataService } from '@/composable/dataService';
import { useRouter } from 'vue-router';
import { PathNames } from '@/constants/routes';
import { useLocalStorrage } from '@/use/useLocalStorrage';
import type { IAuthStore } from '@/types/store.types';
import { useAlertStore } from './alert';
import { AxiosError } from 'axios';
import { alertTypes } from '@/constants/alertTypes';

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const auth = ref<boolean>(false);
    const userId = ref<string | null>(null);
    const loading = ref<boolean>(false);
    const isError = ref<boolean>(false);
    const token = ref<string | null>(null);
    const router = useRouter();
    const message = ref<string>('');
    const LSAuth = useLocalStorrage<IAuthStore>('authStore');
    if (LSAuth) {
      auth.value = LSAuth.auth;
      token.value = LSAuth.token;
      userId.value = LSAuth.userId;
    }

    const login = async (loginData: LoginData) => {
      loading.value = true;
      const alertStore = useAlertStore();
      const { showAlert } = alertStore;
      try {
        const userData = await dataService.login(loginData);
        auth.value = true;
        token.value = userData.token;
        userId.value = userData.user.id;
        showAlert({ text: `с возвращением, ${userData.user.email}`, type: alertTypes.sucsess });
        return true;
      } catch (error) {
        if (error instanceof AxiosError) {
          showAlert({ text: error.response?.data.message, type: alertTypes.error });
        } else if (error instanceof Error) {
          showAlert({ text: error.message, type: alertTypes.error });
        } else {
          showAlert({ text: 'не удалось авторизоваться', type: alertTypes.error });
        }
        return false;
      } finally {
        loading.value = false;
      }
    };

    const logout = () => {
      auth.value = false;
      token.value = null;
      router.push({ name: PathNames.LOGIN });
    };

    const checkAuth = async (currentToken: string) => {
      const alertStore = useAlertStore();
      const { showAlert } = alertStore;
      try {
        const userData = await dataService.checkAuth(currentToken);
        token.value = userData.token;
        auth.value = true;
        return userData.token;
      } catch (error) {
        token.value = null;
        auth.value = false;
        if (error instanceof AxiosError) {
          showAlert({ text: error.response?.data.message, type: alertTypes.error });
        } else if (error instanceof Error) {
          showAlert({ text: error.message, type: alertTypes.error });
        } else {
          showAlert({ text: 'Ошибка при авторизации', type: alertTypes.error });
        }
        return null;
      }
    };

    return { auth, loading, isError, login, logout, message, token, userId, checkAuth };
  },
  { persist: true }
);
