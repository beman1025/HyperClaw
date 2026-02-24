(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  618566,
  (e, t, r) => {
    t.exports = e.r(976562);
  },
  470661,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      s = e.i(657688),
      a = e.i(522016),
      l = e.i(618566);
    let i = (0, e.i(770703).default)(() => e.A(580648), {
        loadableGenerated: { modules: [644028] },
        ssr: !1,
      }),
      n = [
        { href: "/portfolio", label: "Portfolio" },
        { href: "/leaderboard", label: "Leaderboard" },
        { href: "/developers", label: "Developers" },
      ];
    function d() {
      let e = (0, l.usePathname)(),
        [d, o] = (0, r.useState)(!1);
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
                      (0, t.jsx)(s.default, {
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
                    children: n.map((r) =>
                      (0, t.jsx)(
                        a.default,
                        {
                          href: r.href,
                          className: `px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                            e === r.href ||
                            ("/trade" === r.href && e?.startsWith("/trade"))
                              ? "text-white border-b-2 border-[#DC2626]"
                              : "text-white/40 hover:text-white/70"
                          }`,
                          children: r.label,
                        },
                        r.href
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
                    onClick: () => o(!d),
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
                children: n.map((r) =>
                  (0, t.jsx)(
                    a.default,
                    {
                      href: r.href,
                      onClick: () => o(!1),
                      className: `px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                        e === r.href ||
                        ("/trade" === r.href && e?.startsWith("/trade"))
                          ? "text-white bg-white/[0.06]"
                          : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                      }`,
                      children: r.label,
                    },
                    r.href
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
    var t = e.i(843476);
    function r() {
      return (0, t.jsxs)("div", {
        className:
          "shrink-0 flex items-center justify-between px-3 sm:px-4 py-1.5 bg-[#030108] border-t border-white/[0.06] text-[10px]",
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-center gap-2 sm:gap-4",
            children: [
              (0, t.jsxs)("span", {
                className: "flex items-center gap-1.5 text-green-400/70",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse",
                  }),
                  (0, t.jsx)("span", {
                    className: "hidden sm:inline",
                    children: "Operational",
                  }),
                ],
              }),
              (0, t.jsx)("a", {
                href: "https://x.com/TradeHyper_Claw",
                className:
                  "text-white/40 hover:text-white/60 transition-colors",
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, t.jsx)("svg", {
                  className: "w-3 h-3",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: (0, t.jsx)("path", {
                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  }),
                }),
              }),
            ],
          }),
          (0, t.jsx)("span", {
            className: "text-white/30 hidden sm:block",
            children: "Charts powered by TradingView",
          }),
          (0, t.jsxs)("span", {
            className: "text-white/40",
            children: [
              "Powered by",
              " ",
              (0, t.jsx)("a", {
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
    e.s(["default", () => r]);
  },
  246417,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    class s extends r.default.Component {
      constructor(e) {
        super(e), (this.state = { hasError: !1, error: null, retryKey: 0 });
      }
      static getDerivedStateFromError(e) {
        return { hasError: !0, error: e };
      }
      componentDidCatch(e, t) {
        console.error("ErrorBoundary caught:", e, t.componentStack);
      }
      handleRetry = () => {
        this.setState((e) => ({
          hasError: !1,
          error: null,
          retryKey: e.retryKey + 1,
        }));
      };
      render() {
        return this.state.hasError
          ? this.props.fallback
            ? this.props.fallback
            : (0, t.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center py-20 px-6 text-center",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4",
                    children: (0, t.jsx)("svg", {
                      className: "w-6 h-6 text-red-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      strokeWidth: 1.5,
                      children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
                      }),
                    }),
                  }),
                  (0, t.jsx)("h3", {
                    className: "text-white font-semibold text-sm mb-1",
                    children: "Something went wrong",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-white/40 text-xs mb-4 max-w-sm",
                    children:
                      this.state.error?.message ||
                      "An unexpected error occurred",
                  }),
                  (0, t.jsx)("button", {
                    onClick: this.handleRetry,
                    className:
                      "px-4 py-2 text-xs font-medium rounded-lg bg-[#DC2626] hover:bg-[#EF4444] text-white transition-colors",
                    children: "Try again",
                  }),
                ],
              })
          : (0, t.jsx)(
              r.default.Fragment,
              { children: this.props.children },
              this.state.retryKey
            );
      }
    }
    e.s(["default", () => s]);
  },
  760145,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(770703),
      s = e.i(470661),
      a = e.i(243133),
      l = e.i(246417);
    let i = (0, r.default)(() => e.A(515897), {
      loadableGenerated: { modules: [259772] },
      ssr: !1,
    });
    function n() {
      return (0, t.jsxs)("div", {
        className: "h-screen bg-[#030108] flex flex-col overflow-hidden",
        children: [
          (0, t.jsx)(s.default, {}),
          (0, t.jsx)(l.default, { children: (0, t.jsx)(i, {}) }),
          (0, t.jsx)(a.default, {}),
        ],
      });
    }
    e.s(["default", () => n]);
  },
  580648,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/9874b68edb2c68cd.js"].map((t) => e.l(t))
      ).then(() => t(644028))
    );
  },
  515897,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/3070f3a6f2ad50fc.js"].map((t) => e.l(t))
      ).then(() => t(259772))
    );
  },
]);
