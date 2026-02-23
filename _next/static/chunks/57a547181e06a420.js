(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  917105,
  (e) => {
    "use strict";
    var t = e.i(815373),
      r = e.i(61460),
      i = e.i(902094),
      n = e.i(88776);
    function a(e) {
      let a;
      if ("string" == typeof e) a = (0, n.parseSignature)(e);
      else {
        let t = (0, i.parseStructs)(e),
          o = e.length;
        for (let i = 0; i < o; i++) {
          let o = e[i];
          if (!(0, r.isStructSignature)(o)) {
            a = (0, n.parseSignature)(o, t);
            break;
          }
        }
      }
      if (!a) throw new t.InvalidAbiItemError({ signature: e });
      return a;
    }
    e.s(["parseAbiItem", () => a]);
  },
  621491,
  (e) => {
    "use strict";
    var t = e.i(589513),
      r = e.i(61460),
      i = e.i(902094),
      n = e.i(88776);
    function a(e) {
      let a = [];
      if ("string" == typeof e) {
        let t = (0, n.splitParameters)(e),
          i = t.length;
        for (let e = 0; e < i; e++)
          a.push((0, n.parseAbiParameter)(t[e], { modifiers: r.modifiers }));
      } else {
        let t = (0, i.parseStructs)(e),
          o = e.length;
        for (let i = 0; i < o; i++) {
          let o = e[i];
          if ((0, r.isStructSignature)(o)) continue;
          let s = (0, n.splitParameters)(o),
            u = s.length;
          for (let e = 0; e < u; e++)
            a.push(
              (0, n.parseAbiParameter)(s[e], {
                modifiers: r.modifiers,
                structs: t,
              })
            );
        }
      }
      if (0 === a.length) throw new t.InvalidAbiParametersError({ params: e });
      return a;
    }
    e.s(["parseAbiParameters", () => a]);
  },
  467125,
  (e) => {
    "use strict";
    function t(e, t, r) {
      let i = e[t.name];
      if ("function" == typeof i) return i;
      let n = e[r];
      return "function" == typeof n ? n : (r) => t(e, r);
    }
    e.s(["getAction", () => t]);
  },
  807749,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(569934),
      i = e.i(878023),
      n = e.i(95767),
      a = e.i(383856);
    function o(
      e,
      { abi: o, address: s, args: u, docsPath: l, functionName: c, sender: f }
    ) {
      let d =
          e instanceof i.RawContractError
            ? e
            : e instanceof r.BaseError
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
        { code: h, data: p, details: m, message: b, shortMessage: g } = d,
        y =
          e instanceof t.AbiDecodingZeroDataError
            ? new i.ContractFunctionZeroDataError({ functionName: c })
            : ([3, a.InternalRpcError.code].includes(h) &&
                (p || m || b || g)) ||
              (h === a.InvalidInputRpcError.code &&
                "execution reverted" === m &&
                p)
            ? new i.ContractFunctionRevertedError({
                abi: o,
                data: "object" == typeof p ? p.data : p,
                functionName: c,
                message: d instanceof n.RpcRequestError ? m : g ?? b,
              })
            : e;
      return new i.ContractFunctionExecutionError(y, {
        abi: o,
        args: u,
        contractAddress: s,
        docsPath: l,
        functionName: c,
        sender: f,
      });
    }
    e.s(["getContractError", () => o]);
  },
  418217,
  781974,
  (e) => {
    "use strict";
    var t = e.i(823838),
      r = e.i(831095),
      i = e.i(880841),
      n = e.i(401319),
      a = e.i(450323),
      o = e.i(675107);
    async function s({ hash: t, signature: r }) {
      let s = (0, i.isHex)(t) ? t : (0, o.toHex)(t),
        { secp256k1: l } = await e.A(389892),
        c = (() => {
          if ("object" == typeof r && "r" in r && "s" in r) {
            let { r: e, s: t, v: i, yParity: n } = r,
              o = u(Number(n ?? i));
            return new l.Signature(
              (0, a.hexToBigInt)(e),
              (0, a.hexToBigInt)(t)
            ).addRecoveryBit(o);
          }
          let e = (0, i.isHex)(r) ? r : (0, o.toHex)(r);
          if (65 !== (0, n.size)(e)) throw Error("invalid signature length");
          let t = u((0, a.hexToNumber)(`0x${e.slice(130)}`));
          return l.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(t);
        })()
          .recoverPublicKey(s.substring(2))
          .toHex(!1);
      return `0x${c}`;
    }
    function u(e) {
      if (0 === e || 1 === e) return e;
      if (27 === e) return 0;
      if (28 === e) return 1;
      throw Error("Invalid yParityOrV value");
    }
    async function l({ hash: e, signature: i }) {
      var n;
      let a;
      return (
        (n = await s({ hash: e, signature: i })),
        (a = (0, r.keccak256)(`0x${n.substring(4)}`).substring(26)),
        (0, t.checksumAddress)(`0x${a}`)
      );
    }
    e.s(["recoverPublicKey", () => s], 781974),
      e.s(["recoverAddress", () => l], 418217);
  },
  70326,
  (e) => {
    "use strict";
    var t = e.i(569934),
      r = e.i(795),
      i = e.i(769936),
      n = e.i(675107);
    function a(e, t = "hex") {
      let o = (function e(t) {
          var r, n;
          let a, o, s, l;
          return Array.isArray(t)
            ? ((o = u(
                (a = (r = t.map((t) => e(t))).reduce((e, t) => e + t.length, 0))
              )),
              {
                length: a <= 55 ? 1 + a : 1 + o + a,
                encode(e) {
                  for (let { encode: t } of (a <= 55
                    ? e.pushByte(192 + a)
                    : (e.pushByte(247 + o),
                      1 === o
                        ? e.pushUint8(a)
                        : 2 === o
                        ? e.pushUint16(a)
                        : 3 === o
                        ? e.pushUint24(a)
                        : e.pushUint32(a)),
                  r))
                    t(e);
                },
              })
            : ((l = u(
                (s = "string" == typeof (n = t) ? (0, i.hexToBytes)(n) : n)
                  .length
              )),
              {
                length:
                  1 === s.length && s[0] < 128
                    ? 1
                    : s.length <= 55
                    ? 1 + s.length
                    : 1 + l + s.length,
                encode(e) {
                  (1 === s.length && s[0] < 128) ||
                    (s.length <= 55
                      ? e.pushByte(128 + s.length)
                      : (e.pushByte(183 + l),
                        1 === l
                          ? e.pushUint8(s.length)
                          : 2 === l
                          ? e.pushUint16(s.length)
                          : 3 === l
                          ? e.pushUint24(s.length)
                          : e.pushUint32(s.length))),
                    e.pushBytes(s);
                },
              });
        })(e),
        s = (0, r.createCursor)(new Uint8Array(o.length));
      return (o.encode(s), "hex" === t) ? (0, n.bytesToHex)(s.bytes) : s.bytes;
    }
    function o(e, t = "bytes") {
      return a(e, t);
    }
    function s(e, t = "hex") {
      return a(e, t);
    }
    function u(e) {
      if (e < 256) return 1;
      if (e < 65536) return 2;
      if (e < 0x1000000) return 3;
      if (e < 0x100000000) return 4;
      throw new t.BaseError("Length is too large.");
    }
    e.s(["bytesToRlp", () => o, "hexToRlp", () => s, "toRlp", () => a]);
  },
  290392,
  (e) => {
    "use strict";
    var t = e.i(418217),
      r = e.i(147526),
      i = e.i(769936),
      n = e.i(675107),
      a = e.i(70326),
      o = e.i(831095);
    async function s(e) {
      let { authorization: s, signature: u } = e;
      return (0, t.recoverAddress)({
        hash: (function (e) {
          let { chainId: t, nonce: s, to: u } = e,
            l = e.contractAddress ?? e.address,
            c = (0, o.keccak256)(
              (0, r.concatHex)([
                "0x05",
                (0, a.toRlp)([
                  t ? (0, n.numberToHex)(t) : "0x",
                  l,
                  s ? (0, n.numberToHex)(s) : "0x",
                ]),
              ])
            );
          return "bytes" === u ? (0, i.hexToBytes)(c) : c;
        })(s),
        signature: u ?? s,
      });
    }
    e.s(["recoverAuthorizationAddress", () => s], 290392);
  },
  205789,
  368698,
  (e) => {
    "use strict";
    var t = e.i(285973),
      r = e.i(976486),
      i = e.i(569934),
      n = e.i(393702);
    class a extends i.BaseError {
      constructor(
        e,
        {
          account: i,
          docsPath: a,
          chain: o,
          data: s,
          gas: u,
          gasPrice: l,
          maxFeePerGas: c,
          maxPriorityFeePerGas: f,
          nonce: d,
          to: h,
          value: p,
        }
      ) {
        const m = (0, n.prettyPrint)({
          from: i?.address,
          to: h,
          value:
            void 0 !== p &&
            `${(0, t.formatEther)(p)} ${o?.nativeCurrency?.symbol || "ETH"}`,
          data: s,
          gas: u,
          gasPrice: void 0 !== l && `${(0, r.formatGwei)(l)} gwei`,
          maxFeePerGas: void 0 !== c && `${(0, r.formatGwei)(c)} gwei`,
          maxPriorityFeePerGas: void 0 !== f && `${(0, r.formatGwei)(f)} gwei`,
          nonce: d,
        });
        super(e.shortMessage, {
          cause: e,
          docsPath: a,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Estimate Gas Arguments:",
            m,
          ].filter(Boolean),
          name: "EstimateGasExecutionError",
        }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.cause = e);
      }
    }
    e.s(["EstimateGasExecutionError", () => a], 368698);
    var o = e.i(853532),
      s = e.i(467078);
    function u(e, { docsPath: t, ...r }) {
      let i;
      return new a(
        (i = (0, s.getNodeError)(e, r)) instanceof o.UnknownNodeError ? e : i,
        { docsPath: t, ...r }
      );
    }
    e.s(["getEstimateGasError", () => u], 205789);
  },
  170222,
  57351,
  (e) => {
    "use strict";
    var t = e.i(976486),
      r = e.i(569934);
    class i extends r.BaseError {
      constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
          name: "BaseFeeScalarError",
        });
      }
    }
    class n extends r.BaseError {
      constructor() {
        super("Chain does not support EIP-1559 fees.", {
          name: "Eip1559FeesNotSupportedError",
        });
      }
    }
    class a extends r.BaseError {
      constructor({ maxPriorityFeePerGas: e }) {
        super(
          `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
          t.formatGwei)(e)} gwei).`,
          { name: "MaxFeePerGasTooLowError" }
        );
      }
    }
    e.s(
      [
        "BaseFeeScalarError",
        () => i,
        "Eip1559FeesNotSupportedError",
        () => n,
        "MaxFeePerGasTooLowError",
        () => a,
      ],
      170222
    );
    var o = r;
    class s extends o.BaseError {
      constructor({ blockHash: e, blockNumber: t }) {
        let r = "Block";
        e && (r = `Block at hash "${e}"`),
          t && (r = `Block at number "${t}"`),
          super(`${r} could not be found.`, { name: "BlockNotFoundError" });
      }
    }
    e.s(["BlockNotFoundError", () => s], 57351);
  },
  557874,
  982191,
  (e) => {
    "use strict";
    var t = e.i(445024),
      r = e.i(450323);
    let i = {
      "0x0": "legacy",
      "0x1": "eip2930",
      "0x2": "eip1559",
      "0x3": "eip4844",
      "0x4": "eip7702",
    };
    function n(e, t) {
      let n = {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        chainId: e.chainId ? (0, r.hexToNumber)(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas
          ? BigInt(e.maxFeePerBlobGas)
          : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas
          ? BigInt(e.maxPriorityFeePerGas)
          : void 0,
        nonce: e.nonce ? (0, r.hexToNumber)(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        type: e.type ? i[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0,
      };
      return (
        e.authorizationList &&
          (n.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            chainId: Number(e.chainId),
            nonce: Number(e.nonce),
            r: e.r,
            s: e.s,
            yParity: Number(e.yParity),
          }))),
        (n.yParity = (() => {
          if (e.yParity) return Number(e.yParity);
          if ("bigint" == typeof n.v) {
            if (0n === n.v || 27n === n.v) return 0;
            if (1n === n.v || 28n === n.v) return 1;
            if (n.v >= 35n) return +(n.v % 2n === 0n);
          }
        })()),
        "legacy" === n.type &&
          (delete n.accessList,
          delete n.maxFeePerBlobGas,
          delete n.maxFeePerGas,
          delete n.maxPriorityFeePerGas,
          delete n.yParity),
        "eip2930" === n.type &&
          (delete n.maxFeePerBlobGas,
          delete n.maxFeePerGas,
          delete n.maxPriorityFeePerGas),
        "eip1559" === n.type && delete n.maxFeePerBlobGas,
        n
      );
    }
    let a = (0, t.defineFormatter)("transaction", n);
    function o(e, t) {
      let r = (e.transactions ?? []).map((e) =>
        "string" == typeof e ? e : n(e)
      );
      return {
        ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: r,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
      };
    }
    e.s(
      [
        "defineTransaction",
        0,
        a,
        "formatTransaction",
        () => n,
        "transactionType",
        0,
        i,
      ],
      982191
    );
    let s = (0, t.defineFormatter)("block", o);
    e.s(["defineBlock", 0, s, "formatBlock", () => o], 557874);
  },
  972960,
  915588,
  111047,
  194720,
  (e) => {
    "use strict";
    var t = e.i(170222),
      r = e.i(467125),
      i = e.i(450323),
      n = e.i(57351),
      a = e.i(675107),
      o = e.i(557874);
    async function s(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: i = e.experimental_blockTag ?? "latest",
        includeTransactions: u,
      } = {}
    ) {
      let l = u ?? !1,
        c = void 0 !== r ? (0, a.numberToHex)(r) : void 0,
        f = null;
      if (
        !(f = t
          ? await e.request(
              { method: "eth_getBlockByHash", params: [t, l] },
              { dedupe: !0 }
            )
          : await e.request(
              { method: "eth_getBlockByNumber", params: [c || i, l] },
              { dedupe: !!c }
            ))
      )
        throw new n.BlockNotFoundError({ blockHash: t, blockNumber: r });
      return (e.chain?.formatters?.block?.format || o.formatBlock)(
        f,
        "getBlock"
      );
    }
    async function u(e) {
      return BigInt(await e.request({ method: "eth_gasPrice" }));
    }
    async function l(e, t) {
      return c(e, t);
    }
    async function c(e, n) {
      let { block: a, chain: o = e.chain, request: l } = n || {};
      try {
        let t = o?.fees?.maxPriorityFeePerGas ?? o?.fees?.defaultPriorityFee;
        if ("function" == typeof t) {
          let i = a || (await (0, r.getAction)(e, s, "getBlock")({})),
            n = await t({ block: i, client: e, request: l });
          if (null === n) throw Error();
          return n;
        }
        if (void 0 !== t) return t;
        let n = await e.request({ method: "eth_maxPriorityFeePerGas" });
        return (0, i.hexToBigInt)(n);
      } catch {
        let [i, n] = await Promise.all([
          a ? Promise.resolve(a) : (0, r.getAction)(e, s, "getBlock")({}),
          (0, r.getAction)(e, u, "getGasPrice")({}),
        ]);
        if ("bigint" != typeof i.baseFeePerGas)
          throw new t.Eip1559FeesNotSupportedError();
        let o = n - i.baseFeePerGas;
        if (o < 0n) return 0n;
        return o;
      }
    }
    async function f(e, t) {
      return d(e, t);
    }
    async function d(e, i) {
      let {
          block: n,
          chain: a = e.chain,
          request: o,
          type: l = "eip1559",
        } = i || {},
        f = await (async () =>
          "function" == typeof a?.fees?.baseFeeMultiplier
            ? a.fees.baseFeeMultiplier({ block: n, client: e, request: o })
            : a?.fees?.baseFeeMultiplier ?? 1.2)();
      if (f < 1) throw new t.BaseFeeScalarError();
      let d = f.toString().split(".")[1]?.length ?? 0,
        h = 10 ** d,
        p = (e) => (e * BigInt(Math.ceil(f * h))) / BigInt(h),
        m = n || (await (0, r.getAction)(e, s, "getBlock")({}));
      if ("function" == typeof a?.fees?.estimateFeesPerGas) {
        let t = await a.fees.estimateFeesPerGas({
          block: n,
          client: e,
          multiply: p,
          request: o,
          type: l,
        });
        if (null !== t) return t;
      }
      if ("eip1559" === l) {
        if ("bigint" != typeof m.baseFeePerGas)
          throw new t.Eip1559FeesNotSupportedError();
        let r =
            "bigint" == typeof o?.maxPriorityFeePerGas
              ? o.maxPriorityFeePerGas
              : await c(e, { block: m, chain: a, request: o }),
          i = p(m.baseFeePerGas);
        return {
          maxFeePerGas: o?.maxFeePerGas ?? i + r,
          maxPriorityFeePerGas: r,
        };
      }
      return {
        gasPrice:
          o?.gasPrice ?? p(await (0, r.getAction)(e, u, "getGasPrice")({})),
      };
    }
    e.s(["getBlock", () => s], 915588),
      e.s(["getGasPrice", () => u], 111047),
      e.s(
        [
          "estimateMaxPriorityFeePerGas",
          () => l,
          "internal_estimateMaxPriorityFeePerGas",
          () => c,
        ],
        194720
      ),
      e.s(
        ["estimateFeesPerGas", () => f, "internal_estimateFeesPerGas", () => d],
        972960
      );
  },
  937445,
  (e) => {
    "use strict";
    var t = e.i(450323),
      r = e.i(675107);
    async function i(
      e,
      { address: i, blockTag: n = "latest", blockNumber: a }
    ) {
      let o = await e.request(
        {
          method: "eth_getTransactionCount",
          params: [i, "bigint" == typeof a ? (0, r.numberToHex)(a) : n],
        },
        { dedupe: !!a }
      );
      return (0, t.hexToNumber)(o);
    }
    e.s(["getTransactionCount", () => i]);
  },
  94371,
  49810,
  862243,
  913028,
  883031,
  556047,
  86741,
  408910,
  310538,
  576213,
  (e) => {
    "use strict";
    var t = e.i(769936),
      r = e.i(675107);
    function i(e) {
      let { kzg: i } = e,
        n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        a =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, t.hexToBytes)(e))
            : e.blobs,
        o = [];
      for (let e of a) o.push(Uint8Array.from(i.blobToKzgCommitment(e)));
      return "bytes" === n ? o : o.map((e) => (0, r.bytesToHex)(e));
    }
    function n(e) {
      let { kzg: i } = e,
        n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        a =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, t.hexToBytes)(e))
            : e.blobs,
        o =
          "string" == typeof e.commitments[0]
            ? e.commitments.map((e) => (0, t.hexToBytes)(e))
            : e.commitments,
        s = [];
      for (let e = 0; e < a.length; e++) {
        let t = a[e],
          r = o[e];
        s.push(Uint8Array.from(i.computeBlobKzgProof(t, r)));
      }
      return "bytes" === n ? s : s.map((e) => (0, r.bytesToHex)(e));
    }
    e.s(["blobsToCommitments", () => i], 94371),
      e.s(["blobsToProofs", () => n], 49810);
    var a = e.i(280355),
      o = e.i(880841);
    function s(e, i) {
      let n = (0, a.sha256)(
        (0, o.isHex)(e, { strict: !1 }) ? (0, t.toBytes)(e) : e
      );
      return "bytes" === (i || "hex") ? n : (0, r.toHex)(n);
    }
    function u(e) {
      let { commitment: t, version: i = 1 } = e,
        n = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
        a = s(t, "bytes");
      return a.set([i], 0), "bytes" === n ? a : (0, r.bytesToHex)(a);
    }
    function l(e) {
      let { commitments: t, version: r } = e,
        i = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
        n = [];
      for (let e of t) n.push(u({ commitment: e, to: i, version: r }));
      return n;
    }
    e.s(["sha256", () => s], 862243),
      e.s(["commitmentToVersionedHash", () => u], 913028),
      e.s(["commitmentsToVersionedHashes", () => l], 883031);
    e.s(["versionedHashVersionKzg", 0, 1], 556047);
    var c = e.i(569934);
    class f extends c.BaseError {
      constructor({ maxSize: e, size: t }) {
        super("Blob size is too large.", {
          metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
          name: "BlobSizeTooLargeError",
        });
      }
    }
    class d extends c.BaseError {
      constructor() {
        super("Blob data must not be empty.", { name: "EmptyBlobError" });
      }
    }
    class h extends c.BaseError {
      constructor({ hash: e, size: t }) {
        super(`Versioned hash "${e}" size is invalid.`, {
          metaMessages: ["Expected: 32", `Received: ${t}`],
          name: "InvalidVersionedHashSizeError",
        });
      }
    }
    class p extends c.BaseError {
      constructor({ hash: e, version: t }) {
        super(`Versioned hash "${e}" version is invalid.`, {
          metaMessages: ["Expected: 1", `Received: ${t}`],
          name: "InvalidVersionedHashVersionError",
        });
      }
    }
    e.s(
      [
        "BlobSizeTooLargeError",
        () => f,
        "EmptyBlobError",
        () => d,
        "InvalidVersionedHashSizeError",
        () => h,
        "InvalidVersionedHashVersionError",
        () => p,
      ],
      86741
    );
    var m = e.i(795),
      b = e.i(401319);
    function g(e) {
      let i = e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
        n = "string" == typeof e.data ? (0, t.hexToBytes)(e.data) : e.data,
        a = (0, b.size)(n);
      if (!a) throw new d();
      if (a > 761855) throw new f({ maxSize: 761855, size: a });
      let o = [],
        s = !0,
        u = 0;
      for (; s; ) {
        let e = (0, m.createCursor)(new Uint8Array(131072)),
          t = 0;
        for (; t < 4096; ) {
          let r = n.slice(u, u + 31);
          if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
            e.pushByte(128), (s = !1);
            break;
          }
          t++, (u += 31);
        }
        o.push(e);
      }
      return "bytes" === i
        ? o.map((e) => e.bytes)
        : o.map((e) => (0, r.bytesToHex)(e.bytes));
    }
    function y(e) {
      let { data: t, kzg: r, to: a } = e,
        o = e.blobs ?? g({ data: t, to: a }),
        s = e.commitments ?? i({ blobs: o, kzg: r, to: a }),
        u = e.proofs ?? n({ blobs: o, commitments: s, kzg: r, to: a }),
        l = [];
      for (let e = 0; e < o.length; e++)
        l.push({ blob: o[e], commitment: s[e], proof: u[e] });
      return l;
    }
    e.s(["toBlobs", () => g], 408910), e.s(["toBlobSidecars", () => y], 310538);
    var w = e.i(393702);
    function v(e) {
      if (e.type) return e.type;
      if (void 0 !== e.authorizationList) return "eip7702";
      if (
        void 0 !== e.blobs ||
        void 0 !== e.blobVersionedHashes ||
        void 0 !== e.maxFeePerBlobGas ||
        void 0 !== e.sidecars
      )
        return "eip4844";
      if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
        return "eip1559";
      if (void 0 !== e.gasPrice)
        return void 0 !== e.accessList ? "eip2930" : "legacy";
      throw new w.InvalidSerializableTransactionError({ transaction: e });
    }
    e.s(["getTransactionType", () => v], 576213);
  },
  10725,
  (e) => {
    "use strict";
    var t = e.i(853532),
      r = e.i(393702),
      i = e.i(467078);
    function n(e, { docsPath: n, ...a }) {
      let o,
        s =
          (o = (0, i.getNodeError)(e, a)) instanceof t.UnknownNodeError ? e : o;
      return new r.TransactionExecutionError(s, { docsPath: n, ...a });
    }
    e.s(["getTransactionError", () => n]);
  },
  975948,
  (e) => {
    "use strict";
    var t = e.i(450323);
    async function r(e) {
      let r = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
      return (0, t.hexToNumber)(r);
    }
    e.s(["getChainId", () => r]);
  },
  368941,
  818249,
  (e) => {
    "use strict";
    e.s(
      ["defaultParameters", () => x, "prepareTransactionRequest", () => P],
      368941
    );
    var t = e.i(189991),
      r = e.i(972960),
      i = e.i(484734),
      n = e.i(915588),
      a = e.i(937445),
      o = e.i(170222),
      s = e.i(94371),
      u = e.i(49810),
      l = e.i(883031),
      c = e.i(310538),
      f = e.i(467125),
      d = e.i(976677),
      h = e.i(353464),
      p = e.i(576213),
      m = e.i(10725),
      b = e.i(264404),
      g = e.i(982191),
      y = e.i(190521),
      w = e.i(975948);
    async function v(e, r) {
      let {
          account: i = e.account,
          accessList: a,
          authorizationList: s,
          chain: u = e.chain,
          blobVersionedHashes: l,
          blobs: c,
          data: d,
          gas: p,
          gasPrice: v,
          maxFeePerBlobGas: x,
          maxFeePerGas: E,
          maxPriorityFeePerGas: B,
          nonce: P,
          nonceManager: A,
          to: I,
          type: S,
          value: T,
          ...N
        } = r,
        R = await (async () => {
          if (!i || !A || void 0 !== P) return P;
          let r = (0, t.parseAccount)(i),
            n = u
              ? u.id
              : await (0, f.getAction)(e, w.getChainId, "getChainId")({});
          return await A.consume({ address: r.address, chainId: n, client: e });
        })();
      (0, h.assertRequest)(r);
      let F = u?.formatters?.transactionRequest?.format,
        z = (F || y.formatTransactionRequest)(
          {
            ...(0, b.extract)(N, { format: F }),
            account: i ? (0, t.parseAccount)(i) : void 0,
            accessList: a,
            authorizationList: s,
            blobs: c,
            blobVersionedHashes: l,
            data: d,
            gas: p,
            gasPrice: v,
            maxFeePerBlobGas: x,
            maxFeePerGas: E,
            maxPriorityFeePerGas: B,
            nonce: R,
            to: I,
            type: S,
            value: T,
          },
          "fillTransaction"
        );
      try {
        let t = await e.request({ method: "eth_fillTransaction", params: [z] }),
          i = (u?.formatters?.transaction?.format || g.formatTransaction)(t.tx);
        delete i.blockHash,
          delete i.blockNumber,
          delete i.r,
          delete i.s,
          delete i.transactionIndex,
          delete i.v,
          delete i.yParity,
          (i.data = i.input),
          i.gas && (i.gas = r.gas ?? i.gas),
          i.gasPrice && (i.gasPrice = r.gasPrice ?? i.gasPrice),
          i.maxFeePerBlobGas &&
            (i.maxFeePerBlobGas = r.maxFeePerBlobGas ?? i.maxFeePerBlobGas),
          i.maxFeePerGas && (i.maxFeePerGas = r.maxFeePerGas ?? i.maxFeePerGas),
          i.maxPriorityFeePerGas &&
            (i.maxPriorityFeePerGas =
              r.maxPriorityFeePerGas ?? i.maxPriorityFeePerGas),
          i.nonce && (i.nonce = r.nonce ?? i.nonce);
        let a = await (async () => {
          if ("function" == typeof u?.fees?.baseFeeMultiplier) {
            let t = await (0, f.getAction)(e, n.getBlock, "getBlock")({});
            return u.fees.baseFeeMultiplier({
              block: t,
              client: e,
              request: r,
            });
          }
          return u?.fees?.baseFeeMultiplier ?? 1.2;
        })();
        if (a < 1) throw new o.BaseFeeScalarError();
        let s = a.toString().split(".")[1]?.length ?? 0,
          l = 10 ** s,
          c = (e) => (e * BigInt(Math.ceil(a * l))) / BigInt(l);
        return (
          i.maxFeePerGas &&
            !r.maxFeePerGas &&
            (i.maxFeePerGas = c(i.maxFeePerGas)),
          i.gasPrice && !r.gasPrice && (i.gasPrice = c(i.gasPrice)),
          { raw: t.raw, transaction: { from: z.from, ...i } }
        );
      } catch (t) {
        throw (0, m.getTransactionError)(t, { ...r, chain: e.chain });
      }
    }
    e.s(["fillTransaction", () => v], 818249);
    let x = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"],
      E = new Map(),
      B = new d.LruMap(128);
    async function P(e, d) {
      let m,
        b,
        g = d;
      (g.account ??= e.account), (g.parameters ??= x);
      let {
          account: y,
          chain: P = e.chain,
          nonceManager: A,
          parameters: I,
        } = g,
        S =
          "function" == typeof P?.prepareTransactionRequest
            ? {
                fn: P.prepareTransactionRequest,
                runAt: ["beforeFillTransaction"],
              }
            : Array.isArray(P?.prepareTransactionRequest)
            ? {
                fn: P.prepareTransactionRequest[0],
                runAt: P.prepareTransactionRequest[1].runAt,
              }
            : void 0;
      async function T() {
        return m
          ? m
          : void 0 !== g.chainId
          ? g.chainId
          : P
          ? P.id
          : (m = await (0, f.getAction)(e, w.getChainId, "getChainId")({}));
      }
      let N = y ? (0, t.parseAccount)(y) : y,
        R = g.nonce;
      if (I.includes("nonce") && void 0 === R && N && A) {
        let t = await T();
        R = await A.consume({ address: N.address, chainId: t, client: e });
      }
      S?.fn &&
        S.runAt?.includes("beforeFillTransaction") &&
        ((g = await S.fn(
          { ...g, chain: P },
          { phase: "beforeFillTransaction" }
        )),
        (R ??= g.nonce));
      let F =
        (!(I.includes("blobVersionedHashes") || I.includes("sidecars")) ||
          !g.kzg ||
          !g.blobs) &&
        !1 !== B.get(e.uid) &&
        ["fees", "gas"].some((e) => I.includes(e)) &&
        ((I.includes("chainId") && "number" != typeof g.chainId) ||
          (I.includes("nonce") && "number" != typeof R) ||
          (I.includes("fees") &&
            "bigint" != typeof g.gasPrice &&
            ("bigint" != typeof g.maxFeePerGas ||
              "bigint" != typeof g.maxPriorityFeePerGas)) ||
          (I.includes("gas") && "bigint" != typeof g.gas))
          ? await (0, f.getAction)(
              e,
              v,
              "fillTransaction"
            )({ ...g, nonce: R })
              .then((t) => {
                let {
                  chainId: r,
                  from: i,
                  gas: n,
                  gasPrice: a,
                  nonce: o,
                  maxFeePerBlobGas: s,
                  maxFeePerGas: u,
                  maxPriorityFeePerGas: l,
                  type: c,
                  ...f
                } = t.transaction;
                return (
                  B.set(e.uid, !0),
                  {
                    ...g,
                    ...(i ? { from: i } : {}),
                    ...(c ? { type: c } : {}),
                    ...(void 0 !== r ? { chainId: r } : {}),
                    ...(void 0 !== n ? { gas: n } : {}),
                    ...(void 0 !== a ? { gasPrice: a } : {}),
                    ...(void 0 !== o ? { nonce: o } : {}),
                    ...(void 0 !== s ? { maxFeePerBlobGas: s } : {}),
                    ...(void 0 !== u ? { maxFeePerGas: u } : {}),
                    ...(void 0 !== l ? { maxPriorityFeePerGas: l } : {}),
                    ...("nonceKey" in f && void 0 !== f.nonceKey
                      ? { nonceKey: f.nonceKey }
                      : {}),
                  }
                );
              })
              .catch(
                (t) => (
                  "TransactionExecutionError" !== t.name ||
                    (t.walk?.(
                      (e) =>
                        "MethodNotFoundRpcError" === e.name ||
                        "MethodNotSupportedRpcError" === e.name
                    ) &&
                      B.set(e.uid, !1)),
                  g
                )
              )
          : g;
      R ??= F.nonce;
      let {
        blobs: z,
        gas: C,
        kzg: O,
        type: k,
      } = (g = {
        ...F,
        ...(N ? { from: N?.address } : {}),
        ...(R ? { nonce: R } : {}),
      });
      async function U() {
        return (
          b ||
          (b = await (0, f.getAction)(
            e,
            n.getBlock,
            "getBlock"
          )({ blockTag: "latest" }))
        );
      }
      if (
        (S?.fn &&
          S.runAt?.includes("beforeFillParameters") &&
          (g = await S.fn(
            { ...g, chain: P },
            { phase: "beforeFillParameters" }
          )),
        I.includes("nonce") &&
          void 0 === R &&
          N &&
          !A &&
          (g.nonce = await (0, f.getAction)(
            e,
            a.getTransactionCount,
            "getTransactionCount"
          )({ address: N.address, blockTag: "pending" })),
        (I.includes("blobVersionedHashes") || I.includes("sidecars")) && z && O)
      ) {
        let e = (0, s.blobsToCommitments)({ blobs: z, kzg: O });
        if (I.includes("blobVersionedHashes")) {
          let t = (0, l.commitmentsToVersionedHashes)({
            commitments: e,
            to: "hex",
          });
          g.blobVersionedHashes = t;
        }
        if (I.includes("sidecars")) {
          let t = (0, u.blobsToProofs)({ blobs: z, commitments: e, kzg: O }),
            r = (0, c.toBlobSidecars)({
              blobs: z,
              commitments: e,
              proofs: t,
              to: "hex",
            });
          g.sidecars = r;
        }
      }
      if (
        (I.includes("chainId") && (g.chainId = await T()),
        (I.includes("fees") || I.includes("type")) && void 0 === k)
      )
        try {
          g.type = (0, p.getTransactionType)(g);
        } catch {
          let t = E.get(e.uid);
          if (void 0 === t) {
            let r = await U();
            (t = "bigint" == typeof r?.baseFeePerGas), E.set(e.uid, t);
          }
          g.type = t ? "eip1559" : "legacy";
        }
      if (I.includes("fees"))
        if ("legacy" !== g.type && "eip2930" !== g.type) {
          if (void 0 === g.maxFeePerGas || void 0 === g.maxPriorityFeePerGas) {
            let t = await U(),
              { maxFeePerGas: i, maxPriorityFeePerGas: n } = await (0,
              r.internal_estimateFeesPerGas)(e, {
                block: t,
                chain: P,
                request: g,
              });
            if (
              void 0 === g.maxPriorityFeePerGas &&
              g.maxFeePerGas &&
              g.maxFeePerGas < n
            )
              throw new o.MaxFeePerGasTooLowError({ maxPriorityFeePerGas: n });
            (g.maxPriorityFeePerGas = n), (g.maxFeePerGas = i);
          }
        } else {
          if (void 0 !== g.maxFeePerGas || void 0 !== g.maxPriorityFeePerGas)
            throw new o.Eip1559FeesNotSupportedError();
          if (void 0 === g.gasPrice) {
            let t = await U(),
              { gasPrice: i } = await (0, r.internal_estimateFeesPerGas)(e, {
                block: t,
                chain: P,
                request: g,
                type: "legacy",
              });
            g.gasPrice = i;
          }
        }
      return (
        I.includes("gas") &&
          void 0 === C &&
          (g.gas = await (0, f.getAction)(
            e,
            i.estimateGas,
            "estimateGas"
          )({
            ...g,
            account: N,
            prepare: N?.type === "local" ? [] : ["blobVersionedHashes"],
          })),
        S?.fn &&
          S.runAt?.includes("afterFillParameters") &&
          (g = await S.fn(
            { ...g, chain: P },
            { phase: "afterFillParameters" }
          )),
        (0, h.assertRequest)(g),
        delete g.parameters,
        g
      );
    }
  },
  484734,
  (e) => {
    "use strict";
    e.s(["estimateGas", () => f]);
    var t = e.i(189991),
      r = e.i(569934),
      i = e.i(290392),
      n = e.i(675107),
      a = e.i(205789),
      o = e.i(264404),
      s = e.i(190521),
      u = e.i(826051),
      l = e.i(353464),
      c = e.i(368941);
    async function f(e, f) {
      let { account: d = e.account, prepare: h = !0 } = f,
        p = d ? (0, t.parseAccount)(d) : void 0,
        m = Array.isArray(h)
          ? h
          : p?.type !== "local"
          ? ["blobVersionedHashes"]
          : void 0;
      try {
        let t = await (async () =>
            f.to
              ? f.to
              : f.authorizationList && f.authorizationList.length > 0
              ? await (0, i.recoverAuthorizationAddress)({
                  authorization: f.authorizationList[0],
                }).catch(() => {
                  throw new r.BaseError(
                    "`to` is required. Could not infer from `authorizationList`"
                  );
                })
              : void 0)(),
          {
            accessList: a,
            authorizationList: d,
            blobs: b,
            blobVersionedHashes: g,
            blockNumber: y,
            blockTag: w,
            data: v,
            gas: x,
            gasPrice: E,
            maxFeePerBlobGas: B,
            maxFeePerGas: P,
            maxPriorityFeePerGas: A,
            nonce: I,
            value: S,
            stateOverride: T,
            ...N
          } = h
            ? await (0, c.prepareTransactionRequest)(e, {
                ...f,
                parameters: m,
                to: t,
              })
            : f;
        if (x && f.gas !== x) return x;
        let R = ("bigint" == typeof y ? (0, n.numberToHex)(y) : void 0) || w,
          F = (0, u.serializeStateOverride)(T);
        (0, l.assertRequest)(f);
        let z = e.chain?.formatters?.transactionRequest?.format,
          C = (z || s.formatTransactionRequest)(
            {
              ...(0, o.extract)(N, { format: z }),
              account: p,
              accessList: a,
              authorizationList: d,
              blobs: b,
              blobVersionedHashes: g,
              data: v,
              gasPrice: E,
              maxFeePerBlobGas: B,
              maxFeePerGas: P,
              maxPriorityFeePerGas: A,
              nonce: I,
              to: t,
              value: S,
            },
            "estimateGas"
          );
        return BigInt(
          await e.request({
            method: "eth_estimateGas",
            params: F
              ? [C, R ?? e.experimental_blockTag ?? "latest", F]
              : R
              ? [C, R]
              : [C],
          })
        );
      } catch (t) {
        throw (0, a.getEstimateGasError)(t, {
          ...f,
          account: p,
          chain: e.chain,
        });
      }
    }
  },
  856324,
  (e) => {
    "use strict";
    function t(e, { args: r, eventName: i } = {}) {
      return {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        blockTimestamp: e.blockTimestamp
          ? BigInt(e.blockTimestamp)
          : null === e.blockTimestamp
          ? null
          : void 0,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        ...(i ? { args: r, eventName: i } : {}),
      };
    }
    e.s(["formatLog", () => t]);
  },
  388750,
  (e) => {
    "use strict";
    var t = e.i(600547),
      r = e.i(656679),
      i = e.i(807749),
      n = e.i(467125),
      a = e.i(989509);
    async function o(e, o) {
      let { abi: s, address: u, args: l, functionName: c, ...f } = o,
        d = (0, r.encodeFunctionData)({ abi: s, args: l, functionName: c });
      try {
        let { data: r } = await (0, n.getAction)(
          e,
          a.call,
          "call"
        )({ ...f, data: d, to: u });
        return (0, t.decodeFunctionResult)({
          abi: s,
          args: l,
          functionName: c,
          data: r || "0x",
        });
      } catch (e) {
        throw (0, i.getContractError)(e, {
          abi: s,
          address: u,
          args: l,
          docsPath: "/docs/contract/readContract",
          functionName: c,
        });
      }
    }
    e.s(["readContract", () => o]);
  },
  43473,
  976215,
  (e) => {
    "use strict";
    let t = new Map(),
      r = new Map(),
      i = 0;
    function n(e, n, a) {
      let o = ++i,
        s = () => t.get(e) || [],
        u = () => {
          let i,
            n = s();
          if (!n.some((e) => e.id === o)) return;
          let a = r.get(e);
          if (1 === n.length && a) {
            let e = a();
            e instanceof Promise && e.catch(() => {});
          }
          (i = s()),
            t.set(
              e,
              i.filter((e) => e.id !== o)
            );
        },
        l = s();
      if ((t.set(e, [...l, { id: o, fns: n }]), l && l.length > 0)) return u;
      let c = {};
      for (let e in n)
        c[e] = (...t) => {
          let r = s();
          if (0 !== r.length) for (let i of r) i.fns[e]?.(...t);
        };
      let f = a(c);
      return "function" == typeof f && r.set(e, f), u;
    }
    e.s(["observe", () => n], 43473);
    var a = e.i(588233);
    function o(e, { emitOnBegin: t, initialWaitTime: r, interval: i }) {
      let n = !0,
        o = () => (n = !1);
      return (
        (async () => {
          let s;
          t && (s = await e({ unpoll: o }));
          let u = (await r?.(s)) ?? i;
          await (0, a.wait)(u);
          let l = async () => {
            n && (await e({ unpoll: o }), await (0, a.wait)(i), l());
          };
          l();
        })(),
        o
      );
    }
    e.s(["poll", () => o], 976215);
  },
  472083,
  (e) => {
    "use strict";
    let t = new Map(),
      r = new Map();
    async function i(e, { cacheKey: i, cacheTime: n = 1 / 0 }) {
      let a,
        o,
        s,
        u =
          ((o = (a = (e, t) => ({
            clear: () => t.delete(e),
            get: () => t.get(e),
            set: (r) => t.set(e, r),
          }))(i, t)),
          {
            clear: () => {
              o.clear(), s.clear();
            },
            promise: o,
            response: (s = a(i, r)),
          }),
        l = u.response.get();
      if (l && n > 0 && Date.now() - l.created.getTime() < n) return l.data;
      let c = u.promise.get();
      c || ((c = e()), u.promise.set(c));
      try {
        let e = await c;
        return u.response.set({ created: new Date(), data: e }), e;
      } finally {
        u.promise.clear();
      }
    }
    e.s(["withCache", () => i]);
  },
  611573,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ docsPath: e } = {}) {
        super(
          "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
          { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor({ docsPath: e, metaMessages: t, type: r }) {
        super(`Account type "${r}" is not supported.`, {
          docsPath: e,
          metaMessages: t,
          name: "AccountTypeNotSupportedError",
        });
      }
    }
    e.s([
      "AccountNotFoundError",
      () => r,
      "AccountTypeNotSupportedError",
      () => i,
    ]);
  },
  942305,
  (e) => {
    "use strict";
    var t = e.i(505880);
    function r({ chain: e, currentChainId: r }) {
      if (!e) throw new t.ChainNotFoundError();
      if (r !== e.id)
        throw new t.ChainMismatchError({ chain: e, currentChainId: r });
    }
    e.s(["assertCurrentChain", () => r]);
  },
  638291,
  (e) => {
    "use strict";
    async function t(e, { serializedTransaction: t }) {
      return e.request(
        { method: "eth_sendRawTransaction", params: [t] },
        { retryCount: 0 }
      );
    }
    e.s(["sendRawTransaction", () => t]);
  },
  888794,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(611573),
      i = e.i(569934),
      n = e.i(290392),
      a = e.i(942305),
      o = e.i(147526),
      s = e.i(10725),
      u = e.i(264404),
      l = e.i(190521),
      c = e.i(467125),
      f = e.i(976677),
      d = e.i(353464),
      h = e.i(975948),
      p = e.i(368941),
      m = e.i(638291);
    let b = new f.LruMap(128);
    async function g(e, f) {
      let {
        account: g = e.account,
        assertChainId: y = !0,
        chain: w = e.chain,
        accessList: v,
        authorizationList: x,
        blobs: E,
        data: B,
        dataSuffix: P = "string" == typeof e.dataSuffix
          ? e.dataSuffix
          : e.dataSuffix?.value,
        gas: A,
        gasPrice: I,
        maxFeePerBlobGas: S,
        maxFeePerGas: T,
        maxPriorityFeePerGas: N,
        nonce: R,
        type: F,
        value: z,
        ...C
      } = f;
      if (void 0 === g)
        throw new r.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/sendTransaction",
        });
      let O = g ? (0, t.parseAccount)(g) : null;
      try {
        (0, d.assertRequest)(f);
        let t = await (async () =>
          f.to
            ? f.to
            : null !== f.to && x && x.length > 0
            ? await (0, n.recoverAuthorizationAddress)({
                authorization: x[0],
              }).catch(() => {
                throw new i.BaseError(
                  "`to` is required. Could not infer from `authorizationList`."
                );
              })
            : void 0)();
        if (O?.type === "json-rpc" || null === O) {
          let r;
          null !== w &&
            ((r = await (0, c.getAction)(e, h.getChainId, "getChainId")({})),
            y && (0, a.assertCurrentChain)({ currentChainId: r, chain: w }));
          let i = e.chain?.formatters?.transactionRequest?.format,
            n = (i || l.formatTransactionRequest)(
              {
                ...(0, u.extract)(C, { format: i }),
                accessList: v,
                account: O,
                authorizationList: x,
                blobs: E,
                chainId: r,
                data: B ? (0, o.concat)([B, P ?? "0x"]) : B,
                gas: A,
                gasPrice: I,
                maxFeePerBlobGas: S,
                maxFeePerGas: T,
                maxPriorityFeePerGas: N,
                nonce: R,
                to: t,
                type: F,
                value: z,
              },
              "sendTransaction"
            ),
            s = b.get(e.uid);
          try {
            return await e.request(
              {
                method: s ? "wallet_sendTransaction" : "eth_sendTransaction",
                params: [n],
              },
              { retryCount: 0 }
            );
          } catch (t) {
            if (!1 === s) throw t;
            if (
              "InvalidInputRpcError" === t.name ||
              "InvalidParamsRpcError" === t.name ||
              "MethodNotFoundRpcError" === t.name ||
              "MethodNotSupportedRpcError" === t.name
            )
              return await e
                .request(
                  { method: "wallet_sendTransaction", params: [n] },
                  { retryCount: 0 }
                )
                .then((t) => (b.set(e.uid, !0), t))
                .catch((r) => {
                  if (
                    "MethodNotFoundRpcError" === r.name ||
                    "MethodNotSupportedRpcError" === r.name
                  )
                    throw (b.set(e.uid, !1), t);
                  throw r;
                });
            throw t;
          }
        }
        if (O?.type === "local") {
          let r = await (0, c.getAction)(
              e,
              p.prepareTransactionRequest,
              "prepareTransactionRequest"
            )({
              account: O,
              accessList: v,
              authorizationList: x,
              blobs: E,
              chain: w,
              data: B ? (0, o.concat)([B, P ?? "0x"]) : B,
              gas: A,
              gasPrice: I,
              maxFeePerBlobGas: S,
              maxFeePerGas: T,
              maxPriorityFeePerGas: N,
              nonce: R,
              nonceManager: O.nonceManager,
              parameters: [...p.defaultParameters, "sidecars"],
              type: F,
              value: z,
              ...C,
              to: t,
            }),
            i = w?.serializers?.transaction,
            n = await O.signTransaction(r, { serializer: i });
          return await (0, c.getAction)(
            e,
            m.sendRawTransaction,
            "sendRawTransaction"
          )({ serializedTransaction: n });
        }
        if (O?.type === "smart")
          throw new r.AccountTypeNotSupportedError({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          });
        throw new r.AccountTypeNotSupportedError({
          docsPath: "/docs/actions/wallet/sendTransaction",
          type: O?.type,
        });
      } catch (e) {
        if (e instanceof r.AccountTypeNotSupportedError) throw e;
        throw (0, s.getTransactionError)(e, {
          ...f,
          account: O,
          chain: f.chain || void 0,
        });
      }
    }
    e.s(["sendTransaction", () => g]);
  },
  403058,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor(e) {
        super(`Call bundle failed with status: ${e.statusCode}`, {
          name: "BundleFailedError",
        }),
          Object.defineProperty(this, "result", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.result = e);
      }
    }
    e.s(["BundleFailedError", () => r]);
  },
  839080,
  (e) => {
    "use strict";
    var t = e.i(450323),
      r = e.i(445024),
      i = e.i(856324),
      n = e.i(982191);
    let a = { "0x0": "reverted", "0x1": "success" };
    function o(e, r) {
      let o = {
        ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed
          ? BigInt(e.cumulativeGasUsed)
          : null,
        effectiveGasPrice: e.effectiveGasPrice
          ? BigInt(e.effectiveGasPrice)
          : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map((e) => (0, i.formatLog)(e)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? (0, t.hexToNumber)(e.transactionIndex)
          : null,
        status: e.status ? a[e.status] : null,
        type: e.type ? n.transactionType[e.type] || e.type : null,
      };
      return (
        e.blobGasPrice && (o.blobGasPrice = BigInt(e.blobGasPrice)),
        e.blobGasUsed && (o.blobGasUsed = BigInt(e.blobGasUsed)),
        o
      );
    }
    let s = (0, r.defineFormatter)("transactionReceipt", o);
    e.s([
      "defineTransactionReceipt",
      0,
      s,
      "formatTransactionReceipt",
      () => o,
      "receiptStatuses",
      0,
      a,
    ]);
  },
  509916,
  460841,
  (e) => {
    "use strict";
    var t = e.i(790063),
      r = e.i(8406),
      i = e.i(450323),
      n = e.i(839080),
      a = e.i(189991),
      o = e.i(569934),
      s = e.i(383856),
      u = e.i(656679),
      l = e.i(147526),
      c = e.i(675107),
      f = e.i(10725),
      d = e.i(888794);
    let h =
        "0x5792579257925792579257925792579257925792579257925792579257925792",
      p = (0, c.numberToHex)(0, { size: 32 });
    async function m(e, t) {
      let {
          account: r = e.account,
          chain: n = e.chain,
          experimental_fallback: m,
          experimental_fallbackDelay: b = 32,
          forceAtomic: g = !1,
          id: y,
          version: w = "2.0.0",
        } = t,
        v = r ? (0, a.parseAccount)(r) : null,
        x = t.capabilities;
      e.dataSuffix &&
        !t.capabilities?.dataSuffix &&
        (x =
          "string" == typeof e.dataSuffix
            ? {
                ...t.capabilities,
                dataSuffix: { value: e.dataSuffix, optional: !0 },
              }
            : {
                ...t.capabilities,
                dataSuffix: {
                  value: e.dataSuffix.value,
                  ...(e.dataSuffix.required ? {} : { optional: !0 }),
                },
              });
      let E = t.calls.map((e) => {
        let t = e.abi
          ? (0, u.encodeFunctionData)({
              abi: e.abi,
              functionName: e.functionName,
              args: e.args,
            })
          : e.data;
        return {
          data: e.dataSuffix && t ? (0, l.concat)([t, e.dataSuffix]) : t,
          to: e.to,
          value: e.value ? (0, c.numberToHex)(e.value) : void 0,
        };
      });
      try {
        let t = await e.request(
          {
            method: "wallet_sendCalls",
            params: [
              {
                atomicRequired: g,
                calls: E,
                capabilities: x,
                chainId: (0, c.numberToHex)(n.id),
                from: v?.address,
                id: y,
                version: w,
              },
            ],
          },
          { retryCount: 0 }
        );
        if ("string" == typeof t) return { id: t };
        return t;
      } catch (r) {
        if (
          m &&
          ("MethodNotFoundRpcError" === r.name ||
            "MethodNotSupportedRpcError" === r.name ||
            "UnknownRpcError" === r.name ||
            r.details
              .toLowerCase()
              .includes("does not exist / is not available") ||
            r.details.toLowerCase().includes("missing or invalid. request()") ||
            r.details
              .toLowerCase()
              .includes("did not match any variant of untagged enum") ||
            r.details
              .toLowerCase()
              .includes("account upgraded to unsupported contract") ||
            r.details.toLowerCase().includes("eip-7702 not supported") ||
            r.details.toLowerCase().includes("unsupported wc_ method") ||
            r.details.toLowerCase().includes("feature toggled misconfigured") ||
            r.details
              .toLowerCase()
              .includes(
                "jsonrpcengine: response has no error or result for request"
              ))
        ) {
          if (x && Object.values(x).some((e) => !e.optional)) {
            let e =
              "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
            throw new s.UnsupportedNonOptionalCapabilityError(
              new o.BaseError(e, { details: e })
            );
          }
          if (g && E.length > 1) {
            let e =
              "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
            throw new s.AtomicityNotSupportedError(
              new o.BaseError(e, { details: e })
            );
          }
          let t = [];
          for (let r of E) {
            let a = (0, d.sendTransaction)(e, {
              account: v,
              chain: n,
              data: r.data,
              to: r.to,
              value: r.value ? (0, i.hexToBigInt)(r.value) : void 0,
            });
            t.push(a), b > 0 && (await new Promise((e) => setTimeout(e, b)));
          }
          let r = await Promise.allSettled(t);
          if (r.every((e) => "rejected" === e.status)) throw r[0].reason;
          let a = r.map((e) => ("fulfilled" === e.status ? e.value : p));
          return {
            id: (0, l.concat)([
              ...a,
              (0, c.numberToHex)(n.id, { size: 32 }),
              h,
            ]),
          };
        }
        throw (0, f.getTransactionError)(r, {
          ...t,
          account: v,
          chain: t.chain,
        });
      }
    }
    async function b(e, a) {
      let o;
      async function s(n) {
        if (n.endsWith(h.slice(2))) {
          let a = (0, r.trim)((0, t.sliceHex)(n, -64, -32)),
            o = (0, t.sliceHex)(n, 0, -64)
              .slice(2)
              .match(/.{1,64}/g),
            s = await Promise.all(
              o.map((t) =>
                p.slice(2) !== t
                  ? e.request(
                      {
                        method: "eth_getTransactionReceipt",
                        params: [`0x${t}`],
                      },
                      { dedupe: !0 }
                    )
                  : void 0
              )
            ),
            u = s.some((e) => null === e)
              ? 100
              : s.every((e) => e?.status === "0x1")
              ? 200
              : s.every((e) => e?.status === "0x0")
              ? 500
              : 600;
          return {
            atomic: !1,
            chainId: (0, i.hexToNumber)(a),
            receipts: s.filter(Boolean),
            status: u,
            version: "2.0.0",
          };
        }
        return e.request({ method: "wallet_getCallsStatus", params: [n] });
      }
      let {
          atomic: u = !1,
          chainId: l,
          receipts: c,
          version: f = "2.0.0",
          ...d
        } = await s(a.id),
        [m, b] =
          (o = d.status) >= 100 && o < 200
            ? ["pending", o]
            : o >= 200 && o < 300
            ? ["success", o]
            : o >= 300 && o < 700
            ? ["failure", o]
            : "CONFIRMED" === o
            ? ["success", 200]
            : "PENDING" === o
            ? ["pending", 100]
            : [void 0, o];
      return {
        ...d,
        atomic: u,
        chainId: l ? (0, i.hexToNumber)(l) : void 0,
        receipts:
          c?.map((e) => ({
            ...e,
            blockNumber: (0, i.hexToBigInt)(e.blockNumber),
            gasUsed: (0, i.hexToBigInt)(e.gasUsed),
            status: n.receiptStatuses[e.status],
          })) ?? [],
        statusCode: b,
        status: m,
        version: f,
      };
    }
    e.s(
      [
        "fallbackMagicIdentifier",
        0,
        h,
        "fallbackTransactionErrorMagicIdentifier",
        0,
        p,
        "sendCalls",
        () => m,
      ],
      460841
    ),
      e.s(["getCallsStatus", () => b], 509916);
  },
  763448,
  (e) => {
    "use strict";
    var t = e.i(569934),
      r = e.i(403058),
      i = e.i(467125),
      n = e.i(43473),
      a = e.i(976215),
      o = e.i(509486),
      s = e.i(204202),
      u = e.i(34888),
      l = e.i(509916);
    async function c(e, t) {
      let c,
        {
          id: d,
          pollingInterval: h = e.pollingInterval,
          status: p = ({ statusCode: e }) => 200 === e || e >= 300,
          retryCount: m = 4,
          retryDelay: b = ({ count: e }) => 200 * ~~(1 << e),
          timeout: g = 6e4,
          throwOnFailure: y = !1,
        } = t,
        w = (0, u.stringify)(["waitForCallsStatus", e.uid, d]),
        { promise: v, resolve: x, reject: E } = (0, o.withResolvers)(),
        B = (0, n.observe)(w, { resolve: x, reject: E }, (t) => {
          let n = (0, a.poll)(
            async () => {
              let a = (e) => {
                clearTimeout(c), n(), e(), B();
              };
              try {
                let n = await (0, s.withRetry)(
                  async () => {
                    let t = await (0, i.getAction)(
                      e,
                      l.getCallsStatus,
                      "getCallsStatus"
                    )({ id: d });
                    if (y && "failure" === t.status)
                      throw new r.BundleFailedError(t);
                    return t;
                  },
                  { retryCount: m, delay: b }
                );
                if (!p(n)) return;
                a(() => t.resolve(n));
              } catch (e) {
                a(() => t.reject(e));
              }
            },
            { interval: h, emitOnBegin: !0 }
          );
          return n;
        });
      return (
        (c = g
          ? setTimeout(() => {
              B(), clearTimeout(c), E(new f({ id: d }));
            }, g)
          : void 0),
        await v
      );
    }
    class f extends t.BaseError {
      constructor({ id: e }) {
        super(
          `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
          { name: "WaitForCallsStatusTimeoutError" }
        );
      }
    }
    e.s([
      "WaitForCallsStatusTimeoutError",
      () => f,
      "waitForCallsStatus",
      () => c,
    ]);
  },
  363625,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(606624);
    function i(e) {
      let {
          batch: i,
          chain: n,
          ccipRead: a,
          dataSuffix: o,
          key: s = "base",
          name: u = "Base Client",
          type: l = "base",
        } = e,
        c =
          e.experimental_blockTag ??
          ("number" == typeof n?.experimental_preconfirmationTime
            ? "pending"
            : void 0),
        f = Math.min(
          Math.max(Math.floor((n?.blockTime ?? 12e3) / 2), 500),
          4e3
        ),
        d = e.pollingInterval ?? f,
        h = e.cacheTime ?? d,
        p = e.account ? (0, t.parseAccount)(e.account) : void 0,
        {
          config: m,
          request: b,
          value: g,
        } = e.transport({ account: p, chain: n, pollingInterval: d }),
        y = {
          account: p,
          batch: i,
          cacheTime: h,
          ccipRead: a,
          chain: n,
          dataSuffix: o,
          key: s,
          name: u,
          pollingInterval: d,
          request: b,
          transport: { ...m, ...g },
          type: l,
          uid: (0, r.uid)(),
          ...(c ? { experimental_blockTag: c } : {}),
        };
      return Object.assign(y, {
        extend: (function e(t) {
          return (r) => {
            let i = r(t);
            for (let e in y) delete i[e];
            let n = { ...t, ...i };
            return Object.assign(n, { extend: e(n) });
          };
        })(y),
      });
    }
    function n() {
      return null;
    }
    e.s(["createClient", () => i, "rpcSchema", () => n]);
  },
  528804,
  (e) => {
    "use strict";
    var t = e.i(675107);
    async function r(
      e,
      { address: r, blockNumber: i, blockTag: n = "latest" }
    ) {
      let a = void 0 !== i ? (0, t.numberToHex)(i) : void 0,
        o = await e.request(
          { method: "eth_getCode", params: [r, a || n] },
          { dedupe: !!a }
        );
      if ("0x" !== o) return o;
    }
    e.s(["getCode", () => r]);
  },
  697178,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ address: e }) {
        super(`No EIP-712 domain found on contract "${e}".`, {
          metaMessages: [
            "Ensure that:",
            `- The contract is deployed at the address "${e}".`,
            "- `eip712Domain()` function exists on the contract.",
            "- `eip712Domain()` function matches signature to ERC-5267 specification.",
          ],
          name: "Eip712DomainNotFoundError",
        });
      }
    }
    var i = e.i(467125),
      n = e.i(388750);
    async function a(e, t) {
      let { address: a, factory: s, factoryData: u } = t;
      try {
        let [t, r, l, c, f, d, h] = await (0, i.getAction)(
          e,
          n.readContract,
          "readContract"
        )({
          abi: o,
          address: a,
          functionName: "eip712Domain",
          factory: s,
          factoryData: u,
        });
        return {
          domain: {
            name: r,
            version: l,
            chainId: Number(c),
            verifyingContract: f,
            salt: d,
          },
          extensions: h,
          fields: t,
        };
      } catch (e) {
        if (
          "ContractFunctionExecutionError" === e.name &&
          "ContractFunctionZeroDataError" === e.cause.name
        )
          throw new r({ address: a });
        throw e;
      }
    }
    let o = [
      {
        inputs: [],
        name: "eip712Domain",
        outputs: [
          { name: "fields", type: "bytes1" },
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
          { name: "salt", type: "bytes32" },
          { name: "extensions", type: "uint256[]" },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    e.s(["getEip712Domain", () => a], 697178);
  },
  364336,
  (e) => {
    "use strict";
    var t = e.i(145535),
      r = e.i(280355),
      i = e.i(759384),
      n = e.i(284251);
    function a(e, r = {}) {
      let { as: o = "string" == typeof e ? "Hex" : "Bytes" } = r,
        s = (0, t.keccak_256)(i.from(e));
      return "Bytes" === o ? s : n.fromBytes(s);
    }
    function o(e, t = {}) {
      let { as: a = "string" == typeof e ? "Hex" : "Bytes" } = t,
        s = (0, r.sha256)(i.from(e));
      return "Bytes" === a ? s : n.fromBytes(s);
    }
    function s(e) {
      return n.validate(e) && 32 === n.size(e);
    }
    e.s(["keccak256", () => a, "sha256", () => o, "validate", () => s]);
  },
  428582,
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
    let r = { checksum: new t(8192) }.checksum;
    e.s(["checksum", 0, r], 428582);
  },
  308131,
  620046,
  (e) => {
    "use strict";
    var t = e.i(759384),
      r = e.i(428582),
      i = e.i(602376),
      n = e.i(364336),
      a = i,
      o = e.i(284251),
      s = e.i(382721);
    function u(e, t = {}) {
      let { compressed: r } = t,
        { prefix: i, x: n, y: a } = e;
      if (!1 === r || ("bigint" == typeof n && "bigint" == typeof a)) {
        if (4 !== i) throw new p({ prefix: i, cause: new b() });
        return;
      }
      if (!0 === r || ("bigint" == typeof n && void 0 === a)) {
        if (3 !== i && 2 !== i) throw new p({ prefix: i, cause: new m() });
        return;
      }
      throw new h({ publicKey: e });
    }
    function l(e) {
      let r = (() => {
        if (o.validate(e)) return c(e);
        if (t.validate(e)) {
          var r;
          return (r = e), c(o.fromBytes(r));
        }
        let { prefix: i, x: n, y: a } = e;
        return "bigint" == typeof n && "bigint" == typeof a
          ? { prefix: i ?? 4, x: n, y: a }
          : { prefix: i, x: n };
      })();
      return u(r), r;
    }
    function c(e) {
      if (132 !== e.length && 130 !== e.length && 68 !== e.length)
        throw new g({ publicKey: e });
      if (130 === e.length)
        return {
          prefix: 4,
          x: BigInt(o.slice(e, 0, 32)),
          y: BigInt(o.slice(e, 32, 64)),
        };
      if (132 === e.length) {
        let t = Number(o.slice(e, 0, 1));
        return {
          prefix: t,
          x: BigInt(o.slice(e, 1, 33)),
          y: BigInt(o.slice(e, 33, 65)),
        };
      }
      return { prefix: Number(o.slice(e, 0, 1)), x: BigInt(o.slice(e, 1, 33)) };
    }
    function f(e, r = {}) {
      return t.fromHex(d(e, r));
    }
    function d(e, t = {}) {
      u(e);
      let { prefix: r, x: i, y: n } = e,
        { includePrefix: a = !0 } = t;
      return o.concat(
        a ? o.fromNumber(r, { size: 1 }) : "0x",
        o.fromNumber(i, { size: 32 }),
        "bigint" == typeof n ? o.fromNumber(n, { size: 32 }) : "0x"
      );
    }
    class h extends a.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${s.stringify(e)}\` is not a valid public key.`, {
          metaMessages: [
            "Public key must contain:",
            "- an `x` and `prefix` value (compressed)",
            "- an `x`, `y`, and `prefix` value (uncompressed)",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidError",
          });
      }
    }
    class p extends a.BaseError {
      constructor({ prefix: e, cause: t }) {
        super(`Prefix "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidPrefixError",
          });
      }
    }
    class m extends a.BaseError {
      constructor() {
        super("Prefix must be 2 or 3 for compressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidCompressedPrefixError",
          });
      }
    }
    class b extends a.BaseError {
      constructor() {
        super("Prefix must be 4 for uncompressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidUncompressedPrefixError",
          });
      }
    }
    class g extends a.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${e}\` is an invalid public key size.`, {
          metaMessages: [
            "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
            `Received ${o.size(o.from(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidSerializedSizeError",
          });
      }
    }
    e.s(["from", () => l, "toBytes", () => f, "toHex", () => d], 620046);
    let y = /^0x[a-fA-F0-9]{40}$/;
    function w(e, t = {}) {
      let { strict: r = !0 } = t;
      if (!y.test(e)) throw new P({ address: e, cause: new A() });
      if (r) {
        if (e.toLowerCase() === e) return;
        if (v(e) !== e) throw new P({ address: e, cause: new I() });
      }
    }
    function v(e) {
      if (r.checksum.has(e)) return r.checksum.get(e);
      w(e, { strict: !1 });
      let i = e.substring(2).toLowerCase(),
        a = n.keccak256(t.fromString(i), { as: "Bytes" }),
        o = i.split("");
      for (let e = 0; e < 40; e += 2)
        a[e >> 1] >> 4 >= 8 && o[e] && (o[e] = o[e].toUpperCase()),
          (15 & a[e >> 1]) >= 8 &&
            o[e + 1] &&
            (o[e + 1] = o[e + 1].toUpperCase());
      let s = `0x${o.join("")}`;
      return r.checksum.set(e, s), s;
    }
    function x(e, t = {}) {
      let r = n.keccak256(`0x${d(e).slice(4)}`).substring(26);
      return (function (e, t = {}) {
        let { checksum: r = !1 } = t;
        return (w(e), r) ? v(e) : e;
      })(`0x${r}`, t);
    }
    function E(e, t) {
      return (
        w(e, { strict: !1 }),
        w(t, { strict: !1 }),
        e.toLowerCase() === t.toLowerCase()
      );
    }
    function B(e, t = {}) {
      let { strict: r = !0 } = t ?? {};
      try {
        return w(e, { strict: r }), !0;
      } catch {
        return !1;
      }
    }
    class P extends i.BaseError {
      constructor({ address: e, cause: t }) {
        super(`Address "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidAddressError",
          });
      }
    }
    class A extends i.BaseError {
      constructor() {
        super("Address is not a 20 byte (40 hexadecimal character) value."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidInputError",
          });
      }
    }
    class I extends i.BaseError {
      constructor() {
        super("Address does not match its checksum counterpart."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidChecksumError",
          });
      }
    }
    e.s(
      [
        "assert",
        () => w,
        "checksum",
        () => v,
        "fromPublicKey",
        () => x,
        "isEqual",
        () => E,
        "validate",
        () => B,
      ],
      308131
    );
  },
  663771,
  (e) => {
    "use strict";
    var t = e.i(766564),
      r = e.i(917105),
      i = e.i(602376),
      n = e.i(364336),
      a = e.i(284251),
      o = e.i(308131);
    function s(e) {
      let t = !0,
        r = "",
        n = 0,
        a = "",
        o = !1;
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        if (
          (["(", ")", ","].includes(s) && (t = !0),
          "(" === s && n++,
          ")" === s && n--,
          t)
        ) {
          if (0 === n) {
            if (" " === s && ["event", "function", "error", ""].includes(a))
              a = "";
            else if (((a += s), ")" === s)) {
              o = !0;
              break;
            }
            continue;
          }
          if (" " === s) {
            "," !== e[i - 1] && "," !== r && ",(" !== r && ((r = ""), (t = !1));
            continue;
          }
          (a += s), (r += s);
        }
      }
      if (!o) throw new i.BaseError("Unable to normalize signature.");
      return a;
    }
    function u(e, t = {}) {
      let { prepare: i = !0 } = t,
        n = Array.isArray(e) || "string" == typeof e ? r.parseAbiItem(e) : e;
      return { ...n, ...(i ? { hash: f(n) } : {}) };
    }
    function l(e, t, r) {
      let i,
        { args: n = [], prepare: s = !0 } = r ?? {},
        u = a.validate(t, { strict: !1 }),
        l = e.filter((e) =>
          u
            ? "function" === e.type || "error" === e.type
              ? c(e) === a.slice(t, 0, 4)
              : "event" === e.type && f(e) === t
            : "name" in e && e.name === t
        );
      if (0 === l.length) throw new h({ name: t });
      if (1 === l.length) return { ...l[0], ...(s ? { hash: f(l[0]) } : {}) };
      for (let e of l) {
        if ("inputs" in e) {
          if (!n || 0 === n.length) {
            if (!e.inputs || 0 === e.inputs.length)
              return { ...e, ...(s ? { hash: f(e) } : {}) };
            continue;
          }
          if (
            e.inputs &&
            0 !== e.inputs.length &&
            e.inputs.length === n.length &&
            n.every((t, r) => {
              let i = "inputs" in e && e.inputs[r];
              return (
                !!i &&
                (function e(t, r) {
                  let i = typeof t,
                    n = r.type;
                  switch (n) {
                    case "address":
                      return o.validate(t, { strict: !1 });
                    case "bool":
                      return "boolean" === i;
                    case "function":
                    case "string":
                      return "string" === i;
                    default:
                      if ("tuple" === n && "components" in r)
                        return Object.values(r.components).every((r, i) =>
                          e(Object.values(t)[i], r)
                        );
                      if (
                        /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                          n
                        )
                      )
                        return "number" === i || "bigint" === i;
                      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))
                        return "string" === i || t instanceof Uint8Array;
                      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))
                        return (
                          Array.isArray(t) &&
                          t.every((t) =>
                            e(t, {
                              ...r,
                              type: n.replace(/(\[[0-9]{0,}\])$/, ""),
                            })
                          )
                        );
                      return !1;
                  }
                })(t, i)
              );
            })
          ) {
            if (i && "inputs" in i && i.inputs) {
              let t = (function e(t, r, i) {
                for (let n in t) {
                  let a = t[n],
                    s = r[n];
                  if (
                    "tuple" === a.type &&
                    "tuple" === s.type &&
                    "components" in a &&
                    "components" in s
                  )
                    return e(a.components, s.components, i[n]);
                  let u = [a.type, s.type];
                  if (
                    (u.includes("address") && u.includes("bytes20")) ||
                    (((u.includes("address") && u.includes("string")) ||
                      (u.includes("address") && u.includes("bytes"))) &&
                      o.validate(i[n], { strict: !1 }))
                  )
                    return u;
                }
              })(e.inputs, i.inputs, n);
              if (t)
                throw new d(
                  { abiItem: e, type: t[0] },
                  { abiItem: i, type: t[1] }
                );
            }
            i = e;
          }
        }
      }
      let p = (() => {
        if (i) return i;
        let [e, ...t] = l;
        return { ...e, overloads: t };
      })();
      if (!p) throw new h({ name: t });
      return { ...p, ...(s ? { hash: f(p) } : {}) };
    }
    function c(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return l(t, r);
        }
        return e[0];
      })();
      return a.slice(f(t), 0, 4);
    }
    function f(...e) {
      let r = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return l(t, r);
        }
        return e[0];
      })();
      return "string" != typeof r && "hash" in r && r.hash
        ? r.hash
        : n.keccak256(
            a.fromString(
              (function (...e) {
                let r = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return l(t, r);
                  }
                  return e[0];
                })();
                return s("string" == typeof r ? r : t.formatAbiItem(r));
              })(r)
            )
          );
    }
    class d extends i.BaseError {
      constructor(e, r) {
        super("Found ambiguous types in overloaded ABI Items.", {
          metaMessages: [
            `\`${e.type}\` in \`${s(t.formatAbiItem(e.abiItem))}\`, and`,
            `\`${r.type}\` in \`${s(t.formatAbiItem(r.abiItem))}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.AmbiguityError",
          });
      }
    }
    class h extends i.BaseError {
      constructor({ name: e, data: t, type: r = "item" }) {
        const i = e ? ` with name "${e}"` : t ? ` with data "${t}"` : "";
        super(`ABI ${r}${i} not found.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.NotFoundError",
          });
      }
    }
    class p extends i.BaseError {
      constructor({ data: e }) {
        super(
          `Selector size is invalid. Expected 4 bytes. Received ${a.size(
            e
          )} bytes ("${e}").`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.InvalidSelectorSizeError",
          });
      }
    }
    e.s(
      [
        "InvalidSelectorSizeError",
        () => p,
        "NotFoundError",
        () => h,
        "from",
        () => u,
        "fromAbi",
        () => l,
        "getSelector",
        () => c,
      ],
      663771
    );
  },
  506570,
  62126,
  126799,
  (e) => {
    "use strict";
    e.s(
      [
        "ArrayLengthMismatchError",
        () => A,
        "BytesSizeMismatchError",
        () => I,
        "InvalidArrayError",
        () => T,
        "InvalidTypeError",
        () => N,
        "decode",
        () => w,
        "encode",
        () => v,
        "from",
        () => E,
      ],
      506570
    );
    var t = e.i(525908),
      r = e.i(621491),
      i = e.i(308131),
      n = e.i(759384),
      a = e.i(602376),
      o = e.i(284251);
    let s = /^(.*)\[([0-9]*)\]$/,
      u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      l =
        /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    e.s(
      [
        "arrayRegex",
        0,
        s,
        "bytesRegex",
        0,
        u,
        "integerRegex",
        0,
        l,
        "maxUint256",
        0,
        2n ** 256n - 1n,
      ],
      62126
    );
    function c(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: i, encoded: n } = e[r];
        i ? (t += 32) : (t += o.size(n));
      }
      let r = [],
        i = [],
        n = 0;
      for (let a = 0; a < e.length; a++) {
        let { dynamic: s, encoded: u } = e[a];
        s
          ? (r.push(o.fromNumber(t + n, { size: 32 })),
            i.push(u),
            (n += o.size(u)))
          : r.push(u);
      }
      return o.concat(...r, ...i);
    }
    function f(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    function d(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(d);
      let r = f(e.type);
      return !!(r && d({ ...e, type: r[1] }));
    }
    var h = a;
    let p = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new y({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new g({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new b({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new b({ offset: e });
        let t = this.position + e;
        this.assertPosition(t), (this.position = t);
      },
      inspectByte(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectBytes(e, t) {
        let r = t ?? this.position;
        return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
      },
      inspectUint8(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectUint16(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t);
      },
      inspectUint24(e) {
        let t = e ?? this.position;
        return (
          this.assertPosition(t + 2),
          (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
        );
      },
      inspectUint32(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t);
      },
      pushByte(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushBytes(e) {
        this.assertPosition(this.position + e.length - 1),
          this.bytes.set(e, this.position),
          (this.position += e.length);
      },
      pushUint8(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushUint16(e) {
        this.assertPosition(this.position + 1),
          this.dataView.setUint16(this.position, e),
          (this.position += 2);
      },
      pushUint24(e) {
        this.assertPosition(this.position + 2),
          this.dataView.setUint16(this.position, e >> 8),
          this.dataView.setUint8(this.position + 2, 255 & e),
          (this.position += 3);
      },
      pushUint32(e) {
        this.assertPosition(this.position + 3),
          this.dataView.setUint32(this.position, e),
          (this.position += 4);
      },
      readByte() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectByte();
        return this.position++, e;
      },
      readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        let r = this.inspectBytes(e);
        return (this.position += t ?? e), r;
      },
      readUint8() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint8();
        return (this.position += 1), e;
      },
      readUint16() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint16();
        return (this.position += 2), e;
      },
      readUint24() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint24();
        return (this.position += 3), e;
      },
      readUint32() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint32();
        return (this.position += 4), e;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(e) {
        let t = this.position;
        return (
          this.assertPosition(e), (this.position = e), () => (this.position = t)
        );
      },
      _touch() {
        if (this.recursiveReadLimit === 1 / 0) return;
        let e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1),
          e > 0 && this.recursiveReadCount++;
      },
    };
    function m(e, { recursiveReadLimit: t = 8192 } = {}) {
      let r = Object.create(p);
      return (
        (r.bytes = e),
        (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (r.positionReadCount = new Map()),
        (r.recursiveReadLimit = t),
        r
      );
    }
    class b extends h.BaseError {
      constructor({ offset: e }) {
        super(`Offset \`${e}\` cannot be negative.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.NegativeOffsetError",
          });
      }
    }
    class g extends h.BaseError {
      constructor({ length: e, position: t }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.PositionOutOfBoundsError",
          });
      }
    }
    class y extends h.BaseError {
      constructor({ count: e, limit: t }) {
        super(
          `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.RecursiveReadLimitExceededError",
          });
      }
    }
    function w(e, t, r = {}) {
      let { as: a = "Array", checksumAddress: s = !1 } = r,
        u = "string" == typeof t ? n.fromHex(t) : t,
        l = m(u);
      if (0 === n.size(u) && e.length > 0) throw new P();
      if (n.size(u) && 32 > n.size(u))
        throw new B({
          data: "string" == typeof t ? t : o.fromBytes(t),
          parameters: e,
          size: n.size(u),
        });
      let c = 0,
        h = "Array" === a ? [] : {};
      for (let t = 0; t < e.length; ++t) {
        let r = e[t];
        l.setPosition(c);
        let [u, p] = (function e(t, r, a) {
          var s, u, l;
          let { checksumAddress: c, staticPosition: h } = a,
            p = f(r.type);
          if (p) {
            let [i, a] = p;
            return (function (t, r, i) {
              let { checksumAddress: a, length: o, staticPosition: s } = i;
              if (!o) {
                let i = s + n.toNumber(t.readBytes(32)),
                  o = i + 32;
                t.setPosition(i);
                let u = n.toNumber(t.readBytes(32)),
                  l = d(r),
                  c = 0,
                  f = [];
                for (let i = 0; i < u; ++i) {
                  t.setPosition(o + (l ? 32 * i : c));
                  let [n, s] = e(t, r, {
                    checksumAddress: a,
                    staticPosition: o,
                  });
                  (c += s), f.push(n);
                }
                return t.setPosition(s + 32), [f, 32];
              }
              if (d(r)) {
                let i = s + n.toNumber(t.readBytes(32)),
                  u = [];
                for (let n = 0; n < o; ++n) {
                  t.setPosition(i + 32 * n);
                  let [o] = e(t, r, { checksumAddress: a, staticPosition: i });
                  u.push(o);
                }
                return t.setPosition(s + 32), [u, 32];
              }
              let u = 0,
                l = [];
              for (let i = 0; i < o; ++i) {
                let [i, n] = e(t, r, {
                  checksumAddress: a,
                  staticPosition: s + u,
                });
                (u += n), l.push(i);
              }
              return [l, u];
            })(
              t,
              { ...r, type: a },
              { checksumAddress: c, length: i, staticPosition: h }
            );
          }
          if ("tuple" === r.type)
            return (function (t, r, i) {
              let { checksumAddress: a, staticPosition: o } = i,
                s =
                  0 === r.components.length ||
                  r.components.some(({ name: e }) => !e),
                u = s ? [] : {},
                l = 0;
              if (d(r)) {
                let i = o + n.toNumber(t.readBytes(32));
                for (let n = 0; n < r.components.length; ++n) {
                  let o = r.components[n];
                  t.setPosition(i + l);
                  let [c, f] = e(t, o, {
                    checksumAddress: a,
                    staticPosition: i,
                  });
                  (l += f), (u[s ? n : o?.name] = c);
                }
                return t.setPosition(o + 32), [u, 32];
              }
              for (let i = 0; i < r.components.length; ++i) {
                let n = r.components[i],
                  [c, f] = e(t, n, { checksumAddress: a, staticPosition: o });
                (u[s ? i : n?.name] = c), (l += f);
              }
              return [u, l];
            })(t, r, { checksumAddress: c, staticPosition: h });
          if ("address" === r.type)
            return (function (e, t = {}) {
              let r,
                { checksum: a = !1 } = t,
                s = e.readBytes(32);
              return [
                ((r = o.fromBytes(n.slice(s, -20))), a ? i.checksum(r) : r),
                32,
              ];
            })(t, { checksum: c });
          if ("bool" === r.type) {
            return (s = t), [n.toBoolean(s.readBytes(32), { size: 32 }), 32];
          }
          if (r.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: r }) {
              let [i, a] = t.type.split("bytes");
              if (!a) {
                let t = n.toNumber(e.readBytes(32));
                e.setPosition(r + t);
                let i = n.toNumber(e.readBytes(32));
                if (0 === i) return e.setPosition(r + 32), ["0x", 32];
                let a = e.readBytes(i);
                return e.setPosition(r + 32), [o.fromBytes(a), 32];
              }
              return [o.fromBytes(e.readBytes(Number.parseInt(a, 10), 32)), 32];
            })(t, r, { staticPosition: h });
          if (r.type.startsWith("uint") || r.type.startsWith("int")) {
            let e, i, a;
            return (
              (u = t),
              (e = (l = r).type.startsWith("int")),
              (i = Number.parseInt(l.type.split("int")[1] || "256", 10)),
              (a = u.readBytes(32)),
              [
                i > 48
                  ? n.toBigInt(a, { signed: e })
                  : n.toNumber(a, { signed: e }),
                32,
              ]
            );
          }
          if ("string" === r.type)
            return (function (e, { staticPosition: t }) {
              let r = n.toNumber(e.readBytes(32));
              e.setPosition(t + r);
              let i = n.toNumber(e.readBytes(32));
              if (0 === i) return e.setPosition(t + 32), ["", 32];
              let a = e.readBytes(i, 32),
                o = n.toString(n.trimLeft(a));
              return e.setPosition(t + 32), [o, 32];
            })(t, { staticPosition: h });
          throw new N(r.type);
        })(l, r, { checksumAddress: s, staticPosition: 0 });
        (c += p), "Array" === a ? h.push(u) : (h[r.name ?? t] = u);
      }
      return h;
    }
    function v(e, t, r) {
      let { checksumAddress: n = !1 } = r ?? {};
      if (e.length !== t.length)
        throw new S({ expectedLength: e.length, givenLength: t.length });
      let s = c(
        (function ({ checksumAddress: e, parameters: t, values: r }) {
          let n = [];
          for (let s = 0; s < t.length; s++)
            n.push(
              (function e({ checksumAddress: t = !1, parameter: r, value: n }) {
                let s = f(r.type);
                if (s) {
                  let [i, a] = s;
                  return (function (t, r) {
                    let { checksumAddress: i, length: n, parameter: a } = r,
                      s = null === n;
                    if (!Array.isArray(t)) throw new T(t);
                    if (!s && t.length !== n)
                      throw new A({
                        expectedLength: n,
                        givenLength: t.length,
                        type: `${a.type}[${n}]`,
                      });
                    let u = !1,
                      l = [];
                    for (let r = 0; r < t.length; r++) {
                      let n = e({
                        checksumAddress: i,
                        parameter: a,
                        value: t[r],
                      });
                      n.dynamic && (u = !0), l.push(n);
                    }
                    if (s || u) {
                      let e = c(l);
                      if (s) {
                        let t = o.fromNumber(l.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: l.length > 0 ? o.concat(t, e) : t,
                        };
                      }
                      if (u) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: o.concat(...l.map(({ encoded: e }) => e)),
                    };
                  })(n, {
                    checksumAddress: t,
                    length: i,
                    parameter: { ...r, type: a },
                  });
                }
                if ("tuple" === r.type)
                  return (function (t, r) {
                    let { checksumAddress: i, parameter: n } = r,
                      a = !1,
                      s = [];
                    for (let r = 0; r < n.components.length; r++) {
                      let o = n.components[r],
                        u = Array.isArray(t) ? r : o.name,
                        l = e({
                          checksumAddress: i,
                          parameter: o,
                          value: t[u],
                        });
                      s.push(l), l.dynamic && (a = !0);
                    }
                    return {
                      dynamic: a,
                      encoded: a
                        ? c(s)
                        : o.concat(...s.map(({ encoded: e }) => e)),
                    };
                  })(n, { checksumAddress: t, parameter: r });
                if ("address" === r.type)
                  return (function (e, t) {
                    let { checksum: r = !1 } = t;
                    return (
                      i.assert(e, { strict: r }),
                      { dynamic: !1, encoded: o.padLeft(e.toLowerCase()) }
                    );
                  })(n, { checksum: t });
                if ("bool" === r.type) {
                  var u = n;
                  if ("boolean" != typeof u)
                    throw new a.BaseError(
                      `Invalid boolean value: "${u}" (type: ${typeof u}). Expected: \`true\` or \`false\`.`
                    );
                  return { dynamic: !1, encoded: o.padLeft(o.fromBoolean(u)) };
                }
                if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                  let e = r.type.startsWith("int"),
                    [, , t = "256"] = l.exec(r.type) ?? [];
                  return (function (e, { signed: t, size: r }) {
                    if ("number" == typeof r) {
                      let i = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        n = t ? -i - 1n : 0n;
                      if (e > i || e < n)
                        throw new o.IntegerOutOfRangeError({
                          max: i.toString(),
                          min: n.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: o.fromNumber(e, { size: 32, signed: t }),
                    };
                  })(n, { signed: e, size: Number(t) });
                }
                if (r.type.startsWith("bytes"))
                  return (function (e, { type: t }) {
                    let [, r] = t.split("bytes"),
                      i = o.size(e);
                    if (!r) {
                      let t = e;
                      return (
                        i % 32 != 0 &&
                          (t = o.padRight(
                            t,
                            32 * Math.ceil((e.length - 2) / 2 / 32)
                          )),
                        {
                          dynamic: !0,
                          encoded: o.concat(
                            o.padLeft(o.fromNumber(i, { size: 32 })),
                            t
                          ),
                        }
                      );
                    }
                    if (i !== Number.parseInt(r, 10))
                      throw new I({
                        expectedSize: Number.parseInt(r, 10),
                        value: e,
                      });
                    return { dynamic: !1, encoded: o.padRight(e) };
                  })(n, { type: r.type });
                if ("string" === r.type) {
                  var d = n;
                  let e = o.fromString(d),
                    t = Math.ceil(o.size(e) / 32),
                    r = [];
                  for (let i = 0; i < t; i++)
                    r.push(o.padRight(o.slice(e, 32 * i, (i + 1) * 32)));
                  return {
                    dynamic: !0,
                    encoded: o.concat(
                      o.padRight(o.fromNumber(o.size(e), { size: 32 })),
                      ...r
                    ),
                  };
                }
                throw new N(r.type);
              })({ checksumAddress: e, parameter: t[s], value: r[s] })
            );
          return n;
        })({ checksumAddress: n, parameters: e, values: t })
      );
      return 0 === s.length ? "0x" : s;
    }
    function x(e, t) {
      if (e.length !== t.length)
        throw new S({ expectedLength: e.length, givenLength: t.length });
      let r = [];
      for (let i = 0; i < e.length; i++) {
        let n = e[i],
          a = t[i];
        r.push(x.encode(n, a));
      }
      return o.concat(...r);
    }
    function E(e) {
      return (Array.isArray(e) && "string" == typeof e[0]) ||
        "string" == typeof e
        ? r.parseAbiParameters(e)
        : e;
    }
    e.s(["create", () => m], 126799),
      ((x || (x = {})).encode = function e(t, r, n = !1) {
        if ("address" === t)
          return i.assert(r), o.padLeft(r.toLowerCase(), 32 * !!n);
        if ("string" === t) return o.fromString(r);
        if ("bytes" === t) return r;
        if ("bool" === t) return o.padLeft(o.fromBoolean(r), n ? 32 : 1);
        let a = t.match(l);
        if (a) {
          let [e, t, i = "256"] = a,
            s = Number.parseInt(i, 10) / 8;
          return o.fromNumber(r, { size: n ? 32 : s, signed: "int" === t });
        }
        let c = t.match(u);
        if (c) {
          let [e, t] = c;
          if (Number.parseInt(t, 10) !== (r.length - 2) / 2)
            throw new I({ expectedSize: Number.parseInt(t, 10), value: r });
          return o.padRight(r, 32 * !!n);
        }
        let f = t.match(s);
        if (f && Array.isArray(r)) {
          let [t, i] = f,
            n = [];
          for (let t = 0; t < r.length; t++) n.push(e(i, r[t], !0));
          return 0 === n.length ? "0x" : o.concat(...n);
        }
        throw new N(t);
      });
    class B extends a.BaseError {
      constructor({ data: e, parameters: r, size: i }) {
        super(`Data size of ${i} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${t.formatAbiParameters(r)})`,
            `Data:   ${e} (${i} bytes)`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.DataSizeTooSmallError",
          });
      }
    }
    class P extends a.BaseError {
      constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ZeroDataError",
          });
      }
    }
    class A extends a.BaseError {
      constructor({ expectedLength: e, givenLength: t, type: r }) {
        super(
          `Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ArrayLengthMismatchError",
          });
      }
    }
    class I extends a.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${o.size(
            t
          )}) does not match expected size (bytes${e}).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.BytesSizeMismatchError",
          });
      }
    }
    class S extends a.BaseError {
      constructor({ expectedLength: e, givenLength: t }) {
        super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.LengthMismatchError",
          });
      }
    }
    class T extends a.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is not a valid array.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidArrayError",
          });
      }
    }
    class N extends a.BaseError {
      constructor(e) {
        super(`Type \`${e}\` is not a valid ABI Type.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidTypeError",
          });
      }
    }
  },
  914146,
  (e) => {
    "use strict";
    e.s([
      "ethAddress",
      0,
      "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      "zeroAddress",
      0,
      "0x0000000000000000000000000000000000000000",
    ]);
  },
  42391,
  566335,
  779591,
  287556,
  915907,
  863155,
  388600,
  234415,
  11517,
  152780,
  (e) => {
    "use strict";
    var t = e.i(506570),
      r = e.i(602376),
      i = e.i(284251);
    let n =
      "0x6492649264926492649264926492649264926492649264926492649264926492";
    function a(e) {
      if (i.slice(e, -32) !== n) throw new c(e);
    }
    function o(e) {
      return "string" == typeof e ? s(e) : e;
    }
    function s(e) {
      a(e);
      let [r, i, n] = t.decode(t.from("address, bytes, bytes"), e);
      return { data: i, signature: n, to: r };
    }
    function u(e) {
      let { data: r, signature: a, to: o } = e;
      return i.concat(t.encode(t.from("address, bytes, bytes"), [o, r, a]), n);
    }
    function l(e) {
      try {
        return a(e), !0;
      } catch {
        return !1;
      }
    }
    class c extends r.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc6492.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        () => c,
        "assert",
        () => a,
        "from",
        () => o,
        "magicBytes",
        0,
        n,
        "universalSignatureValidatorAbi",
        0,
        [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ],
        "universalSignatureValidatorBytecode",
        0,
        "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        "unwrap",
        () => s,
        "validate",
        () => l,
        "wrap",
        () => u,
      ],
      540258
    );
    var f = e.i(540258);
    e.s(["SignatureErc6492", 0, f], 42391);
    var d = e.i(364336),
      h = e.i(759384),
      p = e.i(126799);
    function m(e) {
      var t;
      let r, n;
      return (
        (t = e),
        (r = "Hex"),
        (n = (() => {
          if ("string" == typeof t) {
            if (t.length > 3 && t.length % 2 != 0)
              throw new i.InvalidLengthError(t);
            return h.fromHex(t);
          }
          return t;
        })()),
        (function e(t, r = "Hex") {
          if (0 === t.bytes.length)
            return "Hex" === r ? i.fromBytes(t.bytes) : t.bytes;
          let n = t.readByte();
          if ((n < 128 && t.decrementPosition(1), n < 192)) {
            let e = b(t, n, 128),
              a = t.readBytes(e);
            return "Hex" === r ? i.fromBytes(a) : a;
          }
          let a = b(t, n, 192);
          var o = t,
            s = a,
            u = r;
          let l = o.position,
            c = [];
          for (; o.position - l < s; ) c.push(e(o, u));
          return c;
        })(p.create(n, { recursiveReadLimit: 1 / 0 }), r)
      );
    }
    function b(e, t, i) {
      if (128 === i && t < 128) return 1;
      if (t <= i + 55) return t - i;
      if (t === i + 55 + 1) return e.readUint8();
      if (t === i + 55 + 2) return e.readUint16();
      if (t === i + 55 + 3) return e.readUint24();
      if (t === i + 55 + 4) return e.readUint32();
      throw new r.BaseError("Invalid RLP prefix");
    }
    function g(e, t = {}) {
      let { as: r = "Hex" } = t;
      return (function (e, t) {
        let { as: r } = t,
          n = (function e(t) {
            var r, i;
            let n, a, o, s;
            return Array.isArray(t)
              ? ((a = y(
                  (n = (r = t.map((t) => e(t))).reduce(
                    (e, t) => e + t.length,
                    0
                  ))
                )),
                {
                  length: n <= 55 ? 1 + n : 1 + a + n,
                  encode(e) {
                    for (let { encode: t } of (n <= 55
                      ? e.pushByte(192 + n)
                      : (e.pushByte(247 + a),
                        1 === a
                          ? e.pushUint8(n)
                          : 2 === a
                          ? e.pushUint16(n)
                          : 3 === a
                          ? e.pushUint24(n)
                          : e.pushUint32(n)),
                    r))
                      t(e);
                  },
                })
              : ((s = y(
                  (o = "string" == typeof (i = t) ? h.fromHex(i) : i).length
                )),
                {
                  length:
                    1 === o.length && o[0] < 128
                      ? 1
                      : o.length <= 55
                      ? 1 + o.length
                      : 1 + s + o.length,
                  encode(e) {
                    (1 === o.length && o[0] < 128) ||
                      (o.length <= 55
                        ? e.pushByte(128 + o.length)
                        : (e.pushByte(183 + s),
                          1 === s
                            ? e.pushUint8(o.length)
                            : 2 === s
                            ? e.pushUint16(o.length)
                            : 3 === s
                            ? e.pushUint24(o.length)
                            : e.pushUint32(o.length))),
                      e.pushBytes(o);
                  },
                });
          })(e),
          a = p.create(new Uint8Array(n.length));
        return (n.encode(a), "Hex" === r) ? i.fromBytes(a.bytes) : a.bytes;
      })(e, { as: r });
    }
    function y(e) {
      if (e <= 255) return 1;
      if (e <= 65535) return 2;
      if (e <= 0xffffff) return 3;
      if (e <= 0xffffffff) return 4;
      throw new r.BaseError("Length is too large.");
    }
    e.s(["fromHex", () => g, "toHex", () => m], 566335);
    var w = r,
      v = e.i(382721),
      x = e.i(62126);
    function E(e, t = {}) {
      let { recovered: r } = t;
      if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
        throw new O({ signature: e });
      if (e.r < 0n || e.r > x.maxUint256) throw new k({ value: e.r });
      if (e.s < 0n || e.s > x.maxUint256) throw new U({ value: e.s });
      if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
        throw new G({ value: e.yParity });
    }
    function B(e) {
      if (130 !== e.length && 132 !== e.length) throw new C({ signature: e });
      let t = BigInt(i.slice(e, 0, 32)),
        r = BigInt(i.slice(e, 32, 64)),
        n = (() => {
          let t = Number(`0x${e.slice(130)}`);
          if (!Number.isNaN(t))
            try {
              return F(t);
            } catch {
              throw new G({ value: t });
            }
        })();
      return void 0 === n ? { r: t, s: r } : { r: t, s: r, yParity: n };
    }
    function P(e) {
      if (void 0 !== e.r && void 0 !== e.s) return A(e);
    }
    function A(e) {
      let t = (() => {
        var t;
        if ("string" == typeof e) return B(e);
        if (e instanceof Uint8Array) return B(i.fromBytes(e));
        return "string" == typeof e.r
          ? I(e)
          : e.v
          ? { r: (t = e).r, s: t.s, yParity: F(t.v) }
          : {
              r: e.r,
              s: e.s,
              ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
            };
      })();
      return E(t), t;
    }
    function I(e) {
      let t = (() => {
        let t = e.v ? Number(e.v) : void 0,
          r = e.yParity ? Number(e.yParity) : void 0;
        if (
          ("number" == typeof t && "number" != typeof r && (r = F(t)),
          "number" != typeof r)
        )
          throw new G({ value: e.yParity });
        return r;
      })();
      return { r: BigInt(e.r), s: BigInt(e.s), yParity: t };
    }
    function S(e) {
      let [t, r, i] = e;
      return A({
        r: "0x" === r ? 0n : BigInt(r),
        s: "0x" === i ? 0n : BigInt(i),
        yParity: "0x" === t ? 0 : Number(t),
      });
    }
    function T(e) {
      E(e);
      let t = e.r,
        r = e.s;
      return i.concat(
        i.fromNumber(t, { size: 32 }),
        i.fromNumber(r, { size: 32 }),
        "number" == typeof e.yParity
          ? i.fromNumber(z(e.yParity), { size: 1 })
          : "0x"
      );
    }
    function N(e) {
      let { r: t, s: r, yParity: n } = e;
      return {
        r: i.fromNumber(t, { size: 32 }),
        s: i.fromNumber(r, { size: 32 }),
        yParity: 0 === n ? "0x0" : "0x1",
      };
    }
    function R(e) {
      let { r: t, s: r, yParity: n } = e;
      return [
        n ? "0x01" : "0x",
        0n === t ? "0x" : i.trimLeft(i.fromNumber(t)),
        0n === r ? "0x" : i.trimLeft(i.fromNumber(r)),
      ];
    }
    function F(e) {
      if (0 === e || 27 === e) return 0;
      if (1 === e || 28 === e) return 1;
      if (e >= 35) return +(e % 2 == 0);
      throw new q({ value: e });
    }
    function z(e) {
      if (0 === e) return 27;
      if (1 === e) return 28;
      throw new G({ value: e });
    }
    class C extends w.BaseError {
      constructor({ signature: e }) {
        super(`Value \`${e}\` is an invalid signature size.`, {
          metaMessages: [
            "Expected: 64 bytes or 65 bytes.",
            `Received ${i.size(i.from(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSerializedSizeError",
          });
      }
    }
    class O extends w.BaseError {
      constructor({ signature: e }) {
        super(
          `Signature \`${v.stringify(
            e
          )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.MissingPropertiesError",
          });
      }
    }
    class k extends w.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidRError",
          });
      }
    }
    class U extends w.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSError",
          });
      }
    }
    class G extends w.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidYParityError",
          });
      }
    }
    class q extends w.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidVError",
          });
      }
    }
    function H(e, t = {}) {
      return "string" == typeof e.chainId ? L(e) : { ...e, ...t.signature };
    }
    function L(e) {
      let { address: t, chainId: r, nonce: i } = e,
        n = P(e);
      return { address: t, chainId: Number(r), nonce: BigInt(i), ...n };
    }
    function $(e) {
      return e.map(L);
    }
    function M(e) {
      return (function (e, t = {}) {
        let { presign: r } = t;
        return d.keccak256(
          i.concat(
            "0x05",
            g(
              (function (e) {
                let { address: t, chainId: r, nonce: n } = e,
                  a = P(e);
                return [
                  r ? i.fromNumber(r) : "0x",
                  t,
                  n ? i.fromNumber(n) : "0x",
                  ...(a ? R(a) : []),
                ];
              })(
                r
                  ? { address: e.address, chainId: e.chainId, nonce: e.nonce }
                  : e
              )
            )
          )
        );
      })(e, { presign: !0 });
    }
    function V(e) {
      let { address: t, chainId: r, nonce: n, ...a } = e;
      return {
        address: t,
        chainId: i.fromNumber(r),
        nonce: i.fromNumber(n),
        ...N(a),
      };
    }
    function _(e) {
      return e.map(V);
    }
    e.s(
      [
        "assert",
        () => E,
        "extract",
        () => P,
        "from",
        () => A,
        "fromHex",
        () => B,
        "fromRpc",
        () => I,
        "fromTuple",
        () => S,
        "toHex",
        () => T,
        "toRpc",
        () => N,
        "toTuple",
        () => R,
        "yParityToV",
        () => z,
      ],
      779591
    ),
      e.s(
        [
          "from",
          () => H,
          "fromRpcList",
          () => $,
          "getSignPayload",
          () => M,
          "toRpcList",
          () => _,
        ],
        287556
      );
    var j = r,
      D = e.i(44314),
      Z = e.i(470525),
      W = e.i(140965);
    let K = BigInt(0),
      Y = BigInt(1);
    function X(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function J(e) {
      if (!X(e)) throw Error("Uint8Array expected");
    }
    function Q(e, t) {
      if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t);
    }
    function ee(e) {
      let t = e.toString(16);
      return 1 & t.length ? "0" + t : t;
    }
    function et(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      return "" === e ? K : BigInt("0x" + e);
    }
    let er =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      ei = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function en(e) {
      if ((J(e), er)) return e.toHex();
      let t = "";
      for (let r = 0; r < e.length; r++) t += ei[e[r]];
      return t;
    }
    function ea(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function eo(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      if (er) return Uint8Array.fromHex(e);
      let t = e.length,
        r = t / 2;
      if (t % 2)
        throw Error("hex string expected, got unpadded hex of length " + t);
      let i = new Uint8Array(r);
      for (let t = 0, n = 0; t < r; t++, n += 2) {
        let r = ea(e.charCodeAt(n)),
          a = ea(e.charCodeAt(n + 1));
        if (void 0 === r || void 0 === a)
          throw Error(
            'hex string expected, got non-hex character "' +
              (e[n] + e[n + 1]) +
              '" at index ' +
              n
          );
        i[t] = 16 * r + a;
      }
      return i;
    }
    function es(e) {
      return et(en(e));
    }
    function eu(e) {
      return J(e), et(en(Uint8Array.from(e).reverse()));
    }
    function el(e, t) {
      return eo(e.toString(16).padStart(2 * t, "0"));
    }
    function ec(e, t) {
      return el(e, t).reverse();
    }
    function ef(e, t, r) {
      let i;
      if ("string" == typeof t)
        try {
          i = eo(t);
        } catch (t) {
          throw Error(e + " must be hex string or Uint8Array, cause: " + t);
        }
      else if (X(t)) i = Uint8Array.from(t);
      else throw Error(e + " must be hex string or Uint8Array");
      let n = i.length;
      if ("number" == typeof r && n !== r)
        throw Error(e + " of length " + r + " expected, got " + n);
      return i;
    }
    function ed(...e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let i = e[r];
        J(i), (t += i.length);
      }
      let r = new Uint8Array(t);
      for (let t = 0, i = 0; t < e.length; t++) {
        let n = e[t];
        r.set(n, i), (i += n.length);
      }
      return r;
    }
    function eh(e) {
      if ("string" != typeof e) throw Error("string expected");
      return new Uint8Array(new TextEncoder().encode(e));
    }
    let ep = (e) => "bigint" == typeof e && K <= e;
    function em(e, t, r) {
      return ep(e) && ep(t) && ep(r) && t <= e && e < r;
    }
    function eb(e, t, r, i) {
      if (!em(t, r, i))
        throw Error(
          "expected valid " + e + ": " + r + " <= n < " + i + ", got " + t
        );
    }
    let eg = (e) => (Y << BigInt(e)) - Y,
      ey = (e) => new Uint8Array(e),
      ew = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || X(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
    function ev(e, t, r = {}) {
      let i = (t, r, i) => {
        let n = ew[r];
        if ("function" != typeof n) throw Error("invalid validator function");
        let a = e[t];
        if ((!i || void 0 !== a) && !n(a, e))
          throw Error(
            "param " + String(t) + " is invalid. Expected " + r + ", got " + a
          );
      };
      for (let [e, r] of Object.entries(t)) i(e, r, !1);
      for (let [e, t] of Object.entries(r)) i(e, t, !0);
      return e;
    }
    function ex(e) {
      let t = new WeakMap();
      return (r, ...i) => {
        let n = t.get(r);
        if (void 0 !== n) return n;
        let a = e(r, ...i);
        return t.set(r, a), a;
      };
    }
    let eE = BigInt(0),
      eB = BigInt(1),
      eP = BigInt(2),
      eA = BigInt(3),
      eI = BigInt(4),
      eS = BigInt(5),
      eT = BigInt(8);
    function eN(e, t) {
      let r = e % t;
      return r >= eE ? r : t + r;
    }
    function eR(e, t, r) {
      let i = e;
      for (; t-- > eE; ) (i *= i), (i %= r);
      return i;
    }
    function eF(e, t) {
      if (e === eE) throw Error("invert: expected non-zero number");
      if (t <= eE) throw Error("invert: expected positive modulus, got " + t);
      let r = eN(e, t),
        i = t,
        n = eE,
        a = eB,
        o = eB,
        s = eE;
      for (; r !== eE; ) {
        let e = i / r,
          t = i % r,
          u = n - o * e,
          l = a - s * e;
        (i = r), (r = t), (n = o), (a = s), (o = u), (s = l);
      }
      if (i !== eB) throw Error("invert: does not exist");
      return eN(n, t);
    }
    function ez(e, t) {
      let r = (e.ORDER + eB) / eI,
        i = e.pow(t, r);
      if (!e.eql(e.sqr(i), t)) throw Error("Cannot find square root");
      return i;
    }
    function eC(e, t) {
      let r = (e.ORDER - eS) / eT,
        i = e.mul(t, eP),
        n = e.pow(i, r),
        a = e.mul(t, n),
        o = e.mul(e.mul(a, eP), n),
        s = e.mul(a, e.sub(o, e.ONE));
      if (!e.eql(e.sqr(s), t)) throw Error("Cannot find square root");
      return s;
    }
    let eO = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN",
    ];
    function ek(e) {
      return ev(
        e,
        eO.reduce((e, t) => ((e[t] = "function"), e), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        })
      );
    }
    function eU(e, t, r = !1) {
      let i = Array(t.length).fill(r ? e.ZERO : void 0),
        n = t.reduce(
          (t, r, n) => (e.is0(r) ? t : ((i[n] = t), e.mul(t, r))),
          e.ONE
        ),
        a = e.inv(n);
      return (
        t.reduceRight(
          (t, r, n) => (e.is0(r) ? t : ((i[n] = e.mul(t, i[n])), e.mul(t, r))),
          a
        ),
        i
      );
    }
    function eG(e, t) {
      let r = (e.ORDER - eB) / eP,
        i = e.pow(t, r),
        n = e.eql(i, e.ONE),
        a = e.eql(i, e.ZERO),
        o = e.eql(i, e.neg(e.ONE));
      if (!n && !a && !o) throw Error("invalid Legendre symbol result");
      return n ? 1 : a ? 0 : -1;
    }
    function eq(e, t) {
      void 0 !== t && (0, Z.anumber)(t);
      let r = void 0 !== t ? t : e.toString(2).length,
        i = Math.ceil(r / 8);
      return { nBitLength: r, nByteLength: i };
    }
    function eH(e, t, r = !1, i = {}) {
      let n;
      if (e <= eE) throw Error("invalid field: expected ORDER > 0, got " + e);
      let { nBitLength: a, nByteLength: o } = eq(e, t);
      if (o > 2048)
        throw Error("invalid field: expected ORDER of <= 2048 bytes");
      let s = Object.freeze({
        ORDER: e,
        isLE: r,
        BITS: a,
        BYTES: o,
        MASK: eg(a),
        ZERO: eE,
        ONE: eB,
        create: (t) => eN(t, e),
        isValid: (t) => {
          if ("bigint" != typeof t)
            throw Error(
              "invalid field element: expected bigint, got " + typeof t
            );
          return eE <= t && t < e;
        },
        is0: (e) => e === eE,
        isOdd: (e) => (e & eB) === eB,
        neg: (t) => eN(-t, e),
        eql: (e, t) => e === t,
        sqr: (t) => eN(t * t, e),
        add: (t, r) => eN(t + r, e),
        sub: (t, r) => eN(t - r, e),
        mul: (t, r) => eN(t * r, e),
        pow: (e, t) =>
          (function (e, t, r) {
            if (r < eE) throw Error("invalid exponent, negatives unsupported");
            if (r === eE) return e.ONE;
            if (r === eB) return t;
            let i = e.ONE,
              n = t;
            for (; r > eE; )
              r & eB && (i = e.mul(i, n)), (n = e.sqr(n)), (r >>= eB);
            return i;
          })(s, e, t),
        div: (t, r) => eN(t * eF(r, e), e),
        sqrN: (e) => e * e,
        addN: (e, t) => e + t,
        subN: (e, t) => e - t,
        mulN: (e, t) => e * t,
        inv: (t) => eF(t, e),
        sqrt:
          i.sqrt ||
          ((t) => (
            n ||
              (n =
                e % eI === eA
                  ? ez
                  : e % eT === eS
                  ? eC
                  : (function (e) {
                      if (e < BigInt(3))
                        throw Error("sqrt is not defined for small field");
                      let t = e - eB,
                        r = 0;
                      for (; t % eP === eE; ) (t /= eP), r++;
                      let i = eP,
                        n = eH(e);
                      for (; 1 === eG(n, i); )
                        if (i++ > 1e3)
                          throw Error(
                            "Cannot find square root: probably non-prime P"
                          );
                      if (1 === r) return ez;
                      let a = n.pow(i, t),
                        o = (t + eB) / eP;
                      return function (e, i) {
                        if (e.is0(i)) return i;
                        if (1 !== eG(e, i))
                          throw Error("Cannot find square root");
                        let n = r,
                          s = e.mul(e.ONE, a),
                          u = e.pow(i, t),
                          l = e.pow(i, o);
                        for (; !e.eql(u, e.ONE); ) {
                          if (e.is0(u)) return e.ZERO;
                          let t = 1,
                            r = e.sqr(u);
                          for (; !e.eql(r, e.ONE); )
                            if ((t++, (r = e.sqr(r)), t === n))
                              throw Error("Cannot find square root");
                          let i = eB << BigInt(n - t - 1),
                            a = e.pow(s, i);
                          (n = t),
                            (s = e.sqr(a)),
                            (u = e.mul(u, s)),
                            (l = e.mul(l, a));
                        }
                        return l;
                      };
                    })(e)),
            n(s, t)
          )),
        toBytes: (e) => (r ? ec(e, o) : el(e, o)),
        fromBytes: (e) => {
          if (e.length !== o)
            throw Error(
              "Field.fromBytes: expected " + o + " bytes, got " + e.length
            );
          return r ? eu(e) : es(e);
        },
        invertBatch: (e) => eU(s, e),
        cmov: (e, t, r) => (r ? t : e),
      });
      return Object.freeze(s);
    }
    function eL(e) {
      if ("bigint" != typeof e) throw Error("field order must be bigint");
      return Math.ceil(e.toString(2).length / 8);
    }
    function e$(e) {
      let t = eL(e);
      return t + Math.ceil(t / 2);
    }
    function eM(e, t, r = !1) {
      let i = e.length,
        n = eL(t),
        a = e$(t);
      if (i < 16 || i < a || i > 1024)
        throw Error("expected " + a + "-1024 bytes of input, got " + i);
      let o = eN(r ? eu(e) : es(e), t - eB) + eB;
      return r ? ec(o, n) : el(o, n);
    }
    e.s(
      [
        "Field",
        () => eH,
        "FpInvertBatch",
        () => eU,
        "getMinHashLength",
        () => e$,
        "invert",
        () => eF,
        "mapHashToField",
        () => eM,
        "mod",
        () => eN,
        "nLength",
        () => eq,
        "pow2",
        () => eR,
        "validateField",
        () => ek,
      ],
      915907
    );
    let eV = BigInt(0),
      e_ = BigInt(1);
    function ej(e, t) {
      let r = t.negate();
      return e ? r : t;
    }
    function eD(e, t) {
      if (!Number.isSafeInteger(e) || e <= 0 || e > t)
        throw Error("invalid window size, expected [1.." + t + "], got W=" + e);
    }
    function eZ(e, t) {
      eD(e, t);
      let r = Math.ceil(t / e) + 1,
        i = 2 ** (e - 1),
        n = 2 ** e;
      return {
        windows: r,
        windowSize: i,
        mask: eg(e),
        maxNumber: n,
        shiftBy: BigInt(e),
      };
    }
    function eW(e, t, r) {
      let { windowSize: i, mask: n, maxNumber: a, shiftBy: o } = r,
        s = Number(e & n),
        u = e >> o;
      s > i && ((s -= a), (u += e_));
      let l = t * i,
        c = l + Math.abs(s) - 1,
        f = 0 === s;
      return {
        nextN: u,
        offset: c,
        isZero: f,
        isNeg: s < 0,
        isNegF: t % 2 != 0,
        offsetF: l,
      };
    }
    let eK = new WeakMap(),
      eY = new WeakMap();
    function eX(e) {
      return eY.get(e) || 1;
    }
    function eJ(e) {
      return (
        ek(e.Fp),
        ev(
          e,
          { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
          { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
        ),
        Object.freeze({ ...eq(e.n, e.nBitLength), ...e, ...{ p: e.Fp.ORDER } })
      );
    }
    function eQ(e) {
      void 0 !== e.lowS && Q("lowS", e.lowS),
        void 0 !== e.prehash && Q("prehash", e.prehash);
    }
    let e0 = {
        Err: class extends Error {
          constructor(e = "") {
            super(e);
          }
        },
        _tlv: {
          encode: (e, t) => {
            let { Err: r } = e0;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (1 & t.length) throw new r("tlv.encode: unpadded data");
            let i = t.length / 2,
              n = ee(i);
            if ((n.length / 2) & 128)
              throw new r("tlv.encode: long form length too big");
            let a = i > 127 ? ee((n.length / 2) | 128) : "";
            return ee(e) + a + n + t;
          },
          decode(e, t) {
            let { Err: r } = e0,
              i = 0;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (t.length < 2 || t[i++] !== e)
              throw new r("tlv.decode: wrong tlv");
            let n = t[i++],
              a = 0;
            if (128 & n) {
              let e = 127 & n;
              if (!e)
                throw new r(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (e > 4)
                throw new r("tlv.decode(long): byte length is too big");
              let o = t.subarray(i, i + e);
              if (o.length !== e)
                throw new r("tlv.decode: length bytes not complete");
              if (0 === o[0])
                throw new r("tlv.decode(long): zero leftmost byte");
              for (let e of o) a = (a << 8) | e;
              if (((i += e), a < 128))
                throw new r("tlv.decode(long): not minimal encoding");
            } else a = n;
            let o = t.subarray(i, i + a);
            if (o.length !== a) throw new r("tlv.decode: wrong value length");
            return { v: o, l: t.subarray(i + a) };
          },
        },
        _int: {
          encode(e) {
            let { Err: t } = e0;
            if (e < e1)
              throw new t("integer: negative integers are not allowed");
            let r = ee(e);
            if ((8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length))
              throw new t("unexpected DER parsing assertion: unpadded hex");
            return r;
          },
          decode(e) {
            let { Err: t } = e0;
            if (128 & e[0]) throw new t("invalid signature integer: negative");
            if (0 === e[0] && !(128 & e[1]))
              throw new t(
                "invalid signature integer: unnecessary leading zero"
              );
            return es(e);
          },
        },
        toSig(e) {
          let { Err: t, _int: r, _tlv: i } = e0,
            n = ef("signature", e),
            { v: a, l: o } = i.decode(48, n);
          if (o.length)
            throw new t("invalid signature: left bytes after parsing");
          let { v: s, l: u } = i.decode(2, a),
            { v: l, l: c } = i.decode(2, u);
          if (c.length)
            throw new t("invalid signature: left bytes after parsing");
          return { r: r.decode(s), s: r.decode(l) };
        },
        hexFromSig(e) {
          let { _tlv: t, _int: r } = e0,
            i = t.encode(2, r.encode(e.r)),
            n = t.encode(2, r.encode(e.s));
          return t.encode(48, i + n);
        },
      },
      e1 = BigInt(0),
      e6 = BigInt(1),
      e2 = BigInt(2),
      e5 = BigInt(3),
      e8 = BigInt(4);
    function e3(e) {
      let t,
        r =
          (ev(
            (t = eJ(e)),
            { hash: "hash", hmac: "function", randomBytes: "function" },
            { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }
          ),
          Object.freeze({ lowS: !0, ...t })),
        { Fp: i, n: n, nByteLength: a, nBitLength: o } = r,
        s = i.BYTES + 1,
        u = 2 * i.BYTES + 1;
      function l(e) {
        return eN(e, n);
      }
      let {
          ProjectivePoint: c,
          normPrivateKeyToScalar: f,
          weierstrassEquation: d,
          isWithinCurveOrder: h,
        } = (function (e) {
          var t;
          let r = (function (e) {
              let t = eJ(e);
              ev(
                t,
                { a: "field", b: "field" },
                {
                  allowInfinityPoint: "boolean",
                  allowedPrivateKeyLengths: "array",
                  clearCofactor: "function",
                  fromBytes: "function",
                  isTorsionFree: "function",
                  toBytes: "function",
                  wrapPrivateKey: "boolean",
                }
              );
              let { endo: r, Fp: i, a: n } = t;
              if (r) {
                if (!i.eql(n, i.ZERO))
                  throw Error("invalid endo: CURVE.a must be 0");
                if (
                  "object" != typeof r ||
                  "bigint" != typeof r.beta ||
                  "function" != typeof r.splitScalar
                )
                  throw Error(
                    'invalid endo: expected "beta": bigint and "splitScalar": function'
                  );
              }
              return Object.freeze({ ...t });
            })(e),
            { Fp: i } = r,
            n = eH(r.n, r.nBitLength),
            a =
              r.toBytes ||
              ((e, t, r) => {
                let n = t.toAffine();
                return ed(Uint8Array.from([4]), i.toBytes(n.x), i.toBytes(n.y));
              }),
            o =
              r.fromBytes ||
              ((e) => {
                let t = e.subarray(1);
                return {
                  x: i.fromBytes(t.subarray(0, i.BYTES)),
                  y: i.fromBytes(t.subarray(i.BYTES, 2 * i.BYTES)),
                };
              });
          function s(e) {
            let { a: t, b: n } = r,
              a = i.sqr(e),
              o = i.mul(a, e);
            return i.add(i.add(o, i.mul(e, t)), n);
          }
          function u(e, t) {
            let r = i.sqr(t),
              n = s(e);
            return i.eql(r, n);
          }
          if (!u(r.Gx, r.Gy)) throw Error("bad curve params: generator point");
          let l = i.mul(i.pow(r.a, e5), e8),
            c = i.mul(i.sqr(r.b), BigInt(27));
          if (i.is0(i.add(l, c))) throw Error("bad curve params: a or b");
          function f(e) {
            let t,
              {
                allowedPrivateKeyLengths: i,
                nByteLength: n,
                wrapPrivateKey: a,
                n: o,
              } = r;
            if (i && "bigint" != typeof e) {
              if (
                (X(e) && (e = en(e)),
                "string" != typeof e || !i.includes(e.length))
              )
                throw Error("invalid private key");
              e = e.padStart(2 * n, "0");
            }
            try {
              t = "bigint" == typeof e ? e : es(ef("private key", e, n));
            } catch (t) {
              throw Error(
                "invalid private key, expected hex or " +
                  n +
                  " bytes, got " +
                  typeof e
              );
            }
            return a && (t = eN(t, o)), eb("private key", t, e6, o), t;
          }
          function d(e) {
            if (!(e instanceof m)) throw Error("ProjectivePoint expected");
          }
          let h = ex((e, t) => {
              let { px: r, py: n, pz: a } = e;
              if (i.eql(a, i.ONE)) return { x: r, y: n };
              let o = e.is0();
              null == t && (t = o ? i.ONE : i.inv(a));
              let s = i.mul(r, t),
                u = i.mul(n, t),
                l = i.mul(a, t);
              if (o) return { x: i.ZERO, y: i.ZERO };
              if (!i.eql(l, i.ONE)) throw Error("invZ was invalid");
              return { x: s, y: u };
            }),
            p = ex((e) => {
              if (e.is0()) {
                if (r.allowInfinityPoint && !i.is0(e.py)) return;
                throw Error("bad point: ZERO");
              }
              let { x: t, y: n } = e.toAffine();
              if (!i.isValid(t) || !i.isValid(n))
                throw Error("bad point: x or y not FE");
              if (!u(t, n)) throw Error("bad point: equation left != right");
              if (!e.isTorsionFree())
                throw Error("bad point: not in prime-order subgroup");
              return !0;
            });
          class m {
            constructor(e, t, r) {
              if (null == e || !i.isValid(e)) throw Error("x required");
              if (null == t || !i.isValid(t) || i.is0(t))
                throw Error("y required");
              if (null == r || !i.isValid(r)) throw Error("z required");
              (this.px = e), (this.py = t), (this.pz = r), Object.freeze(this);
            }
            static fromAffine(e) {
              let { x: t, y: r } = e || {};
              if (!e || !i.isValid(t) || !i.isValid(r))
                throw Error("invalid affine point");
              if (e instanceof m) throw Error("projective point not allowed");
              let n = (e) => i.eql(e, i.ZERO);
              return n(t) && n(r) ? m.ZERO : new m(t, r, i.ONE);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static normalizeZ(e) {
              let t = eU(
                i,
                e.map((e) => e.pz)
              );
              return e.map((e, r) => e.toAffine(t[r])).map(m.fromAffine);
            }
            static fromHex(e) {
              let t = m.fromAffine(o(ef("pointHex", e)));
              return t.assertValidity(), t;
            }
            static fromPrivateKey(e) {
              return m.BASE.multiply(f(e));
            }
            static msm(e, t) {
              return (function (e, t, r, i) {
                if (!Array.isArray(r)) throw Error("array expected");
                r.forEach((t, r) => {
                  if (!(t instanceof e))
                    throw Error("invalid point at index " + r);
                });
                if (!Array.isArray(i)) throw Error("array of scalars expected");
                i.forEach((e, r) => {
                  if (!t.isValid(e))
                    throw Error("invalid scalar at index " + r);
                });
                let n = r.length,
                  a = i.length;
                if (n !== a)
                  throw Error(
                    "arrays of points and scalars must have equal length"
                  );
                let o = e.ZERO,
                  s = (function (e) {
                    let t;
                    for (t = 0; e > K; e >>= Y, t += 1);
                    return t;
                  })(BigInt(n)),
                  u = 1;
                s > 12 ? (u = s - 3) : s > 4 ? (u = s - 2) : s > 0 && (u = 2);
                let l = eg(u),
                  c = Array(Number(l) + 1).fill(o),
                  f = Math.floor((t.BITS - 1) / u) * u,
                  d = o;
                for (let e = f; e >= 0; e -= u) {
                  c.fill(o);
                  for (let t = 0; t < a; t++) {
                    let n = Number((i[t] >> BigInt(e)) & l);
                    c[n] = c[n].add(r[t]);
                  }
                  let t = o;
                  for (let e = c.length - 1, r = o; e > 0; e--)
                    (r = r.add(c[e])), (t = t.add(r));
                  if (((d = d.add(t)), 0 !== e))
                    for (let e = 0; e < u; e++) d = d.double();
                }
                return d;
              })(m, n, e, t);
            }
            _setWindowSize(e) {
              y.setWindowSize(this, e);
            }
            assertValidity() {
              p(this);
            }
            hasEvenY() {
              let { y: e } = this.toAffine();
              if (i.isOdd) return !i.isOdd(e);
              throw Error("Field doesn't support isOdd");
            }
            equals(e) {
              d(e);
              let { px: t, py: r, pz: n } = this,
                { px: a, py: o, pz: s } = e,
                u = i.eql(i.mul(t, s), i.mul(a, n)),
                l = i.eql(i.mul(r, s), i.mul(o, n));
              return u && l;
            }
            negate() {
              return new m(this.px, i.neg(this.py), this.pz);
            }
            double() {
              let { a: e, b: t } = r,
                n = i.mul(t, e5),
                { px: a, py: o, pz: s } = this,
                u = i.ZERO,
                l = i.ZERO,
                c = i.ZERO,
                f = i.mul(a, a),
                d = i.mul(o, o),
                h = i.mul(s, s),
                p = i.mul(a, o);
              return (
                (p = i.add(p, p)),
                (c = i.mul(a, s)),
                (c = i.add(c, c)),
                (u = i.mul(e, c)),
                (l = i.mul(n, h)),
                (l = i.add(u, l)),
                (u = i.sub(d, l)),
                (l = i.add(d, l)),
                (l = i.mul(u, l)),
                (u = i.mul(p, u)),
                (c = i.mul(n, c)),
                (h = i.mul(e, h)),
                (p = i.sub(f, h)),
                (p = i.mul(e, p)),
                (p = i.add(p, c)),
                (c = i.add(f, f)),
                (f = i.add(c, f)),
                (f = i.add(f, h)),
                (f = i.mul(f, p)),
                (l = i.add(l, f)),
                (h = i.mul(o, s)),
                (h = i.add(h, h)),
                (f = i.mul(h, p)),
                (u = i.sub(u, f)),
                (c = i.mul(h, d)),
                (c = i.add(c, c)),
                new m(u, l, (c = i.add(c, c)))
              );
            }
            add(e) {
              d(e);
              let { px: t, py: n, pz: a } = this,
                { px: o, py: s, pz: u } = e,
                l = i.ZERO,
                c = i.ZERO,
                f = i.ZERO,
                h = r.a,
                p = i.mul(r.b, e5),
                b = i.mul(t, o),
                g = i.mul(n, s),
                y = i.mul(a, u),
                w = i.add(t, n),
                v = i.add(o, s);
              (w = i.mul(w, v)),
                (v = i.add(b, g)),
                (w = i.sub(w, v)),
                (v = i.add(t, a));
              let x = i.add(o, u);
              return (
                (v = i.mul(v, x)),
                (x = i.add(b, y)),
                (v = i.sub(v, x)),
                (x = i.add(n, a)),
                (l = i.add(s, u)),
                (x = i.mul(x, l)),
                (l = i.add(g, y)),
                (x = i.sub(x, l)),
                (f = i.mul(h, v)),
                (l = i.mul(p, y)),
                (f = i.add(l, f)),
                (l = i.sub(g, f)),
                (f = i.add(g, f)),
                (c = i.mul(l, f)),
                (g = i.add(b, b)),
                (g = i.add(g, b)),
                (y = i.mul(h, y)),
                (v = i.mul(p, v)),
                (g = i.add(g, y)),
                (y = i.sub(b, y)),
                (y = i.mul(h, y)),
                (v = i.add(v, y)),
                (b = i.mul(g, v)),
                (c = i.add(c, b)),
                (b = i.mul(x, v)),
                (l = i.mul(w, l)),
                (l = i.sub(l, b)),
                (b = i.mul(w, g)),
                (f = i.mul(x, f)),
                new m(l, c, (f = i.add(f, b)))
              );
            }
            subtract(e) {
              return this.add(e.negate());
            }
            is0() {
              return this.equals(m.ZERO);
            }
            wNAF(e) {
              return y.wNAFCached(this, e, m.normalizeZ);
            }
            multiplyUnsafe(e) {
              let { endo: t, n: n } = r;
              eb("scalar", e, e1, n);
              let a = m.ZERO;
              if (e === e1) return a;
              if (this.is0() || e === e6) return this;
              if (!t || y.hasPrecomputes(this))
                return y.wNAFCachedUnsafe(this, e, m.normalizeZ);
              let { k1neg: o, k1: s, k2neg: u, k2: l } = t.splitScalar(e),
                c = a,
                f = a,
                d = this;
              for (; s > e1 || l > e1; )
                s & e6 && (c = c.add(d)),
                  l & e6 && (f = f.add(d)),
                  (d = d.double()),
                  (s >>= e6),
                  (l >>= e6);
              return (
                o && (c = c.negate()),
                u && (f = f.negate()),
                (f = new m(i.mul(f.px, t.beta), f.py, f.pz)),
                c.add(f)
              );
            }
            multiply(e) {
              let t,
                n,
                { endo: a, n: o } = r;
              if ((eb("scalar", e, e6, o), a)) {
                let { k1neg: r, k1: o, k2neg: s, k2: u } = a.splitScalar(e),
                  { p: l, f: c } = this.wNAF(o),
                  { p: f, f: d } = this.wNAF(u);
                (l = y.constTimeNegate(r, l)),
                  (f = y.constTimeNegate(s, f)),
                  (f = new m(i.mul(f.px, a.beta), f.py, f.pz)),
                  (t = l.add(f)),
                  (n = c.add(d));
              } else {
                let { p: r, f: i } = this.wNAF(e);
                (t = r), (n = i);
              }
              return m.normalizeZ([t, n])[0];
            }
            multiplyAndAddUnsafe(e, t, r) {
              let i = m.BASE,
                n = (e, t) =>
                  t !== e1 && t !== e6 && e.equals(i)
                    ? e.multiply(t)
                    : e.multiplyUnsafe(t),
                a = n(this, t).add(n(e, r));
              return a.is0() ? void 0 : a;
            }
            toAffine(e) {
              return h(this, e);
            }
            isTorsionFree() {
              let { h: e, isTorsionFree: t } = r;
              if (e === e6) return !0;
              if (t) return t(m, this);
              throw Error(
                "isTorsionFree() has not been declared for the elliptic curve"
              );
            }
            clearCofactor() {
              let { h: e, clearCofactor: t } = r;
              return e === e6
                ? this
                : t
                ? t(m, this)
                : this.multiplyUnsafe(r.h);
            }
            toRawBytes(e = !0) {
              return Q("isCompressed", e), this.assertValidity(), a(m, this, e);
            }
            toHex(e = !0) {
              return Q("isCompressed", e), en(this.toRawBytes(e));
            }
          }
          (m.BASE = new m(r.Gx, r.Gy, i.ONE)),
            (m.ZERO = new m(i.ZERO, i.ONE, i.ZERO));
          let { endo: b, nBitLength: g } = r,
            y =
              ((t = b ? Math.ceil(g / 2) : g),
              {
                constTimeNegate: ej,
                hasPrecomputes: (e) => 1 !== eX(e),
                unsafeLadder(e, t, r = m.ZERO) {
                  let i = e;
                  for (; t > eV; )
                    t & e_ && (r = r.add(i)), (i = i.double()), (t >>= e_);
                  return r;
                },
                precomputeWindow(e, r) {
                  let { windows: i, windowSize: n } = eZ(r, t),
                    a = [],
                    o = e,
                    s = o;
                  for (let e = 0; e < i; e++) {
                    (s = o), a.push(s);
                    for (let e = 1; e < n; e++) (s = s.add(o)), a.push(s);
                    o = s.double();
                  }
                  return a;
                },
                wNAF(e, r, i) {
                  let n = m.ZERO,
                    a = m.BASE,
                    o = eZ(e, t);
                  for (let e = 0; e < o.windows; e++) {
                    let {
                      nextN: t,
                      offset: s,
                      isZero: u,
                      isNeg: l,
                      isNegF: c,
                      offsetF: f,
                    } = eW(i, e, o);
                    (i = t),
                      u ? (a = a.add(ej(c, r[f]))) : (n = n.add(ej(l, r[s])));
                  }
                  return { p: n, f: a };
                },
                wNAFUnsafe(e, r, i, n = m.ZERO) {
                  let a = eZ(e, t);
                  for (let e = 0; e < a.windows && i !== eV; e++) {
                    let {
                      nextN: t,
                      offset: o,
                      isZero: s,
                      isNeg: u,
                    } = eW(i, e, a);
                    if (((i = t), !s)) {
                      let e = r[o];
                      n = n.add(u ? e.negate() : e);
                    }
                  }
                  return n;
                },
                getPrecomputes(e, t, r) {
                  let i = eK.get(t);
                  return (
                    i ||
                      ((i = this.precomputeWindow(t, e)),
                      1 !== e && eK.set(t, r(i))),
                    i
                  );
                },
                wNAFCached(e, t, r) {
                  let i = eX(e);
                  return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                },
                wNAFCachedUnsafe(e, t, r, i) {
                  let n = eX(e);
                  return 1 === n
                    ? this.unsafeLadder(e, t, i)
                    : this.wNAFUnsafe(n, this.getPrecomputes(n, e, r), t, i);
                },
                setWindowSize(e, r) {
                  eD(r, t), eY.set(e, r), eK.delete(e);
                },
              });
          return {
            CURVE: r,
            ProjectivePoint: m,
            normPrivateKeyToScalar: f,
            weierstrassEquation: s,
            isWithinCurveOrder: function (e) {
              return em(e, e6, r.n);
            },
          };
        })({
          ...r,
          toBytes(e, t, r) {
            let n = t.toAffine(),
              a = i.toBytes(n.x);
            return (Q("isCompressed", r), r)
              ? ed(Uint8Array.from([t.hasEvenY() ? 2 : 3]), a)
              : ed(Uint8Array.from([4]), a, i.toBytes(n.y));
          },
          fromBytes(e) {
            let t = e.length,
              r = e[0],
              n = e.subarray(1);
            if (t === s && (2 === r || 3 === r)) {
              let e,
                t = es(n);
              if (!em(t, e6, i.ORDER)) throw Error("Point is not on curve");
              let a = d(t);
              try {
                e = i.sqrt(a);
              } catch (e) {
                throw Error(
                  "Point is not on curve" +
                    (e instanceof Error ? ": " + e.message : "")
                );
              }
              return (
                ((1 & r) == 1) != ((e & e6) === e6) && (e = i.neg(e)),
                { x: t, y: e }
              );
            }
            if (t === u && 4 === r)
              return {
                x: i.fromBytes(n.subarray(0, i.BYTES)),
                y: i.fromBytes(n.subarray(i.BYTES, 2 * i.BYTES)),
              };
            throw Error(
              "invalid Point, expected length of " +
                s +
                ", or uncompressed " +
                u +
                ", got " +
                t
            );
          },
        }),
        p = (e, t, r) => es(e.slice(t, r));
      class m {
        constructor(e, t, r) {
          eb("r", e, e6, n),
            eb("s", t, e6, n),
            (this.r = e),
            (this.s = t),
            null != r && (this.recovery = r),
            Object.freeze(this);
        }
        static fromCompact(e) {
          return new m(
            p((e = ef("compactSignature", e, 2 * a)), 0, a),
            p(e, a, 2 * a)
          );
        }
        static fromDER(e) {
          let { r: t, s: r } = e0.toSig(ef("DER", e));
          return new m(t, r);
        }
        assertValidity() {}
        addRecoveryBit(e) {
          return new m(this.r, this.s, e);
        }
        recoverPublicKey(e) {
          let { r: t, s: a, recovery: o } = this,
            s = y(ef("msgHash", e));
          if (null == o || ![0, 1, 2, 3].includes(o))
            throw Error("recovery id invalid");
          let u = 2 === o || 3 === o ? t + r.n : t;
          if (u >= i.ORDER) throw Error("recovery id 2 or 3 invalid");
          let f = (1 & o) == 0 ? "02" : "03",
            d = c.fromHex(f + en(el(u, i.BYTES))),
            h = eF(u, n),
            p = l(-s * h),
            m = l(a * h),
            b = c.BASE.multiplyAndAddUnsafe(d, p, m);
          if (!b) throw Error("point at infinify");
          return b.assertValidity(), b;
        }
        hasHighS() {
          return this.s > n >> e6;
        }
        normalizeS() {
          return this.hasHighS()
            ? new m(this.r, l(-this.s), this.recovery)
            : this;
        }
        toDERRawBytes() {
          return eo(this.toDERHex());
        }
        toDERHex() {
          return e0.hexFromSig(this);
        }
        toCompactRawBytes() {
          return eo(this.toCompactHex());
        }
        toCompactHex() {
          return en(el(this.r, a)) + en(el(this.s, a));
        }
      }
      function b(e) {
        if ("bigint" == typeof e) return !1;
        if (e instanceof c) return !0;
        let t = ef("key", e).length,
          n = i.BYTES,
          o = n + 1;
        if (!r.allowedPrivateKeyLengths && a !== o)
          return t === o || t === 2 * n + 1;
      }
      let g =
          r.bits2int ||
          function (e) {
            if (e.length > 8192) throw Error("input is too large");
            let t = es(e),
              r = 8 * e.length - o;
            return r > 0 ? t >> BigInt(r) : t;
          },
        y =
          r.bits2int_modN ||
          function (e) {
            return l(g(e));
          },
        w = eg(o);
      function v(e) {
        return eb("num < 2^" + o, e, e1, w), el(e, a);
      }
      let x = { lowS: r.lowS, prehash: !1 },
        E = { lowS: r.lowS, prehash: !1 };
      return (
        c.BASE._setWindowSize(8),
        {
          CURVE: r,
          getPublicKey: function (e, t = !0) {
            return c.fromPrivateKey(e).toRawBytes(t);
          },
          getSharedSecret: function (e, t, r = !0) {
            if (!0 === b(e)) throw Error("first arg must be private key");
            if (!1 === b(t)) throw Error("second arg must be public key");
            return c.fromHex(t).multiply(f(e)).toRawBytes(r);
          },
          sign: function (e, t, a = x) {
            let { seed: o, k2sig: s } = (function (e, t, a = x) {
              if (["recovered", "canonical"].some((e) => e in a))
                throw Error("sign() legacy options not supported");
              let { hash: o, randomBytes: s } = r,
                { lowS: u, prehash: d, extraEntropy: p } = a;
              null == u && (u = !0),
                (e = ef("msgHash", e)),
                eQ(a),
                d && (e = ef("prehashed msgHash", o(e)));
              let b = y(e),
                w = f(t),
                E = [v(w), v(b)];
              if (null != p && !1 !== p) {
                let e = !0 === p ? s(i.BYTES) : p;
                E.push(ef("extraEntropy", e));
              }
              return {
                seed: ed(...E),
                k2sig: function (e) {
                  var t;
                  let r = g(e);
                  if (!h(r)) return;
                  let i = eF(r, n),
                    a = c.BASE.multiply(r).toAffine(),
                    o = l(a.x);
                  if (o === e1) return;
                  let s = l(i * l(b + o * w));
                  if (s === e1) return;
                  let f = (2 * (a.x !== o)) | Number(a.y & e6),
                    d = s;
                  return (
                    u &&
                      s > n >> e6 &&
                      ((d = (t = s) > n >> e6 ? l(-t) : t), (f ^= 1)),
                    new m(o, d, f)
                  );
                },
              };
            })(e, t, a);
            return (function (e, t, r) {
              if ("number" != typeof e || e < 2)
                throw Error("hashLen must be a number");
              if ("number" != typeof t || t < 2)
                throw Error("qByteLen must be a number");
              if ("function" != typeof r)
                throw Error("hmacFn must be a function");
              let i = ey(e),
                n = ey(e),
                a = 0,
                o = () => {
                  i.fill(1), n.fill(0), (a = 0);
                },
                s = (...e) => r(n, i, ...e),
                u = (e = ey(0)) => {
                  let t;
                  if (
                    ((n = s(((t = [0]), Uint8Array.from(t)), e)),
                    (i = s()),
                    0 !== e.length)
                  ) {
                    let t;
                    (n = s(((t = [1]), Uint8Array.from(t)), e)), (i = s());
                  }
                },
                l = () => {
                  if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
                  let e = 0,
                    r = [];
                  for (; e < t; ) {
                    let t = (i = s()).slice();
                    r.push(t), (e += i.length);
                  }
                  return ed(...r);
                };
              return (e, t) => {
                let r;
                for (o(), u(e); !(r = t(l())); ) u();
                return o(), r;
              };
            })(
              r.hash.outputLen,
              r.nByteLength,
              r.hmac
            )(o, s);
          },
          verify: function (e, t, i, a = E) {
            let o, s;
            (t = ef("msgHash", t)), (i = ef("publicKey", i));
            let { lowS: u, prehash: f, format: d } = a;
            if ((eQ(a), "strict" in a))
              throw Error("options.strict was renamed to lowS");
            if (void 0 !== d && "compact" !== d && "der" !== d)
              throw Error("format must be compact or der");
            let h = "string" == typeof e || X(e),
              p =
                !h &&
                !d &&
                "object" == typeof e &&
                null !== e &&
                "bigint" == typeof e.r &&
                "bigint" == typeof e.s;
            if (!h && !p)
              throw Error(
                "invalid signature, expected Uint8Array, hex string or Signature instance"
              );
            try {
              if ((p && (s = new m(e.r, e.s)), h)) {
                try {
                  "compact" !== d && (s = m.fromDER(e));
                } catch (e) {
                  if (!(e instanceof e0.Err)) throw e;
                }
                s || "der" === d || (s = m.fromCompact(e));
              }
              o = c.fromHex(i);
            } catch (e) {
              return !1;
            }
            if (!s || (u && s.hasHighS())) return !1;
            f && (t = r.hash(t));
            let { r: b, s: g } = s,
              w = y(t),
              v = eF(g, n),
              x = l(w * v),
              B = l(b * v),
              P = c.BASE.multiplyAndAddUnsafe(o, x, B)?.toAffine();
            return !!P && l(P.x) === b;
          },
          ProjectivePoint: c,
          Signature: m,
          utils: {
            isValidPrivateKey(e) {
              try {
                return f(e), !0;
              } catch (e) {
                return !1;
              }
            },
            normPrivateKeyToScalar: f,
            randomPrivateKey: () => {
              let e = e$(r.n);
              return eM(r.randomBytes(e), r.n);
            },
            precompute: (e = 8, t = c.BASE) => (
              t._setWindowSize(e), t.multiply(BigInt(3)), t
            ),
          },
        }
      );
    }
    function e4(e, t) {
      if ((ek(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)))
        throw Error("mapToCurveSimpleSWU: invalid opts");
      let r = (function (e, t) {
        let r = e.ORDER,
          i = e1;
        for (let e = r - e6; e % e2 === e1; e /= e2) i += e6;
        let n = i,
          a = e2 << (n - e6 - e6),
          o = a * e2,
          s = (r - e6) / o,
          u = (s - e6) / e2,
          l = o - e6,
          c = e.pow(t, s),
          f = e.pow(t, (s + e6) / e2),
          d = (t, r) => {
            let i = c,
              o = e.pow(r, l),
              s = e.sqr(o);
            s = e.mul(s, r);
            let d = e.mul(t, s);
            (d = e.pow(d, u)),
              (d = e.mul(d, o)),
              (o = e.mul(d, r)),
              (s = e.mul(d, t));
            let h = e.mul(s, o);
            d = e.pow(h, a);
            let p = e.eql(d, e.ONE);
            (o = e.mul(s, f)),
              (d = e.mul(h, i)),
              (s = e.cmov(o, s, p)),
              (h = e.cmov(d, h, p));
            for (let t = n; t > e6; t--) {
              let r = t - e2;
              r = e2 << (r - e6);
              let n = e.pow(h, r),
                a = e.eql(n, e.ONE);
              (o = e.mul(s, i)),
                (i = e.mul(i, i)),
                (n = e.mul(h, i)),
                (s = e.cmov(o, s, a)),
                (h = e.cmov(n, h, a));
            }
            return { isValid: p, value: s };
          };
        if (e.ORDER % e8 === e5) {
          let r = (e.ORDER - e5) / e8,
            i = e.sqrt(e.neg(t));
          d = (t, n) => {
            let a = e.sqr(n),
              o = e.mul(t, n);
            a = e.mul(a, o);
            let s = e.pow(a, r);
            s = e.mul(s, o);
            let u = e.mul(s, i),
              l = e.mul(e.sqr(s), n),
              c = e.eql(l, t),
              f = e.cmov(u, s, c);
            return { isValid: c, value: f };
          };
        }
        return d;
      })(e, t.Z);
      if (!e.isOdd) throw Error("Fp.isOdd is not implemented!");
      return (i) => {
        let n, a, o, s, u, l, c, f;
        (n = e.sqr(i)),
          (n = e.mul(n, t.Z)),
          (a = e.sqr(n)),
          (a = e.add(a, n)),
          (o = e.add(a, e.ONE)),
          (o = e.mul(o, t.B)),
          (s = e.cmov(t.Z, e.neg(a), !e.eql(a, e.ZERO))),
          (s = e.mul(s, t.A)),
          (a = e.sqr(o)),
          (l = e.sqr(s)),
          (u = e.mul(l, t.A)),
          (a = e.add(a, u)),
          (a = e.mul(a, o)),
          (l = e.mul(l, s)),
          (u = e.mul(l, t.B)),
          (a = e.add(a, u)),
          (c = e.mul(n, o));
        let { isValid: d, value: h } = r(a, l);
        (f = e.mul(n, i)),
          (f = e.mul(f, h)),
          (c = e.cmov(c, o, d)),
          (f = e.cmov(f, h, d));
        let p = e.isOdd(i) === e.isOdd(f);
        f = e.cmov(e.neg(f), f, p);
        let m = eU(e, [s], !0)[0];
        return { x: (c = e.mul(c, m)), y: f };
      };
    }
    function e9(e, t) {
      let r = (t) =>
        e3({
          ...e,
          ...{
            hash: t,
            hmac: (e, ...r) => (0, W.hmac)(t, e, (0, Z.concatBytes)(...r)),
            randomBytes: Z.randomBytes,
          },
        });
      return { ...r(t), create: r };
    }
    function e7(e, t) {
      if ((te(e), te(t), e < 0 || e >= 1 << (8 * t)))
        throw Error("invalid I2OSP input: " + e);
      let r = Array.from({ length: t }).fill(0);
      for (let i = t - 1; i >= 0; i--) (r[i] = 255 & e), (e >>>= 8);
      return new Uint8Array(r);
    }
    function te(e) {
      if (!Number.isSafeInteger(e)) throw Error("number expected");
    }
    function tt(e, t, r) {
      let i;
      ev(r, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash",
      });
      let { p: n, k: a, m: o, hash: s, expand: u, DST: l } = r;
      J(e), te(t);
      let c = "string" == typeof l ? eh(l) : l,
        f = Math.ceil((n.toString(2).length + a) / 8),
        d = t * o * f;
      if ("xmd" === u)
        i = (function (e, t, r, i) {
          J(e),
            J(t),
            te(r),
            t.length > 255 && (t = i(ed(eh("H2C-OVERSIZE-DST-"), t)));
          let { outputLen: n, blockLen: a } = i,
            o = Math.ceil(r / n);
          if (r > 65535 || o > 255)
            throw Error("expand_message_xmd: invalid lenInBytes");
          let s = ed(t, e7(t.length, 1)),
            u = e7(0, a),
            l = e7(r, 2),
            c = Array(o),
            f = i(ed(u, e, l, e7(0, 1), s));
          c[0] = i(ed(f, e7(1, 1), s));
          for (let e = 1; e <= o; e++) {
            let t = [
              (function (e, t) {
                let r = new Uint8Array(e.length);
                for (let i = 0; i < e.length; i++) r[i] = e[i] ^ t[i];
                return r;
              })(f, c[e - 1]),
              e7(e + 1, 1),
              s,
            ];
            c[e] = i(ed(...t));
          }
          return ed(...c).slice(0, r);
        })(e, c, d, s);
      else if ("xof" === u)
        i = (function (e, t, r, i, n) {
          if ((J(e), J(t), te(r), t.length > 255)) {
            let e = Math.ceil((2 * i) / 8);
            t = n
              .create({ dkLen: e })
              .update(eh("H2C-OVERSIZE-DST-"))
              .update(t)
              .digest();
          }
          if (r > 65535 || t.length > 255)
            throw Error("expand_message_xof: invalid lenInBytes");
          return n
            .create({ dkLen: r })
            .update(e)
            .update(e7(r, 2))
            .update(t)
            .update(e7(t.length, 1))
            .digest();
        })(e, c, d, a, s);
      else if ("_internal_pass" === u) i = e;
      else throw Error('expand must be "xmd" or "xof"');
      let h = Array(t);
      for (let e = 0; e < t; e++) {
        let t = Array(o);
        for (let r = 0; r < o; r++) {
          let a = f * (r + e * o),
            s = i.subarray(a, a + f);
          t[r] = eN(es(s), n);
        }
        h[e] = t;
      }
      return h;
    }
    function tr(e, t) {
      let r = t.map((e) => Array.from(e).reverse());
      return (t, i) => {
        let [n, a, o, s] = r.map((r) =>
            r.reduce((r, i) => e.add(e.mul(r, t), i))
          ),
          [u, l] = eU(e, [a, s], !0);
        return (t = e.mul(n, u)), (i = e.mul(i, e.mul(o, l))), { x: t, y: i };
      };
    }
    function ti(e, t, r) {
      if ("function" != typeof t) throw Error("mapToCurve() must be defined");
      function i(r) {
        return e.fromAffine(t(r));
      }
      function n(t) {
        let r = t.clearCofactor();
        return r.equals(e.ZERO) ? e.ZERO : (r.assertValidity(), r);
      }
      return {
        defaults: r,
        hashToCurve(e, t) {
          let a = tt(e, 2, { ...r, DST: r.DST, ...t }),
            o = i(a[0]),
            s = i(a[1]);
          return n(o.add(s));
        },
        encodeToCurve: (e, t) =>
          n(i(tt(e, 1, { ...r, DST: r.encodeDST, ...t })[0])),
        mapToCurve(e) {
          if (!Array.isArray(e)) throw Error("expected array of bigints");
          for (let t of e)
            if ("bigint" != typeof t) throw Error("expected array of bigints");
          return n(i(e));
        },
      };
    }
    e.s(["mapToCurveSimpleSWU", () => e4, "weierstrass", () => e3], 863155),
      e.s(["createCurve", () => e9], 388600),
      e.s(["createHasher", () => ti, "isogenyMap", () => tr], 234415);
    let tn = BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      ta = BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      to = BigInt(0),
      ts = BigInt(1),
      tu = BigInt(2),
      tl = (e, t) => (e + t / tu) / t,
      tc = eH(tn, void 0, void 0, {
        sqrt: function (e) {
          let t = BigInt(3),
            r = BigInt(6),
            i = BigInt(11),
            n = BigInt(22),
            a = BigInt(23),
            o = BigInt(44),
            s = BigInt(88),
            u = (e * e * e) % tn,
            l = (u * u * e) % tn,
            c = (eR(l, t, tn) * l) % tn,
            f = (eR(c, t, tn) * l) % tn,
            d = (eR(f, tu, tn) * u) % tn,
            h = (eR(d, i, tn) * d) % tn,
            p = (eR(h, n, tn) * h) % tn,
            m = (eR(p, o, tn) * p) % tn,
            b = (eR(m, s, tn) * m) % tn,
            g = (eR(b, o, tn) * p) % tn,
            y = (eR(g, t, tn) * l) % tn,
            w = (eR(y, a, tn) * h) % tn,
            v = (eR(w, r, tn) * u) % tn,
            x = eR(v, tu, tn);
          if (!tc.eql(tc.sqr(x), e)) throw Error("Cannot find square root");
          return x;
        },
      }),
      tf = e9(
        {
          a: to,
          b: BigInt(7),
          Fp: tc,
          n: ta,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          ),
          h: BigInt(1),
          lowS: !0,
          endo: {
            beta: BigInt(
              "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
            ),
            splitScalar: (e) => {
              let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                r = -ts * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                n = BigInt("0x100000000000000000000000000000000"),
                a = tl(t * e, ta),
                o = tl(-r * e, ta),
                s = eN(e - a * t - o * i, ta),
                u = eN(-a * r - o * t, ta),
                l = s > n,
                c = u > n;
              if ((l && (s = ta - s), c && (u = ta - u), s > n || u > n))
                throw Error("splitScalar: Endomorphism failed, k=" + e);
              return { k1neg: l, k1: s, k2neg: c, k2: u };
            },
          },
        },
        D.sha256
      );
    tf.ProjectivePoint;
    let td = tr(
        tc,
        [
          [
            "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
            "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
            "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
            "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
          ],
          [
            "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
            "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
          ],
          [
            "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
            "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
            "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
            "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
          ],
          [
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
            "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
            "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
          ],
        ].map((e) => e.map((e) => BigInt(e)))
      ),
      th = e4(tc, {
        A: BigInt(
          "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
        ),
        B: BigInt("1771"),
        Z: tc.create(BigInt("-11")),
      });
    ti(
      tf.ProjectivePoint,
      (e) => {
        let { x: t, y: r } = th(tc.create(e[0]));
        return td(t, r);
      },
      {
        DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
        encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
        p: tc.ORDER,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: D.sha256,
      }
    );
    var tp = e.i(308131),
      tm = e.i(620046);
    function tb(e) {
      return tp.fromPublicKey(
        (function (e) {
          let { payload: t, signature: r } = e,
            { r: n, s: a, yParity: o } = r,
            s = new tf.Signature(BigInt(n), BigInt(a))
              .addRecoveryBit(o)
              .recoverPublicKey(i.from(t).substring(2));
          return tm.from(s);
        })(e)
      );
    }
    function tg(e) {
      let { address: t, hash: r, payload: i, publicKey: n, signature: a } = e;
      return t
        ? tp.isEqual(t, tb({ payload: i, signature: a }))
        : tf.verify(
            a,
            h.from(i),
            tm.toBytes(n),
            ...(r ? [{ prehash: !0, lowS: !0 }] : [])
          );
    }
    e.s(["recoverAddress", () => tb, "verify", () => tg], 11517);
    let ty =
        "0x8010801080108010801080108010801080108010801080108010801080108010",
      tw = t.from(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
    function tv(e) {
      if ("string" == typeof e) {
        if (i.slice(e, -32) !== ty) throw new tA(e);
      } else E(e.authorization);
    }
    function tx(e) {
      return "string" == typeof e ? tE(e) : e;
    }
    function tE(e) {
      tv(e);
      let r = i.toNumber(i.slice(e, -64, -32)),
        n = i.slice(e, -r - 64, -64),
        a = i.slice(e, 0, -r - 64),
        [o, s, u] = t.decode(tw, n);
      return {
        authorization: H({
          address: o.delegation,
          chainId: Number(o.chainId),
          nonce: o.nonce,
          yParity: o.yParity,
          r: o.r,
          s: o.s,
        }),
        signature: a,
        ...(u && "0x" !== u ? { data: u, to: s } : {}),
      };
    }
    function tB(e) {
      let { data: r, signature: n } = e;
      tv(e);
      let a = tb({
          payload: M(e.authorization),
          signature: A(e.authorization),
        }),
        o = t.encode(tw, [
          {
            ...e.authorization,
            delegation: e.authorization.address,
            chainId: BigInt(e.authorization.chainId),
          },
          e.to ?? a,
          r ?? "0x",
        ]),
        s = i.fromNumber(i.size(o), { size: 32 });
      return i.concat(n, o, s, ty);
    }
    function tP(e) {
      try {
        return tv(e), !0;
      } catch {
        return !1;
      }
    }
    class tA extends j.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc8010.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        () => tA,
        "assert",
        () => tv,
        "from",
        () => tx,
        "magicBytes",
        0,
        ty,
        "suffixParameters",
        0,
        tw,
        "unwrap",
        () => tE,
        "validate",
        () => tP,
        "wrap",
        () => tB,
      ],
      102278
    );
    var tI = e.i(102278);
    e.s(["SignatureErc8010", 0, tI], 152780);
  },
  639897,
  (e) => {
    "use strict";
    var t = e.i(823838),
      r = e.i(806685),
      i = e.i(290392);
    async function n({ address: e, authorization: n, signature: a }) {
      return (0, r.isAddressEqual)(
        (0, t.getAddress)(e),
        await (0, i.recoverAuthorizationAddress)({
          authorization: n,
          signature: a,
        })
      );
    }
    e.s(["verifyAuthorization", () => n]);
  },
  913091,
  (e) => {
    "use strict";
    var t = e.i(337575),
      r = e.i(450323),
      i = e.i(769936);
    function n({ r: e, s: n, to: a = "hex", v: o, yParity: s }) {
      let u = (() => {
          if (0 === s || 1 === s) return s;
          if (o && (27n === o || 28n === o || o >= 35n))
            return +(o % 2n === 0n);
          throw Error("Invalid `v` or `yParity` value");
        })(),
        l = `0x${new t.secp256k1.Signature(
          (0, r.hexToBigInt)(e),
          (0, r.hexToBigInt)(n)
        ).toCompactHex()}${0 === u ? "1b" : "1c"}`;
      return "hex" === a ? l : (0, i.hexToBytes)(l);
    }
    e.s(["serializeSignature", () => n]);
  },
  493617,
  (e) => {
    "use strict";
    var t = e.i(42391),
      r = e.i(152780),
      i = e.i(752012),
      n = e.i(472503),
      a = e.i(878023),
      o = e.i(289169),
      s = e.i(656679),
      u = e.i(823838),
      l = e.i(806685),
      c = e.i(639897),
      f = e.i(147526),
      d = e.i(880841),
      h = e.i(450323),
      p = e.i(675107),
      m = e.i(467125),
      b = e.i(418217),
      g = e.i(913091),
      y = e.i(989509),
      w = e.i(528804),
      v = e.i(388750);
    async function x(e, t) {
      let i,
        {
          address: n,
          chain: a = e.chain,
          hash: o,
          erc6492VerifierAddress: s = t.universalSignatureVerifierAddress ??
            a?.contracts?.erc6492Verifier?.address,
          multicallAddress: c = t.multicallAddress ??
            a?.contracts?.multicall3?.address,
        } = t;
      if (a?.verifyHash) return await a.verifyHash(e, t);
      let f =
        ((i = t.signature),
        (0, d.isHex)(i)
          ? i
          : "object" == typeof i && "r" in i && "s" in i
          ? (0, g.serializeSignature)(i)
          : (0, p.bytesToHex)(i));
      try {
        if (r.SignatureErc8010.validate(f))
          return await E(e, { ...t, multicallAddress: c, signature: f });
        return await B(e, { ...t, verifierAddress: s, signature: f });
      } catch (e) {
        try {
          if (
            (0, l.isAddressEqual)(
              (0, u.getAddress)(n),
              await (0, b.recoverAddress)({ hash: o, signature: f })
            )
          )
            return !0;
        } catch {}
        if (e instanceof A) return !1;
        throw e;
      }
    }
    async function E(e, t) {
      let {
          address: a,
          blockNumber: o,
          blockTag: u,
          hash: l,
          multicallAddress: d,
        } = t,
        {
          authorization: h,
          data: b,
          signature: g,
          to: y,
        } = r.SignatureErc8010.unwrap(t.signature);
      if (
        (await (0, w.getCode)(e, {
          address: a,
          blockNumber: o,
          blockTag: u,
        })) === (0, f.concatHex)(["0xef0100", h.address])
      )
        return await P(e, {
          address: a,
          blockNumber: o,
          blockTag: u,
          hash: l,
          signature: g,
        });
      let x = {
        address: h.address,
        chainId: Number(h.chainId),
        nonce: Number(h.nonce),
        r: (0, p.numberToHex)(h.r, { size: 32 }),
        s: (0, p.numberToHex)(h.s, { size: 32 }),
        yParity: h.yParity,
      };
      if (!(await (0, c.verifyAuthorization)({ address: a, authorization: x })))
        throw new A();
      let E = await (0, m.getAction)(
          e,
          v.readContract,
          "readContract"
        )({
          ...(d ? { address: d } : { code: n.multicall3Bytecode }),
          authorizationList: [x],
          abi: i.multicall3Abi,
          blockNumber: o,
          blockTag: "pending",
          functionName: "aggregate3",
          args: [
            [
              ...(b ? [{ allowFailure: !0, target: y ?? a, callData: b }] : []),
              {
                allowFailure: !0,
                target: a,
                callData: (0, s.encodeFunctionData)({
                  abi: i.erc1271Abi,
                  functionName: "isValidSignature",
                  args: [l, g],
                }),
              },
            ],
          ],
        }),
        B = E[E.length - 1]?.returnData;
      if (B?.startsWith("0x1626ba7e")) return !0;
      throw new A();
    }
    async function B(e, r) {
      let {
          address: u,
          factory: l,
          factoryData: c,
          hash: f,
          signature: d,
          verifierAddress: p,
          ...b
        } = r,
        g = await (async () =>
          (!l && !c) || t.SignatureErc6492.validate(d)
            ? d
            : t.SignatureErc6492.wrap({ data: c, signature: d, to: l }))(),
        w = p
          ? {
              to: p,
              data: (0, s.encodeFunctionData)({
                abi: i.erc6492SignatureValidatorAbi,
                functionName: "isValidSig",
                args: [u, f, g],
              }),
              ...b,
            }
          : {
              data: (0, o.encodeDeployData)({
                abi: i.erc6492SignatureValidatorAbi,
                args: [u, f, g],
                bytecode: n.erc6492SignatureValidatorByteCode,
              }),
              ...b,
            },
        { data: v } = await (0, m.getAction)(
          e,
          y.call,
          "call"
        )(w).catch((e) => {
          if (e instanceof a.CallExecutionError) throw new A();
          throw e;
        });
      if ((0, h.hexToBool)(v ?? "0x0")) return !0;
      throw new A();
    }
    async function P(e, t) {
      let {
        address: r,
        blockNumber: n,
        blockTag: o,
        hash: s,
        signature: u,
      } = t;
      if (
        (
          await (0, m.getAction)(
            e,
            v.readContract,
            "readContract"
          )({
            address: r,
            abi: i.erc1271Abi,
            args: [s, u],
            blockNumber: n,
            blockTag: o,
            functionName: "isValidSignature",
          }).catch((e) => {
            if (e instanceof a.ContractFunctionExecutionError) throw new A();
            throw e;
          })
        ).startsWith("0x1626ba7e")
      )
        return !0;
      throw new A();
    }
    class A extends Error {}
    e.s(["verifyHash", () => x]);
  },
]);
