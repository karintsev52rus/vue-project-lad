<template>
    <div class="page_container search_page_container">
      <h1 class="text-center py-7">{{ $route.meta.title }}</h1>
      <div class="form_container">
          <SearchForm
          :advertTypes = "advertTypes"
          :cities="cities"
          :instruments="instruments"
          :styles="styles"
          @searchFormEmit="onGetUserChoices"
          />
      </div>
      
        <div class="search_results_container">
          <SearchResults
          :adverts="adverts" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchForm from '@/components/SearchForm/SearchForm.vue';
import SearchResults from '../components/SearchResults/SearchResults.vue';
import type { ISearchFormData, IFieldData, ICityData, IAdvert } from '@/types/serverData.types';
import { ref } from 'vue';
import { dataService } from '@/composable/dataService';
import { onMounted } from 'vue';
import { useFiltersStore } from '@/stores/filters';
import { storeToRefs } from 'pinia';

onMounted(()=>{
  getFiltersData()
})

const filtersStore = useFiltersStore()
const {advertTypes, instruments, styles, cities}  = storeToRefs(filtersStore)
const {getFiltersData} = filtersStore

//данные для фильтров:

  //данные фильтров по умолчанию
  const userCity = ref<ICityData|null>(null)
  const userInstrument = ref<IFieldData|null>(null)
  const userStyle = ref<IFieldData[]|[]>([])
  const userAdvertType = ref<IFieldData|null>(null)

    const userChoices = ref({
    city: userCity.value,
    instrument: userInstrument.value,
    style: userStyle.value,
    advertType: userAdvertType.value
  })

  const adverts = ref<IAdvert[]>([])



  const onGetUserChoices = (formData:ISearchFormData) => {
    userChoices.value = formData
    console.log(formData)
    dataService.getAdverts(formData)
    .then((advertsData)=>{
      console.log(advertsData)
      adverts.value = advertsData
    })
    .catch((err)=>{
      console.log(err)
    })
  }

</script>

<style scoped>
.search_page_container{
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
}

.search_results_container{
  display: flex;
  flex-wrap: wrap;
}

</style>