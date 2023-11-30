<template>
    <div class="alert_container" v-if="isShow">
        <v-alert
        v-model="isShow"
        :color="alertType"
        :icon="alertType === alertTypes.error ? '$error': '$success'"
        :title="alertType === alertTypes.error? 'Ошибка!' : ''"
        :text="message"
        @click:close="hideAlert"
        min-width="280"
        closable
    	></v-alert>
    </div>
</template>

<script setup lang="ts">
import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';
import { alertTypes } from '@/constants/alertTypes';

const alertStore = useAlertStore()
const {isShow, message, alertType} = storeToRefs(alertStore)
const {hideAlert} = alertStore

</script>

<style scoped>
.alert_container{
    position: fixed;
    left: 50%;
    transform: translate(-50%);
}

</style>