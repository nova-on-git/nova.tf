// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // extends: ,
    extends: [
        ["github:Veloris-Designs/nova#v1.1.9", { install: true }],

        // ["../nova/"],
        ["../dashboard", { install: true }], // used for dev
    ],

    postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },

    // css: ["~/assets/css/main.css"],
    app: { pageTransition: { name: "page" } },

    modules: ["@nuxt/fonts", "@pinia/nuxt", "nuxt-build-cache"],

    runtimeConfig: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,

        public: {
            GOOGLE_ANALYTICS_TAG_ID: process.env.GOOGLE_ANALYTICS_TAG_ID,
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
            FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
            FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
            FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
            FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
            FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
            FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
        },
    },

    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
})
