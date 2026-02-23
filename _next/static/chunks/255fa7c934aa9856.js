(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  845678,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(271645),
      a = e.i(657688),
      l = e.i(522016);
    let r = (0, e.i(770703).default)(() => e.A(580648), {
      loadableGenerated: { modules: [644028] },
      ssr: !1,
    });
    function i() {
      let [e, i] = (0, t.useState)(!1);
      return (0, s.jsxs)("header", {
        className:
          "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030108]/60 border-b border-white/[0.06]",
        children: [
          (0, s.jsxs)("div", {
            className:
              "w-full px-4 sm:px-10 lg:px-16 py-2 sm:py-3 flex items-center justify-between",
            children: [
              (0, s.jsx)(l.default, {
                href: "/",
                className: "shrink-0",
                children: (0, s.jsx)(a.default, {
                  src: "/hyperclaw_lockup_transparent.png",
                  alt: "HyperClaw",
                  width: 500,
                  height: 120,
                  className: "h-10 sm:h-[72px] w-auto",
                  priority: !0,
                }),
              }),
              (0, s.jsxs)("nav", {
                className:
                  "hidden md:flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.07] rounded-full px-1.5 py-1",
                children: [
                  (0, s.jsx)(l.default, {
                    href: "/trade",
                    className:
                      "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium",
                    children: "Trade",
                  }),
                  (0, s.jsx)(l.default, {
                    href: "/portfolio",
                    className:
                      "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium",
                    children: "Portfolio",
                  }),
                  (0, s.jsx)(l.default, {
                    href: "/leaderboard",
                    className:
                      "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium",
                    children: "Leaderboard",
                  }),
                  (0, s.jsxs)(l.default, {
                    href: "/developers",
                    className:
                      "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium flex items-center gap-1.5",
                    children: [
                      (0, s.jsx)("svg", {
                        className: "w-3.5 h-3.5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        children: (0, s.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                        }),
                      }),
                      "Developers",
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, s.jsx)("div", {
                    className: "hidden md:block",
                    children: (0, s.jsx)(r, {}),
                  }),
                  (0, s.jsx)("button", {
                    onClick: () => i(!e),
                    className:
                      "md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/60",
                    "aria-label": "Toggle menu",
                    children: e
                      ? (0, s.jsx)("svg", {
                          className: "w-5 h-5",
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
                          className: "w-5 h-5",
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
          e &&
            (0, s.jsx)("div", {
              className:
                "md:hidden border-t border-white/[0.06] bg-[#030108]/95 backdrop-blur-xl",
              children: (0, s.jsxs)("nav", {
                className: "flex flex-col px-4 py-3 gap-1",
                children: [
                  [
                    { href: "/trade", label: "Trade" },
                    { href: "/portfolio", label: "Portfolio" },
                    { href: "/leaderboard", label: "Leaderboard" },
                    { href: "/developers", label: "Developers" },
                  ].map((e) =>
                    (0, s.jsx)(
                      l.default,
                      {
                        href: e.href,
                        onClick: () => i(!1),
                        className:
                          "px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/[0.06] transition-all font-medium",
                        children: e.label,
                      },
                      e.href
                    )
                  ),
                  (0, s.jsx)("div", {
                    className: "pt-2 pb-1 px-2",
                    children: (0, s.jsx)(r, {}),
                  }),
                ],
              }),
            }),
        ],
      });
    }
    e.s(["default", () => i]);
  },
  517706,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(522016);
    function a() {
      return (0, s.jsxs)("section", {
        className: "relative overflow-hidden",
        children: [
          (0, s.jsxs)("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15)_0%,_transparent_55%)]",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-20 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(80,20,120,0.08)_0%,_transparent_60%)]",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute bottom-0 left-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(120,10,30,0.06)_0%,_transparent_60%)]",
              }),
            ],
          }),
          (0, s.jsx)("div", {
            className:
              "relative z-10 w-full px-4 sm:px-12 lg:px-20 pt-24 sm:pt-48 pb-8 sm:pb-16",
            children: (0, s.jsxs)("div", {
              className: "max-w-6xl mx-auto text-center",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "animate-fade-in-up inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-5 sm:mb-8",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "w-2 h-2 rounded-full bg-[#DC2626] animate-glow-pulse",
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "text-[11px] sm:text-xs text-white/60 font-medium",
                      children: "Perpetuals DEX — Omnichain",
                    }),
                  ],
                }),
                (0, s.jsxs)("h1", {
                  className:
                    "animate-fade-in-up text-[clamp(2.2rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-gradient-white",
                      children: "Perpetual Trading for",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("span", {
                      className: "text-gradient-red italic",
                      children: "Agents & Humans.",
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className:
                    "animate-fade-in-up text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-10",
                  style: { animationDelay: "0.08s" },
                  children:
                    "Trade crypto perpetuals with up to 100x leverage. Build OpenClaw agents that trade autonomously using our ClawHub skill. Self-custody. Sub-second fills. Open infrastructure.",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "animate-fade-in-up flex items-center justify-center gap-3 sm:gap-4 flex-wrap",
                  style: { animationDelay: "0.15s" },
                  children: [
                    (0, s.jsxs)(t.default, {
                      href: "/trade",
                      className:
                        "group inline-flex items-center gap-2 sm:gap-2.5 bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)] hover:scale-[1.02]",
                      children: [
                        (0, s.jsx)("span", { children: "Start Trading" }),
                        (0, s.jsx)("svg", {
                          className:
                            "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.default, {
                      href: "/developers",
                      className:
                        "inline-flex items-center gap-2 sm:gap-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white/80 hover:text-white font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm transition-all duration-200",
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
                            d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                          }),
                        }),
                        (0, s.jsx)("span", { children: "Build with ClawHub" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, s.jsx)("div", {
            className:
              "relative z-10 w-full px-3 sm:px-12 lg:px-20 pb-6 sm:pb-8",
            children: (0, s.jsx)("div", {
              className: "max-w-6xl mx-auto",
              children: (0, s.jsxs)("div", {
                className:
                  "animate-fade-in-up relative rounded-xl sm:rounded-2xl border border-white/[0.08] overflow-hidden shadow-[0_0_60px_rgba(220,38,38,0.06)]",
                style: { animationDelay: "0.22s" },
                children: [
                  (0, s.jsxs)("div", {
                    className: "relative bg-[#08040e]/95 backdrop-blur-sm",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center gap-1.5 sm:gap-3 px-2.5 sm:px-5 py-2 sm:py-2.5 border-b border-white/[0.06]",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white font-semibold text-xs",
                            children: "BTC / USDC",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-green-400 font-mono text-sm font-bold",
                            children: "$67,482.50",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-green-400/70 text-[10px] font-mono",
                            children: "+2.34%",
                          }),
                          (0, s.jsx)("div", { className: "flex-1" }),
                          (0, s.jsxs)("div", {
                            className:
                              "hidden sm:flex gap-4 text-[9px] text-white/40",
                            children: [
                              (0, s.jsxs)("span", {
                                children: [
                                  "High ",
                                  (0, s.jsx)("span", {
                                    className: "text-white/60 font-mono",
                                    children: "$68,700",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  "Low ",
                                  (0, s.jsx)("span", {
                                    className: "text-white/60 font-mono",
                                    children: "$65,752",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  "Vol ",
                                  (0, s.jsx)("span", {
                                    className: "text-white/60 font-mono",
                                    children: "$13.4M",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-12 min-h-[200px] sm:min-h-[320px]",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "sm:col-span-8 border-b sm:border-b-0 sm:border-r border-white/[0.05] p-3 sm:p-4 flex flex-col",
                            children: [
                              (0, s.jsx)("div", {
                                className: "flex gap-1.5 mb-3",
                                children: [
                                  "1m",
                                  "5m",
                                  "15m",
                                  "1H",
                                  "4H",
                                  "1D",
                                ].map((e, t) =>
                                  (0, s.jsx)(
                                    "span",
                                    {
                                      className: `text-[9px] px-2 py-0.5 rounded ${
                                        3 === t
                                          ? "bg-white/[0.08] text-white/60"
                                          : "text-white/30"
                                      }`,
                                      children: e,
                                    },
                                    e
                                  )
                                ),
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex-1 relative",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "absolute inset-0 flex flex-col justify-between pointer-events-none",
                                    children: [0, 1, 2, 3, 4].map((e) =>
                                      (0, s.jsx)(
                                        "div",
                                        {
                                          className:
                                            "border-b border-white/[0.03] relative",
                                          children: (0, s.jsx)("span", {
                                            className:
                                              "absolute right-1 -top-2.5 text-[7px] text-white/15 font-mono",
                                            children: (
                                              68800 -
                                              350 * e
                                            ).toLocaleString(),
                                          }),
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                  (0, s.jsxs)("svg", {
                                    viewBox: "0 0 600 200",
                                    className: "w-full h-full",
                                    preserveAspectRatio: "none",
                                    children: [
                                      [
                                        [12, 130, 115, 108, 138],
                                        [24, 115, 125, 107, 132],
                                        [36, 125, 118, 110, 133],
                                        [48, 118, 105, 98, 126],
                                        [60, 105, 112, 96, 120],
                                        [72, 112, 108, 100, 122],
                                        [84, 108, 95, 88, 116],
                                        [96, 95, 102, 85, 110],
                                        [108, 102, 88, 82, 112],
                                        [120, 88, 96, 78, 104],
                                        [132, 96, 108, 90, 115],
                                        [144, 108, 118, 100, 125],
                                        [156, 118, 130, 112, 138],
                                        [168, 130, 125, 118, 140],
                                        [180, 125, 135, 118, 142],
                                        [192, 135, 128, 120, 145],
                                        [204, 128, 140, 122, 148],
                                        [216, 140, 150, 132, 158],
                                        [228, 150, 142, 135, 160],
                                        [240, 142, 132, 125, 150],
                                        [252, 132, 140, 126, 148],
                                        [264, 140, 148, 132, 156],
                                        [276, 148, 138, 130, 158],
                                        [288, 138, 130, 122, 146],
                                        [300, 130, 122, 115, 138],
                                        [312, 122, 135, 118, 142],
                                        [324, 135, 142, 128, 150],
                                        [336, 142, 155, 135, 162],
                                        [348, 155, 148, 140, 165],
                                        [360, 148, 138, 130, 156],
                                        [372, 138, 128, 120, 146],
                                        [384, 128, 118, 110, 136],
                                        [396, 118, 130, 112, 138],
                                        [408, 130, 142, 124, 150],
                                        [420, 142, 135, 128, 150],
                                        [432, 135, 148, 128, 156],
                                        [444, 148, 155, 140, 165],
                                        [456, 155, 145, 138, 168],
                                        [468, 145, 138, 130, 152],
                                        [480, 138, 125, 118, 146],
                                        [492, 125, 115, 108, 134],
                                        [504, 115, 128, 108, 136],
                                        [516, 128, 140, 122, 148],
                                        [528, 140, 132, 125, 150],
                                        [540, 132, 120, 112, 140],
                                        [552, 120, 110, 102, 128],
                                        [564, 110, 98, 90, 118],
                                        [576, 98, 108, 88, 116],
                                      ].map(([e, t, a, l, r], i) => {
                                        let n = a < t,
                                          d = Math.min(t, a),
                                          x = Math.max(Math.abs(t - a), 1.5),
                                          c = n ? "#22C55E" : "#EF4444";
                                        return (0, s.jsxs)(
                                          "g",
                                          {
                                            children: [
                                              (0, s.jsx)("line", {
                                                x1: e,
                                                y1: l,
                                                x2: e,
                                                y2: r,
                                                stroke: c,
                                                strokeWidth: "0.8",
                                                opacity: "0.7",
                                              }),
                                              (0, s.jsx)("rect", {
                                                x: e - 3.5,
                                                y: d,
                                                width: "7",
                                                height: x,
                                                fill: c,
                                                rx: "0.5",
                                                opacity: "0.85",
                                              }),
                                              (0, s.jsx)("rect", {
                                                x: e - 3,
                                                y: 195 - (1.2 * x + 2),
                                                width: "6",
                                                height: 1.2 * x + 2,
                                                fill: n
                                                  ? "rgba(34,197,94,0.25)"
                                                  : "rgba(239,68,68,0.25)",
                                                rx: "0.5",
                                              }),
                                            ],
                                          },
                                          i
                                        );
                                      }),
                                      (0, s.jsx)("polyline", {
                                        points:
                                          "12,122 48,112 96,100 144,114 192,132 240,138 288,132 336,148 384,124 432,140 480,130 528,134 576,104",
                                        fill: "none",
                                        stroke: "rgba(220,38,38,0.4)",
                                        strokeWidth: "1.2",
                                        strokeLinejoin: "round",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "hidden sm:grid sm:col-span-4 grid-rows-2",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "border-b border-white/[0.05] p-3 space-y-[3px] overflow-hidden",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-[8px] text-white/40 uppercase tracking-wider mb-1.5",
                                    children: "Orderbook",
                                  }),
                                  [88, 70, 52, 38, 22].map((e, t) =>
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "h-3 rounded-[1px] bg-red-500/20",
                                            style: { width: `${e}%` },
                                          }),
                                          (0, s.jsx)("span", {
                                            className:
                                              "text-[8px] text-red-400/60 font-mono",
                                            children: (
                                              67500 +
                                              12 * t
                                            ).toLocaleString(),
                                          }),
                                        ],
                                      },
                                      `a-${t}`
                                    )
                                  ),
                                  (0, s.jsx)("div", {
                                    className: "text-center py-1",
                                    children: (0, s.jsx)("span", {
                                      className:
                                        "text-xs font-bold font-mono text-white",
                                      children: "$67,482",
                                    }),
                                  }),
                                  [18, 35, 50, 65, 80].map((e, t) =>
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "h-3 rounded-[1px] bg-green-500/20",
                                            style: { width: `${e}%` },
                                          }),
                                          (0, s.jsx)("span", {
                                            className:
                                              "text-[8px] text-green-400/60 font-mono",
                                            children: (
                                              67470 -
                                              8 * t
                                            ).toLocaleString(),
                                          }),
                                        ],
                                      },
                                      `b-${t}`
                                    )
                                  ),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "p-3 space-y-2",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "grid grid-cols-2 gap-0.5 bg-white/[0.03] rounded p-0.5",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "bg-green-500 rounded text-[9px] text-white text-center py-1.5 font-semibold",
                                        children: "Long",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "text-[9px] text-white/30 text-center py-1.5",
                                        children: "Short",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "bg-white/[0.04] rounded px-2.5 py-1.5 text-[9px] text-white/50 font-mono",
                                    children: "67,482.00",
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "bg-white/[0.04] rounded px-2.5 py-1.5 text-[9px] text-white/50 font-mono",
                                    children: "0.15 BTC",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex gap-1",
                                    children: [5, 10, 20, 50].map((e) =>
                                      (0, s.jsxs)(
                                        "span",
                                        {
                                          className: `flex-1 text-center text-[8px] py-1 rounded ${
                                            10 === e
                                              ? "bg-red-500/15 text-red-400/70 border border-red-500/25"
                                              : "bg-white/[0.04] text-white/30"
                                          }`,
                                          children: [e, "x"],
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "bg-green-500/80 rounded text-[9px] text-white text-center py-2 font-semibold",
                                    children: "Long BTC",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "border-t border-white/[0.06] px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-6 text-[10px] overflow-x-auto scrollbar-hide",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/40 shrink-0",
                            children: "Positions",
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/60 shrink-0",
                            children: "BTC/USDC",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-green-400/70 text-[9px] font-semibold px-1.5 py-0.5 bg-green-500/10 rounded shrink-0",
                            children: "LONG",
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/40 font-mono shrink-0",
                            children: "0.15 BTC",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-white/40 font-mono shrink-0 hidden xs:inline",
                            children: "Entry $65,200",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-green-400 font-mono font-semibold shrink-0",
                            children: "+$342.38",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-green-400/60 font-mono shrink-0 hidden xs:inline",
                            children: "+3.51%",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030108] to-transparent pointer-events-none",
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    e.s(["default", () => a]);
  },
  822172,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(271645);
    function a({ label: e, category: t, change: a }) {
      let l = a.startsWith("+");
      return (0, s.jsxs)("div", {
        className:
          "flex items-center gap-2.5 sm:gap-4 px-3 sm:px-6 py-2.5 sm:py-3 shrink-0",
        children: [
          (0, s.jsx)("div", {
            className:
              "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center",
            children: (0, s.jsx)("span", {
              className: "text-[9px] sm:text-[10px] font-bold text-white/40",
              children: e.slice(0, 2),
            }),
          }),
          (0, s.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, s.jsxs)("span", {
                className: "text-xs sm:text-sm font-medium text-white/80",
                children: [e, "-USDC"],
              }),
              (0, s.jsx)("span", {
                className: "text-[9px] sm:text-[10px] text-white/25",
                children: t,
              }),
            ],
          }),
          (0, s.jsx)("span", {
            className: `text-xs sm:text-sm font-mono font-medium ${
              l ? "text-green-400/80" : "text-red-400/80"
            }`,
            children: a,
          }),
        ],
      });
    }
    function l() {
      let [e, l] = (0, t.useState)([]);
      if (
        ((0, t.useEffect)(() => {
          fetch("https://api-evm.orderly.org/v1/public/futures")
            .then((e) => e.json())
            .then((e) => {
              e.data?.rows &&
                l(
                  e.data.rows
                    .filter((e) => e.symbol.startsWith("PERP_"))
                    .map((e) => {
                      let s,
                        t,
                        a = Number(e.change);
                      if (isNaN(a)) {
                        let s = Number(e["24h_open"]) || 0,
                          t = Number(e["24h_close"] ?? e.mark_price) || 0;
                        a = s > 0 ? (t - s) / s : 0;
                      }
                      return {
                        symbol: e.symbol,
                        label:
                          "1000SHIB" ===
                          (s = e.symbol
                            .replace("PERP_", "")
                            .replace("_USDC", ""))
                            ? "SHIB"
                            : "1000BONK" === s
                            ? "BONK"
                            : "US500" === s
                            ? "S&P 500"
                            : "USTECH100" === s
                            ? "NASDAQ"
                            : s,
                        category: [
                          "TSLA",
                          "NVDA",
                          "GOOGL",
                          "AAPL",
                          "AMZN",
                          "MSFT",
                          "META",
                          "COIN",
                          "MSTR",
                        ].includes(
                          (t = e.symbol
                            .replace("PERP_", "")
                            .replace("_USDC", ""))
                        )
                          ? "Stock"
                          : [
                              "US500",
                              "USTECH100",
                              "US2000",
                              "UK100",
                              "EU50",
                            ].includes(t)
                          ? "Index"
                          : [
                              "DOGE",
                              "1000SHIB",
                              "PEPE",
                              "WIF",
                              "BONK",
                              "FLOKI",
                              "1000BONK",
                              "BRETT",
                              "POPCAT",
                              "MOG",
                              "NEIRO",
                            ].includes(t)
                          ? "Meme"
                          : [
                              "LINK",
                              "HBAR",
                              "ONDO",
                              "ORDER",
                              "UNI",
                              "AAVE",
                              "ARB",
                              "OP",
                            ].includes(t)
                          ? "DeFi"
                          : "Crypto",
                        change: isNaN(a)
                          ? "—"
                          : a >= 0
                          ? `+${(100 * a).toFixed(2)}%`
                          : `${(100 * a).toFixed(2)}%`,
                      };
                    })
                );
            })
            .catch(() => {
              l([
                {
                  symbol: "PERP_BTC_USDC",
                  label: "BTC",
                  category: "Crypto",
                  change: "—",
                },
                {
                  symbol: "PERP_ETH_USDC",
                  label: "ETH",
                  category: "Crypto",
                  change: "—",
                },
                {
                  symbol: "PERP_SOL_USDC",
                  label: "SOL",
                  category: "Crypto",
                  change: "—",
                },
              ]);
            });
        }, []),
        0 === e.length)
      )
        return (0, s.jsx)("div", {
          className:
            "relative border-y border-white/[0.04] overflow-hidden bg-white/[0.01] py-4",
          children: (0, s.jsx)("div", {
            className: "flex items-center justify-center",
            children: (0, s.jsx)("span", {
              className: "text-xs text-white/20",
              children: "Loading markets...",
            }),
          }),
        });
      let r = [...e, ...e];
      return (0, s.jsxs)("div", {
        className:
          "relative border-y border-white/[0.04] overflow-hidden bg-white/[0.01]",
        children: [
          (0, s.jsx)("div", {
            className:
              "absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#030108] to-transparent z-10 pointer-events-none",
          }),
          (0, s.jsx)("div", {
            className:
              "absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#030108] to-transparent z-10 pointer-events-none",
          }),
          (0, s.jsx)("div", {
            className: "animate-ticker ticker-track flex",
            children: r.map((e, t) =>
              (0, s.jsx)(
                a,
                { label: e.label, category: e.category, change: e.change },
                `${e.symbol}-${t}`
              )
            ),
          }),
        ],
      });
    }
    e.s(["default", () => l]);
  },
  954178,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(522016);
    let a = [
      {
        num: "01",
        title: "Add the Skill",
        description:
          "Install the HyperClaw ClawHub skill on your OpenClaw agent. One line to add perp trading capabilities.",
        icon: (0, s.jsx)("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
          }),
        }),
      },
      {
        num: "02",
        title: "Agent Creates Wallet",
        description:
          "Your agent generates a wallet, registers on HyperClaw, and sets up trading keys automatically.",
        icon: (0, s.jsx)("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3",
          }),
        }),
      },
      {
        num: "03",
        title: "Fund & Trade",
        description:
          "Send USDC to the wallet. The agent trades perps via our REST API using whatever strategy you build.",
        icon: (0, s.jsx)("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
          }),
        }),
      },
      {
        num: "04",
        title: "Withdraw Anytime",
        description:
          "Users keep full custody. Withdraw funds instantly. Your keys, your funds, always.",
        icon: (0, s.jsx)("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          }),
        }),
      },
    ];
    function l() {
      return (0, s.jsxs)("section", {
        className: "relative py-16 sm:py-32 overflow-hidden",
        children: [
          (0, s.jsx)("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.08)_0%,_transparent_50%)] pointer-events-none",
          }),
          (0, s.jsx)("div", {
            className: "relative w-full px-4 sm:px-8 lg:px-20",
            children: (0, s.jsxs)("div", {
              className: "max-w-6xl mx-auto",
              children: [
                (0, s.jsxs)("div", {
                  className: "text-center mb-10 sm:mb-20",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-full px-3.5 sm:px-4 py-1.5 mb-4 sm:mb-6",
                      children: [
                        (0, s.jsx)("svg", {
                          className: "w-3.5 h-3.5 text-[#DC2626]",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 1.5,
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                          }),
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "text-[11px] sm:text-xs text-[#DC2626] font-medium",
                          children: "Open Trading Infrastructure",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("h2", {
                      className:
                        "text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] mb-4 sm:mb-5",
                      children: [
                        (0, s.jsx)("span", {
                          className: "text-gradient-white",
                          children: "Built for Agents",
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("span", {
                          className: "text-gradient-red",
                          children: "and Humans.",
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-white/45 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed",
                      children:
                        "HyperClaw is an open perp DEX. Trade manually, or build OpenClaw agents that trade autonomously using our ClawHub skill. Anyone can build. Everyone earns.",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-10 sm:mb-20",
                  children: a.map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 group hover:border-[#DC2626]/20 transition-all duration-300",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center text-[#DC2626] group-hover:bg-[#DC2626]/20 transition-colors [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6",
                                children: e.icon,
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "text-[#DC2626] font-mono text-[10px] sm:text-xs font-bold",
                                children: e.num,
                              }),
                            ],
                          }),
                          (0, s.jsx)("h4", {
                            className:
                              "text-white font-semibold text-sm sm:text-base mb-1.5 sm:mb-2",
                            children: e.title,
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-white/40 text-xs sm:text-sm leading-relaxed",
                            children: e.description,
                          }),
                        ],
                      },
                      e.num
                    )
                  ),
                }),
                (0, s.jsx)("div", {
                  className: "glass-card rounded-2xl overflow-hidden",
                  children: (0, s.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "p-5 sm:p-10 lg:p-12 flex flex-col justify-center",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-[10px] uppercase tracking-[0.3em] text-[#DC2626]/60 font-medium mb-3",
                            children: "CLAWHUB SKILL",
                          }),
                          (0, s.jsx)("h3", {
                            className:
                              "text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight",
                            children: "One skill. Full exchange access.",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-white/40 text-[15px] leading-relaxed mb-6",
                            children:
                              "The HyperClaw ClawHub skill gives any OpenClaw agent the ability to create wallets, deposit funds, trade 50+ perpetual pairs, and manage positions — all through our REST API.",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center gap-3 sm:gap-4 flex-wrap",
                            children: [
                              (0, s.jsxs)(t.default, {
                                href: "/developers",
                                className:
                                  "inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#EF4444] text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm transition-all hover:shadow-[0_0_24px_rgba(220,38,38,0.3)]",
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
                                      d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                                    }),
                                  }),
                                  "Integration Guide",
                                ],
                              }),
                              (0, s.jsx)(t.default, {
                                href: "/api/skill",
                                className:
                                  "text-white/40 hover:text-white/70 text-sm font-medium transition-all",
                                children: "Get Skill JSON →",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "p-4 sm:p-6 lg:p-8 bg-black/30 sm:border-l border-t sm:border-t-0 border-white/[0.04]",
                        children: (0, s.jsxs)("div", {
                          className:
                            "bg-black/40 rounded-xl border border-white/[0.06] p-3 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto",
                          children: [
                            (0, s.jsx)("div", {
                              className: "text-white/25 mb-3",
                              children:
                                "// OpenClaw agent with HyperClaw skill",
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "import",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-white/60",
                                  children: "{ HyperClawSkill }",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "from",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-green-400/70",
                                  children: '"clawhub/hyperclaw"',
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "mt-3 text-white/25",
                              children: "// Agent creates wallet + registers",
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "const",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-white/70",
                                  children: "wallet",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "=",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "await",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-white/70",
                                  children: "skill.createWallet",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: "()",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "await",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-white/70",
                                  children: "skill.register",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: "(",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/60",
                                  children: "wallet",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: ")",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "mt-3 text-white/25",
                              children: "// Fund and start trading",
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "await",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-white/70",
                                  children: "skill.deposit",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: "(",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "1000",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: ",",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-green-400/70",
                                  children: '"USDC"',
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: ")",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "mt-3 text-white/25",
                              children: "// Place a trade",
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "await",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-white/70",
                                  children: "skill.order",
                                }),
                                (0, s.jsxs)("span", {
                                  className: "text-white/30",
                                  children: ["(", "{"],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "pl-4",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-white/50",
                                  children: "symbol:",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-green-400/70",
                                  children: '"PERP_BTC_USDC"',
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: ",",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "pl-4",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-white/50",
                                  children: "side:",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-green-400/70",
                                  children: '"BUY"',
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: ",",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "pl-4",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-white/50",
                                  children: "type:",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-green-400/70",
                                  children: '"MARKET"',
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-white/30",
                                  children: ",",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "pl-4",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-white/50",
                                  children: "quantity:",
                                }),
                                " ",
                                (0, s.jsx)("span", {
                                  className: "text-[#DC2626]",
                                  children: "0.1",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              children: (0, s.jsxs)("span", {
                                className: "text-white/30",
                                children: ["}", ")"],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["default", () => l]);
  },
  570030,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(271645),
      a = e.i(522016);
    function l(e) {
      let s = e.replace("PERP_", "").replace("_USDC", "");
      return [
        "TSLA",
        "NVDA",
        "GOOGL",
        "AAPL",
        "AMZN",
        "MSFT",
        "META",
        "COIN",
        "MSTR",
      ].includes(s)
        ? "stocks"
        : ["US500", "USTECH100", "US2000", "UK100", "EU50"].includes(s)
        ? "indices"
        : [
            "DOGE",
            "1000SHIB",
            "PEPE",
            "WIF",
            "BONK",
            "FLOKI",
            "1000BONK",
          ].includes(s)
        ? "meme"
        : [
            "LINK",
            "HBAR",
            "ONDO",
            "ORDER",
            "UNI",
            "AAVE",
            "ARB",
            "OP",
          ].includes(s)
        ? "defi"
        : "crypto";
    }
    let r = [
      {
        id: "crypto",
        label: "Crypto",
        description:
          "BTC, ETH, SOL and more crypto perpetuals. Deep liquidity, tight spreads, up to 100x leverage.",
      },
      {
        id: "defi",
        label: "DeFi",
        description:
          "Trade LINK, HBAR, ONDO and the full DeFi ecosystem with leverage.",
      },
      {
        id: "meme",
        label: "Meme",
        description:
          "Degen responsibly. Long or short the hottest meme tokens — real orderbook liquidity.",
      },
      {
        id: "stocks",
        label: "Stocks",
        description:
          "Trade TSLA, NVDA, GOOGL perpetuals 24/7 — no stock exchange hours.",
      },
      {
        id: "indices",
        label: "Indices",
        description:
          "S&P 500, NASDAQ and more global indices as perpetual contracts.",
      },
    ];
    function i() {
      let [e, i] = (0, t.useState)("crypto"),
        [n, d] = (0, t.useState)([]),
        [x, c] = (0, t.useState)(!0);
      (0, t.useEffect)(() => {
        fetch("/api/markets")
          .then((e) => e.json())
          .then((e) => {
            e.markets &&
              d(
                e.markets.map((e) => {
                  let s;
                  return {
                    symbol: e.symbol,
                    label:
                      "1000SHIB" ===
                      (s = e.symbol.replace("PERP_", "").replace("_USDC", ""))
                        ? "SHIB"
                        : "1000BONK" === s
                        ? "BONK"
                        : "US500" === s
                        ? "S&P 500"
                        : "USTECH100" === s
                        ? "NASDAQ"
                        : s,
                    max_leverage: e.max_leverage,
                  };
                })
              );
          })
          .catch(console.error)
          .finally(() => c(!1));
      }, []);
      let o = r.find((s) => s.id === e),
        m = n.filter((s) => l(s.symbol) === e);
      return (0, s.jsx)("section", {
        className: "relative py-16 sm:py-32 overflow-hidden section-glow",
        children: (0, s.jsx)("div", {
          className: "w-full px-4 sm:px-8 lg:px-20",
          children: (0, s.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, s.jsxs)("div", {
                className: "text-center mb-10 sm:mb-16",
                children: [
                  (0, s.jsx)("h3", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4",
                    children: (0, s.jsx)("span", {
                      className: "text-gradient-white",
                      children: "Every Market. One Exchange.",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "text-white/30 text-base max-w-lg mx-auto",
                    children:
                      "Trade crypto, stocks, memes, and indices — all as perpetual contracts with up to 100x leverage. Full custody. One unified account.",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "relative",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute -inset-8 bg-[radial-gradient(ellipse_at_top,_rgba(180,20,20,0.06)_0%,_transparent_55%)]",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "relative glass-card rounded-2xl overflow-hidden",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "flex border-b border-white/[0.05] overflow-x-auto scrollbar-hide",
                        children: r.map((t) => {
                          let a = n.filter((e) => l(e.symbol) === t.id).length;
                          return (0, s.jsxs)(
                            "button",
                            {
                              onClick: () => i(t.id),
                              className: `shrink-0 flex-1 min-w-[80px] px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all duration-200 relative ${
                                e === t.id
                                  ? "text-white"
                                  : "text-white/25 hover:text-white/40"
                              }`,
                              children: [
                                t.label,
                                a > 0 &&
                                  (0, s.jsx)("span", {
                                    className:
                                      "ml-1 sm:ml-1.5 text-[10px] text-white/20",
                                    children: a,
                                  }),
                                e === t.id &&
                                  (0, s.jsx)("div", {
                                    className:
                                      "absolute bottom-0 left-0 right-0 h-[2px] bg-[#DC2626]",
                                  }),
                              ],
                            },
                            t.id
                          );
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "p-4 sm:p-8",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-white/35 text-sm leading-relaxed mb-6 sm:mb-8 max-w-lg",
                            children: o.description,
                          }),
                          (0, s.jsx)("div", {
                            className: "h-px bg-white/[0.04] mb-4 sm:mb-5",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "hidden sm:grid grid-cols-3 gap-4 text-[10px] text-white/20 uppercase tracking-wider mb-3 px-3",
                            children: [
                              (0, s.jsx)("span", { children: "Asset" }),
                              (0, s.jsx)("span", { children: "Max Leverage" }),
                              (0, s.jsx)("span", {}),
                            ],
                          }),
                          x
                            ? (0, s.jsx)("div", {
                                className:
                                  "py-8 text-center text-white/20 text-xs",
                                children: "Loading markets...",
                              })
                            : 0 === m.length
                            ? (0, s.jsx)("div", {
                                className:
                                  "py-8 text-center text-white/20 text-xs",
                                children: "No markets in this category yet",
                              })
                            : m.map((e) =>
                                (0, s.jsxs)(
                                  a.default,
                                  {
                                    href: "/trade",
                                    className:
                                      "flex items-center justify-between sm:grid sm:grid-cols-3 gap-3 sm:gap-4 py-3 sm:py-3.5 px-3 rounded-xl hover:bg-white/[0.02] transition-colors group",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0",
                                            children: (0, s.jsx)("span", {
                                              className:
                                                "text-[9px] font-bold text-white/30",
                                              children: e.label.slice(0, 2),
                                            }),
                                          }),
                                          (0, s.jsxs)("span", {
                                            className:
                                              "text-white font-medium text-sm",
                                            children: [e.label, "-USDC"],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("span", {
                                        className:
                                          "text-[#DC2626] font-mono text-sm font-medium flex items-center",
                                        children: [e.max_leverage, "x"],
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white/20 text-xs hidden sm:flex items-center justify-end group-hover:text-white/40 transition-colors",
                                        children: "Trade →",
                                      }),
                                    ],
                                  },
                                  e.symbol
                                )
                              ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    e.s(["default", () => i]);
  },
  892369,
  (e) => {
    "use strict";
    var s = e.i(843476);
    function t() {
      return (0, s.jsx)("section", {
        className: "relative py-16 sm:py-28 section-glow",
        children: (0, s.jsx)("div", {
          className: "w-full px-4 sm:px-8 lg:px-20",
          children: (0, s.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, s.jsxs)("div", {
                className: "text-center mb-6",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-[10px] uppercase tracking-[0.3em] text-[#DC2626]/60 font-medium mb-4",
                    children: "THE HYPERCLAW EDGE",
                  }),
                  (0, s.jsx)("h2", {
                    className: "text-3xl sm:text-4xl md:text-5xl font-bold",
                    children: (0, s.jsx)("span", {
                      className: "text-gradient-white",
                      children: "Infrastructure that scales.",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "mt-10 sm:mt-16 space-y-3 sm:space-y-4",
                children: [
                  (0, s.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "glass-card rounded-2xl overflow-hidden group",
                        children: (0, s.jsxs)("div", {
                          className:
                            "p-6 sm:p-10 flex flex-col justify-center h-full",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] text-[#DC2626]/50 font-medium mb-2",
                              children: "SELF-CUSTODY",
                            }),
                            (0, s.jsx)("h3", {
                              className:
                                "text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight",
                              children: "Your keys. Your trades.",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-white/40 leading-relaxed text-[15px] mb-6",
                              children:
                                "Trade from your wallet. Smart contract holds collateral — not us. Full transparency on-chain.",
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-4",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "text-center",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-3xl sm:text-5xl font-bold text-gradient-red font-mono",
                                      children: "0",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-white/25 text-[10px] mt-1 uppercase tracking-wider",
                                      children: "custody risk",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "h-10 sm:h-12 w-px bg-white/[0.08]",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "text-center",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-3xl sm:text-5xl font-bold text-gradient-white font-mono",
                                      children: "100%",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-white/25 text-[10px] mt-1 uppercase tracking-wider",
                                      children: "your control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "glass-card rounded-2xl overflow-hidden group",
                        children: (0, s.jsxs)("div", {
                          className:
                            "p-6 sm:p-10 flex flex-col justify-center h-full",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] text-[#DC2626]/50 font-medium mb-2",
                              children: "EXECUTION",
                            }),
                            (0, s.jsx)("h3", {
                              className:
                                "text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight",
                              children: "CEX speed. DEX guarantees.",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-white/40 leading-relaxed text-[15px] mb-6",
                              children:
                                "Off-chain matching, on-chain settlement. Sub-second fills with full transparency.",
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-4",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "text-center",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-3xl sm:text-5xl font-bold text-white font-mono",
                                      children: "<100",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-white/25 text-[10px] mt-1 uppercase tracking-wider",
                                      children: "ms fills",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "h-10 sm:h-12 w-px bg-white/[0.08]",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "text-center",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-3xl sm:text-5xl font-bold text-gradient-red font-mono",
                                      children: "100x",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-white/25 text-[10px] mt-1 uppercase tracking-wider",
                                      children: "max leverage",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "glass-card rounded-2xl overflow-hidden border-[#DC2626]/10 hover:border-[#DC2626]/20 transition-all duration-300",
                    children: (0, s.jsxs)("div", {
                      className: "grid grid-cols-1 lg:grid-cols-2",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "p-6 sm:p-10 lg:p-12 flex flex-col justify-center",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] text-[#DC2626]/60 font-medium mb-2",
                              children: "AGENT-READY",
                            }),
                            (0, s.jsx)("h3", {
                              className:
                                "text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight",
                              children: "Open platform. Build anything.",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-white/40 leading-relaxed text-[15px]",
                              children:
                                "HyperClaw is designed for programmatic trading. Build OpenClaw agents, trading bots, or custom strategies. Full REST API access with ed25519 authentication. Every trade routes through a shared orderbook for deep liquidity.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "flex items-center justify-center p-6 sm:p-10 bg-white/[0.01]",
                          children: (0, s.jsxs)("div", {
                            className:
                              "grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-white/[0.04] rounded-xl p-3 sm:p-4 text-center border border-white/[0.06]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-2xl sm:text-3xl font-bold text-white font-mono mb-1",
                                    children: "50+",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-white/30 text-[9px] uppercase tracking-wider",
                                    children: "trading pairs",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-white/[0.04] rounded-xl p-3 sm:p-4 text-center border border-white/[0.06]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-2xl sm:text-3xl font-bold text-[#DC2626] font-mono mb-1",
                                    children: "REST",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-white/30 text-[9px] uppercase tracking-wider",
                                    children: "full API",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-white/[0.04] rounded-xl p-3 sm:p-4 text-center border border-white/[0.06]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-2xl sm:text-3xl font-bold text-green-400 font-mono mb-1",
                                    children: "24/7",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-white/30 text-[9px] uppercase tracking-wider",
                                    children: "uptime",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-white/[0.04] rounded-xl p-3 sm:p-4 text-center border border-white/[0.06]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-2xl sm:text-3xl font-bold text-white font-mono mb-1",
                                    children: "Low",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-white/30 text-[9px] uppercase tracking-wider",
                                    children: "trading fees",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "glass-card rounded-2xl overflow-hidden group",
                        children: (0, s.jsxs)("div", {
                          className:
                            "p-6 sm:p-10 flex flex-col justify-center h-full",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] text-[#DC2626]/50 font-medium mb-2",
                              children: "LIQUIDITY",
                            }),
                            (0, s.jsx)("h3", {
                              className:
                                "text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight",
                              children: "Shared orderbook. Deep fills.",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-white/40 leading-relaxed text-[15px] mb-6",
                              children:
                                "Unified liquidity pool with professional market makers and tight spreads.",
                            }),
                            (0, s.jsxs)("div", {
                              className: "w-full space-y-1",
                              children: [
                                [85, 62, 40, 28, 15].map((e, t) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "h-4 rounded-sm bg-red-500/25",
                                          style: { width: `${e}%` },
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "text-[9px] text-white/30 font-mono",
                                          children: 67800 + 12 * t,
                                        }),
                                      ],
                                    },
                                    `a-${t}`
                                  )
                                ),
                                (0, s.jsx)("div", {
                                  className: "h-px bg-white/[0.06] my-1",
                                }),
                                [20, 35, 50, 65, 80].map((e, t) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "h-4 rounded-sm bg-green-500/25",
                                          style: { width: `${e}%` },
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "text-[9px] text-white/30 font-mono",
                                          children: 67750 - 8 * t,
                                        }),
                                      ],
                                    },
                                    `b-${t}`
                                  )
                                ),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "glass-card rounded-2xl overflow-hidden group",
                        children: (0, s.jsxs)("div", {
                          className:
                            "p-6 sm:p-10 flex flex-col justify-center h-full",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] text-[#DC2626]/50 font-medium mb-2",
                              children: "CROSS-CHAIN",
                            }),
                            (0, s.jsx)("h3", {
                              className:
                                "text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight",
                              children: "One account. Any chain.",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-white/40 leading-relaxed text-[15px] mb-6",
                              children:
                                "Deposit from Arbitrum, Optimism, Base, or Ethereum. No bridging needed.",
                            }),
                            (0, s.jsx)("div", {
                              className: "flex gap-2.5 sm:gap-3",
                              children: ["ARB", "OP", "BASE", "ETH"].map((e) =>
                                (0, s.jsx)(
                                  "div",
                                  {
                                    className:
                                      "w-13 h-13 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.12] transition-colors",
                                    children: (0, s.jsx)("span", {
                                      className:
                                        "text-[10px] text-white/50 font-semibold",
                                      children: e,
                                    }),
                                  },
                                  e
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    e.s(["default", () => t]);
  },
  759424,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(522016);
    function a() {
      return (0, s.jsx)("section", {
        className: "relative py-16 sm:py-32 overflow-hidden section-glow",
        children: (0, s.jsx)("div", {
          className: "w-full px-4 sm:px-8 lg:px-20",
          children: (0, s.jsxs)("div", {
            className:
              "max-w-6xl mx-auto relative glass-card rounded-2xl overflow-hidden",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06)_0%,_transparent_65%)]",
              }),
              (0, s.jsxs)("div", {
                className:
                  "relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 p-5 sm:p-14 lg:p-16",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("p", {
                        className:
                          "text-[10px] uppercase tracking-[0.3em] text-[#DC2626]/60 font-medium mb-4",
                        children: "FOR DEVELOPERS",
                      }),
                      (0, s.jsx)("h3", {
                        className:
                          "text-2xl sm:text-4xl font-bold mb-4 leading-tight",
                        children: (0, s.jsx)("span", {
                          className: "text-gradient-white",
                          children: "Full API access.",
                        }),
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-white/40 text-[15px] leading-relaxed mb-6 max-w-md",
                        children:
                          "Build trading bots, ClawHub skills, or custom UIs. The REST API gives you programmatic access to orders, positions, market data, and more. Trades route through HyperClaw's broker ID.",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-4 flex-wrap",
                        children: [
                          (0, s.jsxs)(t.default, {
                            href: "/developers",
                            className:
                              "inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#EF4444] text-white font-medium px-6 py-3 rounded-full text-sm transition-all hover:shadow-[0_0_24px_rgba(220,38,38,0.3)]",
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
                                  d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                                }),
                              }),
                              "Developer Portal",
                            ],
                          }),
                          (0, s.jsx)(t.default, {
                            href: "/api/skill",
                            className:
                              "text-white/50 hover:text-white text-sm font-medium transition-all",
                            children: "Get Skill JSON →",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "bg-black/40 rounded-xl border border-white/[0.06] p-4 sm:p-6 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto",
                    children: [
                      (0, s.jsx)("div", {
                        className: "text-white/25 mb-3",
                        children: "// HyperClaw REST API — place an order",
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-[#DC2626]",
                            children: "const",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-white/70",
                            children: "response",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-[#DC2626]",
                            children: "=",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-[#DC2626]",
                            children: "await",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-white/70",
                            children: "fetch",
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: "(",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-4",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-green-400/70",
                            children: '"https://api.hyperclaw.com/v1/order"',
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: ",",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "pl-4",
                        children: (0, s.jsx)("span", {
                          className: "text-white/30",
                          children: "{",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-8",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "method:",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-green-400/70",
                            children: '"POST"',
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: ",",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-8",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "headers:",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: "{ ",
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "...authHeaders",
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: " }",
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: ",",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-8",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "body:",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-white/70",
                            children: "JSON.stringify",
                          }),
                          (0, s.jsxs)("span", {
                            className: "text-white/30",
                            children: ["(", "{"],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-12",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "symbol:",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-green-400/70",
                            children: '"PERP_BTC_USDC"',
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: ",",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-12",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "order_type:",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-green-400/70",
                            children: '"MARKET"',
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: ",",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-12",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "side:",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-green-400/70",
                            children: '"BUY"',
                          }),
                          (0, s.jsx)("span", {
                            className: "text-white/30",
                            children: ",",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "pl-12",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-white/50",
                            children: "order_quantity:",
                          }),
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-[#DC2626]",
                            children: "0.1",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "pl-8",
                        children: (0, s.jsxs)("span", {
                          className: "text-white/30",
                          children: ["}", ")"],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "pl-4",
                        children: (0, s.jsx)("span", {
                          className: "text-white/30",
                          children: "}",
                        }),
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)("span", {
                          className: "text-white/30",
                          children: ")",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    e.s(["default", () => a]);
  },
  366490,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(522016);
    function a() {
      return (0, s.jsxs)("section", {
        className: "relative py-20 sm:py-32 overflow-hidden",
        children: [
          (0, s.jsx)("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1)_0%,_transparent_55%)]",
          }),
          (0, s.jsx)("div", {
            className: "relative w-full px-4 sm:px-8 lg:px-20 text-center",
            children: (0, s.jsxs)("div", {
              className: "max-w-3xl mx-auto",
              children: [
                (0, s.jsxs)("h2", {
                  className:
                    "text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] mb-4 sm:mb-6",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-gradient-white",
                      children: "Start Trading on",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("span", {
                      className: "text-gradient-red italic",
                      children: "HyperClaw.",
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className:
                    "text-white/45 text-base sm:text-lg max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed",
                  children:
                    "Connect your wallet or build an agent. No sign-ups. No KYC. Open infrastructure for everyone.",
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-center gap-4 flex-wrap",
                  children: [
                    (0, s.jsxs)(t.default, {
                      href: "/trade",
                      className:
                        "group inline-flex items-center gap-3 bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)] hover:scale-[1.02]",
                      children: [
                        (0, s.jsx)("span", { children: "Launch App" }),
                        (0, s.jsx)("svg", {
                          className:
                            "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.default, {
                      href: "/developers",
                      className:
                        "inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white/80 hover:text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-200",
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
                            d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                          }),
                        }),
                        (0, s.jsx)("span", { children: "Build an Agent" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["default", () => a]);
  },
  13642,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(657688),
      a = e.i(522016);
    function l() {
      return (0, s.jsx)("footer", {
        className: "border-t border-white/[0.06]",
        children: (0, s.jsx)("div", {
          className: "w-full px-4 sm:px-8 lg:px-20 py-10 sm:py-16",
          children: (0, s.jsxs)("div", {
            className:
              "max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12",
            children: [
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(t.default, {
                    src: "/hyperclaw_lockup_transparent.png",
                    alt: "HyperClaw",
                    width: 300,
                    height: 72,
                    className: "h-14 w-auto mb-4",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-xs text-white/30",
                    children: "© 2026 HC Systems LLC. All rights reserved.",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium mb-1",
                    children: "Product",
                  }),
                  (0, s.jsx)(a.default, {
                    href: "/trade",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "Trade",
                  }),
                  (0, s.jsx)(a.default, {
                    href: "/portfolio",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "Portfolio",
                  }),
                  (0, s.jsx)(a.default, {
                    href: "/earn",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "Earn",
                  }),
                  (0, s.jsx)(a.default, {
                    href: "/leaderboard",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "Leaderboard",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium mb-1",
                    children: "Developers",
                  }),
                  (0, s.jsx)(a.default, {
                    href: "/developers",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "Integration Guide",
                  }),
                  (0, s.jsx)(a.default, {
                    href: "/api/skill",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "ClawHub Skill",
                  }),
                  (0, s.jsx)(a.default, {
                    href: "/api/markets",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "API Reference",
                  }),
                  (0, s.jsx)("a", {
                    href: "https://github.com/hyperclaw",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-sm text-white/50 hover:text-white/80 transition-colors",
                    children: "GitHub",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium mb-3",
                    children: "Community",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-2.5 mb-5",
                    children: [
                      (0, s.jsx)("a", {
                        href: "https://x.com/tradehyperclaw",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/[0.08] transition-all",
                        children: (0, s.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, s.jsx)("path", {
                            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                          }),
                        }),
                      }),
                      (0, s.jsx)("a", {
                        href: "#",
                        className:
                          "w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/[0.08] transition-all",
                        children: (0, s.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, s.jsx)("path", {
                            d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z",
                          }),
                        }),
                      }),
                      (0, s.jsx)("a", {
                        href: "#",
                        className:
                          "w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/[0.08] transition-all",
                        children: (0, s.jsx)("svg", {
                          className: "w-4 h-4",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    e.s(["default", () => l]);
  },
]);
