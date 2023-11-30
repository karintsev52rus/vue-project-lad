<template>
    <div v-if="advertData">
        <BackButton/>
        <h1>{{ advertData?.advertType.label }}</h1>
        <div class="advert_properties py-5">
            <AdvertInfoItem propertyName = "Имя" :propertyValue="advertData.authorName"/>
            <AdvertInfoItem propertyName = "Дата объявления" :propertyValue= "date"/>
            <AdvertInfoItem propertyName = "Описание" :propertyValue = "advertData.advertDescription"/>
            <AdvertInfoItem propertyName = "Город" :propertyValue = "advertData.city.label"/>
            <AdvertInfoItem propertyName = "Инструмент" :propertyValue = "advertData.instrument.label"/>
            <AdvertInfoItem propertyName = "Стиль" :propertyValue = "styles"/>
        </div>
    </div>
    <div v-else-if = loader>
        <v-progress-circular
        size="50"
        indeterminate
        color="primary"
    ></v-progress-circular>
    </div>
    <div v-else>
        Ошибка!
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { IAdvert } from '@/types/serverData.types';
import { ref } from 'vue';
import { onMounted } from 'vue';
import {printDate, printStyles} from '@/helpers/printer.js'
import AdvertInfoItem from '@/components/AdvertInfoItem.vue';
import BackButton from '@/components/PageNavigation/BackButton.vue';
import { getAdvert } from '@/composable/advertController';

const route = useRoute()
const param = route.params.id
const advertId = ref<null | string>(null)
const loader = ref<boolean>(false)
const date = ref<string>("")
const styles = ref<string>("")

if(typeof param === "string"){
    advertId.value = param
}
const advertData = ref<IAdvert | null>(null)
onMounted(()=>{
    if(advertId.value){
    loader.value = true
    getAdvert(advertId.value)
    .then((data)=>{
        if (data){
            advertData.value = data
            date.value = printDate(data.publishedDate)
            styles.value = printStyles(data.style)
        }
    })
    .finally(()=>{
        loader.value = false
    })
    }
})

</script>

<style scoped>

</style>