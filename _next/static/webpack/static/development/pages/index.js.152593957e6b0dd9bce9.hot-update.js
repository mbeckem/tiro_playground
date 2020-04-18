webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/tiro.js":
/*!*********************!*\
  !*** ./lib/tiro.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Tiro = function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

  return function (Tiro) {
    Tiro = Tiro || {};
    var f;
    f || (f = typeof Tiro !== 'undefined' ? Tiro : {});
    var aa = {},
        ba;

    for (ba in f) {
      f.hasOwnProperty(ba) && (aa[ba] = f[ba]);
    }

    var ca = "./this.program",
        n = "";
    document.currentScript && (n = document.currentScript.src);
    _scriptDir && (n = _scriptDir);
    0 !== n.indexOf("blob:") ? n = n.substr(0, n.lastIndexOf("/") + 1) : n = "";
    var da = f.print || console.log.bind(console),
        q = f.printErr || console.warn.bind(console);

    for (ba in aa) {
      aa.hasOwnProperty(ba) && (f[ba] = aa[ba]);
    }

    aa = null;
    f.thisProgram && (ca = f.thisProgram);
    var y = 0,
        ea;
    f.wasmBinary && (ea = f.wasmBinary);
    var noExitRuntime;
    f.noExitRuntime && (noExitRuntime = f.noExitRuntime);
    "object" !== typeof WebAssembly && q("no native wasm support detected");
    var fa,
        ha = new WebAssembly.Table({
      initial: 1822,
      maximum: 1822,
      element: "anyfunc"
    }),
        ia = !1;

    function ja(a, b) {
      a || z("Assertion failed: " + b);
    }

    var ka = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

    function la(a, b, c) {
      var d = b + c;

      for (c = b; a[c] && !(c >= d);) {
        ++c;
      }

      if (16 < c - b && a.subarray && ka) return ka.decode(a.subarray(b, c));

      for (d = ""; b < c;) {
        var e = a[b++];

        if (e & 128) {
          var g = a[b++] & 63;
          if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | g);else {
            var h = a[b++] & 63;
            e = 224 == (e & 240) ? (e & 15) << 12 | g << 6 | h : (e & 7) << 18 | g << 12 | h << 6 | a[b++] & 63;
            65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
          }
        } else d += String.fromCharCode(e);
      }

      return d;
    }

    function ma(a) {
      return a ? la(A, a, void 0) : "";
    }

    function na(a, b, c, d) {
      if (!(0 < d)) return 0;
      var e = c;
      d = c + d - 1;

      for (var g = 0; g < a.length; ++g) {
        var h = a.charCodeAt(g);

        if (55296 <= h && 57343 >= h) {
          var l = a.charCodeAt(++g);
          h = 65536 + ((h & 1023) << 10) | l & 1023;
        }

        if (127 >= h) {
          if (c >= d) break;
          b[c++] = h;
        } else {
          if (2047 >= h) {
            if (c + 1 >= d) break;
            b[c++] = 192 | h >> 6;
          } else {
            if (65535 >= h) {
              if (c + 2 >= d) break;
              b[c++] = 224 | h >> 12;
            } else {
              if (c + 3 >= d) break;
              b[c++] = 240 | h >> 18;
              b[c++] = 128 | h >> 12 & 63;
            }

            b[c++] = 128 | h >> 6 & 63;
          }

          b[c++] = 128 | h & 63;
        }
      }

      b[c] = 0;
      return c - e;
    }

    function oa(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
        127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
      }

      return b;
    }

    var pa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

    function qa(a) {
      var b;

      for (b = a >> 1; B[b];) {
        ++b;
      }

      b <<= 1;
      if (32 < b - a && pa) return pa.decode(A.subarray(a, b));
      b = 0;

      for (var c = "";;) {
        var d = B[a + 2 * b >> 1];
        if (0 == d) return c;
        ++b;
        c += String.fromCharCode(d);
      }
    }

    function ra(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (2 > c) return 0;
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;

      for (var e = 0; e < c; ++e) {
        B[b >> 1] = a.charCodeAt(e), b += 2;
      }

      B[b >> 1] = 0;
      return b - d;
    }

    function sa(a) {
      return 2 * a.length;
    }

    function ta(a) {
      for (var b = 0, c = "";;) {
        var d = C[a + 4 * b >> 2];
        if (0 == d) return c;
        ++b;
        65536 <= d ? (d -= 65536, c += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023)) : c += String.fromCharCode(d);
      }
    }

    function ua(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (4 > c) return 0;
      var d = b;
      c = d + c - 4;

      for (var e = 0; e < a.length; ++e) {
        var g = a.charCodeAt(e);

        if (55296 <= g && 57343 >= g) {
          var h = a.charCodeAt(++e);
          g = 65536 + ((g & 1023) << 10) | h & 1023;
        }

        C[b >> 2] = g;
        b += 4;
        if (b + 4 > c) break;
      }

      C[b >> 2] = 0;
      return b - d;
    }

    function va(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }

      return b;
    }

    var wa, D, A, B, xa, C, ya, za, Aa;

    function Ca(a) {
      wa = a;
      f.HEAP8 = D = new Int8Array(a);
      f.HEAP16 = B = new Int16Array(a);
      f.HEAP32 = C = new Int32Array(a);
      f.HEAPU8 = A = new Uint8Array(a);
      f.HEAPU16 = xa = new Uint16Array(a);
      f.HEAPU32 = ya = new Uint32Array(a);
      f.HEAPF32 = za = new Float32Array(a);
      f.HEAPF64 = Aa = new Float64Array(a);
    }

    var Da = f.INITIAL_MEMORY || 16777216;
    f.wasmMemory ? fa = f.wasmMemory : fa = new WebAssembly.Memory({
      initial: Da / 65536,
      maximum: 32768
    });
    fa && (wa = fa.buffer);
    Da = wa.byteLength;
    Ca(wa);
    C[22540] = 5333216;

    function Ea(a) {
      for (; 0 < a.length;) {
        var b = a.shift();
        if ("function" == typeof b) b(f);else {
          var c = b.$a;
          "number" === typeof c ? void 0 === b.sa ? f.dynCall_v(c) : f.dynCall_vi(c, b.sa) : c(void 0 === b.sa ? null : b.sa);
        }
      }
    }

    var Fa = [],
        Ga = [],
        Ha = [],
        Ia = [],
        Ja = [];

    function Ka() {
      var a = f.preRun.shift();
      Fa.unshift(a);
    }

    var La = Math.abs,
        Ma = Math.ceil,
        Na = Math.floor,
        Oa = Math.min,
        Pa = 0,
        Qa = null,
        Ra = null;
    f.preloadedImages = {};
    f.preloadedAudios = {};

    function z(a) {
      if (f.onAbort) f.onAbort(a);
      da(a);
      q(a);
      ia = !0;
      throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
    }

    function Sa() {
      var a = Ta;
      return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
    }

    var Ta = "tiro.wasm";

    if (!Sa()) {
      var Ua = Ta;
      Ta = f.locateFile ? f.locateFile(Ua, n) : n + Ua;
    }

    function Va() {
      try {
        if (ea) return new Uint8Array(ea);
        throw "both async and sync fetching of the wasm failed";
      } catch (a) {
        z(a);
      }
    }

    function Wa() {
      return ea || "function" !== typeof fetch ? new Promise(function (a) {
        a(Va());
      }) : fetch(Ta, {
        credentials: "same-origin"
      }).then(function (a) {
        if (!a.ok) throw "failed to load wasm binary file at '" + Ta + "'";
        return a.arrayBuffer();
      })["catch"](function () {
        return Va();
      });
    }

    var Xa, Ya;
    Ga.push({
      $a: function $a() {
        Za();
      }
    });
    var F = {},
        $a = [];

    function ab(a) {
      if (!a || F[a]) return a;

      for (var b in F) {
        for (var c = +b, d = F[c].ra, e = d.length, g = 0; g < e; g++) {
          if (d[g] === a) return c;
        }
      }

      return a;
    }

    function bb(a) {
      try {
        return G(a);
      } catch (b) {}
    }

    function cb(a) {
      if (a) {
        var b = F[a];
        b.Z--;
        0 !== b.Z || b.oa || (b.ga && f.dynCall_ii(b.ga, a), delete F[a], bb(a));
      }
    }

    var db = 0;

    function eb() {
      var a = $a.pop();
      a = ab(a);
      F[a].oa || ($a.push(a), F[a].oa = !0);
      db = a;
      throw a;
    }

    function fb(a) {
      f.___errno_location && (C[f.___errno_location() >> 2] = a);
    }

    function gb(a, b) {
      for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
      }

      if (b) for (; c; c--) {
        a.unshift("..");
      }
      return a;
    }

    function hb(a) {
      var b = "/" === a.charAt(0),
          c = "/" === a.substr(-1);
      (a = gb(a.split("/").filter(function (d) {
        return !!d;
      }), !b).join("/")) || b || (a = ".");
      a && c && (a += "/");
      return (b ? "/" : "") + a;
    }

    function ib(a) {
      var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
      a = b[0];
      b = b[1];
      if (!a && !b) return ".";
      b && (b = b.substr(0, b.length - 1));
      return a + b;
    }

    function jb(a) {
      if ("/" === a) return "/";
      var b = a.lastIndexOf("/");
      return -1 === b ? a : a.substr(b + 1);
    }

    function kb() {
      for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" !== typeof b) throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0);
      }

      a = gb(a.split("/").filter(function (d) {
        return !!d;
      }), !b).join("/");
      return (b ? "/" : "") + a || ".";
    }

    var lb = [];

    function mb(a, b) {
      lb[a] = {
        input: [],
        B: [],
        ba: b
      };
      nb(a, ob);
    }

    var ob = {
      open: function open(a) {
        var b = lb[a.node.Da];
        if (!b) throw new K(43);
        a.u = b;
        a.seekable = !1;
      },
      close: function close(a) {
        a.u.ba.flush(a.u);
      },
      flush: function flush(a) {
        a.u.ba.flush(a.u);
      },
      read: function read(a, b, c, d) {
        if (!a.u || !a.u.ba.ab) throw new K(60);

        for (var e = 0, g = 0; g < d; g++) {
          try {
            var h = a.u.ba.ab(a.u);
          } catch (l) {
            throw new K(29);
          }

          if (void 0 === h && 0 === e) throw new K(6);
          if (null === h || void 0 === h) break;
          e++;
          b[c + g] = h;
        }

        e && (a.node.timestamp = Date.now());
        return e;
      },
      write: function write(a, b, c, d) {
        if (!a.u || !a.u.ba.La) throw new K(60);

        try {
          for (var e = 0; e < d; e++) {
            a.u.ba.La(a.u, b[c + e]);
          }
        } catch (g) {
          throw new K(29);
        }

        d && (a.node.timestamp = Date.now());
        return e;
      }
    },
        rb = {
      ab: function ab(a) {
        if (!a.input.length) {
          var b = null;
           true && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
          if (!b) return null;
          a.input = pb(b, !0);
        }

        return a.input.shift();
      },
      La: function La(a, b) {
        null === b || 10 === b ? (da(la(a.B, 0)), a.B = []) : 0 != b && a.B.push(b);
      },
      flush: function flush(a) {
        a.B && 0 < a.B.length && (da(la(a.B, 0)), a.B = []);
      }
    },
        sb = {
      La: function La(a, b) {
        null === b || 10 === b ? (q(la(a.B, 0)), a.B = []) : 0 != b && a.B.push(b);
      },
      flush: function flush(a) {
        a.B && 0 < a.B.length && (q(la(a.B, 0)), a.B = []);
      }
    },
        N = {
      P: null,
      J: function J() {
        return N.createNode(null, "/", 16895, 0);
      },
      createNode: function createNode(a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new K(63);
        N.P || (N.P = {
          dir: {
            node: {
              V: N.h.V,
              T: N.h.T,
              ia: N.h.ia,
              Aa: N.h.Aa,
              ib: N.h.ib,
              kb: N.h.kb,
              jb: N.h.jb,
              gb: N.h.gb,
              Ea: N.h.Ea
            },
            stream: {
              X: N.f.X
            }
          },
          file: {
            node: {
              V: N.h.V,
              T: N.h.T
            },
            stream: {
              X: N.f.X,
              read: N.f.read,
              write: N.f.write,
              Ta: N.f.Ta,
              cb: N.f.cb,
              Ca: N.f.Ca
            }
          },
          link: {
            node: {
              V: N.h.V,
              T: N.h.T,
              na: N.h.na
            },
            stream: {}
          },
          Va: {
            node: {
              V: N.h.V,
              T: N.h.T
            },
            stream: tb
          }
        });
        c = ub(a, b, c, d);
        16384 === (c.mode & 61440) ? (c.h = N.P.dir.node, c.f = N.P.dir.stream, c.c = {}) : 32768 === (c.mode & 61440) ? (c.h = N.P.file.node, c.f = N.P.file.stream, c.l = 0, c.c = null) : 40960 === (c.mode & 61440) ? (c.h = N.P.link.node, c.f = N.P.link.stream) : 8192 === (c.mode & 61440) && (c.h = N.P.Va.node, c.f = N.P.Va.stream);
        c.timestamp = Date.now();
        a && (a.c[b] = c);
        return c;
      },
      Rb: function Rb(a) {
        if (a.c && a.c.subarray) {
          for (var b = [], c = 0; c < a.l; ++c) {
            b.push(a.c[c]);
          }

          return b;
        }

        return a.c;
      },
      Sb: function Sb(a) {
        return a.c ? a.c.subarray ? a.c.subarray(0, a.l) : new Uint8Array(a.c) : new Uint8Array(0);
      },
      Xa: function Xa(a, b) {
        var c = a.c ? a.c.length : 0;
        c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.c, a.c = new Uint8Array(b), 0 < a.l && a.c.set(c.subarray(0, a.l), 0));
      },
      Db: function Db(a, b) {
        if (a.l != b) if (0 == b) a.c = null, a.l = 0;else {
          if (!a.c || a.c.subarray) {
            var c = a.c;
            a.c = new Uint8Array(b);
            c && a.c.set(c.subarray(0, Math.min(b, a.l)));
          } else if (a.c || (a.c = []), a.c.length > b) a.c.length = b;else for (; a.c.length < b;) {
            a.c.push(0);
          }

          a.l = b;
        }
      },
      h: {
        V: function V(a) {
          var b = {};
          b.Pb = 8192 === (a.mode & 61440) ? a.id : 1;
          b.Vb = a.id;
          b.mode = a.mode;
          b.$b = 1;
          b.uid = 0;
          b.Ub = 0;
          b.Da = a.Da;
          16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.l : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
          b.Mb = new Date(a.timestamp);
          b.Zb = new Date(a.timestamp);
          b.Ob = new Date(a.timestamp);
          b.mb = 4096;
          b.Nb = Math.ceil(b.size / b.mb);
          return b;
        },
        T: function T(a, b) {
          void 0 !== b.mode && (a.mode = b.mode);
          void 0 !== b.timestamp && (a.timestamp = b.timestamp);
          void 0 !== b.size && N.Db(a, b.size);
        },
        ia: function ia() {
          throw vb[44];
        },
        Aa: function Aa(a, b, c, d) {
          return N.createNode(a, b, c, d);
        },
        ib: function ib(a, b, c) {
          if (16384 === (a.mode & 61440)) {
            try {
              var d = wb(b, c);
            } catch (g) {}

            if (d) for (var e in d.c) {
              throw new K(55);
            }
          }

          delete a.parent.c[a.name];
          a.name = c;
          b.c[c] = a;
          a.parent = b;
        },
        kb: function kb(a, b) {
          delete a.c[b];
        },
        jb: function jb(a, b) {
          var c = wb(a, b),
              d;

          for (d in c.c) {
            throw new K(55);
          }

          delete a.c[b];
        },
        gb: function gb(a) {
          var b = [".", ".."],
              c;

          for (c in a.c) {
            a.c.hasOwnProperty(c) && b.push(c);
          }

          return b;
        },
        Ea: function Ea(a, b, c) {
          a = N.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        },
        na: function na(a) {
          if (40960 !== (a.mode & 61440)) throw new K(28);
          return a.link;
        }
      },
      f: {
        read: function read(a, b, c, d, e) {
          var g = a.node.c;
          if (e >= a.node.l) return 0;
          a = Math.min(a.node.l - e, d);
          if (8 < a && g.subarray) b.set(g.subarray(e, e + a), c);else for (d = 0; d < a; d++) {
            b[c + d] = g[e + d];
          }
          return a;
        },
        write: function write(a, b, c, d, e, g) {
          b.buffer === D.buffer && (g = !1);
          if (!d) return 0;
          a = a.node;
          a.timestamp = Date.now();

          if (b.subarray && (!a.c || a.c.subarray)) {
            if (g) return a.c = b.subarray(c, c + d), a.l = d;
            if (0 === a.l && 0 === e) return a.c = b.slice(c, c + d), a.l = d;
            if (e + d <= a.l) return a.c.set(b.subarray(c, c + d), e), d;
          }

          N.Xa(a, e + d);
          if (a.c.subarray && b.subarray) a.c.set(b.subarray(c, c + d), e);else for (g = 0; g < d; g++) {
            a.c[e + g] = b[c + g];
          }
          a.l = Math.max(a.l, e + d);
          return d;
        },
        X: function X(a, b, c) {
          1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.l);
          if (0 > b) throw new K(28);
          return b;
        },
        Ta: function Ta(a, b, c) {
          N.Xa(a.node, b + c);
          a.node.l = Math.max(a.node.l, b + c);
        },
        cb: function cb(a, b, c, d, e, g, h) {
          if (32768 !== (a.node.mode & 61440)) throw new K(43);
          a = a.node.c;

          if (h & 2 || a.buffer !== b.buffer) {
            if (0 < e || e + d < a.length) a.subarray ? a = a.subarray(e, e + d) : a = Array.prototype.slice.call(a, e, e + d);
            e = !0;
            h = b.buffer == D.buffer;
            d = xb(d);
            if (!d) throw new K(48);
            (h ? D : b).set(a, d);
          } else e = !1, d = a.byteOffset;

          return {
            j: d,
            lb: e
          };
        },
        Ca: function Ca(a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) throw new K(43);
          if (e & 2) return 0;
          N.f.write(a, b, 0, d, c, !1);
          return 0;
        }
      }
    },
        yb = null,
        zb = {},
        Ab = [],
        Bb = 1,
        Cb = null,
        Db = !0,
        Eb = {},
        K = null,
        vb = {};

    function Fb(a, b) {
      a = kb("/", a);
      b = b || {};
      if (!a) return {
        path: "",
        node: null
      };
      var c = {
        Za: !0,
        Ma: 0
      },
          d;

      for (d in c) {
        void 0 === b[d] && (b[d] = c[d]);
      }

      if (8 < b.Ma) throw new K(32);
      a = gb(a.split("/").filter(function (h) {
        return !!h;
      }), !1);
      var e = yb;
      c = "/";

      for (d = 0; d < a.length; d++) {
        var g = d === a.length - 1;
        if (g && b.parent) break;
        e = wb(e, a[d]);
        c = hb(c + "/" + a[d]);
        e.Ba && (!g || g && b.Za) && (e = e.Ba.root);
        if (!g || b.Ya) for (g = 0; 40960 === (e.mode & 61440);) {
          if (e = Gb(c), c = kb(ib(c), e), e = Fb(c, {
            Ma: b.Ma
          }).node, 40 < g++) throw new K(32);
        }
      }

      return {
        path: c,
        node: e
      };
    }

    function Hb(a) {
      for (var b;;) {
        if (a === a.parent) return a = a.J.eb, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
        b = b ? a.name + "/" + b : a.name;
        a = a.parent;
      }
    }

    function Ib(a, b) {
      for (var c = 0, d = 0; d < b.length; d++) {
        c = (c << 5) - c + b.charCodeAt(d) | 0;
      }

      return (a + c >>> 0) % Cb.length;
    }

    function wb(a, b) {
      var c;
      if (c = (c = Jb(a, "x")) ? c : a.h.ia ? 0 : 2) throw new K(c, a);

      for (c = Cb[Ib(a.id, b)]; c; c = c.xb) {
        var d = c.name;
        if (c.parent.id === a.id && d === b) return c;
      }

      return a.h.ia(a, b);
    }

    function ub(a, b, c, d) {
      a = new Kb(a, b, c, d);
      b = Ib(a.parent.id, a.name);
      a.xb = Cb[b];
      return Cb[b] = a;
    }

    var Lb = {
      r: 0,
      rs: 1052672,
      "r+": 2,
      w: 577,
      wx: 705,
      xw: 705,
      "w+": 578,
      "wx+": 706,
      "xw+": 706,
      a: 1089,
      ax: 1217,
      xa: 1217,
      "a+": 1090,
      "ax+": 1218,
      "xa+": 1218
    };

    function Mb(a) {
      var b = Lb[a];
      if ("undefined" === typeof b) throw Error("Unknown file open mode: " + a);
      return b;
    }

    function Nb(a) {
      var b = ["r", "w", "rw"][a & 3];
      a & 512 && (b += "w");
      return b;
    }

    function Jb(a, b) {
      if (Db) return 0;

      if (-1 === b.indexOf("r") || a.mode & 292) {
        if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) return 2;
      } else return 2;

      return 0;
    }

    function Ob(a, b) {
      try {
        return wb(a, b), 20;
      } catch (c) {}

      return Jb(a, "wx");
    }

    function Pb(a, b) {
      b = b || 4096;

      for (a = a || 0; a <= b; a++) {
        if (!Ab[a]) return a;
      }

      throw new K(33);
    }

    function Qb(a, b, c) {
      Rb || (Rb = function Rb() {}, Rb.prototype = {});
      var d = new Rb(),
          e;

      for (e in a) {
        d[e] = a[e];
      }

      a = d;
      b = Pb(b, c);
      a.A = b;
      return Ab[b] = a;
    }

    var tb = {
      open: function open(a) {
        a.f = zb[a.node.Da].f;
        a.f.open && a.f.open(a);
      },
      X: function X() {
        throw new K(70);
      }
    };

    function nb(a, b) {
      zb[a] = {
        f: b
      };
    }

    function Sb(a, b) {
      var c = "/" === b,
          d = !b;
      if (c && yb) throw new K(10);

      if (!c && !d) {
        var e = Fb(b, {
          Za: !1
        });
        b = e.path;
        e = e.node;
        if (e.Ba) throw new K(10);
        if (16384 !== (e.mode & 61440)) throw new K(54);
      }

      b = {
        type: a,
        ac: {},
        eb: b,
        wb: []
      };
      a = a.J(b);
      a.J = b;
      b.root = a;
      c ? yb = a : e && (e.Ba = b, e.J && e.J.wb.push(b));
      return a;
    }

    function Wb(a, b, c) {
      var d = Fb(a, {
        parent: !0
      }).node;
      a = jb(a);
      if (!a || "." === a || ".." === a) throw new K(28);
      var e = Ob(d, a);
      if (e) throw new K(e);
      if (!d.h.Aa) throw new K(63);
      return d.h.Aa(d, a, b, c);
    }

    function Xb(a) {
      Wb(a, 16895, 0);
    }

    function Yb(a, b, c) {
      "undefined" === typeof c && (c = b, b = 438);
      Wb(a, b | 8192, c);
    }

    function Zb(a, b) {
      if (!kb(a)) throw new K(44);
      var c = Fb(b, {
        parent: !0
      }).node;
      if (!c) throw new K(44);
      b = jb(b);
      var d = Ob(c, b);
      if (d) throw new K(d);
      if (!c.h.Ea) throw new K(63);
      c.h.Ea(c, b, a);
    }

    function Gb(a) {
      a = Fb(a).node;
      if (!a) throw new K(44);
      if (!a.h.na) throw new K(28);
      return kb(Hb(a.parent), a.h.na(a));
    }

    function $b(a, b, c, d) {
      if ("" === a) throw new K(44);
      b = "string" === typeof b ? Mb(b) : b;
      c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
      if ("object" === typeof a) var e = a;else {
        a = hb(a);

        try {
          e = Fb(a, {
            Ya: !(b & 131072)
          }).node;
        } catch (l) {}
      }
      var g = !1;
      if (b & 64) if (e) {
        if (b & 128) throw new K(20);
      } else e = Wb(a, c, 0), g = !0;
      if (!e) throw new K(44);
      8192 === (e.mode & 61440) && (b &= -513);
      if (b & 65536 && 16384 !== (e.mode & 61440)) throw new K(54);
      if (!g && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Nb(b) || b & 512) ? 31 : Jb(e, Nb(b)) : 44)) throw new K(c);

      if (b & 512) {
        c = e;
        var h;
        "string" === typeof c ? h = Fb(c, {
          Ya: !0
        }).node : h = c;
        if (!h.h.T) throw new K(63);
        if (16384 === (h.mode & 61440)) throw new K(31);
        if (32768 !== (h.mode & 61440)) throw new K(28);
        if (c = Jb(h, "w")) throw new K(c);
        h.h.T(h, {
          size: 0,
          timestamp: Date.now()
        });
      }

      b &= -131713;
      d = Qb({
        node: e,
        path: Hb(e),
        flags: b,
        seekable: !0,
        position: 0,
        f: e.f,
        Kb: [],
        error: !1
      }, d, void 0);
      d.f.open && d.f.open(d);
      !f.logReadFiles || b & 1 || (ac || (ac = {}), a in ac || (ac[a] = 1, q("FS.trackingDelegate error on read file: " + a)));

      try {
        Eb.onOpenFile && (e = 0, 1 !== (b & 2097155) && (e |= 1), 0 !== (b & 2097155) && (e |= 2), Eb.onOpenFile(a, e));
      } catch (l) {
        q("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + l.message);
      }

      return d;
    }

    function bc(a, b, c) {
      if (null === a.A) throw new K(8);
      if (!a.seekable || !a.f.X) throw new K(70);
      if (0 != c && 1 != c && 2 != c) throw new K(28);
      a.position = a.f.X(a, b, c);
      a.Kb = [];
    }

    function cc(a, b, c, d) {
      var e = D;
      if (0 > c || 0 > d) throw new K(28);
      if (null === a.A) throw new K(8);
      if (0 === (a.flags & 2097155)) throw new K(8);
      if (16384 === (a.node.mode & 61440)) throw new K(31);
      if (!a.f.write) throw new K(28);
      a.seekable && a.flags & 1024 && bc(a, 0, 2);
      var g = "undefined" !== typeof d;
      if (!g) d = a.position;else if (!a.seekable) throw new K(70);
      b = a.f.write(a, e, b, c, d, void 0);
      g || (a.position += b);

      try {
        if (a.path && Eb.onWriteToFile) Eb.onWriteToFile(a.path);
      } catch (h) {
        q("FS.trackingDelegate['onWriteToFile']('" + a.path + "') threw an exception: " + h.message);
      }

      return b;
    }

    function dc() {
      K || (K = function K(a, b) {
        this.node = b;

        this.Eb = function (c) {
          this.v = c;
        };

        this.Eb(a);
        this.message = "FS error";
      }, K.prototype = Error(), K.prototype.constructor = K, [44].forEach(function (a) {
        vb[a] = new K(a);
        vb[a].stack = "<generic error, no stack>";
      }));
    }

    var ec;

    function fc(a, b) {
      var c = 0;
      a && (c |= 365);
      b && (c |= 146);
      return c;
    }

    function gc(a, b, c) {
      a = hb("/dev/" + a);
      var d = fc(!!b, !!c);
      hc || (hc = 64);
      var e = hc++ << 8 | 0;
      nb(e, {
        open: function open(g) {
          g.seekable = !1;
        },
        close: function close() {
          c && c.buffer && c.buffer.length && c(10);
        },
        read: function read(g, h, l, p) {
          for (var m = 0, t = 0; t < p; t++) {
            try {
              var w = b();
            } catch (v) {
              throw new K(29);
            }

            if (void 0 === w && 0 === m) throw new K(6);
            if (null === w || void 0 === w) break;
            m++;
            h[l + t] = w;
          }

          m && (g.node.timestamp = Date.now());
          return m;
        },
        write: function write(g, h, l, p) {
          for (var m = 0; m < p; m++) {
            try {
              c(h[l + m]);
            } catch (t) {
              throw new K(29);
            }
          }

          p && (g.node.timestamp = Date.now());
          return m;
        }
      });
      Yb(a, d, e);
    }

    var hc,
        ic = {},
        Rb,
        ac,
        jc = {},
        kc = void 0;

    function O() {
      kc += 4;
      return C[kc - 4 >> 2];
    }

    function lc(a) {
      a = Ab[a];
      if (!a) throw new K(8);
      return a;
    }

    var R = {
      H: 8192,
      J: function J() {
        return ub(null, "/", 16895, 0);
      },
      ob: function ob() {
        var a = {
          o: []
        };
        a.o.push({
          buffer: new Uint8Array(R.H),
          offset: 0,
          K: 0
        });
        var b = R.O(),
            c = R.O(),
            d = ub(R.root, b, 4096, 0),
            e = ub(R.root, c, 4096, 0);
        d.ka = a;
        e.ka = a;
        a = Qb({
          path: b,
          node: d,
          flags: Mb("r"),
          seekable: !1,
          f: R.f
        });
        d.stream = a;
        c = Qb({
          path: c,
          node: e,
          flags: Mb("w"),
          seekable: !1,
          f: R.f
        });
        e.stream = c;
        return {
          Cb: a.A,
          Lb: c.A
        };
      },
      f: {
        la: function la(a) {
          var b = a.node.ka;
          if (1 === (a.flags & 2097155)) return 260;
          if (0 < b.o.length) for (a = 0; a < b.o.length; a++) {
            var c = b.o[a];
            if (0 < c.offset - c.K) return 65;
          }
          return 0;
        },
        ha: function ha() {
          return 28;
        },
        Qb: function Qb() {
          return 28;
        },
        read: function read(a, b, c, d) {
          a = a.node.ka;

          for (var e = 0, g = 0; g < a.o.length; g++) {
            var h = a.o[g];
            e += h.offset - h.K;
          }

          ja(b instanceof ArrayBuffer || ArrayBuffer.isView(b));
          b = b.subarray(c, c + d);
          if (0 >= d) return 0;
          if (0 == e) throw new K(6);
          c = d = Math.min(e, d);

          for (g = e = 0; g < a.o.length; g++) {
            h = a.o[g];
            var l = h.offset - h.K;

            if (d <= l) {
              var p = h.buffer.subarray(h.K, h.offset);
              d < l ? (p = p.subarray(0, d), h.K += d) : e++;
              b.set(p);
              break;
            } else p = h.buffer.subarray(h.K, h.offset), b.set(p), b = b.subarray(p.byteLength), d -= p.byteLength, e++;
          }

          e && e == a.o.length && (e--, a.o[e].offset = 0, a.o[e].K = 0);
          a.o.splice(0, e);
          return c;
        },
        write: function write(a, b, c, d) {
          a = a.node.ka;
          ja(b instanceof ArrayBuffer || ArrayBuffer.isView(b));
          b = b.subarray(c, c + d);
          c = b.byteLength;
          if (0 >= c) return 0;
          0 == a.o.length ? (d = {
            buffer: new Uint8Array(R.H),
            offset: 0,
            K: 0
          }, a.o.push(d)) : d = a.o[a.o.length - 1];
          ja(d.offset <= R.H);
          var e = R.H - d.offset;
          if (e >= c) return d.buffer.set(b, d.offset), d.offset += c, c;
          0 < e && (d.buffer.set(b.subarray(0, e), d.offset), d.offset += e, b = b.subarray(e, b.byteLength));
          d = b.byteLength / R.H | 0;
          e = b.byteLength % R.H;

          for (var g = 0; g < d; g++) {
            var h = {
              buffer: new Uint8Array(R.H),
              offset: R.H,
              K: 0
            };
            a.o.push(h);
            h.buffer.set(b.subarray(0, R.H));
            b = b.subarray(R.H, b.byteLength);
          }

          0 < e && (h = {
            buffer: new Uint8Array(R.H),
            offset: b.byteLength,
            K: 0
          }, a.o.push(h), h.buffer.set(b));
          return c;
        },
        close: function close(a) {
          a.node.ka.o = null;
        }
      },
      O: function O() {
        R.O.current || (R.O.current = 0);
        return "pipe[" + R.O.current++ + "]";
      }
    },
        S = {
      J: function J() {
        f.websocket = f.websocket && "object" === typeof f.websocket ? f.websocket : {};
        f.websocket.Ia = {};

        f.websocket.on = function (a, b) {
          "function" === typeof b && (this.Ia[a] = b);
          return this;
        };

        f.websocket.va = function (a, b) {
          "function" === typeof this.Ia[a] && this.Ia[a].call(this, b);
        };

        return ub(null, "/", 16895, 0);
      },
      pb: function pb(a, b, c) {
        c && ja(1 == b == (6 == c));
        a = {
          family: a,
          type: b,
          protocol: c,
          S: null,
          error: null,
          ja: {},
          pending: [],
          ca: [],
          C: S.G
        };
        b = S.O();
        c = ub(S.root, b, 49152, 0);
        c.da = a;
        b = Qb({
          path: b,
          node: c,
          flags: Mb("r+"),
          seekable: !1,
          f: S.f
        });
        a.stream = b;
        return a;
      },
      tb: function tb(a) {
        return (a = Ab[a]) && 49152 === (a.node.mode & 49152) ? a.node.da : null;
      },
      f: {
        la: function la(a) {
          a = a.node.da;
          return a.C.la(a);
        },
        ha: function ha(a, b, c) {
          a = a.node.da;
          return a.C.ha(a, b, c);
        },
        read: function read(a, b, c, d) {
          a = a.node.da;
          d = a.C.Na(a, d);
          if (!d) return 0;
          b.set(d.buffer, c);
          return d.buffer.length;
        },
        write: function write(a, b, c, d) {
          a = a.node.da;
          return a.C.Pa(a, b, c, d);
        },
        close: function close(a) {
          a = a.node.da;
          a.C.close(a);
        }
      },
      O: function O() {
        S.O.current || (S.O.current = 0);
        return "socket[" + S.O.current++ + "]";
      },
      G: {
        Wa: function Wa(a, b, c) {
          if ("object" === typeof b) {
            var d = b;
            c = b = null;
          }

          if (d) {
            if (d.Ra) b = d.Ra.cc, c = d.Ra.dc;else {
              c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url);
              if (!c) throw Error("WebSocket URL must be in the format ws(s)://address:port");
              b = c[1];
              c = parseInt(c[2], 10);
            }
          } else try {
            var e = f.websocket && "object" === typeof f.websocket,
                g = "ws:#".replace("#", "//");
            e && "string" === typeof f.websocket.url && (g = f.websocket.url);

            if ("ws://" === g || "wss://" === g) {
              var h = b.split("/");
              g = g + h[0] + ":" + c + "/" + h.slice(1).join("/");
            }

            h = "binary";
            e && "string" === typeof f.websocket.subprotocol && (h = f.websocket.subprotocol);
            var l = void 0;
            "null" !== h && (l = h = h.replace(/^ +| +$/g, "").split(/ *, */));
            e && null === f.websocket.subprotocol && (l = void 0);
            d = new WebSocket(g, l);
            d.binaryType = "arraybuffer";
          } catch (p) {
            throw new K(23);
          }
          b = {
            m: b,
            port: c,
            g: d,
            ua: []
          };
          S.G.Sa(a, b);
          S.G.ub(a, b);
          2 === a.type && "undefined" !== typeof a.ea && b.ua.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.ea & 65280) >> 8, a.ea & 255]));
          return b;
        },
        wa: function wa(a, b, c) {
          return a.ja[b + ":" + c];
        },
        Sa: function Sa(a, b) {
          a.ja[b.m + ":" + b.port] = b;
        },
        hb: function hb(a, b) {
          delete a.ja[b.m + ":" + b.port];
        },
        ub: function ub(a, b) {
          var c = !0;

          b.g.onopen = function () {
            f.websocket.va("open", a.stream.A);

            try {
              for (var d = b.ua.shift(); d;) {
                b.g.send(d), d = b.ua.shift();
              }
            } catch (e) {
              b.g.close();
            }
          };

          b.g.onclose = function () {
            f.websocket.va("close", a.stream.A);
          };

          b.g.onmessage = function (d) {
            a: {
              d = d.data;
              if ("string" === typeof d) d = new TextEncoder().encode(d);else {
                ja(void 0 !== d.byteLength);
                if (0 == d.byteLength) break a;
                d = new Uint8Array(d);
              }
              var e = c;
              c = !1;
              e && 10 === d.length && 255 === d[0] && 255 === d[1] && 255 === d[2] && 255 === d[3] && 112 === d[4] && 111 === d[5] && 114 === d[6] && 116 === d[7] ? (d = d[8] << 8 | d[9], S.G.hb(a, b), b.port = d, S.G.Sa(a, b)) : (a.ca.push({
                m: b.m,
                port: b.port,
                data: d
              }), f.websocket.va("message", a.stream.A));
            }
          };

          b.g.onerror = function () {
            a.error = 14;
            f.websocket.va("error", [a.stream.A, a.error, "ECONNREFUSED: Connection refused"]);
          };
        },
        la: function la(a) {
          if (1 === a.type && a.S) return a.pending.length ? 65 : 0;
          var b = 0,
              c = 1 === a.type ? S.G.wa(a, a.I, a.N) : null;
          if (a.ca.length || !c || c && c.g.readyState === c.g.CLOSING || c && c.g.readyState === c.g.CLOSED) b |= 65;
          if (!c || c && c.g.readyState === c.g.OPEN) b |= 4;
          if (c && c.g.readyState === c.g.CLOSING || c && c.g.readyState === c.g.CLOSED) b |= 16;
          return b;
        },
        ha: function ha(a, b, c) {
          switch (b) {
            case 21531:
              return b = 0, a.ca.length && (b = a.ca[0].data.length), C[c >> 2] = b, 0;

            default:
              return 28;
          }
        },
        close: function close(a) {
          if (a.S) {
            try {
              a.S.close();
            } catch (e) {}

            a.S = null;
          }

          for (var b = Object.keys(a.ja), c = 0; c < b.length; c++) {
            var d = a.ja[b[c]];

            try {
              d.g.close();
            } catch (e) {}

            S.G.hb(a, d);
          }

          return 0;
        },
        bind: function bind(a, b, c) {
          if ("undefined" !== typeof a.Oa || "undefined" !== typeof a.ea) throw new K(28);
          a.Oa = b;
          a.ea = c;

          if (2 === a.type) {
            a.S && (a.S.close(), a.S = null);

            try {
              a.C.bb(a, 0);
            } catch (d) {
              if (!(d instanceof K)) throw d;
              if (138 !== d.v) throw d;
            }
          }
        },
        connect: function connect(a, b, c) {
          if (a.S) throw new K(138);

          if ("undefined" !== typeof a.I && "undefined" !== typeof a.N) {
            var d = S.G.wa(a, a.I, a.N);

            if (d) {
              if (d.g.readyState === d.g.CONNECTING) throw new K(7);
              throw new K(30);
            }
          }

          b = S.G.Wa(a, b, c);
          a.I = b.m;
          a.N = b.port;
          throw new K(26);
        },
        bb: function bb() {
          throw new K(138);
        },
        accept: function accept(a) {
          if (!a.S) throw new K(28);
          var b = a.pending.shift();
          b.stream.flags = a.stream.flags;
          return b;
        },
        Tb: function Tb(a, b) {
          if (b) {
            if (void 0 === a.I || void 0 === a.N) throw new K(53);
            b = a.I;
            a = a.N;
          } else b = a.Oa || 0, a = a.ea || 0;

          return {
            m: b,
            port: a
          };
        },
        Pa: function Pa(a, b, c, d, e, g) {
          if (2 === a.type) {
            if (void 0 === e || void 0 === g) e = a.I, g = a.N;
            if (void 0 === e || void 0 === g) throw new K(17);
          } else e = a.I, g = a.N;

          var h = S.G.wa(a, e, g);

          if (1 === a.type) {
            if (!h || h.g.readyState === h.g.CLOSING || h.g.readyState === h.g.CLOSED) throw new K(53);
            if (h.g.readyState === h.g.CONNECTING) throw new K(6);
          }

          ArrayBuffer.isView(b) && (c += b.byteOffset, b = b.buffer);
          b = b.slice(c, c + d);
          if (2 === a.type && (!h || h.g.readyState !== h.g.OPEN)) return h && h.g.readyState !== h.g.CLOSING && h.g.readyState !== h.g.CLOSED || (h = S.G.Wa(a, e, g)), h.ua.push(b), d;

          try {
            return h.g.send(b), d;
          } catch (l) {
            throw new K(28);
          }
        },
        Na: function Na(a, b) {
          if (1 === a.type && a.S) throw new K(53);
          var c = a.ca.shift();

          if (!c) {
            if (1 === a.type) {
              if (a = S.G.wa(a, a.I, a.N)) {
                if (a.g.readyState === a.g.CLOSING || a.g.readyState === a.g.CLOSED) return null;
                throw new K(6);
              }

              throw new K(53);
            }

            throw new K(6);
          }

          var d = c.data.byteLength || c.data.length,
              e = c.data.byteOffset || 0,
              g = c.data.buffer || c.data;
          b = Math.min(b, d);
          var h = {
            buffer: new Uint8Array(g, e, b),
            m: c.m,
            port: c.port
          };
          1 === a.type && b < d && (c.data = new Uint8Array(g, e + b, d - b), a.ca.unshift(c));
          return h;
        }
      }
    };

    function mc(a) {
      a = a.split(".");

      for (var b = 0; 4 > b; b++) {
        var c = Number(a[b]);
        if (isNaN(c)) return null;
        a[b] = c;
      }

      return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0;
    }

    function nc(a) {
      var b,
          c,
          d = [];
      if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a)) return null;
      if ("::" === a) return [0, 0, 0, 0, 0, 0, 0, 0];
      a = 0 === a.indexOf("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
      0 < a.indexOf(".") ? (a = a.replace(/[.]/g, ":"), a = a.split(":"), a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]), a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]), a = a.slice(0, a.length - 2)) : a = a.split(":");

      for (b = c = 0; b < a.length; b++) {
        if ("string" === typeof a[b]) {
          if ("Z" === a[b]) {
            for (c = 0; c < 8 - a.length + 1; c++) {
              d[b + c] = 0;
            }

            --c;
          } else d[b + c] = oc(parseInt(a[b], 16));
        } else d[b + c] = a[b];
      }

      return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]];
    }

    var pc = 1,
        qc = {},
        rc = {};

    function sc(a) {
      var b = mc(a);
      if (null !== b) return a;
      b = nc(a);
      if (null !== b) return a;
      qc[a] ? b = qc[a] : (b = pc++, ja(65535 > b, "exceeded max address mappings of 65535"), b = "172.29." + (b & 255) + "." + (b & 65280), rc[b] = a, qc[a] = b);
      return b;
    }

    function tc(a) {
      return rc[a] ? rc[a] : null;
    }

    function uc(a) {
      return (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255);
    }

    function vc(a, b) {
      var c = B[a >> 1],
          d = wc(xa[a + 2 >> 1]);

      switch (c) {
        case 2:
          if (16 !== b) return {
            v: 28
          };
          var e = C[a + 4 >> 2];
          e = uc(e);
          break;

        case 10:
          if (28 !== b) return {
            v: 28
          };
          e = [C[a + 8 >> 2], C[a + 12 >> 2], C[a + 16 >> 2], C[a + 20 >> 2]];

          a: {
            a = "";
            var g,
                h = b = 0,
                l = 0,
                p = 0;
            e = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16];
            var m = !0;

            for (g = 0; 5 > g; g++) {
              if (0 !== e[g]) {
                m = !1;
                break;
              }
            }

            if (m) {
              g = uc(e[6] | e[7] << 16);

              if (-1 === e[5]) {
                e = "::ffff:" + g;
                break a;
              }

              if (0 === e[5]) {
                "0.0.0.0" === g && (g = "");
                "0.0.0.1" === g && (g = "1");
                e = "::" + g;
                break a;
              }
            }

            for (g = 0; 8 > g; g++) {
              0 === e[g] && (1 < g - h && (p = 0), h = g, p++), p > b && (b = p, l = g - b + 1);
            }

            for (g = 0; 8 > g; g++) {
              1 < b && 0 === e[g] && g >= l && g < l + b ? g === l && (a += ":", 0 === l && (a += ":")) : (a += Number(wc(e[g] & 65535)).toString(16), a += 7 > g ? ":" : "");
            }

            e = a;
          }

          break;

        default:
          return {
            v: 5
          };
      }

      return {
        family: c,
        m: e,
        port: d
      };
    }

    function xc(a, b, c, d) {
      switch (b) {
        case 2:
          c = mc(c);
          B[a >> 1] = b;
          C[a + 4 >> 2] = c;
          B[a + 2 >> 1] = oc(d);
          break;

        case 10:
          c = nc(c), C[a >> 2] = b, C[a + 8 >> 2] = c[0], C[a + 12 >> 2] = c[1], C[a + 16 >> 2] = c[2], C[a + 20 >> 2] = c[3], B[a + 2 >> 1] = oc(d), C[a + 4 >> 2] = 0, C[a + 24 >> 2] = 0;
      }
    }

    function yc(a) {
      switch (a) {
        case 1:
          return 0;

        case 2:
          return 1;

        case 4:
          return 2;

        case 8:
          return 3;

        default:
          throw new TypeError("Unknown type size: " + a);
      }
    }

    var zc = void 0;

    function T(a) {
      for (var b = ""; A[a];) {
        b += zc[A[a++]];
      }

      return b;
    }

    var Ac = {},
        Bc = {},
        Cc = {};

    function Dc(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }

    function Ec(a, b) {
      a = Dc(a);
      return new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b);
    }

    function Fc(a) {
      var b = Error,
          c = Ec(a, function (d) {
        this.name = a;
        this.message = d;
        d = Error(d).stack;
        void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      c.prototype = Object.create(b.prototype);
      c.prototype.constructor = c;

      c.prototype.toString = function () {
        return void 0 === this.message ? this.name : this.name + ": " + this.message;
      };

      return c;
    }

    var Gc = void 0;

    function U(a) {
      throw new Gc(a);
    }

    var Hc = void 0;

    function Ic(a) {
      throw new Hc(a);
    }

    function Jc(a, b, c) {
      function d(l) {
        l = c(l);
        l.length !== a.length && Ic("Mismatched type converter count");

        for (var p = 0; p < a.length; ++p) {
          Kc(a[p], l[p]);
        }
      }

      a.forEach(function (l) {
        Cc[l] = b;
      });
      var e = Array(b.length),
          g = [],
          h = 0;
      b.forEach(function (l, p) {
        Bc.hasOwnProperty(l) ? e[p] = Bc[l] : (g.push(l), Ac.hasOwnProperty(l) || (Ac[l] = []), Ac[l].push(function () {
          e[p] = Bc[l];
          ++h;
          h === g.length && d(e);
        }));
      });
      0 === g.length && d(e);
    }

    function Kc(a, b, c) {
      c = c || {};
      if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var d = b.name;
      a || U('type "' + d + '" must have a positive integer typeid pointer');

      if (Bc.hasOwnProperty(a)) {
        if (c.vb) return;
        U("Cannot register type '" + d + "' twice");
      }

      Bc[a] = b;
      delete Cc[a];
      Ac.hasOwnProperty(a) && (b = Ac[a], delete Ac[a], b.forEach(function (e) {
        e();
      }));
    }

    function Lc(a) {
      return {
        count: a.count,
        $: a.$,
        ma: a.ma,
        j: a.j,
        s: a.s,
        F: a.F,
        L: a.L
      };
    }

    function Mc(a) {
      U(a.b.s.i.name + " instance already deleted");
    }

    var Nc = !1;

    function Oc() {}

    function Pc(a) {
      --a.count.value;
      0 === a.count.value && (a.F ? a.L.Y(a.F) : a.s.i.Y(a.j));
    }

    function Qc(a) {
      if ("undefined" === typeof FinalizationGroup) return Qc = function Qc(b) {
        return b;
      }, a;
      Nc = new FinalizationGroup(function (b) {
        for (var c = b.next(); !c.done; c = b.next()) {
          c = c.value, c.j ? Pc(c) : console.warn("object already deleted: " + c.j);
        }
      });

      Qc = function Qc(b) {
        Nc.register(b, b.b, b.b);
        return b;
      };

      Oc = function Oc(b) {
        Nc.unregister(b.b);
      };

      return Qc(a);
    }

    var Rc = void 0,
        Sc = [];

    function Tc() {
      for (; Sc.length;) {
        var a = Sc.pop();
        a.b.$ = !1;
        a["delete"]();
      }
    }

    function Uc() {}

    var Vc = {};

    function Wc(a, b, c) {
      if (void 0 === a[b].R) {
        var d = a[b];

        a[b] = function () {
          a[b].R.hasOwnProperty(arguments.length) || U("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].R + ")!");
          return a[b].R[arguments.length].apply(this, arguments);
        };

        a[b].R = [];
        a[b].R[d.ta] = d;
      }
    }

    function Xc(a, b) {
      f.hasOwnProperty(a) ? (U("Cannot register public name '" + a + "' twice"), Wc(f, a, a), f.hasOwnProperty(void 0) && U("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), f[a].R[void 0] = b) : f[a] = b;
    }

    function Yc(a, b, c, d, e, g, h, l) {
      this.name = a;
      this.constructor = b;
      this.aa = c;
      this.Y = d;
      this.M = e;
      this.rb = g;
      this.qa = h;
      this.qb = l;
      this.zb = [];
    }

    function Zc(a, b, c) {
      for (; b !== c;) {
        b.qa || U("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.qa(a), b = b.M;
      }

      return a;
    }

    function $c(a, b) {
      if (null === b) return this.Ka && U("null is not a valid " + this.name), 0;
      b.b || U('Cannot pass "' + cd(b) + '" as a ' + this.name);
      b.b.j || U("Cannot pass deleted object as a pointer of type " + this.name);
      return Zc(b.b.j, b.b.s.i, this.i);
    }

    function dd(a, b) {
      if (null === b) {
        this.Ka && U("null is not a valid " + this.name);

        if (this.za) {
          var c = this.Ab();
          null !== a && a.push(this.Y, c);
          return c;
        }

        return 0;
      }

      b.b || U('Cannot pass "' + cd(b) + '" as a ' + this.name);
      b.b.j || U("Cannot pass deleted object as a pointer of type " + this.name);
      !this.ya && b.b.s.ya && U("Cannot convert argument of type " + (b.b.L ? b.b.L.name : b.b.s.name) + " to parameter type " + this.name);
      c = Zc(b.b.j, b.b.s.i, this.i);
      if (this.za) switch (void 0 === b.b.F && U("Passing raw pointer to smart pointer is illegal"), this.Fb) {
        case 0:
          b.b.L === this ? c = b.b.F : U("Cannot convert argument of type " + (b.b.L ? b.b.L.name : b.b.s.name) + " to parameter type " + this.name);
          break;

        case 1:
          c = b.b.F;
          break;

        case 2:
          if (b.b.L === this) c = b.b.F;else {
            var d = b.clone();
            c = this.Bb(c, ed(function () {
              d["delete"]();
            }));
            null !== a && a.push(this.Y, c);
          }
          break;

        default:
          U("Unsupporting sharing policy");
      }
      return c;
    }

    function fd(a, b) {
      if (null === b) return this.Ka && U("null is not a valid " + this.name), 0;
      b.b || U('Cannot pass "' + cd(b) + '" as a ' + this.name);
      b.b.j || U("Cannot pass deleted object as a pointer of type " + this.name);
      b.b.s.ya && U("Cannot convert argument of type " + b.b.s.name + " to parameter type " + this.name);
      return Zc(b.b.j, b.b.s.i, this.i);
    }

    function gd(a) {
      return this.fromWireType(ya[a >> 2]);
    }

    function hd(a, b, c) {
      if (b === c) return a;
      if (void 0 === c.M) return null;
      a = hd(a, b, c.M);
      return null === a ? null : c.qb(a);
    }

    var id = {};

    function jd(a, b) {
      for (void 0 === b && U("ptr should not be undefined"); a.M;) {
        b = a.qa(b), a = a.M;
      }

      return id[b];
    }

    function kd(a, b) {
      b.s && b.j || Ic("makeClassHandle requires ptr and ptrType");
      !!b.L !== !!b.F && Ic("Both smartPtrType and smartPtr must be specified");
      b.count = {
        value: 1
      };
      return Qc(Object.create(a, {
        b: {
          value: b
        }
      }));
    }

    function ld(a, b, c, d) {
      this.name = a;
      this.i = b;
      this.Ka = c;
      this.ya = d;
      this.za = !1;
      this.Y = this.Bb = this.Ab = this.fb = this.Fb = this.yb = void 0;
      void 0 !== b.M ? this.toWireType = dd : (this.toWireType = d ? $c : fd, this.U = null);
    }

    function md(a, b) {
      f.hasOwnProperty(a) || Ic("Replacing nonexistant public symbol");
      f[a] = b;
      f[a].ta = void 0;
    }

    function nd(a, b) {
      a = T(a);
      var c = f["dynCall_" + a];

      for (var d = [], e = 1; e < a.length; ++e) {
        d.push("a" + e);
      }

      e = "return function dynCall_" + (a + "_" + b) + "(" + d.join(", ") + ") {\n";
      e += "    return dynCall(rawFunction" + (d.length ? ", " : "") + d.join(", ") + ");\n";
      c = new Function("dynCall", "rawFunction", e + "};\n")(c, b);
      "function" !== typeof c && U("unknown function pointer with signature " + a + ": " + b);
      return c;
    }

    var od = void 0;

    function pd(a) {
      a = qd(a);
      var b = T(a);
      G(a);
      return b;
    }

    function rd(a, b) {
      function c(g) {
        e[g] || Bc[g] || (Cc[g] ? Cc[g].forEach(c) : (d.push(g), e[g] = !0));
      }

      var d = [],
          e = {};
      b.forEach(c);
      throw new od(a + ": " + d.map(pd).join([", "]));
    }

    function sd(a, b) {
      for (var c = [], d = 0; d < a; d++) {
        c.push(C[(b >> 2) + d]);
      }

      return c;
    }

    function td(a) {
      for (; a.length;) {
        var b = a.pop();
        a.pop()(b);
      }
    }

    function ud(a) {
      var b = Function;
      if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof b + " which is not a function");
      var c = Ec(b.name || "unknownFunctionName", function () {});
      c.prototype = b.prototype;
      c = new c();
      a = b.apply(c, a);
      return a instanceof Object ? a : c;
    }

    var vd = [],
        V = [{}, {
      value: void 0
    }, {
      value: null
    }, {
      value: !0
    }, {
      value: !1
    }];

    function ed(a) {
      switch (a) {
        case void 0:
          return 1;

        case null:
          return 2;

        case !0:
          return 3;

        case !1:
          return 4;

        default:
          var b = vd.length ? vd.pop() : V.length;
          V[b] = {
            Z: 1,
            value: a
          };
          return b;
      }
    }

    function cd(a) {
      if (null === a) return "null";
      var b = typeof a;
      return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
    }

    function wd(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            return this.fromWireType(za[c >> 2]);
          };

        case 3:
          return function (c) {
            return this.fromWireType(Aa[c >> 3]);
          };

        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }

    function xd(a, b, c) {
      switch (b) {
        case 0:
          return c ? function (d) {
            return D[d];
          } : function (d) {
            return A[d];
          };

        case 1:
          return c ? function (d) {
            return B[d >> 1];
          } : function (d) {
            return xa[d >> 1];
          };

        case 2:
          return c ? function (d) {
            return C[d >> 2];
          } : function (d) {
            return ya[d >> 2];
          };

        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }

    var yd;

    yd = function yd() {
      return performance.now();
    };

    var zd = {};

    function Ad() {
      if (!Bd) {
        var a = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
          _: ca || "./this.program"
        },
            b;

        for (b in zd) {
          a[b] = zd[b];
        }

        var c = [];

        for (b in a) {
          c.push(b + "=" + a[b]);
        }

        Bd = c;
      }

      return Bd;
    }

    var Bd;

    function Cd(a) {
      return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
    }

    function Dd(a, b) {
      for (var c = 0, d = 0; d <= b; c += a[d++]) {
        ;
      }

      return c;
    }

    var Ed = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Fd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function Gd(a, b) {
      for (a = new Date(a.getTime()); 0 < b;) {
        var c = a.getMonth(),
            d = (Cd(a.getFullYear()) ? Ed : Fd)[c];
        if (b > d - a.getDate()) b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));else {
          a.setDate(a.getDate() + b);
          break;
        }
      }

      return a;
    }

    function Hd(a, b, c, d) {
      function _e(k, r, x) {
        for (k = "number" === typeof k ? k.toString() : k || ""; k.length < r;) {
          k = x[0] + k;
        }

        return k;
      }

      function g(k, r) {
        return _e(k, r, "0");
      }

      function h(k, r) {
        function x(H) {
          return 0 > H ? -1 : 0 < H ? 1 : 0;
        }

        var u;
        0 === (u = x(k.getFullYear() - r.getFullYear())) && 0 === (u = x(k.getMonth() - r.getMonth())) && (u = x(k.getDate() - r.getDate()));
        return u;
      }

      function l(k) {
        switch (k.getDay()) {
          case 0:
            return new Date(k.getFullYear() - 1, 11, 29);

          case 1:
            return k;

          case 2:
            return new Date(k.getFullYear(), 0, 3);

          case 3:
            return new Date(k.getFullYear(), 0, 2);

          case 4:
            return new Date(k.getFullYear(), 0, 1);

          case 5:
            return new Date(k.getFullYear() - 1, 11, 31);

          case 6:
            return new Date(k.getFullYear() - 1, 11, 30);
        }
      }

      function p(k) {
        k = Gd(new Date(k.D + 1900, 0, 1), k.Ha);
        var r = new Date(k.getFullYear() + 1, 0, 4),
            x = l(new Date(k.getFullYear(), 0, 4));
        r = l(r);
        return 0 >= h(x, k) ? 0 >= h(r, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
      }

      var m = C[d + 40 >> 2];
      d = {
        Ib: C[d >> 2],
        Hb: C[d + 4 >> 2],
        Fa: C[d + 8 >> 2],
        pa: C[d + 12 >> 2],
        fa: C[d + 16 >> 2],
        D: C[d + 20 >> 2],
        Ga: C[d + 24 >> 2],
        Ha: C[d + 28 >> 2],
        ec: C[d + 32 >> 2],
        Gb: C[d + 36 >> 2],
        Jb: m ? ma(m) : ""
      };
      c = ma(c);
      m = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };

      for (var t in m) {
        c = c.replace(new RegExp(t, "g"), m[t]);
      }

      var w = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          v = "January February March April May June July August September October November December".split(" ");
      m = {
        "%a": function a(k) {
          return w[k.Ga].substring(0, 3);
        },
        "%A": function A(k) {
          return w[k.Ga];
        },
        "%b": function b(k) {
          return v[k.fa].substring(0, 3);
        },
        "%B": function B(k) {
          return v[k.fa];
        },
        "%C": function C(k) {
          return g((k.D + 1900) / 100 | 0, 2);
        },
        "%d": function d(k) {
          return g(k.pa, 2);
        },
        "%e": function e(k) {
          return _e(k.pa, 2, " ");
        },
        "%g": function g(k) {
          return p(k).toString().substring(2);
        },
        "%G": function G(k) {
          return p(k);
        },
        "%H": function H(k) {
          return g(k.Fa, 2);
        },
        "%I": function I(k) {
          k = k.Fa;
          0 == k ? k = 12 : 12 < k && (k -= 12);
          return g(k, 2);
        },
        "%j": function j(k) {
          return g(k.pa + Dd(Cd(k.D + 1900) ? Ed : Fd, k.fa - 1), 3);
        },
        "%m": function m(k) {
          return g(k.fa + 1, 2);
        },
        "%M": function M(k) {
          return g(k.Hb, 2);
        },
        "%n": function n() {
          return "\n";
        },
        "%p": function p(k) {
          return 0 <= k.Fa && 12 > k.Fa ? "AM" : "PM";
        },
        "%S": function S(k) {
          return g(k.Ib, 2);
        },
        "%t": function t() {
          return "\t";
        },
        "%u": function u(k) {
          return k.Ga || 7;
        },
        "%U": function U(k) {
          var r = new Date(k.D + 1900, 0, 1),
              x = 0 === r.getDay() ? r : Gd(r, 7 - r.getDay());
          k = new Date(k.D + 1900, k.fa, k.pa);
          return 0 > h(x, k) ? g(Math.ceil((31 - x.getDate() + (Dd(Cd(k.getFullYear()) ? Ed : Fd, k.getMonth() - 1) - 31) + k.getDate()) / 7), 2) : 0 === h(x, r) ? "01" : "00";
        },
        "%V": function V(k) {
          var r = new Date(k.D + 1901, 0, 4),
              x = l(new Date(k.D + 1900, 0, 4));
          r = l(r);
          var u = Gd(new Date(k.D + 1900, 0, 1), k.Ha);
          return 0 > h(u, x) ? "53" : 0 >= h(r, u) ? "01" : g(Math.ceil((x.getFullYear() < k.D + 1900 ? k.Ha + 32 - x.getDate() : k.Ha + 1 - x.getDate()) / 7), 2);
        },
        "%w": function w(k) {
          return k.Ga;
        },
        "%W": function W(k) {
          var r = new Date(k.D, 0, 1),
              x = 1 === r.getDay() ? r : Gd(r, 0 === r.getDay() ? 1 : 7 - r.getDay() + 1);
          k = new Date(k.D + 1900, k.fa, k.pa);
          return 0 > h(x, k) ? g(Math.ceil((31 - x.getDate() + (Dd(Cd(k.getFullYear()) ? Ed : Fd, k.getMonth() - 1) - 31) + k.getDate()) / 7), 2) : 0 === h(x, r) ? "01" : "00";
        },
        "%y": function y(k) {
          return (k.D + 1900).toString().substring(2);
        },
        "%Y": function Y(k) {
          return k.D + 1900;
        },
        "%z": function z(k) {
          k = k.Gb;
          var r = 0 <= k;
          k = Math.abs(k) / 60;
          return (r ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
        },
        "%Z": function Z(k) {
          return k.Jb;
        },
        "%%": function _() {
          return "%";
        }
      };

      for (t in m) {
        0 <= c.indexOf(t) && (c = c.replace(new RegExp(t, "g"), m[t](d)));
      }

      t = pb(c, !1);
      if (t.length > b) return 0;
      D.set(t, a);
      return t.length - 1;
    }

    function Kb(a, b, c, d) {
      a || (a = this);
      this.parent = a;
      this.J = a.J;
      this.Ba = null;
      this.id = Bb++;
      this.name = b;
      this.mode = c;
      this.h = {};
      this.f = {};
      this.Da = d;
    }

    Object.defineProperties(Kb.prototype, {
      read: {
        get: function get() {
          return 365 === (this.mode & 365);
        },
        set: function set(a) {
          a ? this.mode |= 365 : this.mode &= -366;
        }
      },
      write: {
        get: function get() {
          return 146 === (this.mode & 146);
        },
        set: function set(a) {
          a ? this.mode |= 146 : this.mode &= -147;
        }
      }
    });
    dc();
    Cb = Array(4096);
    Sb(N, "/");
    Xb("/tmp");
    Xb("/home");
    Xb("/home/web_user");

    (function () {
      Xb("/dev");
      nb(259, {
        read: function read() {
          return 0;
        },
        write: function write(c, d, e, g) {
          return g;
        }
      });
      Yb("/dev/null", 259);
      mb(1280, rb);
      mb(1536, sb);
      Yb("/dev/tty", 1280);
      Yb("/dev/tty1", 1536);

      if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
        var a = new Uint8Array(1);

        var b = function b() {
          crypto.getRandomValues(a);
          return a[0];
        };
      }

      b || (b = function b() {
        z("random_device");
      });
      gc("random", b);
      gc("urandom", b);
      Xb("/dev/shm");
      Xb("/dev/shm/tmp");
    })();

    Xb("/proc");
    Xb("/proc/self");
    Xb("/proc/self/fd");
    Sb({
      J: function J() {
        var a = ub("/proc/self", "fd", 16895, 73);
        a.h = {
          ia: function ia(b, c) {
            var d = Ab[+c];
            if (!d) throw new K(8);
            b = {
              parent: null,
              J: {
                eb: "fake"
              },
              h: {
                na: function na() {
                  return d.path;
                }
              }
            };
            return b.parent = b;
          }
        };
        return a;
      }
    }, "/proc/self/fd");

    for (var Id = Array(256), Jd = 0; 256 > Jd; ++Jd) {
      Id[Jd] = String.fromCharCode(Jd);
    }

    zc = Id;
    Gc = f.BindingError = Fc("BindingError");
    Hc = f.InternalError = Fc("InternalError");

    Uc.prototype.isAliasOf = function (a) {
      if (!(this instanceof Uc && a instanceof Uc)) return !1;
      var b = this.b.s.i,
          c = this.b.j,
          d = a.b.s.i;

      for (a = a.b.j; b.M;) {
        c = b.qa(c), b = b.M;
      }

      for (; d.M;) {
        a = d.qa(a), d = d.M;
      }

      return b === d && c === a;
    };

    Uc.prototype.clone = function () {
      this.b.j || Mc(this);
      if (this.b.ma) return this.b.count.value += 1, this;
      var a = Qc(Object.create(Object.getPrototypeOf(this), {
        b: {
          value: Lc(this.b)
        }
      }));
      a.b.count.value += 1;
      a.b.$ = !1;
      return a;
    };

    Uc.prototype["delete"] = function () {
      this.b.j || Mc(this);
      this.b.$ && !this.b.ma && U("Object already scheduled for deletion");
      Oc(this);
      Pc(this.b);
      this.b.ma || (this.b.F = void 0, this.b.j = void 0);
    };

    Uc.prototype.isDeleted = function () {
      return !this.b.j;
    };

    Uc.prototype.deleteLater = function () {
      this.b.j || Mc(this);
      this.b.$ && !this.b.ma && U("Object already scheduled for deletion");
      Sc.push(this);
      1 === Sc.length && Rc && Rc(Tc);
      this.b.$ = !0;
      return this;
    };

    ld.prototype.sb = function (a) {
      this.fb && (a = this.fb(a));
      return a;
    };

    ld.prototype.ga = function (a) {
      this.Y && this.Y(a);
    };

    ld.prototype.argPackAdvance = 8;
    ld.prototype.readValueFromPointer = gd;

    ld.prototype.deleteObject = function (a) {
      if (null !== a) a["delete"]();
    };

    ld.prototype.fromWireType = function (a) {
      function b() {
        return this.za ? kd(this.i.aa, {
          s: this.yb,
          j: c,
          L: this,
          F: a
        }) : kd(this.i.aa, {
          s: this,
          j: a
        });
      }

      var c = this.sb(a);
      if (!c) return this.ga(a), null;
      var d = jd(this.i, c);

      if (void 0 !== d) {
        if (0 === d.b.count.value) return d.b.j = c, d.b.F = a, d.clone();
        d = d.clone();
        this.ga(a);
        return d;
      }

      d = this.i.rb(c);
      d = Vc[d];
      if (!d) return b.call(this);
      d = this.ya ? d.nb : d.pointerType;
      var e = hd(c, this.i, d.i);
      return null === e ? b.call(this) : this.za ? kd(d.i.aa, {
        s: d,
        j: e,
        L: this,
        F: a
      }) : kd(d.i.aa, {
        s: d,
        j: e
      });
    };

    f.getInheritedInstanceCount = function () {
      return Object.keys(id).length;
    };

    f.getLiveInheritedInstances = function () {
      var a = [],
          b;

      for (b in id) {
        id.hasOwnProperty(b) && a.push(id[b]);
      }

      return a;
    };

    f.flushPendingDeletes = Tc;

    f.setDelayFunction = function (a) {
      Rc = a;
      Sc.length && Rc && Rc(Tc);
    };

    od = f.UnboundTypeError = Fc("UnboundTypeError");

    f.count_emval_handles = function () {
      for (var a = 0, b = 5; b < V.length; ++b) {
        void 0 !== V[b] && ++a;
      }

      return a;
    };

    f.get_first_emval = function () {
      for (var a = 5; a < V.length; ++a) {
        if (void 0 !== V[a]) return V[a];
      }

      return null;
    };

    function pb(a, b) {
      var c = Array(oa(a) + 1);
      a = na(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }

    var se = {
      __cxa_allocate_exception: function __cxa_allocate_exception(a) {
        return xb(a);
      },
      __cxa_atexit: function __cxa_atexit(a, b) {
        Ia.unshift({
          $a: a,
          sa: b
        });
      },
      __cxa_begin_catch: function __cxa_begin_catch(a) {
        var b = F[a];
        b && !b.Ua && (b.Ua = !0, Kd.Qa--);
        b && (b.oa = !1);
        $a.push(a);
        (b = ab(a)) && F[b].Z++;
        return a;
      },
      __cxa_current_primary_exception: function __cxa_current_primary_exception() {
        var a = $a[$a.length - 1] || 0;

        if (a) {
          var b = ab(a);
          b && F[b].Z++;
        }

        return a;
      },
      __cxa_decrement_exception_refcount: function __cxa_decrement_exception_refcount(a) {
        cb(ab(a));
      },
      __cxa_end_catch: function __cxa_end_catch() {
        W(0);
        var a = $a.pop();
        a && (cb(ab(a)), db = 0);
      },
      __cxa_find_matching_catch_2: function __cxa_find_matching_catch_2() {
        var a = db;
        if (!a) return y = 0;
        var b = F[a],
            c = b.type;
        if (!c) return y = 0, a | 0;
        var d = Array.prototype.slice.call(arguments);
        Ld(c);
        C[22580] = a;
        a = 90320;

        for (var e = 0; e < d.length; e++) {
          if (d[e] && Md(d[e], c, a)) return a = C[a >> 2], b.ra.push(a), y = d[e], a | 0;
        }

        a = C[a >> 2];
        y = c;
        return a | 0;
      },
      __cxa_find_matching_catch_3: function __cxa_find_matching_catch_3() {
        var a = db;
        if (!a) return y = 0;
        var b = F[a],
            c = b.type;
        if (!c) return y = 0, a | 0;
        var d = Array.prototype.slice.call(arguments);
        Ld(c);
        C[22580] = a;
        a = 90320;

        for (var e = 0; e < d.length; e++) {
          if (d[e] && Md(d[e], c, a)) return a = C[a >> 2], b.ra.push(a), y = d[e], a | 0;
        }

        a = C[a >> 2];
        y = c;
        return a | 0;
      },
      __cxa_find_matching_catch_6: function __cxa_find_matching_catch_6() {
        var a = db;
        if (!a) return y = 0;
        var b = F[a],
            c = b.type;
        if (!c) return y = 0, a | 0;
        var d = Array.prototype.slice.call(arguments);
        Ld(c);
        C[22580] = a;
        a = 90320;

        for (var e = 0; e < d.length; e++) {
          if (d[e] && Md(d[e], c, a)) return a = C[a >> 2], b.ra.push(a), y = d[e], a | 0;
        }

        a = C[a >> 2];
        y = c;
        return a | 0;
      },
      __cxa_free_exception: bb,
      __cxa_increment_exception_refcount: function __cxa_increment_exception_refcount(a) {
        (a = ab(a)) && F[a].Z++;
      },
      __cxa_rethrow: eb,
      __cxa_rethrow_primary_exception: function __cxa_rethrow_primary_exception(a) {
        a && (a = ab(a), $a.push(a), F[a].oa = !0, eb());
      },
      __cxa_throw: function __cxa_throw(a, b, c) {
        F[a] = {
          j: a,
          ra: [a],
          type: b,
          ga: c,
          Z: 0,
          Ua: !1,
          oa: !1
        };
        db = a;
        "uncaught_exception" in Kd ? Kd.Qa++ : Kd.Qa = 1;
        throw a;
      },
      __cxa_uncaught_exceptions: function __cxa_uncaught_exceptions() {
        return Kd.Qa;
      },
      __map_file: function __map_file() {
        fb(63);
        return -1;
      },
      __resumeException: function __resumeException(a) {
        db || (db = a);
        throw a;
      },
      __sys__newselect: function __sys__newselect(a, b, c, d) {
        for (var e = 0, g = b ? C[b >> 2] : 0, h = b ? C[b + 4 >> 2] : 0, l = c ? C[c >> 2] : 0, p = c ? C[c + 4 >> 2] : 0, m = d ? C[d >> 2] : 0, t = d ? C[d + 4 >> 2] : 0, w = 0, v = 0, k = 0, r = 0, x = 0, u = 0, H = (b ? C[b >> 2] : 0) | (c ? C[c >> 2] : 0) | (d ? C[d >> 2] : 0), I = (b ? C[b + 4 >> 2] : 0) | (c ? C[c + 4 >> 2] : 0) | (d ? C[d + 4 >> 2] : 0), J = 0; J < a; J++) {
          var E = 1 << J % 32;

          if (32 > J ? H & E : I & E) {
            var P = Ab[J];
            if (!P) throw new K(8);
            var L = 5;
            P.f.la && (L = P.f.la(P));
            L & 1 && (32 > J ? g & E : h & E) && (32 > J ? w |= E : v |= E, e++);
            L & 4 && (32 > J ? l & E : p & E) && (32 > J ? k |= E : r |= E, e++);
            L & 2 && (32 > J ? m & E : t & E) && (32 > J ? x |= E : u |= E, e++);
          }
        }

        b && (C[b >> 2] = w, C[b + 4 >> 2] = v);
        c && (C[c >> 2] = k, C[c + 4 >> 2] = r);
        d && (C[d >> 2] = x, C[d + 4 >> 2] = u);
        return e;
      },
      __sys_fcntl64: function __sys_fcntl64(a, b, c) {
        kc = c;

        try {
          var d = lc(a);

          switch (b) {
            case 0:
              var e = O();
              return 0 > e ? -28 : $b(d.path, d.flags, 0, e).A;

            case 1:
            case 2:
              return 0;

            case 3:
              return d.flags;

            case 4:
              return e = O(), d.flags |= e, 0;

            case 12:
              return e = O(), B[e + 0 >> 1] = 2, 0;

            case 13:
            case 14:
              return 0;

            case 16:
            case 8:
              return -28;

            case 9:
              return fb(28), -1;

            default:
              return -28;
          }
        } catch (g) {
          return "undefined" !== typeof ic && g instanceof K || z(g), -g.v;
        }
      },
      __sys_ioctl: function __sys_ioctl(a, b, c) {
        kc = c;

        try {
          var d = lc(a);

          switch (b) {
            case 21509:
            case 21505:
              return d.u ? 0 : -59;

            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
              return d.u ? 0 : -59;

            case 21519:
              if (!d.u) return -59;
              var e = O();
              return C[e >> 2] = 0;

            case 21520:
              return d.u ? -28 : -59;

            case 21531:
              a = e = O();
              if (!d.f.ha) throw new K(59);
              return d.f.ha(d, b, a);

            case 21523:
              return d.u ? 0 : -59;

            case 21524:
              return d.u ? 0 : -59;

            default:
              z("bad ioctl syscall " + b);
          }
        } catch (g) {
          return "undefined" !== typeof ic && g instanceof K || z(g), -g.v;
        }
      },
      __sys_munmap: function __sys_munmap(a, b) {
        try {
          if (-1 === (a | 0) || 0 === b) var c = -28;else {
            var d = jc[a];

            if (d && b === d.Xb) {
              var e = Ab[d.A];
              d.bc & 2 && e && e.f.Ca && e.f.Ca(e, A.slice(a, a + b), d.offset, b, d.flags);
              jc[a] = null;
              d.lb && G(d.Yb);
            }

            c = 0;
          }
          return c;
        } catch (g) {
          return "undefined" !== typeof ic && g instanceof K || z(g), -g.v;
        }
      },
      __sys_pause: function __sys_pause() {
        return -27;
      },
      __sys_pipe: function __sys_pipe(a) {
        try {
          if (0 == a) throw new K(21);
          var b = R.ob();
          C[a >> 2] = b.Cb;
          C[a + 4 >> 2] = b.Lb;
          return 0;
        } catch (c) {
          return "undefined" !== typeof ic && c instanceof K || z(c), -c.v;
        }
      },
      __sys_read: function __sys_read(a, b, c) {
        try {
          var d = lc(a);
          a = D;
          if (0 > c || 0 > g) throw new K(28);
          if (null === d.A) throw new K(8);
          if (1 === (d.flags & 2097155)) throw new K(8);
          if (16384 === (d.node.mode & 61440)) throw new K(31);
          if (!d.f.read) throw new K(28);
          var e = "undefined" !== typeof g;
          if (!e) var g = d.position;else if (!d.seekable) throw new K(70);
          var h = d.f.read(d, a, b, c, g);
          e || (d.position += h);
          return h;
        } catch (l) {
          return "undefined" !== typeof ic && l instanceof K || z(l), -l.v;
        }
      },
      __sys_socketcall: function __sys_socketcall(a, b) {
        try {
          kc = b;

          b = function b() {
            var Q = S.tb(O());
            if (!Q) throw new K(8);
            return Q;
          };

          var c = function c(Q) {
            var ad = O(),
                we = O();
            if (Q && 0 === ad) return null;
            Q = vc(ad, we);
            if (Q.v) throw new K(Q.v);
            Q.m = tc(Q.m) || Q.m;
            return Q;
          };

          switch (a) {
            case 1:
              var d = O(),
                  e = O(),
                  g = O(),
                  h = S.pb(d, e, g);
              return h.stream.A;

            case 2:
              h = b();
              var l = c();
              h.C.bind(h, l.m, l.port);
              return 0;

            case 3:
              return h = b(), l = c(), h.C.connect(h, l.m, l.port), 0;

            case 4:
              h = b();
              var p = O();
              h.C.bb(h, p);
              return 0;

            case 5:
              h = b();
              var m = O();
              O();
              var t = h.C.accept(h);
              m && xc(m, t.family, sc(t.I), t.N);
              return t.stream.A;

            case 6:
              return h = b(), m = O(), O(), xc(m, h.family, sc(h.Oa || "0.0.0.0"), h.ea), 0;

            case 7:
              h = b();
              m = O();
              O();
              if (!h.I) return -53;
              xc(m, h.family, sc(h.I), h.N);
              return 0;

            case 11:
              h = b();
              var w = O(),
                  v = O();
              O();
              var k = c(!0);
              return k ? h.C.Pa(h, D, w, v, k.m, k.port) : cc(h.stream, w, v);

            case 12:
              h = b();
              var r = O(),
                  x = O();
              O();
              m = O();
              O();
              var u = h.C.Na(h, x);
              if (!u) return 0;
              m && xc(m, h.family, sc(u.m), u.port);
              A.set(u.buffer, r);
              return u.buffer.byteLength;

            case 14:
              return -50;

            case 15:
              h = b();
              var H = O(),
                  I = O(),
                  J = O(),
                  E = O();
              return 1 === H && 4 === I ? (C[J >> 2] = h.error, C[E >> 2] = 4, h.error = null, 0) : -50;

            case 16:
              h = b();
              w = O();
              O();
              var P = C[w + 8 >> 2],
                  L = C[w + 12 >> 2],
                  X = C[w >> 2],
                  qb = C[w + 4 >> 2];

              if (X) {
                l = vc(X, qb);
                if (l.v) return -l.v;
                var xe = l.port;
                m = tc(l.m) || l.m;
              }

              for (var Ba = 0, M = 0; M < L; M++) {
                Ba += C[P + (8 * M + 4) >> 2];
              }

              var bd = new Uint8Array(Ba);

              for (M = v = 0; M < L; M++) {
                var Tb = C[P + 8 * M >> 2],
                    Ub = C[P + (8 * M + 4) >> 2];

                for (r = 0; r < Ub; r++) {
                  bd[v++] = D[Tb + r >> 0];
                }
              }

              return h.C.Pa(h, bd, 0, Ba, m, xe);

            case 17:
              h = b();
              w = O();
              O();
              P = C[w + 8 >> 2];
              L = C[w + 12 >> 2];

              for (M = Ba = 0; M < L; M++) {
                Ba += C[P + (8 * M + 4) >> 2];
              }

              u = h.C.Na(h, Ba);
              if (!u) return 0;
              (X = C[w >> 2]) && xc(X, h.family, sc(u.m), u.port);
              h = 0;
              var Vb = u.buffer.byteLength;

              for (M = 0; 0 < Vb && M < L; M++) {
                if (Tb = C[P + 8 * M >> 2], Ub = C[P + (8 * M + 4) >> 2]) v = Math.min(Ub, Vb), r = u.buffer.subarray(h, h + v), A.set(r, Tb + h), h += v, Vb -= v;
              }

              return h;

            default:
              return -52;
          }
        } catch (Q) {
          return "undefined" !== typeof ic && Q instanceof K || z(Q), -Q.v;
        }
      },
      _embind_register_bool: function _embind_register_bool(a, b, c, d, e) {
        var g = yc(c);
        b = T(b);
        Kc(a, {
          name: b,
          fromWireType: function fromWireType(h) {
            return !!h;
          },
          toWireType: function toWireType(h, l) {
            return l ? d : e;
          },
          argPackAdvance: 8,
          readValueFromPointer: function readValueFromPointer(h) {
            if (1 === c) var l = D;else if (2 === c) l = B;else if (4 === c) l = C;else throw new TypeError("Unknown boolean type size: " + b);
            return this.fromWireType(l[h >> g]);
          },
          U: null
        });
      },
      _embind_register_class: function _embind_register_class(a, b, c, d, e, g, h, l, p, m, t, w, v) {
        t = T(t);
        g = nd(e, g);
        l && (l = nd(h, l));
        m && (m = nd(p, m));
        v = nd(w, v);
        var k = Dc(t);
        Xc(k, function () {
          rd("Cannot construct " + t + " due to unbound types", [d]);
        });
        Jc([a, b, c], d ? [d] : [], function (r) {
          r = r[0];

          if (d) {
            var x = r.i;
            var u = x.aa;
          } else u = Uc.prototype;

          r = Ec(k, function () {
            if (Object.getPrototypeOf(this) !== H) throw new Gc("Use 'new' to construct " + t);
            if (void 0 === I.W) throw new Gc(t + " has no accessible constructor");
            var E = I.W[arguments.length];
            if (void 0 === E) throw new Gc("Tried to invoke ctor of " + t + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(I.W).toString() + ") parameters instead!");
            return E.apply(this, arguments);
          });
          var H = Object.create(u, {
            constructor: {
              value: r
            }
          });
          r.prototype = H;
          var I = new Yc(t, r, H, v, x, g, l, m);
          x = new ld(t, I, !0, !1);
          u = new ld(t + "*", I, !1, !1);
          var J = new ld(t + " const*", I, !1, !0);
          Vc[a] = {
            pointerType: u,
            nb: J
          };
          md(k, r);
          return [x, u, J];
        });
      },
      _embind_register_class_constructor: function _embind_register_class_constructor(a, b, c, d, e, g) {
        ja(0 < b);
        var h = sd(b, c);
        e = nd(d, e);
        var l = [g],
            p = [];
        Jc([], [a], function (m) {
          m = m[0];
          var t = "constructor " + m.name;
          void 0 === m.i.W && (m.i.W = []);
          if (void 0 !== m.i.W[b - 1]) throw new Gc("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + m.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");

          m.i.W[b - 1] = function () {
            rd("Cannot construct " + m.name + " due to unbound types", h);
          };

          Jc([], h, function (w) {
            m.i.W[b - 1] = function () {
              arguments.length !== b - 1 && U(t + " called with " + arguments.length + " arguments, expected " + (b - 1));
              p.length = 0;
              l.length = b;

              for (var v = 1; v < b; ++v) {
                l[v] = w[v].toWireType(p, arguments[v - 1]);
              }

              v = e.apply(null, l);
              td(p);
              return w[0].fromWireType(v);
            };

            return [];
          });
          return [];
        });
      },
      _embind_register_class_function: function _embind_register_class_function(a, b, c, d, e, g, h, l) {
        var p = sd(c, d);
        b = T(b);
        g = nd(e, g);
        Jc([], [a], function (m) {
          function t() {
            rd("Cannot call " + w + " due to unbound types", p);
          }

          m = m[0];
          var w = m.name + "." + b;
          l && m.i.zb.push(b);
          var v = m.i.aa,
              k = v[b];
          void 0 === k || void 0 === k.R && k.className !== m.name && k.ta === c - 2 ? (t.ta = c - 2, t.className = m.name, v[b] = t) : (Wc(v, b, w), v[b].R[c - 2] = t);
          Jc([], p, function (r) {
            var x = w,
                u = m,
                H = g,
                I = r.length;
            2 > I && U("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var J = null !== r[1] && null !== u,
                E = !1;

            for (u = 1; u < r.length; ++u) {
              if (null !== r[u] && void 0 === r[u].U) {
                E = !0;
                break;
              }
            }

            var P = "void" !== r[0].name,
                L = "",
                X = "";

            for (u = 0; u < I - 2; ++u) {
              L += (0 !== u ? ", " : "") + "arg" + u, X += (0 !== u ? ", " : "") + "arg" + u + "Wired";
            }

            x = "return function " + Dc(x) + "(" + L + ") {\nif (arguments.length !== " + (I - 2) + ") {\nthrowBindingError('function " + x + " called with ' + arguments.length + ' arguments, expected " + (I - 2) + " args!');\n}\n";
            E && (x += "var destructors = [];\n");
            var qb = E ? "destructors" : "null";
            L = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
            H = [U, H, h, td, r[0], r[1]];
            J && (x += "var thisWired = classParam.toWireType(" + qb + ", this);\n");

            for (u = 0; u < I - 2; ++u) {
              x += "var arg" + u + "Wired = argType" + u + ".toWireType(" + qb + ", arg" + u + "); // " + r[u + 2].name + "\n", L.push("argType" + u), H.push(r[u + 2]);
            }

            J && (X = "thisWired" + (0 < X.length ? ", " : "") + X);
            x += (P ? "var rv = " : "") + "invoker(fn" + (0 < X.length ? ", " : "") + X + ");\n";
            if (E) x += "runDestructors(destructors);\n";else for (u = J ? 1 : 2; u < r.length; ++u) {
              I = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired", null !== r[u].U && (x += I + "_dtor(" + I + "); // " + r[u].name + "\n", L.push(I + "_dtor"), H.push(r[u].U));
            }
            P && (x += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
            L.push(x + "}\n");
            r = ud(L).apply(null, H);
            void 0 === v[b].R ? (r.ta = c - 2, v[b] = r) : v[b].R[c - 2] = r;
            return [];
          });
          return [];
        });
      },
      _embind_register_emval: function _embind_register_emval(a, b) {
        b = T(b);
        Kc(a, {
          name: b,
          fromWireType: function fromWireType(c) {
            var d = V[c].value;
            4 < c && 0 === --V[c].Z && (V[c] = void 0, vd.push(c));
            return d;
          },
          toWireType: function toWireType(c, d) {
            return ed(d);
          },
          argPackAdvance: 8,
          readValueFromPointer: gd,
          U: null
        });
      },
      _embind_register_float: function _embind_register_float(a, b, c) {
        c = yc(c);
        b = T(b);
        Kc(a, {
          name: b,
          fromWireType: function fromWireType(d) {
            return d;
          },
          toWireType: function toWireType(d, e) {
            if ("number" !== typeof e && "boolean" !== typeof e) throw new TypeError('Cannot convert "' + cd(e) + '" to ' + this.name);
            return e;
          },
          argPackAdvance: 8,
          readValueFromPointer: wd(b, c),
          U: null
        });
      },
      _embind_register_integer: function _embind_register_integer(a, b, c, d, e) {
        function g(m) {
          return m;
        }

        b = T(b);
        -1 === e && (e = 4294967295);
        var h = yc(c);

        if (0 === d) {
          var l = 32 - 8 * c;

          g = function g(m) {
            return m << l >>> l;
          };
        }

        var p = -1 != b.indexOf("unsigned");
        Kc(a, {
          name: b,
          fromWireType: g,
          toWireType: function toWireType(m, t) {
            if ("number" !== typeof t && "boolean" !== typeof t) throw new TypeError('Cannot convert "' + cd(t) + '" to ' + this.name);
            if (t < d || t > e) throw new TypeError('Passing a number "' + cd(t) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + d + ", " + e + "]!");
            return p ? t >>> 0 : t | 0;
          },
          argPackAdvance: 8,
          readValueFromPointer: xd(b, h, 0 !== d),
          U: null
        });
      },
      _embind_register_memory_view: function _embind_register_memory_view(a, b, c) {
        function d(g) {
          g >>= 2;
          var h = ya;
          return new e(wa, h[g + 1], h[g]);
        }

        var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
        c = T(c);
        Kc(a, {
          name: c,
          fromWireType: d,
          argPackAdvance: 8,
          readValueFromPointer: d
        }, {
          vb: !0
        });
      },
      _embind_register_std_string: function _embind_register_std_string(a, b) {
        b = T(b);
        var c = "std::string" === b;
        Kc(a, {
          name: b,
          fromWireType: function fromWireType(d) {
            var e = ya[d >> 2];

            if (c) {
              var g = A[d + 4 + e],
                  h = 0;
              0 != g && (h = g, A[d + 4 + e] = 0);
              var l = d + 4;

              for (g = 0; g <= e; ++g) {
                var p = d + 4 + g;

                if (0 == A[p]) {
                  l = ma(l);
                  if (void 0 === m) var m = l;else m += String.fromCharCode(0), m += l;
                  l = p + 1;
                }
              }

              0 != h && (A[d + 4 + e] = h);
            } else {
              m = Array(e);

              for (g = 0; g < e; ++g) {
                m[g] = String.fromCharCode(A[d + 4 + g]);
              }

              m = m.join("");
            }

            G(d);
            return m;
          },
          toWireType: function toWireType(d, e) {
            e instanceof ArrayBuffer && (e = new Uint8Array(e));
            var g = "string" === typeof e;
            g || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || U("Cannot pass non-string to std::string");
            var h = (c && g ? function () {
              return oa(e);
            } : function () {
              return e.length;
            })(),
                l = xb(4 + h + 1);
            ya[l >> 2] = h;
            if (c && g) na(e, A, l + 4, h + 1);else if (g) for (g = 0; g < h; ++g) {
              var p = e.charCodeAt(g);
              255 < p && (G(l), U("String has UTF-16 code units that do not fit in 8 bits"));
              A[l + 4 + g] = p;
            } else for (g = 0; g < h; ++g) {
              A[l + 4 + g] = e[g];
            }
            null !== d && d.push(G, l);
            return l;
          },
          argPackAdvance: 8,
          readValueFromPointer: gd,
          U: function U(d) {
            G(d);
          }
        });
      },
      _embind_register_std_wstring: function _embind_register_std_wstring(a, b, c) {
        c = T(c);

        if (2 === b) {
          var d = qa;
          var e = ra;
          var g = sa;

          var h = function h() {
            return xa;
          };

          var l = 1;
        } else 4 === b && (d = ta, e = ua, g = va, h = function h() {
          return ya;
        }, l = 2);

        Kc(a, {
          name: c,
          fromWireType: function fromWireType(p) {
            var m = ya[p >> 2],
                t = h(),
                w = t[p + 4 + m * b >> l],
                v = 0;
            0 != w && (v = w, t[p + 4 + m * b >> l] = 0);
            var k = p + 4;

            for (w = 0; w <= m; ++w) {
              var r = p + 4 + w * b;

              if (0 == t[r >> l]) {
                k = d(k);
                if (void 0 === x) var x = k;else x += String.fromCharCode(0), x += k;
                k = r + b;
              }
            }

            0 != v && (t[p + 4 + m * b >> l] = v);
            G(p);
            return x;
          },
          toWireType: function toWireType(p, m) {
            "string" !== typeof m && U("Cannot pass non-string to C++ string type " + c);
            var t = g(m),
                w = xb(4 + t + b);
            ya[w >> 2] = t >> l;
            e(m, w + 4, t + b);
            null !== p && p.push(G, w);
            return w;
          },
          argPackAdvance: 8,
          readValueFromPointer: gd,
          U: function U(p) {
            G(p);
          }
        });
      },
      _embind_register_void: function _embind_register_void(a, b) {
        b = T(b);
        Kc(a, {
          Wb: !0,
          name: b,
          argPackAdvance: 0,
          fromWireType: function fromWireType() {},
          toWireType: function toWireType() {}
        });
      },
      abort: function abort() {
        z();
      },
      clock_gettime: function clock_gettime(a, b) {
        if (0 === a) a = Date.now();else if (1 === a || 4 === a) a = yd();else return fb(28), -1;
        C[b >> 2] = a / 1E3 | 0;
        C[b + 4 >> 2] = a % 1E3 * 1E6 | 0;
        return 0;
      },
      emscripten_get_sbrk_ptr: function emscripten_get_sbrk_ptr() {
        return 90160;
      },
      emscripten_memcpy_big: function emscripten_memcpy_big(a, b, c) {
        A.copyWithin(a, b, b + c);
      },
      emscripten_resize_heap: function emscripten_resize_heap(a) {
        var b = A.length;
        if (2147483648 < a) return !1;

        for (var c = 1; 4 >= c; c *= 2) {
          var d = b * (1 + .2 / c);
          d = Math.min(d, a + 100663296);
          d = Math.max(16777216, a, d);
          0 < d % 65536 && (d += 65536 - d % 65536);

          a: {
            try {
              fa.grow(Math.min(2147483648, d) - wa.byteLength + 65535 >>> 16);
              Ca(fa.buffer);
              var e = 1;
              break a;
            } catch (g) {}

            e = void 0;
          }

          if (e) return !0;
        }

        return !1;
      },
      environ_get: function environ_get(a, b) {
        var c = 0;
        Ad().forEach(function (d, e) {
          var g = b + c;
          e = C[a + 4 * e >> 2] = g;

          for (g = 0; g < d.length; ++g) {
            D[e++ >> 0] = d.charCodeAt(g);
          }

          D[e >> 0] = 0;
          c += d.length + 1;
        });
        return 0;
      },
      environ_sizes_get: function environ_sizes_get(a, b) {
        var c = Ad();
        C[a >> 2] = c.length;
        var d = 0;
        c.forEach(function (e) {
          d += e.length + 1;
        });
        C[b >> 2] = d;
        return 0;
      },
      fd_close: function fd_close(a) {
        try {
          var b = lc(a);
          if (null === b.A) throw new K(8);
          b.Ja && (b.Ja = null);

          try {
            b.f.close && b.f.close(b);
          } catch (c) {
            throw c;
          } finally {
            Ab[b.A] = null;
          }

          b.A = null;
          return 0;
        } catch (c) {
          return "undefined" !== typeof ic && c instanceof K || z(c), c.v;
        }
      },
      fd_seek: function fd_seek(a, b, c, d, e) {
        try {
          var g = lc(a);
          a = 4294967296 * c + (b >>> 0);
          if (-9007199254740992 >= a || 9007199254740992 <= a) return -61;
          bc(g, a, d);
          Ya = [g.position >>> 0, (Xa = g.position, 1 <= +La(Xa) ? 0 < Xa ? (Oa(+Na(Xa / 4294967296), 4294967295) | 0) >>> 0 : ~~+Ma((Xa - +(~~Xa >>> 0)) / 4294967296) >>> 0 : 0)];
          C[e >> 2] = Ya[0];
          C[e + 4 >> 2] = Ya[1];
          g.Ja && 0 === a && 0 === d && (g.Ja = null);
          return 0;
        } catch (h) {
          return "undefined" !== typeof ic && h instanceof K || z(h), h.v;
        }
      },
      fd_write: function fd_write(a, b, c, d) {
        try {
          a: {
            for (var e = lc(a), g = a = 0; g < c; g++) {
              var h = cc(e, C[b + 8 * g >> 2], C[b + (8 * g + 4) >> 2], void 0);

              if (0 > h) {
                var l = -1;
                break a;
              }

              a += h;
            }

            l = a;
          }

          C[d >> 2] = l;
          return 0;
        } catch (p) {
          return "undefined" !== typeof ic && p instanceof K || z(p), p.v;
        }
      },
      getTempRet0: function getTempRet0() {
        return y | 0;
      },
      invoke_diii: Nd,
      invoke_fiii: Od,
      invoke_i: Pd,
      invoke_idiii: Qd,
      invoke_ii: Rd,
      invoke_iid: Sd,
      invoke_iii: Td,
      invoke_iiii: Ud,
      invoke_iiiii: Vd,
      invoke_iiiiii: Wd,
      invoke_iiiiiii: Xd,
      invoke_iiiiiiii: Yd,
      invoke_iiiiiiiiiii: Zd,
      invoke_iiiiiiiiiiii: $d,
      invoke_iiiiiiiiiiiii: ae,
      invoke_iij: be,
      invoke_ijj: ce,
      invoke_ijjiii: de,
      invoke_ji: ee,
      invoke_jii: fe,
      invoke_jiiii: ge,
      invoke_v: he,
      invoke_vi: ie,
      invoke_vii: je,
      invoke_viid: ke,
      invoke_viii: le,
      invoke_viiii: me,
      invoke_viiiii: ne,
      invoke_viiiiii: oe,
      invoke_viiiiiii: pe,
      invoke_viiiiiiiiii: qe,
      invoke_viiiiiiiiiiiiiii: re,
      llvm_eh_typeid_for: function llvm_eh_typeid_for(a) {
        return a;
      },
      memory: fa,
      pthread_condattr_init: function pthread_condattr_init() {
        return 0;
      },
      pthread_condattr_setclock: function pthread_condattr_setclock() {
        return 0;
      },
      pthread_create: function pthread_create() {
        return 6;
      },
      pthread_detach: function pthread_detach() {},
      pthread_join: function pthread_join() {},
      pthread_sigmask: function pthread_sigmask() {
        q("pthread_sigmask() is not supported: this is a no-op.");
        return 0;
      },
      setTempRet0: function setTempRet0(a) {
        y = a | 0;
      },
      sigfillset: function sigfillset(a) {
        C[a >> 2] = 4294967295;
        return 0;
      },
      strftime_l: function strftime_l(a, b, c, d) {
        return Hd(a, b, c, d);
      },
      table: ha
    },
        te = function () {
      function a(e) {
        f.asm = e.exports;
        Pa--;
        f.monitorRunDependencies && f.monitorRunDependencies(Pa);
        0 == Pa && (null !== Qa && (clearInterval(Qa), Qa = null), Ra && (e = Ra, Ra = null, e()));
      }

      function b(e) {
        a(e.instance);
      }

      function c(e) {
        return Wa().then(function (g) {
          return WebAssembly.instantiate(g, d);
        }).then(e, function (g) {
          q("failed to asynchronously prepare wasm: " + g);
          z(g);
        });
      }

      var d = {
        env: se,
        wasi_snapshot_preview1: se
      };
      Pa++;
      f.monitorRunDependencies && f.monitorRunDependencies(Pa);
      if (f.instantiateWasm) try {
        return f.instantiateWasm(d, a);
      } catch (e) {
        return q("Module.instantiateWasm callback failed with error: " + e), !1;
      }

      (function () {
        if (ea || "function" !== typeof WebAssembly.instantiateStreaming || Sa() || "function" !== typeof fetch) return c(b);
        fetch(Ta, {
          credentials: "same-origin"
        }).then(function (e) {
          return WebAssembly.instantiateStreaming(e, d).then(b, function (g) {
            q("wasm streaming compile failed: " + g);
            q("falling back to ArrayBuffer instantiation");
            c(b);
          });
        });
      })();

      return {};
    }();

    f.asm = te;

    var Za = f.___wasm_call_ctors = function () {
      return (Za = f.___wasm_call_ctors = f.asm.__wasm_call_ctors).apply(null, arguments);
    },
        G = f._free = function () {
      return (G = f._free = f.asm.free).apply(null, arguments);
    };

    f.___errno_location = function () {
      return (f.___errno_location = f.asm.__errno_location).apply(null, arguments);
    };

    var xb = f._malloc = function () {
      return (xb = f._malloc = f.asm.malloc).apply(null, arguments);
    },
        oc = f._htons = function () {
      return (oc = f._htons = f.asm.htons).apply(null, arguments);
    };

    f._htonl = function () {
      return (f._htonl = f.asm.htonl).apply(null, arguments);
    };

    var wc = f._ntohs = function () {
      return (wc = f._ntohs = f.asm.ntohs).apply(null, arguments);
    },
        W = f._setThrew = function () {
      return (W = f._setThrew = f.asm.setThrew).apply(null, arguments);
    },
        Kd = f.__ZSt18uncaught_exceptionv = function () {
      return (Kd = f.__ZSt18uncaught_exceptionv = f.asm._ZSt18uncaught_exceptionv).apply(null, arguments);
    },
        Md = f.___cxa_can_catch = function () {
      return (Md = f.___cxa_can_catch = f.asm.__cxa_can_catch).apply(null, arguments);
    },
        Ld = f.___cxa_is_pointer_type = function () {
      return (Ld = f.___cxa_is_pointer_type = f.asm.__cxa_is_pointer_type).apply(null, arguments);
    },
        qd = f.___getTypeName = function () {
      return (qd = f.___getTypeName = f.asm.__getTypeName).apply(null, arguments);
    };

    f.___embind_register_native_and_builtin_types = function () {
      return (f.___embind_register_native_and_builtin_types = f.asm.__embind_register_native_and_builtin_types).apply(null, arguments);
    };

    f._emscripten_main_thread_process_queued_calls = function () {
      return (f._emscripten_main_thread_process_queued_calls = f.asm.emscripten_main_thread_process_queued_calls).apply(null, arguments);
    };

    var ue = f.dynCall_v = function () {
      return (ue = f.dynCall_v = f.asm.dynCall_v).apply(null, arguments);
    },
        ve = f.dynCall_vi = function () {
      return (ve = f.dynCall_vi = f.asm.dynCall_vi).apply(null, arguments);
    },
        ye = f.dynCall_vii = function () {
      return (ye = f.dynCall_vii = f.asm.dynCall_vii).apply(null, arguments);
    },
        ze = f.dynCall_viii = function () {
      return (ze = f.dynCall_viii = f.asm.dynCall_viii).apply(null, arguments);
    },
        Ae = f.dynCall_viiii = function () {
      return (Ae = f.dynCall_viiii = f.asm.dynCall_viiii).apply(null, arguments);
    },
        Be = f.dynCall_viiiii = function () {
      return (Be = f.dynCall_viiiii = f.asm.dynCall_viiiii).apply(null, arguments);
    },
        Ce = f.dynCall_viiiiii = function () {
      return (Ce = f.dynCall_viiiiii = f.asm.dynCall_viiiiii).apply(null, arguments);
    },
        De = f.dynCall_viiiiiii = function () {
      return (De = f.dynCall_viiiiiii = f.asm.dynCall_viiiiiii).apply(null, arguments);
    },
        Ee = f.dynCall_viiiiiiiiii = function () {
      return (Ee = f.dynCall_viiiiiiiiii = f.asm.dynCall_viiiiiiiiii).apply(null, arguments);
    },
        Fe = f.dynCall_viiiiiiiiiiiiiii = function () {
      return (Fe = f.dynCall_viiiiiiiiiiiiiii = f.asm.dynCall_viiiiiiiiiiiiiii).apply(null, arguments);
    },
        Ge = f.dynCall_viid = function () {
      return (Ge = f.dynCall_viid = f.asm.dynCall_viid).apply(null, arguments);
    },
        He = f.dynCall_i = function () {
      return (He = f.dynCall_i = f.asm.dynCall_i).apply(null, arguments);
    },
        Ie = f.dynCall_ii = function () {
      return (Ie = f.dynCall_ii = f.asm.dynCall_ii).apply(null, arguments);
    },
        Je = f.dynCall_iii = function () {
      return (Je = f.dynCall_iii = f.asm.dynCall_iii).apply(null, arguments);
    },
        Ke = f.dynCall_iiii = function () {
      return (Ke = f.dynCall_iiii = f.asm.dynCall_iiii).apply(null, arguments);
    },
        Le = f.dynCall_iiiii = function () {
      return (Le = f.dynCall_iiiii = f.asm.dynCall_iiiii).apply(null, arguments);
    },
        Me = f.dynCall_iiiiii = function () {
      return (Me = f.dynCall_iiiiii = f.asm.dynCall_iiiiii).apply(null, arguments);
    },
        Ne = f.dynCall_iiiiiii = function () {
      return (Ne = f.dynCall_iiiiiii = f.asm.dynCall_iiiiiii).apply(null, arguments);
    },
        Oe = f.dynCall_iiiiiiii = function () {
      return (Oe = f.dynCall_iiiiiiii = f.asm.dynCall_iiiiiiii).apply(null, arguments);
    },
        Pe = f.dynCall_iiiiiiiiiii = function () {
      return (Pe = f.dynCall_iiiiiiiiiii = f.asm.dynCall_iiiiiiiiiii).apply(null, arguments);
    },
        Qe = f.dynCall_iiiiiiiiiiii = function () {
      return (Qe = f.dynCall_iiiiiiiiiiii = f.asm.dynCall_iiiiiiiiiiii).apply(null, arguments);
    },
        Re = f.dynCall_iiiiiiiiiiiii = function () {
      return (Re = f.dynCall_iiiiiiiiiiiii = f.asm.dynCall_iiiiiiiiiiiii).apply(null, arguments);
    },
        Se = f.dynCall_iij = function () {
      return (Se = f.dynCall_iij = f.asm.dynCall_iij).apply(null, arguments);
    },
        Te = f.dynCall_iid = function () {
      return (Te = f.dynCall_iid = f.asm.dynCall_iid).apply(null, arguments);
    },
        Ue = f.dynCall_ijj = function () {
      return (Ue = f.dynCall_ijj = f.asm.dynCall_ijj).apply(null, arguments);
    },
        Ve = f.dynCall_ijjiii = function () {
      return (Ve = f.dynCall_ijjiii = f.asm.dynCall_ijjiii).apply(null, arguments);
    },
        We = f.dynCall_idiii = function () {
      return (We = f.dynCall_idiii = f.asm.dynCall_idiii).apply(null, arguments);
    },
        Xe = f.dynCall_ji = function () {
      return (Xe = f.dynCall_ji = f.asm.dynCall_ji).apply(null, arguments);
    },
        Ye = f.dynCall_jii = function () {
      return (Ye = f.dynCall_jii = f.asm.dynCall_jii).apply(null, arguments);
    },
        Ze = f.dynCall_jiiii = function () {
      return (Ze = f.dynCall_jiiii = f.asm.dynCall_jiiii).apply(null, arguments);
    },
        $e = f.dynCall_fiii = function () {
      return ($e = f.dynCall_fiii = f.asm.dynCall_fiii).apply(null, arguments);
    },
        af = f.dynCall_diii = function () {
      return (af = f.dynCall_diii = f.asm.dynCall_diii).apply(null, arguments);
    },
        Y = f.stackSave = function () {
      return (Y = f.stackSave = f.asm.stackSave).apply(null, arguments);
    };

    f.stackAlloc = function () {
      return (f.stackAlloc = f.asm.stackAlloc).apply(null, arguments);
    };

    var Z = f.stackRestore = function () {
      return (Z = f.stackRestore = f.asm.stackRestore).apply(null, arguments);
    };

    f.__growWasmMemory = function () {
      return (f.__growWasmMemory = f.asm.__growWasmMemory).apply(null, arguments);
    };

    f.dynCall_iidiiii = function () {
      return (f.dynCall_iidiiii = f.asm.dynCall_iidiiii).apply(null, arguments);
    };

    f.dynCall_jiji = function () {
      return (f.dynCall_jiji = f.asm.dynCall_jiji).apply(null, arguments);
    };

    f.dynCall_iiiiiiiii = function () {
      return (f.dynCall_iiiiiiiii = f.asm.dynCall_iiiiiiiii).apply(null, arguments);
    };

    f.dynCall_iiiiij = function () {
      return (f.dynCall_iiiiij = f.asm.dynCall_iiiiij).apply(null, arguments);
    };

    f.dynCall_iiiiid = function () {
      return (f.dynCall_iiiiid = f.asm.dynCall_iiiiid).apply(null, arguments);
    };

    f.dynCall_iiiiijj = function () {
      return (f.dynCall_iiiiijj = f.asm.dynCall_iiiiijj).apply(null, arguments);
    };

    f.dynCall_iiiiiijj = function () {
      return (f.dynCall_iiiiiijj = f.asm.dynCall_iiiiiijj).apply(null, arguments);
    };

    function Rd(a, b) {
      var c = Y();

      try {
        return Ie(a, b);
      } catch (d) {
        Z(c);
        if (d !== d + 0 && "longjmp" !== d) throw d;
        W(1, 0);
      }
    }

    function me(a, b, c, d, e) {
      var g = Y();

      try {
        Ae(a, b, c, d, e);
      } catch (h) {
        Z(g);
        if (h !== h + 0 && "longjmp" !== h) throw h;
        W(1, 0);
      }
    }

    function ie(a, b) {
      var c = Y();

      try {
        ve(a, b);
      } catch (d) {
        Z(c);
        if (d !== d + 0 && "longjmp" !== d) throw d;
        W(1, 0);
      }
    }

    function Td(a, b, c) {
      var d = Y();

      try {
        return Je(a, b, c);
      } catch (e) {
        Z(d);
        if (e !== e + 0 && "longjmp" !== e) throw e;
        W(1, 0);
      }
    }

    function je(a, b, c) {
      var d = Y();

      try {
        ye(a, b, c);
      } catch (e) {
        Z(d);
        if (e !== e + 0 && "longjmp" !== e) throw e;
        W(1, 0);
      }
    }

    function le(a, b, c, d) {
      var e = Y();

      try {
        ze(a, b, c, d);
      } catch (g) {
        Z(e);
        if (g !== g + 0 && "longjmp" !== g) throw g;
        W(1, 0);
      }
    }

    function Vd(a, b, c, d, e) {
      var g = Y();

      try {
        return Le(a, b, c, d, e);
      } catch (h) {
        Z(g);
        if (h !== h + 0 && "longjmp" !== h) throw h;
        W(1, 0);
      }
    }

    function Ud(a, b, c, d) {
      var e = Y();

      try {
        return Ke(a, b, c, d);
      } catch (g) {
        Z(e);
        if (g !== g + 0 && "longjmp" !== g) throw g;
        W(1, 0);
      }
    }

    function he(a) {
      var b = Y();

      try {
        ue(a);
      } catch (c) {
        Z(b);
        if (c !== c + 0 && "longjmp" !== c) throw c;
        W(1, 0);
      }
    }

    function oe(a, b, c, d, e, g, h) {
      var l = Y();

      try {
        Ce(a, b, c, d, e, g, h);
      } catch (p) {
        Z(l);
        if (p !== p + 0 && "longjmp" !== p) throw p;
        W(1, 0);
      }
    }

    function Wd(a, b, c, d, e, g) {
      var h = Y();

      try {
        return Me(a, b, c, d, e, g);
      } catch (l) {
        Z(h);
        if (l !== l + 0 && "longjmp" !== l) throw l;
        W(1, 0);
      }
    }

    function Pd(a) {
      var b = Y();

      try {
        return He(a);
      } catch (c) {
        Z(b);
        if (c !== c + 0 && "longjmp" !== c) throw c;
        W(1, 0);
      }
    }

    function Qd(a, b, c, d, e) {
      var g = Y();

      try {
        return We(a, b, c, d, e);
      } catch (h) {
        Z(g);
        if (h !== h + 0 && "longjmp" !== h) throw h;
        W(1, 0);
      }
    }

    function ne(a, b, c, d, e, g) {
      var h = Y();

      try {
        Be(a, b, c, d, e, g);
      } catch (l) {
        Z(h);
        if (l !== l + 0 && "longjmp" !== l) throw l;
        W(1, 0);
      }
    }

    function Sd(a, b, c) {
      var d = Y();

      try {
        return Te(a, b, c);
      } catch (e) {
        Z(d);
        if (e !== e + 0 && "longjmp" !== e) throw e;
        W(1, 0);
      }
    }

    function Yd(a, b, c, d, e, g, h, l) {
      var p = Y();

      try {
        return Oe(a, b, c, d, e, g, h, l);
      } catch (m) {
        Z(p);
        if (m !== m + 0 && "longjmp" !== m) throw m;
        W(1, 0);
      }
    }

    function pe(a, b, c, d, e, g, h, l) {
      var p = Y();

      try {
        De(a, b, c, d, e, g, h, l);
      } catch (m) {
        Z(p);
        if (m !== m + 0 && "longjmp" !== m) throw m;
        W(1, 0);
      }
    }

    function Xd(a, b, c, d, e, g, h) {
      var l = Y();

      try {
        return Ne(a, b, c, d, e, g, h);
      } catch (p) {
        Z(l);
        if (p !== p + 0 && "longjmp" !== p) throw p;
        W(1, 0);
      }
    }

    function Zd(a, b, c, d, e, g, h, l, p, m, t) {
      var w = Y();

      try {
        return Pe(a, b, c, d, e, g, h, l, p, m, t);
      } catch (v) {
        Z(w);
        if (v !== v + 0 && "longjmp" !== v) throw v;
        W(1, 0);
      }
    }

    function ae(a, b, c, d, e, g, h, l, p, m, t, w, v) {
      var k = Y();

      try {
        return Re(a, b, c, d, e, g, h, l, p, m, t, w, v);
      } catch (r) {
        Z(k);
        if (r !== r + 0 && "longjmp" !== r) throw r;
        W(1, 0);
      }
    }

    function Od(a, b, c, d) {
      var e = Y();

      try {
        return $e(a, b, c, d);
      } catch (g) {
        Z(e);
        if (g !== g + 0 && "longjmp" !== g) throw g;
        W(1, 0);
      }
    }

    function Nd(a, b, c, d) {
      var e = Y();

      try {
        return af(a, b, c, d);
      } catch (g) {
        Z(e);
        if (g !== g + 0 && "longjmp" !== g) throw g;
        W(1, 0);
      }
    }

    function $d(a, b, c, d, e, g, h, l, p, m, t, w) {
      var v = Y();

      try {
        return Qe(a, b, c, d, e, g, h, l, p, m, t, w);
      } catch (k) {
        Z(v);
        if (k !== k + 0 && "longjmp" !== k) throw k;
        W(1, 0);
      }
    }

    function qe(a, b, c, d, e, g, h, l, p, m, t) {
      var w = Y();

      try {
        Ee(a, b, c, d, e, g, h, l, p, m, t);
      } catch (v) {
        Z(w);
        if (v !== v + 0 && "longjmp" !== v) throw v;
        W(1, 0);
      }
    }

    function re(a, b, c, d, e, g, h, l, p, m, t, w, v, k, r, x) {
      var u = Y();

      try {
        Fe(a, b, c, d, e, g, h, l, p, m, t, w, v, k, r, x);
      } catch (H) {
        Z(u);
        if (H !== H + 0 && "longjmp" !== H) throw H;
        W(1, 0);
      }
    }

    function ke(a, b, c, d) {
      var e = Y();

      try {
        Ge(a, b, c, d);
      } catch (g) {
        Z(e);
        if (g !== g + 0 && "longjmp" !== g) throw g;
        W(1, 0);
      }
    }

    function ce(a, b, c, d, e) {
      var g = Y();

      try {
        return Ue(a, b, c, d, e);
      } catch (h) {
        Z(g);
        if (h !== h + 0 && "longjmp" !== h) throw h;
        W(1, 0);
      }
    }

    function de(a, b, c, d, e, g, h, l) {
      var p = Y();

      try {
        return Ve(a, b, c, d, e, g, h, l);
      } catch (m) {
        Z(p);
        if (m !== m + 0 && "longjmp" !== m) throw m;
        W(1, 0);
      }
    }

    function ee(a, b) {
      var c = Y();

      try {
        return Xe(a, b);
      } catch (d) {
        Z(c);
        if (d !== d + 0 && "longjmp" !== d) throw d;
        W(1, 0);
      }
    }

    function be(a, b, c, d) {
      var e = Y();

      try {
        return Se(a, b, c, d);
      } catch (g) {
        Z(e);
        if (g !== g + 0 && "longjmp" !== g) throw g;
        W(1, 0);
      }
    }

    function fe(a, b, c) {
      var d = Y();

      try {
        return Ye(a, b, c);
      } catch (e) {
        Z(d);
        if (e !== e + 0 && "longjmp" !== e) throw e;
        W(1, 0);
      }
    }

    function ge(a, b, c, d, e) {
      var g = Y();

      try {
        return Ze(a, b, c, d, e);
      } catch (h) {
        Z(g);
        if (h !== h + 0 && "longjmp" !== h) throw h;
        W(1, 0);
      }
    }

    f.asm = te;
    var bf;

    f.then = function (a) {
      if (bf) a(f);else {
        var b = f.onRuntimeInitialized;

        f.onRuntimeInitialized = function () {
          b && b();
          a(f);
        };
      }
      return f;
    };

    Ra = function cf() {
      bf || df();
      bf || (Ra = cf);
    };

    function df() {
      function a() {
        if (!bf && (bf = !0, f.calledRun = !0, !ia)) {
          f.noFSInit || ec || (ec = !0, dc(), f.stdin = f.stdin, f.stdout = f.stdout, f.stderr = f.stderr, f.stdin ? gc("stdin", f.stdin) : Zb("/dev/tty", "/dev/stdin"), f.stdout ? gc("stdout", null, f.stdout) : Zb("/dev/tty", "/dev/stdout"), f.stderr ? gc("stderr", null, f.stderr) : Zb("/dev/tty1", "/dev/stderr"), $b("/dev/stdin", "r"), $b("/dev/stdout", "w"), $b("/dev/stderr", "w"));
          R.root = Sb(R, null);
          S.root = Sb(S, null);
          Ea(Ga);
          Db = !1;
          Ea(Ha);
          if (f.onRuntimeInitialized) f.onRuntimeInitialized();
          if (f.postRun) for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length;) {
            var b = f.postRun.shift();
            Ja.unshift(b);
          }
          Ea(Ja);
        }
      }

      if (!(0 < Pa)) {
        if (f.preRun) for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length;) {
          Ka();
        }
        Ea(Fa);
        0 < Pa || (f.setStatus ? (f.setStatus("Running..."), setTimeout(function () {
          setTimeout(function () {
            f.setStatus("");
          }, 1);
          a();
        }, 1)) : a());
      }
    }

    f.run = df;
    if (f.preInit) for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length;) {
      f.preInit.pop()();
    }
    noExitRuntime = !0;
    df();
    return Tiro;
  };
}();

if (true) module.exports = Tiro;else {}

/***/ })

})
//# sourceMappingURL=index.js.152593957e6b0dd9bce9.hot-update.js.map