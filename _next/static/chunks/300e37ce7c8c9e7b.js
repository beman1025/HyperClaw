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
      a = e.i(522016),
      l = e.i(618566);
    let i = (0, e.i(770703).default)(() => e.A(580648), {
        loadableGenerated: { modules: [644028] },
        ssr: !1,
      }),
      n = [
        { href: "/trade", label: "Trade" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/leaderboard", label: "Leaderboard" },
        { href: "/developers", label: "Developers" },
      ];
    function d() {
      let e = (0, l.usePathname)(),
        [d, h] = (0, t.useState)(!1);
      return (0, s.jsxs)("header", {
        className: "shrink-0 bg-[#030108] border-b border-white/[0.06]",
        children: [
          (0, s.jsxs)("div", {
            className: "flex items-center justify-between px-3 sm:px-4 py-1.5",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-3 sm:gap-4",
                children: [
                  (0, s.jsxs)(a.default, {
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
                    children: n.map((t) =>
                      (0, s.jsx)(
                        a.default,
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
                    onClick: () => h(!d),
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
                children: n.map((t) =>
                  (0, s.jsx)(
                    a.default,
                    {
                      href: t.href,
                      onClick: () => h(!1),
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
  613979,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(770703),
      r = e.i(470661),
      a = e.i(243133);
    let l = (0, t.default)(() => e.A(882649), {
      loadableGenerated: { modules: [464056] },
      ssr: !1,
    });
    function i() {
      return (0, s.jsxs)("div", {
        className: "h-screen bg-[#030108] flex flex-col overflow-hidden",
        children: [
          (0, s.jsx)(r.default, {}),
          (0, s.jsx)("div", {
            className: "flex-1 overflow-y-auto",
            children: (0, s.jsx)(l, {}),
          }),
          (0, s.jsx)(a.default, {}),
        ],
      });
    }
    e.s(["default", () => i]);
  },
  580648,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/9874b68edb2c68cd.js"].map((s) => e.l(s))
      ).then(() => s(644028))
    );
  },
  882649,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/7845a708a4ce5c45.js"].map((s) => e.l(s))
      ).then(() => s(464056))
    );
  },
]);
