(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  976486,
  855723,
  (e) => {
    "use strict";
    let t = { ether: -9, wei: 9 };
    e.s(
      [
        "etherUnits",
        0,
        { gwei: 9, wei: 18 },
        "gweiUnits",
        0,
        t,
        "weiUnits",
        0,
        { ether: -18, gwei: -9 },
      ],
      855723
    );
    var r = e.i(644616);
    function n(e, s = "wei") {
      return (0, r.formatUnits)(e, t[s]);
    }
    e.s(["formatGwei", () => n], 976486);
  },
  363710,
  (e) => {
    "use strict";
    e.s(["getContractAddress", 0, (e) => e, "getUrl", 0, (e) => e]);
  },
  95767,
  (e) => {
    "use strict";
    var t = e.i(34888),
      r = e.i(569934),
      n = e.i(363710);
    class s extends r.BaseError {
      constructor({
        body: e,
        cause: r,
        details: s,
        headers: o,
        status: i,
        url: a,
      }) {
        super("HTTP request failed.", {
          cause: r,
          details: s,
          metaMessages: [
            i && `Status: ${i}`,
            `URL: ${(0, n.getUrl)(a)}`,
            e && `Request body: ${(0, t.stringify)(e)}`,
          ].filter(Boolean),
          name: "HttpRequestError",
        }),
          Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.body = e),
          (this.headers = o),
          (this.status = i),
          (this.url = a);
      }
    }
    class o extends r.BaseError {
      constructor({ body: e, cause: r, details: s, url: o }) {
        super("WebSocket request failed.", {
          cause: r,
          details: s,
          metaMessages: [
            `URL: ${(0, n.getUrl)(o)}`,
            e && `Request body: ${(0, t.stringify)(e)}`,
          ].filter(Boolean),
          name: "WebSocketRequestError",
        }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.url = o);
      }
    }
    class i extends r.BaseError {
      constructor({ body: e, error: r, url: s }) {
        super("RPC Request failed.", {
          cause: r,
          details: r.message,
          metaMessages: [
            `URL: ${(0, n.getUrl)(s)}`,
            `Request body: ${(0, t.stringify)(e)}`,
          ],
          name: "RpcRequestError",
        }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.code = r.code),
          (this.data = r.data),
          (this.url = s);
      }
    }
    class a extends r.BaseError {
      constructor({ url: e } = {}) {
        super("The socket has been closed.", {
          metaMessages: [e && `URL: ${(0, n.getUrl)(e)}`].filter(Boolean),
          name: "SocketClosedError",
        }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.url = e);
      }
    }
    class u extends r.BaseError {
      constructor({ body: e, url: r }) {
        super("The request took too long to respond.", {
          details: "The request timed out.",
          metaMessages: [
            `URL: ${(0, n.getUrl)(r)}`,
            `Request body: ${(0, t.stringify)(e)}`,
          ],
          name: "TimeoutError",
        }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.url = r);
      }
    }
    e.s([
      "HttpRequestError",
      () => s,
      "RpcRequestError",
      () => i,
      "SocketClosedError",
      () => a,
      "TimeoutError",
      () => u,
      "WebSocketRequestError",
      () => o,
    ]);
  },
  853532,
  (e) => {
    "use strict";
    var t = e.i(976486),
      r = e.i(569934);
    class n extends r.BaseError {
      constructor({ cause: e, message: t } = {}) {
        const r = t
          ?.replace("execution reverted: ", "")
          ?.replace("execution reverted", "");
        super(
          `Execution reverted ${
            r ? `with reason: ${r}` : "for an unknown reason"
          }.`,
          { cause: e, name: "ExecutionRevertedError" }
        );
      }
    }
    Object.defineProperty(n, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3,
    }),
      Object.defineProperty(n, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /execution reverted|gas required exceeds allowance/,
      });
    class s extends r.BaseError {
      constructor({ cause: e, maxFeePerGas: r } = {}) {
        super(
          `The fee cap (\`maxFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)} gwei` : ""
          }) cannot be higher than the maximum allowed value (2^256-1).`,
          { cause: e, name: "FeeCapTooHighError" }
        );
      }
    }
    Object.defineProperty(s, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
    });
    class o extends r.BaseError {
      constructor({ cause: e, maxFeePerGas: r } = {}) {
        super(
          `The fee cap (\`maxFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)}` : ""
          } gwei) cannot be lower than the block base fee.`,
          { cause: e, name: "FeeCapTooLowError" }
        );
      }
    }
    Object.defineProperty(o, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
    });
    class i extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }is higher than the next one expected.`,
          { cause: e, name: "NonceTooHighError" }
        );
      }
    }
    Object.defineProperty(i, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too high/,
    });
    class a extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
          { cause: e, name: "NonceTooLowError" }
        );
      }
    }
    Object.defineProperty(a, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too low|transaction already imported|already known/,
    });
    class u extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }exceeds the maximum allowed nonce.`,
          { cause: e, name: "NonceMaxValueError" }
        );
      }
    }
    Object.defineProperty(u, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce has max value/,
    });
    class c extends r.BaseError {
      constructor({ cause: e } = {}) {
        super(
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
          {
            cause: e,
            metaMessages: [
              "This error could arise when the account does not have enough funds to:",
              " - pay for the total gas fee,",
              " - pay for the value to send.",
              " ",
              "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
              " - `gas` is the amount of gas needed for transaction to execute,",
              " - `gas fee` is the gas fee,",
              " - `value` is the amount of ether to send to the recipient.",
            ],
            name: "InsufficientFundsError",
          }
        );
      }
    }
    Object.defineProperty(c, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /insufficient funds|exceeds transaction sender account balance/,
    });
    class l extends r.BaseError {
      constructor({ cause: e, gas: t } = {}) {
        super(
          `The amount of gas ${
            t ? `(${t}) ` : ""
          }provided for the transaction exceeds the limit allowed for the block.`,
          { cause: e, name: "IntrinsicGasTooHighError" }
        );
      }
    }
    Object.defineProperty(l, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too high|gas limit reached/,
    });
    class d extends r.BaseError {
      constructor({ cause: e, gas: t } = {}) {
        super(
          `The amount of gas ${
            t ? `(${t}) ` : ""
          }provided for the transaction is too low.`,
          { cause: e, name: "IntrinsicGasTooLowError" }
        );
      }
    }
    Object.defineProperty(d, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too low/,
    });
    class f extends r.BaseError {
      constructor({ cause: e }) {
        super("The transaction type is not supported for this chain.", {
          cause: e,
          name: "TransactionTypeNotSupportedError",
        });
      }
    }
    Object.defineProperty(f, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /transaction type not valid/,
    });
    class p extends r.BaseError {
      constructor({ cause: e, maxPriorityFeePerGas: r, maxFeePerGas: n } = {}) {
        super(
          `The provided tip (\`maxPriorityFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)} gwei` : ""
          }) cannot be higher than the fee cap (\`maxFeePerGas\`${
            n ? ` = ${(0, t.formatGwei)(n)} gwei` : ""
          }).`,
          { cause: e, name: "TipAboveFeeCapError" }
        );
      }
    }
    Object.defineProperty(p, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
    });
    class h extends r.BaseError {
      constructor({ cause: e }) {
        super(`An error occurred while executing: ${e?.shortMessage}`, {
          cause: e,
          name: "UnknownNodeError",
        });
      }
    }
    e.s([
      "ExecutionRevertedError",
      () => n,
      "FeeCapTooHighError",
      () => s,
      "FeeCapTooLowError",
      () => o,
      "InsufficientFundsError",
      () => c,
      "IntrinsicGasTooHighError",
      () => l,
      "IntrinsicGasTooLowError",
      () => d,
      "NonceMaxValueError",
      () => u,
      "NonceTooHighError",
      () => i,
      "NonceTooLowError",
      () => a,
      "TipAboveFeeCapError",
      () => p,
      "TransactionTypeNotSupportedError",
      () => f,
      "UnknownNodeError",
      () => h,
    ]);
  },
  871706,
  509486,
  (e) => {
    "use strict";
    function t() {
      let e = () => void 0,
        t = () => void 0;
      return {
        promise: new Promise((r, n) => {
          (e = r), (t = n);
        }),
        resolve: e,
        reject: t,
      };
    }
    e.s(["withResolvers", () => t], 509486);
    let r = new Map();
    function n({ fn: e, id: n, shouldSplitBatch: s, wait: o = 0, sort: i }) {
      let a = async () => {
          let t = c();
          u();
          let r = t.map(({ args: e }) => e);
          0 !== r.length &&
            e(r)
              .then((e) => {
                i && Array.isArray(e) && e.sort(i);
                for (let r = 0; r < t.length; r++) {
                  let { resolve: n } = t[r];
                  n?.([e[r], e]);
                }
              })
              .catch((e) => {
                for (let r = 0; r < t.length; r++) {
                  let { reject: n } = t[r];
                  n?.(e);
                }
              });
        },
        u = () => r.delete(n),
        c = () => r.get(n) || [],
        l = (e) => r.set(n, [...c(), e]);
      return {
        flush: u,
        async schedule(e) {
          let { promise: r, resolve: n, reject: i } = t();
          return (
            (s?.([...c().map(({ args: e }) => e), e]) && a(), c().length > 0)
              ? l({ args: e, resolve: n, reject: i })
              : (l({ args: e, resolve: n, reject: i }), setTimeout(a, o)),
            r
          );
        },
      };
    }
    e.s(["createBatchScheduler", () => n], 871706);
  },
  644616,
  (e) => {
    "use strict";
    function t(e, t) {
      let r = e.toString(),
        n = r.startsWith("-");
      n && (r = r.slice(1));
      let [s, o] = [
        (r = r.padStart(t, "0")).slice(0, r.length - t),
        r.slice(r.length - t),
      ];
      return (
        (o = o.replace(/(0+)$/, "")),
        `${n ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`
      );
    }
    e.s(["formatUnits", () => t]);
  },
  880841,
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
  401319,
  (e) => {
    "use strict";
    var t = e.i(880841);
    function r(e) {
      return (0, t.isHex)(e, { strict: !1 })
        ? Math.ceil((e.length - 2) / 2)
        : e.length;
    }
    e.s(["size", () => r]);
  },
  569934,
  (e) => {
    "use strict";
    let t = "2.45.3",
      r = {
        getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
          t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
        version: `viem@${t}`,
      };
    function n(e) {
      r = e;
    }
    class s extends Error {
      constructor(e, n = {}) {
        const o =
            n.cause instanceof s
              ? n.cause.details
              : n.cause?.message
              ? n.cause.message
              : n.details,
          i = (n.cause instanceof s && n.cause.docsPath) || n.docsPath,
          a = r.getDocsUrl?.({ ...n, docsPath: i });
        super(
          [
            e || "An error occurred.",
            "",
            ...(n.metaMessages ? [...n.metaMessages, ""] : []),
            ...(a ? [`Docs: ${a}`] : []),
            ...(o ? [`Details: ${o}`] : []),
            ...(r.version ? [`Version: ${r.version}`] : []),
          ].join("\n"),
          n.cause ? { cause: n.cause } : void 0
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
          (this.details = o),
          (this.docsPath = i),
          (this.metaMessages = n.metaMessages),
          (this.name = n.name ?? this.name),
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
    e.s(["BaseError", () => s, "setErrorConfig", () => n], 569934);
  },
  22411,
  587286,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset "${e}" is out-of-bounds (size: ${r}).`,
          { name: "SliceOffsetOutOfBoundsError" }
        );
      }
    }
    class n extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
          { name: "SizeExceedsPaddingSizeError" }
        );
      }
    }
    class s extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
          { name: "InvalidBytesLengthError" }
        );
      }
    }
    function o(e, { dir: t, size: r = 32 } = {}) {
      return "string" == typeof e
        ? i(e, { dir: t, size: r })
        : a(e, { dir: t, size: r });
    }
    function i(e, { dir: t, size: r = 32 } = {}) {
      if (null === r) return e;
      let s = e.replace("0x", "");
      if (s.length > 2 * r)
        throw new n({
          size: Math.ceil(s.length / 2),
          targetSize: r,
          type: "hex",
        });
      return `0x${s["right" === t ? "padEnd" : "padStart"](2 * r, "0")}`;
    }
    function a(e, { dir: t, size: r = 32 } = {}) {
      if (null === r) return e;
      if (e.length > r)
        throw new n({ size: e.length, targetSize: r, type: "bytes" });
      let s = new Uint8Array(r);
      for (let n = 0; n < r; n++) {
        let o = "right" === t;
        s[o ? n : r - n - 1] = e[o ? n : e.length - n - 1];
      }
      return s;
    }
    e.s(
      [
        "InvalidBytesLengthError",
        () => s,
        "SizeExceedsPaddingSizeError",
        () => n,
        "SliceOffsetOutOfBoundsError",
        () => r,
      ],
      587286
    ),
      e.s(["pad", () => o, "padBytes", () => a, "padHex", () => i], 22411);
  },
  400564,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ max: e, min: t, signed: r, size: n, value: s }) {
        super(
          `Number "${s}" is not in safe ${
            n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
          }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
          { name: "IntegerOutOfRangeError" }
        );
      }
    }
    class n extends t.BaseError {
      constructor(e) {
        super(
          `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
          { name: "InvalidBytesBooleanError" }
        );
      }
    }
    class s extends t.BaseError {
      constructor(e) {
        super(
          `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
          { name: "InvalidHexBooleanError" }
        );
      }
    }
    class o extends t.BaseError {
      constructor(e) {
        super(
          `Hex value "${e}" is an odd length (${e.length}). It must be an even length.`,
          { name: "InvalidHexValueError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
          name: "SizeOverflowError",
        });
      }
    }
    e.s([
      "IntegerOutOfRangeError",
      () => r,
      "InvalidBytesBooleanError",
      () => n,
      "InvalidHexBooleanError",
      () => s,
      "InvalidHexValueError",
      () => o,
      "SizeOverflowError",
      () => i,
    ]);
  },
  8406,
  (e) => {
    "use strict";
    function t(e, { dir: r = "left" } = {}) {
      let n = "string" == typeof e ? e.replace("0x", "") : e,
        s = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === r ? e : n.length - e - 1].toString()) s++;
        else break;
      return ((n = "left" === r ? n.slice(s) : n.slice(0, n.length - s)),
      "string" == typeof e)
        ? (1 === n.length && "right" === r && (n = `${n}0`),
          `0x${n.length % 2 == 1 ? `0${n}` : n}`)
        : n;
    }
    e.s(["trim", () => t]);
  },
  450323,
  (e) => {
    "use strict";
    e.s([
      "assertSize",
      () => o,
      "fromHex",
      () => i,
      "hexToBigInt",
      () => a,
      "hexToBool",
      () => u,
      "hexToNumber",
      () => c,
      "hexToString",
      () => l,
    ]);
    var t = e.i(400564),
      r = e.i(401319),
      n = e.i(8406),
      s = e.i(769936);
    function o(e, { size: n }) {
      if ((0, r.size)(e) > n)
        throw new t.SizeOverflowError({
          givenSize: (0, r.size)(e),
          maxSize: n,
        });
    }
    function i(e, t) {
      let r = "string" == typeof t ? { to: t } : t,
        n = r.to;
      return "number" === n
        ? c(e, r)
        : "bigint" === n
        ? a(e, r)
        : "string" === n
        ? l(e, r)
        : "boolean" === n
        ? u(e, r)
        : (0, s.hexToBytes)(e, r);
    }
    function a(e, t = {}) {
      let { signed: r } = t;
      t.size && o(e, { size: t.size });
      let n = BigInt(e);
      if (!r) return n;
      let s = (e.length - 2) / 2;
      return n <= (1n << (8n * BigInt(s) - 1n)) - 1n
        ? n
        : n - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
    }
    function u(e, r = {}) {
      let s = e;
      if (
        (r.size && (o(s, { size: r.size }), (s = (0, n.trim)(s))),
        "0x00" === (0, n.trim)(s))
      )
        return !1;
      if ("0x01" === (0, n.trim)(s)) return !0;
      throw new t.InvalidHexBooleanError(s);
    }
    function c(e, r = {}) {
      let n = a(e, r),
        s = Number(n);
      if (!Number.isSafeInteger(s))
        throw new t.IntegerOutOfRangeError({
          max: `${Number.MAX_SAFE_INTEGER}`,
          min: `${Number.MIN_SAFE_INTEGER}`,
          signed: r.signed,
          size: r.size,
          value: `${n}n`,
        });
      return s;
    }
    function l(e, t = {}) {
      let r = (0, s.hexToBytes)(e);
      return (
        t.size &&
          (o(r, { size: t.size }), (r = (0, n.trim)(r, { dir: "right" }))),
        new TextDecoder().decode(r)
      );
    }
  },
  675107,
  (e) => {
    "use strict";
    e.s([
      "boolToHex",
      () => i,
      "bytesToHex",
      () => a,
      "numberToHex",
      () => u,
      "stringToHex",
      () => l,
      "toHex",
      () => o,
    ]);
    var t = e.i(400564),
      r = e.i(22411),
      n = e.i(450323);
    let s = Array.from({ length: 256 }, (e, t) =>
      t.toString(16).padStart(2, "0")
    );
    function o(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? u(e, t)
        : "string" == typeof e
        ? l(e, t)
        : "boolean" == typeof e
        ? i(e, t)
        : a(e, t);
    }
    function i(e, t = {}) {
      let s = `0x${Number(e)}`;
      return "number" == typeof t.size
        ? ((0, n.assertSize)(s, { size: t.size }),
          (0, r.pad)(s, { size: t.size }))
        : s;
    }
    function a(e, t = {}) {
      let o = "";
      for (let t = 0; t < e.length; t++) o += s[e[t]];
      let i = `0x${o}`;
      return "number" == typeof t.size
        ? ((0, n.assertSize)(i, { size: t.size }),
          (0, r.pad)(i, { dir: "right", size: t.size }))
        : i;
    }
    function u(e, n = {}) {
      let s,
        { signed: o, size: i } = n,
        a = BigInt(e);
      i
        ? (s = o
            ? (1n << (8n * BigInt(i) - 1n)) - 1n
            : 2n ** (8n * BigInt(i)) - 1n)
        : "number" == typeof e && (s = BigInt(Number.MAX_SAFE_INTEGER));
      let c = "bigint" == typeof s && o ? -s - 1n : 0;
      if ((s && a > s) || a < c) {
        let r = "bigint" == typeof e ? "n" : "";
        throw new t.IntegerOutOfRangeError({
          max: s ? `${s}${r}` : void 0,
          min: `${c}${r}`,
          signed: o,
          size: i,
          value: `${e}${r}`,
        });
      }
      let l = `0x${(o && a < 0
        ? (1n << BigInt(8 * i)) + BigInt(a)
        : a
      ).toString(16)}`;
      return i ? (0, r.pad)(l, { size: i }) : l;
    }
    let c = new TextEncoder();
    function l(e, t = {}) {
      return a(c.encode(e), t);
    }
  },
  769936,
  (e) => {
    "use strict";
    e.s([
      "boolToBytes",
      () => u,
      "hexToBytes",
      () => l,
      "numberToBytes",
      () => d,
      "stringToBytes",
      () => f,
      "toBytes",
      () => a,
    ]);
    var t = e.i(569934),
      r = e.i(880841),
      n = e.i(22411),
      s = e.i(450323),
      o = e.i(675107);
    let i = new TextEncoder();
    function a(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? d(e, t)
        : "boolean" == typeof e
        ? u(e, t)
        : (0, r.isHex)(e)
        ? l(e, t)
        : f(e, t);
    }
    function u(e, t = {}) {
      let r = new Uint8Array(1);
      return ((r[0] = Number(e)), "number" == typeof t.size)
        ? ((0, s.assertSize)(r, { size: t.size }),
          (0, n.pad)(r, { size: t.size }))
        : r;
    }
    function c(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function l(e, r = {}) {
      let o = e;
      r.size &&
        ((0, s.assertSize)(o, { size: r.size }),
        (o = (0, n.pad)(o, { dir: "right", size: r.size })));
      let i = o.slice(2);
      i.length % 2 && (i = `0${i}`);
      let a = i.length / 2,
        u = new Uint8Array(a);
      for (let e = 0, r = 0; e < a; e++) {
        let n = c(i.charCodeAt(r++)),
          s = c(i.charCodeAt(r++));
        if (void 0 === n || void 0 === s)
          throw new t.BaseError(
            `Invalid byte sequence ("${i[r - 2]}${i[r - 1]}" in "${i}").`
          );
        u[e] = 16 * n + s;
      }
      return u;
    }
    function d(e, t) {
      return l((0, o.numberToHex)(e, t));
    }
    function f(e, t = {}) {
      let r = i.encode(e);
      return "number" == typeof t.size
        ? ((0, s.assertSize)(r, { size: t.size }),
          (0, n.pad)(r, { dir: "right", size: t.size }))
        : r;
    }
  },
  976677,
  (e) => {
    "use strict";
    class t extends Map {
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
    e.s(["LruMap", () => t]);
  },
  34888,
  (e) => {
    "use strict";
    e.s([
      "stringify",
      0,
      (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, n) : n;
          },
          r
        ),
    ]);
  },
  788035,
  (e) => {
    "use strict";
    function t(e, t) {
      let r = e.exec(t);
      return r?.groups;
    }
    e.s([
      "bytesRegex",
      0,
      /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      "execTyped",
      () => t,
      "integerRegex",
      0,
      /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
      "isTupleRegex",
      0,
      /^\(.+?\).*?$/,
    ]);
  },
  70204,
  332881,
  (e) => {
    "use strict";
    function t(e, { includeName: n = !1 } = {}) {
      if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
        throw new S(e.type);
      return `${e.name}(${r(e.inputs, { includeName: n })})`;
    }
    function r(e, { includeName: t = !1 } = {}) {
      return e
        ? e
            .map((e) =>
              (function (e, { includeName: t }) {
                return e.type.startsWith("tuple")
                  ? `(${r(e.components, { includeName: t })})${e.type.slice(5)}`
                  : e.type + (t && e.name ? ` ${e.name}` : "");
              })(e, { includeName: t })
            )
            .join(t ? ", " : ",")
        : "";
    }
    e.s(
      [
        "AbiConstructorNotFoundError",
        () => o,
        "AbiConstructorParamsNotFoundError",
        () => i,
        "AbiDecodingDataSizeInvalidError",
        () => a,
        "AbiDecodingDataSizeTooSmallError",
        () => u,
        "AbiDecodingZeroDataError",
        () => c,
        "AbiEncodingArrayLengthMismatchError",
        () => l,
        "AbiEncodingBytesSizeMismatchError",
        () => d,
        "AbiEncodingLengthMismatchError",
        () => f,
        "AbiErrorInputsNotFoundError",
        () => p,
        "AbiErrorNotFoundError",
        () => h,
        "AbiErrorSignatureNotFoundError",
        () => g,
        "AbiEventNotFoundError",
        () => y,
        "AbiEventSignatureEmptyTopicsError",
        () => b,
        "AbiEventSignatureNotFoundError",
        () => m,
        "AbiFunctionNotFoundError",
        () => v,
        "AbiFunctionOutputsNotFoundError",
        () => E,
        "AbiFunctionSignatureNotFoundError",
        () => x,
        "AbiItemAmbiguityError",
        () => $,
        "BytesSizeMismatchError",
        () => w,
        "DecodeLogDataMismatch",
        () => A,
        "DecodeLogTopicsMismatch",
        () => B,
        "InvalidAbiDecodingTypeError",
        () => I,
        "InvalidAbiEncodingTypeError",
        () => z,
        "InvalidArrayError",
        () => T,
        "InvalidDefinitionTypeError",
        () => S,
        "UnsupportedPackedAbiType",
        () => M,
      ],
      70204
    ),
      e.s(["formatAbiItem", () => t, "formatAbiParams", () => r], 332881);
    var n = e.i(401319),
      s = e.i(569934);
    class o extends s.BaseError {
      constructor({ docsPath: e }) {
        super(
          "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
          { docsPath: e, name: "AbiConstructorNotFoundError" }
        );
      }
    }
    class i extends s.BaseError {
      constructor({ docsPath: e }) {
        super(
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
          { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
        );
      }
    }
    class a extends s.BaseError {
      constructor({ data: e, size: t }) {
        super(
          `Data size of ${t} bytes is invalid.
Size must be in increments of 32 bytes (size % 32 === 0).`,
          {
            metaMessages: [`Data: ${e} (${t} bytes)`],
            name: "AbiDecodingDataSizeInvalidError",
          }
        );
      }
    }
    class u extends s.BaseError {
      constructor({ data: e, params: t, size: n }) {
        super(`Data size of ${n} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${r(t, { includeName: !0 })})`,
            `Data:   ${e} (${n} bytes)`,
          ],
          name: "AbiDecodingDataSizeTooSmallError",
        }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = e),
          (this.params = t),
          (this.size = n);
      }
    }
    class c extends s.BaseError {
      constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
          name: "AbiDecodingZeroDataError",
        });
      }
    }
    class l extends s.BaseError {
      constructor({ expectedLength: e, givenLength: t, type: r }) {
        super(
          `ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,
          { name: "AbiEncodingArrayLengthMismatchError" }
        );
      }
    }
    class d extends s.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${(0, n.size)(
            t
          )}) does not match expected size (bytes${e}).`,
          { name: "AbiEncodingBytesSizeMismatchError" }
        );
      }
    }
    class f extends s.BaseError {
      constructor({ expectedLength: e, givenLength: t }) {
        super(
          `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
          { name: "AbiEncodingLengthMismatchError" }
        );
      }
    }
    class p extends s.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
          { docsPath: t, name: "AbiErrorInputsNotFoundError" }
        );
      }
    }
    class h extends s.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
          { docsPath: t, name: "AbiErrorNotFoundError" }
        );
      }
    }
    class g extends s.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
        ),
          Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.signature = e);
      }
    }
    class b extends s.BaseError {
      constructor({ docsPath: e }) {
        super("Cannot extract event signature from empty topics.", {
          docsPath: e,
          name: "AbiEventSignatureEmptyTopicsError",
        });
      }
    }
    class m extends s.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiEventSignatureNotFoundError" }
        );
      }
    }
    class y extends s.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
          { docsPath: t, name: "AbiEventNotFoundError" }
        );
      }
    }
    class v extends s.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
          { docsPath: t, name: "AbiFunctionNotFoundError" }
        );
      }
    }
    class E extends s.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
          { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
        );
      }
    }
    class x extends s.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
        );
      }
    }
    class $ extends s.BaseError {
      constructor(e, r) {
        super("Found ambiguous types in overloaded ABI items.", {
          metaMessages: [
            `\`${e.type}\` in \`${t(e.abiItem)}\`, and`,
            `\`${r.type}\` in \`${t(r.abiItem)}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI.",
          ],
          name: "AbiItemAmbiguityError",
        });
      }
    }
    class w extends s.BaseError {
      constructor({ expectedSize: e, givenSize: t }) {
        super(`Expected bytes${e}, got bytes${t}.`, {
          name: "BytesSizeMismatchError",
        });
      }
    }
    class A extends s.BaseError {
      constructor({ abiItem: e, data: t, params: n, size: s }) {
        super(
          `Data size of ${s} bytes is too small for non-indexed event parameters.`,
          {
            metaMessages: [
              `Params: (${r(n, { includeName: !0 })})`,
              `Data:   ${t} (${s} bytes)`,
            ],
            name: "DecodeLogDataMismatch",
          }
        ),
          Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abiItem = e),
          (this.data = t),
          (this.params = n),
          (this.size = s);
      }
    }
    class B extends s.BaseError {
      constructor({ abiItem: e, param: r }) {
        super(
          `Expected a topic for indexed event parameter${
            r.name ? ` "${r.name}"` : ""
          } on event "${t(e, { includeName: !0 })}".`,
          { name: "DecodeLogTopicsMismatch" }
        ),
          Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abiItem = e);
      }
    }
    class z extends s.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
          { docsPath: t, name: "InvalidAbiEncodingType" }
        );
      }
    }
    class I extends s.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
          { docsPath: t, name: "InvalidAbiDecodingType" }
        );
      }
    }
    class T extends s.BaseError {
      constructor(e) {
        super(`Value "${e}" is not a valid array.`, {
          name: "InvalidArrayError",
        });
      }
    }
    class S extends s.BaseError {
      constructor(e) {
        super(
          `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
          { name: "InvalidDefinitionTypeError" }
        );
      }
    }
    class M extends s.BaseError {
      constructor(e) {
        super(`Type "${e}" is not supported for packed encoding.`, {
          name: "UnsupportedPackedAbiType",
        });
      }
    }
  },
  831095,
  (e) => {
    "use strict";
    var t = e.i(145535),
      r = e.i(880841),
      n = e.i(769936),
      s = e.i(675107);
    function o(e, o) {
      let i = (0, t.keccak_256)(
        (0, r.isHex)(e, { strict: !1 }) ? (0, n.toBytes)(e) : e
      );
      return "bytes" === (o || "hex") ? i : (0, s.toHex)(i);
    }
    e.s(["keccak256", () => o]);
  },
  395312,
  (e) => {
    "use strict";
    var t = e.i(769936),
      r = e.i(831095);
    function n(e) {
      return (0, r.keccak256)((0, t.toBytes)(e));
    }
    e.s(["hashSignature", () => n]);
  },
  525908,
  (e) => {
    "use strict";
    var t = e.i(788035);
    let r = /^tuple(?<array>(\[(\d*)\])*)$/;
    function n(e) {
      let n = "",
        s = e.length;
      for (let o = 0; o < s; o++)
        (n += (function e(n) {
          let s = n.type;
          if (r.test(n.type) && "components" in n) {
            s = "(";
            let o = n.components.length;
            for (let t = 0; t < o; t++)
              (s += e(n.components[t])), t < o - 1 && (s += ", ");
            let i = (0, t.execTyped)(r, n.type);
            return (s += `)${i?.array || ""}`), e({ ...n, type: s });
          }
          return ("indexed" in n && n.indexed && (s = `${s} indexed`), n.name)
            ? `${s} ${n.name}`
            : s;
        })(e[o])),
          o !== s - 1 && (n += ", ");
      return n;
    }
    e.s(["formatAbiParameters", () => n], 525908);
  },
  926336,
  766564,
  685185,
  (e) => {
    "use strict";
    var t = e.i(395312),
      r = e.i(525908);
    function n(e) {
      return "function" === e.type
        ? `function ${e.name}(${(0, r.formatAbiParameters)(e.inputs)})${
            e.stateMutability && "nonpayable" !== e.stateMutability
              ? ` ${e.stateMutability}`
              : ""
          }${
            e.outputs?.length
              ? ` returns (${(0, r.formatAbiParameters)(e.outputs)})`
              : ""
          }`
        : "event" === e.type
        ? `event ${e.name}(${(0, r.formatAbiParameters)(e.inputs)})`
        : "error" === e.type
        ? `error ${e.name}(${(0, r.formatAbiParameters)(e.inputs)})`
        : "constructor" === e.type
        ? `constructor(${(0, r.formatAbiParameters)(e.inputs)})${
            "payable" === e.stateMutability ? " payable" : ""
          }`
        : "fallback" === e.type
        ? `fallback() external${
            "payable" === e.stateMutability ? " payable" : ""
          }`
        : "receive() external payable";
    }
    e.s(["formatAbiItem", () => n], 766564);
    var s = e.i(569934);
    let o = (e) =>
      (function (e) {
        let t = !0,
          r = "",
          n = 0,
          o = "",
          i = !1;
        for (let s = 0; s < e.length; s++) {
          let a = e[s];
          if (
            (["(", ")", ","].includes(a) && (t = !0),
            "(" === a && n++,
            ")" === a && n--,
            t)
          ) {
            if (0 === n) {
              if (" " === a && ["event", "function", ""].includes(o)) o = "";
              else if (((o += a), ")" === a)) {
                i = !0;
                break;
              }
              continue;
            }
            if (" " === a) {
              "," !== e[s - 1] &&
                "," !== r &&
                ",(" !== r &&
                ((r = ""), (t = !1));
              continue;
            }
            (o += a), (r += a);
          }
        }
        if (!i) throw new s.BaseError("Unable to normalize signature.");
        return o;
      })("string" == typeof e ? e : n(e));
    function i(e) {
      return (0, t.hashSignature)(o(e));
    }
    e.s(["toSignature", 0, o], 685185),
      e.s(["toSignatureHash", () => i], 926336);
  },
  774620,
  (e) => {
    "use strict";
    let t = e.i(926336).toSignatureHash;
    e.s(["toEventSelector", 0, t]);
  },
  608861,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ address: e }) {
        super(`Address "${e}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart.",
          ],
          name: "InvalidAddressError",
        });
      }
    }
    e.s(["InvalidAddressError", () => r]);
  },
  823838,
  (e) => {
    "use strict";
    e.s(["checksumAddress", () => a, "getAddress", () => u]);
    var t = e.i(608861),
      r = e.i(769936),
      n = e.i(831095),
      s = e.i(976677),
      o = e.i(796516);
    let i = new s.LruMap(8192);
    function a(e, t) {
      if (i.has(`${e}.${t}`)) return i.get(`${e}.${t}`);
      let s = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
        o = (0, n.keccak256)((0, r.stringToBytes)(s), "bytes"),
        a = (t ? s.substring(`${t}0x`.length) : s).split("");
      for (let e = 0; e < 40; e += 2)
        o[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
          (15 & o[e >> 1]) >= 8 &&
            a[e + 1] &&
            (a[e + 1] = a[e + 1].toUpperCase());
      let u = `0x${a.join("")}`;
      return i.set(`${e}.${t}`, u), u;
    }
    function u(e, r) {
      if (!(0, o.isAddress)(e, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e });
      return a(e, r);
    }
  },
  796516,
  (e) => {
    "use strict";
    e.s(["isAddress", () => o]);
    var t = e.i(976677),
      r = e.i(823838);
    let n = /^0x[a-fA-F0-9]{40}$/,
      s = new t.LruMap(8192);
    function o(e, t) {
      let { strict: o = !0 } = t ?? {},
        i = `${e}.${o}`;
      if (s.has(i)) return s.get(i);
      let a =
        !!n.test(e) &&
        (e.toLowerCase() === e || !o || (0, r.checksumAddress)(e) === e);
      return s.set(i, a), a;
    }
  },
  147526,
  (e) => {
    "use strict";
    function t(e) {
      return "string" == typeof e[0] ? n(e) : r(e);
    }
    function r(e) {
      let t = 0;
      for (let r of e) t += r.length;
      let r = new Uint8Array(t),
        n = 0;
      for (let t of e) r.set(t, n), (n += t.length);
      return r;
    }
    function n(e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    e.s(["concat", () => t, "concatBytes", () => r, "concatHex", () => n]);
  },
  790063,
  (e) => {
    "use strict";
    var t = e.i(587286),
      r = e.i(880841),
      n = e.i(401319);
    function s(e, t, n, { strict: o } = {}) {
      return (0, r.isHex)(e, { strict: !1 })
        ? u(e, t, n, { strict: o })
        : a(e, t, n, { strict: o });
    }
    function o(e, r) {
      if ("number" == typeof r && r > 0 && r > (0, n.size)(e) - 1)
        throw new t.SliceOffsetOutOfBoundsError({
          offset: r,
          position: "start",
          size: (0, n.size)(e),
        });
    }
    function i(e, r, s) {
      if (
        "number" == typeof r &&
        "number" == typeof s &&
        (0, n.size)(e) !== s - r
      )
        throw new t.SliceOffsetOutOfBoundsError({
          offset: s,
          position: "end",
          size: (0, n.size)(e),
        });
    }
    function a(e, t, r, { strict: n } = {}) {
      o(e, t);
      let s = e.slice(t, r);
      return n && i(s, t, r), s;
    }
    function u(e, t, r, { strict: n } = {}) {
      o(e, t);
      let s = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
      return n && i(s, t, r), s;
    }
    e.s(["slice", () => s, "sliceBytes", () => a, "sliceHex", () => u]);
  },
  704434,
  342692,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(608861),
      n = e.i(569934),
      s = e.i(400564),
      o = e.i(796516),
      i = e.i(147526),
      a = e.i(22411),
      u = e.i(401319),
      c = e.i(790063),
      l = e.i(675107);
    let d =
      /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    function f(e, f) {
      if (e.length !== f.length)
        throw new t.AbiEncodingLengthMismatchError({
          expectedLength: e.length,
          givenLength: f.length,
        });
      let g = p(
        (function ({ params: e, values: f }) {
          let g = [];
          for (let b = 0; b < e.length; b++)
            g.push(
              (function e({ param: f, value: g }) {
                let b = h(f.type);
                if (b) {
                  let [r, n] = b;
                  return (function (r, { length: n, param: s }) {
                    let o = null === n;
                    if (!Array.isArray(r)) throw new t.InvalidArrayError(r);
                    if (!o && r.length !== n)
                      throw new t.AbiEncodingArrayLengthMismatchError({
                        expectedLength: n,
                        givenLength: r.length,
                        type: `${s.type}[${n}]`,
                      });
                    let a = !1,
                      u = [];
                    for (let t = 0; t < r.length; t++) {
                      let n = e({ param: s, value: r[t] });
                      n.dynamic && (a = !0), u.push(n);
                    }
                    if (o || a) {
                      let e = p(u);
                      if (o) {
                        let t = (0, l.numberToHex)(u.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: u.length > 0 ? (0, i.concat)([t, e]) : t,
                        };
                      }
                      if (a) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: (0, i.concat)(u.map(({ encoded: e }) => e)),
                    };
                  })(g, { length: r, param: { ...f, type: n } });
                }
                if ("tuple" === f.type)
                  return (function (t, { param: r }) {
                    let n = !1,
                      s = [];
                    for (let o = 0; o < r.components.length; o++) {
                      let i = r.components[o],
                        a = Array.isArray(t) ? o : i.name,
                        u = e({ param: i, value: t[a] });
                      s.push(u), u.dynamic && (n = !0);
                    }
                    return {
                      dynamic: n,
                      encoded: n
                        ? p(s)
                        : (0, i.concat)(s.map(({ encoded: e }) => e)),
                    };
                  })(g, { param: f });
                if ("address" === f.type) {
                  var m = g;
                  if (!(0, o.isAddress)(m))
                    throw new r.InvalidAddressError({ address: m });
                  return {
                    dynamic: !1,
                    encoded: (0, a.padHex)(m.toLowerCase()),
                  };
                }
                if ("bool" === f.type) {
                  var y = g;
                  if ("boolean" != typeof y)
                    throw new n.BaseError(
                      `Invalid boolean value: "${y}" (type: ${typeof y}). Expected: \`true\` or \`false\`.`
                    );
                  return {
                    dynamic: !1,
                    encoded: (0, a.padHex)((0, l.boolToHex)(y)),
                  };
                }
                if (f.type.startsWith("uint") || f.type.startsWith("int")) {
                  let e = f.type.startsWith("int"),
                    [, , t = "256"] = d.exec(f.type) ?? [];
                  return (function (e, { signed: t, size: r = 256 }) {
                    if ("number" == typeof r) {
                      let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        o = t ? -n - 1n : 0n;
                      if (e > n || e < o)
                        throw new s.IntegerOutOfRangeError({
                          max: n.toString(),
                          min: o.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: (0, l.numberToHex)(e, { size: 32, signed: t }),
                    };
                  })(g, { signed: e, size: Number(t) });
                }
                if (f.type.startsWith("bytes"))
                  return (function (e, { param: r }) {
                    let [, n] = r.type.split("bytes"),
                      s = (0, u.size)(e);
                    if (!n) {
                      let t = e;
                      return (
                        s % 32 != 0 &&
                          (t = (0, a.padHex)(t, {
                            dir: "right",
                            size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                          })),
                        {
                          dynamic: !0,
                          encoded: (0, i.concat)([
                            (0, a.padHex)((0, l.numberToHex)(s, { size: 32 })),
                            t,
                          ]),
                        }
                      );
                    }
                    if (s !== Number.parseInt(n, 10))
                      throw new t.AbiEncodingBytesSizeMismatchError({
                        expectedSize: Number.parseInt(n, 10),
                        value: e,
                      });
                    return {
                      dynamic: !1,
                      encoded: (0, a.padHex)(e, { dir: "right" }),
                    };
                  })(g, { param: f });
                if ("string" === f.type) {
                  var v = g;
                  let e = (0, l.stringToHex)(v),
                    t = Math.ceil((0, u.size)(e) / 32),
                    r = [];
                  for (let n = 0; n < t; n++)
                    r.push(
                      (0, a.padHex)((0, c.slice)(e, 32 * n, (n + 1) * 32), {
                        dir: "right",
                      })
                    );
                  return {
                    dynamic: !0,
                    encoded: (0, i.concat)([
                      (0, a.padHex)(
                        (0, l.numberToHex)((0, u.size)(e), { size: 32 })
                      ),
                      ...r,
                    ]),
                  };
                }
                throw new t.InvalidAbiEncodingTypeError(f.type, {
                  docsPath: "/docs/contract/encodeAbiParameters",
                });
              })({ param: e[b], value: f[b] })
            );
          return g;
        })({ params: e, values: f })
      );
      return 0 === g.length ? "0x" : g;
    }
    e.s(
      [
        "arrayRegex",
        0,
        /^(.*)\[([0-9]*)\]$/,
        "bytesRegex",
        0,
        /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        "integerRegex",
        0,
        d,
      ],
      342692
    );
    function p(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: n, encoded: s } = e[r];
        n ? (t += 32) : (t += (0, u.size)(s));
      }
      let r = [],
        n = [],
        s = 0;
      for (let o = 0; o < e.length; o++) {
        let { dynamic: i, encoded: a } = e[o];
        i
          ? (r.push((0, l.numberToHex)(t + s, { size: 32 })),
            n.push(a),
            (s += (0, u.size)(a)))
          : r.push(a);
      }
      return (0, i.concat)([...r, ...n]);
    }
    function h(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    e.s(
      ["encodeAbiParameters", () => f, "getArrayComponents", () => h],
      704434
    );
  },
  879617,
  (e) => {
    "use strict";
    var t = e.i(790063),
      r = e.i(926336);
    e.s([
      "toFunctionSelector",
      0,
      (e) => (0, t.slice)((0, r.toSignatureHash)(e), 0, 4),
    ]);
  },
  656679,
  627173,
  237497,
  (e) => {
    "use strict";
    var t = e.i(147526),
      r = e.i(704434),
      n = e.i(70204),
      s = e.i(879617),
      o = e.i(332881),
      i = e.i(880841),
      a = e.i(796516),
      u = e.i(774620);
    function c(e) {
      let t,
        { abi: r, args: o = [], name: c } = e,
        l = (0, i.isHex)(c, { strict: !1 }),
        d = r.filter((e) =>
          l
            ? "function" === e.type
              ? (0, s.toFunctionSelector)(e) === c
              : "event" === e.type && (0, u.toEventSelector)(e) === c
            : "name" in e && e.name === c
        );
      if (0 !== d.length) {
        if (1 === d.length) return d[0];
        for (let e of d) {
          if ("inputs" in e) {
            if (!o || 0 === o.length) {
              if (!e.inputs || 0 === e.inputs.length) return e;
              continue;
            }
            if (
              e.inputs &&
              0 !== e.inputs.length &&
              e.inputs.length === o.length &&
              o.every((t, r) => {
                let n = "inputs" in e && e.inputs[r];
                return (
                  !!n &&
                  (function e(t, r) {
                    let n = typeof t,
                      s = r.type;
                    switch (s) {
                      case "address":
                        return (0, a.isAddress)(t, { strict: !1 });
                      case "bool":
                        return "boolean" === n;
                      case "function":
                      case "string":
                        return "string" === n;
                      default:
                        if ("tuple" === s && "components" in r)
                          return Object.values(r.components).every(
                            (r, s) =>
                              "object" === n && e(Object.values(t)[s], r)
                          );
                        if (
                          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                            s
                          )
                        )
                          return "number" === n || "bigint" === n;
                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(s))
                          return "string" === n || t instanceof Uint8Array;
                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(s))
                          return (
                            Array.isArray(t) &&
                            t.every((t) =>
                              e(t, {
                                ...r,
                                type: s.replace(/(\[[0-9]{0,}\])$/, ""),
                              })
                            )
                          );
                        return !1;
                    }
                  })(t, n)
                );
              })
            ) {
              if (t && "inputs" in t && t.inputs) {
                let r = (function e(t, r, n) {
                  for (let s in t) {
                    let o = t[s],
                      i = r[s];
                    if (
                      "tuple" === o.type &&
                      "tuple" === i.type &&
                      "components" in o &&
                      "components" in i
                    )
                      return e(o.components, i.components, n[s]);
                    let u = [o.type, i.type];
                    if (
                      (u.includes("address") && u.includes("bytes20")) ||
                      (((u.includes("address") && u.includes("string")) ||
                        (u.includes("address") && u.includes("bytes"))) &&
                        (0, a.isAddress)(n[s], { strict: !1 }))
                    )
                      return u;
                  }
                })(e.inputs, t.inputs, o);
                if (r)
                  throw new n.AbiItemAmbiguityError(
                    { abiItem: e, type: r[0] },
                    { abiItem: t, type: r[1] }
                  );
              }
              t = e;
            }
          }
        }
        return t || d[0];
      }
    }
    e.s(["getAbiItem", () => c], 627173);
    let l = "/docs/contract/encodeFunctionData";
    function d(e) {
      let { abi: t, args: r, functionName: i } = e,
        a = t[0];
      if (i) {
        let e = c({ abi: t, args: r, name: i });
        if (!e) throw new n.AbiFunctionNotFoundError(i, { docsPath: l });
        a = e;
      }
      if ("function" !== a.type)
        throw new n.AbiFunctionNotFoundError(void 0, { docsPath: l });
      return {
        abi: [a],
        functionName: (0, s.toFunctionSelector)((0, o.formatAbiItem)(a)),
      };
    }
    function f(e) {
      let { args: n } = e,
        { abi: s, functionName: o } =
          1 === e.abi.length && e.functionName?.startsWith("0x") ? e : d(e),
        i = s[0],
        a =
          "inputs" in i && i.inputs
            ? (0, r.encodeAbiParameters)(i.inputs, n ?? [])
            : void 0;
      return (0, t.concatHex)([o, a ?? "0x"]);
    }
    e.s(["prepareEncodeFunctionData", () => d], 237497),
      e.s(["encodeFunctionData", () => f], 656679);
  },
]);
