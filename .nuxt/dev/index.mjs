import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getQuery as getQuery$1, readBody, readRawBody, getResponseStatusText } from 'file:///app/site/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs';
import { BetaAnalyticsDataClient } from 'file:///app/dashboard/node_modules/.pnpm/@google-analytics+data@4.8.0/node_modules/@google-analytics/data/build/src/index.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getFirestore, collection, doc, deleteDoc, getDocs, updateDoc, serverTimestamp, addDoc, query, orderBy, where, getDoc, arrayUnion, setDoc } from 'file:///app/dashboard/node_modules/.pnpm/firebase@10.14.0/node_modules/firebase/firestore/dist/index.mjs';
import axios from 'file:///app/dashboard/node_modules/.pnpm/axios@1.7.7/node_modules/axios/index.js';
import { promises } from 'fs';
import nodemailer from 'file:///app/dashboard/node_modules/.pnpm/nodemailer@6.9.15/node_modules/nodemailer/lib/nodemailer.js';
import Stripe from 'file:///app/dashboard/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/stripe.esm.node.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///app/site/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///app/site/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import destr from 'file:///app/site/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file:///app/site/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///app/site/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/server-renderer/index.mjs';
import { propsToString, renderSSRHead } from 'file:///app/site/node_modules/.pnpm/@unhead+ssr@1.11.10/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///app/site/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///app/site/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///app/site/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///app/site/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///app/site/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///app/site/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///app/site/node_modules/.pnpm/ohash@1.1.4/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///app/site/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///app/site/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///app/site/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file:///app/site/node_modules/.pnpm/consola@3.2.3/node_modules/consola/dist/index.mjs';
import { getContext } from 'file:///app/site/node_modules/.pnpm/unctx@2.3.1_webpack-sources@3.2.3/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///app/site/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import { isVNode, version, unref } from 'file:///app/site/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/index.mjs';
import { initializeApp } from 'file:///app/dashboard/node_modules/.pnpm/firebase@10.14.0/node_modules/firebase/app/dist/index.mjs';
import { getAuth } from 'file:///app/dashboard/node_modules/.pnpm/firebase@10.14.0/node_modules/firebase/auth/dist/index.mjs';
import { getStorage } from 'file:///app/dashboard/node_modules/.pnpm/firebase@10.14.0/node_modules/firebase/storage/dist/index.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file:///app/site/node_modules/.pnpm/unhead@1.11.10/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///app/site/node_modules/.pnpm/@unhead+shared@1.11.10/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  myLayer: {
    name: "Hello from Nuxt layer"
  }
});

const appConfig1 = defineAppConfig({
  myLayer: {
    name: "Hello from Nuxt layer"
  }
});

const appConfig2 = defineAppConfig({
  myLayer: {
    name: "Hello from Nuxt layer"
  }
});

const inlineAppConfig = {
  "nuxt": {}
};

const appConfig = defuFn(appConfig0, appConfig1, appConfig2, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "GOOGLE_ANALYTICS_TAG_ID": "G-64DN14HE5K",
    "CALENDLY_PAT": "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzI5NTkxMTExLCJqdGkiOiI3YTM2NDFkOC0wZGE5LTQ4ZDctYTRkMy02N2QxM2IzODE3NzUiLCJ1c2VyX3V1aWQiOiI5ZmMzMGM2OC0zMDBkLTQzMTEtOTg1MS03Y2NiMDg4Y2NjYjEifQ._YCkuRGT0G766A5YUr4g58sJVeDUdLPWQBLuww12werGi0OodrbatlNc9m7TunMekePtBBuze3bahPNzzRW4HA",
    "FIREBASE_API_KEY": "AIzaSyBcZJQxgWVm49vNvXV7DWg509c_Qxntx3k",
    "FIREBASE_AUTH_DOMAIN": "veloris-cms.firebaseapp.com",
    "FIREBASE_STORAGE_BUCKET": "veloris-cms.appspot.com",
    "FIREBASE_MESSAGING_SENDER_ID": "977470936972",
    "FIREBASE_APP_ID": "1:977470936972:web:12be947fc6e13b16e068a9",
    "FIREBASE_PROJECT_ID": "veloris-cms",
    "FIREBASE_MEASUREMENT_ID": "G-64DN14HE5K"
  },
  "STRIPE_SECRET_KEY": "sk_test_51Puv9RDO9pf6iPuQl0H5URBje22vEulXlZPjAMcIKl6BUGEBUO0GI7ksiCsjr8lHHH3sDbWJS6e8AFFTfrkDDlfu00GLw4nhVE",
  "STRIPE_PUBLISHABLE_KEY": "sk_test_51Puv9RDO9pf6iPuQl0H5URBje22vEulXlZPjAMcIKl6BUGEBUO0GI7ksiCsjr8lHHH3sDbWJS6e8AFFTfrkDDlfu00GLw4nhVE",
  "STRIPE_WEBHOOK_SECRET": "whsec_16890c76994ff58bda16d9e69a2200dda73b484eae8146d62ebf857fff08cb87"
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/app/site/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/app/site","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/app/site/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/app/site/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/app/site/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/app/site/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config$7 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$7.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _d2tgfFRBAs = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/app/site";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _YF2BBAjZDf = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const _9OsEmrLA18 = defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN,
    storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.public.FIREBASE_MESSAGE_SENDER_ID,
    appId: config.public.FIREBASE_APP_ID,
    projectId: config.public.FIREBASE_PROJECT_ID
  };
  const velorisFirebaseConfig = {
    apiKey: "AIzaSyBAbJjwIWx1DDYbQaV8e6vTWQG5JQMqUYk",
    authDomain: "veloris-91865.firebaseapp.com",
    projectId: "veloris-91865",
    storageBucket: "veloris-91865.appspot.com",
    messagingSenderId: "849032631896",
    appId: "1:849032631896:web:ea11e7e0769e7f5de05c2d",
    measurementId: "G-EZV53X4G0C"
  };
  if (!firebaseConfig.apiKey) {
    console.error(
      "Firebase connection details are missing. Please add them to the .env file."
    );
  }
  let app, velorisApp, auth, db, storage;
  let velorisDb;
  try {
    app = initializeApp(firebaseConfig);
    velorisApp = initializeApp(velorisFirebaseConfig, "velorisApp");
    auth = getAuth(velorisApp);
    velorisDb = getFirestore(velorisApp);
    db = getFirestore(app);
    storage = getStorage(app);
    console.log("Firebase server initialized.");
  } catch (error) {
    console.error("Error creating firestore instance", error);
  }
  nitroApp.hooks.hook("request", (event) => {
    event.context.db = db;
    event.context.velorisDb = velorisDb;
    event.context.storage = storage;
  });
});

const plugins = [
  _d2tgfFRBAs,
_YF2BBAjZDf,
_9OsEmrLA18
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_NxNy0j = () => Promise.resolve().then(function () { return analytics_post$1; });
const _lazy_De2xyi = () => Promise.resolve().then(function () { return _id__delete$3; });
const _lazy_MXTA2r = () => Promise.resolve().then(function () { return index_get$7; });
const _lazy_iUCZ4j = () => Promise.resolve().then(function () { return index_post$h; });
const _lazy_w2nmbp = () => Promise.resolve().then(function () { return status_put$3; });
const _lazy_wykwNa = () => Promise.resolve().then(function () { return documents_post$1; });
const _lazy_t7svw2 = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_UNpX0F = () => Promise.resolve().then(function () { return message_post$1; });
const _lazy_amiMBq = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_rSEgp7 = () => Promise.resolve().then(function () { return index_post$f; });
const _lazy_BpKRJA = () => Promise.resolve().then(function () { return index_post$d; });
const _lazy_bXJlqs = () => Promise.resolve().then(function () { return _uid__get$1; });
const _lazy_aSqkwF = () => Promise.resolve().then(function () { return index_post$b; });
const _lazy_olKlhe = () => Promise.resolve().then(function () { return read_put$1; });
const _lazy_KWMEmZ = () => Promise.resolve().then(function () { return _orderId__delete$1; });
const _lazy_mU0Xcq = () => Promise.resolve().then(function () { return index_post$9; });
const _lazy_DkMzOL = () => Promise.resolve().then(function () { return resolveOrder_put$1; });
const _lazy_A00C9D = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_CXyXb4 = () => import('file:///app/dashboard/server/api/orders/index.post.js');
const _lazy_yohW8h = () => import('file:///app/dashboard/server/api/orders/index.put.js');
const _lazy_QfSgiO = () => Promise.resolve().then(function () { return index_post$7; });
const _lazy_FMCj2x = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_kSuTx3 = () => Promise.resolve().then(function () { return document_post$1; });
const _lazy_zrfvHQ = () => Promise.resolve().then(function () { return documents_get$1; });
const _lazy_lxxxnB = () => Promise.resolve().then(function () { return ids_get$1; });
const _lazy_Csw2Sc = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_Bkvq3e = () => Promise.resolve().then(function () { return index_post$5; });
const _lazy_Hpdz4P = () => Promise.resolve().then(function () { return index_put$1; });
const _lazy_NyOyjU = () => Promise.resolve().then(function () { return status_put$1; });
const _lazy_71OjcR = () => Promise.resolve().then(function () { return updateAmountPaid$1; });
const _lazy_Habgm2 = () => Promise.resolve().then(function () { return realtimeAnalytics_post$1; });
const _lazy_9Nl6aW = () => import('file:///app/dashboard/server/api/store/%5BitemId%5D.delete.js');
const _lazy_isyPWQ = () => Promise.resolve().then(function () { return _category__get$1; });
const _lazy_5PRYad = () => import('file:///app/dashboard/server/api/store/categories/%5Bcategory%5D.post.js');
const _lazy_gScKBy = () => import('file:///app/dashboard/server/api/store/categories/%5Bcategory%5D/products/%5Bid%5D.get.js');
const _lazy_oqOzJT = () => import('file:///app/dashboard/server/api/store/categories/%5Bcategory%5D/products/index.post.js');
const _lazy_w7LKha = () => import('file:///app/dashboard/server/api/store/categories/%5Bcategory%5D/products/index.put.js');
const _lazy_lYF8iz = () => import('file:///app/dashboard/server/api/store/categories/%5Bcategory%5D/products/update/%5Bid%5D.put.js');
const _lazy_g3t0Yw = () => import('file:///app/dashboard/server/api/store/index.get.js');
const _lazy_Ud12a4 = () => import('file:///app/dashboard/server/api/store/index.put.js');
const _lazy_gx3t76 = () => Promise.resolve().then(function () { return index_post$3; });
const _lazy_Qk6Ud0 = () => Promise.resolve().then(function () { return orderWebhook_post$1; });
const _lazy_fJQu4F = () => Promise.resolve().then(function () { return paymentIntent_post$1; });
const _lazy_UNvwtd = () => Promise.resolve().then(function () { return paymentMethods_get$1; });
const _lazy_vJ514t = () => Promise.resolve().then(function () { return setupIntent$1; });
const _lazy_7Mc3Re = () => Promise.resolve().then(function () { return storeOrder_post$1; });
const _lazy_p2XNmH = () => Promise.resolve().then(function () { return webhook_post$1; });
const _lazy_wH7Ddz = () => Promise.resolve().then(function () { return access_get$1; });
const _lazy_vhw7Mk = () => Promise.resolve().then(function () { return index_delete$1; });
const _lazy_JfUw8w = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_W8Llai = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_kzuOnj = () => Promise.resolve().then(function () { return role_put$1; });
const _lazy_7olyp3 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/analytics', handler: _lazy_NxNy0j, lazy: true, middleware: false, method: "post" },
  { route: '/api/blogs/:id', handler: _lazy_De2xyi, lazy: true, middleware: false, method: "delete" },
  { route: '/api/blogs', handler: _lazy_MXTA2r, lazy: true, middleware: false, method: "get" },
  { route: '/api/blogs', handler: _lazy_iUCZ4j, lazy: true, middleware: false, method: "post" },
  { route: '/api/blogs/status', handler: _lazy_w2nmbp, lazy: true, middleware: false, method: "put" },
  { route: '/api/chatrooms/documents', handler: _lazy_wykwNa, lazy: true, middleware: false, method: "post" },
  { route: '/api/chatrooms/documents/:id', handler: _lazy_t7svw2, lazy: true, middleware: false, method: "get" },
  { route: '/api/chatrooms/message', handler: _lazy_UNpX0F, lazy: true, middleware: false, method: "post" },
  { route: '/api/chatrooms/messages/:id', handler: _lazy_amiMBq, lazy: true, middleware: false, method: "get" },
  { route: '/api/emails', handler: _lazy_rSEgp7, lazy: true, middleware: false, method: "post" },
  { route: '/api/galleries', handler: _lazy_BpKRJA, lazy: true, middleware: false, method: "post" },
  { route: '/api/notifications/:uid', handler: _lazy_bXJlqs, lazy: true, middleware: false, method: "get" },
  { route: '/api/notifications', handler: _lazy_aSqkwF, lazy: true, middleware: false, method: "post" },
  { route: '/api/notifications/read', handler: _lazy_olKlhe, lazy: true, middleware: false, method: "put" },
  { route: '/api/orders/incomplete/:orderId', handler: _lazy_KWMEmZ, lazy: true, middleware: false, method: "delete" },
  { route: '/api/orders/incomplete', handler: _lazy_mU0Xcq, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/incomplete/resolve-order', handler: _lazy_DkMzOL, lazy: true, middleware: false, method: "put" },
  { route: '/api/orders', handler: _lazy_A00C9D, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders', handler: _lazy_CXyXb4, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders', handler: _lazy_yohW8h, lazy: true, middleware: false, method: "put" },
  { route: '/api/payments', handler: _lazy_QfSgiO, lazy: true, middleware: false, method: "post" },
  { route: '/api/projects/:id', handler: _lazy_FMCj2x, lazy: true, middleware: false, method: "delete" },
  { route: '/api/projects/document', handler: _lazy_kSuTx3, lazy: true, middleware: false, method: "post" },
  { route: '/api/projects/documents', handler: _lazy_zrfvHQ, lazy: true, middleware: false, method: "get" },
  { route: '/api/projects/ids', handler: _lazy_lxxxnB, lazy: true, middleware: false, method: "get" },
  { route: '/api/projects', handler: _lazy_Csw2Sc, lazy: true, middleware: false, method: "get" },
  { route: '/api/projects', handler: _lazy_Bkvq3e, lazy: true, middleware: false, method: "post" },
  { route: '/api/projects', handler: _lazy_Hpdz4P, lazy: true, middleware: false, method: "put" },
  { route: '/api/projects/status', handler: _lazy_NyOyjU, lazy: true, middleware: false, method: "put" },
  { route: '/api/projects/update-amount-paid', handler: _lazy_71OjcR, lazy: true, middleware: false, method: undefined },
  { route: '/api/realtimeAnalytics', handler: _lazy_Habgm2, lazy: true, middleware: false, method: "post" },
  { route: '/api/store/:itemId', handler: _lazy_9Nl6aW, lazy: true, middleware: false, method: "delete" },
  { route: '/api/store/categories/:category', handler: _lazy_isyPWQ, lazy: true, middleware: false, method: "get" },
  { route: '/api/store/categories/:category', handler: _lazy_5PRYad, lazy: true, middleware: false, method: "post" },
  { route: '/api/store/categories/:category/products/:id', handler: _lazy_gScKBy, lazy: true, middleware: false, method: "get" },
  { route: '/api/store/categories/:category/products', handler: _lazy_oqOzJT, lazy: true, middleware: false, method: "post" },
  { route: '/api/store/categories/:category/products', handler: _lazy_w7LKha, lazy: true, middleware: false, method: "put" },
  { route: '/api/store/categories/:category/products/update/:id', handler: _lazy_lYF8iz, lazy: true, middleware: false, method: "put" },
  { route: '/api/store', handler: _lazy_g3t0Yw, lazy: true, middleware: false, method: "get" },
  { route: '/api/store', handler: _lazy_Ud12a4, lazy: true, middleware: false, method: "put" },
  { route: '/api/stripe', handler: _lazy_gx3t76, lazy: true, middleware: false, method: "post" },
  { route: '/api/stripe/orderWebhook', handler: _lazy_Qk6Ud0, lazy: true, middleware: false, method: "post" },
  { route: '/api/stripe/payment-intent', handler: _lazy_fJQu4F, lazy: true, middleware: false, method: "post" },
  { route: '/api/stripe/payment-methods', handler: _lazy_UNvwtd, lazy: true, middleware: false, method: "get" },
  { route: '/api/stripe/setup-intent', handler: _lazy_vJ514t, lazy: true, middleware: false, method: undefined },
  { route: '/api/stripe/storeOrder', handler: _lazy_7Mc3Re, lazy: true, middleware: false, method: "post" },
  { route: '/api/stripe/webhook', handler: _lazy_p2XNmH, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/access', handler: _lazy_wH7Ddz, lazy: true, middleware: false, method: "get" },
  { route: '/api/users', handler: _lazy_vhw7Mk, lazy: true, middleware: false, method: "delete" },
  { route: '/api/users', handler: _lazy_JfUw8w, lazy: true, middleware: false, method: "get" },
  { route: '/api/users', handler: _lazy_W8Llai, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/role', handler: _lazy_kzuOnj, lazy: true, middleware: false, method: "put" },
  { route: '/__nuxt_error', handler: _lazy_7olyp3, lazy: true, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_7olyp3, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_7olyp3, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}h1,p,pre{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><pre class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const __filename$1 = fileURLToPath(globalThis._importMeta_.url);
const __dirname$1 = dirname(__filename$1);
const analytics_post = eventHandler(async (event) => {
  const credentialsPath = resolve(
    __dirname$1,
    "../../portfolio-2-64def1e0517b.json"
  );
  process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;
  const analyticsDataClient = new BetaAnalyticsDataClient();
  const propertyId = "452874094";
  const reportRequest = await readBody(event);
  const reportObject = {
    property: `properties/${propertyId}`,
    ...reportRequest
  };
  const [response] = await analyticsDataClient.runReport(reportObject);
  return { ...response, timestamp: /* @__PURE__ */ new Date() };
});

const analytics_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: analytics_post
});

const _id__delete$2 = eventHandler(async (event) => {
  var _a;
  const db = event.context.db;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!id)
    return "404 Document ID not found";
  const colRef = collection(db, "blogs");
  const docRef = doc(colRef, id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error(error);
    return 500;
  }
});

const _id__delete$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$2
});

const index_get$6 = eventHandler(async (event) => {
  const db = event.context.db;
  const colRef = collection(db, "blogs");
  const querySnapshot = await getDocs(colRef);
  const blogs = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data
    };
  });
  const fetchHtmlForBlogs = async (blogs2) => {
    const promises = blogs2.map(async (blog) => {
      if (blog.htmlUrl) {
        try {
          const response = await axios.get(blog.htmlUrl);
          blog.html = response.data;
        } catch (error) {
          console.error(
            `Error fetching HTML for blog ${blog.id}:`,
            error
          );
          blog.html = "";
        }
      }
      return blog;
    });
    return Promise.all(promises);
  };
  const blogsWithHtml = await fetchHtmlForBlogs(blogs);
  return blogsWithHtml;
});

const index_get$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$6
});

const index_post$g = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { content, filename } = body;
  if (!filename || !filename.endsWith(".md")) {
    throw createError({
      statusCode: 400,
      message: "Filename must be provided and end with .md"
    });
  }
  const filePath = resolve("content/blogs", filename);
  try {
    await promises.writeFile(filePath, content, "utf-8");
    console.log("Markdown file saved successfully!");
  } catch (error) {
    console.error(error);
  }
});

const index_post$h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$g
});

const status_put$2 = eventHandler(async (event) => {
  const db = event.context.db;
  const { id, newStatus } = await readBody(event);
  const docRef = doc(db, "blogs", id);
  try {
    await updateDoc(docRef, { status: newStatus });
  } catch (error) {
    console.log(error);
  }
});

const status_put$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: status_put$2
});

const documents_post = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { id, document } = await readBody(event);
  if (!id || !document) {
    throw createError({ statusCode: 400, statusMessage: "id and document required!" });
  }
  document.timestamp = serverTimestamp();
  const projectsColRef = collection(db, "projects");
  const projectDocRef = doc(projectsColRef, id);
  const documentsColRef = collection(projectDocRef, "documents");
  try {
    await addDoc(documentsColRef, document);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to add document to firestore: ${error}`
    });
  }
});

const documents_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: documents_post
});

const _id__get$2 = eventHandler(async (event) => {
  var _a;
  const db = event.context.velorisDb;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  const projectsColRef = collection(db, "projects");
  const projectDocRef = doc(projectsColRef, id);
  const documentsColRef = collection(projectDocRef, "documents");
  try {
    const messagesQuery = query(documentsColRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(messagesQuery);
    const messages = snapshot.docs.map((doc2) => ({
      id: doc2.id,
      ...doc2.data()
    }));
    return messages;
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: `Error getting messages: ${error}` });
  }
});

const _id__get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get$2
});

const message_post = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { id, message } = await readBody(event);
  if (!id || !message)
    throw createError({ statusCode: 400, statusMessage: "id and message are required!" });
  message.timestamp = serverTimestamp();
  const projectsColRef = collection(db, "projects");
  const projectDocRef = doc(projectsColRef, id);
  const messageColRef = collection(projectDocRef, "messages");
  try {
    await addDoc(messageColRef, message);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error adding message document: ${error}`
    });
  }
});

const message_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: message_post
});

const _id__get = eventHandler(async (event) => {
  var _a;
  const db = event.context.velorisDb;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  const projectsColRef = collection(db, "projects");
  const projectDocRef = doc(projectsColRef, id);
  const messagesColRef = collection(projectDocRef, "messages");
  try {
    const messagesQuery = query(messagesColRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(messagesQuery);
    const messages = snapshot.docs.map((doc2) => ({
      id: doc2.id,
      ...doc2.data()
    }));
    console.log(messages);
    return messages;
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: `Error getting messages: ${error}` });
  }
});

const _id__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get
});

const transporter = nodemailer.createTransport({
  host: "smtp.eu.mailgun.org",
  port: 587,
  auth: {
    user: `veloris@mail.codywakeford.com`,
    pass: "ezcWNTbc7sz!WiG"
  }
});
const index_post$e = eventHandler(async (event) => {
  const { email } = await readBody(event);
  email.from = "codypwakeford@gmail.com";
  try {
    await transporter.sendMail(email);
  } catch (error) {
    throw createError({ statusCode: 500, message: `Error sending email: ${error}.` });
  }
});

const index_post$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$e
});

const index_post$c = eventHandler(async (event) => {
  event.context.db;
  event.context.storage;
});

const index_post$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$c
});

const _uid__get = eventHandler(async (event) => {
  var _a, _b;
  const db = event.context.velorisDb;
  if (!((_b = (_a = event.context) == null ? void 0 : _a.params) == null ? void 0 : _b.uid)) {
    throw createError({ statusCode: 400, statusMessage: "id parameter required" });
  }
  const uid = event.context.params.uid;
  const usersColRef = collection(db, "users");
  const userDocRef = doc(usersColRef, uid);
  const userNotificationColRef = collection(userDocRef, "notifications");
  try {
    const snapShot = await getDocs(userNotificationColRef);
    const notifications = snapShot.docs.map(
      (doc2) => ({
        id: doc2.id,
        ...doc2.data()
      })
    );
    return notifications;
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: `Error getting notifications` });
  }
});

const _uid__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _uid__get
});

const index_post$a = defineEventHandler(async (event) => {
  const db = event.context.db;
  const { notification } = await readBody(event);
  if (!notification)
    throw createError({ statusCode: 400 });
  const style = getStyle(notification);
  notification.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  notification.read = false;
  notification.style = style;
  if (!notification.action) {
    notification.action = {
      type: "none"
    };
  }
  const usersColRef = collection(db, "users");
  for (const email of notification.to) {
    const q = query(usersColRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (userDoc) => {
      const userDocRef = doc(db, "users", userDoc.id);
      const userNotificationColRef = collection(userDocRef, "notifications");
      try {
        await addDoc(userNotificationColRef, notification);
      } catch (error) {
        throw createError({
          statusCode: 500,
          statusMessage: `Error adding notification for user with email ${email}: ${error.message}`
        });
      }
    });
  }
});
function getStyle(notification) {
  let style = {
    icon: "",
    backgroundColor: ""
  };
  switch (notification.type) {
    case "store":
      style["icon"] = "ic:baseline-store";
      break;
    case "order":
      style["icon"] = "material-symbols:quick-reorder-outline";
      break;
    case "blog":
      style["icon"] = "material-symbols:edit-outline";
      break;
    case "client":
      style["icon"] = "streamline:information-desk-customer";
      break;
    case "project":
      style["icon"] = "octicon:project";
  }
  switch (notification.mode) {
    case "danger":
      style["backgroundColor"] = "#F7A1A1";
      break;
    case "success":
      style["backgroundColor"] = "#A7C7E7";
      break;
    case "info":
      style["backgroundColor"] = "#F7A1A1";
      break;
    case "warning":
      style["backgroundColor"] = "#FEE4A1";
      break;
  }
  return style;
}

const index_post$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$a
});

const read_put = eventHandler(async (event) => {
  const db = event.context.db;
  const { notificationId, read, userId } = await readBody(event);
  const usersColRef = collection(db, "users");
  const userDocRef = doc(usersColRef, userId);
  const userNotificationColRef = collection(userDocRef, "notifications");
  const docRef = doc(userNotificationColRef, notificationId);
  try {
    await updateDoc(docRef, { read });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error updating notification read status: ${error}`
    });
  }
});

const read_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: read_put
});

const _orderId__delete = eventHandler(async (event) => {
  const db = event.context.db;
  if (!event.context.params || !event.context.params.orderId) {
    console.error("Missing or invalid params or orderId");
    return { error: "Missing or invalid params or orderId" };
  }
  const orderId = event.context.params.orderId;
  const docRef = doc(db, "incomplete-orders", orderId);
  try {
    await deleteDoc(docRef);
    console.log("Order cancelled.");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

const _orderId__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _orderId__delete
});

const index_post$8 = eventHandler(async (event) => {
  const db = event.context.db;
  const body = await readBody(event);
  const colRef = collection(db, "incomplete-orders");
  try {
    const docRef = await addDoc(colRef, body);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

const index_post$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$8
});

const resolveOrder_put = eventHandler(async (event) => {
  const origin = event.node.req.headers["origin"];
  const db = event.context.db;
  const { orderId } = await readBody(event);
  if (!orderId || typeof orderId !== "string") {
    throw createError({
      statusCode: 500,
      statusMessage: "orderId is not found or is not typeof string."
    });
  }
  const docRef = doc(db, "incomplete-orders", orderId);
  let orderData;
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    orderData = docSnap.data();
  } else {
    throw createError({
      statusCode: 500,
      statusMessage: "Incomplete order document not found."
    });
  }
  const colRef = collection(db, "orders");
  try {
    await addDoc(colRef, orderData);
    await deleteDoc(docRef);
    const notification = {
      type: "order",
      mode: "success",
      title: "You have received an order!",
      message: "",
      action: {
        type: "link",
        url: `${origin}/admin/store/orders/${orderId}`
      }
    };
    await axios.post(`${origin}/api/notifications`, { notification });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error adding order document:"
    });
  }
});

const resolveOrder_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: resolveOrder_put
});

const index_get$4 = eventHandler(async (event) => {
  try {
    const db = event.context.db;
    const ordersCol = collection(db, "orders");
    const ordersQuery = query(ordersCol, orderBy("timestamp", "desc"));
    const ordersSnap = await getDocs(ordersQuery);
    const orders = ordersSnap.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return orders;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error: ${error}`
    });
  }
});

const index_get$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$4
});

const index_post$6 = eventHandler(async (event) => {
  const db = event.context.db;
  const { paymentRecord } = await readBody(event);
  if (!paymentRecord) {
    throw createError({ statusCode: 400, statusMessage: "Payment record not recieved." });
  }
  const colRef = collection(db, "payments");
  try {
    await addDoc(colRef, paymentRecord);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error saving payment record ${error}`
    });
  }
});

const index_post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$6
});

const _id__delete = eventHandler(async (event) => {
  var _a;
  const db = event.context.velorisDb;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!id)
    throw createError({ statusCode: 400, statusMessage: "Id not found!" });
  const colRef = collection(db, "projects");
  const docRef = doc(colRef, id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error deleting project document ${error}`
    });
  }
});

const _id__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete
});

const document_post = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { id, document } = await readBody(event);
  if (!id || !document) {
    throw createError({
      statusCode: 400,
      statusMessage: "/api/projects/document is missing either id or document permameters."
    });
  }
  const colRef = collection(db, "projects");
  const docRef = doc(colRef, id);
  try {
    await updateDoc(docRef, {
      documents: arrayUnion(document)
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `An error occured while adding a document to the project: ${error}`
    });
  }
});

const document_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: document_post
});

const documents_get = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { id, document } = await readBody(event);
  if (!id || !document) {
    throw createError({
      statusCode: 400,
      statusMessage: "/api/projects/document is missing either id or document permameters."
    });
  }
  const colRef = collection(db, "projects");
  const docRef = doc(colRef, id);
  const documentsColRef = collection(docRef, "project-documents");
  try {
    const snapshot = await getDocs(documentsColRef);
    return snapshot.docs.map((doc2) => {
      return {
        id: doc2.id,
        ...doc2.data()
      };
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `An error occured while adding a document to the project: ${error}`
    });
  }
});

const documents_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: documents_get
});

const ids_get = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const colRef = collection(db, "projects");
  const snapshot = await getDocs(colRef);
  const projectsIdArray = snapshot.docs.map((doc2) => doc2.id);
  return projectsIdArray || [];
});

const ids_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ids_get
});

const index_get$2 = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const colRef = collection(db, "projects");
  const snapshot = await getDocs(colRef);
  const projectsArray = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return projectsArray || [];
});

const index_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$2
});

const index_post$4 = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { project } = await readBody(event);
  if (!project) {
    throw createError({
      statusCode: 400,
      statusMessage: "No project data found"
    });
  }
  try {
    const colRef = collection(db, "projects");
    await addDoc(colRef, project);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Unable to create project: ${error}`
    });
  }
});

const index_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$4
});

const index_put = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { id, key, value } = await readBody(event);
  const colRef = collection(db, "projects");
  const docRef = doc(colRef, id);
  try {
    await updateDoc(docRef, { [key]: value });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error updating ${key} with ${value}: ${error}`
    });
  }
});

const index_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_put
});

const status_put = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { id, phase } = await readBody(event);
  if (!id || !phase)
    throw createError({ statusCode: 400, statusMessage: "Id and status are required!" });
  const colRef = collection(db, "projects");
  const docRef = doc(colRef, id);
  try {
    await updateDoc(docRef, { phase });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error updating document status: ${error}`
    });
  }
});

const status_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: status_put
});

const updateAmountPaid = eventHandler(async (event) => {
  const db = event.context.db;
  const { id, amountPaid } = await readBody(event);
  const colRef = collection(db, "projects");
  const docRef = doc(colRef, id);
  try {
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists())
      return;
    const data = snapshot.data();
    if (!data || !data.quote) {
      throw createError({ statusCode: 404, statusMessage: "Project quote not found!" });
    }
    data.quote.amountPaid += amountPaid;
    await updateDoc(docRef, { quote: data.quote });
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: `Error reading document: ${error}` });
  }
});

const updateAmountPaid$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: updateAmountPaid
});

const __filename = fileURLToPath(globalThis._importMeta_.url);
const __dirname = dirname(__filename);
const realtimeAnalytics_post = eventHandler(async (event) => {
  const credentialsPath = resolve(
    __dirname,
    "../../portfolio-2-64def1e0517b.json"
  );
  process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;
  const analyticsDataClient = new BetaAnalyticsDataClient();
  const propertyId = "452874094";
  const reportRequest = await readBody(event);
  const reportObject = {
    property: `properties/${propertyId}`,
    ...reportRequest
  };
  const [response] = await analyticsDataClient.runRealtimeReport(reportObject);
  return { ...response, timestamp: /* @__PURE__ */ new Date() };
});

const realtimeAnalytics_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: realtimeAnalytics_post
});

const _category__get = eventHandler(async (event) => {
  const db = event.context.db;
  const params = event.context.params || {};
  const category = params.category;
  const itemsColRef = collection(db, `store/${category}/items`);
  const docSnap = await getDocs(itemsColRef);
  const items = docSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
  return items;
});

const _category__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _category__get
});

const config$6 = useRuntimeConfig();
const STRIPE_SECRET_KEY$3 = config$6.STRIPE_SECRET_KEY;
const stripe$6 = new Stripe(STRIPE_SECRET_KEY$3);
const index_post$2 = eventHandler(async (event) => {
  const { paymentOptions } = await readBody(event);
  const origin = event.node.req.headers["origin"];
  try {
    const session = await stripe$6.checkout.sessions.create({
      ...paymentOptions,
      success_url: `${origin}/admin/dev?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`
    });
    return { sessionId: session.id };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: `Error creating session ID: ${error}` });
  }
});

const index_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$2
});

const config$5 = useRuntimeConfig();
const STRIPE_WEBHOOK_SECRET = config$5.STRIPE_WEBHOOK_SECRET;
const stripe$5 = new Stripe(process.env.STRIPE_WEBHOOK_SECRET, {
  apiVersion: "2024-06-20"
});
const orderWebhook_post = eventHandler(async (event) => {
  const sig = event.node.req.headers["stripe-signature"];
  const body = await readRawBody(event);
  const origin = event.node.req.headers["origin"];
  let stripeEvent;
  if (!sig || !body) {
    console.error("Missing signature or body");
    return { error: "Missing signature or body" };
  }
  try {
    stripeEvent = stripe$5.webhooks.constructEvent(
      body,
      sig,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook signature verification failed.`, err.message);
    return { error: "Webhook signature verification failed." };
  }
  switch (stripeEvent.type) {
    case "checkout.session.completed": {
      const paymentIntent = stripeEvent.data.object;
      const metadata = paymentIntent.metadata;
      const orderId = metadata == null ? void 0 : metadata.orderId;
      if (!orderId) {
        console.error("Missing or invalid orderId in metadata");
        return { error: "Missing or invalid orderId in metadata" };
      }
      try {
        await useFetch(
          `${origin}/api/orders/incomplete/resolve-order`,
          {
            method: "PUT",
            body: { orderId }
          }
        );
      } catch (error) {
        console.error("Error resolving order", error);
      }
      console.log("Payment received, order is live.");
      break;
    }
    default:
      console.log(`Unhandled event type ${stripeEvent.type}`);
      return 500;
  }
  return { received: true };
});

const orderWebhook_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: orderWebhook_post
});

const config$4 = useRuntimeConfig();
const STRIPE_SECRET_KEY$2 = config$4.STRIPE_SECRET_KEY;
const stripe$4 = new Stripe(STRIPE_SECRET_KEY$2, { apiVersion: "2024-06-20" });
const paymentIntent_post = eventHandler(async (event) => {
  const { paymentOptions } = await readBody(event);
  try {
    const paymentIntent = await stripe$4.paymentIntents.create({
      ...paymentOptions,
      payment_method_types: ["card"]
    });
    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Error creating client secret: ${error}`
    });
  }
});

const paymentIntent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: paymentIntent_post
});

const config$3 = useRuntimeConfig();
const STRIPE_SECRET_KEY$1 = config$3.STRIPE_SECRET_KEY;
const stripe$3 = new Stripe(STRIPE_SECRET_KEY$1, { apiVersion: "2024-06-20" });
const paymentMethods_get = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const customerId = query.customerId;
  if (!customerId) {
    return {
      status: 400,
      message: "Customer ID is required"
    };
  }
  try {
    const paymentMethods = await stripe$3.paymentMethods.list({
      customer: customerId,
      type: "card"
      // Specify the payment method type (e.g., 'card')
    });
    return paymentMethods.data;
  } catch (error) {
    console.error("Error fetching payment methods:", error);
    return {
      status: 500,
      message: "Failed to fetch payment methods"
    };
  }
});

const paymentMethods_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: paymentMethods_get
});

const config$2 = useRuntimeConfig();
const STRIPE_SECRET_KEY = config$2.STRIPE_SECRET_KEY;
const stripe$2 = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
const setupIntent = defineEventHandler(async (event) => {
  try {
    const setupIntent = await stripe$2.setupIntents.create({
      payment_method_types: ["card"]
    });
    return { clientSecret: setupIntent.client_secret };
  } catch (error) {
    console.error("Error creating Setup Intent:", error);
    return {
      status: 500,
      message: "Failed to create Setup Intent"
    };
  }
});

const setupIntent$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: setupIntent
});

const config$1 = useRuntimeConfig();
const stripe$1 = new Stripe(config$1.STRIPE_SECRET_KEY);
const storeOrder_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const { total, itemName, order } = body;
  const origin = event.node.req.headers["origin"];
  const response = await axios.post(`${origin}/api/orders/incomplete`, order);
  const orderID = response.data;
  try {
    const session = await stripe$1.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: itemName
            },
            unit_amount: total
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${origin}/admin/dev?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`,
      metadata: { orderId: orderID }
      // Veloris 2.5% service fee //
      // payment_intent_data: {
      //     application_fee_amount: Math.round(total * 0.025),
      //     transfer_data: {
      //         // TODO: Change to company account, this is Cody's test account //
      //         destination: "acct_1Puv9RDO9pf6iPuQ",
      //     },
      // },
    });
    return { sessionId: session.id };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
});

const storeOrder_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: storeOrder_post
});

const config = useRuntimeConfig();
const stripe = new Stripe(config.STRIPE_SECRET_KEY);
const webhook_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const { paymentOptions } = body;
  const origin = event.node.req.headers["origin"];
  try {
    const session = await stripe.checkout.sessions.create({
      ...paymentOptions,
      success_url: `${origin}/admin/dev?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`
      // Veloris 2.5% service fee //
      // payment_intent_data: {
      //     application_fee_amount: Math.round(total * 0.025),
      //     transfer_data: {
      //         // TODO: Change to company account, this is Cody's test account //
      //         destination: "acct_1Puv9RDO9pf6iPuQ",
      //     },
      // },
    });
    return { sessionId: session.id };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
});

const webhook_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: webhook_post
});

const access_get = eventHandler(
  async (event) => {
    const db = event.context.velorisDb;
    const query = getQuery$1(event);
    const uid = query.uid;
    if (!uid) {
      console.error("Document ID not provided");
      throw createError({
        statusCode: 400,
        statusMessage: "uid required"
      });
    }
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw createError({
          statusCode: 404,
          statusMessage: "Document not found"
        });
      }
      const userObj = docSnap.data();
      return userObj.siteAccess || [];
    } catch (error) {
      console.error("Error fetching document: ", error);
      throw createError({ statusCode: 500, statusMessage: `${error}` });
    }
  }
);

const access_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: access_get
});

const index_delete = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const params = event.context.params || {};
  const email = params.email;
  if (!email) {
    return {
      status: 400,
      message: "Email parameter is required"
    };
  }
  const usersColRef = collection(db, "users");
  const q = query(usersColRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return {
      status: 404,
      message: "User not found"
    };
  }
  const userDoc = querySnapshot.docs[0];
  const userRef = doc(db, "users", userDoc.id);
  try {
    await deleteDoc(userRef);
    return {
      status: 200,
      message: "User deleted updated successfully"
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      status: 500,
      message: "Error deleting user "
    };
  }
});

const index_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_delete
});

const index_get = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const itemsColRef = collection(db, "users");
  const docSnap = await getDocs(itemsColRef);
  const users = docSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
  return users;
});

const index_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get
});

const index_post = eventHandler(async (event) => {
  const db = event.context.velorisDb;
  const { uid, email, domain } = await readBody(event);
  if (!uid || !email || !domain)
    throw createError({ statusCode: 400 });
  const docRef = doc(db, "users", uid);
  let role = "user";
  {
    role = "dev";
  }
  const data = {
    email,
    siteAccess: [{ domain, role }]
  };
  try {
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, data);
    }
  } catch (error) {
    console.error("Error adding document: ", error);
    throw createError({
      statusCode: 500,
      statusMessage: `POST: /api/users: ${error}`
    });
  }
});

const index_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post
});

const role_put = eventHandler(async (event) => {
  const { email, newRole } = await readBody(event);
  if (!email || !newRole) {
    return {
      status: 400,
      message: "Email and newRole are required"
    };
  }
  const db = event.context.velorisDb;
  const usersColRef = collection(db, "users");
  const q = query(usersColRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return {
      status: 404,
      message: "User not found"
    };
  }
  const userDoc = querySnapshot.docs[0];
  const userRef = doc(db, "users", userDoc.id);
  try {
    await updateDoc(userRef, {
      role: newRole
    });
    return {
      status: 200,
      message: "User role updated successfully"
    };
  } catch (error) {
    console.error("Error updating user role:", error);
    return {
      status: 500,
      message: "Error updating user role"
    };
  }
});

const role_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: role_put
});

const Vue3 = version[0] === "3";

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref) {
  if (ref instanceof Promise || ref instanceof Date || ref instanceof RegExp)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {"omitLineBreaks":false};

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///app/site/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///app/site/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.headEntries()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link = islandHead.link || [];
    islandHead.style = islandHead.style || [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid].replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
