<template>
  <v-sheet max-width="450" class="mx-auto pa-5">
    <v-form @submit.prevent="onSubmitForm" >
      <v-switch
        @update:model-value="onAdvertTypeSelect"
        v-model="userChoices.advertType"
        :true-value="advertTypes.fromGroups"
        :false-value="advertTypes.fromMusicians"
        :label="`Объявления ${advertTypeLabel}`"
      ></v-switch>
      <v-autocomplete
        @update:model-value="onInstrumentSelect"
        v-model="userChoices.instrument"
        return-object
        :items="instruments"
        item-title="label"
        label="Инструмент"
      ></v-autocomplete>
      <v-autocomplete
        v-model="userChoices.city"
        @update:model-value="onCitySelect"
        :items="cities"
        return-object
        item-title="label"
        label="Город"
      ></v-autocomplete>
      <v-autocomplete
        multiple
        item-title="label"
        return-object
        v-model="userChoices.style"
        @update:model-value="onStyleSelect"
        :items="styles"
        label="Стиль"
      ></v-autocomplete>
      <v-btn color="primary" type="submit" block class="mt-2">Поиск </v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
  import { toRefs, ref } from 'vue'
  import type {ISearchFormProps, ISearchFormData, ICityData, IFieldData } from '@/types/serverData.types';

  const props = defineProps<ISearchFormProps>()

  const userChoices = ref<ISearchFormData>({
    city: null,
    instrument: null,
    style: [],
    advertType: {name: "fromMusicians", label: "от музыкантов", _id: "0"},
  })

  const advertTypeLabel = ref("от музыкантов")
  
  const { styles, cities, instruments } = toRefs(props)

  const onCitySelect = (city:ICityData) => {
    userChoices.value.city = city
  }

  const onInstrumentSelect = (instrument:IFieldData) => {
    userChoices.value.instrument = instrument
  }

  const onStyleSelect = (style: IFieldData[]) => {
    userChoices.value.style = style
  }

  const onAdvertTypeSelect = (advertType: any)=>{ // не разобрался как вывести тип возвращаемого значения из v-switch
    userChoices.value.advertType = advertType
    advertTypeLabel.value = advertTypeLabel.value === "от музыкантов" ? "от групп" : "от музыкантов"
  }

  const emit = defineEmits(['searchFormEmit'])

  const onSubmitForm = () => {
    emit('searchFormEmit', userChoices.value)
  }
</script>

<style></style>
