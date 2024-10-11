
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/home/cody/git/veloris-dev/veloris-site-template/node_modules/.c12/github_Veloris_Designs_aph2YalU4I/app.config.ts"
import cfg1 from "/home/cody/git/veloris-dev/veloris-dashboard/app.config.ts"
import cfg2 from "/home/cody/git/veloris-dev/veloris-dashboard/node_modules/.c12/github_Veloris_Designs_aph2YalU4I/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, cfg2, inlineConfig)
