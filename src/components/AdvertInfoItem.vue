<template>
    <div class="property_container d-flex">
        <div class="advert_property">
            {{propertyName}}:
        </div>
        <div class="advert_property_value">
            {{ propertyValue }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps<{propertyName: string, propertyValue: string}>()
const {propertyName, propertyValue} = toRefs(props)

</script>

<style scoped>

.property_container{
    margin-top: 15px;
}
.advert_property{
    min-width: 200px;
}

.advert_property_value{
    margin-right: 20px;
}
</style>