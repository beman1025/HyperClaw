(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  618566,
  (e, t, s) => {
    t.exports = e.r(976562);
  },
  470661,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
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
        [d, h] = (0, s.useState)(!1);
      return (0, t.jsxs)("header", {
        className: "shrink-0 bg-[#030108] border-b border-white/[0.06]",
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-center justify-between px-3 sm:px-4 py-1.5",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center gap-3 sm:gap-4",
                children: [
                  (0, t.jsxs)(a.default, {
                    href: "/",
                    className: "shrink-0 flex items-center gap-2",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: "/hyperclaw_icon_transparent.png",
                        alt: "HyperClaw",
                        width: 24,
                        height: 24,
                        className: "h-[24px] w-[24px]",
                        priority: !0,
                      }),
                      (0, t.jsxs)("span", {
                        className:
                          "text-white font-bold text-sm tracking-wide hidden sm:inline",
                        children: [
                          "HYPER",
                          (0, t.jsx)("span", {
                            className: "text-[#DC2626]",
                            children: "CLAW",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("nav", {
                    className: "hidden md:flex items-center gap-1",
                    children: n.map((s) =>
                      (0, t.jsx)(
                        a.default,
                        {
                          href: s.href,
                          className: `px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                            e === s.href ||
                            ("/trade" === s.href && e?.startsWith("/trade"))
                              ? "text-white border-b-2 border-[#DC2626]"
                              : "text-white/40 hover:text-white/70"
                          }`,
                          children: s.label,
                        },
                        s.href
                      )
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-2 sm:gap-3",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center gap-1.5 text-[10px] text-white/25 mr-1",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-green-500",
                      }),
                      (0, t.jsx)("span", {
                        className: "hidden sm:inline",
                        children: "USDC",
                      }),
                    ],
                  }),
                  (0, t.jsx)(i, { compact: !0 }),
                  (0, t.jsx)("button", {
                    onClick: () => h(!d),
                    className:
                      "md:hidden w-7 h-7 flex items-center justify-center rounded bg-white/[0.06] text-white/60",
                    "aria-label": "Toggle menu",
                    children: d
                      ? (0, t.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        })
                      : (0, t.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          children: (0, t.jsx)("path", {
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
            (0, t.jsx)("div", {
              className: "md:hidden border-t border-white/[0.06] bg-[#030108]",
              children: (0, t.jsx)("nav", {
                className: "flex flex-col px-3 py-2 gap-0.5",
                children: n.map((s) =>
                  (0, t.jsx)(
                    a.default,
                    {
                      href: s.href,
                      onClick: () => h(!1),
                      className: `px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                        e === s.href ||
                        ("/trade" === s.href && e?.startsWith("/trade"))
                          ? "text-white bg-white/[0.06]"
                          : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                      }`,
                      children: s.label,
                    },
                    s.href
                  )
                ),
              }),
            }),
        ],
      });
    }
    e.s(["default", () => d]);
  },
  260509,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(522016),
      r = e.i(470661);
    function a() {
      return (0, t.jsxs)("div", {
        className: "min-h-screen bg-[#030108] flex flex-col",
        children: [
          (0, t.jsx)(r.default, {}),
          (0, t.jsxs)("div", {
            className:
              "flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 max-w-2xl mx-auto w-full text-center",
            children: [
              (0, t.jsx)("div", {
                className:
                  "w-20 h-20 rounded-2xl bg-[#DC2626]/10 border border-[#DC2626]/15 flex items-center justify-center mb-6",
                children: (0, t.jsx)("svg", {
                  className: "w-10 h-10 text-[#DC2626]/60",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  children: (0, t.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
                  }),
                }),
              }),
              (0, t.jsx)("h1", {
                className: "text-3xl font-bold text-white mb-3",
                children: "Earn",
              }),
              (0, t.jsx)("p", {
                className:
                  "text-white/35 text-base leading-relaxed mb-8 max-w-md",
                children:
                  "Earn features are coming soon. We're building ways for you to earn yield by providing liquidity and participating in the HyperClaw ecosystem.",
              }),
              (0, t.jsxs)("div", {
                className: "w-full max-w-md glass-card rounded-2xl p-6 mb-8",
                children: [
                  (0, t.jsx)("p", {
                    className:
                      "text-[10px] uppercase tracking-wider text-white/25 font-medium mb-4",
                    children: "Coming soon",
                  }),
                  (0, t.jsx)("div", {
                    className: "space-y-3",
                    children: [
                      {
                        label: "Liquidity Provision",
                        desc: "Provide USDC to the trading pool and earn fees",
                      },
                      {
                        label: "Fee Revenue Share",
                        desc: "Earn a share of platform trading fees",
                      },
                      {
                        label: "Agent Fee Splits",
                        desc: "Earn when agents you build generate trading volume",
                      },
                    ].map((e) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "flex items-start gap-3 text-left",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "w-1.5 h-1.5 rounded-full bg-[#DC2626]/40 mt-1.5 shrink-0",
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("p", {
                                  className:
                                    "text-white/70 text-sm font-medium",
                                  children: e.label,
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/25 text-xs",
                                  children: e.desc,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.label
                      )
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-4 flex-wrap",
                children: [
                  (0, t.jsx)(s.default, {
                    href: "/trade",
                    className:
                      "inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold px-8 py-3 rounded-full text-sm transition-all hover:shadow-[0_0_24px_rgba(220,38,38,0.3)]",
                    children: "Trade Now",
                  }),
                  (0, t.jsx)(s.default, {
                    href: "/developers",
                    className:
                      "inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white/70 hover:text-white font-medium px-8 py-3 rounded-full text-sm transition-all",
                    children: "Build an Agent",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    e.s(["default", () => a]);
  },
  580648,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/9874b68edb2c68cd.js"].map((t) => e.l(t))
      ).then(() => t(644028))
    );
  },
]);
