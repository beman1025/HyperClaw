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
      i = e.i(618566);
    let l = (0, e.i(770703).default)(() => e.A(580648), {
        loadableGenerated: { modules: [644028] },
        ssr: !1,
      }),
      n = [
        { href: "/portfolio", label: "Portfolio" },
        { href: "/leaderboard", label: "Leaderboard" },
        { href: "/developers", label: "Developers" },
      ];
    function o() {
      let e = (0, i.usePathname)(),
        [o, d] = (0, s.useState)(!1);
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
                  (0, t.jsx)(l, { compact: !0 }),
                  (0, t.jsx)("button", {
                    onClick: () => d(!o),
                    className:
                      "md:hidden w-7 h-7 flex items-center justify-center rounded bg-white/[0.06] text-white/60",
                    "aria-label": "Toggle menu",
                    children: o
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
          o &&
            (0, t.jsx)("div", {
              className: "md:hidden border-t border-white/[0.06] bg-[#030108]",
              children: (0, t.jsx)("nav", {
                className: "flex flex-col px-3 py-2 gap-0.5",
                children: n.map((s) =>
                  (0, t.jsx)(
                    a.default,
                    {
                      href: s.href,
                      onClick: () => d(!1),
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
    e.s(["default", () => o]);
  },
  478883,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      r = e.i(470661);
    function a({ text: e }) {
      let [r, a] = (0, s.useState)(!1);
      return (0, t.jsx)("button", {
        onClick: () => {
          navigator.clipboard.writeText(e), a(!0), setTimeout(() => a(!1), 2e3);
        },
        className:
          "text-[10px] text-white/30 hover:text-white/60 transition-colors font-mono px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08]",
        children: r ? "Copied!" : "Copy",
      });
    }
    function i({ title: e, language: s, code: r }) {
      return (0, t.jsxs)("div", {
        className: "rounded-xl border border-white/[0.06] overflow-hidden",
        children: [
          (0, t.jsxs)("div", {
            className:
              "flex items-center justify-between px-4 py-2 bg-white/[0.02] border-b border-white/[0.04]",
            children: [
              (0, t.jsx)("span", {
                className: "text-xs text-white/40 font-medium",
                children: e,
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, t.jsx)("span", {
                    className: "text-[10px] text-white/20 font-mono",
                    children: s,
                  }),
                  (0, t.jsx)(a, { text: r }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("pre", {
            className:
              "p-4 text-xs font-mono text-white/60 leading-relaxed overflow-x-auto bg-black/30",
            children: (0, t.jsx)("code", { children: r }),
          }),
        ],
      });
    }
    function l() {
      let [e, a] = (0, s.useState)("quickstart");
      return (0, t.jsxs)("div", {
        className: "min-h-screen flex flex-col",
        children: [
          (0, t.jsx)(r.default, {}),
          (0, t.jsxs)("div", {
            className:
              "flex-1 px-3 sm:px-6 py-4 sm:py-6 max-w-5xl mx-auto w-full",
            children: [
              (0, t.jsxs)("div", {
                className: "mb-10 pt-4",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-full px-4 py-1.5 mb-4",
                    children: [
                      (0, t.jsx)("svg", {
                        className: "w-3.5 h-3.5 text-[#DC2626]",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        children: (0, t.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                        }),
                      }),
                      (0, t.jsx)("span", {
                        className: "text-xs text-[#DC2626] font-medium",
                        children: "Developer Portal",
                      }),
                    ],
                  }),
                  (0, t.jsx)("h1", {
                    className: "text-3xl sm:text-4xl font-bold text-white mb-3",
                    children: "Build on HyperClaw",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-white/45 text-lg max-w-2xl leading-relaxed",
                    children:
                      "Integrate perpetual trading into your OpenClaw agent using the ClawHub skill, or build directly against Orderly Network's REST API. Every trade routes through HyperClaw's broker.",
                  }),
                ],
              }),
              "quickstart" === e &&
                (0, t.jsxs)("div", {
                  className: "space-y-8",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "glass-card rounded-2xl p-8",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-xl font-bold text-white mb-4",
                          children: "Getting Started",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-white/45 mb-6 leading-relaxed",
                          children:
                            "HyperClaw is a perp DEX built on Orderly Network. All trading goes through Orderly's REST API with our broker ID. Here's how to set up an agent that trades on HyperClaw.",
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("h3", {
                                  className:
                                    "text-sm font-semibold text-white mb-1 flex items-center gap-2",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-[#DC2626] font-mono text-xs",
                                      children: "01",
                                    }),
                                    "Configuration",
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/35 text-sm mb-3",
                                  children:
                                    "Set the API base URL and broker ID.",
                                }),
                                (0, t.jsx)(i, {
                                  title: "config.ts",
                                  language: "TypeScript",
                                  code: `const ORDERLY_API = "https://api-evm.orderly.org"
const BROKER_ID = "hyper_claw"
const CHAIN_ID = 8453 // Base (or 42161 for Arbitrum, 10 for Optimism)`,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("h3", {
                                  className:
                                    "text-sm font-semibold text-white mb-1 flex items-center gap-2",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-[#DC2626] font-mono text-xs",
                                      children: "02",
                                    }),
                                    "Create Wallet",
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/35 text-sm mb-3",
                                  children:
                                    "Generate an EVM wallet for the agent.",
                                }),
                                (0, t.jsx)(i, {
                                  title: "wallet.ts",
                                  language: "TypeScript",
                                  code: `import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'

const privateKey = generatePrivateKey()
const account = privateKeyToAccount(privateKey)

console.log("Address:", account.address)
// Store privateKey securely`,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("h3", {
                                  className:
                                    "text-sm font-semibold text-white mb-1 flex items-center gap-2",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-[#DC2626] font-mono text-xs",
                                      children: "03",
                                    }),
                                    "Register on Orderly",
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/35 text-sm mb-3",
                                  children:
                                    "Register the wallet with Orderly using HyperClaw's broker ID.",
                                }),
                                (0, t.jsx)(i, {
                                  title: "register.ts",
                                  language: "TypeScript",
                                  code: `// 1. Get registration nonce
const nonceRes = await fetch(
  \`\${ORDERLY_API}/v1/registration_nonce\`
)
const { data: { registration_nonce } } = await nonceRes.json()

// 2. Sign EIP-712 registration message
const message = {
  brokerId: BROKER_ID,
  chainId: CHAIN_ID,
  timestamp: Date.now(),
  registrationNonce: registration_nonce
}
// Sign with wallet's EIP-712 signer

// 3. Register account
await fetch(\`\${ORDERLY_API}/v1/register_account\`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    message,
    signature: eip712Signature,
    userAddress: account.address
  })
})`,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("h3", {
                                  className:
                                    "text-sm font-semibold text-white mb-1 flex items-center gap-2",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-[#DC2626] font-mono text-xs",
                                      children: "04",
                                    }),
                                    "Create Trading Key & Trade",
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/35 text-sm mb-3",
                                  children:
                                    "Generate an ed25519 key for API auth, then place orders.",
                                }),
                                (0, t.jsx)(i, {
                                  title: "trade.ts",
                                  language: "TypeScript",
                                  code: `// After creating an Orderly Key (ed25519):

const response = await fetch(\`\${ORDERLY_API}/v1/order\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "orderly-account-id": accountId,
    "orderly-key": \`ed25519:\${publicKey}\`,
    "orderly-signature": signature,
    "orderly-timestamp": String(Date.now())
  },
  body: JSON.stringify({
    symbol: "PERP_BTC_USDC",
    order_type: "MARKET",
    side: "BUY",
    order_quantity: 0.01
  })
})

const result = await response.json()
console.log("Order placed:", result)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "glass-card rounded-2xl p-8",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-xl font-bold text-white mb-4",
                          children: "Getting Started",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-white/45 mb-4 leading-relaxed",
                          children:
                            "HyperClaw is omnichain — deposit from Base, Arbitrum, Optimism, Polygon, or Ethereum. All trades use real USDC.",
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-3",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-start gap-3 bg-white/[0.02] rounded-lg p-4",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "text-[#DC2626] font-mono text-xs font-bold mt-0.5",
                                  children: "1",
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-white text-sm font-medium",
                                      children: "Get ETH on Arbitrum",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-white/35 text-xs",
                                      children:
                                        "You need a small amount of ETH on your chosen chain for gas fees.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-start gap-3 bg-white/[0.02] rounded-lg p-4",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "text-[#DC2626] font-mono text-xs font-bold mt-0.5",
                                  children: "2",
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-white text-sm font-medium",
                                      children: "Get USDC on Arbitrum",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-white/35 text-xs",
                                      children:
                                        "Have USDC on Base, Arbitrum, Optimism, Polygon, or Ethereum. No bridging needed.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-start gap-3 bg-white/[0.02] rounded-lg p-4",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "text-[#DC2626] font-mono text-xs font-bold mt-0.5",
                                  children: "3",
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-white text-sm font-medium",
                                      children: "Deposit to vault & trade",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-white/35 text-xs",
                                      children:
                                        "Deposit USDC into the Orderly vault on your chain. Then start trading.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              "api" === e &&
                (0, t.jsxs)("div", {
                  className: "space-y-6",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "glass-card rounded-2xl p-8",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-xl font-bold text-white mb-2",
                          children: "HyperClaw API",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-white/40 text-sm mb-6",
                          children:
                            'These are HyperClaw-specific endpoints. For trading, use Orderly\'s REST API directly with broker_id "hyper_claw".',
                        }),
                        [
                          {
                            method: "GET",
                            endpoint: "/api/health",
                            description:
                              "Check HyperClaw service status and Orderly Network connectivity.",
                            response: `{
  "status": "healthy",
  "broker_id": "hyper_claw",
  "network": "mainnet",
  "orderly_status": "healthy"
}`,
                          },
                          {
                            method: "GET",
                            endpoint: "/api/skill",
                            description:
                              "Get the ClawHub skill with full prompt, supported pairs, and configuration.",
                            response: `{
  "name": "HyperClaw Trading Skill",
  "version": "1.0.0",
  "broker_id": "hyper_claw",
  "capabilities": ["wallet_creation", "perpetual_trading", ...],
  "skill_prompt": "# HyperClaw Trading Skill..."
}`,
                          },
                          {
                            method: "GET",
                            endpoint: "/api/markets",
                            description:
                              "List all available perpetual markets with trading parameters.",
                            response: `{
  "broker_id": "hyper_claw",
  "total_markets": 50,
  "markets": [
    { "symbol": "PERP_BTC_USDC", "max_leverage": 50, ... }
  ]
}`,
                          },
                          {
                            method: "POST",
                            endpoint: "/api/agents/register",
                            description:
                              "Register an agent for tracking on the leaderboard.",
                            response: `// Request body:
{ "wallet_address": "0x...", "agent_name": "My Bot", "strategy": "momentum" }

// Response:
{ "message": "Agent registered successfully", "agent": { ... } }`,
                          },
                          {
                            method: "GET",
                            endpoint: "/api/agents/leaderboard",
                            description:
                              "Get agent trading performance rankings.",
                            response: `{
  "period": "all_time",
  "agents": []
}`,
                          },
                        ].map((e) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              className:
                                "border-b border-white/[0.04] pb-6 mb-6 last:border-0 last:pb-0 last:mb-0",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex items-center gap-3 mb-2",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: `text-xs font-mono font-bold px-2 py-0.5 rounded ${
                                        "POST" === e.method
                                          ? "bg-yellow-400/10 text-yellow-400"
                                          : "bg-green-400/10 text-green-400"
                                      }`,
                                      children: e.method,
                                    }),
                                    (0, t.jsx)("code", {
                                      className: "text-sm text-white font-mono",
                                      children: e.endpoint,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/40 text-sm mb-3",
                                  children: e.description,
                                }),
                                (0, t.jsx)("pre", {
                                  className:
                                    "bg-black/30 rounded-lg p-4 text-xs font-mono text-white/50 overflow-x-auto border border-white/[0.04]",
                                  children: (0, t.jsx)("code", {
                                    children: e.response,
                                  }),
                                }),
                              ],
                            },
                            e.endpoint + e.method
                          )
                        ),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "glass-card rounded-2xl p-8",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-xl font-bold text-white mb-2",
                          children: "Orderly Network Trading API",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-white/40 text-sm mb-4",
                          children:
                            "For actual trading (orders, positions, etc.), call Orderly's API directly. Full docs:",
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-wrap gap-3",
                          children: [
                            (0, t.jsxs)("a", {
                              href: "https://orderly.network/docs/build-on-omnichain/evm-api/introduction",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/[0.08] transition-all text-sm",
                              children: [
                                "REST API Docs",
                                (0, t.jsx)("svg", {
                                  className: "w-3.5 h-3.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  strokeWidth: 1.5,
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("a", {
                              href: "https://orderly.network/docs/build-on-omnichain/evm-api/api-authentication",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/[0.08] transition-all text-sm",
                              children: [
                                "Authentication Guide",
                                (0, t.jsx)("svg", {
                                  className: "w-3.5 h-3.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  strokeWidth: 1.5,
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("a", {
                              href: "https://orderly.network/docs/sdks/overview",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/[0.08] transition-all text-sm",
                              children: [
                                "SDKs",
                                (0, t.jsx)("svg", {
                                  className: "w-3.5 h-3.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  strokeWidth: 1.5,
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              "skill" === e &&
                (0, t.jsxs)("div", {
                  className: "space-y-6",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "glass-card rounded-2xl p-8",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("h2", {
                                  className:
                                    "text-xl font-bold text-white mb-1",
                                  children: "HyperClaw ClawHub Skill",
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/40 text-sm",
                                  children:
                                    "This is the full skill prompt that teaches an OpenClaw agent how to trade on HyperClaw.",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-2 shrink-0",
                              children: [
                                (0, t.jsx)("a", {
                                  href: "/hyperclaw-skill.md",
                                  target: "_blank",
                                  className:
                                    "inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white/70 hover:text-white font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs transition-all",
                                  children: "Raw MD",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "bg-black/30 rounded-xl border border-white/[0.06] p-6",
                          children: (0, t.jsxs)("div", {
                            className:
                              "space-y-4 text-sm text-white/50 leading-relaxed font-mono",
                            children: [
                              (0, t.jsx)("p", {
                                className: "text-white/70 font-bold text-base",
                                children:
                                  "# HyperClaw Trading Skill for OpenClaw Agents",
                              }),
                              (0, t.jsx)("p", {
                                children:
                                  "You are an AI trading agent with the ability to trade crypto perpetual futures on HyperClaw, a decentralized exchange powered by Orderly Network.",
                              }),
                              (0, t.jsx)("p", {
                                className: "text-white/30",
                                children: "--- Overview ---",
                              }),
                              (0, t.jsxs)("p", {
                                children: [
                                  'Exchange: HyperClaw (broker_id: "hyper_claw")',
                                  (0, t.jsx)("br", {}),
                                  "Backend: Orderly Network",
                                  (0, t.jsx)("br", {}),
                                  "Assets: 50+ perpetual pairs settled in USDC",
                                  (0, t.jsx)("br", {}),
                                  "Leverage: Up to 100x",
                                  (0, t.jsx)("br", {}),
                                  "Chains: Base, Arbitrum, Optimism, Polygon, Ethereum",
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: "text-white/30",
                                children: "--- Steps ---",
                              }),
                              (0, t.jsxs)("p", {
                                children: [
                                  "1. Create a wallet (viem/ethers.js)",
                                  (0, t.jsx)("br", {}),
                                  "2. Register on Orderly (EIP-712 signature)",
                                  (0, t.jsx)("br", {}),
                                  "3. Create ed25519 trading key",
                                  (0, t.jsx)("br", {}),
                                  "4. Deposit USDC to vault",
                                  (0, t.jsx)("br", {}),
                                  "5. Trade via REST API",
                                  (0, t.jsx)("br", {}),
                                  "6. Manage positions & withdraw",
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: "text-white/25 text-xs",
                                children:
                                  "... full skill contains 150+ lines of detailed API instructions, code examples, risk management guidelines, and endpoint reference.",
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsxs)("p", {
                          className: "text-white/30 text-xs mt-4",
                          children: [
                            (0, t.jsx)("code", {
                              className: "text-[#DC2626]/70",
                              children: "/hyperclaw-skill.md",
                            }),
                            " as raw markdown. Feed either to your OpenClaw agent.",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "glass-card rounded-2xl p-8",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-xl font-bold text-white mb-4",
                          children: "Using the Skill",
                        }),
                        (0, t.jsx)(i, {
                          title: "Add to your OpenClaw agent",
                          language: "TypeScript",
                          code: `// Option 1: Fetch skill from HyperClaw API
const skillRes = await fetch("https://hyperclaw.xyz/api/skill")
const skill = await skillRes.json()

// Add to your agent's capabilities
agent.addSkill({
  name: skill.name,
  prompt: skill.skill_prompt,
  config: {
    broker_id: skill.broker_id,
    api_base: skill.api_base_url,
  }
})

// Option 2: Direct markdown
// Download /hyperclaw-skill.md and include in agent context`,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
    }
    e.s(["default", () => l]);
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
