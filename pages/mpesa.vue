<template>

    <h1 class="text-white">Pay with M-Pesa</h1>
    <input v-model="phoneNumber" placeholder="Enter Phone Number" />
    <input class="bg-white" v-model="amount" placeholder="Enter Amount" type="number" />
    <button class="text-white mt-4" @click="payWithMpesa">Pay Now</button>

</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})
import { ref } from 'vue'
import { useNuxtApp } from '#app'  // This is how to access injected properties

// Access the mpesa plugins from the Nuxt app context

const amount = ref(0)
const phoneNumber = ref('')
const { $mpesa } = useNuxtApp()

console.log('$mpesa: ', $mpesa)

const payWithMpesa = async () => {
  try{
    if (!$mpesa || !$mpesa.stkPush) {
      throw new Error('M-Pesa plugins is not available or stkPush is undefined')
    }
    const response = await $mpesa.stkPush(phoneNumber.value, amount.value, 'AccountReference')
    console.log('M-pesa payment response: ', response)
  }catch (error){
    console.error('Error while making mpesa payment', error)
  }
}






</script>
<style>

</style>