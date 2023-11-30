
<template>
  <div class="wrapper">
    <PageHeader />
    <PageContent>

      <BreadCrumbs/>
      <AlertMessage/>
      <slot></slot>
    </PageContent>
    <PageFooter/>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/PageContent/PageContent.vue';
import PageFooter from '@/components/PageFooter/PageFooter.vue';
import PageHeader from '@/components/PageHeader/PageHeader.vue';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs.vue';
import AlertMessage from '@/components/Alert/AlertMessage.vue';

</script>

<style></style>
