export default defineNuxtConfig({
    app: {
      baseURL: '/acp/'
    },
    css: [
        '@/assets/css/main.css',
    ],
    components: true,
    plugins: [
        '~/plugins/observe-visibility.ts',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/partytown',
        '@formkit/nuxt',
    ],
    pages: true,
    vite: {
        ssr: {
            noExternal: ["moment"],
        },
    },
    formkit: {
        autoImport: true,
    },
    runtimeConfig: {
        public: {
            'COMMON_API_URL': 'http://common-api.localhost/api/v1',
            'PAPER_API_URL': 'http://paper-api.localhost/api/v1',
            'IMAGES_URL': 'http://images.localhost',
        },
    },
    experimental: {
        watcher: 'parcel',
    },
    routeRules: {
        '/**': { ssr: false },
    },
})
