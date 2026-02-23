(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  618566,
  (e, s, t) => {
    s.exports = e.r(976562);
  },
  470661,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(271645),
      r = e.i(657688),
      l = e.i(522016),
      a = e.i(618566);
    let i = (0, e.i(770703).default)(() => e.A(580648), {
        loadableGenerated: { modules: [644028] },
        ssr: !1,
      }),
      o = [
        { href: "/trade", label: "Trade" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/leaderboard", label: "Leaderboard" },
        { href: "/developers", label: "Developers" },
      ];
    function d() {
      let e = (0, a.usePathname)(),
        [d, n] = (0, t.useState)(!1);
      return (0, s.jsxs)("header", {
        className: "shrink-0 bg-[#030108] border-b border-white/[0.06]",
        children: [
          (0, s.jsxs)("div", {
            className: "flex items-center justify-between px-3 sm:px-4 py-1.5",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-3 sm:gap-4",
                children: [
                  (0, s.jsxs)(l.default, {
                    href: "/",
                    className: "shrink-0 flex items-center gap-2",
                    children: [
                      (0, s.jsx)(r.default, {
                        src: "/hyperclaw_icon_transparent.png",
                        alt: "HyperClaw",
                        width: 24,
                        height: 24,
                        className: "h-[24px] w-[24px]",
                        priority: !0,
                      }),
                      (0, s.jsxs)("span", {
                        className:
                          "text-white font-bold text-sm tracking-wide hidden sm:inline",
                        children: [
                          "HYPER",
                          (0, s.jsx)("span", {
                            className: "text-[#DC2626]",
                            children: "CLAW",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("nav", {
                    className: "hidden md:flex items-center gap-1",
                    children: o.map((t) =>
                      (0, s.jsx)(
                        l.default,
                        {
                          href: t.href,
                          className: `px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                            e === t.href ||
                            ("/trade" === t.href && e?.startsWith("/trade"))
                              ? "text-white border-b-2 border-[#DC2626]"
                              : "text-white/40 hover:text-white/70"
                          }`,
                          children: t.label,
                        },
                        t.href
                      )
                    ),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-2 sm:gap-3",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex items-center gap-1.5 text-[10px] text-white/25 mr-1",
                    children: [
                      (0, s.jsx)("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-green-500",
                      }),
                      (0, s.jsx)("span", {
                        className: "hidden sm:inline",
                        children: "USDC",
                      }),
                    ],
                  }),
                  (0, s.jsx)(i, { compact: !0 }),
                  (0, s.jsx)("button", {
                    onClick: () => n(!d),
                    className:
                      "md:hidden w-7 h-7 flex items-center justify-center rounded bg-white/[0.06] text-white/60",
                    "aria-label": "Toggle menu",
                    children: d
                      ? (0, s.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        })
                      : (0, s.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
                          }),
                        }),
                  }),
                ],
              }),
            ],
          }),
          d &&
            (0, s.jsx)("div", {
              className: "md:hidden border-t border-white/[0.06] bg-[#030108]",
              children: (0, s.jsx)("nav", {
                className: "flex flex-col px-3 py-2 gap-0.5",
                children: o.map((t) =>
                  (0, s.jsx)(
                    l.default,
                    {
                      href: t.href,
                      onClick: () => n(!1),
                      className: `px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                        e === t.href ||
                        ("/trade" === t.href && e?.startsWith("/trade"))
                          ? "text-white bg-white/[0.06]"
                          : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                      }`,
                      children: t.label,
                    },
                    t.href
                  )
                ),
              }),
            }),
        ],
      });
    }
    e.s(["default", () => d]);
  },
  243133,
  (e) => {
    "use strict";
    var s = e.i(843476);
    function t() {
      return (0, s.jsxs)("div", {
        className:
          "shrink-0 flex items-center justify-between px-3 sm:px-4 py-1.5 bg-[#030108] border-t border-white/[0.06] text-[10px]",
        children: [
          (0, s.jsxs)("div", {
            className: "flex items-center gap-2 sm:gap-4",
            children: [
              (0, s.jsxs)("span", {
                className: "flex items-center gap-1.5 text-green-400/70",
                children: [
                  (0, s.jsx)("span", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse",
                  }),
                  (0, s.jsx)("span", {
                    className: "hidden sm:inline",
                    children: "Operational",
                  }),
                ],
              }),
              (0, s.jsx)("a", {
                href: "https://x.com/tradehyperclaw",
                className:
                  "text-white/40 hover:text-white/60 transition-colors",
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, s.jsx)("svg", {
                  className: "w-3 h-3",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: (0, s.jsx)("path", {
                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  }),
                }),
              }),
            ],
          }),
          (0, s.jsx)("span", {
            className: "text-white/30 hidden sm:block",
            children: "Charts powered by TradingView",
          }),
          (0, s.jsxs)("span", {
            className: "text-white/40",
            children: [
              "Powered by",
              " ",
              (0, s.jsx)("a", {
                href: "https://orderly.network",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-white/40 hover:text-white/60 transition-colors font-semibold",
                children: "Orderly",
              }),
            ],
          }),
        ],
      });
    }
    e.s(["default", () => t]);
  },
  104444,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(271645),
      r = e.i(770703),
      l = e.i(470661);
    function a({ symbol: e }) {
      let r = e.replace("PERP_", "").replace("_USDC", "") + "USDT.P",
        [l, a] = (0, t.useState)(!1);
      return (0, s.jsxs)("div", {
        className: "bg-[#030108] h-full flex flex-col relative",
        children: [
          (0, s.jsxs)("div", {
            className:
              "px-3 py-1.5 border-b border-white/[0.04] flex items-center gap-1 shrink-0",
            children: [
              ["15m", "1H", "4H", "1D", "1W"].map((e, t) =>
                (0, s.jsx)(
                  "button",
                  {
                    className: `px-2.5 py-1 text-[10px] rounded transition-colors ${
                      1 === t
                        ? "bg-white/[0.06] text-white/50"
                        : "text-white/15 hover:text-white/30 hover:bg-white/[0.03]"
                    }`,
                    children: e,
                  },
                  e
                )
              ),
              (0, s.jsx)("div", { className: "flex-1" }),
              (0, s.jsx)("button", {
                className:
                  "px-2 py-1 text-[10px] text-white/15 hover:text-white/30 transition-colors",
                children: "Indicators",
              }),
            ],
          }),
          !l &&
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 top-[33px] z-10 bg-[#030108] flex items-center justify-center",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "w-6 h-6 border-2 border-white/[0.08] border-t-[#DC2626] rounded-full animate-spin",
                  }),
                  (0, s.jsx)("span", {
                    className: "text-[10px] text-white/15",
                    children: "Loading chart...",
                  }),
                ],
              }),
            }),
          (0, s.jsx)("div", {
            className: "flex-1 relative min-h-0",
            children: (0, s.jsx)("iframe", {
              src: `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=BINANCE:${encodeURIComponent(
                r
              )}&interval=60&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=050208&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%22paneProperties.background%22%3A%22%23050208%22%2C%22paneProperties.backgroundType%22%3A%22solid%22%7D&enabled_features=[]&disabled_features=[]&locale=en`,
              className: "w-full h-full border-0",
              sandbox: "allow-scripts allow-same-origin",
              allowFullScreen: !0,
              onLoad: () => a(!0),
            }),
          }),
        ],
      });
    }
    var i = e.i(243133);
    let o = (0, r.default)(() => e.A(479323), {
        loadableGenerated: { modules: [910977] },
        ssr: !1,
      }),
      d = (0, r.default)(() => e.A(168916), {
        loadableGenerated: { modules: [369509] },
        ssr: !1,
      }),
      n = (0, r.default)(() => e.A(426070), {
        loadableGenerated: { modules: [448496] },
        ssr: !1,
      }),
      h = (0, r.default)(() => e.A(491321), {
        loadableGenerated: { modules: [637239] },
        ssr: !1,
      }),
      c = (0, r.default)(() => e.A(642266), {
        loadableGenerated: { modules: [328677] },
        ssr: !1,
      }),
      x = (0, r.default)(() => e.A(118147), {
        loadableGenerated: { modules: [781937] },
        ssr: !1,
      });
    function m() {
      let [e, r] = (0, t.useState)("PERP_BTC_USDC"),
        [m, b] = (0, t.useState)("orderbook"),
        [f, p] = (0, t.useState)("chart"),
        [u, j] = (0, t.useState)(!1);
      return (0, s.jsxs)("div", {
        className: "h-screen flex flex-col bg-[#030108] overflow-hidden",
        children: [
          (0, s.jsx)(l.default, {}),
          (0, s.jsxs)("div", {
            className:
              "flex items-center gap-2 sm:gap-3 px-2 py-1 border-b border-white/[0.06] bg-[#030108] shrink-0",
            children: [
              (0, s.jsx)("button", {
                onClick: () => j(!u),
                className:
                  "md:hidden shrink-0 w-7 h-7 flex items-center justify-center rounded bg-white/[0.06] text-white/50",
                "aria-label": "Markets",
                children: (0, s.jsx)("svg", {
                  className: "w-3.5 h-3.5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  strokeWidth: 2,
                  children: (0, s.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5",
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                className: "flex-1 overflow-hidden",
                children: (0, s.jsx)(d, { symbol: e }),
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "hidden md:flex flex-1 overflow-hidden min-h-0",
            children: [
              (0, s.jsx)("div", {
                className: "w-[200px] shrink-0 overflow-hidden",
                children: (0, s.jsx)(o, {
                  currentSymbol: e,
                  onSymbolChange: r,
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "flex-1 flex flex-col min-w-0 border-l border-white/[0.06]",
                children: [
                  (0, s.jsx)("div", {
                    className: "flex-1 min-h-0",
                    children: (0, s.jsx)(a, { symbol: e }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "border-t border-white/[0.06] h-[200px] shrink-0 overflow-y-auto",
                    children: (0, s.jsx)(c, {}),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-[280px] shrink-0 border-l border-white/[0.06] flex flex-col",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex items-center border-b border-white/[0.06] shrink-0",
                    children: [
                      (0, s.jsxs)("button", {
                        onClick: () => b("orderbook"),
                        className: `flex-1 px-3 py-2 text-xs font-medium transition-colors relative ${
                          "orderbook" === m
                            ? "text-white"
                            : "text-white/50 hover:text-white/70"
                        }`,
                        children: [
                          "Order book",
                          "orderbook" === m &&
                            (0, s.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-[2px] bg-[#DC2626]",
                            }),
                        ],
                      }),
                      (0, s.jsxs)("button", {
                        onClick: () => b("trades"),
                        className: `flex-1 px-3 py-2 text-xs font-medium transition-colors relative ${
                          "trades" === m
                            ? "text-white"
                            : "text-white/50 hover:text-white/70"
                        }`,
                        children: [
                          "Last trades",
                          "trades" === m &&
                            (0, s.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-[2px] bg-[#DC2626]",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "h-[300px] shrink-0 overflow-hidden",
                    children:
                      "orderbook" === m
                        ? (0, s.jsx)(h, { symbol: e })
                        : (0, s.jsx)(x, { symbol: e }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex-1 min-h-0 overflow-y-auto border-t border-white/[0.06]",
                    children: (0, s.jsx)(n, { symbol: e }),
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className:
              "md:hidden flex-1 flex flex-col overflow-hidden min-h-0 relative",
            children: [
              u &&
                (0, s.jsx)("div", {
                  className: "absolute inset-0 z-30 bg-[#030108]",
                  children: (0, s.jsx)(o, {
                    currentSymbol: e,
                    onSymbolChange: (e) => {
                      r(e), j(!1);
                    },
                  }),
                }),
              (0, s.jsxs)("div", {
                className: "flex-1 overflow-y-auto min-h-0",
                children: [
                  "chart" === f && (0, s.jsx)(a, { symbol: e }),
                  "orderbook" === f &&
                    (0, s.jsx)("div", {
                      className: "h-full",
                      children: (0, s.jsx)(h, { symbol: e }),
                    }),
                  "order" === f &&
                    (0, s.jsx)("div", {
                      className: "p-2",
                      children: (0, s.jsx)(n, { symbol: e }),
                    }),
                  "positions" === f && (0, s.jsx)(c, {}),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "shrink-0 border-t border-white/[0.06] bg-[#030108] flex",
                children: [
                  {
                    key: "chart",
                    label: "Chart",
                    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
                  },
                  {
                    key: "orderbook",
                    label: "Book",
                    icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
                  },
                  {
                    key: "order",
                    label: "Trade",
                    icon: "M12 4.5v15m7.5-7.5h-15",
                  },
                  {
                    key: "positions",
                    label: "Positions",
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                  },
                ].map((e) =>
                  (0, s.jsxs)(
                    "button",
                    {
                      onClick: () => p(e.key),
                      className: `flex-1 flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-all ${
                        f === e.key ? "text-[#DC2626]" : "text-white/30"
                      }`,
                      children: [
                        (0, s.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 1.5,
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: e.icon,
                          }),
                        }),
                        e.label,
                      ],
                    },
                    e.key
                  )
                ),
              }),
            ],
          }),
          (0, s.jsx)("div", {
            className: "hidden sm:block",
            children: (0, s.jsx)(i.default, {}),
          }),
        ],
      });
    }
    e.s(["default", () => m], 104444);
  },
  580648,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/9874b68edb2c68cd.js"].map((s) => e.l(s))
      ).then(() => s(644028))
    );
  },
  479323,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/f3a965b5bde3f901.js"].map((s) => e.l(s))
      ).then(() => s(910977))
    );
  },
  168916,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/ba735689083f09f7.js"].map((s) => e.l(s))
      ).then(() => s(369509))
    );
  },
  426070,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/8edbb2e55345f1c2.js"].map((s) => e.l(s))
      ).then(() => s(448496))
    );
  },
  491321,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/fcd4efd0a12d4e93.js"].map((s) => e.l(s))
      ).then(() => s(637239))
    );
  },
  642266,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/3b2612f462d46965.js"].map((s) => e.l(s))
      ).then(() => s(328677))
    );
  },
  118147,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/f93995afe83b98a4.js"].map((s) => e.l(s))
      ).then(() => s(781937))
    );
  },
]);
