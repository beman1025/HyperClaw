(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  478492,
  (t, r, e) => {
    "use strict";
    var i = Object.prototype.hasOwnProperty,
      n = "~";
    function o() {}
    function f(t, r, e) {
      (this.fn = t), (this.context = r), (this.once = e || !1);
    }
    function s(t, r, e, i, o) {
      if ("function" != typeof e)
        throw TypeError("The listener must be a function");
      var s = new f(e, i || t, o),
        h = n ? n + r : r;
      return (
        t._events[h]
          ? t._events[h].fn
            ? (t._events[h] = [t._events[h], s])
            : t._events[h].push(s)
          : ((t._events[h] = s), t._eventsCount++),
        t
      );
    }
    function h(t, r) {
      0 == --t._eventsCount ? (t._events = new o()) : delete t._events[r];
    }
    function u() {
      (this._events = new o()), (this._eventsCount = 0);
    }
    Object.create &&
      ((o.prototype = Object.create(null)), new o().__proto__ || (n = !1)),
      (u.prototype.eventNames = function () {
        var t,
          r,
          e = [];
        if (0 === this._eventsCount) return e;
        for (r in (t = this._events))
          i.call(t, r) && e.push(n ? r.slice(1) : r);
        return Object.getOwnPropertySymbols
          ? e.concat(Object.getOwnPropertySymbols(t))
          : e;
      }),
      (u.prototype.listeners = function (t) {
        var r = n ? n + t : t,
          e = this._events[r];
        if (!e) return [];
        if (e.fn) return [e.fn];
        for (var i = 0, o = e.length, f = Array(o); i < o; i++) f[i] = e[i].fn;
        return f;
      }),
      (u.prototype.listenerCount = function (t) {
        var r = n ? n + t : t,
          e = this._events[r];
        return e ? (e.fn ? 1 : e.length) : 0;
      }),
      (u.prototype.emit = function (t, r, e, i, o, f) {
        var s = n ? n + t : t;
        if (!this._events[s]) return !1;
        var h,
          u,
          a = this._events[s],
          l = arguments.length;
        if (a.fn) {
          switch ((a.once && this.removeListener(t, a.fn, void 0, !0), l)) {
            case 1:
              return a.fn.call(a.context), !0;
            case 2:
              return a.fn.call(a.context, r), !0;
            case 3:
              return a.fn.call(a.context, r, e), !0;
            case 4:
              return a.fn.call(a.context, r, e, i), !0;
            case 5:
              return a.fn.call(a.context, r, e, i, o), !0;
            case 6:
              return a.fn.call(a.context, r, e, i, o, f), !0;
          }
          for (u = 1, h = Array(l - 1); u < l; u++) h[u - 1] = arguments[u];
          a.fn.apply(a.context, h);
        } else {
          var p,
            c = a.length;
          for (u = 0; u < c; u++)
            switch (
              (a[u].once && this.removeListener(t, a[u].fn, void 0, !0), l)
            ) {
              case 1:
                a[u].fn.call(a[u].context);
                break;
              case 2:
                a[u].fn.call(a[u].context, r);
                break;
              case 3:
                a[u].fn.call(a[u].context, r, e);
                break;
              case 4:
                a[u].fn.call(a[u].context, r, e, i);
                break;
              default:
                if (!h)
                  for (p = 1, h = Array(l - 1); p < l; p++)
                    h[p - 1] = arguments[p];
                a[u].fn.apply(a[u].context, h);
            }
        }
        return !0;
      }),
      (u.prototype.on = function (t, r, e) {
        return s(this, t, r, e, !1);
      }),
      (u.prototype.once = function (t, r, e) {
        return s(this, t, r, e, !0);
      }),
      (u.prototype.removeListener = function (t, r, e, i) {
        var o = n ? n + t : t;
        if (!this._events[o]) return this;
        if (!r) return h(this, o), this;
        var f = this._events[o];
        if (f.fn)
          f.fn !== r || (i && !f.once) || (e && f.context !== e) || h(this, o);
        else {
          for (var s = 0, u = [], a = f.length; s < a; s++)
            (f[s].fn !== r || (i && !f[s].once) || (e && f[s].context !== e)) &&
              u.push(f[s]);
          u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : h(this, o);
        }
        return this;
      }),
      (u.prototype.removeAllListeners = function (t) {
        var r;
        return (
          t
            ? ((r = n ? n + t : t), this._events[r] && h(this, r))
            : ((this._events = new o()), (this._eventsCount = 0)),
          this
        );
      }),
      (u.prototype.off = u.prototype.removeListener),
      (u.prototype.addListener = u.prototype.on),
      (u.prefixed = n),
      (u.EventEmitter = u),
      (r.exports = u);
  },
  734582,
  (t, r, e) => {
    "use strict";
    (e.byteLength = function (t) {
      var r = u(t),
        e = r[0],
        i = r[1];
      return ((e + i) * 3) / 4 - i;
    }),
      (e.toByteArray = function (t) {
        var r,
          e,
          i = u(t),
          f = i[0],
          s = i[1],
          h = new o(((f + s) * 3) / 4 - s),
          a = 0,
          l = s > 0 ? f - 4 : f;
        for (e = 0; e < l; e += 4)
          (r =
            (n[t.charCodeAt(e)] << 18) |
            (n[t.charCodeAt(e + 1)] << 12) |
            (n[t.charCodeAt(e + 2)] << 6) |
            n[t.charCodeAt(e + 3)]),
            (h[a++] = (r >> 16) & 255),
            (h[a++] = (r >> 8) & 255),
            (h[a++] = 255 & r);
        return (
          2 === s &&
            ((r = (n[t.charCodeAt(e)] << 2) | (n[t.charCodeAt(e + 1)] >> 4)),
            (h[a++] = 255 & r)),
          1 === s &&
            ((r =
              (n[t.charCodeAt(e)] << 10) |
              (n[t.charCodeAt(e + 1)] << 4) |
              (n[t.charCodeAt(e + 2)] >> 2)),
            (h[a++] = (r >> 8) & 255),
            (h[a++] = 255 & r)),
          h
        );
      }),
      (e.fromByteArray = function (t) {
        for (
          var r, e = t.length, n = e % 3, o = [], f = 0, s = e - n;
          f < s;
          f += 16383
        )
          o.push(
            (function (t, r, e) {
              for (var n, o = [], f = r; f < e; f += 3)
                (n =
                  ((t[f] << 16) & 0xff0000) +
                  ((t[f + 1] << 8) & 65280) +
                  (255 & t[f + 2])),
                  o.push(
                    i[(n >> 18) & 63] +
                      i[(n >> 12) & 63] +
                      i[(n >> 6) & 63] +
                      i[63 & n]
                  );
              return o.join("");
            })(t, f, f + 16383 > s ? s : f + 16383)
          );
        return (
          1 === n
            ? o.push(i[(r = t[e - 1]) >> 2] + i[(r << 4) & 63] + "==")
            : 2 === n &&
              o.push(
                i[(r = (t[e - 2] << 8) + t[e - 1]) >> 10] +
                  i[(r >> 4) & 63] +
                  i[(r << 2) & 63] +
                  "="
              ),
          o.join("")
        );
      });
    for (
      var i = [],
        n = [],
        o = "u" > typeof Uint8Array ? Uint8Array : Array,
        f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        h = f.length;
      s < h;
      ++s
    )
      (i[s] = f[s]), (n[f.charCodeAt(s)] = s);
    function u(t) {
      var r = t.length;
      if (r % 4 > 0)
        throw Error("Invalid string. Length must be a multiple of 4");
      var e = t.indexOf("=");
      -1 === e && (e = r);
      var i = e === r ? 0 : 4 - (e % 4);
      return [e, i];
    }
    (n[45] = 62), (n[95] = 63);
  },
  638492,
  (t, r, e) => {
    (e.read = function (t, r, e, i, n) {
      var o,
        f,
        s = 8 * n - i - 1,
        h = (1 << s) - 1,
        u = h >> 1,
        a = -7,
        l = e ? n - 1 : 0,
        p = e ? -1 : 1,
        c = t[r + l];
      for (
        l += p, o = c & ((1 << -a) - 1), c >>= -a, a += s;
        a > 0;
        o = 256 * o + t[r + l], l += p, a -= 8
      );
      for (
        f = o & ((1 << -a) - 1), o >>= -a, a += i;
        a > 0;
        f = 256 * f + t[r + l], l += p, a -= 8
      );
      if (0 === o) o = 1 - u;
      else {
        if (o === h) return f ? NaN : (1 / 0) * (c ? -1 : 1);
        (f += Math.pow(2, i)), (o -= u);
      }
      return (c ? -1 : 1) * f * Math.pow(2, o - i);
    }),
      (e.write = function (t, r, e, i, n, o) {
        var f,
          s,
          h,
          u = 8 * o - n - 1,
          a = (1 << u) - 1,
          l = a >> 1,
          p = 5960464477539062e-23 * (23 === n),
          c = i ? 0 : o - 1,
          y = i ? 1 : -1,
          m = +(r < 0 || (0 === r && 1 / r < 0));
        for (
          isNaN((r = Math.abs(r))) || r === 1 / 0
            ? ((s = +!!isNaN(r)), (f = a))
            : ((f = Math.floor(Math.log(r) / Math.LN2)),
              r * (h = Math.pow(2, -f)) < 1 && (f--, (h *= 2)),
              f + l >= 1 ? (r += p / h) : (r += p * Math.pow(2, 1 - l)),
              r * h >= 2 && (f++, (h /= 2)),
              f + l >= a
                ? ((s = 0), (f = a))
                : f + l >= 1
                ? ((s = (r * h - 1) * Math.pow(2, n)), (f += l))
                : ((s = r * Math.pow(2, l - 1) * Math.pow(2, n)), (f = 0)));
          n >= 8;
          t[e + c] = 255 & s, c += y, s /= 256, n -= 8
        );
        for (
          f = (f << n) | s, u += n;
          u > 0;
          t[e + c] = 255 & f, c += y, f /= 256, u -= 8
        );
        t[e + c - y] |= 128 * m;
      });
  },
  843943,
  (t, r, e) => {
    "use strict";
    let i = t.r(734582),
      n = t.r(638492),
      o =
        "function" == typeof Symbol && "function" == typeof Symbol.for
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
    function f(t) {
      if (t > 0x7fffffff)
        throw RangeError('The value "' + t + '" is invalid for option "size"');
      let r = new Uint8Array(t);
      return Object.setPrototypeOf(r, s.prototype), r;
    }
    function s(t, r, e) {
      if ("number" == typeof t) {
        if ("string" == typeof r)
          throw TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return a(t);
      }
      return h(t, r, e);
    }
    function h(t, r, e) {
      if ("string" == typeof t) {
        var i = t,
          n = r;
        if (
          (("string" != typeof n || "" === n) && (n = "utf8"), !s.isEncoding(n))
        )
          throw TypeError("Unknown encoding: " + n);
        let e = 0 | y(i, n),
          o = f(e),
          h = o.write(i, n);
        return h !== e && (o = o.slice(0, h)), o;
      }
      if (ArrayBuffer.isView(t)) {
        var o = t;
        if (L(o, Uint8Array)) {
          let t = new Uint8Array(o);
          return p(t.buffer, t.byteOffset, t.byteLength);
        }
        return l(o);
      }
      if (null == t)
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      if (
        L(t, ArrayBuffer) ||
        (t && L(t.buffer, ArrayBuffer)) ||
        ("u" > typeof SharedArrayBuffer &&
          (L(t, SharedArrayBuffer) || (t && L(t.buffer, SharedArrayBuffer))))
      )
        return p(t, r, e);
      if ("number" == typeof t)
        throw TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      let h = t.valueOf && t.valueOf();
      if (null != h && h !== t) return s.from(h, r, e);
      let u = (function (t) {
        if (s.isBuffer(t)) {
          let r = 0 | c(t.length),
            e = f(r);
          return 0 === e.length || t.copy(e, 0, 0, r), e;
        }
        return void 0 !== t.length
          ? "number" != typeof t.length ||
            (function (t) {
              return t != t;
            })(t.length)
            ? f(0)
            : l(t)
          : "Buffer" === t.type && Array.isArray(t.data)
          ? l(t.data)
          : void 0;
      })(t);
      if (u) return u;
      if (
        "u" > typeof Symbol &&
        null != Symbol.toPrimitive &&
        "function" == typeof t[Symbol.toPrimitive]
      )
        return s.from(t[Symbol.toPrimitive]("string"), r, e);
      throw TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof t
      );
    }
    function u(t) {
      if ("number" != typeof t)
        throw TypeError('"size" argument must be of type number');
      if (t < 0)
        throw RangeError('The value "' + t + '" is invalid for option "size"');
    }
    function a(t) {
      return u(t), f(t < 0 ? 0 : 0 | c(t));
    }
    function l(t) {
      let r = t.length < 0 ? 0 : 0 | c(t.length),
        e = f(r);
      for (let i = 0; i < r; i += 1) e[i] = 255 & t[i];
      return e;
    }
    function p(t, r, e) {
      let i;
      if (r < 0 || t.byteLength < r)
        throw RangeError('"offset" is outside of buffer bounds');
      if (t.byteLength < r + (e || 0))
        throw RangeError('"length" is outside of buffer bounds');
      return (
        Object.setPrototypeOf(
          (i =
            void 0 === r && void 0 === e
              ? new Uint8Array(t)
              : void 0 === e
              ? new Uint8Array(t, r)
              : new Uint8Array(t, r, e)),
          s.prototype
        ),
        i
      );
    }
    function c(t) {
      if (t >= 0x7fffffff)
        throw RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
        );
      return 0 | t;
    }
    function y(t, r) {
      if (s.isBuffer(t)) return t.length;
      if (ArrayBuffer.isView(t) || L(t, ArrayBuffer)) return t.byteLength;
      if ("string" != typeof t)
        throw TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof t
        );
      let e = t.length,
        i = arguments.length > 2 && !0 === arguments[2];
      if (!i && 0 === e) return 0;
      let n = !1;
      for (;;)
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return e;
          case "utf8":
          case "utf-8":
            return j(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * e;
          case "hex":
            return e >>> 1;
          case "base64":
            return N(t).length;
          default:
            if (n) return i ? -1 : j(t).length;
            (r = ("" + r).toLowerCase()), (n = !0);
        }
    }
    function m(t, r, e) {
      let n = !1;
      if (
        ((void 0 === r || r < 0) && (r = 0),
        r > this.length ||
          ((void 0 === e || e > this.length) && (e = this.length),
          e <= 0 || (e >>>= 0) <= (r >>>= 0)))
      )
        return "";
      for (t || (t = "utf8"); ; )
        switch (t) {
          case "hex":
            return (function (t, r, e) {
              let i = t.length;
              (!r || r < 0) && (r = 0), (!e || e < 0 || e > i) && (e = i);
              let n = "";
              for (let i = r; i < e; ++i) n += C[t[i]];
              return n;
            })(this, r, e);
          case "utf8":
          case "utf-8":
            return w(this, r, e);
          case "ascii":
            return (function (t, r, e) {
              let i = "";
              e = Math.min(t.length, e);
              for (let n = r; n < e; ++n) i += String.fromCharCode(127 & t[n]);
              return i;
            })(this, r, e);
          case "latin1":
          case "binary":
            return (function (t, r, e) {
              let i = "";
              e = Math.min(t.length, e);
              for (let n = r; n < e; ++n) i += String.fromCharCode(t[n]);
              return i;
            })(this, r, e);
          case "base64":
            var o, f, s;
            return (
              (o = this),
              (f = r),
              (s = e),
              0 === f && s === o.length
                ? i.fromByteArray(o)
                : i.fromByteArray(o.slice(f, s))
            );
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return (function (t, r, e) {
              let i = t.slice(r, e),
                n = "";
              for (let t = 0; t < i.length - 1; t += 2)
                n += String.fromCharCode(i[t] + 256 * i[t + 1]);
              return n;
            })(this, r, e);
          default:
            if (n) throw TypeError("Unknown encoding: " + t);
            (t = (t + "").toLowerCase()), (n = !0);
        }
    }
    function d(t, r, e) {
      let i = t[r];
      (t[r] = t[e]), (t[e] = i);
    }
    function g(t, r, e, i, n) {
      var o;
      if (0 === t.length) return -1;
      if (
        ("string" == typeof e
          ? ((i = e), (e = 0))
          : e > 0x7fffffff
          ? (e = 0x7fffffff)
          : e < -0x80000000 && (e = -0x80000000),
        (o = e *= 1) != o && (e = n ? 0 : t.length - 1),
        e < 0 && (e = t.length + e),
        e >= t.length)
      )
        if (n) return -1;
        else e = t.length - 1;
      else if (e < 0)
        if (!n) return -1;
        else e = 0;
      if (("string" == typeof r && (r = s.from(r, i)), s.isBuffer(r)))
        return 0 === r.length ? -1 : v(t, r, e, i, n);
      if ("number" == typeof r) {
        if (((r &= 255), "function" == typeof Uint8Array.prototype.indexOf))
          if (n) return Uint8Array.prototype.indexOf.call(t, r, e);
          else return Uint8Array.prototype.lastIndexOf.call(t, r, e);
        return v(t, [r], e, i, n);
      }
      throw TypeError("val must be string, number or Buffer");
    }
    function v(t, r, e, i, n) {
      let o,
        f = 1,
        s = t.length,
        h = r.length;
      if (
        void 0 !== i &&
        ("ucs2" === (i = String(i).toLowerCase()) ||
          "ucs-2" === i ||
          "utf16le" === i ||
          "utf-16le" === i)
      ) {
        if (t.length < 2 || r.length < 2) return -1;
        (f = 2), (s /= 2), (h /= 2), (e /= 2);
      }
      function u(t, r) {
        return 1 === f ? t[r] : t.readUInt16BE(r * f);
      }
      if (n) {
        let i = -1;
        for (o = e; o < s; o++)
          if (u(t, o) === u(r, -1 === i ? 0 : o - i)) {
            if ((-1 === i && (i = o), o - i + 1 === h)) return i * f;
          } else -1 !== i && (o -= o - i), (i = -1);
      } else
        for (e + h > s && (e = s - h), o = e; o >= 0; o--) {
          let e = !0;
          for (let i = 0; i < h; i++)
            if (u(t, o + i) !== u(r, i)) {
              e = !1;
              break;
            }
          if (e) return o;
        }
      return -1;
    }
    function w(t, r, e) {
      e = Math.min(t.length, e);
      let i = [],
        n = r;
      for (; n < e; ) {
        let r = t[n],
          o = null,
          f = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
        if (n + f <= e) {
          let e, i, s, h;
          switch (f) {
            case 1:
              r < 128 && (o = r);
              break;
            case 2:
              (192 & (e = t[n + 1])) == 128 &&
                (h = ((31 & r) << 6) | (63 & e)) > 127 &&
                (o = h);
              break;
            case 3:
              (e = t[n + 1]),
                (i = t[n + 2]),
                (192 & e) == 128 &&
                  (192 & i) == 128 &&
                  (h = ((15 & r) << 12) | ((63 & e) << 6) | (63 & i)) > 2047 &&
                  (h < 55296 || h > 57343) &&
                  (o = h);
              break;
            case 4:
              (e = t[n + 1]),
                (i = t[n + 2]),
                (s = t[n + 3]),
                (192 & e) == 128 &&
                  (192 & i) == 128 &&
                  (192 & s) == 128 &&
                  (h =
                    ((15 & r) << 18) |
                    ((63 & e) << 12) |
                    ((63 & i) << 6) |
                    (63 & s)) > 65535 &&
                  h < 1114112 &&
                  (o = h);
          }
        }
        null === o
          ? ((o = 65533), (f = 1))
          : o > 65535 &&
            ((o -= 65536),
            i.push(((o >>> 10) & 1023) | 55296),
            (o = 56320 | (1023 & o))),
          i.push(o),
          (n += f);
      }
      var o = i;
      let f = o.length;
      if (f <= 4096) return String.fromCharCode.apply(String, o);
      let s = "",
        h = 0;
      for (; h < f; )
        s += String.fromCharCode.apply(String, o.slice(h, (h += 4096)));
      return s;
    }
    function b(t, r, e) {
      if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
      if (t + r > e) throw RangeError("Trying to access beyond buffer length");
    }
    function M(t, r, e, i, n, o) {
      if (!s.isBuffer(t))
        throw TypeError('"buffer" argument must be a Buffer instance');
      if (r > n || r < o) throw RangeError('"value" argument is out of bounds');
      if (e + i > t.length) throw RangeError("Index out of range");
    }
    function x(t, r, e, i, n) {
      U(r, i, n, t, e, 7);
      let o = Number(r & BigInt(0xffffffff));
      (t[e++] = o),
        (o >>= 8),
        (t[e++] = o),
        (o >>= 8),
        (t[e++] = o),
        (o >>= 8),
        (t[e++] = o);
      let f = Number((r >> BigInt(32)) & BigInt(0xffffffff));
      return (
        (t[e++] = f),
        (f >>= 8),
        (t[e++] = f),
        (f >>= 8),
        (t[e++] = f),
        (f >>= 8),
        (t[e++] = f),
        e
      );
    }
    function A(t, r, e, i, n) {
      U(r, i, n, t, e, 7);
      let o = Number(r & BigInt(0xffffffff));
      (t[e + 7] = o),
        (o >>= 8),
        (t[e + 6] = o),
        (o >>= 8),
        (t[e + 5] = o),
        (o >>= 8),
        (t[e + 4] = o);
      let f = Number((r >> BigInt(32)) & BigInt(0xffffffff));
      return (
        (t[e + 3] = f),
        (f >>= 8),
        (t[e + 2] = f),
        (f >>= 8),
        (t[e + 1] = f),
        (f >>= 8),
        (t[e] = f),
        e + 8
      );
    }
    function _(t, r, e, i, n, o) {
      if (e + i > t.length || e < 0) throw RangeError("Index out of range");
    }
    function E(t, r, e, i, o) {
      return (
        (r *= 1),
        (e >>>= 0),
        o || _(t, r, e, 4, 34028234663852886e22, -34028234663852886e22),
        n.write(t, r, e, i, 23, 4),
        e + 4
      );
    }
    function B(t, r, e, i, o) {
      return (
        (r *= 1),
        (e >>>= 0),
        o || _(t, r, e, 8, 17976931348623157e292, -17976931348623157e292),
        n.write(t, r, e, i, 52, 8),
        e + 8
      );
    }
    (e.Buffer = s),
      (e.SlowBuffer = function (t) {
        return +t != t && (t = 0), s.alloc(+t);
      }),
      (e.INSPECT_MAX_BYTES = 50),
      (e.kMaxLength = 0x7fffffff),
      (s.TYPED_ARRAY_SUPPORT = (function () {
        try {
          let t = new Uint8Array(1),
            r = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(r, Uint8Array.prototype),
            Object.setPrototypeOf(t, r),
            42 === t.foo()
          );
        } catch (t) {
          return !1;
        }
      })()),
      !s.TYPED_ARRAY_SUPPORT &&
        "u" > typeof console &&
        "function" == typeof console.error &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        ),
      Object.defineProperty(s.prototype, "parent", {
        enumerable: !0,
        get: function () {
          if (s.isBuffer(this)) return this.buffer;
        },
      }),
      Object.defineProperty(s.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (s.isBuffer(this)) return this.byteOffset;
        },
      }),
      (s.poolSize = 8192),
      (s.from = function (t, r, e) {
        return h(t, r, e);
      }),
      Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(s, Uint8Array),
      (s.alloc = function (t, r, e) {
        return (u(t), t <= 0)
          ? f(t)
          : void 0 !== r
          ? "string" == typeof e
            ? f(t).fill(r, e)
            : f(t).fill(r)
          : f(t);
      }),
      (s.allocUnsafe = function (t) {
        return a(t);
      }),
      (s.allocUnsafeSlow = function (t) {
        return a(t);
      }),
      (s.isBuffer = function (t) {
        return null != t && !0 === t._isBuffer && t !== s.prototype;
      }),
      (s.compare = function (t, r) {
        if (
          (L(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
          L(r, Uint8Array) && (r = s.from(r, r.offset, r.byteLength)),
          !s.isBuffer(t) || !s.isBuffer(r))
        )
          throw TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        if (t === r) return 0;
        let e = t.length,
          i = r.length;
        for (let n = 0, o = Math.min(e, i); n < o; ++n)
          if (t[n] !== r[n]) {
            (e = t[n]), (i = r[n]);
            break;
          }
        return e < i ? -1 : +(i < e);
      }),
      (s.isEncoding = function (t) {
        switch (String(t).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }),
      (s.concat = function (t, r) {
        let e;
        if (!Array.isArray(t))
          throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return s.alloc(0);
        if (void 0 === r)
          for (e = 0, r = 0; e < t.length; ++e) r += t[e].length;
        let i = s.allocUnsafe(r),
          n = 0;
        for (e = 0; e < t.length; ++e) {
          let r = t[e];
          if (L(r, Uint8Array))
            n + r.length > i.length
              ? (s.isBuffer(r) || (r = s.from(r)), r.copy(i, n))
              : Uint8Array.prototype.set.call(i, r, n);
          else if (s.isBuffer(r)) r.copy(i, n);
          else throw TypeError('"list" argument must be an Array of Buffers');
          n += r.length;
        }
        return i;
      }),
      (s.byteLength = y),
      (s.prototype._isBuffer = !0),
      (s.prototype.swap16 = function () {
        let t = this.length;
        if (t % 2 != 0)
          throw RangeError("Buffer size must be a multiple of 16-bits");
        for (let r = 0; r < t; r += 2) d(this, r, r + 1);
        return this;
      }),
      (s.prototype.swap32 = function () {
        let t = this.length;
        if (t % 4 != 0)
          throw RangeError("Buffer size must be a multiple of 32-bits");
        for (let r = 0; r < t; r += 4) d(this, r, r + 3), d(this, r + 1, r + 2);
        return this;
      }),
      (s.prototype.swap64 = function () {
        let t = this.length;
        if (t % 8 != 0)
          throw RangeError("Buffer size must be a multiple of 64-bits");
        for (let r = 0; r < t; r += 8)
          d(this, r, r + 7),
            d(this, r + 1, r + 6),
            d(this, r + 2, r + 5),
            d(this, r + 3, r + 4);
        return this;
      }),
      (s.prototype.toString = function () {
        let t = this.length;
        return 0 === t
          ? ""
          : 0 == arguments.length
          ? w(this, 0, t)
          : m.apply(this, arguments);
      }),
      (s.prototype.toLocaleString = s.prototype.toString),
      (s.prototype.equals = function (t) {
        if (!s.isBuffer(t)) throw TypeError("Argument must be a Buffer");
        return this === t || 0 === s.compare(this, t);
      }),
      (s.prototype.inspect = function () {
        let t = "",
          r = e.INSPECT_MAX_BYTES;
        return (
          (t = this.toString("hex", 0, r)
            .replace(/(.{2})/g, "$1 ")
            .trim()),
          this.length > r && (t += " ... "),
          "<Buffer " + t + ">"
        );
      }),
      o && (s.prototype[o] = s.prototype.inspect),
      (s.prototype.compare = function (t, r, e, i, n) {
        if (
          (L(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
          !s.isBuffer(t))
        )
          throw TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof t
          );
        if (
          (void 0 === r && (r = 0),
          void 0 === e && (e = t ? t.length : 0),
          void 0 === i && (i = 0),
          void 0 === n && (n = this.length),
          r < 0 || e > t.length || i < 0 || n > this.length)
        )
          throw RangeError("out of range index");
        if (i >= n && r >= e) return 0;
        if (i >= n) return -1;
        if (r >= e) return 1;
        if (((r >>>= 0), (e >>>= 0), (i >>>= 0), (n >>>= 0), this === t))
          return 0;
        let o = n - i,
          f = e - r,
          h = Math.min(o, f),
          u = this.slice(i, n),
          a = t.slice(r, e);
        for (let t = 0; t < h; ++t)
          if (u[t] !== a[t]) {
            (o = u[t]), (f = a[t]);
            break;
          }
        return o < f ? -1 : +(f < o);
      }),
      (s.prototype.includes = function (t, r, e) {
        return -1 !== this.indexOf(t, r, e);
      }),
      (s.prototype.indexOf = function (t, r, e) {
        return g(this, t, r, e, !0);
      }),
      (s.prototype.lastIndexOf = function (t, r, e) {
        return g(this, t, r, e, !1);
      }),
      (s.prototype.write = function (t, r, e, i) {
        var n, o, f, s, h, u, a, l;
        if (void 0 === r) (i = "utf8"), (e = this.length), (r = 0);
        else if (void 0 === e && "string" == typeof r)
          (i = r), (e = this.length), (r = 0);
        else if (isFinite(r))
          (r >>>= 0),
            isFinite(e)
              ? ((e >>>= 0), void 0 === i && (i = "utf8"))
              : ((i = e), (e = void 0));
        else
          throw Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        let p = this.length - r;
        if (
          ((void 0 === e || e > p) && (e = p),
          (t.length > 0 && (e < 0 || r < 0)) || r > this.length)
        )
          throw RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let c = !1;
        for (;;)
          switch (i) {
            case "hex":
              return (function (t, r, e, i) {
                let n;
                e = Number(e) || 0;
                let o = t.length - e;
                i ? (i = Number(i)) > o && (i = o) : (i = o);
                let f = r.length;
                for (i > f / 2 && (i = f / 2), n = 0; n < i; ++n) {
                  var s;
                  let i = parseInt(r.substr(2 * n, 2), 16);
                  if ((s = i) != s) break;
                  t[e + n] = i;
                }
                return n;
              })(this, t, r, e);
            case "utf8":
            case "utf-8":
              return (n = r), (o = e), k(j(t, this.length - n), this, n, o);
            case "ascii":
            case "latin1":
            case "binary":
              return (
                (f = r),
                (s = e),
                k(
                  (function (t) {
                    let r = [];
                    for (let e = 0; e < t.length; ++e)
                      r.push(255 & t.charCodeAt(e));
                    return r;
                  })(t),
                  this,
                  f,
                  s
                )
              );
            case "base64":
              return (h = r), (u = e), k(N(t), this, h, u);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (
                (a = r),
                (l = e),
                k(
                  (function (t, r) {
                    let e,
                      i,
                      n = [];
                    for (let o = 0; o < t.length && !((r -= 2) < 0); ++o)
                      (i = (e = t.charCodeAt(o)) >> 8),
                        n.push(e % 256),
                        n.push(i);
                    return n;
                  })(t, this.length - a),
                  this,
                  a,
                  l
                )
              );
            default:
              if (c) throw TypeError("Unknown encoding: " + i);
              (i = ("" + i).toLowerCase()), (c = !0);
          }
      }),
      (s.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      }),
      (s.prototype.slice = function (t, r) {
        let e = this.length;
        (t = ~~t),
          (r = void 0 === r ? e : ~~r),
          t < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e),
          r < 0 ? (r += e) < 0 && (r = 0) : r > e && (r = e),
          r < t && (r = t);
        let i = this.subarray(t, r);
        return Object.setPrototypeOf(i, s.prototype), i;
      }),
      (s.prototype.readUintLE = s.prototype.readUIntLE =
        function (t, r, e) {
          (t >>>= 0), (r >>>= 0), e || b(t, r, this.length);
          let i = this[t],
            n = 1,
            o = 0;
          for (; ++o < r && (n *= 256); ) i += this[t + o] * n;
          return i;
        }),
      (s.prototype.readUintBE = s.prototype.readUIntBE =
        function (t, r, e) {
          (t >>>= 0), (r >>>= 0), e || b(t, r, this.length);
          let i = this[t + --r],
            n = 1;
          for (; r > 0 && (n *= 256); ) i += this[t + --r] * n;
          return i;
        }),
      (s.prototype.readUint8 = s.prototype.readUInt8 =
        function (t, r) {
          return (t >>>= 0), r || b(t, 1, this.length), this[t];
        }),
      (s.prototype.readUint16LE = s.prototype.readUInt16LE =
        function (t, r) {
          return (
            (t >>>= 0), r || b(t, 2, this.length), this[t] | (this[t + 1] << 8)
          );
        }),
      (s.prototype.readUint16BE = s.prototype.readUInt16BE =
        function (t, r) {
          return (
            (t >>>= 0), r || b(t, 2, this.length), (this[t] << 8) | this[t + 1]
          );
        }),
      (s.prototype.readUint32LE = s.prototype.readUInt32LE =
        function (t, r) {
          return (
            (t >>>= 0),
            r || b(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              0x1000000 * this[t + 3]
          );
        }),
      (s.prototype.readUint32BE = s.prototype.readUInt32BE =
        function (t, r) {
          return (
            (t >>>= 0),
            r || b(t, 4, this.length),
            0x1000000 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
      (s.prototype.readBigUInt64LE = F(function (t) {
        R((t >>>= 0), "offset");
        let r = this[t],
          e = this[t + 7];
        (void 0 === r || void 0 === e) && P(t, this.length - 8);
        let i = r + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * this[++t],
          n = this[++t] + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * e;
        return BigInt(i) + (BigInt(n) << BigInt(32));
      })),
      (s.prototype.readBigUInt64BE = F(function (t) {
        R((t >>>= 0), "offset");
        let r = this[t],
          e = this[t + 7];
        (void 0 === r || void 0 === e) && P(t, this.length - 8);
        let i = 0x1000000 * r + 65536 * this[++t] + 256 * this[++t] + this[++t],
          n = 0x1000000 * this[++t] + 65536 * this[++t] + 256 * this[++t] + e;
        return (BigInt(i) << BigInt(32)) + BigInt(n);
      })),
      (s.prototype.readIntLE = function (t, r, e) {
        (t >>>= 0), (r >>>= 0), e || b(t, r, this.length);
        let i = this[t],
          n = 1,
          o = 0;
        for (; ++o < r && (n *= 256); ) i += this[t + o] * n;
        return i >= (n *= 128) && (i -= Math.pow(2, 8 * r)), i;
      }),
      (s.prototype.readIntBE = function (t, r, e) {
        (t >>>= 0), (r >>>= 0), e || b(t, r, this.length);
        let i = r,
          n = 1,
          o = this[t + --i];
        for (; i > 0 && (n *= 256); ) o += this[t + --i] * n;
        return o >= (n *= 128) && (o -= Math.pow(2, 8 * r)), o;
      }),
      (s.prototype.readInt8 = function (t, r) {
        return ((t >>>= 0), r || b(t, 1, this.length), 128 & this[t])
          ? -((255 - this[t] + 1) * 1)
          : this[t];
      }),
      (s.prototype.readInt16LE = function (t, r) {
        (t >>>= 0), r || b(t, 2, this.length);
        let e = this[t] | (this[t + 1] << 8);
        return 32768 & e ? 0xffff0000 | e : e;
      }),
      (s.prototype.readInt16BE = function (t, r) {
        (t >>>= 0), r || b(t, 2, this.length);
        let e = this[t + 1] | (this[t] << 8);
        return 32768 & e ? 0xffff0000 | e : e;
      }),
      (s.prototype.readInt32LE = function (t, r) {
        return (
          (t >>>= 0),
          r || b(t, 4, this.length),
          this[t] |
            (this[t + 1] << 8) |
            (this[t + 2] << 16) |
            (this[t + 3] << 24)
        );
      }),
      (s.prototype.readInt32BE = function (t, r) {
        return (
          (t >>>= 0),
          r || b(t, 4, this.length),
          (this[t] << 24) |
            (this[t + 1] << 16) |
            (this[t + 2] << 8) |
            this[t + 3]
        );
      }),
      (s.prototype.readBigInt64LE = F(function (t) {
        R((t >>>= 0), "offset");
        let r = this[t],
          e = this[t + 7];
        return (
          (void 0 === r || void 0 === e) && P(t, this.length - 8),
          (BigInt(
            this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (e << 24)
          ) <<
            BigInt(32)) +
            BigInt(
              r + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * this[++t]
            )
        );
      })),
      (s.prototype.readBigInt64BE = F(function (t) {
        R((t >>>= 0), "offset");
        let r = this[t],
          e = this[t + 7];
        return (
          (void 0 === r || void 0 === e) && P(t, this.length - 8),
          (BigInt(
            (r << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
          ) <<
            BigInt(32)) +
            BigInt(
              0x1000000 * this[++t] + 65536 * this[++t] + 256 * this[++t] + e
            )
        );
      })),
      (s.prototype.readFloatLE = function (t, r) {
        return (
          (t >>>= 0), r || b(t, 4, this.length), n.read(this, t, !0, 23, 4)
        );
      }),
      (s.prototype.readFloatBE = function (t, r) {
        return (
          (t >>>= 0), r || b(t, 4, this.length), n.read(this, t, !1, 23, 4)
        );
      }),
      (s.prototype.readDoubleLE = function (t, r) {
        return (
          (t >>>= 0), r || b(t, 8, this.length), n.read(this, t, !0, 52, 8)
        );
      }),
      (s.prototype.readDoubleBE = function (t, r) {
        return (
          (t >>>= 0), r || b(t, 8, this.length), n.read(this, t, !1, 52, 8)
        );
      }),
      (s.prototype.writeUintLE = s.prototype.writeUIntLE =
        function (t, r, e, i) {
          if (((t *= 1), (r >>>= 0), (e >>>= 0), !i)) {
            let i = Math.pow(2, 8 * e) - 1;
            M(this, t, r, e, i, 0);
          }
          let n = 1,
            o = 0;
          for (this[r] = 255 & t; ++o < e && (n *= 256); )
            this[r + o] = (t / n) & 255;
          return r + e;
        }),
      (s.prototype.writeUintBE = s.prototype.writeUIntBE =
        function (t, r, e, i) {
          if (((t *= 1), (r >>>= 0), (e >>>= 0), !i)) {
            let i = Math.pow(2, 8 * e) - 1;
            M(this, t, r, e, i, 0);
          }
          let n = e - 1,
            o = 1;
          for (this[r + n] = 255 & t; --n >= 0 && (o *= 256); )
            this[r + n] = (t / o) & 255;
          return r + e;
        }),
      (s.prototype.writeUint8 = s.prototype.writeUInt8 =
        function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || M(this, t, r, 1, 255, 0),
            (this[r] = 255 & t),
            r + 1
          );
        }),
      (s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
        function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || M(this, t, r, 2, 65535, 0),
            (this[r] = 255 & t),
            (this[r + 1] = t >>> 8),
            r + 2
          );
        }),
      (s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
        function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || M(this, t, r, 2, 65535, 0),
            (this[r] = t >>> 8),
            (this[r + 1] = 255 & t),
            r + 2
          );
        }),
      (s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
        function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || M(this, t, r, 4, 0xffffffff, 0),
            (this[r + 3] = t >>> 24),
            (this[r + 2] = t >>> 16),
            (this[r + 1] = t >>> 8),
            (this[r] = 255 & t),
            r + 4
          );
        }),
      (s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
        function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || M(this, t, r, 4, 0xffffffff, 0),
            (this[r] = t >>> 24),
            (this[r + 1] = t >>> 16),
            (this[r + 2] = t >>> 8),
            (this[r + 3] = 255 & t),
            r + 4
          );
        }),
      (s.prototype.writeBigUInt64LE = F(function (t, r = 0) {
        return x(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (s.prototype.writeBigUInt64BE = F(function (t, r = 0) {
        return A(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (s.prototype.writeIntLE = function (t, r, e, i) {
        if (((t *= 1), (r >>>= 0), !i)) {
          let i = Math.pow(2, 8 * e - 1);
          M(this, t, r, e, i - 1, -i);
        }
        let n = 0,
          o = 1,
          f = 0;
        for (this[r] = 255 & t; ++n < e && (o *= 256); )
          t < 0 && 0 === f && 0 !== this[r + n - 1] && (f = 1),
            (this[r + n] = (((t / o) | 0) - f) & 255);
        return r + e;
      }),
      (s.prototype.writeIntBE = function (t, r, e, i) {
        if (((t *= 1), (r >>>= 0), !i)) {
          let i = Math.pow(2, 8 * e - 1);
          M(this, t, r, e, i - 1, -i);
        }
        let n = e - 1,
          o = 1,
          f = 0;
        for (this[r + n] = 255 & t; --n >= 0 && (o *= 256); )
          t < 0 && 0 === f && 0 !== this[r + n + 1] && (f = 1),
            (this[r + n] = (((t / o) | 0) - f) & 255);
        return r + e;
      }),
      (s.prototype.writeInt8 = function (t, r, e) {
        return (
          (t *= 1),
          (r >>>= 0),
          e || M(this, t, r, 1, 127, -128),
          t < 0 && (t = 255 + t + 1),
          (this[r] = 255 & t),
          r + 1
        );
      }),
      (s.prototype.writeInt16LE = function (t, r, e) {
        return (
          (t *= 1),
          (r >>>= 0),
          e || M(this, t, r, 2, 32767, -32768),
          (this[r] = 255 & t),
          (this[r + 1] = t >>> 8),
          r + 2
        );
      }),
      (s.prototype.writeInt16BE = function (t, r, e) {
        return (
          (t *= 1),
          (r >>>= 0),
          e || M(this, t, r, 2, 32767, -32768),
          (this[r] = t >>> 8),
          (this[r + 1] = 255 & t),
          r + 2
        );
      }),
      (s.prototype.writeInt32LE = function (t, r, e) {
        return (
          (t *= 1),
          (r >>>= 0),
          e || M(this, t, r, 4, 0x7fffffff, -0x80000000),
          (this[r] = 255 & t),
          (this[r + 1] = t >>> 8),
          (this[r + 2] = t >>> 16),
          (this[r + 3] = t >>> 24),
          r + 4
        );
      }),
      (s.prototype.writeInt32BE = function (t, r, e) {
        return (
          (t *= 1),
          (r >>>= 0),
          e || M(this, t, r, 4, 0x7fffffff, -0x80000000),
          t < 0 && (t = 0xffffffff + t + 1),
          (this[r] = t >>> 24),
          (this[r + 1] = t >>> 16),
          (this[r + 2] = t >>> 8),
          (this[r + 3] = 255 & t),
          r + 4
        );
      }),
      (s.prototype.writeBigInt64LE = F(function (t, r = 0) {
        return x(
          this,
          t,
          r,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (s.prototype.writeBigInt64BE = F(function (t, r = 0) {
        return A(
          this,
          t,
          r,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (s.prototype.writeFloatLE = function (t, r, e) {
        return E(this, t, r, !0, e);
      }),
      (s.prototype.writeFloatBE = function (t, r, e) {
        return E(this, t, r, !1, e);
      }),
      (s.prototype.writeDoubleLE = function (t, r, e) {
        return B(this, t, r, !0, e);
      }),
      (s.prototype.writeDoubleBE = function (t, r, e) {
        return B(this, t, r, !1, e);
      }),
      (s.prototype.copy = function (t, r, e, i) {
        if (!s.isBuffer(t)) throw TypeError("argument should be a Buffer");
        if (
          (e || (e = 0),
          i || 0 === i || (i = this.length),
          r >= t.length && (r = t.length),
          r || (r = 0),
          i > 0 && i < e && (i = e),
          i === e || 0 === t.length || 0 === this.length)
        )
          return 0;
        if (r < 0) throw RangeError("targetStart out of bounds");
        if (e < 0 || e >= this.length) throw RangeError("Index out of range");
        if (i < 0) throw RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length),
          t.length - r < i - e && (i = t.length - r + e);
        let n = i - e;
        return (
          this === t && "function" == typeof Uint8Array.prototype.copyWithin
            ? this.copyWithin(r, e, i)
            : Uint8Array.prototype.set.call(t, this.subarray(e, i), r),
          n
        );
      }),
      (s.prototype.fill = function (t, r, e, i) {
        let n;
        if ("string" == typeof t) {
          if (
            ("string" == typeof r
              ? ((i = r), (r = 0), (e = this.length))
              : "string" == typeof e && ((i = e), (e = this.length)),
            void 0 !== i && "string" != typeof i)
          )
            throw TypeError("encoding must be a string");
          if ("string" == typeof i && !s.isEncoding(i))
            throw TypeError("Unknown encoding: " + i);
          if (1 === t.length) {
            let r = t.charCodeAt(0);
            (("utf8" === i && r < 128) || "latin1" === i) && (t = r);
          }
        } else
          "number" == typeof t
            ? (t &= 255)
            : "boolean" == typeof t && (t = Number(t));
        if (r < 0 || this.length < r || this.length < e)
          throw RangeError("Out of range index");
        if (e <= r) return this;
        if (
          ((r >>>= 0),
          (e = void 0 === e ? this.length : e >>> 0),
          t || (t = 0),
          "number" == typeof t)
        )
          for (n = r; n < e; ++n) this[n] = t;
        else {
          let o = s.isBuffer(t) ? t : s.from(t, i),
            f = o.length;
          if (0 === f)
            throw TypeError(
              'The value "' + t + '" is invalid for argument "value"'
            );
          for (n = 0; n < e - r; ++n) this[n + r] = o[n % f];
        }
        return this;
      });
    let S = {};
    function I(t, r, e) {
      S[t] = class extends e {
        constructor() {
          super(),
            Object.defineProperty(this, "message", {
              value: r.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${t}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return t;
        }
        set code(t) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${t}]: ${this.message}`;
        }
      };
    }
    function O(t) {
      let r = "",
        e = t.length,
        i = +("-" === t[0]);
      for (; e >= i + 4; e -= 3) r = `_${t.slice(e - 3, e)}${r}`;
      return `${t.slice(0, e)}${r}`;
    }
    function U(t, r, e, i, n, o) {
      if (t > e || t < r) {
        let i,
          n = "bigint" == typeof r ? "n" : "";
        throw (
          ((i =
            o > 3
              ? 0 === r || r === BigInt(0)
                ? `>= 0${n} and < 2${n} ** ${(o + 1) * 8}${n}`
                : `>= -(2${n} ** ${(o + 1) * 8 - 1}${n}) and < 2 ** ${
                    (o + 1) * 8 - 1
                  }${n}`
              : `>= ${r}${n} and <= ${e}${n}`),
          new S.ERR_OUT_OF_RANGE("value", i, t))
        );
      }
      R(n, "offset"),
        (void 0 === i[n] || void 0 === i[n + o]) && P(n, i.length - (o + 1));
    }
    function R(t, r) {
      if ("number" != typeof t)
        throw new S.ERR_INVALID_ARG_TYPE(r, "number", t);
    }
    function P(t, r, e) {
      if (Math.floor(t) !== t)
        throw (R(t, e), new S.ERR_OUT_OF_RANGE(e || "offset", "an integer", t));
      if (r < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS();
      throw new S.ERR_OUT_OF_RANGE(e || "offset", `>= ${+!!e} and <= ${r}`, t);
    }
    I(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function (t) {
        return t
          ? `${t} is outside of buffer bounds`
          : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ),
      I(
        "ERR_INVALID_ARG_TYPE",
        function (t, r) {
          return `The "${t}" argument must be of type number. Received type ${typeof r}`;
        },
        TypeError
      ),
      I(
        "ERR_OUT_OF_RANGE",
        function (t, r, e) {
          let i = `The value of "${t}" is out of range.`,
            n = e;
          return (
            Number.isInteger(e) && Math.abs(e) > 0x100000000
              ? (n = O(String(e)))
              : "bigint" == typeof e &&
                ((n = String(e)),
                (e > BigInt(2) ** BigInt(32) ||
                  e < -(BigInt(2) ** BigInt(32))) &&
                  (n = O(n)),
                (n += "n")),
            (i += ` It must be ${r}. Received ${n}`)
          );
        },
        RangeError
      );
    let T = /[^+/0-9A-Za-z-_]/g;
    function j(t, r) {
      let e;
      r = r || 1 / 0;
      let i = t.length,
        n = null,
        o = [];
      for (let f = 0; f < i; ++f) {
        if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
          if (!n) {
            if (e > 56319 || f + 1 === i) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            n = e;
            continue;
          }
          if (e < 56320) {
            (r -= 3) > -1 && o.push(239, 191, 189), (n = e);
            continue;
          }
          e = (((n - 55296) << 10) | (e - 56320)) + 65536;
        } else n && (r -= 3) > -1 && o.push(239, 191, 189);
        if (((n = null), e < 128)) {
          if ((r -= 1) < 0) break;
          o.push(e);
        } else if (e < 2048) {
          if ((r -= 2) < 0) break;
          o.push((e >> 6) | 192, (63 & e) | 128);
        } else if (e < 65536) {
          if ((r -= 3) < 0) break;
          o.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
        } else if (e < 1114112) {
          if ((r -= 4) < 0) break;
          o.push(
            (e >> 18) | 240,
            ((e >> 12) & 63) | 128,
            ((e >> 6) & 63) | 128,
            (63 & e) | 128
          );
        } else throw Error("Invalid code point");
      }
      return o;
    }
    function N(t) {
      return i.toByteArray(
        (function (t) {
          if ((t = (t = t.split("=")[0]).trim().replace(T, "")).length < 2)
            return "";
          for (; t.length % 4 != 0; ) t += "=";
          return t;
        })(t)
      );
    }
    function k(t, r, e, i) {
      let n;
      for (n = 0; n < i && !(n + e >= r.length) && !(n >= t.length); ++n)
        r[n + e] = t[n];
      return n;
    }
    function L(t, r) {
      return (
        t instanceof r ||
        (null != t &&
          null != t.constructor &&
          null != t.constructor.name &&
          t.constructor.name === r.name)
      );
    }
    let C = (function () {
      let t = "0123456789abcdef",
        r = Array(256);
      for (let e = 0; e < 16; ++e) {
        let i = 16 * e;
        for (let n = 0; n < 16; ++n) r[i + n] = t[e] + t[n];
      }
      return r;
    })();
    function F(t) {
      return "u" < typeof BigInt ? $ : t;
    }
    function $() {
      throw Error("BigInt not supported");
    }
  },
  910490,
  (t, r, e) => {
    !(function (t, r) {
      "use strict";
      function e(t, r) {
        if (!t) throw Error(r || "Assertion failed");
      }
      function i(t, r) {
        t.super_ = r;
        var e = function () {};
        (e.prototype = r.prototype),
          (t.prototype = new e()),
          (t.prototype.constructor = t);
      }
      function n(t, r, e) {
        if (n.isBN(t)) return t;
        (this.negative = 0),
          (this.words = null),
          (this.length = 0),
          (this.red = null),
          null !== t &&
            (("le" === r || "be" === r) && ((e = r), (r = 10)),
            this._init(t || 0, r || 10, e || "be"));
      }
      (t.exports = n), (n.BN = n), (n.wordSize = 26);
      try {
        a =
          "u" > typeof window && void 0 !== window.Buffer
            ? window.Buffer
            : void 0;
      } catch (t) {}
      function o(t, r) {
        var i = t.charCodeAt(r);
        return i >= 48 && i <= 57
          ? i - 48
          : i >= 65 && i <= 70
          ? i - 55
          : i >= 97 && i <= 102
          ? i - 87
          : void e(!1, "Invalid character in " + t);
      }
      function f(t, r, e) {
        var i = o(t, e);
        return e - 1 >= r && (i |= o(t, e - 1) << 4), i;
      }
      function s(t, r, i, n) {
        for (var o = 0, f = 0, s = Math.min(t.length, i), h = r; h < s; h++) {
          var u = t.charCodeAt(h) - 48;
          (o *= n),
            (f = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
            e(u >= 0 && f < n, "Invalid character"),
            (o += f);
        }
        return o;
      }
      function h(t, r) {
        (t.words = r.words),
          (t.length = r.length),
          (t.negative = r.negative),
          (t.red = r.red);
      }
      if (
        ((n.isBN = function (t) {
          return (
            t instanceof n ||
            (null !== t &&
              "object" == typeof t &&
              t.constructor.wordSize === n.wordSize &&
              Array.isArray(t.words))
          );
        }),
        (n.max = function (t, r) {
          return t.cmp(r) > 0 ? t : r;
        }),
        (n.min = function (t, r) {
          return 0 > t.cmp(r) ? t : r;
        }),
        (n.prototype._init = function (t, r, i) {
          if ("number" == typeof t) return this._initNumber(t, r, i);
          if ("object" == typeof t) return this._initArray(t, r, i);
          "hex" === r && (r = 16), e(r === (0 | r) && r >= 2 && r <= 36);
          var n = 0;
          "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
            (n++, (this.negative = 1)),
            n < t.length &&
              (16 === r
                ? this._parseHex(t, n, i)
                : (this._parseBase(t, r, n),
                  "le" === i && this._initArray(this.toArray(), r, i)));
        }),
        (n.prototype._initNumber = function (t, r, i) {
          t < 0 && ((this.negative = 1), (t = -t)),
            t < 0x4000000
              ? ((this.words = [0x3ffffff & t]), (this.length = 1))
              : t < 0x10000000000000
              ? ((this.words = [0x3ffffff & t, (t / 0x4000000) & 0x3ffffff]),
                (this.length = 2))
              : (e(t < 0x20000000000000),
                (this.words = [0x3ffffff & t, (t / 0x4000000) & 0x3ffffff, 1]),
                (this.length = 3)),
            "le" === i && this._initArray(this.toArray(), r, i);
        }),
        (n.prototype._initArray = function (t, r, i) {
          if ((e("number" == typeof t.length), t.length <= 0))
            return (this.words = [0]), (this.length = 1), this;
          (this.length = Math.ceil(t.length / 3)),
            (this.words = Array(this.length));
          for (var n, o, f = 0; f < this.length; f++) this.words[f] = 0;
          var s = 0;
          if ("be" === i)
            for (f = t.length - 1, n = 0; f >= 0; f -= 3)
              (o = t[f] | (t[f - 1] << 8) | (t[f - 2] << 16)),
                (this.words[n] |= (o << s) & 0x3ffffff),
                (this.words[n + 1] = (o >>> (26 - s)) & 0x3ffffff),
                (s += 24) >= 26 && ((s -= 26), n++);
          else if ("le" === i)
            for (f = 0, n = 0; f < t.length; f += 3)
              (o = t[f] | (t[f + 1] << 8) | (t[f + 2] << 16)),
                (this.words[n] |= (o << s) & 0x3ffffff),
                (this.words[n + 1] = (o >>> (26 - s)) & 0x3ffffff),
                (s += 24) >= 26 && ((s -= 26), n++);
          return this._strip();
        }),
        (n.prototype._parseHex = function (t, r, e) {
          (this.length = Math.ceil((t.length - r) / 6)),
            (this.words = Array(this.length));
          for (var i, n = 0; n < this.length; n++) this.words[n] = 0;
          var o = 0,
            s = 0;
          if ("be" === e)
            for (n = t.length - 1; n >= r; n -= 2)
              (i = f(t, r, n) << o),
                (this.words[s] |= 0x3ffffff & i),
                o >= 18
                  ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                  : (o += 8);
          else
            for (n = (t.length - r) % 2 == 0 ? r + 1 : r; n < t.length; n += 2)
              (i = f(t, r, n) << o),
                (this.words[s] |= 0x3ffffff & i),
                o >= 18
                  ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                  : (o += 8);
          this._strip();
        }),
        (n.prototype._parseBase = function (t, r, e) {
          (this.words = [0]), (this.length = 1);
          for (var i = 0, n = 1; n <= 0x3ffffff; n *= r) i++;
          i--, (n = (n / r) | 0);
          for (
            var o = t.length - e,
              f = o % i,
              h = Math.min(o, o - f) + e,
              u = 0,
              a = e;
            a < h;
            a += i
          )
            (u = s(t, a, a + i, r)),
              this.imuln(n),
              this.words[0] + u < 0x4000000
                ? (this.words[0] += u)
                : this._iaddn(u);
          if (0 !== f) {
            var l = 1;
            for (u = s(t, a, t.length, r), a = 0; a < f; a++) l *= r;
            this.imuln(l),
              this.words[0] + u < 0x4000000
                ? (this.words[0] += u)
                : this._iaddn(u);
          }
          this._strip();
        }),
        (n.prototype.copy = function (t) {
          t.words = Array(this.length);
          for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
          (t.length = this.length),
            (t.negative = this.negative),
            (t.red = this.red);
        }),
        (n.prototype._move = function (t) {
          h(t, this);
        }),
        (n.prototype.clone = function () {
          var t = new n(null);
          return this.copy(t), t;
        }),
        (n.prototype._expand = function (t) {
          for (; this.length < t; ) this.words[this.length++] = 0;
          return this;
        }),
        (n.prototype._strip = function () {
          for (; this.length > 1 && 0 === this.words[this.length - 1]; )
            this.length--;
          return this._normSign();
        }),
        (n.prototype._normSign = function () {
          return (
            1 === this.length && 0 === this.words[0] && (this.negative = 0),
            this
          );
        }),
        "u" > typeof Symbol && "function" == typeof Symbol.for)
      )
        try {
          n.prototype[Symbol.for("nodejs.util.inspect.custom")] = u;
        } catch (t) {
          n.prototype.inspect = u;
        }
      else n.prototype.inspect = u;
      function u() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var a,
        l = [
          "",
          "0",
          "00",
          "000",
          "0000",
          "00000",
          "000000",
          "0000000",
          "00000000",
          "000000000",
          "0000000000",
          "00000000000",
          "000000000000",
          "0000000000000",
          "00000000000000",
          "000000000000000",
          "0000000000000000",
          "00000000000000000",
          "000000000000000000",
          "0000000000000000000",
          "00000000000000000000",
          "000000000000000000000",
          "0000000000000000000000",
          "00000000000000000000000",
          "000000000000000000000000",
          "0000000000000000000000000",
        ],
        p = [
          0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
          5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        ],
        c = [
          0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400,
          0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000, 0x3bd7765,
          7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40, 0x2cddcf9, 64e6,
          4084101, 5153632, 6436343, 7962624, 9765625, 0xb54ba0, 0xdaf26b,
          0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f, 0x2000000, 0x25528a1,
          0x2b54a20, 0x3216b93, 0x39aa400,
        ];
      function y(t, r, e) {
        e.negative = r.negative ^ t.negative;
        var i = (t.length + r.length) | 0;
        (e.length = i), (i = (i - 1) | 0);
        var n = 0 | t.words[0],
          o = 0 | r.words[0],
          f = n * o,
          s = 0x3ffffff & f,
          h = (f / 0x4000000) | 0;
        e.words[0] = s;
        for (var u = 1; u < i; u++) {
          for (
            var a = h >>> 26,
              l = 0x3ffffff & h,
              p = Math.min(u, r.length - 1),
              c = Math.max(0, u - t.length + 1);
            c <= p;
            c++
          ) {
            var y = (u - c) | 0;
            (a +=
              ((f = (n = 0 | t.words[y]) * (o = 0 | r.words[c]) + l) /
                0x4000000) |
              0),
              (l = 0x3ffffff & f);
          }
          (e.words[u] = 0 | l), (h = 0 | a);
        }
        return 0 !== h ? (e.words[u] = 0 | h) : e.length--, e._strip();
      }
      (n.prototype.toString = function (t, r) {
        if (((r = 0 | r || 1), 16 === (t = t || 10) || "hex" === t)) {
          for (var i = "", n = 0, o = 0, f = 0; f < this.length; f++) {
            var s = this.words[f],
              h = (((s << n) | o) & 0xffffff).toString(16);
            (o = (s >>> (24 - n)) & 0xffffff),
              (n += 2) >= 26 && ((n -= 26), f--),
              (i =
                0 !== o || f !== this.length - 1
                  ? l[6 - h.length] + h + i
                  : h + i);
          }
          for (0 !== o && (i = o.toString(16) + i); i.length % r != 0; )
            i = "0" + i;
          return 0 !== this.negative && (i = "-" + i), i;
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
          var u = p[t],
            a = c[t];
          i = "";
          var y = this.clone();
          for (y.negative = 0; !y.isZero(); ) {
            var m = y.modrn(a).toString(t);
            i = (y = y.idivn(a)).isZero() ? m + i : l[u - m.length] + m + i;
          }
          for (this.isZero() && (i = "0" + i); i.length % r != 0; ) i = "0" + i;
          return 0 !== this.negative && (i = "-" + i), i;
        }
        e(!1, "Base should be between 2 and 36");
      }),
        (n.prototype.toNumber = function () {
          var t = this.words[0];
          return (
            2 === this.length
              ? (t += 0x4000000 * this.words[1])
              : 3 === this.length && 1 === this.words[2]
              ? (t += 0x10000000000000 + 0x4000000 * this.words[1])
              : this.length > 2 &&
                e(!1, "Number can only safely store up to 53 bits"),
            0 !== this.negative ? -t : t
          );
        }),
        (n.prototype.toJSON = function () {
          return this.toString(16, 2);
        }),
        a &&
          (n.prototype.toBuffer = function (t, r) {
            return this.toArrayLike(a, t, r);
          }),
        (n.prototype.toArray = function (t, r) {
          return this.toArrayLike(Array, t, r);
        }),
        (n.prototype.toArrayLike = function (t, r, i) {
          this._strip();
          var n = this.byteLength(),
            o = i || Math.max(1, n);
          e(n <= o, "byte array longer than desired length"),
            e(o > 0, "Requested array length <= 0");
          var f = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
          return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](f, n), f;
        }),
        (n.prototype._toArrayLikeLE = function (t, r) {
          for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
            var f = (this.words[n] << o) | i;
            (t[e++] = 255 & f),
              e < t.length && (t[e++] = (f >> 8) & 255),
              e < t.length && (t[e++] = (f >> 16) & 255),
              6 === o
                ? (e < t.length && (t[e++] = (f >> 24) & 255), (i = 0), (o = 0))
                : ((i = f >>> 24), (o += 2));
          }
          if (e < t.length) for (t[e++] = i; e < t.length; ) t[e++] = 0;
        }),
        (n.prototype._toArrayLikeBE = function (t, r) {
          for (
            var e = t.length - 1, i = 0, n = 0, o = 0;
            n < this.length;
            n++
          ) {
            var f = (this.words[n] << o) | i;
            (t[e--] = 255 & f),
              e >= 0 && (t[e--] = (f >> 8) & 255),
              e >= 0 && (t[e--] = (f >> 16) & 255),
              6 === o
                ? (e >= 0 && (t[e--] = (f >> 24) & 255), (i = 0), (o = 0))
                : ((i = f >>> 24), (o += 2));
          }
          if (e >= 0) for (t[e--] = i; e >= 0; ) t[e--] = 0;
        }),
        Math.clz32
          ? (n.prototype._countBits = function (t) {
              return 32 - Math.clz32(t);
            })
          : (n.prototype._countBits = function (t) {
              var r = t,
                e = 0;
              return (
                r >= 4096 && ((e += 13), (r >>>= 13)),
                r >= 64 && ((e += 7), (r >>>= 7)),
                r >= 8 && ((e += 4), (r >>>= 4)),
                r >= 2 && ((e += 2), (r >>>= 2)),
                e + r
              );
            }),
        (n.prototype._zeroBits = function (t) {
          if (0 === t) return 26;
          var r = t,
            e = 0;
          return (
            (8191 & r) == 0 && ((e += 13), (r >>>= 13)),
            (127 & r) == 0 && ((e += 7), (r >>>= 7)),
            (15 & r) == 0 && ((e += 4), (r >>>= 4)),
            (3 & r) == 0 && ((e += 2), (r >>>= 2)),
            (1 & r) == 0 && e++,
            e
          );
        }),
        (n.prototype.bitLength = function () {
          var t = this.words[this.length - 1],
            r = this._countBits(t);
          return (this.length - 1) * 26 + r;
        }),
        (n.prototype.zeroBits = function () {
          if (this.isZero()) return 0;
          for (var t = 0, r = 0; r < this.length; r++) {
            var e = this._zeroBits(this.words[r]);
            if (((t += e), 26 !== e)) break;
          }
          return t;
        }),
        (n.prototype.byteLength = function () {
          return Math.ceil(this.bitLength() / 8);
        }),
        (n.prototype.toTwos = function (t) {
          return 0 !== this.negative
            ? this.abs().inotn(t).iaddn(1)
            : this.clone();
        }),
        (n.prototype.fromTwos = function (t) {
          return this.testn(t - 1)
            ? this.notn(t).iaddn(1).ineg()
            : this.clone();
        }),
        (n.prototype.isNeg = function () {
          return 0 !== this.negative;
        }),
        (n.prototype.neg = function () {
          return this.clone().ineg();
        }),
        (n.prototype.ineg = function () {
          return this.isZero() || (this.negative ^= 1), this;
        }),
        (n.prototype.iuor = function (t) {
          for (; this.length < t.length; ) this.words[this.length++] = 0;
          for (var r = 0; r < t.length; r++)
            this.words[r] = this.words[r] | t.words[r];
          return this._strip();
        }),
        (n.prototype.ior = function (t) {
          return e((this.negative | t.negative) == 0), this.iuor(t);
        }),
        (n.prototype.or = function (t) {
          return this.length > t.length
            ? this.clone().ior(t)
            : t.clone().ior(this);
        }),
        (n.prototype.uor = function (t) {
          return this.length > t.length
            ? this.clone().iuor(t)
            : t.clone().iuor(this);
        }),
        (n.prototype.iuand = function (t) {
          var r;
          r = this.length > t.length ? t : this;
          for (var e = 0; e < r.length; e++)
            this.words[e] = this.words[e] & t.words[e];
          return (this.length = r.length), this._strip();
        }),
        (n.prototype.iand = function (t) {
          return e((this.negative | t.negative) == 0), this.iuand(t);
        }),
        (n.prototype.and = function (t) {
          return this.length > t.length
            ? this.clone().iand(t)
            : t.clone().iand(this);
        }),
        (n.prototype.uand = function (t) {
          return this.length > t.length
            ? this.clone().iuand(t)
            : t.clone().iuand(this);
        }),
        (n.prototype.iuxor = function (t) {
          this.length > t.length
            ? ((r = this), (e = t))
            : ((r = t), (e = this));
          for (var r, e, i = 0; i < e.length; i++)
            this.words[i] = r.words[i] ^ e.words[i];
          if (this !== r) for (; i < r.length; i++) this.words[i] = r.words[i];
          return (this.length = r.length), this._strip();
        }),
        (n.prototype.ixor = function (t) {
          return e((this.negative | t.negative) == 0), this.iuxor(t);
        }),
        (n.prototype.xor = function (t) {
          return this.length > t.length
            ? this.clone().ixor(t)
            : t.clone().ixor(this);
        }),
        (n.prototype.uxor = function (t) {
          return this.length > t.length
            ? this.clone().iuxor(t)
            : t.clone().iuxor(this);
        }),
        (n.prototype.inotn = function (t) {
          e("number" == typeof t && t >= 0);
          var r = 0 | Math.ceil(t / 26),
            i = t % 26;
          this._expand(r), i > 0 && r--;
          for (var n = 0; n < r; n++)
            this.words[n] = 0x3ffffff & ~this.words[n];
          return (
            i > 0 && (this.words[n] = ~this.words[n] & (0x3ffffff >> (26 - i))),
            this._strip()
          );
        }),
        (n.prototype.notn = function (t) {
          return this.clone().inotn(t);
        }),
        (n.prototype.setn = function (t, r) {
          e("number" == typeof t && t >= 0);
          var i = (t / 26) | 0,
            n = t % 26;
          return (
            this._expand(i + 1),
            r
              ? (this.words[i] = this.words[i] | (1 << n))
              : (this.words[i] = this.words[i] & ~(1 << n)),
            this._strip()
          );
        }),
        (n.prototype.iadd = function (t) {
          if (0 !== this.negative && 0 === t.negative)
            return (
              (this.negative = 0),
              (r = this.isub(t)),
              (this.negative ^= 1),
              this._normSign()
            );
          if (0 === this.negative && 0 !== t.negative)
            return (
              (t.negative = 0),
              (r = this.isub(t)),
              (t.negative = 1),
              r._normSign()
            );
          this.length > t.length
            ? ((e = this), (i = t))
            : ((e = t), (i = this));
          for (var r, e, i, n = 0, o = 0; o < i.length; o++)
            (r = (0 | e.words[o]) + (0 | i.words[o]) + n),
              (this.words[o] = 0x3ffffff & r),
              (n = r >>> 26);
          for (; 0 !== n && o < e.length; o++)
            (r = (0 | e.words[o]) + n),
              (this.words[o] = 0x3ffffff & r),
              (n = r >>> 26);
          if (((this.length = e.length), 0 !== n))
            (this.words[this.length] = n), this.length++;
          else if (e !== this)
            for (; o < e.length; o++) this.words[o] = e.words[o];
          return this;
        }),
        (n.prototype.add = function (t) {
          var r;
          return 0 !== t.negative && 0 === this.negative
            ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
            : 0 === t.negative && 0 !== this.negative
            ? ((this.negative = 0), (r = t.sub(this)), (this.negative = 1), r)
            : this.length > t.length
            ? this.clone().iadd(t)
            : t.clone().iadd(this);
        }),
        (n.prototype.isub = function (t) {
          if (0 !== t.negative) {
            t.negative = 0;
            var r,
              e,
              i = this.iadd(t);
            return (t.negative = 1), i._normSign();
          }
          if (0 !== this.negative)
            return (
              (this.negative = 0),
              this.iadd(t),
              (this.negative = 1),
              this._normSign()
            );
          var n = this.cmp(t);
          if (0 === n)
            return (
              (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
            );
          n > 0 ? ((r = this), (e = t)) : ((r = t), (e = this));
          for (var o = 0, f = 0; f < e.length; f++)
            (o = (i = (0 | r.words[f]) - (0 | e.words[f]) + o) >> 26),
              (this.words[f] = 0x3ffffff & i);
          for (; 0 !== o && f < r.length; f++)
            (o = (i = (0 | r.words[f]) + o) >> 26),
              (this.words[f] = 0x3ffffff & i);
          if (0 === o && f < r.length && r !== this)
            for (; f < r.length; f++) this.words[f] = r.words[f];
          return (
            (this.length = Math.max(this.length, f)),
            r !== this && (this.negative = 1),
            this._strip()
          );
        }),
        (n.prototype.sub = function (t) {
          return this.clone().isub(t);
        });
      var m = function (t, r, e) {
        var i,
          n,
          o,
          f = t.words,
          s = r.words,
          h = e.words,
          u = 0,
          a = 0 | f[0],
          l = 8191 & a,
          p = a >>> 13,
          c = 0 | f[1],
          y = 8191 & c,
          m = c >>> 13,
          d = 0 | f[2],
          g = 8191 & d,
          v = d >>> 13,
          w = 0 | f[3],
          b = 8191 & w,
          M = w >>> 13,
          x = 0 | f[4],
          A = 8191 & x,
          _ = x >>> 13,
          E = 0 | f[5],
          B = 8191 & E,
          S = E >>> 13,
          I = 0 | f[6],
          O = 8191 & I,
          U = I >>> 13,
          R = 0 | f[7],
          P = 8191 & R,
          T = R >>> 13,
          j = 0 | f[8],
          N = 8191 & j,
          k = j >>> 13,
          L = 0 | f[9],
          C = 8191 & L,
          F = L >>> 13,
          $ = 0 | s[0],
          q = 8191 & $,
          D = $ >>> 13,
          Z = 0 | s[1],
          G = 8191 & Z,
          z = Z >>> 13,
          W = 0 | s[2],
          V = 8191 & W,
          J = W >>> 13,
          Y = 0 | s[3],
          H = 8191 & Y,
          K = Y >>> 13,
          X = 0 | s[4],
          Q = 8191 & X,
          tt = X >>> 13,
          tr = 0 | s[5],
          te = 8191 & tr,
          ti = tr >>> 13,
          tn = 0 | s[6],
          to = 8191 & tn,
          tf = tn >>> 13,
          ts = 0 | s[7],
          th = 8191 & ts,
          tu = ts >>> 13,
          ta = 0 | s[8],
          tl = 8191 & ta,
          tp = ta >>> 13,
          tc = 0 | s[9],
          ty = 8191 & tc,
          tm = tc >>> 13;
        (e.negative = t.negative ^ r.negative),
          (e.length = 19),
          (i = Math.imul(l, q));
        var td =
          (((u + i) | 0) +
            ((8191 & (n = ((n = Math.imul(l, D)) + Math.imul(p, q)) | 0)) <<
              13)) |
          0;
        (u = ((((o = Math.imul(p, D)) + (n >>> 13)) | 0) + (td >>> 26)) | 0),
          (td &= 0x3ffffff),
          (i = Math.imul(y, q)),
          (n = ((n = Math.imul(y, D)) + Math.imul(m, q)) | 0),
          (o = Math.imul(m, D)),
          (i = (i + Math.imul(l, G)) | 0);
        var tg =
          (((u + i) | 0) +
            ((8191 &
              (n = ((n = (n + Math.imul(l, z)) | 0) + Math.imul(p, G)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, z)) | 0) + (n >>> 13)) | 0) + (tg >>> 26)) |
          0),
          (tg &= 0x3ffffff),
          (i = Math.imul(g, q)),
          (n = ((n = Math.imul(g, D)) + Math.imul(v, q)) | 0),
          (o = Math.imul(v, D)),
          (i = (i + Math.imul(y, G)) | 0),
          (n = ((n = (n + Math.imul(y, z)) | 0) + Math.imul(m, G)) | 0),
          (o = (o + Math.imul(m, z)) | 0),
          (i = (i + Math.imul(l, V)) | 0);
        var tv =
          (((u + i) | 0) +
            ((8191 &
              (n = ((n = (n + Math.imul(l, J)) | 0) + Math.imul(p, V)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, J)) | 0) + (n >>> 13)) | 0) + (tv >>> 26)) |
          0),
          (tv &= 0x3ffffff),
          (i = Math.imul(b, q)),
          (n = ((n = Math.imul(b, D)) + Math.imul(M, q)) | 0),
          (o = Math.imul(M, D)),
          (i = (i + Math.imul(g, G)) | 0),
          (n = ((n = (n + Math.imul(g, z)) | 0) + Math.imul(v, G)) | 0),
          (o = (o + Math.imul(v, z)) | 0),
          (i = (i + Math.imul(y, V)) | 0),
          (n = ((n = (n + Math.imul(y, J)) | 0) + Math.imul(m, V)) | 0),
          (o = (o + Math.imul(m, J)) | 0),
          (i = (i + Math.imul(l, H)) | 0);
        var tw =
          (((u + i) | 0) +
            ((8191 &
              (n = ((n = (n + Math.imul(l, K)) | 0) + Math.imul(p, H)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, K)) | 0) + (n >>> 13)) | 0) + (tw >>> 26)) |
          0),
          (tw &= 0x3ffffff),
          (i = Math.imul(A, q)),
          (n = ((n = Math.imul(A, D)) + Math.imul(_, q)) | 0),
          (o = Math.imul(_, D)),
          (i = (i + Math.imul(b, G)) | 0),
          (n = ((n = (n + Math.imul(b, z)) | 0) + Math.imul(M, G)) | 0),
          (o = (o + Math.imul(M, z)) | 0),
          (i = (i + Math.imul(g, V)) | 0),
          (n = ((n = (n + Math.imul(g, J)) | 0) + Math.imul(v, V)) | 0),
          (o = (o + Math.imul(v, J)) | 0),
          (i = (i + Math.imul(y, H)) | 0),
          (n = ((n = (n + Math.imul(y, K)) | 0) + Math.imul(m, H)) | 0),
          (o = (o + Math.imul(m, K)) | 0),
          (i = (i + Math.imul(l, Q)) | 0);
        var tb =
          (((u + i) | 0) +
            ((8191 &
              (n = ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(p, Q)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, tt)) | 0) + (n >>> 13)) | 0) +
            (tb >>> 26)) |
          0),
          (tb &= 0x3ffffff),
          (i = Math.imul(B, q)),
          (n = ((n = Math.imul(B, D)) + Math.imul(S, q)) | 0),
          (o = Math.imul(S, D)),
          (i = (i + Math.imul(A, G)) | 0),
          (n = ((n = (n + Math.imul(A, z)) | 0) + Math.imul(_, G)) | 0),
          (o = (o + Math.imul(_, z)) | 0),
          (i = (i + Math.imul(b, V)) | 0),
          (n = ((n = (n + Math.imul(b, J)) | 0) + Math.imul(M, V)) | 0),
          (o = (o + Math.imul(M, J)) | 0),
          (i = (i + Math.imul(g, H)) | 0),
          (n = ((n = (n + Math.imul(g, K)) | 0) + Math.imul(v, H)) | 0),
          (o = (o + Math.imul(v, K)) | 0),
          (i = (i + Math.imul(y, Q)) | 0),
          (n = ((n = (n + Math.imul(y, tt)) | 0) + Math.imul(m, Q)) | 0),
          (o = (o + Math.imul(m, tt)) | 0),
          (i = (i + Math.imul(l, te)) | 0);
        var tM =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(l, ti)) | 0) + Math.imul(p, te)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, ti)) | 0) + (n >>> 13)) | 0) +
            (tM >>> 26)) |
          0),
          (tM &= 0x3ffffff),
          (i = Math.imul(O, q)),
          (n = ((n = Math.imul(O, D)) + Math.imul(U, q)) | 0),
          (o = Math.imul(U, D)),
          (i = (i + Math.imul(B, G)) | 0),
          (n = ((n = (n + Math.imul(B, z)) | 0) + Math.imul(S, G)) | 0),
          (o = (o + Math.imul(S, z)) | 0),
          (i = (i + Math.imul(A, V)) | 0),
          (n = ((n = (n + Math.imul(A, J)) | 0) + Math.imul(_, V)) | 0),
          (o = (o + Math.imul(_, J)) | 0),
          (i = (i + Math.imul(b, H)) | 0),
          (n = ((n = (n + Math.imul(b, K)) | 0) + Math.imul(M, H)) | 0),
          (o = (o + Math.imul(M, K)) | 0),
          (i = (i + Math.imul(g, Q)) | 0),
          (n = ((n = (n + Math.imul(g, tt)) | 0) + Math.imul(v, Q)) | 0),
          (o = (o + Math.imul(v, tt)) | 0),
          (i = (i + Math.imul(y, te)) | 0),
          (n = ((n = (n + Math.imul(y, ti)) | 0) + Math.imul(m, te)) | 0),
          (o = (o + Math.imul(m, ti)) | 0),
          (i = (i + Math.imul(l, to)) | 0);
        var tx =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(l, tf)) | 0) + Math.imul(p, to)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, tf)) | 0) + (n >>> 13)) | 0) +
            (tx >>> 26)) |
          0),
          (tx &= 0x3ffffff),
          (i = Math.imul(P, q)),
          (n = ((n = Math.imul(P, D)) + Math.imul(T, q)) | 0),
          (o = Math.imul(T, D)),
          (i = (i + Math.imul(O, G)) | 0),
          (n = ((n = (n + Math.imul(O, z)) | 0) + Math.imul(U, G)) | 0),
          (o = (o + Math.imul(U, z)) | 0),
          (i = (i + Math.imul(B, V)) | 0),
          (n = ((n = (n + Math.imul(B, J)) | 0) + Math.imul(S, V)) | 0),
          (o = (o + Math.imul(S, J)) | 0),
          (i = (i + Math.imul(A, H)) | 0),
          (n = ((n = (n + Math.imul(A, K)) | 0) + Math.imul(_, H)) | 0),
          (o = (o + Math.imul(_, K)) | 0),
          (i = (i + Math.imul(b, Q)) | 0),
          (n = ((n = (n + Math.imul(b, tt)) | 0) + Math.imul(M, Q)) | 0),
          (o = (o + Math.imul(M, tt)) | 0),
          (i = (i + Math.imul(g, te)) | 0),
          (n = ((n = (n + Math.imul(g, ti)) | 0) + Math.imul(v, te)) | 0),
          (o = (o + Math.imul(v, ti)) | 0),
          (i = (i + Math.imul(y, to)) | 0),
          (n = ((n = (n + Math.imul(y, tf)) | 0) + Math.imul(m, to)) | 0),
          (o = (o + Math.imul(m, tf)) | 0),
          (i = (i + Math.imul(l, th)) | 0);
        var tA =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(l, tu)) | 0) + Math.imul(p, th)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, tu)) | 0) + (n >>> 13)) | 0) +
            (tA >>> 26)) |
          0),
          (tA &= 0x3ffffff),
          (i = Math.imul(N, q)),
          (n = ((n = Math.imul(N, D)) + Math.imul(k, q)) | 0),
          (o = Math.imul(k, D)),
          (i = (i + Math.imul(P, G)) | 0),
          (n = ((n = (n + Math.imul(P, z)) | 0) + Math.imul(T, G)) | 0),
          (o = (o + Math.imul(T, z)) | 0),
          (i = (i + Math.imul(O, V)) | 0),
          (n = ((n = (n + Math.imul(O, J)) | 0) + Math.imul(U, V)) | 0),
          (o = (o + Math.imul(U, J)) | 0),
          (i = (i + Math.imul(B, H)) | 0),
          (n = ((n = (n + Math.imul(B, K)) | 0) + Math.imul(S, H)) | 0),
          (o = (o + Math.imul(S, K)) | 0),
          (i = (i + Math.imul(A, Q)) | 0),
          (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(_, Q)) | 0),
          (o = (o + Math.imul(_, tt)) | 0),
          (i = (i + Math.imul(b, te)) | 0),
          (n = ((n = (n + Math.imul(b, ti)) | 0) + Math.imul(M, te)) | 0),
          (o = (o + Math.imul(M, ti)) | 0),
          (i = (i + Math.imul(g, to)) | 0),
          (n = ((n = (n + Math.imul(g, tf)) | 0) + Math.imul(v, to)) | 0),
          (o = (o + Math.imul(v, tf)) | 0),
          (i = (i + Math.imul(y, th)) | 0),
          (n = ((n = (n + Math.imul(y, tu)) | 0) + Math.imul(m, th)) | 0),
          (o = (o + Math.imul(m, tu)) | 0),
          (i = (i + Math.imul(l, tl)) | 0);
        var t_ =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(l, tp)) | 0) + Math.imul(p, tl)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, tp)) | 0) + (n >>> 13)) | 0) +
            (t_ >>> 26)) |
          0),
          (t_ &= 0x3ffffff),
          (i = Math.imul(C, q)),
          (n = ((n = Math.imul(C, D)) + Math.imul(F, q)) | 0),
          (o = Math.imul(F, D)),
          (i = (i + Math.imul(N, G)) | 0),
          (n = ((n = (n + Math.imul(N, z)) | 0) + Math.imul(k, G)) | 0),
          (o = (o + Math.imul(k, z)) | 0),
          (i = (i + Math.imul(P, V)) | 0),
          (n = ((n = (n + Math.imul(P, J)) | 0) + Math.imul(T, V)) | 0),
          (o = (o + Math.imul(T, J)) | 0),
          (i = (i + Math.imul(O, H)) | 0),
          (n = ((n = (n + Math.imul(O, K)) | 0) + Math.imul(U, H)) | 0),
          (o = (o + Math.imul(U, K)) | 0),
          (i = (i + Math.imul(B, Q)) | 0),
          (n = ((n = (n + Math.imul(B, tt)) | 0) + Math.imul(S, Q)) | 0),
          (o = (o + Math.imul(S, tt)) | 0),
          (i = (i + Math.imul(A, te)) | 0),
          (n = ((n = (n + Math.imul(A, ti)) | 0) + Math.imul(_, te)) | 0),
          (o = (o + Math.imul(_, ti)) | 0),
          (i = (i + Math.imul(b, to)) | 0),
          (n = ((n = (n + Math.imul(b, tf)) | 0) + Math.imul(M, to)) | 0),
          (o = (o + Math.imul(M, tf)) | 0),
          (i = (i + Math.imul(g, th)) | 0),
          (n = ((n = (n + Math.imul(g, tu)) | 0) + Math.imul(v, th)) | 0),
          (o = (o + Math.imul(v, tu)) | 0),
          (i = (i + Math.imul(y, tl)) | 0),
          (n = ((n = (n + Math.imul(y, tp)) | 0) + Math.imul(m, tl)) | 0),
          (o = (o + Math.imul(m, tp)) | 0),
          (i = (i + Math.imul(l, ty)) | 0);
        var tE =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(l, tm)) | 0) + Math.imul(p, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(p, tm)) | 0) + (n >>> 13)) | 0) +
            (tE >>> 26)) |
          0),
          (tE &= 0x3ffffff),
          (i = Math.imul(C, G)),
          (n = ((n = Math.imul(C, z)) + Math.imul(F, G)) | 0),
          (o = Math.imul(F, z)),
          (i = (i + Math.imul(N, V)) | 0),
          (n = ((n = (n + Math.imul(N, J)) | 0) + Math.imul(k, V)) | 0),
          (o = (o + Math.imul(k, J)) | 0),
          (i = (i + Math.imul(P, H)) | 0),
          (n = ((n = (n + Math.imul(P, K)) | 0) + Math.imul(T, H)) | 0),
          (o = (o + Math.imul(T, K)) | 0),
          (i = (i + Math.imul(O, Q)) | 0),
          (n = ((n = (n + Math.imul(O, tt)) | 0) + Math.imul(U, Q)) | 0),
          (o = (o + Math.imul(U, tt)) | 0),
          (i = (i + Math.imul(B, te)) | 0),
          (n = ((n = (n + Math.imul(B, ti)) | 0) + Math.imul(S, te)) | 0),
          (o = (o + Math.imul(S, ti)) | 0),
          (i = (i + Math.imul(A, to)) | 0),
          (n = ((n = (n + Math.imul(A, tf)) | 0) + Math.imul(_, to)) | 0),
          (o = (o + Math.imul(_, tf)) | 0),
          (i = (i + Math.imul(b, th)) | 0),
          (n = ((n = (n + Math.imul(b, tu)) | 0) + Math.imul(M, th)) | 0),
          (o = (o + Math.imul(M, tu)) | 0),
          (i = (i + Math.imul(g, tl)) | 0),
          (n = ((n = (n + Math.imul(g, tp)) | 0) + Math.imul(v, tl)) | 0),
          (o = (o + Math.imul(v, tp)) | 0),
          (i = (i + Math.imul(y, ty)) | 0);
        var tB =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(y, tm)) | 0) + Math.imul(m, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(m, tm)) | 0) + (n >>> 13)) | 0) +
            (tB >>> 26)) |
          0),
          (tB &= 0x3ffffff),
          (i = Math.imul(C, V)),
          (n = ((n = Math.imul(C, J)) + Math.imul(F, V)) | 0),
          (o = Math.imul(F, J)),
          (i = (i + Math.imul(N, H)) | 0),
          (n = ((n = (n + Math.imul(N, K)) | 0) + Math.imul(k, H)) | 0),
          (o = (o + Math.imul(k, K)) | 0),
          (i = (i + Math.imul(P, Q)) | 0),
          (n = ((n = (n + Math.imul(P, tt)) | 0) + Math.imul(T, Q)) | 0),
          (o = (o + Math.imul(T, tt)) | 0),
          (i = (i + Math.imul(O, te)) | 0),
          (n = ((n = (n + Math.imul(O, ti)) | 0) + Math.imul(U, te)) | 0),
          (o = (o + Math.imul(U, ti)) | 0),
          (i = (i + Math.imul(B, to)) | 0),
          (n = ((n = (n + Math.imul(B, tf)) | 0) + Math.imul(S, to)) | 0),
          (o = (o + Math.imul(S, tf)) | 0),
          (i = (i + Math.imul(A, th)) | 0),
          (n = ((n = (n + Math.imul(A, tu)) | 0) + Math.imul(_, th)) | 0),
          (o = (o + Math.imul(_, tu)) | 0),
          (i = (i + Math.imul(b, tl)) | 0),
          (n = ((n = (n + Math.imul(b, tp)) | 0) + Math.imul(M, tl)) | 0),
          (o = (o + Math.imul(M, tp)) | 0),
          (i = (i + Math.imul(g, ty)) | 0);
        var tS =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(g, tm)) | 0) + Math.imul(v, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(v, tm)) | 0) + (n >>> 13)) | 0) +
            (tS >>> 26)) |
          0),
          (tS &= 0x3ffffff),
          (i = Math.imul(C, H)),
          (n = ((n = Math.imul(C, K)) + Math.imul(F, H)) | 0),
          (o = Math.imul(F, K)),
          (i = (i + Math.imul(N, Q)) | 0),
          (n = ((n = (n + Math.imul(N, tt)) | 0) + Math.imul(k, Q)) | 0),
          (o = (o + Math.imul(k, tt)) | 0),
          (i = (i + Math.imul(P, te)) | 0),
          (n = ((n = (n + Math.imul(P, ti)) | 0) + Math.imul(T, te)) | 0),
          (o = (o + Math.imul(T, ti)) | 0),
          (i = (i + Math.imul(O, to)) | 0),
          (n = ((n = (n + Math.imul(O, tf)) | 0) + Math.imul(U, to)) | 0),
          (o = (o + Math.imul(U, tf)) | 0),
          (i = (i + Math.imul(B, th)) | 0),
          (n = ((n = (n + Math.imul(B, tu)) | 0) + Math.imul(S, th)) | 0),
          (o = (o + Math.imul(S, tu)) | 0),
          (i = (i + Math.imul(A, tl)) | 0),
          (n = ((n = (n + Math.imul(A, tp)) | 0) + Math.imul(_, tl)) | 0),
          (o = (o + Math.imul(_, tp)) | 0),
          (i = (i + Math.imul(b, ty)) | 0);
        var tI =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(b, tm)) | 0) + Math.imul(M, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(M, tm)) | 0) + (n >>> 13)) | 0) +
            (tI >>> 26)) |
          0),
          (tI &= 0x3ffffff),
          (i = Math.imul(C, Q)),
          (n = ((n = Math.imul(C, tt)) + Math.imul(F, Q)) | 0),
          (o = Math.imul(F, tt)),
          (i = (i + Math.imul(N, te)) | 0),
          (n = ((n = (n + Math.imul(N, ti)) | 0) + Math.imul(k, te)) | 0),
          (o = (o + Math.imul(k, ti)) | 0),
          (i = (i + Math.imul(P, to)) | 0),
          (n = ((n = (n + Math.imul(P, tf)) | 0) + Math.imul(T, to)) | 0),
          (o = (o + Math.imul(T, tf)) | 0),
          (i = (i + Math.imul(O, th)) | 0),
          (n = ((n = (n + Math.imul(O, tu)) | 0) + Math.imul(U, th)) | 0),
          (o = (o + Math.imul(U, tu)) | 0),
          (i = (i + Math.imul(B, tl)) | 0),
          (n = ((n = (n + Math.imul(B, tp)) | 0) + Math.imul(S, tl)) | 0),
          (o = (o + Math.imul(S, tp)) | 0),
          (i = (i + Math.imul(A, ty)) | 0);
        var tO =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(A, tm)) | 0) + Math.imul(_, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(_, tm)) | 0) + (n >>> 13)) | 0) +
            (tO >>> 26)) |
          0),
          (tO &= 0x3ffffff),
          (i = Math.imul(C, te)),
          (n = ((n = Math.imul(C, ti)) + Math.imul(F, te)) | 0),
          (o = Math.imul(F, ti)),
          (i = (i + Math.imul(N, to)) | 0),
          (n = ((n = (n + Math.imul(N, tf)) | 0) + Math.imul(k, to)) | 0),
          (o = (o + Math.imul(k, tf)) | 0),
          (i = (i + Math.imul(P, th)) | 0),
          (n = ((n = (n + Math.imul(P, tu)) | 0) + Math.imul(T, th)) | 0),
          (o = (o + Math.imul(T, tu)) | 0),
          (i = (i + Math.imul(O, tl)) | 0),
          (n = ((n = (n + Math.imul(O, tp)) | 0) + Math.imul(U, tl)) | 0),
          (o = (o + Math.imul(U, tp)) | 0),
          (i = (i + Math.imul(B, ty)) | 0);
        var tU =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(B, tm)) | 0) + Math.imul(S, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(S, tm)) | 0) + (n >>> 13)) | 0) +
            (tU >>> 26)) |
          0),
          (tU &= 0x3ffffff),
          (i = Math.imul(C, to)),
          (n = ((n = Math.imul(C, tf)) + Math.imul(F, to)) | 0),
          (o = Math.imul(F, tf)),
          (i = (i + Math.imul(N, th)) | 0),
          (n = ((n = (n + Math.imul(N, tu)) | 0) + Math.imul(k, th)) | 0),
          (o = (o + Math.imul(k, tu)) | 0),
          (i = (i + Math.imul(P, tl)) | 0),
          (n = ((n = (n + Math.imul(P, tp)) | 0) + Math.imul(T, tl)) | 0),
          (o = (o + Math.imul(T, tp)) | 0),
          (i = (i + Math.imul(O, ty)) | 0);
        var tR =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(O, tm)) | 0) + Math.imul(U, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(U, tm)) | 0) + (n >>> 13)) | 0) +
            (tR >>> 26)) |
          0),
          (tR &= 0x3ffffff),
          (i = Math.imul(C, th)),
          (n = ((n = Math.imul(C, tu)) + Math.imul(F, th)) | 0),
          (o = Math.imul(F, tu)),
          (i = (i + Math.imul(N, tl)) | 0),
          (n = ((n = (n + Math.imul(N, tp)) | 0) + Math.imul(k, tl)) | 0),
          (o = (o + Math.imul(k, tp)) | 0),
          (i = (i + Math.imul(P, ty)) | 0);
        var tP =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(P, tm)) | 0) + Math.imul(T, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(T, tm)) | 0) + (n >>> 13)) | 0) +
            (tP >>> 26)) |
          0),
          (tP &= 0x3ffffff),
          (i = Math.imul(C, tl)),
          (n = ((n = Math.imul(C, tp)) + Math.imul(F, tl)) | 0),
          (o = Math.imul(F, tp)),
          (i = (i + Math.imul(N, ty)) | 0);
        var tT =
          (((u + i) | 0) +
            ((8191 &
              (n =
                ((n = (n + Math.imul(N, tm)) | 0) + Math.imul(k, ty)) | 0)) <<
              13)) |
          0;
        (u =
          ((((o = (o + Math.imul(k, tm)) | 0) + (n >>> 13)) | 0) +
            (tT >>> 26)) |
          0),
          (tT &= 0x3ffffff),
          (i = Math.imul(C, ty));
        var tj =
          (((u + i) | 0) +
            ((8191 & (n = ((n = Math.imul(C, tm)) + Math.imul(F, ty)) | 0)) <<
              13)) |
          0;
        return (
          (u = ((((o = Math.imul(F, tm)) + (n >>> 13)) | 0) + (tj >>> 26)) | 0),
          (tj &= 0x3ffffff),
          (h[0] = td),
          (h[1] = tg),
          (h[2] = tv),
          (h[3] = tw),
          (h[4] = tb),
          (h[5] = tM),
          (h[6] = tx),
          (h[7] = tA),
          (h[8] = t_),
          (h[9] = tE),
          (h[10] = tB),
          (h[11] = tS),
          (h[12] = tI),
          (h[13] = tO),
          (h[14] = tU),
          (h[15] = tR),
          (h[16] = tP),
          (h[17] = tT),
          (h[18] = tj),
          0 !== u && ((h[19] = u), e.length++),
          e
        );
      };
      function d(t, r, e) {
        (e.negative = r.negative ^ t.negative),
          (e.length = t.length + r.length);
        for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
          var f = n;
          n = 0;
          for (
            var s = 0x3ffffff & i,
              h = Math.min(o, r.length - 1),
              u = Math.max(0, o - t.length + 1);
            u <= h;
            u++
          ) {
            var a = o - u,
              l = (0 | t.words[a]) * (0 | r.words[u]),
              p = 0x3ffffff & l;
            (f = (f + ((l / 0x4000000) | 0)) | 0),
              (s = 0x3ffffff & (p = (p + s) | 0)),
              (n += (f = (f + (p >>> 26)) | 0) >>> 26),
              (f &= 0x3ffffff);
          }
          (e.words[o] = s), (i = f), (f = n);
        }
        return 0 !== i ? (e.words[o] = i) : e.length--, e._strip();
      }
      function g(t, r) {
        (this.x = t), (this.y = r);
      }
      Math.imul || (m = y),
        (n.prototype.mulTo = function (t, r) {
          var e,
            i = this.length + t.length;
          return (
            10 === this.length && 10 === t.length
              ? (e = m(this, t, r))
              : i < 63
              ? (e = y(this, t, r))
              : (e = d(this, t, r)),
            e
          );
        }),
        (g.prototype.makeRBT = function (t) {
          for (
            var r = Array(t), e = n.prototype._countBits(t) - 1, i = 0;
            i < t;
            i++
          )
            r[i] = this.revBin(i, e, t);
          return r;
        }),
        (g.prototype.revBin = function (t, r, e) {
          if (0 === t || t === e - 1) return t;
          for (var i = 0, n = 0; n < r; n++)
            (i |= (1 & t) << (r - n - 1)), (t >>= 1);
          return i;
        }),
        (g.prototype.permute = function (t, r, e, i, n, o) {
          for (var f = 0; f < o; f++) (i[f] = r[t[f]]), (n[f] = e[t[f]]);
        }),
        (g.prototype.transform = function (t, r, e, i, n, o) {
          this.permute(o, t, r, e, i, n);
          for (var f = 1; f < n; f <<= 1)
            for (
              var s = f << 1,
                h = Math.cos((2 * Math.PI) / s),
                u = Math.sin((2 * Math.PI) / s),
                a = 0;
              a < n;
              a += s
            )
              for (var l = h, p = u, c = 0; c < f; c++) {
                var y = e[a + c],
                  m = i[a + c],
                  d = e[a + c + f],
                  g = i[a + c + f],
                  v = l * d - p * g;
                (g = l * g + p * d),
                  (d = v),
                  (e[a + c] = y + d),
                  (i[a + c] = m + g),
                  (e[a + c + f] = y - d),
                  (i[a + c + f] = m - g),
                  c !== s &&
                    ((v = h * l - u * p), (p = h * p + u * l), (l = v));
              }
        }),
        (g.prototype.guessLen13b = function (t, r) {
          var e = 1 | Math.max(r, t),
            i = 1 & e,
            n = 0;
          for (e = (e / 2) | 0; e; e >>>= 1) n++;
          return 1 << (n + 1 + i);
        }),
        (g.prototype.conjugate = function (t, r, e) {
          if (!(e <= 1))
            for (var i = 0; i < e / 2; i++) {
              var n = t[i];
              (t[i] = t[e - i - 1]),
                (t[e - i - 1] = n),
                (n = r[i]),
                (r[i] = -r[e - i - 1]),
                (r[e - i - 1] = -n);
            }
        }),
        (g.prototype.normalize13b = function (t, r) {
          for (var e = 0, i = 0; i < r / 2; i++) {
            var n =
              8192 * Math.round(t[2 * i + 1] / r) +
              Math.round(t[2 * i] / r) +
              e;
            (t[i] = 0x3ffffff & n),
              (e = n < 0x4000000 ? 0 : (n / 0x4000000) | 0);
          }
          return t;
        }),
        (g.prototype.convert13b = function (t, r, i, n) {
          for (var o = 0, f = 0; f < r; f++)
            (o += 0 | t[f]),
              (i[2 * f] = 8191 & o),
              (o >>>= 13),
              (i[2 * f + 1] = 8191 & o),
              (o >>>= 13);
          for (f = 2 * r; f < n; ++f) i[f] = 0;
          e(0 === o), e((-8192 & o) == 0);
        }),
        (g.prototype.stub = function (t) {
          for (var r = Array(t), e = 0; e < t; e++) r[e] = 0;
          return r;
        }),
        (g.prototype.mulp = function (t, r, e) {
          var i = 2 * this.guessLen13b(t.length, r.length),
            n = this.makeRBT(i),
            o = this.stub(i),
            f = Array(i),
            s = Array(i),
            h = Array(i),
            u = Array(i),
            a = Array(i),
            l = Array(i),
            p = e.words;
          (p.length = i),
            this.convert13b(t.words, t.length, f, i),
            this.convert13b(r.words, r.length, u, i),
            this.transform(f, o, s, h, i, n),
            this.transform(u, o, a, l, i, n);
          for (var c = 0; c < i; c++) {
            var y = s[c] * a[c] - h[c] * l[c];
            (h[c] = s[c] * l[c] + h[c] * a[c]), (s[c] = y);
          }
          return (
            this.conjugate(s, h, i),
            this.transform(s, h, p, o, i, n),
            this.conjugate(p, o, i),
            this.normalize13b(p, i),
            (e.negative = t.negative ^ r.negative),
            (e.length = t.length + r.length),
            e._strip()
          );
        }),
        (n.prototype.mul = function (t) {
          var r = new n(null);
          return (r.words = Array(this.length + t.length)), this.mulTo(t, r);
        }),
        (n.prototype.mulf = function (t) {
          var r = new n(null);
          return (r.words = Array(this.length + t.length)), d(this, t, r);
        }),
        (n.prototype.imul = function (t) {
          return this.clone().mulTo(t, this);
        }),
        (n.prototype.imuln = function (t) {
          var r = t < 0;
          r && (t = -t), e("number" == typeof t), e(t < 0x4000000);
          for (var i = 0, n = 0; n < this.length; n++) {
            var o = (0 | this.words[n]) * t,
              f = (0x3ffffff & o) + (0x3ffffff & i);
            (i >>= 26),
              (i += ((o / 0x4000000) | 0) + (f >>> 26)),
              (this.words[n] = 0x3ffffff & f);
          }
          return (
            0 !== i && ((this.words[n] = i), this.length++),
            (this.length = 0 === t ? 1 : this.length),
            r ? this.ineg() : this
          );
        }),
        (n.prototype.muln = function (t) {
          return this.clone().imuln(t);
        }),
        (n.prototype.sqr = function () {
          return this.mul(this);
        }),
        (n.prototype.isqr = function () {
          return this.imul(this.clone());
        }),
        (n.prototype.pow = function (t) {
          var r = (function (t) {
            for (var r = Array(t.bitLength()), e = 0; e < r.length; e++) {
              var i = (e / 26) | 0,
                n = e % 26;
              r[e] = (t.words[i] >>> n) & 1;
            }
            return r;
          })(t);
          if (0 === r.length) return new n(1);
          for (
            var e = this, i = 0;
            i < r.length && 0 === r[i];
            i++, e = e.sqr()
          );
          if (++i < r.length)
            for (var o = e.sqr(); i < r.length; i++, o = o.sqr())
              0 !== r[i] && (e = e.mul(o));
          return e;
        }),
        (n.prototype.iushln = function (t) {
          e("number" == typeof t && t >= 0);
          var r,
            i = t % 26,
            n = (t - i) / 26,
            o = (0x3ffffff >>> (26 - i)) << (26 - i);
          if (0 !== i) {
            var f = 0;
            for (r = 0; r < this.length; r++) {
              var s = this.words[r] & o,
                h = ((0 | this.words[r]) - s) << i;
              (this.words[r] = h | f), (f = s >>> (26 - i));
            }
            f && ((this.words[r] = f), this.length++);
          }
          if (0 !== n) {
            for (r = this.length - 1; r >= 0; r--)
              this.words[r + n] = this.words[r];
            for (r = 0; r < n; r++) this.words[r] = 0;
            this.length += n;
          }
          return this._strip();
        }),
        (n.prototype.ishln = function (t) {
          return e(0 === this.negative), this.iushln(t);
        }),
        (n.prototype.iushrn = function (t, r, i) {
          e("number" == typeof t && t >= 0);
          var n = r ? (r - (r % 26)) / 26 : 0,
            o = t % 26,
            f = Math.min((t - o) / 26, this.length),
            s = 0x3ffffff ^ ((0x3ffffff >>> o) << o);
          if (((n -= f), (n = Math.max(0, n)), i)) {
            for (var h = 0; h < f; h++) i.words[h] = this.words[h];
            i.length = f;
          }
          if (0 === f);
          else if (this.length > f)
            for (this.length -= f, h = 0; h < this.length; h++)
              this.words[h] = this.words[h + f];
          else (this.words[0] = 0), (this.length = 1);
          var u = 0;
          for (h = this.length - 1; h >= 0 && (0 !== u || h >= n); h--) {
            var a = 0 | this.words[h];
            (this.words[h] = (u << (26 - o)) | (a >>> o)), (u = a & s);
          }
          return (
            i && 0 !== u && (i.words[i.length++] = u),
            0 === this.length && ((this.words[0] = 0), (this.length = 1)),
            this._strip()
          );
        }),
        (n.prototype.ishrn = function (t, r, i) {
          return e(0 === this.negative), this.iushrn(t, r, i);
        }),
        (n.prototype.shln = function (t) {
          return this.clone().ishln(t);
        }),
        (n.prototype.ushln = function (t) {
          return this.clone().iushln(t);
        }),
        (n.prototype.shrn = function (t) {
          return this.clone().ishrn(t);
        }),
        (n.prototype.ushrn = function (t) {
          return this.clone().iushrn(t);
        }),
        (n.prototype.testn = function (t) {
          e("number" == typeof t && t >= 0);
          var r = t % 26,
            i = (t - r) / 26;
          return !(this.length <= i) && !!(this.words[i] & (1 << r));
        }),
        (n.prototype.imaskn = function (t) {
          e("number" == typeof t && t >= 0);
          var r = t % 26,
            i = (t - r) / 26;
          return (e(
            0 === this.negative,
            "imaskn works only with positive numbers"
          ),
          this.length <= i)
            ? this
            : (0 !== r && i++,
              (this.length = Math.min(i, this.length)),
              0 !== r &&
                (this.words[this.length - 1] &=
                  0x3ffffff ^ ((0x3ffffff >>> r) << r)),
              this._strip());
        }),
        (n.prototype.maskn = function (t) {
          return this.clone().imaskn(t);
        }),
        (n.prototype.iaddn = function (t) {
          return (e("number" == typeof t), e(t < 0x4000000), t < 0)
            ? this.isubn(-t)
            : 0 !== this.negative
            ? (1 === this.length && (0 | this.words[0]) <= t
                ? ((this.words[0] = t - (0 | this.words[0])),
                  (this.negative = 0))
                : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
              this)
            : this._iaddn(t);
        }),
        (n.prototype._iaddn = function (t) {
          this.words[0] += t;
          for (var r = 0; r < this.length && this.words[r] >= 0x4000000; r++)
            (this.words[r] -= 0x4000000),
              r === this.length - 1
                ? (this.words[r + 1] = 1)
                : this.words[r + 1]++;
          return (this.length = Math.max(this.length, r + 1)), this;
        }),
        (n.prototype.isubn = function (t) {
          if ((e("number" == typeof t), e(t < 0x4000000), t < 0))
            return this.iaddn(-t);
          if (0 !== this.negative)
            return (
              (this.negative = 0), this.iaddn(t), (this.negative = 1), this
            );
          if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
            (this.words[0] = -this.words[0]), (this.negative = 1);
          else
            for (var r = 0; r < this.length && this.words[r] < 0; r++)
              (this.words[r] += 0x4000000), (this.words[r + 1] -= 1);
          return this._strip();
        }),
        (n.prototype.addn = function (t) {
          return this.clone().iaddn(t);
        }),
        (n.prototype.subn = function (t) {
          return this.clone().isubn(t);
        }),
        (n.prototype.iabs = function () {
          return (this.negative = 0), this;
        }),
        (n.prototype.abs = function () {
          return this.clone().iabs();
        }),
        (n.prototype._ishlnsubmul = function (t, r, i) {
          var n,
            o,
            f = t.length + i;
          this._expand(f);
          var s = 0;
          for (n = 0; n < t.length; n++) {
            o = (0 | this.words[n + i]) + s;
            var h = (0 | t.words[n]) * r;
            (o -= 0x3ffffff & h),
              (s = (o >> 26) - ((h / 0x4000000) | 0)),
              (this.words[n + i] = 0x3ffffff & o);
          }
          for (; n < this.length - i; n++)
            (s = (o = (0 | this.words[n + i]) + s) >> 26),
              (this.words[n + i] = 0x3ffffff & o);
          if (0 === s) return this._strip();
          for (e(-1 === s), s = 0, n = 0; n < this.length; n++)
            (s = (o = -(0 | this.words[n]) + s) >> 26),
              (this.words[n] = 0x3ffffff & o);
          return (this.negative = 1), this._strip();
        }),
        (n.prototype._wordDiv = function (t, r) {
          var e,
            i = this.length - t.length,
            o = this.clone(),
            f = t,
            s = 0 | f.words[f.length - 1];
          0 != (i = 26 - this._countBits(s)) &&
            ((f = f.ushln(i)), o.iushln(i), (s = 0 | f.words[f.length - 1]));
          var h = o.length - f.length;
          if ("mod" !== r) {
            ((e = new n(null)).length = h + 1), (e.words = Array(e.length));
            for (var u = 0; u < e.length; u++) e.words[u] = 0;
          }
          var a = o.clone()._ishlnsubmul(f, 1, h);
          0 === a.negative && ((o = a), e && (e.words[h] = 1));
          for (var l = h - 1; l >= 0; l--) {
            var p =
              (0 | o.words[f.length + l]) * 0x4000000 +
              (0 | o.words[f.length + l - 1]);
            for (
              p = Math.min((p / s) | 0, 0x3ffffff), o._ishlnsubmul(f, p, l);
              0 !== o.negative;

            )
              p--,
                (o.negative = 0),
                o._ishlnsubmul(f, 1, l),
                o.isZero() || (o.negative ^= 1);
            e && (e.words[l] = p);
          }
          return (
            e && e._strip(),
            o._strip(),
            "div" !== r && 0 !== i && o.iushrn(i),
            { div: e || null, mod: o }
          );
        }),
        (n.prototype.divmod = function (t, r, i) {
          var o, f, s;
          return (e(!t.isZero()), this.isZero())
            ? { div: new n(0), mod: new n(0) }
            : 0 !== this.negative && 0 === t.negative
            ? ((s = this.neg().divmod(t, r)),
              "mod" !== r && (o = s.div.neg()),
              "div" !== r &&
                ((f = s.mod.neg()), i && 0 !== f.negative && f.iadd(t)),
              { div: o, mod: f })
            : 0 === this.negative && 0 !== t.negative
            ? ((s = this.divmod(t.neg(), r)),
              "mod" !== r && (o = s.div.neg()),
              { div: o, mod: s.mod })
            : (this.negative & t.negative) != 0
            ? ((s = this.neg().divmod(t.neg(), r)),
              "div" !== r &&
                ((f = s.mod.neg()), i && 0 !== f.negative && f.isub(t)),
              { div: s.div, mod: f })
            : t.length > this.length || 0 > this.cmp(t)
            ? { div: new n(0), mod: this }
            : 1 === t.length
            ? "div" === r
              ? { div: this.divn(t.words[0]), mod: null }
              : "mod" === r
              ? { div: null, mod: new n(this.modrn(t.words[0])) }
              : {
                  div: this.divn(t.words[0]),
                  mod: new n(this.modrn(t.words[0])),
                }
            : this._wordDiv(t, r);
        }),
        (n.prototype.div = function (t) {
          return this.divmod(t, "div", !1).div;
        }),
        (n.prototype.mod = function (t) {
          return this.divmod(t, "mod", !1).mod;
        }),
        (n.prototype.umod = function (t) {
          return this.divmod(t, "mod", !0).mod;
        }),
        (n.prototype.divRound = function (t) {
          var r = this.divmod(t);
          if (r.mod.isZero()) return r.div;
          var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
            i = t.ushrn(1),
            n = t.andln(1),
            o = e.cmp(i);
          return o < 0 || (1 === n && 0 === o)
            ? r.div
            : 0 !== r.div.negative
            ? r.div.isubn(1)
            : r.div.iaddn(1);
        }),
        (n.prototype.modrn = function (t) {
          var r = t < 0;
          r && (t = -t), e(t <= 0x3ffffff);
          for (var i = 0x4000000 % t, n = 0, o = this.length - 1; o >= 0; o--)
            n = (i * n + (0 | this.words[o])) % t;
          return r ? -n : n;
        }),
        (n.prototype.modn = function (t) {
          return this.modrn(t);
        }),
        (n.prototype.idivn = function (t) {
          var r = t < 0;
          r && (t = -t), e(t <= 0x3ffffff);
          for (var i = 0, n = this.length - 1; n >= 0; n--) {
            var o = (0 | this.words[n]) + 0x4000000 * i;
            (this.words[n] = (o / t) | 0), (i = o % t);
          }
          return this._strip(), r ? this.ineg() : this;
        }),
        (n.prototype.divn = function (t) {
          return this.clone().idivn(t);
        }),
        (n.prototype.egcd = function (t) {
          e(0 === t.negative), e(!t.isZero());
          var r = this,
            i = t.clone();
          r = 0 !== r.negative ? r.umod(t) : r.clone();
          for (
            var o = new n(1), f = new n(0), s = new n(0), h = new n(1), u = 0;
            r.isEven() && i.isEven();

          )
            r.iushrn(1), i.iushrn(1), ++u;
          for (var a = i.clone(), l = r.clone(); !r.isZero(); ) {
            for (
              var p = 0, c = 1;
              (r.words[0] & c) == 0 && p < 26;
              ++p, c <<= 1
            );
            if (p > 0)
              for (r.iushrn(p); p-- > 0; )
                (o.isOdd() || f.isOdd()) && (o.iadd(a), f.isub(l)),
                  o.iushrn(1),
                  f.iushrn(1);
            for (
              var y = 0, m = 1;
              (i.words[0] & m) == 0 && y < 26;
              ++y, m <<= 1
            );
            if (y > 0)
              for (i.iushrn(y); y-- > 0; )
                (s.isOdd() || h.isOdd()) && (s.iadd(a), h.isub(l)),
                  s.iushrn(1),
                  h.iushrn(1);
            r.cmp(i) >= 0
              ? (r.isub(i), o.isub(s), f.isub(h))
              : (i.isub(r), s.isub(o), h.isub(f));
          }
          return { a: s, b: h, gcd: i.iushln(u) };
        }),
        (n.prototype._invmp = function (t) {
          e(0 === t.negative), e(!t.isZero());
          var r,
            i = this,
            o = t.clone();
          i = 0 !== i.negative ? i.umod(t) : i.clone();
          for (
            var f = new n(1), s = new n(0), h = o.clone();
            i.cmpn(1) > 0 && o.cmpn(1) > 0;

          ) {
            for (
              var u = 0, a = 1;
              (i.words[0] & a) == 0 && u < 26;
              ++u, a <<= 1
            );
            if (u > 0)
              for (i.iushrn(u); u-- > 0; ) f.isOdd() && f.iadd(h), f.iushrn(1);
            for (
              var l = 0, p = 1;
              (o.words[0] & p) == 0 && l < 26;
              ++l, p <<= 1
            );
            if (l > 0)
              for (o.iushrn(l); l-- > 0; ) s.isOdd() && s.iadd(h), s.iushrn(1);
            i.cmp(o) >= 0 ? (i.isub(o), f.isub(s)) : (o.isub(i), s.isub(f));
          }
          return 0 > (r = 0 === i.cmpn(1) ? f : s).cmpn(0) && r.iadd(t), r;
        }),
        (n.prototype.gcd = function (t) {
          if (this.isZero()) return t.abs();
          if (t.isZero()) return this.abs();
          var r = this.clone(),
            e = t.clone();
          (r.negative = 0), (e.negative = 0);
          for (var i = 0; r.isEven() && e.isEven(); i++)
            r.iushrn(1), e.iushrn(1);
          for (;;) {
            for (; r.isEven(); ) r.iushrn(1);
            for (; e.isEven(); ) e.iushrn(1);
            var n = r.cmp(e);
            if (n < 0) {
              var o = r;
              (r = e), (e = o);
            } else if (0 === n || 0 === e.cmpn(1)) break;
            r.isub(e);
          }
          return e.iushln(i);
        }),
        (n.prototype.invm = function (t) {
          return this.egcd(t).a.umod(t);
        }),
        (n.prototype.isEven = function () {
          return (1 & this.words[0]) == 0;
        }),
        (n.prototype.isOdd = function () {
          return (1 & this.words[0]) == 1;
        }),
        (n.prototype.andln = function (t) {
          return this.words[0] & t;
        }),
        (n.prototype.bincn = function (t) {
          e("number" == typeof t);
          var r = t % 26,
            i = (t - r) / 26,
            n = 1 << r;
          if (this.length <= i)
            return this._expand(i + 1), (this.words[i] |= n), this;
          for (var o = n, f = i; 0 !== o && f < this.length; f++) {
            var s = 0 | this.words[f];
            (s += o), (o = s >>> 26), (s &= 0x3ffffff), (this.words[f] = s);
          }
          return 0 !== o && ((this.words[f] = o), this.length++), this;
        }),
        (n.prototype.isZero = function () {
          return 1 === this.length && 0 === this.words[0];
        }),
        (n.prototype.cmpn = function (t) {
          var r,
            i = t < 0;
          if (0 !== this.negative && !i) return -1;
          if (0 === this.negative && i) return 1;
          if ((this._strip(), this.length > 1)) r = 1;
          else {
            i && (t = -t), e(t <= 0x3ffffff, "Number is too big");
            var n = 0 | this.words[0];
            r = n === t ? 0 : n < t ? -1 : 1;
          }
          return 0 !== this.negative ? 0 | -r : r;
        }),
        (n.prototype.cmp = function (t) {
          if (0 !== this.negative && 0 === t.negative) return -1;
          if (0 === this.negative && 0 !== t.negative) return 1;
          var r = this.ucmp(t);
          return 0 !== this.negative ? 0 | -r : r;
        }),
        (n.prototype.ucmp = function (t) {
          if (this.length > t.length) return 1;
          if (this.length < t.length) return -1;
          for (var r = 0, e = this.length - 1; e >= 0; e--) {
            var i = 0 | this.words[e],
              n = 0 | t.words[e];
            if (i !== n) {
              i < n ? (r = -1) : i > n && (r = 1);
              break;
            }
          }
          return r;
        }),
        (n.prototype.gtn = function (t) {
          return 1 === this.cmpn(t);
        }),
        (n.prototype.gt = function (t) {
          return 1 === this.cmp(t);
        }),
        (n.prototype.gten = function (t) {
          return this.cmpn(t) >= 0;
        }),
        (n.prototype.gte = function (t) {
          return this.cmp(t) >= 0;
        }),
        (n.prototype.ltn = function (t) {
          return -1 === this.cmpn(t);
        }),
        (n.prototype.lt = function (t) {
          return -1 === this.cmp(t);
        }),
        (n.prototype.lten = function (t) {
          return 0 >= this.cmpn(t);
        }),
        (n.prototype.lte = function (t) {
          return 0 >= this.cmp(t);
        }),
        (n.prototype.eqn = function (t) {
          return 0 === this.cmpn(t);
        }),
        (n.prototype.eq = function (t) {
          return 0 === this.cmp(t);
        }),
        (n.red = function (t) {
          return new _(t);
        }),
        (n.prototype.toRed = function (t) {
          return (
            e(!this.red, "Already a number in reduction context"),
            e(0 === this.negative, "red works only with positives"),
            t.convertTo(this)._forceRed(t)
          );
        }),
        (n.prototype.fromRed = function () {
          return (
            e(this.red, "fromRed works only with numbers in reduction context"),
            this.red.convertFrom(this)
          );
        }),
        (n.prototype._forceRed = function (t) {
          return (this.red = t), this;
        }),
        (n.prototype.forceRed = function (t) {
          return (
            e(!this.red, "Already a number in reduction context"),
            this._forceRed(t)
          );
        }),
        (n.prototype.redAdd = function (t) {
          return (
            e(this.red, "redAdd works only with red numbers"),
            this.red.add(this, t)
          );
        }),
        (n.prototype.redIAdd = function (t) {
          return (
            e(this.red, "redIAdd works only with red numbers"),
            this.red.iadd(this, t)
          );
        }),
        (n.prototype.redSub = function (t) {
          return (
            e(this.red, "redSub works only with red numbers"),
            this.red.sub(this, t)
          );
        }),
        (n.prototype.redISub = function (t) {
          return (
            e(this.red, "redISub works only with red numbers"),
            this.red.isub(this, t)
          );
        }),
        (n.prototype.redShl = function (t) {
          return (
            e(this.red, "redShl works only with red numbers"),
            this.red.shl(this, t)
          );
        }),
        (n.prototype.redMul = function (t) {
          return (
            e(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, t),
            this.red.mul(this, t)
          );
        }),
        (n.prototype.redIMul = function (t) {
          return (
            e(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, t),
            this.red.imul(this, t)
          );
        }),
        (n.prototype.redSqr = function () {
          return (
            e(this.red, "redSqr works only with red numbers"),
            this.red._verify1(this),
            this.red.sqr(this)
          );
        }),
        (n.prototype.redISqr = function () {
          return (
            e(this.red, "redISqr works only with red numbers"),
            this.red._verify1(this),
            this.red.isqr(this)
          );
        }),
        (n.prototype.redSqrt = function () {
          return (
            e(this.red, "redSqrt works only with red numbers"),
            this.red._verify1(this),
            this.red.sqrt(this)
          );
        }),
        (n.prototype.redInvm = function () {
          return (
            e(this.red, "redInvm works only with red numbers"),
            this.red._verify1(this),
            this.red.invm(this)
          );
        }),
        (n.prototype.redNeg = function () {
          return (
            e(this.red, "redNeg works only with red numbers"),
            this.red._verify1(this),
            this.red.neg(this)
          );
        }),
        (n.prototype.redPow = function (t) {
          return (
            e(this.red && !t.red, "redPow(normalNum)"),
            this.red._verify1(this),
            this.red.pow(this, t)
          );
        });
      var v = { k256: null, p224: null, p192: null, p25519: null };
      function w(t, r) {
        (this.name = t),
          (this.p = new n(r, 16)),
          (this.n = this.p.bitLength()),
          (this.k = new n(1).iushln(this.n).isub(this.p)),
          (this.tmp = this._tmp());
      }
      function b() {
        w.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      function M() {
        w.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      function x() {
        w.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      function A() {
        w.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      function _(t) {
        if ("string" == typeof t) {
          var r = n._prime(t);
          (this.m = r.p), (this.prime = r);
        } else
          e(t.gtn(1), "modulus must be greater than 1"),
            (this.m = t),
            (this.prime = null);
      }
      function E(t) {
        _.call(this, t),
          (this.shift = this.m.bitLength()),
          this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
          (this.r = new n(1).iushln(this.shift)),
          (this.r2 = this.imod(this.r.sqr())),
          (this.rinv = this.r._invmp(this.m)),
          (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
          (this.minv = this.minv.umod(this.r)),
          (this.minv = this.r.sub(this.minv));
      }
      (w.prototype._tmp = function () {
        var t = new n(null);
        return (t.words = Array(Math.ceil(this.n / 13))), t;
      }),
        (w.prototype.ireduce = function (t) {
          var r,
            e = t;
          do
            this.split(e, this.tmp),
              (r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength());
          while (r > this.n);
          var i = r < this.n ? -1 : e.ucmp(this.p);
          return (
            0 === i
              ? ((e.words[0] = 0), (e.length = 1))
              : i > 0
              ? e.isub(this.p)
              : void 0 !== e.strip
              ? e.strip()
              : e._strip(),
            e
          );
        }),
        (w.prototype.split = function (t, r) {
          t.iushrn(this.n, 0, r);
        }),
        (w.prototype.imulK = function (t) {
          return t.imul(this.k);
        }),
        i(b, w),
        (b.prototype.split = function (t, r) {
          for (var e = Math.min(t.length, 9), i = 0; i < e; i++)
            r.words[i] = t.words[i];
          if (((r.length = e), t.length <= 9)) {
            (t.words[0] = 0), (t.length = 1);
            return;
          }
          var n = t.words[9];
          for (i = 10, r.words[r.length++] = 4194303 & n; i < t.length; i++) {
            var o = 0 | t.words[i];
            (t.words[i - 10] = ((4194303 & o) << 4) | (n >>> 22)), (n = o);
          }
          (n >>>= 22),
            (t.words[i - 10] = n),
            0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
        }),
        (b.prototype.imulK = function (t) {
          (t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2);
          for (var r = 0, e = 0; e < t.length; e++) {
            var i = 0 | t.words[e];
            (r += 977 * i),
              (t.words[e] = 0x3ffffff & r),
              (r = 64 * i + ((r / 0x4000000) | 0));
          }
          return (
            0 === t.words[t.length - 1] &&
              (t.length--, 0 === t.words[t.length - 1] && t.length--),
            t
          );
        }),
        i(M, w),
        i(x, w),
        i(A, w),
        (A.prototype.imulK = function (t) {
          for (var r = 0, e = 0; e < t.length; e++) {
            var i = (0 | t.words[e]) * 19 + r,
              n = 0x3ffffff & i;
            (i >>>= 26), (t.words[e] = n), (r = i);
          }
          return 0 !== r && (t.words[t.length++] = r), t;
        }),
        (n._prime = function (t) {
          var r;
          if (v[t]) return v[t];
          if ("k256" === t) r = new b();
          else if ("p224" === t) r = new M();
          else if ("p192" === t) r = new x();
          else if ("p25519" === t) r = new A();
          else throw Error("Unknown prime " + t);
          return (v[t] = r), r;
        }),
        (_.prototype._verify1 = function (t) {
          e(0 === t.negative, "red works only with positives"),
            e(t.red, "red works only with red numbers");
        }),
        (_.prototype._verify2 = function (t, r) {
          e((t.negative | r.negative) == 0, "red works only with positives"),
            e(t.red && t.red === r.red, "red works only with red numbers");
        }),
        (_.prototype.imod = function (t) {
          return this.prime
            ? this.prime.ireduce(t)._forceRed(this)
            : (h(t, t.umod(this.m)._forceRed(this)), t);
        }),
        (_.prototype.neg = function (t) {
          return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
        }),
        (_.prototype.add = function (t, r) {
          this._verify2(t, r);
          var e = t.add(r);
          return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
        }),
        (_.prototype.iadd = function (t, r) {
          this._verify2(t, r);
          var e = t.iadd(r);
          return e.cmp(this.m) >= 0 && e.isub(this.m), e;
        }),
        (_.prototype.sub = function (t, r) {
          this._verify2(t, r);
          var e = t.sub(r);
          return 0 > e.cmpn(0) && e.iadd(this.m), e._forceRed(this);
        }),
        (_.prototype.isub = function (t, r) {
          this._verify2(t, r);
          var e = t.isub(r);
          return 0 > e.cmpn(0) && e.iadd(this.m), e;
        }),
        (_.prototype.shl = function (t, r) {
          return this._verify1(t), this.imod(t.ushln(r));
        }),
        (_.prototype.imul = function (t, r) {
          return this._verify2(t, r), this.imod(t.imul(r));
        }),
        (_.prototype.mul = function (t, r) {
          return this._verify2(t, r), this.imod(t.mul(r));
        }),
        (_.prototype.isqr = function (t) {
          return this.imul(t, t.clone());
        }),
        (_.prototype.sqr = function (t) {
          return this.mul(t, t);
        }),
        (_.prototype.sqrt = function (t) {
          if (t.isZero()) return t.clone();
          var r = this.m.andln(3);
          if ((e(r % 2 == 1), 3 === r)) {
            var i = this.m.add(new n(1)).iushrn(2);
            return this.pow(t, i);
          }
          for (var o = this.m.subn(1), f = 0; !o.isZero() && 0 === o.andln(1); )
            f++, o.iushrn(1);
          e(!o.isZero());
          var s = new n(1).toRed(this),
            h = s.redNeg(),
            u = this.m.subn(1).iushrn(1),
            a = this.m.bitLength();
          for (a = new n(2 * a * a).toRed(this); 0 !== this.pow(a, u).cmp(h); )
            a.redIAdd(h);
          for (
            var l = this.pow(a, o),
              p = this.pow(t, o.addn(1).iushrn(1)),
              c = this.pow(t, o),
              y = f;
            0 !== c.cmp(s);

          ) {
            for (var m = c, d = 0; 0 !== m.cmp(s); d++) m = m.redSqr();
            e(d < y);
            var g = this.pow(l, new n(1).iushln(y - d - 1));
            (p = p.redMul(g)), (l = g.redSqr()), (c = c.redMul(l)), (y = d);
          }
          return p;
        }),
        (_.prototype.invm = function (t) {
          var r = t._invmp(this.m);
          return 0 !== r.negative
            ? ((r.negative = 0), this.imod(r).redNeg())
            : this.imod(r);
        }),
        (_.prototype.pow = function (t, r) {
          if (r.isZero()) return new n(1).toRed(this);
          if (0 === r.cmpn(1)) return t.clone();
          var e = Array(16);
          (e[0] = new n(1).toRed(this)), (e[1] = t);
          for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
          var o = e[0],
            f = 0,
            s = 0,
            h = r.bitLength() % 26;
          for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
            for (var u = r.words[i], a = h - 1; a >= 0; a--) {
              var l = (u >> a) & 1;
              if ((o !== e[0] && (o = this.sqr(o)), 0 === l && 0 === f)) {
                s = 0;
                continue;
              }
              (f <<= 1),
                (f |= l),
                (4 == ++s || (0 === i && 0 === a)) &&
                  ((o = this.mul(o, e[f])), (s = 0), (f = 0));
            }
            h = 26;
          }
          return o;
        }),
        (_.prototype.convertTo = function (t) {
          var r = t.umod(this.m);
          return r === t ? r.clone() : r;
        }),
        (_.prototype.convertFrom = function (t) {
          var r = t.clone();
          return (r.red = null), r;
        }),
        (n.mont = function (t) {
          return new E(t);
        }),
        i(E, _),
        (E.prototype.convertTo = function (t) {
          return this.imod(t.ushln(this.shift));
        }),
        (E.prototype.convertFrom = function (t) {
          var r = this.imod(t.mul(this.rinv));
          return (r.red = null), r;
        }),
        (E.prototype.imul = function (t, r) {
          if (t.isZero() || r.isZero())
            return (t.words[0] = 0), (t.length = 1), t;
          var e = t.imul(r),
            i = e
              .maskn(this.shift)
              .mul(this.minv)
              .imaskn(this.shift)
              .mul(this.m),
            n = e.isub(i).iushrn(this.shift),
            o = n;
          return (
            n.cmp(this.m) >= 0
              ? (o = n.isub(this.m))
              : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
            o._forceRed(this)
          );
        }),
        (E.prototype.mul = function (t, r) {
          if (t.isZero() || r.isZero()) return new n(0)._forceRed(this);
          var e = t.mul(r),
            i = e
              .maskn(this.shift)
              .mul(this.minv)
              .imaskn(this.shift)
              .mul(this.m),
            o = e.isub(i).iushrn(this.shift),
            f = o;
          return (
            o.cmp(this.m) >= 0
              ? (f = o.isub(this.m))
              : 0 > o.cmpn(0) && (f = o.iadd(this.m)),
            f._forceRed(this)
          );
        }),
        (E.prototype.invm = function (t) {
          return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
        });
    })(r, t.e);
  },
  242524,
  (t, r, e) => {
    var i = t.r(843943),
      n = i.Buffer;
    function o(t, r) {
      for (var e in t) r[e] = t[e];
    }
    function f(t, r, e) {
      return n(t, r, e);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (r.exports = i)
      : (o(i, e), (e.Buffer = f)),
      (f.prototype = Object.create(n.prototype)),
      o(n, f),
      (f.from = function (t, r, e) {
        if ("number" == typeof t)
          throw TypeError("Argument must not be a number");
        return n(t, r, e);
      }),
      (f.alloc = function (t, r, e) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        var i = n(t);
        return (
          void 0 !== r
            ? "string" == typeof e
              ? i.fill(r, e)
              : i.fill(r)
            : i.fill(0),
          i
        );
      }),
      (f.allocUnsafe = function (t) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        return n(t);
      }),
      (f.allocUnsafeSlow = function (t) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        return i.SlowBuffer(t);
      });
  },
  651739,
  (t, r, e) => {
    "use strict";
    r.exports = function () {
      if (
        "function" != typeof Symbol ||
        "function" != typeof Object.getOwnPropertySymbols
      )
        return !1;
      if ("symbol" == typeof Symbol.iterator) return !0;
      var t = {},
        r = Symbol("test"),
        e = Object(r);
      if (
        "string" == typeof r ||
        "[object Symbol]" !== Object.prototype.toString.call(r) ||
        "[object Symbol]" !== Object.prototype.toString.call(e)
      )
        return !1;
      for (var i in ((t[r] = 42), t)) return !1;
      if (
        ("function" == typeof Object.keys && 0 !== Object.keys(t).length) ||
        ("function" == typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(t).length)
      )
        return !1;
      var n = Object.getOwnPropertySymbols(t);
      if (
        1 !== n.length ||
        n[0] !== r ||
        !Object.prototype.propertyIsEnumerable.call(t, r)
      )
        return !1;
      if ("function" == typeof Object.getOwnPropertyDescriptor) {
        var o = Object.getOwnPropertyDescriptor(t, r);
        if (42 !== o.value || !0 !== o.enumerable) return !1;
      }
      return !0;
    };
  },
  619655,
  (t, r, e) => {
    "use strict";
    var i = t.r(651739);
    r.exports = function () {
      return i() && !!Symbol.toStringTag;
    };
  },
  608435,
  (t, r, e) => {
    "use strict";
    r.exports = Object;
  },
  639857,
  (t, r, e) => {
    "use strict";
    r.exports = Error;
  },
  974660,
  (t, r, e) => {
    "use strict";
    r.exports = EvalError;
  },
  930575,
  (t, r, e) => {
    "use strict";
    r.exports = RangeError;
  },
  265756,
  (t, r, e) => {
    "use strict";
    r.exports = ReferenceError;
  },
  143e3,
  (t, r, e) => {
    "use strict";
    r.exports = SyntaxError;
  },
  8224,
  (t, r, e) => {
    "use strict";
    r.exports = TypeError;
  },
  420570,
  (t, r, e) => {
    "use strict";
    r.exports = URIError;
  },
  860410,
  (t, r, e) => {
    "use strict";
    r.exports = Math.abs;
  },
  692069,
  (t, r, e) => {
    "use strict";
    r.exports = Math.floor;
  },
  400315,
  (t, r, e) => {
    "use strict";
    r.exports = Math.max;
  },
  869897,
  (t, r, e) => {
    "use strict";
    r.exports = Math.min;
  },
  755752,
  (t, r, e) => {
    "use strict";
    r.exports = Math.pow;
  },
  156056,
  (t, r, e) => {
    "use strict";
    r.exports = Math.round;
  },
  280407,
  (t, r, e) => {
    "use strict";
    r.exports =
      Number.isNaN ||
      function (t) {
        return t != t;
      };
  },
  159532,
  (t, r, e) => {
    "use strict";
    var i = t.r(280407);
    r.exports = function (t) {
      return i(t) || 0 === t ? t : t < 0 ? -1 : 1;
    };
  },
  267359,
  (t, r, e) => {
    "use strict";
    r.exports = Object.getOwnPropertyDescriptor;
  },
  593892,
  (t, r, e) => {
    "use strict";
    var i = t.r(267359);
    if (i)
      try {
        i([], "length");
      } catch (t) {
        i = null;
      }
    r.exports = i;
  },
  123775,
  (t, r, e) => {
    "use strict";
    var i = Object.defineProperty || !1;
    if (i)
      try {
        i({}, "a", { value: 1 });
      } catch (t) {
        i = !1;
      }
    r.exports = i;
  },
  130949,
  (t, r, e) => {
    "use strict";
    var i = "u" > typeof Symbol && Symbol,
      n = t.r(651739);
    r.exports = function () {
      return (
        "function" == typeof i &&
        "function" == typeof Symbol &&
        "symbol" == typeof i("foo") &&
        "symbol" == typeof Symbol("bar") &&
        n()
      );
    };
  },
  675672,
  (t, r, e) => {
    "use strict";
    r.exports = ("u" > typeof Reflect && Reflect.getPrototypeOf) || null;
  },
  343264,
  (t, r, e) => {
    "use strict";
    r.exports = t.r(608435).getPrototypeOf || null;
  },
  277018,
  (t, r, e) => {
    "use strict";
    var i = Object.prototype.toString,
      n = Math.max,
      o = function (t, r) {
        for (var e = [], i = 0; i < t.length; i += 1) e[i] = t[i];
        for (var n = 0; n < r.length; n += 1) e[n + t.length] = r[n];
        return e;
      },
      f = function (t, r) {
        for (var e = [], i = r || 0, n = 0; i < t.length; i += 1, n += 1)
          e[n] = t[i];
        return e;
      },
      s = function (t, r) {
        for (var e = "", i = 0; i < t.length; i += 1)
          (e += t[i]), i + 1 < t.length && (e += r);
        return e;
      };
    r.exports = function (t) {
      var r,
        e = this;
      if ("function" != typeof e || "[object Function]" !== i.apply(e))
        throw TypeError("Function.prototype.bind called on incompatible " + e);
      for (
        var h = f(arguments, 1), u = n(0, e.length - h.length), a = [], l = 0;
        l < u;
        l++
      )
        a[l] = "$" + l;
      if (
        ((r = Function(
          "binder",
          "return function (" +
            s(a, ",") +
            "){ return binder.apply(this,arguments); }"
        )(function () {
          if (this instanceof r) {
            var i = e.apply(this, o(h, arguments));
            return Object(i) === i ? i : this;
          }
          return e.apply(t, o(h, arguments));
        })),
        e.prototype)
      ) {
        var p = function () {};
        (p.prototype = e.prototype),
          (r.prototype = new p()),
          (p.prototype = null);
      }
      return r;
    };
  },
  932672,
  (t, r, e) => {
    "use strict";
    var i = t.r(277018);
    r.exports = Function.prototype.bind || i;
  },
  600358,
  (t, r, e) => {
    "use strict";
    r.exports = Function.prototype.call;
  },
  102215,
  (t, r, e) => {
    "use strict";
    r.exports = Function.prototype.apply;
  },
  130637,
  (t, r, e) => {
    "use strict";
    r.exports = "u" > typeof Reflect && Reflect && Reflect.apply;
  },
  256450,
  (t, r, e) => {
    "use strict";
    var i = t.r(932672),
      n = t.r(102215),
      o = t.r(600358);
    r.exports = t.r(130637) || i.call(o, n);
  },
  943569,
  (t, r, e) => {
    "use strict";
    var i = t.r(932672),
      n = t.r(8224),
      o = t.r(600358),
      f = t.r(256450);
    r.exports = function (t) {
      if (t.length < 1 || "function" != typeof t[0])
        throw new n("a function is required");
      return f(i, o, t);
    };
  },
  190482,
  (t, r, e) => {
    "use strict";
    var i,
      n = t.r(943569),
      o = t.r(593892);
    try {
      i = [].__proto__ === Array.prototype;
    } catch (t) {
      if (
        !t ||
        "object" != typeof t ||
        !("code" in t) ||
        "ERR_PROTO_ACCESS" !== t.code
      )
        throw t;
    }
    var f = !!i && o && o(Object.prototype, "__proto__"),
      s = Object,
      h = s.getPrototypeOf;
    r.exports =
      f && "function" == typeof f.get
        ? n([f.get])
        : "function" == typeof h &&
          function (t) {
            return h(null == t ? t : s(t));
          };
  },
  942527,
  (t, r, e) => {
    "use strict";
    var i = t.r(675672),
      n = t.r(343264),
      o = t.r(190482);
    r.exports = i
      ? function (t) {
          return i(t);
        }
      : n
      ? function (t) {
          if (!t || ("object" != typeof t && "function" != typeof t))
            throw TypeError("getProto: not an object");
          return n(t);
        }
      : o
      ? function (t) {
          return o(t);
        }
      : null;
  },
  705843,
  (t, r, e) => {
    "use strict";
    var i = Function.prototype.call,
      n = Object.prototype.hasOwnProperty;
    r.exports = t.r(932672).call(i, n);
  },
  578586,
  (t, r, e) => {
    "use strict";
    var i = t.r(608435),
      n = t.r(639857),
      o = t.r(974660),
      f = t.r(930575),
      s = t.r(265756),
      h = t.r(143e3),
      u = t.r(8224),
      a = t.r(420570),
      l = t.r(860410),
      p = t.r(692069),
      c = t.r(400315),
      y = t.r(869897),
      m = t.r(755752),
      d = t.r(156056),
      g = t.r(159532),
      v = Function,
      w = function (t) {
        try {
          return v('"use strict"; return (' + t + ").constructor;")();
        } catch (t) {}
      },
      b = t.r(593892),
      M = t.r(123775),
      x = function () {
        throw new u();
      },
      A = b
        ? (function () {
            try {
              return arguments.callee, x;
            } catch (t) {
              try {
                return b(arguments, "callee").get;
              } catch (t) {
                return x;
              }
            }
          })()
        : x,
      _ = t.r(130949)(),
      E = t.r(942527),
      B = t.r(343264),
      S = t.r(675672),
      I = t.r(102215),
      O = t.r(600358),
      U = {},
      R = "u" > typeof Uint8Array && E ? E(Uint8Array) : void 0,
      P = {
        __proto__: null,
        "%AggregateError%":
          "u" < typeof AggregateError ? void 0 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "u" < typeof ArrayBuffer ? void 0 : ArrayBuffer,
        "%ArrayIteratorPrototype%": _ && E ? E([][Symbol.iterator]()) : void 0,
        "%AsyncFromSyncIteratorPrototype%": void 0,
        "%AsyncFunction%": U,
        "%AsyncGenerator%": U,
        "%AsyncGeneratorFunction%": U,
        "%AsyncIteratorPrototype%": U,
        "%Atomics%": "u" < typeof Atomics ? void 0 : Atomics,
        "%BigInt%": "u" < typeof BigInt ? void 0 : BigInt,
        "%BigInt64Array%": "u" < typeof BigInt64Array ? void 0 : BigInt64Array,
        "%BigUint64Array%":
          "u" < typeof BigUint64Array ? void 0 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": "u" < typeof DataView ? void 0 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": n,
        "%eval%": eval,
        "%EvalError%": o,
        "%Float16Array%": "u" < typeof Float16Array ? void 0 : Float16Array,
        "%Float32Array%": "u" < typeof Float32Array ? void 0 : Float32Array,
        "%Float64Array%": "u" < typeof Float64Array ? void 0 : Float64Array,
        "%FinalizationRegistry%":
          "u" < typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
        "%Function%": v,
        "%GeneratorFunction%": U,
        "%Int8Array%": "u" < typeof Int8Array ? void 0 : Int8Array,
        "%Int16Array%": "u" < typeof Int16Array ? void 0 : Int16Array,
        "%Int32Array%": "u" < typeof Int32Array ? void 0 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": _ && E ? E(E([][Symbol.iterator]())) : void 0,
        "%JSON%": "object" == typeof JSON ? JSON : void 0,
        "%Map%": "u" < typeof Map ? void 0 : Map,
        "%MapIteratorPrototype%":
          "u" > typeof Map && _ && E ? E(new Map()[Symbol.iterator]()) : void 0,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": i,
        "%Object.getOwnPropertyDescriptor%": b,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "u" < typeof Promise ? void 0 : Promise,
        "%Proxy%": "u" < typeof Proxy ? void 0 : Proxy,
        "%RangeError%": f,
        "%ReferenceError%": s,
        "%Reflect%": "u" < typeof Reflect ? void 0 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "u" < typeof Set ? void 0 : Set,
        "%SetIteratorPrototype%":
          "u" > typeof Set && _ && E ? E(new Set()[Symbol.iterator]()) : void 0,
        "%SharedArrayBuffer%":
          "u" < typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": _ && E ? E(""[Symbol.iterator]()) : void 0,
        "%Symbol%": _ ? Symbol : void 0,
        "%SyntaxError%": h,
        "%ThrowTypeError%": A,
        "%TypedArray%": R,
        "%TypeError%": u,
        "%Uint8Array%": "u" < typeof Uint8Array ? void 0 : Uint8Array,
        "%Uint8ClampedArray%":
          "u" < typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        "%Uint16Array%": "u" < typeof Uint16Array ? void 0 : Uint16Array,
        "%Uint32Array%": "u" < typeof Uint32Array ? void 0 : Uint32Array,
        "%URIError%": a,
        "%WeakMap%": "u" < typeof WeakMap ? void 0 : WeakMap,
        "%WeakRef%": "u" < typeof WeakRef ? void 0 : WeakRef,
        "%WeakSet%": "u" < typeof WeakSet ? void 0 : WeakSet,
        "%Function.prototype.call%": O,
        "%Function.prototype.apply%": I,
        "%Object.defineProperty%": M,
        "%Object.getPrototypeOf%": B,
        "%Math.abs%": l,
        "%Math.floor%": p,
        "%Math.max%": c,
        "%Math.min%": y,
        "%Math.pow%": m,
        "%Math.round%": d,
        "%Math.sign%": g,
        "%Reflect.getPrototypeOf%": S,
      };
    if (E)
      try {
        null.error;
      } catch (t) {
        var T = E(E(t));
        P["%Error.prototype%"] = T;
      }
    var j = function t(r) {
        var e;
        if ("%AsyncFunction%" === r) e = w("async function () {}");
        else if ("%GeneratorFunction%" === r) e = w("function* () {}");
        else if ("%AsyncGeneratorFunction%" === r)
          e = w("async function* () {}");
        else if ("%AsyncGenerator%" === r) {
          var i = t("%AsyncGeneratorFunction%");
          i && (e = i.prototype);
        } else if ("%AsyncIteratorPrototype%" === r) {
          var n = t("%AsyncGenerator%");
          n && E && (e = E(n.prototype));
        }
        return (P[r] = e), e;
      },
      N = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": [
          "AsyncGeneratorFunction",
          "prototype",
          "prototype",
        ],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"],
      },
      k = t.r(932672),
      L = t.r(705843),
      C = k.call(O, Array.prototype.concat),
      F = k.call(I, Array.prototype.splice),
      $ = k.call(O, String.prototype.replace),
      q = k.call(O, String.prototype.slice),
      D = k.call(O, RegExp.prototype.exec),
      Z =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      G = /\\(\\)?/g,
      z = function (t) {
        var r = q(t, 0, 1),
          e = q(t, -1);
        if ("%" === r && "%" !== e)
          throw new h("invalid intrinsic syntax, expected closing `%`");
        if ("%" === e && "%" !== r)
          throw new h("invalid intrinsic syntax, expected opening `%`");
        var i = [];
        return (
          $(t, Z, function (t, r, e, n) {
            i[i.length] = e ? $(n, G, "$1") : r || t;
          }),
          i
        );
      },
      W = function (t, r) {
        var e,
          i = t;
        if ((L(N, i) && (i = "%" + (e = N[i])[0] + "%"), L(P, i))) {
          var n = P[i];
          if ((n === U && (n = j(i)), void 0 === n && !r))
            throw new u(
              "intrinsic " +
                t +
                " exists, but is not available. Please file an issue!"
            );
          return { alias: e, name: i, value: n };
        }
        throw new h("intrinsic " + t + " does not exist!");
      };
    r.exports = function (t, r) {
      if ("string" != typeof t || 0 === t.length)
        throw new u("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && "boolean" != typeof r)
        throw new u('"allowMissing" argument must be a boolean');
      if (null === D(/^%?[^%]*%?$/, t))
        throw new h(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
        );
      var e = z(t),
        i = e.length > 0 ? e[0] : "",
        n = W("%" + i + "%", r),
        o = n.name,
        f = n.value,
        s = !1,
        a = n.alias;
      a && ((i = a[0]), F(e, C([0, 1], a)));
      for (var l = 1, p = !0; l < e.length; l += 1) {
        var c = e[l],
          y = q(c, 0, 1),
          m = q(c, -1);
        if (
          ('"' === y ||
            "'" === y ||
            "`" === y ||
            '"' === m ||
            "'" === m ||
            "`" === m) &&
          y !== m
        )
          throw new h("property names with quotes must have matching quotes");
        if (
          (("constructor" !== c && p) || (s = !0),
          (i += "." + c),
          L(P, (o = "%" + i + "%")))
        )
          f = P[o];
        else if (null != f) {
          if (!(c in f)) {
            if (!r)
              throw new u(
                "base intrinsic for " +
                  t +
                  " exists, but the property is not available."
              );
            return;
          }
          if (b && l + 1 >= e.length) {
            var d = b(f, c);
            f =
              (p = !!d) && "get" in d && !("originalValue" in d.get)
                ? d.get
                : f[c];
          } else (p = L(f, c)), (f = f[c]);
          p && !s && (P[o] = f);
        }
      }
      return f;
    };
  },
  325887,
  (t, r, e) => {
    "use strict";
    var i = t.r(578586),
      n = t.r(943569),
      o = n([i("%String.prototype.indexOf%")]);
    r.exports = function (t, r) {
      var e = i(t, !!r);
      return "function" == typeof e && o(t, ".prototype.") > -1 ? n([e]) : e;
    };
  },
  719972,
  (t, r, e) => {
    "use strict";
    var i,
      n,
      o = Function.prototype.toString,
      f = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
    if ("function" == typeof f && "function" == typeof Object.defineProperty)
      try {
        (i = Object.defineProperty({}, "length", {
          get: function () {
            throw n;
          },
        })),
          (n = {}),
          f(
            function () {
              throw 42;
            },
            null,
            i
          );
      } catch (t) {
        t !== n && (f = null);
      }
    else f = null;
    var s = /^\s*class\b/,
      h = function (t) {
        try {
          var r = o.call(t);
          return s.test(r);
        } catch (t) {
          return !1;
        }
      },
      u = function (t) {
        try {
          if (h(t)) return !1;
          return o.call(t), !0;
        } catch (t) {
          return !1;
        }
      },
      a = Object.prototype.toString,
      l = "function" == typeof Symbol && !!Symbol.toStringTag,
      p = !(0 in [,]),
      c = function () {
        return !1;
      };
    if ("object" == typeof document) {
      var y = document.all;
      a.call(y) === a.call(document.all) &&
        (c = function (t) {
          if ((p || !t) && (void 0 === t || "object" == typeof t))
            try {
              var r = a.call(t);
              return (
                ("[object HTMLAllCollection]" === r ||
                  "[object HTML document.all class]" === r ||
                  "[object HTMLCollection]" === r ||
                  "[object Object]" === r) &&
                null == t("")
              );
            } catch (t) {}
          return !1;
        });
    }
    r.exports = f
      ? function (t) {
          if (c(t)) return !0;
          if (!t || ("function" != typeof t && "object" != typeof t)) return !1;
          try {
            f(t, null, i);
          } catch (t) {
            if (t !== n) return !1;
          }
          return !h(t) && u(t);
        }
      : function (t) {
          if (c(t)) return !0;
          if (!t || ("function" != typeof t && "object" != typeof t)) return !1;
          if (l) return u(t);
          if (h(t)) return !1;
          var r = a.call(t);
          return (
            ("[object Function]" === r ||
              "[object GeneratorFunction]" === r ||
              !!/^\[object HTML/.test(r)) &&
            u(t)
          );
        };
  },
  58871,
  (t, r, e) => {
    "use strict";
    var i = t.r(719972),
      n = Object.prototype.toString,
      o = Object.prototype.hasOwnProperty,
      f = function (t, r, e) {
        for (var i = 0, n = t.length; i < n; i++)
          o.call(t, i) && (null == e ? r(t[i], i, t) : r.call(e, t[i], i, t));
      },
      s = function (t, r, e) {
        for (var i = 0, n = t.length; i < n; i++)
          null == e ? r(t.charAt(i), i, t) : r.call(e, t.charAt(i), i, t);
      },
      h = function (t, r, e) {
        for (var i in t)
          o.call(t, i) && (null == e ? r(t[i], i, t) : r.call(e, t[i], i, t));
      };
    r.exports = function (t, r, e) {
      var o;
      if (!i(r)) throw TypeError("iterator must be a function");
      (arguments.length >= 3 && (o = e), "[object Array]" === n.call(t))
        ? f(t, r, o)
        : "string" == typeof t
        ? s(t, r, o)
        : h(t, r, o);
    };
  },
  482913,
  (t, r, e) => {
    "use strict";
    r.exports = [
      "Float16Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
    ];
  },
  229989,
  (t, r, e) => {
    "use strict";
    var i = t.r(482913),
      n = "u" < typeof globalThis ? t.g : globalThis;
    r.exports = function () {
      for (var t = [], r = 0; r < i.length; r++)
        "function" == typeof n[i[r]] && (t[t.length] = i[r]);
      return t;
    };
  },
  900077,
  (t, r, e) => {
    "use strict";
    var i = t.r(123775),
      n = t.r(143e3),
      o = t.r(8224),
      f = t.r(593892);
    r.exports = function (t, r, e) {
      if (!t || ("object" != typeof t && "function" != typeof t))
        throw new o("`obj` must be an object or a function`");
      if ("string" != typeof r && "symbol" != typeof r)
        throw new o("`property` must be a string or a symbol`");
      if (
        arguments.length > 3 &&
        "boolean" != typeof arguments[3] &&
        null !== arguments[3]
      )
        throw new o("`nonEnumerable`, if provided, must be a boolean or null");
      if (
        arguments.length > 4 &&
        "boolean" != typeof arguments[4] &&
        null !== arguments[4]
      )
        throw new o("`nonWritable`, if provided, must be a boolean or null");
      if (
        arguments.length > 5 &&
        "boolean" != typeof arguments[5] &&
        null !== arguments[5]
      )
        throw new o(
          "`nonConfigurable`, if provided, must be a boolean or null"
        );
      if (arguments.length > 6 && "boolean" != typeof arguments[6])
        throw new o("`loose`, if provided, must be a boolean");
      var s = arguments.length > 3 ? arguments[3] : null,
        h = arguments.length > 4 ? arguments[4] : null,
        u = arguments.length > 5 ? arguments[5] : null,
        a = arguments.length > 6 && arguments[6],
        l = !!f && f(t, r);
      if (i)
        i(t, r, {
          configurable: null === u && l ? l.configurable : !u,
          enumerable: null === s && l ? l.enumerable : !s,
          value: e,
          writable: null === h && l ? l.writable : !h,
        });
      else if (!a && (s || h || u))
        throw new n(
          "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
        );
      else t[r] = e;
    };
  },
  982703,
  (t, r, e) => {
    "use strict";
    var i = t.r(123775),
      n = function () {
        return !!i;
      };
    (n.hasArrayLengthDefineBug = function () {
      if (!i) return null;
      try {
        return 1 !== i([], "length", { value: 1 }).length;
      } catch (t) {
        return !0;
      }
    }),
      (r.exports = n);
  },
  229211,
  (t, r, e) => {
    "use strict";
    var i = t.r(578586),
      n = t.r(900077),
      o = t.r(982703)(),
      f = t.r(593892),
      s = t.r(8224),
      h = i("%Math.floor%");
    r.exports = function (t, r) {
      if ("function" != typeof t) throw new s("`fn` is not a function");
      if ("number" != typeof r || r < 0 || r > 0xffffffff || h(r) !== r)
        throw new s("`length` must be a positive 32-bit integer");
      var e = arguments.length > 2 && !!arguments[2],
        i = !0,
        u = !0;
      if ("length" in t && f) {
        var a = f(t, "length");
        a && !a.configurable && (i = !1), a && !a.writable && (u = !1);
      }
      return (
        (i || u || !e) && (o ? n(t, "length", r, !0, !0) : n(t, "length", r)), t
      );
    };
  },
  557735,
  (t, r, e) => {
    "use strict";
    var i = t.r(932672),
      n = t.r(102215),
      o = t.r(256450);
    r.exports = function () {
      return o(i, n, arguments);
    };
  },
  647967,
  (t, r, e) => {
    "use strict";
    var i = t.r(229211),
      n = t.r(123775),
      o = t.r(943569),
      f = t.r(557735);
    (r.exports = function (t) {
      var r = o(arguments),
        e = t.length - (arguments.length - 1);
      return i(r, 1 + (e > 0 ? e : 0), !0);
    }),
      n ? n(r.exports, "apply", { value: f }) : (r.exports.apply = f);
  },
  49040,
  (t, r, e) => {
    "use strict";
    var i = t.r(58871),
      n = t.r(229989),
      o = t.r(647967),
      f = t.r(325887),
      s = t.r(593892),
      h = t.r(942527),
      u = f("Object.prototype.toString"),
      a = t.r(619655)(),
      l = "u" < typeof globalThis ? t.g : globalThis,
      p = n(),
      c = f("String.prototype.slice"),
      y =
        f("Array.prototype.indexOf", !0) ||
        function (t, r) {
          for (var e = 0; e < t.length; e += 1) if (t[e] === r) return e;
          return -1;
        },
      m = { __proto__: null };
    a && s && h
      ? i(p, function (t) {
          var r = new l[t]();
          if (Symbol.toStringTag in r && h) {
            var e = h(r),
              i = s(e, Symbol.toStringTag);
            if ((!i && e && (i = s(h(e), Symbol.toStringTag)), i && i.get)) {
              var n = o(i.get);
              m["$" + t] = n;
            }
          }
        })
      : i(p, function (t) {
          var r = new l[t](),
            e = r.slice || r.set;
          if (e) {
            var i = o(e);
            m["$" + t] = i;
          }
        });
    var d = function (t) {
        var r = !1;
        return (
          i(m, function (e, i) {
            if (!r)
              try {
                "$" + e(t) === i && (r = c(i, 1));
              } catch (t) {}
          }),
          r
        );
      },
      g = function (t) {
        var r = !1;
        return (
          i(m, function (e, i) {
            if (!r)
              try {
                e(t), (r = c(i, 1));
              } catch (t) {}
          }),
          r
        );
      };
    r.exports = function (t) {
      if (!t || "object" != typeof t) return !1;
      if (!a) {
        var r = c(u(t), 8, -1);
        return y(p, r) > -1 ? r : "Object" === r && g(t);
      }
      return s ? d(t) : null;
    };
  },
  74425,
  (t, r, e) => {
    "use strict";
    var i = t.r(49040);
    r.exports = function (t) {
      return !!i(t);
    };
  },
  988935,
  (t, r, e) => {
    "function" == typeof Object.create
      ? (r.exports = function (t, r) {
          r &&
            ((t.super_ = r),
            (t.prototype = Object.create(r.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (r.exports = function (t, r) {
          if (r) {
            t.super_ = r;
            var e = function () {};
            (e.prototype = r.prototype),
              (t.prototype = new e()),
              (t.prototype.constructor = t);
          }
        });
  },
  470024,
  (t, r, e) => {
    var i = t.r(843943),
      n = i.Buffer;
    function o(t, r) {
      for (var e in t) r[e] = t[e];
    }
    function f(t, r, e) {
      return n(t, r, e);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (r.exports = i)
      : (o(i, e), (e.Buffer = f)),
      o(n, f),
      (f.from = function (t, r, e) {
        if ("number" == typeof t)
          throw TypeError("Argument must not be a number");
        return n(t, r, e);
      }),
      (f.alloc = function (t, r, e) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        var i = n(t);
        return (
          void 0 !== r
            ? "string" == typeof e
              ? i.fill(r, e)
              : i.fill(r)
            : i.fill(0),
          i
        );
      }),
      (f.allocUnsafe = function (t) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        return n(t);
      }),
      (f.allocUnsafeSlow = function (t) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        return i.SlowBuffer(t);
      });
  },
  619049,
  (t, r, e) => {
    "use strict";
    var i = t.r(470024).Buffer,
      n =
        i.isEncoding ||
        function (t) {
          switch ((t = "" + t) && t.toLowerCase()) {
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
    function o(t) {
      var r;
      switch (
        ((this.encoding = (function (t) {
          var r = (function (t) {
            var r;
            if (!t) return "utf8";
            for (;;)
              switch (t) {
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
                  return t;
                default:
                  if (r) return;
                  (t = ("" + t).toLowerCase()), (r = !0);
              }
          })(t);
          if ("string" != typeof r && (i.isEncoding === n || !n(t)))
            throw Error("Unknown encoding: " + t);
          return r || t;
        })(t)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = h), (this.end = u), (r = 4);
          break;
        case "utf8":
          (this.fillLast = s), (r = 4);
          break;
        case "base64":
          (this.text = a), (this.end = l), (r = 3);
          break;
        default:
          (this.write = p), (this.end = c);
          return;
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = i.allocUnsafe(r));
    }
    function f(t) {
      return t <= 127
        ? 0
        : t >> 5 == 6
        ? 2
        : t >> 4 == 14
        ? 3
        : t >> 3 == 30
        ? 4
        : t >> 6 == 2
        ? -1
        : -2;
    }
    function s(t) {
      var r = this.lastTotal - this.lastNeed,
        e = (function (t, r, e) {
          if ((192 & r[0]) != 128) return (t.lastNeed = 0), "�";
          if (t.lastNeed > 1 && r.length > 1) {
            if ((192 & r[1]) != 128) return (t.lastNeed = 1), "�";
            if (t.lastNeed > 2 && r.length > 2 && (192 & r[2]) != 128)
              return (t.lastNeed = 2), "�";
          }
        })(this, t, 0);
      return void 0 !== e
        ? e
        : this.lastNeed <= t.length
        ? (t.copy(this.lastChar, r, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : void (t.copy(this.lastChar, r, 0, t.length),
          (this.lastNeed -= t.length));
    }
    function h(t, r) {
      if ((t.length - r) % 2 == 0) {
        var e = t.toString("utf16le", r);
        if (e) {
          var i = e.charCodeAt(e.length - 1);
          if (i >= 55296 && i <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = t[t.length - 2]),
              (this.lastChar[1] = t[t.length - 1]),
              e.slice(0, -1)
            );
        }
        return e;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = t[t.length - 1]),
        t.toString("utf16le", r, t.length - 1)
      );
    }
    function u(t) {
      var r = t && t.length ? this.write(t) : "";
      if (this.lastNeed) {
        var e = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, e);
      }
      return r;
    }
    function a(t, r) {
      var e = (t.length - r) % 3;
      return 0 === e
        ? t.toString("base64", r)
        : ((this.lastNeed = 3 - e),
          (this.lastTotal = 3),
          1 === e
            ? (this.lastChar[0] = t[t.length - 1])
            : ((this.lastChar[0] = t[t.length - 2]),
              (this.lastChar[1] = t[t.length - 1])),
          t.toString("base64", r, t.length - e));
    }
    function l(t) {
      var r = t && t.length ? this.write(t) : "";
      return this.lastNeed
        ? r + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : r;
    }
    function p(t) {
      return t.toString(this.encoding);
    }
    function c(t) {
      return t && t.length ? this.write(t) : "";
    }
    (e.StringDecoder = o),
      (o.prototype.write = function (t) {
        var r, e;
        if (0 === t.length) return "";
        if (this.lastNeed) {
          if (void 0 === (r = this.fillLast(t))) return "";
          (e = this.lastNeed), (this.lastNeed = 0);
        } else e = 0;
        return e < t.length
          ? r
            ? r + this.text(t, e)
            : this.text(t, e)
          : r || "";
      }),
      (o.prototype.end = function (t) {
        var r = t && t.length ? this.write(t) : "";
        return this.lastNeed ? r + "�" : r;
      }),
      (o.prototype.text = function (t, r) {
        var e = (function (t, r, e) {
          var i = r.length - 1;
          if (i < e) return 0;
          var n = f(r[i]);
          return n >= 0
            ? (n > 0 && (t.lastNeed = n - 1), n)
            : --i < e || -2 === n
            ? 0
            : (n = f(r[i])) >= 0
            ? (n > 0 && (t.lastNeed = n - 2), n)
            : --i < e || -2 === n
            ? 0
            : (n = f(r[i])) >= 0
            ? (n > 0 && (2 === n ? (n = 0) : (t.lastNeed = n - 3)), n)
            : 0;
        })(this, t, r);
        if (!this.lastNeed) return t.toString("utf8", r);
        this.lastTotal = e;
        var i = t.length - (e - this.lastNeed);
        return t.copy(this.lastChar, 0, i), t.toString("utf8", r, i);
      }),
      (o.prototype.fillLast = function (t) {
        if (this.lastNeed <= t.length)
          return (
            t.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
          (this.lastNeed -= t.length);
      });
  },
]);
