<template>
  {{ data }}
</template>

<script setup>
  const {$directus, $readItems } = useNuxtApp()

  const {data} = await useAsyncData('global', () =>{
    return $directus.request($readItems('global'))
  })
</script>

