(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  879339,
  (e) => {
    "use strict";
    class t extends Error {
      constructor(e, n = {}) {
        const r =
            n.cause instanceof t
              ? n.cause.details
              : n.cause?.message
              ? n.cause.message
              : n.details,
          a = (n.cause instanceof t && n.cause.docsPath) || n.docsPath;
        super(
          [
            e || "An error occurred.",
            "",
            ...(n.metaMessages ? [...n.metaMessages, ""] : []),
            ...(a ? [`Docs: https://abitype.dev${a}`] : []),
            ...(r ? [`Details: ${r}`] : []),
            "Version: abitype@1.2.3",
          ].join("\n")
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
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiTypeError",
          }),
          n.cause && (this.cause = n.cause),
          (this.details = r),
          (this.docsPath = a),
          (this.metaMessages = n.metaMessages),
          (this.shortMessage = e);
      }
    }
    e.s(["BaseError", () => t], 879339);
  },
  746561,
  (e) => {
    "use strict";
    var t = e.i(879339);
    class n extends t.BaseError {
      constructor({ type: e }) {
        super("Circular reference detected.", {
          metaMessages: [`Struct "${e}" is a circular reference.`],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CircularReferenceError",
          });
      }
    }
    e.s(["CircularReferenceError", () => n]);
  },
  815373,
  (e) => {
    "use strict";
    var t = e.i(879339);
    class n extends t.BaseError {
      constructor({ signature: e }) {
        super("Failed to parse ABI item.", {
          details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiitem-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiItemError",
          });
      }
    }
    class r extends t.BaseError {
      constructor({ type: e }) {
        super("Unknown type.", {
          metaMessages: [
            `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownTypeError",
          });
      }
    }
    class a extends t.BaseError {
      constructor({ type: e }) {
        super("Unknown type.", {
          metaMessages: [`Type "${e}" is not a valid ABI type.`],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSolidityTypeError",
          });
      }
    }
    e.s([
      "InvalidAbiItemError",
      () => n,
      "UnknownSolidityTypeError",
      () => a,
      "UnknownTypeError",
      () => r,
    ]);
  },
  589513,
  (e) => {
    "use strict";
    var t = e.i(879339);
    class n extends t.BaseError {
      constructor({ param: e }) {
        super("Failed to parse ABI parameter.", {
          details: `parseAbiParameter(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiparameter-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiParameterError",
          });
      }
    }
    class r extends t.BaseError {
      constructor({ params: e }) {
        super("Failed to parse ABI parameters.", {
          details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiparameters-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiParametersError",
          });
      }
    }
    class a extends t.BaseError {
      constructor({ param: e }) {
        super("Invalid ABI parameter.", { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParameterError",
          });
      }
    }
    class i extends t.BaseError {
      constructor({ param: e, name: t }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SolidityProtectedKeywordError",
          });
      }
    }
    class s extends t.BaseError {
      constructor({ param: e, type: t, modifier: n }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidModifierError",
          });
      }
    }
    class o extends t.BaseError {
      constructor({ param: e, type: t, modifier: n }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
            `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidFunctionModifierError",
          });
      }
    }
    class u extends t.BaseError {
      constructor({ abiParameter: e }) {
        super("Invalid ABI parameter.", {
          details: JSON.stringify(e, null, 2),
          metaMessages: ["ABI parameter type is invalid."],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiTypeParameterError",
          });
      }
    }
    e.s([
      "InvalidAbiParameterError",
      () => n,
      "InvalidAbiParametersError",
      () => r,
      "InvalidAbiTypeParameterError",
      () => u,
      "InvalidFunctionModifierError",
      () => o,
      "InvalidModifierError",
      () => s,
      "InvalidParameterError",
      () => a,
      "SolidityProtectedKeywordError",
      () => i,
    ]);
  },
  459118,
  (e) => {
    "use strict";
    var t = e.i(879339);
    class n extends t.BaseError {
      constructor({ current: e, depth: t }) {
        super("Unbalanced parentheses.", {
          metaMessages: [
            `"${e.trim()}" has too many ${
              t > 0 ? "opening" : "closing"
            } parentheses.`,
          ],
          details: `Depth "${t}"`,
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParenthesisError",
          });
      }
    }
    e.s(["InvalidParenthesisError", () => n]);
  },
  213238,
  (e) => {
    "use strict";
    var t = e.i(879339);
    class n extends t.BaseError {
      constructor({ signature: e, type: t }) {
        super(`Invalid ${t} signature.`, { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSignatureError",
          });
      }
    }
    class r extends t.BaseError {
      constructor({ signature: e }) {
        super("Unknown signature.", { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSignatureError",
          });
      }
    }
    class a extends t.BaseError {
      constructor({ signature: e }) {
        super("Invalid struct signature.", {
          details: e,
          metaMessages: ["No properties exist."],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStructSignatureError",
          });
      }
    }
    e.s([
      "InvalidSignatureError",
      () => n,
      "InvalidStructSignatureError",
      () => a,
      "UnknownSignatureError",
      () => r,
    ]);
  },
  61460,
  (e) => {
    "use strict";
    var t = e.i(788035);
    let n = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
    function r(e) {
      return n.test(e);
    }
    function a(e) {
      return (0, t.execTyped)(n, e);
    }
    let i = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
    function s(e) {
      return i.test(e);
    }
    function o(e) {
      return (0, t.execTyped)(i, e);
    }
    let u =
      /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
    function d(e) {
      return u.test(e);
    }
    function c(e) {
      return (0, t.execTyped)(u, e);
    }
    let f = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
    function l(e) {
      return f.test(e);
    }
    function p(e) {
      return (0, t.execTyped)(f, e);
    }
    let b =
      /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
    function y(e) {
      return b.test(e);
    }
    function m(e) {
      return (0, t.execTyped)(b, e);
    }
    let h = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
    function g(e) {
      return h.test(e);
    }
    function v(e) {
      return (0, t.execTyped)(h, e);
    }
    let w = /^receive\(\) external payable$/;
    function x(e) {
      return w.test(e);
    }
    let E = new Set(["memory", "indexed", "storage", "calldata"]),
      T = new Set(["indexed"]),
      I = new Set(["calldata", "memory", "storage"]);
    e.s([
      "eventModifiers",
      0,
      T,
      "execConstructorSignature",
      () => m,
      "execErrorSignature",
      () => a,
      "execEventSignature",
      () => o,
      "execFallbackSignature",
      () => v,
      "execFunctionSignature",
      () => c,
      "execStructSignature",
      () => p,
      "functionModifiers",
      0,
      I,
      "isConstructorSignature",
      () => y,
      "isErrorSignature",
      () => r,
      "isEventSignature",
      () => s,
      "isFallbackSignature",
      () => g,
      "isFunctionSignature",
      () => d,
      "isReceiveSignature",
      () => x,
      "isStructSignature",
      () => l,
      "modifiers",
      0,
      E,
    ]);
  },
  902094,
  88776,
  (e) => {
    "use strict";
    var t = e.i(788035),
      n = e.i(815373),
      r = e.i(589513),
      a = e.i(213238),
      i = e.i(746561),
      s = e.i(61460),
      o = e.i(459118);
    let u = new Map([
      ["address", { type: "address" }],
      ["bool", { type: "bool" }],
      ["bytes", { type: "bytes" }],
      ["bytes32", { type: "bytes32" }],
      ["int", { type: "int256" }],
      ["int256", { type: "int256" }],
      ["string", { type: "string" }],
      ["uint", { type: "uint256" }],
      ["uint8", { type: "uint8" }],
      ["uint16", { type: "uint16" }],
      ["uint24", { type: "uint24" }],
      ["uint32", { type: "uint32" }],
      ["uint64", { type: "uint64" }],
      ["uint96", { type: "uint96" }],
      ["uint112", { type: "uint112" }],
      ["uint160", { type: "uint160" }],
      ["uint192", { type: "uint192" }],
      ["uint256", { type: "uint256" }],
      ["address owner", { type: "address", name: "owner" }],
      ["address to", { type: "address", name: "to" }],
      ["bool approved", { type: "bool", name: "approved" }],
      ["bytes _data", { type: "bytes", name: "_data" }],
      ["bytes data", { type: "bytes", name: "data" }],
      ["bytes signature", { type: "bytes", name: "signature" }],
      ["bytes32 hash", { type: "bytes32", name: "hash" }],
      ["bytes32 r", { type: "bytes32", name: "r" }],
      ["bytes32 root", { type: "bytes32", name: "root" }],
      ["bytes32 s", { type: "bytes32", name: "s" }],
      ["string name", { type: "string", name: "name" }],
      ["string symbol", { type: "string", name: "symbol" }],
      ["string tokenURI", { type: "string", name: "tokenURI" }],
      ["uint tokenId", { type: "uint256", name: "tokenId" }],
      ["uint8 v", { type: "uint8", name: "v" }],
      ["uint256 balance", { type: "uint256", name: "balance" }],
      ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
      ["uint256 value", { type: "uint256", name: "value" }],
      [
        "event:address indexed from",
        { type: "address", name: "from", indexed: !0 },
      ],
      [
        "event:address indexed to",
        { type: "address", name: "to", indexed: !0 },
      ],
      [
        "event:uint indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
      [
        "event:uint256 indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
    ]);
    function d(e, t = {}) {
      if ((0, s.isFunctionSignature)(e))
        return (function (e, t = {}) {
          let n = (0, s.execFunctionSignature)(e);
          if (!n)
            throw new a.InvalidSignatureError({
              signature: e,
              type: "function",
            });
          let r = b(n.parameters),
            i = [],
            o = r.length;
          for (let e = 0; e < o; e++)
            i.push(
              p(r[e], {
                modifiers: s.functionModifiers,
                structs: t,
                type: "function",
              })
            );
          let u = [];
          if (n.returns) {
            let e = b(n.returns),
              r = e.length;
            for (let n = 0; n < r; n++)
              u.push(
                p(e[n], {
                  modifiers: s.functionModifiers,
                  structs: t,
                  type: "function",
                })
              );
          }
          return {
            name: n.name,
            type: "function",
            stateMutability: n.stateMutability ?? "nonpayable",
            inputs: i,
            outputs: u,
          };
        })(e, t);
      if ((0, s.isEventSignature)(e))
        return (function (e, t = {}) {
          let n = (0, s.execEventSignature)(e);
          if (!n)
            throw new a.InvalidSignatureError({ signature: e, type: "event" });
          let r = b(n.parameters),
            i = [],
            o = r.length;
          for (let e = 0; e < o; e++)
            i.push(
              p(r[e], {
                modifiers: s.eventModifiers,
                structs: t,
                type: "event",
              })
            );
          return { name: n.name, type: "event", inputs: i };
        })(e, t);
      if ((0, s.isErrorSignature)(e))
        return (function (e, t = {}) {
          let n = (0, s.execErrorSignature)(e);
          if (!n)
            throw new a.InvalidSignatureError({ signature: e, type: "error" });
          let r = b(n.parameters),
            i = [],
            o = r.length;
          for (let e = 0; e < o; e++)
            i.push(p(r[e], { structs: t, type: "error" }));
          return { name: n.name, type: "error", inputs: i };
        })(e, t);
      if ((0, s.isConstructorSignature)(e))
        return (function (e, t = {}) {
          let n = (0, s.execConstructorSignature)(e);
          if (!n)
            throw new a.InvalidSignatureError({
              signature: e,
              type: "constructor",
            });
          let r = b(n.parameters),
            i = [],
            o = r.length;
          for (let e = 0; e < o; e++)
            i.push(p(r[e], { structs: t, type: "constructor" }));
          return {
            type: "constructor",
            stateMutability: n.stateMutability ?? "nonpayable",
            inputs: i,
          };
        })(e, t);
      if ((0, s.isFallbackSignature)(e)) {
        var n = e;
        let t = (0, s.execFallbackSignature)(n);
        if (!t)
          throw new a.InvalidSignatureError({ signature: n, type: "fallback" });
        return {
          type: "fallback",
          stateMutability: t.stateMutability ?? "nonpayable",
        };
      }
      if ((0, s.isReceiveSignature)(e))
        return { type: "receive", stateMutability: "payable" };
      throw new a.UnknownSignatureError({ signature: e });
    }
    let c =
        /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
      f =
        /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
      l = /^u?int$/;
    function p(e, a) {
      var i, o;
      let d,
        h = (function (e, t, n) {
          let r = "";
          if (n)
            for (let e of Object.entries(n)) {
              if (!e) continue;
              let t = "";
              for (let n of e[1])
                t += `[${n.type}${n.name ? `:${n.name}` : ""}]`;
              r += `(${e[0]}{${t}})`;
            }
          return t ? `${t}:${e}${r}` : `${e}${r}`;
        })(e, a?.type, a?.structs);
      if (u.has(h)) return u.get(h);
      let g = t.isTupleRegex.test(e),
        v = (0, t.execTyped)(g ? f : c, e);
      if (!v) throw new r.InvalidParameterError({ param: e });
      if (
        v.name &&
        ("address" === (i = v.name) ||
          "bool" === i ||
          "function" === i ||
          "string" === i ||
          "tuple" === i ||
          t.bytesRegex.test(i) ||
          t.integerRegex.test(i) ||
          m.test(i))
      )
        throw new r.SolidityProtectedKeywordError({ param: e, name: v.name });
      let w = v.name ? { name: v.name } : {},
        x = "indexed" === v.modifier ? { indexed: !0 } : {},
        E = a?.structs ?? {},
        T = {};
      if (g) {
        d = "tuple";
        let e = b(v.type),
          t = [],
          n = e.length;
        for (let r = 0; r < n; r++) t.push(p(e[r], { structs: E }));
        T = { components: t };
      } else if (v.type in E) (d = "tuple"), (T = { components: E[v.type] });
      else if (l.test(v.type)) d = `${v.type}256`;
      else if ("address payable" === v.type) d = "address";
      else if (((d = v.type), a?.type !== "struct" && !y(d)))
        throw new n.UnknownSolidityTypeError({ type: d });
      if (v.modifier) {
        if (!a?.modifiers?.has?.(v.modifier))
          throw new r.InvalidModifierError({
            param: e,
            type: a?.type,
            modifier: v.modifier,
          });
        if (
          s.functionModifiers.has(v.modifier) &&
          ((o = d),
          !v.array && "bytes" !== o && "string" !== o && "tuple" !== o)
        )
          throw new r.InvalidFunctionModifierError({
            param: e,
            type: a?.type,
            modifier: v.modifier,
          });
      }
      let I = { type: `${d}${v.array ?? ""}`, ...w, ...x, ...T };
      return u.set(h, I), I;
    }
    function b(e, t = [], n = "", r = 0) {
      let a = e.trim().length;
      for (let i = 0; i < a; i++) {
        let a = e[i],
          s = e.slice(i + 1);
        switch (a) {
          case ",":
            return 0 === r ? b(s, [...t, n.trim()]) : b(s, t, `${n}${a}`, r);
          case "(":
            return b(s, t, `${n}${a}`, r + 1);
          case ")":
            return b(s, t, `${n}${a}`, r - 1);
          default:
            return b(s, t, `${n}${a}`, r);
        }
      }
      if ("" === n) return t;
      if (0 !== r)
        throw new o.InvalidParenthesisError({ current: n, depth: r });
      return t.push(n.trim()), t;
    }
    function y(e) {
      return (
        "address" === e ||
        "bool" === e ||
        "function" === e ||
        "string" === e ||
        t.bytesRegex.test(e) ||
        t.integerRegex.test(e)
      );
    }
    let m =
      /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    function h(e) {
      let o = {},
        u = e.length;
      for (let t = 0; t < u; t++) {
        let n = e[t];
        if (!(0, s.isStructSignature)(n)) continue;
        let r = (0, s.execStructSignature)(n);
        if (!r)
          throw new a.InvalidSignatureError({ signature: n, type: "struct" });
        let i = r.properties.split(";"),
          u = [],
          d = i.length;
        for (let e = 0; e < d; e++) {
          let t = i[e].trim();
          if (!t) continue;
          let n = p(t, { type: "struct" });
          u.push(n);
        }
        if (!u.length)
          throw new a.InvalidStructSignatureError({ signature: n });
        o[r.name] = u;
      }
      let d = {},
        c = Object.entries(o),
        f = c.length;
      for (let e = 0; e < f; e++) {
        let [a, s] = c[e];
        d[a] = (function e(a = [], s = {}, o = new Set()) {
          let u = [],
            d = a.length;
          for (let c = 0; c < d; c++) {
            let d = a[c];
            if (t.isTupleRegex.test(d.type)) u.push(d);
            else {
              let a = (0, t.execTyped)(g, d.type);
              if (!a?.type)
                throw new r.InvalidAbiTypeParameterError({ abiParameter: d });
              let { array: c, type: f } = a;
              if (f in s) {
                if (o.has(f)) throw new i.CircularReferenceError({ type: f });
                u.push({
                  ...d,
                  type: `tuple${c ?? ""}`,
                  components: e(s[f], s, new Set([...o, f])),
                });
              } else if (y(f)) u.push(d);
              else throw new n.UnknownTypeError({ type: f });
            }
          }
          return u;
        })(s, o);
      }
      return d;
    }
    e.s(
      [
        "isSolidityType",
        () => y,
        "parseAbiParameter",
        () => p,
        "parseSignature",
        () => d,
        "splitParameters",
        () => b,
      ],
      88776
    );
    let g = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    e.s(["parseStructs", () => h], 902094);
  },
  137195,
  (e) => {
    "use strict";
    var t = e.i(61460),
      n = e.i(902094),
      r = e.i(88776);
    function a(e) {
      let a = (0, n.parseStructs)(e),
        i = [],
        s = e.length;
      for (let n = 0; n < s; n++) {
        let s = e[n];
        (0, t.isStructSignature)(s) || i.push((0, r.parseSignature)(s, a));
      }
      return i;
    }
    e.s(["parseAbi", () => a]);
  },
  189991,
  (e) => {
    "use strict";
    function t(e) {
      return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
    }
    e.s(["parseAccount", () => t]);
  },
  727343,
  (e) => {
    "use strict";
    e.s([
      "panicReasons",
      0,
      {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type.",
      },
      "solidityError",
      0,
      {
        inputs: [{ name: "message", type: "string" }],
        name: "Error",
        type: "error",
      },
      "solidityPanic",
      0,
      {
        inputs: [{ name: "reason", type: "uint256" }],
        name: "Panic",
        type: "error",
      },
    ]);
  },
  795,
  493429,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class n extends t.BaseError {
      constructor({ offset: e }) {
        super(`Offset \`${e}\` cannot be negative.`, {
          name: "NegativeOffsetError",
        });
      }
    }
    class r extends t.BaseError {
      constructor({ length: e, position: t }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
          name: "PositionOutOfBoundsError",
        });
      }
    }
    class a extends t.BaseError {
      constructor({ count: e, limit: t }) {
        super(
          `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
          { name: "RecursiveReadLimitExceededError" }
        );
      }
    }
    e.s(
      [
        "NegativeOffsetError",
        () => n,
        "PositionOutOfBoundsError",
        () => r,
        "RecursiveReadLimitExceededError",
        () => a,
      ],
      493429
    );
    let i = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new a({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new r({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new n({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new n({ offset: e });
        let t = this.position + e;
        this.assertPosition(t), (this.position = t);
      },
      inspectByte(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectBytes(e, t) {
        let n = t ?? this.position;
        return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
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
        let n = this.inspectBytes(e);
        return (this.position += t ?? e), n;
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
    function s(e, { recursiveReadLimit: t = 8192 } = {}) {
      let n = Object.create(i);
      return (
        (n.bytes = e),
        (n.dataView = new DataView(e.buffer ?? e, e.byteOffset, e.byteLength)),
        (n.positionReadCount = new Map()),
        (n.recursiveReadLimit = t),
        n
      );
    }
    e.s(["createCursor", () => s], 795);
  },
  249311,
  394125,
  (e) => {
    "use strict";
    var t = e.i(70204),
      n = e.i(823838),
      r = e.i(795),
      a = e.i(401319),
      i = e.i(790063),
      s = e.i(8406),
      o = e.i(400564),
      u = e.i(450323),
      d = e.i(675107);
    function c(e, t) {
      let n = "string" == typeof t ? { to: t } : t,
        r = n.to;
      return "number" === r
        ? p(e, n)
        : "bigint" === r
        ? f(e, n)
        : "boolean" === r
        ? l(e, n)
        : "string" === r
        ? b(e, n)
        : (0, d.bytesToHex)(e, n);
    }
    function f(e, t = {}) {
      void 0 !== t.size && (0, u.assertSize)(e, { size: t.size });
      let n = (0, d.bytesToHex)(e, t);
      return (0, u.hexToBigInt)(n, t);
    }
    function l(e, t = {}) {
      let n = e;
      if (
        (void 0 !== t.size &&
          ((0, u.assertSize)(n, { size: t.size }), (n = (0, s.trim)(n))),
        n.length > 1 || n[0] > 1)
      )
        throw new o.InvalidBytesBooleanError(n);
      return !!n[0];
    }
    function p(e, t = {}) {
      void 0 !== t.size && (0, u.assertSize)(e, { size: t.size });
      let n = (0, d.bytesToHex)(e, t);
      return (0, u.hexToNumber)(n, t);
    }
    function b(e, t = {}) {
      let n = e;
      return (
        void 0 !== t.size &&
          ((0, u.assertSize)(n, { size: t.size }),
          (n = (0, s.trim)(n, { dir: "right" }))),
        new TextDecoder().decode(n)
      );
    }
    e.s(
      [
        "bytesToBigInt",
        () => f,
        "bytesToBool",
        () => l,
        "bytesToNumber",
        () => p,
        "bytesToString",
        () => b,
        "fromBytes",
        () => c,
      ],
      394125
    );
    var y = e.i(769936),
      m = e.i(704434);
    function h(e, o) {
      let u = "string" == typeof o ? (0, y.hexToBytes)(o) : o,
        c = (0, r.createCursor)(u);
      if (0 === (0, a.size)(u) && e.length > 0)
        throw new t.AbiDecodingZeroDataError();
      if ((0, a.size)(o) && 32 > (0, a.size)(o))
        throw new t.AbiDecodingDataSizeTooSmallError({
          data: "string" == typeof o ? o : (0, d.bytesToHex)(o),
          params: e,
          size: (0, a.size)(o),
        });
      let h = 0,
        v = [];
      for (let r = 0; r < e.length; ++r) {
        let a = e[r];
        c.setPosition(h);
        let [o, u] = (function e(r, a, { staticPosition: o }) {
          let u = (0, m.getArrayComponents)(a.type);
          if (u) {
            let [t, n] = u;
            return (function (t, n, { length: r, staticPosition: a }) {
              if (!r) {
                let r = a + p(t.readBytes(32)),
                  i = r + 32;
                t.setPosition(r);
                let s = p(t.readBytes(32)),
                  o = g(n),
                  u = 0,
                  d = [];
                for (let r = 0; r < s; ++r) {
                  t.setPosition(i + (o ? 32 * r : u));
                  let [a, s] = e(t, n, { staticPosition: i });
                  (u += s), d.push(a);
                }
                return t.setPosition(a + 32), [d, 32];
              }
              if (g(n)) {
                let i = a + p(t.readBytes(32)),
                  s = [];
                for (let a = 0; a < r; ++a) {
                  t.setPosition(i + 32 * a);
                  let [r] = e(t, n, { staticPosition: i });
                  s.push(r);
                }
                return t.setPosition(a + 32), [s, 32];
              }
              let i = 0,
                s = [];
              for (let o = 0; o < r; ++o) {
                let [r, o] = e(t, n, { staticPosition: a + i });
                (i += o), s.push(r);
              }
              return [s, i];
            })(r, { ...a, type: n }, { length: t, staticPosition: o });
          }
          if ("tuple" === a.type)
            return (function (t, n, { staticPosition: r }) {
              let a =
                  0 === n.components.length ||
                  n.components.some(({ name: e }) => !e),
                i = a ? [] : {},
                s = 0;
              if (g(n)) {
                let o = r + p(t.readBytes(32));
                for (let r = 0; r < n.components.length; ++r) {
                  let u = n.components[r];
                  t.setPosition(o + s);
                  let [d, c] = e(t, u, { staticPosition: o });
                  (s += c), (i[a ? r : u?.name] = d);
                }
                return t.setPosition(r + 32), [i, 32];
              }
              for (let o = 0; o < n.components.length; ++o) {
                let u = n.components[o],
                  [d, c] = e(t, u, { staticPosition: r });
                (i[a ? o : u?.name] = d), (s += c);
              }
              return [i, s];
            })(r, a, { staticPosition: o });
          if ("address" === a.type) {
            let e;
            return (
              (e = r.readBytes(32)),
              [
                (0, n.checksumAddress)(
                  (0, d.bytesToHex)((0, i.sliceBytes)(e, -20))
                ),
                32,
              ]
            );
          }
          if ("bool" === a.type) return [l(r.readBytes(32), { size: 32 }), 32];
          if (a.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: n }) {
              let [r, a] = t.type.split("bytes");
              if (!a) {
                let t = p(e.readBytes(32));
                e.setPosition(n + t);
                let r = p(e.readBytes(32));
                if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                let a = e.readBytes(r);
                return e.setPosition(n + 32), [(0, d.bytesToHex)(a), 32];
              }
              return [
                (0, d.bytesToHex)(e.readBytes(Number.parseInt(a, 10), 32)),
                32,
              ];
            })(r, a, { staticPosition: o });
          if (a.type.startsWith("uint") || a.type.startsWith("int")) {
            var c, y;
            let e, t, n;
            return (
              (c = r),
              (e = (y = a).type.startsWith("int")),
              (t = Number.parseInt(y.type.split("int")[1] || "256", 10)),
              (n = c.readBytes(32)),
              [t > 48 ? f(n, { signed: e }) : p(n, { signed: e }), 32]
            );
          }
          if ("string" === a.type)
            return (function (e, { staticPosition: t }) {
              let n = p(e.readBytes(32));
              e.setPosition(t + n);
              let r = p(e.readBytes(32));
              if (0 === r) return e.setPosition(t + 32), ["", 32];
              let a = e.readBytes(r, 32),
                i = b((0, s.trim)(a));
              return e.setPosition(t + 32), [i, 32];
            })(r, { staticPosition: o });
          throw new t.InvalidAbiDecodingTypeError(a.type, {
            docsPath: "/docs/contract/decodeAbiParameters",
          });
        })(c, a, { staticPosition: 0 });
        (h += u), v.push(o);
      }
      return v;
    }
    function g(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(g);
      let n = (0, m.getArrayComponents)(e.type);
      return !!(n && g({ ...e, type: n[1] }));
    }
    e.s(["decodeAbiParameters", () => h], 249311);
  },
  959953,
  461295,
  (e) => {
    "use strict";
    var t = e.i(727343),
      n = e.i(70204),
      r = e.i(790063),
      a = e.i(879617),
      i = e.i(249311),
      s = e.i(332881);
    function o(e) {
      let { abi: o, data: u } = e,
        d = (0, r.slice)(u, 0, 4);
      if ("0x" === d) throw new n.AbiDecodingZeroDataError();
      let c = [...(o || []), t.solidityError, t.solidityPanic].find(
        (e) =>
          "error" === e.type &&
          d === (0, a.toFunctionSelector)((0, s.formatAbiItem)(e))
      );
      if (!c)
        throw new n.AbiErrorSignatureNotFoundError(d, {
          docsPath: "/docs/contract/decodeErrorResult",
        });
      return {
        abiItem: c,
        args:
          "inputs" in c && c.inputs && c.inputs.length > 0
            ? (0, i.decodeAbiParameters)(c.inputs, (0, r.slice)(u, 4))
            : void 0,
        errorName: c.name,
      };
    }
    e.s(["decodeErrorResult", () => o], 959953);
    var u = e.i(34888);
    function d({
      abiItem: e,
      args: t,
      includeFunctionName: n = !0,
      includeName: r = !1,
    }) {
      if ("name" in e && "inputs" in e && e.inputs)
        return `${n ? e.name : ""}(${e.inputs
          .map(
            (e, n) =>
              `${r && e.name ? `${e.name}: ` : ""}${
                "object" == typeof t[n] ? (0, u.stringify)(t[n]) : t[n]
              }`
          )
          .join(", ")})`;
    }
    e.s(["formatAbiItemWithArgs", () => d], 461295);
  },
  285973,
  (e) => {
    "use strict";
    var t = e.i(855723),
      n = e.i(644616);
    function r(e, a = "wei") {
      return (0, n.formatUnits)(e, t.etherUnits[a]);
    }
    e.s(["formatEther", () => r]);
  },
  62570,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class n extends t.BaseError {
      constructor({ address: e }) {
        super(`State for account "${e}" is set multiple times.`, {
          name: "AccountStateConflictError",
        });
      }
    }
    class r extends t.BaseError {
      constructor() {
        super("state and stateDiff are set on the same account.", {
          name: "StateAssignmentConflictError",
        });
      }
    }
    function a(e) {
      return e.reduce(
        (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
        ""
      );
    }
    function i(e) {
      return e
        .reduce((e, { address: t, ...n }) => {
          let r = `${e}    ${t}:
`;
          return (
            n.nonce &&
              (r += `      nonce: ${n.nonce}
`),
            n.balance &&
              (r += `      balance: ${n.balance}
`),
            n.code &&
              (r += `      code: ${n.code}
`),
            n.state && ((r += "      state:\n"), (r += a(n.state))),
            n.stateDiff && ((r += "      stateDiff:\n"), (r += a(n.stateDiff))),
            r
          );
        }, "  State Override:\n")
        .slice(0, -1);
    }
    e.s([
      "AccountStateConflictError",
      () => n,
      "StateAssignmentConflictError",
      () => r,
      "prettyStateOverride",
      () => i,
    ]);
  },
  393702,
  (e) => {
    "use strict";
    var t = e.i(285973),
      n = e.i(976486),
      r = e.i(569934);
    function a(e) {
      let t = Object.entries(e)
          .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
          .filter(Boolean),
        n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
      return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
    }
    class i extends r.BaseError {
      constructor() {
        super(
          "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
          { name: "FeeConflictError" }
        );
      }
    }
    class s extends r.BaseError {
      constructor({ v: e }) {
        super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
          name: "InvalidLegacyVError",
        });
      }
    }
    class o extends r.BaseError {
      constructor({ transaction: e }) {
        super("Cannot infer a transaction type from provided transaction.", {
          metaMessages: [
            "Provided Transaction:",
            "{",
            a(e),
            "}",
            "",
            "To infer the type, either provide:",
            "- a `type` to the Transaction, or",
            "- an EIP-1559 Transaction with `maxFeePerGas`, or",
            "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
            "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
            "- an EIP-7702 Transaction with `authorizationList`, or",
            "- a Legacy Transaction with `gasPrice`",
          ],
          name: "InvalidSerializableTransactionError",
        });
      }
    }
    class u extends r.BaseError {
      constructor({ serializedType: e }) {
        super(`Serialized transaction type "${e}" is invalid.`, {
          name: "InvalidSerializedTransactionType",
        }),
          Object.defineProperty(this, "serializedType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.serializedType = e);
      }
    }
    class d extends r.BaseError {
      constructor({ attributes: e, serializedTransaction: t, type: n }) {
        const r = Object.entries(e)
          .map(([e, t]) => (void 0 === t ? e : void 0))
          .filter(Boolean);
        super(`Invalid serialized transaction of type "${n}" was provided.`, {
          metaMessages: [
            `Serialized Transaction: "${t}"`,
            r.length > 0 ? `Missing Attributes: ${r.join(", ")}` : "",
          ].filter(Boolean),
          name: "InvalidSerializedTransactionError",
        }),
          Object.defineProperty(this, "serializedTransaction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.serializedTransaction = t),
          (this.type = n);
      }
    }
    class c extends r.BaseError {
      constructor({ storageKey: e }) {
        super(
          `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
            (e.length - 2) / 2
          )} bytes.`,
          { name: "InvalidStorageKeySizeError" }
        );
      }
    }
    class f extends r.BaseError {
      constructor(
        e,
        {
          account: r,
          docsPath: i,
          chain: s,
          data: o,
          gas: u,
          gasPrice: d,
          maxFeePerGas: c,
          maxPriorityFeePerGas: f,
          nonce: l,
          to: p,
          value: b,
        }
      ) {
        const y = a({
          chain: s && `${s?.name} (id: ${s?.id})`,
          from: r?.address,
          to: p,
          value:
            void 0 !== b &&
            `${(0, t.formatEther)(b)} ${s?.nativeCurrency?.symbol || "ETH"}`,
          data: o,
          gas: u,
          gasPrice: void 0 !== d && `${(0, n.formatGwei)(d)} gwei`,
          maxFeePerGas: void 0 !== c && `${(0, n.formatGwei)(c)} gwei`,
          maxPriorityFeePerGas: void 0 !== f && `${(0, n.formatGwei)(f)} gwei`,
          nonce: l,
        });
        super(e.shortMessage, {
          cause: e,
          docsPath: i,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Request Arguments:",
            y,
          ].filter(Boolean),
          name: "TransactionExecutionError",
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
    class l extends r.BaseError {
      constructor({
        blockHash: e,
        blockNumber: t,
        blockTag: n,
        hash: r,
        index: a,
      }) {
        let i = "Transaction";
        n &&
          void 0 !== a &&
          (i = `Transaction at block time "${n}" at index "${a}"`),
          e &&
            void 0 !== a &&
            (i = `Transaction at block hash "${e}" at index "${a}"`),
          t &&
            void 0 !== a &&
            (i = `Transaction at block number "${t}" at index "${a}"`),
          r && (i = `Transaction with hash "${r}"`),
          super(`${i} could not be found.`, {
            name: "TransactionNotFoundError",
          });
      }
    }
    class p extends r.BaseError {
      constructor({ hash: e }) {
        super(
          `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
          { name: "TransactionReceiptNotFoundError" }
        );
      }
    }
    class b extends r.BaseError {
      constructor({ receipt: e }) {
        super(`Transaction with hash "${e.transactionHash}" reverted.`, {
          metaMessages: [
            'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
            " ",
            "You can attempt to extract the revert reason by:",
            "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
            "- using the `call` Action with raw `data`",
          ],
          name: "TransactionReceiptRevertedError",
        }),
          Object.defineProperty(this, "receipt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.receipt = e);
      }
    }
    class y extends r.BaseError {
      constructor({ hash: e }) {
        super(
          `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
          { name: "WaitForTransactionReceiptTimeoutError" }
        );
      }
    }
    e.s([
      "FeeConflictError",
      () => i,
      "InvalidLegacyVError",
      () => s,
      "InvalidSerializableTransactionError",
      () => o,
      "InvalidSerializedTransactionError",
      () => d,
      "InvalidSerializedTransactionTypeError",
      () => u,
      "InvalidStorageKeySizeError",
      () => c,
      "TransactionExecutionError",
      () => f,
      "TransactionNotFoundError",
      () => l,
      "TransactionReceiptNotFoundError",
      () => p,
      "TransactionReceiptRevertedError",
      () => b,
      "WaitForTransactionReceiptTimeoutError",
      () => y,
      "prettyPrint",
      () => a,
    ]);
  },
  878023,
  (e) => {
    "use strict";
    var t = e.i(189991),
      n = e.i(727343),
      r = e.i(959953),
      a = e.i(332881),
      i = e.i(461295),
      s = e.i(627173),
      o = e.i(285973),
      u = e.i(976486),
      d = e.i(70204),
      c = e.i(569934),
      f = e.i(62570),
      l = e.i(393702),
      p = e.i(363710);
    class b extends c.BaseError {
      constructor(
        e,
        {
          account: n,
          docsPath: r,
          chain: a,
          data: i,
          gas: s,
          gasPrice: d,
          maxFeePerGas: c,
          maxPriorityFeePerGas: p,
          nonce: b,
          to: y,
          value: m,
          stateOverride: h,
        }
      ) {
        const g = n ? (0, t.parseAccount)(n) : void 0;
        let v = (0, l.prettyPrint)({
          from: g?.address,
          to: y,
          value:
            void 0 !== m &&
            `${(0, o.formatEther)(m)} ${a?.nativeCurrency?.symbol || "ETH"}`,
          data: i,
          gas: s,
          gasPrice: void 0 !== d && `${(0, u.formatGwei)(d)} gwei`,
          maxFeePerGas: void 0 !== c && `${(0, u.formatGwei)(c)} gwei`,
          maxPriorityFeePerGas: void 0 !== p && `${(0, u.formatGwei)(p)} gwei`,
          nonce: b,
        });
        h &&
          (v += `
${(0, f.prettyStateOverride)(h)}`),
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Raw Call Arguments:",
              v,
            ].filter(Boolean),
            name: "CallExecutionError",
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
    class y extends c.BaseError {
      constructor(
        e,
        {
          abi: t,
          args: n,
          contractAddress: r,
          docsPath: o,
          functionName: u,
          sender: d,
        }
      ) {
        const c = (0, s.getAbiItem)({ abi: t, args: n, name: u }),
          f = c
            ? (0, i.formatAbiItemWithArgs)({
                abiItem: c,
                args: n,
                includeFunctionName: !1,
                includeName: !1,
              })
            : void 0,
          b = c ? (0, a.formatAbiItem)(c, { includeName: !0 }) : void 0,
          y = (0, l.prettyPrint)({
            address: r && (0, p.getContractAddress)(r),
            function: b,
            args:
              f &&
              "()" !== f &&
              `${[...Array(u?.length ?? 0).keys()]
                .map(() => " ")
                .join("")}${f}`,
            sender: d,
          });
        super(
          e.shortMessage ||
            `An unknown error occurred while executing the contract function "${u}".`,
          {
            cause: e,
            docsPath: o,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              y && "Contract Call:",
              y,
            ].filter(Boolean),
            name: "ContractFunctionExecutionError",
          }
        ),
          Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "args", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abi = t),
          (this.args = n),
          (this.cause = e),
          (this.contractAddress = r),
          (this.functionName = u),
          (this.sender = d);
      }
    }
    class m extends c.BaseError {
      constructor({ abi: e, data: t, functionName: s, message: o }) {
        let u, c, f, l, p;
        if (t && "0x" !== t)
          try {
            const {
              abiItem: s,
              errorName: o,
              args: u,
            } = (c = (0, r.decodeErrorResult)({ abi: e, data: t }));
            if ("Error" === o) l = u[0];
            else if ("Panic" === o) {
              const [e] = u;
              l = n.panicReasons[e];
            } else {
              const e = s
                  ? (0, a.formatAbiItem)(s, { includeName: !0 })
                  : void 0,
                t =
                  s && u
                    ? (0, i.formatAbiItemWithArgs)({
                        abiItem: s,
                        args: u,
                        includeFunctionName: !1,
                        includeName: !1,
                      })
                    : void 0;
              f = [
                e ? `Error: ${e}` : "",
                t && "()" !== t
                  ? `       ${[...Array(o?.length ?? 0).keys()]
                      .map(() => " ")
                      .join("")}${t}`
                  : "",
              ];
            }
          } catch (e) {
            u = e;
          }
        else o && (l = o);
        u instanceof d.AbiErrorSignatureNotFoundError &&
          ((p = u.signature),
          (f = [
            `Unable to decode signature "${p}" as it was not found on the provided ABI.`,
            "Make sure you are using the correct ABI and that the error exists on it.",
            `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${p}.`,
          ])),
          super(
            (l && "execution reverted" !== l) || p
              ? [
                  `The contract function "${s}" reverted with the following ${
                    p ? "signature" : "reason"
                  }:`,
                  l || p,
                ].join("\n")
              : `The contract function "${s}" reverted.`,
            { cause: u, metaMessages: f, name: "ContractFunctionRevertedError" }
          ),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "raw", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = c),
          (this.raw = t),
          (this.reason = l),
          (this.signature = p);
      }
    }
    class h extends c.BaseError {
      constructor({ functionName: e }) {
        super(`The contract function "${e}" returned no data ("0x").`, {
          metaMessages: [
            "This could be due to any of the following:",
            `  - The contract does not have the function "${e}",`,
            "  - The parameters passed to the contract function may be invalid, or",
            "  - The address is not a contract.",
          ],
          name: "ContractFunctionZeroDataError",
        });
      }
    }
    class g extends c.BaseError {
      constructor({ factory: e }) {
        super(
          `Deployment for counterfactual contract call failed${
            e ? ` for factory "${e}".` : ""
          }`,
          {
            metaMessages: [
              "Please ensure:",
              "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
              "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
            ],
            name: "CounterfactualDeploymentFailedError",
          }
        );
      }
    }
    class v extends c.BaseError {
      constructor({ data: e, message: t }) {
        super(t || "", { name: "RawContractError" }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = e);
      }
    }
    e.s([
      "CallExecutionError",
      () => b,
      "ContractFunctionExecutionError",
      () => y,
      "ContractFunctionRevertedError",
      () => m,
      "ContractFunctionZeroDataError",
      () => h,
      "CounterfactualDeploymentFailedError",
      () => g,
      "RawContractError",
      () => v,
    ]);
  },
  467078,
  (e) => {
    "use strict";
    var t = e.i(569934),
      n = e.i(853532);
    function r(e, r) {
      let a = (e.details || "").toLowerCase(),
        i =
          e instanceof t.BaseError
            ? e.walk((e) => e?.code === n.ExecutionRevertedError.code)
            : e;
      return i instanceof t.BaseError
        ? new n.ExecutionRevertedError({ cause: e, message: i.details })
        : n.ExecutionRevertedError.nodeMessage.test(a)
        ? new n.ExecutionRevertedError({ cause: e, message: e.details })
        : n.FeeCapTooHighError.nodeMessage.test(a)
        ? new n.FeeCapTooHighError({ cause: e, maxFeePerGas: r?.maxFeePerGas })
        : n.FeeCapTooLowError.nodeMessage.test(a)
        ? new n.FeeCapTooLowError({ cause: e, maxFeePerGas: r?.maxFeePerGas })
        : n.NonceTooHighError.nodeMessage.test(a)
        ? new n.NonceTooHighError({ cause: e, nonce: r?.nonce })
        : n.NonceTooLowError.nodeMessage.test(a)
        ? new n.NonceTooLowError({ cause: e, nonce: r?.nonce })
        : n.NonceMaxValueError.nodeMessage.test(a)
        ? new n.NonceMaxValueError({ cause: e, nonce: r?.nonce })
        : n.InsufficientFundsError.nodeMessage.test(a)
        ? new n.InsufficientFundsError({ cause: e })
        : n.IntrinsicGasTooHighError.nodeMessage.test(a)
        ? new n.IntrinsicGasTooHighError({ cause: e, gas: r?.gas })
        : n.IntrinsicGasTooLowError.nodeMessage.test(a)
        ? new n.IntrinsicGasTooLowError({ cause: e, gas: r?.gas })
        : n.TransactionTypeNotSupportedError.nodeMessage.test(a)
        ? new n.TransactionTypeNotSupportedError({ cause: e })
        : n.TipAboveFeeCapError.nodeMessage.test(a)
        ? new n.TipAboveFeeCapError({
            cause: e,
            maxFeePerGas: r?.maxFeePerGas,
            maxPriorityFeePerGas: r?.maxPriorityFeePerGas,
          })
        : new n.UnknownNodeError({ cause: e });
    }
    e.s(["getNodeError", () => r]);
  },
  264404,
  (e) => {
    "use strict";
    function t(e, { format: t }) {
      if (!t) return {};
      let n = {};
      return (
        !(function t(r) {
          for (let a of Object.keys(r))
            a in e && (n[a] = e[a]),
              r[a] &&
                "object" == typeof r[a] &&
                !Array.isArray(r[a]) &&
                t(r[a]);
        })(t(e || {})),
        n
      );
    }
    e.s(["extract", () => t]);
  },
  445024,
  (e) => {
    "use strict";
    function t(e, t) {
      return ({ exclude: n, format: r }) => ({
        exclude: n,
        format: (e, a) => {
          let i = t(e, a);
          if (n) for (let e of n) delete i[e];
          return { ...i, ...r(e, a) };
        },
        type: e,
      });
    }
    e.s(["defineFormatter", () => t]);
  },
  190521,
  (e) => {
    "use strict";
    var t = e.i(675107),
      n = e.i(445024);
    let r = {
      legacy: "0x0",
      eip2930: "0x1",
      eip1559: "0x2",
      eip4844: "0x3",
      eip7702: "0x4",
    };
    function a(e, n) {
      let a = {};
      return (
        void 0 !== e.authorizationList &&
          (a.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            r: e.r ? (0, t.numberToHex)(BigInt(e.r)) : e.r,
            s: e.s ? (0, t.numberToHex)(BigInt(e.s)) : e.s,
            chainId: (0, t.numberToHex)(e.chainId),
            nonce: (0, t.numberToHex)(e.nonce),
            ...(void 0 !== e.yParity
              ? { yParity: (0, t.numberToHex)(e.yParity) }
              : {}),
            ...(void 0 !== e.v && void 0 === e.yParity
              ? { v: (0, t.numberToHex)(e.v) }
              : {}),
          }))),
        void 0 !== e.accessList && (a.accessList = e.accessList),
        void 0 !== e.blobVersionedHashes &&
          (a.blobVersionedHashes = e.blobVersionedHashes),
        void 0 !== e.blobs &&
          ("string" != typeof e.blobs[0]
            ? (a.blobs = e.blobs.map((e) => (0, t.bytesToHex)(e)))
            : (a.blobs = e.blobs)),
        void 0 !== e.data && (a.data = e.data),
        e.account && (a.from = e.account.address),
        void 0 !== e.from && (a.from = e.from),
        void 0 !== e.gas && (a.gas = (0, t.numberToHex)(e.gas)),
        void 0 !== e.gasPrice && (a.gasPrice = (0, t.numberToHex)(e.gasPrice)),
        void 0 !== e.maxFeePerBlobGas &&
          (a.maxFeePerBlobGas = (0, t.numberToHex)(e.maxFeePerBlobGas)),
        void 0 !== e.maxFeePerGas &&
          (a.maxFeePerGas = (0, t.numberToHex)(e.maxFeePerGas)),
        void 0 !== e.maxPriorityFeePerGas &&
          (a.maxPriorityFeePerGas = (0, t.numberToHex)(e.maxPriorityFeePerGas)),
        void 0 !== e.nonce && (a.nonce = (0, t.numberToHex)(e.nonce)),
        void 0 !== e.to && (a.to = e.to),
        void 0 !== e.type && (a.type = r[e.type]),
        void 0 !== e.value && (a.value = (0, t.numberToHex)(e.value)),
        a
      );
    }
    let i = (0, n.defineFormatter)("transactionRequest", a);
    e.s([
      "defineTransactionRequest",
      0,
      i,
      "formatTransactionRequest",
      () => a,
      "rpcTransactionType",
      0,
      r,
    ]);
  },
  826051,
  (e) => {
    "use strict";
    var t = e.i(608861),
      n = e.i(587286),
      r = e.i(62570),
      a = e.i(796516),
      i = e.i(675107);
    function s(e) {
      if (e && 0 !== e.length)
        return e.reduce((e, { slot: t, value: r }) => {
          if (66 !== t.length)
            throw new n.InvalidBytesLengthError({
              size: t.length,
              targetSize: 66,
              type: "hex",
            });
          if (66 !== r.length)
            throw new n.InvalidBytesLengthError({
              size: r.length,
              targetSize: 66,
              type: "hex",
            });
          return (e[t] = r), e;
        }, {});
    }
    function o(e) {
      if (!e) return;
      let n = {};
      for (let { address: o, ...u } of e) {
        if (!(0, a.isAddress)(o, { strict: !1 }))
          throw new t.InvalidAddressError({ address: o });
        if (n[o]) throw new r.AccountStateConflictError({ address: o });
        n[o] = (function (e) {
          let { balance: t, nonce: n, state: a, stateDiff: o, code: u } = e,
            d = {};
          if (
            (void 0 !== u && (d.code = u),
            void 0 !== t && (d.balance = (0, i.numberToHex)(t)),
            void 0 !== n && (d.nonce = (0, i.numberToHex)(n)),
            void 0 !== a && (d.state = s(a)),
            void 0 !== o)
          ) {
            if (d.state) throw new r.StateAssignmentConflictError();
            d.stateDiff = s(o);
          }
          return d;
        })(u);
      }
      return n;
    }
    e.s(["serializeStateOverride", () => o]);
  },
  674768,
  (e) => {
    "use strict";
    e.s([
      "maxInt104",
      0,
      2n ** (104n - 1n) - 1n,
      "maxInt112",
      0,
      2n ** (112n - 1n) - 1n,
      "maxInt120",
      0,
      2n ** (120n - 1n) - 1n,
      "maxInt128",
      0,
      2n ** (128n - 1n) - 1n,
      "maxInt136",
      0,
      2n ** (136n - 1n) - 1n,
      "maxInt144",
      0,
      2n ** (144n - 1n) - 1n,
      "maxInt152",
      0,
      2n ** (152n - 1n) - 1n,
      "maxInt16",
      0,
      2n ** (16n - 1n) - 1n,
      "maxInt160",
      0,
      2n ** (160n - 1n) - 1n,
      "maxInt168",
      0,
      2n ** (168n - 1n) - 1n,
      "maxInt176",
      0,
      2n ** (176n - 1n) - 1n,
      "maxInt184",
      0,
      2n ** (184n - 1n) - 1n,
      "maxInt192",
      0,
      2n ** (192n - 1n) - 1n,
      "maxInt200",
      0,
      2n ** (200n - 1n) - 1n,
      "maxInt208",
      0,
      2n ** (208n - 1n) - 1n,
      "maxInt216",
      0,
      2n ** (216n - 1n) - 1n,
      "maxInt224",
      0,
      2n ** (224n - 1n) - 1n,
      "maxInt232",
      0,
      2n ** (232n - 1n) - 1n,
      "maxInt24",
      0,
      2n ** (24n - 1n) - 1n,
      "maxInt240",
      0,
      2n ** (240n - 1n) - 1n,
      "maxInt248",
      0,
      2n ** (248n - 1n) - 1n,
      "maxInt256",
      0,
      2n ** (256n - 1n) - 1n,
      "maxInt32",
      0,
      2n ** (32n - 1n) - 1n,
      "maxInt40",
      0,
      2n ** (40n - 1n) - 1n,
      "maxInt48",
      0,
      2n ** (48n - 1n) - 1n,
      "maxInt56",
      0,
      2n ** (56n - 1n) - 1n,
      "maxInt64",
      0,
      2n ** (64n - 1n) - 1n,
      "maxInt72",
      0,
      2n ** (72n - 1n) - 1n,
      "maxInt8",
      0,
      2n ** (8n - 1n) - 1n,
      "maxInt80",
      0,
      2n ** (80n - 1n) - 1n,
      "maxInt88",
      0,
      2n ** (88n - 1n) - 1n,
      "maxInt96",
      0,
      2n ** (96n - 1n) - 1n,
      "maxUint104",
      0,
      2n ** 104n - 1n,
      "maxUint112",
      0,
      2n ** 112n - 1n,
      "maxUint120",
      0,
      2n ** 120n - 1n,
      "maxUint128",
      0,
      2n ** 128n - 1n,
      "maxUint136",
      0,
      2n ** 136n - 1n,
      "maxUint144",
      0,
      2n ** 144n - 1n,
      "maxUint152",
      0,
      2n ** 152n - 1n,
      "maxUint16",
      0,
      2n ** 16n - 1n,
      "maxUint160",
      0,
      2n ** 160n - 1n,
      "maxUint168",
      0,
      2n ** 168n - 1n,
      "maxUint176",
      0,
      2n ** 176n - 1n,
      "maxUint184",
      0,
      2n ** 184n - 1n,
      "maxUint192",
      0,
      2n ** 192n - 1n,
      "maxUint200",
      0,
      2n ** 200n - 1n,
      "maxUint208",
      0,
      2n ** 208n - 1n,
      "maxUint216",
      0,
      2n ** 216n - 1n,
      "maxUint224",
      0,
      2n ** 224n - 1n,
      "maxUint232",
      0,
      2n ** 232n - 1n,
      "maxUint24",
      0,
      2n ** 24n - 1n,
      "maxUint240",
      0,
      2n ** 240n - 1n,
      "maxUint248",
      0,
      2n ** 248n - 1n,
      "maxUint256",
      0,
      2n ** 256n - 1n,
      "maxUint32",
      0,
      2n ** 32n - 1n,
      "maxUint40",
      0,
      2n ** 40n - 1n,
      "maxUint48",
      0,
      2n ** 48n - 1n,
      "maxUint56",
      0,
      2n ** 56n - 1n,
      "maxUint64",
      0,
      2n ** 64n - 1n,
      "maxUint72",
      0,
      2n ** 72n - 1n,
      "maxUint8",
      0,
      2n ** 8n - 1n,
      "maxUint80",
      0,
      2n ** 80n - 1n,
      "maxUint88",
      0,
      2n ** 88n - 1n,
      "maxUint96",
      0,
      2n ** 96n - 1n,
      "minInt104",
      0,
      -(2n ** (104n - 1n)),
      "minInt112",
      0,
      -(2n ** (112n - 1n)),
      "minInt120",
      0,
      -(2n ** (120n - 1n)),
      "minInt128",
      0,
      -(2n ** (128n - 1n)),
      "minInt136",
      0,
      -(2n ** (136n - 1n)),
      "minInt144",
      0,
      -(2n ** (144n - 1n)),
      "minInt152",
      0,
      -(2n ** (152n - 1n)),
      "minInt16",
      0,
      -(2n ** (16n - 1n)),
      "minInt160",
      0,
      -(2n ** (160n - 1n)),
      "minInt168",
      0,
      -(2n ** (168n - 1n)),
      "minInt176",
      0,
      -(2n ** (176n - 1n)),
      "minInt184",
      0,
      -(2n ** (184n - 1n)),
      "minInt192",
      0,
      -(2n ** (192n - 1n)),
      "minInt200",
      0,
      -(2n ** (200n - 1n)),
      "minInt208",
      0,
      -(2n ** (208n - 1n)),
      "minInt216",
      0,
      -(2n ** (216n - 1n)),
      "minInt224",
      0,
      -(2n ** (224n - 1n)),
      "minInt232",
      0,
      -(2n ** (232n - 1n)),
      "minInt24",
      0,
      -(2n ** (24n - 1n)),
      "minInt240",
      0,
      -(2n ** (240n - 1n)),
      "minInt248",
      0,
      -(2n ** (248n - 1n)),
      "minInt256",
      0,
      -(2n ** (256n - 1n)),
      "minInt32",
      0,
      -(2n ** (32n - 1n)),
      "minInt40",
      0,
      -(2n ** (40n - 1n)),
      "minInt48",
      0,
      -(2n ** (48n - 1n)),
      "minInt56",
      0,
      -(2n ** (56n - 1n)),
      "minInt64",
      0,
      -(2n ** (64n - 1n)),
      "minInt72",
      0,
      -(2n ** (72n - 1n)),
      "minInt8",
      0,
      -(2n ** (8n - 1n)),
      "minInt80",
      0,
      -(2n ** (80n - 1n)),
      "minInt88",
      0,
      -(2n ** (88n - 1n)),
      "minInt96",
      0,
      -(2n ** (96n - 1n)),
    ]);
  },
  353464,
  (e) => {
    "use strict";
    var t = e.i(189991),
      n = e.i(674768),
      r = e.i(608861),
      a = e.i(853532),
      i = e.i(796516);
    function s(e) {
      let { account: s, maxFeePerGas: o, maxPriorityFeePerGas: u, to: d } = e,
        c = s ? (0, t.parseAccount)(s) : void 0;
      if (c && !(0, i.isAddress)(c.address))
        throw new r.InvalidAddressError({ address: c.address });
      if (d && !(0, i.isAddress)(d))
        throw new r.InvalidAddressError({ address: d });
      if (o && o > n.maxUint256)
        throw new a.FeeCapTooHighError({ maxFeePerGas: o });
      if (u && o && u > o)
        throw new a.TipAboveFeeCapError({
          maxFeePerGas: o,
          maxPriorityFeePerGas: u,
        });
    }
    e.s(["assertRequest", () => s]);
  },
  806685,
  (e) => {
    "use strict";
    var t = e.i(608861),
      n = e.i(796516);
    function r(e, r) {
      if (!(0, n.isAddress)(e, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e });
      if (!(0, n.isAddress)(r, { strict: !1 }))
        throw new t.InvalidAddressError({ address: r });
      return e.toLowerCase() === r.toLowerCase();
    }
    e.s(["isAddressEqual", () => r]);
  },
  600547,
  (e) => {
    "use strict";
    var t = e.i(70204),
      n = e.i(249311),
      r = e.i(627173);
    let a = "/docs/contract/decodeFunctionResult";
    function i(e) {
      let { abi: i, args: s, functionName: o, data: u } = e,
        d = i[0];
      if (o) {
        let e = (0, r.getAbiItem)({ abi: i, args: s, name: o });
        if (!e) throw new t.AbiFunctionNotFoundError(o, { docsPath: a });
        d = e;
      }
      if ("function" !== d.type)
        throw new t.AbiFunctionNotFoundError(void 0, { docsPath: a });
      if (!d.outputs)
        throw new t.AbiFunctionOutputsNotFoundError(d.name, { docsPath: a });
      let c = (0, n.decodeAbiParameters)(d.outputs, u);
      return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0;
    }
    e.s(["decodeFunctionResult", () => i]);
  },
  602376,
  931312,
  992239,
  382721,
  (e) => {
    "use strict";
    class t extends Error {
      static setStaticOptions(e) {
        (t.prototype.docsOrigin = e.docsOrigin),
          (t.prototype.showVersion = e.showVersion),
          (t.prototype.version = e.version);
      }
      constructor(e, n = {}) {
        const r = (() => {
            if (n.cause instanceof t) {
              if (n.cause.details) return n.cause.details;
              if (n.cause.shortMessage) return n.cause.shortMessage;
            }
            return n.cause &&
              "details" in n.cause &&
              "string" == typeof n.cause.details
              ? n.cause.details
              : n.cause?.message
              ? n.cause.message
              : n.details;
          })(),
          a = (n.cause instanceof t && n.cause.docsPath) || n.docsPath,
          i = n.docsOrigin ?? t.prototype.docsOrigin,
          s = `${i}${a ?? ""}`,
          o = !!(n.version ?? t.prototype.showVersion),
          u = n.version ?? t.prototype.version;
        super(
          [
            e || "An error occurred.",
            ...(n.metaMessages ? ["", ...n.metaMessages] : []),
            ...(r || a || o
              ? [
                  "",
                  r ? `Details: ${r}` : void 0,
                  a ? `See: ${s}` : void 0,
                  o ? `Version: ${u}` : void 0,
                ]
              : []),
          ]
            .filter((e) => "string" == typeof e)
            .join("\n"),
          n.cause ? { cause: n.cause } : void 0
        ),
          Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docsOrigin", {
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
          Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "showVersion", {
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
          Object.defineProperty(this, "cause", {
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
          (this.cause = n.cause),
          (this.details = r),
          (this.docs = s),
          (this.docsOrigin = i),
          (this.docsPath = a),
          (this.shortMessage = e),
          (this.showVersion = o),
          (this.version = u);
      }
      walk(e) {
        return (function e(t, n) {
          return n?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && t.cause
            ? e(t.cause, n)
            : n
            ? null
            : t;
        })(this, e);
      }
    }
    Object.defineProperty(t, "defaultStaticOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        docsOrigin: "https://oxlib.sh",
        showVersion: !1,
        version: "ox@0.1.1",
      },
    }),
      t.setStaticOptions(t.defaultStaticOptions),
      e.s(["BaseError", () => t], 602376),
      e.s(
        [
          "assertEndOffset",
          () => i,
          "assertSize",
          () => r,
          "assertStartOffset",
          () => a,
          "charCodeToBase16",
          () => s,
          "pad",
          () => o,
          "trim",
          () => u,
        ],
        931312
      );
    var n = e.i(759384);
    function r(e, t) {
      if (n.size(e) > t)
        throw new n.SizeOverflowError({ givenSize: n.size(e), maxSize: t });
    }
    function a(e, t) {
      if ("number" == typeof t && t > 0 && t > n.size(e) - 1)
        throw new n.SliceOffsetOutOfBoundsError({
          offset: t,
          position: "start",
          size: n.size(e),
        });
    }
    function i(e, t, r) {
      if ("number" == typeof t && "number" == typeof r && n.size(e) !== r - t)
        throw new n.SliceOffsetOutOfBoundsError({
          offset: r,
          position: "end",
          size: n.size(e),
        });
    }
    function s(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function o(e, t = {}) {
      let { dir: r, size: a = 32 } = t;
      if (0 === a) return e;
      if (e.length > a)
        throw new n.SizeExceedsPaddingSizeError({
          size: e.length,
          targetSize: a,
          type: "Bytes",
        });
      let i = new Uint8Array(a);
      for (let t = 0; t < a; t++) {
        let n = "right" === r;
        i[n ? t : a - t - 1] = e[n ? t : e.length - t - 1];
      }
      return i;
    }
    function u(e, t = {}) {
      let { dir: n = "left" } = t,
        r = e,
        a = 0;
      for (let e = 0; e < r.length - 1; e++)
        if ("0" === r["left" === n ? e : r.length - e - 1].toString()) a++;
        else break;
      return "left" === n ? r.slice(a) : r.slice(0, r.length - a);
    }
    e.s(
      [
        "assertEndOffset",
        () => l,
        "assertSize",
        () => c,
        "assertStartOffset",
        () => f,
        "pad",
        () => p,
        "trim",
        () => b,
      ],
      992239
    );
    var d = e.i(284251);
    function c(e, t) {
      if (d.size(e) > t)
        throw new d.SizeOverflowError({ givenSize: d.size(e), maxSize: t });
    }
    function f(e, t) {
      if ("number" == typeof t && t > 0 && t > d.size(e) - 1)
        throw new d.SliceOffsetOutOfBoundsError({
          offset: t,
          position: "start",
          size: d.size(e),
        });
    }
    function l(e, t, n) {
      if ("number" == typeof t && "number" == typeof n && d.size(e) !== n - t)
        throw new d.SliceOffsetOutOfBoundsError({
          offset: n,
          position: "end",
          size: d.size(e),
        });
    }
    function p(e, t = {}) {
      let { dir: n, size: r = 32 } = t;
      if (0 === r) return e;
      let a = e.replace("0x", "");
      if (a.length > 2 * r)
        throw new d.SizeExceedsPaddingSizeError({
          size: Math.ceil(a.length / 2),
          targetSize: r,
          type: "Hex",
        });
      return `0x${a["right" === n ? "padEnd" : "padStart"](2 * r, "0")}`;
    }
    function b(e, t = {}) {
      let { dir: n = "left" } = t,
        r = e.replace("0x", ""),
        a = 0;
      for (let e = 0; e < r.length - 1; e++)
        if ("0" === r["left" === n ? e : r.length - e - 1].toString()) a++;
        else break;
      return "0" === (r = "left" === n ? r.slice(a) : r.slice(0, r.length - a))
        ? "0x"
        : "right" === n && r.length % 2 == 1
        ? `0x${r}0`
        : `0x${r}`;
    }
    function y(e, t, n) {
      return JSON.stringify(
        e,
        (e, n) =>
          "function" == typeof t
            ? t(e, n)
            : "bigint" == typeof n
            ? n.toString() + "#__bigint"
            : n,
        n
      );
    }
    e.s(["stringify", () => y], 382721);
  },
  759384,
  (e) => {
    "use strict";
    e.s([
      "SizeExceedsPaddingSizeError",
      () => $,
      "SizeOverflowError",
      () => I,
      "SliceOffsetOutOfBoundsError",
      () => P,
      "concat",
      () => u,
      "from",
      () => d,
      "fromHex",
      () => c,
      "fromString",
      () => f,
      "random",
      () => l,
      "size",
      () => p,
      "slice",
      () => b,
      "toBigInt",
      () => y,
      "toBoolean",
      () => m,
      "toNumber",
      () => h,
      "toString",
      () => g,
      "trimLeft",
      () => v,
      "trimRight",
      () => w,
      "validate",
      () => x,
    ]);
    var t = e.i(602376),
      n = e.i(284251),
      r = e.i(931312),
      a = e.i(992239),
      i = e.i(382721);
    let s = new TextDecoder(),
      o = new TextEncoder();
    function u(...e) {
      let t = 0;
      for (let n of e) t += n.length;
      let n = new Uint8Array(t);
      for (let t = 0, r = 0; t < e.length; t++) {
        let a = e[t];
        n.set(a, r), (r += a.length);
      }
      return n;
    }
    function d(e) {
      var t;
      return e instanceof Uint8Array
        ? e
        : "string" == typeof e
        ? c(e)
        : (t = e) instanceof Uint8Array
        ? t
        : new Uint8Array(t);
    }
    function c(e, i = {}) {
      let { size: s } = i,
        o = e;
      s && (a.assertSize(e, s), (o = n.padRight(e, s)));
      let u = o.slice(2);
      u.length % 2 && (u = `0${u}`);
      let d = u.length / 2,
        f = new Uint8Array(d);
      for (let e = 0, n = 0; e < d; e++) {
        let a = r.charCodeToBase16(u.charCodeAt(n++)),
          i = r.charCodeToBase16(u.charCodeAt(n++));
        if (void 0 === a || void 0 === i)
          throw new t.BaseError(
            `Invalid byte sequence ("${u[n - 2]}${u[n - 1]}" in "${u}").`
          );
        f[e] = (a << 4) | i;
      }
      return f;
    }
    function f(e, t = {}) {
      var n, a;
      let { size: i } = t,
        s = o.encode(e);
      return "number" == typeof i
        ? (r.assertSize(s, i),
          (n = s),
          (a = i),
          r.pad(n, { dir: "right", size: a }))
        : s;
    }
    function l(e) {
      return crypto.getRandomValues(new Uint8Array(e));
    }
    function p(e) {
      return e.length;
    }
    function b(e, t, n, a = {}) {
      let { strict: i } = a;
      r.assertStartOffset(e, t);
      let s = e.slice(t, n);
      return i && r.assertEndOffset(s, t, n), s;
    }
    function y(e, t = {}) {
      let { size: a } = t;
      void 0 !== a && r.assertSize(e, a);
      let i = n.fromBytes(e, t);
      return n.toBigInt(i, t);
    }
    function m(e, t = {}) {
      let { size: n } = t,
        a = e;
      if (
        (void 0 !== n && (r.assertSize(a, n), (a = v(a))),
        a.length > 1 || a[0] > 1)
      )
        throw new E(a);
      return !!a[0];
    }
    function h(e, t = {}) {
      let { size: a } = t;
      void 0 !== a && r.assertSize(e, a);
      let i = n.fromBytes(e, t);
      return n.toNumber(i, t);
    }
    function g(e, t = {}) {
      let { size: n } = t,
        a = e;
      return void 0 !== n && (r.assertSize(a, n), (a = w(a))), s.decode(a);
    }
    function v(e) {
      return r.trim(e, { dir: "left" });
    }
    function w(e) {
      return r.trim(e, { dir: "right" });
    }
    function x(e) {
      try {
        if (
          !(e instanceof Uint8Array) &&
          (!e ||
            "object" != typeof e ||
            !("BYTES_PER_ELEMENT" in e) ||
            1 !== e.BYTES_PER_ELEMENT ||
            "Uint8Array" !== e.constructor.name)
        )
          throw new T(e);
        return !0;
      } catch {
        return !1;
      }
    }
    class E extends t.BaseError {
      constructor(e) {
        super(`Bytes value \`${e}\` is not a valid boolean.`, {
          metaMessages: [
            "The bytes array must contain a single byte of either a `0` or `1` value.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesBooleanError",
          });
      }
    }
    class T extends t.BaseError {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? i.stringify(e) : e
          }\` of type \`${typeof e}\` is an invalid Bytes value.`,
          { metaMessages: ["Bytes values must be of type `Bytes`."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesTypeError",
          });
      }
    }
    class I extends t.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeOverflowError",
          });
      }
    }
    class P extends t.BaseError {
      constructor({ offset: e, position: t, size: n }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class $ extends t.BaseError {
      constructor({ size: e, targetSize: t, type: n }) {
        super(
          `${n.charAt(0).toUpperCase()}${n
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeExceedsPaddingSizeError",
          });
      }
    }
  },
  284251,
  (e) => {
    "use strict";
    e.s([
      "IntegerOutOfRangeError",
      () => I,
      "InvalidLengthError",
      () => S,
      "SizeExceedsPaddingSizeError",
      () => M,
      "SizeOverflowError",
      () => A,
      "SliceOffsetOutOfBoundsError",
      () => B,
      "concat",
      () => u,
      "from",
      () => d,
      "fromBoolean",
      () => c,
      "fromBytes",
      () => f,
      "fromNumber",
      () => l,
      "fromString",
      () => p,
      "padLeft",
      () => b,
      "padRight",
      () => y,
      "random",
      () => m,
      "size",
      () => g,
      "slice",
      () => h,
      "toBigInt",
      () => w,
      "toNumber",
      () => x,
      "toString",
      () => E,
      "trimLeft",
      () => v,
      "validate",
      () => T,
    ]);
    var t = e.i(759384),
      n = e.i(602376),
      r = e.i(931312),
      a = e.i(992239),
      i = e.i(382721);
    let s = new TextEncoder(),
      o = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function u(...e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    function d(e) {
      return e instanceof Uint8Array
        ? f(e)
        : Array.isArray(e)
        ? f(new Uint8Array(e))
        : e;
    }
    function c(e, t = {}) {
      let n = `0x${Number(e)}`;
      return "number" == typeof t.size
        ? (a.assertSize(n, t.size), b(n, t.size))
        : n;
    }
    function f(e, t = {}) {
      let n = "";
      for (let t = 0; t < e.length; t++) n += o[e[t]];
      let r = `0x${n}`;
      return "number" == typeof t.size
        ? (a.assertSize(r, t.size), y(r, t.size))
        : r;
    }
    function l(e, t = {}) {
      let n,
        { signed: r, size: a } = t,
        i = BigInt(e);
      a
        ? (n = r
            ? (1n << (8n * BigInt(a) - 1n)) - 1n
            : 2n ** (8n * BigInt(a)) - 1n)
        : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
      let s = "bigint" == typeof n && r ? -n - 1n : 0;
      if ((n && i > n) || i < s) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new I({
          max: n ? `${n}${t}` : void 0,
          min: `${s}${t}`,
          signed: r,
          size: a,
          value: `${e}${t}`,
        });
      }
      let o = (r && i < 0 ? BigInt.asUintN(8 * a, BigInt(i)) : i).toString(16),
        u = `0x${o}`;
      return a ? b(u, a) : u;
    }
    function p(e, t = {}) {
      return f(s.encode(e), t);
    }
    function b(e, t) {
      return a.pad(e, { dir: "left", size: t });
    }
    function y(e, t) {
      return a.pad(e, { dir: "right", size: t });
    }
    function m(e) {
      return f(t.random(e));
    }
    function h(e, t, n, r = {}) {
      let { strict: i } = r;
      a.assertStartOffset(e, t);
      let s = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
      return i && a.assertEndOffset(s, t, n), s;
    }
    function g(e) {
      return Math.ceil((e.length - 2) / 2);
    }
    function v(e) {
      return a.trim(e, { dir: "left" });
    }
    function w(e, t = {}) {
      let { signed: n } = t;
      t.size && a.assertSize(e, t.size);
      let r = BigInt(e);
      if (!n) return r;
      let i = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
      return r <= i >> 1n ? r : r - i - 1n;
    }
    function x(e, t = {}) {
      let { signed: n, size: r } = t;
      return n || r ? Number(w(e, t)) : Number(e);
    }
    function E(e, n = {}) {
      let { size: a } = n,
        i = t.fromHex(e);
      return (
        a && (r.assertSize(i, a), (i = t.trimRight(i))),
        new TextDecoder().decode(i)
      );
    }
    function T(e, t = {}) {
      let { strict: n = !1 } = t;
      try {
        return (
          !(function (e, t = {}) {
            let { strict: n = !1 } = t;
            if (!e || "string" != typeof e) throw new P(e);
            if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
              throw new $(e);
          })(e, { strict: n }),
          !0
        );
      } catch {
        return !1;
      }
    }
    class I extends n.BaseError {
      constructor({ max: e, min: t, signed: n, size: r, value: a }) {
        super(
          `Number \`${a}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
            n ? " signed" : " unsigned"
          } integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.IntegerOutOfRangeError",
          });
      }
    }
    n.BaseError;
    class P extends n.BaseError {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? i.stringify(e) : e
          }\` of type \`${typeof e}\` is an invalid hex type.`,
          {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.'],
          }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexTypeError",
          });
      }
    }
    class $ extends n.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid hex value.`, {
          metaMessages: [
            'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexValueError",
          });
      }
    }
    class S extends n.BaseError {
      constructor(e) {
        super(
          `Hex value \`"${e}"\` is an odd length (${e.length - 2} nibbles).`,
          { metaMessages: ["It must be an even length."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidLengthError",
          });
      }
    }
    class A extends n.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeOverflowError",
          });
      }
    }
    class B extends n.BaseError {
      constructor({ offset: e, position: t, size: n }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class M extends n.BaseError {
      constructor({ size: e, targetSize: t, type: n }) {
        super(
          `${n.charAt(0).toUpperCase()}${n
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeExceedsPaddingSizeError",
          });
      }
    }
  },
  944318,
  (e) => {
    "use strict";
    var t = e.i(284251);
    function n(e) {
      return {
        address: e.address,
        amount: t.fromNumber(e.amount),
        index: t.fromNumber(e.index),
        validatorIndex: t.fromNumber(e.validatorIndex),
      };
    }
    function r(e) {
      return {
        ...("bigint" == typeof e.baseFeePerGas && {
          baseFeePerGas: t.fromNumber(e.baseFeePerGas),
        }),
        ...("bigint" == typeof e.blobBaseFee && {
          blobBaseFee: t.fromNumber(e.blobBaseFee),
        }),
        ...("string" == typeof e.feeRecipient && {
          feeRecipient: e.feeRecipient,
        }),
        ...("bigint" == typeof e.gasLimit && {
          gasLimit: t.fromNumber(e.gasLimit),
        }),
        ...("bigint" == typeof e.number && { number: t.fromNumber(e.number) }),
        ...("bigint" == typeof e.prevRandao && {
          prevRandao: t.fromNumber(e.prevRandao),
        }),
        ...("bigint" == typeof e.time && { time: t.fromNumber(e.time) }),
        ...(e.withdrawals && { withdrawals: e.withdrawals.map(n) }),
      };
    }
    e.s(["toRpc", () => r], 944318);
  },
  752012,
  (e) => {
    "use strict";
    let t = [
        {
          inputs: [
            {
              components: [
                { name: "target", type: "address" },
                { name: "allowFailure", type: "bool" },
                { name: "callData", type: "bytes" },
              ],
              name: "calls",
              type: "tuple[]",
            },
          ],
          name: "aggregate3",
          outputs: [
            {
              components: [
                { name: "success", type: "bool" },
                { name: "returnData", type: "bytes" },
              ],
              name: "returnData",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "addr", type: "address" }],
          name: "getEthBalance",
          outputs: [{ name: "balance", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getCurrentBlockTimestamp",
          outputs: [
            { internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      n = [
        {
          name: "query",
          type: "function",
          stateMutability: "view",
          inputs: [
            {
              type: "tuple[]",
              name: "queries",
              components: [
                { type: "address", name: "sender" },
                { type: "string[]", name: "urls" },
                { type: "bytes", name: "data" },
              ],
            },
          ],
          outputs: [
            { type: "bool[]", name: "failures" },
            { type: "bytes[]", name: "responses" },
          ],
        },
        {
          name: "HttpError",
          type: "error",
          inputs: [
            { type: "uint16", name: "status" },
            { type: "string", name: "message" },
          ],
        },
      ],
      r = [
        {
          inputs: [{ name: "dns", type: "bytes" }],
          name: "DNSDecodingFailed",
          type: "error",
        },
        {
          inputs: [{ name: "ens", type: "string" }],
          name: "DNSEncodingFailed",
          type: "error",
        },
        { inputs: [], name: "EmptyAddress", type: "error" },
        {
          inputs: [
            { name: "status", type: "uint16" },
            { name: "message", type: "string" },
          ],
          name: "HttpError",
          type: "error",
        },
        { inputs: [], name: "InvalidBatchGatewayResponse", type: "error" },
        {
          inputs: [{ name: "errorData", type: "bytes" }],
          name: "ResolverError",
          type: "error",
        },
        {
          inputs: [
            { name: "name", type: "bytes" },
            { name: "resolver", type: "address" },
          ],
          name: "ResolverNotContract",
          type: "error",
        },
        {
          inputs: [{ name: "name", type: "bytes" }],
          name: "ResolverNotFound",
          type: "error",
        },
        {
          inputs: [
            { name: "primary", type: "string" },
            { name: "primaryAddress", type: "bytes" },
          ],
          name: "ReverseAddressMismatch",
          type: "error",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "selector", type: "bytes4" },
          ],
          name: "UnsupportedResolverProfile",
          type: "error",
        },
      ],
      a = [
        ...r,
        {
          name: "resolveWithGateways",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes" },
            { name: "data", type: "bytes" },
            { name: "gateways", type: "string[]" },
          ],
          outputs: [
            { name: "", type: "bytes" },
            { name: "address", type: "address" },
          ],
        },
      ],
      i = [
        ...r,
        {
          name: "reverseWithGateways",
          type: "function",
          stateMutability: "view",
          inputs: [
            { type: "bytes", name: "reverseName" },
            { type: "uint256", name: "coinType" },
            { type: "string[]", name: "gateways" },
          ],
          outputs: [
            { type: "string", name: "resolvedName" },
            { type: "address", name: "resolver" },
            { type: "address", name: "reverseResolver" },
          ],
        },
      ];
    e.s([
      "addressResolverAbi",
      0,
      [
        {
          name: "addr",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "name", type: "bytes32" }],
          outputs: [{ name: "", type: "address" }],
        },
        {
          name: "addr",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes32" },
            { name: "coinType", type: "uint256" },
          ],
          outputs: [{ name: "", type: "bytes" }],
        },
      ],
      "batchGatewayAbi",
      0,
      n,
      "erc1155Abi",
      0,
      [
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ERC1155InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "approver", type: "address" },
          ],
          name: "ERC1155InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "idsLength", type: "uint256" },
            { internalType: "uint256", name: "valuesLength", type: "uint256" },
          ],
          name: "ERC1155InvalidArrayLength",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "ERC1155InvalidOperator",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "receiver", type: "address" },
          ],
          name: "ERC1155InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
          ],
          name: "ERC1155InvalidSender",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
          ],
          name: "ERC1155MissingApprovalForAll",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              indexed: !1,
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]",
            },
          ],
          name: "TransferBatch",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "TransferSingle",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "string",
              name: "value",
              type: "string",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "URI",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "accounts", type: "address[]" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" },
          ],
          name: "balanceOfBatch",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" },
            { internalType: "uint256[]", name: "values", type: "uint256[]" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "safeBatchTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "uri",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      "erc1271Abi",
      0,
      [
        {
          name: "isValidSignature",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "hash", type: "bytes32" },
            { name: "signature", type: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4" }],
        },
      ],
      "erc20Abi",
      0,
      [
        {
          type: "event",
          name: "Approval",
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "function",
          name: "allowance",
          stateMutability: "view",
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "approve",
          stateMutability: "nonpayable",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "balanceOf",
          stateMutability: "view",
          inputs: [{ name: "account", type: "address" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "decimals",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint8" }],
        },
        {
          type: "function",
          name: "name",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "symbol",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "totalSupply",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "transfer",
          stateMutability: "nonpayable",
          inputs: [
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "transferFrom",
          stateMutability: "nonpayable",
          inputs: [
            { name: "sender", type: "address" },
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
      ],
      "erc20Abi_bytes32",
      0,
      [
        {
          type: "event",
          name: "Approval",
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "function",
          name: "allowance",
          stateMutability: "view",
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "approve",
          stateMutability: "nonpayable",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "balanceOf",
          stateMutability: "view",
          inputs: [{ name: "account", type: "address" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "decimals",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint8" }],
        },
        {
          type: "function",
          name: "name",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "bytes32" }],
        },
        {
          type: "function",
          name: "symbol",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "bytes32" }],
        },
        {
          type: "function",
          name: "totalSupply",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "transfer",
          stateMutability: "nonpayable",
          inputs: [
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "transferFrom",
          stateMutability: "nonpayable",
          inputs: [
            { name: "sender", type: "address" },
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
      ],
      "erc4626Abi",
      0,
      [
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !0, name: "receiver", type: "address" },
            { indexed: !1, name: "assets", type: "uint256" },
            { indexed: !1, name: "shares", type: "uint256" },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !0, name: "receiver", type: "address" },
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !1, name: "assets", type: "uint256" },
            { indexed: !1, name: "shares", type: "uint256" },
          ],
          name: "Withdraw",
          type: "event",
        },
        {
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "asset",
          outputs: [{ name: "assetTokenAddress", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "shares", type: "uint256" }],
          name: "convertToAssets",
          outputs: [{ name: "assets", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "assets", type: "uint256" }],
          name: "convertToShares",
          outputs: [{ name: "shares", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "assets", type: "uint256" },
            { name: "receiver", type: "address" },
          ],
          name: "deposit",
          outputs: [{ name: "shares", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "caller", type: "address" }],
          name: "maxDeposit",
          outputs: [{ name: "maxAssets", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "caller", type: "address" }],
          name: "maxMint",
          outputs: [{ name: "maxShares", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "owner", type: "address" }],
          name: "maxRedeem",
          outputs: [{ name: "maxShares", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "owner", type: "address" }],
          name: "maxWithdraw",
          outputs: [{ name: "maxAssets", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "shares", type: "uint256" },
            { name: "receiver", type: "address" },
          ],
          name: "mint",
          outputs: [{ name: "assets", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "assets", type: "uint256" }],
          name: "previewDeposit",
          outputs: [{ name: "shares", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "shares", type: "uint256" }],
          name: "previewMint",
          outputs: [{ name: "assets", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "shares", type: "uint256" }],
          name: "previewRedeem",
          outputs: [{ name: "assets", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "assets", type: "uint256" }],
          name: "previewWithdraw",
          outputs: [{ name: "shares", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "shares", type: "uint256" },
            { name: "receiver", type: "address" },
            { name: "owner", type: "address" },
          ],
          name: "redeem",
          outputs: [{ name: "assets", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [{ name: "totalManagedAssets", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "to", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "assets", type: "uint256" },
            { name: "receiver", type: "address" },
            { name: "owner", type: "address" },
          ],
          name: "withdraw",
          outputs: [{ name: "shares", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      "erc6492SignatureValidatorAbi",
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
      "erc721Abi",
      0,
      [
        {
          type: "event",
          name: "Approval",
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !0, name: "tokenId", type: "uint256" },
          ],
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "operator", type: "address" },
            { indexed: !1, name: "approved", type: "bool" },
          ],
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !0, name: "tokenId", type: "uint256" },
          ],
        },
        {
          type: "function",
          name: "approve",
          stateMutability: "payable",
          inputs: [
            { name: "spender", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "balanceOf",
          stateMutability: "view",
          inputs: [{ name: "account", type: "address" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "getApproved",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ type: "address" }],
        },
        {
          type: "function",
          name: "isApprovedForAll",
          stateMutability: "view",
          inputs: [
            { name: "owner", type: "address" },
            { name: "operator", type: "address" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "name",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "ownerOf",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "owner", type: "address" }],
        },
        {
          type: "function",
          name: "safeTransferFrom",
          stateMutability: "payable",
          inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "safeTransferFrom",
          stateMutability: "nonpayable",
          inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "id", type: "uint256" },
            { name: "data", type: "bytes" },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "setApprovalForAll",
          stateMutability: "nonpayable",
          inputs: [
            { name: "operator", type: "address" },
            { name: "approved", type: "bool" },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "symbol",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "tokenByIndex",
          stateMutability: "view",
          inputs: [{ name: "index", type: "uint256" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "tokenByIndex",
          stateMutability: "view",
          inputs: [
            { name: "owner", type: "address" },
            { name: "index", type: "uint256" },
          ],
          outputs: [{ name: "tokenId", type: "uint256" }],
        },
        {
          type: "function",
          name: "tokenURI",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "totalSupply",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "transferFrom",
          stateMutability: "payable",
          inputs: [
            { name: "sender", type: "address" },
            { name: "recipient", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
          outputs: [],
        },
      ],
      "multicall3Abi",
      0,
      t,
      "textResolverAbi",
      0,
      [
        {
          name: "text",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes32" },
            { name: "key", type: "string" },
          ],
          outputs: [{ name: "", type: "string" }],
        },
      ],
      "universalResolverResolveAbi",
      0,
      a,
      "universalResolverReverseAbi",
      0,
      i,
    ]);
  },
  904119,
  (e) => {
    "use strict";
    e.s(["aggregate3Signature", 0, "0x82ad56cb"]);
  },
  472503,
  (e) => {
    "use strict";
    e.s([
      "deploylessCallViaBytecodeBytecode",
      0,
      "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
      "deploylessCallViaFactoryBytecode",
      0,
      "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
      "erc6492SignatureValidatorByteCode",
      0,
      "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
      "multicall3Bytecode",
      0,
      "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033",
    ]);
  },
  505880,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class n extends t.BaseError {
      constructor({ blockNumber: e, chain: t, contract: n }) {
        super(`Chain "${t.name}" does not support contract "${n.name}".`, {
          metaMessages: [
            "This could be due to any of the following:",
            ...(e && n.blockCreated && n.blockCreated > e
              ? [
                  `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                ]
              : [
                  `- The chain does not have the contract "${n.name}" configured.`,
                ]),
          ],
          name: "ChainDoesNotSupportContract",
        });
      }
    }
    class r extends t.BaseError {
      constructor({ chain: e, currentChainId: t }) {
        super(
          `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
          {
            metaMessages: [
              `Current Chain ID:  ${t}`,
              `Expected Chain ID: ${e.id} – ${e.name}`,
            ],
            name: "ChainMismatchError",
          }
        );
      }
    }
    class a extends t.BaseError {
      constructor() {
        super(
          "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
          { name: "ChainNotFoundError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor() {
        super("No chain was provided to the Client.", {
          name: "ClientChainNotConfiguredError",
        });
      }
    }
    class s extends t.BaseError {
      constructor({ chainId: e }) {
        super(
          "number" == typeof e
            ? `Chain ID "${e}" is invalid.`
            : "Chain ID is invalid.",
          { name: "InvalidChainIdError" }
        );
      }
    }
    e.s([
      "ChainDoesNotSupportContract",
      () => n,
      "ChainMismatchError",
      () => r,
      "ChainNotFoundError",
      () => a,
      "ClientChainNotConfiguredError",
      () => i,
      "InvalidChainIdError",
      () => s,
    ]);
  },
  289169,
  (e) => {
    "use strict";
    var t = e.i(70204),
      n = e.i(147526),
      r = e.i(704434);
    let a = "/docs/contract/encodeDeployData";
    function i(e) {
      let { abi: i, args: s, bytecode: o } = e;
      if (!s || 0 === s.length) return o;
      let u = i.find((e) => "type" in e && "constructor" === e.type);
      if (!u) throw new t.AbiConstructorNotFoundError({ docsPath: a });
      if (!("inputs" in u) || !u.inputs || 0 === u.inputs.length)
        throw new t.AbiConstructorParamsNotFoundError({ docsPath: a });
      let d = (0, r.encodeAbiParameters)(u.inputs, s);
      return (0, n.concatHex)([o, d]);
    }
    e.s(["encodeDeployData", () => i]);
  },
  404195,
  (e) => {
    "use strict";
    var t = e.i(505880);
    function n({ blockNumber: e, chain: n, contract: r }) {
      let a = n?.contracts?.[r];
      if (!a)
        throw new t.ChainDoesNotSupportContract({
          chain: n,
          contract: { name: r },
        });
      if (e && a.blockCreated && a.blockCreated > e)
        throw new t.ChainDoesNotSupportContract({
          blockNumber: e,
          chain: n,
          contract: { name: r, blockCreated: a.blockCreated },
        });
      return a.address;
    }
    e.s(["getChainContractAddress", () => n]);
  },
  779690,
  (e) => {
    "use strict";
    var t = e.i(878023),
      n = e.i(853532),
      r = e.i(467078);
    function a(e, { docsPath: a, ...i }) {
      let s,
        o =
          (s = (0, r.getNodeError)(e, i)) instanceof n.UnknownNodeError ? e : s;
      return new t.CallExecutionError(o, { docsPath: a, ...i });
    }
    e.s(["getCallError", () => a]);
  },
  989509,
  (e) => {
    "use strict";
    var t = e.i(137195),
      n = e.i(944318),
      r = e.i(189991),
      a = e.i(752012),
      i = e.i(904119),
      s = e.i(472503),
      o = e.i(569934),
      u = e.i(505880),
      d = e.i(878023),
      c = e.i(600547),
      f = e.i(289169),
      l = e.i(656679),
      p = e.i(404195),
      b = e.i(675107),
      y = e.i(779690),
      m = e.i(264404),
      h = e.i(190521),
      g = e.i(871706),
      v = e.i(826051),
      w = e.i(353464);
    async function x(a, c) {
      let {
          account: l = a.account,
          authorizationList: p,
          batch: g = !!a.batch?.multicall,
          blockNumber: x,
          blockTag: I = a.experimental_blockTag ?? "latest",
          accessList: P,
          blobs: $,
          blockOverrides: S,
          code: A,
          data: B,
          factory: M,
          factoryData: O,
          gas: C,
          gasPrice: z,
          maxFeePerBlobGas: F,
          maxFeePerGas: R,
          maxPriorityFeePerGas: U,
          nonce: N,
          to: j,
          value: k,
          stateOverride: D,
          ...H
        } = c,
        L = l ? (0, r.parseAccount)(l) : void 0;
      if (A && (M || O))
        throw new o.BaseError(
          "Cannot provide both `code` & `factory`/`factoryData` as parameters."
        );
      if (A && j)
        throw new o.BaseError(
          "Cannot provide both `code` & `to` as parameters."
        );
      let G = A && B,
        _ = M && O && j && B,
        V = G || _,
        Z = G
          ? T({ code: A, data: B })
          : _
          ? (function (e) {
              let { data: n, factory: r, factoryData: a, to: i } = e;
              return (0, f.encodeDeployData)({
                abi: (0, t.parseAbi)([
                  "constructor(address, bytes, address, bytes)",
                ]),
                bytecode: s.deploylessCallViaFactoryBytecode,
                args: [i, n, r, a],
              });
            })({ data: B, factory: M, factoryData: O, to: j })
          : B;
      try {
        let e;
        (0, w.assertRequest)(c);
        let t = ("bigint" == typeof x ? (0, b.numberToHex)(x) : void 0) || I,
          r = S ? n.toRpc(S) : void 0,
          s = (0, v.serializeStateOverride)(D),
          o = a.chain?.formatters?.transactionRequest?.format,
          d = (o || h.formatTransactionRequest)(
            {
              ...(0, m.extract)(H, { format: o }),
              accessList: P,
              account: L,
              authorizationList: p,
              blobs: $,
              data: Z,
              gas: C,
              gasPrice: z,
              maxFeePerBlobGas: F,
              maxFeePerGas: R,
              maxPriorityFeePerGas: U,
              nonce: N,
              to: V ? void 0 : j,
              value: k,
            },
            "call"
          );
        if (
          g &&
          (function ({ request: e }) {
            let { data: t, to: n, ...r } = e;
            return (
              !(!t || t.startsWith(i.aggregate3Signature)) &&
              !!n &&
              !(Object.values(r).filter((e) => void 0 !== e).length > 0)
            );
          })({ request: d }) &&
          !s &&
          !r
        )
          try {
            return await E(a, { ...d, blockNumber: x, blockTag: I });
          } catch (e) {
            if (
              !(e instanceof u.ClientChainNotConfiguredError) &&
              !(e instanceof u.ChainDoesNotSupportContract)
            )
              throw e;
          }
        let f =
            ((e = [d, t]),
            s && r ? [...e, s, r] : s ? [...e, s] : r ? [...e, {}, r] : e),
          l = await a.request({ method: "eth_call", params: f });
        if ("0x" === l) return { data: void 0 };
        return { data: l };
      } catch (i) {
        let t = (function (e) {
            if (!(e instanceof o.BaseError)) return;
            let t = e.walk();
            return "object" == typeof t?.data ? t.data?.data : t.data;
          })(i),
          { offchainLookup: n, offchainLookupSignature: r } = await e.A(101139);
        if (!1 !== a.ccipRead && t?.slice(0, 10) === r && j)
          return { data: await n(a, { data: t, to: j }) };
        if (V && t?.slice(0, 10) === "0x101bb98d")
          throw new d.CounterfactualDeploymentFailedError({ factory: M });
        throw (0, y.getCallError)(i, { ...c, account: L, chain: a.chain });
      }
    }
    async function E(e, t) {
      let {
          batchSize: n = 1024,
          deployless: r = !1,
          wait: i = 0,
        } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        {
          blockNumber: o,
          blockTag: f = e.experimental_blockTag ?? "latest",
          data: y,
          to: m,
        } = t,
        h = (() => {
          if (r) return null;
          if (t.multicallAddress) return t.multicallAddress;
          if (e.chain)
            return (0, p.getChainContractAddress)({
              blockNumber: o,
              chain: e.chain,
              contract: "multicall3",
            });
          throw new u.ClientChainNotConfiguredError();
        })(),
        v = ("bigint" == typeof o ? (0, b.numberToHex)(o) : void 0) || f,
        { schedule: w } = (0, g.createBatchScheduler)({
          id: `${e.uid}.${v}`,
          wait: i,
          shouldSplitBatch: (e) =>
            e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
          fn: async (t) => {
            let n = t.map((e) => ({
                allowFailure: !0,
                callData: e.data,
                target: e.to,
              })),
              r = (0, l.encodeFunctionData)({
                abi: a.multicall3Abi,
                args: [n],
                functionName: "aggregate3",
              }),
              i = await e.request({
                method: "eth_call",
                params: [
                  {
                    ...(null === h
                      ? { data: T({ code: s.multicall3Bytecode, data: r }) }
                      : { to: h, data: r }),
                  },
                  v,
                ],
              });
            return (0, c.decodeFunctionResult)({
              abi: a.multicall3Abi,
              args: [n],
              functionName: "aggregate3",
              data: i || "0x",
            });
          },
        }),
        [{ returnData: x, success: E }] = await w({ data: y, to: m });
      if (!E) throw new d.RawContractError({ data: x });
      return "0x" === x ? { data: void 0 } : { data: x };
    }
    function T(e) {
      let { code: n, data: r } = e;
      return (0, f.encodeDeployData)({
        abi: (0, t.parseAbi)(["constructor(bytes, bytes)"]),
        bytecode: s.deploylessCallViaBytecodeBytecode,
        args: [n, r],
      });
    }
    e.s(["call", () => x]);
  },
]);
