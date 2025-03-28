<template>

  <div>

  </div>
</template>

<script setup lang="ts">
  import {readItems} from '@directus/sdk'

  definePageMeta({
    layout: 'dashboard',
  })

/*onMounted(() => {
  const {user} = useDirectusAuth();

  const records = ref([])
  useDirectus(readItems('Global'))
      .then((data) => records.value = data)
})*/
/*
const { getItems } = useDirectusItems();

interface Product{
  id: number;
  title: string;
  price: string;
}

const product = await getItems<Product>({
  collection: 'product'
});*/
</script>

