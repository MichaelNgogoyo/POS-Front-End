<template>
  {{ records }}
</template>

<script setup>
import {readItems} from '@directus/sdk'

const records = ref([])
 useDirectus(readItems('event_facilitators'))
     .then((data) => records.value = data)

</script>

