import axios from 'axios'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const consumerKey = nuxtApp.$config.consumerKey
    const consumerSecret = nuxtApp.$config.consumerSecret

    // Get the M-Pesa access token
    const getAccessToken = async () => {
        const credentials = btoa(`${consumerKey}:${consumerSecret}`) // Use btoa for base64 encoding

        try {
            const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
                headers: {
                    Authorization: `Basic ${credentials}`
                }
            })
            return response.data.access_token
        } catch (error) {
            console.error('Failed to get M-Pesa access token', error)
            throw error
        }
    }

    // STK Push Request
    const stkPush = async (phoneNumber: string, amount: number, accountReference: string) => {
        const accessToken = await getAccessToken()
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3)
        const passkey = nuxtApp.$config.passkey
        const shortcode = nuxtApp.$config.shortcode
        const password = btoa(`${shortcode}${passkey}${timestamp}`) // Use btoa here as well

        const payload = {
            BusinessShortCode: shortcode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phoneNumber,
            PartyB: shortcode,
            PhoneNumber: phoneNumber,
            CallBackURL: nuxtApp.$config.callbackUrl,
            AccountReference: accountReference,
            TransactionDesc: 'Payment'
        }

        try {
            const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', payload, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            return response.data
        } catch (error) {
            console.error('STK Push failed', error)
            throw error
        }
    }

    // Inject the plugin so it's available throughout the app
    nuxtApp.provide('mpesa', { stkPush })
})
