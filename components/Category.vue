<template>
  <div>
    <p class="text-center font-mono text-teal-300 underline">These are the available categories</p>
<p class=" text-center p-3  text-2xl font-semibold text-teal-500" v-for="category in categories"> {{category.category}}</p>

  </div>
</template>

<script setup>

        const categories = ref([]);
        useDirectus(readItems('Product'), {
          fields: ['category'],
        }).then((data) => {
          categories.value = data
        })
</script>

<style scoped>

</style>