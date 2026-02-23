(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  233525,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  818581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(271645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else e && (r.current = i(e, n)), t && (o.current = i(t, n));
        },
        [e, t]
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  998183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return u;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return a;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function i(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function l(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function a(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, l(e));
        else t.set(r, l(n));
      return t;
    }
    function u(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  195057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return a;
      },
      formatWithValidation: function () {
        return s;
      },
      urlObjectKeys: function () {
        return u;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(190809)._(e.r(998183)),
      l = /https?|ftp|gopher|file/;
    function a(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        a = e.hash || "",
        u = e.query || "",
        s = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (s = t + e.host)
          : r &&
            ((s = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (s += ":" + e.port)),
        u && "object" == typeof u && (u = String(i.urlQueryToSearchParams(u)));
      let c = e.search || (u && `?${u}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || l.test(n)) && !1 !== s)
          ? ((s = "//" + (s || "")), o && "/" !== o[0] && (o = "/" + o))
          : s || (s = ""),
        a && "#" !== a[0] && (a = "#" + a),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${s}${o}${c}${a}`
      );
    }
    let u = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function s(e) {
      return a(e);
    }
  },
  718967,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return P;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return _;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return h;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return l;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return s;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return u;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return g;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return j;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function l(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      u = (e) => a.test(e);
    function s() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = s();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function g(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await g(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let m = "u" > typeof performance,
      h =
        m &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class y extends Error {}
    class b extends Error {}
    class _ extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class P extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function j(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  573668,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(718967),
      o = e.r(652817);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  284508,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  522016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return _;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(190809),
      l = e.r(843476),
      a = i._(e.r(271645)),
      u = e.r(195057),
      s = e.r(8372),
      c = e.r(818581),
      f = e.r(718967),
      d = e.r(405550);
    e.r(233525);
    let p = e.r(91949),
      g = e.r(573668),
      m = e.r(509396);
    function h(e) {
      return "string" == typeof e ? e : (0, u.formatUrl)(e);
    }
    function y(t) {
      var r;
      let n,
        o,
        i,
        [u, y] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
        _ = (0, a.useRef)(null),
        {
          href: v,
          as: P,
          children: j,
          prefetch: O = null,
          passHref: w,
          replace: E,
          shallow: S,
          scroll: x,
          onClick: C,
          onMouseEnter: R,
          onTouchStart: M,
          legacyBehavior: I = !1,
          onNavigate: T,
          ref: $,
          unstable_dynamicOnHover: z,
          ...N
        } = t;
      (n = j),
        I &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, l.jsx)("a", { children: n }));
      let k = a.default.useContext(s.AppRouterContext),
        A = !1 !== O,
        L =
          !1 !== O
            ? null === (r = O) || "auto" === r
              ? m.FetchStrategy.PPR
              : m.FetchStrategy.Full
            : m.FetchStrategy.PPR,
        { href: D, as: U } = a.default.useMemo(() => {
          let e = h(v);
          return { href: e, as: P ? h(P) : e };
        }, [v, P]);
      if (I) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = a.default.Children.only(n);
      }
      let F = I ? o && "object" == typeof o && o.ref : $,
        B = a.default.useCallback(
          (e) => (
            null !== k &&
              (_.current = (0, p.mountLinkInstance)(e, D, k, L, A, y)),
            () => {
              _.current &&
                ((0, p.unmountLinkForCurrentNavigation)(_.current),
                (_.current = null)),
                (0, p.unmountPrefetchableInstance)(e);
            }
          ),
          [A, D, k, L, y]
        ),
        q = {
          ref: (0, c.useMergedRef)(B, F),
          onClick(t) {
            I || "function" != typeof C || C(t),
              I &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !k ||
                t.defaultPrevented ||
                (function (t, r, n, o, i, l, u) {
                  if ("u" > typeof window) {
                    let s,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((s = t.currentTarget.getAttribute("target")) &&
                          "_self" !== s) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, g.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), u)) {
                      let e = !1;
                      if (
                        (u({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(699781);
                    a.default.startTransition(() => {
                      f(n || r, i ? "replace" : "push", l ?? !0, o.current);
                    });
                  }
                })(t, D, U, _, E, x, T);
          },
          onMouseEnter(e) {
            I || "function" != typeof R || R(e),
              I &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              k && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === z);
          },
          onTouchStart: function (e) {
            I || "function" != typeof M || M(e),
              I &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              k && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === z);
          },
        };
      return (
        (0, f.isAbsoluteUrl)(U)
          ? (q.href = U)
          : (I && !w && ("a" !== o.type || "href" in o.props)) ||
            (q.href = (0, d.addBasePath)(U)),
        (i = I
          ? a.default.cloneElement(o, q)
          : (0, l.jsx)("a", { ...N, ...q, children: n })),
        (0, l.jsx)(b.Provider, { value: u, children: i })
      );
    }
    e.r(284508);
    let b = (0, a.createContext)(p.IDLE_LINK_STATUS),
      _ = () => (0, a.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  667585,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(132061);
    function o({ reason: e, children: t }) {
      if ("u" < typeof window)
        throw Object.defineProperty(
          new n.BailoutToCSRError(e),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return t;
    }
  },
  309885,
  (e, t, r) => {
    "use strict";
    function n(e) {
      return e
        .split("/")
        .map((e) => encodeURIComponent(e))
        .join("/");
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  652157,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(843476),
      o = e.r(174080),
      i = e.r(563599),
      l = e.r(309885),
      a = e.r(951716);
    function u({ moduleIds: e }) {
      if ("u" > typeof window) return null;
      let t = i.workAsyncStorage.getStore();
      if (void 0 === t) return null;
      let r = [];
      if (t.reactLoadableManifest && e) {
        let n = t.reactLoadableManifest;
        for (let t of e) {
          if (!n[t]) continue;
          let e = n[t].files;
          r.push(...e);
        }
      }
      if (0 === r.length) return null;
      let u = (0, a.getDeploymentIdQueryOrEmptyString)();
      return (0, n.jsx)(n.Fragment, {
        children: r.map((e) => {
          let r = `${t.assetPrefix}/_next/${(0, l.encodeURIPath)(e)}${u}`;
          return e.endsWith(".css")
            ? (0, n.jsx)(
                "link",
                {
                  precedence: "dynamic",
                  href: r,
                  rel: "stylesheet",
                  as: "style",
                  nonce: t.nonce,
                },
                e
              )
            : ((0, o.preload)(r, {
                as: "script",
                fetchPriority: "low",
                nonce: t.nonce,
              }),
              null);
        }),
      });
    }
  },
  869093,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let n = e.r(843476),
      o = e.r(271645),
      i = e.r(667585),
      l = e.r(652157);
    function a(e) {
      return { default: e && "default" in e ? e.default : e };
    }
    let u = {
        loader: () => Promise.resolve(a(() => null)),
        loading: null,
        ssr: !0,
      },
      s = function (e) {
        let t = { ...u, ...e },
          r = (0, o.lazy)(() => t.loader().then(a)),
          s = t.loading;
        function c(e) {
          let a = s
              ? (0, n.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            u = !t.ssr || !!t.loading,
            c = u ? o.Suspense : o.Fragment,
            f = t.ssr
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    "u" < typeof window
                      ? (0, n.jsx)(l.PreloadChunks, { moduleIds: t.modules })
                      : null,
                    (0, n.jsx)(r, { ...e }),
                  ],
                })
              : (0, n.jsx)(i.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, n.jsx)(r, { ...e }),
                });
          return (0, n.jsx)(c, { ...(u ? { fallback: a } : {}), children: f });
        }
        return (c.displayName = "LoadableComponent"), c;
      };
  },
  770703,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(555682)._(e.r(869093));
    function o(e, t) {
      let r = {};
      "function" == typeof e && (r.loader = e);
      let o = { ...r, ...t };
      return (0, n.default)({ ...o, modules: o.loadableGenerated?.modules });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  488143,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: n,
      blurDataURL: o,
      objectFit: i,
    }) {
      let l = r ? 40 * r : e,
        a = n ? 40 * n : t,
        u = l && a ? `viewBox='0 0 ${l} ${a}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        u
          ? "none"
          : "contain" === i
          ? "xMidYMid"
          : "cover" === i
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  987690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return i;
      },
      imageConfigDefault: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
      l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  908927,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      e.r(233525);
    let n = e.r(951716),
      o = e.r(488143),
      i = e.r(987690),
      l = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function a(e) {
      return void 0 !== e.default;
    }
    function u(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function s(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: s = !1,
        preload: c = !1,
        loading: f,
        className: d,
        quality: p,
        width: g,
        height: m,
        fill: h = !1,
        style: y,
        overrideSrc: b,
        onLoad: _,
        onLoadingComplete: v,
        placeholder: P = "empty",
        blurDataURL: j,
        fetchPriority: O,
        decoding: w = "async",
        layout: E,
        objectFit: S,
        objectPosition: x,
        lazyBoundary: C,
        lazyRoot: R,
        ...M
      },
      I
    ) {
      var T;
      let $,
        z,
        N,
        { imgConf: k, showAltText: A, blurComplete: L, defaultLoader: D } = I,
        U = k || i.imageConfigDefault;
      if ("allSizes" in U) $ = U;
      else {
        let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
          t = U.deviceSizes.sort((e, t) => e - t),
          r = U.qualities?.sort((e, t) => e - t);
        $ = { ...U, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === D)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let F = M.loader || D;
      delete M.loader, delete M.srcSet;
      let B = "__next_img_default" in F;
      if (B) {
        if ("custom" === $.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = F;
        F = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (E) {
        "fill" === E && (h = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[E];
        e && (y = { ...y, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[E];
        r && !t && (t = r);
      }
      let q = "",
        W = u(g),
        G = u(m);
      if ((T = e) && "object" == typeof T && (a(T) || void 0 !== T.src)) {
        let t = a(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((z = t.blurWidth),
          (N = t.blurHeight),
          (j = j || t.blurDataURL),
          (q = t.src),
          !h)
        )
          if (W || G) {
            if (W && !G) {
              let e = W / t.width;
              G = Math.round(t.height * e);
            } else if (!W && G) {
              let e = G / t.height;
              W = Math.round(t.width * e);
            }
          } else (W = t.width), (G = t.height);
      }
      let X = !s && !c && ("lazy" === f || void 0 === f);
      (!(e = "string" == typeof e ? e : q) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (X = !1)),
        $.unoptimized && (r = !0),
        B &&
          !$.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let K = u(p),
        V = Object.assign(
          h
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: x,
              }
            : {},
          A ? {} : { color: "transparent" },
          y
        ),
        Q =
          L || "empty" === P
            ? null
            : "blur" === P
            ? `url("data:image/svg+xml;charset=utf-8,${(0, o.getImageBlurSvg)({
                widthInt: W,
                heightInt: G,
                blurWidth: z,
                blurHeight: N,
                blurDataURL: j || "",
                objectFit: V.objectFit,
              })}")`
            : `url("${P}")`,
        H = l.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        J = Q
          ? {
              backgroundSize: H,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Q,
            }
          : {},
        Y = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: o,
          quality: i,
          sizes: l,
          loader: a,
        }) {
          if (r) {
            let e = (0, n.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//") && e) {
              let r = t.includes("?") ? "&" : "?";
              t = `${t}${r}dpl=${e}`;
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: u, kind: s } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              n
            ) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  o = [];
                for (let e; (e = r.exec(n)); ) o.push(parseInt(e[2]));
                if (o.length) {
                  let r = 0.01 * Math.min(...o);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, o, l),
            c = u.length - 1;
          return {
            sizes: l || "w" !== s ? l : "100vw",
            srcSet: u
              .map(
                (r, n) =>
                  `${a({ config: e, src: t, quality: i, width: r })} ${
                    "w" === s ? r : n + 1
                  }${s}`
              )
              .join(", "),
            src: a({ config: e, src: t, quality: i, width: u[c] }),
          };
        })({
          config: $,
          src: e,
          unoptimized: r,
          width: W,
          quality: K,
          sizes: t,
          loader: F,
        }),
        Z = X ? "lazy" : f;
      return {
        props: {
          ...M,
          loading: Z,
          fetchPriority: O,
          width: W,
          height: G,
          decoding: w,
          className: d,
          style: { ...V, ...J },
          sizes: Y.sizes,
          srcSet: Y.srcSet,
          src: b || Y.src,
        },
        meta: { unoptimized: r, preload: c || s, placeholder: P, fill: h },
      };
    }
  },
  898879,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(271645),
      o = "u" < typeof window,
      i = o ? () => {} : n.useLayoutEffect,
      l = o ? () => {} : n.useEffect;
    function a(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function a() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        o && (t?.mountedInstances?.add(e.children), a()),
        i(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        i(
          () => (
            t && (t._pendingUpdate = a),
            () => {
              t && (t._pendingUpdate = a);
            }
          )
        ),
        l(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  325633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return m;
      },
      defaultHead: function () {
        return f;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(555682),
      l = e.r(190809),
      a = e.r(843476),
      u = l._(e.r(271645)),
      s = i._(e.r(898879)),
      c = e.r(742732);
    function f() {
      return [
        (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, a.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function d(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === u.default.Fragment
        ? e.concat(
            u.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(233525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function g(e) {
      let t, r, n, o;
      return e
        .reduce(d, [])
        .reverse()
        .concat(f().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (o = {}),
          (e) => {
            let i = !0,
              l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              l = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (i = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (i = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (i = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = o[r] || new Set();
                      ("name" !== r || !l) && n.has(t)
                        ? (i = !1)
                        : (n.add(t), (o[r] = n));
                    }
                }
            }
            return i;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return u.default.cloneElement(e, { key: r });
        });
    }
    let m = function ({ children: e }) {
      let t = (0, u.useContext)(c.HeadManagerContext);
      return (0, a.jsx)(s.default, {
        reduceComponentsToState: g,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  918556,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(555682)._(e.r(271645)),
      o = e.r(987690),
      i = n.default.createContext(o.imageConfigDefault);
  },
  65856,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(555682)._(e.r(271645)).default.createContext(null);
  },
  670965,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  1948,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let n = e.r(670965),
      o = e.r(951716);
    function i({ config: e, src: t, width: r, quality: i }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let l = (0, n.findClosestQuality)(i, e),
        a = (0, o.getDeploymentId)();
      return `${e.path}`
      }`;
    }
    i.__next_img_default = !0;
    let l = i;
  },
  605500,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      });
    let n = e.r(555682),
      o = e.r(190809),
      i = e.r(843476),
      l = o._(e.r(271645)),
      a = n._(e.r(174080)),
      u = n._(e.r(325633)),
      s = e.r(908927),
      c = e.r(987690),
      f = e.r(918556);
    e.r(233525);
    let d = e.r(65856),
      p = n._(e.r(1948)),
      g = e.r(818581),
      m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function h(e, t, r, n, o, i, l) {
      let a = e?.src;
      e &&
        e["data-loaded-src"] !== a &&
        ((e["data-loaded-src"] = a),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && o(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  o = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => o,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (o = !0), t.stopPropagation();
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function y(e) {
      return l.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, l.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: o,
          decoding: a,
          className: u,
          style: s,
          fetchPriority: c,
          placeholder: f,
          loading: d,
          unoptimized: p,
          fill: m,
          onLoadRef: b,
          onLoadingCompleteRef: _,
          setBlurComplete: v,
          setShowAltText: P,
          sizesInput: j,
          onLoad: O,
          onError: w,
          ...E
        },
        S
      ) => {
        let x = (0, l.useCallback)(
            (e) => {
              e && (w && (e.src = e.src), e.complete && h(e, f, b, _, v, p, j));
            },
            [e, f, b, _, v, w, p, j]
          ),
          C = (0, g.useMergedRef)(S, x);
        return (0, i.jsx)("img", {
          ...E,
          ...y(c),
          loading: d,
          width: o,
          height: n,
          decoding: a,
          "data-nimg": m ? "fill" : "1",
          className: u,
          style: s,
          sizes: r,
          srcSet: t,
          src: e,
          ref: C,
          onLoad: (e) => {
            h(e.currentTarget, f, b, _, v, p, j);
          },
          onError: (e) => {
            P(!0), "empty" !== f && v(!0), w && w(e);
          },
        });
      }
    );
    function _({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...y(t.fetchPriority),
      };
      return e && a.default.preload
        ? (a.default.preload(t.src, r), null)
        : (0, i.jsx)(u.default, {
            children: (0, i.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let v = (0, l.forwardRef)((e, t) => {
      let r = (0, l.useContext)(d.RouterContext),
        n = (0, l.useContext)(f.ImageConfigContext),
        o = (0, l.useMemo)(() => {
          let e = m || n || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            o = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: o,
            localPatterns:
              "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: a, onLoadingComplete: u } = e,
        g = (0, l.useRef)(a);
      (0, l.useEffect)(() => {
        g.current = a;
      }, [a]);
      let h = (0, l.useRef)(u);
      (0, l.useEffect)(() => {
        h.current = u;
      }, [u]);
      let [y, v] = (0, l.useState)(!1),
        [P, j] = (0, l.useState)(!1),
        { props: O, meta: w } = (0, s.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: o,
          blurComplete: y,
          showAltText: P,
        });
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(b, {
            ...O,
            unoptimized: w.unoptimized,
            placeholder: w.placeholder,
            fill: w.fill,
            onLoadRef: g,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: j,
            sizesInput: e.sizes,
            ref: t,
          }),
          w.preload
            ? (0, i.jsx)(_, { isAppRouter: !r, imgAttributes: O })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  794909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return s;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(555682),
      l = e.r(908927),
      a = e.r(605500),
      u = i._(e.r(1948));
    function s(e) {
      let { props: t } = (0, l.getImgProps)(e, {
        defaultLoader: u.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = a.Image;
  },
  657688,
  (e, t, r) => {
    t.exports = e.r(794909);
  },
]);
