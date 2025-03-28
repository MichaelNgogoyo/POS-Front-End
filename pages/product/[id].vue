<template>
  <div class="bg-gray -950">
    <p class="text-teal-500">Product Details for {{ id }}</p>
    <p class="text-teal-500">!
      {{product}}
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRoute} from "vue-router";

// get the product Id from the route params
const {id} = useRoute().params

const product = ref({}); // Store the product data here

// Fetch the product details
useDirectus(readItems(id, {
  // async () => {
  // const response = await $directus.request(
  //     $readItems('Global', {
  fields: ['id', 'name', 'price', 'image_URL', 'Image_alt'],
})).then((data) => {
  product.value = data
})




definePageMeta({
  layout: 'dashboard',
})


</script>
<style scoped>

</style>