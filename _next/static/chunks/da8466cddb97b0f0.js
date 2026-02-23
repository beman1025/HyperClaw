(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  858434,
  329096,
  (e) => {
    "use strict";
    var t = e.i(95767),
      i = e.i(588134),
      n = e.i(468368),
      r = e.i(871706),
      a = e.i(984534),
      o = e.i(522662);
    let s = new Map();
    async function u(e) {
      let {
          getSocket: i,
          keepAlive: n = !0,
          key: u = "socket",
          reconnect: l = !0,
          url: d,
        } = e,
        { interval: c = 3e4 } = "object" == typeof n ? n : {},
        { attempts: m = 5, delay: p = 2e3 } = "object" == typeof l ? l : {},
        f = JSON.stringify({ keepAlive: n, key: u, url: d, reconnect: l }),
        g = s.get(f);
      if (g) return g;
      let v = 0,
        { schedule: h } = (0, r.createBatchScheduler)({
          id: f,
          fn: async () => {
            let e,
              r,
              u,
              h = new Map(),
              $ = new Map(),
              b = !1;
            function y() {
              l && v < m
                ? b ||
                  ((b = !0),
                  v++,
                  r?.close(),
                  setTimeout(async () => {
                    await _().catch(console.error), (b = !1);
                  }, p))
                : (h.clear(), $.clear());
            }
            async function _() {
              let a = await i({
                onClose() {
                  for (let e of h.values())
                    e.onError?.(new t.SocketClosedError({ url: d }));
                  for (let e of $.values())
                    e.onError?.(new t.SocketClosedError({ url: d }));
                  y();
                },
                onError(t) {
                  for (let i of ((e = t), h.values())) i.onError?.(e);
                  for (let t of $.values()) t.onError?.(e);
                  y();
                },
                onOpen() {
                  (e = void 0), (v = 0);
                },
                onResponse(e) {
                  let t = "eth_subscription" === e.method,
                    i = t ? e.params.subscription : e.id,
                    n = t ? $ : h,
                    r = n.get(i);
                  r && r.onResponse(e), t || n.delete(i);
                },
              });
              if (
                ((r = a),
                n &&
                  (u && clearInterval(u),
                  (u = setInterval(() => r.ping?.(), c))),
                l && $.size > 0)
              )
                for (let [
                  e,
                  { onResponse: t, body: i, onError: n },
                ] of $.entries())
                  i &&
                    ($.delete(e),
                    g?.request({ body: i, onResponse: t, onError: n }));
              return a;
            }
            return (
              await _(),
              (e = void 0),
              (g = {
                close() {
                  u && clearInterval(u), r.close(), s.delete(f);
                },
                get socket() {
                  return r;
                },
                request({ body: t, onError: i, onResponse: n }) {
                  e && i && i(e);
                  let a = t.id ?? o.idCache.take(),
                    s = (e) => {
                      ("number" != typeof e.id || a === e.id) &&
                        ("eth_subscribe" === t.method &&
                          "string" == typeof e.result &&
                          $.set(e.result, {
                            onResponse: s,
                            onError: i,
                            body: t,
                          }),
                        n(e));
                    };
                  "eth_unsubscribe" === t.method && $.delete(t.params?.[0]),
                    h.set(a, { onResponse: s, onError: i });
                  try {
                    r.request({ body: { jsonrpc: "2.0", id: a, ...t } });
                  } catch (e) {
                    i?.(e);
                  }
                },
                requestAsync({ body: e, timeout: i = 1e4 }) {
                  return (0, a.withTimeout)(
                    () =>
                      new Promise((t, i) =>
                        this.request({ body: e, onError: i, onResponse: t })
                      ),
                    {
                      errorInstance: new t.TimeoutError({ body: e, url: d }),
                      timeout: i,
                    }
                  );
                },
                requests: h,
                subscriptions: $,
                url: d,
              }),
              s.set(f, g),
              [g]
            );
          },
        }),
        [$, [b]] = await h();
      return b;
    }
    async function l(i, n = {}) {
      let { keepAlive: r, reconnect: a } = n;
      return u({
        async getSocket({ onClose: n, onError: r, onOpen: a, onResponse: o }) {
          let s = await e.A(432003).then((e) => e.WebSocket),
            u = new s(i);
          function l() {
            u.removeEventListener("close", l),
              u.removeEventListener("message", d),
              u.removeEventListener("error", r),
              u.removeEventListener("open", a),
              n();
          }
          function d({ data: e }) {
            if ("string" != typeof e || 0 !== e.trim().length)
              try {
                let t = JSON.parse(e);
                o(t);
              } catch (e) {
                r(e);
              }
          }
          u.addEventListener("close", l),
            u.addEventListener("message", d),
            u.addEventListener("error", r),
            u.addEventListener("open", a),
            u.readyState === s.CONNECTING &&
              (await new Promise((e, t) => {
                u && ((u.onopen = e), (u.onerror = t));
              }));
          let { close: c } = u;
          return Object.assign(u, {
            close() {
              c.bind(u)(), l();
            },
            ping() {
              try {
                if (u.readyState === u.CLOSED || u.readyState === u.CLOSING)
                  throw new t.WebSocketRequestError({
                    url: u.url,
                    cause: new t.SocketClosedError({ url: u.url }),
                  });
                u.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    id: null,
                    method: "net_version",
                    params: [],
                  })
                );
              } catch (e) {
                r(e);
              }
            },
            request({ body: e }) {
              if (u.readyState === u.CLOSED || u.readyState === u.CLOSING)
                throw new t.WebSocketRequestError({
                  body: e,
                  url: u.url,
                  cause: new t.SocketClosedError({ url: u.url }),
                });
              return u.send(JSON.stringify(e));
            },
          });
        },
        keepAlive: r,
        reconnect: a,
        url: i,
      });
    }
    async function d(e, { body: t, timeout: i = 1e4 }) {
      return e.requestAsync({ body: t, timeout: i });
    }
    async function c(e) {
      let t = await l(e);
      return Object.assign(t.socket, {
        requests: t.requests,
        subscriptions: t.subscriptions,
      });
    }
    e.s(
      [
        "getSocket",
        () => c,
        "rpc",
        0,
        {
          http: (e, t) => (0, n.getHttpRpcClient)(e).request(t),
          webSocket: function (e, { body: t, onError: i, onResponse: n }) {
            return e.request({ body: t, onError: i, onResponse: n }), e;
          },
          webSocketAsync: d,
        },
      ],
      329096
    );
    var m = e.i(695331);
    function p(e, n = {}) {
      let {
        keepAlive: r,
        key: a = "webSocket",
        methods: o,
        name: s = "WebSocket JSON-RPC",
        reconnect: u,
        retryDelay: d,
      } = n;
      return ({ chain: p, retryCount: f, timeout: g }) => {
        let v = n.retryCount ?? f,
          h = g ?? n.timeout ?? 1e4,
          $ = e || p?.rpcUrls.default.webSocket?.[0],
          b = { keepAlive: r, reconnect: u };
        if (!$) throw new i.UrlRequiredError();
        return (0, m.createTransport)(
          {
            key: a,
            methods: o,
            name: s,
            async request({ method: e, params: i }) {
              let n = { method: e, params: i },
                r = await l($, b),
                { error: a, result: o } = await r.requestAsync({
                  body: n,
                  timeout: h,
                });
              if (a) throw new t.RpcRequestError({ body: n, error: a, url: $ });
              return o;
            },
            retryCount: v,
            retryDelay: d,
            timeout: h,
            type: "webSocket",
          },
          {
            getSocket: () => c($),
            getRpcClient: () => l($, b),
            async subscribe({ params: e, onData: t, onError: i }) {
              let n = await l($, b),
                { result: r } = await new Promise((r, a) =>
                  n.request({
                    body: { method: "eth_subscribe", params: e },
                    onError(e) {
                      a(e), i?.(e);
                    },
                    onResponse(e) {
                      if (e.error) {
                        a(e.error), i?.(e.error);
                        return;
                      }
                      "number" == typeof e.id
                        ? r(e)
                        : "eth_subscription" === e.method && t(e.params);
                    },
                  })
                );
              return {
                subscriptionId: r,
                unsubscribe: async () =>
                  new Promise((e) =>
                    n.request({
                      body: { method: "eth_unsubscribe", params: [r] },
                      onResponse: e,
                    })
                  ),
              };
            },
          }
        );
      };
    }
    e.s(["webSocket", () => p], 858434);
  },
  428064,
  (e) => {
    "use strict";
    e.s([]);
  },
  938819,
  786345,
  427332,
  623369,
  464703,
  (e) => {
    "use strict";
    let t = Object.freeze({ status: "aborted" });
    function i(e, t, i) {
      function n(i, n) {
        if (
          (i._zod ||
            Object.defineProperty(i, "_zod", {
              value: { def: n, constr: o, traits: new Set() },
              enumerable: !1,
            }),
          i._zod.traits.has(e))
        )
          return;
        i._zod.traits.add(e), t(i, n);
        let r = o.prototype,
          a = Object.keys(r);
        for (let e = 0; e < a.length; e++) {
          let t = a[e];
          t in i || (i[t] = r[t].bind(i));
        }
      }
      let r = i?.Parent ?? Object;
      class a extends r {}
      function o(e) {
        var t;
        let r = i?.Parent ? new a() : this;
        for (let i of (n(r, e),
        (t = r._zod).deferred ?? (t.deferred = []),
        r._zod.deferred))
          i();
        return r;
      }
      return (
        Object.defineProperty(a, "name", { value: e }),
        Object.defineProperty(o, "init", { value: n }),
        Object.defineProperty(o, Symbol.hasInstance, {
          value: (t) =>
            (!!i?.Parent && t instanceof i.Parent) || t?._zod?.traits?.has(e),
        }),
        Object.defineProperty(o, "name", { value: e }),
        o
      );
    }
    let n = Symbol("zod_brand");
    class r extends Error {
      constructor() {
        super(
          "Encountered Promise during synchronous parse. Use .parseAsync() instead."
        );
      }
    }
    class a extends Error {
      constructor(e) {
        super(`Encountered unidirectional transform during encode: ${e}`),
          (this.name = "ZodEncodeError");
      }
    }
    let o = {};
    function s(e) {
      return e && Object.assign(o, e), o;
    }
    function u(e) {
      return e;
    }
    function l(e) {
      return e;
    }
    function d(e) {}
    function c(e) {
      throw Error("Unexpected value in exhaustive check");
    }
    function m(e) {}
    function p(e) {
      let t = Object.values(e).filter((e) => "number" == typeof e);
      return Object.entries(e)
        .filter(([e, i]) => -1 === t.indexOf(+e))
        .map(([e, t]) => t);
    }
    function f(e, t = "|") {
      return e.map((e) => F(e)).join(t);
    }
    function g(e, t) {
      return "bigint" == typeof t ? t.toString() : t;
    }
    function v(e) {
      return {
        get value() {
          {
            let t = e();
            return Object.defineProperty(this, "value", { value: t }), t;
          }
        },
      };
    }
    function h(e) {
      return null == e;
    }
    function $(e) {
      let t = +!!e.startsWith("^"),
        i = e.endsWith("$") ? e.length - 1 : e.length;
      return e.slice(t, i);
    }
    function b(e, t) {
      let i = (e.toString().split(".")[1] || "").length,
        n = t.toString(),
        r = (n.split(".")[1] || "").length;
      if (0 === r && /\d?e-\d?/.test(n)) {
        let e = n.match(/\d?e-(\d?)/);
        e?.[1] && (r = Number.parseInt(e[1]));
      }
      let a = i > r ? i : r;
      return (
        (Number.parseInt(e.toFixed(a).replace(".", "")) %
          Number.parseInt(t.toFixed(a).replace(".", ""))) /
        10 ** a
      );
    }
    e.s(
      [
        "$ZodAsyncError",
        () => r,
        "$ZodEncodeError",
        () => a,
        "$brand",
        0,
        n,
        "$constructor",
        () => i,
        "NEVER",
        0,
        t,
        "config",
        () => s,
        "globalConfig",
        0,
        o,
      ],
      496072
    );
    let y = Symbol("evaluating");
    function _(e, t, i) {
      let n;
      Object.defineProperty(e, t, {
        get() {
          if (n !== y) return void 0 === n && ((n = y), (n = i())), n;
        },
        set(i) {
          Object.defineProperty(e, t, { value: i });
        },
        configurable: !0,
      });
    }
    function x(e) {
      return Object.create(
        Object.getPrototypeOf(e),
        Object.getOwnPropertyDescriptors(e)
      );
    }
    function k(e, t, i) {
      Object.defineProperty(e, t, {
        value: i,
        writable: !0,
        enumerable: !0,
        configurable: !0,
      });
    }
    function I(...e) {
      let t = {};
      for (let i of e) Object.assign(t, Object.getOwnPropertyDescriptors(i));
      return Object.defineProperties({}, t);
    }
    function w(e) {
      return I(e._zod.def);
    }
    function S(e, t) {
      return t ? t.reduce((e, t) => e?.[t], e) : e;
    }
    function z(e) {
      let t = Object.keys(e);
      return Promise.all(t.map((t) => e[t])).then((e) => {
        let i = {};
        for (let n = 0; n < t.length; n++) i[t[n]] = e[n];
        return i;
      });
    }
    function j(e = 10) {
      let t = "abcdefghijklmnopqrstuvwxyz",
        i = "";
      for (let n = 0; n < e; n++) i += t[Math.floor(Math.random() * t.length)];
      return i;
    }
    function Z(e) {
      return JSON.stringify(e);
    }
    function U(e) {
      return e
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    let O =
      "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
    function P(e) {
      return "object" == typeof e && null !== e && !Array.isArray(e);
    }
    let D = v(() => {
      if (
        "u" > typeof navigator &&
        navigator?.userAgent?.includes("Cloudflare")
      )
        return !1;
      try {
        return Function(""), !0;
      } catch (e) {
        return !1;
      }
    });
    function E(e) {
      if (!1 === P(e)) return !1;
      let t = e.constructor;
      if (void 0 === t || "function" != typeof t) return !0;
      let i = t.prototype;
      return (
        !1 !== P(i) &&
        !1 !== Object.prototype.hasOwnProperty.call(i, "isPrototypeOf")
      );
    }
    function N(e) {
      return E(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
    }
    function R(e) {
      let t = 0;
      for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && t++;
      return t;
    }
    let A = new Set(["string", "number", "symbol"]),
      T = new Set([
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol",
        "undefined",
      ]);
    function M(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function C(e, t, i) {
      let n = new e._zod.constr(t ?? e._zod.def);
      return (!t || i?.parent) && (n._zod.parent = e), n;
    }
    function L(e) {
      if (!e) return {};
      if ("string" == typeof e) return { error: () => e };
      if (e?.message !== void 0) {
        if (e?.error !== void 0)
          throw Error("Cannot specify both `message` and `error` params");
        e.error = e.message;
      }
      return (delete e.message, "string" == typeof e.error)
        ? { ...e, error: () => e.error }
        : e;
    }
    function q(e) {
      let t;
      return new Proxy(
        {},
        {
          get: (i, n, r) => (t ?? (t = e()), Reflect.get(t, n, r)),
          set: (i, n, r, a) => (t ?? (t = e()), Reflect.set(t, n, r, a)),
          has: (i, n) => (t ?? (t = e()), Reflect.has(t, n)),
          deleteProperty: (i, n) => (
            t ?? (t = e()), Reflect.deleteProperty(t, n)
          ),
          ownKeys: (i) => (t ?? (t = e()), Reflect.ownKeys(t)),
          getOwnPropertyDescriptor: (i, n) => (
            t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, n)
          ),
          defineProperty: (i, n, r) => (
            t ?? (t = e()), Reflect.defineProperty(t, n, r)
          ),
        }
      );
    }
    function F(e) {
      return "bigint" == typeof e
        ? e.toString() + "n"
        : "string" == typeof e
        ? `"${e}"`
        : `${e}`;
    }
    function J(e) {
      return Object.keys(e).filter(
        (t) => "optional" === e[t]._zod.optin && "optional" === e[t]._zod.optout
      );
    }
    let K = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      },
      B = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
      };
    function V(e, t) {
      let i = e._zod.def,
        n = i.checks;
      if (n && n.length > 0)
        throw Error(
          ".pick() cannot be used on object schemas containing refinements"
        );
      let r = I(e._zod.def, {
        get shape() {
          let e = {};
          for (let n in t) {
            if (!(n in i.shape)) throw Error(`Unrecognized key: "${n}"`);
            t[n] && (e[n] = i.shape[n]);
          }
          return k(this, "shape", e), e;
        },
        checks: [],
      });
      return C(e, r);
    }
    function G(e, t) {
      let i = e._zod.def,
        n = i.checks;
      if (n && n.length > 0)
        throw Error(
          ".omit() cannot be used on object schemas containing refinements"
        );
      let r = I(e._zod.def, {
        get shape() {
          let n = { ...e._zod.def.shape };
          for (let e in t) {
            if (!(e in i.shape)) throw Error(`Unrecognized key: "${e}"`);
            t[e] && delete n[e];
          }
          return k(this, "shape", n), n;
        },
        checks: [],
      });
      return C(e, r);
    }
    function W(e, t) {
      if (!E(t))
        throw Error("Invalid input to extend: expected a plain object");
      let i = e._zod.def.checks;
      if (i && i.length > 0) {
        let i = e._zod.def.shape;
        for (let e in t)
          if (void 0 !== Object.getOwnPropertyDescriptor(i, e))
            throw Error(
              "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead."
            );
      }
      let n = I(e._zod.def, {
        get shape() {
          let i = { ...e._zod.def.shape, ...t };
          return k(this, "shape", i), i;
        },
      });
      return C(e, n);
    }
    function X(e, t) {
      if (!E(t))
        throw Error("Invalid input to safeExtend: expected a plain object");
      let i = I(e._zod.def, {
        get shape() {
          let i = { ...e._zod.def.shape, ...t };
          return k(this, "shape", i), i;
        },
      });
      return C(e, i);
    }
    function H(e, t) {
      let i = I(e._zod.def, {
        get shape() {
          let i = { ...e._zod.def.shape, ...t._zod.def.shape };
          return k(this, "shape", i), i;
        },
        get catchall() {
          return t._zod.def.catchall;
        },
        checks: [],
      });
      return C(e, i);
    }
    function Y(e, t, i) {
      let n = t._zod.def.checks;
      if (n && n.length > 0)
        throw Error(
          ".partial() cannot be used on object schemas containing refinements"
        );
      let r = I(t._zod.def, {
        get shape() {
          let n = t._zod.def.shape,
            r = { ...n };
          if (i)
            for (let t in i) {
              if (!(t in n)) throw Error(`Unrecognized key: "${t}"`);
              i[t] &&
                (r[t] = e
                  ? new e({ type: "optional", innerType: n[t] })
                  : n[t]);
            }
          else
            for (let t in n)
              r[t] = e ? new e({ type: "optional", innerType: n[t] }) : n[t];
          return k(this, "shape", r), r;
        },
        checks: [],
      });
      return C(t, r);
    }
    function Q(e, t, i) {
      let n = I(t._zod.def, {
        get shape() {
          let n = t._zod.def.shape,
            r = { ...n };
          if (i)
            for (let t in i) {
              if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
              i[t] && (r[t] = new e({ type: "nonoptional", innerType: n[t] }));
            }
          else
            for (let t in n)
              r[t] = new e({ type: "nonoptional", innerType: n[t] });
          return k(this, "shape", r), r;
        },
      });
      return C(t, n);
    }
    function ee(e, t = 0) {
      if (!0 === e.aborted) return !0;
      for (let i = t; i < e.issues.length; i++)
        if (e.issues[i]?.continue !== !0) return !0;
      return !1;
    }
    function et(e, t) {
      return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
    }
    function ei(e) {
      return "string" == typeof e ? e : e?.message;
    }
    function en(e, t, i) {
      let n = { ...e, path: e.path ?? [] };
      return (
        e.message ||
          (n.message =
            ei(e.inst?._zod.def?.error?.(e)) ??
            ei(t?.error?.(e)) ??
            ei(i.customError?.(e)) ??
            ei(i.localeError?.(e)) ??
            "Invalid input"),
        delete n.inst,
        delete n.continue,
        t?.reportInput || delete n.input,
        n
      );
    }
    function er(e) {
      return e instanceof Set
        ? "set"
        : e instanceof Map
        ? "map"
        : e instanceof File
        ? "file"
        : "unknown";
    }
    function ea(e) {
      return Array.isArray(e)
        ? "array"
        : "string" == typeof e
        ? "string"
        : "unknown";
    }
    function eo(e) {
      let t = typeof e;
      switch (t) {
        case "number":
          return Number.isNaN(e) ? "nan" : "number";
        case "object":
          if (null === e) return "null";
          if (Array.isArray(e)) return "array";
          if (
            e &&
            Object.getPrototypeOf(e) !== Object.prototype &&
            "constructor" in e &&
            e.constructor
          )
            return e.constructor.name;
      }
      return t;
    }
    function es(...e) {
      let [t, i, n] = e;
      return "string" == typeof t
        ? { message: t, code: "custom", input: i, inst: n }
        : { ...t };
    }
    function eu(e) {
      return Object.entries(e)
        .filter(([e, t]) => Number.isNaN(Number.parseInt(e, 10)))
        .map((e) => e[1]);
    }
    function el(e) {
      let t = atob(e),
        i = new Uint8Array(t.length);
      for (let e = 0; e < t.length; e++) i[e] = t.charCodeAt(e);
      return i;
    }
    function ed(e) {
      let t = "";
      for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
      return btoa(t);
    }
    function ec(e) {
      let t = e.replace(/-/g, "+").replace(/_/g, "/"),
        i = "=".repeat((4 - (t.length % 4)) % 4);
      return el(t + i);
    }
    function em(e) {
      return ed(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    function ep(e) {
      let t = e.replace(/^0x/, "");
      if (t.length % 2 != 0) throw Error("Invalid hex string length");
      let i = new Uint8Array(t.length / 2);
      for (let e = 0; e < t.length; e += 2)
        i[e / 2] = Number.parseInt(t.slice(e, e + 2), 16);
      return i;
    }
    function ef(e) {
      return Array.from(e)
        .map((e) => e.toString(16).padStart(2, "0"))
        .join("");
    }
    class eg {
      constructor(...e) {}
    }
    e.s(
      [
        "BIGINT_FORMAT_RANGES",
        0,
        B,
        "Class",
        () => eg,
        "NUMBER_FORMAT_RANGES",
        0,
        K,
        "aborted",
        () => ee,
        "allowsEval",
        0,
        D,
        "assert",
        () => m,
        "assertEqual",
        () => u,
        "assertIs",
        () => d,
        "assertNever",
        () => c,
        "assertNotEqual",
        () => l,
        "assignProp",
        () => k,
        "base64ToUint8Array",
        () => el,
        "base64urlToUint8Array",
        () => ec,
        "cached",
        () => v,
        "captureStackTrace",
        0,
        O,
        "cleanEnum",
        () => eu,
        "cleanRegex",
        () => $,
        "clone",
        () => C,
        "cloneDef",
        () => w,
        "createTransparentProxy",
        () => q,
        "defineLazy",
        () => _,
        "esc",
        () => Z,
        "escapeRegex",
        () => M,
        "extend",
        () => W,
        "finalizeIssue",
        () => en,
        "floatSafeRemainder",
        () => b,
        "getElementAtPath",
        () => S,
        "getEnumValues",
        () => p,
        "getLengthableOrigin",
        () => ea,
        "getParsedType",
        0,
        (e) => {
          let t = typeof e;
          switch (t) {
            case "undefined":
              return "undefined";
            case "string":
              return "string";
            case "number":
              return Number.isNaN(e) ? "nan" : "number";
            case "boolean":
              return "boolean";
            case "function":
              return "function";
            case "bigint":
              return "bigint";
            case "symbol":
              return "symbol";
            case "object":
              if (Array.isArray(e)) return "array";
              if (null === e) return "null";
              if (
                e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              )
                return "promise";
              if ("u" > typeof Map && e instanceof Map) return "map";
              if ("u" > typeof Set && e instanceof Set) return "set";
              if ("u" > typeof Date && e instanceof Date) return "date";
              if ("u" > typeof File && e instanceof File) return "file";
              return "object";
            default:
              throw Error(`Unknown data type: ${t}`);
          }
        },
        "getSizableOrigin",
        () => er,
        "hexToUint8Array",
        () => ep,
        "isObject",
        () => P,
        "isPlainObject",
        () => E,
        "issue",
        () => es,
        "joinValues",
        () => f,
        "jsonStringifyReplacer",
        () => g,
        "merge",
        () => H,
        "mergeDefs",
        () => I,
        "normalizeParams",
        () => L,
        "nullish",
        () => h,
        "numKeys",
        () => R,
        "objectClone",
        () => x,
        "omit",
        () => G,
        "optionalKeys",
        () => J,
        "parsedType",
        () => eo,
        "partial",
        () => Y,
        "pick",
        () => V,
        "prefixIssues",
        () => et,
        "primitiveTypes",
        0,
        T,
        "promiseAllObject",
        () => z,
        "propertyKeyTypes",
        0,
        A,
        "randomString",
        () => j,
        "required",
        () => Q,
        "safeExtend",
        () => X,
        "shallowClone",
        () => N,
        "slugify",
        () => U,
        "stringifyPrimitive",
        () => F,
        "uint8ArrayToBase64",
        () => ed,
        "uint8ArrayToBase64url",
        () => em,
        "uint8ArrayToHex",
        () => ef,
        "unwrapMessage",
        () => ei,
      ],
      171068
    );
    let ev = (e, t) => {
        (e.name = "$ZodError"),
          Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, g, 2)),
          Object.defineProperty(e, "toString", {
            value: () => e.message,
            enumerable: !1,
          });
      },
      eh = i("$ZodError", ev),
      e$ = i("$ZodError", ev, { Parent: Error });
    function eb(e, t = (e) => e.message) {
      let i = {},
        n = [];
      for (let r of e.issues)
        r.path.length > 0
          ? ((i[r.path[0]] = i[r.path[0]] || []), i[r.path[0]].push(t(r)))
          : n.push(t(r));
      return { formErrors: n, fieldErrors: i };
    }
    function ey(e, t = (e) => e.message) {
      let i = { _errors: [] },
        n = (e) => {
          for (let r of e.issues)
            if ("invalid_union" === r.code && r.errors.length)
              r.errors.map((e) => n({ issues: e }));
            else if ("invalid_key" === r.code) n({ issues: r.issues });
            else if ("invalid_element" === r.code) n({ issues: r.issues });
            else if (0 === r.path.length) i._errors.push(t(r));
            else {
              let e = i,
                n = 0;
              for (; n < r.path.length; ) {
                let i = r.path[n];
                n === r.path.length - 1
                  ? ((e[i] = e[i] || { _errors: [] }), e[i]._errors.push(t(r)))
                  : (e[i] = e[i] || { _errors: [] }),
                  (e = e[i]),
                  n++;
              }
            }
        };
      return n(e), i;
    }
    function e_(e, t = (e) => e.message) {
      let i = { errors: [] },
        n = (e, r = []) => {
          var a, o;
          for (let s of e.issues)
            if ("invalid_union" === s.code && s.errors.length)
              s.errors.map((e) => n({ issues: e }, s.path));
            else if ("invalid_key" === s.code) n({ issues: s.issues }, s.path);
            else if ("invalid_element" === s.code)
              n({ issues: s.issues }, s.path);
            else {
              let e = [...r, ...s.path];
              if (0 === e.length) {
                i.errors.push(t(s));
                continue;
              }
              let n = i,
                u = 0;
              for (; u < e.length; ) {
                let i = e[u],
                  r = u === e.length - 1;
                "string" == typeof i
                  ? (n.properties ?? (n.properties = {}),
                    (a = n.properties)[i] ?? (a[i] = { errors: [] }),
                    (n = n.properties[i]))
                  : (n.items ?? (n.items = []),
                    (o = n.items)[i] ?? (o[i] = { errors: [] }),
                    (n = n.items[i])),
                  r && n.errors.push(t(s)),
                  u++;
              }
            }
        };
      return n(e), i;
    }
    function ex(e) {
      let t = [];
      for (let i of e.map((e) => ("object" == typeof e ? e.key : e)))
        "number" == typeof i
          ? t.push(`[${i}]`)
          : "symbol" == typeof i
          ? t.push(`[${JSON.stringify(String(i))}]`)
          : /[^\w$]/.test(i)
          ? t.push(`[${JSON.stringify(i)}]`)
          : (t.length && t.push("."), t.push(i));
      return t.join("");
    }
    function ek(e) {
      let t = [];
      for (let i of [...e.issues].sort(
        (e, t) => (e.path ?? []).length - (t.path ?? []).length
      ))
        t.push(`✖ ${i.message}`),
          i.path?.length && t.push(`  → at ${ex(i.path)}`);
      return t.join("\n");
    }
    e.s(
      [
        "$ZodError",
        0,
        eh,
        "$ZodRealError",
        0,
        e$,
        "flattenError",
        () => eb,
        "formatError",
        () => ey,
        "prettifyError",
        () => ek,
        "toDotPath",
        () => ex,
        "treeifyError",
        () => e_,
      ],
      651188
    );
    let eI = (e) => (t, i, n, a) => {
        let o = n ? Object.assign(n, { async: !1 }) : { async: !1 },
          u = t._zod.run({ value: i, issues: [] }, o);
        if (u instanceof Promise) throw new r();
        if (u.issues.length) {
          let t = new (a?.Err ?? e)(u.issues.map((e) => en(e, o, s())));
          throw (O(t, a?.callee), t);
        }
        return u.value;
      },
      ew = eI(e$),
      eS = (e) => async (t, i, n, r) => {
        let a = n ? Object.assign(n, { async: !0 }) : { async: !0 },
          o = t._zod.run({ value: i, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          let t = new (r?.Err ?? e)(o.issues.map((e) => en(e, a, s())));
          throw (O(t, r?.callee), t);
        }
        return o.value;
      },
      ez = eS(e$),
      ej = (e) => (t, i, n) => {
        let a = n ? { ...n, async: !1 } : { async: !1 },
          o = t._zod.run({ value: i, issues: [] }, a);
        if (o instanceof Promise) throw new r();
        return o.issues.length
          ? {
              success: !1,
              error: new (e ?? eh)(o.issues.map((e) => en(e, a, s()))),
            }
          : { success: !0, data: o.value };
      },
      eZ = ej(e$),
      eU = (e) => async (t, i, n) => {
        let r = n ? Object.assign(n, { async: !0 }) : { async: !0 },
          a = t._zod.run({ value: i, issues: [] }, r);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => en(e, r, s()))) }
            : { success: !0, data: a.value }
        );
      },
      eO = eU(e$),
      eP = (e) => (t, i, n) => {
        let r = n
          ? Object.assign(n, { direction: "backward" })
          : { direction: "backward" };
        return eI(e)(t, i, r);
      },
      eD = eP(e$),
      eE = (e) => (t, i, n) => eI(e)(t, i, n),
      eN = eE(e$),
      eR = (e) => async (t, i, n) => {
        let r = n
          ? Object.assign(n, { direction: "backward" })
          : { direction: "backward" };
        return eS(e)(t, i, r);
      },
      eA = eR(e$),
      eT = (e) => async (t, i, n) => eS(e)(t, i, n),
      eM = eT(e$),
      eC = (e) => (t, i, n) => {
        let r = n
          ? Object.assign(n, { direction: "backward" })
          : { direction: "backward" };
        return ej(e)(t, i, r);
      },
      eL = eC(e$),
      eq = (e) => (t, i, n) => ej(e)(t, i, n),
      eF = eq(e$),
      eJ = (e) => async (t, i, n) => {
        let r = n
          ? Object.assign(n, { direction: "backward" })
          : { direction: "backward" };
        return eU(e)(t, i, r);
      },
      eK = eJ(e$),
      eB = (e) => async (t, i, n) => eU(e)(t, i, n),
      eV = eB(e$);
    e.s(
      [
        "_decode",
        0,
        eE,
        "_decodeAsync",
        0,
        eT,
        "_encode",
        0,
        eP,
        "_encodeAsync",
        0,
        eR,
        "_parse",
        0,
        eI,
        "_parseAsync",
        0,
        eS,
        "_safeDecode",
        0,
        eq,
        "_safeDecodeAsync",
        0,
        eB,
        "_safeEncode",
        0,
        eC,
        "_safeEncodeAsync",
        0,
        eJ,
        "_safeParse",
        0,
        ej,
        "_safeParseAsync",
        0,
        eU,
        "decode",
        0,
        eN,
        "decodeAsync",
        0,
        eM,
        "encode",
        0,
        eD,
        "encodeAsync",
        0,
        eA,
        "parse",
        0,
        ew,
        "parseAsync",
        0,
        ez,
        "safeDecode",
        0,
        eF,
        "safeDecodeAsync",
        0,
        eV,
        "safeEncode",
        0,
        eL,
        "safeEncodeAsync",
        0,
        eK,
        "safeParse",
        0,
        eZ,
        "safeParseAsync",
        0,
        eO,
      ],
      828526
    );
    let eG = /^[cC][^\s-]{8,}$/,
      eW = /^[0-9a-z]+$/,
      eX = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
      eH = /^[0-9a-vA-V]{20}$/,
      eY = /^[A-Za-z0-9]{27}$/,
      eQ = /^[a-zA-Z0-9_-]{21}$/,
      e0 =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
      e4 =
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
      e6 = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      e1 = e6(4),
      e2 = e6(6),
      e9 = e6(7),
      e3 =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      e7 = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
    function e8() {
      return RegExp(
        "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "u"
      );
    }
    let e5 =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
      te =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
      tt = (e) => {
        let t = M(e ?? ":");
        return RegExp(
          `^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`
        );
      },
      ti =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
      tn =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
      tr =
        /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
      ta = /^[A-Za-z0-9_-]*$/,
      to = /^\+[1-9]\d{6,14}$/,
      ts =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
      tu = RegExp(`^${ts}$`);
    function tl(e) {
      let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
      return "number" == typeof e.precision
        ? -1 === e.precision
          ? `${t}`
          : 0 === e.precision
          ? `${t}:[0-5]\\d`
          : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function td(e) {
      return RegExp(`^${tl(e)}$`);
    }
    function tc(e) {
      let t = tl({ precision: e.precision }),
        i = ["Z"];
      e.local && i.push(""),
        e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      let n = `${t}(?:${i.join("|")})`;
      return RegExp(`^${ts}T(?:${n})$`);
    }
    let tm = (e) => {
        let t = e
          ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
          : "[\\s\\S]*";
        return RegExp(`^${t}$`);
      },
      tp = /^-?\d+n?$/,
      tf = /^-?\d+$/,
      tg = /^-?\d+(?:\.\d+)?$/,
      tv = /^(?:true|false)$/i,
      th = /^null$/i,
      t$ = /^undefined$/i,
      tb = /^[^A-Z]*$/,
      ty = /^[^a-z]*$/;
    function t_(e, t) {
      return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
    }
    function tx(e) {
      return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
    }
    let tk = t_(22, "=="),
      tI = tx(22),
      tw = t_(27, "="),
      tS = tx(27),
      tz = t_(43, "="),
      tj = tx(43),
      tZ = t_(64, ""),
      tU = tx(64),
      tO = t_(86, "=="),
      tP = tx(86);
    e.s(
      [
        "base64",
        0,
        tr,
        "base64url",
        0,
        ta,
        "bigint",
        0,
        tp,
        "boolean",
        0,
        tv,
        "browserEmail",
        0,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "cidrv4",
        0,
        ti,
        "cidrv6",
        0,
        tn,
        "cuid",
        0,
        eG,
        "cuid2",
        0,
        eW,
        "date",
        0,
        tu,
        "datetime",
        () => tc,
        "domain",
        0,
        /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
        "duration",
        0,
        e0,
        "e164",
        0,
        to,
        "email",
        0,
        e3,
        "emoji",
        () => e8,
        "extendedDuration",
        0,
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        "guid",
        0,
        e4,
        "hex",
        0,
        /^[0-9a-fA-F]*$/,
        "hostname",
        0,
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
        "html5Email",
        0,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "idnEmail",
        0,
        e7,
        "integer",
        0,
        tf,
        "ipv4",
        0,
        e5,
        "ipv6",
        0,
        te,
        "ksuid",
        0,
        eY,
        "lowercase",
        0,
        tb,
        "mac",
        0,
        tt,
        "md5_base64",
        0,
        tk,
        "md5_base64url",
        0,
        tI,
        "md5_hex",
        0,
        /^[0-9a-fA-F]{32}$/,
        "nanoid",
        0,
        eQ,
        "null",
        () => th,
        "number",
        0,
        tg,
        "rfc5322Email",
        0,
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "sha1_base64",
        0,
        tw,
        "sha1_base64url",
        0,
        tS,
        "sha1_hex",
        0,
        /^[0-9a-fA-F]{40}$/,
        "sha256_base64",
        0,
        tz,
        "sha256_base64url",
        0,
        tj,
        "sha256_hex",
        0,
        /^[0-9a-fA-F]{64}$/,
        "sha384_base64",
        0,
        tZ,
        "sha384_base64url",
        0,
        tU,
        "sha384_hex",
        0,
        /^[0-9a-fA-F]{96}$/,
        "sha512_base64",
        0,
        tO,
        "sha512_base64url",
        0,
        tP,
        "sha512_hex",
        0,
        /^[0-9a-fA-F]{128}$/,
        "string",
        0,
        tm,
        "time",
        () => td,
        "ulid",
        0,
        eX,
        "undefined",
        () => t$,
        "unicodeEmail",
        0,
        e7,
        "uppercase",
        0,
        ty,
        "uuid",
        0,
        e6,
        "uuid4",
        0,
        e1,
        "uuid6",
        0,
        e2,
        "uuid7",
        0,
        e9,
        "xid",
        0,
        eH,
      ],
      575706
    );
    let tD = i("$ZodCheck", (e, t) => {
        var i;
        e._zod ?? (e._zod = {}),
          (e._zod.def = t),
          (i = e._zod).onattach ?? (i.onattach = []);
      }),
      tE = { number: "number", bigint: "bigint", object: "date" },
      tN = i("$ZodCheckLessThan", (e, t) => {
        tD.init(e, t);
        let i = tE[typeof t.value];
        e._zod.onattach.push((e) => {
          let i = e._zod.bag,
            n = (t.inclusive ? i.maximum : i.exclusiveMaximum) ?? 1 / 0;
          t.value < n &&
            (t.inclusive
              ? (i.maximum = t.value)
              : (i.exclusiveMaximum = t.value));
        }),
          (e._zod.check = (n) => {
            (t.inclusive ? n.value <= t.value : n.value < t.value) ||
              n.issues.push({
                origin: i,
                code: "too_big",
                maximum:
                  "object" == typeof t.value ? t.value.getTime() : t.value,
                input: n.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      tR = i("$ZodCheckGreaterThan", (e, t) => {
        tD.init(e, t);
        let i = tE[typeof t.value];
        e._zod.onattach.push((e) => {
          let i = e._zod.bag,
            n = (t.inclusive ? i.minimum : i.exclusiveMinimum) ?? -1 / 0;
          t.value > n &&
            (t.inclusive
              ? (i.minimum = t.value)
              : (i.exclusiveMinimum = t.value));
        }),
          (e._zod.check = (n) => {
            (t.inclusive ? n.value >= t.value : n.value > t.value) ||
              n.issues.push({
                origin: i,
                code: "too_small",
                minimum:
                  "object" == typeof t.value ? t.value.getTime() : t.value,
                input: n.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      tA = i("$ZodCheckMultipleOf", (e, t) => {
        tD.init(e, t),
          e._zod.onattach.push((e) => {
            var i;
            (i = e._zod.bag).multipleOf ?? (i.multipleOf = t.value);
          }),
          (e._zod.check = (i) => {
            if (typeof i.value != typeof t.value)
              throw Error("Cannot mix number and bigint in multiple_of check.");
            ("bigint" == typeof i.value
              ? i.value % t.value === BigInt(0)
              : 0 === b(i.value, t.value)) ||
              i.issues.push({
                origin: typeof i.value,
                code: "not_multiple_of",
                divisor: t.value,
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      tT = i("$ZodCheckNumberFormat", (e, t) => {
        tD.init(e, t), (t.format = t.format || "float64");
        let i = t.format?.includes("int"),
          n = i ? "int" : "number",
          [r, a] = K[t.format];
        e._zod.onattach.push((e) => {
          let n = e._zod.bag;
          (n.format = t.format),
            (n.minimum = r),
            (n.maximum = a),
            i && (n.pattern = tf);
        }),
          (e._zod.check = (o) => {
            let s = o.value;
            if (i) {
              if (!Number.isInteger(s))
                return void o.issues.push({
                  expected: n,
                  format: t.format,
                  code: "invalid_type",
                  continue: !1,
                  input: s,
                  inst: e,
                });
              if (!Number.isSafeInteger(s))
                return void (s > 0
                  ? o.issues.push({
                      input: s,
                      code: "too_big",
                      maximum: Number.MAX_SAFE_INTEGER,
                      note: "Integers must be within the safe integer range.",
                      inst: e,
                      origin: n,
                      inclusive: !0,
                      continue: !t.abort,
                    })
                  : o.issues.push({
                      input: s,
                      code: "too_small",
                      minimum: Number.MIN_SAFE_INTEGER,
                      note: "Integers must be within the safe integer range.",
                      inst: e,
                      origin: n,
                      inclusive: !0,
                      continue: !t.abort,
                    }));
            }
            s < r &&
              o.issues.push({
                origin: "number",
                input: s,
                code: "too_small",
                minimum: r,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              }),
              s > a &&
                o.issues.push({
                  origin: "number",
                  input: s,
                  code: "too_big",
                  maximum: a,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                });
          });
      }),
      tM = i("$ZodCheckBigIntFormat", (e, t) => {
        tD.init(e, t);
        let [i, n] = B[t.format];
        e._zod.onattach.push((e) => {
          let r = e._zod.bag;
          (r.format = t.format), (r.minimum = i), (r.maximum = n);
        }),
          (e._zod.check = (r) => {
            let a = r.value;
            a < i &&
              r.issues.push({
                origin: "bigint",
                input: a,
                code: "too_small",
                minimum: i,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              }),
              a > n &&
                r.issues.push({
                  origin: "bigint",
                  input: a,
                  code: "too_big",
                  maximum: n,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                });
          });
      }),
      tC = i("$ZodCheckMaxSize", (e, t) => {
        var i;
        tD.init(e, t),
          (i = e._zod.def).when ??
            (i.when = (e) => {
              let t = e.value;
              return !h(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            let i = e._zod.bag.maximum ?? 1 / 0;
            t.maximum < i && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (i) => {
            let n = i.value;
            n.size <= t.maximum ||
              i.issues.push({
                origin: er(n),
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      tL = i("$ZodCheckMinSize", (e, t) => {
        var i;
        tD.init(e, t),
          (i = e._zod.def).when ??
            (i.when = (e) => {
              let t = e.value;
              return !h(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            let i = e._zod.bag.minimum ?? -1 / 0;
            t.minimum > i && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (i) => {
            let n = i.value;
            n.size >= t.minimum ||
              i.issues.push({
                origin: er(n),
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      tq = i("$ZodCheckSizeEquals", (e, t) => {
        var i;
        tD.init(e, t),
          (i = e._zod.def).when ??
            (i.when = (e) => {
              let t = e.value;
              return !h(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            (i.minimum = t.size), (i.maximum = t.size), (i.size = t.size);
          }),
          (e._zod.check = (i) => {
            let n = i.value,
              r = n.size;
            if (r === t.size) return;
            let a = r > t.size;
            i.issues.push({
              origin: er(n),
              ...(a
                ? { code: "too_big", maximum: t.size }
                : { code: "too_small", minimum: t.size }),
              inclusive: !0,
              exact: !0,
              input: i.value,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      tF = i("$ZodCheckMaxLength", (e, t) => {
        var i;
        tD.init(e, t),
          (i = e._zod.def).when ??
            (i.when = (e) => {
              let t = e.value;
              return !h(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            let i = e._zod.bag.maximum ?? 1 / 0;
            t.maximum < i && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (i) => {
            let n = i.value;
            if (n.length <= t.maximum) return;
            let r = ea(n);
            i.issues.push({
              origin: r,
              code: "too_big",
              maximum: t.maximum,
              inclusive: !0,
              input: n,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      tJ = i("$ZodCheckMinLength", (e, t) => {
        var i;
        tD.init(e, t),
          (i = e._zod.def).when ??
            (i.when = (e) => {
              let t = e.value;
              return !h(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            let i = e._zod.bag.minimum ?? -1 / 0;
            t.minimum > i && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (i) => {
            let n = i.value;
            if (n.length >= t.minimum) return;
            let r = ea(n);
            i.issues.push({
              origin: r,
              code: "too_small",
              minimum: t.minimum,
              inclusive: !0,
              input: n,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      tK = i("$ZodCheckLengthEquals", (e, t) => {
        var i;
        tD.init(e, t),
          (i = e._zod.def).when ??
            (i.when = (e) => {
              let t = e.value;
              return !h(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            (i.minimum = t.length),
              (i.maximum = t.length),
              (i.length = t.length);
          }),
          (e._zod.check = (i) => {
            let n = i.value,
              r = n.length;
            if (r === t.length) return;
            let a = ea(n),
              o = r > t.length;
            i.issues.push({
              origin: a,
              ...(o
                ? { code: "too_big", maximum: t.length }
                : { code: "too_small", minimum: t.length }),
              inclusive: !0,
              exact: !0,
              input: i.value,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      tB = i("$ZodCheckStringFormat", (e, t) => {
        var i, n;
        tD.init(e, t),
          e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            (i.format = t.format),
              t.pattern &&
                (i.patterns ?? (i.patterns = new Set()),
                i.patterns.add(t.pattern));
          }),
          t.pattern
            ? (i = e._zod).check ??
              (i.check = (i) => {
                (t.pattern.lastIndex = 0),
                  t.pattern.test(i.value) ||
                    i.issues.push({
                      origin: "string",
                      code: "invalid_format",
                      format: t.format,
                      input: i.value,
                      ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                      inst: e,
                      continue: !t.abort,
                    });
              })
            : (n = e._zod).check ?? (n.check = () => {});
      }),
      tV = i("$ZodCheckRegex", (e, t) => {
        tB.init(e, t),
          (e._zod.check = (i) => {
            (t.pattern.lastIndex = 0),
              t.pattern.test(i.value) ||
                i.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "regex",
                  input: i.value,
                  pattern: t.pattern.toString(),
                  inst: e,
                  continue: !t.abort,
                });
          });
      }),
      tG = i("$ZodCheckLowerCase", (e, t) => {
        t.pattern ?? (t.pattern = tb), tB.init(e, t);
      }),
      tW = i("$ZodCheckUpperCase", (e, t) => {
        t.pattern ?? (t.pattern = ty), tB.init(e, t);
      }),
      tX = i("$ZodCheckIncludes", (e, t) => {
        tD.init(e, t);
        let i = M(t.includes),
          n = new RegExp(
            "number" == typeof t.position ? `^.{${t.position}}${i}` : i
          );
        (t.pattern = n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
          }),
          (e._zod.check = (i) => {
            i.value.includes(t.includes, t.position) ||
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "includes",
                includes: t.includes,
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      tH = i("$ZodCheckStartsWith", (e, t) => {
        tD.init(e, t);
        let i = RegExp(`^${M(t.prefix)}.*`);
        t.pattern ?? (t.pattern = i),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            t.patterns ?? (t.patterns = new Set()), t.patterns.add(i);
          }),
          (e._zod.check = (i) => {
            i.value.startsWith(t.prefix) ||
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "starts_with",
                prefix: t.prefix,
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      tY = i("$ZodCheckEndsWith", (e, t) => {
        tD.init(e, t);
        let i = RegExp(`.*${M(t.suffix)}$`);
        t.pattern ?? (t.pattern = i),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            t.patterns ?? (t.patterns = new Set()), t.patterns.add(i);
          }),
          (e._zod.check = (i) => {
            i.value.endsWith(t.suffix) ||
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "ends_with",
                suffix: t.suffix,
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
          });
      });
    function tQ(e, t, i) {
      e.issues.length && t.issues.push(...et(i, e.issues));
    }
    let t0 = i("$ZodCheckProperty", (e, t) => {
        tD.init(e, t),
          (e._zod.check = (e) => {
            let i = t.schema._zod.run(
              { value: e.value[t.property], issues: [] },
              {}
            );
            if (i instanceof Promise)
              return i.then((i) => tQ(i, e, t.property));
            tQ(i, e, t.property);
          });
      }),
      t4 = i("$ZodCheckMimeType", (e, t) => {
        tD.init(e, t);
        let i = new Set(t.mime);
        e._zod.onattach.push((e) => {
          e._zod.bag.mime = t.mime;
        }),
          (e._zod.check = (n) => {
            i.has(n.value.type) ||
              n.issues.push({
                code: "invalid_value",
                values: t.mime,
                input: n.value.type,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      t6 = i("$ZodCheckOverwrite", (e, t) => {
        tD.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          });
      });
    e.s(
      [
        "$ZodCheck",
        0,
        tD,
        "$ZodCheckBigIntFormat",
        0,
        tM,
        "$ZodCheckEndsWith",
        0,
        tY,
        "$ZodCheckGreaterThan",
        0,
        tR,
        "$ZodCheckIncludes",
        0,
        tX,
        "$ZodCheckLengthEquals",
        0,
        tK,
        "$ZodCheckLessThan",
        0,
        tN,
        "$ZodCheckLowerCase",
        0,
        tG,
        "$ZodCheckMaxLength",
        0,
        tF,
        "$ZodCheckMaxSize",
        0,
        tC,
        "$ZodCheckMimeType",
        0,
        t4,
        "$ZodCheckMinLength",
        0,
        tJ,
        "$ZodCheckMinSize",
        0,
        tL,
        "$ZodCheckMultipleOf",
        0,
        tA,
        "$ZodCheckNumberFormat",
        0,
        tT,
        "$ZodCheckOverwrite",
        0,
        t6,
        "$ZodCheckProperty",
        0,
        t0,
        "$ZodCheckRegex",
        0,
        tV,
        "$ZodCheckSizeEquals",
        0,
        tq,
        "$ZodCheckStartsWith",
        0,
        tH,
        "$ZodCheckStringFormat",
        0,
        tB,
        "$ZodCheckUpperCase",
        0,
        tW,
      ],
      410497
    );
    class t1 {
      constructor(e = []) {
        (this.content = []), (this.indent = 0), this && (this.args = e);
      }
      indented(e) {
        (this.indent += 1), e(this), (this.indent -= 1);
      }
      write(e) {
        if ("function" == typeof e) {
          e(this, { execution: "sync" }), e(this, { execution: "async" });
          return;
        }
        let t = e.split("\n").filter((e) => e),
          i = Math.min(...t.map((e) => e.length - e.trimStart().length));
        for (let e of t
          .map((e) => e.slice(i))
          .map((e) => " ".repeat(2 * this.indent) + e))
          this.content.push(e);
      }
      compile() {
        return Function(
          ...this?.args,
          [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n")
        );
      }
    }
    e.s(["Doc", () => t1], 669395);
    let t2 = { major: 4, minor: 3, patch: 6 };
    e.s(["version", 0, t2], 563589);
    let t9 = i("$ZodType", (e, t) => {
        var i;
        e ?? (e = {}),
          (e._zod.def = t),
          (e._zod.bag = e._zod.bag || {}),
          (e._zod.version = t2);
        let n = [...(e._zod.def.checks ?? [])];
        for (let t of (e._zod.traits.has("$ZodCheck") && n.unshift(e), n))
          for (let i of t._zod.onattach) i(e);
        if (0 === n.length)
          (i = e._zod).deferred ?? (i.deferred = []),
            e._zod.deferred?.push(() => {
              e._zod.run = e._zod.parse;
            });
        else {
          let t = (e, t, i) => {
              let n,
                a = ee(e);
              for (let o of t) {
                if (o._zod.def.when) {
                  if (!o._zod.def.when(e)) continue;
                } else if (a) continue;
                let t = e.issues.length,
                  s = o._zod.check(e);
                if (s instanceof Promise && i?.async === !1) throw new r();
                if (n || s instanceof Promise)
                  n = (n ?? Promise.resolve()).then(async () => {
                    await s, e.issues.length !== t && (a || (a = ee(e, t)));
                  });
                else {
                  if (e.issues.length === t) continue;
                  a || (a = ee(e, t));
                }
              }
              return n ? n.then(() => e) : e;
            },
            i = (i, a, o) => {
              if (ee(i)) return (i.aborted = !0), i;
              let s = t(a, n, o);
              if (s instanceof Promise) {
                if (!1 === o.async) throw new r();
                return s.then((t) => e._zod.parse(t, o));
              }
              return e._zod.parse(s, o);
            };
          e._zod.run = (a, o) => {
            if (o.skipChecks) return e._zod.parse(a, o);
            if ("backward" === o.direction) {
              let t = e._zod.parse(
                { value: a.value, issues: [] },
                { ...o, skipChecks: !0 }
              );
              return t instanceof Promise
                ? t.then((e) => i(e, a, o))
                : i(t, a, o);
            }
            let s = e._zod.parse(a, o);
            if (s instanceof Promise) {
              if (!1 === o.async) throw new r();
              return s.then((e) => t(e, n, o));
            }
            return t(s, n, o);
          };
        }
        _(e, "~standard", () => ({
          validate: (t) => {
            try {
              let i = eZ(e, t);
              return i.success
                ? { value: i.data }
                : { issues: i.error?.issues };
            } catch (i) {
              return eO(e, t).then((e) =>
                e.success ? { value: e.data } : { issues: e.error?.issues }
              );
            }
          },
          vendor: "zod",
          version: 1,
        }));
      }),
      t3 = i("$ZodString", (e, t) => {
        t9.init(e, t),
          (e._zod.pattern =
            [...(e?._zod.bag?.patterns ?? [])].pop() ?? tm(e._zod.bag)),
          (e._zod.parse = (i, n) => {
            if (t.coerce)
              try {
                i.value = String(i.value);
              } catch (e) {}
            return (
              "string" == typeof i.value ||
                i.issues.push({
                  expected: "string",
                  code: "invalid_type",
                  input: i.value,
                  inst: e,
                }),
              i
            );
          });
      }),
      t7 = i("$ZodStringFormat", (e, t) => {
        tB.init(e, t), t3.init(e, t);
      }),
      t8 = i("$ZodGUID", (e, t) => {
        t.pattern ?? (t.pattern = e4), t7.init(e, t);
      }),
      t5 = i("$ZodUUID", (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
            t.version
          ];
          if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ?? (t.pattern = e6(e));
        } else t.pattern ?? (t.pattern = e6());
        t7.init(e, t);
      }),
      ie = i("$ZodEmail", (e, t) => {
        t.pattern ?? (t.pattern = e3), t7.init(e, t);
      }),
      it = i("$ZodURL", (e, t) => {
        t7.init(e, t),
          (e._zod.check = (i) => {
            try {
              let n = i.value.trim(),
                r = new URL(n);
              t.hostname &&
                ((t.hostname.lastIndex = 0),
                t.hostname.test(r.hostname) ||
                  i.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: t.hostname.source,
                    input: i.value,
                    inst: e,
                    continue: !t.abort,
                  })),
                t.protocol &&
                  ((t.protocol.lastIndex = 0),
                  t.protocol.test(
                    r.protocol.endsWith(":")
                      ? r.protocol.slice(0, -1)
                      : r.protocol
                  ) ||
                    i.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid protocol",
                      pattern: t.protocol.source,
                      input: i.value,
                      inst: e,
                      continue: !t.abort,
                    })),
                t.normalize ? (i.value = r.href) : (i.value = n);
              return;
            } catch (n) {
              i.issues.push({
                code: "invalid_format",
                format: "url",
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
            }
          });
      }),
      ii = i("$ZodEmoji", (e, t) => {
        t.pattern ?? (t.pattern = e8()), t7.init(e, t);
      }),
      ir = i("$ZodNanoID", (e, t) => {
        t.pattern ?? (t.pattern = eQ), t7.init(e, t);
      }),
      ia = i("$ZodCUID", (e, t) => {
        t.pattern ?? (t.pattern = eG), t7.init(e, t);
      }),
      io = i("$ZodCUID2", (e, t) => {
        t.pattern ?? (t.pattern = eW), t7.init(e, t);
      }),
      is = i("$ZodULID", (e, t) => {
        t.pattern ?? (t.pattern = eX), t7.init(e, t);
      }),
      iu = i("$ZodXID", (e, t) => {
        t.pattern ?? (t.pattern = eH), t7.init(e, t);
      }),
      il = i("$ZodKSUID", (e, t) => {
        t.pattern ?? (t.pattern = eY), t7.init(e, t);
      }),
      id = i("$ZodISODateTime", (e, t) => {
        t.pattern ?? (t.pattern = tc(t)), t7.init(e, t);
      }),
      ic = i("$ZodISODate", (e, t) => {
        t.pattern ?? (t.pattern = tu), t7.init(e, t);
      }),
      im = i("$ZodISOTime", (e, t) => {
        t.pattern ?? (t.pattern = td(t)), t7.init(e, t);
      }),
      ip = i("$ZodISODuration", (e, t) => {
        t.pattern ?? (t.pattern = e0), t7.init(e, t);
      }),
      ig = i("$ZodIPv4", (e, t) => {
        t.pattern ?? (t.pattern = e5),
          t7.init(e, t),
          (e._zod.bag.format = "ipv4");
      }),
      iv = i("$ZodIPv6", (e, t) => {
        t.pattern ?? (t.pattern = te),
          t7.init(e, t),
          (e._zod.bag.format = "ipv6"),
          (e._zod.check = (i) => {
            try {
              new URL(`http://[${i.value}]`);
            } catch {
              i.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
            }
          });
      }),
      ih = i("$ZodMAC", (e, t) => {
        t.pattern ?? (t.pattern = tt(t.delimiter)),
          t7.init(e, t),
          (e._zod.bag.format = "mac");
      }),
      i$ = i("$ZodCIDRv4", (e, t) => {
        t.pattern ?? (t.pattern = ti), t7.init(e, t);
      }),
      ib = i("$ZodCIDRv6", (e, t) => {
        t.pattern ?? (t.pattern = tn),
          t7.init(e, t),
          (e._zod.check = (i) => {
            let n = i.value.split("/");
            try {
              if (2 !== n.length) throw Error();
              let [e, t] = n;
              if (!t) throw Error();
              let i = Number(t);
              if (`${i}` !== t || i < 0 || i > 128) throw Error();
              new URL(`http://[${e}]`);
            } catch {
              i.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
            }
          });
      });
    function iy(e) {
      if ("" === e) return !0;
      if (e.length % 4 != 0) return !1;
      try {
        return atob(e), !0;
      } catch {
        return !1;
      }
    }
    let i_ = i("$ZodBase64", (e, t) => {
      t.pattern ?? (t.pattern = tr),
        t7.init(e, t),
        (e._zod.bag.contentEncoding = "base64"),
        (e._zod.check = (i) => {
          iy(i.value) ||
            i.issues.push({
              code: "invalid_format",
              format: "base64",
              input: i.value,
              inst: e,
              continue: !t.abort,
            });
        });
    });
    function ix(e) {
      if (!ta.test(e)) return !1;
      let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
      return iy(t.padEnd(4 * Math.ceil(t.length / 4), "="));
    }
    let ik = i("$ZodBase64URL", (e, t) => {
        t.pattern ?? (t.pattern = ta),
          t7.init(e, t),
          (e._zod.bag.contentEncoding = "base64url"),
          (e._zod.check = (i) => {
            ix(i.value) ||
              i.issues.push({
                code: "invalid_format",
                format: "base64url",
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      iI = i("$ZodE164", (e, t) => {
        t.pattern ?? (t.pattern = to), t7.init(e, t);
      });
    function iw(e, t = null) {
      try {
        let i = e.split(".");
        if (3 !== i.length) return !1;
        let [n] = i;
        if (!n) return !1;
        let r = JSON.parse(atob(n));
        if (
          ("typ" in r && r?.typ !== "JWT") ||
          !r.alg ||
          (t && (!("alg" in r) || r.alg !== t))
        )
          return !1;
        return !0;
      } catch {
        return !1;
      }
    }
    let iS = i("$ZodJWT", (e, t) => {
        t7.init(e, t),
          (e._zod.check = (i) => {
            iw(i.value, t.alg) ||
              i.issues.push({
                code: "invalid_format",
                format: "jwt",
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      iz = i("$ZodCustomStringFormat", (e, t) => {
        t7.init(e, t),
          (e._zod.check = (i) => {
            t.fn(i.value) ||
              i.issues.push({
                code: "invalid_format",
                format: t.format,
                input: i.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      ij = i("$ZodNumber", (e, t) => {
        t9.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? tg),
          (e._zod.parse = (i, n) => {
            if (t.coerce)
              try {
                i.value = Number(i.value);
              } catch (e) {}
            let r = i.value;
            if ("number" == typeof r && !Number.isNaN(r) && Number.isFinite(r))
              return i;
            let a =
              "number" == typeof r
                ? Number.isNaN(r)
                  ? "NaN"
                  : Number.isFinite(r)
                  ? void 0
                  : "Infinity"
                : void 0;
            return (
              i.issues.push({
                expected: "number",
                code: "invalid_type",
                input: r,
                inst: e,
                ...(a ? { received: a } : {}),
              }),
              i
            );
          });
      }),
      iZ = i("$ZodNumberFormat", (e, t) => {
        tT.init(e, t), ij.init(e, t);
      }),
      iU = i("$ZodBoolean", (e, t) => {
        t9.init(e, t),
          (e._zod.pattern = tv),
          (e._zod.parse = (i, n) => {
            if (t.coerce)
              try {
                i.value = !!i.value;
              } catch (e) {}
            let r = i.value;
            return (
              "boolean" == typeof r ||
                i.issues.push({
                  expected: "boolean",
                  code: "invalid_type",
                  input: r,
                  inst: e,
                }),
              i
            );
          });
      }),
      iO = i("$ZodBigInt", (e, t) => {
        t9.init(e, t),
          (e._zod.pattern = tp),
          (e._zod.parse = (i, n) => {
            if (t.coerce)
              try {
                i.value = BigInt(i.value);
              } catch (e) {}
            return (
              "bigint" == typeof i.value ||
                i.issues.push({
                  expected: "bigint",
                  code: "invalid_type",
                  input: i.value,
                  inst: e,
                }),
              i
            );
          });
      }),
      iP = i("$ZodBigIntFormat", (e, t) => {
        tM.init(e, t), iO.init(e, t);
      }),
      iD = i("$ZodSymbol", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (t, i) => {
            let n = t.value;
            return (
              "symbol" == typeof n ||
                t.issues.push({
                  expected: "symbol",
                  code: "invalid_type",
                  input: n,
                  inst: e,
                }),
              t
            );
          });
      }),
      iE = i("$ZodUndefined", (e, t) => {
        t9.init(e, t),
          (e._zod.pattern = t$),
          (e._zod.values = new Set([void 0])),
          (e._zod.optin = "optional"),
          (e._zod.optout = "optional"),
          (e._zod.parse = (t, i) => {
            let n = t.value;
            return (
              void 0 === n ||
                t.issues.push({
                  expected: "undefined",
                  code: "invalid_type",
                  input: n,
                  inst: e,
                }),
              t
            );
          });
      }),
      iN = i("$ZodNull", (e, t) => {
        t9.init(e, t),
          (e._zod.pattern = th),
          (e._zod.values = new Set([null])),
          (e._zod.parse = (t, i) => {
            let n = t.value;
            return (
              null === n ||
                t.issues.push({
                  expected: "null",
                  code: "invalid_type",
                  input: n,
                  inst: e,
                }),
              t
            );
          });
      }),
      iR = i("$ZodAny", (e, t) => {
        t9.init(e, t), (e._zod.parse = (e) => e);
      }),
      iA = i("$ZodUnknown", (e, t) => {
        t9.init(e, t), (e._zod.parse = (e) => e);
      }),
      iT = i("$ZodNever", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (t, i) => (
            t.issues.push({
              expected: "never",
              code: "invalid_type",
              input: t.value,
              inst: e,
            }),
            t
          ));
      }),
      iM = i("$ZodVoid", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (t, i) => {
            let n = t.value;
            return (
              void 0 === n ||
                t.issues.push({
                  expected: "void",
                  code: "invalid_type",
                  input: n,
                  inst: e,
                }),
              t
            );
          });
      }),
      iC = i("$ZodDate", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (i, n) => {
            if (t.coerce)
              try {
                i.value = new Date(i.value);
              } catch (e) {}
            let r = i.value,
              a = r instanceof Date;
            return (
              (a && !Number.isNaN(r.getTime())) ||
                i.issues.push({
                  expected: "date",
                  code: "invalid_type",
                  input: r,
                  ...(a ? { received: "Invalid Date" } : {}),
                  inst: e,
                }),
              i
            );
          });
      });
    function iL(e, t, i) {
      e.issues.length && t.issues.push(...et(i, e.issues)),
        (t.value[i] = e.value);
    }
    let iq = i("$ZodArray", (e, t) => {
      t9.init(e, t),
        (e._zod.parse = (i, n) => {
          let r = i.value;
          if (!Array.isArray(r))
            return (
              i.issues.push({
                expected: "array",
                code: "invalid_type",
                input: r,
                inst: e,
              }),
              i
            );
          i.value = Array(r.length);
          let a = [];
          for (let e = 0; e < r.length; e++) {
            let o = r[e],
              s = t.element._zod.run({ value: o, issues: [] }, n);
            s instanceof Promise
              ? a.push(s.then((t) => iL(t, i, e)))
              : iL(s, i, e);
          }
          return a.length ? Promise.all(a).then(() => i) : i;
        });
    });
    function iF(e, t, i, n, r) {
      if (e.issues.length) {
        if (r && !(i in n)) return;
        t.issues.push(...et(i, e.issues));
      }
      void 0 === e.value
        ? i in n && (t.value[i] = void 0)
        : (t.value[i] = e.value);
    }
    function iJ(e) {
      let t = Object.keys(e.shape);
      for (let i of t)
        if (!e.shape?.[i]?._zod?.traits?.has("$ZodType"))
          throw Error(`Invalid element at key "${i}": expected a Zod schema`);
      let i = J(e.shape);
      return {
        ...e,
        keys: t,
        keySet: new Set(t),
        numKeys: t.length,
        optionalKeys: new Set(i),
      };
    }
    function iK(e, t, i, n, r, a) {
      let o = [],
        s = r.keySet,
        u = r.catchall._zod,
        l = u.def.type,
        d = "optional" === u.optout;
      for (let r in t) {
        if (s.has(r)) continue;
        if ("never" === l) {
          o.push(r);
          continue;
        }
        let a = u.run({ value: t[r], issues: [] }, n);
        a instanceof Promise
          ? e.push(a.then((e) => iF(e, i, r, t, d)))
          : iF(a, i, r, t, d);
      }
      return (o.length &&
        i.issues.push({
          code: "unrecognized_keys",
          keys: o,
          input: t,
          inst: a,
        }),
      e.length)
        ? Promise.all(e).then(() => i)
        : i;
    }
    let iB = i("$ZodObject", (e, t) => {
        let i;
        t9.init(e, t);
        let n = Object.getOwnPropertyDescriptor(t, "shape");
        if (!n?.get) {
          let e = t.shape;
          Object.defineProperty(t, "shape", {
            get: () => {
              let i = { ...e };
              return Object.defineProperty(t, "shape", { value: i }), i;
            },
          });
        }
        let r = v(() => iJ(t));
        _(e._zod, "propValues", () => {
          let e = t.shape,
            i = {};
          for (let t in e) {
            let n = e[t]._zod;
            if (n.values)
              for (let e of (i[t] ?? (i[t] = new Set()), n.values)) i[t].add(e);
          }
          return i;
        });
        let a = t.catchall;
        e._zod.parse = (t, n) => {
          i ?? (i = r.value);
          let o = t.value;
          if (!P(o))
            return (
              t.issues.push({
                expected: "object",
                code: "invalid_type",
                input: o,
                inst: e,
              }),
              t
            );
          t.value = {};
          let s = [],
            u = i.shape;
          for (let e of i.keys) {
            let i = u[e],
              r = "optional" === i._zod.optout,
              a = i._zod.run({ value: o[e], issues: [] }, n);
            a instanceof Promise
              ? s.push(a.then((i) => iF(i, t, e, o, r)))
              : iF(a, t, e, o, r);
          }
          return a
            ? iK(s, o, t, n, r.value, e)
            : s.length
            ? Promise.all(s).then(() => t)
            : t;
        };
      }),
      iV = i("$ZodObjectJIT", (e, t) => {
        let i, n;
        iB.init(e, t);
        let r = e._zod.parse,
          a = v(() => iJ(t)),
          s = !o.jitless,
          u = s && D.value,
          l = t.catchall;
        e._zod.parse = (o, d) => {
          n ?? (n = a.value);
          let c = o.value;
          return P(c)
            ? s && u && d?.async === !1 && !0 !== d.jitless
              ? (i ||
                  (i = ((e) => {
                    let t = new t1(["shape", "payload", "ctx"]),
                      i = a.value,
                      n = (e) => {
                        let t = Z(e);
                        return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                      };
                    t.write("const input = payload.value;");
                    let r = Object.create(null),
                      o = 0;
                    for (let e of i.keys) r[e] = `key_${o++}`;
                    for (let a of (t.write("const newResult = {};"), i.keys)) {
                      let i = r[a],
                        o = Z(a),
                        s = e[a],
                        u = s?._zod?.optout === "optional";
                      t.write(`const ${i} = ${n(a)};`),
                        u
                          ? t.write(`
        if (${i}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${i}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${i}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${i}.value;
        }
        
      `)
                          : t.write(`
        if (${i}.issues.length) {
          payload.issues = payload.issues.concat(${i}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${i}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${i}.value;
        }
        
      `);
                    }
                    t.write("payload.value = newResult;"),
                      t.write("return payload;");
                    let s = t.compile();
                    return (t, i) => s(e, t, i);
                  })(t.shape)),
                (o = i(o, d)),
                l)
                ? iK([], c, o, d, n, e)
                : o
              : r(o, d)
            : (o.issues.push({
                expected: "object",
                code: "invalid_type",
                input: c,
                inst: e,
              }),
              o);
        };
      });
    function iG(e, t, i, n) {
      for (let i of e) if (0 === i.issues.length) return (t.value = i.value), t;
      let r = e.filter((e) => !ee(e));
      return 1 === r.length
        ? ((t.value = r[0].value), r[0])
        : (t.issues.push({
            code: "invalid_union",
            input: t.value,
            inst: i,
            errors: e.map((e) => e.issues.map((e) => en(e, n, s()))),
          }),
          t);
    }
    let iW = i("$ZodUnion", (e, t) => {
      t9.init(e, t),
        _(e._zod, "optin", () =>
          t.options.some((e) => "optional" === e._zod.optin)
            ? "optional"
            : void 0
        ),
        _(e._zod, "optout", () =>
          t.options.some((e) => "optional" === e._zod.optout)
            ? "optional"
            : void 0
        ),
        _(e._zod, "values", () => {
          if (t.options.every((e) => e._zod.values))
            return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
        }),
        _(e._zod, "pattern", () => {
          if (t.options.every((e) => e._zod.pattern)) {
            let e = t.options.map((e) => e._zod.pattern);
            return RegExp(`^(${e.map((e) => $(e.source)).join("|")})$`);
          }
        });
      let i = 1 === t.options.length,
        n = t.options[0]._zod.run;
      e._zod.parse = (r, a) => {
        if (i) return n(r, a);
        let o = !1,
          s = [];
        for (let e of t.options) {
          let t = e._zod.run({ value: r.value, issues: [] }, a);
          if (t instanceof Promise) s.push(t), (o = !0);
          else {
            if (0 === t.issues.length) return t;
            s.push(t);
          }
        }
        return o ? Promise.all(s).then((t) => iG(t, r, e, a)) : iG(s, r, e, a);
      };
    });
    function iX(e, t, i, n) {
      let r = e.filter((e) => 0 === e.issues.length);
      return (
        1 === r.length
          ? (t.value = r[0].value)
          : 0 === r.length
          ? t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: i,
              errors: e.map((e) => e.issues.map((e) => en(e, n, s()))),
            })
          : t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: i,
              errors: [],
              inclusive: !1,
            }),
        t
      );
    }
    let iH = i("$ZodXor", (e, t) => {
        iW.init(e, t), (t.inclusive = !1);
        let i = 1 === t.options.length,
          n = t.options[0]._zod.run;
        e._zod.parse = (r, a) => {
          if (i) return n(r, a);
          let o = !1,
            s = [];
          for (let e of t.options) {
            let t = e._zod.run({ value: r.value, issues: [] }, a);
            t instanceof Promise ? (s.push(t), (o = !0)) : s.push(t);
          }
          return o
            ? Promise.all(s).then((t) => iX(t, r, e, a))
            : iX(s, r, e, a);
        };
      }),
      iY = i("$ZodDiscriminatedUnion", (e, t) => {
        (t.inclusive = !1), iW.init(e, t);
        let i = e._zod.parse;
        _(e._zod, "propValues", () => {
          let e = {};
          for (let i of t.options) {
            let n = i._zod.propValues;
            if (!n || 0 === Object.keys(n).length)
              throw Error(
                `Invalid discriminated union option at index "${t.options.indexOf(
                  i
                )}"`
              );
            for (let [t, i] of Object.entries(n))
              for (let n of (e[t] || (e[t] = new Set()), i)) e[t].add(n);
          }
          return e;
        });
        let n = v(() => {
          let e = t.options,
            i = new Map();
          for (let n of e) {
            let e = n._zod.propValues?.[t.discriminator];
            if (!e || 0 === e.size)
              throw Error(
                `Invalid discriminated union option at index "${t.options.indexOf(
                  n
                )}"`
              );
            for (let t of e) {
              if (i.has(t))
                throw Error(`Duplicate discriminator value "${String(t)}"`);
              i.set(t, n);
            }
          }
          return i;
        });
        e._zod.parse = (r, a) => {
          let o = r.value;
          if (!P(o))
            return (
              r.issues.push({
                code: "invalid_type",
                expected: "object",
                input: o,
                inst: e,
              }),
              r
            );
          let s = n.value.get(o?.[t.discriminator]);
          return s
            ? s._zod.run(r, a)
            : t.unionFallback
            ? i(r, a)
            : (r.issues.push({
                code: "invalid_union",
                errors: [],
                note: "No matching discriminator",
                discriminator: t.discriminator,
                input: o,
                path: [t.discriminator],
                inst: e,
              }),
              r);
        };
      }),
      iQ = i("$ZodIntersection", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (e, i) => {
            let n = e.value,
              r = t.left._zod.run({ value: n, issues: [] }, i),
              a = t.right._zod.run({ value: n, issues: [] }, i);
            return r instanceof Promise || a instanceof Promise
              ? Promise.all([r, a]).then(([t, i]) => i0(e, t, i))
              : i0(e, r, a);
          });
      });
    function i0(e, t, i) {
      let n,
        r = new Map();
      for (let i of t.issues)
        if ("unrecognized_keys" === i.code)
          for (let e of (n ?? (n = i), i.keys))
            r.has(e) || r.set(e, {}), (r.get(e).l = !0);
        else e.issues.push(i);
      for (let t of i.issues)
        if ("unrecognized_keys" === t.code)
          for (let e of t.keys) r.has(e) || r.set(e, {}), (r.get(e).r = !0);
        else e.issues.push(t);
      let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
      if ((a.length && n && e.issues.push({ ...n, keys: a }), ee(e))) return e;
      let o = (function e(t, i) {
        if (t === i || (t instanceof Date && i instanceof Date && +t == +i))
          return { valid: !0, data: t };
        if (E(t) && E(i)) {
          let n = Object.keys(i),
            r = Object.keys(t).filter((e) => -1 !== n.indexOf(e)),
            a = { ...t, ...i };
          for (let n of r) {
            let r = e(t[n], i[n]);
            if (!r.valid)
              return { valid: !1, mergeErrorPath: [n, ...r.mergeErrorPath] };
            a[n] = r.data;
          }
          return { valid: !0, data: a };
        }
        if (Array.isArray(t) && Array.isArray(i)) {
          if (t.length !== i.length) return { valid: !1, mergeErrorPath: [] };
          let n = [];
          for (let r = 0; r < t.length; r++) {
            let a = e(t[r], i[r]);
            if (!a.valid)
              return { valid: !1, mergeErrorPath: [r, ...a.mergeErrorPath] };
            n.push(a.data);
          }
          return { valid: !0, data: n };
        }
        return { valid: !1, mergeErrorPath: [] };
      })(t.value, i.value);
      if (!o.valid)
        throw Error(
          `Unmergable intersection. Error path: ${JSON.stringify(
            o.mergeErrorPath
          )}`
        );
      return (e.value = o.data), e;
    }
    let i4 = i("$ZodTuple", (e, t) => {
      t9.init(e, t);
      let i = t.items;
      e._zod.parse = (n, r) => {
        let a = n.value;
        if (!Array.isArray(a))
          return (
            n.issues.push({
              input: a,
              inst: e,
              expected: "tuple",
              code: "invalid_type",
            }),
            n
          );
        n.value = [];
        let o = [],
          s = [...i].reverse().findIndex((e) => "optional" !== e._zod.optin),
          u = -1 === s ? 0 : i.length - s;
        if (!t.rest) {
          let t = a.length > i.length,
            r = a.length < u - 1;
          if (t || r)
            return (
              n.issues.push({
                ...(t
                  ? { code: "too_big", maximum: i.length, inclusive: !0 }
                  : { code: "too_small", minimum: i.length }),
                input: a,
                inst: e,
                origin: "array",
              }),
              n
            );
        }
        let l = -1;
        for (let e of i) {
          if (++l >= a.length && l >= u) continue;
          let t = e._zod.run({ value: a[l], issues: [] }, r);
          t instanceof Promise
            ? o.push(t.then((e) => i6(e, n, l)))
            : i6(t, n, l);
        }
        if (t.rest)
          for (let e of a.slice(i.length)) {
            l++;
            let i = t.rest._zod.run({ value: e, issues: [] }, r);
            i instanceof Promise
              ? o.push(i.then((e) => i6(e, n, l)))
              : i6(i, n, l);
          }
        return o.length ? Promise.all(o).then(() => n) : n;
      };
    });
    function i6(e, t, i) {
      e.issues.length && t.issues.push(...et(i, e.issues)),
        (t.value[i] = e.value);
    }
    let i1 = i("$ZodRecord", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (i, n) => {
            let r = i.value;
            if (!E(r))
              return (
                i.issues.push({
                  expected: "record",
                  code: "invalid_type",
                  input: r,
                  inst: e,
                }),
                i
              );
            let a = [],
              o = t.keyType._zod.values;
            if (o) {
              let s;
              i.value = {};
              let u = new Set();
              for (let e of o)
                if (
                  "string" == typeof e ||
                  "number" == typeof e ||
                  "symbol" == typeof e
                ) {
                  u.add("number" == typeof e ? e.toString() : e);
                  let o = t.valueType._zod.run({ value: r[e], issues: [] }, n);
                  o instanceof Promise
                    ? a.push(
                        o.then((t) => {
                          t.issues.length && i.issues.push(...et(e, t.issues)),
                            (i.value[e] = t.value);
                        })
                      )
                    : (o.issues.length && i.issues.push(...et(e, o.issues)),
                      (i.value[e] = o.value));
                }
              for (let e in r) u.has(e) || (s = s ?? []).push(e);
              s &&
                s.length > 0 &&
                i.issues.push({
                  code: "unrecognized_keys",
                  input: r,
                  inst: e,
                  keys: s,
                });
            } else
              for (let o of ((i.value = {}), Reflect.ownKeys(r))) {
                if ("__proto__" === o) continue;
                let u = t.keyType._zod.run({ value: o, issues: [] }, n);
                if (u instanceof Promise)
                  throw Error(
                    "Async schemas not supported in object keys currently"
                  );
                if ("string" == typeof o && tg.test(o) && u.issues.length) {
                  let e = t.keyType._zod.run(
                    { value: Number(o), issues: [] },
                    n
                  );
                  if (e instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently"
                    );
                  0 === e.issues.length && (u = e);
                }
                if (u.issues.length) {
                  "loose" === t.mode
                    ? (i.value[o] = r[o])
                    : i.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: u.issues.map((e) => en(e, n, s())),
                        input: o,
                        path: [o],
                        inst: e,
                      });
                  continue;
                }
                let l = t.valueType._zod.run({ value: r[o], issues: [] }, n);
                l instanceof Promise
                  ? a.push(
                      l.then((e) => {
                        e.issues.length && i.issues.push(...et(o, e.issues)),
                          (i.value[u.value] = e.value);
                      })
                    )
                  : (l.issues.length && i.issues.push(...et(o, l.issues)),
                    (i.value[u.value] = l.value));
              }
            return a.length ? Promise.all(a).then(() => i) : i;
          });
      }),
      i2 = i("$ZodMap", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (i, n) => {
            let r = i.value;
            if (!(r instanceof Map))
              return (
                i.issues.push({
                  expected: "map",
                  code: "invalid_type",
                  input: r,
                  inst: e,
                }),
                i
              );
            let a = [];
            for (let [o, s] of ((i.value = new Map()), r)) {
              let u = t.keyType._zod.run({ value: o, issues: [] }, n),
                l = t.valueType._zod.run({ value: s, issues: [] }, n);
              u instanceof Promise || l instanceof Promise
                ? a.push(
                    Promise.all([u, l]).then(([t, a]) => {
                      i9(t, a, i, o, r, e, n);
                    })
                  )
                : i9(u, l, i, o, r, e, n);
            }
            return a.length ? Promise.all(a).then(() => i) : i;
          });
      });
    function i9(e, t, i, n, r, a, o) {
      e.issues.length &&
        (A.has(typeof n)
          ? i.issues.push(...et(n, e.issues))
          : i.issues.push({
              code: "invalid_key",
              origin: "map",
              input: r,
              inst: a,
              issues: e.issues.map((e) => en(e, o, s())),
            })),
        t.issues.length &&
          (A.has(typeof n)
            ? i.issues.push(...et(n, t.issues))
            : i.issues.push({
                origin: "map",
                code: "invalid_element",
                input: r,
                inst: a,
                key: n,
                issues: t.issues.map((e) => en(e, o, s())),
              })),
        i.value.set(e.value, t.value);
    }
    let i3 = i("$ZodSet", (e, t) => {
      t9.init(e, t),
        (e._zod.parse = (i, n) => {
          let r = i.value;
          if (!(r instanceof Set))
            return (
              i.issues.push({
                input: r,
                inst: e,
                expected: "set",
                code: "invalid_type",
              }),
              i
            );
          let a = [];
          for (let e of ((i.value = new Set()), r)) {
            let r = t.valueType._zod.run({ value: e, issues: [] }, n);
            r instanceof Promise ? a.push(r.then((e) => i7(e, i))) : i7(r, i);
          }
          return a.length ? Promise.all(a).then(() => i) : i;
        });
    });
    function i7(e, t) {
      e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
    }
    let i8 = i("$ZodEnum", (e, t) => {
        t9.init(e, t);
        let i = p(t.entries),
          n = new Set(i);
        (e._zod.values = n),
          (e._zod.pattern = RegExp(
            `^(${i
              .filter((e) => A.has(typeof e))
              .map((e) => ("string" == typeof e ? M(e) : e.toString()))
              .join("|")})$`
          )),
          (e._zod.parse = (t, r) => {
            let a = t.value;
            return (
              n.has(a) ||
                t.issues.push({
                  code: "invalid_value",
                  values: i,
                  input: a,
                  inst: e,
                }),
              t
            );
          });
      }),
      i5 = i("$ZodLiteral", (e, t) => {
        if ((t9.init(e, t), 0 === t.values.length))
          throw Error("Cannot create literal schema with no valid values");
        let i = new Set(t.values);
        (e._zod.values = i),
          (e._zod.pattern = RegExp(
            `^(${t.values
              .map((e) =>
                "string" == typeof e ? M(e) : e ? M(e.toString()) : String(e)
              )
              .join("|")})$`
          )),
          (e._zod.parse = (n, r) => {
            let a = n.value;
            return (
              i.has(a) ||
                n.issues.push({
                  code: "invalid_value",
                  values: t.values,
                  input: a,
                  inst: e,
                }),
              n
            );
          });
      }),
      ne = i("$ZodFile", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (t, i) => {
            let n = t.value;
            return (
              n instanceof File ||
                t.issues.push({
                  expected: "file",
                  code: "invalid_type",
                  input: n,
                  inst: e,
                }),
              t
            );
          });
      }),
      nt = i("$ZodTransform", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (i, n) => {
            if ("backward" === n.direction) throw new a(e.constructor.name);
            let o = t.transform(i.value, i);
            if (n.async)
              return (o instanceof Promise ? o : Promise.resolve(o)).then(
                (e) => ((i.value = e), i)
              );
            if (o instanceof Promise) throw new r();
            return (i.value = o), i;
          });
      });
    function ni(e, t) {
      return e.issues.length && void 0 === t
        ? { issues: [], value: void 0 }
        : e;
    }
    let nn = i("$ZodOptional", (e, t) => {
        t9.init(e, t),
          (e._zod.optin = "optional"),
          (e._zod.optout = "optional"),
          _(e._zod, "values", () =>
            t.innerType._zod.values
              ? new Set([...t.innerType._zod.values, void 0])
              : void 0
          ),
          _(e._zod, "pattern", () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${$(e.source)})?$`) : void 0;
          }),
          (e._zod.parse = (e, i) => {
            if ("optional" === t.innerType._zod.optin) {
              let n = t.innerType._zod.run(e, i);
              return n instanceof Promise
                ? n.then((t) => ni(t, e.value))
                : ni(n, e.value);
            }
            return void 0 === e.value ? e : t.innerType._zod.run(e, i);
          });
      }),
      nr = i("$ZodExactOptional", (e, t) => {
        nn.init(e, t),
          _(e._zod, "values", () => t.innerType._zod.values),
          _(e._zod, "pattern", () => t.innerType._zod.pattern),
          (e._zod.parse = (e, i) => t.innerType._zod.run(e, i));
      }),
      na = i("$ZodNullable", (e, t) => {
        t9.init(e, t),
          _(e._zod, "optin", () => t.innerType._zod.optin),
          _(e._zod, "optout", () => t.innerType._zod.optout),
          _(e._zod, "pattern", () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${$(e.source)}|null)$`) : void 0;
          }),
          _(e._zod, "values", () =>
            t.innerType._zod.values
              ? new Set([...t.innerType._zod.values, null])
              : void 0
          ),
          (e._zod.parse = (e, i) =>
            null === e.value ? e : t.innerType._zod.run(e, i));
      }),
      no = i("$ZodDefault", (e, t) => {
        t9.init(e, t),
          (e._zod.optin = "optional"),
          _(e._zod, "values", () => t.innerType._zod.values),
          (e._zod.parse = (e, i) => {
            if ("backward" === i.direction) return t.innerType._zod.run(e, i);
            if (void 0 === e.value) return (e.value = t.defaultValue), e;
            let n = t.innerType._zod.run(e, i);
            return n instanceof Promise ? n.then((e) => ns(e, t)) : ns(n, t);
          });
      });
    function ns(e, t) {
      return void 0 === e.value && (e.value = t.defaultValue), e;
    }
    let nu = i("$ZodPrefault", (e, t) => {
        t9.init(e, t),
          (e._zod.optin = "optional"),
          _(e._zod, "values", () => t.innerType._zod.values),
          (e._zod.parse = (e, i) => (
            "backward" === i.direction ||
              (void 0 === e.value && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, i)
          ));
      }),
      nl = i("$ZodNonOptional", (e, t) => {
        t9.init(e, t),
          _(e._zod, "values", () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
          }),
          (e._zod.parse = (i, n) => {
            let r = t.innerType._zod.run(i, n);
            return r instanceof Promise ? r.then((t) => nd(t, e)) : nd(r, e);
          });
      });
    function nd(e, t) {
      return (
        e.issues.length ||
          void 0 !== e.value ||
          e.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: e.value,
            inst: t,
          }),
        e
      );
    }
    let nc = i("$ZodSuccess", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (e, i) => {
            if ("backward" === i.direction) throw new a("ZodSuccess");
            let n = t.innerType._zod.run(e, i);
            return n instanceof Promise
              ? n.then((t) => ((e.value = 0 === t.issues.length), e))
              : ((e.value = 0 === n.issues.length), e);
          });
      }),
      nm = i("$ZodCatch", (e, t) => {
        t9.init(e, t),
          _(e._zod, "optin", () => t.innerType._zod.optin),
          _(e._zod, "optout", () => t.innerType._zod.optout),
          _(e._zod, "values", () => t.innerType._zod.values),
          (e._zod.parse = (e, i) => {
            if ("backward" === i.direction) return t.innerType._zod.run(e, i);
            let n = t.innerType._zod.run(e, i);
            return n instanceof Promise
              ? n.then(
                  (n) => (
                    (e.value = n.value),
                    n.issues.length &&
                      ((e.value = t.catchValue({
                        ...e,
                        error: { issues: n.issues.map((e) => en(e, i, s())) },
                        input: e.value,
                      })),
                      (e.issues = [])),
                    e
                  )
                )
              : ((e.value = n.value),
                n.issues.length &&
                  ((e.value = t.catchValue({
                    ...e,
                    error: { issues: n.issues.map((e) => en(e, i, s())) },
                    input: e.value,
                  })),
                  (e.issues = [])),
                e);
          });
      }),
      np = i("$ZodNaN", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (t, i) => (
            ("number" == typeof t.value && Number.isNaN(t.value)) ||
              t.issues.push({
                input: t.value,
                inst: e,
                expected: "nan",
                code: "invalid_type",
              }),
            t
          ));
      }),
      nf = i("$ZodPipe", (e, t) => {
        t9.init(e, t),
          _(e._zod, "values", () => t.in._zod.values),
          _(e._zod, "optin", () => t.in._zod.optin),
          _(e._zod, "optout", () => t.out._zod.optout),
          _(e._zod, "propValues", () => t.in._zod.propValues),
          (e._zod.parse = (e, i) => {
            if ("backward" === i.direction) {
              let n = t.out._zod.run(e, i);
              return n instanceof Promise
                ? n.then((e) => ng(e, t.in, i))
                : ng(n, t.in, i);
            }
            let n = t.in._zod.run(e, i);
            return n instanceof Promise
              ? n.then((e) => ng(e, t.out, i))
              : ng(n, t.out, i);
          });
      });
    function ng(e, t, i) {
      return e.issues.length
        ? ((e.aborted = !0), e)
        : t._zod.run({ value: e.value, issues: e.issues }, i);
    }
    let nv = i("$ZodCodec", (e, t) => {
      t9.init(e, t),
        _(e._zod, "values", () => t.in._zod.values),
        _(e._zod, "optin", () => t.in._zod.optin),
        _(e._zod, "optout", () => t.out._zod.optout),
        _(e._zod, "propValues", () => t.in._zod.propValues),
        (e._zod.parse = (e, i) => {
          if ("forward" === (i.direction || "forward")) {
            let n = t.in._zod.run(e, i);
            return n instanceof Promise
              ? n.then((e) => nh(e, t, i))
              : nh(n, t, i);
          }
          {
            let n = t.out._zod.run(e, i);
            return n instanceof Promise
              ? n.then((e) => nh(e, t, i))
              : nh(n, t, i);
          }
        });
    });
    function nh(e, t, i) {
      if (e.issues.length) return (e.aborted = !0), e;
      if ("forward" === (i.direction || "forward")) {
        let n = t.transform(e.value, e);
        return n instanceof Promise
          ? n.then((n) => n$(e, n, t.out, i))
          : n$(e, n, t.out, i);
      }
      {
        let n = t.reverseTransform(e.value, e);
        return n instanceof Promise
          ? n.then((n) => n$(e, n, t.in, i))
          : n$(e, n, t.in, i);
      }
    }
    function n$(e, t, i, n) {
      return e.issues.length
        ? ((e.aborted = !0), e)
        : i._zod.run({ value: t, issues: e.issues }, n);
    }
    let nb = i("$ZodReadonly", (e, t) => {
      t9.init(e, t),
        _(e._zod, "propValues", () => t.innerType._zod.propValues),
        _(e._zod, "values", () => t.innerType._zod.values),
        _(e._zod, "optin", () => t.innerType?._zod?.optin),
        _(e._zod, "optout", () => t.innerType?._zod?.optout),
        (e._zod.parse = (e, i) => {
          if ("backward" === i.direction) return t.innerType._zod.run(e, i);
          let n = t.innerType._zod.run(e, i);
          return n instanceof Promise ? n.then(ny) : ny(n);
        });
    });
    function ny(e) {
      return (e.value = Object.freeze(e.value)), e;
    }
    let n_ = i("$ZodTemplateLiteral", (e, t) => {
        t9.init(e, t);
        let i = [];
        for (let e of t.parts)
          if ("object" == typeof e && null !== e) {
            if (!e._zod.pattern)
              throw Error(
                `Invalid template literal part, no pattern found: ${[
                  ...e._zod.traits,
                ].shift()}`
              );
            let t =
              e._zod.pattern instanceof RegExp
                ? e._zod.pattern.source
                : e._zod.pattern;
            if (!t)
              throw Error(`Invalid template literal part: ${e._zod.traits}`);
            let n = +!!t.startsWith("^"),
              r = t.endsWith("$") ? t.length - 1 : t.length;
            i.push(t.slice(n, r));
          } else if (null === e || T.has(typeof e)) i.push(M(`${e}`));
          else throw Error(`Invalid template literal part: ${e}`);
        (e._zod.pattern = RegExp(`^${i.join("")}$`)),
          (e._zod.parse = (i, n) => (
            "string" != typeof i.value
              ? i.issues.push({
                  input: i.value,
                  inst: e,
                  expected: "string",
                  code: "invalid_type",
                })
              : ((e._zod.pattern.lastIndex = 0),
                e._zod.pattern.test(i.value) ||
                  i.issues.push({
                    input: i.value,
                    inst: e,
                    code: "invalid_format",
                    format: t.format ?? "template_literal",
                    pattern: e._zod.pattern.source,
                  })),
            i
          ));
      }),
      nx = i(
        "$ZodFunction",
        (e, t) => (
          t9.init(e, t),
          (e._def = t),
          (e._zod.def = t),
          (e.implement = (t) => {
            if ("function" != typeof t)
              throw Error("implement() must be called with a function");
            return function (...i) {
              let n = Reflect.apply(
                t,
                this,
                e._def.input ? ew(e._def.input, i) : i
              );
              return e._def.output ? ew(e._def.output, n) : n;
            };
          }),
          (e.implementAsync = (t) => {
            if ("function" != typeof t)
              throw Error("implementAsync() must be called with a function");
            return async function (...i) {
              let n = e._def.input ? await ez(e._def.input, i) : i,
                r = await Reflect.apply(t, this, n);
              return e._def.output ? await ez(e._def.output, r) : r;
            };
          }),
          (e._zod.parse = (t, i) => (
            "function" != typeof t.value
              ? t.issues.push({
                  code: "invalid_type",
                  expected: "function",
                  input: t.value,
                  inst: e,
                })
              : e._def.output && "promise" === e._def.output._zod.def.type
              ? (t.value = e.implementAsync(t.value))
              : (t.value = e.implement(t.value)),
            t
          )),
          (e.input = (...t) => {
            let i = e.constructor;
            return new i(
              Array.isArray(t[0])
                ? {
                    type: "function",
                    input: new i4({ type: "tuple", items: t[0], rest: t[1] }),
                    output: e._def.output,
                  }
                : { type: "function", input: t[0], output: e._def.output }
            );
          }),
          (e.output = (t) =>
            new e.constructor({
              type: "function",
              input: e._def.input,
              output: t,
            })),
          e
        )
      ),
      nk = i("$ZodPromise", (e, t) => {
        t9.init(e, t),
          (e._zod.parse = (e, i) =>
            Promise.resolve(e.value).then((e) =>
              t.innerType._zod.run({ value: e, issues: [] }, i)
            ));
      }),
      nI = i("$ZodLazy", (e, t) => {
        t9.init(e, t),
          _(e._zod, "innerType", () => t.getter()),
          _(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
          _(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
          _(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
          _(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
          (e._zod.parse = (t, i) => e._zod.innerType._zod.run(t, i));
      }),
      nw = i("$ZodCustom", (e, t) => {
        tD.init(e, t),
          t9.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (i) => {
            let n = i.value,
              r = t.fn(n);
            if (r instanceof Promise) return r.then((t) => nS(t, i, n, e));
            nS(r, i, n, e);
          });
      });
    function nS(e, t, i, n) {
      if (!e) {
        let e = {
          code: "custom",
          input: i,
          inst: n,
          path: [...(n._zod.def.path ?? [])],
          continue: !n._zod.def.abort,
        };
        n._zod.def.params && (e.params = n._zod.def.params),
          t.issues.push(es(e));
      }
    }
    function nz(e, t, i, n) {
      let r = Math.abs(e),
        a = r % 10,
        o = r % 100;
      return o >= 11 && o <= 19 ? n : 1 === a ? t : a >= 2 && a <= 4 ? i : n;
    }
    function nj(e, t, i) {
      return 1 === Math.abs(e) ? t : i;
    }
    function nZ(e) {
      if (!e) return "";
      let t = e[e.length - 1];
      return e + (["ա", "ե", "ը", "ի", "ո", "ու", "օ"].includes(t) ? "ն" : "ը");
    }
    function nU() {
      let e, t, i;
      return {
        localeError:
          ((e = {
            string: { unit: "តួអក្សរ", verb: "គួរមាន" },
            file: { unit: "បៃ", verb: "គួរមាន" },
            array: { unit: "ធាតុ", verb: "គួរមាន" },
            set: { unit: "ធាតុ", verb: "គួរមាន" },
          }),
          (t = {
            regex: "ទិន្នន័យបញ្ចូល",
            email: "អាសយដ្ឋានអ៊ីមែល",
            url: "URL",
            emoji: "សញ្ញាអារម្មណ៍",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
            date: "កាលបរិច្ឆេទ ISO",
            time: "ម៉ោង ISO",
            duration: "រយៈពេល ISO",
            ipv4: "អាសយដ្ឋាន IPv4",
            ipv6: "អាសយដ្ឋាន IPv6",
            cidrv4: "ដែនអាសយដ្ឋាន IPv4",
            cidrv6: "ដែនអាសយដ្ឋាន IPv6",
            base64: "ខ្សែអក្សរអ៊ិកូដ base64",
            base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
            json_string: "ខ្សែអក្សរ JSON",
            e164: "លេខ E.164",
            jwt: "JWT",
            template_literal: "ទិន្នន័យបញ្ចូល",
          }),
          (i = {
            nan: "NaN",
            number: "លេខ",
            array: "អារេ (Array)",
            null: "គ្មានតម្លៃ (null)",
          }),
          (n) => {
            switch (n.code) {
              case "invalid_type": {
                let e = i[n.expected] ?? n.expected,
                  t = eo(n.input),
                  r = i[t] ?? t;
                if (/^[A-Z]/.test(n.expected))
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${n.expected} ប៉ុន្តែទទួលបាន ${r}`;
                return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${e} ប៉ុន្តែទទួលបាន ${r}`;
              }
              case "invalid_value":
                if (1 === n.values.length)
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${F(
                    n.values[0]
                  )}`;
                return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${f(
                  n.values,
                  "|"
                )}`;
              case "too_big": {
                let t = n.inclusive ? "<=" : "<",
                  i = e[n.origin] ?? null;
                if (i)
                  return `ធំពេក៖ ត្រូវការ ${
                    n.origin ?? "តម្លៃ"
                  } ${t} ${n.maximum.toString()} ${i.unit ?? "ធាតុ"}`;
                return `ធំពេក៖ ត្រូវការ ${
                  n.origin ?? "តម្លៃ"
                } ${t} ${n.maximum.toString()}`;
              }
              case "too_small": {
                let t = n.inclusive ? ">=" : ">",
                  i = e[n.origin] ?? null;
                if (i)
                  return `តូចពេក៖ ត្រូវការ ${
                    n.origin
                  } ${t} ${n.minimum.toString()} ${i.unit}`;
                return `តូចពេក៖ ត្រូវការ ${
                  n.origin
                } ${t} ${n.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${n.prefix}"`;
                if ("ends_with" === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${n.suffix}"`;
                if ("includes" === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${n.includes}"`;
                if ("regex" === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${n.pattern}`;
                return `មិនត្រឹមត្រូវ៖ ${t[n.format] ?? n.format}`;
              case "not_multiple_of":
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
              case "unrecognized_keys":
                return `រកឃើញសោមិនស្គាល់៖ ${f(n.keys, ", ")}`;
              case "invalid_key":
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
              case "invalid_union":
              default:
                return `ទិន្នន័យមិនត្រឹមត្រូវ`;
              case "invalid_element":
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
            }
          }),
      };
    }
    e.s(
      [
        "$ZodAny",
        0,
        iR,
        "$ZodArray",
        0,
        iq,
        "$ZodBase64",
        0,
        i_,
        "$ZodBase64URL",
        0,
        ik,
        "$ZodBigInt",
        0,
        iO,
        "$ZodBigIntFormat",
        0,
        iP,
        "$ZodBoolean",
        0,
        iU,
        "$ZodCIDRv4",
        0,
        i$,
        "$ZodCIDRv6",
        0,
        ib,
        "$ZodCUID",
        0,
        ia,
        "$ZodCUID2",
        0,
        io,
        "$ZodCatch",
        0,
        nm,
        "$ZodCodec",
        0,
        nv,
        "$ZodCustom",
        0,
        nw,
        "$ZodCustomStringFormat",
        0,
        iz,
        "$ZodDate",
        0,
        iC,
        "$ZodDefault",
        0,
        no,
        "$ZodDiscriminatedUnion",
        0,
        iY,
        "$ZodE164",
        0,
        iI,
        "$ZodEmail",
        0,
        ie,
        "$ZodEmoji",
        0,
        ii,
        "$ZodEnum",
        0,
        i8,
        "$ZodExactOptional",
        0,
        nr,
        "$ZodFile",
        0,
        ne,
        "$ZodFunction",
        0,
        nx,
        "$ZodGUID",
        0,
        t8,
        "$ZodIPv4",
        0,
        ig,
        "$ZodIPv6",
        0,
        iv,
        "$ZodISODate",
        0,
        ic,
        "$ZodISODateTime",
        0,
        id,
        "$ZodISODuration",
        0,
        ip,
        "$ZodISOTime",
        0,
        im,
        "$ZodIntersection",
        0,
        iQ,
        "$ZodJWT",
        0,
        iS,
        "$ZodKSUID",
        0,
        il,
        "$ZodLazy",
        0,
        nI,
        "$ZodLiteral",
        0,
        i5,
        "$ZodMAC",
        0,
        ih,
        "$ZodMap",
        0,
        i2,
        "$ZodNaN",
        0,
        np,
        "$ZodNanoID",
        0,
        ir,
        "$ZodNever",
        0,
        iT,
        "$ZodNonOptional",
        0,
        nl,
        "$ZodNull",
        0,
        iN,
        "$ZodNullable",
        0,
        na,
        "$ZodNumber",
        0,
        ij,
        "$ZodNumberFormat",
        0,
        iZ,
        "$ZodObject",
        0,
        iB,
        "$ZodObjectJIT",
        0,
        iV,
        "$ZodOptional",
        0,
        nn,
        "$ZodPipe",
        0,
        nf,
        "$ZodPrefault",
        0,
        nu,
        "$ZodPromise",
        0,
        nk,
        "$ZodReadonly",
        0,
        nb,
        "$ZodRecord",
        0,
        i1,
        "$ZodSet",
        0,
        i3,
        "$ZodString",
        0,
        t3,
        "$ZodStringFormat",
        0,
        t7,
        "$ZodSuccess",
        0,
        nc,
        "$ZodSymbol",
        0,
        iD,
        "$ZodTemplateLiteral",
        0,
        n_,
        "$ZodTransform",
        0,
        nt,
        "$ZodTuple",
        0,
        i4,
        "$ZodType",
        0,
        t9,
        "$ZodULID",
        0,
        is,
        "$ZodURL",
        0,
        it,
        "$ZodUUID",
        0,
        t5,
        "$ZodUndefined",
        0,
        iE,
        "$ZodUnion",
        0,
        iW,
        "$ZodUnknown",
        0,
        iA,
        "$ZodVoid",
        0,
        iM,
        "$ZodXID",
        0,
        iu,
        "$ZodXor",
        0,
        iH,
        "isValidBase64",
        () => iy,
        "isValidBase64URL",
        () => ix,
        "isValidJWT",
        () => iw,
      ],
      821768
    );
    let nO = (e) => e.charAt(0).toUpperCase() + e.slice(1);
    function nP(e) {
      let t = Math.abs(e),
        i = t % 10,
        n = t % 100;
      return (n >= 11 && n <= 19) || 0 === i ? "many" : 1 === i ? "one" : "few";
    }
    function nD(e, t, i, n) {
      let r = Math.abs(e),
        a = r % 10,
        o = r % 100;
      return o >= 11 && o <= 19 ? n : 1 === a ? t : a >= 2 && a <= 4 ? i : n;
    }
    function nE() {
      let e, t, i;
      return {
        localeError:
          ((e = {
            string: { unit: "символів", verb: "матиме" },
            file: { unit: "байтів", verb: "матиме" },
            array: { unit: "елементів", verb: "матиме" },
            set: { unit: "елементів", verb: "матиме" },
          }),
          (t = {
            regex: "вхідні дані",
            email: "адреса електронної пошти",
            url: "URL",
            emoji: "емодзі",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "дата та час ISO",
            date: "дата ISO",
            time: "час ISO",
            duration: "тривалість ISO",
            ipv4: "адреса IPv4",
            ipv6: "адреса IPv6",
            cidrv4: "діапазон IPv4",
            cidrv6: "діапазон IPv6",
            base64: "рядок у кодуванні base64",
            base64url: "рядок у кодуванні base64url",
            json_string: "рядок JSON",
            e164: "номер E.164",
            jwt: "JWT",
            template_literal: "вхідні дані",
          }),
          (i = { nan: "NaN", number: "число", array: "масив" }),
          (n) => {
            switch (n.code) {
              case "invalid_type": {
                let e = i[n.expected] ?? n.expected,
                  t = eo(n.input),
                  r = i[t] ?? t;
                if (/^[A-Z]/.test(n.expected))
                  return `Неправильні вхідні дані: очікується instanceof ${n.expected}, отримано ${r}`;
                return `Неправильні вхідні дані: очікується ${e}, отримано ${r}`;
              }
              case "invalid_value":
                if (1 === n.values.length)
                  return `Неправильні вхідні дані: очікується ${F(
                    n.values[0]
                  )}`;
                return `Неправильна опція: очікується одне з ${f(
                  n.values,
                  "|"
                )}`;
              case "too_big": {
                let t = n.inclusive ? "<=" : "<",
                  i = e[n.origin] ?? null;
                if (i)
                  return `Занадто велике: очікується, що ${
                    n.origin ?? "значення"
                  } ${i.verb} ${t}${n.maximum.toString()} ${
                    i.unit ?? "елементів"
                  }`;
                return `Занадто велике: очікується, що ${
                  n.origin ?? "значення"
                } буде ${t}${n.maximum.toString()}`;
              }
              case "too_small": {
                let t = n.inclusive ? ">=" : ">",
                  i = e[n.origin] ?? null;
                if (i)
                  return `Занадто мале: очікується, що ${n.origin} ${
                    i.verb
                  } ${t}${n.minimum.toString()} ${i.unit}`;
                return `Занадто мале: очікується, що ${
                  n.origin
                } буде ${t}${n.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === n.format)
                  return `Неправильний рядок: повинен починатися з "${n.prefix}"`;
                if ("ends_with" === n.format)
                  return `Неправильний рядок: повинен закінчуватися на "${n.suffix}"`;
                if ("includes" === n.format)
                  return `Неправильний рядок: повинен містити "${n.includes}"`;
                if ("regex" === n.format)
                  return `Неправильний рядок: повинен відповідати шаблону ${n.pattern}`;
                return `Неправильний ${t[n.format] ?? n.format}`;
              case "not_multiple_of":
                return `Неправильне число: повинно бути кратним ${n.divisor}`;
              case "unrecognized_keys":
                return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${f(
                  n.keys,
                  ", "
                )}`;
              case "invalid_key":
                return `Неправильний ключ у ${n.origin}`;
              case "invalid_union":
                return "Неправильні вхідні дані";
              case "invalid_element":
                return `Неправильне значення у ${n.origin}`;
              default:
                return `Неправильні вхідні дані`;
            }
          }),
      };
    }
    e.s([], 71376);
    let nN = Symbol("ZodOutput"),
      nR = Symbol("ZodInput");
    class nA {
      constructor() {
        (this._map = new WeakMap()), (this._idmap = new Map());
      }
      add(e, ...t) {
        let i = t[0];
        return (
          this._map.set(e, i),
          i && "object" == typeof i && "id" in i && this._idmap.set(i.id, e),
          this
        );
      }
      clear() {
        return (this._map = new WeakMap()), (this._idmap = new Map()), this;
      }
      remove(e) {
        let t = this._map.get(e);
        return (
          t && "object" == typeof t && "id" in t && this._idmap.delete(t.id),
          this._map.delete(e),
          this
        );
      }
      get(e) {
        let t = e._zod.parent;
        if (t) {
          let i = { ...(this.get(t) ?? {}) };
          delete i.id;
          let n = { ...i, ...this._map.get(e) };
          return Object.keys(n).length ? n : void 0;
        }
        return this._map.get(e);
      }
      has(e) {
        return this._map.has(e);
      }
    }
    function nT() {
      return new nA();
    }
    (aA = globalThis).__zod_globalRegistry ?? (aA.__zod_globalRegistry = nT());
    let nM = globalThis.__zod_globalRegistry;
    function nC(e, t) {
      return new e({ type: "string", ...L(t) });
    }
    function nL(e, t) {
      return new e({ type: "string", coerce: !0, ...L(t) });
    }
    function nq(e, t) {
      return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nF(e, t) {
      return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nJ(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nK(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...L(t),
      });
    }
    function nB(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...L(t),
      });
    }
    function nV(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...L(t),
      });
    }
    function nG(e, t) {
      return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nW(e, t) {
      return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nX(e, t) {
      return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nH(e, t) {
      return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nY(e, t) {
      return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function nQ(e, t) {
      return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n0(e, t) {
      return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n4(e, t) {
      return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n6(e, t) {
      return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n1(e, t) {
      return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n2(e, t) {
      return new e({
        type: "string",
        format: "mac",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n9(e, t) {
      return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n3(e, t) {
      return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n7(e, t) {
      return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n8(e, t) {
      return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function n5(e, t) {
      return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    function re(e, t) {
      return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...L(t),
      });
    }
    e.s(
      [
        "$ZodRegistry",
        () => nA,
        "$input",
        0,
        nR,
        "$output",
        0,
        nN,
        "globalRegistry",
        0,
        nM,
        "registry",
        () => nT,
      ],
      976111
    );
    let rt = {
      Any: null,
      Minute: -1,
      Second: 0,
      Millisecond: 3,
      Microsecond: 6,
    };
    function ri(e, t) {
      return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...L(t),
      });
    }
    function rn(e, t) {
      return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...L(t),
      });
    }
    function rr(e, t) {
      return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...L(t),
      });
    }
    function ra(e, t) {
      return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...L(t),
      });
    }
    function ro(e, t) {
      return new e({ type: "number", checks: [], ...L(t) });
    }
    function rs(e, t) {
      return new e({ type: "number", coerce: !0, checks: [], ...L(t) });
    }
    function ru(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...L(t),
      });
    }
    function rl(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "float32",
        ...L(t),
      });
    }
    function rd(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "float64",
        ...L(t),
      });
    }
    function rc(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "int32",
        ...L(t),
      });
    }
    function rm(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "uint32",
        ...L(t),
      });
    }
    function rp(e, t) {
      return new e({ type: "boolean", ...L(t) });
    }
    function rf(e, t) {
      return new e({ type: "boolean", coerce: !0, ...L(t) });
    }
    function rg(e, t) {
      return new e({ type: "bigint", ...L(t) });
    }
    function rv(e, t) {
      return new e({ type: "bigint", coerce: !0, ...L(t) });
    }
    function rh(e, t) {
      return new e({
        type: "bigint",
        check: "bigint_format",
        abort: !1,
        format: "int64",
        ...L(t),
      });
    }
    function r$(e, t) {
      return new e({
        type: "bigint",
        check: "bigint_format",
        abort: !1,
        format: "uint64",
        ...L(t),
      });
    }
    function rb(e, t) {
      return new e({ type: "symbol", ...L(t) });
    }
    function ry(e, t) {
      return new e({ type: "undefined", ...L(t) });
    }
    function r_(e, t) {
      return new e({ type: "null", ...L(t) });
    }
    function rx(e) {
      return new e({ type: "any" });
    }
    function rk(e) {
      return new e({ type: "unknown" });
    }
    function rI(e, t) {
      return new e({ type: "never", ...L(t) });
    }
    function rw(e, t) {
      return new e({ type: "void", ...L(t) });
    }
    function rS(e, t) {
      return new e({ type: "date", ...L(t) });
    }
    function rz(e, t) {
      return new e({ type: "date", coerce: !0, ...L(t) });
    }
    function rj(e, t) {
      return new e({ type: "nan", ...L(t) });
    }
    function rZ(e, t) {
      return new tN({ check: "less_than", ...L(t), value: e, inclusive: !1 });
    }
    function rU(e, t) {
      return new tN({ check: "less_than", ...L(t), value: e, inclusive: !0 });
    }
    function rO(e, t) {
      return new tR({
        check: "greater_than",
        ...L(t),
        value: e,
        inclusive: !1,
      });
    }
    function rP(e, t) {
      return new tR({
        check: "greater_than",
        ...L(t),
        value: e,
        inclusive: !0,
      });
    }
    function rD(e) {
      return rO(0, e);
    }
    function rE(e) {
      return rZ(0, e);
    }
    function rN(e) {
      return rU(0, e);
    }
    function rR(e) {
      return rP(0, e);
    }
    function rA(e, t) {
      return new tA({ check: "multiple_of", ...L(t), value: e });
    }
    function rT(e, t) {
      return new tC({ check: "max_size", ...L(t), maximum: e });
    }
    function rM(e, t) {
      return new tL({ check: "min_size", ...L(t), minimum: e });
    }
    function rC(e, t) {
      return new tq({ check: "size_equals", ...L(t), size: e });
    }
    function rL(e, t) {
      return new tF({ check: "max_length", ...L(t), maximum: e });
    }
    function rq(e, t) {
      return new tJ({ check: "min_length", ...L(t), minimum: e });
    }
    function rF(e, t) {
      return new tK({ check: "length_equals", ...L(t), length: e });
    }
    function rJ(e, t) {
      return new tV({
        check: "string_format",
        format: "regex",
        ...L(t),
        pattern: e,
      });
    }
    function rK(e) {
      return new tG({ check: "string_format", format: "lowercase", ...L(e) });
    }
    function rB(e) {
      return new tW({ check: "string_format", format: "uppercase", ...L(e) });
    }
    function rV(e, t) {
      return new tX({
        check: "string_format",
        format: "includes",
        ...L(t),
        includes: e,
      });
    }
    function rG(e, t) {
      return new tH({
        check: "string_format",
        format: "starts_with",
        ...L(t),
        prefix: e,
      });
    }
    function rW(e, t) {
      return new tY({
        check: "string_format",
        format: "ends_with",
        ...L(t),
        suffix: e,
      });
    }
    function rX(e, t, i) {
      return new t0({ check: "property", property: e, schema: t, ...L(i) });
    }
    function rH(e, t) {
      return new t4({ check: "mime_type", mime: e, ...L(t) });
    }
    function rY(e) {
      return new t6({ check: "overwrite", tx: e });
    }
    function rQ(e) {
      return rY((t) => t.normalize(e));
    }
    function r0() {
      return rY((e) => e.trim());
    }
    function r4() {
      return rY((e) => e.toLowerCase());
    }
    function r6() {
      return rY((e) => e.toUpperCase());
    }
    function r1() {
      return rY((e) => U(e));
    }
    function r2(e, t, i) {
      return new e({ type: "array", element: t, ...L(i) });
    }
    function r9(e, t, i) {
      return new e({ type: "union", options: t, ...L(i) });
    }
    function r3(e, t, i) {
      return new e({ type: "union", options: t, inclusive: !1, ...L(i) });
    }
    function r7(e, t, i, n) {
      return new e({ type: "union", options: i, discriminator: t, ...L(n) });
    }
    function r8(e, t, i) {
      return new e({ type: "intersection", left: t, right: i });
    }
    function r5(e, t, i, n) {
      let r = i instanceof t9,
        a = r ? n : i;
      return new e({ type: "tuple", items: t, rest: r ? i : null, ...L(a) });
    }
    function ae(e, t, i, n) {
      return new e({ type: "record", keyType: t, valueType: i, ...L(n) });
    }
    function at(e, t, i, n) {
      return new e({ type: "map", keyType: t, valueType: i, ...L(n) });
    }
    function ai(e, t, i) {
      return new e({ type: "set", valueType: t, ...L(i) });
    }
    function an(e, t, i) {
      return new e({
        type: "enum",
        entries: Array.isArray(t)
          ? Object.fromEntries(t.map((e) => [e, e]))
          : t,
        ...L(i),
      });
    }
    function ar(e, t, i) {
      return new e({ type: "enum", entries: t, ...L(i) });
    }
    function aa(e, t, i) {
      return new e({
        type: "literal",
        values: Array.isArray(t) ? t : [t],
        ...L(i),
      });
    }
    function ao(e, t) {
      return new e({ type: "file", ...L(t) });
    }
    function as(e, t) {
      return new e({ type: "transform", transform: t });
    }
    function au(e, t) {
      return new e({ type: "optional", innerType: t });
    }
    function al(e, t) {
      return new e({ type: "nullable", innerType: t });
    }
    function ad(e, t, i) {
      return new e({
        type: "default",
        innerType: t,
        get defaultValue() {
          return "function" == typeof i ? i() : N(i);
        },
      });
    }
    function ac(e, t, i) {
      return new e({ type: "nonoptional", innerType: t, ...L(i) });
    }
    function am(e, t) {
      return new e({ type: "success", innerType: t });
    }
    function ap(e, t, i) {
      return new e({
        type: "catch",
        innerType: t,
        catchValue: "function" == typeof i ? i : () => i,
      });
    }
    function af(e, t, i) {
      return new e({ type: "pipe", in: t, out: i });
    }
    function ag(e, t) {
      return new e({ type: "readonly", innerType: t });
    }
    function av(e, t, i) {
      return new e({ type: "template_literal", parts: t, ...L(i) });
    }
    function ah(e, t) {
      return new e({ type: "lazy", getter: t });
    }
    function a$(e, t) {
      return new e({ type: "promise", innerType: t });
    }
    function ab(e, t, i) {
      let n = L(i);
      return (
        n.abort ?? (n.abort = !0),
        new e({ type: "custom", check: "custom", fn: t, ...n })
      );
    }
    function ay(e, t, i) {
      return new e({ type: "custom", check: "custom", fn: t, ...L(i) });
    }
    function a_(e) {
      let t = ax(
        (i) => (
          (i.addIssue = (e) => {
            "string" == typeof e
              ? i.issues.push(es(e, i.value, t._zod.def))
              : (e.fatal && (e.continue = !1),
                e.code ?? (e.code = "custom"),
                e.input ?? (e.input = i.value),
                e.inst ?? (e.inst = t),
                e.continue ?? (e.continue = !t._zod.def.abort),
                i.issues.push(es(e)));
          }),
          e(i.value, i)
        )
      );
      return t;
    }
    function ax(e, t) {
      let i = new tD({ check: "custom", ...L(t) });
      return (i._zod.check = e), i;
    }
    function ak(e) {
      let t = new tD({ check: "describe" });
      return (
        (t._zod.onattach = [
          (t) => {
            let i = nM.get(t) ?? {};
            nM.add(t, { ...i, description: e });
          },
        ]),
        (t._zod.check = () => {}),
        t
      );
    }
    function aI(e) {
      let t = new tD({ check: "meta" });
      return (
        (t._zod.onattach = [
          (t) => {
            let i = nM.get(t) ?? {};
            nM.add(t, { ...i, ...e });
          },
        ]),
        (t._zod.check = () => {}),
        t
      );
    }
    function aw(e, t) {
      let i = L(t),
        n = i.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
        r = i.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
      "sensitive" !== i.case &&
        ((n = n.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
        (r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
      let a = new Set(n),
        o = new Set(r),
        s = e.Codec ?? nv,
        u = e.Boolean ?? iU,
        l = new s({
          type: "pipe",
          in: new (e.String ?? t3)({ type: "string", error: i.error }),
          out: new u({ type: "boolean", error: i.error }),
          transform: (e, t) => {
            let n = e;
            return (
              "sensitive" !== i.case && (n = n.toLowerCase()),
              !!a.has(n) ||
                (!o.has(n) &&
                  (t.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [...a, ...o],
                    input: t.value,
                    inst: l,
                    continue: !1,
                  }),
                  {}))
            );
          },
          reverseTransform: (e, t) =>
            !0 === e ? n[0] || "true" : r[0] || "false",
          error: i.error,
        });
      return l;
    }
    function aS(e, t, i, n = {}) {
      let r = L(n),
        a = {
          ...L(n),
          check: "string_format",
          type: "string",
          format: t,
          fn: "function" == typeof i ? i : (e) => i.test(e),
          ...r,
        };
      return i instanceof RegExp && (a.pattern = i), new e(a);
    }
    function az(e) {
      let t = e?.target ?? "draft-2020-12";
      return (
        "draft-4" === t && (t = "draft-04"),
        "draft-7" === t && (t = "draft-07"),
        {
          processors: e.processors ?? {},
          metadataRegistry: e?.metadata ?? nM,
          target: t,
          unrepresentable: e?.unrepresentable ?? "throw",
          override: e?.override ?? (() => {}),
          io: e?.io ?? "output",
          counter: 0,
          seen: new Map(),
          cycles: e?.cycles ?? "ref",
          reused: e?.reused ?? "inline",
          external: e?.external ?? void 0,
        }
      );
    }
    function aj(e, t, i = { path: [], schemaPath: [] }) {
      var n;
      let r = e._zod.def,
        a = t.seen.get(e);
      if (a)
        return (
          a.count++, i.schemaPath.includes(e) && (a.cycle = i.path), a.schema
        );
      let o = { schema: {}, count: 1, cycle: void 0, path: i.path };
      t.seen.set(e, o);
      let s = e._zod.toJSONSchema?.();
      if (s) o.schema = s;
      else {
        let n = { ...i, schemaPath: [...i.schemaPath, e], path: i.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, n);
        else {
          let i = o.schema,
            a = t.processors[r.type];
          if (!a)
            throw Error(
              `[toJSONSchema]: Non-representable type encountered: ${r.type}`
            );
          a(e, t, i, n);
        }
        let a = e._zod.parent;
        a && (o.ref || (o.ref = a), aj(a, t, n), (t.seen.get(a).isParent = !0));
      }
      let u = t.metadataRegistry.get(e);
      return (
        u && Object.assign(o.schema, u),
        "input" === t.io &&
          (function e(t, i) {
            let n = i ?? { seen: new Set() };
            if (n.seen.has(t)) return !1;
            n.seen.add(t);
            let r = t._zod.def;
            if ("transform" === r.type) return !0;
            if ("array" === r.type) return e(r.element, n);
            if ("set" === r.type) return e(r.valueType, n);
            if ("lazy" === r.type) return e(r.getter(), n);
            if (
              "promise" === r.type ||
              "optional" === r.type ||
              "nonoptional" === r.type ||
              "nullable" === r.type ||
              "readonly" === r.type ||
              "default" === r.type ||
              "prefault" === r.type
            )
              return e(r.innerType, n);
            if ("intersection" === r.type) return e(r.left, n) || e(r.right, n);
            if ("record" === r.type || "map" === r.type)
              return e(r.keyType, n) || e(r.valueType, n);
            if ("pipe" === r.type) return e(r.in, n) || e(r.out, n);
            if ("object" === r.type) {
              for (let t in r.shape) if (e(r.shape[t], n)) return !0;
              return !1;
            }
            if ("union" === r.type) {
              for (let t of r.options) if (e(t, n)) return !0;
              return !1;
            }
            if ("tuple" === r.type) {
              for (let t of r.items) if (e(t, n)) return !0;
              if (r.rest && e(r.rest, n)) return !0;
            }
            return !1;
          })(e) &&
          (delete o.schema.examples, delete o.schema.default),
        "input" === t.io &&
          o.schema._prefault &&
          ((n = o.schema).default ?? (n.default = o.schema._prefault)),
        delete o.schema._prefault,
        t.seen.get(e).schema
      );
    }
    function aZ(e, t) {
      let i = e.seen.get(t);
      if (!i) throw Error("Unprocessed schema. This is a bug in Zod.");
      let n = new Map();
      for (let t of e.seen.entries()) {
        let i = e.metadataRegistry.get(t[0])?.id;
        if (i) {
          let e = n.get(i);
          if (e && e !== t[0])
            throw Error(
              `Duplicate schema id "${i}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`
            );
          n.set(i, t[0]);
        }
      }
      let r = (t) => {
        if (t[1].schema.$ref) return;
        let n = t[1],
          { ref: r, defId: a } = ((t) => {
            let n = "draft-2020-12" === e.target ? "$defs" : "definitions";
            if (e.external) {
              let i = e.external.registry.get(t[0])?.id,
                r = e.external.uri ?? ((e) => e);
              if (i) return { ref: r(i) };
              let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
              return (
                (t[1].defId = a),
                { defId: a, ref: `${r("__shared")}#/${n}/${a}` }
              );
            }
            if (t[1] === i) return { ref: "#" };
            let r = `#/${n}/`,
              a = t[1].schema.id ?? `__schema${e.counter++}`;
            return { defId: a, ref: r + a };
          })(t);
        (n.def = { ...n.schema }), a && (n.defId = a);
        let o = n.schema;
        for (let e in o) delete o[e];
        o.$ref = r;
      };
      if ("throw" === e.cycles)
        for (let t of e.seen.entries()) {
          let e = t[1];
          if (e.cycle)
            throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
      for (let i of e.seen.entries()) {
        let n = i[1];
        if (t === i[0]) {
          r(i);
          continue;
        }
        if (e.external) {
          let n = e.external.registry.get(i[0])?.id;
          if (t !== i[0] && n) {
            r(i);
            continue;
          }
        }
        if (
          e.metadataRegistry.get(i[0])?.id ||
          n.cycle ||
          (n.count > 1 && "ref" === e.reused)
        ) {
          r(i);
          continue;
        }
      }
    }
    function aU(e, t) {
      let i = e.seen.get(t);
      if (!i) throw Error("Unprocessed schema. This is a bug in Zod.");
      let n = (t) => {
        let i = e.seen.get(t);
        if (null === i.ref) return;
        let r = i.def ?? i.schema,
          a = { ...r },
          o = i.ref;
        if (((i.ref = null), o)) {
          n(o);
          let i = e.seen.get(o),
            s = i.schema;
          if (
            (s.$ref &&
            ("draft-07" === e.target ||
              "draft-04" === e.target ||
              "openapi-3.0" === e.target)
              ? ((r.allOf = r.allOf ?? []), r.allOf.push(s))
              : Object.assign(r, s),
            Object.assign(r, a),
            t._zod.parent === o)
          )
            for (let e in r)
              "$ref" !== e && "allOf" !== e && (e in a || delete r[e]);
          if (s.$ref && i.def)
            for (let e in r)
              "$ref" !== e &&
                "allOf" !== e &&
                e in i.def &&
                JSON.stringify(r[e]) === JSON.stringify(i.def[e]) &&
                delete r[e];
        }
        let s = t._zod.parent;
        if (s && s !== o) {
          n(s);
          let t = e.seen.get(s);
          if (t?.schema.$ref && ((r.$ref = t.schema.$ref), t.def))
            for (let e in r)
              "$ref" !== e &&
                "allOf" !== e &&
                e in t.def &&
                JSON.stringify(r[e]) === JSON.stringify(t.def[e]) &&
                delete r[e];
        }
        e.override({ zodSchema: t, jsonSchema: r, path: i.path ?? [] });
      };
      for (let t of [...e.seen.entries()].reverse()) n(t[0]);
      let r = {};
      if (
        ("draft-2020-12" === e.target
          ? (r.$schema = "https://json-schema.org/draft/2020-12/schema")
          : "draft-07" === e.target
          ? (r.$schema = "http://json-schema.org/draft-07/schema#")
          : "draft-04" === e.target
          ? (r.$schema = "http://json-schema.org/draft-04/schema#")
          : e.target,
        e.external?.uri)
      ) {
        let i = e.external.registry.get(t)?.id;
        if (!i) throw Error("Schema is missing an `id` property");
        r.$id = e.external.uri(i);
      }
      Object.assign(r, i.def ?? i.schema);
      let a = e.external?.defs ?? {};
      for (let t of e.seen.entries()) {
        let e = t[1];
        e.def && e.defId && (a[e.defId] = e.def);
      }
      e.external ||
        (Object.keys(a).length > 0 &&
          ("draft-2020-12" === e.target ? (r.$defs = a) : (r.definitions = a)));
      try {
        let i = JSON.parse(JSON.stringify(r));
        return (
          Object.defineProperty(i, "~standard", {
            value: {
              ...t["~standard"],
              jsonSchema: {
                input: aP(t, "input", e.processors),
                output: aP(t, "output", e.processors),
              },
            },
            enumerable: !1,
            writable: !1,
          }),
          i
        );
      } catch (e) {
        throw Error("Error converting schema to JSON.");
      }
    }
    e.s(
      [
        "TimePrecision",
        0,
        rt,
        "_any",
        () => rx,
        "_array",
        () => r2,
        "_base64",
        () => n7,
        "_base64url",
        () => n8,
        "_bigint",
        () => rg,
        "_boolean",
        () => rp,
        "_catch",
        () => ap,
        "_check",
        () => ax,
        "_cidrv4",
        () => n9,
        "_cidrv6",
        () => n3,
        "_coercedBigint",
        () => rv,
        "_coercedBoolean",
        () => rf,
        "_coercedDate",
        () => rz,
        "_coercedNumber",
        () => rs,
        "_coercedString",
        () => nL,
        "_cuid",
        () => nH,
        "_cuid2",
        () => nY,
        "_custom",
        () => ab,
        "_date",
        () => rS,
        "_default",
        () => ad,
        "_discriminatedUnion",
        () => r7,
        "_e164",
        () => n5,
        "_email",
        () => nq,
        "_emoji",
        () => nW,
        "_endsWith",
        () => rW,
        "_enum",
        () => an,
        "_file",
        () => ao,
        "_float32",
        () => rl,
        "_float64",
        () => rd,
        "_gt",
        () => rO,
        "_gte",
        () => rP,
        "_guid",
        () => nF,
        "_includes",
        () => rV,
        "_int",
        () => ru,
        "_int32",
        () => rc,
        "_int64",
        () => rh,
        "_intersection",
        () => r8,
        "_ipv4",
        () => n6,
        "_ipv6",
        () => n1,
        "_isoDate",
        () => rn,
        "_isoDateTime",
        () => ri,
        "_isoDuration",
        () => ra,
        "_isoTime",
        () => rr,
        "_jwt",
        () => re,
        "_ksuid",
        () => n4,
        "_lazy",
        () => ah,
        "_length",
        () => rF,
        "_literal",
        () => aa,
        "_lowercase",
        () => rK,
        "_lt",
        () => rZ,
        "_lte",
        () => rU,
        "_mac",
        () => n2,
        "_map",
        () => at,
        "_max",
        () => rU,
        "_maxLength",
        () => rL,
        "_maxSize",
        () => rT,
        "_mime",
        () => rH,
        "_min",
        () => rP,
        "_minLength",
        () => rq,
        "_minSize",
        () => rM,
        "_multipleOf",
        () => rA,
        "_nan",
        () => rj,
        "_nanoid",
        () => nX,
        "_nativeEnum",
        () => ar,
        "_negative",
        () => rE,
        "_never",
        () => rI,
        "_nonnegative",
        () => rR,
        "_nonoptional",
        () => ac,
        "_nonpositive",
        () => rN,
        "_normalize",
        () => rQ,
        "_null",
        () => r_,
        "_nullable",
        () => al,
        "_number",
        () => ro,
        "_optional",
        () => au,
        "_overwrite",
        () => rY,
        "_pipe",
        () => af,
        "_positive",
        () => rD,
        "_promise",
        () => a$,
        "_property",
        () => rX,
        "_readonly",
        () => ag,
        "_record",
        () => ae,
        "_refine",
        () => ay,
        "_regex",
        () => rJ,
        "_set",
        () => ai,
        "_size",
        () => rC,
        "_slugify",
        () => r1,
        "_startsWith",
        () => rG,
        "_string",
        () => nC,
        "_stringFormat",
        () => aS,
        "_stringbool",
        () => aw,
        "_success",
        () => am,
        "_superRefine",
        () => a_,
        "_symbol",
        () => rb,
        "_templateLiteral",
        () => av,
        "_toLowerCase",
        () => r4,
        "_toUpperCase",
        () => r6,
        "_transform",
        () => as,
        "_trim",
        () => r0,
        "_tuple",
        () => r5,
        "_uint32",
        () => rm,
        "_uint64",
        () => r$,
        "_ulid",
        () => nQ,
        "_undefined",
        () => ry,
        "_union",
        () => r9,
        "_unknown",
        () => rk,
        "_uppercase",
        () => rB,
        "_url",
        () => nG,
        "_uuid",
        () => nJ,
        "_uuidv4",
        () => nK,
        "_uuidv6",
        () => nB,
        "_uuidv7",
        () => nV,
        "_void",
        () => rw,
        "_xid",
        () => n0,
        "_xor",
        () => r3,
        "describe",
        () => ak,
        "meta",
        () => aI,
      ],
      136303
    );
    let aO =
        (e, t = {}) =>
        (i) => {
          let n = az({ ...i, processors: t });
          return aj(e, n), aZ(n, e), aU(n, e);
        },
      aP =
        (e, t, i = {}) =>
        (n) => {
          let { libraryOptions: r, target: a } = n ?? {},
            o = az({ ...(r ?? {}), target: a, io: t, processors: i });
          return aj(e, o), aZ(o, e), aU(o, e);
        };
    e.s(
      [
        "createStandardJSONSchemaMethod",
        0,
        aP,
        "createToJSONSchemaMethod",
        0,
        aO,
        "extractDefs",
        () => aZ,
        "finalize",
        () => aU,
        "initializeContext",
        () => az,
        "process",
        () => aj,
      ],
      964292
    );
    let aD = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      aE = {
        string: (e, t, i, n) => {
          i.type = "string";
          let {
            minimum: r,
            maximum: a,
            format: o,
            patterns: s,
            contentEncoding: u,
          } = e._zod.bag;
          if (
            ("number" == typeof r && (i.minLength = r),
            "number" == typeof a && (i.maxLength = a),
            o &&
              ((i.format = aD[o] ?? o),
              "" === i.format && delete i.format,
              "time" === o && delete i.format),
            u && (i.contentEncoding = u),
            s && s.size > 0)
          ) {
            let e = [...s];
            1 === e.length
              ? (i.pattern = e[0].source)
              : e.length > 1 &&
                (i.allOf = [
                  ...e.map((e) => ({
                    ...("draft-07" === t.target ||
                    "draft-04" === t.target ||
                    "openapi-3.0" === t.target
                      ? { type: "string" }
                      : {}),
                    pattern: e.source,
                  })),
                ]);
          }
        },
        number: (e, t, i, n) => {
          let {
            minimum: r,
            maximum: a,
            format: o,
            multipleOf: s,
            exclusiveMaximum: u,
            exclusiveMinimum: l,
          } = e._zod.bag;
          "string" == typeof o && o.includes("int")
            ? (i.type = "integer")
            : (i.type = "number"),
            "number" == typeof l &&
              ("draft-04" === t.target || "openapi-3.0" === t.target
                ? ((i.minimum = l), (i.exclusiveMinimum = !0))
                : (i.exclusiveMinimum = l)),
            "number" == typeof r &&
              ((i.minimum = r),
              "number" == typeof l &&
                "draft-04" !== t.target &&
                (l >= r ? delete i.minimum : delete i.exclusiveMinimum)),
            "number" == typeof u &&
              ("draft-04" === t.target || "openapi-3.0" === t.target
                ? ((i.maximum = u), (i.exclusiveMaximum = !0))
                : (i.exclusiveMaximum = u)),
            "number" == typeof a &&
              ((i.maximum = a),
              "number" == typeof u &&
                "draft-04" !== t.target &&
                (u <= a ? delete i.maximum : delete i.exclusiveMaximum)),
            "number" == typeof s && (i.multipleOf = s);
        },
        boolean: (e, t, i, n) => {
          i.type = "boolean";
        },
        bigint: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("BigInt cannot be represented in JSON Schema");
        },
        symbol: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Symbols cannot be represented in JSON Schema");
        },
        null: (e, t, i, n) => {
          "openapi-3.0" === t.target
            ? ((i.type = "string"), (i.nullable = !0), (i.enum = [null]))
            : (i.type = "null");
        },
        undefined: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Undefined cannot be represented in JSON Schema");
        },
        void: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Void cannot be represented in JSON Schema");
        },
        never: (e, t, i, n) => {
          i.not = {};
        },
        any: (e, t, i, n) => {},
        unknown: (e, t, i, n) => {},
        date: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Date cannot be represented in JSON Schema");
        },
        enum: (e, t, i, n) => {
          let r = p(e._zod.def.entries);
          r.every((e) => "number" == typeof e) && (i.type = "number"),
            r.every((e) => "string" == typeof e) && (i.type = "string"),
            (i.enum = r);
        },
        literal: (e, t, i, n) => {
          let r = e._zod.def,
            a = [];
          for (let e of r.values)
            if (void 0 === e) {
              if ("throw" === t.unrepresentable)
                throw Error(
                  "Literal `undefined` cannot be represented in JSON Schema"
                );
            } else if ("bigint" == typeof e)
              if ("throw" === t.unrepresentable)
                throw Error(
                  "BigInt literals cannot be represented in JSON Schema"
                );
              else a.push(Number(e));
            else a.push(e);
          if (0 === a.length);
          else if (1 === a.length) {
            let e = a[0];
            (i.type = null === e ? "null" : typeof e),
              "draft-04" === t.target || "openapi-3.0" === t.target
                ? (i.enum = [e])
                : (i.const = e);
          } else
            a.every((e) => "number" == typeof e) && (i.type = "number"),
              a.every((e) => "string" == typeof e) && (i.type = "string"),
              a.every((e) => "boolean" == typeof e) && (i.type = "boolean"),
              a.every((e) => null === e) && (i.type = "null"),
              (i.enum = a);
        },
        nan: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("NaN cannot be represented in JSON Schema");
        },
        template_literal: (e, t, i, n) => {
          let r = e._zod.pattern;
          if (!r) throw Error("Pattern not found in template literal");
          (i.type = "string"), (i.pattern = r.source);
        },
        file: (e, t, i, n) => {
          let r = {
              type: "string",
              format: "binary",
              contentEncoding: "binary",
            },
            { minimum: a, maximum: o, mime: s } = e._zod.bag;
          void 0 !== a && (r.minLength = a),
            void 0 !== o && (r.maxLength = o),
            s
              ? 1 === s.length
                ? ((r.contentMediaType = s[0]), Object.assign(i, r))
                : (Object.assign(i, r),
                  (i.anyOf = s.map((e) => ({ contentMediaType: e }))))
              : Object.assign(i, r);
        },
        success: (e, t, i, n) => {
          i.type = "boolean";
        },
        custom: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Custom types cannot be represented in JSON Schema");
        },
        function: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Function types cannot be represented in JSON Schema");
        },
        transform: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Transforms cannot be represented in JSON Schema");
        },
        map: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Map cannot be represented in JSON Schema");
        },
        set: (e, t, i, n) => {
          if ("throw" === t.unrepresentable)
            throw Error("Set cannot be represented in JSON Schema");
        },
        array: (e, t, i, n) => {
          let r = e._zod.def,
            { minimum: a, maximum: o } = e._zod.bag;
          "number" == typeof a && (i.minItems = a),
            "number" == typeof o && (i.maxItems = o),
            (i.type = "array"),
            (i.items = aj(r.element, t, { ...n, path: [...n.path, "items"] }));
        },
        object: (e, t, i, n) => {
          let r = e._zod.def;
          (i.type = "object"), (i.properties = {});
          let a = r.shape;
          for (let e in a)
            i.properties[e] = aj(a[e], t, {
              ...n,
              path: [...n.path, "properties", e],
            });
          let o = new Set(
            [...new Set(Object.keys(a))].filter((e) => {
              let i = r.shape[e]._zod;
              return "input" === t.io
                ? void 0 === i.optin
                : void 0 === i.optout;
            })
          );
          o.size > 0 && (i.required = Array.from(o)),
            r.catchall?._zod.def.type === "never"
              ? (i.additionalProperties = !1)
              : r.catchall
              ? r.catchall &&
                (i.additionalProperties = aj(r.catchall, t, {
                  ...n,
                  path: [...n.path, "additionalProperties"],
                }))
              : "output" === t.io && (i.additionalProperties = !1);
        },
        union: (e, t, i, n) => {
          let r = e._zod.def,
            a = !1 === r.inclusive,
            o = r.options.map((e, i) =>
              aj(e, t, { ...n, path: [...n.path, a ? "oneOf" : "anyOf", i] })
            );
          a ? (i.oneOf = o) : (i.anyOf = o);
        },
        intersection: (e, t, i, n) => {
          let r = e._zod.def,
            a = aj(r.left, t, { ...n, path: [...n.path, "allOf", 0] }),
            o = aj(r.right, t, { ...n, path: [...n.path, "allOf", 1] }),
            s = (e) => "allOf" in e && 1 === Object.keys(e).length;
          i.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
        },
        tuple: (e, t, i, n) => {
          let r = e._zod.def;
          i.type = "array";
          let a = "draft-2020-12" === t.target ? "prefixItems" : "items",
            o =
              "draft-2020-12" === t.target || "openapi-3.0" === t.target
                ? "items"
                : "additionalItems",
            s = r.items.map((e, i) =>
              aj(e, t, { ...n, path: [...n.path, a, i] })
            ),
            u = r.rest
              ? aj(r.rest, t, {
                  ...n,
                  path: [
                    ...n.path,
                    o,
                    ...("openapi-3.0" === t.target ? [r.items.length] : []),
                  ],
                })
              : null;
          "draft-2020-12" === t.target
            ? ((i.prefixItems = s), u && (i.items = u))
            : "openapi-3.0" === t.target
            ? ((i.items = { anyOf: s }),
              u && i.items.anyOf.push(u),
              (i.minItems = s.length),
              u || (i.maxItems = s.length))
            : ((i.items = s), u && (i.additionalItems = u));
          let { minimum: l, maximum: d } = e._zod.bag;
          "number" == typeof l && (i.minItems = l),
            "number" == typeof d && (i.maxItems = d);
        },
        record: (e, t, i, n) => {
          let r = e._zod.def;
          i.type = "object";
          let a = r.keyType,
            o = a._zod.bag,
            s = o?.patterns;
          if ("loose" === r.mode && s && s.size > 0) {
            let e = aj(r.valueType, t, {
              ...n,
              path: [...n.path, "patternProperties", "*"],
            });
            for (let t of ((i.patternProperties = {}), s))
              i.patternProperties[t.source] = e;
          } else
            ("draft-07" === t.target || "draft-2020-12" === t.target) &&
              (i.propertyNames = aj(r.keyType, t, {
                ...n,
                path: [...n.path, "propertyNames"],
              })),
              (i.additionalProperties = aj(r.valueType, t, {
                ...n,
                path: [...n.path, "additionalProperties"],
              }));
          let u = a._zod.values;
          if (u) {
            let e = [...u].filter(
              (e) => "string" == typeof e || "number" == typeof e
            );
            e.length > 0 && (i.required = e);
          }
        },
        nullable: (e, t, i, n) => {
          let r = e._zod.def,
            a = aj(r.innerType, t, n),
            o = t.seen.get(e);
          "openapi-3.0" === t.target
            ? ((o.ref = r.innerType), (i.nullable = !0))
            : (i.anyOf = [a, { type: "null" }]);
        },
        nonoptional: (e, t, i, n) => {
          let r = e._zod.def;
          aj(r.innerType, t, n), (t.seen.get(e).ref = r.innerType);
        },
        default: (e, t, i, n) => {
          let r = e._zod.def;
          aj(r.innerType, t, n),
            (t.seen.get(e).ref = r.innerType),
            (i.default = JSON.parse(JSON.stringify(r.defaultValue)));
        },
        prefault: (e, t, i, n) => {
          let r = e._zod.def;
          aj(r.innerType, t, n),
            (t.seen.get(e).ref = r.innerType),
            "input" === t.io &&
              (i._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
        },
        catch: (e, t, i, n) => {
          let r,
            a = e._zod.def;
          aj(a.innerType, t, n), (t.seen.get(e).ref = a.innerType);
          try {
            r = a.catchValue(void 0);
          } catch {
            throw Error(
              "Dynamic catch values are not supported in JSON Schema"
            );
          }
          i.default = r;
        },
        pipe: (e, t, i, n) => {
          let r = e._zod.def,
            a =
              "input" === t.io
                ? "transform" === r.in._zod.def.type
                  ? r.out
                  : r.in
                : r.out;
          aj(a, t, n), (t.seen.get(e).ref = a);
        },
        readonly: (e, t, i, n) => {
          let r = e._zod.def;
          aj(r.innerType, t, n),
            (t.seen.get(e).ref = r.innerType),
            (i.readOnly = !0);
        },
        promise: (e, t, i, n) => {
          let r = e._zod.def;
          aj(r.innerType, t, n), (t.seen.get(e).ref = r.innerType);
        },
        optional: (e, t, i, n) => {
          let r = e._zod.def;
          aj(r.innerType, t, n), (t.seen.get(e).ref = r.innerType);
        },
        lazy: (e, t, i, n) => {
          let r = e._zod.innerType;
          aj(r, t, n), (t.seen.get(e).ref = r);
        },
      };
    function aN(e, t) {
      if ("_idmap" in e) {
        let i = az({ ...t, processors: aE }),
          n = {};
        for (let t of e._idmap.entries()) {
          let [e, n] = t;
          aj(n, i);
        }
        let r = {};
        for (let a of ((i.external = { registry: e, uri: t?.uri, defs: n }),
        e._idmap.entries())) {
          let [e, t] = a;
          aZ(i, t), (r[e] = aU(i, t));
        }
        return (
          Object.keys(n).length > 0 &&
            (r.__shared = {
              ["draft-2020-12" === i.target ? "$defs" : "definitions"]: n,
            }),
          { schemas: r }
        );
      }
      let i = az({ ...t, processors: aE });
      return aj(e, i), aZ(i, e), aU(i, e);
    }
    class aR {
      get metadataRegistry() {
        return this.ctx.metadataRegistry;
      }
      get target() {
        return this.ctx.target;
      }
      get unrepresentable() {
        return this.ctx.unrepresentable;
      }
      get override() {
        return this.ctx.override;
      }
      get io() {
        return this.ctx.io;
      }
      get counter() {
        return this.ctx.counter;
      }
      set counter(e) {
        this.ctx.counter = e;
      }
      get seen() {
        return this.ctx.seen;
      }
      constructor(e) {
        let t = e?.target ?? "draft-2020-12";
        "draft-4" === t && (t = "draft-04"),
          "draft-7" === t && (t = "draft-07"),
          (this.ctx = az({
            processors: aE,
            target: t,
            ...(e?.metadata && { metadata: e.metadata }),
            ...(e?.unrepresentable && { unrepresentable: e.unrepresentable }),
            ...(e?.override && { override: e.override }),
            ...(e?.io && { io: e.io }),
          }));
      }
      process(e, t = { path: [], schemaPath: [] }) {
        return aj(e, this.ctx, t);
      }
      emit(e, t) {
        t &&
          (t.cycles && (this.ctx.cycles = t.cycles),
          t.reused && (this.ctx.reused = t.reused),
          t.external && (this.ctx.external = t.external)),
          aZ(this.ctx, e);
        let { "~standard": i, ...n } = aU(this.ctx, e);
        return n;
      }
    }
    e.s([], 474628),
      e.s([], 469915),
      e.s([], 17760),
      e.i(821768),
      e.s(
        [
          "$ZodAny",
          0,
          iR,
          "$ZodArray",
          0,
          iq,
          "$ZodBase64",
          0,
          i_,
          "$ZodBase64URL",
          0,
          ik,
          "$ZodBigInt",
          0,
          iO,
          "$ZodBigIntFormat",
          0,
          iP,
          "$ZodBoolean",
          0,
          iU,
          "$ZodCIDRv4",
          0,
          i$,
          "$ZodCIDRv6",
          0,
          ib,
          "$ZodCUID",
          0,
          ia,
          "$ZodCUID2",
          0,
          io,
          "$ZodCatch",
          0,
          nm,
          "$ZodCodec",
          0,
          nv,
          "$ZodCustom",
          0,
          nw,
          "$ZodCustomStringFormat",
          0,
          iz,
          "$ZodDate",
          0,
          iC,
          "$ZodDefault",
          0,
          no,
          "$ZodDiscriminatedUnion",
          0,
          iY,
          "$ZodE164",
          0,
          iI,
          "$ZodEmail",
          0,
          ie,
          "$ZodEmoji",
          0,
          ii,
          "$ZodEnum",
          0,
          i8,
          "$ZodExactOptional",
          0,
          nr,
          "$ZodFile",
          0,
          ne,
          "$ZodFunction",
          0,
          nx,
          "$ZodGUID",
          0,
          t8,
          "$ZodIPv4",
          0,
          ig,
          "$ZodIPv6",
          0,
          iv,
          "$ZodISODate",
          0,
          ic,
          "$ZodISODateTime",
          0,
          id,
          "$ZodISODuration",
          0,
          ip,
          "$ZodISOTime",
          0,
          im,
          "$ZodIntersection",
          0,
          iQ,
          "$ZodJWT",
          0,
          iS,
          "$ZodKSUID",
          0,
          il,
          "$ZodLazy",
          0,
          nI,
          "$ZodLiteral",
          0,
          i5,
          "$ZodMAC",
          0,
          ih,
          "$ZodMap",
          0,
          i2,
          "$ZodNaN",
          0,
          np,
          "$ZodNanoID",
          0,
          ir,
          "$ZodNever",
          0,
          iT,
          "$ZodNonOptional",
          0,
          nl,
          "$ZodNull",
          0,
          iN,
          "$ZodNullable",
          0,
          na,
          "$ZodNumber",
          0,
          ij,
          "$ZodNumberFormat",
          0,
          iZ,
          "$ZodObject",
          0,
          iB,
          "$ZodObjectJIT",
          0,
          iV,
          "$ZodOptional",
          0,
          nn,
          "$ZodPipe",
          0,
          nf,
          "$ZodPrefault",
          0,
          nu,
          "$ZodPromise",
          0,
          nk,
          "$ZodReadonly",
          0,
          nb,
          "$ZodRecord",
          0,
          i1,
          "$ZodSet",
          0,
          i3,
          "$ZodString",
          0,
          t3,
          "$ZodStringFormat",
          0,
          t7,
          "$ZodSuccess",
          0,
          nc,
          "$ZodSymbol",
          0,
          iD,
          "$ZodTemplateLiteral",
          0,
          n_,
          "$ZodTransform",
          0,
          nt,
          "$ZodTuple",
          0,
          i4,
          "$ZodType",
          0,
          t9,
          "$ZodULID",
          0,
          is,
          "$ZodURL",
          0,
          it,
          "$ZodUUID",
          0,
          t5,
          "$ZodUndefined",
          0,
          iE,
          "$ZodUnion",
          0,
          iW,
          "$ZodUnknown",
          0,
          iA,
          "$ZodVoid",
          0,
          iM,
          "$ZodXID",
          0,
          iu,
          "$ZodXor",
          0,
          iH,
          "clone",
          () => C,
          "isValidBase64",
          () => iy,
          "isValidBase64URL",
          () => ix,
          "isValidJWT",
          () => iw,
        ],
        693146
      );
    var aA,
      aT = e.i(575706),
      aT = aT;
    let aM = i("ZodMiniType", (e, t) => {
        if (!e._zod) throw Error("Uninitialized schema in ZodMiniType.");
        t9.init(e, t),
          (e.def = t),
          (e.type = t.type),
          (e.parse = (t, i) => ew(e, t, i, { callee: e.parse })),
          (e.safeParse = (t, i) => eZ(e, t, i)),
          (e.parseAsync = async (t, i) =>
            ez(e, t, i, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, i) => eO(e, t, i)),
          (e.check = (...i) =>
            e.clone(
              {
                ...t,
                checks: [
                  ...(t.checks ?? []),
                  ...i.map((e) =>
                    "function" == typeof e
                      ? {
                          _zod: {
                            check: e,
                            def: { check: "custom" },
                            onattach: [],
                          },
                        }
                      : e
                  ),
                ],
              },
              { parent: !0 }
            )),
          (e.with = e.check),
          (e.clone = (t, i) => C(e, t, i)),
          (e.brand = () => e),
          (e.register = (t, i) => (t.add(e, i), e)),
          (e.apply = (t) => t(e));
      }),
      aC = i("ZodMiniString", (e, t) => {
        t3.init(e, t), aM.init(e, t);
      });
    function aL(e) {
      return nC(aC, e);
    }
    let aq = i("ZodMiniStringFormat", (e, t) => {
        t7.init(e, t), aC.init(e, t);
      }),
      aF = i("ZodMiniEmail", (e, t) => {
        ie.init(e, t), aq.init(e, t);
      });
    function aJ(e) {
      return nq(aF, e);
    }
    let aK = i("ZodMiniGUID", (e, t) => {
      t8.init(e, t), aq.init(e, t);
    });
    function aB(e) {
      return nF(aK, e);
    }
    let aV = i("ZodMiniUUID", (e, t) => {
      t5.init(e, t), aq.init(e, t);
    });
    function aG(e) {
      return nJ(aV, e);
    }
    function aW(e) {
      return nK(aV, e);
    }
    function aX(e) {
      return nB(aV, e);
    }
    function aH(e) {
      return nV(aV, e);
    }
    let aY = i("ZodMiniURL", (e, t) => {
      it.init(e, t), aq.init(e, t);
    });
    function aQ(e) {
      return nG(aY, e);
    }
    function a0(e) {
      return nG(aY, { protocol: /^https?$/, hostname: aT.domain, ...L(e) });
    }
    let a4 = i("ZodMiniEmoji", (e, t) => {
      ii.init(e, t), aq.init(e, t);
    });
    function a6(e) {
      return nW(a4, e);
    }
    let a1 = i("ZodMiniNanoID", (e, t) => {
      ir.init(e, t), aq.init(e, t);
    });
    function a2(e) {
      return nX(a1, e);
    }
    let a9 = i("ZodMiniCUID", (e, t) => {
      ia.init(e, t), aq.init(e, t);
    });
    function a3(e) {
      return nH(a9, e);
    }
    let a7 = i("ZodMiniCUID2", (e, t) => {
      io.init(e, t), aq.init(e, t);
    });
    function a8(e) {
      return nY(a7, e);
    }
    let a5 = i("ZodMiniULID", (e, t) => {
      is.init(e, t), aq.init(e, t);
    });
    function oe(e) {
      return nQ(a5, e);
    }
    let ot = i("ZodMiniXID", (e, t) => {
      iu.init(e, t), aq.init(e, t);
    });
    function oi(e) {
      return n0(ot, e);
    }
    let on = i("ZodMiniKSUID", (e, t) => {
      il.init(e, t), aq.init(e, t);
    });
    function or(e) {
      return n4(on, e);
    }
    let oa = i("ZodMiniIPv4", (e, t) => {
      ig.init(e, t), aq.init(e, t);
    });
    function oo(e) {
      return n6(oa, e);
    }
    let os = i("ZodMiniIPv6", (e, t) => {
      iv.init(e, t), aq.init(e, t);
    });
    function ou(e) {
      return n1(os, e);
    }
    let ol = i("ZodMiniCIDRv4", (e, t) => {
      i$.init(e, t), aq.init(e, t);
    });
    function od(e) {
      return n9(ol, e);
    }
    let oc = i("ZodMiniCIDRv6", (e, t) => {
      ib.init(e, t), aq.init(e, t);
    });
    function om(e) {
      return n3(oc, e);
    }
    let op = i("ZodMiniMAC", (e, t) => {
      ih.init(e, t), aq.init(e, t);
    });
    function of(e) {
      return n2(op, e);
    }
    let og = i("ZodMiniBase64", (e, t) => {
      i_.init(e, t), aq.init(e, t);
    });
    function ov(e) {
      return n7(og, e);
    }
    let oh = i("ZodMiniBase64URL", (e, t) => {
      ik.init(e, t), aq.init(e, t);
    });
    function o$(e) {
      return n8(oh, e);
    }
    let ob = i("ZodMiniE164", (e, t) => {
      iI.init(e, t), aq.init(e, t);
    });
    function oy(e) {
      return n5(ob, e);
    }
    let o_ = i("ZodMiniJWT", (e, t) => {
      iS.init(e, t), aq.init(e, t);
    });
    function ox(e) {
      return re(o_, e);
    }
    let ok = i("ZodMiniCustomStringFormat", (e, t) => {
      iz.init(e, t), aq.init(e, t);
    });
    function oI(e, t, i = {}) {
      return aS(ok, e, t, i);
    }
    function ow(e) {
      return aS(ok, "hostname", aT.hostname, e);
    }
    function oS(e) {
      return aS(ok, "hex", aT.hex, e);
    }
    function oz(e, t) {
      let i = t?.enc ?? "hex",
        n = `${e}_${i}`,
        r = aT[n];
      if (!r) throw Error(`Unrecognized hash format: ${n}`);
      return aS(ok, n, r, t);
    }
    let oj = i("ZodMiniNumber", (e, t) => {
      ij.init(e, t), aM.init(e, t);
    });
    function oZ(e) {
      return ro(oj, e);
    }
    let oU = i("ZodMiniNumberFormat", (e, t) => {
      iZ.init(e, t), oj.init(e, t);
    });
    function oO(e) {
      return ru(oU, e);
    }
    function oP(e) {
      return rl(oU, e);
    }
    function oD(e) {
      return rd(oU, e);
    }
    function oE(e) {
      return rc(oU, e);
    }
    function oN(e) {
      return rm(oU, e);
    }
    let oR = i("ZodMiniBoolean", (e, t) => {
      iU.init(e, t), aM.init(e, t);
    });
    function oA(e) {
      return rp(oR, e);
    }
    let oT = i("ZodMiniBigInt", (e, t) => {
      iO.init(e, t), aM.init(e, t);
    });
    function oM(e) {
      return rg(oT, e);
    }
    let oC = i("ZodMiniBigIntFormat", (e, t) => {
      iP.init(e, t), oT.init(e, t);
    });
    function oL(e) {
      return rh(oC, e);
    }
    function oq(e) {
      return r$(oC, e);
    }
    let oF = i("ZodMiniSymbol", (e, t) => {
      iD.init(e, t), aM.init(e, t);
    });
    function oJ(e) {
      return rb(oF, e);
    }
    let oK = i("ZodMiniUndefined", (e, t) => {
      iE.init(e, t), aM.init(e, t);
    });
    function oB(e) {
      return ry(oK, e);
    }
    let oV = i("ZodMiniNull", (e, t) => {
      iN.init(e, t), aM.init(e, t);
    });
    function oG(e) {
      return r_(oV, e);
    }
    let oW = i("ZodMiniAny", (e, t) => {
      iR.init(e, t), aM.init(e, t);
    });
    function oX() {
      return rx(oW);
    }
    let oH = i("ZodMiniUnknown", (e, t) => {
      iA.init(e, t), aM.init(e, t);
    });
    function oY() {
      return rk(oH);
    }
    let oQ = i("ZodMiniNever", (e, t) => {
      iT.init(e, t), aM.init(e, t);
    });
    function o0(e) {
      return rI(oQ, e);
    }
    let o4 = i("ZodMiniVoid", (e, t) => {
      iM.init(e, t), aM.init(e, t);
    });
    function o6(e) {
      return rw(o4, e);
    }
    let o1 = i("ZodMiniDate", (e, t) => {
      iC.init(e, t), aM.init(e, t);
    });
    function o2(e) {
      return rS(o1, e);
    }
    let o9 = i("ZodMiniArray", (e, t) => {
      iq.init(e, t), aM.init(e, t);
    });
    function o3(e, t) {
      return new o9({ type: "array", element: e, ...L(t) });
    }
    function o7(e) {
      return sZ(Object.keys(e._zod.def.shape));
    }
    let o8 = i("ZodMiniObject", (e, t) => {
      iB.init(e, t), aM.init(e, t), _(e, "shape", () => t.shape);
    });
    function o5(e, t) {
      return new o8({ type: "object", shape: e ?? {}, ...L(t) });
    }
    function se(e, t) {
      return new o8({ type: "object", shape: e, catchall: o0(), ...L(t) });
    }
    function st(e, t) {
      return new o8({ type: "object", shape: e, catchall: oY(), ...L(t) });
    }
    function si(e, t) {
      return W(e, t);
    }
    function sn(e, t) {
      return X(e, t);
    }
    function sr(e, t) {
      return W(e, t);
    }
    function sa(e, t) {
      return V(e, t);
    }
    function so(e, t) {
      return G(e, t);
    }
    function ss(e, t) {
      return Y(sA, e, t);
    }
    function su(e, t) {
      return Q(sG, e, t);
    }
    function sl(e, t) {
      return e.clone({ ...e._zod.def, catchall: t });
    }
    let sd = i("ZodMiniUnion", (e, t) => {
      iW.init(e, t), aM.init(e, t);
    });
    function sc(e, t) {
      return new sd({ type: "union", options: e, ...L(t) });
    }
    let sm = i("ZodMiniXor", (e, t) => {
      sd.init(e, t), iH.init(e, t);
    });
    function sp(e, t) {
      return new sm({ type: "union", options: e, inclusive: !1, ...L(t) });
    }
    let sf = i("ZodMiniDiscriminatedUnion", (e, t) => {
      iY.init(e, t), aM.init(e, t);
    });
    function sg(e, t, i) {
      return new sf({ type: "union", options: t, discriminator: e, ...L(i) });
    }
    let sv = i("ZodMiniIntersection", (e, t) => {
      iQ.init(e, t), aM.init(e, t);
    });
    function sh(e, t) {
      return new sv({ type: "intersection", left: e, right: t });
    }
    let s$ = i("ZodMiniTuple", (e, t) => {
      i4.init(e, t), aM.init(e, t);
    });
    function sb(e, t, i) {
      let n = t instanceof t9,
        r = n ? i : t;
      return new s$({ type: "tuple", items: e, rest: n ? t : null, ...L(r) });
    }
    let sy = i("ZodMiniRecord", (e, t) => {
      i1.init(e, t), aM.init(e, t);
    });
    function s_(e, t, i) {
      return new sy({ type: "record", keyType: e, valueType: t, ...L(i) });
    }
    function sx(e, t, i) {
      let n = C(e);
      return (
        (n._zod.values = void 0),
        new sy({ type: "record", keyType: n, valueType: t, ...L(i) })
      );
    }
    function sk(e, t, i) {
      return new sy({
        type: "record",
        keyType: e,
        valueType: t,
        mode: "loose",
        ...L(i),
      });
    }
    let sI = i("ZodMiniMap", (e, t) => {
      i2.init(e, t), aM.init(e, t);
    });
    function sw(e, t, i) {
      return new sI({ type: "map", keyType: e, valueType: t, ...L(i) });
    }
    let sS = i("ZodMiniSet", (e, t) => {
      i3.init(e, t), aM.init(e, t);
    });
    function sz(e, t) {
      return new sS({ type: "set", valueType: e, ...L(t) });
    }
    let sj = i("ZodMiniEnum", (e, t) => {
      i8.init(e, t), aM.init(e, t), (e.options = Object.values(t.entries));
    });
    function sZ(e, t) {
      return new sj({
        type: "enum",
        entries: Array.isArray(e)
          ? Object.fromEntries(e.map((e) => [e, e]))
          : e,
        ...L(t),
      });
    }
    function sU(e, t) {
      return new sj({ type: "enum", entries: e, ...L(t) });
    }
    let sO = i("ZodMiniLiteral", (e, t) => {
      i5.init(e, t), aM.init(e, t);
    });
    function sP(e, t) {
      return new sO({
        type: "literal",
        values: Array.isArray(e) ? e : [e],
        ...L(t),
      });
    }
    let sD = i("ZodMiniFile", (e, t) => {
      ne.init(e, t), aM.init(e, t);
    });
    function sE(e) {
      return ao(sD, e);
    }
    let sN = i("ZodMiniTransform", (e, t) => {
      nt.init(e, t), aM.init(e, t);
    });
    function sR(e) {
      return new sN({ type: "transform", transform: e });
    }
    let sA = i("ZodMiniOptional", (e, t) => {
      nn.init(e, t), aM.init(e, t);
    });
    function sT(e) {
      return new sA({ type: "optional", innerType: e });
    }
    let sM = i("ZodMiniExactOptional", (e, t) => {
      nr.init(e, t), aM.init(e, t);
    });
    function sC(e) {
      return new sM({ type: "optional", innerType: e });
    }
    let sL = i("ZodMiniNullable", (e, t) => {
      na.init(e, t), aM.init(e, t);
    });
    function sq(e) {
      return new sL({ type: "nullable", innerType: e });
    }
    function sF(e) {
      return sT(sq(e));
    }
    let sJ = i("ZodMiniDefault", (e, t) => {
      no.init(e, t), aM.init(e, t);
    });
    function sK(e, t) {
      return new sJ({
        type: "default",
        innerType: e,
        get defaultValue() {
          return "function" == typeof t ? t() : N(t);
        },
      });
    }
    let sB = i("ZodMiniPrefault", (e, t) => {
      nu.init(e, t), aM.init(e, t);
    });
    function sV(e, t) {
      return new sB({
        type: "prefault",
        innerType: e,
        get defaultValue() {
          return "function" == typeof t ? t() : N(t);
        },
      });
    }
    let sG = i("ZodMiniNonOptional", (e, t) => {
      nl.init(e, t), aM.init(e, t);
    });
    function sW(e, t) {
      return new sG({ type: "nonoptional", innerType: e, ...L(t) });
    }
    let sX = i("ZodMiniSuccess", (e, t) => {
      nc.init(e, t), aM.init(e, t);
    });
    function sH(e) {
      return new sX({ type: "success", innerType: e });
    }
    let sY = i("ZodMiniCatch", (e, t) => {
      nm.init(e, t), aM.init(e, t);
    });
    function sQ(e, t) {
      return new sY({
        type: "catch",
        innerType: e,
        catchValue: "function" == typeof t ? t : () => t,
      });
    }
    let s0 = i("ZodMiniNaN", (e, t) => {
      np.init(e, t), aM.init(e, t);
    });
    function s4(e) {
      return rj(s0, e);
    }
    let s6 = i("ZodMiniPipe", (e, t) => {
      nf.init(e, t), aM.init(e, t);
    });
    function s1(e, t) {
      return new s6({ type: "pipe", in: e, out: t });
    }
    let s2 = i("ZodMiniCodec", (e, t) => {
      s6.init(e, t), nv.init(e, t);
    });
    function s9(e, t, i) {
      return new s2({
        type: "pipe",
        in: e,
        out: t,
        transform: i.decode,
        reverseTransform: i.encode,
      });
    }
    let s3 = i("ZodMiniReadonly", (e, t) => {
      nb.init(e, t), aM.init(e, t);
    });
    function s7(e) {
      return new s3({ type: "readonly", innerType: e });
    }
    let s8 = i("ZodMiniTemplateLiteral", (e, t) => {
      n_.init(e, t), aM.init(e, t);
    });
    function s5(e, t) {
      return new s8({ type: "template_literal", parts: e, ...L(t) });
    }
    let ue = i("ZodMiniLazy", (e, t) => {
      nI.init(e, t), aM.init(e, t);
    });
    function ut(e) {
      return new ue({ type: "lazy", getter: e });
    }
    let ui = i("ZodMiniPromise", (e, t) => {
      nk.init(e, t), aM.init(e, t);
    });
    function un(e) {
      return new ui({ type: "promise", innerType: e });
    }
    let ur = i("ZodMiniCustom", (e, t) => {
      nw.init(e, t), aM.init(e, t);
    });
    function ua(e, t) {
      let i = new tD({ check: "custom", ...L(t) });
      return (i._zod.check = e), i;
    }
    function uo(e, t) {
      return ab(ur, e ?? (() => !0), t);
    }
    function us(e, t = {}) {
      return ay(ur, e, t);
    }
    function uu(e) {
      return a_(e);
    }
    function ul(e, t = {}) {
      let i = uo((t) => t instanceof e, t);
      return (
        (i._zod.bag.Class = e),
        (i._zod.check = (t) => {
          t.value instanceof e ||
            t.issues.push({
              code: "invalid_type",
              expected: e.name,
              input: t.value,
              inst: i,
              path: [...(i._zod.def.path ?? [])],
            });
        }),
        i
      );
    }
    let ud = (...e) => aw({ Codec: s2, Boolean: oR, String: aC }, ...e);
    function uc() {
      let e = ut(() => sc([aL(), oZ(), oA(), oG(), o3(e), s_(aL(), e)]));
      return e;
    }
    let um = i("ZodMiniFunction", (e, t) => {
      nx.init(e, t), aM.init(e, t);
    });
    function up(e) {
      return new um({
        type: "function",
        input: Array.isArray(e?.input) ? sb(e?.input) : e?.input ?? o3(oY()),
        output: e?.output ?? oY(),
      });
    }
    e.s(
      [
        "ZodMiniAny",
        0,
        oW,
        "ZodMiniArray",
        0,
        o9,
        "ZodMiniBase64",
        0,
        og,
        "ZodMiniBase64URL",
        0,
        oh,
        "ZodMiniBigInt",
        0,
        oT,
        "ZodMiniBigIntFormat",
        0,
        oC,
        "ZodMiniBoolean",
        0,
        oR,
        "ZodMiniCIDRv4",
        0,
        ol,
        "ZodMiniCIDRv6",
        0,
        oc,
        "ZodMiniCUID",
        0,
        a9,
        "ZodMiniCUID2",
        0,
        a7,
        "ZodMiniCatch",
        0,
        sY,
        "ZodMiniCodec",
        0,
        s2,
        "ZodMiniCustom",
        0,
        ur,
        "ZodMiniCustomStringFormat",
        0,
        ok,
        "ZodMiniDate",
        0,
        o1,
        "ZodMiniDefault",
        0,
        sJ,
        "ZodMiniDiscriminatedUnion",
        0,
        sf,
        "ZodMiniE164",
        0,
        ob,
        "ZodMiniEmail",
        0,
        aF,
        "ZodMiniEmoji",
        0,
        a4,
        "ZodMiniEnum",
        0,
        sj,
        "ZodMiniExactOptional",
        0,
        sM,
        "ZodMiniFile",
        0,
        sD,
        "ZodMiniFunction",
        0,
        um,
        "ZodMiniGUID",
        0,
        aK,
        "ZodMiniIPv4",
        0,
        oa,
        "ZodMiniIPv6",
        0,
        os,
        "ZodMiniIntersection",
        0,
        sv,
        "ZodMiniJWT",
        0,
        o_,
        "ZodMiniKSUID",
        0,
        on,
        "ZodMiniLazy",
        0,
        ue,
        "ZodMiniLiteral",
        0,
        sO,
        "ZodMiniMAC",
        0,
        op,
        "ZodMiniMap",
        0,
        sI,
        "ZodMiniNaN",
        0,
        s0,
        "ZodMiniNanoID",
        0,
        a1,
        "ZodMiniNever",
        0,
        oQ,
        "ZodMiniNonOptional",
        0,
        sG,
        "ZodMiniNull",
        0,
        oV,
        "ZodMiniNullable",
        0,
        sL,
        "ZodMiniNumber",
        0,
        oj,
        "ZodMiniNumberFormat",
        0,
        oU,
        "ZodMiniObject",
        0,
        o8,
        "ZodMiniOptional",
        0,
        sA,
        "ZodMiniPipe",
        0,
        s6,
        "ZodMiniPrefault",
        0,
        sB,
        "ZodMiniPromise",
        0,
        ui,
        "ZodMiniReadonly",
        0,
        s3,
        "ZodMiniRecord",
        0,
        sy,
        "ZodMiniSet",
        0,
        sS,
        "ZodMiniString",
        0,
        aC,
        "ZodMiniStringFormat",
        0,
        aq,
        "ZodMiniSuccess",
        0,
        sX,
        "ZodMiniSymbol",
        0,
        oF,
        "ZodMiniTemplateLiteral",
        0,
        s8,
        "ZodMiniTransform",
        0,
        sN,
        "ZodMiniTuple",
        0,
        s$,
        "ZodMiniType",
        0,
        aM,
        "ZodMiniULID",
        0,
        a5,
        "ZodMiniURL",
        0,
        aY,
        "ZodMiniUUID",
        0,
        aV,
        "ZodMiniUndefined",
        0,
        oK,
        "ZodMiniUnion",
        0,
        sd,
        "ZodMiniUnknown",
        0,
        oH,
        "ZodMiniVoid",
        0,
        o4,
        "ZodMiniXID",
        0,
        ot,
        "ZodMiniXor",
        0,
        sm,
        "_default",
        () => sK,
        "_function",
        () => up,
        "any",
        () => oX,
        "array",
        () => o3,
        "base64",
        () => ov,
        "base64url",
        () => o$,
        "bigint",
        () => oM,
        "boolean",
        () => oA,
        "catch",
        () => sQ,
        "catchall",
        () => sl,
        "check",
        () => ua,
        "cidrv4",
        () => od,
        "cidrv6",
        () => om,
        "codec",
        () => s9,
        "cuid",
        () => a3,
        "cuid2",
        () => a8,
        "custom",
        () => uo,
        "date",
        () => o2,
        "describe",
        0,
        ak,
        "discriminatedUnion",
        () => sg,
        "e164",
        () => oy,
        "email",
        () => aJ,
        "emoji",
        () => a6,
        "enum",
        () => sZ,
        "exactOptional",
        () => sC,
        "extend",
        () => si,
        "file",
        () => sE,
        "float32",
        () => oP,
        "float64",
        () => oD,
        "function",
        () => up,
        "guid",
        () => aB,
        "hash",
        () => oz,
        "hex",
        () => oS,
        "hostname",
        () => ow,
        "httpUrl",
        () => a0,
        "instanceof",
        () => ul,
        "int",
        () => oO,
        "int32",
        () => oE,
        "int64",
        () => oL,
        "intersection",
        () => sh,
        "ipv4",
        () => oo,
        "ipv6",
        () => ou,
        "json",
        () => uc,
        "jwt",
        () => ox,
        "keyof",
        () => o7,
        "ksuid",
        () => or,
        "lazy",
        () => ut,
        "literal",
        () => sP,
        "looseObject",
        () => st,
        "looseRecord",
        () => sk,
        "mac",
        () => of,
        "map",
        () => sw,
        "merge",
        () => sr,
        "meta",
        0,
        aI,
        "nan",
        () => s4,
        "nanoid",
        () => a2,
        "nativeEnum",
        () => sU,
        "never",
        () => o0,
        "nonoptional",
        () => sW,
        "null",
        () => oG,
        "nullable",
        () => sq,
        "nullish",
        () => sF,
        "number",
        () => oZ,
        "object",
        () => o5,
        "omit",
        () => so,
        "optional",
        () => sT,
        "partial",
        () => ss,
        "partialRecord",
        () => sx,
        "pick",
        () => sa,
        "pipe",
        () => s1,
        "prefault",
        () => sV,
        "promise",
        () => un,
        "readonly",
        () => s7,
        "record",
        () => s_,
        "refine",
        () => us,
        "required",
        () => su,
        "safeExtend",
        () => sn,
        "set",
        () => sz,
        "strictObject",
        () => se,
        "string",
        () => aL,
        "stringFormat",
        () => oI,
        "stringbool",
        0,
        ud,
        "success",
        () => sH,
        "superRefine",
        () => uu,
        "symbol",
        () => oJ,
        "templateLiteral",
        () => s5,
        "transform",
        () => sR,
        "tuple",
        () => sb,
        "uint32",
        () => oN,
        "uint64",
        () => oq,
        "ulid",
        () => oe,
        "undefined",
        () => oB,
        "union",
        () => sc,
        "unknown",
        () => oY,
        "url",
        () => aQ,
        "uuid",
        () => aG,
        "uuidv4",
        () => aW,
        "uuidv6",
        () => aX,
        "uuidv7",
        () => aH,
        "void",
        () => o6,
        "xid",
        () => oi,
        "xor",
        () => sp,
      ],
      786345
    ),
      e.s([], 291593);
    let uf = i("ZodMiniISODateTime", (e, t) => {
      id.init(e, t), aq.init(e, t);
    });
    function ug(e) {
      return ri(uf, e);
    }
    let uv = i("ZodMiniISODate", (e, t) => {
      ic.init(e, t), aq.init(e, t);
    });
    function uh(e) {
      return rn(uv, e);
    }
    let u$ = i("ZodMiniISOTime", (e, t) => {
      im.init(e, t), aq.init(e, t);
    });
    function ub(e) {
      return rr(u$, e);
    }
    let uy = i("ZodMiniISODuration", (e, t) => {
      ip.init(e, t), aq.init(e, t);
    });
    function u_(e) {
      return ra(uy, e);
    }
    function ux(e) {
      return nL(aC, e);
    }
    function uk(e) {
      return rs(oj, e);
    }
    function uI(e) {
      return rf(oR, e);
    }
    function uw(e) {
      return rv(oT, e);
    }
    function uS(e) {
      return rz(o1, e);
    }
    e.s(
      [
        "ZodMiniISODate",
        0,
        uv,
        "ZodMiniISODateTime",
        0,
        uf,
        "ZodMiniISODuration",
        0,
        uy,
        "ZodMiniISOTime",
        0,
        u$,
        "date",
        () => uh,
        "datetime",
        () => ug,
        "duration",
        () => u_,
        "time",
        () => ub,
      ],
      511874
    ),
      e.s(
        [
          "bigint",
          () => uw,
          "boolean",
          () => uI,
          "date",
          () => uS,
          "number",
          () => uk,
          "string",
          () => ux,
        ],
        179622
      ),
      e.s([], 222184),
      e.i(222184),
      e.i(469915),
      e.i(496072),
      e.i(828526),
      e.i(651188),
      e.i(693146),
      e.i(410497),
      e.i(563589);
    var uz = e.i(171068),
      uj = aT;
    e.i(71376),
      e.s(
        [
          "ar",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "حرف", verb: "أن يحوي" },
                  file: { unit: "بايت", verb: "أن يحوي" },
                  array: { unit: "عنصر", verb: "أن يحوي" },
                  set: { unit: "عنصر", verb: "أن يحوي" },
                }),
                (t = {
                  regex: "مدخل",
                  email: "بريد إلكتروني",
                  url: "رابط",
                  emoji: "إيموجي",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "تاريخ ووقت بمعيار ISO",
                  date: "تاريخ بمعيار ISO",
                  time: "وقت بمعيار ISO",
                  duration: "مدة بمعيار ISO",
                  ipv4: "عنوان IPv4",
                  ipv6: "عنوان IPv6",
                  cidrv4: "مدى عناوين بصيغة IPv4",
                  cidrv6: "مدى عناوين بصيغة IPv6",
                  base64: "نَص بترميز base64-encoded",
                  base64url: "نَص بترميز base64url-encoded",
                  json_string: "نَص على هيئة JSON",
                  e164: "رقم هاتف بمعيار E.164",
                  jwt: "JWT",
                  template_literal: "مدخل",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `مدخلات غير مقبولة: يفترض إدخال instanceof ${n.expected}، ولكن تم إدخال ${r}`;
                      return `مدخلات غير مقبولة: يفترض إدخال ${e}، ولكن تم إدخال ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `مدخلات غير مقبولة: يفترض إدخال ${F(
                          n.values[0]
                        )}`;
                      return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return ` أكبر من اللازم: يفترض أن تكون ${
                          n.origin ?? "القيمة"
                        } ${t} ${n.maximum.toString()} ${i.unit ?? "عنصر"}`;
                      return `أكبر من اللازم: يفترض أن تكون ${
                        n.origin ?? "القيمة"
                      } ${t} ${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `أصغر من اللازم: يفترض لـ ${
                          n.origin
                        } أن يكون ${t} ${n.minimum.toString()} ${i.unit}`;
                      return `أصغر من اللازم: يفترض لـ ${
                        n.origin
                      } أن يكون ${t} ${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `نَص غير مقبول: يجب أن ينتهي بـ "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `نَص غير مقبول: يجب أن يتضمَّن "${n.includes}"`;
                      if ("regex" === n.format)
                        return `نَص غير مقبول: يجب أن يطابق النمط ${n.pattern}`;
                      return `${t[n.format] ?? n.format} غير مقبول`;
                    case "not_multiple_of":
                      return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
                    case "unrecognized_keys":
                      return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${
                        n.keys.length > 1 ? "ة" : ""
                      }: ${f(n.keys, "، ")}`;
                    case "invalid_key":
                      return `معرف غير مقبول في ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "مدخل غير مقبول";
                    case "invalid_element":
                      return `مدخل غير مقبول في ${n.origin}`;
                  }
                }),
            };
          },
          "az",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "simvol", verb: "olmalıdır" },
                  file: { unit: "bayt", verb: "olmalıdır" },
                  array: { unit: "element", verb: "olmalıdır" },
                  set: { unit: "element", verb: "olmalıdır" },
                }),
                (t = {
                  regex: "input",
                  email: "email address",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO datetime",
                  date: "ISO date",
                  time: "ISO time",
                  duration: "ISO duration",
                  ipv4: "IPv4 address",
                  ipv6: "IPv6 address",
                  cidrv4: "IPv4 range",
                  cidrv6: "IPv6 range",
                  base64: "base64-encoded string",
                  base64url: "base64url-encoded string",
                  json_string: "JSON string",
                  e164: "E.164 number",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Yanlış dəyər: g\xf6zlənilən instanceof ${n.expected}, daxil olan ${r}`;
                      return `Yanlış dəyər: g\xf6zlənilən ${e}, daxil olan ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Yanlış dəyər: g\xf6zlənilən ${F(n.values[0])}`;
                      return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${
                          n.origin ?? "dəyər"
                        } ${t}${n.maximum.toString()} ${i.unit ?? "element"}`;
                      return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${
                        n.origin ?? "dəyər"
                      } ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `\xc7ox ki\xe7ik: g\xf6zlənilən ${
                          n.origin
                        } ${t}${n.minimum.toString()} ${i.unit}`;
                      return `\xc7ox ki\xe7ik: g\xf6zlənilən ${
                        n.origin
                      } ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Yanlış mətn: "${n.prefix}" ilə başlamalıdır`;
                      if ("ends_with" === n.format)
                        return `Yanlış mətn: "${n.suffix}" ilə bitməlidir`;
                      if ("includes" === n.format)
                        return `Yanlış mətn: "${n.includes}" daxil olmalıdır`;
                      if ("regex" === n.format)
                        return `Yanlış mətn: ${n.pattern} şablonuna uyğun olmalıdır`;
                      return `Yanlış ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Yanlış ədəd: ${n.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`;
                    case "unrecognized_keys":
                      return `Tanınmayan a\xe7ar${
                        n.keys.length > 1 ? "lar" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `${n.origin} daxilində yanlış a\xe7ar`;
                    case "invalid_union":
                      return "Yanlış dəyər";
                    case "invalid_element":
                      return `${n.origin} daxilində yanlış dəyər`;
                    default:
                      return `Yanlış dəyər`;
                  }
                }),
            };
          },
          "be",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: {
                    unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" },
                    verb: "мець",
                  },
                  array: {
                    unit: {
                      one: "элемент",
                      few: "элементы",
                      many: "элементаў",
                    },
                    verb: "мець",
                  },
                  set: {
                    unit: {
                      one: "элемент",
                      few: "элементы",
                      many: "элементаў",
                    },
                    verb: "мець",
                  },
                  file: {
                    unit: { one: "байт", few: "байты", many: "байтаў" },
                    verb: "мець",
                  },
                }),
                (t = {
                  regex: "увод",
                  email: "email адрас",
                  url: "URL",
                  emoji: "эмодзі",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO дата і час",
                  date: "ISO дата",
                  time: "ISO час",
                  duration: "ISO працягласць",
                  ipv4: "IPv4 адрас",
                  ipv6: "IPv6 адрас",
                  cidrv4: "IPv4 дыяпазон",
                  cidrv6: "IPv6 дыяпазон",
                  base64: "радок у фармаце base64",
                  base64url: "радок у фармаце base64url",
                  json_string: "JSON радок",
                  e164: "нумар E.164",
                  jwt: "JWT",
                  template_literal: "увод",
                }),
                (i = { nan: "NaN", number: "лік", array: "масіў" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Няправільны ўвод: чакаўся instanceof ${n.expected}, атрымана ${r}`;
                      return `Няправільны ўвод: чакаўся ${e}, атрымана ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Няправільны ўвод: чакалася ${F(n.values[0])}`;
                      return `Няправільны варыянт: чакаўся адзін з ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i) {
                        let e = nz(
                          Number(n.maximum),
                          i.unit.one,
                          i.unit.few,
                          i.unit.many
                        );
                        return `Занадта вялікі: чакалася, што ${
                          n.origin ?? "значэнне"
                        } павінна ${i.verb} ${t}${n.maximum.toString()} ${e}`;
                      }
                      return `Занадта вялікі: чакалася, што ${
                        n.origin ?? "значэнне"
                      } павінна быць ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i) {
                        let e = nz(
                          Number(n.minimum),
                          i.unit.one,
                          i.unit.few,
                          i.unit.many
                        );
                        return `Занадта малы: чакалася, што ${
                          n.origin
                        } павінна ${i.verb} ${t}${n.minimum.toString()} ${e}`;
                      }
                      return `Занадта малы: чакалася, што ${
                        n.origin
                      } павінна быць ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Няправільны радок: павінен пачынацца з "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Няправільны радок: павінен заканчвацца на "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Няправільны радок: павінен змяшчаць "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Няправільны радок: павінен адпавядаць шаблону ${n.pattern}`;
                      return `Няправільны ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Няправільны лік: павінен быць кратным ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Нераспазнаны ${
                        n.keys.length > 1 ? "ключы" : "ключ"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Няправільны ключ у ${n.origin}`;
                    case "invalid_union":
                      return "Няправільны ўвод";
                    case "invalid_element":
                      return `Няправільнае значэнне ў ${n.origin}`;
                    default:
                      return `Няправільны ўвод`;
                  }
                }),
            };
          },
          "bg",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "символа", verb: "да съдържа" },
                  file: { unit: "байта", verb: "да съдържа" },
                  array: { unit: "елемента", verb: "да съдържа" },
                  set: { unit: "елемента", verb: "да съдържа" },
                }),
                (t = {
                  regex: "вход",
                  email: "имейл адрес",
                  url: "URL",
                  emoji: "емоджи",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO време",
                  date: "ISO дата",
                  time: "ISO време",
                  duration: "ISO продължителност",
                  ipv4: "IPv4 адрес",
                  ipv6: "IPv6 адрес",
                  cidrv4: "IPv4 диапазон",
                  cidrv6: "IPv6 диапазон",
                  base64: "base64-кодиран низ",
                  base64url: "base64url-кодиран низ",
                  json_string: "JSON низ",
                  e164: "E.164 номер",
                  jwt: "JWT",
                  template_literal: "вход",
                }),
                (i = { nan: "NaN", number: "число", array: "масив" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Невалиден вход: очакван instanceof ${n.expected}, получен ${r}`;
                      return `Невалиден вход: очакван ${e}, получен ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Невалиден вход: очакван ${F(n.values[0])}`;
                      return `Невалидна опция: очаквано едно от ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Твърде голямо: очаква се ${
                          n.origin ?? "стойност"
                        } да съдържа ${t}${n.maximum.toString()} ${
                          i.unit ?? "елемента"
                        }`;
                      return `Твърде голямо: очаква се ${
                        n.origin ?? "стойност"
                      } да бъде ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Твърде малко: очаква се ${
                          n.origin
                        } да съдържа ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Твърде малко: очаква се ${
                        n.origin
                      } да бъде ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format": {
                      if ("starts_with" === n.format)
                        return `Невалиден низ: трябва да започва с "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Невалиден низ: трябва да завършва с "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Невалиден низ: трябва да включва "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Невалиден низ: трябва да съвпада с ${n.pattern}`;
                      let e = "Невалиден";
                      return (
                        "emoji" === n.format && (e = "Невалидно"),
                        "datetime" === n.format && (e = "Невалидно"),
                        "date" === n.format && (e = "Невалидна"),
                        "time" === n.format && (e = "Невалидно"),
                        "duration" === n.format && (e = "Невалидна"),
                        `${e} ${t[n.format] ?? n.format}`
                      );
                    }
                    case "not_multiple_of":
                      return `Невалидно число: трябва да бъде кратно на ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Неразпознат${n.keys.length > 1 ? "и" : ""} ключ${
                        n.keys.length > 1 ? "ове" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Невалиден ключ в ${n.origin}`;
                    case "invalid_union":
                      return "Невалиден вход";
                    case "invalid_element":
                      return `Невалидна стойност в ${n.origin}`;
                    default:
                      return `Невалиден вход`;
                  }
                }),
            };
          },
          "ca",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "caràcters", verb: "contenir" },
                  file: { unit: "bytes", verb: "contenir" },
                  array: { unit: "elements", verb: "contenir" },
                  set: { unit: "elements", verb: "contenir" },
                }),
                (t = {
                  regex: "entrada",
                  email: "adreça electrònica",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "data i hora ISO",
                  date: "data ISO",
                  time: "hora ISO",
                  duration: "durada ISO",
                  ipv4: "adreça IPv4",
                  ipv6: "adreça IPv6",
                  cidrv4: "rang IPv4",
                  cidrv6: "rang IPv6",
                  base64: "cadena codificada en base64",
                  base64url: "cadena codificada en base64url",
                  json_string: "cadena JSON",
                  e164: "número E.164",
                  jwt: "JWT",
                  template_literal: "entrada",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Tipus inv\xe0lid: s'esperava instanceof ${n.expected}, s'ha rebut ${r}`;
                      return `Tipus inv\xe0lid: s'esperava ${e}, s'ha rebut ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Valor inv\xe0lid: s'esperava ${F(n.values[0])}`;
                      return `Opci\xf3 inv\xe0lida: s'esperava una de ${f(
                        n.values,
                        " o "
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "com a màxim" : "menys de",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Massa gran: s'esperava que ${
                          n.origin ?? "el valor"
                        } contingu\xe9s ${t} ${n.maximum.toString()} ${
                          i.unit ?? "elements"
                        }`;
                      return `Massa gran: s'esperava que ${
                        n.origin ?? "el valor"
                      } fos ${t} ${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? "com a mínim" : "més de",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Massa petit: s'esperava que ${
                          n.origin
                        } contingu\xe9s ${t} ${n.minimum.toString()} ${i.unit}`;
                      return `Massa petit: s'esperava que ${
                        n.origin
                      } fos ${t} ${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Format inv\xe0lid: ha de comen\xe7ar amb "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Format inv\xe0lid: ha d'acabar amb "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Format inv\xe0lid: ha d'incloure "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${n.pattern}`;
                      return `Format inv\xe0lid per a ${
                        t[n.format] ?? n.format
                      }`;
                    case "not_multiple_of":
                      return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Clau${
                        n.keys.length > 1 ? "s" : ""
                      } no reconeguda${n.keys.length > 1 ? "s" : ""}: ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Clau inv\xe0lida a ${n.origin}`;
                    case "invalid_union":
                      return "Entrada invàlida";
                    case "invalid_element":
                      return `Element inv\xe0lid a ${n.origin}`;
                    default:
                      return `Entrada inv\xe0lida`;
                  }
                }),
            };
          },
          "cs",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "znaků", verb: "mít" },
                  file: { unit: "bajtů", verb: "mít" },
                  array: { unit: "prvků", verb: "mít" },
                  set: { unit: "prvků", verb: "mít" },
                }),
                (t = {
                  regex: "regulární výraz",
                  email: "e-mailová adresa",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "datum a čas ve formátu ISO",
                  date: "datum ve formátu ISO",
                  time: "čas ve formátu ISO",
                  duration: "doba trvání ISO",
                  ipv4: "IPv4 adresa",
                  ipv6: "IPv6 adresa",
                  cidrv4: "rozsah IPv4",
                  cidrv6: "rozsah IPv6",
                  base64: "řetězec zakódovaný ve formátu base64",
                  base64url: "řetězec zakódovaný ve formátu base64url",
                  json_string: "řetězec ve formátu JSON",
                  e164: "číslo E.164",
                  jwt: "JWT",
                  template_literal: "vstup",
                }),
                (i = {
                  nan: "NaN",
                  number: "číslo",
                  string: "řetězec",
                  function: "funkce",
                  array: "pole",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Neplatn\xfd vstup: oček\xe1v\xe1no instanceof ${n.expected}, obdrženo ${r}`;
                      return `Neplatn\xfd vstup: oček\xe1v\xe1no ${e}, obdrženo ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Neplatn\xfd vstup: oček\xe1v\xe1no ${F(
                          n.values[0]
                        )}`;
                      return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Hodnota je př\xedliš velk\xe1: ${
                          n.origin ?? "hodnota"
                        } mus\xed m\xedt ${t}${n.maximum.toString()} ${
                          i.unit ?? "prvků"
                        }`;
                      return `Hodnota je př\xedliš velk\xe1: ${
                        n.origin ?? "hodnota"
                      } mus\xed b\xfdt ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Hodnota je př\xedliš mal\xe1: ${
                          n.origin ?? "hodnota"
                        } mus\xed m\xedt ${t}${n.minimum.toString()} ${
                          i.unit ?? "prvků"
                        }`;
                      return `Hodnota je př\xedliš mal\xe1: ${
                        n.origin ?? "hodnota"
                      } mus\xed b\xfdt ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Neplatn\xfd řetězec: mus\xed končit na "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Neplatn\xfd řetězec: mus\xed obsahovat "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${n.pattern}`;
                      return `Neplatn\xfd form\xe1t ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Nezn\xe1m\xe9 kl\xedče: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Neplatn\xfd kl\xedč v ${n.origin}`;
                    case "invalid_union":
                      return "Neplatný vstup";
                    case "invalid_element":
                      return `Neplatn\xe1 hodnota v ${n.origin}`;
                    default:
                      return `Neplatn\xfd vstup`;
                  }
                }),
            };
          },
          "da",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "tegn", verb: "havde" },
                  file: { unit: "bytes", verb: "havde" },
                  array: { unit: "elementer", verb: "indeholdt" },
                  set: { unit: "elementer", verb: "indeholdt" },
                }),
                (t = {
                  regex: "input",
                  email: "e-mailadresse",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO dato- og klokkeslæt",
                  date: "ISO-dato",
                  time: "ISO-klokkeslæt",
                  duration: "ISO-varighed",
                  ipv4: "IPv4-område",
                  ipv6: "IPv6-område",
                  cidrv4: "IPv4-spektrum",
                  cidrv6: "IPv6-spektrum",
                  base64: "base64-kodet streng",
                  base64url: "base64url-kodet streng",
                  json_string: "JSON-streng",
                  e164: "E.164-nummer",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = {
                  nan: "NaN",
                  string: "streng",
                  number: "tal",
                  boolean: "boolean",
                  array: "liste",
                  object: "objekt",
                  set: "sæt",
                  file: "fil",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Ugyldigt input: forventede instanceof ${n.expected}, fik ${r}`;
                      return `Ugyldigt input: forventede ${e}, fik ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Ugyldig v\xe6rdi: forventede ${F(n.values[0])}`;
                      return `Ugyldigt valg: forventede en af f\xf8lgende ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        r = e[n.origin] ?? null,
                        a = i[n.origin] ?? n.origin;
                      if (r)
                        return `For stor: forventede ${a ?? "value"} ${
                          r.verb
                        } ${t} ${n.maximum.toString()} ${
                          r.unit ?? "elementer"
                        }`;
                      return `For stor: forventede ${
                        a ?? "value"
                      } havde ${t} ${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        r = e[n.origin] ?? null,
                        a = i[n.origin] ?? n.origin;
                      if (r)
                        return `For lille: forventede ${a} ${
                          r.verb
                        } ${t} ${n.minimum.toString()} ${r.unit}`;
                      return `For lille: forventede ${a} havde ${t} ${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Ugyldig streng: skal starte med "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Ugyldig streng: skal ende med "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Ugyldig streng: skal indeholde "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Ugyldig streng: skal matche m\xf8nsteret ${n.pattern}`;
                      return `Ugyldig ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Ugyldigt tal: skal v\xe6re deleligt med ${n.divisor}`;
                    case "unrecognized_keys":
                      return `${
                        n.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Ugyldig n\xf8gle i ${n.origin}`;
                    case "invalid_union":
                      return "Ugyldigt input: matcher ingen af de tilladte typer";
                    case "invalid_element":
                      return `Ugyldig v\xe6rdi i ${n.origin}`;
                    default:
                      return "Ugyldigt input";
                  }
                }),
            };
          },
          "de",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "Zeichen", verb: "zu haben" },
                  file: { unit: "Bytes", verb: "zu haben" },
                  array: { unit: "Elemente", verb: "zu haben" },
                  set: { unit: "Elemente", verb: "zu haben" },
                }),
                (t = {
                  regex: "Eingabe",
                  email: "E-Mail-Adresse",
                  url: "URL",
                  emoji: "Emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO-Datum und -Uhrzeit",
                  date: "ISO-Datum",
                  time: "ISO-Uhrzeit",
                  duration: "ISO-Dauer",
                  ipv4: "IPv4-Adresse",
                  ipv6: "IPv6-Adresse",
                  cidrv4: "IPv4-Bereich",
                  cidrv6: "IPv6-Bereich",
                  base64: "Base64-codierter String",
                  base64url: "Base64-URL-codierter String",
                  json_string: "JSON-String",
                  e164: "E.164-Nummer",
                  jwt: "JWT",
                  template_literal: "Eingabe",
                }),
                (i = { nan: "NaN", number: "Zahl", array: "Array" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Ung\xfcltige Eingabe: erwartet instanceof ${n.expected}, erhalten ${r}`;
                      return `Ung\xfcltige Eingabe: erwartet ${e}, erhalten ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Ung\xfcltige Eingabe: erwartet ${F(
                          n.values[0]
                        )}`;
                      return `Ung\xfcltige Option: erwartet eine von ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Zu gro\xdf: erwartet, dass ${
                          n.origin ?? "Wert"
                        } ${t}${n.maximum.toString()} ${
                          i.unit ?? "Elemente"
                        } hat`;
                      return `Zu gro\xdf: erwartet, dass ${
                        n.origin ?? "Wert"
                      } ${t}${n.maximum.toString()} ist`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Zu klein: erwartet, dass ${
                          n.origin
                        } ${t}${n.minimum.toString()} ${i.unit} hat`;
                      return `Zu klein: erwartet, dass ${
                        n.origin
                      } ${t}${n.minimum.toString()} ist`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Ung\xfcltiger String: muss mit "${n.prefix}" beginnen`;
                      if ("ends_with" === n.format)
                        return `Ung\xfcltiger String: muss mit "${n.suffix}" enden`;
                      if ("includes" === n.format)
                        return `Ung\xfcltiger String: muss "${n.includes}" enthalten`;
                      if ("regex" === n.format)
                        return `Ung\xfcltiger String: muss dem Muster ${n.pattern} entsprechen`;
                      return `Ung\xfcltig: ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Ung\xfcltige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
                    case "unrecognized_keys":
                      return `${
                        n.keys.length > 1
                          ? "Unbekannte Schlüssel"
                          : "Unbekannter Schlüssel"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Ung\xfcltiger Schl\xfcssel in ${n.origin}`;
                    case "invalid_union":
                      return "Ungültige Eingabe";
                    case "invalid_element":
                      return `Ung\xfcltiger Wert in ${n.origin}`;
                    default:
                      return `Ung\xfcltige Eingabe`;
                  }
                }),
            };
          },
          "en",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "characters", verb: "to have" },
                  file: { unit: "bytes", verb: "to have" },
                  array: { unit: "items", verb: "to have" },
                  set: { unit: "items", verb: "to have" },
                  map: { unit: "entries", verb: "to have" },
                }),
                (t = {
                  regex: "input",
                  email: "email address",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO datetime",
                  date: "ISO date",
                  time: "ISO time",
                  duration: "ISO duration",
                  ipv4: "IPv4 address",
                  ipv6: "IPv6 address",
                  mac: "MAC address",
                  cidrv4: "IPv4 range",
                  cidrv6: "IPv6 range",
                  base64: "base64-encoded string",
                  base64url: "base64url-encoded string",
                  json_string: "JSON string",
                  e164: "E.164 number",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      return `Invalid input: expected ${e}, received ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Invalid input: expected ${F(n.values[0])}`;
                      return `Invalid option: expected one of ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Too big: expected ${
                          n.origin ?? "value"
                        } to have ${t}${n.maximum.toString()} ${
                          i.unit ?? "elements"
                        }`;
                      return `Too big: expected ${
                        n.origin ?? "value"
                      } to be ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Too small: expected ${
                          n.origin
                        } to have ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Too small: expected ${
                        n.origin
                      } to be ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Invalid string: must start with "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Invalid string: must end with "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Invalid string: must include "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Invalid string: must match pattern ${n.pattern}`;
                      return `Invalid ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Invalid number: must be a multiple of ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Unrecognized key${
                        n.keys.length > 1 ? "s" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Invalid key in ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Invalid input";
                    case "invalid_element":
                      return `Invalid value in ${n.origin}`;
                  }
                }),
            };
          },
          "eo",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "karaktrojn", verb: "havi" },
                  file: { unit: "bajtojn", verb: "havi" },
                  array: { unit: "elementojn", verb: "havi" },
                  set: { unit: "elementojn", verb: "havi" },
                }),
                (t = {
                  regex: "enigo",
                  email: "retadreso",
                  url: "URL",
                  emoji: "emoĝio",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO-datotempo",
                  date: "ISO-dato",
                  time: "ISO-tempo",
                  duration: "ISO-daŭro",
                  ipv4: "IPv4-adreso",
                  ipv6: "IPv6-adreso",
                  cidrv4: "IPv4-rango",
                  cidrv6: "IPv6-rango",
                  base64: "64-ume kodita karaktraro",
                  base64url: "URL-64-ume kodita karaktraro",
                  json_string: "JSON-karaktraro",
                  e164: "E.164-nombro",
                  jwt: "JWT",
                  template_literal: "enigo",
                }),
                (i = {
                  nan: "NaN",
                  number: "nombro",
                  array: "tabelo",
                  null: "senvalora",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Nevalida enigo: atendiĝis instanceof ${n.expected}, riceviĝis ${r}`;
                      return `Nevalida enigo: atendiĝis ${e}, riceviĝis ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Nevalida enigo: atendiĝis ${F(n.values[0])}`;
                      return `Nevalida opcio: atendiĝis unu el ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Tro granda: atendiĝis ke ${
                          n.origin ?? "valoro"
                        } havu ${t}${n.maximum.toString()} ${
                          i.unit ?? "elementojn"
                        }`;
                      return `Tro granda: atendiĝis ke ${
                        n.origin ?? "valoro"
                      } havu ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Tro malgranda: atendiĝis ke ${
                          n.origin
                        } havu ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Tro malgranda: atendiĝis ke ${
                        n.origin
                      } estu ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Nevalida karaktraro: devas komenciĝi per "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Nevalida karaktraro: devas finiĝi per "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Nevalida karaktraro: devas inkluzivi "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Nevalida karaktraro: devas kongrui kun la modelo ${n.pattern}`;
                      return `Nevalida ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Nevalida nombro: devas esti oblo de ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Nekonata${n.keys.length > 1 ? "j" : ""} ŝlosilo${
                        n.keys.length > 1 ? "j" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Nevalida ŝlosilo en ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Nevalida enigo";
                    case "invalid_element":
                      return `Nevalida valoro en ${n.origin}`;
                  }
                }),
            };
          },
          "es",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "caracteres", verb: "tener" },
                  file: { unit: "bytes", verb: "tener" },
                  array: { unit: "elementos", verb: "tener" },
                  set: { unit: "elementos", verb: "tener" },
                }),
                (t = {
                  regex: "entrada",
                  email: "dirección de correo electrónico",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "fecha y hora ISO",
                  date: "fecha ISO",
                  time: "hora ISO",
                  duration: "duración ISO",
                  ipv4: "dirección IPv4",
                  ipv6: "dirección IPv6",
                  cidrv4: "rango IPv4",
                  cidrv6: "rango IPv6",
                  base64: "cadena codificada en base64",
                  base64url: "URL codificada en base64",
                  json_string: "cadena JSON",
                  e164: "número E.164",
                  jwt: "JWT",
                  template_literal: "entrada",
                }),
                (i = {
                  nan: "NaN",
                  string: "texto",
                  number: "número",
                  boolean: "booleano",
                  array: "arreglo",
                  object: "objeto",
                  set: "conjunto",
                  file: "archivo",
                  date: "fecha",
                  bigint: "número grande",
                  symbol: "símbolo",
                  undefined: "indefinido",
                  null: "nulo",
                  function: "función",
                  map: "mapa",
                  record: "registro",
                  tuple: "tupla",
                  enum: "enumeración",
                  union: "unión",
                  literal: "literal",
                  promise: "promesa",
                  void: "vacío",
                  never: "nunca",
                  unknown: "desconocido",
                  any: "cualquiera",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Entrada inv\xe1lida: se esperaba instanceof ${n.expected}, recibido ${r}`;
                      return `Entrada inv\xe1lida: se esperaba ${e}, recibido ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Entrada inv\xe1lida: se esperaba ${F(
                          n.values[0]
                        )}`;
                      return `Opci\xf3n inv\xe1lida: se esperaba una de ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        r = e[n.origin] ?? null,
                        a = i[n.origin] ?? n.origin;
                      if (r)
                        return `Demasiado grande: se esperaba que ${
                          a ?? "valor"
                        } tuviera ${t}${n.maximum.toString()} ${
                          r.unit ?? "elementos"
                        }`;
                      return `Demasiado grande: se esperaba que ${
                        a ?? "valor"
                      } fuera ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        r = e[n.origin] ?? null,
                        a = i[n.origin] ?? n.origin;
                      if (r)
                        return `Demasiado peque\xf1o: se esperaba que ${a} tuviera ${t}${n.minimum.toString()} ${
                          r.unit
                        }`;
                      return `Demasiado peque\xf1o: se esperaba que ${a} fuera ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Cadena inv\xe1lida: debe comenzar con "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Cadena inv\xe1lida: debe terminar en "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Cadena inv\xe1lida: debe incluir "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${n.pattern}`;
                      return `Inv\xe1lido ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Llave${n.keys.length > 1 ? "s" : ""} desconocida${
                        n.keys.length > 1 ? "s" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Llave inv\xe1lida en ${i[n.origin] ?? n.origin}`;
                    case "invalid_union":
                      return "Entrada inválida";
                    case "invalid_element":
                      return `Valor inv\xe1lido en ${i[n.origin] ?? n.origin}`;
                    default:
                      return `Entrada inv\xe1lida`;
                  }
                }),
            };
          },
          "fa",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "کاراکتر", verb: "داشته باشد" },
                  file: { unit: "بایت", verb: "داشته باشد" },
                  array: { unit: "آیتم", verb: "داشته باشد" },
                  set: { unit: "آیتم", verb: "داشته باشد" },
                }),
                (t = {
                  regex: "ورودی",
                  email: "آدرس ایمیل",
                  url: "URL",
                  emoji: "ایموجی",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "تاریخ و زمان ایزو",
                  date: "تاریخ ایزو",
                  time: "زمان ایزو",
                  duration: "مدت زمان ایزو",
                  ipv4: "IPv4 آدرس",
                  ipv6: "IPv6 آدرس",
                  cidrv4: "IPv4 دامنه",
                  cidrv6: "IPv6 دامنه",
                  base64: "base64-encoded رشته",
                  base64url: "base64url-encoded رشته",
                  json_string: "JSON رشته",
                  e164: "E.164 عدد",
                  jwt: "JWT",
                  template_literal: "ورودی",
                }),
                (i = { nan: "NaN", number: "عدد", array: "آرایه" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `ورودی نامعتبر: می‌بایست instanceof ${n.expected} می‌بود، ${r} دریافت شد`;
                      return `ورودی نامعتبر: می‌بایست ${e} می‌بود، ${r} دریافت شد`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `ورودی نامعتبر: می‌بایست ${F(
                          n.values[0]
                        )} می‌بود`;
                      return `گزینه نامعتبر: می‌بایست یکی از ${f(
                        n.values,
                        "|"
                      )} می‌بود`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `خیلی بزرگ: ${
                          n.origin ?? "مقدار"
                        } باید ${t}${n.maximum.toString()} ${
                          i.unit ?? "عنصر"
                        } باشد`;
                      return `خیلی بزرگ: ${
                        n.origin ?? "مقدار"
                      } باید ${t}${n.maximum.toString()} باشد`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `خیلی کوچک: ${
                          n.origin
                        } باید ${t}${n.minimum.toString()} ${i.unit} باشد`;
                      return `خیلی کوچک: ${
                        n.origin
                      } باید ${t}${n.minimum.toString()} باشد`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `رشته نامعتبر: باید با "${n.prefix}" شروع شود`;
                      if ("ends_with" === n.format)
                        return `رشته نامعتبر: باید با "${n.suffix}" تمام شود`;
                      if ("includes" === n.format)
                        return `رشته نامعتبر: باید شامل "${n.includes}" باشد`;
                      if ("regex" === n.format)
                        return `رشته نامعتبر: باید با الگوی ${n.pattern} مطابقت داشته باشد`;
                      return `${t[n.format] ?? n.format} نامعتبر`;
                    case "not_multiple_of":
                      return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
                    case "unrecognized_keys":
                      return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `کلید ناشناس در ${n.origin}`;
                    case "invalid_union":
                    default:
                      return `ورودی نامعتبر`;
                    case "invalid_element":
                      return `مقدار نامعتبر در ${n.origin}`;
                  }
                }),
            };
          },
          "fi",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "merkkiä", subject: "merkkijonon" },
                  file: { unit: "tavua", subject: "tiedoston" },
                  array: { unit: "alkiota", subject: "listan" },
                  set: { unit: "alkiota", subject: "joukon" },
                  number: { unit: "", subject: "luvun" },
                  bigint: { unit: "", subject: "suuren kokonaisluvun" },
                  int: { unit: "", subject: "kokonaisluvun" },
                  date: { unit: "", subject: "päivämäärän" },
                }),
                (t = {
                  regex: "säännöllinen lauseke",
                  email: "sähköpostiosoite",
                  url: "URL-osoite",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO-aikaleima",
                  date: "ISO-päivämäärä",
                  time: "ISO-aika",
                  duration: "ISO-kesto",
                  ipv4: "IPv4-osoite",
                  ipv6: "IPv6-osoite",
                  cidrv4: "IPv4-alue",
                  cidrv6: "IPv6-alue",
                  base64: "base64-koodattu merkkijono",
                  base64url: "base64url-koodattu merkkijono",
                  json_string: "JSON-merkkijono",
                  e164: "E.164-luku",
                  jwt: "JWT",
                  template_literal: "templaattimerkkijono",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Virheellinen tyyppi: odotettiin instanceof ${n.expected}, oli ${r}`;
                      return `Virheellinen tyyppi: odotettiin ${e}, oli ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Virheellinen sy\xf6te: t\xe4ytyy olla ${F(
                          n.values[0]
                        )}`;
                      return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Liian suuri: ${
                          i.subject
                        } t\xe4ytyy olla ${t}${n.maximum.toString()} ${
                          i.unit
                        }`.trim();
                      return `Liian suuri: arvon t\xe4ytyy olla ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Liian pieni: ${
                          i.subject
                        } t\xe4ytyy olla ${t}${n.minimum.toString()} ${
                          i.unit
                        }`.trim();
                      return `Liian pieni: arvon t\xe4ytyy olla ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${n.pattern}`;
                      return `Virheellinen ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Virheellinen luku: t\xe4ytyy olla luvun ${n.divisor} monikerta`;
                    case "unrecognized_keys":
                      return `${
                        n.keys.length > 1
                          ? "Tuntemattomat avaimet"
                          : "Tuntematon avain"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return "Virheellinen avain tietueessa";
                    case "invalid_union":
                      return "Virheellinen unioni";
                    case "invalid_element":
                      return "Virheellinen arvo joukossa";
                    default:
                      return `Virheellinen sy\xf6te`;
                  }
                }),
            };
          },
          "fr",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "caractères", verb: "avoir" },
                  file: { unit: "octets", verb: "avoir" },
                  array: { unit: "éléments", verb: "avoir" },
                  set: { unit: "éléments", verb: "avoir" },
                }),
                (t = {
                  regex: "entrée",
                  email: "adresse e-mail",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "date et heure ISO",
                  date: "date ISO",
                  time: "heure ISO",
                  duration: "durée ISO",
                  ipv4: "adresse IPv4",
                  ipv6: "adresse IPv6",
                  cidrv4: "plage IPv4",
                  cidrv6: "plage IPv6",
                  base64: "chaîne encodée en base64",
                  base64url: "chaîne encodée en base64url",
                  json_string: "chaîne JSON",
                  e164: "numéro E.164",
                  jwt: "JWT",
                  template_literal: "entrée",
                }),
                (i = { nan: "NaN", number: "nombre", array: "tableau" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Entr\xe9e invalide : instanceof ${n.expected} attendu, ${r} re\xe7u`;
                      return `Entr\xe9e invalide : ${e} attendu, ${r} re\xe7u`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Entr\xe9e invalide : ${F(n.values[0])} attendu`;
                      return `Option invalide : une valeur parmi ${f(
                        n.values,
                        "|"
                      )} attendue`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Trop grand : ${n.origin ?? "valeur"} doit ${
                          i.verb
                        } ${t}${n.maximum.toString()} ${
                          i.unit ?? "élément(s)"
                        }`;
                      return `Trop grand : ${
                        n.origin ?? "valeur"
                      } doit \xeatre ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Trop petit : ${n.origin} doit ${
                          i.verb
                        } ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Trop petit : ${
                        n.origin
                      } doit \xeatre ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Cha\xeene invalide : doit commencer par "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Cha\xeene invalide : doit se terminer par "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Cha\xeene invalide : doit inclure "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Cha\xeene invalide : doit correspondre au mod\xe8le ${n.pattern}`;
                      return `${t[n.format] ?? n.format} invalide`;
                    case "not_multiple_of":
                      return `Nombre invalide : doit \xeatre un multiple de ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Cl\xe9${
                        n.keys.length > 1 ? "s" : ""
                      } non reconnue${n.keys.length > 1 ? "s" : ""} : ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Cl\xe9 invalide dans ${n.origin}`;
                    case "invalid_union":
                      return "Entrée invalide";
                    case "invalid_element":
                      return `Valeur invalide dans ${n.origin}`;
                    default:
                      return `Entr\xe9e invalide`;
                  }
                }),
            };
          },
          "frCA",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "caractères", verb: "avoir" },
                  file: { unit: "octets", verb: "avoir" },
                  array: { unit: "éléments", verb: "avoir" },
                  set: { unit: "éléments", verb: "avoir" },
                }),
                (t = {
                  regex: "entrée",
                  email: "adresse courriel",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "date-heure ISO",
                  date: "date ISO",
                  time: "heure ISO",
                  duration: "durée ISO",
                  ipv4: "adresse IPv4",
                  ipv6: "adresse IPv6",
                  cidrv4: "plage IPv4",
                  cidrv6: "plage IPv6",
                  base64: "chaîne encodée en base64",
                  base64url: "chaîne encodée en base64url",
                  json_string: "chaîne JSON",
                  e164: "numéro E.164",
                  jwt: "JWT",
                  template_literal: "entrée",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Entr\xe9e invalide : attendu instanceof ${n.expected}, re\xe7u ${r}`;
                      return `Entr\xe9e invalide : attendu ${e}, re\xe7u ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Entr\xe9e invalide : attendu ${F(n.values[0])}`;
                      return `Option invalide : attendu l'une des valeurs suivantes ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "≤" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Trop grand : attendu que ${
                          n.origin ?? "la valeur"
                        } ait ${t}${n.maximum.toString()} ${i.unit}`;
                      return `Trop grand : attendu que ${
                        n.origin ?? "la valeur"
                      } soit ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? "≥" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Trop petit : attendu que ${
                          n.origin
                        } ait ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Trop petit : attendu que ${
                        n.origin
                      } soit ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Cha\xeene invalide : doit commencer par "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Cha\xeene invalide : doit se terminer par "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Cha\xeene invalide : doit inclure "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Cha\xeene invalide : doit correspondre au motif ${n.pattern}`;
                      return `${t[n.format] ?? n.format} invalide`;
                    case "not_multiple_of":
                      return `Nombre invalide : doit \xeatre un multiple de ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Cl\xe9${
                        n.keys.length > 1 ? "s" : ""
                      } non reconnue${n.keys.length > 1 ? "s" : ""} : ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Cl\xe9 invalide dans ${n.origin}`;
                    case "invalid_union":
                      return "Entrée invalide";
                    case "invalid_element":
                      return `Valeur invalide dans ${n.origin}`;
                    default:
                      return `Entr\xe9e invalide`;
                  }
                }),
            };
          },
          "he",
          0,
          function () {
            let e, t, i, n, r, a, o, s, u;
            return {
              localeError:
                ((e = {
                  string: { label: "מחרוזת", gender: "f" },
                  number: { label: "מספר", gender: "m" },
                  boolean: { label: "ערך בוליאני", gender: "m" },
                  bigint: { label: "BigInt", gender: "m" },
                  date: { label: "תאריך", gender: "m" },
                  array: { label: "מערך", gender: "m" },
                  object: { label: "אובייקט", gender: "m" },
                  null: { label: "ערך ריק (null)", gender: "m" },
                  undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
                  symbol: { label: "סימבול (Symbol)", gender: "m" },
                  function: { label: "פונקציה", gender: "f" },
                  map: { label: "מפה (Map)", gender: "f" },
                  set: { label: "קבוצה (Set)", gender: "f" },
                  file: { label: "קובץ", gender: "m" },
                  promise: { label: "Promise", gender: "m" },
                  NaN: { label: "NaN", gender: "m" },
                  unknown: { label: "ערך לא ידוע", gender: "m" },
                  value: { label: "ערך", gender: "m" },
                }),
                (t = {
                  string: {
                    unit: "תווים",
                    shortLabel: "קצר",
                    longLabel: "ארוך",
                  },
                  file: {
                    unit: "בייטים",
                    shortLabel: "קטן",
                    longLabel: "גדול",
                  },
                  array: {
                    unit: "פריטים",
                    shortLabel: "קטן",
                    longLabel: "גדול",
                  },
                  set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
                  number: { unit: "", shortLabel: "קטן", longLabel: "גדול" },
                }),
                (i = (t) => (t ? e[t] : void 0)),
                (n = (t) => {
                  let n = i(t);
                  return n ? n.label : t ?? e.unknown.label;
                }),
                (r = (e) => `ה${n(e)}`),
                (a = (e) => {
                  let t = i(e);
                  return "f" === (t?.gender ?? "m")
                    ? "צריכה להיות"
                    : "צריך להיות";
                }),
                (o = (e) => (e ? t[e] ?? null : null)),
                (s = {
                  regex: { label: "קלט", gender: "m" },
                  email: { label: "כתובת אימייל", gender: "f" },
                  url: { label: "כתובת רשת", gender: "f" },
                  emoji: { label: "אימוג'י", gender: "m" },
                  uuid: { label: "UUID", gender: "m" },
                  nanoid: { label: "nanoid", gender: "m" },
                  guid: { label: "GUID", gender: "m" },
                  cuid: { label: "cuid", gender: "m" },
                  cuid2: { label: "cuid2", gender: "m" },
                  ulid: { label: "ULID", gender: "m" },
                  xid: { label: "XID", gender: "m" },
                  ksuid: { label: "KSUID", gender: "m" },
                  datetime: { label: "תאריך וזמן ISO", gender: "m" },
                  date: { label: "תאריך ISO", gender: "m" },
                  time: { label: "זמן ISO", gender: "m" },
                  duration: { label: "משך זמן ISO", gender: "m" },
                  ipv4: { label: "כתובת IPv4", gender: "f" },
                  ipv6: { label: "כתובת IPv6", gender: "f" },
                  cidrv4: { label: "טווח IPv4", gender: "m" },
                  cidrv6: { label: "טווח IPv6", gender: "m" },
                  base64: { label: "מחרוזת בבסיס 64", gender: "f" },
                  base64url: {
                    label: "מחרוזת בבסיס 64 לכתובות רשת",
                    gender: "f",
                  },
                  json_string: { label: "מחרוזת JSON", gender: "f" },
                  e164: { label: "מספר E.164", gender: "m" },
                  jwt: { label: "JWT", gender: "m" },
                  ends_with: { label: "קלט", gender: "m" },
                  includes: { label: "קלט", gender: "m" },
                  lowercase: { label: "קלט", gender: "m" },
                  starts_with: { label: "קלט", gender: "m" },
                  uppercase: { label: "קלט", gender: "m" },
                }),
                (u = { nan: "NaN" }),
                (t) => {
                  switch (t.code) {
                    case "invalid_type": {
                      let i = t.expected,
                        r = u[i ?? ""] ?? n(i),
                        a = eo(t.input),
                        o = u[a] ?? e[a]?.label ?? a;
                      if (/^[A-Z]/.test(t.expected))
                        return `קלט לא תקין: צריך להיות instanceof ${t.expected}, התקבל ${o}`;
                      return `קלט לא תקין: צריך להיות ${r}, התקבל ${o}`;
                    }
                    case "invalid_value": {
                      if (1 === t.values.length)
                        return `ערך לא תקין: הערך חייב להיות ${F(t.values[0])}`;
                      let e = t.values.map((e) => F(e));
                      if (2 === t.values.length)
                        return `ערך לא תקין: האפשרויות המתאימות הן ${e[0]} או ${e[1]}`;
                      let i = e[e.length - 1],
                        n = e.slice(0, -1).join(", ");
                      return `ערך לא תקין: האפשרויות המתאימות הן ${n} או ${i}`;
                    }
                    case "too_big": {
                      let e = o(t.origin),
                        i = r(t.origin ?? "value");
                      if ("string" === t.origin)
                        return `${
                          e?.longLabel ?? "ארוך"
                        } מדי: ${i} צריכה להכיל ${t.maximum.toString()} ${
                          e?.unit ?? ""
                        } ${t.inclusive ? "או פחות" : "לכל היותר"}`.trim();
                      if ("number" === t.origin) {
                        let e = t.inclusive
                          ? `קטן או שווה ל-${t.maximum}`
                          : `קטן מ-${t.maximum}`;
                        return `גדול מדי: ${i} צריך להיות ${e}`;
                      }
                      if ("array" === t.origin || "set" === t.origin) {
                        let n = "set" === t.origin ? "צריכה" : "צריך",
                          r = t.inclusive
                            ? `${t.maximum} ${e?.unit ?? ""} או פחות`
                            : `פחות מ-${t.maximum} ${e?.unit ?? ""}`;
                        return `גדול מדי: ${i} ${n} להכיל ${r}`.trim();
                      }
                      let n = t.inclusive ? "<=" : "<",
                        s = a(t.origin ?? "value");
                      if (e?.unit)
                        return `${
                          e.longLabel
                        } מדי: ${i} ${s} ${n}${t.maximum.toString()} ${e.unit}`;
                      return `${
                        e?.longLabel ?? "גדול"
                      } מדי: ${i} ${s} ${n}${t.maximum.toString()}`;
                    }
                    case "too_small": {
                      let e = o(t.origin),
                        i = r(t.origin ?? "value");
                      if ("string" === t.origin)
                        return `${
                          e?.shortLabel ?? "קצר"
                        } מדי: ${i} צריכה להכיל ${t.minimum.toString()} ${
                          e?.unit ?? ""
                        } ${t.inclusive ? "או יותר" : "לפחות"}`.trim();
                      if ("number" === t.origin) {
                        let e = t.inclusive
                          ? `גדול או שווה ל-${t.minimum}`
                          : `גדול מ-${t.minimum}`;
                        return `קטן מדי: ${i} צריך להיות ${e}`;
                      }
                      if ("array" === t.origin || "set" === t.origin) {
                        let n = "set" === t.origin ? "צריכה" : "צריך";
                        if (1 === t.minimum && t.inclusive) {
                          let e = (t.origin, "לפחות פריט אחד");
                          return `קטן מדי: ${i} ${n} להכיל ${e}`;
                        }
                        let r = t.inclusive
                          ? `${t.minimum} ${e?.unit ?? ""} או יותר`
                          : `יותר מ-${t.minimum} ${e?.unit ?? ""}`;
                        return `קטן מדי: ${i} ${n} להכיל ${r}`.trim();
                      }
                      let n = t.inclusive ? ">=" : ">",
                        s = a(t.origin ?? "value");
                      if (e?.unit)
                        return `${
                          e.shortLabel
                        } מדי: ${i} ${s} ${n}${t.minimum.toString()} ${e.unit}`;
                      return `${
                        e?.shortLabel ?? "קטן"
                      } מדי: ${i} ${s} ${n}${t.minimum.toString()}`;
                    }
                    case "invalid_format": {
                      if ("starts_with" === t.format)
                        return `המחרוזת חייבת להתחיל ב "${t.prefix}"`;
                      if ("ends_with" === t.format)
                        return `המחרוזת חייבת להסתיים ב "${t.suffix}"`;
                      if ("includes" === t.format)
                        return `המחרוזת חייבת לכלול "${t.includes}"`;
                      if ("regex" === t.format)
                        return `המחרוזת חייבת להתאים לתבנית ${t.pattern}`;
                      let e = s[t.format],
                        i = e?.label ?? t.format,
                        n = e?.gender ?? "m";
                      return `${i} לא ${"f" === n ? "תקינה" : "תקין"}`;
                    }
                    case "not_multiple_of":
                      return `מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;
                    case "unrecognized_keys":
                      return `מפתח${t.keys.length > 1 ? "ות" : ""} לא מזוה${
                        t.keys.length > 1 ? "ים" : "ה"
                      }: ${f(t.keys, ", ")}`;
                    case "invalid_key":
                      return `שדה לא תקין באובייקט`;
                    case "invalid_union":
                      return "קלט לא תקין";
                    case "invalid_element": {
                      let e = r(t.origin ?? "array");
                      return `ערך לא תקין ב${e}`;
                    }
                    default:
                      return `קלט לא תקין`;
                  }
                }),
            };
          },
          "hu",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "karakter", verb: "legyen" },
                  file: { unit: "byte", verb: "legyen" },
                  array: { unit: "elem", verb: "legyen" },
                  set: { unit: "elem", verb: "legyen" },
                }),
                (t = {
                  regex: "bemenet",
                  email: "email cím",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO időbélyeg",
                  date: "ISO dátum",
                  time: "ISO idő",
                  duration: "ISO időintervallum",
                  ipv4: "IPv4 cím",
                  ipv6: "IPv6 cím",
                  cidrv4: "IPv4 tartomány",
                  cidrv6: "IPv6 tartomány",
                  base64: "base64-kódolt string",
                  base64url: "base64url-kódolt string",
                  json_string: "JSON string",
                  e164: "E.164 szám",
                  jwt: "JWT",
                  template_literal: "bemenet",
                }),
                (i = { nan: "NaN", number: "szám", array: "tömb" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k instanceof ${n.expected}, a kapott \xe9rt\xe9k ${r}`;
                      return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${e}, a kapott \xe9rt\xe9k ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${F(
                          n.values[0]
                        )}`;
                      return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `T\xfal nagy: ${
                          n.origin ?? "érték"
                        } m\xe9rete t\xfal nagy ${t}${n.maximum.toString()} ${
                          i.unit ?? "elem"
                        }`;
                      return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${
                        n.origin ?? "érték"
                      } t\xfal nagy: ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${
                          n.origin
                        } m\xe9rete t\xfal kicsi ${t}${n.minimum.toString()} ${
                          i.unit
                        }`;
                      return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${
                        n.origin
                      } t\xfal kicsi ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `\xc9rv\xe9nytelen string: "${n.prefix}" \xe9rt\xe9kkel kell kezdődnie`;
                      if ("ends_with" === n.format)
                        return `\xc9rv\xe9nytelen string: "${n.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`;
                      if ("includes" === n.format)
                        return `\xc9rv\xe9nytelen string: "${n.includes}" \xe9rt\xe9ket kell tartalmaznia`;
                      if ("regex" === n.format)
                        return `\xc9rv\xe9nytelen string: ${n.pattern} mint\xe1nak kell megfelelnie`;
                      return `\xc9rv\xe9nytelen ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `\xc9rv\xe9nytelen sz\xe1m: ${n.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`;
                    case "unrecognized_keys":
                      return `Ismeretlen kulcs${
                        n.keys.length > 1 ? "s" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `\xc9rv\xe9nytelen kulcs ${n.origin}`;
                    case "invalid_union":
                      return "Érvénytelen bemenet";
                    case "invalid_element":
                      return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${n.origin}`;
                    default:
                      return `\xc9rv\xe9nytelen bemenet`;
                  }
                }),
            };
          },
          "hy",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: {
                    unit: { one: "նշան", many: "նշաններ" },
                    verb: "ունենալ",
                  },
                  file: {
                    unit: { one: "բայթ", many: "բայթեր" },
                    verb: "ունենալ",
                  },
                  array: {
                    unit: { one: "տարր", many: "տարրեր" },
                    verb: "ունենալ",
                  },
                  set: {
                    unit: { one: "տարր", many: "տարրեր" },
                    verb: "ունենալ",
                  },
                }),
                (t = {
                  regex: "մուտք",
                  email: "էլ. հասցե",
                  url: "URL",
                  emoji: "էմոջի",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO ամսաթիվ և ժամ",
                  date: "ISO ամսաթիվ",
                  time: "ISO ժամ",
                  duration: "ISO տևողություն",
                  ipv4: "IPv4 հասցե",
                  ipv6: "IPv6 հասցե",
                  cidrv4: "IPv4 միջակայք",
                  cidrv6: "IPv6 միջակայք",
                  base64: "base64 ձևաչափով տող",
                  base64url: "base64url ձևաչափով տող",
                  json_string: "JSON տող",
                  e164: "E.164 համար",
                  jwt: "JWT",
                  template_literal: "մուտք",
                }),
                (i = { nan: "NaN", number: "թիվ", array: "զանգված" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Սխալ մուտքագրում․ սպասվում էր instanceof ${n.expected}, ստացվել է ${r}`;
                      return `Սխալ մուտքագրում․ սպասվում էր ${e}, ստացվել է ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Սխալ մուտքագրում․ սպասվում էր ${F(
                          n.values[1]
                        )}`;
                      return `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i) {
                        let e = nj(Number(n.maximum), i.unit.one, i.unit.many);
                        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${nZ(
                          n.origin ?? "արժեք"
                        )} կունենա ${t}${n.maximum.toString()} ${e}`;
                      }
                      return `Չափազանց մեծ արժեք․ սպասվում է, որ ${nZ(
                        n.origin ?? "արժեք"
                      )} լինի ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i) {
                        let e = nj(Number(n.minimum), i.unit.one, i.unit.many);
                        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${nZ(
                          n.origin
                        )} կունենա ${t}${n.minimum.toString()} ${e}`;
                      }
                      return `Չափազանց փոքր արժեք․ սպասվում է, որ ${nZ(
                        n.origin
                      )} լինի ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Սխալ տող․ պետք է սկսվի "${n.prefix}"-ով`;
                      if ("ends_with" === n.format)
                        return `Սխալ տող․ պետք է ավարտվի "${n.suffix}"-ով`;
                      if ("includes" === n.format)
                        return `Սխալ տող․ պետք է պարունակի "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Սխալ տող․ պետք է համապատասխանի ${n.pattern} ձևաչափին`;
                      return `Սխալ ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${n.divisor}-ի`;
                    case "unrecognized_keys":
                      return `Չճանաչված բանալի${
                        n.keys.length > 1 ? "ներ" : ""
                      }. ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Սխալ բանալի ${nZ(n.origin)}-ում`;
                    case "invalid_union":
                      return "Սխալ մուտքագրում";
                    case "invalid_element":
                      return `Սխալ արժեք ${nZ(n.origin)}-ում`;
                    default:
                      return `Սխալ մուտքագրում`;
                  }
                }),
            };
          },
          "id",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "karakter", verb: "memiliki" },
                  file: { unit: "byte", verb: "memiliki" },
                  array: { unit: "item", verb: "memiliki" },
                  set: { unit: "item", verb: "memiliki" },
                }),
                (t = {
                  regex: "input",
                  email: "alamat email",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "tanggal dan waktu format ISO",
                  date: "tanggal format ISO",
                  time: "jam format ISO",
                  duration: "durasi format ISO",
                  ipv4: "alamat IPv4",
                  ipv6: "alamat IPv6",
                  cidrv4: "rentang alamat IPv4",
                  cidrv6: "rentang alamat IPv6",
                  base64: "string dengan enkode base64",
                  base64url: "string dengan enkode base64url",
                  json_string: "string JSON",
                  e164: "angka E.164",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Input tidak valid: diharapkan instanceof ${n.expected}, diterima ${r}`;
                      return `Input tidak valid: diharapkan ${e}, diterima ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Input tidak valid: diharapkan ${F(
                          n.values[0]
                        )}`;
                      return `Pilihan tidak valid: diharapkan salah satu dari ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Terlalu besar: diharapkan ${
                          n.origin ?? "value"
                        } memiliki ${t}${n.maximum.toString()} ${
                          i.unit ?? "elemen"
                        }`;
                      return `Terlalu besar: diharapkan ${
                        n.origin ?? "value"
                      } menjadi ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Terlalu kecil: diharapkan ${
                          n.origin
                        } memiliki ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Terlalu kecil: diharapkan ${
                        n.origin
                      } menjadi ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `String tidak valid: harus dimulai dengan "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `String tidak valid: harus berakhir dengan "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `String tidak valid: harus menyertakan "${n.includes}"`;
                      if ("regex" === n.format)
                        return `String tidak valid: harus sesuai pola ${n.pattern}`;
                      return `${t[n.format] ?? n.format} tidak valid`;
                    case "not_multiple_of":
                      return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Kunci tidak dikenali ${
                        n.keys.length > 1 ? "s" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Kunci tidak valid di ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Input tidak valid";
                    case "invalid_element":
                      return `Nilai tidak valid di ${n.origin}`;
                  }
                }),
            };
          },
          "is",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "stafi", verb: "að hafa" },
                  file: { unit: "bæti", verb: "að hafa" },
                  array: { unit: "hluti", verb: "að hafa" },
                  set: { unit: "hluti", verb: "að hafa" },
                }),
                (t = {
                  regex: "gildi",
                  email: "netfang",
                  url: "vefslóð",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO dagsetning og tími",
                  date: "ISO dagsetning",
                  time: "ISO tími",
                  duration: "ISO tímalengd",
                  ipv4: "IPv4 address",
                  ipv6: "IPv6 address",
                  cidrv4: "IPv4 range",
                  cidrv6: "IPv6 range",
                  base64: "base64-encoded strengur",
                  base64url: "base64url-encoded strengur",
                  json_string: "JSON strengur",
                  e164: "E.164 tölugildi",
                  jwt: "JWT",
                  template_literal: "gildi",
                }),
                (i = { nan: "NaN", number: "númer", array: "fylki" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Rangt gildi: \xde\xfa sl\xf3st inn ${r} \xfear sem \xe1 a\xf0 vera instanceof ${n.expected}`;
                      return `Rangt gildi: \xde\xfa sl\xf3st inn ${r} \xfear sem \xe1 a\xf0 vera ${e}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Rangt gildi: gert r\xe1\xf0 fyrir ${F(
                          n.values[0]
                        )}`;
                      return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${
                          n.origin ?? "gildi"
                        } hafi ${t}${n.maximum.toString()} ${
                          i.unit ?? "hluti"
                        }`;
                      return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${
                        n.origin ?? "gildi"
                      } s\xe9 ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${
                          n.origin
                        } hafi ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${
                        n.origin
                      } s\xe9 ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${n.includes}"`;
                      if ("regex" === n.format)
                        return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${n.pattern}`;
                      return `Rangt ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${n.divisor}`;
                    case "unrecognized_keys":
                      return `\xd3\xfeekkt ${
                        n.keys.length > 1 ? "ir lyklar" : "ur lykill"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Rangur lykill \xed ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Rangt gildi";
                    case "invalid_element":
                      return `Rangt gildi \xed ${n.origin}`;
                  }
                }),
            };
          },
          "it",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "caratteri", verb: "avere" },
                  file: { unit: "byte", verb: "avere" },
                  array: { unit: "elementi", verb: "avere" },
                  set: { unit: "elementi", verb: "avere" },
                }),
                (t = {
                  regex: "input",
                  email: "indirizzo email",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "data e ora ISO",
                  date: "data ISO",
                  time: "ora ISO",
                  duration: "durata ISO",
                  ipv4: "indirizzo IPv4",
                  ipv6: "indirizzo IPv6",
                  cidrv4: "intervallo IPv4",
                  cidrv6: "intervallo IPv6",
                  base64: "stringa codificata in base64",
                  base64url: "URL codificata in base64",
                  json_string: "stringa JSON",
                  e164: "numero E.164",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = { nan: "NaN", number: "numero", array: "vettore" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Input non valido: atteso instanceof ${n.expected}, ricevuto ${r}`;
                      return `Input non valido: atteso ${e}, ricevuto ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Input non valido: atteso ${F(n.values[0])}`;
                      return `Opzione non valida: atteso uno tra ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Troppo grande: ${
                          n.origin ?? "valore"
                        } deve avere ${t}${n.maximum.toString()} ${
                          i.unit ?? "elementi"
                        }`;
                      return `Troppo grande: ${
                        n.origin ?? "valore"
                      } deve essere ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Troppo piccolo: ${
                          n.origin
                        } deve avere ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Troppo piccolo: ${
                        n.origin
                      } deve essere ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Stringa non valida: deve iniziare con "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Stringa non valida: deve terminare con "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Stringa non valida: deve includere "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Stringa non valida: deve corrispondere al pattern ${n.pattern}`;
                      return `Invalid ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Chiav${
                        n.keys.length > 1 ? "i" : "e"
                      } non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Chiave non valida in ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Input non valido";
                    case "invalid_element":
                      return `Valore non valido in ${n.origin}`;
                  }
                }),
            };
          },
          "ja",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "文字", verb: "である" },
                  file: { unit: "バイト", verb: "である" },
                  array: { unit: "要素", verb: "である" },
                  set: { unit: "要素", verb: "である" },
                }),
                (t = {
                  regex: "入力値",
                  email: "メールアドレス",
                  url: "URL",
                  emoji: "絵文字",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO日時",
                  date: "ISO日付",
                  time: "ISO時刻",
                  duration: "ISO期間",
                  ipv4: "IPv4アドレス",
                  ipv6: "IPv6アドレス",
                  cidrv4: "IPv4範囲",
                  cidrv6: "IPv6範囲",
                  base64: "base64エンコード文字列",
                  base64url: "base64urlエンコード文字列",
                  json_string: "JSON文字列",
                  e164: "E.164番号",
                  jwt: "JWT",
                  template_literal: "入力値",
                }),
                (i = { nan: "NaN", number: "数値", array: "配列" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `無効な入力: instanceof ${n.expected}が期待されましたが、${r}が入力されました`;
                      return `無効な入力: ${e}が期待されましたが、${r}が入力されました`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `無効な入力: ${F(n.values[0])}が期待されました`;
                      return `無効な選択: ${f(
                        n.values,
                        "、"
                      )}のいずれかである必要があります`;
                    case "too_big": {
                      let t = n.inclusive ? "以下である" : "より小さい",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `大きすぎる値: ${
                          n.origin ?? "値"
                        }は${n.maximum.toString()}${
                          i.unit ?? "要素"
                        }${t}必要があります`;
                      return `大きすぎる値: ${
                        n.origin ?? "値"
                      }は${n.maximum.toString()}${t}必要があります`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? "以上である" : "より大きい",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `小さすぎる値: ${
                          n.origin
                        }は${n.minimum.toString()}${i.unit}${t}必要があります`;
                      return `小さすぎる値: ${
                        n.origin
                      }は${n.minimum.toString()}${t}必要があります`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `無効な文字列: "${n.prefix}"で始まる必要があります`;
                      if ("ends_with" === n.format)
                        return `無効な文字列: "${n.suffix}"で終わる必要があります`;
                      if ("includes" === n.format)
                        return `無効な文字列: "${n.includes}"を含む必要があります`;
                      if ("regex" === n.format)
                        return `無効な文字列: パターン${n.pattern}に一致する必要があります`;
                      return `無効な${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `無効な数値: ${n.divisor}の倍数である必要があります`;
                    case "unrecognized_keys":
                      return `認識されていないキー${
                        n.keys.length > 1 ? "群" : ""
                      }: ${f(n.keys, "、")}`;
                    case "invalid_key":
                      return `${n.origin}内の無効なキー`;
                    case "invalid_union":
                      return "無効な入力";
                    case "invalid_element":
                      return `${n.origin}内の無効な値`;
                    default:
                      return `無効な入力`;
                  }
                }),
            };
          },
          "ka",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
                  file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
                  array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
                  set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
                }),
                (t = {
                  regex: "შეყვანა",
                  email: "ელ-ფოსტის მისამართი",
                  url: "URL",
                  emoji: "ემოჯი",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "თარიღი-დრო",
                  date: "თარიღი",
                  time: "დრო",
                  duration: "ხანგრძლივობა",
                  ipv4: "IPv4 მისამართი",
                  ipv6: "IPv6 მისამართი",
                  cidrv4: "IPv4 დიაპაზონი",
                  cidrv6: "IPv6 დიაპაზონი",
                  base64: "base64-კოდირებული სტრინგი",
                  base64url: "base64url-კოდირებული სტრინგი",
                  json_string: "JSON სტრინგი",
                  e164: "E.164 ნომერი",
                  jwt: "JWT",
                  template_literal: "შეყვანა",
                }),
                (i = {
                  nan: "NaN",
                  number: "რიცხვი",
                  string: "სტრინგი",
                  boolean: "ბულეანი",
                  function: "ფუნქცია",
                  array: "მასივი",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `არასწორი შეყვანა: მოსალოდნელი instanceof ${n.expected}, მიღებული ${r}`;
                      return `არასწორი შეყვანა: მოსალოდნელი ${e}, მიღებული ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `არასწორი შეყვანა: მოსალოდნელი ${F(
                          n.values[0]
                        )}`;
                      return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${f(
                        n.values,
                        "|"
                      )}-დან`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `ზედმეტად დიდი: მოსალოდნელი ${
                          n.origin ?? "მნიშვნელობა"
                        } ${i.verb} ${t}${n.maximum.toString()} ${i.unit}`;
                      return `ზედმეტად დიდი: მოსალოდნელი ${
                        n.origin ?? "მნიშვნელობა"
                      } იყოს ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `ზედმეტად პატარა: მოსალოდნელი ${n.origin} ${
                          i.verb
                        } ${t}${n.minimum.toString()} ${i.unit}`;
                      return `ზედმეტად პატარა: მოსალოდნელი ${
                        n.origin
                      } იყოს ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `არასწორი სტრინგი: უნდა იწყებოდეს "${n.prefix}"-ით`;
                      if ("ends_with" === n.format)
                        return `არასწორი სტრინგი: უნდა მთავრდებოდეს "${n.suffix}"-ით`;
                      if ("includes" === n.format)
                        return `არასწორი სტრინგი: უნდა შეიცავდეს "${n.includes}"-ს`;
                      if ("regex" === n.format)
                        return `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${n.pattern}`;
                      return `არასწორი ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `არასწორი რიცხვი: უნდა იყოს ${n.divisor}-ის ჯერადი`;
                    case "unrecognized_keys":
                      return `უცნობი გასაღებ${
                        n.keys.length > 1 ? "ები" : "ი"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `არასწორი გასაღები ${n.origin}-ში`;
                    case "invalid_union":
                      return "არასწორი შეყვანა";
                    case "invalid_element":
                      return `არასწორი მნიშვნელობა ${n.origin}-ში`;
                    default:
                      return `არასწორი შეყვანა`;
                  }
                }),
            };
          },
          "kh",
          0,
          function () {
            return nU();
          },
          "km",
          0,
          nU,
          "ko",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "문자", verb: "to have" },
                  file: { unit: "바이트", verb: "to have" },
                  array: { unit: "개", verb: "to have" },
                  set: { unit: "개", verb: "to have" },
                }),
                (t = {
                  regex: "입력",
                  email: "이메일 주소",
                  url: "URL",
                  emoji: "이모지",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO 날짜시간",
                  date: "ISO 날짜",
                  time: "ISO 시간",
                  duration: "ISO 기간",
                  ipv4: "IPv4 주소",
                  ipv6: "IPv6 주소",
                  cidrv4: "IPv4 범위",
                  cidrv6: "IPv6 범위",
                  base64: "base64 인코딩 문자열",
                  base64url: "base64url 인코딩 문자열",
                  json_string: "JSON 문자열",
                  e164: "E.164 번호",
                  jwt: "JWT",
                  template_literal: "입력",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `잘못된 입력: 예상 타입은 instanceof ${n.expected}, 받은 타입은 ${r}입니다`;
                      return `잘못된 입력: 예상 타입은 ${e}, 받은 타입은 ${r}입니다`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `잘못된 입력: 값은 ${F(
                          n.values[0]
                        )} 이어야 합니다`;
                      return `잘못된 옵션: ${f(
                        n.values,
                        "또는 "
                      )} 중 하나여야 합니다`;
                    case "too_big": {
                      let t = n.inclusive ? "이하" : "미만",
                        i = "미만" === t ? "이어야 합니다" : "여야 합니다",
                        r = e[n.origin] ?? null,
                        a = r?.unit ?? "요소";
                      if (r)
                        return `${
                          n.origin ?? "값"
                        }이 너무 큽니다: ${n.maximum.toString()}${a} ${t}${i}`;
                      return `${
                        n.origin ?? "값"
                      }이 너무 큽니다: ${n.maximum.toString()} ${t}${i}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? "이상" : "초과",
                        i = "이상" === t ? "이어야 합니다" : "여야 합니다",
                        r = e[n.origin] ?? null,
                        a = r?.unit ?? "요소";
                      if (r)
                        return `${
                          n.origin ?? "값"
                        }이 너무 작습니다: ${n.minimum.toString()}${a} ${t}${i}`;
                      return `${
                        n.origin ?? "값"
                      }이 너무 작습니다: ${n.minimum.toString()} ${t}${i}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `잘못된 문자열: "${n.prefix}"(으)로 시작해야 합니다`;
                      if ("ends_with" === n.format)
                        return `잘못된 문자열: "${n.suffix}"(으)로 끝나야 합니다`;
                      if ("includes" === n.format)
                        return `잘못된 문자열: "${n.includes}"을(를) 포함해야 합니다`;
                      if ("regex" === n.format)
                        return `잘못된 문자열: 정규식 ${n.pattern} 패턴과 일치해야 합니다`;
                      return `잘못된 ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
                    case "unrecognized_keys":
                      return `인식할 수 없는 키: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `잘못된 키: ${n.origin}`;
                    case "invalid_union":
                    default:
                      return `잘못된 입력`;
                    case "invalid_element":
                      return `잘못된 값: ${n.origin}`;
                  }
                }),
            };
          },
          "lt",
          0,
          function () {
            return {
              localeError: (() => {
                let e = {
                  string: {
                    unit: {
                      one: "simbolis",
                      few: "simboliai",
                      many: "simbolių",
                    },
                    verb: {
                      smaller: {
                        inclusive: "turi būti ne ilgesnė kaip",
                        notInclusive: "turi būti trumpesnė kaip",
                      },
                      bigger: {
                        inclusive: "turi būti ne trumpesnė kaip",
                        notInclusive: "turi būti ilgesnė kaip",
                      },
                    },
                  },
                  file: {
                    unit: { one: "baitas", few: "baitai", many: "baitų" },
                    verb: {
                      smaller: {
                        inclusive: "turi būti ne didesnis kaip",
                        notInclusive: "turi būti mažesnis kaip",
                      },
                      bigger: {
                        inclusive: "turi būti ne mažesnis kaip",
                        notInclusive: "turi būti didesnis kaip",
                      },
                    },
                  },
                  array: {
                    unit: {
                      one: "elementą",
                      few: "elementus",
                      many: "elementų",
                    },
                    verb: {
                      smaller: {
                        inclusive: "turi turėti ne daugiau kaip",
                        notInclusive: "turi turėti mažiau kaip",
                      },
                      bigger: {
                        inclusive: "turi turėti ne mažiau kaip",
                        notInclusive: "turi turėti daugiau kaip",
                      },
                    },
                  },
                  set: {
                    unit: {
                      one: "elementą",
                      few: "elementus",
                      many: "elementų",
                    },
                    verb: {
                      smaller: {
                        inclusive: "turi turėti ne daugiau kaip",
                        notInclusive: "turi turėti mažiau kaip",
                      },
                      bigger: {
                        inclusive: "turi turėti ne mažiau kaip",
                        notInclusive: "turi turėti daugiau kaip",
                      },
                    },
                  },
                };
                function t(t, i, n, r) {
                  let a = e[t] ?? null;
                  return null === a
                    ? a
                    : {
                        unit: a.unit[i],
                        verb: a.verb[r][n ? "inclusive" : "notInclusive"],
                      };
                }
                let i = {
                    regex: "įvestis",
                    email: "el. pašto adresas",
                    url: "URL",
                    emoji: "jaustukas",
                    uuid: "UUID",
                    uuidv4: "UUIDv4",
                    uuidv6: "UUIDv6",
                    nanoid: "nanoid",
                    guid: "GUID",
                    cuid: "cuid",
                    cuid2: "cuid2",
                    ulid: "ULID",
                    xid: "XID",
                    ksuid: "KSUID",
                    datetime: "ISO data ir laikas",
                    date: "ISO data",
                    time: "ISO laikas",
                    duration: "ISO trukmė",
                    ipv4: "IPv4 adresas",
                    ipv6: "IPv6 adresas",
                    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
                    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
                    base64: "base64 užkoduota eilutė",
                    base64url: "base64url užkoduota eilutė",
                    json_string: "JSON eilutė",
                    e164: "E.164 numeris",
                    jwt: "JWT",
                    template_literal: "įvestis",
                  },
                  n = {
                    nan: "NaN",
                    number: "skaičius",
                    bigint: "sveikasis skaičius",
                    string: "eilutė",
                    boolean: "loginė reikšmė",
                    undefined: "neapibrėžta reikšmė",
                    function: "funkcija",
                    symbol: "simbolis",
                    array: "masyvas",
                    object: "objektas",
                    null: "nulinė reikšmė",
                  };
                return (e) => {
                  switch (e.code) {
                    case "invalid_type": {
                      let t = n[e.expected] ?? e.expected,
                        i = eo(e.input),
                        r = n[i] ?? i;
                      if (/^[A-Z]/.test(e.expected))
                        return `Gautas tipas ${r}, o tikėtasi - instanceof ${e.expected}`;
                      return `Gautas tipas ${r}, o tikėtasi - ${t}`;
                    }
                    case "invalid_value":
                      if (1 === e.values.length)
                        return `Privalo būti ${F(e.values[0])}`;
                      return `Privalo būti vienas iš ${f(
                        e.values,
                        "|"
                      )} pasirinkimų`;
                    case "too_big": {
                      let i = n[e.origin] ?? e.origin,
                        r = t(
                          e.origin,
                          nP(Number(e.maximum)),
                          e.inclusive ?? !1,
                          "smaller"
                        );
                      if (r?.verb)
                        return `${nO(i ?? e.origin ?? "reikšmė")} ${
                          r.verb
                        } ${e.maximum.toString()} ${r.unit ?? "elementų"}`;
                      let a = e.inclusive
                        ? "ne didesnis kaip"
                        : "mažesnis kaip";
                      return `${nO(
                        i ?? e.origin ?? "reikšmė"
                      )} turi būti ${a} ${e.maximum.toString()} ${r?.unit}`;
                    }
                    case "too_small": {
                      let i = n[e.origin] ?? e.origin,
                        r = t(
                          e.origin,
                          nP(Number(e.minimum)),
                          e.inclusive ?? !1,
                          "bigger"
                        );
                      if (r?.verb)
                        return `${nO(i ?? e.origin ?? "reikšmė")} ${
                          r.verb
                        } ${e.minimum.toString()} ${r.unit ?? "elementų"}`;
                      let a = e.inclusive
                        ? "ne mažesnis kaip"
                        : "didesnis kaip";
                      return `${nO(
                        i ?? e.origin ?? "reikšmė"
                      )} turi būti ${a} ${e.minimum.toString()} ${r?.unit}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === e.format)
                        return `Eilutė privalo prasidėti "${e.prefix}"`;
                      if ("ends_with" === e.format)
                        return `Eilutė privalo pasibaigti "${e.suffix}"`;
                      if ("includes" === e.format)
                        return `Eilutė privalo įtraukti "${e.includes}"`;
                      if ("regex" === e.format)
                        return `Eilutė privalo atitikti ${e.pattern}`;
                      return `Neteisingas ${i[e.format] ?? e.format}`;
                    case "not_multiple_of":
                      return `Skaičius privalo būti ${e.divisor} kartotinis.`;
                    case "unrecognized_keys":
                      return `Neatpažint${e.keys.length > 1 ? "i" : "as"} rakt${
                        e.keys.length > 1 ? "ai" : "as"
                      }: ${f(e.keys, ", ")}`;
                    case "invalid_key":
                      return "Rastas klaidingas raktas";
                    case "invalid_union":
                    default:
                      return "Klaidinga įvestis";
                    case "invalid_element": {
                      let t = n[e.origin] ?? e.origin;
                      return `${nO(
                        t ?? e.origin ?? "reikšmė"
                      )} turi klaidingą įvestį`;
                    }
                  }
                };
              })(),
            };
          },
          "mk",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "знаци", verb: "да имаат" },
                  file: { unit: "бајти", verb: "да имаат" },
                  array: { unit: "ставки", verb: "да имаат" },
                  set: { unit: "ставки", verb: "да имаат" },
                }),
                (t = {
                  regex: "внес",
                  email: "адреса на е-пошта",
                  url: "URL",
                  emoji: "емоџи",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO датум и време",
                  date: "ISO датум",
                  time: "ISO време",
                  duration: "ISO времетраење",
                  ipv4: "IPv4 адреса",
                  ipv6: "IPv6 адреса",
                  cidrv4: "IPv4 опсег",
                  cidrv6: "IPv6 опсег",
                  base64: "base64-енкодирана низа",
                  base64url: "base64url-енкодирана низа",
                  json_string: "JSON низа",
                  e164: "E.164 број",
                  jwt: "JWT",
                  template_literal: "внес",
                }),
                (i = { nan: "NaN", number: "број", array: "низа" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Грешен внес: се очекува instanceof ${n.expected}, примено ${r}`;
                      return `Грешен внес: се очекува ${e}, примено ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Invalid input: expected ${F(n.values[0])}`;
                      return `Грешана опција: се очекува една ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Премногу голем: се очекува ${
                          n.origin ?? "вредноста"
                        } да има ${t}${n.maximum.toString()} ${
                          i.unit ?? "елементи"
                        }`;
                      return `Премногу голем: се очекува ${
                        n.origin ?? "вредноста"
                      } да биде ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Премногу мал: се очекува ${
                          n.origin
                        } да има ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Премногу мал: се очекува ${
                        n.origin
                      } да биде ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Неважечка низа: мора да започнува со "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Неважечка низа: мора да завршува со "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Неважечка низа: мора да вклучува "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Неважечка низа: мора да одгоара на патернот ${n.pattern}`;
                      return `Invalid ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Грешен број: мора да биде делив со ${n.divisor}`;
                    case "unrecognized_keys":
                      return `${
                        n.keys.length > 1
                          ? "Непрепознаени клучеви"
                          : "Непрепознаен клуч"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Грешен клуч во ${n.origin}`;
                    case "invalid_union":
                      return "Грешен внес";
                    case "invalid_element":
                      return `Грешна вредност во ${n.origin}`;
                    default:
                      return `Грешен внес`;
                  }
                }),
            };
          },
          "ms",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "aksara", verb: "mempunyai" },
                  file: { unit: "bait", verb: "mempunyai" },
                  array: { unit: "elemen", verb: "mempunyai" },
                  set: { unit: "elemen", verb: "mempunyai" },
                }),
                (t = {
                  regex: "input",
                  email: "alamat e-mel",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "tarikh masa ISO",
                  date: "tarikh ISO",
                  time: "masa ISO",
                  duration: "tempoh ISO",
                  ipv4: "alamat IPv4",
                  ipv6: "alamat IPv6",
                  cidrv4: "julat IPv4",
                  cidrv6: "julat IPv6",
                  base64: "string dikodkan base64",
                  base64url: "string dikodkan base64url",
                  json_string: "string JSON",
                  e164: "nombor E.164",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = { nan: "NaN", number: "nombor" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Input tidak sah: dijangka instanceof ${n.expected}, diterima ${r}`;
                      return `Input tidak sah: dijangka ${e}, diterima ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Input tidak sah: dijangka ${F(n.values[0])}`;
                      return `Pilihan tidak sah: dijangka salah satu daripada ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Terlalu besar: dijangka ${
                          n.origin ?? "nilai"
                        } ${i.verb} ${t}${n.maximum.toString()} ${
                          i.unit ?? "elemen"
                        }`;
                      return `Terlalu besar: dijangka ${
                        n.origin ?? "nilai"
                      } adalah ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Terlalu kecil: dijangka ${n.origin} ${
                          i.verb
                        } ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Terlalu kecil: dijangka ${
                        n.origin
                      } adalah ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `String tidak sah: mesti bermula dengan "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `String tidak sah: mesti berakhir dengan "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `String tidak sah: mesti mengandungi "${n.includes}"`;
                      if ("regex" === n.format)
                        return `String tidak sah: mesti sepadan dengan corak ${n.pattern}`;
                      return `${t[n.format] ?? n.format} tidak sah`;
                    case "not_multiple_of":
                      return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Kunci tidak dikenali: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Kunci tidak sah dalam ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Input tidak sah";
                    case "invalid_element":
                      return `Nilai tidak sah dalam ${n.origin}`;
                  }
                }),
            };
          },
          "nl",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "tekens", verb: "heeft" },
                  file: { unit: "bytes", verb: "heeft" },
                  array: { unit: "elementen", verb: "heeft" },
                  set: { unit: "elementen", verb: "heeft" },
                }),
                (t = {
                  regex: "invoer",
                  email: "emailadres",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO datum en tijd",
                  date: "ISO datum",
                  time: "ISO tijd",
                  duration: "ISO duur",
                  ipv4: "IPv4-adres",
                  ipv6: "IPv6-adres",
                  cidrv4: "IPv4-bereik",
                  cidrv6: "IPv6-bereik",
                  base64: "base64-gecodeerde tekst",
                  base64url: "base64 URL-gecodeerde tekst",
                  json_string: "JSON string",
                  e164: "E.164-nummer",
                  jwt: "JWT",
                  template_literal: "invoer",
                }),
                (i = { nan: "NaN", number: "getal" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Ongeldige invoer: verwacht instanceof ${n.expected}, ontving ${r}`;
                      return `Ongeldige invoer: verwacht ${e}, ontving ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Ongeldige invoer: verwacht ${F(n.values[0])}`;
                      return `Ongeldige optie: verwacht \xe9\xe9n van ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null,
                        r =
                          "date" === n.origin
                            ? "laat"
                            : "string" === n.origin
                            ? "lang"
                            : "groot";
                      if (i)
                        return `Te ${r}: verwacht dat ${
                          n.origin ?? "waarde"
                        } ${t}${n.maximum.toString()} ${
                          i.unit ?? "elementen"
                        } ${i.verb}`;
                      return `Te ${r}: verwacht dat ${
                        n.origin ?? "waarde"
                      } ${t}${n.maximum.toString()} is`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null,
                        r =
                          "date" === n.origin
                            ? "vroeg"
                            : "string" === n.origin
                            ? "kort"
                            : "klein";
                      if (i)
                        return `Te ${r}: verwacht dat ${
                          n.origin
                        } ${t}${n.minimum.toString()} ${i.unit} ${i.verb}`;
                      return `Te ${r}: verwacht dat ${
                        n.origin
                      } ${t}${n.minimum.toString()} is`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Ongeldige tekst: moet met "${n.prefix}" beginnen`;
                      if ("ends_with" === n.format)
                        return `Ongeldige tekst: moet op "${n.suffix}" eindigen`;
                      if ("includes" === n.format)
                        return `Ongeldige tekst: moet "${n.includes}" bevatten`;
                      if ("regex" === n.format)
                        return `Ongeldige tekst: moet overeenkomen met patroon ${n.pattern}`;
                      return `Ongeldig: ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
                    case "unrecognized_keys":
                      return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Ongeldige key in ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Ongeldige invoer";
                    case "invalid_element":
                      return `Ongeldige waarde in ${n.origin}`;
                  }
                }),
            };
          },
          "no",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "tegn", verb: "å ha" },
                  file: { unit: "bytes", verb: "å ha" },
                  array: { unit: "elementer", verb: "å inneholde" },
                  set: { unit: "elementer", verb: "å inneholde" },
                }),
                (t = {
                  regex: "input",
                  email: "e-postadresse",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO dato- og klokkeslett",
                  date: "ISO-dato",
                  time: "ISO-klokkeslett",
                  duration: "ISO-varighet",
                  ipv4: "IPv4-område",
                  ipv6: "IPv6-område",
                  cidrv4: "IPv4-spekter",
                  cidrv6: "IPv6-spekter",
                  base64: "base64-enkodet streng",
                  base64url: "base64url-enkodet streng",
                  json_string: "JSON-streng",
                  e164: "E.164-nummer",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = { nan: "NaN", number: "tall", array: "liste" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Ugyldig input: forventet instanceof ${n.expected}, fikk ${r}`;
                      return `Ugyldig input: forventet ${e}, fikk ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Ugyldig verdi: forventet ${F(n.values[0])}`;
                      return `Ugyldig valg: forventet en av ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `For stor(t): forventet ${
                          n.origin ?? "value"
                        } til \xe5 ha ${t}${n.maximum.toString()} ${
                          i.unit ?? "elementer"
                        }`;
                      return `For stor(t): forventet ${
                        n.origin ?? "value"
                      } til \xe5 ha ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `For lite(n): forventet ${
                          n.origin
                        } til \xe5 ha ${t}${n.minimum.toString()} ${i.unit}`;
                      return `For lite(n): forventet ${
                        n.origin
                      } til \xe5 ha ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Ugyldig streng: m\xe5 starte med "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Ugyldig streng: m\xe5 ende med "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Ugyldig streng: m\xe5 inneholde "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${n.pattern}`;
                      return `Ugyldig ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${n.divisor}`;
                    case "unrecognized_keys":
                      return `${
                        n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Ugyldig n\xf8kkel i ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Ugyldig input";
                    case "invalid_element":
                      return `Ugyldig verdi i ${n.origin}`;
                  }
                }),
            };
          },
          "ota",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "harf", verb: "olmalıdır" },
                  file: { unit: "bayt", verb: "olmalıdır" },
                  array: { unit: "unsur", verb: "olmalıdır" },
                  set: { unit: "unsur", verb: "olmalıdır" },
                }),
                (t = {
                  regex: "giren",
                  email: "epostagâh",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO hengâmı",
                  date: "ISO tarihi",
                  time: "ISO zamanı",
                  duration: "ISO müddeti",
                  ipv4: "IPv4 nişânı",
                  ipv6: "IPv6 nişânı",
                  cidrv4: "IPv4 menzili",
                  cidrv6: "IPv6 menzili",
                  base64: "base64-şifreli metin",
                  base64url: "base64url-şifreli metin",
                  json_string: "JSON metin",
                  e164: "E.164 sayısı",
                  jwt: "JWT",
                  template_literal: "giren",
                }),
                (i = {
                  nan: "NaN",
                  number: "numara",
                  array: "saf",
                  null: "gayb",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `F\xe2sit giren: umulan instanceof ${n.expected}, alınan ${r}`;
                      return `F\xe2sit giren: umulan ${e}, alınan ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `F\xe2sit giren: umulan ${F(n.values[0])}`;
                      return `F\xe2sit tercih: m\xfbteberler ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Fazla b\xfcy\xfck: ${
                          n.origin ?? "value"
                        }, ${t}${n.maximum.toString()} ${
                          i.unit ?? "elements"
                        } sahip olmalıydı.`;
                      return `Fazla b\xfcy\xfck: ${
                        n.origin ?? "value"
                      }, ${t}${n.maximum.toString()} olmalıydı.`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Fazla k\xfc\xe7\xfck: ${
                          n.origin
                        }, ${t}${n.minimum.toString()} ${
                          i.unit
                        } sahip olmalıydı.`;
                      return `Fazla k\xfc\xe7\xfck: ${
                        n.origin
                      }, ${t}${n.minimum.toString()} olmalıydı.`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `F\xe2sit metin: "${n.prefix}" ile başlamalı.`;
                      if ("ends_with" === n.format)
                        return `F\xe2sit metin: "${n.suffix}" ile bitmeli.`;
                      if ("includes" === n.format)
                        return `F\xe2sit metin: "${n.includes}" ihtiv\xe2 etmeli.`;
                      if ("regex" === n.format)
                        return `F\xe2sit metin: ${n.pattern} nakşına uymalı.`;
                      return `F\xe2sit ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `F\xe2sit sayı: ${n.divisor} katı olmalıydı.`;
                    case "unrecognized_keys":
                      return `Tanınmayan anahtar ${
                        n.keys.length > 1 ? "s" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `${n.origin} i\xe7in tanınmayan anahtar var.`;
                    case "invalid_union":
                      return "Giren tanınamadı.";
                    case "invalid_element":
                      return `${n.origin} i\xe7in tanınmayan kıymet var.`;
                    default:
                      return `Kıymet tanınamadı.`;
                  }
                }),
            };
          },
          "pl",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "znaków", verb: "mieć" },
                  file: { unit: "bajtów", verb: "mieć" },
                  array: { unit: "elementów", verb: "mieć" },
                  set: { unit: "elementów", verb: "mieć" },
                }),
                (t = {
                  regex: "wyrażenie",
                  email: "adres email",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "data i godzina w formacie ISO",
                  date: "data w formacie ISO",
                  time: "godzina w formacie ISO",
                  duration: "czas trwania ISO",
                  ipv4: "adres IPv4",
                  ipv6: "adres IPv6",
                  cidrv4: "zakres IPv4",
                  cidrv6: "zakres IPv6",
                  base64: "ciąg znaków zakodowany w formacie base64",
                  base64url: "ciąg znaków zakodowany w formacie base64url",
                  json_string: "ciąg znaków w formacie JSON",
                  e164: "liczba E.164",
                  jwt: "JWT",
                  template_literal: "wejście",
                }),
                (i = { nan: "NaN", number: "liczba", array: "tablica" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${n.expected}, otrzymano ${r}`;
                      return `Nieprawidłowe dane wejściowe: oczekiwano ${e}, otrzymano ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Nieprawidłowe dane wejściowe: oczekiwano ${F(
                          n.values[0]
                        )}`;
                      return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Za duża wartość: oczekiwano, że ${
                          n.origin ?? "wartość"
                        } będzie mieć ${t}${n.maximum.toString()} ${
                          i.unit ?? "elementów"
                        }`;
                      return `Zbyt duż(y/a/e): oczekiwano, że ${
                        n.origin ?? "wartość"
                      } będzie wynosić ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Za mała wartość: oczekiwano, że ${
                          n.origin ?? "wartość"
                        } będzie mieć ${t}${n.minimum.toString()} ${
                          i.unit ?? "elementów"
                        }`;
                      return `Zbyt mał(y/a/e): oczekiwano, że ${
                        n.origin ?? "wartość"
                      } będzie wynosić ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${n.pattern}`;
                      return `Nieprawidłow(y/a/e) ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Nierozpoznane klucze${
                        n.keys.length > 1 ? "s" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Nieprawidłowy klucz w ${n.origin}`;
                    case "invalid_union":
                      return "Nieprawidłowe dane wejściowe";
                    case "invalid_element":
                      return `Nieprawidłowa wartość w ${n.origin}`;
                    default:
                      return `Nieprawidłowe dane wejściowe`;
                  }
                }),
            };
          },
          "ps",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "توکي", verb: "ولري" },
                  file: { unit: "بایټس", verb: "ولري" },
                  array: { unit: "توکي", verb: "ولري" },
                  set: { unit: "توکي", verb: "ولري" },
                }),
                (t = {
                  regex: "ورودي",
                  email: "بریښنالیک",
                  url: "یو آر ال",
                  emoji: "ایموجي",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "نیټه او وخت",
                  date: "نېټه",
                  time: "وخت",
                  duration: "موده",
                  ipv4: "د IPv4 پته",
                  ipv6: "د IPv6 پته",
                  cidrv4: "د IPv4 ساحه",
                  cidrv6: "د IPv6 ساحه",
                  base64: "base64-encoded متن",
                  base64url: "base64url-encoded متن",
                  json_string: "JSON متن",
                  e164: "د E.164 شمېره",
                  jwt: "JWT",
                  template_literal: "ورودي",
                }),
                (i = { nan: "NaN", number: "عدد", array: "ارې" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `ناسم ورودي: باید instanceof ${n.expected} وای, مګر ${r} ترلاسه شو`;
                      return `ناسم ورودي: باید ${e} وای, مګر ${r} ترلاسه شو`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `ناسم ورودي: باید ${F(n.values[0])} وای`;
                      return `ناسم انتخاب: باید یو له ${f(
                        n.values,
                        "|"
                      )} څخه وای`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `ډیر لوی: ${
                          n.origin ?? "ارزښت"
                        } باید ${t}${n.maximum.toString()} ${
                          i.unit ?? "عنصرونه"
                        } ولري`;
                      return `ډیر لوی: ${
                        n.origin ?? "ارزښت"
                      } باید ${t}${n.maximum.toString()} وي`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `ډیر کوچنی: ${
                          n.origin
                        } باید ${t}${n.minimum.toString()} ${i.unit} ولري`;
                      return `ډیر کوچنی: ${
                        n.origin
                      } باید ${t}${n.minimum.toString()} وي`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `ناسم متن: باید د "${n.prefix}" سره پیل شي`;
                      if ("ends_with" === n.format)
                        return `ناسم متن: باید د "${n.suffix}" سره پای ته ورسيږي`;
                      if ("includes" === n.format)
                        return `ناسم متن: باید "${n.includes}" ولري`;
                      if ("regex" === n.format)
                        return `ناسم متن: باید د ${n.pattern} سره مطابقت ولري`;
                      return `${t[n.format] ?? n.format} ناسم دی`;
                    case "not_multiple_of":
                      return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
                    case "unrecognized_keys":
                      return `ناسم ${
                        n.keys.length > 1 ? "کلیډونه" : "کلیډ"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `ناسم کلیډ په ${n.origin} کې`;
                    case "invalid_union":
                    default:
                      return `ناسمه ورودي`;
                    case "invalid_element":
                      return `ناسم عنصر په ${n.origin} کې`;
                  }
                }),
            };
          },
          "pt",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "caracteres", verb: "ter" },
                  file: { unit: "bytes", verb: "ter" },
                  array: { unit: "itens", verb: "ter" },
                  set: { unit: "itens", verb: "ter" },
                }),
                (t = {
                  regex: "padrão",
                  email: "endereço de e-mail",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "data e hora ISO",
                  date: "data ISO",
                  time: "hora ISO",
                  duration: "duração ISO",
                  ipv4: "endereço IPv4",
                  ipv6: "endereço IPv6",
                  cidrv4: "faixa de IPv4",
                  cidrv6: "faixa de IPv6",
                  base64: "texto codificado em base64",
                  base64url: "URL codificada em base64",
                  json_string: "texto JSON",
                  e164: "número E.164",
                  jwt: "JWT",
                  template_literal: "entrada",
                }),
                (i = { nan: "NaN", number: "número", null: "nulo" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Tipo inv\xe1lido: esperado instanceof ${n.expected}, recebido ${r}`;
                      return `Tipo inv\xe1lido: esperado ${e}, recebido ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Entrada inv\xe1lida: esperado ${F(
                          n.values[0]
                        )}`;
                      return `Op\xe7\xe3o inv\xe1lida: esperada uma das ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Muito grande: esperado que ${
                          n.origin ?? "valor"
                        } tivesse ${t}${n.maximum.toString()} ${
                          i.unit ?? "elementos"
                        }`;
                      return `Muito grande: esperado que ${
                        n.origin ?? "valor"
                      } fosse ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Muito pequeno: esperado que ${
                          n.origin
                        } tivesse ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Muito pequeno: esperado que ${
                        n.origin
                      } fosse ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Texto inv\xe1lido: deve come\xe7ar com "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Texto inv\xe1lido: deve terminar com "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Texto inv\xe1lido: deve incluir "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${n.pattern}`;
                      return `${t[n.format] ?? n.format} inv\xe1lido`;
                    case "not_multiple_of":
                      return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Chave${
                        n.keys.length > 1 ? "s" : ""
                      } desconhecida${n.keys.length > 1 ? "s" : ""}: ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Chave inv\xe1lida em ${n.origin}`;
                    case "invalid_union":
                      return "Entrada inválida";
                    case "invalid_element":
                      return `Valor inv\xe1lido em ${n.origin}`;
                    default:
                      return `Campo inv\xe1lido`;
                  }
                }),
            };
          },
          "ru",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: {
                    unit: { one: "символ", few: "символа", many: "символов" },
                    verb: "иметь",
                  },
                  file: {
                    unit: { one: "байт", few: "байта", many: "байт" },
                    verb: "иметь",
                  },
                  array: {
                    unit: {
                      one: "элемент",
                      few: "элемента",
                      many: "элементов",
                    },
                    verb: "иметь",
                  },
                  set: {
                    unit: {
                      one: "элемент",
                      few: "элемента",
                      many: "элементов",
                    },
                    verb: "иметь",
                  },
                }),
                (t = {
                  regex: "ввод",
                  email: "email адрес",
                  url: "URL",
                  emoji: "эмодзи",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO дата и время",
                  date: "ISO дата",
                  time: "ISO время",
                  duration: "ISO длительность",
                  ipv4: "IPv4 адрес",
                  ipv6: "IPv6 адрес",
                  cidrv4: "IPv4 диапазон",
                  cidrv6: "IPv6 диапазон",
                  base64: "строка в формате base64",
                  base64url: "строка в формате base64url",
                  json_string: "JSON строка",
                  e164: "номер E.164",
                  jwt: "JWT",
                  template_literal: "ввод",
                }),
                (i = { nan: "NaN", number: "число", array: "массив" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Неверный ввод: ожидалось instanceof ${n.expected}, получено ${r}`;
                      return `Неверный ввод: ожидалось ${e}, получено ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Неверный ввод: ожидалось ${F(n.values[0])}`;
                      return `Неверный вариант: ожидалось одно из ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i) {
                        let e = nD(
                          Number(n.maximum),
                          i.unit.one,
                          i.unit.few,
                          i.unit.many
                        );
                        return `Слишком большое значение: ожидалось, что ${
                          n.origin ?? "значение"
                        } будет иметь ${t}${n.maximum.toString()} ${e}`;
                      }
                      return `Слишком большое значение: ожидалось, что ${
                        n.origin ?? "значение"
                      } будет ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i) {
                        let e = nD(
                          Number(n.minimum),
                          i.unit.one,
                          i.unit.few,
                          i.unit.many
                        );
                        return `Слишком маленькое значение: ожидалось, что ${
                          n.origin
                        } будет иметь ${t}${n.minimum.toString()} ${e}`;
                      }
                      return `Слишком маленькое значение: ожидалось, что ${
                        n.origin
                      } будет ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Неверная строка: должна начинаться с "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Неверная строка: должна заканчиваться на "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Неверная строка: должна содержать "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Неверная строка: должна соответствовать шаблону ${n.pattern}`;
                      return `Неверный ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Неверное число: должно быть кратным ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Нераспознанн${
                        n.keys.length > 1 ? "ые" : "ый"
                      } ключ${n.keys.length > 1 ? "и" : ""}: ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Неверный ключ в ${n.origin}`;
                    case "invalid_union":
                      return "Неверные входные данные";
                    case "invalid_element":
                      return `Неверное значение в ${n.origin}`;
                    default:
                      return `Неверные входные данные`;
                  }
                }),
            };
          },
          "sl",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "znakov", verb: "imeti" },
                  file: { unit: "bajtov", verb: "imeti" },
                  array: { unit: "elementov", verb: "imeti" },
                  set: { unit: "elementov", verb: "imeti" },
                }),
                (t = {
                  regex: "vnos",
                  email: "e-poštni naslov",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO datum in čas",
                  date: "ISO datum",
                  time: "ISO čas",
                  duration: "ISO trajanje",
                  ipv4: "IPv4 naslov",
                  ipv6: "IPv6 naslov",
                  cidrv4: "obseg IPv4",
                  cidrv6: "obseg IPv6",
                  base64: "base64 kodiran niz",
                  base64url: "base64url kodiran niz",
                  json_string: "JSON niz",
                  e164: "E.164 številka",
                  jwt: "JWT",
                  template_literal: "vnos",
                }),
                (i = { nan: "NaN", number: "število", array: "tabela" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Neveljaven vnos: pričakovano instanceof ${n.expected}, prejeto ${r}`;
                      return `Neveljaven vnos: pričakovano ${e}, prejeto ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Neveljaven vnos: pričakovano ${F(n.values[0])}`;
                      return `Neveljavna možnost: pričakovano eno izmed ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Preveliko: pričakovano, da bo ${
                          n.origin ?? "vrednost"
                        } imelo ${t}${n.maximum.toString()} ${
                          i.unit ?? "elementov"
                        }`;
                      return `Preveliko: pričakovano, da bo ${
                        n.origin ?? "vrednost"
                      } ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Premajhno: pričakovano, da bo ${
                          n.origin
                        } imelo ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Premajhno: pričakovano, da bo ${
                        n.origin
                      } ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Neveljaven niz: mora se začeti z "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Neveljaven niz: mora se končati z "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Neveljaven niz: mora vsebovati "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Neveljaven niz: mora ustrezati vzorcu ${n.pattern}`;
                      return `Neveljaven ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Neprepoznan${
                        n.keys.length > 1 ? "i ključi" : " ključ"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Neveljaven ključ v ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Neveljaven vnos";
                    case "invalid_element":
                      return `Neveljavna vrednost v ${n.origin}`;
                  }
                }),
            };
          },
          "sv",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "tecken", verb: "att ha" },
                  file: { unit: "bytes", verb: "att ha" },
                  array: { unit: "objekt", verb: "att innehålla" },
                  set: { unit: "objekt", verb: "att innehålla" },
                }),
                (t = {
                  regex: "reguljärt uttryck",
                  email: "e-postadress",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO-datum och tid",
                  date: "ISO-datum",
                  time: "ISO-tid",
                  duration: "ISO-varaktighet",
                  ipv4: "IPv4-intervall",
                  ipv6: "IPv6-intervall",
                  cidrv4: "IPv4-spektrum",
                  cidrv6: "IPv6-spektrum",
                  base64: "base64-kodad sträng",
                  base64url: "base64url-kodad sträng",
                  json_string: "JSON-sträng",
                  e164: "E.164-nummer",
                  jwt: "JWT",
                  template_literal: "mall-literal",
                }),
                (i = { nan: "NaN", number: "antal", array: "lista" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Ogiltig inmatning: f\xf6rv\xe4ntat instanceof ${n.expected}, fick ${r}`;
                      return `Ogiltig inmatning: f\xf6rv\xe4ntat ${e}, fick ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Ogiltig inmatning: f\xf6rv\xe4ntat ${F(
                          n.values[0]
                        )}`;
                      return `Ogiltigt val: f\xf6rv\xe4ntade en av ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `F\xf6r stor(t): f\xf6rv\xe4ntade ${
                          n.origin ?? "värdet"
                        } att ha ${t}${n.maximum.toString()} ${
                          i.unit ?? "element"
                        }`;
                      return `F\xf6r stor(t): f\xf6rv\xe4ntat ${
                        n.origin ?? "värdet"
                      } att ha ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `F\xf6r lite(t): f\xf6rv\xe4ntade ${
                          n.origin ?? "värdet"
                        } att ha ${t}${n.minimum.toString()} ${i.unit}`;
                      return `F\xf6r lite(t): f\xf6rv\xe4ntade ${
                        n.origin ?? "värdet"
                      } att ha ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Ogiltig str\xe4ng: m\xe5ste sluta med "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${n.pattern}"`;
                      return `Ogiltig(t) ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Ogiltigt tal: m\xe5ste vara en multipel av ${n.divisor}`;
                    case "unrecognized_keys":
                      return `${
                        n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Ogiltig nyckel i ${n.origin ?? "värdet"}`;
                    case "invalid_union":
                    default:
                      return "Ogiltig input";
                    case "invalid_element":
                      return `Ogiltigt v\xe4rde i ${n.origin ?? "värdet"}`;
                  }
                }),
            };
          },
          "ta",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: {
                    unit: "எழுத்துக்கள்",
                    verb: "கொண்டிருக்க வேண்டும்",
                  },
                  file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
                  array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
                  set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
                }),
                (t = {
                  regex: "உள்ளீடு",
                  email: "மின்னஞ்சல் முகவரி",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO தேதி நேரம்",
                  date: "ISO தேதி",
                  time: "ISO நேரம்",
                  duration: "ISO கால அளவு",
                  ipv4: "IPv4 முகவரி",
                  ipv6: "IPv6 முகவரி",
                  cidrv4: "IPv4 வரம்பு",
                  cidrv6: "IPv6 வரம்பு",
                  base64: "base64-encoded சரம்",
                  base64url: "base64url-encoded சரம்",
                  json_string: "JSON சரம்",
                  e164: "E.164 எண்",
                  jwt: "JWT",
                  template_literal: "input",
                }),
                (i = {
                  nan: "NaN",
                  number: "எண்",
                  array: "அணி",
                  null: "வெறுமை",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${n.expected}, பெறப்பட்டது ${r}`;
                      return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${e}, பெறப்பட்டது ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${F(
                          n.values[0]
                        )}`;
                      return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${f(
                        n.values,
                        "|"
                      )} இல் ஒன்று`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${
                          n.origin ?? "மதிப்பு"
                        } ${t}${n.maximum.toString()} ${
                          i.unit ?? "உறுப்புகள்"
                        } ஆக இருக்க வேண்டும்`;
                      return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${
                        n.origin ?? "மதிப்பு"
                      } ${t}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${
                          n.origin
                        } ${t}${n.minimum.toString()} ${
                          i.unit
                        } ஆக இருக்க வேண்டும்`;
                      return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${
                        n.origin
                      } ${t}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `தவறான சரம்: "${n.prefix}" இல் தொடங்க வேண்டும்`;
                      if ("ends_with" === n.format)
                        return `தவறான சரம்: "${n.suffix}" இல் முடிவடைய வேண்டும்`;
                      if ("includes" === n.format)
                        return `தவறான சரம்: "${n.includes}" ஐ உள்ளடக்க வேண்டும்`;
                      if ("regex" === n.format)
                        return `தவறான சரம்: ${n.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                      return `தவறான ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
                    case "unrecognized_keys":
                      return `அடையாளம் தெரியாத விசை${
                        n.keys.length > 1 ? "கள்" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `${n.origin} இல் தவறான விசை`;
                    case "invalid_union":
                      return "தவறான உள்ளீடு";
                    case "invalid_element":
                      return `${n.origin} இல் தவறான மதிப்பு`;
                    default:
                      return `தவறான உள்ளீடு`;
                  }
                }),
            };
          },
          "th",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "ตัวอักษร", verb: "ควรมี" },
                  file: { unit: "ไบต์", verb: "ควรมี" },
                  array: { unit: "รายการ", verb: "ควรมี" },
                  set: { unit: "รายการ", verb: "ควรมี" },
                }),
                (t = {
                  regex: "ข้อมูลที่ป้อน",
                  email: "ที่อยู่อีเมล",
                  url: "URL",
                  emoji: "อิโมจิ",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "วันที่เวลาแบบ ISO",
                  date: "วันที่แบบ ISO",
                  time: "เวลาแบบ ISO",
                  duration: "ช่วงเวลาแบบ ISO",
                  ipv4: "ที่อยู่ IPv4",
                  ipv6: "ที่อยู่ IPv6",
                  cidrv4: "ช่วง IP แบบ IPv4",
                  cidrv6: "ช่วง IP แบบ IPv6",
                  base64: "ข้อความแบบ Base64",
                  base64url: "ข้อความแบบ Base64 สำหรับ URL",
                  json_string: "ข้อความแบบ JSON",
                  e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
                  jwt: "โทเคน JWT",
                  template_literal: "ข้อมูลที่ป้อน",
                }),
                (i = {
                  nan: "NaN",
                  number: "ตัวเลข",
                  array: "อาร์เรย์ (Array)",
                  null: "ไม่มีค่า (null)",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${n.expected} แต่ได้รับ ${r}`;
                      return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${e} แต่ได้รับ ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `ค่าไม่ถูกต้อง: ควรเป็น ${F(n.values[0])}`;
                      return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `เกินกำหนด: ${
                          n.origin ?? "ค่า"
                        } ควรมี${t} ${n.maximum.toString()} ${
                          i.unit ?? "รายการ"
                        }`;
                      return `เกินกำหนด: ${
                        n.origin ?? "ค่า"
                      } ควรมี${t} ${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? "อย่างน้อย" : "มากกว่า",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `น้อยกว่ากำหนด: ${
                          n.origin
                        } ควรมี${t} ${n.minimum.toString()} ${i.unit}`;
                      return `น้อยกว่ากำหนด: ${
                        n.origin
                      } ควรมี${t} ${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${n.includes}" อยู่ในข้อความ`;
                      if ("regex" === n.format)
                        return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${n.pattern}`;
                      return `รูปแบบไม่ถูกต้อง: ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
                    case "unrecognized_keys":
                      return `พบคีย์ที่ไม่รู้จัก: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `คีย์ไม่ถูกต้องใน ${n.origin}`;
                    case "invalid_union":
                      return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
                    case "invalid_element":
                      return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
                    default:
                      return `ข้อมูลไม่ถูกต้อง`;
                  }
                }),
            };
          },
          "tr",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "karakter", verb: "olmalı" },
                  file: { unit: "bayt", verb: "olmalı" },
                  array: { unit: "öğe", verb: "olmalı" },
                  set: { unit: "öğe", verb: "olmalı" },
                }),
                (t = {
                  regex: "girdi",
                  email: "e-posta adresi",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO tarih ve saat",
                  date: "ISO tarih",
                  time: "ISO saat",
                  duration: "ISO süre",
                  ipv4: "IPv4 adresi",
                  ipv6: "IPv6 adresi",
                  cidrv4: "IPv4 aralığı",
                  cidrv6: "IPv6 aralığı",
                  base64: "base64 ile şifrelenmiş metin",
                  base64url: "base64url ile şifrelenmiş metin",
                  json_string: "JSON dizesi",
                  e164: "E.164 sayısı",
                  jwt: "JWT",
                  template_literal: "Şablon dizesi",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Ge\xe7ersiz değer: beklenen instanceof ${n.expected}, alınan ${r}`;
                      return `Ge\xe7ersiz değer: beklenen ${e}, alınan ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Ge\xe7ersiz değer: beklenen ${F(n.values[0])}`;
                      return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `\xc7ok b\xfcy\xfck: beklenen ${
                          n.origin ?? "değer"
                        } ${t}${n.maximum.toString()} ${i.unit ?? "öğe"}`;
                      return `\xc7ok b\xfcy\xfck: beklenen ${
                        n.origin ?? "değer"
                      } ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `\xc7ok k\xfc\xe7\xfck: beklenen ${
                          n.origin
                        } ${t}${n.minimum.toString()} ${i.unit}`;
                      return `\xc7ok k\xfc\xe7\xfck: beklenen ${
                        n.origin
                      } ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Ge\xe7ersiz metin: "${n.prefix}" ile başlamalı`;
                      if ("ends_with" === n.format)
                        return `Ge\xe7ersiz metin: "${n.suffix}" ile bitmeli`;
                      if ("includes" === n.format)
                        return `Ge\xe7ersiz metin: "${n.includes}" i\xe7ermeli`;
                      if ("regex" === n.format)
                        return `Ge\xe7ersiz metin: ${n.pattern} desenine uymalı`;
                      return `Ge\xe7ersiz ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Ge\xe7ersiz sayı: ${n.divisor} ile tam b\xf6l\xfcnebilmeli`;
                    case "unrecognized_keys":
                      return `Tanınmayan anahtar${
                        n.keys.length > 1 ? "lar" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `${n.origin} i\xe7inde ge\xe7ersiz anahtar`;
                    case "invalid_union":
                      return "Geçersiz değer";
                    case "invalid_element":
                      return `${n.origin} i\xe7inde ge\xe7ersiz değer`;
                    default:
                      return `Ge\xe7ersiz değer`;
                  }
                }),
            };
          },
          "ua",
          0,
          function () {
            return nE();
          },
          "uk",
          0,
          nE,
          "ur",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "حروف", verb: "ہونا" },
                  file: { unit: "بائٹس", verb: "ہونا" },
                  array: { unit: "آئٹمز", verb: "ہونا" },
                  set: { unit: "آئٹمز", verb: "ہونا" },
                }),
                (t = {
                  regex: "ان پٹ",
                  email: "ای میل ایڈریس",
                  url: "یو آر ایل",
                  emoji: "ایموجی",
                  uuid: "یو یو آئی ڈی",
                  uuidv4: "یو یو آئی ڈی وی 4",
                  uuidv6: "یو یو آئی ڈی وی 6",
                  nanoid: "نینو آئی ڈی",
                  guid: "جی یو آئی ڈی",
                  cuid: "سی یو آئی ڈی",
                  cuid2: "سی یو آئی ڈی 2",
                  ulid: "یو ایل آئی ڈی",
                  xid: "ایکس آئی ڈی",
                  ksuid: "کے ایس یو آئی ڈی",
                  datetime: "آئی ایس او ڈیٹ ٹائم",
                  date: "آئی ایس او تاریخ",
                  time: "آئی ایس او وقت",
                  duration: "آئی ایس او مدت",
                  ipv4: "آئی پی وی 4 ایڈریس",
                  ipv6: "آئی پی وی 6 ایڈریس",
                  cidrv4: "آئی پی وی 4 رینج",
                  cidrv6: "آئی پی وی 6 رینج",
                  base64: "بیس 64 ان کوڈڈ سٹرنگ",
                  base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
                  json_string: "جے ایس او این سٹرنگ",
                  e164: "ای 164 نمبر",
                  jwt: "جے ڈبلیو ٹی",
                  template_literal: "ان پٹ",
                }),
                (i = { nan: "NaN", number: "نمبر", array: "آرے", null: "نل" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `غلط ان پٹ: instanceof ${n.expected} متوقع تھا، ${r} موصول ہوا`;
                      return `غلط ان پٹ: ${e} متوقع تھا، ${r} موصول ہوا`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `غلط ان پٹ: ${F(n.values[0])} متوقع تھا`;
                      return `غلط آپشن: ${f(
                        n.values,
                        "|"
                      )} میں سے ایک متوقع تھا`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `بہت بڑا: ${
                          n.origin ?? "ویلیو"
                        } کے ${t}${n.maximum.toString()} ${
                          i.unit ?? "عناصر"
                        } ہونے متوقع تھے`;
                      return `بہت بڑا: ${
                        n.origin ?? "ویلیو"
                      } کا ${t}${n.maximum.toString()} ہونا متوقع تھا`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `بہت چھوٹا: ${
                          n.origin
                        } کے ${t}${n.minimum.toString()} ${
                          i.unit
                        } ہونے متوقع تھے`;
                      return `بہت چھوٹا: ${
                        n.origin
                      } کا ${t}${n.minimum.toString()} ہونا متوقع تھا`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `غلط سٹرنگ: "${n.prefix}" سے شروع ہونا چاہیے`;
                      if ("ends_with" === n.format)
                        return `غلط سٹرنگ: "${n.suffix}" پر ختم ہونا چاہیے`;
                      if ("includes" === n.format)
                        return `غلط سٹرنگ: "${n.includes}" شامل ہونا چاہیے`;
                      if ("regex" === n.format)
                        return `غلط سٹرنگ: پیٹرن ${n.pattern} سے میچ ہونا چاہیے`;
                      return `غلط ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
                    case "unrecognized_keys":
                      return `غیر تسلیم شدہ کی${
                        n.keys.length > 1 ? "ز" : ""
                      }: ${f(n.keys, "، ")}`;
                    case "invalid_key":
                      return `${n.origin} میں غلط کی`;
                    case "invalid_union":
                      return "غلط ان پٹ";
                    case "invalid_element":
                      return `${n.origin} میں غلط ویلیو`;
                    default:
                      return `غلط ان پٹ`;
                  }
                }),
            };
          },
          "uz",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "belgi", verb: "bo‘lishi kerak" },
                  file: { unit: "bayt", verb: "bo‘lishi kerak" },
                  array: { unit: "element", verb: "bo‘lishi kerak" },
                  set: { unit: "element", verb: "bo‘lishi kerak" },
                }),
                (t = {
                  regex: "kirish",
                  email: "elektron pochta manzili",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO sana va vaqti",
                  date: "ISO sana",
                  time: "ISO vaqt",
                  duration: "ISO davomiylik",
                  ipv4: "IPv4 manzil",
                  ipv6: "IPv6 manzil",
                  mac: "MAC manzil",
                  cidrv4: "IPv4 diapazon",
                  cidrv6: "IPv6 diapazon",
                  base64: "base64 kodlangan satr",
                  base64url: "base64url kodlangan satr",
                  json_string: "JSON satr",
                  e164: "E.164 raqam",
                  jwt: "JWT",
                  template_literal: "kirish",
                }),
                (i = { nan: "NaN", number: "raqam", array: "massiv" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Noto‘g‘ri kirish: kutilgan instanceof ${n.expected}, qabul qilingan ${r}`;
                      return `Noto‘g‘ri kirish: kutilgan ${e}, qabul qilingan ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Noto‘g‘ri kirish: kutilgan ${F(n.values[0])}`;
                      return `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Juda katta: kutilgan ${
                          n.origin ?? "qiymat"
                        } ${t}${n.maximum.toString()} ${i.unit} ${i.verb}`;
                      return `Juda katta: kutilgan ${
                        n.origin ?? "qiymat"
                      } ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Juda kichik: kutilgan ${
                          n.origin
                        } ${t}${n.minimum.toString()} ${i.unit} ${i.verb}`;
                      return `Juda kichik: kutilgan ${
                        n.origin
                      } ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Noto‘g‘ri satr: "${n.prefix}" bilan boshlanishi kerak`;
                      if ("ends_with" === n.format)
                        return `Noto‘g‘ri satr: "${n.suffix}" bilan tugashi kerak`;
                      if ("includes" === n.format)
                        return `Noto‘g‘ri satr: "${n.includes}" ni o‘z ichiga olishi kerak`;
                      if ("regex" === n.format)
                        return `Noto‘g‘ri satr: ${n.pattern} shabloniga mos kelishi kerak`;
                      return `Noto‘g‘ri ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Noto‘g‘ri raqam: ${n.divisor} ning karralisi bo‘lishi kerak`;
                    case "unrecognized_keys":
                      return `Noma’lum kalit${
                        n.keys.length > 1 ? "lar" : ""
                      }: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `${n.origin} dagi kalit noto‘g‘ri`;
                    case "invalid_union":
                      return "Noto‘g‘ri kirish";
                    case "invalid_element":
                      return `${n.origin} da noto‘g‘ri qiymat`;
                    default:
                      return `Noto‘g‘ri kirish`;
                  }
                }),
            };
          },
          "vi",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "ký tự", verb: "có" },
                  file: { unit: "byte", verb: "có" },
                  array: { unit: "phần tử", verb: "có" },
                  set: { unit: "phần tử", verb: "có" },
                }),
                (t = {
                  regex: "đầu vào",
                  email: "địa chỉ email",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ngày giờ ISO",
                  date: "ngày ISO",
                  time: "giờ ISO",
                  duration: "khoảng thời gian ISO",
                  ipv4: "địa chỉ IPv4",
                  ipv6: "địa chỉ IPv6",
                  cidrv4: "dải IPv4",
                  cidrv6: "dải IPv6",
                  base64: "chuỗi mã hóa base64",
                  base64url: "chuỗi mã hóa base64url",
                  json_string: "chuỗi JSON",
                  e164: "số E.164",
                  jwt: "JWT",
                  template_literal: "đầu vào",
                }),
                (i = { nan: "NaN", number: "số", array: "mảng" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi instanceof ${n.expected}, nhận được ${r}`;
                      return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${e}, nhận được ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${F(
                          n.values[0]
                        )}`;
                      return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Qu\xe1 lớn: mong đợi ${n.origin ?? "giá trị"} ${
                          i.verb
                        } ${t}${n.maximum.toString()} ${i.unit ?? "phần tử"}`;
                      return `Qu\xe1 lớn: mong đợi ${
                        n.origin ?? "giá trị"
                      } ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `Qu\xe1 nhỏ: mong đợi ${n.origin} ${
                          i.verb
                        } ${t}${n.minimum.toString()} ${i.unit}`;
                      return `Qu\xe1 nhỏ: mong đợi ${
                        n.origin
                      } ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${n.pattern}`;
                      return `${t[n.format] ?? n.format} kh\xf4ng hợp lệ`;
                    case "not_multiple_of":
                      return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Kh\xf3a kh\xf4ng được nhận dạng: ${f(
                        n.keys,
                        ", "
                      )}`;
                    case "invalid_key":
                      return `Kh\xf3a kh\xf4ng hợp lệ trong ${n.origin}`;
                    case "invalid_union":
                      return "Đầu vào không hợp lệ";
                    case "invalid_element":
                      return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${n.origin}`;
                    default:
                      return `Đầu v\xe0o kh\xf4ng hợp lệ`;
                  }
                }),
            };
          },
          "yo",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "àmi", verb: "ní" },
                  file: { unit: "bytes", verb: "ní" },
                  array: { unit: "nkan", verb: "ní" },
                  set: { unit: "nkan", verb: "ní" },
                }),
                (t = {
                  regex: "ẹ̀rọ ìbáwọlé",
                  email: "àdírẹ́sì ìmẹ́lì",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "àkókò ISO",
                  date: "ọjọ́ ISO",
                  time: "àkókò ISO",
                  duration: "àkókò tó pé ISO",
                  ipv4: "àdírẹ́sì IPv4",
                  ipv6: "àdírẹ́sì IPv6",
                  cidrv4: "àgbègbè IPv4",
                  cidrv6: "àgbègbè IPv6",
                  base64: "ọ̀rọ̀ tí a kọ́ ní base64",
                  base64url: "ọ̀rọ̀ base64url",
                  json_string: "ọ̀rọ̀ JSON",
                  e164: "nọ́mbà E.164",
                  jwt: "JWT",
                  template_literal: "ẹ̀rọ ìbáwọlé",
                }),
                (i = { nan: "NaN", number: "nọ́mbà", array: "akopọ" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi instanceof ${n.expected}, \xe0mọ̀ a r\xed ${r}`;
                      return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${e}, \xe0mọ̀ a r\xed ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${F(
                          n.values[0]
                        )}`;
                      return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${
                          n.origin ?? "iye"
                        } ${i.verb} ${t}${n.maximum} ${i.unit}`;
                      return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${t}${n.maximum}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${n.origin} ${i.verb} ${t}${n.minimum} ${i.unit}`;
                      return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${t}${n.minimum}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${n.prefix}"`;
                      if ("ends_with" === n.format)
                        return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${n.suffix}"`;
                      if ("includes" === n.format)
                        return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${n.includes}"`;
                      if ("regex" === n.format)
                        return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${n.pattern}`;
                      return `Aṣ\xecṣe: ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${n.divisor}`;
                    case "unrecognized_keys":
                      return `Bọt\xecn\xec \xe0\xecmọ̀: ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${n.origin}`;
                    case "invalid_union":
                    default:
                      return "Ìbáwọlé aṣìṣe";
                    case "invalid_element":
                      return `Iye aṣ\xecṣe n\xedn\xfa ${n.origin}`;
                  }
                }),
            };
          },
          "zhCN",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "字符", verb: "包含" },
                  file: { unit: "字节", verb: "包含" },
                  array: { unit: "项", verb: "包含" },
                  set: { unit: "项", verb: "包含" },
                }),
                (t = {
                  regex: "输入",
                  email: "电子邮件",
                  url: "URL",
                  emoji: "表情符号",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO日期时间",
                  date: "ISO日期",
                  time: "ISO时间",
                  duration: "ISO时长",
                  ipv4: "IPv4地址",
                  ipv6: "IPv6地址",
                  cidrv4: "IPv4网段",
                  cidrv6: "IPv6网段",
                  base64: "base64编码字符串",
                  base64url: "base64url编码字符串",
                  json_string: "JSON字符串",
                  e164: "E.164号码",
                  jwt: "JWT",
                  template_literal: "输入",
                }),
                (i = {
                  nan: "NaN",
                  number: "数字",
                  array: "数组",
                  null: "空值(null)",
                }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `无效输入：期望 instanceof ${n.expected}，实际接收 ${r}`;
                      return `无效输入：期望 ${e}，实际接收 ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `无效输入：期望 ${F(n.values[0])}`;
                      return `无效选项：期望以下之一 ${f(n.values, "|")}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `数值过大：期望 ${
                          n.origin ?? "值"
                        } ${t}${n.maximum.toString()} ${i.unit ?? "个元素"}`;
                      return `数值过大：期望 ${
                        n.origin ?? "值"
                      } ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `数值过小：期望 ${
                          n.origin
                        } ${t}${n.minimum.toString()} ${i.unit}`;
                      return `数值过小：期望 ${
                        n.origin
                      } ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `无效字符串：必须以 "${n.prefix}" 开头`;
                      if ("ends_with" === n.format)
                        return `无效字符串：必须以 "${n.suffix}" 结尾`;
                      if ("includes" === n.format)
                        return `无效字符串：必须包含 "${n.includes}"`;
                      if ("regex" === n.format)
                        return `无效字符串：必须满足正则表达式 ${n.pattern}`;
                      return `无效${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `无效数字：必须是 ${n.divisor} 的倍数`;
                    case "unrecognized_keys":
                      return `出现未知的键(key): ${f(n.keys, ", ")}`;
                    case "invalid_key":
                      return `${n.origin} 中的键(key)无效`;
                    case "invalid_union":
                      return "无效输入";
                    case "invalid_element":
                      return `${n.origin} 中包含无效值(value)`;
                    default:
                      return `无效输入`;
                  }
                }),
            };
          },
          "zhTW",
          0,
          function () {
            let e, t, i;
            return {
              localeError:
                ((e = {
                  string: { unit: "字元", verb: "擁有" },
                  file: { unit: "位元組", verb: "擁有" },
                  array: { unit: "項目", verb: "擁有" },
                  set: { unit: "項目", verb: "擁有" },
                }),
                (t = {
                  regex: "輸入",
                  email: "郵件地址",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO 日期時間",
                  date: "ISO 日期",
                  time: "ISO 時間",
                  duration: "ISO 期間",
                  ipv4: "IPv4 位址",
                  ipv6: "IPv6 位址",
                  cidrv4: "IPv4 範圍",
                  cidrv6: "IPv6 範圍",
                  base64: "base64 編碼字串",
                  base64url: "base64url 編碼字串",
                  json_string: "JSON 字串",
                  e164: "E.164 數值",
                  jwt: "JWT",
                  template_literal: "輸入",
                }),
                (i = { nan: "NaN" }),
                (n) => {
                  switch (n.code) {
                    case "invalid_type": {
                      let e = i[n.expected] ?? n.expected,
                        t = eo(n.input),
                        r = i[t] ?? t;
                      if (/^[A-Z]/.test(n.expected))
                        return `無效的輸入值：預期為 instanceof ${n.expected}，但收到 ${r}`;
                      return `無效的輸入值：預期為 ${e}，但收到 ${r}`;
                    }
                    case "invalid_value":
                      if (1 === n.values.length)
                        return `無效的輸入值：預期為 ${F(n.values[0])}`;
                      return `無效的選項：預期為以下其中之一 ${f(
                        n.values,
                        "|"
                      )}`;
                    case "too_big": {
                      let t = n.inclusive ? "<=" : "<",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `數值過大：預期 ${
                          n.origin ?? "值"
                        } 應為 ${t}${n.maximum.toString()} ${
                          i.unit ?? "個元素"
                        }`;
                      return `數值過大：預期 ${
                        n.origin ?? "值"
                      } 應為 ${t}${n.maximum.toString()}`;
                    }
                    case "too_small": {
                      let t = n.inclusive ? ">=" : ">",
                        i = e[n.origin] ?? null;
                      if (i)
                        return `數值過小：預期 ${
                          n.origin
                        } 應為 ${t}${n.minimum.toString()} ${i.unit}`;
                      return `數值過小：預期 ${
                        n.origin
                      } 應為 ${t}${n.minimum.toString()}`;
                    }
                    case "invalid_format":
                      if ("starts_with" === n.format)
                        return `無效的字串：必須以 "${n.prefix}" 開頭`;
                      if ("ends_with" === n.format)
                        return `無效的字串：必須以 "${n.suffix}" 結尾`;
                      if ("includes" === n.format)
                        return `無效的字串：必須包含 "${n.includes}"`;
                      if ("regex" === n.format)
                        return `無效的字串：必須符合格式 ${n.pattern}`;
                      return `無效的 ${t[n.format] ?? n.format}`;
                    case "not_multiple_of":
                      return `無效的數字：必須為 ${n.divisor} 的倍數`;
                    case "unrecognized_keys":
                      return `無法識別的鍵值${
                        n.keys.length > 1 ? "們" : ""
                      }：${f(n.keys, "、")}`;
                    case "invalid_key":
                      return `${n.origin} 中有無效的鍵值`;
                    case "invalid_union":
                      return "無效的輸入值";
                    case "invalid_element":
                      return `${n.origin} 中有無效的值`;
                    default:
                      return `無效的輸入值`;
                  }
                }),
            };
          },
        ],
        411775
      );
    var uZ = e.i(411775);
    e.i(976111), e.i(669395), e.i(136303), e.i(964292);
    var uU = e.i(474628);
    e.s(
      [
        "$ZodAny",
        0,
        iR,
        "$ZodArray",
        0,
        iq,
        "$ZodAsyncError",
        () => r,
        "$ZodBase64",
        0,
        i_,
        "$ZodBase64URL",
        0,
        ik,
        "$ZodBigInt",
        0,
        iO,
        "$ZodBigIntFormat",
        0,
        iP,
        "$ZodBoolean",
        0,
        iU,
        "$ZodCIDRv4",
        0,
        i$,
        "$ZodCIDRv6",
        0,
        ib,
        "$ZodCUID",
        0,
        ia,
        "$ZodCUID2",
        0,
        io,
        "$ZodCatch",
        0,
        nm,
        "$ZodCheck",
        0,
        tD,
        "$ZodCheckBigIntFormat",
        0,
        tM,
        "$ZodCheckEndsWith",
        0,
        tY,
        "$ZodCheckGreaterThan",
        0,
        tR,
        "$ZodCheckIncludes",
        0,
        tX,
        "$ZodCheckLengthEquals",
        0,
        tK,
        "$ZodCheckLessThan",
        0,
        tN,
        "$ZodCheckLowerCase",
        0,
        tG,
        "$ZodCheckMaxLength",
        0,
        tF,
        "$ZodCheckMaxSize",
        0,
        tC,
        "$ZodCheckMimeType",
        0,
        t4,
        "$ZodCheckMinLength",
        0,
        tJ,
        "$ZodCheckMinSize",
        0,
        tL,
        "$ZodCheckMultipleOf",
        0,
        tA,
        "$ZodCheckNumberFormat",
        0,
        tT,
        "$ZodCheckOverwrite",
        0,
        t6,
        "$ZodCheckProperty",
        0,
        t0,
        "$ZodCheckRegex",
        0,
        tV,
        "$ZodCheckSizeEquals",
        0,
        tq,
        "$ZodCheckStartsWith",
        0,
        tH,
        "$ZodCheckStringFormat",
        0,
        tB,
        "$ZodCheckUpperCase",
        0,
        tW,
        "$ZodCodec",
        0,
        nv,
        "$ZodCustom",
        0,
        nw,
        "$ZodCustomStringFormat",
        0,
        iz,
        "$ZodDate",
        0,
        iC,
        "$ZodDefault",
        0,
        no,
        "$ZodDiscriminatedUnion",
        0,
        iY,
        "$ZodE164",
        0,
        iI,
        "$ZodEmail",
        0,
        ie,
        "$ZodEmoji",
        0,
        ii,
        "$ZodEncodeError",
        () => a,
        "$ZodEnum",
        0,
        i8,
        "$ZodError",
        0,
        eh,
        "$ZodExactOptional",
        0,
        nr,
        "$ZodFile",
        0,
        ne,
        "$ZodFunction",
        0,
        nx,
        "$ZodGUID",
        0,
        t8,
        "$ZodIPv4",
        0,
        ig,
        "$ZodIPv6",
        0,
        iv,
        "$ZodISODate",
        0,
        ic,
        "$ZodISODateTime",
        0,
        id,
        "$ZodISODuration",
        0,
        ip,
        "$ZodISOTime",
        0,
        im,
        "$ZodIntersection",
        0,
        iQ,
        "$ZodJWT",
        0,
        iS,
        "$ZodKSUID",
        0,
        il,
        "$ZodLazy",
        0,
        nI,
        "$ZodLiteral",
        0,
        i5,
        "$ZodMAC",
        0,
        ih,
        "$ZodMap",
        0,
        i2,
        "$ZodNaN",
        0,
        np,
        "$ZodNanoID",
        0,
        ir,
        "$ZodNever",
        0,
        iT,
        "$ZodNonOptional",
        0,
        nl,
        "$ZodNull",
        0,
        iN,
        "$ZodNullable",
        0,
        na,
        "$ZodNumber",
        0,
        ij,
        "$ZodNumberFormat",
        0,
        iZ,
        "$ZodObject",
        0,
        iB,
        "$ZodObjectJIT",
        0,
        iV,
        "$ZodOptional",
        0,
        nn,
        "$ZodPipe",
        0,
        nf,
        "$ZodPrefault",
        0,
        nu,
        "$ZodPromise",
        0,
        nk,
        "$ZodReadonly",
        0,
        nb,
        "$ZodRealError",
        0,
        e$,
        "$ZodRecord",
        0,
        i1,
        "$ZodRegistry",
        () => nA,
        "$ZodSet",
        0,
        i3,
        "$ZodString",
        0,
        t3,
        "$ZodStringFormat",
        0,
        t7,
        "$ZodSuccess",
        0,
        nc,
        "$ZodSymbol",
        0,
        iD,
        "$ZodTemplateLiteral",
        0,
        n_,
        "$ZodTransform",
        0,
        nt,
        "$ZodTuple",
        0,
        i4,
        "$ZodType",
        0,
        t9,
        "$ZodULID",
        0,
        is,
        "$ZodURL",
        0,
        it,
        "$ZodUUID",
        0,
        t5,
        "$ZodUndefined",
        0,
        iE,
        "$ZodUnion",
        0,
        iW,
        "$ZodUnknown",
        0,
        iA,
        "$ZodVoid",
        0,
        iM,
        "$ZodXID",
        0,
        iu,
        "$ZodXor",
        0,
        iH,
        "$brand",
        0,
        n,
        "$constructor",
        () => i,
        "$input",
        0,
        nR,
        "$output",
        0,
        nN,
        "Doc",
        () => t1,
        "JSONSchema",
        0,
        uU,
        "JSONSchemaGenerator",
        () => aR,
        "NEVER",
        0,
        t,
        "TimePrecision",
        0,
        rt,
        "_any",
        () => rx,
        "_array",
        () => r2,
        "_base64",
        () => n7,
        "_base64url",
        () => n8,
        "_bigint",
        () => rg,
        "_boolean",
        () => rp,
        "_catch",
        () => ap,
        "_check",
        () => ax,
        "_cidrv4",
        () => n9,
        "_cidrv6",
        () => n3,
        "_coercedBigint",
        () => rv,
        "_coercedBoolean",
        () => rf,
        "_coercedDate",
        () => rz,
        "_coercedNumber",
        () => rs,
        "_coercedString",
        () => nL,
        "_cuid",
        () => nH,
        "_cuid2",
        () => nY,
        "_custom",
        () => ab,
        "_date",
        () => rS,
        "_decode",
        0,
        eE,
        "_decodeAsync",
        0,
        eT,
        "_default",
        () => ad,
        "_discriminatedUnion",
        () => r7,
        "_e164",
        () => n5,
        "_email",
        () => nq,
        "_emoji",
        () => nW,
        "_encode",
        0,
        eP,
        "_encodeAsync",
        0,
        eR,
        "_endsWith",
        () => rW,
        "_enum",
        () => an,
        "_file",
        () => ao,
        "_float32",
        () => rl,
        "_float64",
        () => rd,
        "_gt",
        () => rO,
        "_gte",
        () => rP,
        "_guid",
        () => nF,
        "_includes",
        () => rV,
        "_int",
        () => ru,
        "_int32",
        () => rc,
        "_int64",
        () => rh,
        "_intersection",
        () => r8,
        "_ipv4",
        () => n6,
        "_ipv6",
        () => n1,
        "_isoDate",
        () => rn,
        "_isoDateTime",
        () => ri,
        "_isoDuration",
        () => ra,
        "_isoTime",
        () => rr,
        "_jwt",
        () => re,
        "_ksuid",
        () => n4,
        "_lazy",
        () => ah,
        "_length",
        () => rF,
        "_literal",
        () => aa,
        "_lowercase",
        () => rK,
        "_lt",
        () => rZ,
        "_lte",
        () => rU,
        "_mac",
        () => n2,
        "_map",
        () => at,
        "_max",
        () => rU,
        "_maxLength",
        () => rL,
        "_maxSize",
        () => rT,
        "_mime",
        () => rH,
        "_min",
        () => rP,
        "_minLength",
        () => rq,
        "_minSize",
        () => rM,
        "_multipleOf",
        () => rA,
        "_nan",
        () => rj,
        "_nanoid",
        () => nX,
        "_nativeEnum",
        () => ar,
        "_negative",
        () => rE,
        "_never",
        () => rI,
        "_nonnegative",
        () => rR,
        "_nonoptional",
        () => ac,
        "_nonpositive",
        () => rN,
        "_normalize",
        () => rQ,
        "_null",
        () => r_,
        "_nullable",
        () => al,
        "_number",
        () => ro,
        "_optional",
        () => au,
        "_overwrite",
        () => rY,
        "_parse",
        0,
        eI,
        "_parseAsync",
        0,
        eS,
        "_pipe",
        () => af,
        "_positive",
        () => rD,
        "_promise",
        () => a$,
        "_property",
        () => rX,
        "_readonly",
        () => ag,
        "_record",
        () => ae,
        "_refine",
        () => ay,
        "_regex",
        () => rJ,
        "_safeDecode",
        0,
        eq,
        "_safeDecodeAsync",
        0,
        eB,
        "_safeEncode",
        0,
        eC,
        "_safeEncodeAsync",
        0,
        eJ,
        "_safeParse",
        0,
        ej,
        "_safeParseAsync",
        0,
        eU,
        "_set",
        () => ai,
        "_size",
        () => rC,
        "_slugify",
        () => r1,
        "_startsWith",
        () => rG,
        "_string",
        () => nC,
        "_stringFormat",
        () => aS,
        "_stringbool",
        () => aw,
        "_success",
        () => am,
        "_superRefine",
        () => a_,
        "_symbol",
        () => rb,
        "_templateLiteral",
        () => av,
        "_toLowerCase",
        () => r4,
        "_toUpperCase",
        () => r6,
        "_transform",
        () => as,
        "_trim",
        () => r0,
        "_tuple",
        () => r5,
        "_uint32",
        () => rm,
        "_uint64",
        () => r$,
        "_ulid",
        () => nQ,
        "_undefined",
        () => ry,
        "_union",
        () => r9,
        "_unknown",
        () => rk,
        "_uppercase",
        () => rB,
        "_url",
        () => nG,
        "_uuid",
        () => nJ,
        "_uuidv4",
        () => nK,
        "_uuidv6",
        () => nB,
        "_uuidv7",
        () => nV,
        "_void",
        () => rw,
        "_xid",
        () => n0,
        "_xor",
        () => r3,
        "clone",
        () => C,
        "config",
        () => s,
        "createStandardJSONSchemaMethod",
        0,
        aP,
        "createToJSONSchemaMethod",
        0,
        aO,
        "decode",
        0,
        eN,
        "decodeAsync",
        0,
        eM,
        "describe",
        () => ak,
        "encode",
        0,
        eD,
        "encodeAsync",
        0,
        eA,
        "extractDefs",
        () => aZ,
        "finalize",
        () => aU,
        "flattenError",
        () => eb,
        "formatError",
        () => ey,
        "globalConfig",
        0,
        o,
        "globalRegistry",
        0,
        nM,
        "initializeContext",
        () => az,
        "isValidBase64",
        () => iy,
        "isValidBase64URL",
        () => ix,
        "isValidJWT",
        () => iw,
        "locales",
        0,
        uZ,
        "meta",
        () => aI,
        "parse",
        0,
        ew,
        "parseAsync",
        0,
        ez,
        "prettifyError",
        () => ek,
        "process",
        () => aj,
        "regexes",
        0,
        uj,
        "registry",
        () => nT,
        "safeDecode",
        0,
        eF,
        "safeDecodeAsync",
        0,
        eV,
        "safeEncode",
        0,
        eL,
        "safeEncodeAsync",
        0,
        eK,
        "safeParse",
        0,
        eZ,
        "safeParseAsync",
        0,
        eO,
        "toDotPath",
        () => ex,
        "toJSONSchema",
        () => aN,
        "treeifyError",
        () => e_,
        "util",
        0,
        uz,
        "version",
        0,
        t2,
      ],
      271441
    );
    var uO = e.i(271441);
    e.i(17760),
      e.s(
        [
          "decode",
          0,
          eN,
          "decodeAsync",
          0,
          eM,
          "encode",
          0,
          eD,
          "encodeAsync",
          0,
          eA,
          "parse",
          0,
          ew,
          "parseAsync",
          0,
          ez,
          "safeDecode",
          0,
          eF,
          "safeDecodeAsync",
          0,
          eV,
          "safeEncode",
          0,
          eL,
          "safeEncodeAsync",
          0,
          eK,
          "safeParse",
          0,
          eZ,
          "safeParseAsync",
          0,
          eO,
        ],
        427332
      ),
      e.i(427332),
      e.i(786345),
      e.i(291593),
      e.s(
        [
          "endsWith",
          () => rW,
          "gt",
          () => rO,
          "gte",
          () => rP,
          "includes",
          () => rV,
          "length",
          () => rF,
          "lowercase",
          () => rK,
          "lt",
          () => rZ,
          "lte",
          () => rU,
          "maxLength",
          () => rL,
          "maxSize",
          () => rT,
          "maximum",
          () => rU,
          "mime",
          () => rH,
          "minLength",
          () => rq,
          "minSize",
          () => rM,
          "minimum",
          () => rP,
          "multipleOf",
          () => rA,
          "negative",
          () => rE,
          "nonnegative",
          () => rR,
          "nonpositive",
          () => rN,
          "normalize",
          () => rQ,
          "overwrite",
          () => rY,
          "positive",
          () => rD,
          "property",
          () => rX,
          "regex",
          () => rJ,
          "size",
          () => rC,
          "startsWith",
          () => rG,
          "toLowerCase",
          () => r4,
          "toUpperCase",
          () => r6,
          "trim",
          () => r0,
          "uppercase",
          () => rB,
        ],
        623369
      ),
      e.i(623369);
    var aT = aT,
      uP = e.i(511874),
      uD = e.i(179622);
    e.s(
      [
        "$brand",
        0,
        n,
        "$input",
        0,
        nR,
        "$output",
        0,
        nN,
        "NEVER",
        0,
        t,
        "TimePrecision",
        0,
        rt,
        "ZodMiniAny",
        0,
        oW,
        "ZodMiniArray",
        0,
        o9,
        "ZodMiniBase64",
        0,
        og,
        "ZodMiniBase64URL",
        0,
        oh,
        "ZodMiniBigInt",
        0,
        oT,
        "ZodMiniBigIntFormat",
        0,
        oC,
        "ZodMiniBoolean",
        0,
        oR,
        "ZodMiniCIDRv4",
        0,
        ol,
        "ZodMiniCIDRv6",
        0,
        oc,
        "ZodMiniCUID",
        0,
        a9,
        "ZodMiniCUID2",
        0,
        a7,
        "ZodMiniCatch",
        0,
        sY,
        "ZodMiniCodec",
        0,
        s2,
        "ZodMiniCustom",
        0,
        ur,
        "ZodMiniCustomStringFormat",
        0,
        ok,
        "ZodMiniDate",
        0,
        o1,
        "ZodMiniDefault",
        0,
        sJ,
        "ZodMiniDiscriminatedUnion",
        0,
        sf,
        "ZodMiniE164",
        0,
        ob,
        "ZodMiniEmail",
        0,
        aF,
        "ZodMiniEmoji",
        0,
        a4,
        "ZodMiniEnum",
        0,
        sj,
        "ZodMiniExactOptional",
        0,
        sM,
        "ZodMiniFile",
        0,
        sD,
        "ZodMiniFunction",
        0,
        um,
        "ZodMiniGUID",
        0,
        aK,
        "ZodMiniIPv4",
        0,
        oa,
        "ZodMiniIPv6",
        0,
        os,
        "ZodMiniISODate",
        0,
        uv,
        "ZodMiniISODateTime",
        0,
        uf,
        "ZodMiniISODuration",
        0,
        uy,
        "ZodMiniISOTime",
        0,
        u$,
        "ZodMiniIntersection",
        0,
        sv,
        "ZodMiniJWT",
        0,
        o_,
        "ZodMiniKSUID",
        0,
        on,
        "ZodMiniLazy",
        0,
        ue,
        "ZodMiniLiteral",
        0,
        sO,
        "ZodMiniMAC",
        0,
        op,
        "ZodMiniMap",
        0,
        sI,
        "ZodMiniNaN",
        0,
        s0,
        "ZodMiniNanoID",
        0,
        a1,
        "ZodMiniNever",
        0,
        oQ,
        "ZodMiniNonOptional",
        0,
        sG,
        "ZodMiniNull",
        0,
        oV,
        "ZodMiniNullable",
        0,
        sL,
        "ZodMiniNumber",
        0,
        oj,
        "ZodMiniNumberFormat",
        0,
        oU,
        "ZodMiniObject",
        0,
        o8,
        "ZodMiniOptional",
        0,
        sA,
        "ZodMiniPipe",
        0,
        s6,
        "ZodMiniPrefault",
        0,
        sB,
        "ZodMiniPromise",
        0,
        ui,
        "ZodMiniReadonly",
        0,
        s3,
        "ZodMiniRecord",
        0,
        sy,
        "ZodMiniSet",
        0,
        sS,
        "ZodMiniString",
        0,
        aC,
        "ZodMiniStringFormat",
        0,
        aq,
        "ZodMiniSuccess",
        0,
        sX,
        "ZodMiniSymbol",
        0,
        oF,
        "ZodMiniTemplateLiteral",
        0,
        s8,
        "ZodMiniTransform",
        0,
        sN,
        "ZodMiniTuple",
        0,
        s$,
        "ZodMiniType",
        0,
        aM,
        "ZodMiniULID",
        0,
        a5,
        "ZodMiniURL",
        0,
        aY,
        "ZodMiniUUID",
        0,
        aV,
        "ZodMiniUndefined",
        0,
        oK,
        "ZodMiniUnion",
        0,
        sd,
        "ZodMiniUnknown",
        0,
        oH,
        "ZodMiniVoid",
        0,
        o4,
        "ZodMiniXID",
        0,
        ot,
        "ZodMiniXor",
        0,
        sm,
        "_default",
        () => sK,
        "_function",
        () => up,
        "any",
        () => oX,
        "array",
        () => o3,
        "base64",
        () => ov,
        "base64url",
        () => o$,
        "bigint",
        () => oM,
        "boolean",
        () => oA,
        "catch",
        () => sQ,
        "catchall",
        () => sl,
        "check",
        () => ua,
        "cidrv4",
        () => od,
        "cidrv6",
        () => om,
        "clone",
        () => C,
        "codec",
        () => s9,
        "coerce",
        0,
        uD,
        "config",
        () => s,
        "core",
        0,
        uO,
        "cuid",
        () => a3,
        "cuid2",
        () => a8,
        "custom",
        () => uo,
        "date",
        () => o2,
        "decode",
        0,
        eN,
        "decodeAsync",
        0,
        eM,
        "describe",
        0,
        ak,
        "discriminatedUnion",
        () => sg,
        "e164",
        () => oy,
        "email",
        () => aJ,
        "emoji",
        () => a6,
        "encode",
        0,
        eD,
        "encodeAsync",
        0,
        eA,
        "endsWith",
        () => rW,
        "enum",
        () => sZ,
        "exactOptional",
        () => sC,
        "extend",
        () => si,
        "file",
        () => sE,
        "flattenError",
        () => eb,
        "float32",
        () => oP,
        "float64",
        () => oD,
        "formatError",
        () => ey,
        "function",
        () => up,
        "globalRegistry",
        0,
        nM,
        "gt",
        () => rO,
        "gte",
        () => rP,
        "guid",
        () => aB,
        "hash",
        () => oz,
        "hex",
        () => oS,
        "hostname",
        () => ow,
        "httpUrl",
        () => a0,
        "includes",
        () => rV,
        "instanceof",
        () => ul,
        "int",
        () => oO,
        "int32",
        () => oE,
        "int64",
        () => oL,
        "intersection",
        () => sh,
        "ipv4",
        () => oo,
        "ipv6",
        () => ou,
        "iso",
        0,
        uP,
        "json",
        () => uc,
        "jwt",
        () => ox,
        "keyof",
        () => o7,
        "ksuid",
        () => or,
        "lazy",
        () => ut,
        "length",
        () => rF,
        "literal",
        () => sP,
        "locales",
        0,
        uZ,
        "looseObject",
        () => st,
        "looseRecord",
        () => sk,
        "lowercase",
        () => rK,
        "lt",
        () => rZ,
        "lte",
        () => rU,
        "mac",
        () => of,
        "map",
        () => sw,
        "maxLength",
        () => rL,
        "maxSize",
        () => rT,
        "maximum",
        () => rU,
        "merge",
        () => sr,
        "meta",
        0,
        aI,
        "mime",
        () => rH,
        "minLength",
        () => rq,
        "minSize",
        () => rM,
        "minimum",
        () => rP,
        "multipleOf",
        () => rA,
        "nan",
        () => s4,
        "nanoid",
        () => a2,
        "nativeEnum",
        () => sU,
        "negative",
        () => rE,
        "never",
        () => o0,
        "nonnegative",
        () => rR,
        "nonoptional",
        () => sW,
        "nonpositive",
        () => rN,
        "normalize",
        () => rQ,
        "null",
        () => oG,
        "nullable",
        () => sq,
        "nullish",
        () => sF,
        "number",
        () => oZ,
        "object",
        () => o5,
        "omit",
        () => so,
        "optional",
        () => sT,
        "overwrite",
        () => rY,
        "parse",
        0,
        ew,
        "parseAsync",
        0,
        ez,
        "partial",
        () => ss,
        "partialRecord",
        () => sx,
        "pick",
        () => sa,
        "pipe",
        () => s1,
        "positive",
        () => rD,
        "prefault",
        () => sV,
        "prettifyError",
        () => ek,
        "promise",
        () => un,
        "property",
        () => rX,
        "readonly",
        () => s7,
        "record",
        () => s_,
        "refine",
        () => us,
        "regex",
        () => rJ,
        "regexes",
        () => aT,
        "registry",
        () => nT,
        "required",
        () => su,
        "safeDecode",
        0,
        eF,
        "safeDecodeAsync",
        0,
        eV,
        "safeEncode",
        0,
        eL,
        "safeEncodeAsync",
        0,
        eK,
        "safeExtend",
        () => sn,
        "safeParse",
        0,
        eZ,
        "safeParseAsync",
        0,
        eO,
        "set",
        () => sz,
        "size",
        () => rC,
        "startsWith",
        () => rG,
        "strictObject",
        () => se,
        "string",
        () => aL,
        "stringFormat",
        () => oI,
        "stringbool",
        0,
        ud,
        "success",
        () => sH,
        "superRefine",
        () => uu,
        "symbol",
        () => oJ,
        "templateLiteral",
        () => s5,
        "toJSONSchema",
        () => aN,
        "toLowerCase",
        () => r4,
        "toUpperCase",
        () => r6,
        "transform",
        () => sR,
        "treeifyError",
        () => e_,
        "trim",
        () => r0,
        "tuple",
        () => sb,
        "uint32",
        () => oN,
        "uint64",
        () => oq,
        "ulid",
        () => oe,
        "undefined",
        () => oB,
        "union",
        () => sc,
        "unknown",
        () => oY,
        "uppercase",
        () => rB,
        "url",
        () => aQ,
        "util",
        () => uz,
        "uuid",
        () => aG,
        "uuidv4",
        () => aW,
        "uuidv6",
        () => aX,
        "uuidv7",
        () => aH,
        "void",
        () => o6,
        "xid",
        () => oi,
        "xor",
        () => sp,
      ],
      464703
    ),
      e.i(464703),
      e.s([], 938819);
  },
  547863,
  (e) => {
    "use strict";
    var t = e.i(464703);
    e.s(["z", 0, t]);
  },
  295761,
  601650,
  (e) => {
    "use strict";
    class t extends Error {
      static setStaticOptions(e) {
        (t.prototype.docsOrigin = e.docsOrigin),
          (t.prototype.showVersion = e.showVersion),
          (t.prototype.version = e.version);
      }
      constructor(e, i = {}) {
        const n = (() => {
            if (i.cause instanceof t) {
              if (i.cause.details) return i.cause.details;
              if (i.cause.shortMessage) return i.cause.shortMessage;
            }
            return i.cause &&
              "details" in i.cause &&
              "string" == typeof i.cause.details
              ? i.cause.details
              : i.cause?.message
              ? i.cause.message
              : i.details;
          })(),
          r = (i.cause instanceof t && i.cause.docsPath) || i.docsPath,
          a = i.docsOrigin ?? t.prototype.docsOrigin,
          o = `${a}${r ?? ""}`,
          s = !!(i.version ?? t.prototype.showVersion),
          u = i.version ?? t.prototype.version;
        super(
          [
            e || "An error occurred.",
            ...(i.metaMessages ? ["", ...i.metaMessages] : []),
            ...(n || r || s
              ? [
                  "",
                  n ? `Details: ${n}` : void 0,
                  r ? `See: ${o}` : void 0,
                  s ? `Version: ${u}` : void 0,
                ]
              : []),
          ]
            .filter((e) => "string" == typeof e)
            .join("\n"),
          i.cause ? { cause: i.cause } : void 0
        ),
          Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docsOrigin", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "showVersion", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError",
          }),
          (this.cause = i.cause),
          (this.details = n),
          (this.docs = o),
          (this.docsOrigin = a),
          (this.docsPath = r),
          (this.shortMessage = e),
          (this.showVersion = s),
          (this.version = u);
      }
      walk(e) {
        return (function e(t, i) {
          return i?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && t.cause
            ? e(t.cause, i)
            : i
            ? null
            : t;
        })(this, e);
      }
    }
    Object.defineProperty(t, "defaultStaticOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        docsOrigin: "https://oxlib.sh",
        showVersion: !1,
        version: "ox@0.1.1",
      },
    }),
      t.setStaticOptions(t.defaultStaticOptions),
      e.s(["BaseError", () => t], 295761),
      e.s(
        [
          "assertEndOffset",
          () => a,
          "assertSize",
          () => n,
          "assertStartOffset",
          () => r,
          "pad",
          () => o,
          "trim",
          () => s,
        ],
        601650
      );
    var i = e.i(247380);
    function n(e, t) {
      if (i.size(e) > t)
        throw new i.SizeOverflowError({ givenSize: i.size(e), maxSize: t });
    }
    function r(e, t) {
      if ("number" == typeof t && t > 0 && t > i.size(e) - 1)
        throw new i.SliceOffsetOutOfBoundsError({
          offset: t,
          position: "start",
          size: i.size(e),
        });
    }
    function a(e, t, n) {
      if ("number" == typeof t && "number" == typeof n && i.size(e) !== n - t)
        throw new i.SliceOffsetOutOfBoundsError({
          offset: n,
          position: "end",
          size: i.size(e),
        });
    }
    function o(e, t = {}) {
      let { dir: n, size: r = 32 } = t;
      if (0 === r) return e;
      let a = e.replace("0x", "");
      if (a.length > 2 * r)
        throw new i.SizeExceedsPaddingSizeError({
          size: Math.ceil(a.length / 2),
          targetSize: r,
          type: "Hex",
        });
      return `0x${a["right" === n ? "padEnd" : "padStart"](2 * r, "0")}`;
    }
    function s(e, t = {}) {
      let { dir: i = "left" } = t,
        n = e.replace("0x", ""),
        r = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === i ? e : n.length - e - 1].toString()) r++;
        else break;
      return "0" === (n = "left" === i ? n.slice(r) : n.slice(0, n.length - r))
        ? "0x"
        : "right" === i && n.length % 2 == 1
        ? `0x${n}0`
        : `0x${n}`;
    }
  },
  790653,
  (e) => {
    "use strict";
    let t = "#__bigint";
    function i(e, i) {
      return JSON.parse(e, (e, n) =>
        "string" == typeof n && n.endsWith(t)
          ? BigInt(n.slice(0, -t.length))
          : "function" == typeof i
          ? i(e, n)
          : n
      );
    }
    function n(e, i, n) {
      return JSON.stringify(
        e,
        (e, n) =>
          "function" == typeof i
            ? i(e, n)
            : "bigint" == typeof n
            ? n.toString() + t
            : n,
        n
      );
    }
    e.s(["parse", () => i, "stringify", () => n]);
  },
  247380,
  (e) => {
    "use strict";
    e.s([
      "IntegerOutOfRangeError",
      () => y,
      "InvalidLengthError",
      () => k,
      "SizeExceedsPaddingSizeError",
      () => S,
      "SizeOverflowError",
      () => I,
      "SliceOffsetOutOfBoundsError",
      () => w,
      "concat",
      () => o,
      "from",
      () => s,
      "fromBoolean",
      () => u,
      "fromBytes",
      () => l,
      "fromNumber",
      () => d,
      "fromString",
      () => c,
      "padLeft",
      () => m,
      "padRight",
      () => p,
      "size",
      () => g,
      "slice",
      () => f,
      "toBigInt",
      () => h,
      "toNumber",
      () => $,
      "trimLeft",
      () => v,
      "validate",
      () => b,
    ]);
    var t = e.i(295761),
      i = e.i(601650),
      n = e.i(790653);
    let r = new TextEncoder(),
      a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function o(...e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    function s(e) {
      return e instanceof Uint8Array
        ? l(e)
        : Array.isArray(e)
        ? l(new Uint8Array(e))
        : e;
    }
    function u(e, t = {}) {
      let n = `0x${Number(e)}`;
      return "number" == typeof t.size
        ? (i.assertSize(n, t.size), m(n, t.size))
        : n;
    }
    function l(e, t = {}) {
      let n = "";
      for (let t = 0; t < e.length; t++) n += a[e[t]];
      let r = `0x${n}`;
      return "number" == typeof t.size
        ? (i.assertSize(r, t.size), p(r, t.size))
        : r;
    }
    function d(e, t = {}) {
      let i,
        { signed: n, size: r } = t,
        a = BigInt(e);
      r
        ? (i = n
            ? (1n << (8n * BigInt(r) - 1n)) - 1n
            : 2n ** (8n * BigInt(r)) - 1n)
        : "number" == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
      let o = "bigint" == typeof i && n ? -i - 1n : 0;
      if ((i && a > i) || a < o) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new y({
          max: i ? `${i}${t}` : void 0,
          min: `${o}${t}`,
          signed: n,
          size: r,
          value: `${e}${t}`,
        });
      }
      let s = (n && a < 0 ? BigInt.asUintN(8 * r, BigInt(a)) : a).toString(16),
        u = `0x${s}`;
      return r ? m(u, r) : u;
    }
    function c(e, t = {}) {
      return l(r.encode(e), t);
    }
    function m(e, t) {
      return i.pad(e, { dir: "left", size: t });
    }
    function p(e, t) {
      return i.pad(e, { dir: "right", size: t });
    }
    function f(e, t, n, r = {}) {
      let { strict: a } = r;
      i.assertStartOffset(e, t);
      let o = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
      return a && i.assertEndOffset(o, t, n), o;
    }
    function g(e) {
      return Math.ceil((e.length - 2) / 2);
    }
    function v(e) {
      return i.trim(e, { dir: "left" });
    }
    function h(e, t = {}) {
      let { signed: n } = t;
      t.size && i.assertSize(e, t.size);
      let r = BigInt(e);
      if (!n) return r;
      let a = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
      return r <= a >> 1n ? r : r - a - 1n;
    }
    function $(e, t = {}) {
      let { signed: i, size: n } = t;
      return i || n ? Number(h(e, t)) : Number(e);
    }
    function b(e, t = {}) {
      let { strict: i = !1 } = t;
      try {
        return (
          !(function (e, t = {}) {
            let { strict: i = !1 } = t;
            if (!e || "string" != typeof e) throw new _(e);
            if ((i && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
              throw new x(e);
          })(e, { strict: i }),
          !0
        );
      } catch {
        return !1;
      }
    }
    class y extends t.BaseError {
      constructor({ max: e, min: t, signed: i, size: n, value: r }) {
        super(
          `Number \`${r}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
            i ? " signed" : " unsigned"
          } integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.IntegerOutOfRangeError",
          });
      }
    }
    t.BaseError;
    class _ extends t.BaseError {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? n.stringify(e) : e
          }\` of type \`${typeof e}\` is an invalid hex type.`,
          {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.'],
          }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexTypeError",
          });
      }
    }
    class x extends t.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid hex value.`, {
          metaMessages: [
            'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexValueError",
          });
      }
    }
    class k extends t.BaseError {
      constructor(e) {
        super(
          `Hex value \`"${e}"\` is an odd length (${e.length - 2} nibbles).`,
          { metaMessages: ["It must be an even length."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidLengthError",
          });
      }
    }
    class I extends t.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeOverflowError",
          });
      }
    }
    class w extends t.BaseError {
      constructor({ offset: e, position: t, size: i }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${i}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class S extends t.BaseError {
      constructor({ size: e, targetSize: t, type: i }) {
        super(
          `${i.charAt(0).toUpperCase()}${i
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeExceedsPaddingSizeError",
          });
      }
    }
  },
  822315,
  (e) => {
    "use strict";
    var t = e.i(295761),
      i = e.i(247380);
    e.i(938819);
    var n = e.i(786345);
    let r = () =>
      n.templateLiteral(["0x", n.string()], {
        message: "Needs string in format ^0x[A-Fa-f0-9]+$.",
      });
    function a(e) {
      return n.union(e);
    }
    class o extends t.BaseError {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Schema.ValidationError",
          });
      }
    }
    function s(e) {
      let t = `Validation failed with ${e.issues.length} error${
        1 === e.issues.length ? "" : "s"
      }:`;
      for (let i of ((t += "\n"), e.issues))
        i &&
          ((t += "\n"),
          (t += (function e(t, i = 0) {
            var n;
            let r =
                0 === (n = t.path).length
                  ? ""
                  : "at `" +
                    n
                      .map((e, t) =>
                        "number" == typeof e
                          ? `[${e}]`
                          : "symbol" == typeof e
                          ? `[${e.toString()}]`
                          : /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e) && t > 0
                          ? `.${e}`
                          : 0 === t && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e)
                          ? e
                          : `["${e}"]`
                      )
                      .join("") +
                    "`",
              a = `- ${r ? `${r}: ` : ""}`,
              o = "  ".repeat(i + 1),
              s = a;
            switch (t.code) {
              case "invalid_type": {
                let e = t.expected,
                  i = t.input
                    ? (function (e) {
                        let t = e.input;
                        if (void 0 === t) return "undefined";
                        if (null === t) return "null";
                        let i = typeof t;
                        return "object" === i
                          ? Array.isArray(t)
                            ? "array"
                            : t instanceof Date
                            ? "date"
                            : t instanceof Map
                            ? "map"
                            : t instanceof Set
                            ? "set"
                            : "object"
                          : i;
                      })(t)
                    : "undefined";
                (s += `Expected ${e}. ${
                  "Invalid input" !== t.message ? t.message : ""
                }`),
                  "undefined" !== i && (s += `but received ${i}`);
                break;
              }
              case "too_big": {
                let e = t.maximum,
                  i = t.inclusive ?? !0;
                t.exact
                  ? (s += `${t.origin} must be exactly ${e}`)
                  : (s += `${t.origin} must be ${
                      i ? "at most" : "less than"
                    } ${e}`);
                break;
              }
              case "too_small": {
                let e = t.minimum,
                  i = t.inclusive ?? !0;
                t.exact
                  ? (s += `${t.origin} must be exactly ${e}`)
                  : (s += `${t.origin} must be ${
                      i ? "at least" : "greater than"
                    } ${e}`);
                break;
              }
              case "invalid_format":
                switch (t.format) {
                  case "regex":
                  case "template_literal":
                    s += `Must match pattern: ${t.pattern}`;
                    break;
                  case "starts_with":
                    s += `Must start with "${t.prefix}"`;
                    break;
                  case "ends_with":
                    s += `Must end with "${t.suffix}"`;
                    break;
                  case "includes":
                    s += `Must include "${t.includes}"`;
                    break;
                  default:
                    s += `Invalid ${t.format} format`;
                }
                break;
              case "not_multiple_of":
                s += `Number must be a multiple of ${t.divisor}`;
                break;
              case "unrecognized_keys": {
                let e = t.keys.map((e) => `"${e}"`).join(", ");
                s += `Unrecognized key${t.keys.length > 1 ? "s" : ""}: ${e}`;
                break;
              }
              case "invalid_union": {
                let n = t.errors && t.errors.length > 0;
                (s += "Invalid union value."),
                  n &&
                    t.errors.forEach((t) => {
                      t.length > 0 &&
                        t.forEach((t) => {
                          (s += "\n"), (s += o), (s += e(t, i + 1));
                        });
                    });
                break;
              }
              case "invalid_key":
                (s += `Invalid ${t.origin} key`),
                  t.issues &&
                    t.issues.length > 0 &&
                    t.issues.forEach((t) => {
                      (s += "\n"), (s += o), (s += e(t, i + 1));
                    });
                break;
              case "invalid_element":
                (s += `Invalid ${t.origin} element at key "${t.key}"`),
                  t.issues &&
                    t.issues.length > 0 &&
                    t.issues.forEach((t) => {
                      (s += "\n"), (s += o), (s += e(t, i + 1));
                    });
                break;
              case "invalid_value": {
                let e = t.values.map((e) => JSON.stringify(e)).join(", ");
                t.values.length > 1
                  ? (s += `Expected one of: ${e}`)
                  : (s += `Expected ${e}`);
                break;
              }
              case "custom":
                s += t.message || "Custom validation failed";
                break;
              default:
                s += t.message || "Validation failed";
            }
            return s;
          })(i)));
      return new o(t);
    }
    e.s([
      "address",
      0,
      () =>
        n.templateLiteral(["0x", n.string()], {
          message: "Needs string in format ^0x[A-Fa-f0-9]{40}$.",
        }),
      "bigint",
      0,
      () =>
        n.codec(r(), n.bigint({ message: "Required bigint" }), {
          decode: (e) => i.toBigInt(e),
          encode: (e) => i.fromNumber(e),
        }),
      "hex",
      0,
      r,
      "number",
      0,
      () =>
        n.codec(r(), n.number(), {
          decode: (e) => i.toNumber(e),
          encode: (e) => i.fromNumber(e),
        }),
      "oneOf",
      () => a,
      "toValidationError",
      () => s,
    ]);
  },
  952294,
  (e) => {
    "use strict";
    e.i(938819);
    var t = e.i(547863),
      i = e.i(822315),
      n = e.i(786345);
    let r = n.union([
      n.object({
        combinedGas: i.bigint(),
        encodedFundTransfers: n.readonly(n.array(i.hex())),
        encodedPreCalls: n.readonly(n.array(i.hex())),
        eoa: i.address(),
        executionData: i.hex(),
        expiry: i.bigint(),
        funder: i.address(),
        funderSignature: i.hex(),
        isMultichain: n.boolean(),
        nonce: i.bigint(),
        payer: i.address(),
        paymentAmount: i.bigint(),
        paymentMaxAmount: i.bigint(),
        paymentRecipient: i.address(),
        paymentSignature: i.hex(),
        paymentToken: i.address(),
        settler: i.address(),
        settlerContext: i.hex(),
        signature: i.hex(),
        supportedAccountImplementation: i.address(),
      }),
      n.object({
        combinedGas: i.bigint(),
        encodedFundTransfers: n.readonly(n.array(i.hex())),
        encodedPreCalls: n.readonly(n.array(i.hex())),
        eoa: i.address(),
        executionData: i.hex(),
        expiry: i.bigint(),
        funder: i.address(),
        funderSignature: i.hex(),
        isMultichain: n.boolean(),
        nonce: i.bigint(),
        payer: i.address(),
        paymentRecipient: i.address(),
        paymentSignature: i.hex(),
        paymentToken: i.address(),
        prePaymentAmount: i.bigint(),
        prePaymentMaxAmount: i.bigint(),
        settler: i.address(),
        settlerContext: i.hex(),
        signature: i.hex(),
        supportedAccountImplementation: i.address(),
        totalPaymentAmount: i.bigint(),
        totalPaymentMaxAmount: i.bigint(),
      }),
    ]);
    n.object({ eoa: i.address(), executionData: i.hex(), nonce: i.bigint() });
    let a = t.z.object({
        address: t.z.union([i.address(), t.z.null()]),
        decimals: t.z.optional(t.z.number()),
        deficit: i.bigint(),
        fiat: t.z.optional(
          t.z.object({ currency: t.z.string(), value: t.z.string() })
        ),
        name: t.z.optional(t.z.string()),
        required: i.bigint(),
        symbol: t.z.optional(t.z.string()),
      }),
      o = t.z.object({
        additionalAuthorization: t.z.nullish(
          t.z.object({
            address: i.address(),
            chainId: i.number(),
            nonce: i.number(),
            r: i.hex(),
            s: i.hex(),
            yParity: i.number(),
          })
        ),
        assetDeficits: t.z.optional(t.z.array(a)),
        authorizationAddress: t.z.optional(
          t.z.union([i.address(), t.z.null()])
        ),
        chainId: i.number(),
        ethPrice: i.bigint(),
        extraPayment: i.bigint(),
        feeTokenDeficit: i.bigint(),
        intent: r,
        nativeFeeEstimate: t.z.object({
          maxFeePerGas: i.bigint(),
          maxPriorityFeePerGas: i.bigint(),
        }),
        orchestrator: i.address(),
        paymentTokenDecimals: t.z.number(),
        txGas: i.bigint(),
      }),
      s = t.z.object({
        multiChainRoot: t.z.optional(t.z.union([i.hex(), t.z.null()])),
        quotes: t.z.readonly(t.z.array(o)).check(t.z.minLength(1)),
        ttl: t.z.number(),
      }),
      u = t.z.object({
        ...s.shape,
        hash: i.hex(),
        r: i.hex(),
        s: i.hex(),
        v: t.z.optional(i.hex()),
        yParity: t.z.optional(i.hex()),
      });
    e.s(["Signed", 0, u], 952294);
  },
  346223,
  224219,
  992804,
  (e) => {
    "use strict";
    e.i(938819);
    var t,
      i,
      n,
      r,
      a,
      o,
      s,
      u,
      l,
      d = e.i(786345),
      c = e.i(822315);
    let m = d.object({
        selector: c.hex(),
        to: c.address(),
        type: d.literal("call"),
      }),
      p = d.object({
        limit: c.bigint(),
        period: d.union([
          d.literal("minute"),
          d.literal("hour"),
          d.literal("day"),
          d.literal("week"),
          d.literal("month"),
          d.literal("year"),
        ]),
        token: d.optional(d.union([c.address(), d.null()])),
        type: d.literal("spend"),
      }),
      f = d.union([m, p]),
      g = d.object({
        expiry: c.number(),
        prehash: d.optional(d.boolean()),
        publicKey: c.hex(),
        role: d.union([d.literal("admin"), d.literal("normal")]),
        type: d.union([
          d.literal("p256"),
          d.literal("secp256k1"),
          d.literal("webauthnp256"),
        ]),
      }),
      v = d.object({ ...g.shape, permissions: d.readonly(d.array(f)) });
    e.s(["Key", 0, g, "WithPermissions", 0, v], 224219),
      ((t = r || (r = {})).AssetDiffAsset = d.union([
        d.object({
          address: d.optional(d.union([c.address(), d.null()])),
          decimals: d.optional(d.union([d.number(), d.null()])),
          direction: d.union([d.literal("incoming"), d.literal("outgoing")]),
          fiat: d.optional(
            d.object({
              currency: d.string(),
              value: d.codec(d.string(), d.number(), {
                decode: (e) => Number(e),
                encode: (e) => String(e),
              }),
            })
          ),
          name: d.optional(d.union([d.string(), d.null()])),
          symbol: d.string(),
          type: d.literal("erc20"),
          value: c.bigint(),
        }),
        d.object({
          address: d.optional(d.union([c.address(), d.null()])),
          direction: d.union([d.literal("incoming"), d.literal("outgoing")]),
          fiat: d.optional(
            d.object({
              currency: d.string(),
              value: d.codec(d.string(), d.number(), {
                decode: (e) => Number(e),
                encode: (e) => String(e),
              }),
            })
          ),
          name: d.optional(d.union([d.string(), d.null()])),
          symbol: d.string(),
          type: d.literal("erc721"),
          uri: d.string(),
          value: c.bigint(),
        }),
        d.object({
          address: d.null(),
          decimals: d.optional(d.union([d.number(), d.null()])),
          direction: d.union([d.literal("incoming"), d.literal("outgoing")]),
          fiat: d.optional(
            d.object({
              currency: d.string(),
              value: d.codec(d.string(), d.number(), {
                decode: (e) => Number(e),
                encode: (e) => String(e),
              }),
            })
          ),
          symbol: d.string(),
          type: d.null(),
          value: c.bigint(),
        }),
      ])),
      (t.Response = d.record(
        c.hex(),
        d.readonly(
          d.array(
            d.readonly(
              d.tuple([c.address(), d.readonly(d.array(t.AssetDiffAsset))])
            )
          )
        )
      )),
      ((i = a || (a = {})).Request = d.readonly(d.array(v))),
      (i.Response = d.readonly(
        d.array(d.object({ ...v.shape, hash: c.hex() }))
      )),
      ((o || (o = {})).Response = d.record(
        c.hex(),
        d.object({ currency: d.string(), value: d.string() })
      )),
      ((s || (s = {})).Request = d.object({
        feePayer: d.optional(c.address()),
        feeToken: d.optional(c.address()),
        nonce: d.optional(c.bigint()),
      })),
      ((u || (u = {})).Request = d.readonly(
        d.array(d.object({ address: c.address(), value: c.bigint() }))
      )),
      ((n = l || (l = {})).Request = d.readonly(
        d.array(d.object({ hash: c.hex() }))
      )),
      (n.Response = d.readonly(d.array(d.object({ hash: c.hex() })))),
      e.s(
        [
          "assetDiffs",
          () => r,
          "authorizeKeys",
          () => a,
          "feeTotals",
          () => o,
          "meta",
          () => s,
          "requiredFunds",
          () => u,
          "revokeKeys",
          () => l,
        ],
        346223
      );
    let h = d.object({
        eoa: c.address(),
        executionData: c.hex(),
        nonce: c.hex(),
        signature: c.hex(),
      }),
      $ = d.object({ ...h.shape, chainId: c.number() });
    e.s(["Context", 0, $, "PreCall", 0, h], 992804);
  },
  688092,
  821284,
  578286,
  (e) => {
    "use strict";
    let t, i;
    e.i(938819);
    var n,
      r,
      a,
      o,
      s,
      u,
      l,
      d,
      c,
      m,
      p,
      f,
      g,
      v,
      h,
      $,
      b,
      y,
      _,
      x,
      k,
      I,
      w,
      S,
      z,
      j,
      Z,
      U,
      O,
      P,
      D,
      E,
      N,
      R,
      A,
      T,
      M,
      C,
      L,
      q,
      F,
      J,
      K,
      B,
      V,
      G,
      W,
      X,
      H,
      Y,
      Q,
      ee,
      et,
      ei,
      en,
      er,
      ea,
      eo,
      es,
      eu,
      el,
      ed,
      ec,
      em,
      ep,
      ef,
      eg,
      ev,
      eh,
      e$,
      eb,
      ey,
      e_,
      ex,
      ek,
      eI,
      ew,
      eS,
      ez,
      ej,
      eZ,
      eU,
      eO,
      eP,
      eD,
      eE,
      eN,
      eR,
      eA,
      eT,
      eM,
      eC,
      eL,
      eq,
      eF,
      eJ,
      eK,
      eB,
      eV,
      eG,
      eW,
      eX,
      eH,
      eY,
      eQ,
      e0,
      e4,
      e6,
      e1,
      e2,
      e9,
      e3,
      e7,
      e8,
      e5,
      te,
      tt,
      ti,
      tn,
      tr,
      ta,
      to,
      ts,
      tu,
      tl,
      td,
      tc = e.i(786345),
      tm = e.i(952294),
      tp = e.i(623369),
      tf = e.i(822315),
      tg = e.i(346223),
      tv = e.i(224219),
      th = e.i(992804);
    let t$ = tc.object({
        address: tf.address(),
        decimals: tc.number(),
        feeToken: tc.optional(tc.boolean()),
        interop: tc.optional(tc.boolean()),
        nativeRate: tc.optional(tf.bigint()),
        symbol: tc.string(),
        uid: tc.string(),
      }),
      tb = tc.string().check(tp.regex(/^[A-Z0-9]+$/)),
      ty = tc.object({
        address: tf.address(),
        chainId: tf.number(),
        nonce: tf.number(),
      }),
      t_ = tc.object({
        ...ty.shape,
        r: tf.hex(),
        s: tf.hex(),
        yParity: tf.number(),
      }),
      tx = tc.object({
        data: tc.optional(tf.hex()),
        to: tf.address(),
        value: tc.optional(tf.bigint()),
      });
    ((n = el || (el = {})).Parameters = tc.object({
      address: tf.address(),
      secret: tc.string(),
    })),
      (n.Request = tc.object({
        method: tc.literal("account_getOnrampContactInfo"),
        params: tc.readonly(tc.tuple([n.Parameters])),
      })),
      (n.Response = tc.object({
        email: tc.optional(tc.string()),
        phone: tc.optional(tc.string()),
        phoneVerifiedAt: tc.optional(tc.number()),
      })),
      ((r = ed || (ed = {})).Parameters = tc.object({ address: tf.address() })),
      (r.Request = tc.object({
        method: tc.literal("account_onrampStatus"),
        params: tc.readonly(tc.tuple([r.Parameters])),
      })),
      (r.Response = tc.object({
        email: tc.optional(tc.number()),
        phone: tc.optional(tc.number()),
      })),
      ((a = ec || (ec = {})).Parameters = tc.object({
        phone: tc.string(),
        walletAddress: tf.address(),
      })),
      (a.Request = tc.object({
        method: tc.literal("account_resendVerifyPhone"),
        params: tc.readonly(tc.tuple([a.Parameters])),
      })),
      (a.Response = tc.null()),
      ((o = em || (em = {})).Parameters = tc.object({
        email: tc.string().check(tp.regex(/^.*@.*$/)),
        walletAddress: tf.address(),
      })),
      (o.Request = tc.object({
        method: tc.literal("account_setEmail"),
        params: tc.readonly(tc.tuple([o.Parameters])),
      })),
      (o.Response = tc.null()),
      ((s = ep || (ep = {})).Parameters = tc.object({
        phone: tc.string(),
        walletAddress: tf.address(),
      })),
      (s.Request = tc.object({
        method: tc.literal("account_setPhone"),
        params: tc.readonly(tc.tuple([s.Parameters])),
      })),
      (s.Response = tc.null()),
      ((u = ef || (ef = {})).Parameters = tc.object({
        chainId: tf.number(),
        email: tc.string(),
        signature: tf.hex(),
        token: tc.string(),
        walletAddress: tf.address(),
      })),
      (u.Request = tc.object({
        method: tc.literal("account_verifyEmail"),
        params: tc.readonly(tc.tuple([u.Parameters])),
      })),
      (u.Response = tc.null()),
      ((l = eg || (eg = {})).Parameters = tc.object({
        code: tc.string(),
        phone: tc.string(),
        walletAddress: tf.address(),
      })),
      (l.Request = tc.object({
        method: tc.literal("account_verifyPhone"),
        params: tc.readonly(tc.tuple([l.Parameters])),
      })),
      (l.Response = tc.null()),
      ((d = ev || (ev = {})).Request = tc.object({
        method: tc.literal("health"),
        params: tc.undefined(),
      })),
      (d.Response = tc.object({
        quoteSigner: tf.address(),
        status: tc.string(),
        version: tc.string(),
      })),
      ((c = eh || (eh = {})).Parameters = tc.object({
        address: tf.address(),
        chainId: tf.number(),
        tokenAddress: tf.address(),
        value: tf.bigint(),
      })),
      (c.Request = tc.object({
        method: tc.literal("wallet_addFaucetFunds"),
        params: tc.readonly(tc.tuple([c.Parameters])),
      })),
      (c.Response = tc.object({
        message: tc.optional(tc.string()),
        transactionHash: tf.hex(),
      })),
      ((m = e$ || (e$ = {})).Parameters = tc.object({
        chainId: tf.number(),
        id: tf.hex(),
      })),
      (m.Request = tc.object({
        method: tc.literal("wallet_getAccounts"),
        params: tc.readonly(tc.tuple([m.Parameters])),
      })),
      (m.Response = tc.readonly(
        tc.array(
          tc.object({ address: tf.address(), keys: tg.authorizeKeys.Response })
        )
      )),
      ((p = eb || (eb = {})).Parameters = tc.object({ address: tf.address() })),
      (p.Request = tc.object({
        method: tc.literal("wallet_getAuthorization"),
        params: tc.readonly(tc.tuple([p.Parameters])),
      })),
      (p.Response = tc.object({
        authorization: t_,
        data: tf.hex(),
        to: tf.address(),
      })),
      ((f = ey || (ey = {})).Request = tc.object({
        method: tc.literal("wallet_getCapabilities"),
        params: tc.optional(tc.tuple([tc.readonly(tc.array(tc.number()))])),
      })),
      (t = tc.object({
        address: tf.address(),
        version: tc.optional(tc.union([tc.string(), tc.null()])),
      })),
      (f.Response = tc.record(
        tf.hex(),
        tc.object({
          contracts: tc.object({
            accountImplementation: t,
            accountProxy: t,
            legacyAccountImplementations: tc.readonly(tc.array(t)),
            legacyOrchestrators: tc.readonly(
              tc.array(
                tc.union([tc.object({ orchestrator: t, simulator: t }), t])
              )
            ),
            orchestrator: t,
            simulator: t,
          }),
          fees: tc.object({
            quoteConfig: tc.object({
              constantRate: tc.optional(tc.union([tc.number(), tc.null()])),
              gas: tc.optional(
                tc.object({
                  intentBuffer: tc.optional(tc.number()),
                  txBuffer: tc.optional(tc.number()),
                })
              ),
              rateTtl: tc.number(),
              ttl: tc.number(),
            }),
            recipient: tf.address(),
            tokens: tc.readonly(tc.array(t$)),
          }),
        })
      )),
      (g = e_ || (e_ = {})),
      (i = tc.union([
        tc.literal("native"),
        tc.literal("erc20"),
        tc.literal("erc721"),
        tc.string(),
      ])),
      (g.Parameters = tc.object({
        account: tf.address(),
        assetFilter: tc.optional(
          tc.record(
            tf.hex(),
            tc.readonly(
              tc.array(
                tc.object({
                  address: tc.union([tf.address(), tc.literal("native")]),
                  type: i,
                })
              )
            )
          )
        ),
        assetTypeFilter: tc.optional(tc.readonly(tc.array(i))),
        chainFilter: tc.optional(tc.readonly(tc.array(tf.number()))),
      })),
      (g.Request = tc.object({
        method: tc.literal("wallet_getAssets"),
        params: tc.readonly(tc.tuple([g.Parameters])),
      })),
      (g.Price = tc.object({
        currency: tc.string(),
        value: tc.codec(tc.string(), tc.number(), {
          decode: (e) => Number(e),
          encode: (e) => String(e),
        }),
      })),
      (g.Response = tc.record(
        tc.string(),
        tc.readonly(
          tc.array(
            tf.oneOf([
              tc.object({
                address: tf.address(),
                balance: tf.bigint(),
                metadata: tc.nullable(
                  tc.object({
                    decimals: tc.number(),
                    fiat: tc.nullish(g.Price),
                    name: tc.string(),
                    symbol: tc.string(),
                  })
                ),
                type: tc.literal("erc20"),
              }),
              tc.object({
                address: tc.nullable(tc.literal("native")),
                balance: tf.bigint(),
                metadata: tc.nullable(
                  tc.object({
                    decimals: tc.number(),
                    fiat: tc.nullish(g.Price),
                    name: tc.optional(tc.string()),
                    symbol: tc.optional(tc.string()),
                  })
                ),
                type: tc.literal("native"),
              }),
            ])
          )
        )
      )),
      ((v = ex || (ex = {})).Request = tc.object({
        method: tc.literal("wallet_getCallsStatus"),
        params: tc.readonly(tc.tuple([tf.hex()])),
      })),
      (v.Response = tc.object({
        id: tc.string(),
        receipts: tc.optional(
          tc.readonly(
            tc.array(
              tc.object({
                blockHash: tf.hex(),
                blockNumber: tf.number(),
                chainId: tf.number(),
                gasUsed: tf.number(),
                logs: tc.readonly(
                  tc.array(
                    tc.object({
                      address: tf.address(),
                      data: tf.hex(),
                      topics: tc.readonly(tc.array(tf.hex())),
                    })
                  )
                ),
                status: tf.hex(),
                transactionHash: tf.hex(),
              })
            )
          )
        ),
        status: tc.number(),
      })),
      ((h = ek || (ek = {})).Parameters = tc.object({
        address: tf.address(),
        chainIds: tc.optional(tc.readonly(tc.array(tf.number()))),
      })),
      (h.Request = tc.object({
        method: tc.literal("wallet_getKeys"),
        params: tc.readonly(tc.tuple([h.Parameters])),
      })),
      (h.Response = tc.record(tf.hex(), tg.authorizeKeys.Response)),
      (($ = eI || (eI = {})).Capabilities = tc.object({
        authorizeKeys: tc.optional(tg.authorizeKeys.Request),
        meta: tg.meta.Request,
        preCall: tc.optional(tc.boolean()),
        preCalls: tc.optional(tc.readonly(tc.array(th.PreCall))),
        requiredFunds: tc.optional(tg.requiredFunds.Request),
        revokeKeys: tc.optional(tg.revokeKeys.Request),
      })),
      ($.ResponseCapabilities = tc.object({
        assetDiffs: tc.optional(tg.assetDiffs.Response),
        authorizeKeys: tc.nullish(tg.authorizeKeys.Response),
        feePayerDigest: tc.optional(tf.hex()),
        feeSignature: tc.optional(tf.hex()),
        feeTotals: tc.optional(tg.feeTotals.Response),
        revokeKeys: tc.nullish(tg.revokeKeys.Response),
      })),
      ($.Parameters = tc.object({
        calls: tc.readonly(tc.array(tx)),
        capabilities: $.Capabilities,
        chainId: tf.number(),
        from: tc.optional(tf.address()),
        key: tc.optional(
          tc.object({
            prehash: tc.boolean(),
            publicKey: tf.hex(),
            type: tv.Key.shape.type,
          })
        ),
      })),
      ($.Request = tc.object({
        method: tc.literal("wallet_prepareCalls"),
        params: tc.readonly(tc.tuple([$.Parameters])),
      })),
      ($.Response = tc.object({
        capabilities: $.ResponseCapabilities,
        context: tc.object({
          preCall: tc.optional(tc.partial(th.Context)),
          quote: tc.optional(tc.partial(tm.Signed)),
        }),
        digest: tf.hex(),
        key: tc.nullish(
          tc.object({
            prehash: tc.boolean(),
            publicKey: tf.hex(),
            type: tv.Key.shape.type,
          })
        ),
        signature: tf.hex(),
        typedData: tc.object({
          domain: tc.union([
            tc.object({
              chainId: tc.union([tf.number(), tc.number()]),
              name: tc.string(),
              verifyingContract: tf.address(),
              version: tc.string(),
            }),
            tc.object({}),
          ]),
          message: tc.record(tc.string(), tc.unknown()),
          primaryType: tc.string(),
          types: tc.record(tc.string(), tc.unknown()),
        }),
      })),
      ((b = ew || (ew = {})).Capabilities = tc.object({
        authorizeKeys: tg.authorizeKeys.Request,
      })),
      (b.Parameters = tc.object({
        address: tf.address(),
        capabilities: b.Capabilities,
        chainId: tc.optional(tc.number()),
        delegation: tf.address(),
      })),
      (b.Request = tc.object({
        method: tc.literal("wallet_prepareUpgradeAccount"),
        params: tc.readonly(tc.tuple([b.Parameters])),
      })),
      (b.Response = tc.object({
        capabilities: b.Capabilities,
        chainId: tf.number(),
        context: tc.object({
          address: tf.address(),
          authorization: ty,
          chainId: tf.number(),
          preCall: th.PreCall,
        }),
        digests: tc.object({ auth: tf.hex(), exec: tf.hex() }),
        typedData: tc.object({
          domain: tc.union([
            tc.object({
              chainId: tc.union([tf.number(), tc.number()]),
              name: tc.string(),
              verifyingContract: tf.address(),
              version: tc.string(),
            }),
            tc.object({}),
          ]),
          message: tc.record(tc.string(), tc.unknown()),
          primaryType: tc.string(),
          types: tc.record(tc.string(), tc.unknown()),
        }),
      })),
      ((y = eS || (eS = {})).Request = tc.object({
        method: tc.literal("wallet_feeTokens"),
        params: tc.optional(tc.undefined()),
      })),
      (y.Response = tc.record(
        tf.hex(),
        tc.readonly(
          tc.array(
            tc.object({
              address: tf.address(),
              decimals: tc.number(),
              nativeRate: tc.optional(tf.bigint()),
              symbol: tc.string(),
            })
          )
        )
      )),
      ((_ = ez || (ez = {})).Parameters = tc.object({
        capabilities: tc.optional(
          tc.object({ feeSignature: tc.optional(tf.hex()) })
        ),
        context: tc.object({
          preCall: tc.optional(tc.partial(th.Context)),
          quote: tc.optional(tc.partial(tm.Signed)),
        }),
        key: tc.optional(
          tc.object({
            prehash: tc.boolean(),
            publicKey: tf.hex(),
            type: tv.Key.shape.type,
          })
        ),
        signature: tf.hex(),
      })),
      (_.Request = tc.object({
        method: tc.literal("wallet_sendPreparedCalls"),
        params: tc.readonly(tc.tuple([_.Parameters])),
      })),
      (_.Response = tc.object({ id: tf.hex() })),
      ((x = ej || (ej = {})).Parameters = tc.object({
        context: tc.object({
          address: tf.address(),
          authorization: ty,
          chainId: tf.number(),
          preCall: th.PreCall,
        }),
        signatures: tc.object({ auth: tf.hex(), exec: tf.hex() }),
      })),
      (x.Request = tc.object({
        method: tc.literal("wallet_upgradeAccount"),
        params: tc.readonly(tc.tuple([x.Parameters])),
      })),
      (x.Response = tc.undefined()),
      ((k = eZ || (eZ = {})).Parameters = tc.object({
        address: tf.hex(),
        chainId: tf.number(),
        digest: tf.hex(),
        signature: tf.hex(),
      })),
      (k.Request = tc.object({
        method: tc.literal("wallet_verifySignature"),
        params: tc.readonly(tc.tuple([k.Parameters])),
      })),
      (k.Response = tc.object({
        proof: tc.nullish(
          tc.object({
            account: tf.address(),
            initPreCall: tc.nullish(th.PreCall),
            keyHash: tf.hex(),
          })
        ),
        valid: tc.boolean(),
      })),
      e.s(
        [
          "account_getOnrampContactInfo",
          () => el,
          "account_onrampStatus",
          () => ed,
          "account_resendVerifyPhone",
          () => ec,
          "account_setEmail",
          () => em,
          "account_setPhone",
          () => ep,
          "account_verifyEmail",
          () => ef,
          "account_verifyPhone",
          () => eg,
          "health",
          () => ev,
          "wallet_addFaucetFunds",
          () => eh,
          "wallet_getAssets",
          () => e_,
          "wallet_getAuthorization",
          () => eb,
          "wallet_getCallsStatus",
          () => ex,
          "wallet_getCapabilities",
          () => ey,
          "wallet_getKeys",
          () => ek,
          "wallet_prepareCalls",
          () => eI,
          "wallet_prepareUpgradeAccount",
          () => ew,
          "wallet_sendPreparedCalls",
          () => ez,
          "wallet_upgradeAccount",
          () => ej,
          "wallet_verifySignature",
          () => eZ,
        ],
        821284
      );
    let tk = tc.object({
        chainId: tc.optional(tf.number()),
        expiry: tf.number(),
        hash: tf.hex(),
        id: tf.hex(),
        prehash: tc.optional(tc.boolean()),
        publicKey: tf.hex(),
        role: tc.union([tc.literal("admin"), tc.literal("session")]),
        type: tc.union([
          tc.literal("address"),
          tc.literal("p256"),
          tc.literal("secp256k1"),
          tc.literal("webauthn-p256"),
        ]),
      }),
      tI = tc.readonly(
        tc
          .array(
            tf.oneOf([
              tc.object({ signature: tc.string(), to: tf.address() }),
              tc.object({ signature: tc.string() }),
              tc.object({ to: tf.address() }),
            ])
          )
          .check(tp.minLength(1))
      ),
      tw = tc.object({
        limit: tc
          .union([
            tc.templateLiteral([tc.number(), ".", tc.number()]),
            tc.templateLiteral([tc.number()]),
          ])
          .check(tp.regex(/^\d+(\.\d+)?$/)),
        symbol: tc.optional(tc.union([tc.literal("native"), tb])),
      }),
      tS = tc.object({ addresses: tc.readonly(tc.array(tf.address())) }),
      tz = tc.readonly(
        tc.array(
          tc.object({
            limit: tf.bigint(),
            period: tc.union([
              tc.literal("minute"),
              tc.literal("hour"),
              tc.literal("day"),
              tc.literal("week"),
              tc.literal("month"),
              tc.literal("year"),
            ]),
            token: tc.optional(tf.address()),
          })
        )
      ),
      tj = tc.object({
        calls: tc.optional(tI),
        signatureVerification: tc.optional(tS),
        spend: tc.optional(tz),
      }),
      tZ = tc.object({
        ...tk.shape,
        feeToken: tc.optional(tc.nullable(tw)),
        permissions: tc.optional(tj),
      }),
      tU = tc.object({
        address: tf.address(),
        chainId: tc.optional(tf.number()),
        expiry: tc.number(),
        id: tf.hex(),
        key: tc.pick(tk, { publicKey: !0, type: !0 }),
        permissions: tc.object({
          calls: tI,
          signatureVerification: tc.optional(tS),
          spend: tc.optional(tz),
        }),
      }),
      tO = tc.object({
        address: tc.optional(tf.address()),
        chainId: tc.optional(tf.number()),
        expiry: tc.number().check(tp.gte(1)),
        feeToken: tc.nullable(tw),
        key: tc.optional(tc.pick(tk, { publicKey: !0, type: !0 })),
        permissions: tc.object({
          calls: tI,
          signatureVerification: tc.optional(tS),
          spend: tc.optional(tz),
        }),
      });
    e.s(["Permissions", 0, tU, "Request", 0, tO], 578286),
      ((eU || (eU = {})).GetCapabilitiesResponse = tc.object({
        status: tc.union([tc.literal("supported"), tc.literal("unsupported")]),
      })),
      ((eO || (eO = {})).Request = tc.union([
        tc.boolean(),
        tc.object({
          chainId: tc.optional(tf.number()),
          label: tc.optional(tc.string()),
        }),
      ])),
      ((I = eP || (eP = {})).Request = tf.oneOf([
        tc.object({
          chainId: tc.optional(tc.number()),
          domain: tc.optional(tc.string()),
          expirationTime: tc.optional(tc.date()),
          issuedAt: tc.optional(tc.date()),
          nonce: tc.string(),
          notBefore: tc.optional(tc.date()),
          requestId: tc.optional(tc.string()),
          resources: tc.optional(tc.readonly(tc.array(tc.string()))),
          scheme: tc.optional(tc.string()),
          statement: tc.optional(tc.string()),
          uri: tc.optional(tc.string()),
          version: tc.optional(tc.literal("1")),
        }),
        tc.object({
          authUrl: tc.union([
            tc.string(),
            tc.object({
              logout: tc.string(),
              nonce: tc.string(),
              verify: tc.string(),
            }),
          ]),
          chainId: tc.optional(tf.number()),
          domain: tc.optional(tc.string()),
          expirationTime: tc.optional(tc.date()),
          issuedAt: tc.optional(tc.date()),
          notBefore: tc.optional(tc.date()),
          requestId: tc.optional(tc.string()),
          resources: tc.optional(tc.readonly(tc.array(tc.string()))),
          scheme: tc.optional(tc.string()),
          statement: tc.optional(tc.string()),
          uri: tc.optional(tc.string()),
          version: tc.optional(tc.literal("1")),
        }),
      ])),
      (I.Response = tc.object({
        message: tc.string(),
        signature: tf.hex(),
        token: tc.optional(tc.string()),
      })),
      ((w = eD || (eD = {})).GetCapabilitiesResponse = tc.object({
        supported: tc.boolean(),
        tokens: tc.readonly(tc.array(t$)),
      })),
      (w.Request = tc.union([tb, tf.address()])),
      ((eE || (eE = {})).Request = tO),
      ((eN || (eN = {})).GetCapabilitiesResponse = tc.object({
        supported: tc.boolean(),
      })),
      ((S = eR || (eR = {})).GetCapabilitiesResponse = tc.object({
        supported: tc.boolean(),
      })),
      (S.Request = tc.object({
        id: tc.optional(tc.union([tf.hex(), tc.null()])),
      })),
      (S.Response = tc.readonly(tc.array(tU))),
      ((z = eA || (eA = {})).Request = tc.readonly(
        tc.array(tc.object({ context: tc.unknown(), signature: tf.hex() }))
      )),
      (z.Response = z.Request),
      ((eT || (eT = {})).Request = tc.string()),
      ((j = eM || (eM = {})).GetCapabilitiesResponse = tc.object({
        supported: tc.boolean(),
        tokens: tc.readonly(tc.array(t$)),
      })),
      (j.Request = tc.readonly(
        tc.array(
          tf.oneOf([
            tc.object({ address: tf.address(), value: tf.bigint() }),
            tc.object({
              symbol: tb,
              value: tc
                .union([
                  tc.templateLiteral([tc.number(), ".", tc.number()]),
                  tc.templateLiteral([tc.number()]),
                ])
                .check(tp.regex(/^\d+(\.\d+)?$/)),
            }),
          ])
        )
      ));
    let tP = tc.object({
      ...tc.pick(tk, { id: !0, publicKey: !0, type: !0 }).shape,
      credentialId: tc.optional(tc.string()),
      privateKey: tc.optional(tc.any()),
    });
    ((Z = eC || (eC = {})).Parameters = tc.object({
      address: tf.address(),
      secret: tc.string(),
    })),
      (Z.Request = tc.object({
        method: tc.literal("account_getOnrampContactInfo"),
        params: tc.readonly(tc.tuple([Z.Parameters])),
      })),
      (Z.Response = tc.object({
        email: tc.optional(tc.string()),
        phone: tc.optional(tc.string()),
        phoneVerifiedAt: tc.optional(tc.number()),
      })),
      ((U = eL || (eL = {})).Parameters = tc.object({ address: tf.address() })),
      (U.Request = tc.object({
        method: tc.literal("account_onrampStatus"),
        params: tc.readonly(tc.tuple([U.Parameters])),
      })),
      (U.Response = tc.object({
        email: tc.optional(tc.number()),
        phone: tc.optional(tc.number()),
      })),
      ((O = eq || (eq = {})).Parameters = tc.object({
        email: tc.string(),
        walletAddress: tf.address(),
      })),
      (O.Request = tc.object({
        method: tc.literal("account_resendVerifyPhone"),
        params: tc.readonly(tc.tuple([O.Parameters])),
      })),
      (O.Response = tc.null()),
      ((P = eF || (eF = {})).Parameters = tc.object({
        email: tc.string(),
        walletAddress: tf.address(),
      })),
      (P.Request = tc.object({
        method: tc.literal("account_setEmail"),
        params: tc.readonly(tc.tuple([P.Parameters])),
      })),
      (P.Response = tc.null()),
      ((D = eJ || (eJ = {})).Parameters = tc.object({
        email: tc.string(),
        walletAddress: tf.address(),
      })),
      (D.Request = tc.object({
        method: tc.literal("account_setPhone"),
        params: tc.readonly(tc.tuple([D.Parameters])),
      })),
      (D.Response = tc.null()),
      ((E = eK || (eK = {})).Parameters = tc.object({
        chainId: tf.number(),
        email: tc.string(),
        token: tc.string(),
        walletAddress: tf.address(),
      })),
      (E.Request = tc.object({
        method: tc.literal("account_verifyEmail"),
        params: tc.readonly(tc.tuple([E.Parameters])),
      })),
      (E.Response = tc.null()),
      ((N = eB || (eB = {})).Parameters = tc.object({
        code: tc.string(),
        phone: tc.string(),
        walletAddress: tf.address(),
      })),
      (N.Request = tc.object({
        method: tc.literal("account_verifyPhone"),
        params: tc.readonly(tc.tuple([N.Parameters])),
      })),
      (N.Response = tc.null()),
      ((R = eV || (eV = {})).Parameters = tc.object({
        address: tc.optional(tf.address()),
        chainId: tc.optional(tf.number()),
        token: tc.optional(tf.address()),
        value: tc.optional(tc.string()),
      })),
      (R.Request = tc.object({
        method: tc.literal("wallet_addFunds"),
        params: tc.readonly(tc.tuple([R.Parameters])),
      })),
      (R.Response = tc.object({ id: tf.hex() })),
      ((A = eG || (eG = {})).Request = tc.object({
        method: tc.literal("eth_accounts"),
        params: tc.optional(tc.unknown()),
      })),
      (A.Response = tc.readonly(tc.array(tf.address()))),
      ((T = eW || (eW = {})).Request = tc.object({
        method: tc.literal("eth_chainId"),
        params: tc.optional(tc.unknown()),
      })),
      (T.Response = tf.hex()),
      ((M = eX || (eX = {})).Request = tc.object({
        method: tc.literal("eth_requestAccounts"),
        params: tc.optional(tc.unknown()),
      })),
      (M.Response = tc.readonly(tc.array(tf.address()))),
      ((C = eH || (eH = {})).Request = tc.object({
        method: tc.literal("eth_sendTransaction"),
        params: tc.readonly(
          tc.tuple([
            tc.object({
              capabilities: tc.optional(
                tc.object({
                  feeToken: tc.optional(eD.Request),
                  merchantUrl: tc.optional(eT.Request),
                  preCalls: tc.optional(eA.Request),
                })
              ),
              chainId: tc.optional(tf.number()),
              data: tc.optional(tf.hex()),
              from: tc.optional(tf.address()),
              to: tf.address(),
              value: tc.optional(tf.bigint()),
            }),
          ])
        ),
      })),
      (C.Response = tf.hex()),
      ((L = eY || (eY = {})).Request = tc.object({
        method: tc.literal("eth_signTypedData_v4"),
        params: tc.readonly(tc.tuple([tf.address(), tc.string()])),
      })),
      (L.Response = tf.hex()),
      ((q = eQ || (eQ = {})).Parameters = tc.object({
        address: tc.optional(tf.address()),
        chainId: tc.optional(tf.number()),
      })),
      (q.Request = tc.object({
        method: tc.literal("wallet_getAdmins"),
        params: tc.optional(tc.readonly(tc.tuple([q.Parameters]))),
      })),
      (q.Key = tP),
      (q.Response = tc.object({
        address: tf.address(),
        chainId: tf.number(),
        keys: tc.readonly(tc.array(q.Key)),
      })),
      ((F = e0 || (e0 = {})).Capabilities = tc.object({
        feeToken: tc.optional(eD.Request),
      })),
      (F.Parameters = tc.object({
        address: tc.optional(tf.address()),
        capabilities: tc.optional(F.Capabilities),
        chainId: tc.optional(tf.number()),
        key: tc.pick(tk, { publicKey: !0, type: !0 }),
      })),
      (F.Request = tc.object({
        method: tc.literal("wallet_grantAdmin"),
        params: tc.readonly(tc.tuple([F.Parameters])),
      })),
      (F.Response = tc.object({
        address: tf.address(),
        chainId: tf.number(),
        key: eQ.Key,
      })),
      ((J = e4 || (e4 = {})).Parameters = tO),
      (J.Request = tc.object({
        method: tc.literal("wallet_grantPermissions"),
        params: tc.readonly(tc.tuple([J.Parameters])),
      })),
      (J.ResponseCapabilities = tc.object({
        preCalls: tc.optional(eA.Response),
      })),
      (J.Response = tc.object({
        ...tU.shape,
        capabilities: tc.optional(tc.any()),
      })),
      ((K = e6 || (e6 = {})).Parameters = tc.object({
        address: tc.optional(tf.address()),
      })),
      (K.Request = tc.object({
        method: tc.literal("wallet_getAccountVersion"),
        params: tc.optional(tc.readonly(tc.tuple([K.Parameters]))),
      })),
      (K.Response = tc.object({ current: tc.string(), latest: tc.string() })),
      ((B = e1 || (e1 = {})).Parameters = tc.object({
        address: tc.optional(tf.address()),
        chainIds: tc.optional(tc.readonly(tc.array(tf.number()))),
      })),
      (B.Request = tc.object({
        method: tc.literal("wallet_getPermissions"),
        params: tc.optional(tc.readonly(tc.tuple([B.Parameters]))),
      })),
      (B.Response = eR.Response),
      ((V = e2 || (e2 = {})).Capabilities = tc.object({
        feeToken: tc.optional(eD.Request),
      })),
      (V.Parameters = tc.object({
        address: tc.optional(tf.address()),
        capabilities: tc.optional(V.Capabilities),
        chainId: tc.optional(tf.number()),
        id: tf.hex(),
      })),
      (V.Request = tc.object({
        method: tc.literal("wallet_revokeAdmin"),
        params: tc.readonly(tc.tuple([V.Parameters])),
      })),
      (V.Response = void 0),
      ((G = e9 || (e9 = {})).Capabilities = tc.object({
        feeToken: tc.optional(eD.Request),
      })),
      (G.Parameters = tc.object({
        address: tc.optional(tf.address()),
        capabilities: tc.optional(G.Capabilities),
        id: tf.hex(),
      })),
      (G.Request = tc.object({
        method: tc.literal("wallet_revokePermissions"),
        params: tc.readonly(tc.tuple([G.Parameters])),
      })),
      (G.Response = void 0),
      ((e3 || (e3 = {})).Request = tc.object({
        method: tc.literal("wallet_switchEthereumChain"),
        params: tc.readonly(tc.tuple([tc.object({ chainId: tf.hex() })])),
      })),
      ((W = e7 || (e7 = {})).Parameters = tc.object({
        context: tc.unknown(),
        signatures: tc.object({ auth: tf.hex(), exec: tf.hex() }),
      })),
      (W.Request = tc.object({
        method: tc.literal("wallet_upgradeAccount"),
        params: tc.readonly(tc.tuple([W.Parameters])),
      })),
      (W.ResponseCapabilities = tc.object({
        admins: tc.optional(tc.readonly(tc.array(eQ.Key))),
        permissions: tc.optional(eR.Response),
      })),
      (W.Response = tc.object({
        address: tf.address(),
        capabilities: tc.optional(W.ResponseCapabilities),
      })),
      ((X = e8 || (e8 = {})).Request = tc.object({
        method: tc.literal("personal_sign"),
        params: tc.readonly(tc.tuple([tf.hex(), tf.address()])),
      })),
      (X.Response = tf.hex()),
      ((H = e5 || (e5 = {})).Request = tc.object({
        method: tc.literal("porto_ping"),
        params: tc.optional(tc.undefined()),
      })),
      (H.Response = tc.literal("pong")),
      ((Y = te || (te = {})).Capabilities = tc.object({
        createAccount: tc.optional(eO.Request),
        email: tc.optional(tc.boolean()),
        grantAdmins: tc.optional(
          tc.readonly(tc.array(tc.pick(tk, { publicKey: !0, type: !0 })))
        ),
        grantPermissions: tc.optional(eE.Request),
        preCalls: tc.optional(eA.Request),
        selectAccount: tc.optional(
          tc.union([
            tc.boolean(),
            tc.object({
              address: tf.address(),
              key: tc.optional(
                tc.object({
                  credentialId: tc.optional(tc.string()),
                  publicKey: tf.hex(),
                })
              ),
            }),
          ])
        ),
        signInWithEthereum: tc.optional(eP.Request),
      })),
      (Y.Parameters = tc.object({
        capabilities: tc.optional(Y.Capabilities),
        chainIds: tc.optional(tc.readonly(tc.array(tf.number()))),
      })),
      (Y.Request = tc.object({
        method: tc.literal("wallet_connect"),
        params: tc.optional(tc.readonly(tc.tuple([Y.Parameters]))),
      })),
      (Y.ResponseCapabilities = tc.object({
        admins: tc.optional(
          tc.readonly(
            tc.array(
              tc.object({
                ...tc.pick(tk, { id: !0, publicKey: !0, type: !0 }).shape,
                credentialId: tc.optional(tc.string()),
              })
            )
          )
        ),
        permissions: tc.optional(eR.Response),
        preCalls: tc.optional(eA.Response),
        signInWithEthereum: tc.optional(eP.Response),
      })),
      (Y.Response = tc.object({
        accounts: tc.readonly(
          tc.array(
            tc.object({
              address: tf.address(),
              capabilities: tc.optional(Y.ResponseCapabilities),
            })
          )
        ),
        chainIds: tc.readonly(tc.array(tf.number())),
      })),
      ((Q = tt || (tt = {})).Request = tc.object({
        method: tc.literal("wallet_disconnect"),
        params: tc.optional(tc.unknown()),
      })),
      (Q.Response = void 0),
      ((ee = ti || (ti = {})).Parameters = e_.Parameters),
      (ee.Request = e_.Request),
      (ee.Response = e_.Response),
      ((et = tn || (tn = {})).Request = tc.object({
        method: tc.literal("wallet_getCallsStatus"),
        params: tc.tuple([tf.hex()]),
      })),
      (et.Response = tc.object({
        atomic: tc.boolean(),
        chainId: tf.number(),
        id: tc.string(),
        receipts: tc.optional(
          tc.readonly(
            tc.array(
              tc.object({
                blockHash: tf.hex(),
                blockNumber: tf.hex(),
                gasUsed: tf.hex(),
                logs: tc.readonly(
                  tc.array(
                    tc.object({
                      address: tf.address(),
                      data: tf.hex(),
                      topics: tc.readonly(tc.array(tf.hex())),
                    })
                  )
                ),
                status: tf.hex(),
                transactionHash: tf.hex(),
              })
            )
          )
        ),
        status: tc.number(),
        version: tc.string(),
      })),
      ((ei = tr || (tr = {})).Request = tc.object({
        method: tc.literal("wallet_getCapabilities"),
        params: tc.optional(
          tc.union([
            tc.readonly(tc.tuple([tc.union([tf.hex(), tc.undefined()])])),
            tc.readonly(
              tc.tuple([
                tc.union([tf.hex(), tc.undefined()]),
                tc.readonly(tc.array(tf.number())),
              ])
            ),
          ])
        ),
      })),
      (ei.Response = tc.record(
        tf.hex(),
        tc.object({
          atomic: eU.GetCapabilitiesResponse,
          feeToken: eD.GetCapabilitiesResponse,
          merchant: eN.GetCapabilitiesResponse,
          permissions: eR.GetCapabilitiesResponse,
          requiredFunds: eM.GetCapabilitiesResponse,
        })
      )),
      ((en = ta || (ta = {})).Parameters = tc.object({
        address: tf.address(),
        chainIds: tc.optional(tc.readonly(tc.array(tf.number()))),
      })),
      (en.Request = tc.object({
        method: tc.literal("wallet_getKeys"),
        params: tc.readonly(tc.tuple([en.Parameters])),
      })),
      (en.Response = tc.readonly(tc.array(tZ))),
      ((er = to || (to = {})).Capabilities = tc.object({
        feeToken: tc.optional(eD.Request),
        merchantUrl: tc.optional(eT.Request),
        permissions: tc.optional(eR.Request),
        preCalls: tc.optional(eA.Request),
        requiredFunds: tc.optional(eM.Request),
      })),
      (er.Parameters = tc.object({
        calls: tc.readonly(
          tc.array(
            tc.object({
              data: tc.optional(tf.hex()),
              to: tf.address(),
              value: tc.optional(tf.bigint()),
            })
          )
        ),
        capabilities: tc.optional(er.Capabilities),
        chainId: tc.optional(tf.number()),
        from: tc.optional(tf.address()),
        key: tc.optional(tc.pick(tk, { prehash: !0, publicKey: !0, type: !0 })),
        version: tc.optional(tc.string()),
      })),
      (er.Request = tc.object({
        method: tc.literal("wallet_prepareCalls"),
        params: tc.readonly(tc.tuple([er.Parameters])),
      })),
      (er.Response = tc.object({
        capabilities: tc.optional(
          tc.object({
            ...eI.ResponseCapabilities.shape,
            quote: tc.optional(tm.Signed),
          })
        ),
        chainId: tf.hex(),
        context: tc.object({
          account: tc.object({ address: tf.address() }),
          calls: er.Parameters.shape.calls,
          nonce: tf.bigint(),
          quote: tc.optional(tc.partial(tm.Signed)),
        }),
        digest: tf.hex(),
        key: tc.pick(tk, { prehash: !0, publicKey: !0, type: !0 }),
        typedData: tc.object({
          domain: tc.union([
            tc.object({
              chainId: tf.number(),
              name: tc.string(),
              verifyingContract: tf.address(),
              version: tc.string(),
            }),
            tc.object({}),
          ]),
          message: tc.record(tc.string(), tc.unknown()),
          primaryType: tc.string(),
          types: tc.record(tc.string(), tc.unknown()),
        }),
      })),
      ((ea = ts || (ts = {})).Capabilities = tc.object({
        ...te.Capabilities.shape,
        label: tc.optional(tc.string()),
      })),
      (ea.Parameters = tc.object({
        address: tf.address(),
        capabilities: tc.optional(ea.Capabilities),
        chainId: tc.optional(tf.number()),
      })),
      (ea.Request = tc.object({
        method: tc.literal("wallet_prepareUpgradeAccount"),
        params: tc.readonly(tc.tuple([ea.Parameters])),
      })),
      (ea.Response = tc.object({
        context: tc.unknown(),
        digests: tc.object({ auth: tf.hex(), exec: tf.hex() }),
      })),
      ((eo = tu || (tu = {})).Capabilities = to.Capabilities),
      (eo.Request = tc.object({
        method: tc.literal("wallet_sendCalls"),
        params: tc.readonly(tc.tuple([tc.omit(to.Parameters, { key: !0 })])),
      })),
      (eo.Response = tc.object({ id: tf.hex() })),
      ((es = tl || (tl = {})).Parameters = tc.object({
        capabilities: to.Response.shape.capabilities,
        chainId: tf.hex(),
        context: to.Response.shape.context,
        key: to.Response.shape.key,
        signature: tf.hex(),
      })),
      (es.Request = tc.object({
        method: tc.literal("wallet_sendPreparedCalls"),
        params: tc.readonly(tc.tuple([es.Parameters])),
      })),
      (es.Response = tc.readonly(
        tc.array(
          tc.object({
            capabilities: tc.optional(tc.record(tc.string(), tc.unknown())),
            id: tf.hex(),
          })
        )
      )),
      ((eu = td || (td = {})).Parameters = tc.object({
        address: tf.address(),
        chainId: tc.optional(tf.number()),
        digest: tf.hex(),
        signature: tf.hex(),
      })),
      (eu.Request = tc.object({
        method: tc.literal("wallet_verifySignature"),
        params: tc.readonly(tc.tuple([eu.Parameters])),
      })),
      (eu.Response = tc.object({
        address: tf.address(),
        chainId: tf.number(),
        proof: tc.optional(tc.unknown()),
        valid: tc.boolean(),
      })),
      e.s(
        [
          "account_getOnrampContactInfo",
          () => eC,
          "account_onrampStatus",
          () => eL,
          "account_resendVerifyPhone",
          () => eq,
          "account_setEmail",
          () => eF,
          "account_setPhone",
          () => eJ,
          "account_verifyEmail",
          () => eK,
          "account_verifyPhone",
          () => eB,
          "eth_accounts",
          () => eG,
          "eth_chainId",
          () => eW,
          "eth_requestAccounts",
          () => eX,
          "eth_sendTransaction",
          () => eH,
          "eth_signTypedData_v4",
          () => eY,
          "personal_sign",
          () => e8,
          "porto_ping",
          () => e5,
          "wallet_addFunds",
          () => eV,
          "wallet_connect",
          () => te,
          "wallet_disconnect",
          () => tt,
          "wallet_getAccountVersion",
          () => e6,
          "wallet_getAdmins",
          () => eQ,
          "wallet_getAssets",
          () => ti,
          "wallet_getCallsStatus",
          () => tn,
          "wallet_getCapabilities",
          () => tr,
          "wallet_getKeys",
          () => ta,
          "wallet_getPermissions",
          () => e1,
          "wallet_grantAdmin",
          () => e0,
          "wallet_grantPermissions",
          () => e4,
          "wallet_prepareCalls",
          () => to,
          "wallet_prepareUpgradeAccount",
          () => ts,
          "wallet_revokeAdmin",
          () => e2,
          "wallet_revokePermissions",
          () => e9,
          "wallet_sendCalls",
          () => tu,
          "wallet_sendPreparedCalls",
          () => tl,
          "wallet_switchEthereumChain",
          () => e3,
          "wallet_upgradeAccount",
          () => e7,
          "wallet_verifySignature",
          () => td,
        ],
        688092
      );
  },
  991074,
  (e) => {
    "use strict";
    e.i(428064);
    var t = e.i(688092);
    e.s([
      "account_getOnrampContactInfo",
      () => t.account_getOnrampContactInfo,
      "account_onrampStatus",
      () => t.account_onrampStatus,
      "account_resendVerifyPhone",
      () => t.account_resendVerifyPhone,
      "account_setEmail",
      () => t.account_setEmail,
      "account_setPhone",
      () => t.account_setPhone,
      "account_verifyEmail",
      () => t.account_verifyEmail,
      "account_verifyPhone",
      () => t.account_verifyPhone,
      "eth_accounts",
      () => t.eth_accounts,
      "eth_chainId",
      () => t.eth_chainId,
      "eth_requestAccounts",
      () => t.eth_requestAccounts,
      "eth_sendTransaction",
      () => t.eth_sendTransaction,
      "eth_signTypedData_v4",
      () => t.eth_signTypedData_v4,
      "personal_sign",
      () => t.personal_sign,
      "porto_ping",
      () => t.porto_ping,
      "wallet_addFunds",
      () => t.wallet_addFunds,
      "wallet_connect",
      () => t.wallet_connect,
      "wallet_disconnect",
      () => t.wallet_disconnect,
      "wallet_getAccountVersion",
      () => t.wallet_getAccountVersion,
      "wallet_getAdmins",
      () => t.wallet_getAdmins,
      "wallet_getAssets",
      () => t.wallet_getAssets,
      "wallet_getCallsStatus",
      () => t.wallet_getCallsStatus,
      "wallet_getCapabilities",
      () => t.wallet_getCapabilities,
      "wallet_getKeys",
      () => t.wallet_getKeys,
      "wallet_getPermissions",
      () => t.wallet_getPermissions,
      "wallet_grantAdmin",
      () => t.wallet_grantAdmin,
      "wallet_grantPermissions",
      () => t.wallet_grantPermissions,
      "wallet_prepareCalls",
      () => t.wallet_prepareCalls,
      "wallet_prepareUpgradeAccount",
      () => t.wallet_prepareUpgradeAccount,
      "wallet_revokeAdmin",
      () => t.wallet_revokeAdmin,
      "wallet_revokePermissions",
      () => t.wallet_revokePermissions,
      "wallet_sendCalls",
      () => t.wallet_sendCalls,
      "wallet_sendPreparedCalls",
      () => t.wallet_sendPreparedCalls,
      "wallet_switchEthereumChain",
      () => t.wallet_switchEthereumChain,
      "wallet_upgradeAccount",
      () => t.wallet_upgradeAccount,
      "wallet_verifySignature",
      () => t.wallet_verifySignature,
    ]);
  },
  992744,
  (e) => {
    "use strict";
    var t = e.i(608861),
      i = e.i(796516);
    function n(e) {
      if ("string" == typeof e) {
        if (!(0, i.isAddress)(e, { strict: !1 }))
          throw new t.InvalidAddressError({ address: e });
        return { address: e, type: "json-rpc" };
      }
      if (!(0, i.isAddress)(e.address, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e.address });
      return {
        address: e.address,
        nonceManager: e.nonceManager,
        sign: e.sign,
        signAuthorization: e.signAuthorization,
        signMessage: e.signMessage,
        signTransaction: e.signTransaction,
        signTypedData: e.signTypedData,
        source: "custom",
        type: "local",
      };
    }
    e.s(["toAccount", () => n]);
  },
]);
