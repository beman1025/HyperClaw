(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  717520,
  (e) => {
    "use strict";
    let t = (function (e) {
      if (e.length >= 255) throw TypeError("Alphabet too long");
      let t = new Uint8Array(256);
      for (let e = 0; e < t.length; e++) t[e] = 255;
      for (let r = 0; r < e.length; r++) {
        let n = e.charAt(r),
          i = n.charCodeAt(0);
        if (255 !== t[i]) throw TypeError(n + " is ambiguous");
        t[i] = r;
      }
      let r = e.length,
        n = e.charAt(0),
        i = Math.log(r) / Math.log(256),
        s = Math.log(256) / Math.log(r);
      function o(e) {
        if ("string" != typeof e) throw TypeError("Expected String");
        if (0 === e.length) return new Uint8Array();
        let s = 0,
          o = 0,
          l = 0;
        for (; e[s] === n; ) o++, s++;
        let a = ((e.length - s) * i + 1) >>> 0,
          u = new Uint8Array(a);
        for (; s < e.length; ) {
          let n = e.charCodeAt(s);
          if (n > 255) return;
          let i = t[n];
          if (255 === i) return;
          let o = 0;
          for (let e = a - 1; (0 !== i || o < l) && -1 !== e; e--, o++)
            (i += (r * u[e]) >>> 0),
              (u[e] = i % 256 >>> 0),
              (i = (i / 256) >>> 0);
          if (0 !== i) throw Error("Non-zero carry");
          (l = o), s++;
        }
        let c = a - l;
        for (; c !== a && 0 === u[c]; ) c++;
        let h = new Uint8Array(o + (a - c)),
          f = o;
        for (; c !== a; ) h[f++] = u[c++];
        return h;
      }
      return {
        encode: function (t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          let i = 0,
            o = 0,
            l = 0,
            a = t.length;
          for (; l !== a && 0 === t[l]; ) l++, i++;
          let u = ((a - l) * s + 1) >>> 0,
            c = new Uint8Array(u);
          for (; l !== a; ) {
            let e = t[l],
              n = 0;
            for (let t = u - 1; (0 !== e || n < o) && -1 !== t; t--, n++)
              (e += (256 * c[t]) >>> 0),
                (c[t] = e % r >>> 0),
                (e = (e / r) >>> 0);
            if (0 !== e) throw Error("Non-zero carry");
            (o = n), l++;
          }
          let h = u - o;
          for (; h !== u && 0 === c[h]; ) h++;
          let f = n.repeat(i);
          for (; h < u; ++h) f += e.charAt(c[h]);
          return f;
        },
        decodeUnsafe: o,
        decode: function (e) {
          let t = o(e);
          if (t) return t;
          throw Error("Non-base" + r + " character");
        },
      };
    })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    e.s(["default", 0, t], 717520);
  },
  688241,
  (e, t, r) => {
    "use strict";
    let n = e.r(71187);
    t.exports = s;
    let i =
      (function () {
        function e(e) {
          return void 0 !== e && e;
        }
        try {
          if ("u" > typeof globalThis) return globalThis;
          return (
            Object.defineProperty(Object.prototype, "globalThis", {
              get: function () {
                return (
                  delete Object.prototype.globalThis, (this.globalThis = this)
                );
              },
              configurable: !0,
            }),
            globalThis
          );
        } catch (t) {
          return e(self) || e(window) || e(this) || {};
        }
      })().console || {};
    function s(e) {
      var t, r;
      (e = e || {}).browser = e.browser || {};
      let n = e.browser.transmit;
      if (n && "function" != typeof n.send)
        throw Error("pino: transmit option must have a send function");
      let c = e.browser.write || i;
      e.browser.write && (e.browser.asObject = !0);
      let h = e.serializers || {},
        p =
          ((t = e.browser.serialize),
          Array.isArray(t)
            ? t.filter(function (e) {
                return "!stdSerializers.err" !== e;
              })
            : !0 === t && Object.keys(h)),
        y = e.browser.serialize;
      Array.isArray(e.browser.serialize) &&
        e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
        (y = !1),
        "function" == typeof c &&
          (c.error = c.fatal = c.warn = c.info = c.debug = c.trace = c),
        !1 === e.enabled && (e.level = "silent");
      let v = e.level || "info",
        b = Object.create(c);
      b.log || (b.log = f),
        Object.defineProperty(b, "levelVal", {
          get: function () {
            return "silent" === this.level
              ? 1 / 0
              : this.levels.values[this.level];
          },
        }),
        Object.defineProperty(b, "level", {
          get: function () {
            return this._level;
          },
          set: function (e) {
            if ("silent" !== e && !this.levels.values[e])
              throw Error("unknown level " + e);
            (this._level = e),
              o(w, b, "error", "log"),
              o(w, b, "fatal", "error"),
              o(w, b, "warn", "error"),
              o(w, b, "info", "log"),
              o(w, b, "debug", "log"),
              o(w, b, "trace", "log");
          },
        });
      let w = {
        transmit: n,
        serialize: p,
        asObject: e.browser.asObject,
        levels: ["error", "fatal", "warn", "info", "debug", "trace"],
        timestamp:
          "function" == typeof (r = e).timestamp
            ? r.timestamp
            : !1 === r.timestamp
            ? g
            : d,
      };
      return (
        (b.levels = s.levels),
        (b.level = v),
        (b.setMaxListeners =
          b.getMaxListeners =
          b.emit =
          b.addListener =
          b.on =
          b.prependListener =
          b.once =
          b.prependOnceListener =
          b.removeListener =
          b.removeAllListeners =
          b.listeners =
          b.listenerCount =
          b.eventNames =
          b.write =
          b.flush =
            f),
        (b.serializers = h),
        (b._serialize = p),
        (b._stdErrSerialize = y),
        (b.child = function (t, r) {
          if (!t) throw Error("missing bindings for child Pino");
          (r = r || {}), p && t.serializers && (r.serializers = t.serializers);
          let i = r.serializers;
          if (p && i) {
            var s = Object.assign({}, h, i),
              o = !0 === e.browser.serialize ? Object.keys(s) : p;
            delete t.serializers, l([t], o, s, this._stdErrSerialize);
          }
          function c(e) {
            (this._childLevel = (0 | e._childLevel) + 1),
              (this.error = a(e, t, "error")),
              (this.fatal = a(e, t, "fatal")),
              (this.warn = a(e, t, "warn")),
              (this.info = a(e, t, "info")),
              (this.debug = a(e, t, "debug")),
              (this.trace = a(e, t, "trace")),
              s && ((this.serializers = s), (this._serialize = o)),
              n && (this._logEvent = u([].concat(e._logEvent.bindings, t)));
          }
          return (c.prototype = this), new c(this);
        }),
        n && (b._logEvent = u()),
        b
      );
    }
    function o(e, t, r, o) {
      let a = Object.getPrototypeOf(t);
      (t[r] =
        t.levelVal > t.levels.values[r] ? f : a[r] ? a[r] : i[r] || i[o] || f),
        (function (e, t, r) {
          if (e.transmit || t[r] !== f) {
            var o;
            t[r] =
              ((o = t[r]),
              function () {
                let a = e.timestamp(),
                  c = Array(arguments.length),
                  h =
                    Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                      ? i
                      : this;
                for (var f, g, d, p = 0; p < c.length; p++) c[p] = arguments[p];
                if (
                  (e.serialize &&
                    !e.asObject &&
                    l(
                      c,
                      this._serialize,
                      this.serializers,
                      this._stdErrSerialize
                    ),
                  e.asObject
                    ? o.call(
                        h,
                        (function (e, t, r, i) {
                          e._serialize &&
                            l(
                              r,
                              e._serialize,
                              e.serializers,
                              e._stdErrSerialize
                            );
                          let o = r.slice(),
                            a = o[0],
                            u = {};
                          i && (u.time = i), (u.level = s.levels.values[t]);
                          let c = (0 | e._childLevel) + 1;
                          if (
                            (c < 1 && (c = 1),
                            null !== a && "object" == typeof a)
                          ) {
                            for (; c-- && "object" == typeof o[0]; )
                              Object.assign(u, o.shift());
                            a = o.length ? n(o.shift(), o) : void 0;
                          } else "string" == typeof a && (a = n(o.shift(), o));
                          return void 0 !== a && (u.msg = a), u;
                        })(this, r, c, a)
                      )
                    : o.apply(h, c),
                  e.transmit)
                ) {
                  let n,
                    i,
                    o,
                    h,
                    p,
                    y,
                    v = e.transmit.level || t.level,
                    b = s.levels.values[v],
                    w = s.levels.values[r];
                  if (w < b) return;
                  (f = this),
                    (g = {
                      ts: a,
                      methodLevel: r,
                      methodValue: w,
                      transmitLevel: v,
                      transmitValue:
                        s.levels.values[e.transmit.level || t.level],
                      send: e.transmit.send,
                      val: t.levelVal,
                    }),
                    (d = c),
                    (n = g.send),
                    (i = g.ts),
                    (o = g.methodLevel),
                    (h = g.methodValue),
                    (p = g.val),
                    (y = f._logEvent.bindings),
                    l(
                      d,
                      f._serialize || Object.keys(f.serializers),
                      f.serializers,
                      void 0 === f._stdErrSerialize || f._stdErrSerialize
                    ),
                    (f._logEvent.ts = i),
                    (f._logEvent.messages = d.filter(function (e) {
                      return -1 === y.indexOf(e);
                    })),
                    (f._logEvent.level.label = o),
                    (f._logEvent.level.value = h),
                    n(o, f._logEvent, p),
                    (f._logEvent = u(y));
                }
              });
          }
        })(e, t, r);
    }
    function l(e, t, r, n) {
      for (let i in e)
        if (n && e[i] instanceof Error) e[i] = s.stdSerializers.err(e[i]);
        else if ("object" == typeof e[i] && !Array.isArray(e[i]))
          for (let n in e[i])
            t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
    }
    function a(e, t, r) {
      return function () {
        let n = Array(1 + arguments.length);
        n[0] = t;
        for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
        return e[r].apply(this, n);
      };
    }
    function u(e) {
      return {
        ts: 0,
        messages: [],
        bindings: e || [],
        level: { label: "", value: 0 },
      };
    }
    function c() {
      return {};
    }
    function h(e) {
      return e;
    }
    function f() {}
    function g() {
      return !1;
    }
    function d() {
      return Date.now();
    }
    (s.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10,
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal",
      },
    }),
      (s.stdSerializers = {
        mapHttpRequest: c,
        mapHttpResponse: c,
        wrapRequestSerializer: h,
        wrapResponseSerializer: h,
        wrapErrorSerializer: h,
        req: c,
        res: c,
        err: function (e) {
          let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
          for (let r in e) void 0 === t[r] && (t[r] = e[r]);
          return t;
        },
      }),
      (s.stdTimeFunctions = Object.assign(
        {},
        {
          nullTime: g,
          epochTime: d,
          unixTime: function () {
            return Math.round(Date.now() / 1e3);
          },
          isoTime: function () {
            return new Date(Date.now()).toISOString();
          },
        }
      ));
  },
  159152,
  452806,
  (e) => {
    "use strict";
    var t = e.i(688241),
      r = e.i(31794);
    let n = "custom_context";
    class i {
      constructor(e) {
        (this.nodeValue = e),
          (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
          (this.next = null);
      }
      get value() {
        return this.nodeValue;
      }
      get size() {
        return this.sizeInBytes;
      }
    }
    class s {
      constructor(e) {
        (this.head = null),
          (this.tail = null),
          (this.lengthInNodes = 0),
          (this.maxSizeInBytes = e),
          (this.sizeInBytes = 0);
      }
      append(e) {
        let t = new i(e);
        if (t.size > this.maxSizeInBytes)
          throw Error(
            `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
          );
        for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
        this.head ? this.tail && (this.tail.next = t) : (this.head = t),
          (this.tail = t),
          this.lengthInNodes++,
          (this.sizeInBytes += t.size);
      }
      shift() {
        if (!this.head) return;
        let e = this.head;
        (this.head = this.head.next),
          this.head || (this.tail = null),
          this.lengthInNodes--,
          (this.sizeInBytes -= e.size);
      }
      toArray() {
        let e = [],
          t = this.head;
        for (; null !== t; ) e.push(t.value), (t = t.next);
        return e;
      }
      get length() {
        return this.lengthInNodes;
      }
      get size() {
        return this.sizeInBytes;
      }
      toOrderedArray() {
        return Array.from(this);
      }
      [Symbol.iterator]() {
        let e = this.head;
        return {
          next: () => {
            if (!e) return { done: !0, value: null };
            let t = e.value;
            return (e = e.next), { done: !1, value: t };
          },
        };
      }
    }
    class o {
      constructor(e, r = 1024e3) {
        (this.level = e ?? "error"),
          (this.levelValue = t.levels.values[this.level]),
          (this.MAX_LOG_SIZE_IN_BYTES = r),
          (this.logs = new s(this.MAX_LOG_SIZE_IN_BYTES));
      }
      forwardToConsole(e, r) {
        r === t.levels.values.error
          ? console.error(e)
          : r === t.levels.values.warn
          ? console.warn(e)
          : r === t.levels.values.debug
          ? console.debug(e)
          : r === t.levels.values.trace
          ? console.trace(e)
          : console.log(e);
      }
      appendToLogs(e) {
        this.logs.append(
          (0, r.safeJsonStringify)({
            timestamp: new Date().toISOString(),
            log: e,
          })
        );
        let t = "string" == typeof e ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
      }
      getLogs() {
        return this.logs;
      }
      clearLogs() {
        this.logs = new s(this.MAX_LOG_SIZE_IN_BYTES);
      }
      getLogArray() {
        return Array.from(this.logs);
      }
      logsToBlob(e) {
        let t = this.getLogArray();
        return (
          t.push((0, r.safeJsonStringify)({ extraMetadata: e })),
          new Blob(t, { type: "application/json" })
        );
      }
    }
    class l {
      constructor(e, t = 1024e3) {
        this.baseChunkLogger = new o(e, t);
      }
      write(e) {
        this.baseChunkLogger.appendToLogs(e);
      }
      getLogs() {
        return this.baseChunkLogger.getLogs();
      }
      clearLogs() {
        this.baseChunkLogger.clearLogs();
      }
      getLogArray() {
        return this.baseChunkLogger.getLogArray();
      }
      logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
      }
      downloadLogsBlobInBrowser(e) {
        let t = URL.createObjectURL(this.logsToBlob(e)),
          r = document.createElement("a");
        (r.href = t),
          (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r),
          URL.revokeObjectURL(t);
      }
    }
    class a {
      constructor(e, t = 1024e3) {
        this.baseChunkLogger = new o(e, t);
      }
      write(e) {
        this.baseChunkLogger.appendToLogs(e);
      }
      getLogs() {
        return this.baseChunkLogger.getLogs();
      }
      clearLogs() {
        this.baseChunkLogger.clearLogs();
      }
      getLogArray() {
        return this.baseChunkLogger.getLogArray();
      }
      logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
      }
    }
    var u = Object.defineProperty,
      c = Object.defineProperties,
      h = Object.getOwnPropertyDescriptors,
      f = Object.getOwnPropertySymbols,
      g = Object.prototype.hasOwnProperty,
      d = Object.prototype.propertyIsEnumerable,
      p = (e, t, r) =>
        t in e
          ? u(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r),
      y = (e, t) => {
        for (var r in t || (t = {})) g.call(t, r) && p(e, r, t[r]);
        if (f) for (var r of f(t)) d.call(t, r) && p(e, r, t[r]);
        return e;
      };
    function v(e) {
      return c(y({}, e), h({ level: e?.level || "info" }));
    }
    function b(e, t = n) {
      return typeof e.bindings > "u"
        ? (function (e, t = n) {
            return e[t] || "";
          })(e, t)
        : e.bindings().context || "";
    }
    function w(e, t, r = n) {
      let i = (function (e, t, r = n) {
        let i = b(e, r);
        return i.trim() ? `${i}/${t}` : t;
      })(e, t, r);
      return (function (e, t, r = n) {
        return (e[r] = t), e;
      })(e.child({ context: i }), i, r);
    }
    function m(e) {
      var r, n, i, s;
      let o, u, f, g;
      return "u" > typeof e.loggerOverride &&
        "string" != typeof e.loggerOverride
        ? { logger: e.loggerOverride, chunkLoggerController: null }
        : "u" > typeof window
        ? ((g = new l(
            null == (i = (n = e).opts) ? void 0 : i.level,
            n.maxSizeInBytes
          )),
          {
            logger: (0, t.default)(
              ((u = y({}, n.opts)),
              (f = {
                level: "trace",
                browser: c(
                  y({}, null == (s = n.opts) ? void 0 : s.browser),
                  h({ write: (e) => g.write(e) })
                ),
              }),
              c(u, h(f)))
            ),
            chunkLoggerController: g,
          })
        : ((o = new a(
            null == (r = e.opts) ? void 0 : r.level,
            e.maxSizeInBytes
          )),
          {
            logger: (0, t.default)(c(y({}, e.opts), h({ level: "trace" })), o),
            chunkLoggerController: o,
          });
    }
    e.s(
      [
        "generateChildLogger",
        () => w,
        "generatePlatformLogger",
        () => m,
        "getDefaultLoggerOptions",
        () => v,
        "getLoggerContext",
        () => b,
      ],
      159152
    ),
      e.s(["pino", () => t.default], 452806);
  },
  365707,
  (e) => {
    "use strict";
    let t = "2.31.0",
      r = {
        getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
          t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
        version: `viem@${t}`,
      };
    class n extends Error {
      constructor(e, i = {}) {
        const s =
            i.cause instanceof n
              ? i.cause.details
              : i.cause?.message
              ? i.cause.message
              : i.details,
          o = (i.cause instanceof n && i.cause.docsPath) || i.docsPath,
          l = r.getDocsUrl?.({ ...i, docsPath: o });
        super(
          [
            e || "An error occurred.",
            "",
            ...(i.metaMessages ? [...i.metaMessages, ""] : []),
            ...(l ? [`Docs: ${l}`] : []),
            ...(s ? [`Details: ${s}`] : []),
            ...(r.version ? [`Version: ${r.version}`] : []),
          ].join("\n"),
          i.cause ? { cause: i.cause } : void 0
        ),
          Object.defineProperty(this, "details", {
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
          Object.defineProperty(this, "metaMessages", {
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
          Object.defineProperty(this, "version", {
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
          (this.details = s),
          (this.docsPath = o),
          (this.metaMessages = i.metaMessages),
          (this.name = i.name ?? this.name),
          (this.shortMessage = e),
          (this.version = t);
      }
      walk(e) {
        return (function e(t, r) {
          return r?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
            ? e(t.cause, r)
            : r
            ? null
            : t;
        })(this, e);
      }
    }
    e.s(["BaseError", () => n], 365707);
  },
  56010,
  (e) => {
    "use strict";
    function t(e, { strict: r = !0 } = {}) {
      return (
        !!e &&
        "string" == typeof e &&
        (r ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
      );
    }
    e.s(["isHex", () => t]);
  },
  309063,
  (e) => {
    "use strict";
    var t = e.i(365707);
    t.BaseError;
    class r extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
          { name: "SizeExceedsPaddingSizeError" }
        );
      }
    }
    function n(e, { dir: t, size: i = 32 } = {}) {
      return "string" == typeof e
        ? (function (e, { dir: t, size: n = 32 } = {}) {
            if (null === n) return e;
            let i = e.replace("0x", "");
            if (i.length > 2 * n)
              throw new r({
                size: Math.ceil(i.length / 2),
                targetSize: n,
                type: "hex",
              });
            return `0x${i["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
          })(e, { dir: t, size: i })
        : (function (e, { dir: t, size: n = 32 } = {}) {
            if (null === n) return e;
            if (e.length > n)
              throw new r({ size: e.length, targetSize: n, type: "bytes" });
            let i = new Uint8Array(n);
            for (let r = 0; r < n; r++) {
              let s = "right" === t;
              i[s ? r : n - r - 1] = e[s ? r : e.length - r - 1];
            }
            return i;
          })(e, { dir: t, size: i });
    }
    t.BaseError, e.s(["pad", () => n], 309063);
  },
  435330,
  (e) => {
    "use strict";
    var t = e.i(365707);
    class r extends t.BaseError {
      constructor({ max: e, min: t, signed: r, size: n, value: i }) {
        super(
          `Number "${i}" is not in safe ${
            n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
          }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
          { name: "IntegerOutOfRangeError" }
        );
      }
    }
    t.BaseError, t.BaseError, t.BaseError;
    class n extends t.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
          name: "SizeOverflowError",
        });
      }
    }
    e.s(["IntegerOutOfRangeError", () => r, "SizeOverflowError", () => n]);
  },
  880525,
  289423,
  281266,
  300829,
  (e) => {
    "use strict";
    e.s(
      ["numberToHex", () => h, "stringToHex", () => g, "toHex", () => u],
      880525
    );
    var t = e.i(435330),
      r = e.i(309063);
    e.s(
      ["assertSize", () => s, "hexToBigInt", () => o, "hexToNumber", () => l],
      281266
    );
    var n = e.i(56010);
    function i(e) {
      return (0, n.isHex)(e, { strict: !1 })
        ? Math.ceil((e.length - 2) / 2)
        : e.length;
    }
    function s(e, { size: r }) {
      if (i(e) > r)
        throw new t.SizeOverflowError({ givenSize: i(e), maxSize: r });
    }
    function o(e, t = {}) {
      let { signed: r } = t;
      t.size && s(e, { size: t.size });
      let n = BigInt(e);
      if (!r) return n;
      let i = (e.length - 2) / 2;
      return n <= (1n << (8n * BigInt(i) - 1n)) - 1n
        ? n
        : n - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
    }
    function l(e, t = {}) {
      return Number(o(e, t));
    }
    e.s(["size", () => i], 289423);
    let a = Array.from({ length: 256 }, (e, t) =>
      t.toString(16).padStart(2, "0")
    );
    function u(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? h(e, t)
        : "string" == typeof e
        ? g(e, t)
        : "boolean" == typeof e
        ? (function (e, t = {}) {
            let n = `0x${Number(e)}`;
            return "number" == typeof t.size
              ? (s(n, { size: t.size }), (0, r.pad)(n, { size: t.size }))
              : n;
          })(e, t)
        : c(e, t);
    }
    function c(e, t = {}) {
      let n = "";
      for (let t = 0; t < e.length; t++) n += a[e[t]];
      let i = `0x${n}`;
      return "number" == typeof t.size
        ? (s(i, { size: t.size }),
          (0, r.pad)(i, { dir: "right", size: t.size }))
        : i;
    }
    function h(e, n = {}) {
      let i,
        { signed: s, size: o } = n,
        l = BigInt(e);
      o
        ? (i = s
            ? (1n << (8n * BigInt(o) - 1n)) - 1n
            : 2n ** (8n * BigInt(o)) - 1n)
        : "number" == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
      let a = "bigint" == typeof i && s ? -i - 1n : 0;
      if ((i && l > i) || l < a) {
        let r = "bigint" == typeof e ? "n" : "";
        throw new t.IntegerOutOfRangeError({
          max: i ? `${i}${r}` : void 0,
          min: `${a}${r}`,
          signed: s,
          size: o,
          value: `${e}${r}`,
        });
      }
      let u = `0x${(s && l < 0
        ? (1n << BigInt(8 * o)) + BigInt(l)
        : l
      ).toString(16)}`;
      return o ? (0, r.pad)(u, { size: o }) : u;
    }
    let f = new TextEncoder();
    function g(e, t = {}) {
      return c(f.encode(e), t);
    }
    class d extends Map {
      constructor(e) {
        super(),
          Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.maxSize = e);
      }
      get(e) {
        let t = super.get(e);
        return (
          super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
        );
      }
      set(e, t) {
        if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
          let e = this.keys().next().value;
          e && this.delete(e);
        }
        return this;
      }
    }
    e.s(["LruMap", () => d], 300829);
  },
  422233,
  (e) => {
    "use strict";
    var t = e.i(535825);
    e.s(["v4", () => t.default]);
  },
  696717,
  (e) => {
    "use strict";
    function t(e) {
      let t = new CustomEvent("eip6963:announceProvider", {
        detail: Object.freeze(e),
      });
      window.dispatchEvent(t);
      let r = () => window.dispatchEvent(t);
      return (
        window.addEventListener("eip6963:requestProvider", r),
        () => window.removeEventListener("eip6963:requestProvider", r)
      );
    }
    function r(e) {
      if ("u" < typeof window) return;
      let t = (t) => e(t.detail);
      return (
        window.addEventListener("eip6963:announceProvider", t),
        window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),
        () => window.removeEventListener("eip6963:announceProvider", t)
      );
    }
    e.s(["announceProvider", () => t, "requestProviders", () => r]);
  },
  668375,
  577064,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ value: e }) {
        super(`Number \`${e}\` is not a valid decimal number.`, {
          name: "InvalidDecimalNumberError",
        });
      }
    }
    function n(e, t) {
      if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new r({ value: e });
      let [n, i = "0"] = e.split("."),
        s = n.startsWith("-");
      if ((s && (n = n.slice(1)), (i = i.replace(/(0+)$/, "")), 0 === t))
        1 === Math.round(Number(`.${i}`)) && (n = `${BigInt(n) + 1n}`),
          (i = "");
      else if (i.length > t) {
        let [e, r, s] = [i.slice(0, t - 1), i.slice(t - 1, t), i.slice(t)],
          o = Math.round(Number(`${r}.${s}`));
        (i =
          o > 9
            ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
            : `${e}${o}`).length > t &&
          ((i = i.slice(1)), (n = `${BigInt(n) + 1n}`)),
          (i = i.slice(0, t));
      } else i = i.padEnd(t, "0");
      return BigInt(`${s ? "-" : ""}${n}${i}`);
    }
    e.s(["InvalidDecimalNumberError", () => r], 577064),
      e.s(["parseUnits", () => n], 668375);
  },
  373709,
  (e, t, r) => {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      i = "~";
    function s() {}
    function o(e, t, r) {
      (this.fn = e), (this.context = t), (this.once = r || !1);
    }
    function l(e, t, r, n, s) {
      if ("function" != typeof r)
        throw TypeError("The listener must be a function");
      var l = new o(r, n || e, s),
        a = i ? i + t : t;
      return (
        e._events[a]
          ? e._events[a].fn
            ? (e._events[a] = [e._events[a], l])
            : e._events[a].push(l)
          : ((e._events[a] = l), e._eventsCount++),
        e
      );
    }
    function a(e, t) {
      0 == --e._eventsCount ? (e._events = new s()) : delete e._events[t];
    }
    function u() {
      (this._events = new s()), (this._eventsCount = 0);
    }
    Object.create &&
      ((s.prototype = Object.create(null)), new s().__proto__ || (i = !1)),
      (u.prototype.eventNames = function () {
        var e,
          t,
          r = [];
        if (0 === this._eventsCount) return r;
        for (t in (e = this._events))
          n.call(e, t) && r.push(i ? t.slice(1) : t);
        return Object.getOwnPropertySymbols
          ? r.concat(Object.getOwnPropertySymbols(e))
          : r;
      }),
      (u.prototype.listeners = function (e) {
        var t = i ? i + e : e,
          r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, s = r.length, o = Array(s); n < s; n++) o[n] = r[n].fn;
        return o;
      }),
      (u.prototype.listenerCount = function (e) {
        var t = i ? i + e : e,
          r = this._events[t];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (u.prototype.emit = function (e, t, r, n, s, o) {
        var l = i ? i + e : e;
        if (!this._events[l]) return !1;
        var a,
          u,
          c = this._events[l],
          h = arguments.length;
        if (c.fn) {
          switch ((c.once && this.removeListener(e, c.fn, void 0, !0), h)) {
            case 1:
              return c.fn.call(c.context), !0;
            case 2:
              return c.fn.call(c.context, t), !0;
            case 3:
              return c.fn.call(c.context, t, r), !0;
            case 4:
              return c.fn.call(c.context, t, r, n), !0;
            case 5:
              return c.fn.call(c.context, t, r, n, s), !0;
            case 6:
              return c.fn.call(c.context, t, r, n, s, o), !0;
          }
          for (u = 1, a = Array(h - 1); u < h; u++) a[u - 1] = arguments[u];
          c.fn.apply(c.context, a);
        } else {
          var f,
            g = c.length;
          for (u = 0; u < g; u++)
            switch (
              (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), h)
            ) {
              case 1:
                c[u].fn.call(c[u].context);
                break;
              case 2:
                c[u].fn.call(c[u].context, t);
                break;
              case 3:
                c[u].fn.call(c[u].context, t, r);
                break;
              case 4:
                c[u].fn.call(c[u].context, t, r, n);
                break;
              default:
                if (!a)
                  for (f = 1, a = Array(h - 1); f < h; f++)
                    a[f - 1] = arguments[f];
                c[u].fn.apply(c[u].context, a);
            }
        }
        return !0;
      }),
      (u.prototype.on = function (e, t, r) {
        return l(this, e, t, r, !1);
      }),
      (u.prototype.once = function (e, t, r) {
        return l(this, e, t, r, !0);
      }),
      (u.prototype.removeListener = function (e, t, r, n) {
        var s = i ? i + e : e;
        if (!this._events[s]) return this;
        if (!t) return a(this, s), this;
        var o = this._events[s];
        if (o.fn)
          o.fn !== t || (n && !o.once) || (r && o.context !== r) || a(this, s);
        else {
          for (var l = 0, u = [], c = o.length; l < c; l++)
            (o[l].fn !== t || (n && !o[l].once) || (r && o[l].context !== r)) &&
              u.push(o[l]);
          u.length ? (this._events[s] = 1 === u.length ? u[0] : u) : a(this, s);
        }
        return this;
      }),
      (u.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = i ? i + e : e), this._events[t] && a(this, t))
            : ((this._events = new s()), (this._eventsCount = 0)),
          this
        );
      }),
      (u.prototype.off = u.prototype.removeListener),
      (u.prototype.addListener = u.prototype.on),
      (u.prefixed = i),
      (u.EventEmitter = u),
      (t.exports = u);
  },
  437206,
  (e) => {
    "use strict";
    let t = e.i(373709).default;
    e.s(["default", 0, t]);
  },
  635138,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.toBig =
        r.shrSL =
        r.shrSH =
        r.rotrSL =
        r.rotrSH =
        r.rotrBL =
        r.rotrBH =
        r.rotr32L =
        r.rotr32H =
        r.rotlSL =
        r.rotlSH =
        r.rotlBL =
        r.rotlBH =
        r.add5L =
        r.add5H =
        r.add4L =
        r.add4H =
        r.add3L =
        r.add3H =
          void 0),
      (r.add = m),
      (r.fromBig = s),
      (r.split = o);
    let n = BigInt(0x100000000 - 1),
      i = BigInt(32);
    function s(e, t = !1) {
      return t
        ? { h: Number(e & n), l: Number((e >> i) & n) }
        : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) };
    }
    function o(e, t = !1) {
      let r = e.length,
        n = new Uint32Array(r),
        i = new Uint32Array(r);
      for (let o = 0; o < r; o++) {
        let { h: r, l } = s(e[o], t);
        [n[o], i[o]] = [r, l];
      }
      return [n, i];
    }
    let l = (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0);
    r.toBig = l;
    let a = (e, t, r) => e >>> r;
    r.shrSH = a;
    let u = (e, t, r) => (e << (32 - r)) | (t >>> r);
    r.shrSL = u;
    let c = (e, t, r) => (e >>> r) | (t << (32 - r));
    r.rotrSH = c;
    let h = (e, t, r) => (e << (32 - r)) | (t >>> r);
    r.rotrSL = h;
    let f = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32));
    r.rotrBH = f;
    let g = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r));
    r.rotrBL = g;
    let d = (e, t) => t;
    r.rotr32H = d;
    let p = (e, t) => e;
    r.rotr32L = p;
    let y = (e, t, r) => (e << r) | (t >>> (32 - r));
    r.rotlSH = y;
    let v = (e, t, r) => (t << r) | (e >>> (32 - r));
    r.rotlSL = v;
    let b = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r));
    r.rotlBH = b;
    let w = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
    function m(e, t, r, n) {
      let i = (t >>> 0) + (n >>> 0);
      return { h: (e + r + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
    }
    r.rotlBL = w;
    let L = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
    r.add3L = L;
    let x = (e, t, r, n) => (t + r + n + ((e / 0x100000000) | 0)) | 0;
    r.add3H = x;
    let E = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
    r.add4L = E;
    let O = (e, t, r, n, i) => (t + r + n + i + ((e / 0x100000000) | 0)) | 0;
    r.add4H = O;
    let z = (e, t, r, n, i) =>
      (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
    r.add5L = z;
    let B = (e, t, r, n, i, s) =>
      (t + r + n + i + s + ((e / 0x100000000) | 0)) | 0;
    (r.add5H = B),
      (r.default = {
        fromBig: s,
        split: o,
        toBig: l,
        shrSH: a,
        shrSL: u,
        rotrSH: c,
        rotrSL: h,
        rotrBH: f,
        rotrBL: g,
        rotr32H: d,
        rotr32L: p,
        rotlSH: y,
        rotlSL: v,
        rotlBH: b,
        rotlBL: w,
        add: m,
        add3L: L,
        add3H: x,
        add4L: E,
        add4H: O,
        add5H: B,
        add5L: z,
      });
  },
  581918,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.crypto = void 0),
      (r.crypto =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0);
  },
  857024,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.wrapXOFConstructorWithOpts =
        r.wrapConstructorWithOpts =
        r.wrapConstructor =
        r.Hash =
        r.nextTick =
        r.swap32IfBE =
        r.byteSwapIfBE =
        r.swap8IfBE =
        r.isLE =
          void 0),
      (r.isBytes = i),
      (r.anumber = s),
      (r.abytes = o),
      (r.ahash = function (e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        s(e.outputLen), s(e.blockLen);
      }),
      (r.aexists = function (e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }),
      (r.aoutput = function (e, t) {
        o(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }),
      (r.u8 = function (e) {
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }),
      (r.u32 = function (e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }),
      (r.clean = function (...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }),
      (r.createView = function (e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }),
      (r.rotr = function (e, t) {
        return (e << (32 - t)) | (e >>> t);
      }),
      (r.rotl = function (e, t) {
        return (e << t) | ((e >>> (32 - t)) >>> 0);
      }),
      (r.byteSwap = l),
      (r.byteSwap32 = a),
      (r.bytesToHex = function (e) {
        if ((o(e), u)) return e.toHex();
        let t = "";
        for (let r = 0; r < e.length; r++) t += c[e[r]];
        return t;
      }),
      (r.hexToBytes = function (e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (u) return Uint8Array.fromHex(e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let t = 0, i = 0; t < r; t++, i += 2) {
          let r = h(e.charCodeAt(i)),
            s = h(e.charCodeAt(i + 1));
          if (void 0 === r || void 0 === s)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i
            );
          n[t] = 16 * r + s;
        }
        return n;
      }),
      (r.asyncLoop = f),
      (r.utf8ToBytes = g),
      (r.bytesToUtf8 = function (e) {
        return new TextDecoder().decode(e);
      }),
      (r.toBytes = d),
      (r.kdfInputToBytes = function (e) {
        return "string" == typeof e && (e = g(e)), o(e), e;
      }),
      (r.concatBytes = function (...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          o(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }),
      (r.checkOpts = function (e, t) {
        if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
          throw Error("options should be object or undefined");
        return Object.assign(e, t);
      }),
      (r.createHasher = p),
      (r.createOptHasher = y),
      (r.createXOFer = v),
      (r.randomBytes = function (e = 32) {
        if (n.crypto && "function" == typeof n.crypto.getRandomValues)
          return n.crypto.getRandomValues(new Uint8Array(e));
        if (n.crypto && "function" == typeof n.crypto.randomBytes)
          return Uint8Array.from(n.crypto.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      });
    let n = e.r(581918);
    function i(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function s(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function o(e, ...t) {
      if (!i(e)) throw Error("Uint8Array expected");
      if (t.length > 0 && !t.includes(e.length))
        throw Error(
          "Uint8Array expected of length " + t + ", got length=" + e.length
        );
    }
    function l(e) {
      return (
        ((e << 24) & 0xff000000) |
        ((e << 8) & 0xff0000) |
        ((e >>> 8) & 65280) |
        ((e >>> 24) & 255)
      );
    }
    function a(e) {
      for (let t = 0; t < e.length; t++) e[t] = l(e[t]);
      return e;
    }
    (r.isLE = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
      (r.swap8IfBE = r.isLE ? (e) => e : (e) => l(e)),
      (r.byteSwapIfBE = r.swap8IfBE),
      (r.swap32IfBE = r.isLE ? (e) => e : a);
    let u =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      c = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function h(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    async function f(e, t, n) {
      let i = Date.now();
      for (let s = 0; s < e; s++) {
        n(s);
        let e = Date.now() - i;
        (e >= 0 && e < t) || (await (0, r.nextTick)(), (i += e));
      }
    }
    function g(e) {
      if ("string" != typeof e) throw Error("string expected");
      return new Uint8Array(new TextEncoder().encode(e));
    }
    function d(e) {
      return "string" == typeof e && (e = g(e)), o(e), e;
    }
    function p(e) {
      let t = (t) => e().update(d(t)).digest(),
        r = e();
      return (
        (t.outputLen = r.outputLen),
        (t.blockLen = r.blockLen),
        (t.create = () => e()),
        t
      );
    }
    function y(e) {
      let t = (t, r) => e(r).update(d(t)).digest(),
        r = e({});
      return (
        (t.outputLen = r.outputLen),
        (t.blockLen = r.blockLen),
        (t.create = (t) => e(t)),
        t
      );
    }
    function v(e) {
      let t = (t, r) => e(r).update(d(t)).digest(),
        r = e({});
      return (
        (t.outputLen = r.outputLen),
        (t.blockLen = r.blockLen),
        (t.create = (t) => e(t)),
        t
      );
    }
    (r.nextTick = async () => {}),
      (r.Hash = class {}),
      (r.wrapConstructor = p),
      (r.wrapConstructorWithOpts = y),
      (r.wrapXOFConstructorWithOpts = v);
  },
  13959,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.shake256 =
        r.shake128 =
        r.keccak_512 =
        r.keccak_384 =
        r.keccak_256 =
        r.keccak_224 =
        r.sha3_512 =
        r.sha3_384 =
        r.sha3_256 =
        r.sha3_224 =
        r.Keccak =
          void 0),
      (r.keccakP = w);
    let n = e.r(635138),
      i = e.r(857024),
      s = BigInt(0),
      o = BigInt(1),
      l = BigInt(2),
      a = BigInt(7),
      u = BigInt(256),
      c = BigInt(113),
      h = [],
      f = [],
      g = [];
    for (let e = 0, t = o, r = 1, n = 0; e < 24; e++) {
      ([r, n] = [n, (2 * r + 3 * n) % 5]),
        h.push(2 * (5 * n + r)),
        f.push((((e + 1) * (e + 2)) / 2) % 64);
      let i = s;
      for (let e = 0; e < 7; e++)
        (t = ((t << o) ^ ((t >> a) * c)) % u) & l &&
          (i ^= o << ((o << BigInt(e)) - o));
      g.push(i);
    }
    let d = (0, n.split)(g, !0),
      p = d[0],
      y = d[1],
      v = (e, t, r) =>
        r > 32 ? (0, n.rotlBH)(e, t, r) : (0, n.rotlSH)(e, t, r),
      b = (e, t, r) =>
        r > 32 ? (0, n.rotlBL)(e, t, r) : (0, n.rotlSL)(e, t, r);
    function w(e, t = 24) {
      let r = new Uint32Array(10);
      for (let n = 24 - t; n < 24; n++) {
        for (let t = 0; t < 10; t++)
          r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
        for (let t = 0; t < 10; t += 2) {
          let n = (t + 8) % 10,
            i = (t + 2) % 10,
            s = r[i],
            o = r[i + 1],
            l = v(s, o, 1) ^ r[n],
            a = b(s, o, 1) ^ r[n + 1];
          for (let r = 0; r < 50; r += 10) (e[t + r] ^= l), (e[t + r + 1] ^= a);
        }
        let t = e[2],
          i = e[3];
        for (let r = 0; r < 24; r++) {
          let n = f[r],
            s = v(t, i, n),
            o = b(t, i, n),
            l = h[r];
          (t = e[l]), (i = e[l + 1]), (e[l] = s), (e[l + 1] = o);
        }
        for (let t = 0; t < 50; t += 10) {
          for (let n = 0; n < 10; n++) r[n] = e[t + n];
          for (let n = 0; n < 10; n++)
            e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
        }
        (e[0] ^= p[n]), (e[1] ^= y[n]);
      }
      (0, i.clean)(r);
    }
    class m extends i.Hash {
      constructor(e, t, r, n = !1, s = 24) {
        if (
          (super(),
          (this.pos = 0),
          (this.posOut = 0),
          (this.finished = !1),
          (this.destroyed = !1),
          (this.enableXOF = !1),
          (this.blockLen = e),
          (this.suffix = t),
          (this.outputLen = r),
          (this.enableXOF = n),
          (this.rounds = s),
          (0, i.anumber)(r),
          !(0 < e && e < 200))
        )
          throw Error("only keccak-f1600 function is supported");
        (this.state = new Uint8Array(200)),
          (this.state32 = (0, i.u32)(this.state));
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        (0, i.swap32IfBE)(this.state32),
          w(this.state32, this.rounds),
          (0, i.swap32IfBE)(this.state32),
          (this.posOut = 0),
          (this.pos = 0);
      }
      update(e) {
        (0, i.aexists)(this), (e = (0, i.toBytes)(e)), (0, i.abytes)(e);
        let { blockLen: t, state: r } = this,
          n = e.length;
        for (let i = 0; i < n; ) {
          let s = Math.min(t - this.pos, n - i);
          for (let t = 0; t < s; t++) r[this.pos++] ^= e[i++];
          this.pos === t && this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished) return;
        this.finished = !0;
        let { state: e, suffix: t, pos: r, blockLen: n } = this;
        (e[r] ^= t),
          (128 & t) != 0 && r === n - 1 && this.keccak(),
          (e[n - 1] ^= 128),
          this.keccak();
      }
      writeInto(e) {
        (0, i.aexists)(this, !1), (0, i.abytes)(e), this.finish();
        let t = this.state,
          { blockLen: r } = this;
        for (let n = 0, i = e.length; n < i; ) {
          this.posOut >= r && this.keccak();
          let s = Math.min(r - this.posOut, i - n);
          e.set(t.subarray(this.posOut, this.posOut + s), n),
            (this.posOut += s),
            (n += s);
        }
        return e;
      }
      xofInto(e) {
        if (!this.enableXOF)
          throw Error("XOF is not possible for this instance");
        return this.writeInto(e);
      }
      xof(e) {
        return (0, i.anumber)(e), this.xofInto(new Uint8Array(e));
      }
      digestInto(e) {
        if (((0, i.aoutput)(e, this), this.finished))
          throw Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        (this.destroyed = !0), (0, i.clean)(this.state);
      }
      _cloneInto(e) {
        let {
          blockLen: t,
          suffix: r,
          outputLen: n,
          rounds: i,
          enableXOF: s,
        } = this;
        return (
          e || (e = new m(t, r, n, s, i)),
          e.state32.set(this.state32),
          (e.pos = this.pos),
          (e.posOut = this.posOut),
          (e.finished = this.finished),
          (e.rounds = i),
          (e.suffix = r),
          (e.outputLen = n),
          (e.enableXOF = s),
          (e.destroyed = this.destroyed),
          e
        );
      }
    }
    r.Keccak = m;
    let L = (e, t, r) => (0, i.createHasher)(() => new m(t, e, r));
    (r.sha3_224 = L(6, 144, 28)),
      (r.sha3_256 = L(6, 136, 32)),
      (r.sha3_384 = L(6, 104, 48)),
      (r.sha3_512 = L(6, 72, 64)),
      (r.keccak_224 = L(1, 144, 28)),
      (r.keccak_256 = L(1, 136, 32)),
      (r.keccak_384 = L(1, 104, 48)),
      (r.keccak_512 = L(1, 72, 64));
    let x = (e, t, r) =>
      (0, i.createXOFer)(
        (n = {}) => new m(t, e, void 0 === n.dkLen ? r : n.dkLen, !0)
      );
    (r.shake128 = x(31, 168, 16)), (r.shake256 = x(31, 136, 32));
  },
]);
