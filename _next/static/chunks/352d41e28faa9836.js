(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  785904,
  (e) => {
    "use strict";
    e.s([
      "erc6492MagicBytes",
      0,
      "0x6492649264926492649264926492649264926492649264926492649264926492",
      "zeroHash",
      0,
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    ]);
  },
  975721,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(608861),
      n = e.i(796516),
      o = e.i(147526),
      i = e.i(22411),
      s = e.i(675107),
      a = e.i(342692);
    function c(e, c) {
      if (e.length !== c.length)
        throw new t.AbiEncodingLengthMismatchError({
          expectedLength: e.length,
          givenLength: c.length,
        });
      let u = [];
      for (let l = 0; l < e.length; l++) {
        let d = e[l],
          _ = c[l];
        u.push(
          (function e(c, u, l = !1) {
            if ("address" === c) {
              if (!(0, n.isAddress)(u))
                throw new r.InvalidAddressError({ address: u });
              return (0, i.pad)(u.toLowerCase(), { size: l ? 32 : null });
            }
            if ("string" === c) return (0, s.stringToHex)(u);
            if ("bytes" === c) return u;
            if ("bool" === c)
              return (0, i.pad)((0, s.boolToHex)(u), { size: l ? 32 : 1 });
            let d = c.match(a.integerRegex);
            if (d) {
              let [e, t, r = "256"] = d,
                n = Number.parseInt(r, 10) / 8;
              return (0, s.numberToHex)(u, {
                size: l ? 32 : n,
                signed: "int" === t,
              });
            }
            let _ = c.match(a.bytesRegex);
            if (_) {
              let [e, r] = _;
              if (Number.parseInt(r, 10) !== (u.length - 2) / 2)
                throw new t.BytesSizeMismatchError({
                  expectedSize: Number.parseInt(r, 10),
                  givenSize: (u.length - 2) / 2,
                });
              return (0, i.pad)(u, { dir: "right", size: l ? 32 : null });
            }
            let p = c.match(a.arrayRegex);
            if (p && Array.isArray(u)) {
              let [t, r] = p,
                n = [];
              for (let t = 0; t < u.length; t++) n.push(e(r, u[t], !0));
              return 0 === n.length ? "0x" : (0, o.concatHex)(n);
            }
            throw new t.UnsupportedPackedAbiType(c);
          })(d, _)
        );
      }
      return (0, o.concatHex)(u);
    }
    e.s(["encodePacked", () => c]);
  },
  903472,
  (e) => {
    "use strict";
    var t = e.i(937445),
      r = e.i(976677);
    function n(e) {
      let { source: t } = e,
        n = new Map(),
        o = new r.LruMap(8192),
        i = new Map(),
        s = ({ address: e, chainId: t }) => `${e}.${t}`;
      return {
        async consume({ address: e, chainId: r, client: n }) {
          let i = s({ address: e, chainId: r }),
            a = this.get({ address: e, chainId: r, client: n });
          this.increment({ address: e, chainId: r });
          let c = await a;
          return await t.set({ address: e, chainId: r }, c), o.set(i, c), c;
        },
        async increment({ address: e, chainId: t }) {
          let r = s({ address: e, chainId: t }),
            o = n.get(r) ?? 0;
          n.set(r, o + 1);
        },
        async get({ address: e, chainId: r, client: a }) {
          let c = s({ address: e, chainId: r }),
            u = i.get(c);
          return (
            u ||
              ((u = (async () => {
                try {
                  let n = await t.get({ address: e, chainId: r, client: a }),
                    i = o.get(c) ?? 0;
                  if (i > 0 && n <= i) return i + 1;
                  return o.delete(c), n;
                } finally {
                  this.reset({ address: e, chainId: r });
                }
              })()),
              i.set(c, u)),
            (n.get(c) ?? 0) + (await u)
          );
        },
        reset({ address: e, chainId: t }) {
          let r = s({ address: e, chainId: t });
          n.delete(r), i.delete(r);
        },
      };
    }
    let o = n({
      source: {
        async get(e) {
          let { address: r, client: n } = e;
          return (0, t.getTransactionCount)(n, {
            address: r,
            blockTag: "pending",
          });
        },
        set() {},
      },
    });
    e.s(["createNonceManager", () => n, "nonceManager", 0, o]);
  },
  189643,
  (e) => {
    "use strict";
    var t = e.i(337575),
      r = e.i(675107);
    function n(e) {
      let { r: n, s: o } = t.secp256k1.Signature.fromCompact(e.slice(2, 130)),
        i = Number(`0x${e.slice(130)}`),
        [s, a] = (() => {
          if (0 === i || 1 === i) return [void 0, i];
          if (27 === i) return [BigInt(i), 0];
          if (28 === i) return [BigInt(i), 1];
          throw Error("Invalid yParityOrV value");
        })();
      return void 0 !== s
        ? {
            r: (0, r.numberToHex)(n, { size: 32 }),
            s: (0, r.numberToHex)(o, { size: 32 }),
            v: s,
            yParity: a,
          }
        : {
            r: (0, r.numberToHex)(n, { size: 32 }),
            s: (0, r.numberToHex)(o, { size: 32 }),
            yParity: a,
          };
    }
    e.s(["parseSignature", () => n]);
  },
  855100,
  (e) => {
    "use strict";
    var t = e.i(785904),
      r = e.i(704434),
      n = e.i(147526),
      o = e.i(769936);
    function i(e) {
      let { address: i, data: s, signature: a, to: c = "hex" } = e,
        u = (0, n.concatHex)([
          (0, r.encodeAbiParameters)(
            [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
            [i, s, a]
          ),
          t.erc6492MagicBytes,
        ]);
      return "hex" === c ? u : (0, o.hexToBytes)(u);
    }
    e.s(["serializeErc6492Signature", () => i]);
  },
  461147,
  316819,
  848302,
  155933,
  (e) => {
    "use strict";
    var t = e.i(752012),
      r = e.i(727343),
      n = e.i(70204),
      o = e.i(790063),
      i = e.i(879617),
      s = e.i(249311),
      a = e.i(332881);
    function c(e) {
      let { abi: t, data: r } = e,
        c = (0, o.slice)(r, 0, 4),
        u = t.find(
          (e) =>
            "function" === e.type &&
            c === (0, i.toFunctionSelector)((0, a.formatAbiItem)(e))
        );
      if (!u)
        throw new n.AbiFunctionSignatureNotFoundError(c, {
          docsPath: "/docs/contract/decodeFunctionData",
        });
      return {
        functionName: u.name,
        args:
          "inputs" in u && u.inputs && u.inputs.length > 0
            ? (0, s.decodeAbiParameters)(u.inputs, (0, o.slice)(r, 4))
            : void 0,
      };
    }
    e.s(["decodeFunctionData", () => c], 316819);
    var u = e.i(147526),
      l = e.i(704434),
      d = e.i(627173);
    let _ = "/docs/contract/encodeErrorResult";
    function p(e) {
      let { abi: t, errorName: r, args: o } = e,
        s = t[0];
      if (r) {
        let e = (0, d.getAbiItem)({ abi: t, args: o, name: r });
        if (!e) throw new n.AbiErrorNotFoundError(r, { docsPath: _ });
        s = e;
      }
      if ("error" !== s.type)
        throw new n.AbiErrorNotFoundError(void 0, { docsPath: _ });
      let c = (0, a.formatAbiItem)(s),
        p = (0, i.toFunctionSelector)(c),
        f = "0x";
      if (o && o.length > 0) {
        if (!s.inputs)
          throw new n.AbiErrorInputsNotFoundError(s.name, { docsPath: _ });
        f = (0, l.encodeAbiParameters)(s.inputs, o);
      }
      return (0, u.concatHex)([p, f]);
    }
    e.s(["encodeErrorResult", () => p], 848302);
    let f = "/docs/contract/encodeFunctionResult";
    function h(e) {
      let { abi: t, functionName: r, result: o } = e,
        i = t[0];
      if (r) {
        let e = (0, d.getAbiItem)({ abi: t, name: r });
        if (!e) throw new n.AbiFunctionNotFoundError(r, { docsPath: f });
        i = e;
      }
      if ("function" !== i.type)
        throw new n.AbiFunctionNotFoundError(void 0, { docsPath: f });
      if (!i.outputs)
        throw new n.AbiFunctionOutputsNotFoundError(i.name, { docsPath: f });
      let s = (() => {
        if (0 === i.outputs.length) return [];
        if (1 === i.outputs.length) return [o];
        if (Array.isArray(o)) return o;
        throw new n.InvalidArrayError(o);
      })();
      return (0, l.encodeAbiParameters)(i.outputs, s);
    }
    e.s(["encodeFunctionResult", () => h], 155933);
    let m = "x-batch-gateway:true";
    async function y(e) {
      let { data: n, ccipRequest: o } = e,
        {
          args: [i],
        } = c({ abi: t.batchGatewayAbi, data: n }),
        s = [],
        a = [];
      return (
        await Promise.all(
          i.map(async (e, n) => {
            try {
              (a[n] = e.urls.includes(m)
                ? await y({ data: e.data, ccipRequest: o })
                : await o(e)),
                (s[n] = !1);
            } catch (e) {
              var i;
              (s[n] = !0),
                (a[n] =
                  "HttpRequestError" === (i = e).name && i.status
                    ? p({
                        abi: t.batchGatewayAbi,
                        errorName: "HttpError",
                        args: [i.status, i.shortMessage],
                      })
                    : p({
                        abi: [r.solidityError],
                        errorName: "Error",
                        args: [
                          "shortMessage" in i ? i.shortMessage : i.message,
                        ],
                      }));
            }
          })
        ),
        h({ abi: t.batchGatewayAbi, functionName: "query", result: [s, a] })
      );
    }
    e.s(
      ["localBatchGatewayRequest", () => y, "localBatchGatewayUrl", 0, m],
      461147
    );
  },
  102305,
  (e) => {
    "use strict";
    function t() {
      for (var e, t, r = 0, n = ""; r < arguments.length; )
        (e = arguments[r++]) &&
          (t = (function e(t) {
            var r,
              n,
              o = "";
            if ("string" == typeof t || "number" == typeof t) o += t;
            else if ("object" == typeof t)
              if (Array.isArray(t))
                for (r = 0; r < t.length; r++)
                  t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
              else for (r in t) t[r] && (o && (o += " "), (o += r));
            return o;
          })(e)) &&
          (n && (n += " "), (n += t));
      return n;
    }
    e.s(["clsx", () => t, "default", 0, t]);
  },
  928020,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      o,
      i,
      s,
      a,
      c,
      u,
      l,
      d,
      _,
      p = {},
      f = [],
      h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
      m = Array.isArray;
    function y(e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    }
    function b(e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    }
    function v(e, r, n) {
      var o,
        i,
        s,
        a = {};
      for (s in r)
        "key" == s ? (o = r[s]) : "ref" == s ? (i = r[s]) : (a[s] = r[s]);
      if (
        (arguments.length > 2 &&
          (a.children = arguments.length > 3 ? t.call(arguments, 2) : n),
        "function" == typeof e && null != e.defaultProps)
      )
        for (s in e.defaultProps) void 0 === a[s] && (a[s] = e.defaultProps[s]);
      return g(e, a, o, i, null);
    }
    function g(e, t, o, i, s) {
      var a = {
        type: e,
        props: t,
        key: o,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == s ? ++n : s,
        __i: -1,
        __u: 0,
      };
      return null == s && null != r.vnode && r.vnode(a), a;
    }
    function w() {
      return { current: null };
    }
    function E(e) {
      return e.children;
    }
    function R(e, t) {
      (this.props = e), (this.context = t);
    }
    function P(e, t) {
      if (null == t) return e.__ ? P(e.__, e.__i + 1) : null;
      for (var r; t < e.__k.length; t++)
        if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
      return "function" == typeof e.type ? P(e) : null;
    }
    function x(e) {
      ((!e.__d && (e.__d = !0) && i.push(e) && !k.__r++) ||
        s !== r.debounceRendering) &&
        ((s = r.debounceRendering) || a)(k);
    }
    function k() {
      var e, t, n, o, s, a, u, l;
      for (i.sort(c); (e = i.shift()); )
        e.__d &&
          ((t = i.length),
          (o = void 0),
          (a = (s = (n = e).__v).__e),
          (u = []),
          (l = []),
          n.__P &&
            (((o = y({}, s)).__v = s.__v + 1),
            r.vnode && r.vnode(o),
            M(
              n.__P,
              o,
              s,
              n.__n,
              n.__P.namespaceURI,
              32 & s.__u ? [a] : null,
              u,
              null == a ? P(s) : a,
              !!(32 & s.__u),
              l
            ),
            (o.__v = s.__v),
            (o.__.__k[o.__i] = o),
            U(u, o, l),
            o.__e != a &&
              (function e(t) {
                var r, n;
                if (null != (t = t.__) && null != t.__c) {
                  for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
                    if (null != (n = t.__k[r]) && null != n.__e) {
                      t.__e = t.__c.base = n.__e;
                      break;
                    }
                  return e(t);
                }
              })(o)),
          i.length > t && i.sort(c));
      k.__r = 0;
    }
    function I(e, t, n, o, i, s, a, c, u, l, d) {
      var _,
        h,
        y,
        v,
        w,
        R = (o && o.__k) || f,
        x = t.length;
      for (
        n.__d = u,
          (function (e, t, n) {
            var o,
              i,
              s,
              a,
              c,
              u = t.length,
              l = n.length,
              d = l,
              _ = 0;
            for (e.__k = [], o = 0; o < u; o++)
              null != (i = t[o]) &&
              "boolean" != typeof i &&
              "function" != typeof i
                ? ((a = o + _),
                  ((i = e.__k[o] =
                    "string" == typeof i ||
                    "number" == typeof i ||
                    "bigint" == typeof i ||
                    i.constructor == String
                      ? g(null, i, null, null, null)
                      : m(i)
                      ? g(E, { children: i }, null, null, null)
                      : void 0 === i.constructor && i.__b > 0
                      ? g(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                      : i).__ = e),
                  (i.__b = e.__b + 1),
                  (s = null),
                  -1 !==
                    (c = i.__i =
                      (function (e, t, r, n) {
                        var o = e.key,
                          i = e.type,
                          s = r - 1,
                          a = r + 1,
                          c = t[r];
                        if (
                          null === c ||
                          (c &&
                            o == c.key &&
                            i === c.type &&
                            0 == (131072 & c.__u))
                        )
                          return r;
                        if (n > +(null != c && 0 == (131072 & c.__u)))
                          for (; s >= 0 || a < t.length; ) {
                            if (s >= 0) {
                              if (
                                (c = t[s]) &&
                                0 == (131072 & c.__u) &&
                                o == c.key &&
                                i === c.type
                              )
                                return s;
                              s--;
                            }
                            if (a < t.length) {
                              if (
                                (c = t[a]) &&
                                0 == (131072 & c.__u) &&
                                o == c.key &&
                                i === c.type
                              )
                                return a;
                              a++;
                            }
                          }
                        return -1;
                      })(i, n, a, d)) && (d--, (s = n[c]) && (s.__u |= 131072)),
                  null == s || null === s.__v
                    ? (-1 == c && _--,
                      "function" != typeof i.type && (i.__u |= 65536))
                    : c !== a &&
                      (c == a - 1
                        ? _--
                        : c == a + 1
                        ? _++
                        : (c > a ? _-- : _++, (i.__u |= 65536))))
                : (i = e.__k[o] = null);
            if (d)
              for (o = 0; o < l; o++)
                null != (s = n[o]) &&
                  0 == (131072 & s.__u) &&
                  (s.__e == e.__d && (e.__d = P(s)),
                  (function e(t, n, o) {
                    var i, s;
                    if (
                      (r.unmount && r.unmount(t),
                      (i = t.ref) &&
                        ((i.current && i.current !== t.__e) || N(i, null, n)),
                      null != (i = t.__c))
                    ) {
                      if (i.componentWillUnmount)
                        try {
                          i.componentWillUnmount();
                        } catch (e) {
                          r.__e(e, n);
                        }
                      i.base = i.__P = null;
                    }
                    if ((i = t.__k))
                      for (s = 0; s < i.length; s++)
                        i[s] && e(i[s], n, o || "function" != typeof t.type);
                    o || b(t.__e), (t.__c = t.__ = t.__e = t.__d = void 0);
                  })(s, s));
          })(n, t, R),
          u = n.__d,
          _ = 0;
        _ < x;
        _++
      )
        null != (y = n.__k[_]) &&
          ((h = -1 === y.__i ? p : R[y.__i] || p),
          (y.__i = _),
          M(e, y, h, i, s, a, c, u, l, d),
          (v = y.__e),
          y.ref &&
            h.ref != y.ref &&
            (h.ref && N(h.ref, null, y), d.push(y.ref, y.__c || v, y)),
          null == w && null != v && (w = v),
          65536 & y.__u || h.__k === y.__k
            ? (u = (function e(t, r, n) {
                var o, i;
                if ("function" == typeof t.type) {
                  for (o = t.__k, i = 0; o && i < o.length; i++)
                    o[i] && ((o[i].__ = t), (r = e(o[i], r, n)));
                  return r;
                }
                t.__e != r &&
                  (r && t.type && !n.contains(r) && (r = P(t)),
                  n.insertBefore(t.__e, r || null),
                  (r = t.__e));
                do r = r && r.nextSibling;
                while (null != r && 8 === r.nodeType);
                return r;
              })(y, u, e))
            : "function" == typeof y.type && void 0 !== y.__d
            ? (u = y.__d)
            : v && (u = v.nextSibling),
          (y.__d = void 0),
          (y.__u &= -196609));
      (n.__d = u), (n.__e = w);
    }
    function T(e, t, r) {
      "-" === t[0]
        ? e.setProperty(t, null == r ? "" : r)
        : (e[t] =
            null == r ? "" : "number" != typeof r || h.test(t) ? r : r + "px");
    }
    function S(e, t, r, n, o) {
      var i;
      e: if ("style" === t)
        if ("string" == typeof r) e.style.cssText = r;
        else {
          if (("string" == typeof n && (e.style.cssText = n = ""), n))
            for (t in n) (r && t in r) || T(e.style, t, "");
          if (r) for (t in r) (n && r[t] === n[t]) || T(e.style, t, r[t]);
        }
      else if ("o" === t[0] && "n" === t[1])
        (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
          (t =
            t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
              ? t.toLowerCase().slice(2)
              : t.slice(2)),
          e.l || (e.l = {}),
          (e.l[t + i] = r),
          r
            ? n
              ? (r.u = n.u)
              : ((r.u = u), e.addEventListener(t, i ? d : l, i))
            : e.removeEventListener(t, i ? d : l, i);
      else {
        if ("http://www.w3.org/2000/svg" == o)
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (
          "width" != t &&
          "height" != t &&
          "href" != t &&
          "list" != t &&
          "form" != t &&
          "tabIndex" != t &&
          "download" != t &&
          "rowSpan" != t &&
          "colSpan" != t &&
          "role" != t &&
          "popover" != t &&
          t in e
        )
          try {
            e[t] = null == r ? "" : r;
            break e;
          } catch (e) {}
        "function" == typeof r ||
          (null == r || (!1 === r && "-" !== t[4])
            ? e.removeAttribute(t)
            : e.setAttribute(t, "popover" == t && 1 == r ? "" : r));
      }
    }
    function C(e) {
      return function (t) {
        if (this.l) {
          var n = this.l[t.type + e];
          if (null == t.t) t.t = u++;
          else if (t.t < n.u) return;
          return n(r.event ? r.event(t) : t);
        }
      };
    }
    function M(e, n, o, i, s, a, c, u, l, d) {
      var _,
        f,
        h,
        v,
        g,
        w,
        x,
        k,
        T,
        C,
        M,
        U,
        N,
        j,
        H,
        O,
        D = n.type;
      if (void 0 !== n.constructor) return null;
      128 & o.__u && ((l = !!(32 & o.__u)), (a = [(u = n.__e = o.__e)])),
        (_ = r.__b) && _(n);
      e: if ("function" == typeof D)
        try {
          if (
            ((k = n.props),
            (T = "prototype" in D && D.prototype.render),
            (C = (_ = D.contextType) && i[_.__c]),
            (M = _ ? (C ? C.props.value : _.__) : i),
            o.__c
              ? (x = (f = n.__c = o.__c).__ = f.__E)
              : (T
                  ? (n.__c = f = new D(k, M))
                  : ((n.__c = f = new R(k, M)),
                    (f.constructor = D),
                    (f.render = A)),
                C && C.sub(f),
                (f.props = k),
                f.state || (f.state = {}),
                (f.context = M),
                (f.__n = i),
                (h = f.__d = !0),
                (f.__h = []),
                (f._sb = [])),
            T && null == f.__s && (f.__s = f.state),
            T &&
              null != D.getDerivedStateFromProps &&
              (f.__s == f.state && (f.__s = y({}, f.__s)),
              y(f.__s, D.getDerivedStateFromProps(k, f.__s))),
            (v = f.props),
            (g = f.state),
            (f.__v = n),
            h)
          )
            T &&
              null == D.getDerivedStateFromProps &&
              null != f.componentWillMount &&
              f.componentWillMount(),
              T &&
                null != f.componentDidMount &&
                f.__h.push(f.componentDidMount);
          else {
            if (
              (T &&
                null == D.getDerivedStateFromProps &&
                k !== v &&
                null != f.componentWillReceiveProps &&
                f.componentWillReceiveProps(k, M),
              !f.__e &&
                ((null != f.shouldComponentUpdate &&
                  !1 === f.shouldComponentUpdate(k, f.__s, M)) ||
                  n.__v === o.__v))
            ) {
              for (
                n.__v !== o.__v &&
                  ((f.props = k), (f.state = f.__s), (f.__d = !1)),
                  n.__e = o.__e,
                  n.__k = o.__k,
                  n.__k.some(function (e) {
                    e && (e.__ = n);
                  }),
                  U = 0;
                U < f._sb.length;
                U++
              )
                f.__h.push(f._sb[U]);
              (f._sb = []), f.__h.length && c.push(f);
              break e;
            }
            null != f.componentWillUpdate && f.componentWillUpdate(k, f.__s, M),
              T &&
                null != f.componentDidUpdate &&
                f.__h.push(function () {
                  f.componentDidUpdate(v, g, w);
                });
          }
          if (
            ((f.context = M),
            (f.props = k),
            (f.__P = e),
            (f.__e = !1),
            (N = r.__r),
            (j = 0),
            T)
          ) {
            for (
              f.state = f.__s,
                f.__d = !1,
                N && N(n),
                _ = f.render(f.props, f.state, f.context),
                H = 0;
              H < f._sb.length;
              H++
            )
              f.__h.push(f._sb[H]);
            f._sb = [];
          } else
            do
              (f.__d = !1),
                N && N(n),
                (_ = f.render(f.props, f.state, f.context)),
                (f.state = f.__s);
            while (f.__d && ++j < 25);
          (f.state = f.__s),
            null != f.getChildContext && (i = y(y({}, i), f.getChildContext())),
            T &&
              !h &&
              null != f.getSnapshotBeforeUpdate &&
              (w = f.getSnapshotBeforeUpdate(v, g)),
            I(
              e,
              m(
                (O =
                  null != _ && _.type === E && null == _.key
                    ? _.props.children
                    : _)
              )
                ? O
                : [O],
              n,
              o,
              i,
              s,
              a,
              c,
              u,
              l,
              d
            ),
            (f.base = n.__e),
            (n.__u &= -161),
            f.__h.length && c.push(f),
            x && (f.__E = f.__ = null);
        } catch (e) {
          if (((n.__v = null), l || null != a)) {
            for (
              n.__u |= l ? 160 : 32;
              u && 8 === u.nodeType && u.nextSibling;

            )
              u = u.nextSibling;
            (a[a.indexOf(u)] = null), (n.__e = u);
          } else (n.__e = o.__e), (n.__k = o.__k);
          r.__e(e, n, o);
        }
      else
        null == a && n.__v === o.__v
          ? ((n.__k = o.__k), (n.__e = o.__e))
          : (n.__e = (function (e, n, o, i, s, a, c, u, l) {
              var d,
                _,
                f,
                h,
                y,
                v,
                g,
                w = o.props,
                E = n.props,
                R = n.type;
              if (
                ("svg" === R
                  ? (s = "http://www.w3.org/2000/svg")
                  : "math" === R
                  ? (s = "http://www.w3.org/1998/Math/MathML")
                  : s || (s = "http://www.w3.org/1999/xhtml"),
                null != a)
              ) {
                for (d = 0; d < a.length; d++)
                  if (
                    (y = a[d]) &&
                    "setAttribute" in y == !!R &&
                    (R ? y.localName === R : 3 === y.nodeType)
                  ) {
                    (e = y), (a[d] = null);
                    break;
                  }
              }
              if (null == e) {
                if (null === R) return document.createTextNode(E);
                (e = document.createElementNS(s, R, E.is && E)),
                  u && (r.__m && r.__m(n, a), (u = !1)),
                  (a = null);
              }
              if (null === R) w === E || (u && e.data === E) || (e.data = E);
              else {
                if (
                  ((a = a && t.call(e.childNodes)),
                  (w = o.props || p),
                  !u && null != a)
                )
                  for (w = {}, d = 0; d < e.attributes.length; d++)
                    w[(y = e.attributes[d]).name] = y.value;
                for (d in w)
                  if (((y = w[d]), "children" == d));
                  else if ("dangerouslySetInnerHTML" == d) f = y;
                  else if (!(d in E)) {
                    if (
                      ("value" == d && "defaultValue" in E) ||
                      ("checked" == d && "defaultChecked" in E)
                    )
                      continue;
                    S(e, d, null, y, s);
                  }
                for (d in E)
                  (y = E[d]),
                    "children" == d
                      ? (h = y)
                      : "dangerouslySetInnerHTML" == d
                      ? (_ = y)
                      : "value" == d
                      ? (v = y)
                      : "checked" == d
                      ? (g = y)
                      : (u && "function" != typeof y) ||
                        w[d] === y ||
                        S(e, d, y, w[d], s);
                if (_)
                  u ||
                    (f &&
                      (_.__html === f.__html || _.__html === e.innerHTML)) ||
                    (e.innerHTML = _.__html),
                    (n.__k = []);
                else if (
                  (f && (e.innerHTML = ""),
                  I(
                    e,
                    m(h) ? h : [h],
                    n,
                    o,
                    i,
                    "foreignObject" === R ? "http://www.w3.org/1999/xhtml" : s,
                    a,
                    c,
                    a ? a[0] : o.__k && P(o, 0),
                    u,
                    l
                  ),
                  null != a)
                )
                  for (d = a.length; d--; ) b(a[d]);
                u ||
                  ((d = "value"),
                  "progress" === R && null == v
                    ? e.removeAttribute("value")
                    : void 0 === v ||
                      (v === e[d] &&
                        ("progress" !== R || v) &&
                        ("option" !== R || v === w[d])) ||
                      S(e, d, v, w[d], s),
                  (d = "checked"),
                  void 0 !== g && g !== e[d] && S(e, d, g, w[d], s));
              }
              return e;
            })(o.__e, n, o, i, s, a, c, l, d));
      (_ = r.diffed) && _(n);
    }
    function U(e, t, n) {
      t.__d = void 0;
      for (var o = 0; o < n.length; o++) N(n[o], n[++o], n[++o]);
      r.__c && r.__c(t, e),
        e.some(function (t) {
          try {
            (e = t.__h),
              (t.__h = []),
              e.some(function (e) {
                e.call(t);
              });
          } catch (e) {
            r.__e(e, t.__v);
          }
        });
    }
    function N(e, t, n) {
      try {
        if ("function" == typeof e) {
          var o = "function" == typeof e.__u;
          o && e.__u(), (o && null == t) || (e.__u = e(t));
        } else e.current = t;
      } catch (e) {
        r.__e(e, n);
      }
    }
    function A(e, t, r) {
      return this.constructor(e, r);
    }
    function j(e, n, o) {
      var i, s, a, c;
      r.__ && r.__(e, n),
        (s = (i = "function" == typeof o) ? null : (o && o.__k) || n.__k),
        (a = []),
        (c = []),
        M(
          n,
          (e = ((!i && o) || n).__k = v(E, null, [e])),
          s || p,
          p,
          n.namespaceURI,
          !i && o ? [o] : s ? null : n.firstChild ? t.call(n.childNodes) : null,
          a,
          !i && o ? o : s ? s.__e : n.firstChild,
          i,
          c
        ),
        U(a, e, c);
    }
    function H(e, t) {
      j(e, t, H);
    }
    function O(e, r, n) {
      var o,
        i,
        s,
        a,
        c = y({}, e.props);
      for (s in (e.type && e.type.defaultProps && (a = e.type.defaultProps), r))
        "key" == s
          ? (o = r[s])
          : "ref" == s
          ? (i = r[s])
          : (c[s] = void 0 === r[s] && void 0 !== a ? a[s] : r[s]);
      return (
        arguments.length > 2 &&
          (c.children = arguments.length > 3 ? t.call(arguments, 2) : n),
        g(e.type, c, o || e.key, i || e.ref, null)
      );
    }
    function D(e, t) {
      var r = {
        __c: (t = "__cC" + _++),
        __: e,
        Consumer: function (e, t) {
          return e.children(t);
        },
        Provider: function (e) {
          var r, n;
          return (
            this.getChildContext ||
              ((r = []),
              ((n = {})[t] = this),
              (this.getChildContext = function () {
                return n;
              }),
              (this.componentWillUnmount = function () {
                r = null;
              }),
              (this.shouldComponentUpdate = function (e) {
                this.props.value !== e.value &&
                  r.some(function (e) {
                    (e.__e = !0), x(e);
                  });
              }),
              (this.sub = function (e) {
                r.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function () {
                  r && r.splice(r.indexOf(e), 1), t && t.call(e);
                };
              })),
            e.children
          );
        },
      };
      return (r.Provider.__ = r.Consumer.contextType = r);
    }
    (t = f.slice),
      (r = {
        __e: function (e, t, r, n) {
          for (var o, i, s; (t = t.__); )
            if ((o = t.__c) && !o.__)
              try {
                if (
                  ((i = o.constructor) &&
                    null != i.getDerivedStateFromError &&
                    (o.setState(i.getDerivedStateFromError(e)), (s = o.__d)),
                  null != o.componentDidCatch &&
                    (o.componentDidCatch(e, n || {}), (s = o.__d)),
                  s)
                )
                  return (o.__E = o);
              } catch (t) {
                e = t;
              }
          throw e;
        },
      }),
      (n = 0),
      (o = function (e) {
        return null != e && null == e.constructor;
      }),
      (R.prototype.setState = function (e, t) {
        var r;
        (r =
          null != this.__s && this.__s !== this.state
            ? this.__s
            : (this.__s = y({}, this.state))),
          "function" == typeof e && (e = e(y({}, r), this.props)),
          e && y(r, e),
          null != e && this.__v && (t && this._sb.push(t), x(this));
      }),
      (R.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), x(this));
      }),
      (R.prototype.render = E),
      (i = []),
      (a =
        "function" == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (c = function (e, t) {
        return e.__v.__b - t.__v.__b;
      }),
      (k.__r = 0),
      (u = 0),
      (l = C(!1)),
      (d = C(!0)),
      (_ = 0),
      e.s([
        "Component",
        () => R,
        "Fragment",
        () => E,
        "cloneElement",
        () => O,
        "createContext",
        () => D,
        "createElement",
        () => v,
        "createRef",
        () => w,
        "h",
        () => v,
        "hydrate",
        () => H,
        "isValidElement",
        () => o,
        "options",
        () => r,
        "render",
        () => j,
        "toChildArray",
        () =>
          function e(t, r) {
            return (
              (r = r || []),
              null == t ||
                "boolean" == typeof t ||
                (m(t)
                  ? t.some(function (t) {
                      e(t, r);
                    })
                  : r.push(t)),
              r
            );
          },
      ]);
  },
  698920,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      o,
      i = e.i(928020),
      s = 0,
      a = [],
      c = i.options,
      u = c.__b,
      l = c.__r,
      d = c.diffed,
      _ = c.__c,
      p = c.unmount,
      f = c.__;
    function h(e, t) {
      c.__h && c.__h(r, e, s || t), (s = 0);
      var n = r.__H || (r.__H = { __: [], __h: [] });
      return e >= n.__.length && n.__.push({}), n.__[e];
    }
    function m(e) {
      return (s = 1), y(N, e);
    }
    function y(e, n, o) {
      var i = h(t++, 2);
      if (
        ((i.t = e),
        !i.__c &&
          ((i.__ = [
            o ? o(n) : N(void 0, n),
            function (e) {
              var t = i.__N ? i.__N[0] : i.__[0],
                r = i.t(t, e);
              t !== r && ((i.__N = [r, i.__[1]]), i.__c.setState({}));
            },
          ]),
          (i.__c = r),
          !r.u))
      ) {
        var s = function (e, t, r) {
          if (!i.__c.__H) return !0;
          var n = i.__c.__H.__.filter(function (e) {
            return !!e.__c;
          });
          if (
            n.every(function (e) {
              return !e.__N;
            })
          )
            return !a || a.call(this, e, t, r);
          var o = !1;
          return (
            n.forEach(function (e) {
              if (e.__N) {
                var t = e.__[0];
                (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0);
              }
            }),
            !(!o && i.__c.props === e) && (!a || a.call(this, e, t, r))
          );
        };
        r.u = !0;
        var a = r.shouldComponentUpdate,
          c = r.componentWillUpdate;
        (r.componentWillUpdate = function (e, t, r) {
          if (this.__e) {
            var n = a;
            (a = void 0), s(e, t, r), (a = n);
          }
          c && c.call(this, e, t, r);
        }),
          (r.shouldComponentUpdate = s);
      }
      return i.__N || i.__;
    }
    function b(e, n) {
      var o = h(t++, 3);
      !c.__s && U(o.__H, n) && ((o.__ = e), (o.i = n), r.__H.__h.push(o));
    }
    function v(e, n) {
      var o = h(t++, 4);
      !c.__s && U(o.__H, n) && ((o.__ = e), (o.i = n), r.__h.push(o));
    }
    function g(e) {
      return (
        (s = 5),
        E(function () {
          return { current: e };
        }, [])
      );
    }
    function w(e, t, r) {
      (s = 6),
        v(
          function () {
            return "function" == typeof e
              ? (e(t()),
                function () {
                  return e(null);
                })
              : e
              ? ((e.current = t()),
                function () {
                  return (e.current = null);
                })
              : void 0;
          },
          null == r ? r : r.concat(e)
        );
    }
    function E(e, r) {
      var n = h(t++, 7);
      return U(n.__H, r) && ((n.__ = e()), (n.__H = r), (n.__h = e)), n.__;
    }
    function R(e, t) {
      return (
        (s = 8),
        E(function () {
          return e;
        }, t)
      );
    }
    function P(e) {
      var n = r.context[e.__c],
        o = h(t++, 9);
      return (
        (o.c = e),
        n ? (null == o.__ && ((o.__ = !0), n.sub(r)), n.props.value) : e.__
      );
    }
    function x(e, t) {
      c.useDebugValue && c.useDebugValue(t ? t(e) : e);
    }
    function k(e) {
      var n = h(t++, 10),
        o = m();
      return (
        (n.__ = e),
        r.componentDidCatch ||
          (r.componentDidCatch = function (e, t) {
            n.__ && n.__(e, t), o[1](e);
          }),
        [
          o[0],
          function () {
            o[1](void 0);
          },
        ]
      );
    }
    function I() {
      var e = h(t++, 11);
      if (!e.__) {
        for (var n = r.__v; null !== n && !n.__m && null !== n.__; ) n = n.__;
        var o = n.__m || (n.__m = [0, 0]);
        e.__ = "P" + o[0] + "-" + o[1]++;
      }
      return e.__;
    }
    function T() {
      for (var e; (e = a.shift()); )
        if (e.__P && e.__H)
          try {
            e.__H.__h.forEach(C), e.__H.__h.forEach(M), (e.__H.__h = []);
          } catch (t) {
            (e.__H.__h = []), c.__e(t, e.__v);
          }
    }
    (c.__b = function (e) {
      (r = null), u && u(e);
    }),
      (c.__ = function (e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), f && f(e, t);
      }),
      (c.__r = function (e) {
        l && l(e), (t = 0);
        var o = (r = e.__c).__H;
        o &&
          (n === r
            ? ((o.__h = []),
              (r.__h = []),
              o.__.forEach(function (e) {
                e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
              }))
            : (o.__h.forEach(C), o.__h.forEach(M), (o.__h = []), (t = 0))),
          (n = r);
      }),
      (c.diffed = function (e) {
        d && d(e);
        var t = e.__c;
        t &&
          t.__H &&
          (t.__H.__h.length &&
            ((1 !== a.push(t) && o === c.requestAnimationFrame) ||
              (
                (o = c.requestAnimationFrame) ||
                function (e) {
                  var t,
                    r = function () {
                      clearTimeout(n),
                        S && cancelAnimationFrame(t),
                        setTimeout(e);
                    },
                    n = setTimeout(r, 100);
                  S && (t = requestAnimationFrame(r));
                }
              )(T)),
          t.__H.__.forEach(function (e) {
            e.i && (e.__H = e.i), (e.i = void 0);
          })),
          (n = r = null);
      }),
      (c.__c = function (e, t) {
        t.some(function (e) {
          try {
            e.__h.forEach(C),
              (e.__h = e.__h.filter(function (e) {
                return !e.__ || M(e);
              }));
          } catch (r) {
            t.some(function (e) {
              e.__h && (e.__h = []);
            }),
              (t = []),
              c.__e(r, e.__v);
          }
        }),
          _ && _(e, t);
      }),
      (c.unmount = function (e) {
        p && p(e);
        var t,
          r = e.__c;
        r &&
          r.__H &&
          (r.__H.__.forEach(function (e) {
            try {
              C(e);
            } catch (e) {
              t = e;
            }
          }),
          (r.__H = void 0),
          t && c.__e(t, r.__v));
      });
    var S = "function" == typeof requestAnimationFrame;
    function C(e) {
      var t = r,
        n = e.__c;
      "function" == typeof n && ((e.__c = void 0), n()), (r = t);
    }
    function M(e) {
      var t = r;
      (e.__c = e.__()), (r = t);
    }
    function U(e, t) {
      return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, r) {
          return t !== e[r];
        })
      );
    }
    function N(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    e.s([
      "useCallback",
      () => R,
      "useContext",
      () => P,
      "useDebugValue",
      () => x,
      "useEffect",
      () => b,
      "useErrorBoundary",
      () => k,
      "useId",
      () => I,
      "useImperativeHandle",
      () => w,
      "useLayoutEffect",
      () => v,
      "useMemo",
      () => E,
      "useReducer",
      () => y,
      "useRef",
      () => g,
      "useState",
      () => m,
    ]);
  },
  658765,
  378746,
  309579,
  466769,
  643506,
  995062,
  (e) => {
    "use strict";
    var t = e.i(831095);
    let r = "\x19Ethereum Signed Message:\n";
    e.s(["presignMessagePrefix", 0, r], 378746);
    var n = e.i(147526),
      o = e.i(401319),
      i = e.i(675107);
    function s(e) {
      let t =
          "string" == typeof e
            ? (0, i.stringToHex)(e)
            : "string" == typeof e.raw
            ? e.raw
            : (0, i.bytesToHex)(e.raw),
        s = (0, i.stringToHex)(`${r}${(0, o.size)(t)}`);
      return (0, n.concat)([s, t]);
    }
    function a(e, r) {
      return (0, t.keccak256)(s(e), r);
    }
    e.s(["toPrefixedMessage", () => s], 309579),
      e.s(["hashMessage", () => a], 658765),
      e.s(
        [
          "hashDomain",
          () => R,
          "hashStruct",
          () => P,
          "hashTypedData",
          () => E,
        ],
        995062
      );
    var c = e.i(704434);
    e.s(
      [
        "domainSeparator",
        () => w,
        "getTypesForEIP712Domain",
        () => g,
        "serializeTypedData",
        () => b,
        "validateTypedData",
        () => v,
      ],
      643506
    );
    var u = e.i(70204),
      l = e.i(608861),
      d = e.i(34888),
      _ = e.i(569934);
    class p extends _.BaseError {
      constructor({ domain: e }) {
        super(`Invalid domain "${(0, d.stringify)(e)}".`, {
          metaMessages: ["Must be a valid EIP-712 domain."],
        });
      }
    }
    class f extends _.BaseError {
      constructor({ primaryType: e, types: t }) {
        super(
          `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
            Object.keys(t)
          )}\`.`,
          {
            docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
            metaMessages: ["Check that the primary type is a key in `types`."],
          }
        );
      }
    }
    class h extends _.BaseError {
      constructor({ type: e }) {
        super(`Struct type "${e}" is invalid.`, {
          metaMessages: ["Struct type must not be a Solidity type."],
          name: "InvalidStructTypeError",
        });
      }
    }
    e.s(
      [
        "InvalidDomainError",
        () => p,
        "InvalidPrimaryTypeError",
        () => f,
        "InvalidStructTypeError",
        () => h,
      ],
      466769
    );
    var m = e.i(796516),
      y = e.i(342692);
    function b(e) {
      let { domain: t, message: r, primaryType: n, types: o } = e,
        i = (e, t) => {
          let r = { ...t };
          for (let t of e) {
            let { name: e, type: n } = t;
            "address" === n && (r[e] = r[e].toLowerCase());
          }
          return r;
        },
        s = o.EIP712Domain && t ? i(o.EIP712Domain, t) : {},
        a = (() => {
          if ("EIP712Domain" !== n) return i(o[n], r);
        })();
      return (0, d.stringify)({
        domain: s,
        message: a,
        primaryType: n,
        types: o,
      });
    }
    function v(e) {
      let { domain: t, message: r, primaryType: n, types: s } = e,
        a = (e, t) => {
          for (let r of e) {
            let { name: e, type: n } = r,
              c = t[e],
              d = n.match(y.integerRegex);
            if (d && ("number" == typeof c || "bigint" == typeof c)) {
              let [e, t, r] = d;
              (0, i.numberToHex)(c, {
                signed: "int" === t,
                size: Number.parseInt(r, 10) / 8,
              });
            }
            if ("address" === n && "string" == typeof c && !(0, m.isAddress)(c))
              throw new l.InvalidAddressError({ address: c });
            let _ = n.match(y.bytesRegex);
            if (_) {
              let [e, t] = _;
              if (t && (0, o.size)(c) !== Number.parseInt(t, 10))
                throw new u.BytesSizeMismatchError({
                  expectedSize: Number.parseInt(t, 10),
                  givenSize: (0, o.size)(c),
                });
            }
            let p = s[n];
            p &&
              ((function (e) {
                if (
                  "address" === e ||
                  "bool" === e ||
                  "string" === e ||
                  e.startsWith("bytes") ||
                  e.startsWith("uint") ||
                  e.startsWith("int")
                )
                  throw new h({ type: e });
              })(n),
              a(p, c));
          }
        };
      if (s.EIP712Domain && t) {
        if ("object" != typeof t) throw new p({ domain: t });
        a(s.EIP712Domain, t);
      }
      if ("EIP712Domain" !== n)
        if (s[n]) a(s[n], r);
        else throw new f({ primaryType: n, types: s });
    }
    function g({ domain: e }) {
      return [
        "string" == typeof e?.name && { name: "name", type: "string" },
        e?.version && { name: "version", type: "string" },
        ("number" == typeof e?.chainId || "bigint" == typeof e?.chainId) && {
          name: "chainId",
          type: "uint256",
        },
        e?.verifyingContract && { name: "verifyingContract", type: "address" },
        e?.salt && { name: "salt", type: "bytes32" },
      ].filter(Boolean);
    }
    function w({ domain: e }) {
      return R({ domain: e, types: { EIP712Domain: g({ domain: e }) } });
    }
    function E(e) {
      let { domain: r = {}, message: o, primaryType: i } = e,
        s = { EIP712Domain: g({ domain: r }), ...e.types };
      v({ domain: r, message: o, primaryType: i, types: s });
      let a = ["0x1901"];
      return (
        r && a.push(R({ domain: r, types: s })),
        "EIP712Domain" !== i &&
          a.push(P({ data: o, primaryType: i, types: s })),
        (0, t.keccak256)((0, n.concat)(a))
      );
    }
    function R({ domain: e, types: t }) {
      return P({ data: e, primaryType: "EIP712Domain", types: t });
    }
    function P({ data: e, primaryType: r, types: n }) {
      let o = (function e({ data: r, primaryType: n, types: o }) {
        let s = [{ type: "bytes32" }],
          a = [
            (function ({ primaryType: e, types: r }) {
              let n = (0, i.toHex)(
                (function ({ primaryType: e, types: t }) {
                  let r = "",
                    n = (function e(
                      { primaryType: t, types: r },
                      n = new Set()
                    ) {
                      let o = t.match(/^\w*/u),
                        i = o?.[0];
                      if (n.has(i) || void 0 === r[i]) return n;
                      for (let t of (n.add(i), r[i]))
                        e({ primaryType: t.type, types: r }, n);
                      return n;
                    })({ primaryType: e, types: t });
                  for (let o of (n.delete(e), [e, ...Array.from(n).sort()]))
                    r += `${o}(${t[o]
                      .map(({ name: e, type: t }) => `${t} ${e}`)
                      .join(",")})`;
                  return r;
                })({ primaryType: e, types: r })
              );
              return (0, t.keccak256)(n);
            })({ primaryType: n, types: o }),
          ];
        for (let u of o[n]) {
          let [n, l] = (function r({ types: n, name: o, type: s, value: a }) {
            if (void 0 !== n[s])
              return [
                { type: "bytes32" },
                (0, t.keccak256)(e({ data: a, primaryType: s, types: n })),
              ];
            if ("bytes" === s)
              return [{ type: "bytes32" }, (0, t.keccak256)(a)];
            if ("string" === s)
              return [{ type: "bytes32" }, (0, t.keccak256)((0, i.toHex)(a))];
            if (s.lastIndexOf("]") === s.length - 1) {
              let e = s.slice(0, s.lastIndexOf("[")),
                i = a.map((t) => r({ name: o, type: e, types: n, value: t }));
              return [
                { type: "bytes32" },
                (0, t.keccak256)(
                  (0, c.encodeAbiParameters)(
                    i.map(([e]) => e),
                    i.map(([, e]) => e)
                  )
                ),
              ];
            }
            return [{ type: s }, a];
          })({ types: o, name: u.name, type: u.type, value: r[u.name] });
          s.push(n), a.push(l);
        }
        return (0, c.encodeAbiParameters)(s, a);
      })({ data: e, primaryType: r, types: n });
      return (0, t.keccak256)(o);
    }
  },
  168679,
  (e) => {
    "use strict";
    let t;
    function r(e) {
      return new Promise((t, r) => {
        (e.oncomplete = e.onsuccess = () => t(e.result)),
          (e.onabort = e.onerror = () => r(e.error));
      });
    }
    function n(e, t) {
      let n = indexedDB.open(e);
      n.onupgradeneeded = () => n.result.createObjectStore(t);
      let o = r(n);
      return (e, r) => o.then((n) => r(n.transaction(t, e).objectStore(t)));
    }
    function o() {
      return t || (t = n("keyval-store", "keyval")), t;
    }
    function i(e, t = o()) {
      return t("readonly", (t) => r(t.get(e)));
    }
    function s(e, t, n = o()) {
      return n("readwrite", (n) => (n.put(t, e), r(n.transaction)));
    }
    function a(e, t = o()) {
      return t("readwrite", (t) => (t.delete(e), r(t.transaction)));
    }
    function c(e = o()) {
      return e("readwrite", (e) => (e.clear(), r(e.transaction)));
    }
    function u(e = o()) {
      return e("readonly", (e) => {
        var t;
        if (e.getAllKeys) return r(e.getAllKeys());
        let n = [];
        return ((t = (e) => n.push(e.key)),
        (e.openCursor().onsuccess = function () {
          this.result && (t(this.result), this.result.continue());
        }),
        r(e.transaction)).then(() => n);
      });
    }
    e.s([
      "clear",
      () => c,
      "createStore",
      () => n,
      "del",
      () => a,
      "get",
      () => i,
      "keys",
      () => u,
      "set",
      () => s,
    ]);
  },
  383856,
  (e) => {
    "use strict";
    var t = e.i(569934),
      r = e.i(95767);
    class n extends t.BaseError {
      constructor(
        e,
        { code: t, docsPath: n, metaMessages: o, name: i, shortMessage: s }
      ) {
        super(s, {
          cause: e,
          docsPath: n,
          metaMessages: o || e?.metaMessages,
          name: i || "RpcError",
        }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.name = i || e.name),
          (this.code = e instanceof r.RpcRequestError ? e.code : t ?? -1);
      }
    }
    class o extends n {
      constructor(e, t) {
        super(e, t),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = t.data);
      }
    }
    class i extends n {
      constructor(e) {
        super(e, {
          code: i.code,
          name: "ParseRpcError",
          shortMessage:
            "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
        });
      }
    }
    Object.defineProperty(i, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32700,
    });
    class s extends n {
      constructor(e) {
        super(e, {
          code: s.code,
          name: "InvalidRequestRpcError",
          shortMessage: "JSON is not a valid request object.",
        });
      }
    }
    Object.defineProperty(s, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32600,
    });
    class a extends n {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: a.code,
          name: "MethodNotFoundRpcError",
          shortMessage: `The method${
            t ? ` "${t}"` : ""
          } does not exist / is not available.`,
        });
      }
    }
    Object.defineProperty(a, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32601,
    });
    class c extends n {
      constructor(e) {
        super(e, {
          code: c.code,
          name: "InvalidParamsRpcError",
          shortMessage:
            "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(c, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32602,
    });
    class u extends n {
      constructor(e) {
        super(e, {
          code: u.code,
          name: "InternalRpcError",
          shortMessage: "An internal error was received.",
        });
      }
    }
    Object.defineProperty(u, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32603,
    });
    class l extends n {
      constructor(e) {
        super(e, {
          code: l.code,
          name: "InvalidInputRpcError",
          shortMessage:
            "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(l, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32e3,
    });
    class d extends n {
      constructor(e) {
        super(e, {
          code: d.code,
          name: "ResourceNotFoundRpcError",
          shortMessage: "Requested resource not found.",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError",
          });
      }
    }
    Object.defineProperty(d, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32001,
    });
    class _ extends n {
      constructor(e) {
        super(e, {
          code: _.code,
          name: "ResourceUnavailableRpcError",
          shortMessage: "Requested resource not available.",
        });
      }
    }
    Object.defineProperty(_, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32002,
    });
    class p extends n {
      constructor(e) {
        super(e, {
          code: p.code,
          name: "TransactionRejectedRpcError",
          shortMessage: "Transaction creation failed.",
        });
      }
    }
    Object.defineProperty(p, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32003,
    });
    class f extends n {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: f.code,
          name: "MethodNotSupportedRpcError",
          shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
        });
      }
    }
    Object.defineProperty(f, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32004,
    });
    class h extends n {
      constructor(e) {
        super(e, {
          code: h.code,
          name: "LimitExceededRpcError",
          shortMessage: "Request exceeds defined limit.",
        });
      }
    }
    Object.defineProperty(h, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32005,
    });
    class m extends n {
      constructor(e) {
        super(e, {
          code: m.code,
          name: "JsonRpcVersionUnsupportedError",
          shortMessage: "Version of JSON-RPC protocol is not supported.",
        });
      }
    }
    Object.defineProperty(m, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32006,
    });
    class y extends o {
      constructor(e) {
        super(e, {
          code: y.code,
          name: "UserRejectedRequestError",
          shortMessage: "User rejected the request.",
        });
      }
    }
    Object.defineProperty(y, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4001,
    });
    class b extends o {
      constructor(e) {
        super(e, {
          code: b.code,
          name: "UnauthorizedProviderError",
          shortMessage:
            "The requested method and/or account has not been authorized by the user.",
        });
      }
    }
    Object.defineProperty(b, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4100,
    });
    class v extends o {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: v.code,
          name: "UnsupportedProviderMethodError",
          shortMessage: `The Provider does not support the requested method${
            t ? ` " ${t}"` : ""
          }.`,
        });
      }
    }
    Object.defineProperty(v, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4200,
    });
    class g extends o {
      constructor(e) {
        super(e, {
          code: g.code,
          name: "ProviderDisconnectedError",
          shortMessage: "The Provider is disconnected from all chains.",
        });
      }
    }
    Object.defineProperty(g, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4900,
    });
    class w extends o {
      constructor(e) {
        super(e, {
          code: w.code,
          name: "ChainDisconnectedError",
          shortMessage: "The Provider is not connected to the requested chain.",
        });
      }
    }
    Object.defineProperty(w, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4901,
    });
    class E extends o {
      constructor(e) {
        super(e, {
          code: E.code,
          name: "SwitchChainError",
          shortMessage: "An error occurred when attempting to switch chain.",
        });
      }
    }
    Object.defineProperty(E, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4902,
    });
    class R extends o {
      constructor(e) {
        super(e, {
          code: R.code,
          name: "UnsupportedNonOptionalCapabilityError",
          shortMessage:
            "This Wallet does not support a capability that was not marked as optional.",
        });
      }
    }
    Object.defineProperty(R, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5700,
    });
    class P extends o {
      constructor(e) {
        super(e, {
          code: P.code,
          name: "UnsupportedChainIdError",
          shortMessage: "This Wallet does not support the requested chain ID.",
        });
      }
    }
    Object.defineProperty(P, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5710,
    });
    class x extends o {
      constructor(e) {
        super(e, {
          code: x.code,
          name: "DuplicateIdError",
          shortMessage: "There is already a bundle submitted with this ID.",
        });
      }
    }
    Object.defineProperty(x, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5720,
    });
    class k extends o {
      constructor(e) {
        super(e, {
          code: k.code,
          name: "UnknownBundleIdError",
          shortMessage: "This bundle id is unknown / has not been submitted",
        });
      }
    }
    Object.defineProperty(k, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5730,
    });
    class I extends o {
      constructor(e) {
        super(e, {
          code: I.code,
          name: "BundleTooLargeError",
          shortMessage:
            "The call bundle is too large for the Wallet to process.",
        });
      }
    }
    Object.defineProperty(I, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5740,
    });
    class T extends o {
      constructor(e) {
        super(e, {
          code: T.code,
          name: "AtomicReadyWalletRejectedUpgradeError",
          shortMessage:
            "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
        });
      }
    }
    Object.defineProperty(T, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5750,
    });
    class S extends o {
      constructor(e) {
        super(e, {
          code: S.code,
          name: "AtomicityNotSupportedError",
          shortMessage:
            "The wallet does not support atomic execution but the request requires it.",
        });
      }
    }
    Object.defineProperty(S, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5760,
    });
    class C extends o {
      constructor(e) {
        super(e, {
          code: C.code,
          name: "WalletConnectSessionSettlementError",
          shortMessage: "WalletConnect session settlement failed.",
        });
      }
    }
    Object.defineProperty(C, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 7e3,
    });
    class M extends n {
      constructor(e) {
        super(e, {
          name: "UnknownRpcError",
          shortMessage: "An unknown RPC error occurred.",
        });
      }
    }
    e.s([
      "AtomicReadyWalletRejectedUpgradeError",
      () => T,
      "AtomicityNotSupportedError",
      () => S,
      "BundleTooLargeError",
      () => I,
      "ChainDisconnectedError",
      () => w,
      "DuplicateIdError",
      () => x,
      "InternalRpcError",
      () => u,
      "InvalidInputRpcError",
      () => l,
      "InvalidParamsRpcError",
      () => c,
      "InvalidRequestRpcError",
      () => s,
      "JsonRpcVersionUnsupportedError",
      () => m,
      "LimitExceededRpcError",
      () => h,
      "MethodNotFoundRpcError",
      () => a,
      "MethodNotSupportedRpcError",
      () => f,
      "ParseRpcError",
      () => i,
      "ProviderDisconnectedError",
      () => g,
      "ProviderRpcError",
      () => o,
      "ResourceNotFoundRpcError",
      () => d,
      "ResourceUnavailableRpcError",
      () => _,
      "RpcError",
      () => n,
      "SwitchChainError",
      () => E,
      "TransactionRejectedRpcError",
      () => p,
      "UnauthorizedProviderError",
      () => b,
      "UnknownBundleIdError",
      () => k,
      "UnknownRpcError",
      () => M,
      "UnsupportedChainIdError",
      () => P,
      "UnsupportedNonOptionalCapabilityError",
      () => R,
      "UnsupportedProviderMethodError",
      () => v,
      "UserRejectedRequestError",
      () => y,
      "WalletConnectSessionSettlementError",
      () => C,
    ]);
  },
  588233,
  (e) => {
    "use strict";
    async function t(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    e.s(["wait", () => t]);
  },
  204202,
  (e) => {
    "use strict";
    var t = e.i(588233);
    function r(
      e,
      { delay: n = 100, retryCount: o = 2, shouldRetry: i = () => !0 } = {}
    ) {
      return new Promise((r, s) => {
        let a = async ({ count: c = 0 } = {}) => {
          let u = async ({ error: e }) => {
            let r = "function" == typeof n ? n({ count: c, error: e }) : n;
            r && (await (0, t.wait)(r)), a({ count: c + 1 });
          };
          try {
            let t = await e();
            r(t);
          } catch (e) {
            if (c < o && (await i({ count: c, error: e })))
              return u({ error: e });
            s(e);
          }
        };
        a();
      });
    }
    e.s(["withRetry", () => r]);
  },
  606624,
  (e) => {
    "use strict";
    let t,
      r = 256;
    function n(e = 11) {
      if (!t || r + e > 512) {
        (t = ""), (r = 0);
        for (let e = 0; e < 256; e++)
          t += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
      }
      return t.substring(r, r++ + e);
    }
    e.s(["uid", () => n]);
  },
  533580,
  (e) => {
    "use strict";
    let t = new (e.i(976677).LruMap)(8192);
    function r(e, { enabled: r = !0, id: n }) {
      if (!r || !n) return e();
      if (t.get(n)) return t.get(n);
      let o = e().finally(() => t.delete(n));
      return t.set(n, o), o;
    }
    e.s(["withDedupe", () => r]);
  },
  557265,
  (e) => {
    "use strict";
    var t = e.i(569934),
      r = e.i(95767),
      n = e.i(383856),
      o = e.i(675107),
      i = e.i(533580),
      s = e.i(204202),
      a = e.i(34888);
    function c(e, u = {}) {
      return async (c, l = {}) => {
        let {
            dedupe: d = !1,
            methods: _,
            retryDelay: p = 150,
            retryCount: f = 3,
            uid: h,
          } = { ...u, ...l },
          { method: m } = c;
        if (_?.exclude?.includes(m) || (_?.include && !_.include.includes(m)))
          throw new n.MethodNotSupportedRpcError(
            Error("method not supported"),
            { method: m }
          );
        let y = d ? (0, o.stringToHex)(`${h}.${(0, a.stringify)(c)}`) : void 0;
        return (0, i.withDedupe)(
          () =>
            (0, s.withRetry)(
              async () => {
                try {
                  return await e(c);
                } catch (e) {
                  switch (e.code) {
                    case n.ParseRpcError.code:
                      throw new n.ParseRpcError(e);
                    case n.InvalidRequestRpcError.code:
                      throw new n.InvalidRequestRpcError(e);
                    case n.MethodNotFoundRpcError.code:
                      throw new n.MethodNotFoundRpcError(e, {
                        method: c.method,
                      });
                    case n.InvalidParamsRpcError.code:
                      throw new n.InvalidParamsRpcError(e);
                    case n.InternalRpcError.code:
                      throw new n.InternalRpcError(e);
                    case n.InvalidInputRpcError.code:
                      throw new n.InvalidInputRpcError(e);
                    case n.ResourceNotFoundRpcError.code:
                      throw new n.ResourceNotFoundRpcError(e);
                    case n.ResourceUnavailableRpcError.code:
                      throw new n.ResourceUnavailableRpcError(e);
                    case n.TransactionRejectedRpcError.code:
                      throw new n.TransactionRejectedRpcError(e);
                    case n.MethodNotSupportedRpcError.code:
                      throw new n.MethodNotSupportedRpcError(e, {
                        method: c.method,
                      });
                    case n.LimitExceededRpcError.code:
                      throw new n.LimitExceededRpcError(e);
                    case n.JsonRpcVersionUnsupportedError.code:
                      throw new n.JsonRpcVersionUnsupportedError(e);
                    case n.UserRejectedRequestError.code:
                      throw new n.UserRejectedRequestError(e);
                    case n.UnauthorizedProviderError.code:
                      throw new n.UnauthorizedProviderError(e);
                    case n.UnsupportedProviderMethodError.code:
                      throw new n.UnsupportedProviderMethodError(e);
                    case n.ProviderDisconnectedError.code:
                      throw new n.ProviderDisconnectedError(e);
                    case n.ChainDisconnectedError.code:
                      throw new n.ChainDisconnectedError(e);
                    case n.SwitchChainError.code:
                      throw new n.SwitchChainError(e);
                    case n.UnsupportedNonOptionalCapabilityError.code:
                      throw new n.UnsupportedNonOptionalCapabilityError(e);
                    case n.UnsupportedChainIdError.code:
                      throw new n.UnsupportedChainIdError(e);
                    case n.DuplicateIdError.code:
                      throw new n.DuplicateIdError(e);
                    case n.UnknownBundleIdError.code:
                      throw new n.UnknownBundleIdError(e);
                    case n.BundleTooLargeError.code:
                      throw new n.BundleTooLargeError(e);
                    case n.AtomicReadyWalletRejectedUpgradeError.code:
                      throw new n.AtomicReadyWalletRejectedUpgradeError(e);
                    case n.AtomicityNotSupportedError.code:
                      throw new n.AtomicityNotSupportedError(e);
                    case 5e3:
                      throw new n.UserRejectedRequestError(e);
                    case n.WalletConnectSessionSettlementError.code:
                      throw new n.WalletConnectSessionSettlementError(e);
                    default:
                      if (e instanceof t.BaseError) throw e;
                      throw new n.UnknownRpcError(e);
                  }
                }
              },
              {
                delay: ({ count: e, error: t }) => {
                  if (t && t instanceof r.HttpRequestError) {
                    let e = t?.headers?.get("Retry-After");
                    if (e?.match(/\d/)) return 1e3 * Number.parseInt(e, 10);
                  }
                  return ~~(1 << e) * p;
                },
                retryCount: f,
                shouldRetry: ({ error: e }) => {
                  var t;
                  return "code" in (t = e) && "number" == typeof t.code
                    ? -1 === t.code ||
                        t.code === n.LimitExceededRpcError.code ||
                        t.code === n.InternalRpcError.code
                    : !(t instanceof r.HttpRequestError) ||
                        !t.status ||
                        403 === t.status ||
                        408 === t.status ||
                        413 === t.status ||
                        429 === t.status ||
                        500 === t.status ||
                        502 === t.status ||
                        503 === t.status ||
                        504 === t.status ||
                        !1;
                },
              }
            ),
          { enabled: d, id: y }
        );
      };
    }
    e.s(["buildRequest", () => c]);
  },
  695331,
  (e) => {
    "use strict";
    var t = e.i(557265),
      r = e.i(606624);
    function n(
      {
        key: e,
        methods: n,
        name: o,
        request: i,
        retryCount: s = 3,
        retryDelay: a = 150,
        timeout: c,
        type: u,
      },
      l
    ) {
      let d = (0, r.uid)();
      return {
        config: {
          key: e,
          methods: n,
          name: o,
          request: i,
          retryCount: s,
          retryDelay: a,
          timeout: c,
          type: u,
        },
        request: (0, t.buildRequest)(i, {
          methods: n,
          retryCount: s,
          retryDelay: a,
          uid: d,
        }),
        value: l,
      };
    }
    e.s(["createTransport", () => n]);
  },
  588134,
  984534,
  522662,
  468368,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor() {
        super(
          "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
          { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
        );
      }
    }
    e.s(["UrlRequiredError", () => r], 588134);
    var n = e.i(95767);
    function o(
      e,
      { errorInstance: t = Error("timed out"), timeout: r, signal: n }
    ) {
      return new Promise((o, i) => {
        (async () => {
          let s;
          try {
            let a = new AbortController();
            r > 0 &&
              (s = setTimeout(() => {
                n ? a.abort() : i(t);
              }, r)),
              o(await e({ signal: a?.signal || null }));
          } catch (e) {
            e?.name === "AbortError" && i(t), i(e);
          } finally {
            clearTimeout(s);
          }
        })();
      });
    }
    e.s(["withTimeout", () => o], 984534);
    var i = e.i(34888);
    let s = {
      current: 0,
      take() {
        return this.current++;
      },
      reset() {
        this.current = 0;
      },
    };
    function a(e, t = {}) {
      let { url: r, headers: c } = (function (e) {
        try {
          let t = new URL(e),
            r = (() => {
              if (t.username) {
                let e = `${decodeURIComponent(t.username)}:${decodeURIComponent(
                  t.password
                )}`;
                return (
                  (t.username = ""),
                  (t.password = ""),
                  {
                    url: t.toString(),
                    headers: { Authorization: `Basic ${btoa(e)}` },
                  }
                );
              }
            })();
          return { url: t.toString(), ...r };
        } catch {
          return { url: e };
        }
      })(e);
      return {
        async request(e) {
          let {
              body: a,
              fetchFn: u = t.fetchFn ?? fetch,
              onRequest: l = t.onRequest,
              onResponse: d = t.onResponse,
              timeout: _ = t.timeout ?? 1e4,
            } = e,
            p = { ...(t.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
            { headers: f, method: h, signal: m } = p;
          try {
            let e,
              t = await o(
                async ({ signal: e }) => {
                  let t = {
                      ...p,
                      body: Array.isArray(a)
                        ? (0, i.stringify)(
                            a.map((e) => ({
                              jsonrpc: "2.0",
                              id: e.id ?? s.take(),
                              ...e,
                            }))
                          )
                        : (0, i.stringify)({
                            jsonrpc: "2.0",
                            id: a.id ?? s.take(),
                            ...a,
                          }),
                      headers: {
                        ...c,
                        "Content-Type": "application/json",
                        ...f,
                      },
                      method: h || "POST",
                      signal: m || (_ > 0 ? e : null),
                    },
                    n = new Request(r, t),
                    o = (await l?.(n, t)) ?? { ...t, url: r };
                  return await u(o.url ?? r, o);
                },
                {
                  errorInstance: new n.TimeoutError({ body: a, url: r }),
                  timeout: _,
                  signal: !0,
                }
              );
            if (
              (d && (await d(t)),
              t.headers.get("Content-Type")?.startsWith("application/json"))
            )
              e = await t.json();
            else {
              e = await t.text();
              try {
                e = JSON.parse(e || "{}");
              } catch (r) {
                if (t.ok) throw r;
                e = { error: e };
              }
            }
            if (!t.ok)
              throw new n.HttpRequestError({
                body: a,
                details: (0, i.stringify)(e.error) || t.statusText,
                headers: t.headers,
                status: t.status,
                url: r,
              });
            return e;
          } catch (e) {
            if (e instanceof n.HttpRequestError || e instanceof n.TimeoutError)
              throw e;
            throw new n.HttpRequestError({ body: a, cause: e, url: r });
          }
        },
      };
    }
    e.s(["idCache", 0, s], 522662), e.s(["getHttpRpcClient", () => a], 468368);
  },
  110163,
  (e) => {
    "use strict";
    var t = e.i(95767),
      r = e.i(588134),
      n = e.i(871706),
      o = e.i(468368),
      i = e.i(695331);
    function s(e, a = {}) {
      let {
        batch: c,
        fetchFn: u,
        fetchOptions: l,
        key: d = "http",
        methods: _,
        name: p = "HTTP JSON-RPC",
        onFetchRequest: f,
        onFetchResponse: h,
        retryDelay: m,
        raw: y,
      } = a;
      return ({ chain: s, retryCount: b, timeout: v }) => {
        let { batchSize: g = 1e3, wait: w = 0 } = "object" == typeof c ? c : {},
          E = a.retryCount ?? b,
          R = v ?? a.timeout ?? 1e4,
          P = e || s?.rpcUrls.default.http[0];
        if (!P) throw new r.UrlRequiredError();
        let x = (0, o.getHttpRpcClient)(P, {
          fetchFn: u,
          fetchOptions: l,
          onRequest: f,
          onResponse: h,
          timeout: R,
        });
        return (0, i.createTransport)(
          {
            key: d,
            methods: _,
            name: p,
            async request({ method: e, params: r }) {
              let o = { method: e, params: r },
                { schedule: i } = (0, n.createBatchScheduler)({
                  id: P,
                  wait: w,
                  shouldSplitBatch: (e) => e.length > g,
                  fn: (e) => x.request({ body: e }),
                  sort: (e, t) => e.id - t.id,
                }),
                s = async (e) => (c ? i(e) : [await x.request({ body: e })]),
                [{ error: a, result: u }] = await s(o);
              if (y) return { error: a, result: u };
              if (a) throw new t.RpcRequestError({ body: o, error: a, url: P });
              return u;
            },
            retryCount: E,
            retryDelay: m,
            timeout: R,
            type: "http",
          },
          { fetchOptions: l, url: P }
        );
      };
    }
    e.s(["http", () => s]);
  },
  538463,
  (e) => {
    "use strict";
    function t(e) {
      let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      return Object.assign(t, {
        extend: (function e(t) {
          return (r) => {
            let n = "function" == typeof r ? r(t) : r,
              o = { ...t, ...n };
            return Object.assign(o, { extend: e(o) });
          };
        })(t),
      });
    }
    function r() {
      return {};
    }
    e.s(["defineChain", () => t, "extendSchema", () => r]);
  },
]);
