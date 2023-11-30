<template>
    <v-card
    class="mx-auto advert_card"
    width="350"
  >
    <v-card-item >
      <v-card-title>
        {{ advert.advertType.label }}
      </v-card-title>
      <v-card-subtitle>
        {{ advert.authorName }}
      </v-card-subtitle>
    </v-card-item>
    <div class="advert_info">
     Город: <v-chip>{{ advert.city.label }}</v-chip>
    </div>
    <div class="advert_info">
     Инструмент: <v-chip>{{ advert.instrument.label }}</v-chip>
    </div>
    <div class="advert_info">
     Стиль: <v-chip v-for="style in advert.style" :key="style._id">{{ style.label }}</v-chip>
    </div>
    <v-card-text>
      {{ advert.advertDescription }}
    </v-card-text>
    <div class="text-center pa-5">
      <v-btn
      color="primary"
      class="nav_button"
      >
        <router-link class="nav_link" :to="{name: PathNames.ADVERT, params: {id: advert.id}}">
          Подробнее
        </router-link>
      </v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { IAdvert } from '@/types/serverData.types';
import { PathNames } from '@/constants/routes';
const props = defineProps<{advert: IAdvert}>()
const {advert} = toRefs(props)

</script>

<style scoped>
.advert_card{
    margin: 15px;
}

.nav_link{
  color: white;
  text-decoration: none;
}

.nav-button {
  width: 350px;
  margin: 20px auto;
}

.advert_info{
    margin: 5px 15px;
}



</style>