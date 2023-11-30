<template>
    <v-list>
        <v-list-item>
          <router-link
            class="nav_link"
            active-class="active_link"
            :to="{ name: PathNames.HOME}"
            >Главная</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link
            class="nav_link"
            active-class="active_link"
            
            :to="{ name: PathNames.SEARCH}"
            >Поиск</router-link
          >
        </v-list-item>
        <div v-if="auth">
          
      <v-list-item>
          <router-link
        active-class="active_link"
          class="nav_link"
          :to="{ name: PathNames.NEW}">
          Новое обявление
        </router-link>
        </v-list-item>
        <v-list-item
        >
        <span 
        @click="logout"
        class="nav_link">
          Выход
        </span>
      </v-list-item>

        </div>
      <div v-else>
        
        <v-list-item >
        <router-link
          class="nav_link"
          active-class="active-link"
          
          @click="logout"
          :to="{ name: PathNames.LOGIN}"
          >Вход</router-link
      >
      </v-list-item>
      </div>
      </v-list>
</template>

<script setup lang="ts">
import { PathNames } from '@/constants/routes';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore()
const {auth} = storeToRefs(authStore)
const {logout} = authStore

</script>

<style lang="scss" scoped>
.nav_link:hover {
    text-decoration: underline;
}


.nav_link{
    text-decoration: none;
    display: block;
    color: var(--primary);
    transition: var(--transition)
};

.nav_link:hover{
  color: var(--green);
  text-decoration: none;
}

.active_link{
  color: var(--green)
}


</style>