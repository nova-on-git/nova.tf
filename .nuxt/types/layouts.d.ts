import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "dashboard" | "default" | "veloris-auth"
declare module "../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.7_eslint@9.13.0_jiti@2.3.3__ioredis@5.4.1__fbzjvsiirqoutu6sxmmi2qonsq/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}