import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "dashboard" | "default" | "veloris-auth"
declare module "../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.5_eslint@9.12.0_jiti@2.3.3__ioredis@5.4.1__zwgm42rhmfq4kj3orzndavyuza/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}