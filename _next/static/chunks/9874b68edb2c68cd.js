(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  779971,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(541473),
      s = e.i(271645),
      o = e.i(544636);
    function i({ compact: e }) {
      return (0, o.useWalletProviderReady)()
        ? (0, t.jsx)(l, { compact: e })
        : (0, t.jsx)("button", {
            disabled: !0,
            className: e
              ? "bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-semibold px-4 py-1.5 rounded-md text-xs opacity-50 cursor-not-allowed"
              : "bg-[#DC2626] text-white font-semibold px-6 py-2.5 rounded-full text-sm opacity-50 cursor-not-allowed",
            children: "Connect Wallet",
          });
    }
    function l({ compact: e }) {
      let {
          login: o,
          logout: i,
          authenticated: l,
          ready: n,
          user: d,
        } = (0, r.usePrivy)(),
        [a, x] = (0, s.useState)(!1),
        c = (0, s.useRef)(null),
        h = d?.wallet?.address,
        m =
          (h ? `${h.slice(0, 6)}...${h.slice(-4)}` : null) ||
          d?.email?.address ||
          d?.google?.email ||
          "Connected";
      return ((0, s.useEffect)(() => {
        let e = (e) => {
          c.current && !c.current.contains(e.target) && x(!1);
        };
        return (
          document.addEventListener("mousedown", e),
          () => document.removeEventListener("mousedown", e)
        );
      }, []),
      l)
        ? (0, t.jsxs)("div", {
            className: "relative",
            ref: c,
            children: [
              (0, t.jsxs)("button", {
                onClick: () => x(!a),
                className: e
                  ? "flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] text-white font-medium px-3 py-1.5 rounded-md text-xs transition-all"
                  : "flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] text-white font-medium px-4 py-2 rounded-full text-xs transition-all",
                children: [
                  (0, t.jsx)("div", {
                    className: e
                      ? "w-1.5 h-1.5 rounded-full bg-green-500"
                      : "w-2 h-2 rounded-full bg-green-500",
                  }),
                  (0, t.jsx)("span", {
                    className: e
                      ? "max-w-[120px] truncate"
                      : "max-w-[140px] truncate",
                    children: m,
                  }),
                  (0, t.jsx)("svg", {
                    className: `transition-transform ${a ? "rotate-180" : ""} ${
                      e ? "w-2.5 h-2.5" : "w-3 h-3"
                    }`,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, t.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              a &&
                (0, t.jsxs)("div", {
                  className: `absolute right-0 top-full ${
                    e ? "mt-1 w-52 rounded-lg" : "mt-2 w-56 rounded-xl"
                  } bg-[#0D0B14] border border-white/[0.1] shadow-2xl overflow-hidden z-50`,
                  children: [
                    h &&
                      (0, t.jsxs)("div", {
                        className: `${
                          e ? "px-3 py-2" : "px-4 py-3"
                        } border-b border-white/[0.06]`,
                        children: [
                          (0, t.jsx)("p", {
                            className: `${
                              e ? "text-[9px]" : "text-[10px]"
                            } text-white/40 uppercase tracking-wider ${
                              e ? "mb-0.5" : "mb-1"
                            }`,
                            children: "Wallet",
                          }),
                          (0, t.jsx)("p", {
                            className: `${
                              e ? "text-[11px]" : "text-xs"
                            } text-white/80 font-mono`,
                            children: `${h.slice(0, 10)}...${h.slice(-8)}`,
                          }),
                        ],
                      }),
                    d?.email?.address &&
                      (0, t.jsxs)("div", {
                        className: `${
                          e ? "px-3 py-2" : "px-4 py-3"
                        } border-b border-white/[0.06]`,
                        children: [
                          (0, t.jsx)("p", {
                            className: `${
                              e ? "text-[9px]" : "text-[10px]"
                            } text-white/40 uppercase tracking-wider ${
                              e ? "mb-0.5" : "mb-1"
                            }`,
                            children: "Email",
                          }),
                          (0, t.jsx)("p", {
                            className: `${
                              e ? "text-[11px]" : "text-xs"
                            } text-white/80`,
                            children: d.email.address,
                          }),
                        ],
                      }),
                    (0, t.jsxs)("button", {
                      onClick: () => {
                        i(), x(!1);
                      },
                      className: `w-full text-left ${
                        e ? "px-3 py-2" : "px-4 py-3"
                      } text-xs text-red-400 hover:bg-white/[0.04] transition-colors flex items-center gap-2`,
                      children: [
                        (0, t.jsx)("svg", {
                          className: e ? "w-3 h-3" : "w-3.5 h-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                          }),
                        }),
                        "Disconnect",
                      ],
                    }),
                  ],
                }),
            ],
          })
        : (0, t.jsx)("button", {
            onClick: () => o(),
            disabled: !n,
            className: e
              ? "bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-semibold px-4 py-1.5 rounded-md text-xs transition-all hover:shadow-[0_0_16px_rgba(220,38,38,0.3)] disabled:opacity-50"
              : "bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(220,38,38,0.35)] disabled:opacity-50",
            children: "Connect Wallet",
          });
    }
    e.s(["default", () => i]);
  },
  644028,
  (e) => {
    e.n(e.i(779971));
  },
]);
