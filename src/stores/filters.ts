import { ref } from 'vue';
import { defineStore } from 'pinia';
import { dataService } from '@/composable/dataService';
import type { IFieldData, ICityData } from '@/types/serverData.types';

export const useFiltersStore = defineStore('filtersStore', () => {
  const instruments = ref<IFieldData[]>([]);
  const cities = ref<ICityData[]>([]);
  const styles = ref<IFieldData[]>([]);
  const advertTypes = ref({
    fromMusicians: { name: 'fromMusicians', label: 'Музыкант ищет группу', _id: '0' },
    fromGroups: { name: 'fromGroups', label: 'Группа ищет музыканта', _id: '1' }
  });

  const loading = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const message = ref<string>('');

  const getFiltersData = async () => {
    try {
      const response = await dataService.getFiltersData();
      if (response) {
        const mainCities = response.cities.filter((city) => {
          return city.mainList === true;
        });
        cities.value = mainCities;
        instruments.value = response.instruments;
        styles.value = response.styles;
      }
    } catch (error) {
      if (error instanceof Error) {
        isError.value = true;
        message.value = error.message;
      } else {
        console.log(error);
      }
    }
  };

  return {
    loading,
    isError,
    message,
    advertTypes,
    cities,
    instruments,
    styles,
    getFiltersData
  };
});
