// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/ionic'],
    ionic: {
        integrations: {
            //
        },
        css: {
            basic: true,
            core: true,
            utilities: true,
        },
        config: {
            //
        }
    },
    experimental: {
        payloadExtraction: false,
    }
})
