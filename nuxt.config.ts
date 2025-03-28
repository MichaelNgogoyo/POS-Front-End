import {directus} from './config/directus'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    directus,
    plugins:['~/plugins/mpesa.ts'],
    runtimeConfig: {
        directusUrl: process.env.DIRECTUS_REST_BASE_URL,
        directusStatic: process.env.DIRECTUS_WEB_TOKEN,

        consumerKey: process.env.MPESA_CONSUMER_KEY,
        consumerSecret: process.env.MPESA_CONSUMER_SECRET,
        shortcode: process.env.MPESA_SHORTCODE,
        passkey: process.env.MPESA_PASSKEY,
        callbackUrl: process.env.MPESA_CALLBACK_URL,
        // verification_webhook:
        //     process.env.DIRECTUS_REST_BASE_URL! + process.env.DIRECTUS_VERIFICATION_URL,
        public: {
            directusUrl: process.env.DIRECTUS_REST_BASE_URL,
            // maintenanceMode: process.env.MAINTENANCE_MODE,
            // assRole: process.env.DIRECTUS_ORG_ADMIN_ROLE,
            noticeFolder: process.env.DIRECTUS_NOTICE_FOLDER,
            registryFolder: process.env.DIRECTUS_REGISTRY_FOLDER
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },


})
