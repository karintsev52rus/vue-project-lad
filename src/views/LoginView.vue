<template>
    <div>
        <h1 class="text-center py-7">{{ $route.meta.title }}</h1>
        <AuthForm />
    </div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/AuthForm/AuthForm.vue';

</script>

<style scoped>

</style>