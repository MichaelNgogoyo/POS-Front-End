<template>
<p v-for="record in records">
  <li>{{record.title}}</li>
  <p>{{record.description}}</p>
</p>
</template>

<script setup>
import {readItems} from '@directus/sdk'

const records = ref([])
 useDirectus(readItems('Global'))
     .then((data) => records.value = data)

</script>

