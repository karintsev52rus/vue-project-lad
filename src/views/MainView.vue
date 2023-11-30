
<template>
    <div class="main_page_content">
        <h3 class="text-center">Добро пожаловать в musicmates.ru - сервис для поиска музыкантов.</h3> 
        <p class="text">Здесь вы можете найти себе компанию для совместного творчества!</p>

        <p class="text">
        Сервис работает как доска объявлений от музыкантов и групп, которые можно фильтровать в зависимости от вашего запроса. </p>
        <p class="text">
        Для просмотра объявлений не требуется регистрация, но просматривать контакты и создавать новые объявления могут только зарегистрированные пользователи.</p>
        <div class="actions text-center py-7">
            <router-link :to="{name: PathNames.SEARCH}"> 
                <v-btn  color="primary"> начать поиск </v-btn>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

import { PathNames } from '@/constants/routes';

</script>



<style scoped>
.main_page_content {
    margin: 100px auto;
    max-width: 600px;
}

.text{
    margin-top: 15px
}
</style>