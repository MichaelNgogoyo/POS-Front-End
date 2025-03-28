<template>
  <div class="bg-gray-900">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex items-center justify-between space-x-4">
        <h2 class="text-lg font-medium text-teal-500">Customers also viewed</h2>
        <a href="#" class="whitespace-nowrap text-sm font-medium text-blue-500 hover:text-indigo-500">View all<span
            aria-hidden="true"> &rarr;</span></a>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-20 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
        <div v-for="product in products" :key="product.id" class="relative group">
          <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-700">
            <img
                :src="product.image_URL"
                :alt="product.Image_alt"
                class="object-center object-cover"/>
            <div class="flex items-end  p-4 group-hover:opacity-100" aria-hidden="true">
              <NuxtLink
                  :to="`/product/${product.id}`"
                  class="w-full bg-gray-900 cursor-pointer bg-opacity-500 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-teal-500 text-center group-hover:font-bold">
                {{ product.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Moses, this is working
// console.log('Component is being rendered')
const products = ref([]);
useDirectus(readItems('Product', {
  // async () => {
  // const response = await $directus.request(
  //     $readItems('Global', {
  fields: ['id', 'name', 'price', 'image_URL', 'Image_alt'],
})).then((data) => {
  products.value = data
})
</script>
