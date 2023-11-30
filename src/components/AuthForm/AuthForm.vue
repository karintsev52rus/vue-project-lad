<template>
    <v-sheet max-width="450" class="mx-auto form_container">
      <v-form @submit.prevent>
        <v-text-field
          v-model="email"
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Пароль"
          type="password"
        ></v-text-field>
        <v-btn
          @click ="onLogin"
          type="submit"
          block
          color="primary"
          class="mt-2"
          text="Вход"
        ></v-btn>
      </v-form>
    </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useAuthStore} from "@/stores/auth";
import { useRouter } from 'vue-router';
import { PathNames } from '@/constants/routes';

const router = useRouter()
const email = ref<string>("")
const password = ref<string>("")
const {login} = useAuthStore()

const onLogin = async ()=>{
  const isSuccsess = await login({email: email.value, password: password.value})
  if (isSuccsess){
    router.push({name: PathNames.HOME})
  }
}

</script>

<style scoped>
.form_container{
  padding: 15px;
}
</style>