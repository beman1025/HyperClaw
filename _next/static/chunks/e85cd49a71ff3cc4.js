(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  595932,
  (e) => {
    "use strict";
    let t = e.i(478492).default;
    e.s(["default", 0, t]);
  },
  313227,
  (e, t, r) => {
    "use strict";
    var n = e.r(242524).Buffer;
    t.exports = function (e) {
      if (e.length >= 255) throw TypeError("Alphabet too long");
      for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
      for (var i = 0; i < e.length; i++) {
        var o = e.charAt(i),
          s = o.charCodeAt(0);
        if (255 !== t[s]) throw TypeError(o + " is ambiguous");
        t[s] = i;
      }
      var a = e.length,
        u = e.charAt(0),
        c = Math.log(a) / Math.log(256),
        l = Math.log(256) / Math.log(a);
      function d(e) {
        if ("string" != typeof e) throw TypeError("Expected String");
        if (0 === e.length) return n.alloc(0);
        for (var r = 0, i = 0, o = 0; e[r] === u; ) i++, r++;
        for (
          var s = ((e.length - r) * c + 1) >>> 0, l = new Uint8Array(s);
          r < e.length;

        ) {
          var d = e.charCodeAt(r);
          if (d > 255) return;
          var h = t[d];
          if (255 === h) return;
          for (var f = 0, p = s - 1; (0 !== h || f < o) && -1 !== p; p--, f++)
            (h += (a * l[p]) >>> 0),
              (l[p] = h % 256 >>> 0),
              (h = (h / 256) >>> 0);
          if (0 !== h) throw Error("Non-zero carry");
          (o = f), r++;
        }
        for (var g = s - o; g !== s && 0 === l[g]; ) g++;
        var y = n.allocUnsafe(i + (s - g));
        y.fill(0, 0, i);
        for (var b = i; g !== s; ) y[b++] = l[g++];
        return y;
      }
      return {
        encode: function (t) {
          if (
            ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
            !n.isBuffer(t))
          )
            throw TypeError("Expected Buffer");
          if (0 === t.length) return "";
          for (var r = 0, i = 0, o = 0, s = t.length; o !== s && 0 === t[o]; )
            o++, r++;
          for (
            var c = ((s - o) * l + 1) >>> 0, d = new Uint8Array(c);
            o !== s;

          ) {
            for (
              var h = t[o], f = 0, p = c - 1;
              (0 !== h || f < i) && -1 !== p;
              p--, f++
            )
              (h += (256 * d[p]) >>> 0),
                (d[p] = h % a >>> 0),
                (h = (h / a) >>> 0);
            if (0 !== h) throw Error("Non-zero carry");
            (i = f), o++;
          }
          for (var g = c - i; g !== c && 0 === d[g]; ) g++;
          for (var y = u.repeat(r); g < c; ++g) y += e.charAt(d[g]);
          return y;
        },
        decodeUnsafe: d,
        decode: function (e) {
          var t = d(e);
          if (t) return t;
          throw Error("Non-base" + a + " character");
        },
      };
    };
  },
  635030,
  (e, t, r) => {
    t.exports = e.r(313227)(
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    );
  },
  217944,
  (e, t, r) => {
    "use strict";
    var n = e.r(242524).Buffer;
    t.exports = function (e) {
      if (e.length >= 255) throw TypeError("Alphabet too long");
      for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
      for (var i = 0; i < e.length; i++) {
        var o = e.charAt(i),
          s = o.charCodeAt(0);
        if (255 !== t[s]) throw TypeError(o + " is ambiguous");
        t[s] = i;
      }
      var a = e.length,
        u = e.charAt(0),
        c = Math.log(a) / Math.log(256),
        l = Math.log(256) / Math.log(a);
      function d(e) {
        if ("string" != typeof e) throw TypeError("Expected String");
        if (0 === e.length) return n.alloc(0);
        for (var r = 0, i = 0, o = 0; e[r] === u; ) i++, r++;
        for (
          var s = ((e.length - r) * c + 1) >>> 0, l = new Uint8Array(s);
          r < e.length;

        ) {
          var d = e.charCodeAt(r);
          if (d > 255) return;
          var h = t[d];
          if (255 === h) return;
          for (var f = 0, p = s - 1; (0 !== h || f < o) && -1 !== p; p--, f++)
            (h += (a * l[p]) >>> 0),
              (l[p] = h % 256 >>> 0),
              (h = (h / 256) >>> 0);
          if (0 !== h) throw Error("Non-zero carry");
          (o = f), r++;
        }
        for (var g = s - o; g !== s && 0 === l[g]; ) g++;
        var y = n.allocUnsafe(i + (s - g));
        y.fill(0, 0, i);
        for (var b = i; g !== s; ) y[b++] = l[g++];
        return y;
      }
      return {
        encode: function (t) {
          if (
            ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
            !n.isBuffer(t))
          )
            throw TypeError("Expected Buffer");
          if (0 === t.length) return "";
          for (var r = 0, i = 0, o = 0, s = t.length; o !== s && 0 === t[o]; )
            o++, r++;
          for (
            var c = ((s - o) * l + 1) >>> 0, d = new Uint8Array(c);
            o !== s;

          ) {
            for (
              var h = t[o], f = 0, p = c - 1;
              (0 !== h || f < i) && -1 !== p;
              p--, f++
            )
              (h += (256 * d[p]) >>> 0),
                (d[p] = h % a >>> 0),
                (h = (h / a) >>> 0);
            if (0 !== h) throw Error("Non-zero carry");
            (i = f), o++;
          }
          for (var g = c - i; g !== c && 0 === d[g]; ) g++;
          for (var y = u.repeat(r); g < c; ++g) y += e.charAt(d[g]);
          return y;
        },
        decodeUnsafe: d,
        decode: function (e) {
          var t = d(e);
          if (t) return t;
          throw Error("Non-base" + a + " character");
        },
      };
    };
  },
  701262,
  (e, t, r) => {
    t.exports = e.r(217944)(
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    );
  },
  572766,
  (e, t, r) => {
    "use strict";
    function n(e, t, r) {
      return t <= e && e <= r;
    }
    function i(e) {
      if (void 0 === e) return {};
      if (e === Object(e)) return e;
      throw TypeError("Could not convert argument to dictionary");
    }
    function o(e) {
      this.tokens = [].slice.call(e);
    }
    function s(e, t) {
      if (e) throw TypeError("Decoder error");
      return t || 65533;
    }
    o.prototype = {
      endOfStream: function () {
        return !this.tokens.length;
      },
      read: function () {
        return this.tokens.length ? this.tokens.shift() : -1;
      },
      prepend: function (e) {
        if (Array.isArray(e)) for (; e.length; ) this.tokens.unshift(e.pop());
        else this.tokens.unshift(e);
      },
      push: function (e) {
        if (Array.isArray(e)) for (; e.length; ) this.tokens.push(e.shift());
        else this.tokens.push(e);
      },
    };
    var a = "utf-8";
    function u(e, t) {
      if (!(this instanceof u)) return new u(e, t);
      if ((e = void 0 !== e ? String(e).toLowerCase() : a) !== a)
        throw Error("Encoding not supported. Only utf-8 is supported");
      (t = i(t)),
        (this._streaming = !1),
        (this._BOMseen = !1),
        (this._decoder = null),
        (this._fatal = !!t.fatal),
        (this._ignoreBOM = !!t.ignoreBOM),
        Object.defineProperty(this, "encoding", { value: "utf-8" }),
        Object.defineProperty(this, "fatal", { value: this._fatal }),
        Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
    }
    function c(e, t) {
      if (!(this instanceof c)) return new c(e, t);
      if ((e = void 0 !== e ? String(e).toLowerCase() : a) !== a)
        throw Error("Encoding not supported. Only utf-8 is supported");
      (t = i(t)),
        (this._streaming = !1),
        (this._encoder = null),
        (this._options = { fatal: !!t.fatal }),
        Object.defineProperty(this, "encoding", { value: "utf-8" });
    }
    function l(e) {
      var t = e.fatal,
        r = 0,
        i = 0,
        o = 0,
        a = 128,
        u = 191;
      this.handler = function (e, c) {
        if (-1 === c && 0 !== o) return (o = 0), s(t);
        if (-1 === c) return -1;
        if (0 === o) {
          if (n(c, 0, 127)) return c;
          if (n(c, 194, 223)) (o = 1), (r = c - 192);
          else if (n(c, 224, 239))
            224 === c && (a = 160),
              237 === c && (u = 159),
              (o = 2),
              (r = c - 224);
          else {
            if (!n(c, 240, 244)) return s(t);
            240 === c && (a = 144),
              244 === c && (u = 143),
              (o = 3),
              (r = c - 240);
          }
          return (r <<= 6 * o), null;
        }
        if (!n(c, a, u))
          return (r = o = i = 0), (a = 128), (u = 191), e.prepend(c), s(t);
        if (
          ((a = 128),
          (u = 191),
          (i += 1),
          (r += (c - 128) << (6 * (o - i))),
          i !== o)
        )
          return null;
        var l = r;
        return (r = o = i = 0), l;
      };
    }
    function d(e) {
      e.fatal,
        (this.handler = function (e, t) {
          if (-1 === t) return -1;
          if (n(t, 0, 127)) return t;
          n(t, 128, 2047)
            ? ((r = 1), (i = 192))
            : n(t, 2048, 65535)
            ? ((r = 2), (i = 224))
            : n(t, 65536, 1114111) && ((r = 3), (i = 240));
          for (var r, i, o = [(t >> (6 * r)) + i]; r > 0; ) {
            var s = t >> (6 * (r - 1));
            o.push(128 | (63 & s)), (r -= 1);
          }
          return o;
        });
    }
    (u.prototype = {
      decode: function (e, t) {
        (r =
          "object" == typeof e && e instanceof ArrayBuffer
            ? new Uint8Array(e)
            : "object" == typeof e &&
              "buffer" in e &&
              e.buffer instanceof ArrayBuffer
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : new Uint8Array(0)),
          (t = i(t)),
          this._streaming ||
            ((this._decoder = new l({ fatal: this._fatal })),
            (this._BOMseen = !1)),
          (this._streaming = !!t.stream);
        for (
          var r, n, s = new o(r), a = [];
          !s.endOfStream() && -1 !== (n = this._decoder.handler(s, s.read()));

        )
          null !== n && (Array.isArray(n) ? a.push.apply(a, n) : a.push(n));
        if (!this._streaming) {
          do {
            if (-1 === (n = this._decoder.handler(s, s.read()))) break;
            if (null === n) continue;
            Array.isArray(n) ? a.push.apply(a, n) : a.push(n);
          } while (!s.endOfStream());
          this._decoder = null;
        }
        !a.length ||
          -1 === ["utf-8"].indexOf(this.encoding) ||
          this._ignoreBOM ||
          this._BOMseen ||
          (65279 === a[0]
            ? ((this._BOMseen = !0), a.shift())
            : (this._BOMseen = !0));
        for (var u = "", c = 0; c < a.length; ++c) {
          var d = a[c];
          d <= 65535
            ? (u += String.fromCharCode(d))
            : ((d -= 65536),
              (u += String.fromCharCode(
                (d >> 10) + 55296,
                (1023 & d) + 56320
              )));
        }
        return u;
      },
    }),
      (c.prototype = {
        encode: function (e, t) {
          (e = e ? String(e) : ""),
            (t = i(t)),
            this._streaming || (this._encoder = new d(this._options)),
            (this._streaming = !!t.stream);
          for (
            var r,
              n = [],
              s = new o(
                (function (e) {
                  for (
                    var t = String(e), r = t.length, n = 0, i = [];
                    n < r;

                  ) {
                    var o = t.charCodeAt(n);
                    if (o < 55296 || o > 57343) i.push(o);
                    else if (56320 <= o && o <= 57343) i.push(65533);
                    else if (55296 <= o && o <= 56319)
                      if (n === r - 1) i.push(65533);
                      else {
                        var s = e.charCodeAt(n + 1);
                        if (56320 <= s && s <= 57343) {
                          var a = 1023 & o,
                            u = 1023 & s;
                          i.push(65536 + (a << 10) + u), (n += 1);
                        } else i.push(65533);
                      }
                    n += 1;
                  }
                  return i;
                })(e)
              );
            !s.endOfStream() && -1 !== (r = this._encoder.handler(s, s.read()));

          )
            Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
          if (!this._streaming) {
            for (; -1 !== (r = this._encoder.handler(s, s.read())); )
              Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
            this._encoder = null;
          }
          return new Uint8Array(n);
        },
      }),
      (r.TextEncoder = c),
      (r.TextDecoder = u);
  },
  154119,
  (e, t, r) => {
    "use strict";
    var n = e.i(467034),
      i =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  },
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      s =
        (e.e && e.e.__decorate) ||
        function (e, t, r, n) {
          var i,
            o = arguments.length,
            s =
              o < 3
                ? t
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(t, r))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
          return o > 3 && s && Object.defineProperty(t, r, s), s;
        },
      a =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              "default" !== r && Object.hasOwnProperty.call(e, r) && i(t, e, r);
          return o(t, e), t;
        },
      u =
        (e.e && e.e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.deserializeUnchecked =
        r.deserialize =
        r.serialize =
        r.BinaryReader =
        r.BinaryWriter =
        r.BorshError =
        r.baseDecode =
        r.baseEncode =
          void 0);
    let c = u(e.r(910490)),
      l = u(e.r(701262)),
      d = a(e.r(572766)),
      h = new ("function" != typeof TextDecoder ? d.TextDecoder : TextDecoder)(
        "utf-8",
        { fatal: !0 }
      );
    (r.baseEncode = function (e) {
      return (
        "string" == typeof e && (e = n.Buffer.from(e, "utf8")),
        l.default.encode(n.Buffer.from(e))
      );
    }),
      (r.baseDecode = function (e) {
        return n.Buffer.from(l.default.decode(e));
      });
    class f extends Error {
      constructor(e) {
        super(e), (this.fieldPath = []), (this.originalMessage = e);
      }
      addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e),
          (this.message =
            this.originalMessage + ": " + this.fieldPath.join("."));
      }
    }
    r.BorshError = f;
    class p {
      constructor() {
        (this.buf = n.Buffer.alloc(1024)), (this.length = 0);
      }
      maybeResize() {
        this.buf.length < 16 + this.length &&
          (this.buf = n.Buffer.concat([this.buf, n.Buffer.alloc(1024)]));
      }
      writeU8(e) {
        this.maybeResize(),
          this.buf.writeUInt8(e, this.length),
          (this.length += 1);
      }
      writeU16(e) {
        this.maybeResize(),
          this.buf.writeUInt16LE(e, this.length),
          (this.length += 2);
      }
      writeU32(e) {
        this.maybeResize(),
          this.buf.writeUInt32LE(e, this.length),
          (this.length += 4);
      }
      writeU64(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 8)));
      }
      writeU128(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 16)));
      }
      writeU256(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 32)));
      }
      writeU512(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 64)));
      }
      writeBuffer(e) {
        (this.buf = n.Buffer.concat([
          n.Buffer.from(this.buf.subarray(0, this.length)),
          e,
          n.Buffer.alloc(1024),
        ])),
          (this.length += e.length);
      }
      writeString(e) {
        this.maybeResize();
        let t = n.Buffer.from(e, "utf8");
        this.writeU32(t.length), this.writeBuffer(t);
      }
      writeFixedArray(e) {
        this.writeBuffer(n.Buffer.from(e));
      }
      writeArray(e, t) {
        for (let r of (this.maybeResize(), this.writeU32(e.length), e))
          this.maybeResize(), t(r);
      }
      toArray() {
        return this.buf.subarray(0, this.length);
      }
    }
    function g(e, t, r) {
      let n = r.value;
      r.value = function (...e) {
        try {
          return n.apply(this, e);
        } catch (e) {
          if (
            e instanceof RangeError &&
            ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(e.code) >=
              0
          )
            throw new f("Reached the end of buffer when deserializing");
          throw e;
        }
      };
    }
    r.BinaryWriter = p;
    class y {
      constructor(e) {
        (this.buf = e), (this.offset = 0);
      }
      readU8() {
        let e = this.buf.readUInt8(this.offset);
        return (this.offset += 1), e;
      }
      readU16() {
        let e = this.buf.readUInt16LE(this.offset);
        return (this.offset += 2), e;
      }
      readU32() {
        let e = this.buf.readUInt32LE(this.offset);
        return (this.offset += 4), e;
      }
      readU64() {
        let e = this.readBuffer(8);
        return new c.default(e, "le");
      }
      readU128() {
        let e = this.readBuffer(16);
        return new c.default(e, "le");
      }
      readU256() {
        let e = this.readBuffer(32);
        return new c.default(e, "le");
      }
      readU512() {
        let e = this.readBuffer(64);
        return new c.default(e, "le");
      }
      readBuffer(e) {
        if (this.offset + e > this.buf.length)
          throw new f(`Expected buffer length ${e} isn't within bounds`);
        let t = this.buf.slice(this.offset, this.offset + e);
        return (this.offset += e), t;
      }
      readString() {
        let e = this.readU32(),
          t = this.readBuffer(e);
        try {
          return h.decode(t);
        } catch (e) {
          throw new f(`Error decoding UTF-8 string: ${e}`);
        }
      }
      readFixedArray(e) {
        return new Uint8Array(this.readBuffer(e));
      }
      readArray(e) {
        let t = this.readU32(),
          r = [];
        for (let n = 0; n < t; ++n) r.push(e());
        return r;
      }
    }
    function b(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function m(e, t, r, n, i) {
      try {
        if ("string" == typeof n) i[`write${b(n)}`](r);
        else if (n instanceof Array)
          if ("number" == typeof n[0]) {
            if (r.length !== n[0])
              throw new f(
                `Expecting byte array of length ${n[0]}, but got ${r.length} bytes`
              );
            i.writeFixedArray(r);
          } else if (2 === n.length && "number" == typeof n[1]) {
            if (r.length !== n[1])
              throw new f(
                `Expecting byte array of length ${n[1]}, but got ${r.length} bytes`
              );
            for (let t = 0; t < n[1]; t++) m(e, null, r[t], n[0], i);
          } else
            i.writeArray(r, (r) => {
              m(e, t, r, n[0], i);
            });
        else if (void 0 !== n.kind)
          switch (n.kind) {
            case "option":
              null == r ? i.writeU8(0) : (i.writeU8(1), m(e, t, r, n.type, i));
              break;
            case "map":
              i.writeU32(r.size),
                r.forEach((r, o) => {
                  m(e, t, o, n.key, i), m(e, t, r, n.value, i);
                });
              break;
            default:
              throw new f(`FieldType ${n} unrecognized`);
          }
        else w(e, r, i);
      } catch (e) {
        throw (e instanceof f && e.addToFieldPath(t), e);
      }
    }
    function w(e, t, r) {
      if ("function" == typeof t.borshSerialize)
        return void t.borshSerialize(r);
      let n = e.get(t.constructor);
      if (!n) throw new f(`Class ${t.constructor.name} is missing in schema`);
      if ("struct" === n.kind)
        n.fields.map(([n, i]) => {
          m(e, n, t[n], i, r);
        });
      else if ("enum" === n.kind) {
        let i = t[n.field];
        for (let o = 0; o < n.values.length; ++o) {
          let [s, a] = n.values[o];
          if (s === i) {
            r.writeU8(o), m(e, s, t[s], a, r);
            break;
          }
        }
      } else
        throw new f(
          `Unexpected schema kind: ${n.kind} for ${t.constructor.name}`
        );
    }
    function k(e, t, r, n) {
      try {
        if ("string" == typeof r) return n[`read${b(r)}`]();
        if (r instanceof Array)
          if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
          else {
            if ("number" != typeof r[1])
              return n.readArray(() => k(e, t, r[0], n));
            let i = [];
            for (let t = 0; t < r[1]; t++) i.push(k(e, null, r[0], n));
            return i;
          }
        if ("option" === r.kind) {
          if (n.readU8()) return k(e, t, r.type, n);
          return;
        }
        if ("map" === r.kind) {
          let i = new Map(),
            o = n.readU32();
          for (let s = 0; s < o; s++) {
            let o = k(e, t, r.key, n),
              s = k(e, t, r.value, n);
            i.set(o, s);
          }
          return i;
        }
        return S(e, r, n);
      } catch (e) {
        throw (e instanceof f && e.addToFieldPath(t), e);
      }
    }
    function S(e, t, r) {
      if ("function" == typeof t.borshDeserialize) return t.borshDeserialize(r);
      let n = e.get(t);
      if (!n) throw new f(`Class ${t.name} is missing in schema`);
      if ("struct" === n.kind) {
        let n = {};
        for (let [i, o] of e.get(t).fields) n[i] = k(e, i, o, r);
        return new t(n);
      }
      if ("enum" === n.kind) {
        let i = r.readU8();
        if (i >= n.values.length)
          throw new f(`Enum index: ${i} is out of range`);
        let [o, s] = n.values[i],
          a = k(e, o, s, r);
        return new t({ [o]: a });
      }
      throw new f(
        `Unexpected schema kind: ${n.kind} for ${t.constructor.name}`
      );
    }
    s([g], y.prototype, "readU8", null),
      s([g], y.prototype, "readU16", null),
      s([g], y.prototype, "readU32", null),
      s([g], y.prototype, "readU64", null),
      s([g], y.prototype, "readU128", null),
      s([g], y.prototype, "readU256", null),
      s([g], y.prototype, "readU512", null),
      s([g], y.prototype, "readString", null),
      s([g], y.prototype, "readFixedArray", null),
      s([g], y.prototype, "readArray", null),
      (r.BinaryReader = y),
      (r.serialize = function (e, t, r = p) {
        let n = new r();
        return w(e, t, n), n.toArray();
      }),
      (r.deserialize = function (e, t, r, n = y) {
        let i = new n(r),
          o = S(e, t, i);
        if (i.offset < r.length)
          throw new f(
            `Unexpected ${r.length - i.offset} bytes after deserialized data`
          );
        return o;
      }),
      (r.deserializeUnchecked = function (e, t, r, n = y) {
        return S(e, t, new n(r));
      });
  },
  444610,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.s16 =
        r.s8 =
        r.nu64be =
        r.u48be =
        r.u40be =
        r.u32be =
        r.u24be =
        r.u16be =
        r.nu64 =
        r.u48 =
        r.u40 =
        r.u32 =
        r.u24 =
        r.u16 =
        r.u8 =
        r.offset =
        r.greedy =
        r.Constant =
        r.UTF8 =
        r.CString =
        r.Blob =
        r.Boolean =
        r.BitField =
        r.BitStructure =
        r.VariantLayout =
        r.Union =
        r.UnionLayoutDiscriminator =
        r.UnionDiscriminator =
        r.Structure =
        r.Sequence =
        r.DoubleBE =
        r.Double =
        r.FloatBE =
        r.Float =
        r.NearInt64BE =
        r.NearInt64 =
        r.NearUInt64BE =
        r.NearUInt64 =
        r.IntBE =
        r.Int =
        r.UIntBE =
        r.UInt =
        r.OffsetLayout =
        r.GreedyCount =
        r.ExternalLayout =
        r.bindConstructorLayout =
        r.nameWithProperty =
        r.Layout =
        r.uint8ArrayToBuffer =
        r.checkUint8Array =
          void 0),
      (r.constant =
        r.utf8 =
        r.cstr =
        r.blob =
        r.unionLayoutDiscriminator =
        r.union =
        r.seq =
        r.bits =
        r.struct =
        r.f64be =
        r.f64 =
        r.f32be =
        r.f32 =
        r.ns64be =
        r.s48be =
        r.s40be =
        r.s32be =
        r.s24be =
        r.s16be =
        r.ns64 =
        r.s48 =
        r.s40 =
        r.s32 =
        r.s24 =
          void 0);
    let n = e.r(843943);
    function i(e) {
      if (!(e instanceof Uint8Array)) throw TypeError("b must be a Uint8Array");
    }
    function o(e) {
      return i(e), n.Buffer.from(e.buffer, e.byteOffset, e.length);
    }
    (r.checkUint8Array = i), (r.uint8ArrayToBuffer = o);
    class s {
      constructor(e, t) {
        if (!Number.isInteger(e)) throw TypeError("span must be an integer");
        (this.span = e), (this.property = t);
      }
      makeDestinationObject() {
        return {};
      }
      getSpan(e, t) {
        if (0 > this.span) throw RangeError("indeterminate span");
        return this.span;
      }
      replicate(e) {
        let t = Object.create(this.constructor.prototype);
        return Object.assign(t, this), (t.property = e), t;
      }
      fromArray(e) {}
    }
    function a(e, t) {
      return t.property ? e + "[" + t.property + "]" : e;
    }
    (r.Layout = s),
      (r.nameWithProperty = a),
      (r.bindConstructorLayout = function (e, t) {
        if ("function" != typeof e)
          throw TypeError("Class must be constructor");
        if (Object.prototype.hasOwnProperty.call(e, "layout_"))
          throw Error("Class is already bound to a layout");
        if (!(t && t instanceof s)) throw TypeError("layout must be a Layout");
        if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
          throw Error("layout is already bound to a constructor");
        (e.layout_ = t),
          (t.boundConstructor_ = e),
          (t.makeDestinationObject = () => new e()),
          Object.defineProperty(e.prototype, "encode", {
            value(e, r) {
              return t.encode(this, e, r);
            },
            writable: !0,
          }),
          Object.defineProperty(e, "decode", {
            value: (e, r) => t.decode(e, r),
            writable: !0,
          });
      });
    class u extends s {
      isCount() {
        throw Error("ExternalLayout is abstract");
      }
    }
    r.ExternalLayout = u;
    class c extends u {
      constructor(e = 1, t) {
        if (!Number.isInteger(e) || 0 >= e)
          throw TypeError("elementSpan must be a (positive) integer");
        super(-1, t), (this.elementSpan = e);
      }
      isCount() {
        return !0;
      }
      decode(e, t = 0) {
        return i(e), Math.floor((e.length - t) / this.elementSpan);
      }
      encode(e, t, r) {
        return 0;
      }
    }
    r.GreedyCount = c;
    class l extends u {
      constructor(e, t = 0, r) {
        if (!(e instanceof s)) throw TypeError("layout must be a Layout");
        if (!Number.isInteger(t))
          throw TypeError("offset must be integer or undefined");
        super(e.span, r || e.property), (this.layout = e), (this.offset = t);
      }
      isCount() {
        return this.layout instanceof d || this.layout instanceof h;
      }
      decode(e, t = 0) {
        return this.layout.decode(e, t + this.offset);
      }
      encode(e, t, r = 0) {
        return this.layout.encode(e, t, r + this.offset);
      }
    }
    r.OffsetLayout = l;
    class d extends s {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return o(e).readUIntLE(t, this.span);
      }
      encode(e, t, r = 0) {
        return o(t).writeUIntLE(e, r, this.span), this.span;
      }
    }
    r.UInt = d;
    class h extends s {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return o(e).readUIntBE(t, this.span);
      }
      encode(e, t, r = 0) {
        return o(t).writeUIntBE(e, r, this.span), this.span;
      }
    }
    r.UIntBE = h;
    class f extends s {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return o(e).readIntLE(t, this.span);
      }
      encode(e, t, r = 0) {
        return o(t).writeIntLE(e, r, this.span), this.span;
      }
    }
    r.Int = f;
    class p extends s {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return o(e).readIntBE(t, this.span);
      }
      encode(e, t, r = 0) {
        return o(t).writeIntBE(e, r, this.span), this.span;
      }
    }
    function g(e) {
      let t = Math.floor(e / 0x100000000);
      return { hi32: t, lo32: e - 0x100000000 * t };
    }
    function y(e, t) {
      return 0x100000000 * e + t;
    }
    r.IntBE = p;
    class b extends s {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = o(e),
          n = r.readUInt32LE(t);
        return y(r.readUInt32LE(t + 4), n);
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = o(t);
        return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
      }
    }
    r.NearUInt64 = b;
    class m extends s {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = o(e);
        return y(r.readUInt32BE(t), r.readUInt32BE(t + 4));
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = o(t);
        return i.writeUInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8;
      }
    }
    r.NearUInt64BE = m;
    class w extends s {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = o(e),
          n = r.readUInt32LE(t);
        return y(r.readInt32LE(t + 4), n);
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = o(t);
        return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
      }
    }
    r.NearInt64 = w;
    class k extends s {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = o(e);
        return y(r.readInt32BE(t), r.readUInt32BE(t + 4));
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = o(t);
        return i.writeInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8;
      }
    }
    r.NearInt64BE = k;
    class S extends s {
      constructor(e) {
        super(4, e);
      }
      decode(e, t = 0) {
        return o(e).readFloatLE(t);
      }
      encode(e, t, r = 0) {
        return o(t).writeFloatLE(e, r), 4;
      }
    }
    r.Float = S;
    class v extends s {
      constructor(e) {
        super(4, e);
      }
      decode(e, t = 0) {
        return o(e).readFloatBE(t);
      }
      encode(e, t, r = 0) {
        return o(t).writeFloatBE(e, r), 4;
      }
    }
    r.FloatBE = v;
    class _ extends s {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        return o(e).readDoubleLE(t);
      }
      encode(e, t, r = 0) {
        return o(t).writeDoubleLE(e, r), 8;
      }
    }
    r.Double = _;
    class E extends s {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        return o(e).readDoubleBE(t);
      }
      encode(e, t, r = 0) {
        return o(t).writeDoubleBE(e, r), 8;
      }
    }
    r.DoubleBE = E;
    class I extends s {
      constructor(e, t, r) {
        if (!(e instanceof s))
          throw TypeError("elementLayout must be a Layout");
        if (
          !((t instanceof u && t.isCount()) || (Number.isInteger(t) && 0 <= t))
        )
          throw TypeError(
            "count must be non-negative integer or an unsigned integer ExternalLayout"
          );
        let n = -1;
        t instanceof u || !(0 < e.span) || (n = t * e.span),
          super(n, r),
          (this.elementLayout = e),
          (this.count = t);
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = 0,
          n = this.count;
        if (
          (n instanceof u && (n = n.decode(e, t)), 0 < this.elementLayout.span)
        )
          r = n * this.elementLayout.span;
        else {
          let i = 0;
          for (; i < n; ) (r += this.elementLayout.getSpan(e, t + r)), ++i;
        }
        return r;
      }
      decode(e, t = 0) {
        let r = [],
          n = 0,
          i = this.count;
        for (i instanceof u && (i = i.decode(e, t)); n < i; )
          r.push(this.elementLayout.decode(e, t)),
            (t += this.elementLayout.getSpan(e, t)),
            (n += 1);
        return r;
      }
      encode(e, t, r = 0) {
        let n = this.elementLayout,
          i = e.reduce((e, i) => e + n.encode(i, t, r + e), 0);
        return this.count instanceof u && this.count.encode(e.length, t, r), i;
      }
    }
    r.Sequence = I;
    class A extends s {
      constructor(e, t, r) {
        if (!(Array.isArray(e) && e.reduce((e, t) => e && t instanceof s, !0)))
          throw TypeError("fields must be array of Layout instances");
        for (const n of ("boolean" == typeof t &&
          void 0 === r &&
          ((r = t), (t = void 0)),
        e))
          if (0 > n.span && void 0 === n.property)
            throw Error("fields cannot contain unnamed variable-length layout");
        let n = -1;
        try {
          n = e.reduce((e, t) => e + t.getSpan(), 0);
        } catch (e) {}
        super(n, t), (this.fields = e), (this.decodePrefixes = !!r);
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = 0;
        try {
          r = this.fields.reduce((r, n) => {
            let i = n.getSpan(e, t);
            return (t += i), r + i;
          }, 0);
        } catch (e) {
          throw RangeError("indeterminate span");
        }
        return r;
      }
      decode(e, t = 0) {
        i(e);
        let r = this.makeDestinationObject();
        for (let n of this.fields)
          if (
            (void 0 !== n.property && (r[n.property] = n.decode(e, t)),
            (t += n.getSpan(e, t)),
            this.decodePrefixes && e.length === t)
          )
            break;
        return r;
      }
      encode(e, t, r = 0) {
        let n = r,
          i = 0,
          o = 0;
        for (let n of this.fields) {
          let s = n.span;
          if (((o = 0 < s ? s : 0), void 0 !== n.property)) {
            let i = e[n.property];
            void 0 !== i &&
              ((o = n.encode(i, t, r)), 0 > s && (s = n.getSpan(t, r)));
          }
          (i = r), (r += s);
        }
        return i + o - n;
      }
      fromArray(e) {
        let t = this.makeDestinationObject();
        for (let r of this.fields)
          void 0 !== r.property && 0 < e.length && (t[r.property] = e.shift());
        return t;
      }
      layoutFor(e) {
        if ("string" != typeof e) throw TypeError("property must be string");
        for (let t of this.fields) if (t.property === e) return t;
      }
      offsetOf(e) {
        if ("string" != typeof e) throw TypeError("property must be string");
        let t = 0;
        for (let r of this.fields) {
          if (r.property === e) return t;
          0 > r.span ? (t = -1) : 0 <= t && (t += r.span);
        }
      }
    }
    r.Structure = A;
    class x {
      constructor(e) {
        this.property = e;
      }
      decode(e, t) {
        throw Error("UnionDiscriminator is abstract");
      }
      encode(e, t, r) {
        throw Error("UnionDiscriminator is abstract");
      }
    }
    r.UnionDiscriminator = x;
    class R extends x {
      constructor(e, t) {
        if (!(e instanceof u && e.isCount()))
          throw TypeError("layout must be an unsigned integer ExternalLayout");
        super(t || e.property || "variant"), (this.layout = e);
      }
      decode(e, t) {
        return this.layout.decode(e, t);
      }
      encode(e, t, r) {
        return this.layout.encode(e, t, r);
      }
    }
    r.UnionLayoutDiscriminator = R;
    class P extends s {
      constructor(e, t, r) {
        let n;
        if (e instanceof d || e instanceof h) n = new R(new l(e));
        else if (e instanceof u && e.isCount()) n = new R(e);
        else if (e instanceof x) n = e;
        else
          throw TypeError(
            "discr must be a UnionDiscriminator or an unsigned integer layout"
          );
        if ((void 0 === t && (t = null), !(null === t || t instanceof s)))
          throw TypeError("defaultLayout must be null or a Layout");
        if (null !== t) {
          if (0 > t.span) throw Error("defaultLayout must have constant span");
          void 0 === t.property && (t = t.replicate("content"));
        }
        let i = -1;
        t &&
          0 <= (i = t.span) &&
          (e instanceof d || e instanceof h) &&
          (i += n.layout.span),
          super(i, r),
          (this.discriminator = n),
          (this.usesPrefixDiscriminator = e instanceof d || e instanceof h),
          (this.defaultLayout = t),
          (this.registry = {});
        let o = this.defaultGetSourceVariant.bind(this);
        (this.getSourceVariant = function (e) {
          return o(e);
        }),
          (this.configGetSourceVariant = function (e) {
            o = e.bind(this);
          });
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = this.getVariant(e, t);
        if (!r)
          throw Error("unable to determine span for unrecognized variant");
        return r.getSpan(e, t);
      }
      defaultGetSourceVariant(e) {
        if (
          Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
        ) {
          if (
            this.defaultLayout &&
            this.defaultLayout.property &&
            Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)
          )
            return;
          let t = this.registry[e[this.discriminator.property]];
          if (
            t &&
            (!t.layout ||
              (t.property &&
                Object.prototype.hasOwnProperty.call(e, t.property)))
          )
            return t;
        } else
          for (let t in this.registry) {
            let r = this.registry[t];
            if (
              r.property &&
              Object.prototype.hasOwnProperty.call(e, r.property)
            )
              return r;
          }
        throw Error("unable to infer src variant");
      }
      decode(e, t = 0) {
        let r,
          n = this.discriminator,
          i = n.decode(e, t),
          o = this.registry[i];
        if (void 0 === o) {
          let o = this.defaultLayout,
            s = 0;
          this.usesPrefixDiscriminator && (s = n.layout.span),
            ((r = this.makeDestinationObject())[n.property] = i),
            (r[o.property] = o.decode(e, t + s));
        } else r = o.decode(e, t);
        return r;
      }
      encode(e, t, r = 0) {
        let n = this.getSourceVariant(e);
        if (void 0 === n) {
          let n = this.discriminator,
            i = this.defaultLayout,
            o = 0;
          return (
            this.usesPrefixDiscriminator && (o = n.layout.span),
            n.encode(e[n.property], t, r),
            o + i.encode(e[i.property], t, r + o)
          );
        }
        return n.encode(e, t, r);
      }
      addVariant(e, t, r) {
        let n = new B(this, e, t, r);
        return (this.registry[e] = n), n;
      }
      getVariant(e, t = 0) {
        let r;
        return (
          (r = e instanceof Uint8Array ? this.discriminator.decode(e, t) : e),
          this.registry[r]
        );
      }
    }
    r.Union = P;
    class B extends s {
      constructor(e, t, r, n) {
        if (!(e instanceof P)) throw TypeError("union must be a Union");
        if (!Number.isInteger(t) || 0 > t)
          throw TypeError("variant must be a (non-negative) integer");
        if (
          ("string" == typeof r && void 0 === n && ((n = r), (r = null)), r)
        ) {
          if (!(r instanceof s)) throw TypeError("layout must be a Layout");
          if (
            null !== e.defaultLayout &&
            0 <= r.span &&
            r.span > e.defaultLayout.span
          )
            throw Error("variant span exceeds span of containing union");
          if ("string" != typeof n)
            throw TypeError("variant must have a String property");
        }
        let i = e.span;
        0 > e.span &&
          0 <= (i = r ? r.span : 0) &&
          e.usesPrefixDiscriminator &&
          (i += e.discriminator.layout.span),
          super(i, n),
          (this.union = e),
          (this.variant = t),
          (this.layout = r || null);
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = 0;
        this.union.usesPrefixDiscriminator &&
          (r = this.union.discriminator.layout.span);
        let n = 0;
        return this.layout && (n = this.layout.getSpan(e, t + r)), r + n;
      }
      decode(e, t = 0) {
        let r = this.makeDestinationObject();
        if (this !== this.union.getVariant(e, t))
          throw Error("variant mismatch");
        let n = 0;
        return (
          this.union.usesPrefixDiscriminator &&
            (n = this.union.discriminator.layout.span),
          this.layout
            ? (r[this.property] = this.layout.decode(e, t + n))
            : this.property
            ? (r[this.property] = !0)
            : this.union.usesPrefixDiscriminator &&
              (r[this.union.discriminator.property] = this.variant),
          r
        );
      }
      encode(e, t, r = 0) {
        let n = 0;
        if (
          (this.union.usesPrefixDiscriminator &&
            (n = this.union.discriminator.layout.span),
          this.layout &&
            !Object.prototype.hasOwnProperty.call(e, this.property))
        )
          throw TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, t, r);
        let i = n;
        if (
          this.layout &&
          (this.layout.encode(e[this.property], t, r + n),
          (i += this.layout.getSpan(t, r + n)),
          0 <= this.union.span && i > this.union.span)
        )
          throw Error("encoded variant overruns containing union");
        return i;
      }
      fromArray(e) {
        if (this.layout) return this.layout.fromArray(e);
      }
    }
    function T(e) {
      return 0 > e && (e += 0x100000000), e;
    }
    r.VariantLayout = B;
    class O extends s {
      constructor(e, t, r) {
        if (!(e instanceof d || e instanceof h))
          throw TypeError("word must be a UInt or UIntBE layout");
        if (
          ("string" == typeof t && void 0 === r && ((r = t), (t = !1)),
          4 < e.span)
        )
          throw RangeError("word cannot exceed 32 bits");
        super(e.span, r), (this.word = e), (this.msb = !!t), (this.fields = []);
        let n = 0;
        (this._packedSetValue = function (e) {
          return (n = T(e)), this;
        }),
          (this._packedGetValue = function () {
            return n;
          });
      }
      decode(e, t = 0) {
        let r = this.makeDestinationObject(),
          n = this.word.decode(e, t);
        for (let t of (this._packedSetValue(n), this.fields))
          void 0 !== t.property && (r[t.property] = t.decode(e));
        return r;
      }
      encode(e, t, r = 0) {
        let n = this.word.decode(t, r);
        for (let t of (this._packedSetValue(n), this.fields))
          if (void 0 !== t.property) {
            let r = e[t.property];
            void 0 !== r && t.encode(r);
          }
        return this.word.encode(this._packedGetValue(), t, r);
      }
      addField(e, t) {
        let r = new C(this, e, t);
        return this.fields.push(r), r;
      }
      addBoolean(e) {
        let t = new L(this, e);
        return this.fields.push(t), t;
      }
      fieldFor(e) {
        if ("string" != typeof e) throw TypeError("property must be string");
        for (let t of this.fields) if (t.property === e) return t;
      }
    }
    r.BitStructure = O;
    class C {
      constructor(e, t, r) {
        if (!(e instanceof O))
          throw TypeError("container must be a BitStructure");
        if (!Number.isInteger(t) || 0 >= t)
          throw TypeError("bits must be positive integer");
        const n = 8 * e.span,
          i = e.fields.reduce((e, t) => e + t.bits, 0);
        if (t + i > n)
          throw Error(
            "bits too long for span remainder (" +
              (n - i) +
              " of " +
              n +
              " remain)"
          );
        (this.container = e),
          (this.bits = t),
          (this.valueMask = (1 << t) - 1),
          32 === t && (this.valueMask = 0xffffffff),
          (this.start = i),
          this.container.msb && (this.start = n - i - t),
          (this.wordMask = T(this.valueMask << this.start)),
          (this.property = r);
      }
      decode(e, t) {
        return (
          T(this.container._packedGetValue() & this.wordMask) >>> this.start
        );
      }
      encode(e) {
        if (
          "number" != typeof e ||
          !Number.isInteger(e) ||
          e !== T(e & this.valueMask)
        )
          throw TypeError(
            a("BitField.encode", this) +
              " value must be integer not exceeding " +
              this.valueMask
          );
        let t = this.container._packedGetValue(),
          r = T(e << this.start);
        this.container._packedSetValue(T(t & ~this.wordMask) | r);
      }
    }
    r.BitField = C;
    class L extends C {
      constructor(e, t) {
        super(e, 1, t);
      }
      decode(e, t) {
        return !!super.decode(e, t);
      }
      encode(e) {
        "boolean" == typeof e && (e *= 1), super.encode(e);
      }
    }
    r.Boolean = L;
    class N extends s {
      constructor(e, t) {
        if (
          !((e instanceof u && e.isCount()) || (Number.isInteger(e) && 0 <= e))
        )
          throw TypeError(
            "length must be positive integer or an unsigned integer ExternalLayout"
          );
        let r = -1;
        e instanceof u || (r = e), super(r, t), (this.length = e);
      }
      getSpan(e, t) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, t)), r;
      }
      decode(e, t = 0) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, t)), o(e).slice(t, t + r);
      }
      encode(e, t, r) {
        let n = this.length;
        if (
          (this.length instanceof u && (n = e.length),
          !(e instanceof Uint8Array && n === e.length))
        )
          throw TypeError(
            a("Blob.encode", this) +
              " requires (length " +
              n +
              ") Uint8Array as src"
          );
        if (r + n > t.length) throw RangeError("encoding overruns Uint8Array");
        let i = o(e);
        return (
          o(t).write(i.toString("hex"), r, n, "hex"),
          this.length instanceof u && this.length.encode(n, t, r),
          n
        );
      }
    }
    r.Blob = N;
    class U extends s {
      constructor(e) {
        super(-1, e);
      }
      getSpan(e, t = 0) {
        i(e);
        let r = t;
        for (; r < e.length && 0 !== e[r]; ) r += 1;
        return 1 + r - t;
      }
      decode(e, t = 0) {
        let r = this.getSpan(e, t);
        return o(e)
          .slice(t, t + r - 1)
          .toString("utf-8");
      }
      encode(e, t, r = 0) {
        "string" != typeof e && (e = String(e));
        let i = n.Buffer.from(e, "utf8"),
          s = i.length;
        if (r + s > t.length) throw RangeError("encoding overruns Buffer");
        let a = o(t);
        return i.copy(a, r), (a[r + s] = 0), s + 1;
      }
    }
    r.CString = U;
    class M extends s {
      constructor(e, t) {
        if (
          ("string" == typeof e && void 0 === t && ((t = e), (e = void 0)),
          void 0 === e)
        )
          e = -1;
        else if (!Number.isInteger(e))
          throw TypeError("maxSpan must be an integer");
        super(-1, t), (this.maxSpan = e);
      }
      getSpan(e, t = 0) {
        return i(e), e.length - t;
      }
      decode(e, t = 0) {
        let r = this.getSpan(e, t);
        if (0 <= this.maxSpan && this.maxSpan < r)
          throw RangeError("text length exceeds maxSpan");
        return o(e)
          .slice(t, t + r)
          .toString("utf-8");
      }
      encode(e, t, r = 0) {
        "string" != typeof e && (e = String(e));
        let i = n.Buffer.from(e, "utf8"),
          s = i.length;
        if (0 <= this.maxSpan && this.maxSpan < s)
          throw RangeError("text length exceeds maxSpan");
        if (r + s > t.length) throw RangeError("encoding overruns Buffer");
        return i.copy(o(t), r), s;
      }
    }
    r.UTF8 = M;
    class z extends s {
      constructor(e, t) {
        super(0, t), (this.value = e);
      }
      decode(e, t) {
        return this.value;
      }
      encode(e, t, r) {
        return 0;
      }
    }
    (r.Constant = z),
      (r.greedy = (e, t) => new c(e, t)),
      (r.offset = (e, t, r) => new l(e, t, r)),
      (r.u8 = (e) => new d(1, e)),
      (r.u16 = (e) => new d(2, e)),
      (r.u24 = (e) => new d(3, e)),
      (r.u32 = (e) => new d(4, e)),
      (r.u40 = (e) => new d(5, e)),
      (r.u48 = (e) => new d(6, e)),
      (r.nu64 = (e) => new b(e)),
      (r.u16be = (e) => new h(2, e)),
      (r.u24be = (e) => new h(3, e)),
      (r.u32be = (e) => new h(4, e)),
      (r.u40be = (e) => new h(5, e)),
      (r.u48be = (e) => new h(6, e)),
      (r.nu64be = (e) => new m(e)),
      (r.s8 = (e) => new f(1, e)),
      (r.s16 = (e) => new f(2, e)),
      (r.s24 = (e) => new f(3, e)),
      (r.s32 = (e) => new f(4, e)),
      (r.s40 = (e) => new f(5, e)),
      (r.s48 = (e) => new f(6, e)),
      (r.ns64 = (e) => new w(e)),
      (r.s16be = (e) => new p(2, e)),
      (r.s24be = (e) => new p(3, e)),
      (r.s32be = (e) => new p(4, e)),
      (r.s40be = (e) => new p(5, e)),
      (r.s48be = (e) => new p(6, e)),
      (r.ns64be = (e) => new k(e)),
      (r.f32 = (e) => new S(e)),
      (r.f32be = (e) => new v(e)),
      (r.f64 = (e) => new _(e)),
      (r.f64be = (e) => new E(e)),
      (r.struct = (e, t, r) => new A(e, t, r)),
      (r.bits = (e, t, r) => new O(e, t, r)),
      (r.seq = (e, t, r) => new I(e, t, r)),
      (r.union = (e, t, r) => new P(e, t, r)),
      (r.unionLayoutDiscriminator = (e, t) => new R(e, t)),
      (r.blob = (e, t) => new N(e, t)),
      (r.cstr = (e) => new U(e)),
      (r.utf8 = (e, t) => new M(e, t)),
      (r.constant = (e, t) => new z(e, t));
  },
  214303,
  640512,
  770134,
  (e) => {
    "use strict";
    var t,
      r = e.i(44314),
      n = e.i(470525),
      i = e.i(810588),
      o = e.i(526539),
      s = e.i(870948);
    let a = BigInt(0),
      u = BigInt(1),
      c = BigInt(2),
      l = BigInt(8);
    class d {
      constructor(e) {
        this.ep = e;
      }
      static fromBytes(e) {
        (0, o.notImplemented)();
      }
      static fromHex(e) {
        (0, o.notImplemented)();
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      clearCofactor() {
        return this;
      }
      assertValidity() {
        this.ep.assertValidity();
      }
      toAffine(e) {
        return this.ep.toAffine(e);
      }
      toHex() {
        return (0, n.bytesToHex)(this.toBytes());
      }
      toString() {
        return this.toHex();
      }
      isTorsionFree() {
        return !0;
      }
      isSmallOrder() {
        return !1;
      }
      add(e) {
        return this.assertSame(e), this.init(this.ep.add(e.ep));
      }
      subtract(e) {
        return this.assertSame(e), this.init(this.ep.subtract(e.ep));
      }
      multiply(e) {
        return this.init(this.ep.multiply(e));
      }
      multiplyUnsafe(e) {
        return this.init(this.ep.multiplyUnsafe(e));
      }
      double() {
        return this.init(this.ep.double());
      }
      negate() {
        return this.init(this.ep.negate());
      }
      precompute(e, t) {
        return this.init(this.ep.precompute(e, t));
      }
      toRawBytes() {
        return this.toBytes();
      }
    }
    var h = e.i(933795);
    BigInt(0), BigInt(1), BigInt(2);
    let f = BigInt(0),
      p = BigInt(1),
      g = BigInt(2),
      y = BigInt(3),
      b = BigInt(5),
      m = BigInt(8),
      w = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      ),
      k = {
        p: w,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: m,
        a: BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
        ),
        d: BigInt(
          "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
        ),
        Gx: BigInt(
          "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
        ),
        Gy: BigInt(
          "0x6666666666666666666666666666666666666666666666666666666666666658"
        ),
      },
      S = BigInt(
        "19681161376707505956807079304988542015446066515923890162744021073123829784752"
      );
    function v(e, t) {
      var r;
      let n,
        i,
        o,
        a,
        u,
        c,
        l,
        d,
        h,
        f,
        y,
        m,
        k,
        v,
        _ = (0, s.mod)(t * t * t, w),
        E = ((r = e * (0, s.mod)(_ * _ * t, w)),
        (n = BigInt(10)),
        (i = BigInt(20)),
        (o = BigInt(40)),
        (a = BigInt(80)),
        (u = (((r * r) % w) * r) % w),
        (c = ((0, s.pow2)(u, g, w) * u) % w),
        (l = ((0, s.pow2)(c, p, w) * r) % w),
        (d = ((0, s.pow2)(l, b, w) * l) % w),
        (h = ((0, s.pow2)(d, n, w) * d) % w),
        (f = ((0, s.pow2)(h, i, w) * h) % w),
        (y = ((0, s.pow2)(f, o, w) * f) % w),
        (m = ((0, s.pow2)(y, a, w) * y) % w),
        (k = ((0, s.pow2)(m, a, w) * y) % w),
        (v = ((0, s.pow2)(k, n, w) * d) % w),
        { pow_p_5_8: ((0, s.pow2)(v, g, w) * r) % w, b2: u }).pow_p_5_8,
        I = (0, s.mod)(e * _ * E, w),
        A = (0, s.mod)(t * I * I, w),
        x = I,
        R = (0, s.mod)(I * S, w),
        P = A === e,
        B = A === (0, s.mod)(-e, w),
        T = A === (0, s.mod)(-e * S, w);
      return (
        P && (I = x),
        (B || T) && (I = R),
        (0, s.isNegativeLE)(I, w) && (I = (0, s.mod)(-I, w)),
        { isValid: P || B, value: I }
      );
    }
    let _ = (0, s.Field)(k.p, { isLE: !0 }),
      E = (0, s.Field)(k.n, { isLE: !0 }),
      I = (function (e) {
        let t,
          r,
          d,
          h,
          {
            CURVE: f,
            curveOpts: p,
            hash: g,
            eddsaOpts: y,
          } = ((t = {
            a: e.a,
            d: e.d,
            p: e.Fp.ORDER,
            n: e.n,
            h: e.h,
            Gx: e.Gx,
            Gy: e.Gy,
          }),
          (r = {
            Fp: e.Fp,
            Fn: (0, s.Field)(t.n, e.nBitLength, !0),
            uvRatio: e.uvRatio,
          }),
          (d = {
            randomBytes: e.randomBytes,
            adjustScalarBytes: e.adjustScalarBytes,
            domain: e.domain,
            prehash: e.prehash,
            mapToCurve: e.mapToCurve,
          }),
          { CURVE: t, curveOpts: r, hash: e.hash, eddsaOpts: d }),
          b = (function (e, t, r = {}) {
            if ("function" != typeof t)
              throw Error('"hash" function param is required');
            (0, o._validateObject)(
              r,
              {},
              {
                adjustScalarBytes: "function",
                randomBytes: "function",
                domain: "function",
                prehash: "function",
                mapToCurve: "function",
              }
            );
            let { prehash: i } = r,
              { BASE: s, Fp: a, Fn: c } = e,
              l = r.randomBytes || n.randomBytes,
              d = r.adjustScalarBytes || ((e) => e),
              h =
                r.domain ||
                ((e, t, r) => {
                  if (((0, o._abool2)(r, "phflag"), t.length || r))
                    throw Error("Contexts/pre-hash are not supported");
                  return e;
                });
            function f(e) {
              return c.create((0, o.bytesToNumberLE)(e));
            }
            function p(e) {
              var r;
              let n,
                i,
                a,
                u,
                c,
                {
                  head: l,
                  prefix: h,
                  scalar: p,
                } = ((r = e),
                (n = w.secretKey),
                (r = (0, o.ensureBytes)("private key", r, n)),
                (a = d(
                  (i = (0, o.ensureBytes)(
                    "hashed private key",
                    t(r),
                    2 * n
                  )).slice(0, n)
                )),
                (u = i.slice(n, 2 * n)),
                (c = f(a)),
                { head: a, prefix: u, scalar: c }),
                g = s.multiply(p),
                y = g.toBytes();
              return { head: l, prefix: h, scalar: p, point: g, pointBytes: y };
            }
            function g(e) {
              return p(e).pointBytes;
            }
            function y(e = Uint8Array.of(), ...r) {
              return f(
                t(
                  h(
                    (0, n.concatBytes)(...r),
                    (0, o.ensureBytes)("context", e),
                    !!i
                  )
                )
              );
            }
            let b = { zip215: !0 },
              m = a.BYTES,
              w = { secretKey: m, publicKey: m, signature: 2 * m, seed: m };
            function k(e = l(w.seed)) {
              return (0, o._abytes2)(e, w.seed, "seed");
            }
            let S = {
              getExtendedPublicKey: p,
              randomSecretKey: k,
              isValidSecretKey: function (e) {
                return (0, n.isBytes)(e) && e.length === c.BYTES;
              },
              isValidPublicKey: function (t, r) {
                try {
                  return !!e.fromBytes(t, r);
                } catch (e) {
                  return !1;
                }
              },
              toMontgomery(t) {
                let { y: r } = e.fromBytes(t),
                  n = w.publicKey,
                  i = 32 === n;
                if (!i && 57 !== n)
                  throw Error("only defined for 25519 and 448");
                let o = i ? a.div(u + r, u - r) : a.div(r - u, r + u);
                return a.toBytes(o);
              },
              toMontgomerySecret(e) {
                let r = w.secretKey;
                return (
                  (0, o._abytes2)(e, r), d(t(e.subarray(0, r))).subarray(0, r)
                );
              },
              randomPrivateKey: k,
              precompute: (t = 8, r = e.BASE) => r.precompute(t, !1),
            };
            return Object.freeze({
              keygen: function (e) {
                let t = S.randomSecretKey(e);
                return { secretKey: t, publicKey: g(t) };
              },
              getPublicKey: g,
              sign: function (e, t, r = {}) {
                (e = (0, o.ensureBytes)("message", e)), i && (e = i(e));
                let { prefix: a, scalar: u, pointBytes: l } = p(t),
                  d = y(r.context, a, e),
                  h = s.multiply(d).toBytes(),
                  f = y(r.context, h, l, e),
                  g = c.create(d + f * u);
                if (!c.isValid(g)) throw Error("sign failed: invalid s");
                let b = (0, n.concatBytes)(h, c.toBytes(g));
                return (0, o._abytes2)(b, w.signature, "result");
              },
              verify: function (t, r, n, a = b) {
                let u,
                  c,
                  l,
                  { context: d, zip215: h } = a,
                  f = w.signature;
                (t = (0, o.ensureBytes)("signature", t, f)),
                  (r = (0, o.ensureBytes)("message", r)),
                  (n = (0, o.ensureBytes)("publicKey", n, w.publicKey)),
                  void 0 !== h && (0, o._abool2)(h, "zip215"),
                  i && (r = i(r));
                let p = f / 2,
                  g = t.subarray(0, p),
                  m = (0, o.bytesToNumberLE)(t.subarray(p, f));
                try {
                  (u = e.fromBytes(n, h)),
                    (c = e.fromBytes(g, h)),
                    (l = s.multiplyUnsafe(m));
                } catch (e) {
                  return !1;
                }
                if (!h && u.isSmallOrder()) return !1;
                let k = y(d, c.toBytes(), u.toBytes(), r);
                return c
                  .add(u.multiplyUnsafe(k))
                  .subtract(l)
                  .clearCofactor()
                  .is0();
              },
              utils: S,
              Point: e,
              lengths: w,
            });
          })(
            (function (e, t = {}) {
              var r, s;
              let d,
                h,
                f,
                p,
                g,
                y = (0, i._createCurveFields)("edwards", e, t, t.FpFnLE),
                { Fp: b, Fn: m } = y,
                w = y.CURVE,
                { h: k } = w;
              (0, o._validateObject)(t, {}, { uvRatio: "function" });
              let S = c << (BigInt(8 * m.BYTES) - u),
                v =
                  t.uvRatio ||
                  ((e, t) => {
                    try {
                      return { isValid: !0, value: b.sqrt(b.div(e, t)) };
                    } catch (e) {
                      return { isValid: !1, value: a };
                    }
                  });
              if (
                ((r = w.Gx),
                (s = w.Gy),
                (d = b.sqr(r)),
                (h = b.sqr(s)),
                (f = b.add(b.mul(w.a, d), h)),
                (p = b.add(b.ONE, b.mul(w.d, b.mul(d, h)))),
                !b.eql(f, p))
              )
                throw Error("bad curve params: generator point");
              function _(e, t, r = !1) {
                let n = r ? u : a;
                return (0, o.aInRange)("coordinate " + e, t, n, S), t;
              }
              function E(e) {
                if (!(e instanceof x)) throw Error("ExtendedPoint expected");
              }
              let I = (0, o.memoized)((e, t) => {
                  let r,
                    n,
                    { X: i, Y: o, Z: s } = e,
                    c = e.is0();
                  null == t && (t = c ? l : b.inv(s));
                  let d = ((r = i * t), b.create(r)),
                    h = ((n = o * t), b.create(n)),
                    f = b.mul(s, t);
                  if (c) return { x: a, y: u };
                  if (f !== u) throw Error("invZ was invalid");
                  return { x: d, y: h };
                }),
                A = (0, o.memoized)((e) => {
                  let t,
                    r,
                    n,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    l,
                    d,
                    h,
                    { a: f, d: p } = w;
                  if (e.is0()) throw Error("bad point: ZERO");
                  let { X: g, Y: y, Z: m, T: k } = e,
                    S = ((t = g * g), b.create(t)),
                    v = ((r = y * y), b.create(r)),
                    _ = ((n = m * m), b.create(n)),
                    E = ((i = _ * _), b.create(i));
                  if (
                    ((a =
                      _ * ((o = S * f), (s = b.create(o) + v), b.create(s))),
                    b.create(a) !==
                      ((l =
                        E +
                        ((c = p * ((u = S * v), b.create(u))), b.create(c))),
                      b.create(l)))
                  )
                    throw Error("bad point: equation left != right (1)");
                  if (((d = g * y), b.create(d) !== ((h = m * k), b.create(h))))
                    throw Error("bad point: equation left != right (2)");
                  return !0;
                });
              class x {
                constructor(e, t, r, n) {
                  (this.X = _("x", e)),
                    (this.Y = _("y", t)),
                    (this.Z = _("z", r, !0)),
                    (this.T = _("t", n)),
                    Object.freeze(this);
                }
                static CURVE() {
                  return w;
                }
                static fromAffine(e) {
                  let t;
                  if (e instanceof x) throw Error("extended point not allowed");
                  let { x: r, y: n } = e || {};
                  return (
                    _("x", r),
                    _("y", n),
                    new x(r, n, u, ((t = r * n), b.create(t)))
                  );
                }
                static fromBytes(e, t = !1) {
                  let r,
                    n,
                    i,
                    s,
                    c = b.BYTES,
                    { a: l, d } = w;
                  (e = (0, o.copyBytes)((0, o._abytes2)(e, c, "point"))),
                    (0, o._abool2)(t, "zip215");
                  let h = (0, o.copyBytes)(e),
                    f = e[c - 1];
                  h[c - 1] = -129 & f;
                  let p = (0, o.bytesToNumberLE)(h),
                    g = t ? S : b.ORDER;
                  (0, o.aInRange)("point.y", p, a, g);
                  let y = ((r = p * p), b.create(r)),
                    { isValid: m, value: k } = v(
                      ((n = y - u), b.create(n)),
                      ((i = d * y - l), b.create(i))
                    );
                  if (!m) throw Error("bad point: invalid y coordinate");
                  let _ = (k & u) === u,
                    E = (128 & f) != 0;
                  if (!t && k === a && E)
                    throw Error("bad point: x=0 and x_0=1");
                  return (
                    E !== _ && ((s = -k), (k = b.create(s))),
                    x.fromAffine({ x: k, y: p })
                  );
                }
                static fromHex(e, t = !1) {
                  return x.fromBytes((0, o.ensureBytes)("point", e), t);
                }
                get x() {
                  return this.toAffine().x;
                }
                get y() {
                  return this.toAffine().y;
                }
                precompute(e = 8, t = !0) {
                  return R.createCache(this, e), t || this.multiply(c), this;
                }
                assertValidity() {
                  A(this);
                }
                equals(e) {
                  let t, r, n, i;
                  E(e);
                  let { X: o, Y: s, Z: a } = this,
                    { X: u, Y: c, Z: l } = e,
                    d = ((t = o * l), b.create(t)),
                    h = ((r = u * a), b.create(r)),
                    f = ((n = s * l), b.create(n)),
                    p = ((i = c * a), b.create(i));
                  return d === h && f === p;
                }
                is0() {
                  return this.equals(x.ZERO);
                }
                negate() {
                  let e, t;
                  return new x(
                    ((e = -this.X), b.create(e)),
                    this.Y,
                    this.Z,
                    ((t = -this.T), b.create(t))
                  );
                }
                double() {
                  let e,
                    t,
                    r,
                    n,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    d,
                    { a: h } = w,
                    { X: f, Y: p, Z: g } = this,
                    y = ((e = f * f), b.create(e)),
                    m = ((t = p * p), b.create(t)),
                    k = ((n = c * ((r = g * g), b.create(r))), b.create(n)),
                    S = ((i = h * y), b.create(i)),
                    v = f + p,
                    _ = ((o = v * v), (s = b.create(o) - y - m), b.create(s)),
                    E = S + m,
                    I = E - k,
                    A = S - m,
                    R = ((a = _ * I), b.create(a)),
                    P = ((u = E * A), b.create(u)),
                    B = ((l = _ * A), b.create(l));
                  return new x(R, P, ((d = I * E), b.create(d)), B);
                }
                add(e) {
                  let t, r, n, i, o, s, a, u, c, l;
                  E(e);
                  let { a: d, d: h } = w,
                    { X: f, Y: p, Z: g, T: y } = this,
                    { X: m, Y: k, Z: S, T: v } = e,
                    _ = ((t = f * m), b.create(t)),
                    I = ((r = p * k), b.create(r)),
                    A = ((n = y * h * v), b.create(n)),
                    R = ((i = g * S), b.create(i)),
                    P = ((o = (f + p) * (m + k) - _ - I), b.create(o)),
                    B = R - A,
                    T = R + A,
                    O = ((s = I - d * _), b.create(s)),
                    C = ((a = P * B), b.create(a)),
                    L = ((u = T * O), b.create(u)),
                    N = ((c = P * O), b.create(c));
                  return new x(C, L, ((l = B * T), b.create(l)), N);
                }
                subtract(e) {
                  return this.add(e.negate());
                }
                multiply(e) {
                  if (!m.isValidNot0(e))
                    throw Error("invalid scalar: expected 1 <= sc < curve.n");
                  let { p: t, f: r } = R.cached(this, e, (e) =>
                    (0, i.normalizeZ)(x, e)
                  );
                  return (0, i.normalizeZ)(x, [t, r])[0];
                }
                multiplyUnsafe(e, t = x.ZERO) {
                  if (!m.isValid(e))
                    throw Error("invalid scalar: expected 0 <= sc < curve.n");
                  return e === a
                    ? x.ZERO
                    : this.is0() || e === u
                    ? this
                    : R.unsafe(this, e, (e) => (0, i.normalizeZ)(x, e), t);
                }
                isSmallOrder() {
                  return this.multiplyUnsafe(k).is0();
                }
                isTorsionFree() {
                  return R.unsafe(this, w.n).is0();
                }
                toAffine(e) {
                  return I(this, e);
                }
                clearCofactor() {
                  return k === u ? this : this.multiplyUnsafe(k);
                }
                toBytes() {
                  let { x: e, y: t } = this.toAffine(),
                    r = b.toBytes(t);
                  return (r[r.length - 1] |= e & u ? 128 : 0), r;
                }
                toHex() {
                  return (0, n.bytesToHex)(this.toBytes());
                }
                toString() {
                  return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
                }
                get ex() {
                  return this.X;
                }
                get ey() {
                  return this.Y;
                }
                get ez() {
                  return this.Z;
                }
                get et() {
                  return this.T;
                }
                static normalizeZ(e) {
                  return (0, i.normalizeZ)(x, e);
                }
                static msm(e, t) {
                  return (0, i.pippenger)(x, m, e, t);
                }
                _setWindowSize(e) {
                  this.precompute(e);
                }
                toRawBytes() {
                  return this.toBytes();
                }
              }
              (x.BASE = new x(w.Gx, w.Gy, u, ((g = w.Gx * w.Gy), b.create(g)))),
                (x.ZERO = new x(a, u, u, a)),
                (x.Fp = b),
                (x.Fn = m);
              let R = new i.wNAF(x, m.BITS);
              return x.BASE.precompute(8), x;
            })(f, p),
            g,
            y
          );
        return (
          (h = b.Point),
          Object.assign({}, b, {
            ExtendedPoint: h,
            CURVE: e,
            nBitLength: h.Fn.BITS,
            nByteLength: h.Fn.BYTES,
          })
        );
      })({
        ...k,
        Fp: _,
        hash: r.sha512,
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        uvRatio: v,
      }),
      A = (w + y) / m,
      x = _.pow(g, A),
      R = _.sqrt(_.neg(_.ONE)),
      P = (0, s.FpSqrtEven)(_, _.neg(BigInt(486664)));
    (0, h.createHasher)(
      I.Point,
      (e) =>
        (function (e) {
          let t,
            r,
            n,
            i,
            o,
            a,
            u,
            c,
            l,
            d,
            h,
            f,
            y,
            k,
            S,
            v,
            E,
            I,
            A,
            B,
            T,
            O,
            C,
            {
              xMn: L,
              xMd: N,
              yMn: U,
              yMd: M,
            } = ((t = (w - b) / m),
            (r = BigInt(486662)),
            (n = _.sqr(e)),
            (n = _.mul(n, g)),
            (i = _.add(n, _.ONE)),
            (o = _.neg(r)),
            (a = _.sqr(i)),
            (u = _.mul(a, i)),
            (c = _.mul(n, r)),
            (c = _.mul(c, o)),
            (c = _.add(c, a)),
            (c = _.mul(c, o)),
            (l = _.sqr(u)),
            (a = _.sqr(l)),
            (l = _.mul(l, u)),
            (l = _.mul(l, c)),
            (a = _.mul(a, l)),
            (d = _.pow(a, t)),
            (d = _.mul(d, l)),
            (h = _.mul(d, R)),
            (a = _.sqr(d)),
            (a = _.mul(a, u)),
            (f = _.eql(a, c)),
            (y = _.cmov(h, d, f)),
            (k = _.mul(o, n)),
            (S = _.mul(d, e)),
            (S = _.mul(S, x)),
            (v = _.mul(S, R)),
            (E = _.mul(c, n)),
            (a = _.sqr(S)),
            (a = _.mul(a, u)),
            (I = _.eql(a, E)),
            (A = _.cmov(v, S, I)),
            (a = _.sqr(y)),
            (a = _.mul(a, u)),
            (B = _.eql(a, c)),
            (T = _.cmov(k, o, B)),
            (O = _.cmov(A, y, B)),
            (C = _.isOdd(O)),
            {
              xMn: T,
              xMd: i,
              yMn: (O = _.cmov(O, _.neg(O), B !== C)),
              yMd: p,
            }),
            z = _.mul(L, M);
          z = _.mul(z, P);
          let W = _.mul(N, U),
            j = _.sub(L, N),
            D = _.add(L, N),
            K = _.mul(W, D),
            q = _.eql(K, _.ZERO);
          (z = _.cmov(z, _.ZERO, q)),
            (W = _.cmov(W, _.ONE, q)),
            (j = _.cmov(j, _.ONE, q)),
            (D = _.cmov(D, _.ONE, q));
          let [F, V] = (0, s.FpInvertBatch)(_, [W, D], !0);
          return { x: _.mul(z, F), y: _.mul(j, V) };
        })(e[0]),
      {
        DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
        encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
        p: w,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: r.sha512,
      }
    );
    let B = BigInt(
        "25063068953384623474111414158702152701244531502492656460079210482610430750235"
      ),
      T = BigInt(
        "54469307008909316920995813868745141605393597292927456921205312896311721017578"
      ),
      O = BigInt(
        "1159843021668779879193775521855586647937357759715417654439879720876111806838"
      ),
      C = BigInt(
        "40440834346308536858101042469323190826248399146238708352240133220865137265952"
      ),
      L = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ),
      N = (e) => I.Point.Fp.create((0, o.bytesToNumberLE)(e) & L);
    function U(e) {
      let t,
        r,
        n,
        i,
        o,
        a,
        u,
        c,
        l,
        d,
        h,
        f,
        g,
        y,
        b,
        { d: m } = k,
        E = ((t = S * e * e), _.create(t)),
        A = ((r = (E + p) * O), _.create(r)),
        x = BigInt(-1),
        R = ((i = (x - m * E) * ((n = E + m), _.create(n))), _.create(i)),
        { isValid: P, value: T } = v(A, R),
        L = ((o = T * e), _.create(o));
      (0, s.isNegativeLE)(L, w) || ((a = -L), (L = _.create(a))),
        P || (T = L),
        P || (x = E);
      let N = ((u = x * (E - p) * C - R), _.create(u)),
        U = T * T,
        M = ((c = (T + T) * R), _.create(c)),
        z = ((l = N * B), _.create(l)),
        W = ((d = p - U), _.create(d)),
        j = ((h = p + U), _.create(h));
      return new I.Point(
        ((f = M * j), _.create(f)),
        ((g = W * z), _.create(g)),
        ((y = z * j), _.create(y)),
        ((b = M * W), _.create(b))
      );
    }
    class M extends d {
      constructor(e) {
        super(e);
      }
      static fromAffine(e) {
        return new M(I.Point.fromAffine(e));
      }
      assertSame(e) {
        if (!(e instanceof M)) throw Error("RistrettoPoint expected");
      }
      init(e) {
        return new M(e);
      }
      static hashToCurve(e) {
        var t;
        let r, i;
        return (
          (t = (0, o.ensureBytes)("ristrettoHash", e, 64)),
          (0, n.abytes)(t, 64),
          (r = U(N(t.subarray(0, 32)))),
          (i = U(N(t.subarray(32, 64)))),
          new M(r.add(i))
        );
      }
      static fromBytes(e) {
        let t, r, i, a, u, c, l, d, h, g, y, b, m;
        (0, n.abytes)(e, 32);
        let { a: S, d: E } = k,
          A = N(e);
        if (!(0, o.equalBytes)(_.toBytes(A), e) || (0, s.isNegativeLE)(A, w))
          throw Error("invalid ristretto255 encoding 1");
        let x = ((t = A * A), _.create(t)),
          R = ((r = p + S * x), _.create(r)),
          P = ((i = p - S * x), _.create(i)),
          B = ((a = R * R), _.create(a)),
          T = ((u = P * P), _.create(u)),
          O = ((c = S * E * B - T), _.create(c)),
          { isValid: C, value: L } = ((l = O * T), v(p, _.create(l))),
          U = ((d = L * P), _.create(d)),
          z = ((h = L * U * O), _.create(h)),
          W = ((g = (A + A) * U), _.create(g));
        (0, s.isNegativeLE)(W, w) && ((y = -W), (W = _.create(y)));
        let j = ((b = R * z), _.create(b)),
          D = ((m = W * j), _.create(m));
        if (!C || (0, s.isNegativeLE)(D, w) || j === f)
          throw Error("invalid ristretto255 encoding 2");
        return new M(new I.Point(W, j, p, D));
      }
      static fromHex(e) {
        return M.fromBytes((0, o.ensureBytes)("ristrettoHex", e, 32));
      }
      static msm(e, t) {
        return (0, i.pippenger)(M, I.Point.Fn, e, t);
      }
      toBytes() {
        let e,
          t,
          r,
          n,
          i,
          o,
          a,
          u,
          c,
          l,
          d,
          h,
          f,
          { X: g, Y: y, Z: b, T: m } = this.ep,
          k =
            ((e = b + y),
            (r = _.create(e) * ((t = b - y), _.create(t))),
            _.create(r)),
          E = ((n = g * y), _.create(n)),
          { value: I } =
            ((o = k * ((i = E * E), _.create(i))), v(p, _.create(o))),
          A = ((a = I * k), _.create(a)),
          x = ((u = I * E), _.create(u)),
          R = ((c = A * x * m), _.create(c));
        if ((0, s.isNegativeLE)(m * R, w)) {
          let e,
            t,
            r = ((e = y * S), _.create(e)),
            n = ((t = g * S), _.create(t));
          (g = r), (y = n), (f = _.create(A * T));
        } else f = x;
        (0, s.isNegativeLE)(g * R, w) && ((l = -y), (y = _.create(l)));
        let P = ((d = (b - y) * f), _.create(d));
        return (
          (0, s.isNegativeLE)(P, w) && ((h = -P), (P = _.create(h))),
          _.toBytes(P)
        );
      }
      equals(e) {
        let t, r, n, i;
        this.assertSame(e);
        let { X: o, Y: s } = this.ep,
          { X: a, Y: u } = e.ep,
          c = ((t = o * u), _.create(t) === ((r = s * a), _.create(r))),
          l = ((n = s * u), _.create(n) === ((i = o * a), _.create(i)));
        return c || l;
      }
      is0() {
        return this.equals(M.ZERO);
      }
    }
    function z([e, t]) {
      return `${e}=${(function e(t) {
        return Array.isArray(t)
          ? "%5B" + t.map(e).join("%2C%20") + "%5D"
          : "bigint" == typeof t
          ? `${t}n`
          : encodeURIComponent(
              String(
                null != t && null === Object.getPrototypeOf(t) ? { ...t } : t
              )
            );
      })(t)}`;
    }
    (M.BASE = new M(I.Point.BASE)),
      (M.ZERO = new M(I.Point.ZERO)),
      (M.Fp = _),
      (M.Fn = E),
      e.s(["ed25519", 0, I], 214303),
      e.i(247167);
    var W = class extends Error {
      cause = this.cause;
      context;
      constructor(...[e, t]) {
        let r, n;
        if (t) {
          const { cause: e, ...i } = t;
          e && (n = { cause: e }), Object.keys(i).length > 0 && (r = i);
        }
        super(
          (function (e, t = {}) {
            {
              let r = `Solana error #${e}; Decode this error by running \`npx @solana/errors decode -- ${e}`;
              return (
                Object.keys(t).length &&
                  (r += ` '${btoa(Object.entries(t).map(z).join("&"))}'`),
                `${r}\``
              );
            }
          })(e, r),
          n
        ),
          (this.context = { __code: e, ...r }),
          (this.name = "SolanaError");
      }
    };
    function j(e) {
      return "fixedSize" in e && "number" == typeof e.fixedSize;
    }
    var D =
      (((t = D || {})[(t.Little = 0)] = "Little"), (t[(t.Big = 1)] = "Big"), t);
    function K(e) {
      return e?.endian !== 1;
    }
    var q = (e = {}) => {
        var t, r;
        return Object.freeze({
          ...(r = {
            fixedSize: (t = {
              config: e,
              name: "u64",
              range: [0n, BigInt("0xffffffffffffffff")],
              set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
              size: 8,
            }).size,
            write(e, r, n) {
              t.range &&
                (function (e, t, r, n) {
                  if (n < t || n > r)
                    throw new W(8078011, {
                      codecDescription: e,
                      max: r,
                      min: t,
                      value: n,
                    });
                })(t.name, t.range[0], t.range[1], e);
              let i = new ArrayBuffer(t.size);
              return (
                t.set(new DataView(i), e, K(t.config)),
                r.set(new Uint8Array(i), n),
                n + t.size
              );
            },
          }),
          encode: (e) => {
            let t = new Uint8Array(
              "fixedSize" in r ? r.fixedSize : r.getSizeFromValue(e)
            );
            return r.write(e, t, 0), t;
          },
        });
      },
      F = (e = {}) =>
        (function (e, t) {
          if (j(e) !== j(t)) throw new W(8078004);
          if (j(e) && j(t) && e.fixedSize !== t.fixedSize)
            throw new W(8078005, {
              decoderFixedSize: t.fixedSize,
              encoderFixedSize: e.fixedSize,
            });
          if (!j(e) && !j(t) && e.maxSize !== t.maxSize)
            throw new W(8078006, {
              decoderMaxSize: t.maxSize,
              encoderMaxSize: e.maxSize,
            });
          return {
            ...t,
            ...e,
            decode: t.decode,
            encode: e.encode,
            read: t.read,
            write: e.write,
          };
        })(
          q(e),
          ((e = {}) => {
            var t, r;
            return Object.freeze({
              ...(r = {
                fixedSize: (t = {
                  config: e,
                  get: (e, t) => e.getBigUint64(0, t),
                  name: "u64",
                  size: 8,
                }).size,
                read(e, r = 0) {
                  var n, i, o;
                  let s, a;
                  !(function (e, t, r = 0) {
                    if (t.length - r <= 0)
                      throw new W(8078e3, { codecDescription: e });
                  })(t.name, e, r),
                    (function (e, t, r, n = 0) {
                      let i = r.length - n;
                      if (i < t)
                        throw new W(8078001, {
                          bytesLength: i,
                          codecDescription: e,
                          expected: t,
                        });
                    })(t.name, t.size, e, r);
                  let u = new DataView(
                    ((n = e),
                    (i = r),
                    (o = t.size),
                    (s = n.byteOffset + (i ?? 0)),
                    (a = o ?? n.byteLength),
                    n.buffer.slice(s, s + a))
                  );
                  return [t.get(u, K(t.config)), r + t.size];
                },
              }),
              decode: (e, t = 0) => r.read(e, t)[0],
            });
          })(e)
        );
    e.s(["getU64Codec", () => F, "getU64Encoder", () => q], 640512);
    class V extends TypeError {
      constructor(e, t) {
        let r;
        const { message: n, explanation: i, ...o } = e,
          { path: s } = e,
          a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
        super(i ?? a),
          null != i && (this.cause = a),
          Object.assign(this, o),
          (this.name = this.constructor.name),
          (this.failures = () => r ?? (r = [e, ...t()]));
      }
    }
    function $(e) {
      return "object" == typeof e && null != e;
    }
    function H(e) {
      return $(e) && !Array.isArray(e);
    }
    function G(e) {
      return "symbol" == typeof e
        ? e.toString()
        : "string" == typeof e
        ? JSON.stringify(e)
        : `${e}`;
    }
    function* J(e, t, r, n) {
      var i;
      for (let o of (($((i = e)) && "function" == typeof i[Symbol.iterator]) ||
        (e = [e]),
      e)) {
        let e = (function (e, t, r, n) {
          if (!0 === e) return;
          !1 === e ? (e = {}) : "string" == typeof e && (e = { message: e });
          let { path: i, branch: o } = t,
            { type: s } = r,
            {
              refinement: a,
              message: u = `Expected a value of type \`${s}\`${
                a ? ` with refinement \`${a}\`` : ""
              }, but received: \`${G(n)}\``,
            } = e;
          return {
            value: n,
            type: s,
            refinement: a,
            key: i[i.length - 1],
            path: i,
            branch: o,
            ...e,
            message: u,
          };
        })(o, t, r, n);
        e && (yield e);
      }
    }
    function* Y(e, t, r = {}) {
      let { path: n = [], branch: i = [e], coerce: o = !1, mask: s = !1 } = r,
        a = { path: n, branch: i, mask: s };
      o && (e = t.coercer(e, a));
      let u = "valid";
      for (let n of t.validator(e, a))
        (n.explanation = r.message), (u = "not_valid"), yield [n, void 0];
      for (let [c, l, d] of t.entries(e, a))
        for (let t of Y(l, d, {
          path: void 0 === c ? n : [...n, c],
          branch: void 0 === c ? i : [...i, l],
          coerce: o,
          mask: s,
          message: r.message,
        }))
          t[0]
            ? ((u = null != t[0].refinement ? "not_refined" : "not_valid"),
              yield [t[0], void 0])
            : o &&
              ((l = t[1]),
              void 0 === c
                ? (e = l)
                : e instanceof Map
                ? e.set(c, l)
                : e instanceof Set
                ? e.add(l)
                : $(e) && (void 0 !== l || c in e) && (e[c] = l));
      if ("not_valid" !== u)
        for (let n of t.refiner(e, a))
          (n.explanation = r.message), (u = "not_refined"), yield [n, void 0];
      "valid" === u && (yield [void 0, e]);
    }
    class X {
      constructor(e) {
        const {
          type: t,
          schema: r,
          validator: n,
          refiner: i,
          coercer: o = (e) => e,
          entries: s = function* () {},
        } = e;
        (this.type = t),
          (this.schema = r),
          (this.entries = s),
          (this.coercer = o),
          n
            ? (this.validator = (e, t) => J(n(e, t), t, this, e))
            : (this.validator = () => []),
          i
            ? (this.refiner = (e, t) => J(i(e, t), t, this, e))
            : (this.refiner = () => []);
      }
      assert(e, t) {
        return Z(e, this, t);
      }
      create(e, t) {
        return Q(e, this, t);
      }
      is(e) {
        var t, r;
        return (t = e), (r = this), !ee(t, r)[0];
      }
      mask(e, t) {
        var r = e,
          n = this,
          i = t;
        let o = ee(r, n, { coerce: !0, mask: !0, message: i });
        if (!o[0]) return o[1];
        throw o[0];
      }
      validate(e, t = {}) {
        return ee(e, this, t);
      }
    }
    function Z(e, t, r) {
      let n = ee(e, t, { message: r });
      if (n[0]) throw n[0];
    }
    function Q(e, t, r) {
      let n = ee(e, t, { coerce: !0, message: r });
      if (!n[0]) return n[1];
      throw n[0];
    }
    function ee(e, t, r = {}) {
      let n = Y(e, t, r),
        i = (function (e) {
          let { done: t, value: r } = e.next();
          return t ? void 0 : r;
        })(n);
      return i[0]
        ? [
            new V(i[0], function* () {
              for (let e of n) e[0] && (yield e[0]);
            }),
            void 0,
          ]
        : [void 0, i[1]];
    }
    function et(e, t) {
      return new X({ type: e, schema: null, validator: t });
    }
    function er() {
      return et("any", () => !0);
    }
    function en(e) {
      return new X({
        type: "array",
        schema: e,
        *entries(t) {
          if (e && Array.isArray(t))
            for (let [r, n] of t.entries()) yield [r, n, e];
        },
        coercer: (e) => (Array.isArray(e) ? e.slice() : e),
        validator: (e) =>
          Array.isArray(e) || `Expected an array value, but received: ${G(e)}`,
      });
    }
    function ei() {
      return et("boolean", (e) => "boolean" == typeof e);
    }
    function eo(e) {
      return et(
        "instance",
        (t) =>
          t instanceof e ||
          `Expected a \`${e.name}\` instance, but received: ${G(t)}`
      );
    }
    function es(e) {
      let t = G(e),
        r = typeof e;
      return new X({
        type: "literal",
        schema: "string" === r || "number" === r || "boolean" === r ? e : null,
        validator: (r) =>
          r === e || `Expected the literal \`${t}\`, but received: ${G(r)}`,
      });
    }
    function ea(e) {
      return new X({
        ...e,
        validator: (t, r) => null === t || e.validator(t, r),
        refiner: (t, r) => null === t || e.refiner(t, r),
      });
    }
    function eu() {
      return et(
        "number",
        (e) =>
          ("number" == typeof e && !isNaN(e)) ||
          `Expected a number, but received: ${G(e)}`
      );
    }
    function ec(e) {
      return new X({
        ...e,
        validator: (t, r) => void 0 === t || e.validator(t, r),
        refiner: (t, r) => void 0 === t || e.refiner(t, r),
      });
    }
    function el(e, t) {
      return new X({
        type: "record",
        schema: null,
        *entries(r) {
          if ($(r))
            for (let n in r) {
              let i = r[n];
              yield [n, n, e], yield [n, i, t];
            }
        },
        validator: (e) => H(e) || `Expected an object, but received: ${G(e)}`,
        coercer: (e) => (H(e) ? { ...e } : e),
      });
    }
    function ed() {
      return et(
        "string",
        (e) =>
          "string" == typeof e || `Expected a string, but received: ${G(e)}`
      );
    }
    function eh(e) {
      let t = et("never", () => !1);
      return new X({
        type: "tuple",
        schema: null,
        *entries(r) {
          if (Array.isArray(r)) {
            let n = Math.max(e.length, r.length);
            for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
          }
        },
        validator: (e) =>
          Array.isArray(e) || `Expected an array, but received: ${G(e)}`,
        coercer: (e) => (Array.isArray(e) ? e.slice() : e),
      });
    }
    function ef(e) {
      let t = Object.keys(e);
      return new X({
        type: "type",
        schema: e,
        *entries(r) {
          if ($(r)) for (let n of t) yield [n, r[n], e[n]];
        },
        validator: (e) => H(e) || `Expected an object, but received: ${G(e)}`,
        coercer: (e) => (H(e) ? { ...e } : e),
      });
    }
    function ep(e) {
      let t = e.map((e) => e.type).join(" | ");
      return new X({
        type: "union",
        schema: null,
        coercer(t, r) {
          for (let n of e) {
            let [e, i] = n.validate(t, { coerce: !0, mask: r.mask });
            if (!e) return i;
          }
          return t;
        },
        validator(r, n) {
          let i = [];
          for (let t of e) {
            let [...e] = Y(r, t, n),
              [o] = e;
            if (!o[0]) return [];
            for (let [t] of e) t && i.push(t);
          }
          return [
            `Expected the value to satisfy a union of \`${t}\`, but received: ${G(
              r
            )}`,
            ...i,
          ];
        },
      });
    }
    function eg() {
      return et("unknown", () => !0);
    }
    function ey(e, t, r) {
      return new X({
        ...e,
        coercer: (n, i) =>
          ee(n, t)[0] ? e.coercer(n, i) : e.coercer(r(n, i), i),
      });
    }
    e.s(
      [
        "any",
        () => er,
        "array",
        () => en,
        "assert",
        () => Z,
        "boolean",
        () => ei,
        "coerce",
        () => ey,
        "create",
        () => Q,
        "instance",
        () => eo,
        "literal",
        () => es,
        "nullable",
        () => ea,
        "number",
        () => eu,
        "optional",
        () => ec,
        "record",
        () => el,
        "string",
        () => ed,
        "tuple",
        () => eh,
        "type",
        () => ef,
        "union",
        () => ep,
        "unknown",
        () => eg,
      ],
      770134
    );
  },
  637342,
  (e) => {
    "use strict";
    e.s([], 748636), e.i(748636);
    var t,
      r,
      n = e.i(565274),
      i = e.i(165704),
      o = 0,
      s = 0,
      a = e.i(663110);
    let u = function (e) {
      if (!(0, a.default)(e)) throw TypeError("Invalid UUID");
      var t,
        r = new Uint8Array(16);
      return (
        (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
        (r[1] = (t >>> 16) & 255),
        (r[2] = (t >>> 8) & 255),
        (r[3] = 255 & t),
        (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
        (r[5] = 255 & t),
        (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
        (r[7] = 255 & t),
        (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
        (r[9] = 255 & t),
        (r[10] = ((t = parseInt(e.slice(24, 36), 16)) / 0x10000000000) & 255),
        (r[11] = (t / 0x100000000) & 255),
        (r[12] = (t >>> 24) & 255),
        (r[13] = (t >>> 16) & 255),
        (r[14] = (t >>> 8) & 255),
        (r[15] = 255 & t),
        r
      );
    };
    function c(e, t, r) {
      function n(e, n, o, s) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              e = unescape(encodeURIComponent(e));
              for (var t = [], r = 0; r < e.length; ++r)
                t.push(e.charCodeAt(r));
              return t;
            })(e)),
          "string" == typeof n && (n = u(n)),
          16 !== n.length)
        )
          throw TypeError(
            "Namespace must be array-like (16 iterable integer values, 0-255)"
          );
        var a = new Uint8Array(16 + e.length);
        if (
          (a.set(n),
          a.set(e, n.length),
          ((a = r(a))[6] = (15 & a[6]) | t),
          (a[8] = (63 & a[8]) | 128),
          o)
        ) {
          s = s || 0;
          for (var c = 0; c < 16; ++c) o[s + c] = a[c];
          return o;
        }
        return (0, i.default)(a);
      }
      try {
        n.name = e;
      } catch (e) {}
      return (
        (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
        (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
        n
      );
    }
    function l(e) {
      return (((e + 64) >>> 9) << 4) + 14 + 1;
    }
    function d(e, t) {
      var r = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    function h(e, t, r, n, i, o) {
      var s;
      return d(((s = d(d(t, e), d(n, o))) << i) | (s >>> (32 - i)), r);
    }
    function f(e, t, r, n, i, o, s) {
      return h((t & r) | (~t & n), e, t, i, o, s);
    }
    function p(e, t, r, n, i, o, s) {
      return h((t & n) | (r & ~n), e, t, i, o, s);
    }
    function g(e, t, r, n, i, o, s) {
      return h(t ^ r ^ n, e, t, i, o, s);
    }
    function y(e, t, r, n, i, o, s) {
      return h(r ^ (t | ~n), e, t, i, o, s);
    }
    var b = c("v3", 48, function (e) {
        if ("string" == typeof e) {
          var t = unescape(encodeURIComponent(e));
          e = new Uint8Array(t.length);
          for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r);
        }
        return (function (e) {
          for (
            var t = [], r = 32 * e.length, n = "0123456789abcdef", i = 0;
            i < r;
            i += 8
          ) {
            var o = (e[i >> 5] >>> i % 32) & 255,
              s = parseInt(n.charAt((o >>> 4) & 15) + n.charAt(15 & o), 16);
            t.push(s);
          }
          return t;
        })(
          (function (e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[l(t) - 1] = t);
            for (
              var r = 0x67452301,
                n = -0x10325477,
                i = -0x67452302,
                o = 0x10325476,
                s = 0;
              s < e.length;
              s += 16
            ) {
              var a = r,
                u = n,
                c = i,
                h = o;
              (r = f(r, n, i, o, e[s], 7, -0x28955b88)),
                (o = f(o, r, n, i, e[s + 1], 12, -0x173848aa)),
                (i = f(i, o, r, n, e[s + 2], 17, 0x242070db)),
                (n = f(n, i, o, r, e[s + 3], 22, -0x3e423112)),
                (r = f(r, n, i, o, e[s + 4], 7, -0xa83f051)),
                (o = f(o, r, n, i, e[s + 5], 12, 0x4787c62a)),
                (i = f(i, o, r, n, e[s + 6], 17, -0x57cfb9ed)),
                (n = f(n, i, o, r, e[s + 7], 22, -0x2b96aff)),
                (r = f(r, n, i, o, e[s + 8], 7, 0x698098d8)),
                (o = f(o, r, n, i, e[s + 9], 12, -0x74bb0851)),
                (i = f(i, o, r, n, e[s + 10], 17, -42063)),
                (n = f(n, i, o, r, e[s + 11], 22, -0x76a32842)),
                (r = f(r, n, i, o, e[s + 12], 7, 0x6b901122)),
                (o = f(o, r, n, i, e[s + 13], 12, -0x2678e6d)),
                (i = f(i, o, r, n, e[s + 14], 17, -0x5986bc72)),
                (n = f(n, i, o, r, e[s + 15], 22, 0x49b40821)),
                (r = p(r, n, i, o, e[s + 1], 5, -0x9e1da9e)),
                (o = p(o, r, n, i, e[s + 6], 9, -0x3fbf4cc0)),
                (i = p(i, o, r, n, e[s + 11], 14, 0x265e5a51)),
                (n = p(n, i, o, r, e[s], 20, -0x16493856)),
                (r = p(r, n, i, o, e[s + 5], 5, -0x29d0efa3)),
                (o = p(o, r, n, i, e[s + 10], 9, 0x2441453)),
                (i = p(i, o, r, n, e[s + 15], 14, -0x275e197f)),
                (n = p(n, i, o, r, e[s + 4], 20, -0x182c0438)),
                (r = p(r, n, i, o, e[s + 9], 5, 0x21e1cde6)),
                (o = p(o, r, n, i, e[s + 14], 9, -0x3cc8f82a)),
                (i = p(i, o, r, n, e[s + 3], 14, -0xb2af279)),
                (n = p(n, i, o, r, e[s + 8], 20, 0x455a14ed)),
                (r = p(r, n, i, o, e[s + 13], 5, -0x561c16fb)),
                (o = p(o, r, n, i, e[s + 2], 9, -0x3105c08)),
                (i = p(i, o, r, n, e[s + 7], 14, 0x676f02d9)),
                (n = p(n, i, o, r, e[s + 12], 20, -0x72d5b376)),
                (r = g(r, n, i, o, e[s + 5], 4, -378558)),
                (o = g(o, r, n, i, e[s + 8], 11, -0x788e097f)),
                (i = g(i, o, r, n, e[s + 11], 16, 0x6d9d6122)),
                (n = g(n, i, o, r, e[s + 14], 23, -0x21ac7f4)),
                (r = g(r, n, i, o, e[s + 1], 4, -0x5b4115bc)),
                (o = g(o, r, n, i, e[s + 4], 11, 0x4bdecfa9)),
                (i = g(i, o, r, n, e[s + 7], 16, -0x944b4a0)),
                (n = g(n, i, o, r, e[s + 10], 23, -0x41404390)),
                (r = g(r, n, i, o, e[s + 13], 4, 0x289b7ec6)),
                (o = g(o, r, n, i, e[s], 11, -0x155ed806)),
                (i = g(i, o, r, n, e[s + 3], 16, -0x2b10cf7b)),
                (n = g(n, i, o, r, e[s + 6], 23, 0x4881d05)),
                (r = g(r, n, i, o, e[s + 9], 4, -0x262b2fc7)),
                (o = g(o, r, n, i, e[s + 12], 11, -0x1924661b)),
                (i = g(i, o, r, n, e[s + 15], 16, 0x1fa27cf8)),
                (n = g(n, i, o, r, e[s + 2], 23, -0x3b53a99b)),
                (r = y(r, n, i, o, e[s], 6, -0xbd6ddbc)),
                (o = y(o, r, n, i, e[s + 7], 10, 0x432aff97)),
                (i = y(i, o, r, n, e[s + 14], 15, -0x546bdc59)),
                (n = y(n, i, o, r, e[s + 5], 21, -0x36c5fc7)),
                (r = y(r, n, i, o, e[s + 12], 6, 0x655b59c3)),
                (o = y(o, r, n, i, e[s + 3], 10, -0x70f3336e)),
                (i = y(i, o, r, n, e[s + 10], 15, -1051523)),
                (n = y(n, i, o, r, e[s + 1], 21, -0x7a7ba22f)),
                (r = y(r, n, i, o, e[s + 8], 6, 0x6fa87e4f)),
                (o = y(o, r, n, i, e[s + 15], 10, -0x1d31920)),
                (i = y(i, o, r, n, e[s + 6], 15, -0x5cfebcec)),
                (n = y(n, i, o, r, e[s + 13], 21, 0x4e0811a1)),
                (r = y(r, n, i, o, e[s + 4], 6, -0x8ac817e)),
                (o = y(o, r, n, i, e[s + 11], 10, -0x42c50dcb)),
                (i = y(i, o, r, n, e[s + 2], 15, 0x2ad7d2bb)),
                (n = y(n, i, o, r, e[s + 9], 21, -0x14792c6f)),
                (r = d(r, a)),
                (n = d(n, u)),
                (i = d(i, c)),
                (o = d(o, h));
            }
            return [r, n, i, o];
          })(
            (function (e) {
              if (0 === e.length) return [];
              for (
                var t = 8 * e.length, r = new Uint32Array(l(t)), n = 0;
                n < t;
                n += 8
              )
                r[n >> 5] |= (255 & e[n / 8]) << n % 32;
              return r;
            })(e),
            8 * e.length
          )
        );
      }),
      m = e.i(535825);
    function w(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    var k = c("v5", 80, function (e) {
      var t = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6],
        r = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
      if ("string" == typeof e) {
        var n = unescape(encodeURIComponent(e));
        e = [];
        for (var i = 0; i < n.length; ++i) e.push(n.charCodeAt(i));
      } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
      e.push(128);
      for (
        var o = Math.ceil((e.length / 4 + 2) / 16), s = Array(o), a = 0;
        a < o;
        ++a
      ) {
        for (var u = new Uint32Array(16), c = 0; c < 16; ++c)
          u[c] =
            (e[64 * a + 4 * c] << 24) |
            (e[64 * a + 4 * c + 1] << 16) |
            (e[64 * a + 4 * c + 2] << 8) |
            e[64 * a + 4 * c + 3];
        s[a] = u;
      }
      (s[o - 1][14] = ((e.length - 1) * 8) / 0x100000000),
        (s[o - 1][14] = Math.floor(s[o - 1][14])),
        (s[o - 1][15] = ((e.length - 1) * 8) | 0);
      for (var l = 0; l < o; ++l) {
        for (var d = new Uint32Array(80), h = 0; h < 16; ++h) d[h] = s[l][h];
        for (var f = 16; f < 80; ++f)
          d[f] = w(d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16], 1);
        for (
          var p = r[0], g = r[1], y = r[2], b = r[3], m = r[4], k = 0;
          k < 80;
          ++k
        ) {
          var S = Math.floor(k / 20),
            v =
              (w(p, 5) +
                (function (e, t, r, n) {
                  switch (e) {
                    case 0:
                      return (t & r) ^ (~t & n);
                    case 1:
                    case 3:
                      return t ^ r ^ n;
                    case 2:
                      return (t & r) ^ (t & n) ^ (r & n);
                  }
                })(S, g, y, b) +
                m +
                t[S] +
                d[k]) >>>
              0;
          (m = b), (b = y), (y = w(g, 30) >>> 0), (g = p), (p = v);
        }
        (r[0] = (r[0] + p) >>> 0),
          (r[1] = (r[1] + g) >>> 0),
          (r[2] = (r[2] + y) >>> 0),
          (r[3] = (r[3] + b) >>> 0),
          (r[4] = (r[4] + m) >>> 0);
      }
      return [
        (r[0] >> 24) & 255,
        (r[0] >> 16) & 255,
        (r[0] >> 8) & 255,
        255 & r[0],
        (r[1] >> 24) & 255,
        (r[1] >> 16) & 255,
        (r[1] >> 8) & 255,
        255 & r[1],
        (r[2] >> 24) & 255,
        (r[2] >> 16) & 255,
        (r[2] >> 8) & 255,
        255 & r[2],
        (r[3] >> 24) & 255,
        (r[3] >> 16) & 255,
        (r[3] >> 8) & 255,
        255 & r[3],
        (r[4] >> 24) & 255,
        (r[4] >> 16) & 255,
        (r[4] >> 8) & 255,
        255 & r[4],
      ];
    });
    e.s(
      [
        "NIL",
        0,
        "00000000-0000-0000-0000-000000000000",
        "parse",
        0,
        u,
        "stringify",
        () => i.default,
        "v1",
        0,
        function (e, a, u) {
          var c = (a && u) || 0,
            l = a || Array(16),
            d = (e = e || {}).node || t,
            h = void 0 !== e.clockseq ? e.clockseq : r;
          if (null == d || null == h) {
            var f = e.random || (e.rng || n.default)();
            null == d && (d = t = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]),
              null == h && (h = r = ((f[6] << 8) | f[7]) & 16383);
          }
          var p = void 0 !== e.msecs ? e.msecs : Date.now(),
            g = void 0 !== e.nsecs ? e.nsecs : s + 1,
            y = p - o + (g - s) / 1e4;
          if (
            (y < 0 && void 0 === e.clockseq && (h = (h + 1) & 16383),
            (y < 0 || p > o) && void 0 === e.nsecs && (g = 0),
            g >= 1e4)
          )
            throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (o = p), (s = g), (r = h);
          var b = ((0xfffffff & (p += 122192928e5)) * 1e4 + g) % 0x100000000;
          (l[c++] = (b >>> 24) & 255),
            (l[c++] = (b >>> 16) & 255),
            (l[c++] = (b >>> 8) & 255),
            (l[c++] = 255 & b);
          var m = ((p / 0x100000000) * 1e4) & 0xfffffff;
          (l[c++] = (m >>> 8) & 255),
            (l[c++] = 255 & m),
            (l[c++] = ((m >>> 24) & 15) | 16),
            (l[c++] = (m >>> 16) & 255),
            (l[c++] = (h >>> 8) | 128),
            (l[c++] = 255 & h);
          for (var w = 0; w < 6; ++w) l[c + w] = d[w];
          return a || (0, i.default)(l);
        },
        "v3",
        0,
        b,
        "v4",
        () => m.default,
        "v5",
        0,
        k,
        "validate",
        () => a.default,
        "version",
        0,
        function (e) {
          if (!(0, a.default)(e)) throw TypeError("Invalid UUID");
          return parseInt(e.substr(14, 1), 16);
        },
      ],
      637342
    );
  },
  943173,
  (e, t, r) => {
    "use strict";
    let n = e.r(637342).v4;
    t.exports = function (e, t, r, i) {
      if ("string" != typeof e) throw TypeError(e + " must be a string");
      let o = "number" == typeof (i = i || {}).version ? i.version : 2;
      if (1 !== o && 2 !== o) throw TypeError(o + " must be 1 or 2");
      let s = { method: e };
      if ((2 === o && (s.jsonrpc = "2.0"), t)) {
        if ("object" != typeof t && !Array.isArray(t))
          throw TypeError(t + " must be an object, array or omitted");
        s.params = t;
      }
      return (
        void 0 === r
          ? (s.id = (
              "function" == typeof i.generator
                ? i.generator
                : function () {
                    return n();
                  }
            )(s, i))
          : 2 === o && null === r
          ? i.notificationIdNull && (s.id = null)
          : (s.id = r),
        s
      );
    };
  },
  578217,
  (e, t, r) => {
    "use strict";
    let n = e.r(637342).v4,
      i = e.r(943173),
      o = function (e, t) {
        if (!(this instanceof o)) return new o(e, t);
        t || (t = {}),
          (this.options = {
            reviver: void 0 !== t.reviver ? t.reviver : null,
            replacer: void 0 !== t.replacer ? t.replacer : null,
            generator:
              void 0 !== t.generator
                ? t.generator
                : function () {
                    return n();
                  },
            version: void 0 !== t.version ? t.version : 2,
            notificationIdNull:
              "boolean" == typeof t.notificationIdNull && t.notificationIdNull,
          }),
          (this.callServer = e);
      };
    (t.exports = o),
      (o.prototype.request = function (e, t, r, n) {
        let o,
          s = this,
          a = null,
          u = Array.isArray(e) && "function" == typeof t;
        if (1 === this.options.version && u)
          throw TypeError("JSON-RPC 1.0 does not support batching");
        let c = !u && e && "object" == typeof e && "function" == typeof t;
        if (u || c) (n = t), (a = e);
        else {
          "function" == typeof r && ((n = r), (r = void 0));
          let o = "function" == typeof n;
          try {
            a = i(e, t, r, {
              generator: this.options.generator,
              version: this.options.version,
              notificationIdNull: this.options.notificationIdNull,
            });
          } catch (e) {
            if (o) return void n(e);
            throw e;
          }
          if (!o) return a;
        }
        try {
          o = JSON.stringify(a, this.options.replacer);
        } catch (e) {
          n(e);
          return;
        }
        return (
          this.callServer(o, function (e, t) {
            s._parseResponse(e, t, n);
          }),
          a
        );
      }),
      (o.prototype._parseResponse = function (e, t, r) {
        let n;
        if (e) return void r(e);
        if (!t) return void r();
        try {
          n = JSON.parse(t, this.options.reviver);
        } catch (e) {
          r(e);
          return;
        }
        if (3 === r.length)
          if (!Array.isArray(n)) return void r(null, n.error, n.result);
          else {
            let e = function (e) {
              return void 0 !== e.error;
            };
            r(
              null,
              n.filter(e),
              n.filter(function (t) {
                return !e(t);
              })
            );
            return;
          }
        r(null, n);
      });
  },
  87246,
  (e) => {
    "use strict";
    var t = e.i(478492);
    e.s(["EventEmitter", () => t.default]);
  },
  127261,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      i,
      o = e.i(843943),
      s = e.i(214303),
      a = e.i(910490),
      u = e.i(635030),
      c = e.i(280355),
      l = e.i(154119),
      d = e.i(444610),
      h = e.i(640512),
      f = e.i(770134),
      p = e.i(578217);
    e.i(595932);
    var g = e.i(87246),
      y = class extends g.EventEmitter {
        socket;
        constructor(e, t) {
          super(),
            (this.socket = new window.WebSocket(e, t.protocols)),
            (this.socket.onopen = () => this.emit("open")),
            (this.socket.onmessage = (e) => this.emit("message", e.data)),
            (this.socket.onerror = (e) => this.emit("error", e)),
            (this.socket.onclose = (e) => {
              this.emit("close", e.code, e.reason);
            });
        }
        send(e, t, r) {
          let n = r || t;
          try {
            this.socket.send(e), n();
          } catch (e) {
            n(e);
          }
        }
        close(e, t) {
          this.socket.close(e, t);
        }
        addEventListener(e, t, r) {
          this.socket.addEventListener(e, t, r);
        }
      },
      b = class {
        encode(e) {
          return JSON.stringify(e);
        }
        decode(e) {
          return JSON.parse(e);
        }
      },
      m = class extends g.EventEmitter {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(
          e,
          t = "ws://localhost:8080",
          {
            autoconnect: r = !0,
            reconnect: n = !0,
            reconnect_interval: i = 1e3,
            max_reconnects: o = 5,
            ...s
          } = {},
          a,
          u
        ) {
          super(),
            (this.webSocketFactory = e),
            (this.queue = {}),
            (this.rpc_id = 0),
            (this.address = t),
            (this.autoconnect = r),
            (this.ready = !1),
            (this.reconnect = n),
            (this.reconnect_timer_id = void 0),
            (this.reconnect_interval = i),
            (this.max_reconnects = o),
            (this.rest_options = s),
            (this.current_reconnects = 0),
            (this.generate_request_id =
              a ||
              (() =>
                "number" == typeof this.rpc_id
                  ? ++this.rpc_id
                  : Number(this.rpc_id) + 1)),
            u ? (this.dataPack = u) : (this.dataPack = new b()),
            this.autoconnect &&
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
        }
        connect() {
          this.socket ||
            this._connect(this.address, {
              autoconnect: this.autoconnect,
              reconnect: this.reconnect,
              reconnect_interval: this.reconnect_interval,
              max_reconnects: this.max_reconnects,
              ...this.rest_options,
            });
        }
        call(e, t, r, n) {
          return (
            n || "object" != typeof r || ((n = r), (r = null)),
            new Promise((i, o) => {
              if (!this.ready) return o(Error("socket not ready"));
              let s = this.generate_request_id(e, t);
              this.socket.send(
                this.dataPack.encode({
                  jsonrpc: "2.0",
                  method: e,
                  params: t || void 0,
                  id: s,
                }),
                n,
                (e) => {
                  if (e) return o(e);
                  (this.queue[s] = { promise: [i, o] }),
                    r &&
                      (this.queue[s].timeout = setTimeout(() => {
                        delete this.queue[s], o(Error("reply timeout"));
                      }, r));
                }
              );
            })
          );
        }
        async login(e) {
          let t = await this.call("rpc.login", e);
          if (!t) throw Error("authentication failed");
          return t;
        }
        async listMethods() {
          return await this.call("__listMethods");
        }
        notify(e, t) {
          return new Promise((r, n) => {
            if (!this.ready) return n(Error("socket not ready"));
            this.socket.send(
              this.dataPack.encode({ jsonrpc: "2.0", method: e, params: t }),
              (e) => {
                if (e) return n(e);
                r();
              }
            );
          });
        }
        async subscribe(e) {
          "string" == typeof e && (e = [e]);
          let t = await this.call("rpc.on", e);
          if ("string" == typeof e && "ok" !== t[e])
            throw Error(
              "Failed subscribing to an event '" + e + "' with: " + t[e]
            );
          return t;
        }
        async unsubscribe(e) {
          "string" == typeof e && (e = [e]);
          let t = await this.call("rpc.off", e);
          if ("string" == typeof e && "ok" !== t[e])
            throw Error("Failed unsubscribing from an event with: " + t);
          return t;
        }
        close(e, t) {
          this.socket && this.socket.close(e || 1e3, t);
        }
        setAutoReconnect(e) {
          this.reconnect = e;
        }
        setReconnectInterval(e) {
          this.reconnect_interval = e;
        }
        setMaxReconnects(e) {
          this.max_reconnects = e;
        }
        getCurrentReconnects() {
          return this.current_reconnects;
        }
        getMaxReconnects() {
          return this.max_reconnects;
        }
        isReconnecting() {
          return void 0 !== this.reconnect_timer_id;
        }
        willReconnect() {
          return (
            this.reconnect &&
            (0 === this.max_reconnects ||
              this.current_reconnects < this.max_reconnects)
          );
        }
        _connect(e, t) {
          clearTimeout(this.reconnect_timer_id),
            (this.socket = this.webSocketFactory(e, t)),
            this.socket.addEventListener("open", () => {
              (this.ready = !0),
                this.emit("open"),
                (this.current_reconnects = 0);
            }),
            this.socket.addEventListener("message", ({ data: e }) => {
              e instanceof ArrayBuffer && (e = o.Buffer.from(e).toString());
              try {
                e = this.dataPack.decode(e);
              } catch (e) {
                return;
              }
              if (e.notification && this.listeners(e.notification).length) {
                if (!Object.keys(e.params).length)
                  return this.emit(e.notification);
                let t = [e.notification];
                if (e.params.constructor === Object) t.push(e.params);
                else
                  for (let r = 0; r < e.params.length; r++) t.push(e.params[r]);
                return Promise.resolve().then(() => {
                  this.emit.apply(this, t);
                });
              }
              if (!this.queue[e.id])
                return e.method
                  ? Promise.resolve().then(() => {
                      this.emit(e.method, e?.params);
                    })
                  : void 0;
              "error" in e == "result" in e &&
                this.queue[e.id].promise[1](
                  Error(
                    'Server response malformed. Response must include either "result" or "error", but not both.'
                  )
                ),
                this.queue[e.id].timeout &&
                  clearTimeout(this.queue[e.id].timeout),
                e.error
                  ? this.queue[e.id].promise[1](e.error)
                  : this.queue[e.id].promise[0](e.result),
                delete this.queue[e.id];
            }),
            this.socket.addEventListener("error", (e) => this.emit("error", e)),
            this.socket.addEventListener("close", ({ code: r, reason: n }) => {
              this.ready && setTimeout(() => this.emit("close", r, n), 0),
                (this.ready = !1),
                (this.socket = void 0),
                1e3 !== r &&
                  (this.current_reconnects++,
                  this.reconnect &&
                  (this.max_reconnects > this.current_reconnects ||
                    0 === this.max_reconnects)
                    ? (this.reconnect_timer_id = setTimeout(
                        () => this._connect(e, t),
                        this.reconnect_interval
                      ))
                    : this.reconnect &&
                      this.max_reconnects > 0 &&
                      this.current_reconnects >= this.max_reconnects &&
                      setTimeout(
                        () => this.emit("max_reconnects_reached", r, n),
                        1
                      ));
            });
        }
      },
      w = e.i(145535),
      k = e.i(776267);
    let S = s.ed25519.utils.randomPrivateKey,
      v = () => {
        let e = s.ed25519.utils.randomPrivateKey(),
          t = _(e),
          r = new Uint8Array(64);
        return r.set(e), r.set(t, 32), { publicKey: t, secretKey: r };
      },
      _ = s.ed25519.getPublicKey;
    function E(e) {
      try {
        return s.ed25519.ExtendedPoint.fromHex(e), !0;
      } catch {
        return !1;
      }
    }
    let I = (e, t) => s.ed25519.sign(e, t.slice(0, 32)),
      A = s.ed25519.verify,
      x = (e) =>
        o.Buffer.isBuffer(e)
          ? e
          : e instanceof Uint8Array
          ? o.Buffer.from(e.buffer, e.byteOffset, e.byteLength)
          : o.Buffer.from(e);
    class R {
      constructor(e) {
        Object.assign(this, e);
      }
      encode() {
        return o.Buffer.from((0, l.serialize)(B, this));
      }
      static decode(e) {
        return (0, l.deserialize)(B, this, e);
      }
      static decodeUnchecked(e) {
        return (0, l.deserializeUnchecked)(B, this, e);
      }
    }
    class P extends R {
      constructor(e) {
        if ((super(e), (this.enum = ""), 1 !== Object.keys(e).length))
          throw Error("Enum can only take single value");
        Object.keys(e).map((e) => {
          this.enum = e;
        });
      }
    }
    let B = new Map(),
      T = 1;
    class O extends R {
      constructor(e) {
        if (
          (super({}),
          (this._bn = void 0),
          (function (e) {
            return void 0 !== e._bn;
          })(e))
        )
          this._bn = e._bn;
        else {
          if ("string" == typeof e) {
            const t = u.default.decode(e);
            if (32 != t.length) throw Error("Invalid public key input");
            this._bn = new a.default(t);
          } else this._bn = new a.default(e);
          if (this._bn.byteLength() > 32)
            throw Error("Invalid public key input");
        }
      }
      static unique() {
        let e = new O(T);
        return (T += 1), new O(e.toBuffer());
      }
      equals(e) {
        return this._bn.eq(e._bn);
      }
      toBase58() {
        return u.default.encode(this.toBytes());
      }
      toJSON() {
        return this.toBase58();
      }
      toBytes() {
        let e = this.toBuffer();
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      toBuffer() {
        let e = this._bn.toArrayLike(o.Buffer);
        if (32 === e.length) return e;
        let t = o.Buffer.alloc(32);
        return e.copy(t, 32 - e.length), t;
      }
      get [Symbol.toStringTag]() {
        return `PublicKey(${this.toString()})`;
      }
      toString() {
        return this.toBase58();
      }
      static async createWithSeed(e, t, r) {
        let n = o.Buffer.concat([e.toBuffer(), o.Buffer.from(t), r.toBuffer()]);
        return new O((0, c.sha256)(n));
      }
      static createProgramAddressSync(e, t) {
        let r = o.Buffer.alloc(0);
        e.forEach(function (e) {
          if (e.length > 32) throw TypeError("Max seed length exceeded");
          r = o.Buffer.concat([r, x(e)]);
        }),
          (r = o.Buffer.concat([
            r,
            t.toBuffer(),
            o.Buffer.from("ProgramDerivedAddress"),
          ]));
        let n = (0, c.sha256)(r);
        if (E(n)) throw Error("Invalid seeds, address must fall off the curve");
        return new O(n);
      }
      static async createProgramAddress(e, t) {
        return this.createProgramAddressSync(e, t);
      }
      static findProgramAddressSync(e, t) {
        let r,
          n = 255;
        for (; 0 != n; ) {
          try {
            let i = e.concat(o.Buffer.from([n]));
            r = this.createProgramAddressSync(i, t);
          } catch (e) {
            if (e instanceof TypeError) throw e;
            n--;
            continue;
          }
          return [r, n];
        }
        throw Error("Unable to find a viable program address nonce");
      }
      static async findProgramAddress(e, t) {
        return this.findProgramAddressSync(e, t);
      }
      static isOnCurve(e) {
        return E(new O(e).toBytes());
      }
    }
    (O.default = new O("11111111111111111111111111111111")),
      B.set(O, { kind: "struct", fields: [["_bn", "u256"]] });
    class C {
      constructor(e) {
        if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
          const t = x(e);
          if (64 !== e.length) throw Error("bad secret key size");
          (this._publicKey = t.slice(32, 64)),
            (this._secretKey = t.slice(0, 32));
        } else
          (this._secretKey = x(S())), (this._publicKey = x(_(this._secretKey)));
      }
      get publicKey() {
        return new O(this._publicKey);
      }
      get secretKey() {
        return o.Buffer.concat([this._secretKey, this._publicKey], 64);
      }
    }
    let L = new O("BPFLoader1111111111111111111111111111111111");
    class N extends Error {
      constructor(e) {
        super(`Signature ${e} has expired: block height exceeded.`),
          (this.signature = void 0),
          (this.signature = e);
      }
    }
    Object.defineProperty(N.prototype, "name", {
      value: "TransactionExpiredBlockheightExceededError",
    });
    class U extends Error {
      constructor(e, t) {
        super(
          `Transaction was not confirmed in ${t.toFixed(
            2
          )} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
        ),
          (this.signature = void 0),
          (this.signature = e);
      }
    }
    Object.defineProperty(U.prototype, "name", {
      value: "TransactionExpiredTimeoutError",
    });
    class M extends Error {
      constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`),
          (this.signature = void 0),
          (this.signature = e);
      }
    }
    Object.defineProperty(M.prototype, "name", {
      value: "TransactionExpiredNonceInvalidError",
    });
    class z {
      constructor(e, t) {
        (this.staticAccountKeys = void 0),
          (this.accountKeysFromLookups = void 0),
          (this.staticAccountKeys = e),
          (this.accountKeysFromLookups = t);
      }
      keySegments() {
        let e = [this.staticAccountKeys];
        return (
          this.accountKeysFromLookups &&
            (e.push(this.accountKeysFromLookups.writable),
            e.push(this.accountKeysFromLookups.readonly)),
          e
        );
      }
      get(e) {
        for (let t of this.keySegments())
          if (e < t.length) return t[e];
          else e -= t.length;
      }
      get length() {
        return this.keySegments().flat().length;
      }
      compileInstructions(e) {
        if (this.length > 256)
          throw Error("Account index overflow encountered during compilation");
        let t = new Map();
        this.keySegments()
          .flat()
          .forEach((e, r) => {
            t.set(e.toBase58(), r);
          });
        let r = (e) => {
          let r = t.get(e.toBase58());
          if (void 0 === r)
            throw Error(
              "Encountered an unknown instruction account key during compilation"
            );
          return r;
        };
        return e.map((e) => ({
          programIdIndex: r(e.programId),
          accountKeyIndexes: e.keys.map((e) => r(e.pubkey)),
          data: e.data,
        }));
      }
    }
    let W = (e = "publicKey") => d.blob(32, e),
      j = (e = "string") => {
        let t = d.struct(
            [
              d.u32("length"),
              d.u32("lengthPadding"),
              d.blob(d.offset(d.u32(), -8), "chars"),
            ],
            e
          ),
          r = t.decode.bind(t),
          n = t.encode.bind(t);
        return (
          (t.decode = (e, t) => r(e, t).chars.toString()),
          (t.encode = (e, t, r) =>
            n({ chars: o.Buffer.from(e, "utf8") }, t, r)),
          (t.alloc = (e) =>
            d.u32().span + d.u32().span + o.Buffer.from(e, "utf8").length),
          t
        );
      };
    function D(e) {
      let t = 0,
        r = 0;
      for (;;) {
        let n = e.shift();
        if (((t |= (127 & n) << (7 * r)), (r += 1), (128 & n) == 0)) break;
      }
      return t;
    }
    function K(e, t) {
      let r = t;
      for (;;) {
        let t = 127 & r;
        if (0 == (r >>= 7)) {
          e.push(t);
          break;
        }
        (t |= 128), e.push(t);
      }
    }
    function q(e, t) {
      if (!e) throw Error(t || "Assertion failed");
    }
    class F {
      constructor(e, t) {
        (this.payer = void 0),
          (this.keyMetaMap = void 0),
          (this.payer = e),
          (this.keyMetaMap = t);
      }
      static compile(e, t) {
        let r = new Map(),
          n = (e) => {
            let t = e.toBase58(),
              n = r.get(t);
            return (
              void 0 === n &&
                ((n = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                r.set(t, n)),
              n
            );
          },
          i = n(t);
        for (let t of ((i.isSigner = !0), (i.isWritable = !0), e))
          for (let e of ((n(t.programId).isInvoked = !0), t.keys)) {
            let t = n(e.pubkey);
            (t.isSigner ||= e.isSigner), (t.isWritable ||= e.isWritable);
          }
        return new F(t, r);
      }
      getMessageComponents() {
        let e = [...this.keyMetaMap.entries()];
        q(e.length <= 256, "Max static account keys length exceeded");
        let t = e.filter(([, e]) => e.isSigner && e.isWritable),
          r = e.filter(([, e]) => e.isSigner && !e.isWritable),
          n = e.filter(([, e]) => !e.isSigner && e.isWritable),
          i = e.filter(([, e]) => !e.isSigner && !e.isWritable),
          o = {
            numRequiredSignatures: t.length + r.length,
            numReadonlySignedAccounts: r.length,
            numReadonlyUnsignedAccounts: i.length,
          };
        {
          q(t.length > 0, "Expected at least one writable signer key");
          let [e] = t[0];
          q(
            e === this.payer.toBase58(),
            "Expected first writable signer key to be the fee payer"
          );
        }
        return [
          o,
          [
            ...t.map(([e]) => new O(e)),
            ...r.map(([e]) => new O(e)),
            ...n.map(([e]) => new O(e)),
            ...i.map(([e]) => new O(e)),
          ],
        ];
      }
      extractTableLookup(e) {
        let [t, r] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (e) => !e.isSigner && !e.isInvoked && e.isWritable
          ),
          [n, i] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (e) => !e.isSigner && !e.isInvoked && !e.isWritable
          );
        if (0 !== t.length || 0 !== n.length)
          return [
            { accountKey: e.key, writableIndexes: t, readonlyIndexes: n },
            { writable: r, readonly: i },
          ];
      }
      drainKeysFoundInLookupTable(e, t) {
        let r = [],
          n = [];
        for (let [i, o] of this.keyMetaMap.entries())
          if (t(o)) {
            let t = new O(i),
              o = e.findIndex((e) => e.equals(t));
            o >= 0 &&
              (q(o < 256, "Max lookup table index exceeded"),
              r.push(o),
              n.push(t),
              this.keyMetaMap.delete(i));
          }
        return [r, n];
      }
    }
    let V = "Reached end of buffer unexpectedly";
    function $(e) {
      if (0 === e.length) throw Error(V);
      return e.shift();
    }
    function H(e, ...t) {
      let [r] = t;
      if (2 === t.length ? r + (t[1] ?? 0) > e.length : r >= e.length)
        throw Error(V);
      return e.splice(...t);
    }
    class G {
      constructor(e) {
        (this.header = void 0),
          (this.accountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.instructions = void 0),
          (this.indexToProgramIds = new Map()),
          (this.header = e.header),
          (this.accountKeys = e.accountKeys.map((e) => new O(e))),
          (this.recentBlockhash = e.recentBlockhash),
          (this.instructions = e.instructions),
          this.instructions.forEach((e) =>
            this.indexToProgramIds.set(
              e.programIdIndex,
              this.accountKeys[e.programIdIndex]
            )
          );
      }
      get version() {
        return "legacy";
      }
      get staticAccountKeys() {
        return this.accountKeys;
      }
      get compiledInstructions() {
        return this.instructions.map((e) => ({
          programIdIndex: e.programIdIndex,
          accountKeyIndexes: e.accounts,
          data: u.default.decode(e.data),
        }));
      }
      get addressTableLookups() {
        return [];
      }
      getAccountKeys() {
        return new z(this.staticAccountKeys);
      }
      static compile(e) {
        let [t, r] = F.compile(
            e.instructions,
            e.payerKey
          ).getMessageComponents(),
          n = new z(r)
            .compileInstructions(e.instructions)
            .map((e) => ({
              programIdIndex: e.programIdIndex,
              accounts: e.accountKeyIndexes,
              data: u.default.encode(e.data),
            }));
        return new G({
          header: t,
          accountKeys: r,
          recentBlockhash: e.recentBlockhash,
          instructions: n,
        });
      }
      isAccountSigner(e) {
        return e < this.header.numRequiredSignatures;
      }
      isAccountWritable(e) {
        let t = this.header.numRequiredSignatures;
        if (!(e >= this.header.numRequiredSignatures))
          return e < t - this.header.numReadonlySignedAccounts;
        {
          let r =
            this.accountKeys.length -
            t -
            this.header.numReadonlyUnsignedAccounts;
          return e - t < r;
        }
      }
      isProgramId(e) {
        return this.indexToProgramIds.has(e);
      }
      programIds() {
        return [...this.indexToProgramIds.values()];
      }
      nonProgramIds() {
        return this.accountKeys.filter((e, t) => !this.isProgramId(t));
      }
      serialize() {
        let e = this.accountKeys.length,
          t = [];
        K(t, e);
        let r = this.instructions.map((e) => {
            let { accounts: t, programIdIndex: r } = e,
              n = Array.from(u.default.decode(e.data)),
              i = [];
            K(i, t.length);
            let s = [];
            return (
              K(s, n.length),
              {
                programIdIndex: r,
                keyIndicesCount: o.Buffer.from(i),
                keyIndices: t,
                dataLength: o.Buffer.from(s),
                data: n,
              }
            );
          }),
          n = [];
        K(n, r.length);
        let i = o.Buffer.alloc(1232);
        o.Buffer.from(n).copy(i);
        let s = n.length;
        r.forEach((e) => {
          let t = d
            .struct([
              d.u8("programIdIndex"),
              d.blob(e.keyIndicesCount.length, "keyIndicesCount"),
              d.seq(d.u8("keyIndex"), e.keyIndices.length, "keyIndices"),
              d.blob(e.dataLength.length, "dataLength"),
              d.seq(d.u8("userdatum"), e.data.length, "data"),
            ])
            .encode(e, i, s);
          s += t;
        }),
          (i = i.slice(0, s));
        let a = d.struct([
            d.blob(1, "numRequiredSignatures"),
            d.blob(1, "numReadonlySignedAccounts"),
            d.blob(1, "numReadonlyUnsignedAccounts"),
            d.blob(t.length, "keyCount"),
            d.seq(W("key"), e, "keys"),
            W("recentBlockhash"),
          ]),
          c = {
            numRequiredSignatures: o.Buffer.from([
              this.header.numRequiredSignatures,
            ]),
            numReadonlySignedAccounts: o.Buffer.from([
              this.header.numReadonlySignedAccounts,
            ]),
            numReadonlyUnsignedAccounts: o.Buffer.from([
              this.header.numReadonlyUnsignedAccounts,
            ]),
            keyCount: o.Buffer.from(t),
            keys: this.accountKeys.map((e) => x(e.toBytes())),
            recentBlockhash: u.default.decode(this.recentBlockhash),
          },
          l = o.Buffer.alloc(2048),
          h = a.encode(c, l);
        return i.copy(l, h), l.slice(0, h + i.length);
      }
      static from(e) {
        let t = [...e],
          r = $(t);
        if (r !== (127 & r))
          throw Error(
            "Versioned messages must be deserialized with VersionedMessage.deserialize()"
          );
        let n = $(t),
          i = $(t),
          s = D(t),
          a = [];
        for (let e = 0; e < s; e++) {
          let e = H(t, 0, 32);
          a.push(new O(o.Buffer.from(e)));
        }
        let c = H(t, 0, 32),
          l = D(t),
          d = [];
        for (let e = 0; e < l; e++) {
          let e = $(t),
            r = D(t),
            n = H(t, 0, r),
            i = D(t),
            s = H(t, 0, i),
            a = u.default.encode(o.Buffer.from(s));
          d.push({ programIdIndex: e, accounts: n, data: a });
        }
        return new G({
          header: {
            numRequiredSignatures: r,
            numReadonlySignedAccounts: n,
            numReadonlyUnsignedAccounts: i,
          },
          recentBlockhash: u.default.encode(o.Buffer.from(c)),
          accountKeys: a,
          instructions: d,
        });
      }
    }
    class J {
      constructor(e) {
        (this.header = void 0),
          (this.staticAccountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.compiledInstructions = void 0),
          (this.addressTableLookups = void 0),
          (this.header = e.header),
          (this.staticAccountKeys = e.staticAccountKeys),
          (this.recentBlockhash = e.recentBlockhash),
          (this.compiledInstructions = e.compiledInstructions),
          (this.addressTableLookups = e.addressTableLookups);
      }
      get version() {
        return 0;
      }
      get numAccountKeysFromLookups() {
        let e = 0;
        for (let t of this.addressTableLookups)
          e += t.readonlyIndexes.length + t.writableIndexes.length;
        return e;
      }
      getAccountKeys(e) {
        let t;
        if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
          if (
            this.numAccountKeysFromLookups !=
            e.accountKeysFromLookups.writable.length +
              e.accountKeysFromLookups.readonly.length
          )
            throw Error(
              "Failed to get account keys because of a mismatch in the number of account keys from lookups"
            );
          t = e.accountKeysFromLookups;
        } else if (
          e &&
          "addressLookupTableAccounts" in e &&
          e.addressLookupTableAccounts
        )
          t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
        else if (this.addressTableLookups.length > 0)
          throw Error(
            "Failed to get account keys because address table lookups were not resolved"
          );
        return new z(this.staticAccountKeys, t);
      }
      isAccountSigner(e) {
        return e < this.header.numRequiredSignatures;
      }
      isAccountWritable(e) {
        let t = this.header.numRequiredSignatures,
          r = this.staticAccountKeys.length;
        if (e >= r)
          return (
            e - r <
            this.addressTableLookups.reduce(
              (e, t) => e + t.writableIndexes.length,
              0
            )
          );
        if (!(e >= this.header.numRequiredSignatures))
          return e < t - this.header.numReadonlySignedAccounts;
        {
          let n = r - t - this.header.numReadonlyUnsignedAccounts;
          return e - t < n;
        }
      }
      resolveAddressTableLookups(e) {
        let t = { writable: [], readonly: [] };
        for (let r of this.addressTableLookups) {
          let n = e.find((e) => e.key.equals(r.accountKey));
          if (!n)
            throw Error(
              `Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`
            );
          for (let e of r.writableIndexes)
            if (e < n.state.addresses.length)
              t.writable.push(n.state.addresses[e]);
            else
              throw Error(
                `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`
              );
          for (let e of r.readonlyIndexes)
            if (e < n.state.addresses.length)
              t.readonly.push(n.state.addresses[e]);
            else
              throw Error(
                `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`
              );
        }
        return t;
      }
      static compile(e) {
        let t = F.compile(e.instructions, e.payerKey),
          r = [],
          n = { writable: [], readonly: [] };
        for (let i of e.addressLookupTableAccounts || []) {
          let e = t.extractTableLookup(i);
          if (void 0 !== e) {
            let [t, { writable: i, readonly: o }] = e;
            r.push(t), n.writable.push(...i), n.readonly.push(...o);
          }
        }
        let [i, o] = t.getMessageComponents(),
          s = new z(o, n).compileInstructions(e.instructions);
        return new J({
          header: i,
          staticAccountKeys: o,
          recentBlockhash: e.recentBlockhash,
          compiledInstructions: s,
          addressTableLookups: r,
        });
      }
      serialize() {
        let e = [];
        K(e, this.staticAccountKeys.length);
        let t = this.serializeInstructions(),
          r = [];
        K(r, this.compiledInstructions.length);
        let n = this.serializeAddressTableLookups(),
          i = [];
        K(i, this.addressTableLookups.length);
        let o = d.struct([
            d.u8("prefix"),
            d.struct(
              [
                d.u8("numRequiredSignatures"),
                d.u8("numReadonlySignedAccounts"),
                d.u8("numReadonlyUnsignedAccounts"),
              ],
              "header"
            ),
            d.blob(e.length, "staticAccountKeysLength"),
            d.seq(W(), this.staticAccountKeys.length, "staticAccountKeys"),
            W("recentBlockhash"),
            d.blob(r.length, "instructionsLength"),
            d.blob(t.length, "serializedInstructions"),
            d.blob(i.length, "addressTableLookupsLength"),
            d.blob(n.length, "serializedAddressTableLookups"),
          ]),
          s = new Uint8Array(1232),
          a = o.encode(
            {
              prefix: 128,
              header: this.header,
              staticAccountKeysLength: new Uint8Array(e),
              staticAccountKeys: this.staticAccountKeys.map((e) => e.toBytes()),
              recentBlockhash: u.default.decode(this.recentBlockhash),
              instructionsLength: new Uint8Array(r),
              serializedInstructions: t,
              addressTableLookupsLength: new Uint8Array(i),
              serializedAddressTableLookups: n,
            },
            s
          );
        return s.slice(0, a);
      }
      serializeInstructions() {
        let e = 0,
          t = new Uint8Array(1232);
        for (let r of this.compiledInstructions) {
          let n = [];
          K(n, r.accountKeyIndexes.length);
          let i = [];
          K(i, r.data.length);
          let o = d.struct([
            d.u8("programIdIndex"),
            d.blob(n.length, "encodedAccountKeyIndexesLength"),
            d.seq(d.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
            d.blob(i.length, "encodedDataLength"),
            d.blob(r.data.length, "data"),
          ]);
          e += o.encode(
            {
              programIdIndex: r.programIdIndex,
              encodedAccountKeyIndexesLength: new Uint8Array(n),
              accountKeyIndexes: r.accountKeyIndexes,
              encodedDataLength: new Uint8Array(i),
              data: r.data,
            },
            t,
            e
          );
        }
        return t.slice(0, e);
      }
      serializeAddressTableLookups() {
        let e = 0,
          t = new Uint8Array(1232);
        for (let r of this.addressTableLookups) {
          let n = [];
          K(n, r.writableIndexes.length);
          let i = [];
          K(i, r.readonlyIndexes.length);
          let o = d.struct([
            W("accountKey"),
            d.blob(n.length, "encodedWritableIndexesLength"),
            d.seq(d.u8(), r.writableIndexes.length, "writableIndexes"),
            d.blob(i.length, "encodedReadonlyIndexesLength"),
            d.seq(d.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
          ]);
          e += o.encode(
            {
              accountKey: r.accountKey.toBytes(),
              encodedWritableIndexesLength: new Uint8Array(n),
              writableIndexes: r.writableIndexes,
              encodedReadonlyIndexesLength: new Uint8Array(i),
              readonlyIndexes: r.readonlyIndexes,
            },
            t,
            e
          );
        }
        return t.slice(0, e);
      }
      static deserialize(e) {
        let t = [...e],
          r = $(t),
          n = 127 & r;
        q(r !== n, "Expected versioned message but received legacy message"),
          q(
            0 === n,
            `Expected versioned message with version 0 but found version ${n}`
          );
        let i = {
            numRequiredSignatures: $(t),
            numReadonlySignedAccounts: $(t),
            numReadonlyUnsignedAccounts: $(t),
          },
          o = [],
          s = D(t);
        for (let e = 0; e < s; e++) o.push(new O(H(t, 0, 32)));
        let a = u.default.encode(H(t, 0, 32)),
          c = D(t),
          l = [];
        for (let e = 0; e < c; e++) {
          let e = $(t),
            r = D(t),
            n = H(t, 0, r),
            i = D(t),
            o = new Uint8Array(H(t, 0, i));
          l.push({ programIdIndex: e, accountKeyIndexes: n, data: o });
        }
        let d = D(t),
          h = [];
        for (let e = 0; e < d; e++) {
          let e = new O(H(t, 0, 32)),
            r = D(t),
            n = H(t, 0, r),
            i = D(t),
            o = H(t, 0, i);
          h.push({ accountKey: e, writableIndexes: n, readonlyIndexes: o });
        }
        return new J({
          header: i,
          staticAccountKeys: o,
          recentBlockhash: a,
          compiledInstructions: l,
          addressTableLookups: h,
        });
      }
    }
    let Y = {
        deserializeMessageVersion(e) {
          let t = e[0],
            r = 127 & t;
          return r === t ? "legacy" : r;
        },
        deserialize: (e) => {
          let t = Y.deserializeMessageVersion(e);
          if ("legacy" === t) return G.from(e);
          if (0 === t) return J.deserialize(e);
          throw Error(
            `Transaction message version ${t} deserialization is not supported`
          );
        },
      },
      X =
        (((t = {})[(t.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
        (t[(t.PROCESSED = 1)] = "PROCESSED"),
        (t[(t.TIMED_OUT = 2)] = "TIMED_OUT"),
        (t[(t.NONCE_INVALID = 3)] = "NONCE_INVALID"),
        t),
      Z = o.Buffer.alloc(64).fill(0);
    class Q {
      constructor(e) {
        (this.keys = void 0),
          (this.programId = void 0),
          (this.data = o.Buffer.alloc(0)),
          (this.programId = e.programId),
          (this.keys = e.keys),
          e.data && (this.data = e.data);
      }
      toJSON() {
        return {
          keys: this.keys.map(({ pubkey: e, isSigner: t, isWritable: r }) => ({
            pubkey: e.toJSON(),
            isSigner: t,
            isWritable: r,
          })),
          programId: this.programId.toJSON(),
          data: [...this.data],
        };
      }
    }
    class ee {
      get signature() {
        return this.signatures.length > 0 ? this.signatures[0].signature : null;
      }
      constructor(e) {
        if (
          ((this.signatures = []),
          (this.feePayer = void 0),
          (this.instructions = []),
          (this.recentBlockhash = void 0),
          (this.lastValidBlockHeight = void 0),
          (this.nonceInfo = void 0),
          (this.minNonceContextSlot = void 0),
          (this._message = void 0),
          (this._json = void 0),
          !e)
        )
          return;
        if (
          (e.feePayer && (this.feePayer = e.feePayer),
          e.signatures && (this.signatures = e.signatures),
          Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
        ) {
          const { minContextSlot: t, nonceInfo: r } = e;
          (this.minNonceContextSlot = t), (this.nonceInfo = r);
        } else if (
          Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
        ) {
          const { blockhash: t, lastValidBlockHeight: r } = e;
          (this.recentBlockhash = t), (this.lastValidBlockHeight = r);
        } else {
          const { recentBlockhash: t, nonceInfo: r } = e;
          r && (this.nonceInfo = r), (this.recentBlockhash = t);
        }
      }
      toJSON() {
        return {
          recentBlockhash: this.recentBlockhash || null,
          feePayer: this.feePayer ? this.feePayer.toJSON() : null,
          nonceInfo: this.nonceInfo
            ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
              }
            : null,
          instructions: this.instructions.map((e) => e.toJSON()),
          signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
        };
      }
      add(...e) {
        if (0 === e.length) throw Error("No instructions");
        return (
          e.forEach((e) => {
            "instructions" in e
              ? (this.instructions = this.instructions.concat(e.instructions))
              : "data" in e && "programId" in e && "keys" in e
              ? this.instructions.push(e)
              : this.instructions.push(new Q(e));
          }),
          this
        );
      }
      compileMessage() {
        let e, t, r;
        if (
          this._message &&
          JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
        )
          return this._message;
        if (
          (this.nonceInfo
            ? ((e = this.nonceInfo.nonce),
              (t =
                this.instructions[0] != this.nonceInfo.nonceInstruction
                  ? [this.nonceInfo.nonceInstruction, ...this.instructions]
                  : this.instructions))
            : ((e = this.recentBlockhash), (t = this.instructions)),
          !e)
        )
          throw Error("Transaction recentBlockhash required");
        if (
          (t.length < 1 && console.warn("No instructions provided"),
          this.feePayer)
        )
          r = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey)
          r = this.signatures[0].publicKey;
        else throw Error("Transaction fee payer required");
        for (let e = 0; e < t.length; e++)
          if (void 0 === t[e].programId)
            throw Error(
              `Transaction instruction index ${e} has undefined program id`
            );
        let n = [],
          i = [];
        t.forEach((e) => {
          e.keys.forEach((e) => {
            i.push({ ...e });
          });
          let t = e.programId.toString();
          n.includes(t) || n.push(t);
        }),
          n.forEach((e) => {
            i.push({ pubkey: new O(e), isSigner: !1, isWritable: !1 });
          });
        let o = [];
        i.forEach((e) => {
          let t = e.pubkey.toString(),
            r = o.findIndex((e) => e.pubkey.toString() === t);
          r > -1
            ? ((o[r].isWritable = o[r].isWritable || e.isWritable),
              (o[r].isSigner = o[r].isSigner || e.isSigner))
            : o.push(e);
        }),
          o.sort(function (e, t) {
            return e.isSigner !== t.isSigner
              ? e.isSigner
                ? -1
                : 1
              : e.isWritable !== t.isWritable
              ? e.isWritable
                ? -1
                : 1
              : e.pubkey
                  .toBase58()
                  .localeCompare(t.pubkey.toBase58(), "en", {
                    localeMatcher: "best fit",
                    usage: "sort",
                    sensitivity: "variant",
                    ignorePunctuation: !1,
                    numeric: !1,
                    caseFirst: "lower",
                  });
          });
        let s = o.findIndex((e) => e.pubkey.equals(r));
        if (s > -1) {
          let [e] = o.splice(s, 1);
          (e.isSigner = !0), (e.isWritable = !0), o.unshift(e);
        } else o.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
        for (let e of this.signatures) {
          let t = o.findIndex((t) => t.pubkey.equals(e.publicKey));
          if (t > -1)
            o[t].isSigner ||
              ((o[t].isSigner = !0),
              console.warn(
                "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
              ));
          else throw Error(`unknown signer: ${e.publicKey.toString()}`);
        }
        let a = 0,
          c = 0,
          l = 0,
          d = [],
          h = [];
        o.forEach(({ pubkey: e, isSigner: t, isWritable: r }) => {
          t
            ? (d.push(e.toString()), (a += 1), r || (c += 1))
            : (h.push(e.toString()), r || (l += 1));
        });
        let f = d.concat(h),
          p = t.map((e) => {
            let { data: t, programId: r } = e;
            return {
              programIdIndex: f.indexOf(r.toString()),
              accounts: e.keys.map((e) => f.indexOf(e.pubkey.toString())),
              data: u.default.encode(t),
            };
          });
        return (
          p.forEach((e) => {
            q(e.programIdIndex >= 0), e.accounts.forEach((e) => q(e >= 0));
          }),
          new G({
            header: {
              numRequiredSignatures: a,
              numReadonlySignedAccounts: c,
              numReadonlyUnsignedAccounts: l,
            },
            accountKeys: f,
            recentBlockhash: e,
            instructions: p,
          })
        );
      }
      _compile() {
        let e = this.compileMessage(),
          t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
        return this.signatures.length === t.length &&
          this.signatures.every((e, r) => t[r].equals(e.publicKey))
          ? e
          : ((this.signatures = t.map((e) => ({
              signature: null,
              publicKey: e,
            }))),
            e);
      }
      serializeMessage() {
        return this._compile().serialize();
      }
      async getEstimatedFee(e) {
        return (await e.getFeeForMessage(this.compileMessage())).value;
      }
      setSigners(...e) {
        if (0 === e.length) throw Error("No signers");
        let t = new Set();
        this.signatures = e
          .filter((e) => {
            let r = e.toString();
            return !t.has(r) && (t.add(r), !0);
          })
          .map((e) => ({ signature: null, publicKey: e }));
      }
      sign(...e) {
        if (0 === e.length) throw Error("No signers");
        let t = new Set(),
          r = [];
        for (let n of e) {
          let e = n.publicKey.toString();
          t.has(e) || (t.add(e), r.push(n));
        }
        this.signatures = r.map((e) => ({
          signature: null,
          publicKey: e.publicKey,
        }));
        let n = this._compile();
        this._partialSign(n, ...r);
      }
      partialSign(...e) {
        if (0 === e.length) throw Error("No signers");
        let t = new Set(),
          r = [];
        for (let n of e) {
          let e = n.publicKey.toString();
          t.has(e) || (t.add(e), r.push(n));
        }
        let n = this._compile();
        this._partialSign(n, ...r);
      }
      _partialSign(e, ...t) {
        let r = e.serialize();
        t.forEach((e) => {
          let t = I(r, e.secretKey);
          this._addSignature(e.publicKey, x(t));
        });
      }
      addSignature(e, t) {
        this._compile(), this._addSignature(e, t);
      }
      _addSignature(e, t) {
        q(64 === t.length);
        let r = this.signatures.findIndex((t) => e.equals(t.publicKey));
        if (r < 0) throw Error(`unknown signer: ${e.toString()}`);
        this.signatures[r].signature = o.Buffer.from(t);
      }
      verifySignatures(e = !0) {
        return !this._getMessageSignednessErrors(this.serializeMessage(), e);
      }
      _getMessageSignednessErrors(e, t) {
        let r = {};
        for (let { signature: n, publicKey: i } of this.signatures)
          null === n
            ? t && (r.missing ||= []).push(i)
            : A(n, e, i.toBytes()) || (r.invalid ||= []).push(i);
        return r.invalid || r.missing ? r : void 0;
      }
      serialize(e) {
        let { requireAllSignatures: t, verifySignatures: r } = Object.assign(
            { requireAllSignatures: !0, verifySignatures: !0 },
            e
          ),
          n = this.serializeMessage();
        if (r) {
          let e = this._getMessageSignednessErrors(n, t);
          if (e) {
            let t = "Signature verification failed.";
            throw (
              (e.invalid &&
                (t += `
Invalid signature for public key${
                  1 === e.invalid.length ? "" : "(s)"
                } [\`${e.invalid.map((e) => e.toBase58()).join("`, `")}\`].`),
              e.missing &&
                (t += `
Missing signature for public key${
                  1 === e.missing.length ? "" : "(s)"
                } [\`${e.missing.map((e) => e.toBase58()).join("`, `")}\`].`),
              Error(t))
            );
          }
        }
        return this._serialize(n);
      }
      _serialize(e) {
        let { signatures: t } = this,
          r = [];
        K(r, t.length);
        let n = r.length + 64 * t.length + e.length,
          i = o.Buffer.alloc(n);
        return (
          q(t.length < 256),
          o.Buffer.from(r).copy(i, 0),
          t.forEach(({ signature: e }, t) => {
            null !== e &&
              (q(64 === e.length, "signature has invalid length"),
              o.Buffer.from(e).copy(i, r.length + 64 * t));
          }),
          e.copy(i, r.length + 64 * t.length),
          q(i.length <= 1232, `Transaction too large: ${i.length} > 1232`),
          i
        );
      }
      get keys() {
        return (
          q(1 === this.instructions.length),
          this.instructions[0].keys.map((e) => e.pubkey)
        );
      }
      get programId() {
        return (
          q(1 === this.instructions.length), this.instructions[0].programId
        );
      }
      get data() {
        return q(1 === this.instructions.length), this.instructions[0].data;
      }
      static from(e) {
        let t = [...e],
          r = D(t),
          n = [];
        for (let e = 0; e < r; e++) {
          let e = H(t, 0, 64);
          n.push(u.default.encode(o.Buffer.from(e)));
        }
        return ee.populate(G.from(t), n);
      }
      static populate(e, t = []) {
        let r = new ee();
        return (
          (r.recentBlockhash = e.recentBlockhash),
          e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]),
          t.forEach((t, n) => {
            let i = {
              signature: t == u.default.encode(Z) ? null : u.default.decode(t),
              publicKey: e.accountKeys[n],
            };
            r.signatures.push(i);
          }),
          e.instructions.forEach((t) => {
            let n = t.accounts.map((t) => {
              let n = e.accountKeys[t];
              return {
                pubkey: n,
                isSigner:
                  r.signatures.some(
                    (e) => e.publicKey.toString() === n.toString()
                  ) || e.isAccountSigner(t),
                isWritable: e.isAccountWritable(t),
              };
            });
            r.instructions.push(
              new Q({
                keys: n,
                programId: e.accountKeys[t.programIdIndex],
                data: u.default.decode(t.data),
              })
            );
          }),
          (r._message = e),
          (r._json = r.toJSON()),
          r
        );
      }
    }
    class et {
      constructor(e) {
        (this.payerKey = void 0),
          (this.instructions = void 0),
          (this.recentBlockhash = void 0),
          (this.payerKey = e.payerKey),
          (this.instructions = e.instructions),
          (this.recentBlockhash = e.recentBlockhash);
      }
      static decompile(e, t) {
        let { header: r, compiledInstructions: n, recentBlockhash: i } = e,
          {
            numRequiredSignatures: o,
            numReadonlySignedAccounts: s,
            numReadonlyUnsignedAccounts: a,
          } = r,
          u = o - s;
        q(u > 0, "Message header is invalid");
        let c = e.staticAccountKeys.length - o - a;
        q(c >= 0, "Message header is invalid");
        let l = e.getAccountKeys(t),
          d = l.get(0);
        if (void 0 === d)
          throw Error(
            "Failed to decompile message because no account keys were found"
          );
        let h = [];
        for (let e of n) {
          let t = [];
          for (let n of e.accountKeyIndexes) {
            let e,
              i = l.get(n);
            if (void 0 === i)
              throw Error(`Failed to find key for account key index ${n}`);
            (e =
              n < o
                ? n < u
                : n < l.staticAccountKeys.length
                ? n - o < c
                : n - l.staticAccountKeys.length <
                  l.accountKeysFromLookups.writable.length),
              t.push({
                pubkey: i,
                isSigner: n < r.numRequiredSignatures,
                isWritable: e,
              });
          }
          let n = l.get(e.programIdIndex);
          if (void 0 === n)
            throw Error(
              `Failed to find program id for program id index ${e.programIdIndex}`
            );
          h.push(new Q({ programId: n, data: x(e.data), keys: t }));
        }
        return new et({ payerKey: d, instructions: h, recentBlockhash: i });
      }
      compileToLegacyMessage() {
        return G.compile({
          payerKey: this.payerKey,
          recentBlockhash: this.recentBlockhash,
          instructions: this.instructions,
        });
      }
      compileToV0Message(e) {
        return J.compile({
          payerKey: this.payerKey,
          recentBlockhash: this.recentBlockhash,
          instructions: this.instructions,
          addressLookupTableAccounts: e,
        });
      }
    }
    class er {
      get version() {
        return this.message.version;
      }
      constructor(e, t) {
        if (((this.signatures = void 0), (this.message = void 0), void 0 !== t))
          q(
            t.length === e.header.numRequiredSignatures,
            "Expected signatures length to be equal to the number of required signatures"
          ),
            (this.signatures = t);
        else {
          const t = [];
          for (let r = 0; r < e.header.numRequiredSignatures; r++)
            t.push(new Uint8Array(64));
          this.signatures = t;
        }
        this.message = e;
      }
      serialize() {
        let e = this.message.serialize(),
          t = [];
        K(t, this.signatures.length);
        let r = d.struct([
            d.blob(t.length, "encodedSignaturesLength"),
            d.seq(
              ((e = "signature") => d.blob(64, e))(),
              this.signatures.length,
              "signatures"
            ),
            d.blob(e.length, "serializedMessage"),
          ]),
          n = new Uint8Array(2048),
          i = r.encode(
            {
              encodedSignaturesLength: new Uint8Array(t),
              signatures: this.signatures,
              serializedMessage: e,
            },
            n
          );
        return n.slice(0, i);
      }
      static deserialize(e) {
        let t = [...e],
          r = [],
          n = D(t);
        for (let e = 0; e < n; e++) r.push(new Uint8Array(H(t, 0, 64)));
        return new er(Y.deserialize(new Uint8Array(t)), r);
      }
      sign(e) {
        let t = this.message.serialize(),
          r = this.message.staticAccountKeys.slice(
            0,
            this.message.header.numRequiredSignatures
          );
        for (let n of e) {
          let e = r.findIndex((e) => e.equals(n.publicKey));
          q(
            e >= 0,
            `Cannot sign with non signer key ${n.publicKey.toBase58()}`
          ),
            (this.signatures[e] = I(t, n.secretKey));
        }
      }
      addSignature(e, t) {
        q(64 === t.byteLength, "Signature must be 64 bytes long");
        let r = this.message.staticAccountKeys
          .slice(0, this.message.header.numRequiredSignatures)
          .findIndex((t) => t.equals(e));
        q(
          r >= 0,
          `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
        ),
          (this.signatures[r] = t);
      }
    }
    let en = new O("SysvarC1ock11111111111111111111111111111111"),
      ei = new O("SysvarEpochSchedu1e111111111111111111111111"),
      eo = new O("Sysvar1nstructions1111111111111111111111111"),
      es = new O("SysvarRecentB1ockHashes11111111111111111111"),
      ea = new O("SysvarRent111111111111111111111111111111111"),
      eu = new O("SysvarRewards111111111111111111111111111111"),
      ec = new O("SysvarS1otHashes111111111111111111111111111"),
      el = new O("SysvarS1otHistory11111111111111111111111111"),
      ed = new O("SysvarStakeHistory1111111111111111111111111");
    class eh extends Error {
      constructor({ action: e, signature: t, transactionMessage: r, logs: n }) {
        let i;
        const o = n
            ? `Logs: 
${JSON.stringify(n.slice(-10), null, 2)}. `
            : "",
          s =
            "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
        switch (e) {
          case "send":
            i =
              `Transaction ${t} resulted in an error. 
${r}. ` +
              o +
              s;
            break;
          case "simulate":
            i =
              `Simulation failed. 
Message: ${r}. 
` +
              o +
              s;
            break;
          default:
            i = `Unknown action '${((e) => e)(e)}'`;
        }
        super(i),
          (this.signature = void 0),
          (this.transactionMessage = void 0),
          (this.transactionLogs = void 0),
          (this.signature = t),
          (this.transactionMessage = r),
          (this.transactionLogs = n || void 0);
      }
      get transactionError() {
        return {
          message: this.transactionMessage,
          logs: Array.isArray(this.transactionLogs)
            ? this.transactionLogs
            : void 0,
        };
      }
      get logs() {
        let e = this.transactionLogs;
        if (null == e || "object" != typeof e || !("then" in e)) return e;
      }
      async getLogs(e) {
        return (
          Array.isArray(this.transactionLogs) ||
            (this.transactionLogs = new Promise((t, r) => {
              e.getTransaction(this.signature)
                .then((e) => {
                  if (e && e.meta && e.meta.logMessages) {
                    let r = e.meta.logMessages;
                    (this.transactionLogs = r), t(r);
                  } else r(Error("Log messages not found"));
                })
                .catch(r);
            })),
          await this.transactionLogs
        );
      }
    }
    let ef = {
      JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
      JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
      JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
      JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
      JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
      JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
      JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
      JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
      JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
      JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
      JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
      JSON_RPC_SCAN_ERROR: -32012,
      JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
      JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
      JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
      JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
    };
    class ep extends Error {
      constructor({ code: e, message: t, data: r }, n) {
        super(null != n ? `${n}: ${t}` : t),
          (this.code = void 0),
          (this.data = void 0),
          (this.code = e),
          (this.data = r),
          (this.name = "SolanaJSONRPCError");
      }
    }
    async function eg(e, t, r, n) {
      let i,
        o = n && {
          skipPreflight: n.skipPreflight,
          preflightCommitment: n.preflightCommitment || n.commitment,
          maxRetries: n.maxRetries,
          minContextSlot: n.minContextSlot,
        },
        s = await e.sendTransaction(t, r, o);
      if (null != t.recentBlockhash && null != t.lastValidBlockHeight)
        i = (
          await e.confirmTransaction(
            {
              abortSignal: n?.abortSignal,
              signature: s,
              blockhash: t.recentBlockhash,
              lastValidBlockHeight: t.lastValidBlockHeight,
            },
            n && n.commitment
          )
        ).value;
      else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
        let { nonceInstruction: r } = t.nonceInfo,
          o = r.keys[0].pubkey;
        i = (
          await e.confirmTransaction(
            {
              abortSignal: n?.abortSignal,
              minContextSlot: t.minNonceContextSlot,
              nonceAccountPubkey: o,
              nonceValue: t.nonceInfo.nonce,
              signature: s,
            },
            n && n.commitment
          )
        ).value;
      } else
        n?.abortSignal != null &&
          console.warn(
            "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
          ),
          (i = (await e.confirmTransaction(s, n && n.commitment)).value);
      if (i.err) {
        if (null != s)
          throw new eh({
            action: "send",
            signature: s,
            transactionMessage: `Status: (${JSON.stringify(i)})`,
          });
        throw Error(`Transaction ${s} failed (${JSON.stringify(i)})`);
      }
      return s;
    }
    function ey(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    function eb(e, t) {
      let r =
          e.layout.span >= 0
            ? e.layout.span
            : (function e(t, r) {
                let n = (t) => {
                    if (t.span >= 0) return t.span;
                    if ("function" == typeof t.alloc)
                      return t.alloc(r[t.property]);
                    if ("count" in t && "elementLayout" in t) {
                      let e = r[t.property];
                      if (Array.isArray(e))
                        return e.length * n(t.elementLayout);
                    } else if ("fields" in t)
                      return e({ layout: t }, r[t.property]);
                    return 0;
                  },
                  i = 0;
                return (
                  t.layout.fields.forEach((e) => {
                    i += n(e);
                  }),
                  i
                );
              })(e, t),
        n = o.Buffer.alloc(r),
        i = Object.assign({ instruction: e.index }, t);
      return e.layout.encode(i, n), n;
    }
    function em(e, t) {
      let r;
      try {
        r = e.layout.decode(t);
      } catch (e) {
        throw Error("invalid instruction; " + e);
      }
      if (r.instruction !== e.index)
        throw Error(
          `invalid instruction; instruction index mismatch ${r.instruction} != ${e.index}`
        );
      return r;
    }
    let ew = d.nu64("lamportsPerSignature"),
      ek = d.struct([
        d.u32("version"),
        d.u32("state"),
        W("authorizedPubkey"),
        W("nonce"),
        d.struct([ew], "feeCalculator"),
      ]),
      eS = ek.span;
    class ev {
      constructor(e) {
        (this.authorizedPubkey = void 0),
          (this.nonce = void 0),
          (this.feeCalculator = void 0),
          (this.authorizedPubkey = e.authorizedPubkey),
          (this.nonce = e.nonce),
          (this.feeCalculator = e.feeCalculator);
      }
      static fromAccountData(e) {
        let t = ek.decode(x(e), 0);
        return new ev({
          authorizedPubkey: new O(t.authorizedPubkey),
          nonce: new O(t.nonce).toString(),
          feeCalculator: t.feeCalculator,
        });
      }
    }
    function e_(e) {
      let t = (0, d.blob)(8, e),
        r = t.decode.bind(t),
        n = t.encode.bind(t),
        i = (0, h.getU64Codec)();
      return (
        (t.decode = (e, t) => {
          let n = r(e, t);
          return i.decode(n);
        }),
        (t.encode = (e, t, r) => n(i.encode(e), t, r)),
        t
      );
    }
    class eE {
      static decodeInstructionType(e) {
        let t;
        this.checkProgramId(e.programId);
        let r = d.u32("instruction").decode(e.data);
        for (let [e, n] of Object.entries(eI))
          if (n.index == r) {
            t = e;
            break;
          }
        if (!t)
          throw Error("Instruction type incorrect; not a SystemInstruction");
        return t;
      }
      static decodeCreateAccount(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { lamports: t, space: r, programId: n } = em(eI.Create, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          newAccountPubkey: e.keys[1].pubkey,
          lamports: t,
          space: r,
          programId: new O(n),
        };
      }
      static decodeTransfer(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { lamports: t } = em(eI.Transfer, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          toPubkey: e.keys[1].pubkey,
          lamports: t,
        };
      }
      static decodeTransferWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let {
          lamports: t,
          seed: r,
          programId: n,
        } = em(eI.TransferWithSeed, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          basePubkey: e.keys[1].pubkey,
          toPubkey: e.keys[2].pubkey,
          lamports: t,
          seed: r,
          programId: new O(n),
        };
      }
      static decodeAllocate(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let { space: t } = em(eI.Allocate, e.data);
        return { accountPubkey: e.keys[0].pubkey, space: t };
      }
      static decodeAllocateWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let {
          base: t,
          seed: r,
          space: n,
          programId: i,
        } = em(eI.AllocateWithSeed, e.data);
        return {
          accountPubkey: e.keys[0].pubkey,
          basePubkey: new O(t),
          seed: r,
          space: n,
          programId: new O(i),
        };
      }
      static decodeAssign(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let { programId: t } = em(eI.Assign, e.data);
        return { accountPubkey: e.keys[0].pubkey, programId: new O(t) };
      }
      static decodeAssignWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let { base: t, seed: r, programId: n } = em(eI.AssignWithSeed, e.data);
        return {
          accountPubkey: e.keys[0].pubkey,
          basePubkey: new O(t),
          seed: r,
          programId: new O(n),
        };
      }
      static decodeCreateWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let {
          base: t,
          seed: r,
          lamports: n,
          space: i,
          programId: o,
        } = em(eI.CreateWithSeed, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          newAccountPubkey: e.keys[1].pubkey,
          basePubkey: new O(t),
          seed: r,
          lamports: n,
          space: i,
          programId: new O(o),
        };
      }
      static decodeNonceInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { authorized: t } = em(eI.InitializeNonceAccount, e.data);
        return { noncePubkey: e.keys[0].pubkey, authorizedPubkey: new O(t) };
      }
      static decodeNonceAdvance(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          em(eI.AdvanceNonceAccount, e.data),
          { noncePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
        );
      }
      static decodeNonceWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        let { lamports: t } = em(eI.WithdrawNonceAccount, e.data);
        return {
          noncePubkey: e.keys[0].pubkey,
          toPubkey: e.keys[1].pubkey,
          authorizedPubkey: e.keys[4].pubkey,
          lamports: t,
        };
      }
      static decodeNonceAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { authorized: t } = em(eI.AuthorizeNonceAccount, e.data);
        return {
          noncePubkey: e.keys[0].pubkey,
          authorizedPubkey: e.keys[1].pubkey,
          newAuthorizedPubkey: new O(t),
        };
      }
      static checkProgramId(e) {
        if (!e.equals(eA.programId))
          throw Error("invalid instruction; programId is not SystemProgram");
      }
      static checkKeyLength(e, t) {
        if (e.length < t)
          throw Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }
    let eI = Object.freeze({
      Create: {
        index: 0,
        layout: d.struct([
          d.u32("instruction"),
          d.ns64("lamports"),
          d.ns64("space"),
          W("programId"),
        ]),
      },
      Assign: {
        index: 1,
        layout: d.struct([d.u32("instruction"), W("programId")]),
      },
      Transfer: {
        index: 2,
        layout: d.struct([d.u32("instruction"), e_("lamports")]),
      },
      CreateWithSeed: {
        index: 3,
        layout: d.struct([
          d.u32("instruction"),
          W("base"),
          j("seed"),
          d.ns64("lamports"),
          d.ns64("space"),
          W("programId"),
        ]),
      },
      AdvanceNonceAccount: {
        index: 4,
        layout: d.struct([d.u32("instruction")]),
      },
      WithdrawNonceAccount: {
        index: 5,
        layout: d.struct([d.u32("instruction"), d.ns64("lamports")]),
      },
      InitializeNonceAccount: {
        index: 6,
        layout: d.struct([d.u32("instruction"), W("authorized")]),
      },
      AuthorizeNonceAccount: {
        index: 7,
        layout: d.struct([d.u32("instruction"), W("authorized")]),
      },
      Allocate: {
        index: 8,
        layout: d.struct([d.u32("instruction"), d.ns64("space")]),
      },
      AllocateWithSeed: {
        index: 9,
        layout: d.struct([
          d.u32("instruction"),
          W("base"),
          j("seed"),
          d.ns64("space"),
          W("programId"),
        ]),
      },
      AssignWithSeed: {
        index: 10,
        layout: d.struct([
          d.u32("instruction"),
          W("base"),
          j("seed"),
          W("programId"),
        ]),
      },
      TransferWithSeed: {
        index: 11,
        layout: d.struct([
          d.u32("instruction"),
          e_("lamports"),
          j("seed"),
          W("programId"),
        ]),
      },
      UpgradeNonceAccount: {
        index: 12,
        layout: d.struct([d.u32("instruction")]),
      },
    });
    class eA {
      static createAccount(e) {
        let t = eb(eI.Create, {
          lamports: e.lamports,
          space: e.space,
          programId: x(e.programId.toBuffer()),
        });
        return new Q({
          keys: [
            { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
            { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static transfer(e) {
        let t, r;
        return (
          "basePubkey" in e
            ? ((t = eb(eI.TransferWithSeed, {
                lamports: BigInt(e.lamports),
                seed: e.seed,
                programId: x(e.programId.toBuffer()),
              })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]))
            : ((t = eb(eI.Transfer, { lamports: BigInt(e.lamports) })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ])),
          new Q({ keys: r, programId: this.programId, data: t })
        );
      }
      static assign(e) {
        let t, r;
        return (
          "basePubkey" in e
            ? ((t = eb(eI.AssignWithSeed, {
                base: x(e.basePubkey.toBuffer()),
                seed: e.seed,
                programId: x(e.programId.toBuffer()),
              })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]))
            : ((t = eb(eI.Assign, { programId: x(e.programId.toBuffer()) })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
              ])),
          new Q({ keys: r, programId: this.programId, data: t })
        );
      }
      static createAccountWithSeed(e) {
        let t = eb(eI.CreateWithSeed, {
            base: x(e.basePubkey.toBuffer()),
            seed: e.seed,
            lamports: e.lamports,
            space: e.space,
            programId: x(e.programId.toBuffer()),
          }),
          r = [
            { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
            { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
          ];
        return (
          e.basePubkey.equals(e.fromPubkey) ||
            r.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
          new Q({ keys: r, programId: this.programId, data: t })
        );
      }
      static createNonceAccount(e) {
        let t = new ee();
        "basePubkey" in e && "seed" in e
          ? t.add(
              eA.createAccountWithSeed({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                basePubkey: e.basePubkey,
                seed: e.seed,
                lamports: e.lamports,
                space: eS,
                programId: this.programId,
              })
            )
          : t.add(
              eA.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                lamports: e.lamports,
                space: eS,
                programId: this.programId,
              })
            );
        let r = {
          noncePubkey: e.noncePubkey,
          authorizedPubkey: e.authorizedPubkey,
        };
        return t.add(this.nonceInitialize(r)), t;
      }
      static nonceInitialize(e) {
        let t = eb(eI.InitializeNonceAccount, {
          authorized: x(e.authorizedPubkey.toBuffer()),
        });
        return new Q({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: es, isSigner: !1, isWritable: !1 },
            { pubkey: ea, isSigner: !1, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static nonceAdvance(e) {
        let t = eb(eI.AdvanceNonceAccount);
        return new Q({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: es, isSigner: !1, isWritable: !1 },
            { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static nonceWithdraw(e) {
        let t = eb(eI.WithdrawNonceAccount, { lamports: e.lamports });
        return new Q({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
            { pubkey: es, isSigner: !1, isWritable: !1 },
            { pubkey: ea, isSigner: !1, isWritable: !1 },
            { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static nonceAuthorize(e) {
        let t = eb(eI.AuthorizeNonceAccount, {
          authorized: x(e.newAuthorizedPubkey.toBuffer()),
        });
        return new Q({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static allocate(e) {
        let t, r;
        return (
          "basePubkey" in e
            ? ((t = eb(eI.AllocateWithSeed, {
                base: x(e.basePubkey.toBuffer()),
                seed: e.seed,
                space: e.space,
                programId: x(e.programId.toBuffer()),
              })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]))
            : ((t = eb(eI.Allocate, { space: e.space })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
              ])),
          new Q({ keys: r, programId: this.programId, data: t })
        );
      }
    }
    eA.programId = new O("11111111111111111111111111111111");
    class ex {
      static getMinNumSignatures(e) {
        return 2 * (Math.ceil(e / ex.chunkSize) + 1 + 1);
      }
      static async load(e, t, r, n, i) {
        {
          let o = await e.getMinimumBalanceForRentExemption(i.length),
            s = await e.getAccountInfo(r.publicKey, "confirmed"),
            a = null;
          if (null !== s) {
            if (s.executable)
              return (
                console.error(
                  "Program load failed, account is already executable"
                ),
                !1
              );
            s.data.length !== i.length &&
              (a = a || new ee()).add(
                eA.allocate({ accountPubkey: r.publicKey, space: i.length })
              ),
              s.owner.equals(n) ||
                (a = a || new ee()).add(
                  eA.assign({ accountPubkey: r.publicKey, programId: n })
                ),
              s.lamports < o &&
                (a = a || new ee()).add(
                  eA.transfer({
                    fromPubkey: t.publicKey,
                    toPubkey: r.publicKey,
                    lamports: o - s.lamports,
                  })
                );
          } else
            a = new ee().add(
              eA.createAccount({
                fromPubkey: t.publicKey,
                newAccountPubkey: r.publicKey,
                lamports: o > 0 ? o : 1,
                space: i.length,
                programId: n,
              })
            );
          null !== a && (await eg(e, a, [t, r], { commitment: "confirmed" }));
        }
        let s = d.struct([
            d.u32("instruction"),
            d.u32("offset"),
            d.u32("bytesLength"),
            d.u32("bytesLengthPadding"),
            d.seq(d.u8("byte"), d.offset(d.u32(), -8), "bytes"),
          ]),
          a = ex.chunkSize,
          u = 0,
          c = i,
          l = [];
        for (; c.length > 0; ) {
          let i = c.slice(0, a),
            d = o.Buffer.alloc(a + 16);
          s.encode(
            {
              instruction: 0,
              offset: u,
              bytes: i,
              bytesLength: 0,
              bytesLengthPadding: 0,
            },
            d
          );
          let h = new ee().add({
            keys: [{ pubkey: r.publicKey, isSigner: !0, isWritable: !0 }],
            programId: n,
            data: d,
          });
          l.push(eg(e, h, [t, r], { commitment: "confirmed" })),
            e._rpcEndpoint.includes("solana.com") && (await ey(250)),
            (u += a),
            (c = c.slice(a));
        }
        await Promise.all(l);
        {
          let i = d.struct([d.u32("instruction")]),
            s = o.Buffer.alloc(i.span);
          i.encode({ instruction: 1 }, s);
          let a = new ee().add({
              keys: [
                { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
                { pubkey: ea, isSigner: !1, isWritable: !1 },
              ],
              programId: n,
              data: s,
            }),
            u = "processed",
            c = await e.sendTransaction(a, [t, r], { preflightCommitment: u }),
            { context: l, value: h } = await e.confirmTransaction(
              {
                signature: c,
                lastValidBlockHeight: a.lastValidBlockHeight,
                blockhash: a.recentBlockhash,
              },
              u
            );
          if (h.err)
            throw Error(`Transaction ${c} failed (${JSON.stringify(h)})`);
          for (;;) {
            try {
              if ((await e.getSlot({ commitment: u })) > l.slot) break;
            } catch {}
            await new Promise((e) => setTimeout(e, Math.round(200)));
          }
        }
        return !0;
      }
    }
    ex.chunkSize = 932;
    let eR = new O("BPFLoader2111111111111111111111111111111111");
    class eP {
      static getMinNumSignatures(e) {
        return ex.getMinNumSignatures(e);
      }
      static load(e, t, r, n, i) {
        return ex.load(e, t, r, i, n);
      }
    }
    var eB =
      (r = (function () {
        if (i) return n;
        i = 1;
        var e = Object.prototype.toString,
          t =
            Object.keys ||
            function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return t;
            };
        return (n = function (r) {
          var n = (function r(n, i) {
            var o, s, a, u, c, l, d;
            if (!0 === n) return "true";
            if (!1 === n) return "false";
            switch (typeof n) {
              case "object":
                if (null === n) return null;
                if (n.toJSON && "function" == typeof n.toJSON)
                  return r(n.toJSON(), i);
                if ("[object Array]" === (d = e.call(n))) {
                  for (o = 0, a = "[", s = n.length - 1; o < s; o++)
                    a += r(n[o], !0) + ",";
                  return s > -1 && (a += r(n[o], !0)), a + "]";
                }
                if ("[object Object]" !== d) return JSON.stringify(n);
                for (s = (u = t(n).sort()).length, a = "", o = 0; o < s; )
                  void 0 !== (l = r(n[(c = u[o])], !1)) &&
                    (a && (a += ","), (a += JSON.stringify(c) + ":" + l)),
                    o++;
                return "{" + a + "}";
              case "function":
              case "undefined":
                return i ? null : void 0;
              case "string":
                return JSON.stringify(n);
              default:
                return isFinite(n) ? n : null;
            }
          })(r, !1);
          if (void 0 !== n) return "" + n;
        });
      })()) &&
      r.__esModule &&
      Object.prototype.hasOwnProperty.call(r, "default")
        ? r.default
        : r;
    function eT(e) {
      let t = 0;
      for (; e > 1; ) (e /= 2), t++;
      return t;
    }
    class eO {
      constructor(e, t, r, n, i) {
        (this.slotsPerEpoch = void 0),
          (this.leaderScheduleSlotOffset = void 0),
          (this.warmup = void 0),
          (this.firstNormalEpoch = void 0),
          (this.firstNormalSlot = void 0),
          (this.slotsPerEpoch = e),
          (this.leaderScheduleSlotOffset = t),
          (this.warmup = r),
          (this.firstNormalEpoch = n),
          (this.firstNormalSlot = i);
      }
      getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0];
      }
      getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
          var t;
          let r =
              eT(
                0 === (t = e + 32 + 1)
                  ? 1
                  : (t--,
                    (t |= t >> 1),
                    (t |= t >> 2),
                    (t |= t >> 4),
                    (t |= t >> 8),
                    (t |= t >> 16),
                    (t |= t >> 32) + 1)
              ) -
              eT(32) -
              1,
            n = this.getSlotsInEpoch(r);
          return [r, e - (n - 32)];
        }
        {
          let t = e - this.firstNormalSlot,
            r = Math.floor(t / this.slotsPerEpoch);
          return [this.firstNormalEpoch + r, t % this.slotsPerEpoch];
        }
      }
      getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch
          ? (Math.pow(2, e) - 1) * 32
          : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
              this.firstNormalSlot;
      }
      getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
      }
      getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch
          ? Math.pow(2, e + eT(32))
          : this.slotsPerEpoch;
      }
    }
    var eC = globalThis.fetch;
    class eL extends m {
      constructor(e, t, r) {
        super(
          (e) => {
            let r = new y(e, {
              autoconnect: !0,
              max_reconnects: 5,
              reconnect: !0,
              reconnect_interval: 1e3,
              ...t,
            });
            return (
              "socket" in r
                ? (this.underlyingSocket = r.socket)
                : (this.underlyingSocket = r),
              r
            );
          },
          e,
          t,
          r
        ),
          (this.underlyingSocket = void 0);
      }
      call(...e) {
        let t = this.underlyingSocket?.readyState;
        return 1 === t
          ? super.call(...e)
          : Promise.reject(
              Error(
                "Tried to call a JSON-RPC method `" +
                  e[0] +
                  "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                  t +
                  ")"
              )
            );
      }
      notify(...e) {
        let t = this.underlyingSocket?.readyState;
        return 1 === t
          ? super.notify(...e)
          : Promise.reject(
              Error(
                "Tried to send a JSON-RPC notification `" +
                  e[0] +
                  "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                  t +
                  ")"
              )
            );
      }
    }
    class eN {
      constructor(e) {
        (this.key = void 0),
          (this.state = void 0),
          (this.key = e.key),
          (this.state = e.state);
      }
      isActive() {
        let e = BigInt("0xffffffffffffffff");
        return this.state.deactivationSlot === e;
      }
      static deserialize(e) {
        let t = (function (e, t) {
            let r;
            try {
              r = e.layout.decode(t);
            } catch (e) {
              throw Error("invalid instruction; " + e);
            }
            if (r.typeIndex !== e.index)
              throw Error(
                `invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`
              );
            return r;
          })(eU, e),
          r = e.length - 56;
        q(r >= 0, "lookup table is invalid"),
          q(r % 32 == 0, "lookup table is invalid");
        let { addresses: n } = d
          .struct([d.seq(W(), r / 32, "addresses")])
          .decode(e.slice(56));
        return {
          deactivationSlot: t.deactivationSlot,
          lastExtendedSlot: t.lastExtendedSlot,
          lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
          authority: 0 !== t.authority.length ? new O(t.authority[0]) : void 0,
          addresses: n.map((e) => new O(e)),
        };
      }
    }
    let eU = {
        index: 1,
        layout: d.struct([
          d.u32("typeIndex"),
          e_("deactivationSlot"),
          d.nu64("lastExtendedSlot"),
          d.u8("lastExtendedStartIndex"),
          d.u8(),
          d.seq(W(), d.offset(d.u8(), -1), "authority"),
        ]),
      },
      eM = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,
      ez = (0, f.coerce)((0, f.instance)(O), (0, f.string)(), (e) => new O(e)),
      eW = (0, f.tuple)([(0, f.string)(), (0, f.literal)("base64")]),
      ej = (0, f.coerce)((0, f.instance)(o.Buffer), eW, (e) =>
        o.Buffer.from(e[0], "base64")
      );
    function eD(e) {
      let t, r;
      if ("string" == typeof e) t = e;
      else if (e) {
        let { commitment: n, ...i } = e;
        (t = n), (r = i);
      }
      return { commitment: t, config: r };
    }
    function eK(e) {
      return e.map((e) =>
        "memcmp" in e
          ? {
              ...e,
              memcmp: { ...e.memcmp, encoding: e.memcmp.encoding ?? "base58" },
            }
          : e
      );
    }
    function eq(e) {
      return (0, f.union)([
        (0, f.type)({
          jsonrpc: (0, f.literal)("2.0"),
          id: (0, f.string)(),
          result: e,
        }),
        (0, f.type)({
          jsonrpc: (0, f.literal)("2.0"),
          id: (0, f.string)(),
          error: (0, f.type)({
            code: (0, f.unknown)(),
            message: (0, f.string)(),
            data: (0, f.optional)((0, f.any)()),
          }),
        }),
      ]);
    }
    let eF = eq((0, f.unknown)());
    function eV(e) {
      return (0, f.coerce)(eq(e), eF, (t) =>
        "error" in t ? t : { ...t, result: (0, f.create)(t.result, e) }
      );
    }
    function e$(e) {
      return eV(
        (0, f.type)({
          context: (0, f.type)({ slot: (0, f.number)() }),
          value: e,
        })
      );
    }
    function eH(e) {
      return (0, f.type)({
        context: (0, f.type)({ slot: (0, f.number)() }),
        value: e,
      });
    }
    function eG(e, t) {
      return 0 === e
        ? new J({
            header: t.header,
            staticAccountKeys: t.accountKeys.map((e) => new O(e)),
            recentBlockhash: t.recentBlockhash,
            compiledInstructions: t.instructions.map((e) => ({
              programIdIndex: e.programIdIndex,
              accountKeyIndexes: e.accounts,
              data: u.default.decode(e.data),
            })),
            addressTableLookups: t.addressTableLookups,
          })
        : new G(t);
    }
    let eJ = (0, f.type)({
        foundation: (0, f.number)(),
        foundationTerm: (0, f.number)(),
        initial: (0, f.number)(),
        taper: (0, f.number)(),
        terminal: (0, f.number)(),
      }),
      eY = eV(
        (0, f.array)(
          (0, f.nullable)(
            (0, f.type)({
              epoch: (0, f.number)(),
              effectiveSlot: (0, f.number)(),
              amount: (0, f.number)(),
              postBalance: (0, f.number)(),
              commission: (0, f.optional)((0, f.nullable)((0, f.number)())),
            })
          )
        )
      ),
      eX = (0, f.array)(
        (0, f.type)({
          slot: (0, f.number)(),
          prioritizationFee: (0, f.number)(),
        })
      ),
      eZ = (0, f.type)({
        total: (0, f.number)(),
        validator: (0, f.number)(),
        foundation: (0, f.number)(),
        epoch: (0, f.number)(),
      }),
      eQ = (0, f.type)({
        epoch: (0, f.number)(),
        slotIndex: (0, f.number)(),
        slotsInEpoch: (0, f.number)(),
        absoluteSlot: (0, f.number)(),
        blockHeight: (0, f.optional)((0, f.number)()),
        transactionCount: (0, f.optional)((0, f.number)()),
      }),
      e0 = (0, f.type)({
        slotsPerEpoch: (0, f.number)(),
        leaderScheduleSlotOffset: (0, f.number)(),
        warmup: (0, f.boolean)(),
        firstNormalEpoch: (0, f.number)(),
        firstNormalSlot: (0, f.number)(),
      }),
      e1 = (0, f.record)((0, f.string)(), (0, f.array)((0, f.number)())),
      e2 = (0, f.nullable)((0, f.union)([(0, f.type)({}), (0, f.string)()])),
      e6 = (0, f.type)({ err: e2 }),
      e3 = (0, f.literal)("receivedSignature"),
      e5 = (0, f.type)({
        "solana-core": (0, f.string)(),
        "feature-set": (0, f.optional)((0, f.number)()),
      }),
      e4 = (0, f.type)({
        program: (0, f.string)(),
        programId: ez,
        parsed: (0, f.unknown)(),
      }),
      e8 = (0, f.type)({
        programId: ez,
        accounts: (0, f.array)(ez),
        data: (0, f.string)(),
      }),
      e7 = e$(
        (0, f.type)({
          err: (0, f.nullable)(
            (0, f.union)([(0, f.type)({}), (0, f.string)()])
          ),
          logs: (0, f.nullable)((0, f.array)((0, f.string)())),
          accounts: (0, f.optional)(
            (0, f.nullable)(
              (0, f.array)(
                (0, f.nullable)(
                  (0, f.type)({
                    executable: (0, f.boolean)(),
                    owner: (0, f.string)(),
                    lamports: (0, f.number)(),
                    data: (0, f.array)((0, f.string)()),
                    rentEpoch: (0, f.optional)((0, f.number)()),
                  })
                )
              )
            )
          ),
          unitsConsumed: (0, f.optional)((0, f.number)()),
          returnData: (0, f.optional)(
            (0, f.nullable)(
              (0, f.type)({
                programId: (0, f.string)(),
                data: (0, f.tuple)([(0, f.string)(), (0, f.literal)("base64")]),
              })
            )
          ),
          innerInstructions: (0, f.optional)(
            (0, f.nullable)(
              (0, f.array)(
                (0, f.type)({
                  index: (0, f.number)(),
                  instructions: (0, f.array)((0, f.union)([e4, e8])),
                })
              )
            )
          ),
        })
      ),
      e9 = e$(
        (0, f.type)({
          byIdentity: (0, f.record)(
            (0, f.string)(),
            (0, f.array)((0, f.number)())
          ),
          range: (0, f.type)({
            firstSlot: (0, f.number)(),
            lastSlot: (0, f.number)(),
          }),
        })
      ),
      te = eV(eJ),
      tt = eV(eZ),
      tr = eV(eX),
      tn = eV(eQ),
      ti = eV(e0),
      to = eV(e1),
      ts = eV((0, f.number)()),
      ta = e$(
        (0, f.type)({
          total: (0, f.number)(),
          circulating: (0, f.number)(),
          nonCirculating: (0, f.number)(),
          nonCirculatingAccounts: (0, f.array)(ez),
        })
      ),
      tu = (0, f.type)({
        amount: (0, f.string)(),
        uiAmount: (0, f.nullable)((0, f.number)()),
        decimals: (0, f.number)(),
        uiAmountString: (0, f.optional)((0, f.string)()),
      }),
      tc = e$(
        (0, f.array)(
          (0, f.type)({
            address: ez,
            amount: (0, f.string)(),
            uiAmount: (0, f.nullable)((0, f.number)()),
            decimals: (0, f.number)(),
            uiAmountString: (0, f.optional)((0, f.string)()),
          })
        )
      ),
      tl = e$(
        (0, f.array)(
          (0, f.type)({
            pubkey: ez,
            account: (0, f.type)({
              executable: (0, f.boolean)(),
              owner: ez,
              lamports: (0, f.number)(),
              data: ej,
              rentEpoch: (0, f.number)(),
            }),
          })
        )
      ),
      td = (0, f.type)({
        program: (0, f.string)(),
        parsed: (0, f.unknown)(),
        space: (0, f.number)(),
      }),
      th = e$(
        (0, f.array)(
          (0, f.type)({
            pubkey: ez,
            account: (0, f.type)({
              executable: (0, f.boolean)(),
              owner: ez,
              lamports: (0, f.number)(),
              data: td,
              rentEpoch: (0, f.number)(),
            }),
          })
        )
      ),
      tf = e$(
        (0, f.array)((0, f.type)({ lamports: (0, f.number)(), address: ez }))
      ),
      tp = (0, f.type)({
        executable: (0, f.boolean)(),
        owner: ez,
        lamports: (0, f.number)(),
        data: ej,
        rentEpoch: (0, f.number)(),
      }),
      tg = (0, f.type)({ pubkey: ez, account: tp }),
      ty = (0, f.coerce)(
        (0, f.union)([(0, f.instance)(o.Buffer), td]),
        (0, f.union)([eW, td]),
        (e) => (Array.isArray(e) ? (0, f.create)(e, ej) : e)
      ),
      tb = (0, f.type)({
        executable: (0, f.boolean)(),
        owner: ez,
        lamports: (0, f.number)(),
        data: ty,
        rentEpoch: (0, f.number)(),
      }),
      tm = (0, f.type)({ pubkey: ez, account: tb }),
      tw = (0, f.type)({
        state: (0, f.union)([
          (0, f.literal)("active"),
          (0, f.literal)("inactive"),
          (0, f.literal)("activating"),
          (0, f.literal)("deactivating"),
        ]),
        active: (0, f.number)(),
        inactive: (0, f.number)(),
      }),
      tk = eV(
        (0, f.array)(
          (0, f.type)({
            signature: (0, f.string)(),
            slot: (0, f.number)(),
            err: e2,
            memo: (0, f.nullable)((0, f.string)()),
            blockTime: (0, f.optional)((0, f.nullable)((0, f.number)())),
          })
        )
      ),
      tS = eV(
        (0, f.array)(
          (0, f.type)({
            signature: (0, f.string)(),
            slot: (0, f.number)(),
            err: e2,
            memo: (0, f.nullable)((0, f.string)()),
            blockTime: (0, f.optional)((0, f.nullable)((0, f.number)())),
          })
        )
      ),
      tv = (0, f.type)({ subscription: (0, f.number)(), result: eH(tp) }),
      t_ = (0, f.type)({ pubkey: ez, account: tp }),
      tE = (0, f.type)({ subscription: (0, f.number)(), result: eH(t_) }),
      tI = (0, f.type)({
        parent: (0, f.number)(),
        slot: (0, f.number)(),
        root: (0, f.number)(),
      }),
      tA = (0, f.type)({ subscription: (0, f.number)(), result: tI }),
      tx = (0, f.union)([
        (0, f.type)({
          type: (0, f.union)([
            (0, f.literal)("firstShredReceived"),
            (0, f.literal)("completed"),
            (0, f.literal)("optimisticConfirmation"),
            (0, f.literal)("root"),
          ]),
          slot: (0, f.number)(),
          timestamp: (0, f.number)(),
        }),
        (0, f.type)({
          type: (0, f.literal)("createdBank"),
          parent: (0, f.number)(),
          slot: (0, f.number)(),
          timestamp: (0, f.number)(),
        }),
        (0, f.type)({
          type: (0, f.literal)("frozen"),
          slot: (0, f.number)(),
          timestamp: (0, f.number)(),
          stats: (0, f.type)({
            numTransactionEntries: (0, f.number)(),
            numSuccessfulTransactions: (0, f.number)(),
            numFailedTransactions: (0, f.number)(),
            maxTransactionsPerEntry: (0, f.number)(),
          }),
        }),
        (0, f.type)({
          type: (0, f.literal)("dead"),
          slot: (0, f.number)(),
          timestamp: (0, f.number)(),
          err: (0, f.string)(),
        }),
      ]),
      tR = (0, f.type)({ subscription: (0, f.number)(), result: tx }),
      tP = (0, f.type)({
        subscription: (0, f.number)(),
        result: eH((0, f.union)([e6, e3])),
      }),
      tB = (0, f.type)({
        subscription: (0, f.number)(),
        result: (0, f.number)(),
      }),
      tT = (0, f.type)({
        pubkey: (0, f.string)(),
        gossip: (0, f.nullable)((0, f.string)()),
        tpu: (0, f.nullable)((0, f.string)()),
        rpc: (0, f.nullable)((0, f.string)()),
        version: (0, f.nullable)((0, f.string)()),
      }),
      tO = (0, f.type)({
        votePubkey: (0, f.string)(),
        nodePubkey: (0, f.string)(),
        activatedStake: (0, f.number)(),
        epochVoteAccount: (0, f.boolean)(),
        epochCredits: (0, f.array)(
          (0, f.tuple)([(0, f.number)(), (0, f.number)(), (0, f.number)()])
        ),
        commission: (0, f.number)(),
        lastVote: (0, f.number)(),
        rootSlot: (0, f.nullable)((0, f.number)()),
      }),
      tC = eV(
        (0, f.type)({ current: (0, f.array)(tO), delinquent: (0, f.array)(tO) })
      ),
      tL = (0, f.union)([
        (0, f.literal)("processed"),
        (0, f.literal)("confirmed"),
        (0, f.literal)("finalized"),
      ]),
      tN = (0, f.type)({
        slot: (0, f.number)(),
        confirmations: (0, f.nullable)((0, f.number)()),
        err: e2,
        confirmationStatus: (0, f.optional)(tL),
      }),
      tU = e$((0, f.array)((0, f.nullable)(tN))),
      tM = eV((0, f.number)()),
      tz = (0, f.type)({
        accountKey: ez,
        writableIndexes: (0, f.array)((0, f.number)()),
        readonlyIndexes: (0, f.array)((0, f.number)()),
      }),
      tW = (0, f.type)({
        signatures: (0, f.array)((0, f.string)()),
        message: (0, f.type)({
          accountKeys: (0, f.array)((0, f.string)()),
          header: (0, f.type)({
            numRequiredSignatures: (0, f.number)(),
            numReadonlySignedAccounts: (0, f.number)(),
            numReadonlyUnsignedAccounts: (0, f.number)(),
          }),
          instructions: (0, f.array)(
            (0, f.type)({
              accounts: (0, f.array)((0, f.number)()),
              data: (0, f.string)(),
              programIdIndex: (0, f.number)(),
            })
          ),
          recentBlockhash: (0, f.string)(),
          addressTableLookups: (0, f.optional)((0, f.array)(tz)),
        }),
      }),
      tj = (0, f.type)({
        pubkey: ez,
        signer: (0, f.boolean)(),
        writable: (0, f.boolean)(),
        source: (0, f.optional)(
          (0, f.union)([
            (0, f.literal)("transaction"),
            (0, f.literal)("lookupTable"),
          ])
        ),
      }),
      tD = (0, f.type)({
        accountKeys: (0, f.array)(tj),
        signatures: (0, f.array)((0, f.string)()),
      }),
      tK = (0, f.type)({
        parsed: (0, f.unknown)(),
        program: (0, f.string)(),
        programId: ez,
      }),
      tq = (0, f.type)({
        accounts: (0, f.array)(ez),
        data: (0, f.string)(),
        programId: ez,
      }),
      tF = (0, f.union)([tq, tK]),
      tV = (0, f.union)([
        (0, f.type)({
          parsed: (0, f.unknown)(),
          program: (0, f.string)(),
          programId: (0, f.string)(),
        }),
        (0, f.type)({
          accounts: (0, f.array)((0, f.string)()),
          data: (0, f.string)(),
          programId: (0, f.string)(),
        }),
      ]),
      t$ = (0, f.coerce)(tF, tV, (e) =>
        "accounts" in e ? (0, f.create)(e, tq) : (0, f.create)(e, tK)
      ),
      tH = (0, f.type)({
        signatures: (0, f.array)((0, f.string)()),
        message: (0, f.type)({
          accountKeys: (0, f.array)(tj),
          instructions: (0, f.array)(t$),
          recentBlockhash: (0, f.string)(),
          addressTableLookups: (0, f.optional)(
            (0, f.nullable)((0, f.array)(tz))
          ),
        }),
      }),
      tG = (0, f.type)({
        accountIndex: (0, f.number)(),
        mint: (0, f.string)(),
        owner: (0, f.optional)((0, f.string)()),
        programId: (0, f.optional)((0, f.string)()),
        uiTokenAmount: tu,
      }),
      tJ = (0, f.type)({
        writable: (0, f.array)(ez),
        readonly: (0, f.array)(ez),
      }),
      tY = (0, f.type)({
        err: e2,
        fee: (0, f.number)(),
        innerInstructions: (0, f.optional)(
          (0, f.nullable)(
            (0, f.array)(
              (0, f.type)({
                index: (0, f.number)(),
                instructions: (0, f.array)(
                  (0, f.type)({
                    accounts: (0, f.array)((0, f.number)()),
                    data: (0, f.string)(),
                    programIdIndex: (0, f.number)(),
                  })
                ),
              })
            )
          )
        ),
        preBalances: (0, f.array)((0, f.number)()),
        postBalances: (0, f.array)((0, f.number)()),
        logMessages: (0, f.optional)(
          (0, f.nullable)((0, f.array)((0, f.string)()))
        ),
        preTokenBalances: (0, f.optional)((0, f.nullable)((0, f.array)(tG))),
        postTokenBalances: (0, f.optional)((0, f.nullable)((0, f.array)(tG))),
        loadedAddresses: (0, f.optional)(tJ),
        computeUnitsConsumed: (0, f.optional)((0, f.number)()),
        costUnits: (0, f.optional)((0, f.number)()),
      }),
      tX = (0, f.type)({
        err: e2,
        fee: (0, f.number)(),
        innerInstructions: (0, f.optional)(
          (0, f.nullable)(
            (0, f.array)(
              (0, f.type)({
                index: (0, f.number)(),
                instructions: (0, f.array)(t$),
              })
            )
          )
        ),
        preBalances: (0, f.array)((0, f.number)()),
        postBalances: (0, f.array)((0, f.number)()),
        logMessages: (0, f.optional)(
          (0, f.nullable)((0, f.array)((0, f.string)()))
        ),
        preTokenBalances: (0, f.optional)((0, f.nullable)((0, f.array)(tG))),
        postTokenBalances: (0, f.optional)((0, f.nullable)((0, f.array)(tG))),
        loadedAddresses: (0, f.optional)(tJ),
        computeUnitsConsumed: (0, f.optional)((0, f.number)()),
        costUnits: (0, f.optional)((0, f.number)()),
      }),
      tZ = (0, f.union)([(0, f.literal)(0), (0, f.literal)("legacy")]),
      tQ = (0, f.type)({
        pubkey: (0, f.string)(),
        lamports: (0, f.number)(),
        postBalance: (0, f.nullable)((0, f.number)()),
        rewardType: (0, f.nullable)((0, f.string)()),
        commission: (0, f.optional)((0, f.nullable)((0, f.number)())),
      }),
      t0 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            transactions: (0, f.array)(
              (0, f.type)({
                transaction: tW,
                meta: (0, f.nullable)(tY),
                version: (0, f.optional)(tZ),
              })
            ),
            rewards: (0, f.optional)((0, f.array)(tQ)),
            blockTime: (0, f.nullable)((0, f.number)()),
            blockHeight: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t1 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            rewards: (0, f.optional)((0, f.array)(tQ)),
            blockTime: (0, f.nullable)((0, f.number)()),
            blockHeight: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t2 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            transactions: (0, f.array)(
              (0, f.type)({
                transaction: tD,
                meta: (0, f.nullable)(tY),
                version: (0, f.optional)(tZ),
              })
            ),
            rewards: (0, f.optional)((0, f.array)(tQ)),
            blockTime: (0, f.nullable)((0, f.number)()),
            blockHeight: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t6 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            transactions: (0, f.array)(
              (0, f.type)({
                transaction: tH,
                meta: (0, f.nullable)(tX),
                version: (0, f.optional)(tZ),
              })
            ),
            rewards: (0, f.optional)((0, f.array)(tQ)),
            blockTime: (0, f.nullable)((0, f.number)()),
            blockHeight: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t3 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            transactions: (0, f.array)(
              (0, f.type)({
                transaction: tD,
                meta: (0, f.nullable)(tX),
                version: (0, f.optional)(tZ),
              })
            ),
            rewards: (0, f.optional)((0, f.array)(tQ)),
            blockTime: (0, f.nullable)((0, f.number)()),
            blockHeight: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t5 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            rewards: (0, f.optional)((0, f.array)(tQ)),
            blockTime: (0, f.nullable)((0, f.number)()),
            blockHeight: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t4 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            transactions: (0, f.array)(
              (0, f.type)({ transaction: tW, meta: (0, f.nullable)(tY) })
            ),
            rewards: (0, f.optional)((0, f.array)(tQ)),
            blockTime: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t8 = eV(
        (0, f.nullable)(
          (0, f.type)({
            blockhash: (0, f.string)(),
            previousBlockhash: (0, f.string)(),
            parentSlot: (0, f.number)(),
            signatures: (0, f.array)((0, f.string)()),
            blockTime: (0, f.nullable)((0, f.number)()),
          })
        )
      ),
      t7 = eV(
        (0, f.nullable)(
          (0, f.type)({
            slot: (0, f.number)(),
            meta: (0, f.nullable)(tY),
            blockTime: (0, f.optional)((0, f.nullable)((0, f.number)())),
            transaction: tW,
            version: (0, f.optional)(tZ),
          })
        )
      ),
      t9 = eV(
        (0, f.nullable)(
          (0, f.type)({
            slot: (0, f.number)(),
            transaction: tH,
            meta: (0, f.nullable)(tX),
            blockTime: (0, f.optional)((0, f.nullable)((0, f.number)())),
            version: (0, f.optional)(tZ),
          })
        )
      ),
      re = e$(
        (0, f.type)({
          blockhash: (0, f.string)(),
          lastValidBlockHeight: (0, f.number)(),
        })
      ),
      rt = e$((0, f.boolean)()),
      rr = (0, f.type)({
        slot: (0, f.number)(),
        numTransactions: (0, f.number)(),
        numSlots: (0, f.number)(),
        samplePeriodSecs: (0, f.number)(),
      }),
      rn = eV((0, f.array)(rr)),
      ri = e$(
        (0, f.nullable)(
          (0, f.type)({
            feeCalculator: (0, f.type)({
              lamportsPerSignature: (0, f.number)(),
            }),
          })
        )
      ),
      ro = eV((0, f.string)()),
      rs = eV((0, f.string)()),
      ra = (0, f.type)({
        err: e2,
        logs: (0, f.array)((0, f.string)()),
        signature: (0, f.string)(),
      }),
      ru = (0, f.type)({ result: eH(ra), subscription: (0, f.number)() }),
      rc = { "solana-client": "js/1.0.0-maintenance" };
    class rl {
      constructor(e, t) {
        let r, n, i, o, s, a;
        (this._commitment = void 0),
          (this._confirmTransactionInitialTimeout = void 0),
          (this._rpcEndpoint = void 0),
          (this._rpcWsEndpoint = void 0),
          (this._rpcClient = void 0),
          (this._rpcRequest = void 0),
          (this._rpcBatchRequest = void 0),
          (this._rpcWebSocket = void 0),
          (this._rpcWebSocketConnected = !1),
          (this._rpcWebSocketHeartbeat = null),
          (this._rpcWebSocketIdleTimeout = null),
          (this._rpcWebSocketGeneration = 0),
          (this._disableBlockhashCaching = !1),
          (this._pollingBlockhash = !1),
          (this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: [],
          }),
          (this._nextClientSubscriptionId = 0),
          (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
          (this._subscriptionHashByClientSubscriptionId = {}),
          (this._subscriptionStateChangeCallbacksByHash = {}),
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
          (this._subscriptionsByHash = {}),
          (this._subscriptionsAutoDisposedByRpc = new Set()),
          (this.getBlockHeight = (() => {
            let e = {};
            return async (t) => {
              let { commitment: r, config: n } = eD(t),
                i = this._buildArgs([], r, void 0, n),
                o = eB(i);
              return (
                (e[o] =
                  e[o] ??
                  (async () => {
                    try {
                      let e = await this._rpcRequest("getBlockHeight", i),
                        t = (0, f.create)(e, eV((0, f.number)()));
                      if ("error" in t)
                        throw new ep(
                          t.error,
                          "failed to get block height information"
                        );
                      return t.result;
                    } finally {
                      delete e[o];
                    }
                  })()),
                await e[o]
              );
            };
          })()),
          t && "string" == typeof t
            ? (this._commitment = t)
            : t &&
              ((this._commitment = t.commitment),
              (this._confirmTransactionInitialTimeout =
                t.confirmTransactionInitialTimeout),
              (r = t.wsEndpoint),
              (n = t.httpHeaders),
              (i = t.fetch),
              (o = t.fetchMiddleware),
              (s = t.disableRetryOnRateLimit),
              (a = t.httpAgent)),
          (this._rpcEndpoint = (function (e) {
            if (!1 === /^https?:/.test(e))
              throw TypeError(
                "Endpoint URL must start with `http:` or `https:`."
              );
            return e;
          })(e)),
          (this._rpcWsEndpoint =
            r ||
            (function (e) {
              let t = e.match(eM);
              if (null == t)
                throw TypeError(`Failed to validate endpoint URL \`${e}\``);
              let [r, n, i, o] = t,
                s = e.startsWith("https:") ? "wss:" : "ws:",
                a = null == i ? null : parseInt(i.slice(1), 10),
                u = null == a ? "" : `:${a + 1}`;
              return `${s}//${n}${u}${o}`;
            })(e)),
          (this._rpcClient = (function (e, t, r, n, i, o) {
            let s,
              a,
              u = r || eC;
            return (
              null != o &&
                console.warn(
                  "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
                ),
              n &&
                (a = async (e, t) => {
                  let r = await new Promise((r, i) => {
                    try {
                      n(e, t, (e, t) => r([e, t]));
                    } catch (e) {
                      i(e);
                    }
                  });
                  return await u(...r);
                }),
              new p.default(async (r, n) => {
                let o = {
                  method: "POST",
                  body: r,
                  agent: s,
                  headers: Object.assign(
                    { "Content-Type": "application/json" },
                    t || {},
                    rc
                  ),
                };
                try {
                  let t,
                    r = 5,
                    s = 500;
                  for (
                    ;
                    ((t = a ? await a(e, o) : await u(e, o)),
                    429 === t.status && !0 !== i) && ((r -= 1), 0 !== r);

                  ) {
                    console.error(
                      `Server responded with ${t.status} ${t.statusText}.  Retrying after ${s}ms delay...`
                    ),
                      await ey(s),
                      (s *= 2);
                  }
                  let c = await t.text();
                  t.ok
                    ? n(null, c)
                    : n(Error(`${t.status} ${t.statusText}: ${c}`));
                } catch (e) {
                  e instanceof Error && n(e);
                }
              }, {})
            );
          })(e, n, i, o, s, a)),
          (this._rpcRequest = (function (e) {
            return (t, r) =>
              new Promise((n, i) => {
                e.request(t, r, (e, t) => {
                  e ? i(e) : n(t);
                });
              });
          })(this._rpcClient)),
          (this._rpcBatchRequest = (function (e) {
            return (t) =>
              new Promise((r, n) => {
                0 === t.length && r([]);
                let i = t.map((t) => e.request(t.methodName, t.args));
                e.request(i, (e, t) => {
                  e ? n(e) : r(t);
                });
              });
          })(this._rpcClient)),
          (this._rpcWebSocket = new eL(this._rpcWsEndpoint, {
            autoconnect: !1,
            max_reconnects: 1 / 0,
          })),
          this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
          this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
          this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
          this._rpcWebSocket.on(
            "accountNotification",
            this._wsOnAccountNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "programNotification",
            this._wsOnProgramAccountNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "slotNotification",
            this._wsOnSlotNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "slotsUpdatesNotification",
            this._wsOnSlotUpdatesNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "signatureNotification",
            this._wsOnSignatureNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "rootNotification",
            this._wsOnRootNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "logsNotification",
            this._wsOnLogsNotification.bind(this)
          );
      }
      get commitment() {
        return this._commitment;
      }
      get rpcEndpoint() {
        return this._rpcEndpoint;
      }
      async getBalanceAndContext(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgs([e.toBase58()], r, void 0, n),
          o = await this._rpcRequest("getBalance", i),
          s = (0, f.create)(o, e$((0, f.number)()));
        if ("error" in s)
          throw new ep(s.error, `failed to get balance for ${e.toBase58()}`);
        return s.result;
      }
      async getBalance(e, t) {
        return await this.getBalanceAndContext(e, t)
          .then((e) => e.value)
          .catch((t) => {
            throw Error(
              "failed to get balance of account " + e.toBase58() + ": " + t
            );
          });
      }
      async getBlockTime(e) {
        let t = await this._rpcRequest("getBlockTime", [e]),
          r = (0, f.create)(t, eV((0, f.nullable)((0, f.number)())));
        if ("error" in r)
          throw new ep(r.error, `failed to get block time for slot ${e}`);
        return r.result;
      }
      async getMinimumLedgerSlot() {
        let e = await this._rpcRequest("minimumLedgerSlot", []),
          t = (0, f.create)(e, eV((0, f.number)()));
        if ("error" in t)
          throw new ep(t.error, "failed to get minimum ledger slot");
        return t.result;
      }
      async getFirstAvailableBlock() {
        let e = await this._rpcRequest("getFirstAvailableBlock", []),
          t = (0, f.create)(e, ts);
        if ("error" in t)
          throw new ep(t.error, "failed to get first available block");
        return t.result;
      }
      async getSupply(e) {
        let t = {};
        t =
          "string" == typeof e
            ? { commitment: e }
            : e
            ? { ...e, commitment: (e && e.commitment) || this.commitment }
            : { commitment: this.commitment };
        let r = await this._rpcRequest("getSupply", [t]),
          n = (0, f.create)(r, ta);
        if ("error" in n) throw new ep(n.error, "failed to get supply");
        return n.result;
      }
      async getTokenSupply(e, t) {
        let r = this._buildArgs([e.toBase58()], t),
          n = await this._rpcRequest("getTokenSupply", r),
          i = (0, f.create)(n, e$(tu));
        if ("error" in i) throw new ep(i.error, "failed to get token supply");
        return i.result;
      }
      async getTokenAccountBalance(e, t) {
        let r = this._buildArgs([e.toBase58()], t),
          n = await this._rpcRequest("getTokenAccountBalance", r),
          i = (0, f.create)(n, e$(tu));
        if ("error" in i)
          throw new ep(i.error, "failed to get token account balance");
        return i.result;
      }
      async getTokenAccountsByOwner(e, t, r) {
        let { commitment: n, config: i } = eD(r),
          o = [e.toBase58()];
        "mint" in t
          ? o.push({ mint: t.mint.toBase58() })
          : o.push({ programId: t.programId.toBase58() });
        let s = this._buildArgs(o, n, "base64", i),
          a = await this._rpcRequest("getTokenAccountsByOwner", s),
          u = (0, f.create)(a, tl);
        if ("error" in u)
          throw new ep(
            u.error,
            `failed to get token accounts owned by account ${e.toBase58()}`
          );
        return u.result;
      }
      async getParsedTokenAccountsByOwner(e, t, r) {
        let n = [e.toBase58()];
        "mint" in t
          ? n.push({ mint: t.mint.toBase58() })
          : n.push({ programId: t.programId.toBase58() });
        let i = this._buildArgs(n, r, "jsonParsed"),
          o = await this._rpcRequest("getTokenAccountsByOwner", i),
          s = (0, f.create)(o, th);
        if ("error" in s)
          throw new ep(
            s.error,
            `failed to get token accounts owned by account ${e.toBase58()}`
          );
        return s.result;
      }
      async getLargestAccounts(e) {
        let t = { ...e, commitment: (e && e.commitment) || this.commitment },
          r = t.filter || t.commitment ? [t] : [],
          n = await this._rpcRequest("getLargestAccounts", r),
          i = (0, f.create)(n, tf);
        if ("error" in i)
          throw new ep(i.error, "failed to get largest accounts");
        return i.result;
      }
      async getTokenLargestAccounts(e, t) {
        let r = this._buildArgs([e.toBase58()], t),
          n = await this._rpcRequest("getTokenLargestAccounts", r),
          i = (0, f.create)(n, tc);
        if ("error" in i)
          throw new ep(i.error, "failed to get token largest accounts");
        return i.result;
      }
      async getAccountInfoAndContext(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgs([e.toBase58()], r, "base64", n),
          o = await this._rpcRequest("getAccountInfo", i),
          s = (0, f.create)(o, e$((0, f.nullable)(tp)));
        if ("error" in s)
          throw new ep(
            s.error,
            `failed to get info about account ${e.toBase58()}`
          );
        return s.result;
      }
      async getParsedAccountInfo(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
          o = await this._rpcRequest("getAccountInfo", i),
          s = (0, f.create)(o, e$((0, f.nullable)(tb)));
        if ("error" in s)
          throw new ep(
            s.error,
            `failed to get info about account ${e.toBase58()}`
          );
        return s.result;
      }
      async getAccountInfo(e, t) {
        try {
          return (await this.getAccountInfoAndContext(e, t)).value;
        } catch (t) {
          throw Error(
            "failed to get info about account " + e.toBase58() + ": " + t
          );
        }
      }
      async getMultipleParsedAccounts(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = e.map((e) => e.toBase58()),
          o = this._buildArgs([i], r, "jsonParsed", n),
          s = await this._rpcRequest("getMultipleAccounts", o),
          a = (0, f.create)(s, e$((0, f.array)((0, f.nullable)(tb))));
        if ("error" in a)
          throw new ep(a.error, `failed to get info for accounts ${i}`);
        return a.result;
      }
      async getMultipleAccountsInfoAndContext(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = e.map((e) => e.toBase58()),
          o = this._buildArgs([i], r, "base64", n),
          s = await this._rpcRequest("getMultipleAccounts", o),
          a = (0, f.create)(s, e$((0, f.array)((0, f.nullable)(tp))));
        if ("error" in a)
          throw new ep(a.error, `failed to get info for accounts ${i}`);
        return a.result;
      }
      async getMultipleAccountsInfo(e, t) {
        return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
      }
      async getStakeActivation(e, t, r) {
        let { commitment: n, config: i } = eD(t),
          o = this._buildArgs([e.toBase58()], n, void 0, {
            ...i,
            epoch: null != r ? r : i?.epoch,
          }),
          s = await this._rpcRequest("getStakeActivation", o),
          a = (0, f.create)(s, eV(tw));
        if ("error" in a)
          throw new ep(
            a.error,
            `failed to get Stake Activation ${e.toBase58()}`
          );
        return a.result;
      }
      async getProgramAccounts(e, t) {
        let { commitment: r, config: n } = eD(t),
          { encoding: i, ...o } = n || {},
          s = this._buildArgs([e.toBase58()], r, i || "base64", {
            ...o,
            ...(o.filters ? { filters: eK(o.filters) } : null),
          }),
          a = await this._rpcRequest("getProgramAccounts", s),
          u = (0, f.array)(tg),
          c =
            !0 === o.withContext
              ? (0, f.create)(a, e$(u))
              : (0, f.create)(a, eV(u));
        if ("error" in c)
          throw new ep(
            c.error,
            `failed to get accounts owned by program ${e.toBase58()}`
          );
        return c.result;
      }
      async getParsedProgramAccounts(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
          o = await this._rpcRequest("getProgramAccounts", i),
          s = (0, f.create)(o, eV((0, f.array)(tm)));
        if ("error" in s)
          throw new ep(
            s.error,
            `failed to get accounts owned by program ${e.toBase58()}`
          );
        return s.result;
      }
      async confirmTransaction(e, t) {
        let r, n;
        if ("string" == typeof e) r = e;
        else {
          if (e.abortSignal?.aborted)
            return Promise.reject(e.abortSignal.reason);
          r = e.signature;
        }
        try {
          n = u.default.decode(r);
        } catch (e) {
          throw Error("signature must be base58 encoded: " + r);
        }
        return (q(64 === n.length, "signature has invalid length"),
        "string" == typeof e)
          ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
              commitment: t || this.commitment,
              signature: r,
            })
          : "lastValidBlockHeight" in e
          ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
              commitment: t || this.commitment,
              strategy: e,
            })
          : await this.confirmTransactionUsingDurableNonceStrategy({
              commitment: t || this.commitment,
              strategy: e,
            });
      }
      getCancellationPromise(e) {
        return new Promise((t, r) => {
          null != e &&
            (e.aborted
              ? r(e.reason)
              : e.addEventListener("abort", () => {
                  r(e.reason);
                }));
        });
      }
      getTransactionConfirmationPromise({ commitment: e, signature: t }) {
        let r,
          n,
          i = !1;
        return {
          abortConfirmation: () => {
            n && (n(), (n = void 0)),
              null != r && (this.removeSignatureListener(r), (r = void 0));
          },
          confirmationPromise: new Promise((o, s) => {
            try {
              r = this.onSignature(
                t,
                (e, t) => {
                  (r = void 0),
                    o({
                      __type: X.PROCESSED,
                      response: { context: t, value: e },
                    });
                },
                e
              );
              let a = new Promise((e) => {
                null == r
                  ? e()
                  : (n = this._onSubscriptionStateChange(r, (t) => {
                      "subscribed" === t && e();
                    }));
              });
              (async () => {
                if ((await a, i)) return;
                let r = await this.getSignatureStatus(t);
                if (i || null == r) return;
                let { context: n, value: u } = r;
                if (null != u)
                  if (u?.err) s(u.err);
                  else {
                    switch (e) {
                      case "confirmed":
                      case "single":
                      case "singleGossip":
                        if ("processed" === u.confirmationStatus) return;
                        break;
                      case "finalized":
                      case "max":
                      case "root":
                        if (
                          "processed" === u.confirmationStatus ||
                          "confirmed" === u.confirmationStatus
                        )
                          return;
                    }
                    (i = !0),
                      o({
                        __type: X.PROCESSED,
                        response: { context: n, value: u },
                      });
                  }
              })();
            } catch (e) {
              s(e);
            }
          }),
        };
      }
      async confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: e,
        strategy: { abortSignal: t, lastValidBlockHeight: r, signature: n },
      }) {
        let i,
          o = !1,
          s = new Promise((t) => {
            let n = async () => {
              try {
                return await this.getBlockHeight(e);
              } catch (e) {
                return -1;
              }
            };
            (async () => {
              let e = await n();
              if (!o) {
                for (; e <= r; )
                  if ((await ey(1e3), o || ((e = await n()), o))) return;
                t({ __type: X.BLOCKHEIGHT_EXCEEDED });
              }
            })();
          }),
          { abortConfirmation: a, confirmationPromise: u } =
            this.getTransactionConfirmationPromise({
              commitment: e,
              signature: n,
            }),
          c = this.getCancellationPromise(t);
        try {
          let e = await Promise.race([c, u, s]);
          if (e.__type === X.PROCESSED) i = e.response;
          else throw new N(n);
        } finally {
          (o = !0), a();
        }
        return i;
      }
      async confirmTransactionUsingDurableNonceStrategy({
        commitment: e,
        strategy: {
          abortSignal: t,
          minContextSlot: r,
          nonceAccountPubkey: n,
          nonceValue: i,
          signature: o,
        },
      }) {
        let s,
          a = !1,
          u = new Promise((t) => {
            let o = i,
              s = null,
              u = async () => {
                try {
                  let { context: t, value: i } = await this.getNonceAndContext(
                    n,
                    { commitment: e, minContextSlot: r }
                  );
                  return (s = t.slot), i?.nonce;
                } catch (e) {
                  return o;
                }
              };
            (async () => {
              if (((o = await u()), !a))
                for (;;) {
                  if (i !== o)
                    return void t({
                      __type: X.NONCE_INVALID,
                      slotInWhichNonceDidAdvance: s,
                    });
                  if ((await ey(2e3), a || ((o = await u()), a))) return;
                }
            })();
          }),
          { abortConfirmation: c, confirmationPromise: l } =
            this.getTransactionConfirmationPromise({
              commitment: e,
              signature: o,
            }),
          d = this.getCancellationPromise(t);
        try {
          let t = await Promise.race([d, l, u]);
          if (t.__type === X.PROCESSED) s = t.response;
          else {
            let n;
            for (;;) {
              let e = await this.getSignatureStatus(o);
              if (null == e) break;
              if (e.context.slot < (t.slotInWhichNonceDidAdvance ?? r)) {
                await ey(400);
                continue;
              }
              n = e;
              break;
            }
            if (n?.value) {
              let t = e || "finalized",
                { confirmationStatus: r } = n.value;
              switch (t) {
                case "processed":
                case "recent":
                  if (
                    "processed" !== r &&
                    "confirmed" !== r &&
                    "finalized" !== r
                  )
                    throw new M(o);
                  break;
                case "confirmed":
                case "single":
                case "singleGossip":
                  if ("confirmed" !== r && "finalized" !== r) throw new M(o);
                  break;
                case "finalized":
                case "max":
                case "root":
                  if ("finalized" !== r) throw new M(o);
              }
              s = { context: n.context, value: { err: n.value.err } };
            } else throw new M(o);
          }
        } finally {
          (a = !0), c();
        }
        return s;
      }
      async confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: e,
        signature: t,
      }) {
        let r,
          n,
          i = new Promise((t) => {
            let n = this._confirmTransactionInitialTimeout || 6e4;
            switch (e) {
              case "processed":
              case "recent":
              case "single":
              case "confirmed":
              case "singleGossip":
                n = this._confirmTransactionInitialTimeout || 3e4;
            }
            r = setTimeout(() => t({ __type: X.TIMED_OUT, timeoutMs: n }), n);
          }),
          { abortConfirmation: o, confirmationPromise: s } =
            this.getTransactionConfirmationPromise({
              commitment: e,
              signature: t,
            });
        try {
          let e = await Promise.race([s, i]);
          if (e.__type === X.PROCESSED) n = e.response;
          else throw new U(t, e.timeoutMs / 1e3);
        } finally {
          clearTimeout(r), o();
        }
        return n;
      }
      async getClusterNodes() {
        let e = await this._rpcRequest("getClusterNodes", []),
          t = (0, f.create)(e, eV((0, f.array)(tT)));
        if ("error" in t) throw new ep(t.error, "failed to get cluster nodes");
        return t.result;
      }
      async getVoteAccounts(e) {
        let t = this._buildArgs([], e),
          r = await this._rpcRequest("getVoteAccounts", t),
          n = (0, f.create)(r, tC);
        if ("error" in n) throw new ep(n.error, "failed to get vote accounts");
        return n.result;
      }
      async getSlot(e) {
        let { commitment: t, config: r } = eD(e),
          n = this._buildArgs([], t, void 0, r),
          i = await this._rpcRequest("getSlot", n),
          o = (0, f.create)(i, eV((0, f.number)()));
        if ("error" in o) throw new ep(o.error, "failed to get slot");
        return o.result;
      }
      async getSlotLeader(e) {
        let { commitment: t, config: r } = eD(e),
          n = this._buildArgs([], t, void 0, r),
          i = await this._rpcRequest("getSlotLeader", n),
          o = (0, f.create)(i, eV((0, f.string)()));
        if ("error" in o) throw new ep(o.error, "failed to get slot leader");
        return o.result;
      }
      async getSlotLeaders(e, t) {
        let r = await this._rpcRequest("getSlotLeaders", [e, t]),
          n = (0, f.create)(r, eV((0, f.array)(ez)));
        if ("error" in n) throw new ep(n.error, "failed to get slot leaders");
        return n.result;
      }
      async getSignatureStatus(e, t) {
        let { context: r, value: n } = await this.getSignatureStatuses([e], t);
        return q(1 === n.length), { context: r, value: n[0] };
      }
      async getSignatureStatuses(e, t) {
        let r = [e];
        t && r.push(t);
        let n = await this._rpcRequest("getSignatureStatuses", r),
          i = (0, f.create)(n, tU);
        if ("error" in i)
          throw new ep(i.error, "failed to get signature status");
        return i.result;
      }
      async getTransactionCount(e) {
        let { commitment: t, config: r } = eD(e),
          n = this._buildArgs([], t, void 0, r),
          i = await this._rpcRequest("getTransactionCount", n),
          o = (0, f.create)(i, eV((0, f.number)()));
        if ("error" in o)
          throw new ep(o.error, "failed to get transaction count");
        return o.result;
      }
      async getTotalSupply(e) {
        return (
          await this.getSupply({
            commitment: e,
            excludeNonCirculatingAccountsList: !0,
          })
        ).value.total;
      }
      async getInflationGovernor(e) {
        let t = this._buildArgs([], e),
          r = await this._rpcRequest("getInflationGovernor", t),
          n = (0, f.create)(r, te);
        if ("error" in n) throw new ep(n.error, "failed to get inflation");
        return n.result;
      }
      async getInflationReward(e, t, r) {
        let { commitment: n, config: i } = eD(r),
          o = this._buildArgs([e.map((e) => e.toBase58())], n, void 0, {
            ...i,
            epoch: null != t ? t : i?.epoch,
          }),
          s = await this._rpcRequest("getInflationReward", o),
          a = (0, f.create)(s, eY);
        if ("error" in a)
          throw new ep(a.error, "failed to get inflation reward");
        return a.result;
      }
      async getInflationRate() {
        let e = await this._rpcRequest("getInflationRate", []),
          t = (0, f.create)(e, tt);
        if ("error" in t) throw new ep(t.error, "failed to get inflation rate");
        return t.result;
      }
      async getEpochInfo(e) {
        let { commitment: t, config: r } = eD(e),
          n = this._buildArgs([], t, void 0, r),
          i = await this._rpcRequest("getEpochInfo", n),
          o = (0, f.create)(i, tn);
        if ("error" in o) throw new ep(o.error, "failed to get epoch info");
        return o.result;
      }
      async getEpochSchedule() {
        let e = await this._rpcRequest("getEpochSchedule", []),
          t = (0, f.create)(e, ti);
        if ("error" in t) throw new ep(t.error, "failed to get epoch schedule");
        let r = t.result;
        return new eO(
          r.slotsPerEpoch,
          r.leaderScheduleSlotOffset,
          r.warmup,
          r.firstNormalEpoch,
          r.firstNormalSlot
        );
      }
      async getLeaderSchedule() {
        let e = await this._rpcRequest("getLeaderSchedule", []),
          t = (0, f.create)(e, to);
        if ("error" in t)
          throw new ep(t.error, "failed to get leader schedule");
        return t.result;
      }
      async getMinimumBalanceForRentExemption(e, t) {
        let r = this._buildArgs([e], t),
          n = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
          i = (0, f.create)(n, tM);
        return "error" in i
          ? (console.warn("Unable to fetch minimum balance for rent exemption"),
            0)
          : i.result;
      }
      async getRecentBlockhashAndContext(e) {
        let {
          context: t,
          value: { blockhash: r },
        } = await this.getLatestBlockhashAndContext(e);
        return {
          context: t,
          value: {
            blockhash: r,
            feeCalculator: {
              get lamportsPerSignature() {
                throw Error(
                  "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                );
              },
              toJSON: () => ({}),
            },
          },
        };
      }
      async getRecentPerformanceSamples(e) {
        let t = await this._rpcRequest(
            "getRecentPerformanceSamples",
            e ? [e] : []
          ),
          r = (0, f.create)(t, rn);
        if ("error" in r)
          throw new ep(r.error, "failed to get recent performance samples");
        return r.result;
      }
      async getFeeCalculatorForBlockhash(e, t) {
        let r = this._buildArgs([e], t),
          n = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
          i = (0, f.create)(n, ri);
        if ("error" in i) throw new ep(i.error, "failed to get fee calculator");
        let { context: o, value: s } = i.result;
        return { context: o, value: null !== s ? s.feeCalculator : null };
      }
      async getFeeForMessage(e, t) {
        let r = x(e.serialize()).toString("base64"),
          n = this._buildArgs([r], t),
          i = await this._rpcRequest("getFeeForMessage", n),
          o = (0, f.create)(i, e$((0, f.nullable)((0, f.number)())));
        if ("error" in o)
          throw new ep(o.error, "failed to get fee for message");
        if (null === o.result) throw Error("invalid blockhash");
        return o.result;
      }
      async getRecentPrioritizationFees(e) {
        let t = e?.lockedWritableAccounts?.map((e) => e.toBase58()),
          r = t?.length ? [t] : [],
          n = await this._rpcRequest("getRecentPrioritizationFees", r),
          i = (0, f.create)(n, tr);
        if ("error" in i)
          throw new ep(i.error, "failed to get recent prioritization fees");
        return i.result;
      }
      async getRecentBlockhash(e) {
        try {
          return (await this.getRecentBlockhashAndContext(e)).value;
        } catch (e) {
          throw Error("failed to get recent blockhash: " + e);
        }
      }
      async getLatestBlockhash(e) {
        try {
          return (await this.getLatestBlockhashAndContext(e)).value;
        } catch (e) {
          throw Error("failed to get recent blockhash: " + e);
        }
      }
      async getLatestBlockhashAndContext(e) {
        let { commitment: t, config: r } = eD(e),
          n = this._buildArgs([], t, void 0, r),
          i = await this._rpcRequest("getLatestBlockhash", n),
          o = (0, f.create)(i, re);
        if ("error" in o)
          throw new ep(o.error, "failed to get latest blockhash");
        return o.result;
      }
      async isBlockhashValid(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgs([e], r, void 0, n),
          o = await this._rpcRequest("isBlockhashValid", i),
          s = (0, f.create)(o, rt);
        if ("error" in s)
          throw new ep(
            s.error,
            "failed to determine if the blockhash `" + e + "`is valid"
          );
        return s.result;
      }
      async getVersion() {
        let e = await this._rpcRequest("getVersion", []),
          t = (0, f.create)(e, eV(e5));
        if ("error" in t) throw new ep(t.error, "failed to get version");
        return t.result;
      }
      async getGenesisHash() {
        let e = await this._rpcRequest("getGenesisHash", []),
          t = (0, f.create)(e, eV((0, f.string)()));
        if ("error" in t) throw new ep(t.error, "failed to get genesis hash");
        return t.result;
      }
      async getBlock(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
          o = await this._rpcRequest("getBlock", i);
        try {
          switch (n?.transactionDetails) {
            case "accounts": {
              let e = (0, f.create)(o, t2);
              if ("error" in e) throw e.error;
              return e.result;
            }
            case "none": {
              let e = (0, f.create)(o, t1);
              if ("error" in e) throw e.error;
              return e.result;
            }
            default: {
              let e = (0, f.create)(o, t0);
              if ("error" in e) throw e.error;
              let { result: t } = e;
              return t
                ? {
                    ...t,
                    transactions: t.transactions.map(
                      ({ transaction: e, meta: t, version: r }) => ({
                        meta: t,
                        transaction: { ...e, message: eG(r, e.message) },
                        version: r,
                      })
                    ),
                  }
                : null;
            }
          }
        } catch (e) {
          throw new ep(e, "failed to get confirmed block");
        }
      }
      async getParsedBlock(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
          o = await this._rpcRequest("getBlock", i);
        try {
          switch (n?.transactionDetails) {
            case "accounts": {
              let e = (0, f.create)(o, t3);
              if ("error" in e) throw e.error;
              return e.result;
            }
            case "none": {
              let e = (0, f.create)(o, t5);
              if ("error" in e) throw e.error;
              return e.result;
            }
            default: {
              let e = (0, f.create)(o, t6);
              if ("error" in e) throw e.error;
              return e.result;
            }
          }
        } catch (e) {
          throw new ep(e, "failed to get block");
        }
      }
      async getBlockProduction(e) {
        let t, r;
        if ("string" == typeof e) r = e;
        else if (e) {
          let { commitment: n, ...i } = e;
          (r = n), (t = i);
        }
        let n = this._buildArgs([], r, "base64", t),
          i = await this._rpcRequest("getBlockProduction", n),
          o = (0, f.create)(i, e9);
        if ("error" in o)
          throw new ep(o.error, "failed to get block production information");
        return o.result;
      }
      async getTransaction(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
          o = await this._rpcRequest("getTransaction", i),
          s = (0, f.create)(o, t7);
        if ("error" in s) throw new ep(s.error, "failed to get transaction");
        let a = s.result;
        return a
          ? {
              ...a,
              transaction: {
                ...a.transaction,
                message: eG(a.version, a.transaction.message),
              },
            }
          : a;
      }
      async getParsedTransaction(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
          o = await this._rpcRequest("getTransaction", i),
          s = (0, f.create)(o, t9);
        if ("error" in s) throw new ep(s.error, "failed to get transaction");
        return s.result;
      }
      async getParsedTransactions(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = e.map((e) => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
          }));
        return (await this._rpcBatchRequest(i)).map((e) => {
          let t = (0, f.create)(e, t9);
          if ("error" in t) throw new ep(t.error, "failed to get transactions");
          return t.result;
        });
      }
      async getTransactions(e, t) {
        let { commitment: r, config: n } = eD(t),
          i = e.map((e) => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([e], r, void 0, n),
          }));
        return (await this._rpcBatchRequest(i)).map((e) => {
          let t = (0, f.create)(e, t7);
          if ("error" in t) throw new ep(t.error, "failed to get transactions");
          let r = t.result;
          return r
            ? {
                ...r,
                transaction: {
                  ...r.transaction,
                  message: eG(r.version, r.transaction.message),
                },
              }
            : r;
        });
      }
      async getConfirmedBlock(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t),
          n = await this._rpcRequest("getBlock", r),
          i = (0, f.create)(n, t4);
        if ("error" in i)
          throw new ep(i.error, "failed to get confirmed block");
        let o = i.result;
        if (!o) throw Error("Confirmed block " + e + " not found");
        let s = {
          ...o,
          transactions: o.transactions.map(({ transaction: e, meta: t }) => {
            let r = new G(e.message);
            return { meta: t, transaction: { ...e, message: r } };
          }),
        };
        return {
          ...s,
          transactions: s.transactions.map(({ transaction: e, meta: t }) => ({
            meta: t,
            transaction: ee.populate(e.message, e.signatures),
          })),
        };
      }
      async getBlocks(e, t, r) {
        let n = this._buildArgsAtLeastConfirmed(void 0 !== t ? [e, t] : [e], r),
          i = await this._rpcRequest("getBlocks", n),
          o = (0, f.create)(i, eV((0, f.array)((0, f.number)())));
        if ("error" in o) throw new ep(o.error, "failed to get blocks");
        return o.result;
      }
      async getBlockSignatures(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
            transactionDetails: "signatures",
            rewards: !1,
          }),
          n = await this._rpcRequest("getBlock", r),
          i = (0, f.create)(n, t8);
        if ("error" in i) throw new ep(i.error, "failed to get block");
        let o = i.result;
        if (!o) throw Error("Block " + e + " not found");
        return o;
      }
      async getConfirmedBlockSignatures(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
            transactionDetails: "signatures",
            rewards: !1,
          }),
          n = await this._rpcRequest("getBlock", r),
          i = (0, f.create)(n, t8);
        if ("error" in i)
          throw new ep(i.error, "failed to get confirmed block");
        let o = i.result;
        if (!o) throw Error("Confirmed block " + e + " not found");
        return o;
      }
      async getConfirmedTransaction(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t),
          n = await this._rpcRequest("getTransaction", r),
          i = (0, f.create)(n, t7);
        if ("error" in i) throw new ep(i.error, "failed to get transaction");
        let o = i.result;
        if (!o) return o;
        let s = new G(o.transaction.message),
          a = o.transaction.signatures;
        return { ...o, transaction: ee.populate(s, a) };
      }
      async getParsedConfirmedTransaction(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
          n = await this._rpcRequest("getTransaction", r),
          i = (0, f.create)(n, t9);
        if ("error" in i)
          throw new ep(i.error, "failed to get confirmed transaction");
        return i.result;
      }
      async getParsedConfirmedTransactions(e, t) {
        let r = e.map((e) => ({
          methodName: "getTransaction",
          args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
        }));
        return (await this._rpcBatchRequest(r)).map((e) => {
          let t = (0, f.create)(e, t9);
          if ("error" in t)
            throw new ep(t.error, "failed to get confirmed transactions");
          return t.result;
        });
      }
      async getConfirmedSignaturesForAddress(e, t, r) {
        let n = {},
          i = await this.getFirstAvailableBlock();
        for (; !("until" in n) && !(--t <= 0) && !(t < i); )
          try {
            let e = await this.getConfirmedBlockSignatures(t, "finalized");
            e.signatures.length > 0 &&
              (n.until = e.signatures[e.signatures.length - 1].toString());
          } catch (e) {
            if (e instanceof Error && e.message.includes("skipped")) continue;
            throw e;
          }
        let o = await this.getSlot("finalized");
        for (; !("before" in n) && !(++r > o); )
          try {
            let e = await this.getConfirmedBlockSignatures(r);
            e.signatures.length > 0 &&
              (n.before = e.signatures[e.signatures.length - 1].toString());
          } catch (e) {
            if (e instanceof Error && e.message.includes("skipped")) continue;
            throw e;
          }
        return (await this.getConfirmedSignaturesForAddress2(e, n)).map(
          (e) => e.signature
        );
      }
      async getConfirmedSignaturesForAddress2(e, t, r) {
        let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
          i = await this._rpcRequest("getConfirmedSignaturesForAddress2", n),
          o = (0, f.create)(i, tk);
        if ("error" in o)
          throw new ep(
            o.error,
            "failed to get confirmed signatures for address"
          );
        return o.result;
      }
      async getSignaturesForAddress(e, t, r) {
        let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
          i = await this._rpcRequest("getSignaturesForAddress", n),
          o = (0, f.create)(i, tS);
        if ("error" in o)
          throw new ep(o.error, "failed to get signatures for address");
        return o.result;
      }
      async getAddressLookupTable(e, t) {
        let { context: r, value: n } = await this.getAccountInfoAndContext(
            e,
            t
          ),
          i = null;
        return (
          null !== n && (i = new eN({ key: e, state: eN.deserialize(n.data) })),
          { context: r, value: i }
        );
      }
      async getNonceAndContext(e, t) {
        let { context: r, value: n } = await this.getAccountInfoAndContext(
            e,
            t
          ),
          i = null;
        return (
          null !== n && (i = ev.fromAccountData(n.data)),
          { context: r, value: i }
        );
      }
      async getNonce(e, t) {
        return await this.getNonceAndContext(e, t)
          .then((e) => e.value)
          .catch((t) => {
            throw Error(
              "failed to get nonce for account " + e.toBase58() + ": " + t
            );
          });
      }
      async requestAirdrop(e, t) {
        let r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
          n = (0, f.create)(r, ro);
        if ("error" in n)
          throw new ep(n.error, `airdrop to ${e.toBase58()} failed`);
        return n.result;
      }
      async _blockhashWithExpiryBlockHeight(e) {
        if (!e) {
          for (; this._pollingBlockhash; ) await ey(100);
          let e = Date.now() - this._blockhashInfo.lastFetch;
          if (null !== this._blockhashInfo.latestBlockhash && !(e >= 3e4))
            return this._blockhashInfo.latestBlockhash;
        }
        return await this._pollNewBlockhash();
      }
      async _pollNewBlockhash() {
        this._pollingBlockhash = !0;
        try {
          let e = Date.now(),
            t = this._blockhashInfo.latestBlockhash,
            r = t ? t.blockhash : null;
          for (let e = 0; e < 50; e++) {
            let e = await this.getLatestBlockhash("finalized");
            if (r !== e.blockhash)
              return (
                (this._blockhashInfo = {
                  latestBlockhash: e,
                  lastFetch: Date.now(),
                  transactionSignatures: [],
                  simulatedSignatures: [],
                }),
                e
              );
            await ey(200);
          }
          throw Error(
            `Unable to obtain a new blockhash after ${Date.now() - e}ms`
          );
        } finally {
          this._pollingBlockhash = !1;
        }
      }
      async getStakeMinimumDelegation(e) {
        let { commitment: t, config: r } = eD(e),
          n = this._buildArgs([], t, "base64", r),
          i = await this._rpcRequest("getStakeMinimumDelegation", n),
          o = (0, f.create)(i, e$((0, f.number)()));
        if ("error" in o)
          throw new ep(o.error, "failed to get stake minimum delegation");
        return o.result;
      }
      async simulateTransaction(e, t, r) {
        let n;
        if ("message" in e) {
          let n = e.serialize(),
            i = o.Buffer.from(n).toString("base64");
          if (Array.isArray(t) || void 0 !== r)
            throw Error("Invalid arguments");
          let s = t || {};
          (s.encoding = "base64"),
            "commitment" in s || (s.commitment = this.commitment),
            t &&
              "object" == typeof t &&
              "innerInstructions" in t &&
              (s.innerInstructions = t.innerInstructions);
          let a = [i, s],
            u = await this._rpcRequest("simulateTransaction", a),
            c = (0, f.create)(u, e7);
          if ("error" in c)
            throw Error("failed to simulate transaction: " + c.error.message);
          return c.result;
        }
        if (
          (e instanceof ee
            ? (((n = new ee()).feePayer = e.feePayer),
              (n.instructions = e.instructions),
              (n.nonceInfo = e.nonceInfo),
              (n.signatures = e.signatures))
            : ((n = ee.populate(e))._message = n._json = void 0),
          void 0 !== t && !Array.isArray(t))
        )
          throw Error("Invalid arguments");
        if (n.nonceInfo && t) n.sign(...t);
        else {
          let e = this._disableBlockhashCaching;
          for (;;) {
            let r = await this._blockhashWithExpiryBlockHeight(e);
            if (
              ((n.lastValidBlockHeight = r.lastValidBlockHeight),
              (n.recentBlockhash = r.blockhash),
              !t)
            )
              break;
            if ((n.sign(...t), !n.signature)) throw Error("!signature");
            let i = n.signature.toString("base64");
            if (
              this._blockhashInfo.simulatedSignatures.includes(i) ||
              this._blockhashInfo.transactionSignatures.includes(i)
            )
              e = !0;
            else {
              this._blockhashInfo.simulatedSignatures.push(i);
              break;
            }
          }
        }
        let i = n._compile(),
          s = i.serialize(),
          a = n._serialize(s).toString("base64"),
          u = { encoding: "base64", commitment: this.commitment };
        r &&
          (u.accounts = {
            encoding: "base64",
            addresses: (Array.isArray(r) ? r : i.nonProgramIds()).map((e) =>
              e.toBase58()
            ),
          }),
          t && (u.sigVerify = !0),
          t &&
            "object" == typeof t &&
            "innerInstructions" in t &&
            (u.innerInstructions = t.innerInstructions);
        let c = [a, u],
          l = await this._rpcRequest("simulateTransaction", c),
          d = (0, f.create)(l, e7);
        if ("error" in d) {
          let e;
          if (
            "data" in d.error &&
            (e = d.error.data.logs) &&
            Array.isArray(e)
          ) {
            let t = "\n    ",
              r = t + e.join(t);
            console.error(d.error.message, r);
          }
          throw new eh({
            action: "simulate",
            signature: "",
            transactionMessage: d.error.message,
            logs: e,
          });
        }
        return d.result;
      }
      async sendTransaction(e, t, r) {
        if ("version" in e) {
          if (t && Array.isArray(t)) throw Error("Invalid arguments");
          let r = e.serialize();
          return await this.sendRawTransaction(r, t);
        }
        if (void 0 === t || !Array.isArray(t)) throw Error("Invalid arguments");
        if (e.nonceInfo) e.sign(...t);
        else {
          let r = this._disableBlockhashCaching;
          for (;;) {
            let n = await this._blockhashWithExpiryBlockHeight(r);
            if (
              ((e.lastValidBlockHeight = n.lastValidBlockHeight),
              (e.recentBlockhash = n.blockhash),
              e.sign(...t),
              !e.signature)
            )
              throw Error("!signature");
            let i = e.signature.toString("base64");
            if (this._blockhashInfo.transactionSignatures.includes(i)) r = !0;
            else {
              this._blockhashInfo.transactionSignatures.push(i);
              break;
            }
          }
        }
        let n = e.serialize();
        return await this.sendRawTransaction(n, r);
      }
      async sendRawTransaction(e, t) {
        let r = x(e).toString("base64");
        return await this.sendEncodedTransaction(r, t);
      }
      async sendEncodedTransaction(e, t) {
        let r = { encoding: "base64" },
          n = t && t.skipPreflight,
          i =
            !0 === n
              ? "processed"
              : (t && t.preflightCommitment) || this.commitment;
        t && null != t.maxRetries && (r.maxRetries = t.maxRetries),
          t &&
            null != t.minContextSlot &&
            (r.minContextSlot = t.minContextSlot),
          n && (r.skipPreflight = n),
          i && (r.preflightCommitment = i);
        let o = [e, r],
          s = await this._rpcRequest("sendTransaction", o),
          a = (0, f.create)(s, rs);
        if ("error" in a) {
          let e;
          throw (
            ("data" in a.error && (e = a.error.data.logs),
            new eh({
              action: n ? "send" : "simulate",
              signature: "",
              transactionMessage: a.error.message,
              logs: e,
            }))
          );
        }
        return a.result;
      }
      _wsOnOpen() {
        (this._rpcWebSocketConnected = !0),
          (this._rpcWebSocketHeartbeat = setInterval(() => {
            (async () => {
              try {
                await this._rpcWebSocket.notify("ping");
              } catch {}
            })();
          }, 5e3)),
          this._updateSubscriptions();
      }
      _wsOnError(e) {
        (this._rpcWebSocketConnected = !1),
          console.error("ws error:", e.message);
      }
      _wsOnClose(e) {
        ((this._rpcWebSocketConnected = !1),
        (this._rpcWebSocketGeneration =
          (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
        this._rpcWebSocketIdleTimeout &&
          (clearTimeout(this._rpcWebSocketIdleTimeout),
          (this._rpcWebSocketIdleTimeout = null)),
        this._rpcWebSocketHeartbeat &&
          (clearInterval(this._rpcWebSocketHeartbeat),
          (this._rpcWebSocketHeartbeat = null)),
        1e3 === e)
          ? this._updateSubscriptions()
          : ((this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach(([e, t]) => {
              this._setSubscription(e, { ...t, state: "pending" });
            }));
      }
      _setSubscription(e, t) {
        let r = this._subscriptionsByHash[e]?.state;
        if (((this._subscriptionsByHash[e] = t), r !== t.state)) {
          let r = this._subscriptionStateChangeCallbacksByHash[e];
          r &&
            r.forEach((e) => {
              try {
                e(t.state);
              } catch {}
            });
        }
      }
      _onSubscriptionStateChange(e, t) {
        let r = this._subscriptionHashByClientSubscriptionId[e];
        if (null == r) return () => {};
        let n = (this._subscriptionStateChangeCallbacksByHash[r] ||= new Set());
        return (
          n.add(t),
          () => {
            n.delete(t),
              0 === n.size &&
                delete this._subscriptionStateChangeCallbacksByHash[r];
          }
        );
      }
      async _updateSubscriptions() {
        if (0 === Object.keys(this._subscriptionsByHash).length) {
          this._rpcWebSocketConnected &&
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketIdleTimeout = setTimeout(() => {
              this._rpcWebSocketIdleTimeout = null;
              try {
                this._rpcWebSocket.close();
              } catch (e) {
                e instanceof Error &&
                  console.log(
                    `Error when closing socket connection: ${e.message}`
                  );
              }
            }, 500)));
          return;
        }
        if (
          (null !== this._rpcWebSocketIdleTimeout &&
            (clearTimeout(this._rpcWebSocketIdleTimeout),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketConnected = !0)),
          !this._rpcWebSocketConnected)
        )
          return void this._rpcWebSocket.connect();
        let e = this._rpcWebSocketGeneration,
          t = () => e === this._rpcWebSocketGeneration;
        await Promise.all(
          Object.keys(this._subscriptionsByHash).map(async (e) => {
            let r = this._subscriptionsByHash[e];
            if (void 0 !== r)
              switch (r.state) {
                case "pending":
                case "unsubscribed":
                  if (0 === r.callbacks.size) {
                    delete this._subscriptionsByHash[e],
                      "unsubscribed" === r.state &&
                        delete this
                          ._subscriptionCallbacksByServerSubscriptionId[
                          r.serverSubscriptionId
                        ],
                      await this._updateSubscriptions();
                    return;
                  }
                  await (async () => {
                    let { args: n, method: i } = r;
                    try {
                      this._setSubscription(e, { ...r, state: "subscribing" });
                      let t = await this._rpcWebSocket.call(i, n);
                      this._setSubscription(e, {
                        ...r,
                        serverSubscriptionId: t,
                        state: "subscribed",
                      }),
                        (this._subscriptionCallbacksByServerSubscriptionId[t] =
                          r.callbacks),
                        await this._updateSubscriptions();
                    } catch (o) {
                      if (
                        (console.error(
                          `Received ${
                            o instanceof Error ? "" : "JSON-RPC "
                          }error calling \`${i}\``,
                          { args: n, error: o }
                        ),
                        !t())
                      )
                        return;
                      this._setSubscription(e, { ...r, state: "pending" }),
                        await this._updateSubscriptions();
                    }
                  })();
                  break;
                case "subscribed":
                  0 === r.callbacks.size &&
                    (await (async () => {
                      let { serverSubscriptionId: n, unsubscribeMethod: i } = r;
                      if (this._subscriptionsAutoDisposedByRpc.has(n))
                        this._subscriptionsAutoDisposedByRpc.delete(n);
                      else {
                        this._setSubscription(e, {
                          ...r,
                          state: "unsubscribing",
                        }),
                          this._setSubscription(e, {
                            ...r,
                            state: "unsubscribing",
                          });
                        try {
                          await this._rpcWebSocket.call(i, [n]);
                        } catch (n) {
                          if (
                            (n instanceof Error &&
                              console.error(`${i} error:`, n.message),
                            !t())
                          )
                            return;
                          this._setSubscription(e, {
                            ...r,
                            state: "subscribed",
                          }),
                            await this._updateSubscriptions();
                          return;
                        }
                      }
                      this._setSubscription(e, { ...r, state: "unsubscribed" }),
                        await this._updateSubscriptions();
                    })());
              }
          })
        );
      }
      _handleServerNotification(e, t) {
        let r = this._subscriptionCallbacksByServerSubscriptionId[e];
        void 0 !== r &&
          r.forEach((e) => {
            try {
              e(...t);
            } catch (e) {
              console.error(e);
            }
          });
      }
      _wsOnAccountNotification(e) {
        let { result: t, subscription: r } = (0, f.create)(e, tv);
        this._handleServerNotification(r, [t.value, t.context]);
      }
      _makeSubscription(e, t) {
        let r = this._nextClientSubscriptionId++,
          n = eB([e.method, t]),
          i = this._subscriptionsByHash[n];
        return (
          void 0 === i
            ? (this._subscriptionsByHash[n] = {
                ...e,
                args: t,
                callbacks: new Set([e.callback]),
                state: "pending",
              })
            : i.callbacks.add(e.callback),
          (this._subscriptionHashByClientSubscriptionId[r] = n),
          (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] =
            async () => {
              delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                r
              ],
                delete this._subscriptionHashByClientSubscriptionId[r];
              let t = this._subscriptionsByHash[n];
              q(
                void 0 !== t,
                `Could not find a \`Subscription\` when tearing down client subscription #${r}`
              ),
                t.callbacks.delete(e.callback),
                await this._updateSubscriptions();
            }),
          this._updateSubscriptions(),
          r
        );
      }
      onAccountChange(e, t, r) {
        let { commitment: n, config: i } = eD(r),
          o = this._buildArgs(
            [e.toBase58()],
            n || this._commitment || "finalized",
            "base64",
            i
          );
        return this._makeSubscription(
          {
            callback: t,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe",
          },
          o
        );
      }
      async removeAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "account change");
      }
      _wsOnProgramAccountNotification(e) {
        let { result: t, subscription: r } = (0, f.create)(e, tE);
        this._handleServerNotification(r, [
          { accountId: t.value.pubkey, accountInfo: t.value.account },
          t.context,
        ]);
      }
      onProgramAccountChange(e, t, r, n) {
        let { commitment: i, config: o } = eD(r),
          s = this._buildArgs(
            [e.toBase58()],
            i || this._commitment || "finalized",
            "base64",
            o || (n ? { filters: eK(n) } : void 0)
          );
        return this._makeSubscription(
          {
            callback: t,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe",
          },
          s
        );
      }
      async removeProgramAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "program account change");
      }
      onLogs(e, t, r) {
        let n = this._buildArgs(
          ["object" == typeof e ? { mentions: [e.toString()] } : e],
          r || this._commitment || "finalized"
        );
        return this._makeSubscription(
          {
            callback: t,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe",
          },
          n
        );
      }
      async removeOnLogsListener(e) {
        await this._unsubscribeClientSubscription(e, "logs");
      }
      _wsOnLogsNotification(e) {
        let { result: t, subscription: r } = (0, f.create)(e, ru);
        this._handleServerNotification(r, [t.value, t.context]);
      }
      _wsOnSlotNotification(e) {
        let { result: t, subscription: r } = (0, f.create)(e, tA);
        this._handleServerNotification(r, [t]);
      }
      onSlotChange(e) {
        return this._makeSubscription(
          {
            callback: e,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe",
          },
          []
        );
      }
      async removeSlotChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "slot change");
      }
      _wsOnSlotUpdatesNotification(e) {
        let { result: t, subscription: r } = (0, f.create)(e, tR);
        this._handleServerNotification(r, [t]);
      }
      onSlotUpdate(e) {
        return this._makeSubscription(
          {
            callback: e,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe",
          },
          []
        );
      }
      async removeSlotUpdateListener(e) {
        await this._unsubscribeClientSubscription(e, "slot update");
      }
      async _unsubscribeClientSubscription(e, t) {
        let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
        r
          ? await r()
          : console.warn(
              `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
            );
      }
      _buildArgs(e, t, r, n) {
        let i = t || this._commitment;
        if (i || r || n) {
          let t = {};
          r && (t.encoding = r),
            i && (t.commitment = i),
            n && (t = Object.assign(t, n)),
            e.push(t);
        }
        return e;
      }
      _buildArgsAtLeastConfirmed(e, t, r, n) {
        let i = t || this._commitment;
        if (i && !["confirmed", "finalized"].includes(i))
          throw Error(
            "Using Connection with default commitment: `" +
              this._commitment +
              "`, but method requires at least `confirmed`"
          );
        return this._buildArgs(e, t, r, n);
      }
      _wsOnSignatureNotification(e) {
        let { result: t, subscription: r } = (0, f.create)(e, tP);
        "receivedSignature" !== t.value &&
          this._subscriptionsAutoDisposedByRpc.add(r),
          this._handleServerNotification(
            r,
            "receivedSignature" === t.value
              ? [{ type: "received" }, t.context]
              : [{ type: "status", result: t.value }, t.context]
          );
      }
      onSignature(e, t, r) {
        let n = this._buildArgs([e], r || this._commitment || "finalized"),
          i = this._makeSubscription(
            {
              callback: (e, r) => {
                if ("status" === e.type) {
                  t(e.result, r);
                  try {
                    this.removeSignatureListener(i);
                  } catch (e) {}
                }
              },
              method: "signatureSubscribe",
              unsubscribeMethod: "signatureUnsubscribe",
            },
            n
          );
        return i;
      }
      onSignatureWithOptions(e, t, r) {
        let { commitment: n, ...i } = {
            ...r,
            commitment: (r && r.commitment) || this._commitment || "finalized",
          },
          o = this._buildArgs([e], n, void 0, i),
          s = this._makeSubscription(
            {
              callback: (e, r) => {
                t(e, r);
                try {
                  this.removeSignatureListener(s);
                } catch (e) {}
              },
              method: "signatureSubscribe",
              unsubscribeMethod: "signatureUnsubscribe",
            },
            o
          );
        return s;
      }
      async removeSignatureListener(e) {
        await this._unsubscribeClientSubscription(e, "signature result");
      }
      _wsOnRootNotification(e) {
        let { result: t, subscription: r } = (0, f.create)(e, tB);
        this._handleServerNotification(r, [t]);
      }
      onRootChange(e) {
        return this._makeSubscription(
          {
            callback: e,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe",
          },
          []
        );
      }
      async removeRootChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "root change");
      }
    }
    class rd {
      constructor(e) {
        (this._keypair = void 0), (this._keypair = e ?? v());
      }
      static generate() {
        return new rd(v());
      }
      static fromSecretKey(e, t) {
        if (64 !== e.byteLength) throw Error("bad secret key size");
        let r = e.slice(32, 64);
        if (!t || !t.skipValidation) {
          let t = _(e.slice(0, 32));
          for (let e = 0; e < 32; e++)
            if (r[e] !== t[e]) throw Error("provided secretKey is invalid");
        }
        return new rd({ publicKey: r, secretKey: e });
      }
      static fromSeed(e) {
        let t = _(e),
          r = new Uint8Array(64);
        return r.set(e), r.set(t, 32), new rd({ publicKey: t, secretKey: r });
      }
      get publicKey() {
        return new O(this._keypair.publicKey);
      }
      get secretKey() {
        return new Uint8Array(this._keypair.secretKey);
      }
    }
    let rh = Object.freeze({
      CreateLookupTable: {
        index: 0,
        layout: d.struct([
          d.u32("instruction"),
          e_("recentSlot"),
          d.u8("bumpSeed"),
        ]),
      },
      FreezeLookupTable: { index: 1, layout: d.struct([d.u32("instruction")]) },
      ExtendLookupTable: {
        index: 2,
        layout: d.struct([
          d.u32("instruction"),
          e_(),
          d.seq(W(), d.offset(d.u32(), -8), "addresses"),
        ]),
      },
      DeactivateLookupTable: {
        index: 3,
        layout: d.struct([d.u32("instruction")]),
      },
      CloseLookupTable: { index: 4, layout: d.struct([d.u32("instruction")]) },
    });
    class rf {
      static decodeInstructionType(e) {
        let t;
        this.checkProgramId(e.programId);
        let r = d.u32("instruction").decode(e.data);
        for (let [e, n] of Object.entries(rh))
          if (n.index == r) {
            t = e;
            break;
          }
        if (!t)
          throw Error(
            "Invalid Instruction. Should be a LookupTable Instruction"
          );
        return t;
      }
      static decodeCreateLookupTable(e) {
        this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
        let { recentSlot: t } = em(rh.CreateLookupTable, e.data);
        return {
          authority: e.keys[1].pubkey,
          payer: e.keys[2].pubkey,
          recentSlot: Number(t),
        };
      }
      static decodeExtendLookupTable(e) {
        if ((this.checkProgramId(e.programId), e.keys.length < 2))
          throw Error(
            `invalid instruction; found ${e.keys.length} keys, expected at least 2`
          );
        let { addresses: t } = em(rh.ExtendLookupTable, e.data);
        return {
          lookupTable: e.keys[0].pubkey,
          authority: e.keys[1].pubkey,
          payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
          addresses: t.map((e) => new O(e)),
        };
      }
      static decodeCloseLookupTable(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeysLength(e.keys, 3),
          {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            recipient: e.keys[2].pubkey,
          }
        );
      }
      static decodeFreezeLookupTable(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeysLength(e.keys, 2),
          { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
        );
      }
      static decodeDeactivateLookupTable(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeysLength(e.keys, 2),
          { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
        );
      }
      static checkProgramId(e) {
        if (!e.equals(rp.programId))
          throw Error(
            "invalid instruction; programId is not AddressLookupTable Program"
          );
      }
      static checkKeysLength(e, t) {
        if (e.length < t)
          throw Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }
    class rp {
      static createLookupTable(e) {
        let [t, r] = O.findProgramAddressSync(
            [
              e.authority.toBuffer(),
              (0, h.getU64Encoder)().encode(e.recentSlot),
            ],
            this.programId
          ),
          n = eb(rh.CreateLookupTable, {
            recentSlot: BigInt(e.recentSlot),
            bumpSeed: r,
          }),
          i = [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            { pubkey: e.payer, isSigner: !0, isWritable: !0 },
            { pubkey: eA.programId, isSigner: !1, isWritable: !1 },
          ];
        return [new Q({ programId: this.programId, keys: i, data: n }), t];
      }
      static freezeLookupTable(e) {
        let t = eb(rh.FreezeLookupTable),
          r = [
            { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
            { pubkey: e.authority, isSigner: !0, isWritable: !1 },
          ];
        return new Q({ programId: this.programId, keys: r, data: t });
      }
      static extendLookupTable(e) {
        let t = eb(rh.ExtendLookupTable, {
            addresses: e.addresses.map((e) => e.toBytes()),
          }),
          r = [
            { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
            { pubkey: e.authority, isSigner: !0, isWritable: !1 },
          ];
        return (
          e.payer &&
            r.push(
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: eA.programId, isSigner: !1, isWritable: !1 }
            ),
          new Q({ programId: this.programId, keys: r, data: t })
        );
      }
      static deactivateLookupTable(e) {
        let t = eb(rh.DeactivateLookupTable),
          r = [
            { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
            { pubkey: e.authority, isSigner: !0, isWritable: !1 },
          ];
        return new Q({ programId: this.programId, keys: r, data: t });
      }
      static closeLookupTable(e) {
        let t = eb(rh.CloseLookupTable),
          r = [
            { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
            { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
          ];
        return new Q({ programId: this.programId, keys: r, data: t });
      }
    }
    rp.programId = new O("AddressLookupTab1e1111111111111111111111111");
    class rg {
      static decodeInstructionType(e) {
        let t;
        this.checkProgramId(e.programId);
        let r = d.u8("instruction").decode(e.data);
        for (let [e, n] of Object.entries(ry))
          if (n.index == r) {
            t = e;
            break;
          }
        if (!t)
          throw Error(
            "Instruction type incorrect; not a ComputeBudgetInstruction"
          );
        return t;
      }
      static decodeRequestUnits(e) {
        this.checkProgramId(e.programId);
        let { units: t, additionalFee: r } = em(ry.RequestUnits, e.data);
        return { units: t, additionalFee: r };
      }
      static decodeRequestHeapFrame(e) {
        this.checkProgramId(e.programId);
        let { bytes: t } = em(ry.RequestHeapFrame, e.data);
        return { bytes: t };
      }
      static decodeSetComputeUnitLimit(e) {
        this.checkProgramId(e.programId);
        let { units: t } = em(ry.SetComputeUnitLimit, e.data);
        return { units: t };
      }
      static decodeSetComputeUnitPrice(e) {
        this.checkProgramId(e.programId);
        let { microLamports: t } = em(ry.SetComputeUnitPrice, e.data);
        return { microLamports: t };
      }
      static checkProgramId(e) {
        if (!e.equals(rb.programId))
          throw Error(
            "invalid instruction; programId is not ComputeBudgetProgram"
          );
      }
    }
    let ry = Object.freeze({
      RequestUnits: {
        index: 0,
        layout: d.struct([
          d.u8("instruction"),
          d.u32("units"),
          d.u32("additionalFee"),
        ]),
      },
      RequestHeapFrame: {
        index: 1,
        layout: d.struct([d.u8("instruction"), d.u32("bytes")]),
      },
      SetComputeUnitLimit: {
        index: 2,
        layout: d.struct([d.u8("instruction"), d.u32("units")]),
      },
      SetComputeUnitPrice: {
        index: 3,
        layout: d.struct([d.u8("instruction"), e_("microLamports")]),
      },
    });
    class rb {
      static requestUnits(e) {
        let t = eb(ry.RequestUnits, e);
        return new Q({ keys: [], programId: this.programId, data: t });
      }
      static requestHeapFrame(e) {
        let t = eb(ry.RequestHeapFrame, e);
        return new Q({ keys: [], programId: this.programId, data: t });
      }
      static setComputeUnitLimit(e) {
        let t = eb(ry.SetComputeUnitLimit, e);
        return new Q({ keys: [], programId: this.programId, data: t });
      }
      static setComputeUnitPrice(e) {
        let t = eb(ry.SetComputeUnitPrice, {
          microLamports: BigInt(e.microLamports),
        });
        return new Q({ keys: [], programId: this.programId, data: t });
      }
    }
    rb.programId = new O("ComputeBudget111111111111111111111111111111");
    let rm = d.struct([
      d.u8("numSignatures"),
      d.u8("padding"),
      d.u16("signatureOffset"),
      d.u16("signatureInstructionIndex"),
      d.u16("publicKeyOffset"),
      d.u16("publicKeyInstructionIndex"),
      d.u16("messageDataOffset"),
      d.u16("messageDataSize"),
      d.u16("messageInstructionIndex"),
    ]);
    class rw {
      static createInstructionWithPublicKey(e) {
        let { publicKey: t, message: r, signature: n, instructionIndex: i } = e;
        q(
          32 === t.length,
          `Public Key must be 32 bytes but received ${t.length} bytes`
        ),
          q(
            64 === n.length,
            `Signature must be 64 bytes but received ${n.length} bytes`
          );
        let s = rm.span,
          a = s + t.length,
          u = a + n.length,
          c = o.Buffer.alloc(u + r.length),
          l = null == i ? 65535 : i;
        return (
          rm.encode(
            {
              numSignatures: 1,
              padding: 0,
              signatureOffset: a,
              signatureInstructionIndex: l,
              publicKeyOffset: s,
              publicKeyInstructionIndex: l,
              messageDataOffset: u,
              messageDataSize: r.length,
              messageInstructionIndex: l,
            },
            c
          ),
          c.fill(t, s),
          c.fill(n, a),
          c.fill(r, u),
          new Q({ keys: [], programId: rw.programId, data: c })
        );
      }
      static createInstructionWithPrivateKey(e) {
        let { privateKey: t, message: r, instructionIndex: n } = e;
        q(
          64 === t.length,
          `Private key must be 64 bytes but received ${t.length} bytes`
        );
        try {
          let e = rd.fromSecretKey(t),
            i = e.publicKey.toBytes(),
            o = I(r, e.secretKey);
          return this.createInstructionWithPublicKey({
            publicKey: i,
            message: r,
            signature: o,
            instructionIndex: n,
          });
        } catch (e) {
          throw Error(`Error creating instruction; ${e}`);
        }
      }
    }
    (rw.programId = new O("Ed25519SigVerify111111111111111111111111111")),
      k.secp256k1.utils.isValidPrivateKey;
    let rk = k.secp256k1.getPublicKey,
      rS = d.struct([
        d.u8("numSignatures"),
        d.u16("signatureOffset"),
        d.u8("signatureInstructionIndex"),
        d.u16("ethAddressOffset"),
        d.u8("ethAddressInstructionIndex"),
        d.u16("messageDataOffset"),
        d.u16("messageDataSize"),
        d.u8("messageInstructionIndex"),
        d.blob(20, "ethAddress"),
        d.blob(64, "signature"),
        d.u8("recoveryId"),
      ]);
    class rv {
      static publicKeyToEthAddress(e) {
        q(
          64 === e.length,
          `Public key must be 64 bytes but received ${e.length} bytes`
        );
        try {
          return o.Buffer.from((0, w.keccak_256)(x(e))).slice(-20);
        } catch (e) {
          throw Error(`Error constructing Ethereum address: ${e}`);
        }
      }
      static createInstructionWithPublicKey(e) {
        let {
          publicKey: t,
          message: r,
          signature: n,
          recoveryId: i,
          instructionIndex: o,
        } = e;
        return rv.createInstructionWithEthAddress({
          ethAddress: rv.publicKeyToEthAddress(t),
          message: r,
          signature: n,
          recoveryId: i,
          instructionIndex: o,
        });
      }
      static createInstructionWithEthAddress(e) {
        let t,
          {
            ethAddress: r,
            message: n,
            signature: i,
            recoveryId: s,
            instructionIndex: a = 0,
          } = e;
        q(
          20 ===
            (t =
              "string" == typeof r
                ? r.startsWith("0x")
                  ? o.Buffer.from(r.substr(2), "hex")
                  : o.Buffer.from(r, "hex")
                : r).length,
          `Address must be 20 bytes but received ${t.length} bytes`
        );
        let u = 12 + t.length,
          c = u + i.length + 1,
          l = o.Buffer.alloc(rS.span + n.length);
        return (
          rS.encode(
            {
              numSignatures: 1,
              signatureOffset: u,
              signatureInstructionIndex: a,
              ethAddressOffset: 12,
              ethAddressInstructionIndex: a,
              messageDataOffset: c,
              messageDataSize: n.length,
              messageInstructionIndex: a,
              signature: x(i),
              ethAddress: x(t),
              recoveryId: s,
            },
            l
          ),
          l.fill(x(n), rS.span),
          new Q({ keys: [], programId: rv.programId, data: l })
        );
      }
      static createInstructionWithPrivateKey(e) {
        let { privateKey: t, message: r, instructionIndex: n } = e;
        q(
          32 === t.length,
          `Private key must be 32 bytes but received ${t.length} bytes`
        );
        try {
          var i;
          let e,
            s = x(t),
            a = rk(s, !1).slice(1),
            [u, c] =
              ((i = o.Buffer.from((0, w.keccak_256)(x(r)))),
              [(e = k.secp256k1.sign(i, s)).toCompactRawBytes(), e.recovery]);
          return this.createInstructionWithPublicKey({
            publicKey: a,
            message: r,
            signature: u,
            recoveryId: c,
            instructionIndex: n,
          });
        } catch (e) {
          throw Error(`Error creating instruction; ${e}`);
        }
      }
    }
    rv.programId = new O("KeccakSecp256k11111111111111111111111111111");
    let r_ = new O("StakeConfig11111111111111111111111111111111");
    class rE {
      constructor(e, t) {
        (this.staker = void 0),
          (this.withdrawer = void 0),
          (this.staker = e),
          (this.withdrawer = t);
      }
    }
    class rI {
      constructor(e, t, r) {
        (this.unixTimestamp = void 0),
          (this.epoch = void 0),
          (this.custodian = void 0),
          (this.unixTimestamp = e),
          (this.epoch = t),
          (this.custodian = r);
      }
    }
    rI.default = new rI(0, 0, O.default);
    class rA {
      static decodeInstructionType(e) {
        let t;
        this.checkProgramId(e.programId);
        let r = d.u32("instruction").decode(e.data);
        for (let [e, n] of Object.entries(rx))
          if (n.index == r) {
            t = e;
            break;
          }
        if (!t)
          throw Error("Instruction type incorrect; not a StakeInstruction");
        return t;
      }
      static decodeInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { authorized: t, lockup: r } = em(rx.Initialize, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          authorized: new rE(new O(t.staker), new O(t.withdrawer)),
          lockup: new rI(r.unixTimestamp, r.epoch, new O(r.custodian)),
        };
      }
      static decodeDelegate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 6),
          em(rx.Delegate, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            votePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[5].pubkey,
          }
        );
      }
      static decodeAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { newAuthorized: t, stakeAuthorizationType: r } = em(
            rx.Authorize,
            e.data
          ),
          n = {
            stakePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new O(t),
            stakeAuthorizationType: { index: r },
          };
        return e.keys.length > 3 && (n.custodianPubkey = e.keys[3].pubkey), n;
      }
      static decodeAuthorizeWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let {
            newAuthorized: t,
            stakeAuthorizationType: r,
            authoritySeed: n,
            authorityOwner: i,
          } = em(rx.AuthorizeWithSeed, e.data),
          o = {
            stakePubkey: e.keys[0].pubkey,
            authorityBase: e.keys[1].pubkey,
            authoritySeed: n,
            authorityOwner: new O(i),
            newAuthorizedPubkey: new O(t),
            stakeAuthorizationType: { index: r },
          };
        return e.keys.length > 3 && (o.custodianPubkey = e.keys[3].pubkey), o;
      }
      static decodeSplit(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { lamports: t } = em(rx.Split, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          splitStakePubkey: e.keys[1].pubkey,
          authorizedPubkey: e.keys[2].pubkey,
          lamports: t,
        };
      }
      static decodeMerge(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          em(rx.Merge, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            sourceStakePubKey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
          }
        );
      }
      static decodeWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        let { lamports: t } = em(rx.Withdraw, e.data),
          r = {
            stakePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r;
      }
      static decodeDeactivate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          em(rx.Deactivate, e.data),
          { stakePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
        );
      }
      static checkProgramId(e) {
        if (!e.equals(rP.programId))
          throw Error("invalid instruction; programId is not StakeProgram");
      }
      static checkKeyLength(e, t) {
        if (e.length < t)
          throw Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }
    let rx = Object.freeze({
        Initialize: {
          index: 0,
          layout: d.struct([
            d.u32("instruction"),
            ((e = "authorized") =>
              d.struct([W("staker"), W("withdrawer")], e))(),
            ((e = "lockup") =>
              d.struct(
                [d.ns64("unixTimestamp"), d.ns64("epoch"), W("custodian")],
                e
              ))(),
          ]),
        },
        Authorize: {
          index: 1,
          layout: d.struct([
            d.u32("instruction"),
            W("newAuthorized"),
            d.u32("stakeAuthorizationType"),
          ]),
        },
        Delegate: { index: 2, layout: d.struct([d.u32("instruction")]) },
        Split: {
          index: 3,
          layout: d.struct([d.u32("instruction"), d.ns64("lamports")]),
        },
        Withdraw: {
          index: 4,
          layout: d.struct([d.u32("instruction"), d.ns64("lamports")]),
        },
        Deactivate: { index: 5, layout: d.struct([d.u32("instruction")]) },
        Merge: { index: 7, layout: d.struct([d.u32("instruction")]) },
        AuthorizeWithSeed: {
          index: 8,
          layout: d.struct([
            d.u32("instruction"),
            W("newAuthorized"),
            d.u32("stakeAuthorizationType"),
            j("authoritySeed"),
            W("authorityOwner"),
          ]),
        },
      }),
      rR = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
    class rP {
      static initialize(e) {
        let { stakePubkey: t, authorized: r, lockup: n } = e,
          i = n || rI.default,
          o = eb(rx.Initialize, {
            authorized: {
              staker: x(r.staker.toBuffer()),
              withdrawer: x(r.withdrawer.toBuffer()),
            },
            lockup: {
              unixTimestamp: i.unixTimestamp,
              epoch: i.epoch,
              custodian: x(i.custodian.toBuffer()),
            },
          });
        return new Q({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: ea, isSigner: !1, isWritable: !1 },
          ],
          programId: this.programId,
          data: o,
        });
      }
      static createAccountWithSeed(e) {
        let t = new ee();
        t.add(
          eA.createAccountWithSeed({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.stakePubkey,
            basePubkey: e.basePubkey,
            seed: e.seed,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId,
          })
        );
        let { stakePubkey: r, authorized: n, lockup: i } = e;
        return t.add(
          this.initialize({ stakePubkey: r, authorized: n, lockup: i })
        );
      }
      static createAccount(e) {
        let t = new ee();
        t.add(
          eA.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.stakePubkey,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId,
          })
        );
        let { stakePubkey: r, authorized: n, lockup: i } = e;
        return t.add(
          this.initialize({ stakePubkey: r, authorized: n, lockup: i })
        );
      }
      static delegate(e) {
        let { stakePubkey: t, authorizedPubkey: r, votePubkey: n } = e,
          i = eb(rx.Delegate);
        return new ee().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !1, isWritable: !1 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
            { pubkey: ed, isSigner: !1, isWritable: !1 },
            { pubkey: r_, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
      static authorize(e) {
        let {
            stakePubkey: t,
            authorizedPubkey: r,
            newAuthorizedPubkey: n,
            stakeAuthorizationType: i,
            custodianPubkey: o,
          } = e,
          s = eb(rx.Authorize, {
            newAuthorized: x(n.toBuffer()),
            stakeAuthorizationType: i.index,
          }),
          a = [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: en, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ];
        return (
          o && a.push({ pubkey: o, isSigner: !0, isWritable: !1 }),
          new ee().add({ keys: a, programId: this.programId, data: s })
        );
      }
      static authorizeWithSeed(e) {
        let {
            stakePubkey: t,
            authorityBase: r,
            authoritySeed: n,
            authorityOwner: i,
            newAuthorizedPubkey: o,
            stakeAuthorizationType: s,
            custodianPubkey: a,
          } = e,
          u = eb(rx.AuthorizeWithSeed, {
            newAuthorized: x(o.toBuffer()),
            stakeAuthorizationType: s.index,
            authoritySeed: n,
            authorityOwner: x(i.toBuffer()),
          }),
          c = [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
          ];
        return (
          a && c.push({ pubkey: a, isSigner: !0, isWritable: !1 }),
          new ee().add({ keys: c, programId: this.programId, data: u })
        );
      }
      static splitInstruction(e) {
        let {
            stakePubkey: t,
            authorizedPubkey: r,
            splitStakePubkey: n,
            lamports: i,
          } = e,
          o = eb(rx.Split, { lamports: i });
        return new Q({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: o,
        });
      }
      static split(e, t) {
        let r = new ee();
        return (
          r.add(
            eA.createAccount({
              fromPubkey: e.authorizedPubkey,
              newAccountPubkey: e.splitStakePubkey,
              lamports: t,
              space: this.space,
              programId: this.programId,
            })
          ),
          r.add(this.splitInstruction(e))
        );
      }
      static splitWithSeed(e, t) {
        let {
            stakePubkey: r,
            authorizedPubkey: n,
            splitStakePubkey: i,
            basePubkey: o,
            seed: s,
            lamports: a,
          } = e,
          u = new ee();
        return (
          u.add(
            eA.allocate({
              accountPubkey: i,
              basePubkey: o,
              seed: s,
              space: this.space,
              programId: this.programId,
            })
          ),
          t &&
            t > 0 &&
            u.add(
              eA.transfer({
                fromPubkey: e.authorizedPubkey,
                toPubkey: i,
                lamports: t,
              })
            ),
          u.add(
            this.splitInstruction({
              stakePubkey: r,
              authorizedPubkey: n,
              splitStakePubkey: i,
              lamports: a,
            })
          )
        );
      }
      static merge(e) {
        let { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: n } = e,
          i = eb(rx.Merge);
        return new ee().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !1, isWritable: !0 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
            { pubkey: ed, isSigner: !1, isWritable: !1 },
            { pubkey: n, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
      static withdraw(e) {
        let {
            stakePubkey: t,
            authorizedPubkey: r,
            toPubkey: n,
            lamports: i,
            custodianPubkey: o,
          } = e,
          s = eb(rx.Withdraw, { lamports: i }),
          a = [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !1, isWritable: !0 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
            { pubkey: ed, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ];
        return (
          o && a.push({ pubkey: o, isSigner: !0, isWritable: !1 }),
          new ee().add({ keys: a, programId: this.programId, data: s })
        );
      }
      static deactivate(e) {
        let { stakePubkey: t, authorizedPubkey: r } = e,
          n = eb(rx.Deactivate);
        return new ee().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: n,
        });
      }
    }
    (rP.programId = new O("Stake11111111111111111111111111111111111111")),
      (rP.space = 200);
    class rB {
      constructor(e, t, r, n) {
        (this.nodePubkey = void 0),
          (this.authorizedVoter = void 0),
          (this.authorizedWithdrawer = void 0),
          (this.commission = void 0),
          (this.nodePubkey = e),
          (this.authorizedVoter = t),
          (this.authorizedWithdrawer = r),
          (this.commission = n);
      }
    }
    class rT {
      static decodeInstructionType(e) {
        let t;
        this.checkProgramId(e.programId);
        let r = d.u32("instruction").decode(e.data);
        for (let [e, n] of Object.entries(rO))
          if (n.index == r) {
            t = e;
            break;
          }
        if (!t)
          throw Error("Instruction type incorrect; not a VoteInstruction");
        return t;
      }
      static decodeInitializeAccount(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
        let { voteInit: t } = em(rO.InitializeAccount, e.data);
        return {
          votePubkey: e.keys[0].pubkey,
          nodePubkey: e.keys[3].pubkey,
          voteInit: new rB(
            new O(t.nodePubkey),
            new O(t.authorizedVoter),
            new O(t.authorizedWithdrawer),
            t.commission
          ),
        };
      }
      static decodeAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { newAuthorized: t, voteAuthorizationType: r } = em(
          rO.Authorize,
          e.data
        );
        return {
          votePubkey: e.keys[0].pubkey,
          authorizedPubkey: e.keys[2].pubkey,
          newAuthorizedPubkey: new O(t),
          voteAuthorizationType: { index: r },
        };
      }
      static decodeAuthorizeWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let {
          voteAuthorizeWithSeedArgs: {
            currentAuthorityDerivedKeyOwnerPubkey: t,
            currentAuthorityDerivedKeySeed: r,
            newAuthorized: n,
            voteAuthorizationType: i,
          },
        } = em(rO.AuthorizeWithSeed, e.data);
        return {
          currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
          currentAuthorityDerivedKeyOwnerPubkey: new O(t),
          currentAuthorityDerivedKeySeed: r,
          newAuthorizedPubkey: new O(n),
          voteAuthorizationType: { index: i },
          votePubkey: e.keys[0].pubkey,
        };
      }
      static decodeWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { lamports: t } = em(rO.Withdraw, e.data);
        return {
          votePubkey: e.keys[0].pubkey,
          authorizedWithdrawerPubkey: e.keys[2].pubkey,
          lamports: t,
          toPubkey: e.keys[1].pubkey,
        };
      }
      static checkProgramId(e) {
        if (!e.equals(rL.programId))
          throw Error("invalid instruction; programId is not VoteProgram");
      }
      static checkKeyLength(e, t) {
        if (e.length < t)
          throw Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }
    let rO = Object.freeze({
        InitializeAccount: {
          index: 0,
          layout: d.struct([
            d.u32("instruction"),
            ((e = "voteInit") =>
              d.struct(
                [
                  W("nodePubkey"),
                  W("authorizedVoter"),
                  W("authorizedWithdrawer"),
                  d.u8("commission"),
                ],
                e
              ))(),
          ]),
        },
        Authorize: {
          index: 1,
          layout: d.struct([
            d.u32("instruction"),
            W("newAuthorized"),
            d.u32("voteAuthorizationType"),
          ]),
        },
        Withdraw: {
          index: 3,
          layout: d.struct([d.u32("instruction"), d.ns64("lamports")]),
        },
        UpdateValidatorIdentity: {
          index: 4,
          layout: d.struct([d.u32("instruction")]),
        },
        AuthorizeWithSeed: {
          index: 10,
          layout: d.struct([
            d.u32("instruction"),
            ((e = "voteAuthorizeWithSeedArgs") =>
              d.struct(
                [
                  d.u32("voteAuthorizationType"),
                  W("currentAuthorityDerivedKeyOwnerPubkey"),
                  j("currentAuthorityDerivedKeySeed"),
                  W("newAuthorized"),
                ],
                e
              ))(),
          ]),
        },
      }),
      rC = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
    class rL {
      static initializeAccount(e) {
        let { votePubkey: t, nodePubkey: r, voteInit: n } = e,
          i = eb(rO.InitializeAccount, {
            voteInit: {
              nodePubkey: x(n.nodePubkey.toBuffer()),
              authorizedVoter: x(n.authorizedVoter.toBuffer()),
              authorizedWithdrawer: x(n.authorizedWithdrawer.toBuffer()),
              commission: n.commission,
            },
          });
        return new Q({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: ea, isSigner: !1, isWritable: !1 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
      static createAccount(e) {
        let t = new ee();
        return (
          t.add(
            eA.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.votePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          ),
          t.add(
            this.initializeAccount({
              votePubkey: e.votePubkey,
              nodePubkey: e.voteInit.nodePubkey,
              voteInit: e.voteInit,
            })
          )
        );
      }
      static authorize(e) {
        let {
            votePubkey: t,
            authorizedPubkey: r,
            newAuthorizedPubkey: n,
            voteAuthorizationType: i,
          } = e,
          o = eb(rO.Authorize, {
            newAuthorized: x(n.toBuffer()),
            voteAuthorizationType: i.index,
          });
        return new ee().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: o,
        });
      }
      static authorizeWithSeed(e) {
        let {
            currentAuthorityDerivedKeyBasePubkey: t,
            currentAuthorityDerivedKeyOwnerPubkey: r,
            currentAuthorityDerivedKeySeed: n,
            newAuthorizedPubkey: i,
            voteAuthorizationType: o,
            votePubkey: s,
          } = e,
          a = eb(rO.AuthorizeWithSeed, {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: x(r.toBuffer()),
              currentAuthorityDerivedKeySeed: n,
              newAuthorized: x(i.toBuffer()),
              voteAuthorizationType: o.index,
            },
          });
        return new ee().add({
          keys: [
            { pubkey: s, isSigner: !1, isWritable: !0 },
            { pubkey: en, isSigner: !1, isWritable: !1 },
            { pubkey: t, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: a,
        });
      }
      static withdraw(e) {
        let {
            votePubkey: t,
            authorizedWithdrawerPubkey: r,
            lamports: n,
            toPubkey: i,
          } = e,
          o = eb(rO.Withdraw, { lamports: n });
        return new ee().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: i, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: o,
        });
      }
      static safeWithdraw(e, t, r) {
        if (e.lamports > t - r)
          throw Error(
            "Withdraw will leave vote account with insufficient funds."
          );
        return rL.withdraw(e);
      }
      static updateValidatorIdentity(e) {
        let { votePubkey: t, authorizedWithdrawerPubkey: r, nodePubkey: n } = e,
          i = eb(rO.UpdateValidatorIdentity);
        return new ee().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !0, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
    }
    (rL.programId = new O("Vote111111111111111111111111111111111111111")),
      (rL.space = 3762);
    let rN = new O("Va1idator1nfo111111111111111111111111111111"),
      rU = (0, f.type)({
        name: (0, f.string)(),
        website: (0, f.optional)((0, f.string)()),
        details: (0, f.optional)((0, f.string)()),
        iconUrl: (0, f.optional)((0, f.string)()),
        keybaseUsername: (0, f.optional)((0, f.string)()),
      });
    class rM {
      constructor(e, t) {
        (this.key = void 0),
          (this.info = void 0),
          (this.key = e),
          (this.info = t);
      }
      static fromConfigData(e) {
        let t = [...e];
        if (2 !== D(t)) return null;
        let r = [];
        for (let e = 0; e < 2; e++) {
          let e = new O(H(t, 0, 32)),
            n = 1 === $(t);
          r.push({ publicKey: e, isSigner: n });
        }
        if (r[0].publicKey.equals(rN) && r[1].isSigner) {
          let e = JSON.parse(j().decode(o.Buffer.from(t)));
          return (0, f.assert)(e, rU), new rM(r[1].publicKey, e);
        }
        return null;
      }
    }
    let rz = new O("Vote111111111111111111111111111111111111111"),
      rW = d.struct([
        W("nodePubkey"),
        W("authorizedWithdrawer"),
        d.u8("commission"),
        d.nu64(),
        d.seq(
          d.struct([d.nu64("slot"), d.u32("confirmationCount")]),
          d.offset(d.u32(), -8),
          "votes"
        ),
        d.u8("rootSlotValid"),
        d.nu64("rootSlot"),
        d.nu64(),
        d.seq(
          d.struct([d.nu64("epoch"), W("authorizedVoter")]),
          d.offset(d.u32(), -8),
          "authorizedVoters"
        ),
        d.struct(
          [
            d.seq(
              d.struct([
                W("authorizedPubkey"),
                d.nu64("epochOfLastAuthorizedSwitch"),
                d.nu64("targetEpoch"),
              ]),
              32,
              "buf"
            ),
            d.nu64("idx"),
            d.u8("isEmpty"),
          ],
          "priorVoters"
        ),
        d.nu64(),
        d.seq(
          d.struct([d.nu64("epoch"), d.nu64("credits"), d.nu64("prevCredits")]),
          d.offset(d.u32(), -8),
          "epochCredits"
        ),
        d.struct([d.nu64("slot"), d.nu64("timestamp")], "lastTimestamp"),
      ]);
    class rj {
      constructor(e) {
        (this.nodePubkey = void 0),
          (this.authorizedWithdrawer = void 0),
          (this.commission = void 0),
          (this.rootSlot = void 0),
          (this.votes = void 0),
          (this.authorizedVoters = void 0),
          (this.priorVoters = void 0),
          (this.epochCredits = void 0),
          (this.lastTimestamp = void 0),
          (this.nodePubkey = e.nodePubkey),
          (this.authorizedWithdrawer = e.authorizedWithdrawer),
          (this.commission = e.commission),
          (this.rootSlot = e.rootSlot),
          (this.votes = e.votes),
          (this.authorizedVoters = e.authorizedVoters),
          (this.priorVoters = e.priorVoters),
          (this.epochCredits = e.epochCredits),
          (this.lastTimestamp = e.lastTimestamp);
      }
      static fromAccountData(e) {
        let t = rW.decode(x(e), 4),
          r = t.rootSlot;
        return (
          t.rootSlotValid || (r = null),
          new rj({
            nodePubkey: new O(t.nodePubkey),
            authorizedWithdrawer: new O(t.authorizedWithdrawer),
            commission: t.commission,
            votes: t.votes,
            rootSlot: r,
            authorizedVoters: t.authorizedVoters.map(rD),
            priorVoters: (function ({ buf: e, idx: t, isEmpty: r }) {
              return r
                ? []
                : [...e.slice(t + 1).map(rK), ...e.slice(0, t).map(rK)];
            })(t.priorVoters),
            epochCredits: t.epochCredits,
            lastTimestamp: t.lastTimestamp,
          })
        );
      }
    }
    function rD({ authorizedVoter: e, epoch: t }) {
      return { epoch: t, authorizedVoter: new O(e) };
    }
    function rK({
      authorizedPubkey: e,
      epochOfLastAuthorizedSwitch: t,
      targetEpoch: r,
    }) {
      return {
        authorizedPubkey: new O(e),
        epochOfLastAuthorizedSwitch: t,
        targetEpoch: r,
      };
    }
    let rq = {
      http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/",
      },
      https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/",
      },
    };
    function rF(e, t) {
      let r = !1 === t ? "http" : "https";
      if (!e) return rq[r].devnet;
      let n = rq[r][e];
      if (!n) throw Error(`Unknown ${r} cluster: ${e}`);
      return n;
    }
    async function rV(e, t, r, n) {
      let i, o;
      (r && Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight")) ||
      (r && Object.prototype.hasOwnProperty.call(r, "nonceValue"))
        ? ((i = r), (o = n))
        : (o = r);
      let s = o && {
          skipPreflight: o.skipPreflight,
          preflightCommitment: o.preflightCommitment || o.commitment,
          minContextSlot: o.minContextSlot,
        },
        a = await e.sendRawTransaction(t, s),
        u = o && o.commitment,
        c = i ? e.confirmTransaction(i, u) : e.confirmTransaction(a, u),
        l = (await c).value;
      if (l.err) {
        if (null != a)
          throw new eh({
            action: s?.skipPreflight ? "send" : "simulate",
            signature: a,
            transactionMessage: `Status: (${JSON.stringify(l)})`,
          });
        throw Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`);
      }
      return a;
    }
    e.s(
      [
        "Account",
        () => C,
        "AddressLookupTableAccount",
        () => eN,
        "AddressLookupTableInstruction",
        () => rf,
        "AddressLookupTableProgram",
        () => rp,
        "Authorized",
        () => rE,
        "BLOCKHASH_CACHE_TIMEOUT_MS",
        () => 3e4,
        "BPF_LOADER_DEPRECATED_PROGRAM_ID",
        () => L,
        "BPF_LOADER_PROGRAM_ID",
        () => eR,
        "BpfLoader",
        () => eP,
        "COMPUTE_BUDGET_INSTRUCTION_LAYOUTS",
        () => ry,
        "ComputeBudgetInstruction",
        () => rg,
        "ComputeBudgetProgram",
        () => rb,
        "Connection",
        () => rl,
        "Ed25519Program",
        () => rw,
        "Enum",
        () => P,
        "EpochSchedule",
        () => eO,
        "FeeCalculatorLayout",
        () => ew,
        "Keypair",
        () => rd,
        "LAMPORTS_PER_SOL",
        () => 1e9,
        "LOOKUP_TABLE_INSTRUCTION_LAYOUTS",
        () => rh,
        "Loader",
        () => ex,
        "Lockup",
        () => rI,
        "MAX_SEED_LENGTH",
        () => 32,
        "Message",
        () => G,
        "MessageAccountKeys",
        () => z,
        "MessageV0",
        () => J,
        "NONCE_ACCOUNT_LENGTH",
        () => eS,
        "NonceAccount",
        () => ev,
        "PACKET_DATA_SIZE",
        () => 1232,
        "PUBLIC_KEY_LENGTH",
        () => 32,
        "PublicKey",
        () => O,
        "SIGNATURE_LENGTH_IN_BYTES",
        () => 64,
        "SOLANA_SCHEMA",
        () => B,
        "STAKE_CONFIG_ID",
        () => r_,
        "STAKE_INSTRUCTION_LAYOUTS",
        () => rx,
        "SYSTEM_INSTRUCTION_LAYOUTS",
        () => eI,
        "SYSVAR_CLOCK_PUBKEY",
        () => en,
        "SYSVAR_EPOCH_SCHEDULE_PUBKEY",
        () => ei,
        "SYSVAR_INSTRUCTIONS_PUBKEY",
        () => eo,
        "SYSVAR_RECENT_BLOCKHASHES_PUBKEY",
        () => es,
        "SYSVAR_RENT_PUBKEY",
        () => ea,
        "SYSVAR_REWARDS_PUBKEY",
        () => eu,
        "SYSVAR_SLOT_HASHES_PUBKEY",
        () => ec,
        "SYSVAR_SLOT_HISTORY_PUBKEY",
        () => el,
        "SYSVAR_STAKE_HISTORY_PUBKEY",
        () => ed,
        "Secp256k1Program",
        () => rv,
        "SendTransactionError",
        () => eh,
        "SolanaJSONRPCError",
        () => ep,
        "SolanaJSONRPCErrorCode",
        () => ef,
        "StakeAuthorizationLayout",
        () => rR,
        "StakeInstruction",
        () => rA,
        "StakeProgram",
        () => rP,
        "Struct",
        () => R,
        "SystemInstruction",
        () => eE,
        "SystemProgram",
        () => eA,
        "Transaction",
        () => ee,
        "TransactionExpiredBlockheightExceededError",
        () => N,
        "TransactionExpiredNonceInvalidError",
        () => M,
        "TransactionExpiredTimeoutError",
        () => U,
        "TransactionInstruction",
        () => Q,
        "TransactionMessage",
        () => et,
        "TransactionStatus",
        () => X,
        "VALIDATOR_INFO_KEY",
        () => rN,
        "VERSION_PREFIX_MASK",
        () => 127,
        "VOTE_PROGRAM_ID",
        () => rz,
        "ValidatorInfo",
        () => rM,
        "VersionedMessage",
        () => Y,
        "VersionedTransaction",
        () => er,
        "VoteAccount",
        () => rj,
        "VoteAuthorizationLayout",
        () => rC,
        "VoteInit",
        () => rB,
        "VoteInstruction",
        () => rT,
        "VoteProgram",
        () => rL,
        "clusterApiUrl",
        () => rF,
        "sendAndConfirmRawTransaction",
        () => rV,
        "sendAndConfirmTransaction",
        () => eg,
      ],
      127261
    );
  },
  403011,
  875353,
  (e) => {
    "use strict";
    var t, r, n, i;
    let o = !1,
      s = !1,
      a = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
      u = a.default,
      c = null,
      l = (function () {
        try {
          let e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
              try {
                if ("test" !== "test".normalize(t))
                  throw Error("bad normalize");
              } catch (r) {
                e.push(t);
              }
            }),
            e.length)
          )
            throw Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
    ((n = t || (t = {})).DEBUG = "DEBUG"),
      (n.INFO = "INFO"),
      (n.WARNING = "WARNING"),
      (n.ERROR = "ERROR"),
      (n.OFF = "OFF"),
      ((i = r || (r = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
      (i.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
      (i.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
      (i.NETWORK_ERROR = "NETWORK_ERROR"),
      (i.SERVER_ERROR = "SERVER_ERROR"),
      (i.TIMEOUT = "TIMEOUT"),
      (i.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
      (i.NUMERIC_FAULT = "NUMERIC_FAULT"),
      (i.MISSING_NEW = "MISSING_NEW"),
      (i.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
      (i.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
      (i.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
      (i.CALL_EXCEPTION = "CALL_EXCEPTION"),
      (i.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
      (i.NONCE_EXPIRED = "NONCE_EXPIRED"),
      (i.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
      (i.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
      (i.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
      (i.ACTION_REJECTED = "ACTION_REJECTED");
    let d = "0123456789abcdef";
    class h {
      constructor(e) {
        Object.defineProperty(this, "version", {
          enumerable: !0,
          value: e,
          writable: !1,
        });
      }
      _log(e, t) {
        let r = e.toLowerCase();
        null == a[r] &&
          this.throwArgumentError("invalid log level name", "logLevel", e),
          u > a[r] || console.log.apply(console, t);
      }
      debug(...e) {
        this._log(h.levels.DEBUG, e);
      }
      info(...e) {
        this._log(h.levels.INFO, e);
      }
      warn(...e) {
        this._log(h.levels.WARNING, e);
      }
      makeError(e, t, n) {
        if (s) return this.makeError("censored error", t, {});
        t || (t = h.errors.UNKNOWN_ERROR), n || (n = {});
        let i = [];
        Object.keys(n).forEach((e) => {
          let t = n[e];
          try {
            if (t instanceof Uint8Array) {
              let r = "";
              for (let e = 0; e < t.length; e++)
                (r += d[t[e] >> 4]), (r += d[15 & t[e]]);
              i.push(e + "=Uint8Array(0x" + r + ")");
            } else i.push(e + "=" + JSON.stringify(t));
          } catch (t) {
            i.push(e + "=" + JSON.stringify(n[e].toString()));
          }
        }),
          i.push(`code=${t}`),
          i.push(`version=${this.version}`);
        let o = e,
          a = "";
        switch (t) {
          case r.NUMERIC_FAULT: {
            a = "NUMERIC_FAULT";
            let t = e;
            switch (t) {
              case "overflow":
              case "underflow":
              case "division-by-zero":
                a += "-" + t;
                break;
              case "negative-power":
              case "negative-width":
                a += "-unsupported";
                break;
              case "unbound-bitwise-result":
                a += "-unbound-result";
            }
            break;
          }
          case r.CALL_EXCEPTION:
          case r.INSUFFICIENT_FUNDS:
          case r.MISSING_NEW:
          case r.NONCE_EXPIRED:
          case r.REPLACEMENT_UNDERPRICED:
          case r.TRANSACTION_REPLACED:
          case r.UNPREDICTABLE_GAS_LIMIT:
            a = t;
        }
        a && (e += " [ See: https://links.ethers.org/v5-errors-" + a + " ]"),
          i.length && (e += " (" + i.join(", ") + ")");
        let u = Error(e);
        return (
          (u.reason = o),
          (u.code = t),
          Object.keys(n).forEach(function (e) {
            u[e] = n[e];
          }),
          u
        );
      }
      throwError(e, t, r) {
        throw this.makeError(e, t, r);
      }
      throwArgumentError(e, t, r) {
        return this.throwError(e, h.errors.INVALID_ARGUMENT, {
          argument: t,
          value: r,
        });
      }
      assert(e, t, r, n) {
        e || this.throwError(t, r, n);
      }
      assertArgument(e, t, r, n) {
        e || this.throwArgumentError(t, r, n);
      }
      checkNormalize(e) {
        null == e && (e = "platform missing String.prototype.normalize"),
          l &&
            this.throwError(
              "platform missing String.prototype.normalize",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "String.prototype.normalize", form: l }
            );
      }
      checkSafeUint53(e, t) {
        "number" == typeof e &&
          (null == t && (t = "value not safe"),
          (e < 0 || e >= 0x1fffffffffffff) &&
            this.throwError(t, h.errors.NUMERIC_FAULT, {
              operation: "checkSafeInteger",
              fault: "out-of-safe-range",
              value: e,
            }),
          e % 1 &&
            this.throwError(t, h.errors.NUMERIC_FAULT, {
              operation: "checkSafeInteger",
              fault: "non-integer",
              value: e,
            }));
      }
      checkArgumentCount(e, t, r) {
        (r = r ? ": " + r : ""),
          e < t &&
            this.throwError("missing argument" + r, h.errors.MISSING_ARGUMENT, {
              count: e,
              expectedCount: t,
            }),
          e > t &&
            this.throwError(
              "too many arguments" + r,
              h.errors.UNEXPECTED_ARGUMENT,
              { count: e, expectedCount: t }
            );
      }
      checkNew(e, t) {
        (e === Object || null == e) &&
          this.throwError("missing new", h.errors.MISSING_NEW, {
            name: t.name,
          });
      }
      checkAbstract(e, t) {
        e === t
          ? this.throwError(
              "cannot instantiate abstract class " +
                JSON.stringify(t.name) +
                " directly; use a sub-class",
              h.errors.UNSUPPORTED_OPERATION,
              { name: e.name, operation: "new" }
            )
          : (e === Object || null == e) &&
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: t.name,
            });
      }
      static globalLogger() {
        return c || (c = new h("logger/5.8.0")), c;
      }
      static setCensorship(e, t) {
        if (
          (!e &&
            t &&
            this.globalLogger().throwError(
              "cannot permanently disable censorship",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            ),
          o)
        ) {
          if (!e) return;
          this.globalLogger().throwError(
            "error censorship permanent",
            h.errors.UNSUPPORTED_OPERATION,
            { operation: "setCensorship" }
          );
        }
        (s = !!e), (o = !!t);
      }
      static setLogLevel(e) {
        let t = a[e.toLowerCase()];
        null == t ? h.globalLogger().warn("invalid log level - " + e) : (u = t);
      }
      static from(e) {
        return new h(e);
      }
    }
    (h.errors = r), (h.levels = t), e.s(["Logger", () => h], 875353);
    let f = new h("bytes/5.8.0");
    function p(e) {
      return !!e.toHexString;
    }
    function g(e) {
      return (
        e.slice ||
          (e.slice = function () {
            let t = Array.prototype.slice.call(arguments);
            return g(new Uint8Array(Array.prototype.slice.apply(e, t)));
          }),
        e
      );
    }
    function y(e) {
      return (_(e) && !(e.length % 2)) || m(e);
    }
    function b(e) {
      return "number" == typeof e && e == e && e % 1 == 0;
    }
    function m(e) {
      if (null == e) return !1;
      if (e.constructor === Uint8Array) return !0;
      if ("string" == typeof e || !b(e.length) || e.length < 0) return !1;
      for (let t = 0; t < e.length; t++) {
        let r = e[t];
        if (!b(r) || r < 0 || r >= 256) return !1;
      }
      return !0;
    }
    function w(e, t) {
      if ((t || (t = {}), "number" == typeof e)) {
        f.checkSafeUint53(e, "invalid arrayify value");
        let t = [];
        for (; e; ) t.unshift(255 & e), (e = parseInt(String(e / 256)));
        return 0 === t.length && t.push(0), g(new Uint8Array(t));
      }
      if (
        (t.allowMissingPrefix &&
          "string" == typeof e &&
          "0x" !== e.substring(0, 2) &&
          (e = "0x" + e),
        p(e) && (e = e.toHexString()),
        _(e))
      ) {
        let r = e.substring(2);
        r.length % 2 &&
          ("left" === t.hexPad
            ? (r = "0" + r)
            : "right" === t.hexPad
            ? (r += "0")
            : f.throwArgumentError("hex data is odd-length", "value", e));
        let n = [];
        for (let e = 0; e < r.length; e += 2)
          n.push(parseInt(r.substring(e, e + 2), 16));
        return g(new Uint8Array(n));
      }
      return m(e)
        ? g(new Uint8Array(e))
        : f.throwArgumentError("invalid arrayify value", "value", e);
    }
    function k(e) {
      let t = e.map((e) => w(e)),
        r = new Uint8Array(t.reduce((e, t) => e + t.length, 0));
      return t.reduce((e, t) => (r.set(t, e), e + t.length), 0), g(r);
    }
    function S(e) {
      let t = w(e);
      if (0 === t.length) return t;
      let r = 0;
      for (; r < t.length && 0 === t[r]; ) r++;
      return r && (t = t.slice(r)), t;
    }
    function v(e, t) {
      (e = w(e)).length > t &&
        f.throwArgumentError("value out of range", "value", arguments[0]);
      let r = new Uint8Array(t);
      return r.set(e, t - e.length), g(r);
    }
    function _(e, t) {
      return (
        "string" == typeof e &&
        !!e.match(/^0x[0-9A-Fa-f]*$/) &&
        (!t || e.length === 2 + 2 * t)
      );
    }
    let E = "0123456789abcdef";
    function I(e, t) {
      if ((t || (t = {}), "number" == typeof e)) {
        f.checkSafeUint53(e, "invalid hexlify value");
        let t = "";
        for (; e; ) (t = E[15 & e] + t), (e = Math.floor(e / 16));
        return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
      }
      if ("bigint" == typeof e)
        return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
      if (
        (t.allowMissingPrefix &&
          "string" == typeof e &&
          "0x" !== e.substring(0, 2) &&
          (e = "0x" + e),
        p(e))
      )
        return e.toHexString();
      if (_(e))
        return (
          e.length % 2 &&
            ("left" === t.hexPad
              ? (e = "0x0" + e.substring(2))
              : "right" === t.hexPad
              ? (e += "0")
              : f.throwArgumentError("hex data is odd-length", "value", e)),
          e.toLowerCase()
        );
      if (m(e)) {
        let t = "0x";
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          t += E[(240 & n) >> 4] + E[15 & n];
        }
        return t;
      }
      return f.throwArgumentError("invalid hexlify value", "value", e);
    }
    function A(e) {
      if ("string" != typeof e) e = I(e);
      else if (!_(e) || e.length % 2) return null;
      return (e.length - 2) / 2;
    }
    function x(e, t, r) {
      return ("string" != typeof e
        ? (e = I(e))
        : (!_(e) || e.length % 2) &&
          f.throwArgumentError("invalid hexData", "value", e),
      (t = 2 + 2 * t),
      null != r)
        ? "0x" + e.substring(t, 2 + 2 * r)
        : "0x" + e.substring(t);
    }
    function R(e) {
      let t = "0x";
      return (
        e.forEach((e) => {
          t += I(e).substring(2);
        }),
        t
      );
    }
    function P(e) {
      let t = (function (e) {
        "string" != typeof e && (e = I(e)),
          _(e) || f.throwArgumentError("invalid hex string", "value", e),
          (e = e.substring(2));
        let t = 0;
        for (; t < e.length && "0" === e[t]; ) t++;
        return "0x" + e.substring(t);
      })(I(e, { hexPad: "left" }));
      return "0x" === t ? "0x0" : t;
    }
    function B(e, t) {
      for (
        "string" != typeof e
          ? (e = I(e))
          : _(e) || f.throwArgumentError("invalid hex string", "value", e),
          e.length > 2 * t + 2 &&
            f.throwArgumentError("value out of range", "value", arguments[1]);
        e.length < 2 * t + 2;

      )
        e = "0x0" + e.substring(2);
      return e;
    }
    function T(e) {
      let t = {
        r: "0x",
        s: "0x",
        _vs: "0x",
        recoveryParam: 0,
        v: 0,
        yParityAndS: "0x",
        compact: "0x",
      };
      if (y(e)) {
        let r = w(e);
        64 === r.length
          ? ((t.v = 27 + (r[32] >> 7)),
            (r[32] &= 127),
            (t.r = I(r.slice(0, 32))),
            (t.s = I(r.slice(32, 64))))
          : 65 === r.length
          ? ((t.r = I(r.slice(0, 32))),
            (t.s = I(r.slice(32, 64))),
            (t.v = r[64]))
          : f.throwArgumentError("invalid signature string", "signature", e),
          t.v < 27 &&
            (0 === t.v || 1 === t.v
              ? (t.v += 27)
              : f.throwArgumentError(
                  "signature invalid v byte",
                  "signature",
                  e
                )),
          (t.recoveryParam = 1 - (t.v % 2)),
          t.recoveryParam && (r[32] |= 128),
          (t._vs = I(r.slice(32, 64)));
      } else {
        if (
          ((t.r = e.r),
          (t.s = e.s),
          (t.v = e.v),
          (t.recoveryParam = e.recoveryParam),
          (t._vs = e._vs),
          null != t._vs)
        ) {
          let r = v(w(t._vs), 32);
          t._vs = I(r);
          let n = +(r[0] >= 128);
          null == t.recoveryParam
            ? (t.recoveryParam = n)
            : t.recoveryParam !== n &&
              f.throwArgumentError(
                "signature recoveryParam mismatch _vs",
                "signature",
                e
              ),
            (r[0] &= 127);
          let i = I(r);
          null == t.s
            ? (t.s = i)
            : t.s !== i &&
              f.throwArgumentError("signature v mismatch _vs", "signature", e);
        }
        if (null == t.recoveryParam)
          null == t.v
            ? f.throwArgumentError(
                "signature missing v and recoveryParam",
                "signature",
                e
              )
            : 0 === t.v || 1 === t.v
            ? (t.recoveryParam = t.v)
            : (t.recoveryParam = 1 - (t.v % 2));
        else if (null == t.v) t.v = 27 + t.recoveryParam;
        else {
          let r = 0 === t.v || 1 === t.v ? t.v : 1 - (t.v % 2);
          t.recoveryParam !== r &&
            f.throwArgumentError(
              "signature recoveryParam mismatch v",
              "signature",
              e
            );
        }
        null != t.r && _(t.r)
          ? (t.r = B(t.r, 32))
          : f.throwArgumentError(
              "signature missing or invalid r",
              "signature",
              e
            ),
          null != t.s && _(t.s)
            ? (t.s = B(t.s, 32))
            : f.throwArgumentError(
                "signature missing or invalid s",
                "signature",
                e
              );
        let r = w(t.s);
        r[0] >= 128 &&
          f.throwArgumentError("signature s out of range", "signature", e),
          t.recoveryParam && (r[0] |= 128);
        let n = I(r);
        t._vs &&
          (_(t._vs) ||
            f.throwArgumentError("signature invalid _vs", "signature", e),
          (t._vs = B(t._vs, 32))),
          null == t._vs
            ? (t._vs = n)
            : t._vs !== n &&
              f.throwArgumentError(
                "signature _vs mismatch v and s",
                "signature",
                e
              );
      }
      return (
        (t.yParityAndS = t._vs),
        (t.compact = t.r + t.yParityAndS.substring(2)),
        t
      );
    }
    e.s(
      [
        "arrayify",
        () => w,
        "concat",
        () => k,
        "hexConcat",
        () => R,
        "hexDataLength",
        () => A,
        "hexDataSlice",
        () => x,
        "hexValue",
        () => P,
        "hexZeroPad",
        () => B,
        "hexlify",
        () => I,
        "isBytes",
        () => m,
        "isBytesLike",
        () => y,
        "isHexString",
        () => _,
        "splitSignature",
        () => T,
        "stripZeros",
        () => S,
        "zeroPad",
        () => v,
      ],
      403011
    );
  },
  677319,
  (e, t, r) => {
    "use strict";
    var n = e.r(619655)(),
      i = e.r(325887)("Object.prototype.toString"),
      o = function (e) {
        return (
          (!n || !e || "object" != typeof e || !(Symbol.toStringTag in e)) &&
          "[object Arguments]" === i(e)
        );
      },
      s = function (e) {
        return (
          !!o(e) ||
          (null !== e &&
            "object" == typeof e &&
            "length" in e &&
            "number" == typeof e.length &&
            e.length >= 0 &&
            "[object Array]" !== i(e) &&
            "callee" in e &&
            "[object Function]" === i(e.callee))
        );
      },
      a = (function () {
        return o(arguments);
      })();
    (o.isLegacyArguments = s), (t.exports = a ? o : s);
  },
  255079,
  (e, t, r) => {
    "use strict";
    var n,
      i = e.r(325887),
      o = e.r(619655)(),
      s = e.r(705843),
      a = e.r(593892);
    if (o) {
      var u = i("RegExp.prototype.exec"),
        c = {},
        l = function () {
          throw c;
        },
        d = { toString: l, valueOf: l };
      "symbol" == typeof Symbol.toPrimitive && (d[Symbol.toPrimitive] = l),
        (n = function (e) {
          if (!e || "object" != typeof e) return !1;
          var t = a(e, "lastIndex");
          if (!(t && s(t, "value"))) return !1;
          try {
            u(e, d);
          } catch (e) {
            return e === c;
          }
        });
    } else {
      var h = i("Object.prototype.toString");
      n = function (e) {
        return (
          !!e &&
          ("object" == typeof e || "function" == typeof e) &&
          "[object RegExp]" === h(e)
        );
      };
    }
    t.exports = n;
  },
  415290,
  (e, t, r) => {
    "use strict";
    var n = e.r(325887),
      i = e.r(255079),
      o = n("RegExp.prototype.exec"),
      s = e.r(8224);
    t.exports = function (e) {
      if (!i(e)) throw new s("`regex` must be a RegExp");
      return function (t) {
        return null !== o(e, t);
      };
    };
  },
  65448,
  (e, t, r) => {
    "use strict";
    let n = function* () {}.constructor;
    t.exports = () => n;
  },
  946968,
  (e, t, r) => {
    "use strict";
    var n = e.r(325887),
      i = e.r(415290)(/^\s*(?:function)?\*/),
      o = e.r(619655)(),
      s = e.r(942527),
      a = n("Object.prototype.toString"),
      u = n("Function.prototype.toString"),
      c = e.r(65448);
    t.exports = function (e) {
      if ("function" != typeof e) return !1;
      if (i(u(e))) return !0;
      if (!o) return "[object GeneratorFunction]" === a(e);
      if (!s) return !1;
      var t = c();
      return t && s(e) === t.prototype;
    };
  },
  20992,
  (e, t, r) => {
    "use strict";
    var n = e.r(677319),
      i = e.r(946968),
      o = e.r(49040),
      s = e.r(74425);
    function a(e) {
      return e.call.bind(e);
    }
    var u = "u" > typeof BigInt,
      c = "u" > typeof Symbol,
      l = a(Object.prototype.toString),
      d = a(Number.prototype.valueOf),
      h = a(String.prototype.valueOf),
      f = a(Boolean.prototype.valueOf);
    if (u) var p = a(BigInt.prototype.valueOf);
    if (c) var g = a(Symbol.prototype.valueOf);
    function y(e, t) {
      if ("object" != typeof e) return !1;
      try {
        return t(e), !0;
      } catch (e) {
        return !1;
      }
    }
    function b(e) {
      return "[object Map]" === l(e);
    }
    function m(e) {
      return "[object Set]" === l(e);
    }
    function w(e) {
      return "[object WeakMap]" === l(e);
    }
    function k(e) {
      return "[object WeakSet]" === l(e);
    }
    function S(e) {
      return "[object ArrayBuffer]" === l(e);
    }
    function v(e) {
      return (
        !("u" < typeof ArrayBuffer) &&
        (S.working ? S(e) : e instanceof ArrayBuffer)
      );
    }
    function _(e) {
      return "[object DataView]" === l(e);
    }
    function E(e) {
      return (
        !("u" < typeof DataView) && (_.working ? _(e) : e instanceof DataView)
      );
    }
    (r.isArgumentsObject = n),
      (r.isGeneratorFunction = i),
      (r.isTypedArray = s),
      (r.isPromise = function (e) {
        return (
          ("u" > typeof Promise && e instanceof Promise) ||
          (null !== e &&
            "object" == typeof e &&
            "function" == typeof e.then &&
            "function" == typeof e.catch)
        );
      }),
      (r.isArrayBufferView = function (e) {
        return "u" > typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : s(e) || E(e);
      }),
      (r.isUint8Array = function (e) {
        return "Uint8Array" === o(e);
      }),
      (r.isUint8ClampedArray = function (e) {
        return "Uint8ClampedArray" === o(e);
      }),
      (r.isUint16Array = function (e) {
        return "Uint16Array" === o(e);
      }),
      (r.isUint32Array = function (e) {
        return "Uint32Array" === o(e);
      }),
      (r.isInt8Array = function (e) {
        return "Int8Array" === o(e);
      }),
      (r.isInt16Array = function (e) {
        return "Int16Array" === o(e);
      }),
      (r.isInt32Array = function (e) {
        return "Int32Array" === o(e);
      }),
      (r.isFloat32Array = function (e) {
        return "Float32Array" === o(e);
      }),
      (r.isFloat64Array = function (e) {
        return "Float64Array" === o(e);
      }),
      (r.isBigInt64Array = function (e) {
        return "BigInt64Array" === o(e);
      }),
      (r.isBigUint64Array = function (e) {
        return "BigUint64Array" === o(e);
      }),
      (b.working = "u" > typeof Map && b(new Map())),
      (r.isMap = function (e) {
        return !("u" < typeof Map) && (b.working ? b(e) : e instanceof Map);
      }),
      (m.working = "u" > typeof Set && m(new Set())),
      (r.isSet = function (e) {
        return !("u" < typeof Set) && (m.working ? m(e) : e instanceof Set);
      }),
      (w.working = "u" > typeof WeakMap && w(new WeakMap())),
      (r.isWeakMap = function (e) {
        return (
          !("u" < typeof WeakMap) && (w.working ? w(e) : e instanceof WeakMap)
        );
      }),
      (k.working = "u" > typeof WeakSet && k(new WeakSet())),
      (r.isWeakSet = function (e) {
        return k(e);
      }),
      (S.working = "u" > typeof ArrayBuffer && S(new ArrayBuffer())),
      (r.isArrayBuffer = v),
      (_.working =
        "u" > typeof ArrayBuffer &&
        "u" > typeof DataView &&
        _(new DataView(new ArrayBuffer(1), 0, 1))),
      (r.isDataView = E);
    var I = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
    function A(e) {
      return "[object SharedArrayBuffer]" === l(e);
    }
    function x(e) {
      return (
        void 0 !== I &&
        (void 0 === A.working && (A.working = A(new I())),
        A.working ? A(e) : e instanceof I)
      );
    }
    function R(e) {
      return y(e, d);
    }
    function P(e) {
      return y(e, h);
    }
    function B(e) {
      return y(e, f);
    }
    function T(e) {
      return u && y(e, p);
    }
    function O(e) {
      return c && y(e, g);
    }
    (r.isSharedArrayBuffer = x),
      (r.isAsyncFunction = function (e) {
        return "[object AsyncFunction]" === l(e);
      }),
      (r.isMapIterator = function (e) {
        return "[object Map Iterator]" === l(e);
      }),
      (r.isSetIterator = function (e) {
        return "[object Set Iterator]" === l(e);
      }),
      (r.isGeneratorObject = function (e) {
        return "[object Generator]" === l(e);
      }),
      (r.isWebAssemblyCompiledModule = function (e) {
        return "[object WebAssembly.Module]" === l(e);
      }),
      (r.isNumberObject = R),
      (r.isStringObject = P),
      (r.isBooleanObject = B),
      (r.isBigIntObject = T),
      (r.isSymbolObject = O),
      (r.isBoxedPrimitive = function (e) {
        return R(e) || P(e) || B(e) || T(e) || O(e);
      }),
      (r.isAnyArrayBuffer = function (e) {
        return "u" > typeof Uint8Array && (v(e) || x(e));
      }),
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (
        e
      ) {
        Object.defineProperty(r, e, {
          enumerable: !1,
          value: function () {
            throw Error(e + " is not supported in userland");
          },
        });
      });
  },
  767026,
  (e, t, r) => {
    t.exports = function (e) {
      return (
        e &&
        "object" == typeof e &&
        "function" == typeof e.copy &&
        "function" == typeof e.fill &&
        "function" == typeof e.readUInt8
      );
    };
  },
  101507,
  (e, t, r) => {
    var n = e.i(247167),
      i =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
            r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
          return r;
        },
      o = /%[sdj%]/g;
    (r.format = function (e) {
      if (!w(e)) {
        for (var t = [], r = 0; r < arguments.length; r++)
          t.push(c(arguments[r]));
        return t.join(" ");
      }
      for (
        var r = 1,
          n = arguments,
          i = n.length,
          s = String(e).replace(o, function (e) {
            if ("%%" === e) return "%";
            if (r >= i) return e;
            switch (e) {
              case "%s":
                return String(n[r++]);
              case "%d":
                return Number(n[r++]);
              case "%j":
                try {
                  return JSON.stringify(n[r++]);
                } catch (e) {
                  return "[Circular]";
                }
              default:
                return e;
            }
          }),
          a = n[r];
        r < i;
        a = n[++r]
      )
        b(a) || !v(a) ? (s += " " + a) : (s += " " + c(a));
      return s;
    }),
      (r.deprecate = function (e, t) {
        if (void 0 !== n.default && !0 === n.default.noDeprecation) return e;
        if (void 0 === n.default)
          return function () {
            return r.deprecate(e, t).apply(this, arguments);
          };
        var i = !1;
        return function () {
          if (!i) {
            if (n.default.throwDeprecation) throw Error(t);
            n.default.traceDeprecation ? console.trace(t) : console.error(t),
              (i = !0);
          }
          return e.apply(this, arguments);
        };
      });
    var s = {},
      a = /^$/;
    if (n.default.env.NODE_DEBUG) {
      var u = n.default.env.NODE_DEBUG;
      a = RegExp(
        "^" +
          (u = u
            .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
            .replace(/\*/g, ".*")
            .replace(/,/g, "$|^")
            .toUpperCase()) +
          "$",
        "i"
      );
    }
    function c(e, t) {
      var n = { seen: [], stylize: d };
      return (
        arguments.length >= 3 && (n.depth = arguments[2]),
        arguments.length >= 4 && (n.colors = arguments[3]),
        y(t) ? (n.showHidden = t) : t && r._extend(n, t),
        k(n.showHidden) && (n.showHidden = !1),
        k(n.depth) && (n.depth = 2),
        k(n.colors) && (n.colors = !1),
        k(n.customInspect) && (n.customInspect = !0),
        n.colors && (n.stylize = l),
        h(n, e, n.depth)
      );
    }
    function l(e, t) {
      var r = c.styles[t];
      return r
        ? "\x1b[" + c.colors[r][0] + "m" + e + "\x1b[" + c.colors[r][1] + "m"
        : e;
    }
    function d(e, t) {
      return e;
    }
    function h(e, t, n) {
      if (
        e.customInspect &&
        t &&
        I(t.inspect) &&
        t.inspect !== r.inspect &&
        !(t.constructor && t.constructor.prototype === t)
      ) {
        var i,
          o,
          s,
          a,
          u,
          c,
          l = t.inspect(n, e);
        return w(l) || (l = h(e, l, n)), l;
      }
      var d = (function (e, t) {
        if (k(t)) return e.stylize("undefined", "undefined");
        if (w(t)) {
          var r =
            "'" +
            JSON.stringify(t)
              .replace(/^"|"$/g, "")
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"') +
            "'";
          return e.stylize(r, "string");
        }
        return m(t)
          ? e.stylize("" + t, "number")
          : y(t)
          ? e.stylize("" + t, "boolean")
          : b(t)
          ? e.stylize("null", "null")
          : void 0;
      })(e, t);
      if (d) return d;
      var v = Object.keys(t),
        A =
          ((u = {}),
          v.forEach(function (e, t) {
            u[e] = !0;
          }),
          u);
      if (
        (e.showHidden && (v = Object.getOwnPropertyNames(t)),
        E(t) && (v.indexOf("message") >= 0 || v.indexOf("description") >= 0))
      )
        return f(t);
      if (0 === v.length) {
        if (I(t)) {
          var x = t.name ? ": " + t.name : "";
          return e.stylize("[Function" + x + "]", "special");
        }
        if (S(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
        if (_(t)) return e.stylize(Date.prototype.toString.call(t), "date");
        if (E(t)) return f(t);
      }
      var R = "",
        B = !1,
        T = ["{", "}"];
      if (
        (g(t) && ((B = !0), (T = ["[", "]"])),
        I(t) && (R = " [Function" + (t.name ? ": " + t.name : "") + "]"),
        S(t) && (R = " " + RegExp.prototype.toString.call(t)),
        _(t) && (R = " " + Date.prototype.toUTCString.call(t)),
        E(t) && (R = " " + f(t)),
        0 === v.length && (!B || 0 == t.length))
      )
        return T[0] + R + T[1];
      if (n < 0)
        if (S(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
        else return e.stylize("[Object]", "special");
      return (
        e.seen.push(t),
        (c = B
          ? (function (e, t, r, n, i) {
              for (var o = [], s = 0, a = t.length; s < a; ++s)
                P(t, String(s))
                  ? o.push(p(e, t, r, n, String(s), !0))
                  : o.push("");
              return (
                i.forEach(function (i) {
                  i.match(/^\d+$/) || o.push(p(e, t, r, n, i, !0));
                }),
                o
              );
            })(e, t, n, A, v)
          : v.map(function (r) {
              return p(e, t, n, A, r, B);
            })),
        e.seen.pop(),
        (i = c),
        (o = R),
        (s = T),
        (a = 0),
        i.reduce(function (e, t) {
          return (
            a++,
            t.indexOf("\n") >= 0 && a++,
            e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
          );
        }, 0) > 60
          ? s[0] +
            ("" === o ? "" : o + "\n ") +
            " " +
            i.join(",\n  ") +
            " " +
            s[1]
          : s[0] + o + " " + i.join(", ") + " " + s[1]
      );
    }
    function f(e) {
      return "[" + Error.prototype.toString.call(e) + "]";
    }
    function p(e, t, r, n, i, o) {
      var s, a, u;
      if (
        ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
          ? (a = u.set
              ? e.stylize("[Getter/Setter]", "special")
              : e.stylize("[Getter]", "special"))
          : u.set && (a = e.stylize("[Setter]", "special")),
        P(n, i) || (s = "[" + i + "]"),
        !a &&
          (0 > e.seen.indexOf(u.value)
            ? (a = b(r) ? h(e, u.value, null) : h(e, u.value, r - 1)).indexOf(
                "\n"
              ) > -1 &&
              (a = o
                ? a
                    .split("\n")
                    .map(function (e) {
                      return "  " + e;
                    })
                    .join("\n")
                    .slice(2)
                : "\n" +
                  a
                    .split("\n")
                    .map(function (e) {
                      return "   " + e;
                    })
                    .join("\n"))
            : (a = e.stylize("[Circular]", "special"))),
        k(s))
      ) {
        if (o && i.match(/^\d+$/)) return a;
        (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((s = s.slice(1, -1)), (s = e.stylize(s, "name")))
          : ((s = s
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (s = e.stylize(s, "string")));
      }
      return s + ": " + a;
    }
    function g(e) {
      return Array.isArray(e);
    }
    function y(e) {
      return "boolean" == typeof e;
    }
    function b(e) {
      return null === e;
    }
    function m(e) {
      return "number" == typeof e;
    }
    function w(e) {
      return "string" == typeof e;
    }
    function k(e) {
      return void 0 === e;
    }
    function S(e) {
      return v(e) && "[object RegExp]" === A(e);
    }
    function v(e) {
      return "object" == typeof e && null !== e;
    }
    function _(e) {
      return v(e) && "[object Date]" === A(e);
    }
    function E(e) {
      return v(e) && ("[object Error]" === A(e) || e instanceof Error);
    }
    function I(e) {
      return "function" == typeof e;
    }
    function A(e) {
      return Object.prototype.toString.call(e);
    }
    function x(e) {
      return e < 10 ? "0" + e.toString(10) : e.toString(10);
    }
    (r.debuglog = function (e) {
      if (!s[(e = e.toUpperCase())])
        if (a.test(e)) {
          var t = n.default.pid;
          s[e] = function () {
            var n = r.format.apply(r, arguments);
            console.error("%s %d: %s", e, t, n);
          };
        } else s[e] = function () {};
      return s[e];
    }),
      (r.inspect = c),
      (c.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39],
      }),
      (c.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red",
      }),
      (r.types = e.r(20992)),
      (r.isArray = g),
      (r.isBoolean = y),
      (r.isNull = b),
      (r.isNullOrUndefined = function (e) {
        return null == e;
      }),
      (r.isNumber = m),
      (r.isString = w),
      (r.isSymbol = function (e) {
        return "symbol" == typeof e;
      }),
      (r.isUndefined = k),
      (r.isRegExp = S),
      (r.types.isRegExp = S),
      (r.isObject = v),
      (r.isDate = _),
      (r.types.isDate = _),
      (r.isError = E),
      (r.types.isNativeError = E),
      (r.isFunction = I),
      (r.isPrimitive = function (e) {
        return (
          null === e ||
          "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          "symbol" == typeof e ||
          void 0 === e
        );
      }),
      (r.isBuffer = e.r(767026));
    var R = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    function P(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    (r.log = function () {
      var e, t;
      console.log(
        "%s - %s",
        ((t = [
          x((e = new Date()).getHours()),
          x(e.getMinutes()),
          x(e.getSeconds()),
        ].join(":")),
        [e.getDate(), R[e.getMonth()], t].join(" ")),
        r.format.apply(r, arguments)
      );
    }),
      (r.inherits = e.r(988935)),
      (r._extend = function (e, t) {
        if (!t || !v(t)) return e;
        for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
        return e;
      });
    var B = "u" > typeof Symbol ? Symbol("util.promisify.custom") : void 0;
    function T(e, t) {
      if (!e) {
        var r = Error("Promise was rejected with a falsy value");
        (r.reason = e), (e = r);
      }
      return t(e);
    }
    (r.promisify = function (e) {
      if ("function" != typeof e)
        throw TypeError('The "original" argument must be of type Function');
      if (B && e[B]) {
        var t = e[B];
        if ("function" != typeof t)
          throw TypeError(
            'The "util.promisify.custom" argument must be of type Function'
          );
        return (
          Object.defineProperty(t, B, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0,
          }),
          t
        );
      }
      function t() {
        for (
          var t,
            r,
            n = new Promise(function (e, n) {
              (t = e), (r = n);
            }),
            i = [],
            o = 0;
          o < arguments.length;
          o++
        )
          i.push(arguments[o]);
        i.push(function (e, n) {
          e ? r(e) : t(n);
        });
        try {
          e.apply(this, i);
        } catch (e) {
          r(e);
        }
        return n;
      }
      return (
        Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
        B &&
          Object.defineProperty(t, B, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0,
          }),
        Object.defineProperties(t, i(e))
      );
    }),
      (r.promisify.custom = B),
      (r.callbackify = function (e) {
        if ("function" != typeof e)
          throw TypeError('The "original" argument must be of type Function');
        function t() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t.push(arguments[r]);
          var i = t.pop();
          if ("function" != typeof i)
            throw TypeError("The last argument must be of type Function");
          var o = this,
            s = function () {
              return i.apply(o, arguments);
            };
          e.apply(this, t).then(
            function (e) {
              n.default.nextTick(s.bind(null, null, e));
            },
            function (e) {
              n.default.nextTick(T.bind(null, e, s));
            }
          );
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          Object.defineProperties(t, i(e)),
          t
        );
      });
  },
  612569,
  (e, t, r) => {
    var n = e.i(247167),
      i = {
        782: function (e) {
          "function" == typeof Object.create
            ? (e.exports = function (e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  var r = function () {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
              });
        },
        646: function (e) {
          "use strict";
          let t = {};
          function r(e, r, n) {
            n || (n = Error);
            class i extends n {
              constructor(e, t, n) {
                super(
                  (function (e, t, n) {
                    return "string" == typeof r ? r : r(e, t, n);
                  })(e, t, n)
                );
              }
            }
            (i.prototype.name = n.name), (i.prototype.code = e), (t[e] = i);
          }
          function n(e, t) {
            if (!Array.isArray(e)) return `of ${t} ${String(e)}`;
            {
              let r = e.length;
              return ((e = e.map((e) => String(e))), r > 2)
                ? `one of ${t} ${e.slice(0, r - 1).join(", ")}, or ` + e[r - 1]
                : 2 === r
                ? `one of ${t} ${e[0]} or ${e[1]}`
                : `of ${t} ${e[0]}`;
            }
          }
          r(
            "ERR_INVALID_OPT_VALUE",
            function (e, t) {
              return 'The value "' + t + '" is invalid for option "' + e + '"';
            },
            TypeError
          ),
            r(
              "ERR_INVALID_ARG_TYPE",
              function (e, t, r) {
                var i, o, s, a;
                let u, c;
                if (
                  ("string" == typeof t &&
                  ((i = "not "), t.substr(0, i.length) === i)
                    ? ((u = "must not be"), (t = t.replace(/^not /, "")))
                    : (u = "must be"),
                  (o = " argument"),
                  (void 0 === s || s > e.length) && (s = e.length),
                  e.substring(s - o.length, s) === o)
                )
                  c = `The ${e} ${u} ${n(t, "type")}`;
                else {
                  let r = ("number" != typeof a && (a = 0),
                  a + 1 > e.length || -1 === e.indexOf(".", a))
                    ? "argument"
                    : "property";
                  c = `The "${e}" ${r} ${u} ${n(t, "type")}`;
                }
                return c + `. Received type ${typeof r}`;
              },
              TypeError
            ),
            r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
            r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
              return "The " + e + " method is not implemented";
            }),
            r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
            r("ERR_STREAM_DESTROYED", function (e) {
              return "Cannot call " + e + " after a stream was destroyed";
            }),
            r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
            r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
            r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
            r(
              "ERR_STREAM_NULL_VALUES",
              "May not write null values to stream",
              TypeError
            ),
            r(
              "ERR_UNKNOWN_ENCODING",
              function (e) {
                return "Unknown encoding: " + e;
              },
              TypeError
            ),
            r(
              "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
              "stream.unshift() after end event"
            ),
            (e.exports.q = t);
        },
        403: function (e, t, r) {
          "use strict";
          var i =
            Object.keys ||
            function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return t;
            };
          e.exports = l;
          var o = r(709),
            s = r(337);
          r(782)(l, o);
          for (var a = i(s.prototype), u = 0; u < a.length; u++) {
            var c = a[u];
            l.prototype[c] || (l.prototype[c] = s.prototype[c]);
          }
          function l(e) {
            if (!(this instanceof l)) return new l(e);
            o.call(this, e),
              s.call(this, e),
              (this.allowHalfOpen = !0),
              e &&
                (!1 === e.readable && (this.readable = !1),
                !1 === e.writable && (this.writable = !1),
                !1 === e.allowHalfOpen &&
                  ((this.allowHalfOpen = !1), this.once("end", d)));
          }
          function d() {
            this._writableState.ended || n.default.nextTick(h, this);
          }
          function h(e) {
            e.end();
          }
          Object.defineProperty(l.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
            Object.defineProperty(l.prototype, "writableBuffer", {
              enumerable: !1,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              },
            }),
            Object.defineProperty(l.prototype, "writableLength", {
              enumerable: !1,
              get: function () {
                return this._writableState.length;
              },
            }),
            Object.defineProperty(l.prototype, "destroyed", {
              enumerable: !1,
              get: function () {
                return (
                  void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  this._readableState.destroyed &&
                  this._writableState.destroyed
                );
              },
              set: function (e) {
                void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  ((this._readableState.destroyed = e),
                  (this._writableState.destroyed = e));
              },
            });
        },
        889: function (e, t, r) {
          "use strict";
          e.exports = i;
          var n = r(170);
          function i(e) {
            if (!(this instanceof i)) return new i(e);
            n.call(this, e);
          }
          r(782)(i, n),
            (i.prototype._transform = function (e, t, r) {
              r(null, e);
            });
        },
        709: function (t, r, i) {
          "use strict";
          (t.exports = A), (A.ReadableState = I), i(361).EventEmitter;
          var o,
            s,
            a,
            u,
            c,
            l = function (e, t) {
              return e.listeners(t).length;
            },
            d = i(678),
            h = i(300).Buffer,
            f = e.g.Uint8Array || function () {},
            p = i(837);
          s = p && p.debuglog ? p.debuglog("stream") : function () {};
          var g = i(379),
            y = i(25),
            b = i(776).getHighWaterMark,
            m = i(646).q,
            w = m.ERR_INVALID_ARG_TYPE,
            k = m.ERR_STREAM_PUSH_AFTER_EOF,
            S = m.ERR_METHOD_NOT_IMPLEMENTED,
            v = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
          i(782)(A, d);
          var _ = y.errorOrDestroy,
            E = ["error", "close", "destroy", "pause", "resume"];
          function I(e, t, r) {
            (o = o || i(403)),
              (e = e || {}),
              "boolean" != typeof r && (r = t instanceof o),
              (this.objectMode = !!e.objectMode),
              r &&
                (this.objectMode = this.objectMode || !!e.readableObjectMode),
              (this.highWaterMark = b(this, e, "readableHighWaterMark", r)),
              (this.buffer = new g()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.paused = !0),
              (this.emitClose = !1 !== e.emitClose),
              (this.autoDestroy = !!e.autoDestroy),
              (this.destroyed = !1),
              (this.defaultEncoding = e.defaultEncoding || "utf8"),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding &&
                (a || (a = i(704).s),
                (this.decoder = new a(e.encoding)),
                (this.encoding = e.encoding));
          }
          function A(e) {
            if (((o = o || i(403)), !(this instanceof A))) return new A(e);
            var t = this instanceof o;
            (this._readableState = new I(e, this, t)),
              (this.readable = !0),
              e &&
                ("function" == typeof e.read && (this._read = e.read),
                "function" == typeof e.destroy && (this._destroy = e.destroy)),
              d.call(this);
          }
          function x(e, t, r, n, i) {
            s("readableAddChunk", t);
            var o,
              a,
              u = e._readableState;
            if (null === t)
              (u.reading = !1),
                (function (e, t) {
                  if ((s("onEofChunk"), !t.ended)) {
                    if (t.decoder) {
                      var r = t.decoder.end();
                      r &&
                        r.length &&
                        (t.buffer.push(r),
                        (t.length += t.objectMode ? 1 : r.length));
                    }
                    (t.ended = !0),
                      t.sync
                        ? B(e)
                        : ((t.needReadable = !1),
                          t.emittedReadable ||
                            ((t.emittedReadable = !0), T(e)));
                  }
                })(e, u);
            else if (
              (i ||
                (a = (function (e, t) {
                  var r;
                  return (
                    h.isBuffer(t) ||
                      t instanceof f ||
                      "string" == typeof t ||
                      void 0 === t ||
                      e.objectMode ||
                      (r = new w(
                        "chunk",
                        ["string", "Buffer", "Uint8Array"],
                        t
                      )),
                    r
                  );
                })(u, t)),
              a)
            )
              _(e, a);
            else if (u.objectMode || (t && t.length > 0))
              if (
                ("string" == typeof t ||
                  u.objectMode ||
                  Object.getPrototypeOf(t) === h.prototype ||
                  ((o = t), (t = h.from(o))),
                n)
              )
                u.endEmitted ? _(e, new v()) : R(e, u, t, !0);
              else if (u.ended) _(e, new k());
              else {
                if (u.destroyed) return !1;
                (u.reading = !1),
                  u.decoder && !r
                    ? ((t = u.decoder.write(t)),
                      u.objectMode || 0 !== t.length ? R(e, u, t, !1) : O(e, u))
                    : R(e, u, t, !1);
              }
            else n || ((u.reading = !1), O(e, u));
            return !u.ended && (u.length < u.highWaterMark || 0 === u.length);
          }
          function R(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync
              ? ((t.awaitDrain = 0), e.emit("data", r))
              : ((t.length += t.objectMode ? 1 : r.length),
                n ? t.buffer.unshift(r) : t.buffer.push(r),
                t.needReadable && B(e)),
              O(e, t);
          }
          function P(e, t) {
            var r;
            if (e <= 0 || (0 === t.length && t.ended)) return 0;
            if (t.objectMode) return 1;
            if (e != e)
              if (t.flowing && t.length) return t.buffer.head.data.length;
              else return t.length;
            return (e > t.highWaterMark &&
              ((r = e) >= 0x40000000
                ? (r = 0x40000000)
                : (r--,
                  (r |= r >>> 1),
                  (r |= r >>> 2),
                  (r |= r >>> 4),
                  (r |= r >>> 8),
                  (r |= r >>> 16),
                  r++),
              (t.highWaterMark = r)),
            e <= t.length)
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0);
          }
          function B(e) {
            var t = e._readableState;
            s("emitReadable", t.needReadable, t.emittedReadable),
              (t.needReadable = !1),
              t.emittedReadable ||
                (s("emitReadable", t.flowing),
                (t.emittedReadable = !0),
                n.default.nextTick(T, e));
          }
          function T(e) {
            var t = e._readableState;
            s("emitReadable_", t.destroyed, t.length, t.ended),
              !t.destroyed &&
                (t.length || t.ended) &&
                (e.emit("readable"), (t.emittedReadable = !1)),
              (t.needReadable =
                !t.flowing && !t.ended && t.length <= t.highWaterMark),
              M(e);
          }
          function O(e, t) {
            t.readingMore ||
              ((t.readingMore = !0), n.default.nextTick(C, e, t));
          }
          function C(e, t) {
            for (
              ;
              !t.reading &&
              !t.ended &&
              (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

            ) {
              var r = t.length;
              if ((s("maybeReadMore read 0"), e.read(0), r === t.length)) break;
            }
            t.readingMore = !1;
          }
          function L(e) {
            var t = e._readableState;
            (t.readableListening = e.listenerCount("readable") > 0),
              t.resumeScheduled && !t.paused
                ? (t.flowing = !0)
                : e.listenerCount("data") > 0 && e.resume();
          }
          function N(e) {
            s("readable nexttick read 0"), e.read(0);
          }
          function U(e, t) {
            s("resume", t.reading),
              t.reading || e.read(0),
              (t.resumeScheduled = !1),
              e.emit("resume"),
              M(e),
              t.flowing && !t.reading && e.read(0);
          }
          function M(e) {
            var t = e._readableState;
            for (s("flow", t.flowing); t.flowing && null !== e.read(); );
          }
          function z(e, t) {
            var r;
            return 0 === t.length
              ? null
              : (t.objectMode
                  ? (r = t.buffer.shift())
                  : !e || e >= t.length
                  ? ((r = t.decoder
                      ? t.buffer.join("")
                      : 1 === t.buffer.length
                      ? t.buffer.first()
                      : t.buffer.concat(t.length)),
                    t.buffer.clear())
                  : (r = t.buffer.consume(e, t.decoder)),
                r);
          }
          function W(e) {
            var t = e._readableState;
            s("endReadable", t.endEmitted),
              t.endEmitted || ((t.ended = !0), n.default.nextTick(j, t, e));
          }
          function j(e, t) {
            if (
              (s("endReadableNT", e.endEmitted, e.length),
              !e.endEmitted &&
                0 === e.length &&
                ((e.endEmitted = !0),
                (t.readable = !1),
                t.emit("end"),
                e.autoDestroy))
            ) {
              var r = t._writableState;
              (!r || (r.autoDestroy && r.finished)) && t.destroy();
            }
          }
          function D(e, t) {
            for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
            return -1;
          }
          Object.defineProperty(A.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState && this._readableState.destroyed
              );
            },
            set: function (e) {
              this._readableState && (this._readableState.destroyed = e);
            },
          }),
            (A.prototype.destroy = y.destroy),
            (A.prototype._undestroy = y.undestroy),
            (A.prototype._destroy = function (e, t) {
              t(e);
            }),
            (A.prototype.push = function (e, t) {
              var r,
                n = this._readableState;
              return (
                n.objectMode
                  ? (r = !0)
                  : "string" == typeof e &&
                    ((t = t || n.defaultEncoding) !== n.encoding &&
                      ((e = h.from(e, t)), (t = "")),
                    (r = !0)),
                x(this, e, t, !1, r)
              );
            }),
            (A.prototype.unshift = function (e) {
              return x(this, e, null, !0, !1);
            }),
            (A.prototype.isPaused = function () {
              return !1 === this._readableState.flowing;
            }),
            (A.prototype.setEncoding = function (e) {
              a || (a = i(704).s);
              var t = new a(e);
              (this._readableState.decoder = t),
                (this._readableState.encoding =
                  this._readableState.decoder.encoding);
              for (
                var r = this._readableState.buffer.head, n = "";
                null !== r;

              )
                (n += t.write(r.data)), (r = r.next);
              return (
                this._readableState.buffer.clear(),
                "" !== n && this._readableState.buffer.push(n),
                (this._readableState.length = n.length),
                this
              );
            }),
            (A.prototype.read = function (e) {
              s("read", e), (e = parseInt(e, 10));
              var t,
                r = this._readableState,
                n = e;
              if (
                (0 !== e && (r.emittedReadable = !1),
                0 === e &&
                  r.needReadable &&
                  ((0 !== r.highWaterMark
                    ? r.length >= r.highWaterMark
                    : r.length > 0) ||
                    r.ended))
              )
                return (
                  s("read: emitReadable", r.length, r.ended),
                  0 === r.length && r.ended ? W(this) : B(this),
                  null
                );
              if (0 === (e = P(e, r)) && r.ended)
                return 0 === r.length && W(this), null;
              var i = r.needReadable;
              return (
                s("need readable", i),
                (0 === r.length || r.length - e < r.highWaterMark) &&
                  s("length less than watermark", (i = !0)),
                r.ended || r.reading
                  ? s("reading or ended", (i = !1))
                  : i &&
                    (s("do read"),
                    (r.reading = !0),
                    (r.sync = !0),
                    0 === r.length && (r.needReadable = !0),
                    this._read(r.highWaterMark),
                    (r.sync = !1),
                    r.reading || (e = P(n, r))),
                null === (t = e > 0 ? z(e, r) : null)
                  ? ((r.needReadable = r.length <= r.highWaterMark), (e = 0))
                  : ((r.length -= e), (r.awaitDrain = 0)),
                0 === r.length &&
                  (r.ended || (r.needReadable = !0),
                  n !== e && r.ended && W(this)),
                null !== t && this.emit("data", t),
                t
              );
            }),
            (A.prototype._read = function (e) {
              _(this, new S("_read()"));
            }),
            (A.prototype.pipe = function (e, t) {
              var r,
                i = this,
                o = this._readableState;
              switch (o.pipesCount) {
                case 0:
                  o.pipes = e;
                  break;
                case 1:
                  o.pipes = [o.pipes, e];
                  break;
                default:
                  o.pipes.push(e);
              }
              (o.pipesCount += 1), s("pipe count=%d opts=%j", o.pipesCount, t);
              var a =
                (t && !1 === t.end) ||
                e === n.default.stdout ||
                e === n.default.stderr
                  ? y
                  : u;
              function u() {
                s("onend"), e.end();
              }
              o.endEmitted ? n.default.nextTick(a) : i.once("end", a),
                e.on("unpipe", function t(r, n) {
                  s("onunpipe"),
                    r === i &&
                      n &&
                      !1 === n.hasUnpiped &&
                      ((n.hasUnpiped = !0),
                      s("cleanup"),
                      e.removeListener("close", p),
                      e.removeListener("finish", g),
                      e.removeListener("drain", c),
                      e.removeListener("error", f),
                      e.removeListener("unpipe", t),
                      i.removeListener("end", u),
                      i.removeListener("end", y),
                      i.removeListener("data", h),
                      (d = !0),
                      o.awaitDrain &&
                        (!e._writableState || e._writableState.needDrain) &&
                        c());
                });
              var c =
                ((r = i),
                function () {
                  var e = r._readableState;
                  s("pipeOnDrain", e.awaitDrain),
                    e.awaitDrain && e.awaitDrain--,
                    0 === e.awaitDrain &&
                      l(r, "data") &&
                      ((e.flowing = !0), M(r));
                });
              e.on("drain", c);
              var d = !1;
              function h(t) {
                s("ondata");
                var r = e.write(t);
                s("dest.write", r),
                  !1 === r &&
                    (((1 === o.pipesCount && o.pipes === e) ||
                      (o.pipesCount > 1 && -1 !== D(o.pipes, e))) &&
                      !d &&
                      (s("false write response, pause", o.awaitDrain),
                      o.awaitDrain++),
                    i.pause());
              }
              function f(t) {
                s("onerror", t),
                  y(),
                  e.removeListener("error", f),
                  0 === l(e, "error") && _(e, t);
              }
              function p() {
                e.removeListener("finish", g), y();
              }
              function g() {
                s("onfinish"), e.removeListener("close", p), y();
              }
              function y() {
                s("unpipe"), i.unpipe(e);
              }
              return (
                i.on("data", h),
                !(function (e, t, r) {
                  if ("function" == typeof e.prependListener)
                    return e.prependListener(t, r);
                  e._events && e._events[t]
                    ? Array.isArray(e._events[t])
                      ? e._events[t].unshift(r)
                      : (e._events[t] = [r, e._events[t]])
                    : e.on(t, r);
                })(e, "error", f),
                e.once("close", p),
                e.once("finish", g),
                e.emit("pipe", i),
                o.flowing || (s("pipe resume"), i.resume()),
                e
              );
            }),
            (A.prototype.unpipe = function (e) {
              var t = this._readableState,
                r = { hasUnpiped: !1 };
              if (0 === t.pipesCount) return this;
              if (1 === t.pipesCount)
                return (
                  (e && e !== t.pipes) ||
                    (e || (e = t.pipes),
                    (t.pipes = null),
                    (t.pipesCount = 0),
                    (t.flowing = !1),
                    e && e.emit("unpipe", this, r)),
                  this
                );
              if (!e) {
                var n = t.pipes,
                  i = t.pipesCount;
                (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                for (var o = 0; o < i; o++)
                  n[o].emit("unpipe", this, { hasUnpiped: !1 });
                return this;
              }
              var s = D(t.pipes, e);
              return (
                -1 === s ||
                  (t.pipes.splice(s, 1),
                  (t.pipesCount -= 1),
                  1 === t.pipesCount && (t.pipes = t.pipes[0]),
                  e.emit("unpipe", this, r)),
                this
              );
            }),
            (A.prototype.on = function (e, t) {
              var r = d.prototype.on.call(this, e, t),
                i = this._readableState;
              return (
                "data" === e
                  ? ((i.readableListening = this.listenerCount("readable") > 0),
                    !1 !== i.flowing && this.resume())
                  : "readable" !== e ||
                    i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    s("on readable", i.length, i.reading),
                    i.length
                      ? B(this)
                      : i.reading || n.default.nextTick(N, this)),
                r
              );
            }),
            (A.prototype.addListener = A.prototype.on),
            (A.prototype.removeListener = function (e, t) {
              var r = d.prototype.removeListener.call(this, e, t);
              return "readable" === e && n.default.nextTick(L, this), r;
            }),
            (A.prototype.removeAllListeners = function (e) {
              var t = d.prototype.removeAllListeners.apply(this, arguments);
              return (
                ("readable" === e || void 0 === e) &&
                  n.default.nextTick(L, this),
                t
              );
            }),
            (A.prototype.resume = function () {
              var e,
                t,
                r = this._readableState;
              return (
                r.flowing ||
                  (s("resume"),
                  (r.flowing = !r.readableListening),
                  (e = this),
                  (t = r).resumeScheduled ||
                    ((t.resumeScheduled = !0), n.default.nextTick(U, e, t))),
                (r.paused = !1),
                this
              );
            }),
            (A.prototype.pause = function () {
              return (
                s("call pause flowing=%j", this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (s("pause"),
                  (this._readableState.flowing = !1),
                  this.emit("pause")),
                (this._readableState.paused = !0),
                this
              );
            }),
            (A.prototype.wrap = function (e) {
              var t = this,
                r = this._readableState,
                n = !1;
              for (var i in (e.on("end", function () {
                if ((s("wrapped end"), r.decoder && !r.ended)) {
                  var e = r.decoder.end();
                  e && e.length && t.push(e);
                }
                t.push(null);
              }),
              e.on("data", function (i) {
                s("wrapped data"),
                  r.decoder && (i = r.decoder.write(i)),
                  (r.objectMode && null == i) ||
                    ((r.objectMode || (i && i.length)) &&
                      (t.push(i) || ((n = !0), e.pause())));
              }),
              e))
                void 0 === this[i] &&
                  "function" == typeof e[i] &&
                  (this[i] = (function (t) {
                    return function () {
                      return e[t].apply(e, arguments);
                    };
                  })(i));
              for (var o = 0; o < E.length; o++)
                e.on(E[o], this.emit.bind(this, E[o]));
              return (
                (this._read = function (t) {
                  s("wrapped _read", t), n && ((n = !1), e.resume());
                }),
                this
              );
            }),
            "function" == typeof Symbol &&
              (A.prototype[Symbol.asyncIterator] = function () {
                return void 0 === u && (u = i(871)), u(this);
              }),
            Object.defineProperty(A.prototype, "readableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._readableState.highWaterMark;
              },
            }),
            Object.defineProperty(A.prototype, "readableBuffer", {
              enumerable: !1,
              get: function () {
                return this._readableState && this._readableState.buffer;
              },
            }),
            Object.defineProperty(A.prototype, "readableFlowing", {
              enumerable: !1,
              get: function () {
                return this._readableState.flowing;
              },
              set: function (e) {
                this._readableState && (this._readableState.flowing = e);
              },
            }),
            (A._fromList = z),
            Object.defineProperty(A.prototype, "readableLength", {
              enumerable: !1,
              get: function () {
                return this._readableState.length;
              },
            }),
            "function" == typeof Symbol &&
              (A.from = function (e, t) {
                return void 0 === c && (c = i(727)), c(A, e, t);
              });
        },
        170: function (e, t, r) {
          "use strict";
          e.exports = l;
          var n = r(646).q,
            i = n.ERR_METHOD_NOT_IMPLEMENTED,
            o = n.ERR_MULTIPLE_CALLBACK,
            s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            a = n.ERR_TRANSFORM_WITH_LENGTH_0,
            u = r(403);
          function c(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n) return this.emit("error", new o());
            (r.writechunk = null),
              (r.writecb = null),
              null != t && this.push(t),
              n(e);
            var i = this._readableState;
            (i.reading = !1),
              (i.needReadable || i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
          }
          function l(e) {
            if (!(this instanceof l)) return new l(e);
            u.call(this, e),
              (this._transformState = {
                afterTransform: c.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null,
              }),
              (this._readableState.needReadable = !0),
              (this._readableState.sync = !1),
              e &&
                ("function" == typeof e.transform &&
                  (this._transform = e.transform),
                "function" == typeof e.flush && (this._flush = e.flush)),
              this.on("prefinish", d);
          }
          function d() {
            var e = this;
            "function" != typeof this._flush || this._readableState.destroyed
              ? h(this, null, null)
              : this._flush(function (t, r) {
                  h(e, t, r);
                });
          }
          function h(e, t, r) {
            if (t) return e.emit("error", t);
            if ((null != r && e.push(r), e._writableState.length))
              throw new a();
            if (e._transformState.transforming) throw new s();
            return e.push(null);
          }
          r(782)(l, u),
            (l.prototype.push = function (e, t) {
              return (
                (this._transformState.needTransform = !1),
                u.prototype.push.call(this, e, t)
              );
            }),
            (l.prototype._transform = function (e, t, r) {
              r(new i("_transform()"));
            }),
            (l.prototype._write = function (e, t, r) {
              var n = this._transformState;
              if (
                ((n.writecb = r),
                (n.writechunk = e),
                (n.writeencoding = t),
                !n.transforming)
              ) {
                var i = this._readableState;
                (n.needTransform ||
                  i.needReadable ||
                  i.length < i.highWaterMark) &&
                  this._read(i.highWaterMark);
              }
            }),
            (l.prototype._read = function (e) {
              var t = this._transformState;
              null === t.writechunk || t.transforming
                ? (t.needTransform = !0)
                : ((t.transforming = !0),
                  this._transform(
                    t.writechunk,
                    t.writeencoding,
                    t.afterTransform
                  ));
            }),
            (l.prototype._destroy = function (e, t) {
              u.prototype._destroy.call(this, e, function (e) {
                t(e);
              });
            });
        },
        337: function (t, r, i) {
          "use strict";
          function o(e) {
            var t = this;
            (this.next = null),
              (this.entry = null),
              (this.finish = function () {
                var r = t,
                  n = e,
                  i = r.entry;
                for (r.entry = null; i; ) {
                  var o = i.callback;
                  n.pendingcb--, o(void 0), (i = i.next);
                }
                n.corkedRequestsFree.next = r;
              });
          }
          (t.exports = A), (A.WritableState = I);
          var s,
            a,
            u = { deprecate: i(769) },
            c = i(678),
            l = i(300).Buffer,
            d = e.g.Uint8Array || function () {},
            h = i(25),
            f = i(776).getHighWaterMark,
            p = i(646).q,
            g = p.ERR_INVALID_ARG_TYPE,
            y = p.ERR_METHOD_NOT_IMPLEMENTED,
            b = p.ERR_MULTIPLE_CALLBACK,
            m = p.ERR_STREAM_CANNOT_PIPE,
            w = p.ERR_STREAM_DESTROYED,
            k = p.ERR_STREAM_NULL_VALUES,
            S = p.ERR_STREAM_WRITE_AFTER_END,
            v = p.ERR_UNKNOWN_ENCODING,
            _ = h.errorOrDestroy;
          function E() {}
          function I(e, t, r) {
            (s = s || i(403)),
              (e = e || {}),
              "boolean" != typeof r && (r = t instanceof s),
              (this.objectMode = !!e.objectMode),
              r &&
                (this.objectMode = this.objectMode || !!e.writableObjectMode),
              (this.highWaterMark = f(this, e, "writableHighWaterMark", r)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1),
              (this.destroyed = !1);
            var a = !1 === e.decodeStrings;
            (this.decodeStrings = !a),
              (this.defaultEncoding = e.defaultEncoding || "utf8"),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function (e) {
                !(function (e, t) {
                  var r = e._writableState,
                    i = r.sync,
                    o = r.writecb;
                  if ("function" != typeof o) throw new b();
                  if (
                    ((r.writing = !1),
                    (r.writecb = null),
                    (r.length -= r.writelen),
                    (r.writelen = 0),
                    t)
                  )
                    --r.pendingcb,
                      i
                        ? (n.default.nextTick(o, t),
                          n.default.nextTick(O, e, r),
                          (e._writableState.errorEmitted = !0),
                          _(e, t))
                        : (o(t),
                          (e._writableState.errorEmitted = !0),
                          _(e, t),
                          O(e, r));
                  else {
                    var s = B(r) || e.destroyed;
                    s ||
                      r.corked ||
                      r.bufferProcessing ||
                      !r.bufferedRequest ||
                      P(e, r),
                      i ? n.default.nextTick(R, e, r, s, o) : R(e, r, s, o);
                  }
                })(t, e);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.emitClose = !1 !== e.emitClose),
              (this.autoDestroy = !!e.autoDestroy),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new o(this));
          }
          i(782)(A, c),
            (I.prototype.getBuffer = function () {
              for (var e = this.bufferedRequest, t = []; e; )
                t.push(e), (e = e.next);
              return t;
            });
          try {
            Object.defineProperty(I.prototype, "buffer", {
              get: u.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
          function A(e) {
            var t = this instanceof (s = s || i(403));
            if (!t && !a.call(A, this)) return new A(e);
            (this._writableState = new I(e, this, t)),
              (this.writable = !0),
              e &&
                ("function" == typeof e.write && (this._write = e.write),
                "function" == typeof e.writev && (this._writev = e.writev),
                "function" == typeof e.destroy && (this._destroy = e.destroy),
                "function" == typeof e.final && (this._final = e.final)),
              c.call(this);
          }
          function x(e, t, r, n, i, o, s) {
            (t.writelen = n),
              (t.writecb = s),
              (t.writing = !0),
              (t.sync = !0),
              t.destroyed
                ? t.onwrite(new w("write"))
                : r
                ? e._writev(i, t.onwrite)
                : e._write(i, o, t.onwrite),
              (t.sync = !1);
          }
          function R(e, t, r, n) {
            var i, o;
            r ||
              ((i = e),
              0 === (o = t).length &&
                o.needDrain &&
                ((o.needDrain = !1), i.emit("drain"))),
              t.pendingcb--,
              n(),
              O(e, t);
          }
          function P(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
              var n = Array(t.bufferedRequestCount),
                i = t.corkedRequestsFree;
              i.entry = r;
              for (var s = 0, a = !0; r; )
                (n[s] = r), r.isBuf || (a = !1), (r = r.next), (s += 1);
              (n.allBuffers = a),
                x(e, t, !0, t.length, n, "", i.finish),
                t.pendingcb++,
                (t.lastBufferedRequest = null),
                i.next
                  ? ((t.corkedRequestsFree = i.next), (i.next = null))
                  : (t.corkedRequestsFree = new o(t)),
                (t.bufferedRequestCount = 0);
            } else {
              for (; r; ) {
                var u = r.chunk,
                  c = r.encoding,
                  l = r.callback,
                  d = t.objectMode ? 1 : u.length;
                if (
                  (x(e, t, !1, d, u, c, l),
                  (r = r.next),
                  t.bufferedRequestCount--,
                  t.writing)
                )
                  break;
              }
              null === r && (t.lastBufferedRequest = null);
            }
            (t.bufferedRequest = r), (t.bufferProcessing = !1);
          }
          function B(e) {
            return (
              e.ending &&
              0 === e.length &&
              null === e.bufferedRequest &&
              !e.finished &&
              !e.writing
            );
          }
          function T(e, t) {
            e._final(function (r) {
              t.pendingcb--,
                r && _(e, r),
                (t.prefinished = !0),
                e.emit("prefinish"),
                O(e, t);
            });
          }
          function O(e, t) {
            var r = B(t);
            if (
              r &&
              (t.prefinished ||
                t.finalCalled ||
                ("function" != typeof e._final || t.destroyed
                  ? ((t.prefinished = !0), e.emit("prefinish"))
                  : (t.pendingcb++,
                    (t.finalCalled = !0),
                    n.default.nextTick(T, e, t))),
              0 === t.pendingcb &&
                ((t.finished = !0), e.emit("finish"), t.autoDestroy))
            ) {
              var i = e._readableState;
              (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
            }
            return r;
          }
          "function" == typeof Symbol &&
          Symbol.hasInstance &&
          "function" == typeof Function.prototype[Symbol.hasInstance]
            ? ((a = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(A, Symbol.hasInstance, {
                value: function (e) {
                  return (
                    !!a.call(this, e) ||
                    (this === A && e && e._writableState instanceof I)
                  );
                },
              }))
            : (a = function (e) {
                return e instanceof this;
              }),
            (A.prototype.pipe = function () {
              _(this, new m());
            }),
            (A.prototype.write = function (e, t, r) {
              var i,
                o,
                s,
                a,
                u,
                c,
                h,
                f = this._writableState,
                p = !1,
                y = !f.objectMode && ((i = e), l.isBuffer(i) || i instanceof d);
              return (
                (y && !l.isBuffer(e) && ((o = e), (e = l.from(o))),
                "function" == typeof t && ((r = t), (t = null)),
                y ? (t = "buffer") : t || (t = f.defaultEncoding),
                "function" != typeof r && (r = E),
                f.ending)
                  ? ((s = r), _(this, (a = new S())), n.default.nextTick(s, a))
                  : (y ||
                      ((u = e),
                      (c = r),
                      null === u
                        ? (h = new k())
                        : "string" == typeof u ||
                          f.objectMode ||
                          (h = new g("chunk", ["string", "Buffer"], u)),
                      !h || (_(this, h), n.default.nextTick(c, h), 0))) &&
                    (f.pendingcb++,
                    (p = (function (e, t, r, n, i, o) {
                      if (!r) {
                        var s,
                          a,
                          u =
                            ((s = n),
                            (a = i),
                            t.objectMode ||
                              !1 === t.decodeStrings ||
                              "string" != typeof s ||
                              (s = l.from(s, a)),
                            s);
                        n !== u && ((r = !0), (i = "buffer"), (n = u));
                      }
                      var c = t.objectMode ? 1 : n.length;
                      t.length += c;
                      var d = t.length < t.highWaterMark;
                      if ((d || (t.needDrain = !0), t.writing || t.corked)) {
                        var h = t.lastBufferedRequest;
                        (t.lastBufferedRequest = {
                          chunk: n,
                          encoding: i,
                          isBuf: r,
                          callback: o,
                          next: null,
                        }),
                          h
                            ? (h.next = t.lastBufferedRequest)
                            : (t.bufferedRequest = t.lastBufferedRequest),
                          (t.bufferedRequestCount += 1);
                      } else x(e, t, !1, c, n, i, o);
                      return d;
                    })(this, f, y, e, t, r))),
                p
              );
            }),
            (A.prototype.cork = function () {
              this._writableState.corked++;
            }),
            (A.prototype.uncork = function () {
              var e = this._writableState;
              e.corked &&
                (e.corked--,
                e.writing ||
                  e.corked ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  P(this, e));
            }),
            (A.prototype.setDefaultEncoding = function (e) {
              if (
                ("string" == typeof e && (e = e.toLowerCase()),
                !(
                  [
                    "hex",
                    "utf8",
                    "utf-8",
                    "ascii",
                    "binary",
                    "base64",
                    "ucs2",
                    "ucs-2",
                    "utf16le",
                    "utf-16le",
                    "raw",
                  ].indexOf((e + "").toLowerCase()) > -1
                ))
              )
                throw new v(e);
              return (this._writableState.defaultEncoding = e), this;
            }),
            Object.defineProperty(A.prototype, "writableBuffer", {
              enumerable: !1,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              },
            }),
            Object.defineProperty(A.prototype, "writableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._writableState.highWaterMark;
              },
            }),
            (A.prototype._write = function (e, t, r) {
              r(new y("_write()"));
            }),
            (A.prototype._writev = null),
            (A.prototype.end = function (e, t, r) {
              var i,
                o,
                s,
                a = this._writableState;
              return (
                "function" == typeof e
                  ? ((r = e), (e = null), (t = null))
                  : "function" == typeof t && ((r = t), (t = null)),
                null != e && this.write(e, t),
                a.corked && ((a.corked = 1), this.uncork()),
                a.ending ||
                  ((i = this),
                  (o = a),
                  (s = r),
                  (o.ending = !0),
                  O(i, o),
                  s &&
                    (o.finished ? n.default.nextTick(s) : i.once("finish", s)),
                  (o.ended = !0),
                  (i.writable = !1)),
                this
              );
            }),
            Object.defineProperty(A.prototype, "writableLength", {
              enumerable: !1,
              get: function () {
                return this._writableState.length;
              },
            }),
            Object.defineProperty(A.prototype, "destroyed", {
              enumerable: !1,
              get: function () {
                return (
                  void 0 !== this._writableState &&
                  this._writableState.destroyed
                );
              },
              set: function (e) {
                this._writableState && (this._writableState.destroyed = e);
              },
            }),
            (A.prototype.destroy = h.destroy),
            (A.prototype._undestroy = h.undestroy),
            (A.prototype._destroy = function (e, t) {
              t(e);
            });
        },
        871: function (e, t, r) {
          "use strict";
          function i(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var o,
            s = r(698),
            a = Symbol("lastResolve"),
            u = Symbol("lastReject"),
            c = Symbol("error"),
            l = Symbol("ended"),
            d = Symbol("lastPromise"),
            h = Symbol("handlePromise"),
            f = Symbol("stream");
          function p(e, t) {
            return { value: e, done: t };
          }
          function g(e) {
            var t = e[a];
            if (null !== t) {
              var r = e[f].read();
              null !== r &&
                ((e[d] = null), (e[a] = null), (e[u] = null), t(p(r, !1)));
            }
          }
          function y(e) {
            n.default.nextTick(g, e);
          }
          var b = Object.getPrototypeOf(function () {}),
            m = Object.setPrototypeOf(
              (i(
                (o = {
                  get stream() {
                    return this[f];
                  },
                  next: function () {
                    var e,
                      t,
                      r = this,
                      i = this[c];
                    if (null !== i) return Promise.reject(i);
                    if (this[l]) return Promise.resolve(p(void 0, !0));
                    if (this[f].destroyed)
                      return new Promise(function (e, t) {
                        n.default.nextTick(function () {
                          r[c] ? t(r[c]) : e(p(void 0, !0));
                        });
                      });
                    var o = this[d];
                    if (o)
                      t = new Promise(
                        ((e = this),
                        function (t, r) {
                          o.then(function () {
                            e[l] ? t(p(void 0, !0)) : e[h](t, r);
                          }, r);
                        })
                      );
                    else {
                      var s = this[f].read();
                      if (null !== s) return Promise.resolve(p(s, !1));
                      t = new Promise(this[h]);
                    }
                    return (this[d] = t), t;
                  },
                }),
                Symbol.asyncIterator,
                function () {
                  return this;
                }
              ),
              i(o, "return", function () {
                var e = this;
                return new Promise(function (t, r) {
                  e[f].destroy(null, function (e) {
                    e ? r(e) : t(p(void 0, !0));
                  });
                });
              }),
              o),
              b
            );
          e.exports = function (e) {
            var t,
              r = Object.create(
                m,
                (i((t = {}), f, { value: e, writable: !0 }),
                i(t, a, { value: null, writable: !0 }),
                i(t, u, { value: null, writable: !0 }),
                i(t, c, { value: null, writable: !0 }),
                i(t, l, { value: e._readableState.endEmitted, writable: !0 }),
                i(t, h, {
                  value: function (e, t) {
                    var n = r[f].read();
                    n
                      ? ((r[d] = null),
                        (r[a] = null),
                        (r[u] = null),
                        e(p(n, !1)))
                      : ((r[a] = e), (r[u] = t));
                  },
                  writable: !0,
                }),
                t)
              );
            return (
              (r[d] = null),
              s(e, function (e) {
                if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                  var t = r[u];
                  null !== t &&
                    ((r[d] = null), (r[a] = null), (r[u] = null), t(e)),
                    (r[c] = e);
                  return;
                }
                var n = r[a];
                null !== n &&
                  ((r[d] = null),
                  (r[a] = null),
                  (r[u] = null),
                  n(p(void 0, !0))),
                  (r[l] = !0);
              }),
              e.on("readable", y.bind(null, r)),
              r
            );
          };
        },
        379: function (e, t, r) {
          "use strict";
          function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          var i = r(300).Buffer,
            o = r(837).inspect,
            s = (o && o.custom) || "inspect";
          e.exports = (function () {
            var e;
            function t() {
              if (!(this instanceof t))
                throw TypeError("Cannot call a class as a function");
              (this.head = null), (this.tail = null), (this.length = 0);
            }
            return (
              (e = [
                {
                  key: "push",
                  value: function (e) {
                    var t = { data: e, next: null };
                    this.length > 0 ? (this.tail.next = t) : (this.head = t),
                      (this.tail = t),
                      ++this.length;
                  },
                },
                {
                  key: "unshift",
                  value: function (e) {
                    var t = { data: e, next: this.head };
                    0 === this.length && (this.tail = t),
                      (this.head = t),
                      ++this.length;
                  },
                },
                {
                  key: "shift",
                  value: function () {
                    if (0 !== this.length) {
                      var e = this.head.data;
                      return (
                        1 === this.length
                          ? (this.head = this.tail = null)
                          : (this.head = this.head.next),
                        --this.length,
                        e
                      );
                    }
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this.head = this.tail = null), (this.length = 0);
                  },
                },
                {
                  key: "join",
                  value: function (e) {
                    if (0 === this.length) return "";
                    for (var t = this.head, r = "" + t.data; (t = t.next); )
                      r += e + t.data;
                    return r;
                  },
                },
                {
                  key: "concat",
                  value: function (e) {
                    if (0 === this.length) return i.alloc(0);
                    for (
                      var t,
                        r,
                        n = i.allocUnsafe(e >>> 0),
                        o = this.head,
                        s = 0;
                      o;

                    )
                      (t = o.data),
                        (r = s),
                        i.prototype.copy.call(t, n, r),
                        (s += o.data.length),
                        (o = o.next);
                    return n;
                  },
                },
                {
                  key: "consume",
                  value: function (e, t) {
                    var r;
                    return (
                      e < this.head.data.length
                        ? ((r = this.head.data.slice(0, e)),
                          (this.head.data = this.head.data.slice(e)))
                        : (r =
                            e === this.head.data.length
                              ? this.shift()
                              : t
                              ? this._getString(e)
                              : this._getBuffer(e)),
                      r
                    );
                  },
                },
                {
                  key: "first",
                  value: function () {
                    return this.head.data;
                  },
                },
                {
                  key: "_getString",
                  value: function (e) {
                    var t = this.head,
                      r = 1,
                      n = t.data;
                    for (e -= n.length; (t = t.next); ) {
                      var i = t.data,
                        o = e > i.length ? i.length : e;
                      if (
                        (o === i.length ? (n += i) : (n += i.slice(0, e)),
                        0 == (e -= o))
                      ) {
                        o === i.length
                          ? (++r,
                            t.next
                              ? (this.head = t.next)
                              : (this.head = this.tail = null))
                          : ((this.head = t), (t.data = i.slice(o)));
                        break;
                      }
                      ++r;
                    }
                    return (this.length -= r), n;
                  },
                },
                {
                  key: "_getBuffer",
                  value: function (e) {
                    var t = i.allocUnsafe(e),
                      r = this.head,
                      n = 1;
                    for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                      var o = r.data,
                        s = e > o.length ? o.length : e;
                      if ((o.copy(t, t.length - e, 0, s), 0 == (e -= s))) {
                        s === o.length
                          ? (++n,
                            r.next
                              ? (this.head = r.next)
                              : (this.head = this.tail = null))
                          : ((this.head = r), (r.data = o.slice(s)));
                        break;
                      }
                      ++n;
                    }
                    return (this.length -= n), t;
                  },
                },
                {
                  key: s,
                  value: function (e, t) {
                    return o(
                      this,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? n(Object(r), !0).forEach(function (t) {
                                var n, i, o;
                                (n = e),
                                  (i = t),
                                  (o = r[t]),
                                  i in n
                                    ? Object.defineProperty(n, i, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      })
                                    : (n[i] = o);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : n(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })({}, t, { depth: 0, customInspect: !1 })
                    );
                  },
                },
              ]),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(t.prototype, e),
              t
            );
          })();
        },
        25: function (e) {
          "use strict";
          function t(e, t) {
            i(e, t), r(e);
          }
          function r(e) {
            (e._writableState && !e._writableState.emitClose) ||
              ((!e._readableState || e._readableState.emitClose) &&
                e.emit("close"));
          }
          function i(e, t) {
            e.emit("error", t);
          }
          e.exports = {
            destroy: function (e, o) {
              var s = this,
                a = this._readableState && this._readableState.destroyed,
                u = this._writableState && this._writableState.destroyed;
              return (
                a || u
                  ? o
                    ? o(e)
                    : e &&
                      (this._writableState
                        ? this._writableState.errorEmitted ||
                          ((this._writableState.errorEmitted = !0),
                          n.default.nextTick(i, this, e))
                        : n.default.nextTick(i, this, e))
                  : (this._readableState &&
                      (this._readableState.destroyed = !0),
                    this._writableState && (this._writableState.destroyed = !0),
                    this._destroy(e || null, function (e) {
                      !o && e
                        ? s._writableState
                          ? s._writableState.errorEmitted
                            ? n.default.nextTick(r, s)
                            : ((s._writableState.errorEmitted = !0),
                              n.default.nextTick(t, s, e))
                          : n.default.nextTick(t, s, e)
                        : o
                        ? (n.default.nextTick(r, s), o(e))
                        : n.default.nextTick(r, s);
                    })),
                this
              );
            },
            undestroy: function () {
              this._readableState &&
                ((this._readableState.destroyed = !1),
                (this._readableState.reading = !1),
                (this._readableState.ended = !1),
                (this._readableState.endEmitted = !1)),
                this._writableState &&
                  ((this._writableState.destroyed = !1),
                  (this._writableState.ended = !1),
                  (this._writableState.ending = !1),
                  (this._writableState.finalCalled = !1),
                  (this._writableState.prefinished = !1),
                  (this._writableState.finished = !1),
                  (this._writableState.errorEmitted = !1));
            },
            errorOrDestroy: function (e, t) {
              var r = e._readableState,
                n = e._writableState;
              (r && r.autoDestroy) || (n && n.autoDestroy)
                ? e.destroy(t)
                : e.emit("error", t);
            },
          };
        },
        698: function (e, t, r) {
          "use strict";
          var n = r(646).q.ERR_STREAM_PREMATURE_CLOSE;
          function i() {}
          e.exports = function e(t, r, o) {
            if ("function" == typeof r) return e(t, null, r);
            r || (r = {}),
              (s = o || i),
              (a = !1),
              (o = function () {
                if (!a) {
                  a = !0;
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  s.apply(this, t);
                }
              });
            var s,
              a,
              u = r.readable || (!1 !== r.readable && t.readable),
              c = r.writable || (!1 !== r.writable && t.writable),
              l = function () {
                t.writable || h();
              },
              d = t._writableState && t._writableState.finished,
              h = function () {
                (c = !1), (d = !0), u || o.call(t);
              },
              f = t._readableState && t._readableState.endEmitted,
              p = function () {
                (u = !1), (f = !0), c || o.call(t);
              },
              g = function (e) {
                o.call(t, e);
              },
              y = function () {
                var e;
                return u && !f
                  ? ((t._readableState && t._readableState.ended) ||
                      (e = new n()),
                    o.call(t, e))
                  : c && !d
                  ? ((t._writableState && t._writableState.ended) ||
                      (e = new n()),
                    o.call(t, e))
                  : void 0;
              },
              b = function () {
                t.req.on("finish", h);
              };
            return (
              t.setHeader && "function" == typeof t.abort
                ? (t.on("complete", h),
                  t.on("abort", y),
                  t.req ? b() : t.on("request", b))
                : c && !t._writableState && (t.on("end", l), t.on("close", l)),
              t.on("end", p),
              t.on("finish", h),
              !1 !== r.error && t.on("error", g),
              t.on("close", y),
              function () {
                t.removeListener("complete", h),
                  t.removeListener("abort", y),
                  t.removeListener("request", b),
                  t.req && t.req.removeListener("finish", h),
                  t.removeListener("end", l),
                  t.removeListener("close", l),
                  t.removeListener("finish", h),
                  t.removeListener("end", p),
                  t.removeListener("error", g),
                  t.removeListener("close", y);
              }
            );
          };
        },
        727: function (e, t, r) {
          "use strict";
          function n(e, t, r, n, i, o, s) {
            try {
              var a = e[o](s),
                u = a.value;
            } catch (e) {
              r(e);
              return;
            }
            a.done ? t(u) : Promise.resolve(u).then(n, i);
          }
          function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          var o = r(646).q.ERR_INVALID_ARG_TYPE;
          e.exports = function (e, t, r) {
            if (t && "function" == typeof t.next) s = t;
            else if (t && t[Symbol.asyncIterator])
              s = t[Symbol.asyncIterator]();
            else if (t && t[Symbol.iterator]) s = t[Symbol.iterator]();
            else throw new o("iterable", ["Iterable"], t);
            var s,
              a = new e(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? i(Object(r), !0).forEach(function (t) {
                          var n, i, o;
                          (n = e),
                            (i = t),
                            (o = r[t]),
                            i in n
                              ? Object.defineProperty(n, i, {
                                  value: o,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (n[i] = o);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : i(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({ objectMode: !0 }, r)
              ),
              u = !1;
            function c() {
              return l.apply(this, arguments);
            }
            function l() {
              var e;
              return (
                (e = function* () {
                  try {
                    var e = yield s.next(),
                      t = e.value;
                    e.done ? a.push(null) : a.push(yield t) ? c() : (u = !1);
                  } catch (e) {
                    a.destroy(e);
                  }
                }),
                (l = function () {
                  var t = this,
                    r = arguments;
                  return new Promise(function (i, o) {
                    var s = e.apply(t, r);
                    function a(e) {
                      n(s, i, o, a, u, "next", e);
                    }
                    function u(e) {
                      n(s, i, o, a, u, "throw", e);
                    }
                    a(void 0);
                  });
                }).apply(this, arguments)
              );
            }
            return (
              (a._read = function () {
                u || ((u = !0), c());
              }),
              a
            );
          };
        },
        442: function (e, t, r) {
          "use strict";
          var n,
            i = r(646).q,
            o = i.ERR_MISSING_ARGS,
            s = i.ERR_STREAM_DESTROYED;
          function a(e) {
            if (e) throw e;
          }
          function u(e) {
            e();
          }
          function c(e, t) {
            return e.pipe(t);
          }
          e.exports = function () {
            for (
              var e, t, i = arguments.length, l = Array(i), d = 0;
              d < i;
              d++
            )
              l[d] = arguments[d];
            var h =
              (e = l).length && "function" == typeof e[e.length - 1]
                ? e.pop()
                : a;
            if ((Array.isArray(l[0]) && (l = l[0]), l.length < 2))
              throw new o("streams");
            var f = l.map(function (e, i) {
              var o,
                a,
                c,
                d,
                p,
                g,
                y = i < l.length - 1;
              return (
                (o = i > 0),
                (c = a =
                  function (e) {
                    t || (t = e), e && f.forEach(u), y || (f.forEach(u), h(t));
                  }),
                (d = !1),
                (a = function () {
                  d || ((d = !0), c.apply(void 0, arguments));
                }),
                (p = !1),
                e.on("close", function () {
                  p = !0;
                }),
                void 0 === n && (n = r(698)),
                n(e, { readable: y, writable: o }, function (e) {
                  if (e) return a(e);
                  (p = !0), a();
                }),
                (g = !1),
                function (t) {
                  if (!p && !g) {
                    if (((g = !0), e.setHeader && "function" == typeof e.abort))
                      return e.abort();
                    if ("function" == typeof e.destroy) return e.destroy();
                    a(t || new s("pipe"));
                  }
                }
              );
            });
            return l.reduce(c);
          };
        },
        776: function (e, t, r) {
          "use strict";
          var n = r(646).q.ERR_INVALID_OPT_VALUE;
          e.exports = {
            getHighWaterMark: function (e, t, r, i) {
              var o =
                null != t.highWaterMark ? t.highWaterMark : i ? t[r] : null;
              if (null != o) {
                if (!(isFinite(o) && Math.floor(o) === o) || o < 0)
                  throw new n(i ? r : "highWaterMark", o);
                return Math.floor(o);
              }
              return e.objectMode ? 16 : 16384;
            },
          };
        },
        678: function (e, t, r) {
          e.exports = r(781);
        },
        55: function (e, t, r) {
          var n = r(300),
            i = n.Buffer;
          function o(e, t) {
            for (var r in e) t[r] = e[r];
          }
          function s(e, t, r) {
            return i(e, t, r);
          }
          i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
            ? (e.exports = n)
            : (o(n, t), (t.Buffer = s)),
            (s.prototype = Object.create(i.prototype)),
            o(i, s),
            (s.from = function (e, t, r) {
              if ("number" == typeof e)
                throw TypeError("Argument must not be a number");
              return i(e, t, r);
            }),
            (s.alloc = function (e, t, r) {
              if ("number" != typeof e)
                throw TypeError("Argument must be a number");
              var n = i(e);
              return (
                void 0 !== t
                  ? "string" == typeof r
                    ? n.fill(t, r)
                    : n.fill(t)
                  : n.fill(0),
                n
              );
            }),
            (s.allocUnsafe = function (e) {
              if ("number" != typeof e)
                throw TypeError("Argument must be a number");
              return i(e);
            }),
            (s.allocUnsafeSlow = function (e) {
              if ("number" != typeof e)
                throw TypeError("Argument must be a number");
              return n.SlowBuffer(e);
            });
        },
        173: function (e, t, r) {
          e.exports = i;
          var n = r(361).EventEmitter;
          function i() {
            n.call(this);
          }
          r(782)(i, n),
            (i.Readable = r(709)),
            (i.Writable = r(337)),
            (i.Duplex = r(403)),
            (i.Transform = r(170)),
            (i.PassThrough = r(889)),
            (i.finished = r(698)),
            (i.pipeline = r(442)),
            (i.Stream = i),
            (i.prototype.pipe = function (e, t) {
              var r = this;
              function i(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause();
              }
              function o() {
                r.readable && r.resume && r.resume();
              }
              r.on("data", i),
                e.on("drain", o),
                e._isStdio ||
                  (t && !1 === t.end) ||
                  (r.on("end", a), r.on("close", u));
              var s = !1;
              function a() {
                s || ((s = !0), e.end());
              }
              function u() {
                s || ((s = !0), "function" == typeof e.destroy && e.destroy());
              }
              function c(e) {
                if ((l(), 0 === n.listenerCount(this, "error"))) throw e;
              }
              function l() {
                r.removeListener("data", i),
                  e.removeListener("drain", o),
                  r.removeListener("end", a),
                  r.removeListener("close", u),
                  r.removeListener("error", c),
                  e.removeListener("error", c),
                  r.removeListener("end", l),
                  r.removeListener("close", l),
                  e.removeListener("close", l);
              }
              return (
                r.on("error", c),
                e.on("error", c),
                r.on("end", l),
                r.on("close", l),
                e.on("close", l),
                e.emit("pipe", r),
                e
              );
            });
        },
        704: function (e, t, r) {
          "use strict";
          var n = r(55).Buffer,
            i =
              n.isEncoding ||
              function (e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                  case "raw":
                    return !0;
                  default:
                    return !1;
                }
              };
          function o(e) {
            var t;
            switch (
              ((this.encoding = (function (e) {
                var t = (function (e) {
                  var t;
                  if (!e) return "utf8";
                  for (;;)
                    switch (e) {
                      case "utf8":
                      case "utf-8":
                        return "utf8";
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return "utf16le";
                      case "latin1":
                      case "binary":
                        return "latin1";
                      case "base64":
                      case "ascii":
                      case "hex":
                        return e;
                      default:
                        if (t) return;
                        (e = ("" + e).toLowerCase()), (t = !0);
                    }
                })(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                  throw Error("Unknown encoding: " + e);
                return t || e;
              })(e)),
              this.encoding)
            ) {
              case "utf16le":
                (this.text = u), (this.end = c), (t = 4);
                break;
              case "utf8":
                (this.fillLast = a), (t = 4);
                break;
              case "base64":
                (this.text = l), (this.end = d), (t = 3);
                break;
              default:
                (this.write = h), (this.end = f);
                return;
            }
            (this.lastNeed = 0),
              (this.lastTotal = 0),
              (this.lastChar = n.allocUnsafe(t));
          }
          function s(e) {
            return e <= 127
              ? 0
              : e >> 5 == 6
              ? 2
              : e >> 4 == 14
              ? 3
              : e >> 3 == 30
              ? 4
              : e >> 6 == 2
              ? -1
              : -2;
          }
          function a(e) {
            var t = this.lastTotal - this.lastNeed,
              r = (function (e, t, r) {
                if ((192 & t[0]) != 128) return (e.lastNeed = 0), "�";
                if (e.lastNeed > 1 && t.length > 1) {
                  if ((192 & t[1]) != 128) return (e.lastNeed = 1), "�";
                  if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128)
                    return (e.lastNeed = 2), "�";
                }
              })(this, e, 0);
            return void 0 !== r
              ? r
              : this.lastNeed <= e.length
              ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal))
              : void (e.copy(this.lastChar, t, 0, e.length),
                (this.lastNeed -= e.length));
          }
          function u(e, t) {
            if ((e.length - t) % 2 == 0) {
              var r = e.toString("utf16le", t);
              if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319)
                  return (
                    (this.lastNeed = 2),
                    (this.lastTotal = 4),
                    (this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1]),
                    r.slice(0, -1)
                  );
              }
              return r;
            }
            return (
              (this.lastNeed = 1),
              (this.lastTotal = 2),
              (this.lastChar[0] = e[e.length - 1]),
              e.toString("utf16le", t, e.length - 1)
            );
          }
          function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
              var r = this.lastTotal - this.lastNeed;
              return t + this.lastChar.toString("utf16le", 0, r);
            }
            return t;
          }
          function l(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r
              ? e.toString("base64", t)
              : ((this.lastNeed = 3 - r),
                (this.lastTotal = 3),
                1 === r
                  ? (this.lastChar[0] = e[e.length - 1])
                  : ((this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1])),
                e.toString("base64", t, e.length - r));
          }
          function d(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed
              ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
              : t;
          }
          function h(e) {
            return e.toString(this.encoding);
          }
          function f(e) {
            return e && e.length ? this.write(e) : "";
          }
          (t.s = o),
            (o.prototype.write = function (e) {
              var t, r;
              if (0 === e.length) return "";
              if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                (r = this.lastNeed), (this.lastNeed = 0);
              } else r = 0;
              return r < e.length
                ? t
                  ? t + this.text(e, r)
                  : this.text(e, r)
                : t || "";
            }),
            (o.prototype.end = function (e) {
              var t = e && e.length ? this.write(e) : "";
              return this.lastNeed ? t + "�" : t;
            }),
            (o.prototype.text = function (e, t) {
              var r = (function (e, t, r) {
                var n = t.length - 1;
                if (n < r) return 0;
                var i = s(t[n]);
                return i >= 0
                  ? (i > 0 && (e.lastNeed = i - 1), i)
                  : --n < r || -2 === i
                  ? 0
                  : (i = s(t[n])) >= 0
                  ? (i > 0 && (e.lastNeed = i - 2), i)
                  : --n < r || -2 === i
                  ? 0
                  : (i = s(t[n])) >= 0
                  ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
                  : 0;
              })(this, e, t);
              if (!this.lastNeed) return e.toString("utf8", t);
              this.lastTotal = r;
              var n = e.length - (r - this.lastNeed);
              return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
            }),
            (o.prototype.fillLast = function (e) {
              if (this.lastNeed <= e.length)
                return (
                  e.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    this.lastNeed
                  ),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal)
                );
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                e.length
              ),
                (this.lastNeed -= e.length);
            });
        },
        769: function (t) {
          t.exports = function (e, t) {
            if (r("noDeprecation")) return e;
            var n = !1;
            return function () {
              if (!n) {
                if (r("throwDeprecation")) throw Error(t);
                r("traceDeprecation") ? console.trace(t) : console.warn(t),
                  (n = !0);
              }
              return e.apply(this, arguments);
            };
          };
          function r(t) {
            try {
              if (!e.g.localStorage) return !1;
            } catch (e) {
              return !1;
            }
            var r = e.g.localStorage[t];
            return null != r && "true" === String(r).toLowerCase();
          }
        },
        300: function (t) {
          "use strict";
          t.exports = e.r(843943);
        },
        361: function (t) {
          "use strict";
          t.exports = e.r(219298);
        },
        781: function (t) {
          "use strict";
          t.exports = e.r(219298).EventEmitter;
        },
        837: function (t) {
          "use strict";
          t.exports = e.r(101507);
        },
      },
      o = {};
    function s(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var r = (o[e] = { exports: {} }),
        n = !0;
      try {
        i[e](r, r.exports, s), (n = !1);
      } finally {
        n && delete o[e];
      }
      return r.exports;
    }
    (s.ab = "/ROOT/node_modules/next/dist/compiled/stream-browserify/"),
      (t.exports = s(173));
  },
]);
