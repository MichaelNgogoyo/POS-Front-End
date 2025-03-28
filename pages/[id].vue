<template>
  <div class="bg-gray-900 min-h-screen">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div v-if="loading" class="text-teal-500 text-center">Loading...</div>
      <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
      <div v-else>
        <div class="flex items-center space-x-4">
          <img
              :src="product.image_URL"
              :alt="product.Image_alt"
              class="w-48 h-48 object-cover rounded-lg"
          />
          <div>
            <h1 class="text-3xl font-bold text-teal-500">{{ product.name }}</h1>
            <p class="text-xl text-gray-400 mt-2">$ {{ product.price }}</p>
            <p class="text-gray-300 mt-4">{{ product.description }}</p>
          </div>
        </div>
        <div class="mt-8">
          <NuxtLink
              to="/product"
              class="text-blue-500 hover:text-indigo-500 text-sm font-medium"
          >
            &larr; Back to Products
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useDirectus, readItem } from '@directus/sdk';

const route = useRoute();
const product = ref(null);
const loading = ref(true);
const error = ref(null);

// Fetch the product using Directus
const fetchProduct = async () => {
  try {
    const { data } = await useDirectus(readItem('Product', route.params.id, {
      fields: ['id', 'name', 'price', 'image_URL', 'Image_alt', 'description'],
    }));
    product.value = data;
  } catch (err) {
    error.value = 'Failed to load product details.';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProduct);
</script>
