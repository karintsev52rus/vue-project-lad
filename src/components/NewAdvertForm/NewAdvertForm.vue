
    <template>
  <v-sheet max-width="450" class="mx-auto pa-5">
    <v-form @submit.prevent = "">
      <v-switch
        @update:model-value="onAdvertTypeSelect"
        v-model="advertData.advertType"
        :true-value="advertTypes.fromGroups"
        :false-value="advertTypes.fromMusicians"
        :label="`Объявления ${advertTypeLabel}`"
      ></v-switch>
      <v-autocomplete
        @update:model-value="onInstrumentSelect"
        v-model="advertData.instrument"
        return-object
        :items="instruments"
        item-title="label"
        label="Инструмент"
      ></v-autocomplete>
      <v-autocomplete
        v-model="advertData.city"
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
        v-model="advertData.style"
        @update:model-value="onStyleSelect"
        :items="styles"
        label="Стиль"
      ></v-autocomplete>
      <v-textarea
      :oninput="onInputDescription"
      v-model="advertData.advertDescription"
      clearable 
      label="Описание">
      </v-textarea>
      <v-btn @click="onSubmitForm" color="primary" type="submit" block class="mt-2"> Создать </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';
import type { ISearchFormProps , ICityData, IFieldData, INewFormData} from '@/types/serverData.types';
import {createAdvert} from "@/composable/advertController";
import { useRouter } from 'vue-router';
import { PathNames } from '@/constants/routes';

const props = defineProps<ISearchFormProps>()
const {advertTypes, cities, styles, instruments} = toRefs(props)
const advertTypeLabel = ref("от музыкантов")

const router = useRouter()

const advertData = ref<INewFormData>({
    city: null,
    instrument: null,
    style: [],
    advertType: {name: "fromMusicians", label: "Музыкант ищет группу", _id: "0"},
    advertDescription: ""
  })


const onCitySelect = (city:ICityData) => {
    advertData.value.city = city
  }

  const onInstrumentSelect = (instrument:IFieldData) => {
    advertData.value.instrument = instrument
  }

  const onStyleSelect = (style: IFieldData[]) => {
    advertData.value.style = style
  }

  const onAdvertTypeSelect = (advertType: any)=>{ // не разобрался как вывести тип возвращаемого значения из v-switch
    advertData.value.advertType = advertType
    advertTypeLabel.value = advertTypeLabel.value === "от музыкантов" ? "от групп" : "от музыкантов"
  }

  const onInputDescription = (inputEvent: InputEvent)=>{
    const data = inputEvent.target
    if(data){
        advertData.value.advertDescription 
    }
  }

  const onSubmitForm = async ()=>{
    const advertId = await createAdvert(advertData.value)
    if (advertId){
      router.push({name: PathNames.ADVERT, params: {id: advertId}})
    }
  }

</script>

<style scoped>

</style>