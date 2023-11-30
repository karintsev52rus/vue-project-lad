<template>
    <v-btn class="back_button" @click="back">
        Назад
    </v-btn>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const back = ()=>{
    router.go(-1)
}

</script>

<style scoped>
.back_button{
    margin-top: 100px;
    margin-bottom: 20px;
}
</style>