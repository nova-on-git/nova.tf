// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/app/plugins/revive-payload.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/head/runtime/plugins/unhead.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/pages/runtime/plugins/router.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/app/plugins/revive-payload.server.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.5.5_magicast@0.3.5_rollup@4.24.0_typescript@5.6.3_vue@3.5.12_typescript@5.6.3__webpack-sources@3.2.3/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js").default> &
  InjectionType<typeof import("../../../dashboard/node_modules/.pnpm/@nuxt+devtools@1.5.2_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_sass@1.79.4_terser@5.34.1__vue@3.5.11_typescript@5.6.2_/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js").default> &
  InjectionType<typeof import("../../../dashboard/node_modules/.pnpm/@nuxt+devtools@1.5.2_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_sass@1.79.4_terser@5.34.1__vue@3.5.11_typescript@5.6.2_/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/app/plugins/dev-server-logs.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/app/plugins/check-if-layout-used.js").default> &
  InjectionType<typeof import("../../../dashboard/plugins/a-firebase-instance").default> &
  InjectionType<typeof import("../../../dashboard/plugins/google-analytics.client").default> &
  InjectionType<typeof import("../../../dashboard/plugins/pinia-init").default> &
  InjectionType<typeof import("../../plugins/config").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
