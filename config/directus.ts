// @ts-ignore
export const directus = {
  rest: {
    baseUrl: process.env.DIRECTUS_REST_BASE_URL! || 'http://localhost:8055',
    nuxtBaseUrl: process.env.NUXT_BASE_URL! || 'http://localhost:3000'
  },
  auth: {
    enabled: true,
    enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
    //@ts-ignore
    userFields: ['*', '*.*', 'associations.Association_id', 'associations.Association_id.*'], // Select user fields
    redirect: {
      callback: '/auth/callback',
      home: '/dashboard',
      login: '/auth/login',
      logout: '/auth/login',
      resetPassword: '/auth/reset-password'
    }
  }
}
