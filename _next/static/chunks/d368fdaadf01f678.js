(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  251666,
  824820,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(569934);
    class a extends r.BaseError {
      constructor(e) {
        super(`Filter type "${e}" is not supported.`, {
          name: "FilterTypeNotSupportedError",
        });
      }
    }
    e.s(["FilterTypeNotSupportedError", () => a], 824820);
    var n = e.i(769936),
      i = e.i(831095),
      o = e.i(774620),
      s = e.i(704434),
      c = e.i(332881),
      l = e.i(627173);
    let u = "/docs/contract/encodeEventTopics";
    function d(e) {
      let { abi: r, eventName: a, args: n } = e,
        i = r[0];
      if (a) {
        let e = (0, l.getAbiItem)({ abi: r, name: a });
        if (!e) throw new t.AbiEventNotFoundError(a, { docsPath: u });
        i = e;
      }
      if ("event" !== i.type)
        throw new t.AbiEventNotFoundError(void 0, { docsPath: u });
      let s = (0, c.formatAbiItem)(i),
        d = (0, o.toEventSelector)(s),
        g = [];
      if (n && "inputs" in i) {
        let e = i.inputs?.filter((e) => "indexed" in e && e.indexed),
          t = Array.isArray(n)
            ? n
            : Object.values(n).length > 0
            ? e?.map((e) => n[e.name]) ?? []
            : [];
        t.length > 0 &&
          (g =
            e?.map((e, r) =>
              Array.isArray(t[r])
                ? t[r].map((a, n) => f({ param: e, value: t[r][n] }))
                : void 0 !== t[r] && null !== t[r]
                ? f({ param: e, value: t[r] })
                : null
            ) ?? []);
      }
      return [d, ...g];
    }
    function f({ param: e, value: t }) {
      if ("string" === e.type || "bytes" === e.type)
        return (0, i.keccak256)((0, n.toBytes)(t));
      if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
        throw new a(e.type);
      return (0, s.encodeAbiParameters)([e], [t]);
    }
    e.s(["encodeEventTopics", () => d], 251666);
  },
  537096,
  (e) => {
    "use strict";
    function t(e, { method: t }) {
      let r = {};
      return (
        "fallback" === e.transport.type &&
          e.transport.onResponse?.(
            ({ method: e, response: a, status: n, transport: i }) => {
              "success" === n && t === e && (r[a] = i.request);
            }
          ),
        (t) => r[t] || e.request
      );
    }
    e.s(["createFilterRequestScope", () => t]);
  },
  722192,
  (e) => {
    "use strict";
    var t = e.i(251666),
      r = e.i(675107),
      a = e.i(537096);
    async function n(e, n) {
      let {
          address: i,
          abi: o,
          args: s,
          eventName: c,
          fromBlock: l,
          strict: u,
          toBlock: d,
        } = n,
        f = (0, a.createFilterRequestScope)(e, { method: "eth_newFilter" }),
        g = c
          ? (0, t.encodeEventTopics)({ abi: o, args: s, eventName: c })
          : void 0,
        p = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: i,
              fromBlock: "bigint" == typeof l ? (0, r.numberToHex)(l) : l,
              toBlock: "bigint" == typeof d ? (0, r.numberToHex)(d) : d,
              topics: g,
            },
          ],
        });
      return {
        abi: o,
        args: s,
        eventName: c,
        id: p,
        request: f(p),
        strict: !!u,
        type: "event",
      };
    }
    e.s(["createContractEventFilter", () => n]);
  },
  369121,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(656679),
      a = e.i(807749),
      n = e.i(467125),
      i = e.i(484734);
    async function o(e, o) {
      let {
          abi: s,
          address: c,
          args: l,
          functionName: u,
          dataSuffix: d = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...f
        } = o,
        g = (0, r.encodeFunctionData)({ abi: s, args: l, functionName: u });
      try {
        return await (0, n.getAction)(
          e,
          i.estimateGas,
          "estimateGas"
        )({ data: `${g}${d ? d.replace("0x", "") : ""}`, to: c, ...f });
      } catch (r) {
        let e = f.account ? (0, t.parseAccount)(f.account) : void 0;
        throw (0, a.getContractError)(r, {
          abi: s,
          address: c,
          args: l,
          docsPath: "/docs/contract/estimateContractGas",
          functionName: u,
          sender: e?.address,
        });
      }
    }
    e.s(["estimateContractGas", () => o]);
  },
  563700,
  222427,
  897282,
  402676,
  (e) => {
    "use strict";
    var t = e.i(627173),
      r = e.i(467125),
      a = e.i(251666),
      n = e.i(806685),
      i = e.i(769936),
      o = e.i(831095),
      s = e.i(774620),
      c = e.i(70204),
      l = e.i(493429),
      u = e.i(401319),
      d = e.i(249311),
      f = e.i(332881);
    let g = "/docs/contract/decodeEventLog";
    function p(e) {
      let { abi: t, data: r, strict: a, topics: n } = e,
        i = a ?? !0,
        [o, ...p] = n;
      if (!o) throw new c.AbiEventSignatureEmptyTopicsError({ docsPath: g });
      let m = t.find(
        (e) =>
          "event" === e.type &&
          o === (0, s.toEventSelector)((0, f.formatAbiItem)(e))
      );
      if (!(m && "name" in m) || "event" !== m.type)
        throw new c.AbiEventSignatureNotFoundError(o, { docsPath: g });
      let { name: h, inputs: b } = m,
        v = b?.some((e) => !("name" in e && e.name)),
        y = v ? [] : {},
        w = b
          .map((e, t) => [e, t])
          .filter(([e]) => "indexed" in e && e.indexed),
        A = [];
      for (let e = 0; e < w.length; e++) {
        let [t, r] = w[e],
          a = p[e];
        if (!a) {
          if (i) throw new c.DecodeLogTopicsMismatch({ abiItem: m, param: t });
          A.push([t, r]);
          continue;
        }
        y[v ? r : t.name || r] = (function ({ param: e, value: t }) {
          return "string" === e.type ||
            "bytes" === e.type ||
            "tuple" === e.type ||
            e.type.match(/^(.*)\[(\d+)?\]$/)
            ? t
            : ((0, d.decodeAbiParameters)([e], t) || [])[0];
        })({ param: t, value: a });
      }
      let E = b.filter((e) => !("indexed" in e && e.indexed)),
        T = i ? E : [...A.map(([e]) => e), ...E];
      if (T.length > 0) {
        if (r && "0x" !== r)
          try {
            let e = (0, d.decodeAbiParameters)(T, r);
            if (e) {
              let t = 0;
              if (!i) for (let [r, a] of A) y[v ? a : r.name || a] = e[t++];
              if (v)
                for (let r = 0; r < b.length; r++)
                  void 0 === y[r] && t < e.length && (y[r] = e[t++]);
              else for (let r = 0; r < E.length; r++) y[E[r].name] = e[t++];
            }
          } catch (e) {
            if (i) {
              if (
                e instanceof c.AbiDecodingDataSizeTooSmallError ||
                e instanceof l.PositionOutOfBoundsError
              )
                throw new c.DecodeLogDataMismatch({
                  abiItem: m,
                  data: r,
                  params: T,
                  size: (0, u.size)(r),
                });
              throw e;
            }
          }
        else if (i)
          throw new c.DecodeLogDataMismatch({
            abiItem: m,
            data: "0x",
            params: T,
            size: 0,
          });
      }
      return { eventName: h, args: Object.values(y).length > 0 ? y : void 0 };
    }
    function m(e) {
      let { abi: t, args: r, logs: a, strict: c = !0 } = e,
        l = (() => {
          if (e.eventName)
            return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
        })(),
        u = t
          .filter((e) => "event" === e.type)
          .map((e) => ({ abi: e, selector: (0, s.toEventSelector)(e) }));
      return a
        .map((e) => {
          let t,
            a,
            s = u.filter((t) => e.topics[0] === t.selector);
          if (0 === s.length) return null;
          for (let r of s)
            try {
              (t = p({ ...e, abi: [r.abi], strict: !0 })), (a = r);
              break;
            } catch {}
          if (!t && !c) {
            a = s[0];
            try {
              t = p({
                data: e.data,
                topics: e.topics,
                abi: [a.abi],
                strict: !1,
              });
            } catch {
              let t = a.abi.inputs?.some((e) => !("name" in e && e.name));
              return { ...e, args: t ? [] : {}, eventName: a.abi.name };
            }
          }
          return t &&
            a &&
            (!l || l.includes(t.eventName)) &&
            (function (e) {
              let { args: t, inputs: r, matchArgs: a } = e;
              if (!a) return !0;
              if (!t) return !1;
              function s(e, t, r) {
                try {
                  if ("address" === e.type) return (0, n.isAddressEqual)(t, r);
                  if ("string" === e.type || "bytes" === e.type)
                    return (0, o.keccak256)((0, i.toBytes)(t)) === r;
                  return t === r;
                } catch {
                  return !1;
                }
              }
              return Array.isArray(t) && Array.isArray(a)
                ? a.every((e, a) => {
                    if (null == e) return !0;
                    let n = r[a];
                    return (
                      !!n &&
                      (Array.isArray(e) ? e : [e]).some((e) => s(n, e, t[a]))
                    );
                  })
                : !(
                    "object" != typeof t ||
                    Array.isArray(t) ||
                    "object" != typeof a ||
                    Array.isArray(a)
                  ) &&
                    Object.entries(a).every(([e, a]) => {
                      if (null == a) return !0;
                      let n = r.find((t) => t.name === e);
                      return (
                        !!n &&
                        (Array.isArray(a) ? a : [a]).some((r) => s(n, r, t[e]))
                      );
                    });
            })({ args: t.args, inputs: a.abi.inputs, matchArgs: r })
            ? { ...t, ...e }
            : null;
        })
        .filter(Boolean);
    }
    e.s(["decodeEventLog", () => p], 222427),
      e.s(["parseEventLogs", () => m], 897282);
    var h = e.i(675107),
      b = e.i(856324);
    async function v(
      e,
      {
        address: t,
        blockHash: r,
        fromBlock: n,
        toBlock: i,
        event: o,
        events: s,
        args: c,
        strict: l,
      } = {}
    ) {
      let u = s ?? (o ? [o] : void 0),
        d = [];
      u &&
        ((d = [
          u.flatMap((e) =>
            (0, a.encodeEventTopics)({
              abi: [e],
              eventName: e.name,
              args: s ? void 0 : c,
            })
          ),
        ]),
        o && (d = d[0]));
      let f = (
        r
          ? await e.request({
              method: "eth_getLogs",
              params: [{ address: t, topics: d, blockHash: r }],
            })
          : await e.request({
              method: "eth_getLogs",
              params: [
                {
                  address: t,
                  topics: d,
                  fromBlock: "bigint" == typeof n ? (0, h.numberToHex)(n) : n,
                  toBlock: "bigint" == typeof i ? (0, h.numberToHex)(i) : i,
                },
              ],
            })
      ).map((e) => (0, b.formatLog)(e));
      return u ? m({ abi: u, args: c, logs: f, strict: l ?? !1 }) : f;
    }
    async function y(e, a) {
      let {
          abi: n,
          address: i,
          args: o,
          blockHash: s,
          eventName: c,
          fromBlock: l,
          toBlock: u,
          strict: d,
        } = a,
        f = c ? (0, t.getAbiItem)({ abi: n, name: c }) : void 0,
        g = f ? void 0 : n.filter((e) => "event" === e.type);
      return (0, r.getAction)(
        e,
        v,
        "getLogs"
      )({
        address: i,
        args: o,
        blockHash: s,
        event: f,
        events: g,
        fromBlock: l,
        toBlock: u,
        strict: d,
      });
    }
    e.s(["getLogs", () => v], 402676),
      e.s(["getContractEvents", () => y], 563700);
  },
  106145,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(600547),
      a = e.i(656679),
      n = e.i(807749),
      i = e.i(467125),
      o = e.i(989509);
    async function s(e, s) {
      let {
          abi: c,
          address: l,
          args: u,
          functionName: d,
          dataSuffix: f = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...g
        } = s,
        p = g.account ? (0, t.parseAccount)(g.account) : e.account,
        m = (0, a.encodeFunctionData)({ abi: c, args: u, functionName: d });
      try {
        let { data: t } = await (0, i.getAction)(
            e,
            o.call,
            "call"
          )({
            batch: !1,
            data: `${m}${f ? f.replace("0x", "") : ""}`,
            to: l,
            ...g,
            account: p,
          }),
          a = (0, r.decodeFunctionResult)({
            abi: c,
            args: u,
            functionName: d,
            data: t || "0x",
          }),
          n = c.filter((e) => "name" in e && e.name === s.functionName);
        return {
          result: a,
          request: {
            abi: n,
            address: l,
            args: u,
            dataSuffix: f,
            functionName: d,
            ...g,
            account: p,
          },
        };
      } catch (e) {
        throw (0, n.getContractError)(e, {
          abi: c,
          address: l,
          args: u,
          docsPath: "/docs/contract/simulateContract",
          functionName: d,
          sender: p?.address,
        });
      }
    }
    e.s(["simulateContract", () => s]);
  },
  712371,
  (e) => {
    "use strict";
    var t = e.i(472083);
    async function r(e, { cacheTime: a = e.cacheTime } = {}) {
      let n;
      return BigInt(
        await (0, t.withCache)(() => e.request({ method: "eth_blockNumber" }), {
          cacheKey: ((n = e.uid), `blockNumber.${n}`),
          cacheTime: a,
        })
      );
    }
    e.s(["getBlockNumber", () => r]);
  },
  209050,
  (e) => {
    "use strict";
    var t = e.i(897282),
      r = e.i(856324);
    async function a(e, { filter: a }) {
      let n = "strict" in a && a.strict,
        i = await a.request({ method: "eth_getFilterChanges", params: [a.id] });
      if ("string" == typeof i[0]) return i;
      let o = i.map((e) => (0, r.formatLog)(e));
      return "abi" in a && a.abi
        ? (0, t.parseEventLogs)({ abi: a.abi, logs: o, strict: n })
        : o;
    }
    e.s(["getFilterChanges", () => a]);
  },
  708412,
  (e) => {
    "use strict";
    async function t(e, { filter: t }) {
      return t.request({ method: "eth_uninstallFilter", params: [t.id] });
    }
    e.s(["uninstallFilter", () => t]);
  },
  121821,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(383856),
      a = e.i(222427),
      n = e.i(251666),
      i = e.i(856324),
      o = e.i(467125),
      s = e.i(43473),
      c = e.i(976215),
      l = e.i(34888),
      u = e.i(722192),
      d = e.i(712371),
      f = e.i(563700),
      g = e.i(209050),
      p = e.i(708412);
    function m(e, m) {
      let h,
        b,
        v,
        y,
        w,
        {
          abi: A,
          address: E,
          args: T,
          batch: B = !0,
          eventName: k,
          fromBlock: N,
          onError: C,
          onLogs: R,
          poll: F,
          pollingInterval: x = e.pollingInterval,
          strict: I,
        } = m;
      return (
        void 0 !== F
          ? F
          : "bigint" == typeof N ||
            ("webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type)))
      )
        ? ((h = I ?? !1),
          (b = (0, l.stringify)([
            "watchContractEvent",
            E,
            T,
            B,
            e.uid,
            k,
            x,
            h,
            N,
          ])),
          (0, s.observe)(b, { onLogs: R, onError: C }, (t) => {
            let a, n;
            void 0 !== N && (a = N - 1n);
            let i = !1,
              s = (0, c.poll)(
                async () => {
                  if (!i) {
                    try {
                      n = await (0, o.getAction)(
                        e,
                        u.createContractEventFilter,
                        "createContractEventFilter"
                      )({
                        abi: A,
                        address: E,
                        args: T,
                        eventName: k,
                        strict: h,
                        fromBlock: N,
                      });
                    } catch {}
                    i = !0;
                    return;
                  }
                  try {
                    let r;
                    if (n)
                      r = await (0, o.getAction)(
                        e,
                        g.getFilterChanges,
                        "getFilterChanges"
                      )({ filter: n });
                    else {
                      let t = await (0, o.getAction)(
                        e,
                        d.getBlockNumber,
                        "getBlockNumber"
                      )({});
                      (r =
                        a && a < t
                          ? await (0, o.getAction)(
                              e,
                              f.getContractEvents,
                              "getContractEvents"
                            )({
                              abi: A,
                              address: E,
                              args: T,
                              eventName: k,
                              fromBlock: a + 1n,
                              toBlock: t,
                              strict: h,
                            })
                          : []),
                        (a = t);
                    }
                    if (0 === r.length) return;
                    if (B) t.onLogs(r);
                    else for (let e of r) t.onLogs([e]);
                  } catch (e) {
                    n && e instanceof r.InvalidInputRpcError && (i = !1),
                      t.onError?.(e);
                  }
                },
                { emitOnBegin: !0, interval: x }
              );
            return async () => {
              n &&
                (await (0, o.getAction)(
                  e,
                  p.uninstallFilter,
                  "uninstallFilter"
                )({ filter: n })),
                s();
            };
          }))
        : ((v = (0, l.stringify)([
            "watchContractEvent",
            E,
            T,
            B,
            e.uid,
            k,
            x,
            I ?? !1,
          ])),
          (y = !0),
          (w = () => (y = !1)),
          (0, s.observe)(
            v,
            { onLogs: R, onError: C },
            (r) => (
              (async () => {
                try {
                  let o = (() => {
                      if ("fallback" === e.transport.type) {
                        let t = e.transport.transports.find(
                          (e) =>
                            "webSocket" === e.config.type ||
                            "ipc" === e.config.type
                        );
                        return t ? t.value : e.transport;
                      }
                      return e.transport;
                    })(),
                    s = k
                      ? (0, n.encodeEventTopics)({
                          abi: A,
                          eventName: k,
                          args: T,
                        })
                      : [],
                    { unsubscribe: c } = await o.subscribe({
                      params: ["logs", { address: E, topics: s }],
                      onData(e) {
                        if (!y) return;
                        let n = e.result;
                        try {
                          let { eventName: e, args: t } = (0, a.decodeEventLog)(
                              {
                                abi: A,
                                data: n.data,
                                topics: n.topics,
                                strict: I,
                              }
                            ),
                            o = (0, i.formatLog)(n, { args: t, eventName: e });
                          r.onLogs([o]);
                        } catch (s) {
                          let e, a;
                          if (
                            s instanceof t.DecodeLogDataMismatch ||
                            s instanceof t.DecodeLogTopicsMismatch
                          ) {
                            if (I) return;
                            (e = s.abiItem.name),
                              (a = s.abiItem.inputs?.some(
                                (e) => !("name" in e && e.name)
                              ));
                          }
                          let o = (0, i.formatLog)(n, {
                            args: a ? [] : {},
                            eventName: e,
                          });
                          r.onLogs([o]);
                        }
                      },
                      onError(e) {
                        r.onError?.(e);
                      },
                    });
                  (w = c), y || w();
                } catch (e) {
                  C?.(e);
                }
              })(),
              () => w()
            )
          ));
    }
    e.s(["watchContractEvent", () => m]);
  },
  789268,
  515056,
  898443,
  155224,
  57770,
  964348,
  710959,
  356317,
  112039,
  (e) => {
    "use strict";
    var t = e.i(752012),
      r = e.i(600547),
      a = e.i(656679),
      n = e.i(404195),
      i = e.i(8406),
      o = e.i(675107),
      s = e.i(569934),
      c = e.i(878023);
    function l(e) {
      if (!(e instanceof s.BaseError)) return !1;
      let t = e.walk((e) => e instanceof c.ContractFunctionRevertedError);
      return (
        t instanceof c.ContractFunctionRevertedError &&
        (t.data?.errorName === "HttpError" ||
          t.data?.errorName === "ResolverError" ||
          t.data?.errorName === "ResolverNotContract" ||
          t.data?.errorName === "ResolverNotFound" ||
          t.data?.errorName === "ReverseAddressMismatch" ||
          t.data?.errorName === "UnsupportedResolverProfile")
      );
    }
    var u = e.i(461147),
      d = e.i(147526),
      f = e.i(769936),
      g = e.i(831095),
      p = e.i(880841);
    function m(e) {
      if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
        return null;
      let t = `0x${e.slice(1, 65)}`;
      return (0, p.isHex)(t) ? t : null;
    }
    function h(e) {
      let t = new Uint8Array(32).fill(0);
      if (!e) return (0, o.bytesToHex)(t);
      let r = e.split(".");
      for (let e = r.length - 1; e >= 0; e -= 1) {
        let a = m(r[e]),
          n = a
            ? (0, f.toBytes)(a)
            : (0, g.keccak256)((0, f.stringToBytes)(r[e]), "bytes");
        t = (0, g.keccak256)((0, d.concat)([t, n]), "bytes");
      }
      return (0, o.bytesToHex)(t);
    }
    function b(e) {
      let t = new Uint8Array(32).fill(0);
      return e
        ? m(e) || (0, g.keccak256)((0, f.stringToBytes)(e))
        : (0, o.bytesToHex)(t);
    }
    function v(e) {
      let t = e.replace(/^\.|\.$/gm, "");
      if (0 === t.length) return new Uint8Array(1);
      let r = new Uint8Array((0, f.stringToBytes)(t).byteLength + 2),
        a = 0,
        n = t.split(".");
      for (let e = 0; e < n.length; e++) {
        var i;
        let t = (0, f.stringToBytes)(n[e]);
        t.byteLength > 255 &&
          (t = (0, f.stringToBytes)(((i = b(n[e])), `[${i.slice(2)}]`))),
          (r[a] = t.length),
          r.set(t, a + 1),
          (a += t.length + 1);
      }
      return r.byteLength !== a + 1 ? r.slice(0, a + 1) : r;
    }
    e.s(["namehash", () => h], 515056), e.s(["labelhash", () => b], 898443);
    var y = e.i(467125),
      w = e.i(388750);
    async function A(e, s) {
      let {
          blockNumber: c,
          blockTag: d,
          coinType: f,
          name: g,
          gatewayUrls: p,
          strict: m,
        } = s,
        { chain: b } = e,
        A = (() => {
          if (s.universalResolverAddress) return s.universalResolverAddress;
          if (!b)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: c,
            chain: b,
            contract: "ensUniversalResolver",
          });
        })(),
        E = b?.ensTlds;
      if (E && !E.some((e) => g.endsWith(e))) return null;
      let T = null != f ? [h(g), BigInt(f)] : [h(g)];
      try {
        let n = (0, a.encodeFunctionData)({
            abi: t.addressResolverAbi,
            functionName: "addr",
            args: T,
          }),
          s = {
            address: A,
            abi: t.universalResolverResolveAbi,
            functionName: "resolveWithGateways",
            args: [(0, o.toHex)(v(g)), n, p ?? [u.localBatchGatewayUrl]],
            blockNumber: c,
            blockTag: d,
          },
          l = (0, y.getAction)(e, w.readContract, "readContract"),
          f = await l(s);
        if ("0x" === f[0]) return null;
        let m = (0, r.decodeFunctionResult)({
          abi: t.addressResolverAbi,
          args: T,
          functionName: "addr",
          data: f[0],
        });
        if ("0x" === m || "0x00" === (0, i.trim)(m)) return null;
        return m;
      } catch (e) {
        if (m) throw e;
        if (l(e)) return null;
        throw e;
      }
    }
    e.s(["getEnsAddress", () => A], 789268);
    var E = s;
    class T extends E.BaseError {
      constructor({ data: e }) {
        super(
          "Unable to extract image from metadata. The metadata may be malformed or invalid.",
          {
            metaMessages: [
              "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
              "",
              `Provided data: ${JSON.stringify(e)}`,
            ],
            name: "EnsAvatarInvalidMetadataError",
          }
        );
      }
    }
    class B extends E.BaseError {
      constructor({ reason: e }) {
        super(`ENS NFT avatar URI is invalid. ${e}`, {
          name: "EnsAvatarInvalidNftUriError",
        });
      }
    }
    class k extends E.BaseError {
      constructor({ uri: e }) {
        super(
          `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
          { name: "EnsAvatarUriResolutionError" }
        );
      }
    }
    class N extends E.BaseError {
      constructor({ namespace: e }) {
        super(
          `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
          { name: "EnsAvatarUnsupportedNamespaceError" }
        );
      }
    }
    class C extends E.BaseError {
      constructor({ chainId: e }) {
        super(
          `Invalid ENSIP-11 chainId: ${e}. Must be between 0 and 0x7fffffff, or 1.`,
          { name: "EnsInvalidChainIdError" }
        );
      }
    }
    e.s(
      [
        "EnsAvatarInvalidMetadataError",
        () => T,
        "EnsAvatarInvalidNftUriError",
        () => B,
        "EnsAvatarUnsupportedNamespaceError",
        () => N,
        "EnsAvatarUriResolutionError",
        () => k,
        "EnsInvalidChainIdError",
        () => C,
      ],
      155224
    );
    let R =
        /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
      F =
        /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
      x = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
      I = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
    async function S(e) {
      try {
        let t = await fetch(e, { method: "HEAD" });
        if (200 === t.status) {
          let e = t.headers.get("content-type");
          return e?.startsWith("image/");
        }
        return !1;
      } catch (t) {
        if (
          ("object" == typeof t && void 0 !== t.response) ||
          !Object.hasOwn(globalThis, "Image")
        )
          return !1;
        return new Promise((t) => {
          let r = new Image();
          (r.onload = () => {
            t(!0);
          }),
            (r.onerror = () => {
              t(!1);
            }),
            (r.src = e);
        });
      }
    }
    function q(e, t) {
      return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
    }
    function D({ uri: e, gatewayUrls: t }) {
      let r = x.test(e);
      if (r) return { uri: e, isOnChain: !0, isEncoded: r };
      let a = q(t?.ipfs, "https://ipfs.io"),
        n = q(t?.arweave, "https://arweave.net"),
        i = e.match(R),
        {
          protocol: o,
          subpath: s,
          target: c,
          subtarget: l = "",
        } = i?.groups || {},
        u = "ipns:/" === o || "ipns/" === s,
        d = "ipfs:/" === o || "ipfs/" === s || F.test(e);
      if (e.startsWith("http") && !u && !d) {
        let r = e;
        return (
          t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
          { uri: r, isOnChain: !1, isEncoded: !1 }
        );
      }
      if ((u || d) && c)
        return {
          uri: `${a}/${u ? "ipns" : "ipfs"}/${c}${l}`,
          isOnChain: !1,
          isEncoded: !1,
        };
      if ("ar:/" === o && c)
        return { uri: `${n}/${c}${l || ""}`, isOnChain: !1, isEncoded: !1 };
      let f = e.replace(I, "");
      if (
        (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`),
        f.startsWith("data:") || f.startsWith("{"))
      )
        return { uri: f, isOnChain: !0, isEncoded: !1 };
      throw new k({ uri: e });
    }
    function L(e) {
      if (
        "object" != typeof e ||
        (!("image" in e) && !("image_url" in e) && !("image_data" in e))
      )
        throw new T({ data: e });
      return e.image || e.image_url || e.image_data;
    }
    async function P({ gatewayUrls: e, uri: t }) {
      try {
        let r = await fetch(t).then((e) => e.json());
        return await H({ gatewayUrls: e, uri: L(r) });
      } catch {
        throw new k({ uri: t });
      }
    }
    async function H({ gatewayUrls: e, uri: t }) {
      let { uri: r, isOnChain: a } = D({ uri: t, gatewayUrls: e });
      if (a || (await S(r))) return r;
      throw new k({ uri: t });
    }
    async function _(e, { nft: t }) {
      if ("erc721" === t.namespace)
        return (0, w.readContract)(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "tokenURI",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "tokenId", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "tokenURI",
          args: [BigInt(t.tokenID)],
        });
      if ("erc1155" === t.namespace)
        return (0, w.readContract)(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "uri",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "_id", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "uri",
          args: [BigInt(t.tokenID)],
        });
      throw new N({ namespace: t.namespace });
    }
    async function O(e, { gatewayUrls: t, record: r }) {
      return /eip155:/i.test(r)
        ? U(e, { gatewayUrls: t, record: r })
        : H({ uri: r, gatewayUrls: t });
    }
    async function U(e, { gatewayUrls: t, record: r }) {
      let a = (function (e) {
          let t = e;
          t.startsWith("did:nft:") &&
            (t = t.replace("did:nft:", "").replace(/_/g, "/"));
          let [r, a, n] = t.split("/"),
            [i, o] = r.split(":"),
            [s, c] = a.split(":");
          if (!i || "eip155" !== i.toLowerCase())
            throw new B({ reason: "Only EIP-155 supported" });
          if (!o) throw new B({ reason: "Chain ID not found" });
          if (!c) throw new B({ reason: "Contract address not found" });
          if (!n) throw new B({ reason: "Token ID not found" });
          if (!s) throw new B({ reason: "ERC namespace not found" });
          return {
            chainID: Number.parseInt(o, 10),
            namespace: s.toLowerCase(),
            contractAddress: c,
            tokenID: n,
          };
        })(r),
        {
          uri: n,
          isOnChain: i,
          isEncoded: o,
        } = D({ uri: await _(e, { nft: a }), gatewayUrls: t });
      if (
        i &&
        (n.includes("data:application/json;base64,") || n.startsWith("{"))
      )
        return H({
          uri: L(
            JSON.parse(
              o ? atob(n.replace("data:application/json;base64,", "")) : n
            )
          ),
          gatewayUrls: t,
        });
      let s = a.tokenID;
      return (
        "erc1155" === a.namespace &&
          (s = s.replace("0x", "").padStart(64, "0")),
        P({ gatewayUrls: t, uri: n.replace(/(?:0x)?{id}/, s) })
      );
    }
    async function z(e, i) {
      let {
          blockNumber: s,
          blockTag: c,
          key: d,
          name: f,
          gatewayUrls: g,
          strict: p,
        } = i,
        { chain: m } = e,
        b = (() => {
          if (i.universalResolverAddress) return i.universalResolverAddress;
          if (!m)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: s,
            chain: m,
            contract: "ensUniversalResolver",
          });
        })(),
        A = m?.ensTlds;
      if (A && !A.some((e) => f.endsWith(e))) return null;
      try {
        let n = {
            address: b,
            abi: t.universalResolverResolveAbi,
            args: [
              (0, o.toHex)(v(f)),
              (0, a.encodeFunctionData)({
                abi: t.textResolverAbi,
                functionName: "text",
                args: [h(f), d],
              }),
              g ?? [u.localBatchGatewayUrl],
            ],
            functionName: "resolveWithGateways",
            blockNumber: s,
            blockTag: c,
          },
          i = (0, y.getAction)(e, w.readContract, "readContract"),
          l = await i(n);
        if ("0x" === l[0]) return null;
        let p = (0, r.decodeFunctionResult)({
          abi: t.textResolverAbi,
          functionName: "text",
          data: l[0],
        });
        return "" === p ? null : p;
      } catch (e) {
        if (p) throw e;
        if (l(e)) return null;
        throw e;
      }
    }
    async function M(
      e,
      {
        blockNumber: t,
        blockTag: r,
        assetGatewayUrls: a,
        name: n,
        gatewayUrls: i,
        strict: o,
        universalResolverAddress: s,
      }
    ) {
      let c = await (0, y.getAction)(
        e,
        z,
        "getEnsText"
      )({
        blockNumber: t,
        blockTag: r,
        key: "avatar",
        name: n,
        universalResolverAddress: s,
        gatewayUrls: i,
        strict: o,
      });
      if (!c) return null;
      try {
        return await O(e, { record: c, gatewayUrls: a });
      } catch {
        return null;
      }
    }
    async function $(e, r) {
      let {
          address: a,
          blockNumber: i,
          blockTag: o,
          coinType: s = 60n,
          gatewayUrls: c,
          strict: d,
        } = r,
        { chain: f } = e,
        g = (() => {
          if (r.universalResolverAddress) return r.universalResolverAddress;
          if (!f)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: i,
            chain: f,
            contract: "ensUniversalResolver",
          });
        })();
      try {
        let r = {
            address: g,
            abi: t.universalResolverReverseAbi,
            args: [a, s, c ?? [u.localBatchGatewayUrl]],
            functionName: "reverseWithGateways",
            blockNumber: i,
            blockTag: o,
          },
          n = (0, y.getAction)(e, w.readContract, "readContract"),
          [l] = await n(r);
        return l || null;
      } catch (e) {
        if (d) throw e;
        if (l(e)) return null;
        throw e;
      }
    }
    async function G(e, t) {
      let { blockNumber: r, blockTag: a, name: i } = t,
        { chain: s } = e,
        c = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!s)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: r,
            chain: s,
            contract: "ensUniversalResolver",
          });
        })(),
        l = s?.ensTlds;
      if (l && !l.some((e) => i.endsWith(e)))
        throw Error(
          `${i} is not a valid ENS TLD (${l?.join(", ")}) for chain "${
            s.name
          }" (id: ${s.id}).`
        );
      let [u] = await (0, y.getAction)(
        e,
        w.readContract,
        "readContract"
      )({
        address: c,
        abi: [
          {
            inputs: [{ type: "bytes" }],
            name: "findResolver",
            outputs: [
              { type: "address" },
              { type: "bytes32" },
              { type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "findResolver",
        args: [(0, o.toHex)(v(i))],
        blockNumber: r,
        blockTag: a,
      });
      return u;
    }
    e.s(["getEnsText", () => z], 57770),
      e.s(["getEnsAvatar", () => M], 964348),
      e.s(["getEnsName", () => $], 710959),
      e.s(["getEnsResolver", () => G], 356317);
    var j = e.i(189991),
      W = e.i(779690),
      Z = e.i(264404),
      J = e.i(190521),
      K = e.i(353464);
    async function V(e, t) {
      let {
          account: r = e.account,
          blockNumber: a,
          blockTag: n = "latest",
          blobs: i,
          data: s,
          gas: c,
          gasPrice: l,
          maxFeePerBlobGas: u,
          maxFeePerGas: d,
          maxPriorityFeePerGas: f,
          to: g,
          value: p,
          ...m
        } = t,
        h = r ? (0, j.parseAccount)(r) : void 0;
      try {
        (0, K.assertRequest)(t);
        let r = "bigint" == typeof a ? (0, o.numberToHex)(a) : void 0,
          b = e.chain?.formatters?.transactionRequest?.format,
          v = (b || J.formatTransactionRequest)(
            {
              ...(0, Z.extract)(m, { format: b }),
              account: h,
              blobs: i,
              data: s,
              gas: c,
              gasPrice: l,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: g,
              value: p,
            },
            "createAccessList"
          ),
          y = await e.request({
            method: "eth_createAccessList",
            params: [v, r || n],
          });
        return { accessList: y.accessList, gasUsed: BigInt(y.gasUsed) };
      } catch (r) {
        throw (0, W.getCallError)(r, { ...t, account: h, chain: e.chain });
      }
    }
    e.s(["createAccessList", () => V], 112039);
  },
  606662,
  (e) => {
    "use strict";
    var t = e.i(537096);
    async function r(e) {
      let r = (0, t.createFilterRequestScope)(e, {
          method: "eth_newBlockFilter",
        }),
        a = await e.request({ method: "eth_newBlockFilter" });
      return { id: a, request: r(a), type: "block" };
    }
    e.s(["createBlockFilter", () => r]);
  },
  340577,
  81740,
  (e) => {
    "use strict";
    var t = e.i(251666),
      r = e.i(675107),
      a = e.i(537096);
    async function n(
      e,
      {
        address: i,
        args: o,
        event: s,
        events: c,
        fromBlock: l,
        strict: u,
        toBlock: d,
      } = {}
    ) {
      let f = c ?? (s ? [s] : void 0),
        g = (0, a.createFilterRequestScope)(e, { method: "eth_newFilter" }),
        p = [];
      f &&
        ((p = [
          f.flatMap((e) =>
            (0, t.encodeEventTopics)({ abi: [e], eventName: e.name, args: o })
          ),
        ]),
        s && (p = p[0]));
      let m = await e.request({
        method: "eth_newFilter",
        params: [
          {
            address: i,
            fromBlock: "bigint" == typeof l ? (0, r.numberToHex)(l) : l,
            toBlock: "bigint" == typeof d ? (0, r.numberToHex)(d) : d,
            ...(p.length ? { topics: p } : {}),
          },
        ],
      });
      return {
        abi: f,
        args: o,
        eventName: s ? s.name : void 0,
        fromBlock: l,
        id: m,
        request: g(m),
        strict: !!u,
        toBlock: d,
        type: "event",
      };
    }
    async function i(e) {
      let t = (0, a.createFilterRequestScope)(e, {
          method: "eth_newPendingTransactionFilter",
        }),
        r = await e.request({ method: "eth_newPendingTransactionFilter" });
      return { id: r, request: t(r), type: "transaction" };
    }
    e.s(["createEventFilter", () => n], 340577),
      e.s(["createPendingTransactionFilter", () => i], 81740);
  },
  153077,
  867901,
  (e) => {
    "use strict";
    var t = e.i(752012),
      r = e.i(600547),
      a = e.i(656679),
      n = e.i(675107),
      i = e.i(467125),
      o = e.i(989509);
    async function s(
      e,
      {
        address: s,
        blockNumber: c,
        blockTag: l = e.experimental_blockTag ?? "latest",
      }
    ) {
      if (e.batch?.multicall && e.chain?.contracts?.multicall3) {
        let n = e.chain.contracts.multicall3.address,
          u = (0, a.encodeFunctionData)({
            abi: t.multicall3Abi,
            functionName: "getEthBalance",
            args: [s],
          }),
          { data: d } = await (0, i.getAction)(
            e,
            o.call,
            "call"
          )({ to: n, data: u, blockNumber: c, blockTag: l });
        return (0, r.decodeFunctionResult)({
          abi: t.multicall3Abi,
          functionName: "getEthBalance",
          args: [s],
          data: d || "0x",
        });
      }
      let u = "bigint" == typeof c ? (0, n.numberToHex)(c) : void 0;
      return BigInt(
        await e.request({ method: "eth_getBalance", params: [s, u || l] })
      );
    }
    async function c(e) {
      return BigInt(await e.request({ method: "eth_blobBaseFee" }));
    }
    e.s(["getBalance", () => s], 153077),
      e.s(["getBlobBaseFee", () => c], 867901);
  },
  928843,
  (e) => {
    "use strict";
    var t = e.i(450323),
      r = e.i(675107);
    async function a(
      e,
      { blockHash: n, blockNumber: i, blockTag: o = "latest" } = {}
    ) {
      let s,
        c = void 0 !== i ? (0, r.numberToHex)(i) : void 0;
      return (
        (s = n
          ? await e.request(
              { method: "eth_getBlockTransactionCountByHash", params: [n] },
              { dedupe: !0 }
            )
          : await e.request(
              {
                method: "eth_getBlockTransactionCountByNumber",
                params: [c || o],
              },
              { dedupe: !!c }
            )),
        (0, t.hexToNumber)(s)
      );
    }
    e.s(["getBlockTransactionCount", () => a]);
  },
  666416,
  (e) => {
    "use strict";
    var t = e.i(675107);
    async function r(
      e,
      {
        blockCount: r,
        blockNumber: a,
        blockTag: n = "latest",
        rewardPercentiles: i,
      }
    ) {
      var o;
      let s = "bigint" == typeof a ? (0, t.numberToHex)(a) : void 0;
      return {
        baseFeePerGas: (o = await e.request(
          {
            method: "eth_feeHistory",
            params: [(0, t.numberToHex)(r), s || n, i],
          },
          { dedupe: !!s }
        )).baseFeePerGas.map((e) => BigInt(e)),
        gasUsedRatio: o.gasUsedRatio,
        oldestBlock: BigInt(o.oldestBlock),
        reward: o.reward?.map((e) => e.map((e) => BigInt(e))),
      };
    }
    e.s(["getFeeHistory", () => r], 666416);
  },
  937463,
  379578,
  974148,
  579917,
  489228,
  568307,
  804558,
  948331,
  671293,
  (e) => {
    "use strict";
    var t = e.i(897282),
      r = e.i(856324);
    async function a(e, { filter: a }) {
      let n = a.strict ?? !1,
        i = (
          await a.request({ method: "eth_getFilterLogs", params: [a.id] })
        ).map((e) => (0, r.formatLog)(e));
      return a.abi
        ? (0, t.parseEventLogs)({ abi: a.abi, logs: i, strict: n })
        : i;
    }
    e.s(["getFilterLogs", () => a], 937463);
    var n = e.i(675107),
      i = e.i(450323);
    async function o(
      e,
      { address: t, blockNumber: r, blockTag: a, storageKeys: o }
    ) {
      let s = void 0 !== r ? (0, n.numberToHex)(r) : void 0;
      var c = await e.request({
        method: "eth_getProof",
        params: [t, o, s || (a ?? "latest")],
      });
      return {
        ...c,
        balance: c.balance ? BigInt(c.balance) : void 0,
        nonce: c.nonce ? (0, i.hexToNumber)(c.nonce) : void 0,
        storageProof: c.storageProof
          ? c.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
          : void 0,
      };
    }
    async function s(
      e,
      { address: t, blockNumber: r, blockTag: a = "latest", slot: i }
    ) {
      let o = void 0 !== r ? (0, n.numberToHex)(r) : void 0;
      return await e.request({
        method: "eth_getStorageAt",
        params: [t, i, o || a],
      });
    }
    e.s(["getProof", () => o], 379578), e.s(["getStorageAt", () => s], 974148);
    var c = e.i(393702),
      l = e.i(982191);
    async function u(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: a,
        hash: i,
        index: o,
        sender: s,
        nonce: u,
      }
    ) {
      let d = a || "latest",
        f = void 0 !== r ? (0, n.numberToHex)(r) : void 0,
        g = null;
      if (
        (i
          ? (g = await e.request(
              { method: "eth_getTransactionByHash", params: [i] },
              { dedupe: !0 }
            ))
          : t
          ? (g = await e.request(
              {
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [t, (0, n.numberToHex)(o)],
              },
              { dedupe: !0 }
            ))
          : (f || d) && "number" == typeof o
          ? (g = await e.request(
              {
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [f || d, (0, n.numberToHex)(o)],
              },
              { dedupe: !!f }
            ))
          : s &&
            "number" == typeof u &&
            (g = await e.request(
              {
                method: "eth_getTransactionBySenderAndNonce",
                params: [s, (0, n.numberToHex)(u)],
              },
              { dedupe: !0 }
            )),
        !g)
      )
        throw new c.TransactionNotFoundError({
          blockHash: t,
          blockNumber: r,
          blockTag: d,
          hash: i,
          index: o,
        });
      return (e.chain?.formatters?.transaction?.format || l.formatTransaction)(
        g,
        "getTransaction"
      );
    }
    e.s(["getTransaction", () => u], 579917);
    var d = e.i(467125),
      f = e.i(712371);
    async function g(e, { hash: t, transactionReceipt: r }) {
      let [a, n] = await Promise.all([
          (0, d.getAction)(e, f.getBlockNumber, "getBlockNumber")({}),
          t ? (0, d.getAction)(e, u, "getTransaction")({ hash: t }) : void 0,
        ]),
        i = r?.blockNumber || n?.blockNumber;
      return i ? a - i + 1n : 0n;
    }
    e.s(["getTransactionConfirmations", () => g], 489228);
    var p = e.i(839080);
    async function m(e, { hash: t }) {
      let r = await e.request(
        { method: "eth_getTransactionReceipt", params: [t] },
        { dedupe: !0 }
      );
      if (!r) throw new c.TransactionReceiptNotFoundError({ hash: t });
      return (
        e.chain?.formatters?.transactionReceipt?.format ||
        p.formatTransactionReceipt
      )(r, "getTransactionReceipt");
    }
    e.s(["getTransactionReceipt", () => m], 568307);
    var h = e.i(752012),
      b = e.i(472503),
      v = e.i(70204),
      y = e.i(569934),
      w = e.i(878023),
      A = e.i(600547),
      E = e.i(656679),
      T = e.i(404195),
      B = e.i(807749),
      k = e.i(388750);
    async function N(e, t) {
      let {
          account: r,
          authorizationList: a,
          allowFailure: n = !0,
          blockNumber: i,
          blockOverrides: o,
          blockTag: s,
          stateOverride: c,
        } = t,
        l = t.contracts,
        {
          batchSize: u = t.batchSize ?? 1024,
          deployless: f = t.deployless ?? !1,
        } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        g = (() => {
          if (t.multicallAddress) return t.multicallAddress;
          if (f) return null;
          if (e.chain)
            return (0, T.getChainContractAddress)({
              blockNumber: i,
              chain: e.chain,
              contract: "multicall3",
            });
          throw Error(
            "client chain not configured. multicallAddress is required."
          );
        })(),
        p = [[]],
        m = 0,
        N = 0;
      for (let e = 0; e < l.length; e++) {
        let { abi: t, address: a, args: i, functionName: o } = l[e];
        try {
          let e = (0, E.encodeFunctionData)({
            abi: t,
            args: i,
            functionName: o,
          });
          (N += (e.length - 2) / 2),
            u > 0 &&
              N > u &&
              p[m].length > 0 &&
              (m++, (N = (e.length - 2) / 2), (p[m] = [])),
            (p[m] = [...p[m], { allowFailure: !0, callData: e, target: a }]);
        } catch (s) {
          let e = (0, B.getContractError)(s, {
            abi: t,
            address: a,
            args: i,
            docsPath: "/docs/contract/multicall",
            functionName: o,
            sender: r,
          });
          if (!n) throw e;
          p[m] = [...p[m], { allowFailure: !0, callData: "0x", target: a }];
        }
      }
      let C = await Promise.allSettled(
          p.map((t) =>
            (0, d.getAction)(
              e,
              k.readContract,
              "readContract"
            )({
              ...(null === g ? { code: b.multicall3Bytecode } : { address: g }),
              abi: h.multicall3Abi,
              account: r,
              args: [t],
              authorizationList: a,
              blockNumber: i,
              blockOverrides: o,
              blockTag: s,
              functionName: "aggregate3",
              stateOverride: c,
            })
          )
        ),
        R = [];
      for (let e = 0; e < C.length; e++) {
        let t = C[e];
        if ("rejected" === t.status) {
          if (!n) throw t.reason;
          for (let r = 0; r < p[e].length; r++)
            R.push({ status: "failure", error: t.reason, result: void 0 });
          continue;
        }
        let r = t.value;
        for (let t = 0; t < r.length; t++) {
          let { returnData: a, success: i } = r[t],
            { callData: o } = p[e][t],
            { abi: s, address: c, functionName: u, args: d } = l[R.length];
          try {
            if ("0x" === o) throw new v.AbiDecodingZeroDataError();
            if (!i) throw new w.RawContractError({ data: a });
            let e = (0, A.decodeFunctionResult)({
              abi: s,
              args: d,
              data: a,
              functionName: u,
            });
            R.push(n ? { result: e, status: "success" } : e);
          } catch (t) {
            let e = (0, B.getContractError)(t, {
              abi: s,
              address: c,
              args: d,
              docsPath: "/docs/contract/multicall",
              functionName: u,
            });
            if (!n) throw e;
            R.push({ error: e, result: void 0, status: "failure" });
          }
        }
      }
      if (R.length !== l.length)
        throw new y.BaseError("multicall results mismatch");
      return R;
    }
    e.s(["multicall", () => N], 804558);
    var C = e.i(944318),
      R = e.i(189991),
      F = e.i(853532),
      x = e.i(147526),
      I = e.i(467078),
      S = e.i(557874),
      q = e.i(190521),
      D = e.i(826051),
      L = e.i(353464);
    async function P(e, t) {
      let {
        blockNumber: a,
        blockTag: i = e.experimental_blockTag ?? "latest",
        blocks: o,
        returnFullTransactions: s,
        traceTransfers: c,
        validation: l,
      } = t;
      try {
        let t = [];
        for (let e of o) {
          let r = e.blockOverrides ? C.toRpc(e.blockOverrides) : void 0,
            a = e.calls.map((e) => {
              let t = e.account ? (0, R.parseAccount)(e.account) : void 0,
                r = e.abi ? (0, E.encodeFunctionData)(e) : e.data,
                a = {
                  ...e,
                  account: t,
                  data: e.dataSuffix
                    ? (0, x.concat)([r || "0x", e.dataSuffix])
                    : r,
                  from: e.from ?? t?.address,
                };
              return (
                (0, L.assertRequest)(a), (0, q.formatTransactionRequest)(a)
              );
            }),
            n = e.stateOverrides
              ? (0, D.serializeStateOverride)(e.stateOverrides)
              : void 0;
          t.push({ blockOverrides: r, calls: a, stateOverrides: n });
        }
        let u = "bigint" == typeof a ? (0, n.numberToHex)(a) : void 0;
        return (
          await e.request({
            method: "eth_simulateV1",
            params: [
              {
                blockStateCalls: t,
                returnFullTransactions: s,
                traceTransfers: c,
                validation: l,
              },
              u || i,
            ],
          })
        ).map((e, t) => ({
          ...(0, S.formatBlock)(e),
          calls: e.calls.map((e, a) => {
            let { abi: n, args: i, functionName: s, to: c } = o[t].calls[a],
              l = e.error?.data ?? e.returnData,
              u = BigInt(e.gasUsed),
              d = e.logs?.map((e) => (0, r.formatLog)(e)),
              f = "0x1" === e.status ? "success" : "failure",
              g =
                n && "success" === f && "0x" !== l
                  ? (0, A.decodeFunctionResult)({
                      abi: n,
                      data: l,
                      functionName: s,
                    })
                  : null,
              p = (() => {
                let e;
                if (
                  "success" !== f &&
                  ("0x" === l
                    ? (e = new v.AbiDecodingZeroDataError())
                    : l && (e = new w.RawContractError({ data: l })),
                  e)
                )
                  return (0, B.getContractError)(e, {
                    abi: n ?? [],
                    address: c ?? "0x",
                    args: i,
                    functionName: s ?? "<unknown>",
                  });
              })();
            return {
              data: l,
              gasUsed: u,
              logs: d,
              status: f,
              ...("success" === f ? { result: g } : { error: p }),
            };
          }),
        }));
      } catch (t) {
        let e = (0, I.getNodeError)(t, {});
        if (e instanceof F.UnknownNodeError) throw t;
        throw e;
      }
    }
    e.s(["simulateBlocks", () => P], 948331);
    var H = e.i(663771),
      _ = e.i(506570),
      O = e.i(284251);
    function U(e, t = {}) {
      return H.from(e, t);
    }
    function z(e, t, r) {
      let a = H.fromAbi(e, t, r);
      if ("function" !== a.type)
        throw new H.NotFoundError({ name: t, type: "function" });
      return a;
    }
    var M = e.i(914146),
      $ = e.i(112039);
    async function G(e, t) {
      let {
          blockNumber: r,
          blockTag: a,
          calls: n,
          stateOverrides: o,
          traceAssetChanges: s,
          traceTransfers: c,
          validation: l,
        } = t,
        u = t.account ? (0, R.parseAccount)(t.account) : void 0;
      if (s && !u)
        throw new y.BaseError(
          "`account` is required when `traceAssetChanges` is true"
        );
      let d = u
          ? (function (...e) {
              let [t, r] = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return [
                      (function (e) {
                        let t = e.find((e) => "constructor" === e.type);
                        if (!t)
                          throw new H.NotFoundError({ name: "constructor" });
                        return t;
                      })(t),
                      r,
                    ];
                  }
                  return e;
                })(),
                { bytecode: a, args: n } = r;
              return O.concat(
                a,
                t.inputs?.length && n?.length ? _.encode(t.inputs, n) : "0x"
              );
            })(H.from("constructor(bytes, bytes)"), {
              bytecode: b.deploylessCallViaBytecodeBytecode,
              args: [
                "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                (function (...e) {
                  var t;
                  let [r, a = []] = (() => {
                      if (Array.isArray(e[0])) {
                        let [t, r, a] = e;
                        return [z(t, r, { args: a }), a];
                      }
                      let [t, r] = e;
                      return [t, r];
                    })(),
                    { overloads: n } = r,
                    i = n ? z([r, ...n], r.name, { args: a }) : r,
                    o = ((t = i), H.getSelector(t)),
                    s = a.length > 0 ? _.encode(i.inputs, a) : void 0;
                  return s ? O.concat(o, s) : o;
                })(U("function getBalance(address)"), [u.address]),
              ],
            })
          : void 0,
        f = s
          ? await Promise.all(
              t.calls.map(async (t) => {
                if (!t.data && !t.abi) return;
                let { accessList: r } = await (0, $.createAccessList)(e, {
                  account: u.address,
                  ...t,
                  data: t.abi ? (0, E.encodeFunctionData)(t) : t.data,
                });
                return r.map(({ address: e, storageKeys: t }) =>
                  t.length > 0 ? e : null
                );
              })
            ).then((e) => e.flat().filter(Boolean))
          : [],
        g = await P(e, {
          blockNumber: r,
          blockTag: a,
          blocks: [
            ...(s
              ? [
                  { calls: [{ data: d }], stateOverrides: o },
                  {
                    calls: f.map((e, t) => ({
                      abi: [U("function balanceOf(address) returns (uint256)")],
                      functionName: "balanceOf",
                      args: [u.address],
                      to: e,
                      from: M.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: M.zeroAddress, nonce: 0 }],
                  },
                ]
              : []),
            {
              calls: [...n, {}].map((e) => ({ ...e, from: u?.address })),
              stateOverrides: o,
            },
            ...(s
              ? [
                  { calls: [{ data: d }] },
                  {
                    calls: f.map((e, t) => ({
                      abi: [U("function balanceOf(address) returns (uint256)")],
                      functionName: "balanceOf",
                      args: [u.address],
                      to: e,
                      from: M.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: M.zeroAddress, nonce: 0 }],
                  },
                  {
                    calls: f.map((e, t) => ({
                      to: e,
                      abi: [U("function decimals() returns (uint256)")],
                      functionName: "decimals",
                      from: M.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: M.zeroAddress, nonce: 0 }],
                  },
                  {
                    calls: f.map((e, t) => ({
                      to: e,
                      abi: [U("function tokenURI(uint256) returns (string)")],
                      functionName: "tokenURI",
                      args: [0n],
                      from: M.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: M.zeroAddress, nonce: 0 }],
                  },
                  {
                    calls: f.map((e, t) => ({
                      to: e,
                      abi: [U("function symbol() returns (string)")],
                      functionName: "symbol",
                      from: M.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: M.zeroAddress, nonce: 0 }],
                  },
                ]
              : []),
          ],
          traceTransfers: c,
          validation: l,
        }),
        p = s ? g[2] : g[0],
        [m, h, , v, w, A, T, B] = s ? g : [],
        { calls: k, ...N } = p,
        C = k.slice(0, -1) ?? [],
        F = [...(m?.calls ?? []), ...(h?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, i.hexToBigInt)(e.data) : null
        ),
        x = [...(v?.calls ?? []), ...(w?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, i.hexToBigInt)(e.data) : null
        ),
        I = (A?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        S = (B?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        q = (T?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        D = [];
      for (let [e, t] of x.entries()) {
        let r = F[e];
        if ("bigint" != typeof t || "bigint" != typeof r) continue;
        let a = I[e - 1],
          n = S[e - 1],
          i = q[e - 1],
          o =
            0 === e
              ? { address: M.ethAddress, decimals: 18, symbol: "ETH" }
              : {
                  address: f[e - 1],
                  decimals: i || a ? Number(a ?? 1) : void 0,
                  symbol: n ?? void 0,
                };
        D.some((e) => e.token.address === o.address) ||
          D.push({ token: o, value: { pre: r, post: t, diff: t - r } });
      }
      return { assetChanges: D, block: N, results: C };
    }
    e.s(["simulateCalls", () => G], 671293);
  },
  733570,
  877528,
  127465,
  948789,
  438081,
  (e) => {
    "use strict";
    var t = e.i(467125),
      r = e.i(658765),
      a = e.i(493617);
    async function n(
      e,
      { address: n, message: i, factory: o, factoryData: s, signature: c, ...l }
    ) {
      let u = (0, r.hashMessage)(i);
      return (0, t.getAction)(
        e,
        a.verifyHash,
        "verifyHash"
      )({
        address: n,
        factory: o,
        factoryData: s,
        hash: u,
        signature: c,
        ...l,
      });
    }
    e.s(["verifyMessage", () => n], 733570);
    var i = e.i(995062);
    async function o(e, r) {
      let {
          address: n,
          factory: o,
          factoryData: s,
          signature: c,
          message: l,
          primaryType: u,
          types: d,
          domain: f,
          ...g
        } = r,
        p = (0, i.hashTypedData)({
          message: l,
          primaryType: u,
          types: d,
          domain: f,
        });
      return (0, t.getAction)(
        e,
        a.verifyHash,
        "verifyHash"
      )({
        address: n,
        factory: o,
        factoryData: s,
        hash: p,
        signature: c,
        ...g,
      });
    }
    e.s(["verifyTypedData", () => o], 877528);
    var s = e.i(57351),
      c = e.i(393702),
      l = e.i(43473),
      u = e.i(509486),
      d = e.i(204202),
      f = e.i(34888),
      g = e.i(915588),
      p = e.i(579917),
      m = e.i(568307),
      h = e.i(450323),
      b = e.i(976215),
      v = e.i(712371);
    function y(
      e,
      {
        emitOnBegin: r = !1,
        emitMissed: a = !1,
        onBlockNumber: n,
        onError: i,
        poll: o,
        pollingInterval: s = e.pollingInterval,
      }
    ) {
      let c, u, d;
      return (
        void 0 !== o
          ? o
          : "webSocket" !== e.transport.type &&
            "ipc" !== e.transport.type &&
            ("fallback" !== e.transport.type ||
              ("webSocket" !== e.transport.transports[0].config.type &&
                "ipc" !== e.transport.transports[0].config.type))
      )
        ? ((u = (0, f.stringify)(["watchBlockNumber", e.uid, r, a, s])),
          (0, l.observe)(u, { onBlockNumber: n, onError: i }, (n) =>
            (0, b.poll)(
              async () => {
                try {
                  let r = await (0, t.getAction)(
                    e,
                    v.getBlockNumber,
                    "getBlockNumber"
                  )({ cacheTime: 0 });
                  if (void 0 !== c) {
                    if (r === c) return;
                    if (r - c > 1 && a)
                      for (let e = c + 1n; e < r; e++)
                        n.onBlockNumber(e, c), (c = e);
                  }
                  (void 0 === c || r > c) && (n.onBlockNumber(r, c), (c = r));
                } catch (e) {
                  n.onError?.(e);
                }
              },
              { emitOnBegin: r, interval: s }
            )
          ))
        : ((d = (0, f.stringify)(["watchBlockNumber", e.uid, r, a])),
          (0, l.observe)(d, { onBlockNumber: n, onError: i }, (t) => {
            let r = !0,
              a = () => (r = !1);
            return (
              (async () => {
                try {
                  let n = (() => {
                      if ("fallback" === e.transport.type) {
                        let t = e.transport.transports.find(
                          (e) =>
                            "webSocket" === e.config.type ||
                            "ipc" === e.config.type
                        );
                        return t ? t.value : e.transport;
                      }
                      return e.transport;
                    })(),
                    { unsubscribe: i } = await n.subscribe({
                      params: ["newHeads"],
                      onData(e) {
                        if (!r) return;
                        let a = (0, h.hexToBigInt)(e.result?.number);
                        t.onBlockNumber(a, c), (c = a);
                      },
                      onError(e) {
                        t.onError?.(e);
                      },
                    });
                  (a = i), r || a();
                } catch (e) {
                  i?.(e);
                }
              })(),
              () => a()
            );
          }));
    }
    async function w(e, r) {
      let a,
        n,
        i,
        o,
        h,
        {
          checkReplacement: b = !0,
          confirmations: v = 1,
          hash: w,
          onReplaced: A,
          retryCount: E = 6,
          retryDelay: T = ({ count: e }) => 200 * ~~(1 << e),
          timeout: B = 18e4,
        } = r,
        k = (0, f.stringify)(["waitForTransactionReceipt", e.uid, w]),
        N = r.pollingInterval
          ? r.pollingInterval
          : e.chain?.experimental_preconfirmationTime
          ? e.chain.experimental_preconfirmationTime
          : e.pollingInterval,
        C = !1,
        { promise: R, resolve: F, reject: x } = (0, u.withResolvers)(),
        I = B
          ? setTimeout(() => {
              h?.(),
                o?.(),
                x(new c.WaitForTransactionReceiptTimeoutError({ hash: w }));
            }, B)
          : void 0;
      return (
        (o = (0, l.observe)(
          k,
          { onReplaced: A, resolve: F, reject: x },
          async (r) => {
            if (
              (i = await (0, t.getAction)(
                e,
                m.getTransactionReceipt,
                "getTransactionReceipt"
              )({ hash: w }).catch(() => void 0)) &&
              v <= 1
            ) {
              clearTimeout(I), r.resolve(i), o?.();
              return;
            }
            h = (0, t.getAction)(
              e,
              y,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: N,
              async onBlockNumber(l) {
                let u = (e) => {
                    clearTimeout(I), h?.(), e(), o?.();
                  },
                  f = l;
                if (!C)
                  try {
                    if (i) {
                      if (
                        v > 1 &&
                        (!i.blockNumber || f - i.blockNumber + 1n < v)
                      )
                        return;
                      u(() => r.resolve(i));
                      return;
                    }
                    if (
                      (b &&
                        !a &&
                        ((C = !0),
                        await (0, d.withRetry)(
                          async () => {
                            (a = await (0, t.getAction)(
                              e,
                              p.getTransaction,
                              "getTransaction"
                            )({ hash: w })).blockNumber && (f = a.blockNumber);
                          },
                          { delay: T, retryCount: E }
                        ),
                        (C = !1)),
                      (i = await (0, t.getAction)(
                        e,
                        m.getTransactionReceipt,
                        "getTransactionReceipt"
                      )({ hash: w })),
                      v > 1 && (!i.blockNumber || f - i.blockNumber + 1n < v))
                    )
                      return;
                    u(() => r.resolve(i));
                  } catch (o) {
                    if (
                      o instanceof c.TransactionNotFoundError ||
                      o instanceof c.TransactionReceiptNotFoundError
                    ) {
                      if (!a) {
                        C = !1;
                        return;
                      }
                      try {
                        (n = a), (C = !0);
                        let o = await (0, d.withRetry)(
                          () =>
                            (0, t.getAction)(
                              e,
                              g.getBlock,
                              "getBlock"
                            )({ blockNumber: f, includeTransactions: !0 }),
                          {
                            delay: T,
                            retryCount: E,
                            shouldRetry: ({ error: e }) =>
                              e instanceof s.BlockNotFoundError,
                          }
                        );
                        C = !1;
                        let c = o.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === n.from && t === n.nonce
                        );
                        if (
                          !c ||
                          ((i = await (0, t.getAction)(
                            e,
                            m.getTransactionReceipt,
                            "getTransactionReceipt"
                          )({ hash: c.hash })),
                          v > 1 &&
                            (!i.blockNumber || f - i.blockNumber + 1n < v))
                        )
                          return;
                        let l = "replaced";
                        c.to === n.to &&
                        c.value === n.value &&
                        c.input === n.input
                          ? (l = "repriced")
                          : c.from === c.to &&
                            0n === c.value &&
                            (l = "cancelled"),
                          u(() => {
                            r.onReplaced?.({
                              reason: l,
                              replacedTransaction: n,
                              transaction: c,
                              transactionReceipt: i,
                            }),
                              r.resolve(i);
                          });
                      } catch (e) {
                        u(() => r.reject(e));
                      }
                    } else u(() => r.reject(o));
                  }
              },
            });
          }
        )),
        R
      );
    }
    function A(
      e,
      {
        blockTag: r = e.experimental_blockTag ?? "latest",
        emitMissed: a = !1,
        emitOnBegin: n = !1,
        onBlock: i,
        onError: o,
        includeTransactions: s,
        poll: c,
        pollingInterval: u = e.pollingInterval,
      }
    ) {
      let d,
        p,
        m,
        h,
        v,
        y =
          void 0 !== c
            ? c
            : "webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type)),
        w = s ?? !1;
      return y
        ? ((p = (0, f.stringify)(["watchBlocks", e.uid, r, a, n, w, u])),
          (0, l.observe)(p, { onBlock: i, onError: o }, (i) =>
            (0, b.poll)(
              async () => {
                try {
                  let n = await (0, t.getAction)(
                    e,
                    g.getBlock,
                    "getBlock"
                  )({ blockTag: r, includeTransactions: w });
                  if (null !== n.number && d?.number != null) {
                    if (n.number === d.number) return;
                    if (n.number - d.number > 1 && a)
                      for (let r = d?.number + 1n; r < n.number; r++) {
                        let a = await (0, t.getAction)(
                          e,
                          g.getBlock,
                          "getBlock"
                        )({ blockNumber: r, includeTransactions: w });
                        i.onBlock(a, d), (d = a);
                      }
                  }
                  (d?.number == null ||
                    ("pending" === r && n?.number == null) ||
                    (null !== n.number && n.number > d.number)) &&
                    (i.onBlock(n, d), (d = n));
                } catch (e) {
                  i.onError?.(e);
                }
              },
              { emitOnBegin: n, interval: u }
            )
          ))
        : ((m = !0),
          (h = !0),
          (v = () => (m = !1)),
          (async () => {
            try {
              n &&
                (0, t.getAction)(
                  e,
                  g.getBlock,
                  "getBlock"
                )({ blockTag: r, includeTransactions: w })
                  .then((e) => {
                    !m || (h && (i(e, void 0), (h = !1)));
                  })
                  .catch(o);
              let a = (() => {
                  if ("fallback" === e.transport.type) {
                    let t = e.transport.transports.find(
                      (e) =>
                        "webSocket" === e.config.type || "ipc" === e.config.type
                    );
                    return t ? t.value : e.transport;
                  }
                  return e.transport;
                })(),
                { unsubscribe: s } = await a.subscribe({
                  params: ["newHeads"],
                  async onData(r) {
                    if (!m) return;
                    let a = await (0, t.getAction)(
                      e,
                      g.getBlock,
                      "getBlock"
                    )({
                      blockNumber: r.result?.number,
                      includeTransactions: w,
                    }).catch(() => {});
                    m && (i(a, d), (h = !1), (d = a));
                  },
                  onError(e) {
                    o?.(e);
                  },
                });
              (v = s), m || v();
            } catch (e) {
              o?.(e);
            }
          })(),
          () => v());
    }
    e.s(["watchBlockNumber", () => y], 127465),
      e.s(["waitForTransactionReceipt", () => w], 948789),
      e.s(["watchBlocks", () => A], 438081);
  },
  309682,
  395024,
  738977,
  24335,
  829897,
  (e) => {
    "use strict";
    var t = e.i(363625),
      r = e.i(789268),
      a = e.i(964348),
      n = e.i(710959),
      i = e.i(356317),
      o = e.i(57770),
      s = e.i(989509),
      c = e.i(112039),
      l = e.i(606662),
      u = e.i(722192),
      d = e.i(340577),
      f = e.i(81740),
      g = e.i(369121),
      p = e.i(972960),
      m = e.i(484734),
      h = e.i(194720),
      b = e.i(818249),
      v = e.i(153077),
      y = e.i(867901),
      w = e.i(915588),
      A = e.i(712371),
      E = e.i(928843),
      T = e.i(975948),
      B = e.i(528804),
      k = e.i(563700),
      N = e.i(697178),
      C = e.i(666416),
      R = e.i(209050),
      F = e.i(937463),
      x = e.i(111047),
      I = e.i(402676),
      S = e.i(379578),
      q = e.i(974148),
      D = e.i(579917),
      L = e.i(489228),
      P = e.i(937445),
      H = e.i(568307),
      _ = e.i(804558),
      O = e.i(388750),
      U = e.i(948331),
      z = e.i(671293),
      M = e.i(106145),
      $ = e.i(708412),
      G = e.i(493617),
      j = e.i(733570),
      W = e.i(877528),
      Z = e.i(948789),
      J = e.i(127465),
      K = e.i(438081),
      V = e.i(121821),
      Q = e.i(70204),
      X = e.i(383856),
      Y = e.i(222427),
      ee = e.i(251666),
      et = e.i(856324),
      er = e.i(467125),
      ea = e.i(43473),
      en = e.i(976215),
      ei = e.i(34888);
    function eo(
      e,
      {
        batch: t = !0,
        onError: r,
        onTransactions: a,
        poll: n,
        pollingInterval: i = e.pollingInterval,
      }
    ) {
      let o, s, c;
      return (
        void 0 !== n
          ? n
          : "webSocket" !== e.transport.type && "ipc" !== e.transport.type
      )
        ? ((o = (0, ei.stringify)(["watchPendingTransactions", e.uid, t, i])),
          (0, ea.observe)(o, { onTransactions: a, onError: r }, (r) => {
            let a,
              n = (0, en.poll)(
                async () => {
                  try {
                    if (!a)
                      try {
                        a = await (0, er.getAction)(
                          e,
                          f.createPendingTransactionFilter,
                          "createPendingTransactionFilter"
                        )({});
                        return;
                      } catch (e) {
                        throw (n(), e);
                      }
                    let i = await (0, er.getAction)(
                      e,
                      R.getFilterChanges,
                      "getFilterChanges"
                    )({ filter: a });
                    if (0 === i.length) return;
                    if (t) r.onTransactions(i);
                    else for (let e of i) r.onTransactions([e]);
                  } catch (e) {
                    r.onError?.(e);
                  }
                },
                { emitOnBegin: !0, interval: i }
              );
            return async () => {
              a &&
                (await (0, er.getAction)(
                  e,
                  $.uninstallFilter,
                  "uninstallFilter"
                )({ filter: a })),
                n();
            };
          }))
        : ((s = !0),
          (c = () => (s = !1)),
          (async () => {
            try {
              let { unsubscribe: t } = await e.transport.subscribe({
                params: ["newPendingTransactions"],
                onData(e) {
                  if (!s) return;
                  let t = e.result;
                  a([t]);
                },
                onError(e) {
                  r?.(e);
                },
              });
              (c = t), s || c();
            } catch (e) {
              r?.(e);
            }
          })(),
          () => c());
    }
    e.s(["watchPendingTransactions", () => eo], 395024);
    var es = e.i(658765);
    let ec =
        /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
      el =
        /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
    var eu = e.i(796516),
      ed = e.i(806685);
    async function ef(e, t) {
      let {
          address: r,
          domain: a,
          message: n,
          nonce: i,
          scheme: o,
          signature: s,
          time: c = new Date(),
          ...l
        } = t,
        u = (function (e) {
          let { scheme: t, statement: r, ...a } = e.match(ec)?.groups ?? {},
            {
              chainId: n,
              expirationTime: i,
              issuedAt: o,
              notBefore: s,
              requestId: c,
              ...l
            } = e.match(el)?.groups ?? {},
            u = e.split("Resources:")[1]?.split("\n- ").slice(1);
          return {
            ...a,
            ...l,
            ...(n ? { chainId: Number(n) } : {}),
            ...(i ? { expirationTime: new Date(i) } : {}),
            ...(o ? { issuedAt: new Date(o) } : {}),
            ...(s ? { notBefore: new Date(s) } : {}),
            ...(c ? { requestId: c } : {}),
            ...(u ? { resources: u } : {}),
            ...(t ? { scheme: t } : {}),
            ...(r ? { statement: r } : {}),
          };
        })(n);
      if (
        !u.address ||
        !(function (e) {
          let {
            address: t,
            domain: r,
            message: a,
            nonce: n,
            scheme: i,
            time: o = new Date(),
          } = e;
          if (
            (r && a.domain !== r) ||
            (n && a.nonce !== n) ||
            (i && a.scheme !== i) ||
            (a.expirationTime && o >= a.expirationTime) ||
            (a.notBefore && o < a.notBefore)
          )
            return !1;
          try {
            if (
              !a.address ||
              !(0, eu.isAddress)(a.address, { strict: !1 }) ||
              (t && !(0, ed.isAddressEqual)(a.address, t))
            )
              return !1;
          } catch {
            return !1;
          }
          return !0;
        })({ address: r, domain: a, message: u, nonce: i, scheme: o, time: c })
      )
        return !1;
      let d = (0, es.hashMessage)(n);
      return (0, G.verifyHash)(e, {
        address: u.address,
        hash: d,
        signature: s,
        ...l,
      });
    }
    var eg = e.i(368941),
      ep = e.i(638291),
      em = e.i(393702),
      eh = e.i(839080),
      eb = e.i(675107);
    async function ev(
      e,
      { serializedTransaction: t, throwOnReceiptRevert: r, timeout: a }
    ) {
      let n = await e.request(
          {
            method: "eth_sendRawTransactionSync",
            params: a ? [t, (0, eb.numberToHex)(a)] : [t],
          },
          { retryCount: 0 }
        ),
        i = (
          e.chain?.formatters?.transactionReceipt?.format ||
          eh.formatTransactionReceipt
        )(n);
      if ("reverted" === i.status && r)
        throw new em.TransactionReceiptRevertedError({ receipt: i });
      return i;
    }
    function ey(e) {
      return {
        call: (t) => (0, s.call)(e, t),
        createAccessList: (t) => (0, c.createAccessList)(e, t),
        createBlockFilter: () => (0, l.createBlockFilter)(e),
        createContractEventFilter: (t) =>
          (0, u.createContractEventFilter)(e, t),
        createEventFilter: (t) => (0, d.createEventFilter)(e, t),
        createPendingTransactionFilter: () =>
          (0, f.createPendingTransactionFilter)(e),
        estimateContractGas: (t) => (0, g.estimateContractGas)(e, t),
        estimateGas: (t) => (0, m.estimateGas)(e, t),
        getBalance: (t) => (0, v.getBalance)(e, t),
        getBlobBaseFee: () => (0, y.getBlobBaseFee)(e),
        getBlock: (t) => (0, w.getBlock)(e, t),
        getBlockNumber: (t) => (0, A.getBlockNumber)(e, t),
        getBlockTransactionCount: (t) => (0, E.getBlockTransactionCount)(e, t),
        getBytecode: (t) => (0, B.getCode)(e, t),
        getChainId: () => (0, T.getChainId)(e),
        getCode: (t) => (0, B.getCode)(e, t),
        getContractEvents: (t) => (0, k.getContractEvents)(e, t),
        getEip712Domain: (t) => (0, N.getEip712Domain)(e, t),
        getEnsAddress: (t) => (0, r.getEnsAddress)(e, t),
        getEnsAvatar: (t) => (0, a.getEnsAvatar)(e, t),
        getEnsName: (t) => (0, n.getEnsName)(e, t),
        getEnsResolver: (t) => (0, i.getEnsResolver)(e, t),
        getEnsText: (t) => (0, o.getEnsText)(e, t),
        getFeeHistory: (t) => (0, C.getFeeHistory)(e, t),
        estimateFeesPerGas: (t) => (0, p.estimateFeesPerGas)(e, t),
        getFilterChanges: (t) => (0, R.getFilterChanges)(e, t),
        getFilterLogs: (t) => (0, F.getFilterLogs)(e, t),
        getGasPrice: () => (0, x.getGasPrice)(e),
        getLogs: (t) => (0, I.getLogs)(e, t),
        getProof: (t) => (0, S.getProof)(e, t),
        estimateMaxPriorityFeePerGas: (t) =>
          (0, h.estimateMaxPriorityFeePerGas)(e, t),
        fillTransaction: (t) => (0, b.fillTransaction)(e, t),
        getStorageAt: (t) => (0, q.getStorageAt)(e, t),
        getTransaction: (t) => (0, D.getTransaction)(e, t),
        getTransactionConfirmations: (t) =>
          (0, L.getTransactionConfirmations)(e, t),
        getTransactionCount: (t) => (0, P.getTransactionCount)(e, t),
        getTransactionReceipt: (t) => (0, H.getTransactionReceipt)(e, t),
        multicall: (t) => (0, _.multicall)(e, t),
        prepareTransactionRequest: (t) =>
          (0, eg.prepareTransactionRequest)(e, t),
        readContract: (t) => (0, O.readContract)(e, t),
        sendRawTransaction: (t) => (0, ep.sendRawTransaction)(e, t),
        sendRawTransactionSync: (t) => ev(e, t),
        simulate: (t) => (0, U.simulateBlocks)(e, t),
        simulateBlocks: (t) => (0, U.simulateBlocks)(e, t),
        simulateCalls: (t) => (0, z.simulateCalls)(e, t),
        simulateContract: (t) => (0, M.simulateContract)(e, t),
        verifyHash: (t) => (0, G.verifyHash)(e, t),
        verifyMessage: (t) => (0, j.verifyMessage)(e, t),
        verifySiweMessage: (t) => ef(e, t),
        verifyTypedData: (t) => (0, W.verifyTypedData)(e, t),
        uninstallFilter: (t) => (0, $.uninstallFilter)(e, t),
        waitForTransactionReceipt: (t) =>
          (0, Z.waitForTransactionReceipt)(e, t),
        watchBlocks: (t) => (0, K.watchBlocks)(e, t),
        watchBlockNumber: (t) => (0, J.watchBlockNumber)(e, t),
        watchContractEvent: (t) => (0, V.watchContractEvent)(e, t),
        watchEvent: (t) =>
          (function (
            e,
            {
              address: t,
              args: r,
              batch: a = !0,
              event: n,
              events: i,
              fromBlock: o,
              onError: s,
              onLogs: c,
              poll: l,
              pollingInterval: u = e.pollingInterval,
              strict: f,
            }
          ) {
            let g,
              p,
              m,
              h =
                void 0 !== l
                  ? l
                  : "bigint" == typeof o ||
                    ("webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type))),
              b = f ?? !1;
            return h
              ? ((g = (0, ei.stringify)([
                  "watchEvent",
                  t,
                  r,
                  a,
                  e.uid,
                  n,
                  u,
                  o,
                ])),
                (0, ea.observe)(g, { onLogs: c, onError: s }, (s) => {
                  let c, l;
                  void 0 !== o && (c = o - 1n);
                  let f = !1,
                    g = (0, en.poll)(
                      async () => {
                        if (!f) {
                          try {
                            l = await (0, er.getAction)(
                              e,
                              d.createEventFilter,
                              "createEventFilter"
                            )({
                              address: t,
                              args: r,
                              event: n,
                              events: i,
                              strict: b,
                              fromBlock: o,
                            });
                          } catch {}
                          f = !0;
                          return;
                        }
                        try {
                          let o;
                          if (l)
                            o = await (0, er.getAction)(
                              e,
                              R.getFilterChanges,
                              "getFilterChanges"
                            )({ filter: l });
                          else {
                            let a = await (0, er.getAction)(
                              e,
                              A.getBlockNumber,
                              "getBlockNumber"
                            )({});
                            (o =
                              c && c !== a
                                ? await (0, er.getAction)(
                                    e,
                                    I.getLogs,
                                    "getLogs"
                                  )({
                                    address: t,
                                    args: r,
                                    event: n,
                                    events: i,
                                    fromBlock: c + 1n,
                                    toBlock: a,
                                  })
                                : []),
                              (c = a);
                          }
                          if (0 === o.length) return;
                          if (a) s.onLogs(o);
                          else for (let e of o) s.onLogs([e]);
                        } catch (e) {
                          l && e instanceof X.InvalidInputRpcError && (f = !1),
                            s.onError?.(e);
                        }
                      },
                      { emitOnBegin: !0, interval: u }
                    );
                  return async () => {
                    l &&
                      (await (0, er.getAction)(
                        e,
                        $.uninstallFilter,
                        "uninstallFilter"
                      )({ filter: l })),
                      g();
                  };
                }))
              : ((p = !0),
                (m = () => (p = !1)),
                (async () => {
                  try {
                    let a = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      o = i ?? (n ? [n] : void 0),
                      l = [];
                    o &&
                      ((l = [
                        o.flatMap((e) =>
                          (0, ee.encodeEventTopics)({
                            abi: [e],
                            eventName: e.name,
                            args: r,
                          })
                        ),
                      ]),
                      n && (l = l[0]));
                    let { unsubscribe: u } = await a.subscribe({
                      params: ["logs", { address: t, topics: l }],
                      onData(e) {
                        if (!p) return;
                        let t = e.result;
                        try {
                          let { eventName: e, args: r } = (0, Y.decodeEventLog)(
                              {
                                abi: o ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: b,
                              }
                            ),
                            a = (0, et.formatLog)(t, { args: r, eventName: e });
                          c([a]);
                        } catch (n) {
                          let e, r;
                          if (
                            n instanceof Q.DecodeLogDataMismatch ||
                            n instanceof Q.DecodeLogTopicsMismatch
                          ) {
                            if (f) return;
                            (e = n.abiItem.name),
                              (r = n.abiItem.inputs?.some(
                                (e) => !("name" in e && e.name)
                              ));
                          }
                          let a = (0, et.formatLog)(t, {
                            args: r ? [] : {},
                            eventName: e,
                          });
                          c([a]);
                        }
                      },
                      onError(e) {
                        s?.(e);
                      },
                    });
                    (m = u), p || m();
                  } catch (e) {
                    s?.(e);
                  }
                })(),
                () => m());
          })(e, t),
        watchPendingTransactions: (t) => eo(e, t),
      };
    }
    function ew(e) {
      let { key: r = "public", name: a = "Public Client" } = e;
      return (0, t.createClient)({
        ...e,
        key: r,
        name: a,
        type: "publicClient",
      }).extend(ey);
    }
    e.s(["sendRawTransactionSync", () => ev], 738977),
      e.s(["publicActions", () => ey], 24335),
      e.s(["createPublicClient", () => ew], 309682);
    var eA = e.i(189991),
      eE = e.i(611573);
    async function eT(e, t) {
      let { account: r = e.account, chainId: a, nonce: n } = t;
      if (!r)
        throw new eE.AccountNotFoundError({
          docsPath: "/docs/eip7702/prepareAuthorization",
        });
      let i = (0, eA.parseAccount)(r),
        o = (() => {
          if (t.executor)
            return "self" === t.executor
              ? t.executor
              : (0, eA.parseAccount)(t.executor);
        })(),
        s = { address: t.contractAddress ?? t.address, chainId: a, nonce: n };
      return (
        void 0 === s.chainId &&
          (s.chainId =
            e.chain?.id ??
            (await (0, er.getAction)(e, T.getChainId, "getChainId")({}))),
        void 0 === s.nonce &&
          ((s.nonce = await (0, er.getAction)(
            e,
            P.getTransactionCount,
            "getTransactionCount"
          )({ address: i.address, blockTag: "pending" })),
          ("self" === o ||
            (o?.address && (0, ed.isAddressEqual)(o.address, i.address))) &&
            (s.nonce += 1)),
        s
      );
    }
    e.s(["prepareAuthorization", () => eT], 829897);
  },
]);
