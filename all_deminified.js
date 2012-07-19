/*1342666573,169924973,JIT Construction: v593918,en_US*/

window.FB || (function() {
    var ES5 = function() {
            __d("ES5ArrayPrototype", [], function(a, b, c, d, e, f) {
                var g = {};
                g.map = function(h, i) {
                    if (typeof h != 'function') throw new TypeError();
                    var j, k = this.length,
                        l = new Array(k);
                    for (j = 0; j < k; ++j) if (j in this) l[j] = h.call(i, this[j], j, this);
                    return l;
                };
                g.forEach = function(h, i) {
                    g.map.call(this, h, i);
                };
                g.filter = function(h, i) {
                    if (typeof h != 'function') throw new TypeError();
                    var j, k, l = this.length,
                        m = [];
                    for (j = 0; j < l; ++j) if (j in this) {
                        k = this[j];
                        if (h.call(i, k, j, this)) m.push(k);
                    }
                    return m;
                };
                g.every = function(h, i) {
                    if (typeof h != 'function') throw new TypeError();
                    var j = new Object(this),
                        k = j.length;
                    for (var l = 0; l < k; l++) if (l in j) if (!h.call(i, j[l], l, j)) return false;
                    return true;
                };
                g.some = function(h, i) {
                    if (typeof h != 'function') throw new TypeError();
                    var j = new Object(this),
                        k = j.length;
                    for (var l = 0; l < k; l++) if (l in j) if (h.call(i, j[l], l, j)) return true;
                    return false;
                };
                g.indexOf = function(h, i) {
                    var j = this.length;
                    i |= 0;
                    if (i < 0) i += j;
                    for (; i < j; i++) if (i in this && this[i] === h) return i;
                    return -1;
                };
                e.exports = g;
            });
            __d("ES5FunctionPrototype", [], function(a, b, c, d, e, f) {
                var g = {};
                g.bind = function(h) {
                    if (typeof this != 'function') throw new TypeError('Bind must be called on a function');
                    var i = this,
                        j = Array.prototype.slice.call(arguments, 1);

                    function k() {
                        return i.apply(h, j.concat(Array.prototype.slice.call(arguments)));
                    }
                    k.displayName = 'bound:' + (i.displayName || i.name || '(?)');
                    k.toString = function l() {
                        return 'bound: ' + i;
                    };
                    return k;
                };
                e.exports = g;
            });
            __d("ES5StringPrototype", [], function(a, b, c, d, e, f) {
                var g = {};
                g.trim = function() {
                    if (this == null) throw new TypeError('String.prototype.trim called on null or undefined');
                    return String.prototype.replace.call(this, /^\s+|\s+$/g, '');
                };
                e.exports = g;
            });
            __d("ES5Array", [], function(a, b, c, d, e, f) {
                var g = {};
                g.isArray = function(h) {
                    return Object.prototype.toString.call(h) == '[object Array]';
                };
                e.exports = g;
            });
            __d("ES5Object", [], function(a, b, c, d, e, f) {
                var g = {};
                g.create = function(h) {
                    var i = typeof h;
                    if (i != 'object' && i != 'function') throw new TypeError('Object prototype may only be a Object or null');
                    var j = new Function();
                    j.prototype = h;
                    return new j();
                };
                g.keys = function(h) {
                    var i = typeof h;
                    if (i != 'object' && i != 'function' || h === null) throw new TypeError('Object.keys called on non-object');
                    var j = [];
                    for (var k in h) if (Object.prototype.hasOwnProperty.call(h, k)) j.push(k);
                    var l = !({
                        toString: true
                    }).propertyIsEnumerable('toString'),
                        m = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'prototypeIsEnumerable', 'constructor'];
                    if (l) for (var n = 0; n < m.length; n++) {
                        var o = m[n];
                        if (Object.prototype.hasOwnProperty.call(h, o)) j.push(o);
                    }
                    return j;
                };
                e.exports = g;
            });
            __d("ES5Date", [], function(a, b, c, d, e, f) {
                var g = {};
                g.now = function() {
                    return new Date().getTime();
                };
                e.exports = g;
            });
            /**
             * @providesModule JSON3
             * @option preserve-header
             *
             *! JSON v3.1 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
             */
            __d("JSON3", [], function(a, b, c, d, e, f) {
                var g = {}.toString,
                    h = {}.hasOwnProperty,
                    i, j, k;
                j = typeof f.stringify == "function";
                k = typeof f.parse == "function";
                (function() {
                    var l = '{"result":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',
                        m, n, o;
                    if (j) {
                        m = function q() {
                            return 1;
                        };
                        m.toJSON = m;
                        try {
                            switch (false) {
                            case f.stringify(0) === "0":
                            case f.stringify(new(0).constructor()) === "0":
                            case f.stringify(new "".constructor()) == '""':
                            case f.stringify(g) === void 0:
                            case f.stringify(void 0) === void 0:
                            case f.stringify() === void 0:
                            case f.stringify(m) === "1":
                            case f.stringify([m]) == "[1]":
                            case f.stringify([void 0]) == "[null]":
                            case f.stringify(null) == "null":
                            case f.stringify([void 0, g, null]) == "[null,null,null]":
                            case f.stringify({
                                    result: [m, true, false, null, "\0\b\n\f\r\t"]
                                }) == l:
                            case f.stringify(null, m) === "1":
                            case f.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]":
                            case (m = new Date(-8.64e+15)).getUTCFullYear() != -271821 || f.stringify(m) == '"-271821-04-20T00:00:00.000Z"':
                            case (m = new Date(8.64e+15)).getUTCFullYear() != 275760 || f.stringify(m) == '"+275760-09-13T00:00:00.000Z"':
                                j = false;
                            }
                        } catch (p) {
                            j = false;
                        }
                    }
                    if (k) try {
                        if (f.parse("0") === 0 && !f.parse(false)) {
                            o = f.parse(l);
                            if ((k = o.result.length == 5 && o.result[0] == 1)) {
                                try {
                                    k = !f.parse('"\t"');
                                } catch (p) {}
                                if (k) try {
                                    k = f.parse("+1") != 1 && f.parse("01") != 1;
                                } catch (p) {}
                            }
                        }
                    } catch (p) {
                        k = false;
                    }
                })();
                if (typeof h != "function") h = (function() {
                    var l, m = {},
                        n = m.constructor;
                    if ((m.__proto__ = null, m.__proto__ = {
                        toString: 1
                    }, m).toString != g) {
                        l = function o(p) {
                            var q = this.__proto__,
                                r = p in (this.__proto__ = null, this);
                            this.__proto__ = q;
                            return r;
                        };
                    } else l = function o(p) {
                        var q = (this.constructor || n).prototype;
                        return p in this && !(p in q && this[p] === q[p]);
                    };
                    m = null;
                    return l;
                })();
                i = (function() {
                    var l, m, n, o = 0;

                    function p() {
                        this.valueOf = 0;
                    }
                    p.prototype.valueOf = 0;
                    l = new p();
                    for (m in l) if (h.call(l, m)) o += 1;
                    l = null;
                    if (!o) {
                        l = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                        n = function q(r, s) {
                            var t = g.call(r) == "[object Function]",
                                u, v;
                            for (u in r) if (!(t && u == "prototype") && h.call(r, u)) s(u);
                            for (v = l.length; v--;) {
                                u = l[v];
                                if (h.call(r, u)) s(u);
                            }
                        };
                    } else if (o == 2) {
                        n = function q(r, s) {
                            var t = {},
                                u = g.call(r) == "[object Function]",
                                v;
                            for (v in r) if (!(u && v == "prototype") && !h.call(t, v) && (t[v] = 1) && h.call(r, v)) s(v);
                        };
                    } else n = function q(r, s) {
                        var t = g.call(r) == "[object Function]",
                            u, v;
                        for (u in r) if (!(t && u == "prototype") && h.call(r, u) && !(v = u === "constructor")) s(u);
                        if (v || h.call(r, "constructor")) s("constructor");
                    };
                    return n;
                })();
                if (!j) f.stringify = (function() {
                    var l = {
                        "\\": "\\\\",
                        '"': '\\"',
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t"
                    };

                    function m(q, r) {
                        r = "000000" + (r || 0);
                        return r.slice(r.length - q);
                    }
                    function n(q) {
                        var r = '"',
                            s = 0,
                            t;
                        for (; t = q.charAt(s); s += 1) r += '\\"\b\f\n\r\t'.indexOf(t) > -1 ? l[t] : t < " " ? "\\u00" + m(2, t.charCodeAt(0).toString(16)) : t;
                        return r + '"';
                    }
                    function o(q, r, s, t, u, v, w) {
                        var x = r[q],
                            y, z, aa, ba, ca, da, ea, fa;
                        if (typeof x == "object" && x) if (g.call(x) == "[object Date]" && !h.call(x, "toJSON")) {
                            if (x > -1 / 0 && x < 1 / 0) {
                                z = x.getUTCFullYear();
                                x = (z <= 0 || z >= 10000 ? (z < 0 ? "-" : "+") + m(6, z < 0 ? -z : z) : m(4, z)) + "-" + m(2, x.getUTCMonth() + 1) + "-" + m(2, x.getUTCDate()) + "T" + m(2, x.getUTCHours()) + ":" + m(2, x.getUTCMinutes()) + ":" + m(2, x.getUTCSeconds()) + "." + m(3, x.getUTCMilliseconds()) + "Z";
                            } else x = null;
                        } else if (typeof x.toJSON == "function") x = x.toJSON(q);
                        if (s) x = s.call(r, q, x);
                        if (x === null) return "null";
                        y = g.call(x);
                        switch (y) {
                        case "[object Boolean]":
                            return "" + x;
                        case "[object Number]":
                            return x > -1 / 0 && x < 1 / 0 ? "" + x : "null";
                        case "[object String]":
                            return n(x);
                        }
                        if (typeof x == "object") {
                            for (da = w.length; da--;) if (w[da] == x) throw TypeError("Cyclic structures cannot be serialized.");
                            w.push(x);
                            aa = [];
                            ea = v;
                            v += u;
                            if (y == "[object Array]") {
                                for (ca = 0, da = x.length; ca < da; fa || (fa = true), ca++) {
                                    ba = o(ca, x, s, t, u, v, w);
                                    aa.push(ba === void 0 ? "null" : ba);
                                }
                                return fa ? (u ? "[\n" + v + aa.join(",\n" + v) + "\n" + ea + "]" : ("[" + aa.join(",") + "]")) : "[]";
                            } else {
                                i(t || x, function(ga) {
                                    var ha = o(ga, x, s, t, u, v, w);
                                    if (ha !== void 0) aa.push(n(ga) + ":" + (u ? " " : "") + ha);
                                    fa || (fa = true);
                                });
                                return fa ? (u ? "{\n" + v + aa.join(",\n" + v) + "\n" + ea + "}" : ("{" + aa.join(",") + "}")) : "{}";
                            }
                            w.pop();
                        }
                    }
                    function p(q, r, s) {
                        var t = "",
                            u, v, w, x;
                        if (typeof r == "function" || typeof r == "object" && r) if (g.call(r) == "[object Function]") {
                            u = r;
                        } else if (g.call(r) == "[object Array]") {
                            v = {};
                            for (w = r.length; w--;) {
                                x = r[w];
                                if (x && (g.call(x) == "[object String]" || g.call(x) == "[object Number]")) v[x] = 1;
                            }
                        }
                        if (s != null && s !== "") if (g.call(s) == "[object Number]") {
                            if ((s -= s % 1) > 0) for (t = "", s > 10 && (s = 10); t.length < s;) t += " ";
                        } else if (g.call(s) == "[object String]") t = s.length <= 10 ? s : s.slice(0, 10);
                        return o("$", {
                            $: q
                        }, u, v, t, "", []);
                    }
                    return p;
                })();
                if (!k) f.parse = (function() {
                    var l = {
                        "\\": "\\",
                        '"': '"',
                        "/": "/",
                        b: "\b",
                        t: "\t",
                        n: "\n",
                        f: "\f",
                        r: "\r"
                    },
                        m = "".constructor.fromCharCode;

                    function n(s) {
                        this.source = s;
                        this.index = 0;
                    }
                    n.prototype.lex = o;

                    function o() {
                        for (var s = this.source, t = this.source.length, u, v, w, x, y; this.index < t;) {
                            u = s.charAt(this.index);
                            switch (u) {
                            case "\t":
                            case "\r":
                            case "\n":
                            case " ":
                                this.index += 1;
                                break;
                            case "{":
                            case "}":
                            case "[":
                            case "]":
                            case ":":
                            case ",":
                                this.index += 1;
                                return u;
                            case '"':
                                v = "@";
                                this.index += 1;
                                while (this.index < t) {
                                    u = s.charAt(this.index);
                                    if (u < " ") {
                                        throw SyntaxError("Unescaped control character in string.");
                                    } else if (u == "\\") {
                                        this.index += 1;
                                        u = s.charAt(this.index);
                                        if ('\\"/btnfr'.indexOf(u) > -1) {
                                            v += l[u];
                                            this.index += 1;
                                        } else if (u == "u") {
                                            w = this.index += 1;
                                            for (x = this.index + 4; this.index < x; this.index += 1) {
                                                u = s.charAt(this.index);
                                                if (!(u >= "0" && u <= "9" || u >= "a" && u <= "f" || u >= "A" && u <= "F")) throw SyntaxError("Invalid Unicode escape sequence in string.");
                                            }
                                            v += m("0x" + s.slice(w, this.index));
                                        } else throw SyntaxError("Invalid escape sequence in string.");
                                    } else {
                                        if (u == '"') break;
                                        v += u;
                                        this.index += 1;
                                    }
                                }
                                if (s.charAt(this.index) == '"') {
                                    this.index += 1;
                                    return v;
                                }
                                throw SyntaxError("Unterminated string.");
                            default:
                                w = this.index;
                                if (u == "-") {
                                    y = true;
                                    u = s.charAt(this.index += 1);
                                }
                                if (u >= "0" && u <= "9") {
                                    if (u == "0" && (u = s.charAt(this.index + 1), u >= "0" && u <= "9")) throw SyntaxError("Illegal octal literal.");
                                    y = false;
                                    for (; this.index < t && (u = s.charAt(this.index), u >= "0" && u <= "9"); this.index += 1);
                                    if (s.charAt(this.index) == ".") {
                                        x = this.index += 1;
                                        for (; x < t && (u = s.charAt(x), u >= "0" && u <= "9"); x += 1);
                                        if (x == this.index) throw SyntaxError("Illegal trailing decimal.");
                                        this.index = x;
                                    }
                                    u = s.charAt(this.index);
                                    if (u == "e" || u == "E") {
                                        u = s.charAt(this.index += 1);
                                        if (u == "+" || u == "-") this.index += 1;
                                        for (x = this.index; x < t && (u = s.charAt(x), u >= "0" && u <= "9"); x += 1);
                                        if (x == this.index) throw SyntaxError("Illegal empty exponent.");
                                        this.index = x;
                                    }
                                    return +s.slice(w, this.index);
                                }
                                if (y) throw SyntaxError("Unexpected `-`.");
                                if (u == "t" && s.slice(this.index, this.index + 4) == "true") {
                                    this.index += 4;
                                    return true;
                                } else if (u == "f" && s.slice(this.index, this.index + 5) == "false") {
                                    this.index += 5;
                                    return false;
                                } else if (u == "n" && s.slice(this.index, this.index + 4) == "null") {
                                    this.index += 4;
                                    return null;
                                }
                                throw SyntaxError("Unrecognized token.");
                            }
                        }
                        return "$";
                    }
                    n.prototype.get = p;

                    function p(s) {
                        var t, u, v;
                        if (s == "$") throw SyntaxError("Unexpected end-of-file.");
                        if (typeof s == "string") {
                            if (s.charAt(0) == "@") return s.slice(1);
                            switch (s) {
                            case "[":
                                t = [];
                                for (;; u || (u = true)) {
                                    s = this.lex();
                                    if (s == "]") break;
                                    if (u) if (s == ",") {
                                        s = this.lex();
                                        if (s == "]") throw SyntaxError("Unexpected trailing `,` in array literal.");
                                    } else throw SyntaxError("A comma (`,`) must separate the previous array element from the next.");
                                    if (s == ",") throw SyntaxError("Unexpected `,` in array literal.");
                                    t.push(this.get(s));
                                }
                                return t;
                            case "{":
                                t = {};
                                for (;; u || (u = true)) {
                                    s = this.lex();
                                    if (s == "}") break;
                                    if (u) if (s == ",") {
                                        s = this.lex();
                                        if (s == "}") throw SyntaxError("Unexpected trailing `,`. in object literal.");
                                    } else throw SyntaxError("A comma (`,`) must separate the previous object member from the next.");
                                    if (s == ",") throw SyntaxError("Unexpected `,` in object literal.");
                                    if (typeof s != "string" || s.charAt(0) != "@") throw SyntaxError("Object property names must be double-quoted strings.");
                                    if (this.lex() != ":") throw SyntaxError("A single colon (`:`) must separate each object property name from the value.");
                                    t[s.slice(1)] = this.get(this.lex());
                                }
                                return t;
                            }
                            throw SyntaxError("Expected `[` or `{`.");
                        }
                        return s;
                    }
                    function q(s, t, u) {
                        var v = s[t],
                            w, x;
                        if (typeof v == "object" && v) if (g.call(v) == "[object Array]") {
                            for (w = v.length; w--;) {
                                x = q(v, w, u);
                                if (x === void 0) {
                                    v.splice(w, 1);
                                } else v[w] = x;
                            }
                        } else i(v, function(y) {
                            var z = q(v, y, u);
                            if (z === void 0) {
                                delete v[y];
                            } else v[y] = z;
                        });
                        return u.call(s, t, v);
                    }
                    function r(s, t) {
                        var u = new n("" + s),
                            v = u.get(u.lex());
                        if (u.lex() != "$") throw SyntaxError("Expected end-of-file.");
                        return t && g.call(t) == "[object Function]" ? q({
                            $: v
                        }, "$", t) : v;
                    }
                    return r;
                })();
                e.exports = f;
            });
            __d("ES5", ["ES5ArrayPrototype", "ES5FunctionPrototype", "ES5StringPrototype", "ES5Array", "ES5Object", "ES5Date", "JSON3"], function(a, b, c, d, e, f) {
                var g = b('ES5ArrayPrototype'),
                    h = b('ES5FunctionPrototype'),
                    i = b('ES5StringPrototype'),
                    j = b('ES5Array'),
                    k = b('ES5Object'),
                    l = b('ES5Date'),
                    m = b('JSON3'),
                    n = Array.prototype.slice,
                    o = Object.prototype.toString,
                    p = {},
                    q = {
                        array: g,
                        'function': h,
                        string: i,
                        Object: k,
                        Array: j,
                        Date: l,
                        JSON: m
                    };
                for (var r in q) {
                    if (!q.hasOwnProperty(r)) continue;
                    var s = q[r],
                        t = r === r.toLowerCase() ? window[r.replace(/^\w/, function(x) {
                            return x.toUpperCase();
                        })].prototype : window[r];
                    for (var u in s) {
                        if (!s.hasOwnProperty(u)) continue;
                        if (!t) {
                            p[r + '.' + u] = s[u];
                            continue;
                        }
                        var v = t[u];
                        p[r + '.' + u] = v && /\{\s+\[native code\]\s\}/.test(v) ? v : s[u];
                    }
                }
                function w(x, y, z) {
                    var aa = n.call(arguments, 3),
                        ba = z ? /\s(.*)\]/.exec(o.call(x).toLowerCase())[1] : x,
                        ca = p[ba + '.' + y] || x[y];
                    if (typeof ca === 'function') return ca.apply(x, aa);
                }
                e.exports = w;
            });
            ES5 = require('ES5');
            return ES5.apply(null, arguments);
        };;
    var FB = {};
    var __DEV__ = 0;

    function bagofholding() {};

    function __c() {
        __d("UrlMapConfig", [], {
            "www": "www.facebook.com",
            "m": "m.facebook.com",
            "connect": "connect.facebook.net",
            "api_https": "api.facebook.com",
            "api_read_https": "api-read.facebook.com",
            "graph_https": "graph.facebook.com",
            "fbcdn_http": "s-static.ak.fbcdn.net",
            "fbcdn_https": "s-static.ak.fbcdn.net",
            "cdn_http": "static.ak.facebook.com",
            "cdn_https": "s-static.ak.facebook.com"
        });
        __d("ApiClientConfig", [], {
            "FlashRequest": {
                "swfUrl": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/y5\/r\/SrnvQJBTxo-.swf"
            }
        });
        __d("SDKConfig", [], {
            "xfbmlUseLegacy": true,
            "errorHandling": {
                "rate": 2
            },
            "api": {
                "mode": "warn",
                "whitelist": ["api", "init", "ui", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "login", "logout", "Event", "Event.subscribe", "Event.unsubscribe", "XFBML", "XFBML.parse", "Canvas", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.showFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setAutoResize", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Insights.impression", "Dom", "Dom.addCssRules", "Arbiter", "Arbiter.inform", "JSON", "JSON.parse", "JSON.stringify", "XD", "XD.onMessage", "Music", "Music.send", "Payment", "Payment.setSize", "UA", "UA.nativeApp", "Payment.init", "Music.init", "Music.flashCallback", "Data", "Data.waitOn", "Data.query"]
            }
        });
        __d("XDConfig", [], {
            "XdUrl": "connect\/xd_arbiter.php?version=9",
            "Flash": {
                "path": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/ys\/r\/WON-TVLCpDP.swf"
            },
            "useCdn": true
        });
    }

    function __d() {
        FB.__d.apply(FB, arguments);
    }

    function require() {
        return FB.require.apply(null, arguments);
    }(function() {
        (function(a) {
            if (a.require) return;
            var b = {},
                c = {},
                d = {},
                e = 0,
                f = 1,
                g = 2,
                h = Object.prototype.hasOwnProperty;

            function i(t) {
                var u = b[t],
                    v, w, x;
                if (!b[t]) {
                    x = 'Requiring unknown module "' + t + '"';
                    throw new Error(x);
                }
                if (u.waiting && u.special & g) l();
                if (u.waiting) {
                    x = 'Requiring module "' + t + '" with unresolved dependencies';
                    throw new Error(x);
                }
                if (!u.exports) {
                    var y = u.exports = {},
                        z = u.factory;
                    if (typeof z === 'string') {
                        var aa = '(' + z + ')';
                        z = (eval)(aa);
                    }
                    if (Object.prototype.toString.call(z) === '[object Function]') {
                        var ba = [],
                            ca = u.dependencies,
                            da = ca.length;
                        if (u.special & g) da = Math.min(da, z.length);
                        for (w = 0; w < da; w++) {
                            v = ca[w];
                            ba.push(v === 'module' ? u : (v === 'exports' ? y : i(v)));
                        }
                        var ea = z.apply(u.context || a, ba);
                        if (ea) u.exports = ea;
                    } else u.exports = z;
                }
                if (u.refcount-- === 1) delete b[t];
                return u.exports;
            }
            function j(t, u, v, w, x, y) {
                if (u === undefined) {
                    u = [];
                    v = t;
                    t = n();
                } else if (v === undefined) {
                    v = u;
                    u = t;
                    t = n();
                }
                var z = b[t];
                if (z) {
                    if (y) z.refcount += y;
                    return;
                } else if (!u && !v && y) {
                    d[t] = (d[t] || 0) + y;
                    return;
                } else {
                    z = {
                        id: t
                    };
                    z.refcount = (d[t] || 0) + (y || 0);
                    delete d[t];
                }
                z.factory = v;
                z.dependencies = u;
                z.context = x;
                z.special = w;
                b[t] = z;
                o(t);
            }
            function k(t, u, v) {
                j(t, u, undefined, f, v, 1);
            }
            function l() {
                var t = {},
                    u;
                for (u in c) if (h.call(c, u)) if (b[u] && !t[u] && b[u].special & g) m({}, u, t);
            }
            function m(t, u, v) {
                v[u] = 1;
                var w = c[u],
                    x;
                if (!w) return;
                t[u] = 1;
                for (x in w) if (h.call(w, x)) {
                    if (!b[x].special & g) continue;
                    if (t[x]) {
                        delete w[x];
                        b[x].waiting--;
                        if (!b[x].waiting) p(x);
                    } else m(t, x, v);
                }
                t[u] = 0;
            }
            function n() {
                return '__mod__' + e++;
            }
            function o(t) {
                var u = b[t],
                    v = 0;
                for (var w = 0; w < u.dependencies.length; w++) {
                    var x = u.dependencies[w];
                    if (!b[x] || b[x].waiting) {
                        c[x] || (c[x] = {});
                        if (!c[x][t]) v++;
                        c[x][t] = 1;
                    }
                }
                u.waiting = v;
                if (!v) p(t);
            }
            function p(t) {
                var u = b[t];
                if (u.special & f) i(t);
                var v = c[t];
                if (v) {
                    delete c[t];
                    for (var w in v) if (h.call(v, w)) if (!--b[w].waiting) p(w);
                }
            }
            function q(t, u) {
                b[t] = {
                    id: t
                };
                b[t].exports = u;
            }
            q('module', 0);
            q('exports', 0);
            q('define', j);
            q('global', a);
            q('require', i);
            q('requireDynamic', i);
            q('requireLazy', k);
            j.amd = {};
            a.define = j;
            a.require = i;
            a.requireDynamic = i;
            a.requireLazy = k;
            i.__debug = {
                modules: b,
                deps: c
            };
            var r = false,
                s = function(t, u, v, w) {
                    j(t, u, v, w || g);
                    if (b[t].waiting && !r) r = setTimeout(function() {
                        l();
                        r = false;
                    }, 9);
                };
            a.__d = function(t, u, v, w) {
                u = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'].concat(u);
                s(t, u, v, w);
            };
            a.__e = a.__d;
        })(this);;
        __d("copyProperties", [], function(a, b, c, d, e, f) {
            function g(h, i, j, k, l, m, n) {
                h = h || {};
                var o = [i, j, k, l, m],
                    p = 0,
                    q;
                while (o[p]) {
                    q = o[p++];
                    for (var r in q) h[r] = q[r];
                    if (q.hasOwnProperty && q.hasOwnProperty('toString') && (typeof q.toString != 'undefined') && (h.toString !== q.toString)) h.toString = q.toString;
                }
                return h;
            }
            e.exports = g;
        });
        __d("flattenObject", [], function(a, b, c, d, e, f) {
            function g(h) {
                var i = {};
                for (var j in h) if (h.hasOwnProperty(j)) {
                    var k = h[j];
                    if (null === k || undefined === k) {
                        continue;
                    } else if (typeof k == 'string') {
                        i[j] = k;
                    } else i[j] = ES5('JSON', 'stringify', false, k);
                }
                return i;
            }
            e.exports = g;
        });
        __d("sprintf", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                i = Array.prototype.slice.call(arguments, 1);
                var j = 0;
                return h.replace(/%s/g, function(k) {
                    return i[j++];
                });
            }
            e.exports = g;
        });
        __d("UserAgent", [], function(a, b, c, d, e, f) {
            var g = false,
                h, i, j, k, l, m, n, o, p, q, r, s, t, u;

            function v() {
                if (g) return;
                g = true;
                var x = navigator.userAgent,
                    y = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(x),
                    z = /(Mac OS X)|(Windows)|(Linux)/.exec(x);
                r = /\b(iPhone|iP[ao]d)/.exec(x);
                s = /\b(iP[ao]d)/.exec(x);
                p = /Android/i.exec(x);
                t = /FBAN\/\w+;/i.exec(x);
                u = /Mobile/i.exec(x);
                q = !! (/Win64/.exec(x));
                if (y) {
                    h = y[1] ? parseFloat(y[1]) : NaN;
                    if (h && document.documentMode) h = document.documentMode;
                    i = y[2] ? parseFloat(y[2]) : NaN;
                    j = y[3] ? parseFloat(y[3]) : NaN;
                    k = y[4] ? parseFloat(y[4]) : NaN;
                    if (k) {
                        y = /(?:Chrome\/(\d+\.\d+))/.exec(x);
                        l = y && y[1] ? parseFloat(y[1]) : NaN;
                    } else l = NaN;
                } else h = i = j = l = k = NaN;
                if (z) {
                    if (z[1]) {
                        var aa = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(x);
                        m = aa ? parseFloat(aa[1].replace('_', '.')) : true;
                    } else m = false;
                    n = !! z[2];
                    o = !! z[3];
                } else m = n = o = false;
            }
            var w = {
                ie: function() {
                    return v() || h;
                },
                ie64: function() {
                    return w.ie() && q;
                },
                firefox: function() {
                    return v() || i;
                },
                opera: function() {
                    return v() || j;
                },
                safari: function() {
                    return v() || k;
                },
                chrome: function() {
                    return v() || l;
                },
                windows: function() {
                    return v() || n;
                },
                osx: function() {
                    return v() || m;
                },
                linux: function() {
                    return v() || o;
                },
                iphone: function() {
                    return v() || r;
                },
                mobile: function() {
                    return v() || (r || s || p || u);
                },
                nativeApp: function() {
                    return v() || t;
                },
                android: function() {
                    return v() || p;
                },
                ipad: function() {
                    return v() || s;
                }
            };
            e.exports = w;
        });
        __d("applyWithGuard", ["UserAgent"], function(a, b, c, d, e, f) {
            var g = b('UserAgent'),
                h;

            function i(k) {
                var l = {
                    line: k.lineNumber || k.line,
                    message: k.message,
                    name: k.name,
                    script: k.fileName || k.sourceURL || k.script,
                    stack: k.stackTrace || k.stack
                };
                l._originalError = k;
                if (g.chrome() && /([\w:\.\/]+\.js):(\d+)/.test(k.stack)) {
                    l.script = RegExp.$1;
                    l.line = parseInt(RegExp.$2, 10);
                }
                for (var m in l)(l[m] == null && delete l[m]);
                return l;
            }
            function j(k, l, m, n) {
                m = m || [];
                if (!h) return k.apply(l, m);
                try {
                    return k.apply(l, m);
                } catch (o) {
                    var p = i(o);
                    p.entry = n;
                    var q = ES5(Array.prototype.slice.call(m), 'map', true, function(r) {
                        var s = Object.prototype.toString.call(r);
                        return (/^\[object (String|Number|Boolean|Object|Date)\]$/).test(s) ? r : r.toString();
                    });
                    p.args = ES5('JSON', 'stringify', false, q).substring(0, 200);
                    h(p);
                }
            }
            j.setErrorHandler = function(k) {
                h = k;
            };
            e.exports = j;
        });
        __d("QueryString", [], function(a, b, c, d, e, f) {
            var g = {
                encode: function(h) {
                    var i = [];
                    ES5(ES5('Object', 'keys', false, h), 'forEach', true, function(j) {
                        var k = h[j];
                        if (typeof k === 'undefined') return;
                        if (k === null) {
                            i.push(j);
                            return;
                        }
                        i.push(encodeURIComponent(j) + '=' + encodeURIComponent(k));
                    });
                    return i.join('&');
                },
                decode: function(h) {
                    var i = {};
                    if (h === '') return i;
                    var j = h.split('&'),
                        k = j.length;
                    while (k--) {
                        var l = j[k].split('=', 2);
                        i[decodeURIComponent(l[0])] = l.length === 2 ? decodeURIComponent(l[1]) : null;
                    }
                    return i;
                },
                appendToUrl: function(h, i) {
                    return h + (~ES5(h, 'indexOf', true, '?') ? '&' : '?') + (typeof i === 'string' ? i : g.encode(i));
                }
            };
            e.exports = g;
        });
        __d("CORSRequest", ["applyWithGuard", "QueryString"], function(a, b, c, d, e, f) {
            var g = b('applyWithGuard'),
                h = b('QueryString');

            function i(l, m) {
                if (!window.XMLHttpRequest) return null;
                var n = new XMLHttpRequest(),
                    o = function() {};
                if ('withCredentials' in n) {
                    n.open(l, m, true);
                    n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                } else if (window.XDomainRequest) {
                    n = new XDomainRequest();
                    try {
                        n.open(l, m);
                        n.onprogress = n.ontimeout = o;
                    } catch (p) {
                        return null;
                    }
                } else return null;
                var q = {
                    send: function(t) {
                        n.send(t);
                    }
                },
                    r = function() {
                        r = o;
                        g(function() {
                            if ('onload' in q) q.onload(n);
                        }, null, null, 'XMLHttpRequest:load');
                    },
                    s = function() {
                        s = o;
                        g(function() {
                            if ('onerror' in q) q.onerror(n);
                        }, null, null, 'XMLHttpRequest:error');
                    };
                n.onload = function() {
                    r();
                };
                n.onerror = function() {
                    s();
                };
                n.onreadystatechange = function() {
                    if (n.readyState == 4) if (n.status == 200) {
                        r();
                    } else s();
                };
                return q;
            }
            function j(l, m, n, o) {
                n.suppress_http_code = 1;
                var p = h.encode(n);
                if (m != 'post') {
                    l = h.appendToUrl(l, p);
                    p = '';
                }
                var q = i(m, l);
                if (!q) return false;
                q.onload = function(r) {
                    o(ES5('JSON', 'parse', false, r.responseText));
                };
                q.onerror = function(r) {
                    if (r.responseText) {
                        o(ES5('JSON', 'parse', false, r.responseText));
                    } else o({
                        error: {
                            type: 'http',
                            message: 'unknown error',
                            status: r.status
                        }
                    });
                };
                q.send(p);
                return true;
            }
            var k = {
                execute: j
            };
            e.exports = k;
        });
        __d("DOMWrapper", [], function(a, b, c, d, e, f) {
            var g, h, i = {
                setRoot: function(j) {
                    g = j;
                },
                getRoot: function() {
                    return g || document.body;
                },
                setWindow: function(j) {
                    h = j;
                },
                getWindow: function() {
                    return h || window;
                }
            };
            e.exports = i;
        });
        __d("guid", [], function(a, b, c, d, e, f) {
            function g() {
                return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
            }
            e.exports = g;
        });
        __d("Flash", ["DOMWrapper", "QueryString", "UserAgent", "copyProperties", "guid"], function(a, b, c, d, e, f) {
            var g = b('DOMWrapper'),
                h = b('QueryString'),
                i = b('UserAgent'),
                j = b('copyProperties'),
                k = b('guid'),
                l = {},
                m, n = g.getWindow().document;

            function o(t) {
                var u = n.getElementById(t);
                if (u) u.parentNode.removeChild(u);
                delete l[t];
            }
            function p() {
                for (var t in l) if (l.hasOwnProperty(t)) o(t);
            }
            function q(t) {
                return t.replace(/\d+/g, function(u) {
                    return '000'.substring(u.length) + u;
                });
            }
            function r(t) {
                if (!m) {
                    if (i.ie() >= 9) window.attachEvent('onunload', p);
                    m = true;
                }
                l[t] = t;
            }
            var s = {
                embed: function(t, u, v, w) {
                    var x = k();
                    t = encodeURI(t);
                    v = j({
                        allowscriptaccess: 'always',
                        flashvars: w,
                        movie: t
                    }, v || {});
                    if (typeof v.flashvars == 'object') v.flashvars = h.encode(v.flashvars);
                    var y = [];
                    for (var z in v) if (v.hasOwnProperty(z) && v[z]) y.push('<param name="' + encodeURI(z) + '" value="' + encodeURI(v[z]) + '">');
                    var aa = n.createElement('div'),
                        ba = '<object ' + (i.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + t + '" ' + 'id="' + x + '">' + y.join('') + '</object>';
                    aa.innerHTML = ba;
                    var ca = u.appendChild(aa.firstChild);
                    r(x);
                    return ca;
                },
                remove: o,
                getVersion: function() {
                    var t = 'Shockwave Flash',
                        u = 'application/x-shockwave-flash',
                        v = 'ShockwaveFlash.ShockwaveFlash',
                        w;
                    if (navigator.plugins && typeof navigator.plugins[t] == 'object') {
                        var x = navigator.plugins[t].description;
                        if (x && navigator.mimeTypes && navigator.mimeTypes[u] && navigator.mimeTypes[u].enabledPlugin) w = x.match(/\d+/g);
                    }
                    if (!w) try {
                        w = (new ActiveXObject(v)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);
                        w = Array.prototype.slice.call(w, 1);
                    } catch (y) {}
                    return w;
                },
                checkMinVersion: function(t) {
                    var u = s.getVersion();
                    if (!u) return false;
                    return q(u.join('.')) >= q(t);
                },
                isAvailable: function() {
                    return !!s.getVersion();
                }
            };
            e.exports = s;
        });
        __d("dotAccess", [], function(a, b, c, d, e, f) {
            function g(h, i, j) {
                var k = i.split('.');
                do {
                    var l = k.shift();
                    h = h[l] || j && (h[l] = {});
                } while (k.length && h);
                return h;
            }
            e.exports = g;
        });
        __d("GlobalCallback", ["applyWithGuard", "dotAccess"], function(a, b, c, d, e, f) {
            var g = b('applyWithGuard'),
                h = b('dotAccess'),
                i, j, k = 0,
                l = {
                    setPrefix: function(m) {
                        i = h(window, m, true);
                        j = m;
                    },
                    create: function(m) {
                        if (!i) this.setPrefix('window.__globalCallbacks');
                        var n = '__gcb' + (++k);
                        i[n] = function() {
                            return g(m, null, arguments, 'GlobalCallback');
                        };
                        return j + '.' + n;
                    },
                    remove: function(m) {
                        var n = m.substring(j.length + 1);
                        delete i[n];
                    }
                };
            e.exports = l;
        });
        __d("Queue", ["copyProperties"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = {};

            function i(l, m) {
                return function() {
                    m.apply(l, arguments);
                };
            }
            function j() {
                var l = Array.prototype.slice.call(arguments);
                for (var m = 0; m < l.length; m++) if (typeof l[m] != 'undefined') return l[m];
            }
            function k(l) {
                this._opts = g({
                    interval: 0,
                    processor: null
                }, l);
                this._queue = [];
                this._stopped = true;
            }
            g(k.prototype, {
                _dispatch: function(l) {
                    if (this._stopped || this._queue.length === 0) return;
                    if (!this._opts.processor) {
                        this._stopped = true;
                        throw new Error('No processor available');
                    }
                    if (this._opts.interval) {
                        this._opts.processor.call(this, this._queue.shift());
                        this._timeout = setTimeout(i(this, this._dispatch), this._opts.interval);
                    } else while (this._queue.length) this._opts.processor.call(this, this._queue.shift());
                },
                enqueue: function(l) {
                    if (this._opts.processor && !this._stopped) {
                        this._opts.processor.call(this, l);
                    } else this._queue.push(l);
                    return this;
                },
                start: function(l) {
                    if (l) this._opts.processor = l;
                    this._stopped = false;
                    this._dispatch();
                    return this;
                },
                dispatch: function() {
                    this._dispatch(true);
                },
                stop: function(l) {
                    this._stopped = true;
                    if (j(l, false)) clearTimeout(this._timeout);
                    return this;
                },
                merge: function(l, m) {
                    this._queue[m ? 'unshift' : 'push'].apply(this._queue, l._queue);
                    l._queue = [];
                    this._dispatch();
                    return this;
                },
                getLength: function() {
                    return this._queue.length;
                }
            });
            g(k, {
                get: function(l, m) {
                    var n;
                    if (l in h) {
                        n = h[l];
                    } else n = h[l] = new k(m);
                    return n;
                },
                exists: function(l) {
                    return l in h;
                },
                remove: function(l) {
                    return delete h[l];
                }
            });
            e.exports = k;
        });
        __d("FlashRequest", ["DOMWrapper", "Flash", "GlobalCallback", "QueryString", "Queue"], function(a, b, c, d, e, f) {
            var g = b('DOMWrapper'),
                h = b('Flash'),
                i = b('GlobalCallback'),
                j = b('QueryString'),
                k = b('Queue'),
                l, m = {},
                n, o;

            function p() {
                if (!n) throw new Error('swfUrl has not been set');
                var s = i.create(function() {
                    l.start(function(u) {
                        var v = o.execute(u.method, u.url, u.body);
                        if (!v) throw new Error('Could create request');
                        m[v] = u.callback;
                    });
                }),
                    t = i.create(function(u, v, w) {
                        var x;
                        try {
                            x = ES5('JSON', 'parse', false, decodeURIComponent(w));
                        } catch (y) {
                            x = {
                                error: {
                                    type: 'SyntaxError',
                                    message: y.message,
                                    status: v,
                                    raw: w
                                }
                            };
                        }
                        m[u](x);
                        delete m[u];
                    });
                o = h.embed(n, g.getRoot(), null, {
                    log: false,
                    initCallback: s,
                    requestCallback: t
                });
            }
            function q(s, t, u, v) {
                u.suppress_http_code = 1;
                if (!u.method) u.method = t;
                var w = j.encode(u);
                if (t === 'get' && s.length + w.length < 2000) {
                    s = j.appendToUrl(s, w);
                    w = '';
                } else t = 'post';
                if (!l) {
                    if (!h.isAvailable()) return false;
                    l = new k();
                    p();
                }
                l.enqueue({
                    method: t,
                    url: s,
                    body: w,
                    callback: v
                });
                return true;
            }
            var r = {
                setSwfUrl: function(s) {
                    n = s;
                },
                execute: q
            };
            e.exports = r;
        });
        __d("JSONPRequest", ["DOMWrapper", "GlobalCallback", "QueryString"], function(a, b, c, d, e, f) {
            var g = b('DOMWrapper'),
                h = b('GlobalCallback'),
                i = b('QueryString');

            function j(l, m, n, o) {
                var p = document.createElement('script'),
                    q = function(s) {
                        q = function() {};
                        h.remove(n.callback);
                        o(s);
                        p.parentNode.removeChild(p);
                    };
                n.callback = h.create(q);
                if (!n.method) n.method = m;
                l = i.appendToUrl(l, n);
                if (l.length > 2000) {
                    h.remove(n.callback);
                    return false;
                }
                p.onerror = function() {
                    q({
                        error: {
                            type: 'http',
                            message: 'unknown error'
                        }
                    });
                };
                var r = function() {
                        setTimeout(function() {
                            q({
                                error: {
                                    type: 'http',
                                    message: 'unknown error'
                                }
                            });
                        }, 0);
                    };
                if (p.addEventListener) {
                    p.addEventListener('load', r, false);
                } else p.onreadystatechange = function() {
                    if (/loaded|complete/.test(this.readyState)) r();
                };
                p.src = l;
                g.getRoot().appendChild(p);
                return true;
            }
            var k = {
                execute: j
            };
            e.exports = k;
        });
        __d("Log", ["sprintf"], function(a, b, c, d, e, f) {
            var g = b('sprintf'),
                h = {
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 1,
                    ERROR: 0
                };

            function i(k, l) {
                var m = Array.prototype.slice.call(arguments, 2),
                    n = g.apply(null, m);
                if (j.level >= k && window.console) console[l in console ? l : 'log'](n);
            }
            var j = {
                level: -1,
                Level: h,
                debug: ES5(i, 'bind', true, null, h.DEBUG, 'debug'),
                info: ES5(i, 'bind', true, null, h.INFO, 'debug'),
                warn: ES5(i, 'bind', true, null, h.WARNING, 'debug'),
                error: ES5(i, 'bind', true, null, h.ERROR, 'debug')
            };
            e.exports = j;
        });
        __d("UrlMap", ["UrlMapConfig"], function(a, b, c, d, e, f) {
            var g = c('UrlMapConfig'),
                h = {
                    resolve: function(i, j) {
                        var k = typeof j == 'undefined' ? location.protocol.replace(':', '') : j ? 'https' : 'http';
                        if (i in g) return k + '://' + g[i];
                        if (typeof j == 'undefined' && i + '_' + k in g) return k + '://' + g[i + '_' + k];
                        if (j !== true && i + '_http' in g) return 'http://' + g[i + '_http'];
                        if (j !== false && i + '_https' in g) return 'https://' + g[i + '_https'];
                    }
                };
            e.exports = h;
        });
        __d("URL", ["copyProperties", "QueryString", "Log"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('QueryString'),
                i = b('Log'),
                j = new RegExp('(' + '(((\\w+):)?//)' + '(.*?@)?' + '([^~/?#:]+)' + '(:(\\d+))?' + ')?' + '([^\\?$#]+)?' + '(\\?([^$#]+))?' + '(#([^$]+))?'),
                k = /[\0\\]/,
                l = /[^\w\-\.,;\/?:@=&%#$~+!*'\[\]()]+/g,
                m = /^[a-z0-9.][a-z0-9\-\.]+[a-z0-9.]$/,
                n = /\.facebook\.com$/;

            function o(p) {
                if (typeof p != 'string') throw new TypeError('The passed argument was of invalid type.');
                if (k.test(p)) throw new URIError('The passed argument could not be parsed as a url.');
                if (this instanceof o === false) return new o(p);
                var q = p.replace(l, function(s) {
                    i.warn('Escaping unescaped character \\x%s from "%s"', s.charCodeAt(0).toString(16), p);
                    return encodeURIComponent(s);
                }).match(j);
                if (!p || !q) throw new URIError('The passed argument could not be parsed as a url.');
                var r = !! location.hostname;
                this.setProtocol(q[4] || (r ? location.protocol.replace(/:/, '') : ''));
                this.setDomain(q[6] || location.hostname);
                this.setPort(q[8] || (r && !q[6] ? location.port : ''));
                this.setPath(q[9] || '');
                this.setSearch(q[11] || '');
                this.setFragment(q[13] || '');
                if (this._path.substring(0, 1) != '/') this._path = '/' + this._path;
                if (this._domain && !m.test(decodeURIComponent(this._domain.toLowerCase()))) {
                    i.error('Invalid characters found in domain name: %s', this._domain);
                    throw new URIError('Domain contained invalid characters.');
                }
            }
            g(o.prototype, {
                constructor: o,
                getProtocol: function() {
                    return this._protocol;
                },
                setProtocol: function(p) {
                    this._protocol = p;
                    return this;
                },
                getDomain: function() {
                    return this._domain;
                },
                setDomain: function(p) {
                    this._domain = p;
                    return this;
                },
                getPort: function() {
                    return this._port;
                },
                setPort: function(p) {
                    this._port = p;
                    return this;
                },
                getPath: function() {
                    return this._path;
                },
                setPath: function(p) {
                    this._path = p;
                    return this;
                },
                getSearch: function() {
                    return this._search;
                },
                setSearch: function(p) {
                    this._search = p;
                    return this;
                },
                getFragment: function() {
                    return this._fragment;
                },
                setFragment: function(p) {
                    this._fragment = p;
                    return this;
                },
                getParsedSearch: function() {
                    return h.decode(this._search);
                },
                getParsedFragment: function() {
                    return h.decode(this._fragment);
                },
                isFacebookURL: function() {
                    return n.test(this._domain);
                },
                toString: function() {
                    return (this._protocol ? this._protocol + ':' : '') + (this._domain ? '//' + this._domain : '') + (this._port ? ':' + this._port : '') + this._path + (this._search ? '?' + this._search : '') + (this._fragment ? '#' + this._fragment : '');
                },
                valueOf: function() {
                    return this.toString();
                }
            });
            g(o, {
                getCurrent: function() {
                    return new o(location.href);
                },
                getReferrer: function() {
                    return document.referrer ? new o(document.referrer) : null;
                }
            });
            e.exports = o;
        });
        __d("ApiClient", ["copyProperties", "flattenObject", "sprintf", "CORSRequest", "FlashRequest", "JSONPRequest", "Log", "UrlMap", "URL", "ApiClientConfig"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('flattenObject'),
                i = b('sprintf'),
                j = b('CORSRequest'),
                k = b('FlashRequest'),
                l = b('JSONPRequest'),
                m = b('Log'),
                n = b('UrlMap'),
                o = b('URL'),
                p = c('ApiClientConfig'),
                q, r, s, t, u = {
                    get: true,
                    post: true,
                    'delete': true,
                    put: true
                },
                v = {
                    fql_query: true,
                    fql_multiquery: true,
                    friends_get: true,
                    notifications_get: true,
                    stream_get: true,
                    users_getinfo: true
                };

            function w(aa, ba, ca, da) {
                if (!ca.access_token) ca.access_token = q;
                ca.pretty = 0;
                if (t) g(ca, t);
                ca = h(ca);
                if (!da) {
                    m.warn('No callback passed to the ApiClient for %s', aa);
                    da = function() {};
                }
                var ea = {
                    jsonp: l,
                    cors: j,
                    flash: k
                },
                    fa;
                if (ca.transport) {
                    fa = [ca.transport];
                    delete ca.transport;
                } else fa = ['jsonp', 'cors', 'flash'];
                var ga = function(ka) {
                        var la = false;
                        if (r && ka && typeof ka == 'object') {
                            if (ka.error) {
                                if (ka.error == 'invalid_token' || (ka.error.type == 'OAuthException' && ka.error.code == 190)) la = true;
                            } else if (ka.error_code) if (ka.error_code == '190') la = true;
                            if (la) r();
                        }
                        da(ka);
                    };
                for (var ha = 0; ha < fa.length; ha++) {
                    var ia = ea[fa[ha]],
                        ja = g({}, ca);
                    if (ia.execute(aa, ba, ja, ga)) return;
                }
                da({
                    error: {
                        type: 'no-transport',
                        message: 'Could not find a usable transport for request'
                    }
                });
            }
            function x(aa) {
                if (typeof aa != 'string') throw new Error('Missing url argument');
                var ba = {};
                ES5(Array.prototype.slice.call(arguments, 1), 'forEach', true, function(ga) {
                    ba[typeof ga] = ga;
                });
                var ca = new o(aa),
                    da = (ba.string || 'get').toLowerCase(),
                    ea = g(ba.object || {}, ca.getParsedSearch()),
                    fa = ba['function'];
                if (!(da in u)) throw new Error(i('Invalid method passed to ApiClient: %s', da));
                ea.method = da;
                ca = n.resolve('graph') + ca.getPath();
                w(ca, da == 'get' ? 'get' : 'post', ea, fa);
            }
            function y(aa, ba) {
                var ca = aa.method.toLowerCase().replace('.', '_');
                aa.format = 'json-strings';
                aa.api_key = s;
                var da = ca in v ? 'api_read' : 'api',
                    ea = n.resolve(da) + '/restserver.php';
                w(ea, 'get', aa, ba);
            }
            var z = {
                setAccessToken: function(aa, ba) {
                    q = aa;
                    r = ba;
                },
                setClientID: function(aa) {
                    s = aa;
                },
                setDefaultParams: function(aa) {
                    t = aa;
                },
                rest: y,
                graph: x
            };
            k.setSwfUrl(p.FlashRequest.swfUrl);
            e.exports = z;
        });
        __d("safeEval", [], function(a, b, c, d, e, f) {
            function g(h) {
                if (h === null || typeof h === 'undefined') return;
                if (typeof h !== 'string') return h;
                return Function('return eval("' + h.replace(/"/g, '\\"') + '");')();
            }
            e.exports = g;
        });
        __d("FB", ["applyWithGuard", "guid", "dotAccess", "copyProperties", "safeEval", "GlobalCallback", "Log", "QueryString", "UrlMap", "SDKConfig"], function(a, b, c, d, e, f) {
            var g = c('SDKConfig'),
                h = b('applyWithGuard'),
                i = b('guid'),
                j = b('dotAccess'),
                k = b('copyProperties'),
                l = b('safeEval'),
                m = b('GlobalCallback'),
                n = b('Log'),
                o = b('QueryString'),
                p = b('UrlMap'),
                q, r, s, t = j(g, 'api.mode'),
                u = {};
            q = FB;
            r = window.FB = {};
            m.setPrefix('FB._callbacks');
            if (j(g, 'api.whitelist.length')) {
                s = {};
                ES5(g.api.whitelist, 'forEach', true, function(ca) {
                    s[ca] = 1;
                });
            }
            function v(ca) {
                k(ca, {
                    appId: q._apiKey
                });
                (new Image()).src = o.appendToUrl(p.resolve('www', true) + '/common/scribe_endpoint.php', {
                    c: 'jssdk_error',
                    m: ES5('JSON', 'stringify', false, ca)
                });
            }
            var w = g.errorHandling.rate;
            if (w && Math.floor(Math.random() * 100) + 1 < w) h.setErrorHandler(function(ca) {
                typeof console !== 'undefined' && typeof bagofholding === 'function';
                delete ca._originalError;
                v({
                    error: ca.name || ca.message,
                    extra: ca
                });
                throw ca;
            });

            function x(ca, da) {
                var ea = ca ? j(q, ca, true) : q,
                    fa = ca ? j(r, ca, true) : r;
                ES5(ES5('Object', 'keys', false, da), 'forEach', true, function(ga) {
                    var ha = (ca ? ca + '.' : '') + ga,
                        ia = da[ga],
                        ja, ka;
                    ea[ga] = ia;
                    if (typeof ia !== 'function') return;
                    if (/^_/.test(ga)) {
                        ja = 'hide';
                    } else if (s && !s[ha]) ja = t;
                    switch (ja) {
                    case 'hide':
                        return;
                    case 'stub':
                        ka = function() {
                            n.warn('The method FB.%s has been removed from the JS SDK.', ha);
                        };
                        break;
                    default:
                        ka = function() {
                            if (ja === 'warn') {
                                n.warn('The method FB.%s is not officially supported by ' + 'Facebook and access to it will soon be removed.', ha);
                                if (!u.hasOwnProperty(ha)) {
                                    v({
                                        error: 'Private method used',
                                        extra: {
                                            args: ha
                                        }
                                    });
                                    u[ha] = true;
                                }
                            }
                            var la = ES5(Array.prototype.slice.call(arguments), 'map', true, function(ma) {
                                return typeof ma === 'function' && /^function/.test(ma.toString()) ?
                                function() {
                                    var na = arguments;
                                    setTimeout(function() {
                                        ma.apply(null, na);
                                    }, 0);
                                } : ma;
                            });
                            return h(ia, ea, la, ha);
                        };
                    }
                    if (ka) fa[ga] = ka;
                });
            }
            var y = /iframe_canvas|app_runner/.test(window.name),
                z = /dialog/.test(window.name),
                aa = (function() {
                    if (location.protocol == 'https:' && (window == top || !(y || z))) return true;
                    if (/_fb_https?/.test(window.name)) return ES5(window.name, 'indexOf', true, '_fb_https') != -1;
                })();

            function ba(ca, da, ea, fa) {
                for (var ga in da) if (ea || typeof ca[ga] === 'undefined') ca[ga] = fa ? fa(da[ga]) : da[ga];
                return ca;
            }
            k(q, {
                _apiKey: null,
                _authResponse: null,
                _userStatus: 'unknown',
                _logging: true,
                _inCanvas: y,
                _https: aa,
                onlyUseHttps: function() {
                    return q._https === true;
                },
                onlyUseHttp: function() {
                    return q._https === false && location.protocol == 'http:';
                },
                _locale: null,
                _localeIsRtl: false,
                getDomain: function(ca, da) {
                    var ea = !da && (window.location.protocol == 'https:' || q._https);
                    switch (ca) {
                    case 'api':
                        return q._domain.api;
                    case 'api_read':
                        return q._domain.api_read;
                    case 'cdn':
                        return ea ? q._domain.https_cdn : q._domain.cdn;
                    case 'cdn_foreign':
                        return q._domain.cdn_foreign;
                    case 'https_cdn':
                        return q._domain.https_cdn;
                    case 'graph':
                        return q._domain.graph;
                    case 'staticfb':
                        return ea ? q._domain.https_staticfb : q._domain.staticfb;
                    case 'https_staticfb':
                        return q._domain.https_staticfb;
                    case 'www':
                        return ea ? q._domain.https_www : q._domain.www;
                    case 'https_www':
                        return q._domain.https_www;
                    case 'm':
                        return ea ? q._domain.https_m : q._domain.m;
                    case 'https_m':
                        return q._domain.https_m;
                    }
                },
                copy: ba,
                create: function(ca, da) {
                    var ea = ca.split('.');
                    ca = ea.pop();
                    var fa = ea.length ? j(q, ea.join('.'), true) : q;
                    return ca in fa ? fa[ca] : fa[ca] = (da || {});
                },
                provide: x,
                guid: i,
                log: function(ca) {
                    if (q._logging) if (window.Debug && window.Debug.writeln) {
                        window.Debug.writeln(ca);
                    } else if (window.console) window.console.log(ca);
                    if (q.Event) q.Event.fire('fb.log', ca);
                },
                $: function(ca) {
                    return document.getElementById(ca);
                },
                dotAccess: j,
                applyWithGuard: h,
                safeEval: l
            });
            if (r) k(r, {
                provide: x
            });
            x('Scribe', {
                log: v
            });
            e.exports = q;
        });
        __d("legacy:fb.api", ["ApiClient", "FB", "SDKConfig"], function(a, b, c, d) {
            var e = c('SDKConfig'),
                f = b('ApiClient'),
                g = b('FB');
            f.setDefaultParams({
                sdk: 'joey'
            });

            function h() {
                var i = g.getAccessToken(),
                    j = function() {
                        if (i == g.getAccessToken()) g.getLoginStatus(null, true);
                    };
                f.setClientID(g._apiKey);
                f.setAccessToken(i, j);
                if (typeof arguments[0] === 'string') {
                    f.graph.apply(f, arguments);
                } else f.rest.apply(f, arguments);
            }
            g.provide('', {
                api: h
            }, true);
        }, 3);
        __c();
        __d("legacy:fb.prelude", ["FB"], function(a, b, c, d) {
            var e = b('FB');
        }, 3);
        FB.provide('Array', {
            merge: function(a, b) {
                for (var c = 0; c < b.length; c++) if (ES5(a, 'indexOf', true, b[c]) < 0) a.push(b[c]);
                return a;
            },
            forEach: function(a, b, c) {
                if (!a) return;
                if (Object.prototype.toString.apply(a) === '[object Array]' || (!(a instanceof Function) && typeof a.length == 'number')) {
                    if (a.forEach) {
                        ES5(a, 'forEach', true, b);
                    } else for (var d = 0, e = a.length; d < e; d++) b(a[d], d, a);
                } else for (var f in a) if (c || a.hasOwnProperty(f)) b(a[f], f, a);
            },
            toArray: function(a) {
                for (var b = 0, c = [], d = a.length; b < d; b++) c[b] = a[b];
                return c;
            }
        });
        FB.provide('QS', {
            encode: function(a, b, c) {
                b = b === undefined ? '&' : b;
                c = c === false ?
                function(e) {
                    return e;
                } : encodeURIComponent;
                var d = [];
                ES5(FB.Array, 'forEach', true, a, function(e, f) {
                    if (e !== null && typeof e != 'undefined') d.push(c(f) + '=' + c(e));
                });
                d.sort();
                return d.join(b);
            },
            decode: function(a) {
                var b = decodeURIComponent,
                    c = {},
                    d = a.split('&'),
                    e, f;
                for (e = 0; e < d.length; e++) {
                    f = d[e].split('=', 2);
                    if (f && f[0]) c[b(f[0])] = b(f[1] || '');
                }
                return c;
            }
        });
        FB.provide('EventProvider', {
            subscribers: function() {
                if (!this._subscribersMap) this._subscribersMap = {};
                return this._subscribersMap;
            },
            subscribe: function(a, b) {
                var c = this.subscribers();
                if (!c[a]) {
                    c[a] = [b];
                } else c[a].push(b);
            },
            unsubscribe: function(a, b) {
                var c = this.subscribers()[a];
                ES5(FB.Array, 'forEach', true, c, function(d, e) {
                    if (d == b) c[e] = null;
                });
            },
            monitor: function(a, b) {
                if (!b()) {
                    var c = this,
                        d = function() {
                            if (b.apply(b, arguments)) c.unsubscribe(a, d);
                        };
                    this.subscribe(a, d);
                }
            },
            clear: function(a) {
                delete this.subscribers()[a];
            },
            fire: function() {
                var a = Array.prototype.slice.call(arguments),
                    b = a.shift(),
                    c = this.subscribers()[b];
                if (c) ES5(c, 'forEach', true, function(d) {
                    if (d) d.apply(this, a);
                });
            },
            listen: function(a, event, b) {
                b.wrapper = function() {
                    FB.applyWithGuard(b, this, arguments, a + ':' + event);
                };
                if (a.addEventListener) {
                    a.addEventListener(event, b.wrapper, false);
                } else if (a.attachEvent) a.attachEvent('on' + event, b.wrapper);
            },
            unlisten: function(a, event, b) {
                if (a.removeEventListener) {
                    a.removeEventListener(event, b.wrapper, false);
                } else if (a.detachEvent) a.detachEvent('on' + event, b.wrapper);
            }
        });
        FB.provide('Event', FB.EventProvider);
        __d("legacy:fb.arbiter", ["FB"], function(a, b, c, d) {
            var e = b('FB');
            e.provide('Arbiter', {
                BEHAVIOR_EVENT: 'e',
                BEHAVIOR_PERSISTENT: 'p',
                BEHAVIOR_STATE: 's',
                inform: function(f, g, h, i, j) {
                    e.XD.sendToFacebook('facebook', {
                        method: f,
                        params: ES5('JSON', 'stringify', false, g || {}),
                        behavior: j || e.Arbiter.BEHAVIOR_PERSISTENT,
                        relation: h
                    });
                }
            });
        }, 3);
        __d("resolveWindow", [], function(a, b, c, d, e, f) {
            function g(h) {
                var i = window,
                    j = h.split('.');
                try {
                    for (var l = 0; l < j.length; l++) {
                        var m = j[l],
                            n = /^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(m);
                        if (n) {
                            i = i.frames[n[1]];
                        } else if (m === 'opener' || m === 'parent' || m === 'top') {
                            i = i[m];
                        } else return null;
                    }
                } catch (k) {
                    return null;
                }
                return i;
            }
            e.exports = g;
        });
        __d("DOMEventListener", [], function(a, b, c, d, e, f) {
            var g, h;
            if (window.addEventListener) {
                g = function(j, k, l) {
                    j.addEventListener(k, l, false);
                };
                h = function(j, k, l) {
                    j.removeEventListener(k, l, false);
                };
            } else if (window.attachEvent) {
                g = function(j, k, l) {
                    j.attachEvent('on' + k, l);
                };
                h = function(j, k, l) {
                    j.detachEvent('on' + k, l);
                };
            }
            var i = {
                add: function(j, k, l) {
                    g(j, k, l);
                    return {
                        remove: function() {
                            h(j, k, l);
                            j = null;
                        }
                    };
                },
                remove: h
            };
            e.exports = i;
        });
        __d("XDM", ["copyProperties", "guid", "DOMEventListener", "DOMWrapper", "Flash", "Log", "UserAgent"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('guid'),
                i = b('DOMEventListener'),
                j = b('DOMWrapper'),
                k = b('Flash'),
                l = b('Log'),
                m = b('UserAgent'),
                n = {},
                o = {
                    transports: []
                },
                p = j.getWindow();

            function q(s) {
                var t = {},
                    u = s.length,
                    v = o.transports;
                while (u--) t[s[u]] = 1;
                u = v.length;
                while (u--) {
                    var w = v[u],
                        x = n[w];
                    if (!t[w] && x.isAvailable()) return w;
                }
            }
            var r = {
                register: function(s, t) {
                    l.debug('Registering %s as XDM provider', s);
                    o.transports.push(s);
                    n[s] = t;
                },
                create: function(s) {
                    if (!s.whenReady && !s.onMessage) {
                        l.error('An instance without whenReady or onMessage makes no sense');
                        throw new Error('An instance without whenReady or ' + 'onMessage makes no sense');
                    }
                    if (!s.channel) {
                        l.warn('Missing channel name, selecting at random');
                        s.channel = h();
                    }
                    if (!s.whenReady) s.whenReady = bagofholding;
                    if (!s.onMessage) s.onMessage = bagofholding;
                    var t = s.transport || q(s.blacklist || []),
                        u = n[t];
                    if (u && u.isAvailable()) {
                        l.debug('%s is available', t);
                        u.init(s);
                        return t;
                    }
                }
            };
            r.register('fragment', (function() {
                var s = false,
                    t, u = location.protocol + '//' + location.host;

                function v(w) {
                    var x = document.createElement('iframe');
                    x.src = 'javascript:false';
                    var y = i.add(x, 'load', function() {
                        y.remove();
                        setTimeout(function() {
                            x.parentNode.removeChild(x);
                        }, 5000);
                    });
                    t.appendChild(x);
                    x.src = w;
                }
                return {
                    isAvailable: function() {
                        return true;
                    },
                    init: function(w) {
                        l.debug('init fragment');
                        var x = {
                            send: function(y, z, aa, ba) {
                                l.debug('sending to: %s (%s)', z + w.channelPath, ba);
                                v(z + w.channelPath + y + '&xd_rel=parent.parent&relation=parent.parent&xd_origin=' + encodeURIComponent(u));
                            }
                        };
                        if (s) {
                            w.whenReady(x);
                            return;
                        }
                        t = w.root;
                        s = true;
                        w.whenReady(x);
                    }
                };
            })());
            r.register('flash', (function() {
                var s = false,
                    t, u = {},
                    v = false,
                    w = 15000,
                    x;
                return {
                    isAvailable: function() {
                        return k.checkMinVersion('8.0.24');
                    },
                    init: function(y) {
                        l.debug('init flash: ' + y.channel);
                        var z = {
                            send: function(ca, da, ea, fa) {
                                l.debug('sending to: %s (%s)', da, fa);
                                t.postMessage(ca, da, fa);
                            }
                        };
                        if (s) {
                            y.whenReady(z);
                            return;
                        }
                        var aa = y.root.appendChild(p.document.createElement('div')),
                            ba = h();
                        u[ba] = function() {
                            clearTimeout(x);
                            l.info('xdm.swf called the callback');
                            delete u[ba];
                            ba = h();
                            u[ba] = function(ca, da) {
                                ca = decodeURIComponent(ca);
                                l.debug('received message %s from %s', ca, da);
                                y.onMessage(ca, da);
                            };
                            t.init(y.channel, 'FB_XDM_CALLBACKS.' + ba);
                            y.whenReady(z);
                        };
                        p.FB_XDM_CALLBACKS = u;
                        t = k.embed(y.flashUrl, aa, null, {
                            protocol: location.protocol.replace(':', ''),
                            host: location.host,
                            callback: 'FB_XDM_CALLBACKS.' + ba,
                            log: v
                        });
                        x = setTimeout(function() {
                            l.warn('The Flash component did not load within %s ms - ' + 'verify that the container is not set to hidden or invisible ' + 'using CSS as this will cause some browsers to not load ' + 'the components', w);
                        }, w);
                        s = true;
                    }
                };
            })());
            r.register('postmessage', (function() {
                var s = false;
                return {
                    isAvailable: function() {
                        return !!p.postMessage;
                    },
                    init: function(t) {
                        l.debug('init postMessage: ' + t.channel);
                        var u = '_FB_' + t.channel,
                            v = {
                                send: function(w, x, y, z) {
                                    if (p === y) {
                                        l.error('Invalid windowref, equal to window (self)');
                                        throw new Error();
                                    }
                                    l.debug('sending to: %s (%s)', x, z);
                                    var aa = function() {
                                            y.postMessage('_FB_' + z + w, x);
                                        };
                                    if (m.ie() == 8) {
                                        setTimeout(aa, 0);
                                    } else aa();
                                }
                            };
                        if (s) {
                            t.whenReady(v);
                            return;
                        }
                        i.add(p, 'message', function(event) {
                            var w = event.data,
                                x = event.origin || 'native';
                            if (typeof w != 'string') {
                                l.warn('Received message of type %s from %s, expected a string', typeof w, x);
                                return;
                            }
                            l.debug('received message %s from %s', w, x);
                            if (w.substring(0, u.length) == u) w = w.substring(u.length);
                            t.onMessage(w, x);
                        });
                        t.whenReady(v);
                        s = true;
                    }
                };
            })());
            e.exports = r;
        });
        __d("JSONRPC", ["copyProperties", "Log"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('Log');

            function i(j) {
                this._counter = 0;
                this._callbacks = {};
                this.remote = {};
                this.local = {};
                this._write = j;
            }
            g(i.prototype, {
                stub: function(j) {
                    this.remote[j] = ES5(function() {
                        var k = Array.prototype.slice.call(arguments),
                            l = {
                                jsonrpc: '2.0',
                                method: j
                            };
                        if (typeof k[k.length - 1] == 'function') {
                            l.id = ++this._counter;
                            this._callbacks[l.id] = k.pop();
                        }
                        l.params = k;
                        this._write(ES5('JSON', 'stringify', false, l), {
                            method: j
                        });
                    }, 'bind', true, this);
                },
                read: function(j, k) {
                    var l = ES5('JSON', 'parse', false, j),
                        m = l.id;
                    if (!l.method) {
                        if (!this._callbacks[m]) {
                            h.warn('Could not find callback %s', m);
                            return;
                        }
                        var n = this._callbacks[m];
                        delete this._callbacks[m];
                        delete l.id;
                        delete l.jsonrpc;
                        n(l);
                        return;
                    }
                    var o = this,
                        p = this.local[l.method],
                        q;
                    if (m) {
                        q = function(t, u) {
                            var v = {
                                jsonrpc: '2.0',
                                id: m
                            };
                            v[t] = u;
                            setTimeout(function() {
                                o._write(ES5('JSON', 'stringify', false, v), {
                                    ref: k
                                });
                            }, 0);
                        };
                    } else q = function() {};
                    if (!p) {
                        h.error('Method "%s" has not been defined', l.method);
                        q('error', {
                            code: -32601,
                            message: 'Method not found',
                            data: l.method
                        });
                        return;
                    }
                    l.params.push(ES5(q, 'bind', true, null, 'result'));
                    l.params.push(ES5(q, 'bind', true, null, 'error'));
                    try {
                        var s = p.apply(null, l.params);
                        if (typeof s !== 'undefined') q('result', s);
                    } catch (r) {
                        h.error('Invokation of RPC method %s resulted in the error: %s', l.method, r.message);
                        q('error', {
                            code: -32603,
                            message: 'Internal error',
                            data: r.message
                        });
                    }
                }
            });
            e.exports = i;
        });
        __d("SDK_XD", ["applyWithGuard", "guid", "resolveWindow", "FB", "XDM", "Log", "QueryString", "Queue", "URL", "JSONRPC", "XDConfig"], function(a, b, c, d, e, f) {
            var g = c('XDConfig'),
                h = b('applyWithGuard'),
                i = b('guid'),
                j = b('resolveWindow'),
                k = b('FB'),
                l = b('XDM'),
                m = b('Log'),
                n = b('QueryString'),
                o = b('Queue'),
                p = b('URL'),
                q = b('JSONRPC'),
                r = new o(),
                s = new o(),
                t = new o(),
                u, v, w = i(),
                x = i(),
                y = location.protocol + '//' + location.host,
                z, aa = false,
                ba = {},
                ca;

            function da(ka) {
                m.info('Remote XD can talk to facebook.com (%s)', ka);
                if (ka == 'canvas') {
                    k._inCanvas = true;
                } else k.Canvas._isTabIframe = true;
            }
            function ea(ka, la) {
                if (!la) {
                    m.error('No senderOrigin');
                    throw new Error();
                }
                var ma = /^https?/.exec(la)[0];
                switch (ka.xd_action) {
                case 'proxy_ready':
                    var na, oa;
                    if (ma == 'https') {
                        na = t;
                        oa = v;
                    } else {
                        na = s;
                        oa = u;
                    }
                    if (ka.registered) {
                        da(ka.registered);
                        r = na.merge(r);
                    }
                    m.info('Proxy ready, starting queue %s containing %s messages', ma + 'ProxyQueue', na.getLength());
                    na.start(function(qa) {
                        z.send(typeof qa === 'string' ? qa : n.encode(qa), la, oa.contentWindow, x + '_' + ma);
                    });
                    break;
                case 'plugin_ready':
                    m.info('Plugin %s ready, protocol: %s', ka.name, ma);
                    ba[ka.name] = {
                        protocol: ma
                    };
                    if (o.exists(ka.name)) {
                        var pa = o.get(ka.name);
                        m.debug('Enqueuing %s messages for %s in %s', pa.getLength(), ka.name, ma + 'ProxyQueue');
                        (ma == 'https' ? t : s).merge(pa);
                    }
                    break;
                }
                if (ka.data) fa(ka.data, la);
            }
            function fa(ka, la) {
                h(function() {
                    if (la && la !== 'native' && !p(la).isFacebookURL()) return;
                    if (typeof ka == 'string') {
                        if (/^FB_RPC:/.test(ka)) {
                            ca.read(ka.substring(7));
                            return;
                        }
                        if (ka.substring(0, 1) == '{') {
                            try {
                                ka = ES5('JSON', 'parse', false, ka);
                            } catch (ma) {
                                m.warn('Failed to decode %s as JSON', ka);
                                return;
                            }
                        } else ka = n.decode(ka);
                    }
                    if (!la) if (ka.xd_sig == w) la = ka.xd_origin;
                    if (ka.xd_action) {
                        ea(ka, la);
                        return;
                    }
                    if (ka.access_token) k._https = /^https/.test(y);
                    if (ka.cb) {
                        var na = k.XD._callbacks[ka.cb];
                        if (!k.XD._forever[ka.cb]) delete k.XD._callbacks[ka.cb];
                        if (na) na(ka);
                    }
                }, null, null, 'XD:message');
            }
            var ga = function() {
                    var ka = document.createElement("form"),
                        la = ka.appendChild(document.createElement("input")),
                        ma;
                    la.name = i();
                    ma = la !== ka.elements[la.name];
                    ka = la = null;
                    ga = function() {
                        return ma;
                    };
                    return ma;
                };

            function ha(ka) {
                var la = ga() ? document.createElement('<iframe name="' + ka.name + '"/>') : document.createElement("iframe");
                la.name = la.id = ka.name;
                la.src = "javascript:false";
                ka.root.appendChild(la);
                la.src = ka.url;
                return la;
            }
            function ia(ka, la) {
                if (ka == 'facebook') {
                    la.relation = 'parent.parent';
                    r.enqueue(la);
                } else {
                    la.relation = 'parent.frames["' + ka + '"]';
                    var ma = ba[ka];
                    if (ma) {
                        m.debug('Enqueuing message for plugin %s in %s', ka, ma.protocol + 'ProxyQueue');
                        (ma.protocol == 'https' ? t : s).enqueue(la);
                    } else {
                        m.debug('Buffering message for plugin %s', ka);
                        o.get(ka).enqueue(la);
                    }
                }
            }
            ca = new q(function(ka) {
                ia('facebook', 'FB_RPC:' + ka);
            });
            var ja = {
                rpc: ca,
                _callbacks: {},
                _forever: {},
                _channel: x,
                _origin: y,
                onMessage: fa,
                recv: fa,
                init: function(ka, la) {
                    if (aa) return;
                    var ma = ka ? /\/\/.*?(\/[^#]*)/.exec(ka)[1] : location.pathname + location.search;
                    ma += (~ES5(ma, 'indexOf', true, '?') ? '&' : '?') + 'fb_xd_fragment#xd_sig=' + w + '&';
                    var na = k.Content.appendHidden(document.createElement('div')),
                        oa = l.create({
                            root: na,
                            channel: x,
                            channelPath: '/' + g.XdUrl + '#',
                            flashUrl: g.Flash.path,
                            whenReady: function(pa) {
                                z = pa;
                                var qa = {
                                    channel: x,
                                    origin: location.protocol + '//' + location.host,
                                    channel_path: ma,
                                    transport: oa,
                                    xd_name: la
                                },
                                    ra = g.XdUrl + '#' + n.encode(qa),
                                    sa = g.useCdn ? k._domain.staticfb : 'http://www.facebook.com/',
                                    ta = g.useCdn ? k._domain.https_staticfb : 'https://www.facebook.com/';
                                if (!k.onlyUseHttps()) u = ha({
                                    url: sa + ra,
                                    name: 'fb_xdm_frame_http',
                                    root: na
                                });
                                v = ha({
                                    url: ta + ra,
                                    name: 'fb_xdm_frame_https',
                                    root: na
                                });
                            },
                            onMessage: fa
                        });
                    aa = true;
                },
                sendToFacebook: ia,
                handler: function(ka, la, ma, na) {
                    na = na || i();
                    if (ma) k.XD._forever[na] = true;
                    k.XD._callbacks[na] = ka;
                    var oa = location.protocol == 'https:' ? k._domain.https_staticfb : k._domain.staticfb,
                        pa = g.useCdn ? oa : location.protocol + '//www.facebook.com/';
                    return pa + g.XdUrl + '#' + n.encode({
                        cb: na,
                        origin: y + '/' + x,
                        domain: location.hostname,
                        relation: la || 'opener'
                    });
                }
            };
            (function() {
                var ka = location.href.match(/[?&]fb_xd_fragment#(.*)$/);
                if (ka) {
                    document.documentElement.style.display = 'none';
                    var la = n.decode(ka[1]),
                        ma = j(la.xd_rel);
                    m.debug('Passing fragment based message: %s', ka[1]);
                    ma.FB.XD.onMessage(la);
                    document.open();
                    document.close();
                }
            })();
            e.exports = ja;
        });
        __d("legacy:fb.xd", ["FB", "SDK_XD"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('SDK_XD');
            e.provide('XD', f);
        }, 3);
        FB.provide('Canvas', {
            _timer: null,
            _lastSize: {},
            _isTabIframe: !! ~ES5(window.name, 'indexOf', true, 'app_runner_'),
            _pageInfo: {
                clientWidth: 0,
                clientHeight: 0,
                scrollLeft: 0,
                scrollTop: 0,
                offsetLeft: 0,
                offsetTop: 0
            },
            getPageInfo: function(a) {
                if (typeof a !== 'function') {
                    FB.log('FB.Canvas.getPageInfo called without a callback');
                    return;
                }
                if (FB.initSitevars.rpc) {
                    FB.XD.rpc.remote.getPageInfo(function(e) {
                        if (e.result) a(e.result);
                    });
                } else {
                    var b = 'top.frames[' + window.name + ']',
                        c = FB.XD.handler(function(e) {
                            for (var f in FB.Canvas._pageInfo) if (e[f]) FB.Canvas._pageInfo[f] = e[f] | 0;
                            a && a(FB.Canvas._pageInfo);
                        }, b, true),
                        d = {
                            channelUrl: c,
                            frame: window.name
                        };
                    FB.Arbiter.inform('getPageInfo', d, 'top');
                }
            },
            getHash: function(a) {
                if (typeof a !== 'function') {
                    FB.log('FB.Canvas.getHash called without a callback');
                    return;
                }
                FB.XD.rpc.remote.getHash(function(b) {
                    a(b.result);
                });
            },
            setHash: function(a) {
                if (typeof a !== 'string') {
                    FB.log('FB.Canvas.setHash must have a String as argument');
                    return;
                }
                a = a.replace(/[{}<\[\]>#%"]/, encodeURIComponent);
                FB.XD.rpc.remote.setHash(a);
            },
            hideFlashElement: function(a) {
                a.style.visibility = 'hidden';
            },
            showFlashElement: function(a) {
                a.style.visibility = '';
            },
            _flashClassID: "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
            _hideFlashCallback: function(a) {
                var b = window.document.getElementsByTagName('object');
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d.type.toLowerCase() != "application/x-shockwave-flash" && d.classid.toUpperCase() != FB.Canvas._flashClassID) continue;
                    var e = false;
                    for (var f = 0; f < d.childNodes.length; f++) if (d.childNodes[f].nodeName.toLowerCase() == "param" && d.childNodes[f].name.toLowerCase() == "wmode") if (d.childNodes[f].value.toLowerCase() == "opaque" || d.childNodes[f].value.toLowerCase() == "transparent") e = true;
                    if (!e) {
                        var g = Math.random();
                        if (g <= 1 / 1000) FB.api(FB._apiKey + '/occludespopups', 'post', {});
                        if (FB.Canvas._devHideFlashCallback) {
                            var h = 200,
                                i = {
                                    state: a.state,
                                    elem: d
                                },
                                j = ES5(function(k) {
                                    if (k.state == 'opened') {
                                        FB.Canvas.hideFlashElement(k.elem);
                                    } else FB.Canvas.showFlashElement(k.elem);
                                }, 'bind', true, this, i);
                            setTimeout(j, h);
                            FB.Canvas._devHideFlashCallback(i);
                        } else if (a.state == 'opened') {
                            d._old_visibility = d.style.visibility;
                            d.style.visibility = 'hidden';
                        } else if (a.state == 'closed') {
                            d.style.visibility = d._old_visibility;
                            delete d._old_visibility;
                        }
                    }
                }
            },
            _devHideFlashCallback: null,
            _setHideFlashCallback: function(a) {
                FB.Canvas._devHideFlashCallback = a;
            },
            init: function() {
                var a = FB.XD.handler(FB.Canvas._hideFlashCallback, 'top.frames[' + window.name + ']', true);
                FB.Arbiter.inform('iframeSetupFlashHiding', {
                    channelUrl: a
                });
            },
            setSize: function(a) {
                if (!FB._initialized && arguments.callee.caller != FB.setAutoGrow) FB.log('FB.init is required for setSize to take effect');
                if (typeof a != "object") a = {};
                var b = 0,
                    c = 0;
                a = a || {};
                if (a.width == null || a.height == null) {
                    a = FB.copy(a, FB.Canvas._computeContentSize());
                    b = 16;
                    c = 4;
                }
                a = FB.copy(a, {
                    frame: window.name || 'iframe_canvas'
                });
                if (FB.Canvas._lastSize[a.frame]) {
                    var d = FB.Canvas._lastSize[a.frame].height,
                        e = a.height - d;
                    if (FB.Canvas._lastSize[a.frame].width == a.width && (e <= c && e >= -b)) return false;
                }
                FB.Canvas._lastSize[a.frame] = a;
                if (FB.initSitevars.rpc) {
                    FB.XD.rpc.remote.setSize(a);
                } else FB.Arbiter.inform('setSize', a);
                return true;
            },
            scrollTo: function(a, b) {
                if (!FB._initialized) FB.log('FB.init is required for scrollTo to take effect');
                if (FB.initSitevars.rpc) {
                    FB.XD.rpc.remote.scrollTo({
                        x: a,
                        y: b
                    });
                } else FB.Arbiter.inform('scrollTo', {
                    frame: window.name || 'iframe_canvas',
                    x: a,
                    y: b
                });
            },
            setAutoGrow: function(a, b) {
                if (!FB._initialized) FB.log('FB.init is required for setAutoGrow to take effect');
                if (b === undefined && typeof a == "number") {
                    b = a;
                    a = true;
                }
                if (a === undefined || a) {
                    if (FB.Canvas._timer === null) FB.Canvas._timer = window.setInterval(FB.Canvas.setSize, b || 100);
                    FB.Canvas.setSize();
                } else if (FB.Canvas._timer !== null) {
                    window.clearInterval(FB.Canvas._timer);
                    FB.Canvas._timer = null;
                }
            },
            setAutoResize: function(a, b) {
                return FB.Canvas.setAutoGrow(a, b);
            },
            isTabIframe: function() {
                return FB.Canvas._isTabIframe;
            },
            setDoneLoading: function(a) {
                FB.Canvas._passAppTtiMessage(a, 'RecordIframeAppTti');
            },
            stopTimer: function(a) {
                FB.Canvas._passAppTtiMessage(a, 'StopIframeAppTtiTimer');
            },
            setUrlHandler: function(a) {
                if (!FB._initialized) FB.log('FB.init is required for setUrlHandler to take effect');
                var b = FB.XD.handler(a, 'top.frames[' + window.name + ']', true);
                FB.Arbiter.inform('setUrlHandler', b);
                FB.Event.listen(window, 'load', function() {
                    FB.Arbiter.inform('setUrlHandler', b);
                });
            },
            startTimer: function() {
                FB.Canvas._passAppTtiMessage(null, 'StartIframeAppTtiTimer');
            },
            _passAppTtiMessage: function(a, b) {
                var c = null;
                if (a) c = FB.XD.handler(a, 'top.frames[' + window.name + ']', false);
                FB.Arbiter.inform(b, {
                    frame: window.name || 'iframe_canvas',
                    time: (new Date()).getTime(),
                    appId: parseInt(FB._apiKey, 10),
                    channelUrl: c
                });
            },
            _computeContentSize: function() {
                var a = document.body,
                    b = document.documentElement,
                    c = 0,
                    d = Math.max(a.offsetTop, 0),
                    e = Math.max(b.offsetTop, 0),
                    f = a.scrollHeight + d,
                    g = a.offsetHeight + d,
                    h = b.scrollHeight + e,
                    i = b.offsetHeight + e,
                    j = Math.max(f, g, h, i);
                if (a.offsetWidth < a.scrollWidth) {
                    c = a.scrollWidth + a.offsetLeft;
                } else ES5(FB.Array.toArray(a.childNodes), 'forEach', true, function(k) {
                    var l = k.offsetWidth + k.offsetLeft;
                    if (l > c) c = l;
                });
                if (b.clientLeft > 0) c += (b.clientLeft * 2);
                if (b.clientTop > 0) j += (b.clientTop * 2);
                return {
                    height: j,
                    width: c
                };
            }
        });
        FB.XD.rpc.stub('getPageInfo');
        FB.XD.rpc.stub('getHash');
        FB.XD.rpc.stub('setHash');
        FB.XD.rpc.stub('setSize');
        FB.XD.rpc.stub('scrollTo');
        FB.XD.rpc.stub('showDialog');
        __d("legacy:fb.ua", ["copyProperties", "FB", "UserAgent"], function(a, b, c, d) {
            var e = b('copyProperties'),
                f = b('FB'),
                g = b('UserAgent'),
                h = e({}, g);
            h.mobile = function() {
                return !f._inCanvas && g.mobile();
            };
            f.provide('UA', h);
        }, 3);
        FB.provide('Content', {
            _root: null,
            _hiddenRoot: null,
            append: function(a, b) {
                if (!b) if (!FB.Content._root) {
                    FB.Content._root = b = FB.$('fb-root');
                    if (!b) {
                        FB.log('The "fb-root" div has not been created, auto-creating');
                        FB.Content._root = b = document.createElement('div');
                        b.id = 'fb-root';
                        if (FB.UA.ie() || !document.body) {
                            FB.Dom.ready(function() {
                                document.body.appendChild(b);
                            });
                        } else document.body.appendChild(b);
                    }
                    b.className += ' fb_reset';
                } else b = FB.Content._root;
                if (typeof a == 'string') {
                    var c = document.createElement('div');
                    b.appendChild(c).innerHTML = a;
                    return c;
                } else return b.appendChild(a);
            },
            appendHidden: function(a) {
                if (!FB.Content._hiddenRoot) {
                    var b = document.createElement('div'),
                        c = b.style;
                    c.position = 'absolute';
                    c.top = '-10000px';
                    c.width = c.height = 0;
                    FB.Content._hiddenRoot = FB.Content.append(b);
                }
                return FB.Content.append(a, FB.Content._hiddenRoot);
            },
            insertIframe: function(a) {
                a.id = a.id || FB.guid();
                a.name = a.name || FB.guid();
                var b = FB.guid(),
                    c = false,
                    d = false,
                    e = window.FB._callbacks || (window.FB._callbacks = {});
                e[b] = function() {
                    if (c && !d) {
                        d = true;
                        a.onload && a.onload(a.root.firstChild);
                    }
                };
                if (document.attachEvent) {
                    var f = ('<iframe' + ' id="' + a.id + '"' + ' name="' + a.name + '"' + (a.title ? ' title="' + a.title + '"' : '') + (a.className ? ' class="' + a.className + '"' : '') + ' style="border:none;' + (a.width ? 'width:' + a.width + 'px;' : '') + (a.height ? 'height:' + a.height + 'px;' : '') + '"' + ' src="javascript:false;"' + ' frameborder="0"' + ' scrolling="no"' + ' allowtransparency="true"' + ' onload="FB._callbacks.' + b + '()"' + '></iframe>');
                    a.root.innerHTML = '<iframe src="javascript:false"' + ' frameborder="0"' + ' scrolling="no"' + ' style="height:1px"></iframe>';
                    c = true;
                    window.setTimeout(function() {
                        a.root.innerHTML = f;
                        a.root.firstChild.src = a.url;
                        a.onInsert && a.onInsert(a.root.firstChild);
                    }, 0);
                } else {
                    var g = document.createElement('iframe');
                    g.id = a.id;
                    g.name = a.name;
                    g.onload = e[b];
                    g.scrolling = 'no';
                    g.style.border = 'none';
                    g.style.overflow = 'hidden';
                    if (a.title) g.title = a.title;
                    if (a.className) g.className = a.className;
                    if (a.height !== undefined) g.style.height = a.height + 'px';
                    if (a.width !== undefined) if (a.width == '100%') {
                        g.style.width = a.width;
                    } else g.style.width = a.width + 'px';
                    a.root.appendChild(g);
                    c = true;
                    g.src = a.url;
                    a.onInsert && a.onInsert(g);
                }
            },
            submitToTarget: function(a, b) {
                var c = document.createElement('form');
                c.action = a.url;
                c.target = a.target;
                c.method = (b) ? 'GET' : 'POST';
                FB.Content.appendHidden(c);
                ES5(FB.Array, 'forEach', true, a.params, function(d, e) {
                    if (d !== null && d !== undefined) {
                        var f = document.createElement('input');
                        f.name = e;
                        f.value = d;
                        c.appendChild(f);
                    }
                });
                c.submit();
                c.parentNode.removeChild(c);
            }
        });
        FB.provide('String', {
            format: function(a) {
                if (!FB.String.format._formatRE) FB.String.format._formatRE = /(\{[^\}^\{]+\})/g;
                var b = arguments;
                return a.replace(FB.String.format._formatRE, function(c, d) {
                    var e = parseInt(d.substr(1), 10),
                        f = b[e + 1];
                    if (f === null || f === undefined) return '';
                    return f.toString();
                });
            },
            escapeHTML: function(a) {
                var b = document.createElement('div');
                b.appendChild(document.createTextNode(a));
                return b.innerHTML.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            },
            quote: function(a) {
                var b = /["\\\x00-\x1f\x7f-\x9f]/g,
                    c = {
                        '\b': '\\b',
                        '\t': '\\t',
                        '\n': '\\n',
                        '\f': '\\f',
                        '\r': '\\r',
                        '"': '\\"',
                        '\\': '\\\\'
                    };
                return b.test(a) ? '"' + a.replace(b, function(d) {
                    var e = c[d];
                    if (e) return e;
                    e = d.charCodeAt();
                    return '\\u00' + Math.floor(e / 16).toString(16) + (e % 16).toString(16);
                }) + '"' : '"' + a + '"';
            }
        });
        FB.provide('Dom', {
            containsCss: function(a, b) {
                var c = ' ' + a.className + ' ';
                return ES5(c, 'indexOf', true, ' ' + b + ' ') >= 0;
            },
            addCss: function(a, b) {
                if (!FB.Dom.containsCss(a, b)) a.className = a.className + ' ' + b;
            },
            removeCss: function(a, b) {
                if (FB.Dom.containsCss(a, b)) {
                    a.className = a.className.replace(b, '');
                    FB.Dom.removeCss(a, b);
                }
            },
            getByClass: function(a, b, c) {
                b = b || document.body;
                c = c || '*';
                if (b.querySelectorAll) return FB.Array.toArray(b.querySelectorAll(c + '.' + a));
                var d = b.getElementsByTagName(c),
                    e = [];
                for (var f = 0, g = d.length; f < g; f++) if (this.containsCss(d[f], a)) e[e.length] = d[f];
                return e;
            },
            getStyle: function(a, b) {
                var c = false,
                    d = a.style;
                if (a.currentStyle) {
                    b = b.replace(/-(\w)/g, function(e, f) {
                        return f.toUpperCase();
                    });
                    c = a.currentStyle[b];
                } else {
                    b = b.replace(/[A-Z]/g, function(e) {
                        return '-' + e.toLowerCase();
                    });
                    if (window.getComputedStyle) {
                        c = document.defaultView.getComputedStyle(a, null).getPropertyValue(b);
                        if (b == 'background-position-y' || b == 'background-position-x') if (c == 'top' || c == 'left') c = '0px';
                    }
                }
                if (b == 'opacity') {
                    if (a.filters && a.filters.alpha) return c;
                    return c * 100;
                }
                return c;
            },
            setStyle: function(a, b, c) {
                var d = a.style;
                if (b == 'opacity') {
                    if (c >= 100) c = 99.999;
                    if (c < 0) c = 0;
                    d.opacity = c / 100;
                    d.MozOpacity = c / 100;
                    d.KhtmlOpacity = c / 100;
                    if (a.filters) if (a.filters.alpha == undefined) {
                        a.filter = "alpha(opacity=" + c + ")";
                    } else a.filters.alpha.opacity = c;
                } else d[b] = c;
            },
            addScript: function(a) {
                var b = document.createElement('script');
                b.type = "text/javascript";
                b.src = a;
                return document.getElementsByTagName('head')[0].appendChild(b);
            },
            addCssRules: function(a, b) {
                if (!FB.Dom._cssRules) FB.Dom._cssRules = {};
                var c = true;
                ES5(b, 'forEach', true, function(f) {
                    if (!(f in FB.Dom._cssRules)) {
                        c = false;
                        FB.Dom._cssRules[f] = true;
                    }
                });
                if (c) return;
                if (!FB.UA.ie()) {
                    var d = document.createElement('style');
                    d.type = 'text/css';
                    d.textContent = a;
                    document.getElementsByTagName('head')[0].appendChild(d);
                } else try {
                    document.createStyleSheet().cssText = a;
                } catch (e) {
                    if (document.styleSheets[0]) document.styleSheets[0].cssText += a;
                }
            },
            getViewportInfo: function() {
                var a = (document.documentElement && document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;
                return {
                    scrollTop: a.scrollTop || document.body.scrollTop,
                    scrollLeft: a.scrollLeft || document.body.scrollLeft,
                    width: self.innerWidth ? self.innerWidth : a.clientWidth,
                    height: self.innerHeight ? self.innerHeight : a.clientHeight
                };
            },
            ready: function(a) {
                if (FB.Dom._isReady) {
                    a && a();
                } else FB.Event.subscribe('dom.ready', a);
            },
            getPosition: function(a) {
                var b = 0,
                    c = 0;
                do {
                    b += a.offsetLeft;
                    c += a.offsetTop;
                } while (a = a.offsetParent);
                return {
                    x: b,
                    y: c
                };
            }
        });
        (function() {
            function a() {
                FB.Dom._isReady = true;
                FB.Event.fire('dom.ready');
                FB.Event.clear('dom.ready');
            }
            if (FB.Dom._isReady || document.readyState == 'complete') return a();
            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', a, false);
            } else if (document.attachEvent) document.attachEvent('onreadystatechange', a);
            if (FB.UA.ie() && window == window.top)(function() {
                try {
                    document.documentElement.doScroll('left');
                } catch (c) {
                    setTimeout(arguments.callee, 0);
                    return;
                }
                a();
            })();
            var b = window.onload;
            window.onload = function() {
                a();
                if (b) if (typeof b == 'string') {
                    FB.safeEval(b);
                } else b();
            };
        })();
        FB.provide('Intl', (function() {
            var a = ('[' + '.!?' + '\u3002' + '\uFF01' + '\uFF1F' + '\u0964' + '\u2026' + '\u0EAF' + '\u1801' + '\u0E2F' + '\uFF0E' + ']');

            function b(e) {
                if (typeof e != 'string') return false;
                return e.match(new RegExp(a + '[' + ')"' + "'" + '\u00BB' + '\u0F3B' + '\u0F3D' + '\u2019' + '\u201D' + '\u203A' + '\u3009' + '\u300B' + '\u300D' + '\u300F' + '\u3011' + '\u3015' + '\u3017' + '\u3019' + '\u301B' + '\u301E' + '\u301F' + '\uFD3F' + '\uFF07' + '\uFF09' + '\uFF3D' + '\s' + ']*$'));
            }
            function c(e, f) {
                if (f !== undefined) if (typeof f != 'object') {
                    FB.log('The second arg to FB.Intl.tx() must be an Object for ' + 'FB.Intl.tx(' + e + ', ...)');
                } else {
                    var g;
                    for (var h in f) if (f.hasOwnProperty(h)) {
                        if (b(f[h])) {
                            g = new RegExp('\{' + h + '\}' + a + '*', 'g');
                        } else g = new RegExp('\{' + h + '\}', 'g');
                        e = e.replace(g, f[h]);
                    }
                }
                return e;
            }
            function d(e, f) {
                if (!FB.Intl._stringTable) return null;
                return c(FB.Intl._stringTable[e], f);
            }
            d._ = c;
            return {
                tx: d,
                _tx: c
            };
        })());
        FB.provide('', {
            Class: function(a, b, c) {
                if (FB.CLASSES[a]) return FB.CLASSES[a];
                var d = b ||
                function() {};
                d.prototype = c;
                d.prototype.bind = function(e) {
                    return ES5(e, 'bind', true, this);
                };
                d.prototype.constructor = d;
                FB.create(a, d);
                FB.CLASSES[a] = d;
                return d;
            },
            subclass: function(a, b, c, d) {
                if (FB.CLASSES[a]) return FB.CLASSES[a];
                var e = FB.create(b);
                FB.copy(d, e.prototype);
                d._base = e;
                d._callBase = function(f) {
                    var g = Array.prototype.slice.call(arguments, 1);
                    return e.prototype[f].apply(this, g);
                };
                return FB.Class(a, c ? c : function() {
                    if (e.apply) e.apply(this, arguments);
                }, d);
            },
            CLASSES: {}
        });
        FB.provide('Type', {
            isType: function(a, b) {
                while (a) if (a.constructor === b || a === b) {
                    return true;
                } else a = a._base;
                return false;
            }
        });
        FB.Class('Obj', null, FB.copy({
            setProperty: function(a, b) {
                if (ES5('JSON', 'stringify', false, b) != ES5('JSON', 'stringify', false, this[a])) {
                    this[a] = b;
                    this.fire(a, b);
                }
            }
        }, FB.EventProvider));
        FB.subclass('Dialog', 'Obj', function(a) {
            this.id = a;
            if (!FB.Dialog._dialogs) {
                FB.Dialog._dialogs = {};
                FB.Dialog._addOrientationHandler();
            }
            FB.Dialog._dialogs[a] = this;
        }, {});
        FB.provide('Dialog', {
            _dialogs: null,
            _lastYOffset: 0,
            _loaderEl: null,
            _overlayEl: null,
            _stack: [],
            _active: null,
            get: function(a) {
                return FB.Dialog._dialogs[a];
            },
            _findRoot: function(a) {
                while (a) {
                    if (FB.Dom.containsCss(a, 'fb_dialog')) return a;
                    a = a.parentNode;
                }
            },
            _createWWWLoader: function(a) {
                a = parseInt(a, 10);
                a = a ? a : 460;
                return FB.Dialog.create({
                    content: ('<div class="dialog_title">' + '  <a id="fb_dialog_loader_close">' + '    <div class="fb_dialog_close_icon"></div>' + '  </a>' + '  <span>Facebook</span>' + '  <div style="clear:both;"></div>' + '</div>' + '<div class="dialog_content"></div>' + '<div class="dialog_footer"></div>'),
                    width: a
                });
            },
            _createMobileLoader: function() {
                var a = FB.UA.nativeApp() ? '' : ('<table>' + '  <tbody>' + '    <tr>' + '      <td class="header_left">' + '        <label class="touchable_button">' + '          <input type="submit" value="' + FB.Intl.tx._("Cancel") + '"' + '            id="fb_dialog_loader_close"/>' + '        </label>' + '      </td>' + '      <td class="header_center">' + '        <div>' + FB.Intl.tx._("Loading...") + '</div>' + '      </td>' + '      <td class="header_right">' + '      </td>' + '    </tr>' + '  </tbody>' + '</table>');
                return FB.Dialog.create({
                    classes: 'loading' + (FB.UA.ipad() ? ' centered' : ''),
                    content: ('<div class="dialog_header">' + a + '</div>')
                });
            },
            _restoreBodyPosition: function() {
                if (!FB.UA.ipad()) {
                    var a = document.getElementsByTagName('body')[0];
                    FB.Dom.removeCss(a, 'fb_hidden');
                }
            },
            _showIPadOverlay: function() {
                if (!FB.UA.ipad()) return;
                if (!FB.Dialog._overlayEl) {
                    FB.Dialog._overlayEl = document.createElement('div');
                    FB.Dialog._overlayEl.setAttribute('id', 'fb_dialog_ipad_overlay');
                    FB.Content.append(FB.Dialog._overlayEl, null);
                }
                FB.Dialog._overlayEl.className = '';
            },
            _hideIPadOverlay: function() {
                if (FB.UA.ipad()) FB.Dialog._overlayEl.className = 'hidden';
            },
            showLoader: function(a, b) {
                FB.Dialog._showIPadOverlay();
                if (!FB.Dialog._loaderEl) FB.Dialog._loaderEl = FB.Dialog._findRoot(FB.UA.mobile() ? FB.Dialog._createMobileLoader() : FB.Dialog._createWWWLoader(b));
                if (!a) a = function() {};
                var c = FB.$('fb_dialog_loader_close');
                FB.Dom.removeCss(c, 'fb_hidden');
                c.onclick = function() {
                    FB.Dialog._hideLoader();
                    FB.Dialog._restoreBodyPosition();
                    FB.Dialog._hideIPadOverlay();
                    a();
                };
                var d = FB.$('fb_dialog_ipad_overlay');
                if (d) d.ontouchstart = c.onclick;
                FB.Dialog._makeActive(FB.Dialog._loaderEl);
            },
            _hideLoader: function() {
                if (FB.Dialog._loaderEl && FB.Dialog._loaderEl == FB.Dialog._active) FB.Dialog._loaderEl.style.top = '-10000px';
            },
            _makeActive: function(a) {
                FB.Dialog._setDialogSizes();
                FB.Dialog._lowerActive();
                FB.Dialog._active = a;
                if (FB.Canvas) FB.Canvas.getPageInfo(function(b) {
                    FB.Dialog._centerActive(b);
                });
                FB.Dialog._centerActive(FB.Canvas._pageInfo);
            },
            _lowerActive: function() {
                if (!FB.Dialog._active) return;
                FB.Dialog._active.style.top = '-10000px';
                FB.Dialog._active = null;
            },
            _removeStacked: function(a) {
                FB.Dialog._stack = ES5(FB.Dialog._stack, 'filter', true, function(b) {
                    return b != a;
                });
            },
            _centerActive: function(a) {
                var b = FB.Dialog._active;
                if (!b) return;
                var c = FB.Dom.getViewportInfo(),
                    d = parseInt(b.offsetWidth, 10),
                    e = parseInt(b.offsetHeight, 10),
                    f = c.scrollLeft + (c.width - d) / 2,
                    g = (c.height - e) / 2.5;
                if (f < g) g = f;
                var h = c.height - e - g,
                    i = (c.height - e) / 2;
                if (a) i = a.scrollTop - a.offsetTop + (a.clientHeight - e) / 2;
                if (i < g) {
                    i = g;
                } else if (i > h) i = h;
                i += c.scrollTop;
                if (FB.UA.mobile()) {
                    var j = 100;
                    if (FB.UA.ipad()) {
                        j += (c.height - e) / 2;
                    } else {
                        var k = document.getElementsByTagName('body')[0];
                        FB.Dom.addCss(k, 'fb_hidden');
                        f = 10000;
                        i = 10000;
                    }
                    var l = FB.Dom.getByClass('fb_dialog_padding', b);
                    if (l.length) l[0].style.height = j + 'px';
                }
                b.style.left = (f > 0 ? f : 0) + 'px';
                b.style.top = (i > 0 ? i : 0) + 'px';
            },
            _setDialogSizes: function() {
                if (!FB.UA.mobile() || FB.UA.ipad()) return;
                for (var a in FB.Dialog._dialogs) if (document.getElementById(a)) {
                    var b = document.getElementById(a);
                    b.style.width = FB.UIServer.getDefaultSize().width + 'px';
                    b.style.height = FB.UIServer.getDefaultSize().height + 'px';
                }
            },
            _handleOrientationChange: function(a) {
                if (FB.UA.android() && screen.availWidth == FB.Dialog._availScreenWidth) {
                    window.setTimeout(FB.Dialog._handleOrientationChange, 50);
                    return;
                }
                FB.Dialog._availScreenWidth = screen.availWidth;
                if (FB.UA.ipad()) {
                    FB.Dialog._centerActive();
                } else for (var b in FB.Dialog._dialogs) if (document.getElementById(b)) document.getElementById(b).style.width = FB.UIServer.getDefaultSize().width + 'px';
            },
            _addOrientationHandler: function() {
                if (!FB.UA.mobile()) return;
                var a = "onorientationchange" in window ? 'orientationchange' : 'resize';
                FB.Dialog._availScreenWidth = screen.availWidth;
                FB.Event.listen(window, a, FB.Dialog._handleOrientationChange);
            },
            create: function(a) {
                a = a || {};
                var b = document.createElement('div'),
                    c = document.createElement('div'),
                    d = 'fb_dialog';
                if (a.closeIcon && a.onClose) {
                    var e = document.createElement('a');
                    e.className = 'fb_dialog_close_icon';
                    e.onclick = a.onClose;
                    b.appendChild(e);
                }
                d += ' ' + (a.classes || '');
                if (FB.UA.ie()) {
                    d += ' fb_dialog_legacy';
                    ES5(['vert_left', 'vert_right', 'horiz_top', 'horiz_bottom', 'top_left', 'top_right', 'bottom_left', 'bottom_right'], 'forEach', true, function(h) {
                        var i = document.createElement('span');
                        i.className = 'fb_dialog_' + h;
                        b.appendChild(i);
                    });
                } else d += (FB.UA.mobile()) ? ' fb_dialog_mobile' : ' fb_dialog_advanced';
                if (a.content) FB.Content.append(a.content, c);
                b.className = d;
                var f = parseInt(a.width, 10);
                if (!isNaN(f)) b.style.width = f + 'px';
                c.className = 'fb_dialog_content';
                b.appendChild(c);
                if (FB.UA.mobile()) {
                    var g = document.createElement('div');
                    g.className = 'fb_dialog_padding';
                    b.appendChild(g);
                }
                FB.Content.append(b);
                if (a.visible) FB.Dialog.show(b);
                return c;
            },
            show: function(a) {
                var b = FB.Dialog._findRoot(a);
                if (b) {
                    FB.Dialog._removeStacked(b);
                    FB.Dialog._hideLoader();
                    FB.Dialog._makeActive(b);
                    FB.Dialog._stack.push(b);
                    if ('fbCallID' in a) FB.Dialog.get(a.fbCallID).fire('iframe_show');
                }
            },
            hide: function(a) {
                var b = FB.Dialog._findRoot(a);
                if (b == FB.Dialog._active) {
                    FB.Dialog._lowerActive();
                    FB.Dialog._restoreBodyPosition();
                    FB.Dialog._hideIPadOverlay();
                    if ('fbCallID' in a) FB.Dialog.get(a.fbCallID).fire('iframe_hide');
                }
            },
            remove: function(a) {
                a = FB.Dialog._findRoot(a);
                if (a) {
                    var b = FB.Dialog._active == a;
                    FB.Dialog._removeStacked(a);
                    if (b) {
                        FB.Dialog._hideLoader();
                        if (FB.Dialog._stack.length > 0) {
                            FB.Dialog.show(FB.Dialog._stack.pop());
                        } else {
                            FB.Dialog._lowerActive();
                            FB.Dialog._restoreBodyPosition();
                            FB.Dialog._hideIPadOverlay();
                        }
                    } else if (FB.Dialog._active === null && FB.Dialog._stack.length > 0) FB.Dialog.show(FB.Dialog._stack.pop());
                    window.setTimeout(function() {
                        a.parentNode.removeChild(a);
                    }, 3000);
                }
            },
            isActive: function(a) {
                var b = FB.Dialog._findRoot(a);
                return b && b === FB.Dialog._active;
            }
        });
        FB.provide('JSON', {
            stringify: function(a) {
                return ES5('JSON', 'stringify', false, a);
            },
            parse: function(a) {
                return ES5('JSON', 'parse', false, a);
            },
            flatten: function(a) {
                var b = {};
                for (var c in a) if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (null === d || undefined === d) {
                        continue;
                    } else if (typeof d == 'string') {
                        b[c] = d;
                    } else b[c] = ES5('JSON', 'stringify', false, d);
                }
                return b;
            }
        });
        FB.provide('', {
            ui: function(a, b) {
                a = FB.copy({}, a);
                if (!a.method) {
                    FB.log('"method" is a required parameter for FB.ui().');
                    return null;
                }
                if ((a.method == 'permissions.request' || a.method == 'permissions.oauth') && (a.display == 'iframe' || a.display == 'dialog')) {
                    var c = 'scope' in a ? a.scope : FB._scope;
                    if (c) {
                        var d = c.split(/\s|,/g);
                        for (var e = 0; e < d.length; e++) {
                            var f = ES5(d[e], 'trim', true);
                            if (f && !FB.initSitevars.iframePermissions[f]) {
                                a.display = 'popup';
                                break;
                            }
                        }
                    }
                }
                var g = FB.UIServer.prepareCall(a, b);
                if (!g) return null;
                var h = g.params.display;
                if (h === 'dialog') {
                    h = 'iframe';
                } else if (h === 'none') h = 'hidden';
                var i = FB.UIServer[h];
                if (!i) {
                    FB.log('"display" must be one of "popup", ' + '"dialog", "iframe", "touch", "async", "hidden", or "none"');
                    return null;
                }
                i(g);
                return g.dialog;
            }
        });
        FB.provide('UIServer', {
            Methods: {},
            _loadedNodes: {},
            _defaultCb: {},
            _resultToken: '"xxRESULTTOKENxx"',
            _forceHTTPS: false,
            genericTransform: function(a) {
                if (a.params.display == 'dialog' || a.params.display == 'iframe') FB.copy(a.params, {
                    display: 'iframe',
                    channel: FB.UIServer._xdChannelHandler(a.id, 'parent.parent')
                }, true);
                return a;
            },
            prepareCall: function(a, b) {
                var c = a.method.toLowerCase(),
                    d = FB.copy({}, FB.UIServer.Methods[c]),
                    e = FB.guid(),
                    f = (d.noHttps !== true) && (FB._https || (c !== 'auth.status' && c != 'login.status'));
                FB.UIServer._forceHTTPS = f;
                FB.copy(a, {
                    api_key: FB._apiKey,
                    app_id: FB._apiKey,
                    locale: FB._locale,
                    sdk: 'joey',
                    access_token: f && FB.getAccessToken() || undefined
                });
                a.display = FB.UIServer.getDisplayMode(d, a);
                if (!d.url) d.url = 'dialog/' + c;
                var g = {
                    cb: b,
                    id: e,
                    size: d.size || FB.UIServer.getDefaultSize(),
                    url: FB.getDomain(f ? 'https_www' : 'www') + d.url,
                    forceHTTPS: f,
                    params: a,
                    name: c,
                    dialog: new FB.Dialog(e)
                },
                    h = d.transform ? d.transform : FB.UIServer.genericTransform;
                if (h) {
                    g = h(g);
                    if (!g) return;
                }
                var i = d.getXdRelation || FB.UIServer.getXdRelation,
                    j = i(g.params);
                if (!(g.id in FB.UIServer._defaultCb) && !('next' in g.params) && !('redirect_uri' in g.params)) g.params.next = FB.UIServer._xdResult(g.cb, g.id, j, true);
                if (j === 'parent') FB.copy(g.params, {
                    channel_url: FB.UIServer._xdChannelHandler(e, 'parent.parent')
                }, true);
                g = FB.UIServer.prepareParams(g);
                return g;
            },
            prepareParams: function(a) {
                var b = a.params.method,
                    c = FB.initSitevars.useAsync ? FB._inCanvas : FB.Canvas.isTabIframe();
                if (!c) delete a.params.method;
                if (FB.TemplateUI && FB.TemplateUI.supportsTemplate(b, a)) {
                    FB.TemplateUI.useCachedUI(b, a);
                } else {
                    a.params = FB.JSON.flatten(a.params);
                    var d = FB.QS.encode(a.params);
                    if (!FB.UA.nativeApp() && FB.UIServer.urlTooLongForIE(a.url + '?' + d)) {
                        a.post = true;
                    } else if (d) a.url += '?' + d;
                }
                return a;
            },
            urlTooLongForIE: function(a) {
                return a.length > 2000;
            },
            getDisplayMode: function(a, b) {
                if (b.display === 'hidden' || b.display === 'none') return b.display;
                var c = FB.initSitevars.useAsync ? FB._inCanvas : FB.Canvas.isTabIframe();
                if (c && b.display !== 'popup') return 'async';
                if (FB.UA.mobile() || b.display === 'touch') return 'touch';
                if (!FB.getAccessToken() && b.display == 'dialog' && !a.loggedOutIframe) {
                    FB.log('"dialog" mode can only be used when the user is connected.');
                    return 'popup';
                }
                if (a.connectDisplay && !FB._inCanvas) return a.connectDisplay;
                return b.display || (FB.getAccessToken() ? 'dialog' : 'popup');
            },
            getXdRelation: function(a) {
                var b = a.display;
                if (b === 'popup' || b === 'touch') return 'opener';
                if (b === 'dialog' || b === 'iframe' || b === 'hidden' || b === 'none') return 'parent';
                if (b === 'async') return 'parent.frames[' + window.name + ']';
            },
            popup: function(a) {
                var b = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
                    c = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
                    d = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.documentElement.clientWidth,
                    e = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.documentElement.clientHeight - 22),
                    f = FB.UA.mobile() ? null : a.size.width,
                    g = FB.UA.mobile() ? null : a.size.height,
                    h = (b < 0) ? window.screen.width + b : b,
                    i = parseInt(h + ((d - f) / 2), 10),
                    j = parseInt(c + ((e - g) / 2.5), 10),
                    k = [];
                if (f !== null) k.push('width=' + f);
                if (g !== null) k.push('height=' + g);
                k.push('left=' + i);
                k.push('top=' + j);
                k.push('scrollbars=1');
                if (a.name == 'permissions.request' || a.name == 'permissions.oauth') k.push('location=1,toolbar=0');
                k = k.join(',');
                var l;
                if (a.post) {
                    l = window.open('about:blank', a.id, k);
                    if (l) {
                        FB.UIServer.setLoadedNode(a, l, 'popup');
                        FB.Content.submitToTarget({
                            url: a.url,
                            target: a.id,
                            params: a.params
                        });
                    }
                } else {
                    l = window.open(a.url, a.id, k);
                    if (l) FB.UIServer.setLoadedNode(a, l, 'popup');
                }
                if (!l) return;
                if (a.id in FB.UIServer._defaultCb) FB.UIServer._popupMonitor();
            },
            setLoadedNode: function(a, b, c) {
                if (a.params && a.params.display != 'popup') b.fbCallID = a.id;
                b = {
                    node: b,
                    type: c,
                    fbCallID: a.id
                };
                FB.UIServer._loadedNodes[a.id] = b;
            },
            getLoadedNode: function(a) {
                var b = typeof a == 'object' ? a.id : a,
                    c = FB.UIServer._loadedNodes[b];
                return c ? c.node : null;
            },
            hidden: function(a) {
                a.className = 'FB_UI_Hidden';
                a.root = FB.Content.appendHidden('');
                FB.UIServer._insertIframe(a);
            },
            iframe: function(a) {
                a.className = 'FB_UI_Dialog';
                var b = function() {
                        FB.UIServer._triggerDefault(a.id);
                    };
                a.root = FB.Dialog.create({
                    onClose: b,
                    closeIcon: true,
                    classes: (FB.UA.ipad() ? 'centered' : '')
                });
                if (!a.hideLoader) FB.Dialog.showLoader(b, a.size.width);
                FB.Dom.addCss(a.root, 'fb_dialog_iframe');
                FB.UIServer._insertIframe(a);
            },
            touch: function(a) {
                if (a.params && a.params.in_iframe) {
                    if (a.ui_created) {
                        FB.Dialog.showLoader(function() {
                            FB.UIServer._triggerDefault(a.id);
                        }, 0);
                    } else FB.UIServer.iframe(a);
                } else if (FB.UA.nativeApp() && !a.ui_created) {
                    a.frame = a.id;
                    FB.Native.onready(function() {
                        FB.UIServer.setLoadedNode(a, FB.Native.open(a.url + '#cb=' + a.frameName), 'native');
                    });
                    FB.UIServer._popupMonitor();
                } else if (!a.ui_created) FB.UIServer.popup(a);
            },
            async: function(a) {
                if (FB.initSitevars.rpc) {
                    FB.XD.rpc.remote.showDialog(a.params, function(b) {
                        a.cb(b.result);
                    });
                } else {
                    a.frame = window.name;
                    delete a.url;
                    delete a.size;
                    FB.Arbiter.inform('showDialog', a);
                }
            },
            getDefaultSize: function() {
                if (FB.UA.mobile()) if (FB.UA.ipad()) {
                    return {
                        width: 500,
                        height: 590
                    };
                } else if (FB.UA.android()) {
                    return {
                        width: screen.availWidth,
                        height: screen.availHeight
                    };
                } else {
                    var a = window.innerWidth,
                        b = window.innerHeight,
                        c = a / b > 1.2;
                    return {
                        width: a,
                        height: Math.max(b, (c ? screen.width : screen.height))
                    };
                }
                return {
                    width: 575,
                    height: 240
                };
            },
            _insertIframe: function(a) {
                FB.UIServer._loadedNodes[a.id] = false;
                var b = function(c) {
                        if (a.id in FB.UIServer._loadedNodes) FB.UIServer.setLoadedNode(a, c, 'iframe');
                    };
                if (a.post) {
                    FB.Content.insertIframe({
                        url: 'about:blank',
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        onInsert: b,
                        onload: function(c) {
                            FB.Content.submitToTarget({
                                url: a.url,
                                target: c.name,
                                params: a.params
                            });
                        }
                    });
                } else FB.Content.insertIframe({
                    url: a.url,
                    root: a.root,
                    className: a.className,
                    width: a.size.width,
                    height: a.size.height,
                    id: a.id,
                    name: a.frameName,
                    onInsert: b
                });
            },
            _handleResizeMessage: function(a, b) {
                var c = FB.UIServer.getLoadedNode(a);
                if (!c) return;
                if (b.height) c.style.height = b.height + 'px';
                if (b.width) c.style.width = b.width + 'px';
                FB.Arbiter.inform('resize.ack', b || {}, 'parent.frames[' + c.name + ']');
                if (!FB.Dialog.isActive(c)) FB.Dialog.show(c);
            },
            _triggerDefault: function(a) {
                FB.UIServer._xdRecv({
                    frame: a
                }, FB.UIServer._defaultCb[a] ||
                function() {});
            },
            _popupMonitor: function() {
                var a;
                for (var b in FB.UIServer._loadedNodes) if (FB.UIServer._loadedNodes.hasOwnProperty(b) && b in FB.UIServer._defaultCb) {
                    var c = FB.UIServer._loadedNodes[b];
                    if (c.type != 'popup' && c.type != 'native') continue;
                    win = c.node;
                    try {
                        if (win.closed) {
                            FB.UIServer._triggerDefault(b);
                        } else a = true;
                    } catch (d) {}
                }
                if (a && !FB.UIServer._popupInterval) {
                    FB.UIServer._popupInterval = window.setInterval(FB.UIServer._popupMonitor, 100);
                } else if (!a && FB.UIServer._popupInterval) {
                    window.clearInterval(FB.UIServer._popupInterval);
                    FB.UIServer._popupInterval = null;
                }
            },
            _xdChannelHandler: function(a, b) {
                var c = (FB.UIServer._forceHTTPS && FB.UA.ie() !== 7);
                return FB.XD.handler(function(d) {
                    var e = FB.UIServer.getLoadedNode(a);
                    if (!e) return;
                    if (d.type == 'resize') {
                        FB.UIServer._handleResizeMessage(a, d);
                    } else if (d.type == 'hide') {
                        FB.Dialog.hide(e);
                    } else if (d.type == 'rendered') {
                        var f = FB.Dialog._findRoot(e);
                        FB.Dialog.show(f);
                    } else if (d.type == 'fireevent') FB.Event.fire(d.event);
                }, b, true, null, c);
            },
            _xdNextHandler: function(a, b, c, d) {
                if (d) FB.UIServer._defaultCb[b] = a;
                return FB.XD.handler(function(e) {
                    FB.UIServer._xdRecv(e, a);
                }, c) + '&frame=' + b;
            },
            _xdRecv: function(a, b) {
                var c = FB.UIServer.getLoadedNode(a.frame);
                if (c) {
                    try {
                        if (FB.Dom.containsCss(c, 'FB_UI_Hidden')) {
                            window.setTimeout(function() {
                                c.parentNode.parentNode.removeChild(c.parentNode);
                            }, 3000);
                        } else if (FB.Dom.containsCss(c, 'FB_UI_Dialog')) {
                            FB.Dialog.remove(c);
                            if (FB.TemplateUI && FB.UA.mobile()) FB.TemplateUI.populateCache();
                        }
                    } catch (d) {}
                    try {
                        if (c.close) {
                            c.close();
                            FB.UIServer._popupCount--;
                        }
                    } catch (e) {}
                }
                delete FB.UIServer._loadedNodes[a.frame];
                delete FB.UIServer._defaultCb[a.frame];
                b(a);
            },
            _xdResult: function(a, b, c, d) {
                return (FB.UIServer._xdNextHandler(function(e) {
                    a && a(e.result && e.result != FB.UIServer._resultToken && ES5('JSON', 'parse', false, e.result));
                }, b, c, d) + '&result=' + encodeURIComponent(FB.UIServer._resultToken));
            }
        });
        FB.provide('', {
            getLoginStatus: function(a, b) {
                if (!FB._apiKey) {
                    FB.log('FB.getLoginStatus() called before calling FB.init().');
                    return;
                }
                if (a) if (!b && FB.Auth._loadState == 'loaded') {
                    a({
                        status: FB._userStatus,
                        authResponse: FB._authResponse
                    });
                    return;
                } else FB.Event.subscribe('FB.loginStatus', a);
                if (!b && FB.Auth._loadState == 'loading') return;
                FB.Auth._loadState = 'loading';
                var c = function(d) {
                        FB.Auth._loadState = 'loaded';
                        FB.Event.fire('FB.loginStatus', d);
                        FB.Event.clear('FB.loginStatus');
                    };
                FB.Auth.fetchLoginStatus(c);
            },
            getAuthResponse: function() {
                return FB._authResponse;
            },
            getAccessToken: function() {
                return (FB._authResponse && FB._authResponse.accessToken) || null;
            },
            getUserID: function() {
                return FB._userID;
            },
            login: function(a, b) {
                if (b && b.perms && !b.scope) {
                    b.scope = b.perms;
                    delete b.perms;
                    FB.log('OAuth2 specification states that \'perms\' ' + 'should now be called \'scope\'.  Please update.');
                }
                FB.Auth.login(a, b);
            },
            logout: function(a) {
                FB.ui({
                    method: 'auth.logout',
                    display: 'hidden'
                }, a);
            }
        });
        FB.provide('Auth', {
            _callbacks: [],
            _xdStorePath: 'xd_localstorage/',
            login: function(a, b) {
                FB.ui(FB.copy({
                    method: 'permissions.oauth',
                    display: 'popup',
                    domain: location.hostname
                }, b || {}), a);
            },
            fetchLoginStatus: function(a) {
                if (FB.UA.mobile() && window.postMessage && window.localStorage) {
                    FB.Auth.staticAuthCheck(a);
                } else FB.ui({
                    method: 'login.status',
                    display: 'none',
                    domain: location.hostname
                }, a);
            },
            staticAuthCheck: function(a) {
                var b = FB.getDomain('https_staticfb');
                FB.Content.insertIframe({
                    root: FB.Content.appendHidden(''),
                    className: 'FB_UI_Hidden',
                    url: b + FB.Auth._xdStorePath,
                    onload: function(c) {
                        var d = frames[c.name],
                            e = FB.guid(),
                            f = false,
                            g = function(h) {
                                if (!f) {
                                    f = true;
                                    FB.Auth._staticAuthHandler(a, h);
                                }
                            };
                        FB.XD.handler(g, 'parent', true, e);
                        setTimeout(g, 500);
                        d.postMessage(ES5('JSON', 'stringify', false, {
                            method: 'getItem',
                            params: ['LoginInfo_' + FB._apiKey, true],
                            returnCb: e
                        }), b);
                    }
                });
            },
            _staticAuthHandler: function(a, b) {
                if (b && b.data && b.data.status && b.data.status == 'connected') {
                    var c, d = b.data.status;
                    if (b.data.https == 1) FB._https = true;
                    var e = b.data.authResponse || null;
                    c = FB.Auth.setAuthResponse(e, d);
                    a && a(c);
                }
                FB.ui({
                    method: 'login.status',
                    display: 'none'
                }, a);
            },
            setAuthResponse: function(a, b) {
                var c = 0;
                if (a) if (a.userID) {
                    c = a.userID;
                } else if (a.signedRequest) {
                    var d = FB.Auth.parseSignedRequest(a.signedRequest);
                    if (d && d.user_id) c = d.user_id;
                }
                var e = !FB._userID && a,
                    f = FB._userID && !a,
                    g = a && FB._userID != c,
                    h = a != FB._authResponse,
                    i = b != FB._userStatus,
                    j = {
                        authResponse: a,
                        status: b
                    };
                FB._authResponse = a;
                FB._userID = c;
                FB._userStatus = b;
                if (f || g) FB.Event.fire('auth.logout', j);
                if (e || g) FB.Event.fire('auth.login', j);
                if (h) FB.Event.fire('auth.authResponseChange', j);
                if (i) FB.Event.fire('auth.statusChange', j);
                if (FB.Auth._refreshTimer) {
                    window.clearTimeout(FB.Auth._refreshTimer);
                    delete FB.Auth._refreshTimer;
                }
                if (FB.Auth._loadState && a) FB.Auth._refreshTimer = window.setTimeout(function() {
                    FB.getLoginStatus(null, true);
                }, 1200000);
                return j;
            },
            _getContextType: function() {
                if (FB.UA.nativeApp()) return 3;
                if (FB.UA.mobile()) return 2;
                if (FB._inCanvas) return 5;
                return 1;
            },
            xdHandler: function(a, b, c, d, e) {
                return FB.UIServer._xdNextHandler(FB.Auth.xdResponseWrapper(a, d, e), b, c, true);
            },
            xdResponseWrapper: function(a, b, c) {
                return function(d) {
                    if (d.access_token) {
                        var e = FB.Auth.parseSignedRequest(d.signed_request);
                        b = {
                            accessToken: d.access_token,
                            userID: e.user_id,
                            expiresIn: parseInt(d.expires_in, 10),
                            signedRequest: d.signed_request
                        };
                        if (FB.Cookie.getEnabled()) {
                            var f = b.expiresIn === 0 ? 0 : (new Date()).getTime() + b.expiresIn * 1000,
                                g = FB.Cookie._domain;
                            if (!g && d.base_domain) g = '.' + d.base_domain;
                            FB.Cookie.setSignedRequestCookie(d.signed_request, f, g);
                        }
                        FB.Auth.setAuthResponse(b, 'connected');
                    } else if (!FB._authResponse && b) {
                        FB.Auth.setAuthResponse(b, 'connected');
                    } else if (c === 'logout' || c === 'login_status') {
                        var h;
                        if (d.error && d.error === 'not_authorized') {
                            h = 'not_authorized';
                        } else h = 'unknown';
                        FB.Auth.setAuthResponse(null, h);
                        if (FB.Cookie.getEnabled()) FB.Cookie.clearSignedRequestCookie();
                    }
                    if (d && d.https == 1 && !FB._https) FB._https = true;
                    var i = {
                        authResponse: FB._authResponse,
                        status: FB._userStatus
                    };
                    a && a(i);
                };
            },
            parseSignedRequest: function(a) {
                if (!a) return null;
                var b = a.split('.', 2),
                    c = b[1],
                    d = FB.Auth.base64URLDecode(c);
                return ES5('JSON', 'parse', false, d);
            },
            base64URLDecode: function(a) {
                a = a.replace(/\-/g, '+').replace(/\_/g, '/');
                if (a.length % 4 !== 0) {
                    var b = 4 - a.length % 4;
                    for (var c = 0; c < b; c++) a = a + '=';
                }
                var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    e = "",
                    f, g, h = "",
                    i, j, k, l = "";
                for (var m = 0; m < a.length; m += 4) {
                    i = ES5(d, 'indexOf', true, a.charAt(m));
                    j = ES5(d, 'indexOf', true, a.charAt(m + 1));
                    k = ES5(d, 'indexOf', true, a.charAt(m + 2));
                    l = ES5(d, 'indexOf', true, a.charAt(m + 3));
                    f = (i << 2) | (j >> 4);
                    g = ((j & 15) << 4) | (k >> 2);
                    h = ((k & 3) << 6) | l;
                    e = e + String.fromCharCode(f);
                    if (k != 64) e = e + String.fromCharCode(g);
                    if (l != 64) e = e + String.fromCharCode(h);
                    f = g = h = "";
                    i = j = k = l = "";
                }
                return unescape(e);
            }
        });
        FB.provide('UIServer.Methods', {
            'permissions.oauth': {
                url: 'dialog/oauth',
                size: {
                    width: (FB.UA.mobile() ? null : 627),
                    height: (FB.UA.mobile() ? null : 326)
                },
                transform: function(a) {
                    if (!FB._apiKey) {
                        FB.log('FB.login() called before FB.init().');
                        return;
                    }
                    if (FB._authResponse && !a.params.scope) {
                        FB.log('FB.login() called when user is already connected.');
                        a.cb && a.cb({
                            status: FB._userStatus,
                            authResponse: FB._authResponse
                        });
                        return;
                    }
                    var b = a.cb,
                        c = a.id;
                    delete a.cb;
                    FB.copy(a.params, {
                        client_id: FB._apiKey,
                        redirect_uri: FB.URI.resolve(FB.Auth.xdHandler(b, c, 'opener', FB._authResponse, 'permissions.oauth')),
                        origin: FB.Auth._getContextType(),
                        response_type: 'token,signed_request',
                        domain: location.hostname
                    });
                    return a;
                }
            },
            'auth.logout': {
                url: 'logout.php',
                transform: function(a) {
                    if (!FB._apiKey) {
                        FB.log('FB.logout() called before calling FB.init().');
                    } else if (!FB._authResponse) {
                        FB.log('FB.logout() called without an access token.');
                    } else {
                        a.params.next = FB.Auth.xdHandler(a.cb, a.id, 'parent', FB._authResponse, 'logout');
                        return a;
                    }
                }
            },
            'login.status': {
                url: 'dialog/oauth',
                transform: function(a) {
                    var b = a.cb,
                        c = a.id;
                    delete a.cb;
                    FB.copy(a.params, {
                        client_id: FB._apiKey,
                        redirect_uri: FB.Auth.xdHandler(b, c, 'parent', FB._authResponse, 'login_status'),
                        origin: FB.Auth._getContextType(),
                        response_type: 'token,signed_request,code',
                        domain: location.hostname
                    });
                    return a;
                }
            }
        });
        FB.provide('CanvasInsights', {
            setDoneLoading: function(a) {
                FB.Canvas.setDoneLoading(a);
            }
        });
        FB.provide('Cookie', {
            _domain: null,
            _enabled: false,
            setEnabled: function(a) {
                FB.Cookie._enabled = !! a;
                if (typeof a == 'string') FB.Cookie._domain = a;
            },
            getEnabled: function() {
                return FB.Cookie._enabled;
            },
            loadMeta: function() {
                var a = document.cookie.match('\\bfbm_' + FB._apiKey + '=([^;]*)\\b'),
                    b;
                if (a) {
                    b = FB.QS.decode(a[1]);
                    if (!FB.Cookie._domain) FB.Cookie._domain = b.base_domain;
                }
                return b;
            },
            loadSignedRequest: function() {
                var a = document.cookie.match('\\bfbsr_' + FB._apiKey + '=([^;]*)\\b');
                if (!a) return null;
                return a[1];
            },
            setSignedRequestCookie: function(a, b, c) {
                if (!a) throw new Error('Value passed to FB.Cookie.setSignedRequestCookie ' + 'was empty.');
                if (!FB.Cookie.getEnabled()) return;
                if (c) {
                    var d = FB.QS.encode({
                        base_domain: c
                    });
                    FB.Cookie.setRaw('fbm_', d, b, c);
                }
                FB.Cookie._domain = c;
                FB.Cookie.setRaw('fbsr_', a, b, c);
            },
            clearSignedRequestCookie: function() {
                if (!FB.Cookie.getEnabled()) return;
                FB.Cookie.setRaw('fbsr_', '', 0, FB.Cookie._domain);
            },
            setRaw: function(a, b, c, d) {
                if (d) {
                    document.cookie = a + FB._apiKey + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                    document.cookie = a + FB._apiKey + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
                }
                var e = new Date(c).toGMTString();
                document.cookie = a + FB._apiKey + '=' + b + (b && c === 0 ? '' : '; expires=' + e) + '; path=/' + (d ? '; domain=' + d : '');
            }
        });
        FB.provide('Frictionless', {
            _allowedRecipients: {},
            _useFrictionless: false,
            _updateRecipients: function() {
                FB.Frictionless._allowedRecipients = {};
                FB.api('/me/apprequestformerrecipients', function(a) {
                    if (!a || a.error) return;
                    ES5(a.data, 'forEach', true, function(b) {
                        FB.Frictionless._allowedRecipients[b.recipient_id] = true;
                    }, false);
                });
            },
            init: function() {
                FB.Frictionless._useFrictionless = true;
                FB.getLoginStatus(function(a) {
                    if (a.status == 'connected') FB.Frictionless._updateRecipients();
                });
                FB.Event.subscribe('auth.login', function(a) {
                    if (a.authResponse) FB.Frictionless._updateRecipients();
                });
            },
            _processRequestResponse: function(a, b) {
                return function(c) {
                    var d = c && c.updated_frictionless;
                    if (FB.Frictionless._useFrictionless && d) FB.Frictionless._updateRecipients();
                    if (c) {
                        if (!b && c.frictionless) {
                            FB.Dialog._hideLoader();
                            FB.Dialog._restoreBodyPosition();
                            FB.Dialog._hideIPadOverlay();
                        }
                        delete c.frictionless;
                        delete c.updated_frictionless;
                    }
                    a && a(c);
                };
            },
            isAllowed: function(a) {
                if (!a) return false;
                if (typeof a === 'number') return FB.Frictionless._allowedRecipients[a];
                if (typeof a === 'string') a = a.split(',');
                a = ES5(a, 'map', true, function(d) {
                    return ES5(d, 'trim', true);
                });
                var b = true,
                    c = false;
                ES5(a, 'forEach', true, function(d) {
                    b = b && FB.Frictionless._allowedRecipients[d];
                    c = true;
                }, false);
                return b && c;
            }
        });
        FB.provide('Canvas.Prefetcher', {
            _sampleRate: 0,
            _appIdsBlacklist: [],
            _links: [],
            COLLECT_AUTOMATIC: 0,
            COLLECT_MANUAL: 1,
            _collectionMode: 0,
            addStaticResource: function(a) {
                if (!FB._inCanvas || !FB._apiKey) return;
                FB.Canvas.Prefetcher._links.push(a);
            },
            setCollectionMode: function(a) {
                if (!FB._inCanvas || !FB._apiKey) return false;
                if (a != FB.Canvas.Prefetcher.COLLECT_AUTOMATIC && a != FB.Canvas.Prefetcher.COLLECT_MANUAL) return false;
                FB.Canvas.Prefetcher._collectionMode = a;
            },
            _maybeSample: function() {
                if (!FB._inCanvas || !FB._apiKey || !FB.Canvas.Prefetcher._sampleRate) return;
                var a = Math.random();
                if (a > 1 / FB.Canvas.Prefetcher._sampleRate) return;
                if (FB.Canvas.Prefetcher._appIdsBlacklist == '*') return;
                if (ES5(FB.Canvas.Prefetcher._appIdsBlacklist, 'indexOf', true, parseInt(FB._apiKey, 10)) != -1) return;
                window.setTimeout(FB.Canvas.Prefetcher._sample, 30000);
            },
            _sample: function() {
                var a = {
                    object: 'data',
                    link: 'href',
                    script: 'src'
                };
                if (FB.Canvas.Prefetcher._collectionMode == FB.Canvas.Prefetcher.COLLECT_AUTOMATIC) ES5(FB.Array, 'forEach', true, a, function(c, d) {
                    ES5(FB.Array.toArray(window.document.getElementsByTagName(d)), 'forEach', true, function(e) {
                        if (e[c]) FB.Canvas.Prefetcher._links.push(e[c]);
                    });
                });
                var b = ES5('JSON', 'stringify', false, FB.Canvas.Prefetcher._links);
                FB.api(FB._apiKey + '/staticresources', 'post', {
                    urls: b,
                    is_https: FB._https
                });
                FB.Canvas.Prefetcher._links = [];
            }
        });
        FB.provide('Canvas.EarlyFlush', {
            addResource: function(a) {
                return FB.Canvas.Prefetcher.addStaticResource(a);
            },
            setCollectionMode: function(a) {
                return FB.Canvas.Prefetcher.setCollectionMode(a);
            }
        });
        FB.Dom.ready(function() {
            FB.require('DOMWrapper').setRoot(FB.Content.appendHidden(document.createElement('div')));
        });
        FB.require('Log').level = 1;
        FB.provide('', {
            initSitevars: {},
            init: function(a) {
                if (FB._initialized) FB.log('FB.init has already been called - this could indicate a problem');
                if (typeof a === 'string') {
                    FB.log('FB.init called with invalid parameters');
                    a = {
                        apiKey: a
                    };
                }
                a = FB.copy(a || {}, {
                    logging: true,
                    status: true
                });
                FB._userID = 0;
                if (!a.logging && ES5(window.location.toString(), 'indexOf', true, 'fb_debug=1') < 0) FB._logging = false;
                if ('appId' in a || 'apiKey' in a) FB._apiKey = a.appId || a.apiKey;
                if ('scope' in a) FB._scope = a.scope;
                if (!FB._initialized) {
                    FB.XD.init(a.channelUrl ? FB.URI.resolve(a.channelUrl) : null, a.xdProxyName);
                    if (FB.UA.mobile() && FB.TemplateUI && FB.TemplateData && FB.TemplateData._enabled && a.useCachedDialogs !== false) {
                        FB.TemplateUI.init();
                        FB.Event.subscribe('auth.statusChange', FB.TemplateData.update);
                    }
                }
                if (a.frictionlessRequests) FB.Frictionless.init();
                if (FB._apiKey) {
                    FB.Cookie.setEnabled(a.cookie);
                    if (a.authResponse) {
                        FB.Auth.setAuthResponse(a.authResponse, 'connected');
                    } else {
                        var b = FB.Cookie.loadSignedRequest(),
                            c = FB.Auth.parseSignedRequest(b);
                        FB._userID = (c && c.user_id) || 0;
                        FB.Cookie.loadMeta();
                    }
                    if (a.status) FB.getLoginStatus();
                }
                if (FB.Canvas && FB._inCanvas) {
                    FB.Canvas._setHideFlashCallback(a.hideFlashCallback);
                    FB.Canvas.init();
                    if (FB.Canvas.Prefetcher) FB.Canvas.Prefetcher._maybeSample();
                }
                if (FB.XFBML && a.xfbml) {
                    if (FB.XFBML.IframeWidget) FB.Event.subscribe('xfbml.parse', function() {
                        FB.XFBML.IframeWidget.batchWidgetPipeRequests();
                    });
                    window.setTimeout(function() {
                        if (FB.initSitevars.parseXFBMLBeforeDomReady) {
                            FB.XFBML.parse();
                            var d = window.setInterval(function() {
                                FB.XFBML.parse();
                            }, 100);
                            FB.Dom.ready(function() {
                                window.clearInterval(d);
                                FB.XFBML.parse();
                            });
                        } else FB.Dom.ready(FB.XFBML.parse);
                    }, 0);
                }
                FB._initialized = true;
            }
        });
        FB.provide('UIServer.MobileIframableMethod', {
            transform: function(a) {
                if (a.params.display === 'touch' && a.params.access_token && window.postMessage) {
                    a.params.channel = FB.UIServer._xdChannelHandler(a.id, 'parent');
                    if (!FB.UA.nativeApp()) a.params.in_iframe = 1;
                    return a;
                } else return FB.UIServer.genericTransform(a);
            },
            getXdRelation: function(a) {
                var b = a.display;
                if (b === 'touch' && window.postMessage && a.in_iframe) return 'parent';
                return FB.UIServer.getXdRelation(a);
            }
        });
        FB.provide('UIServer.Methods', {
            'stream.share': {
                size: {
                    width: 670,
                    height: 340
                },
                url: 'sharer.php',
                transform: function(a) {
                    if (!a.params.u) a.params.u = window.location.toString();
                    a.params.display = 'popup';
                    return a;
                }
            },
            'fbml.dialog': {
                size: {
                    width: 575,
                    height: 300
                },
                url: 'render_fbml.php',
                loggedOutIframe: true,
                transform: function(a) {
                    return a;
                }
            },
            'auth.logintofacebook': {
                size: {
                    width: 530,
                    height: 287
                },
                url: 'login.php',
                transform: function(a) {
                    a.params.skip_api_login = 1;
                    var b = FB.UIServer.getXdRelation(a.params),
                        c = FB.UIServer._xdResult(a.cb, a.id, b, true);
                    a.params.next = FB.getDomain(FB._https ? 'https_www' : 'www') + "login.php?" + FB.QS.encode({
                        api_key: FB._apiKey,
                        next: c,
                        skip_api_login: 1
                    });
                    return a;
                }
            },
            apprequests: {
                transform: function(a) {
                    a = FB.UIServer.MobileIframableMethod.transform(a);
                    a.params.frictionless = FB.Frictionless && FB.Frictionless._useFrictionless;
                    if (a.params.frictionless) {
                        if (FB.Frictionless.isAllowed(a.params.to)) {
                            a.params.display = 'iframe';
                            a.params.in_iframe = true;
                            a.hideLoader = true;
                        }
                        a.cb = FB.Frictionless._processRequestResponse(a.cb, a.hideLoader);
                    }
                    return a;
                },
                getXdRelation: function(a) {
                    return FB.UIServer.MobileIframableMethod.getXdRelation(a);
                }
            },
            feed: FB.UIServer.MobileIframableMethod
        });
        FB.provide('', {
            share: function(a) {
                FB.log('FB.share() has been deprecated. Please use FB.ui() instead.');
                FB.ui({
                    display: 'popup',
                    method: 'stream.share',
                    u: a
                });
            },
            publish: function(a, b) {
                FB.log('FB.publish() has been deprecated. Please use FB.ui() instead.');
                a = a || {};
                FB.ui(FB.copy({
                    display: 'popup',
                    method: 'stream.publish',
                    preview: 1
                }, a || {}), b);
            },
            addFriend: function(a, b) {
                FB.log('FB.addFriend() has been deprecated. Please use FB.ui() instead.');
                FB.ui({
                    display: 'popup',
                    id: a,
                    method: 'friend.add'
                }, b);
            }
        });
        FB.UIServer.Methods['auth.login'] = FB.UIServer.Methods['permissions.request'];
        FB.provide('URI', {
            resolve: function(a) {
                if (!a) return window.location.href;
                var b = document.createElement('div');
                b.innerHTML = '<a href="' + a.replace(/"/g, '&quot;') + '"></a>';
                return b.firstChild.href;
            }
        });
        FB.create('XFBML.IframePluginTags', {
            privacy_selector: {},
            subscribe: {
                href: 'url',
                layout: 'string',
                show_faces: 'bool'
            }
        });
        FB.Class('XFBML.IframePlugin', function(a, b) {
            function c(m) {
                return function(n) {
                    var o = a.getElementsByTagName(m)[0];
                    n.height && (o.style.height = n.height + 'px');
                    n.width && (o.style.width = n.width + 'px');
                    var p = a.getElementsByTagName('span')[0],
                        q = a.getElementsByTagName('iframe')[0],
                        r = q.style.height === p.style.height && q.style.width === p.style.width,
                        s = r ? 'removeCss' : 'addCss';
                    FB.Dom[s](q, 'fb_iframe_widget_lift');
                };
            }
            function d(m) {
                FB.Event.fire('xfbml.resize', {
                    width: m.width,
                    height: m.height,
                    pluginID: FB.XFBML.getAttr(a, 'plugin-id')
                });
            }
            var e = {
                string: function(m) {
                    return m;
                },
                bool: function(m) {
                    return (/^(?:true|1|yes|on)$/i).test(m);
                },
                url: function(m) {
                    return FB.URI.resolve(m);
                },
                px: function(m) {
                    return ((/^(\d+)(?:px)?$/).exec(m) || [])[1];
                }
            };

            function f(m, n) {
                ES5(ES5('Object', 'keys', false, m), 'forEach', true, function(o) {
                    var p = e[m[o]];
                    n[o] = p(FB.XFBML.getAttr(a, o));
                });
            }
            var g = {
                skin: 'string',
                font: 'string',
                width: 'px',
                height: 'px',
                ref: 'string',
                color_scheme: 'string'
            };
            FB.Dom.addCss(a, 'fb_iframe_widget');
            this.subscribe('xd.resize', c('span'));
            this.subscribe('xd.resize', c('iframe'));
            this.subscribe('xd.resize', d);
            this.subscribe('xd.resize.flow', c('span'));
            this.subscribe('xd.resize.iframe', c('iframe'));
            this.subscribe('xd.resize.flow', d);
            var h = FB.getDomain('www') + 'plugins/' + b + '?',
                i = {};
            f(FB.XFBML.IframePluginTags[b], i);
            f(g, i);
            i.app_id = FB._apiKey;
            i.locale = FB._locale;
            i.sdk = 'joey';
            var j = ES5(function(m) {
                this.fire('xd.' + m.type, m);
            }, 'bind', true, this);
            i.channel = FB.XD.handler(j, 'parent.parent', true);
            var k = FB.guid();
            this.subscribe('xd.verify', function(m) {
                FB.XD.sendToFacebook(k, {
                    method: 'xd/verify',
                    params: ES5('JSON', 'stringify', false, m.token),
                    behavior: FB.Arbiter.BEHAVIOR_PERSISTENT
                });
            });
            var l = {
                url: h + FB.QS.encode(i),
                name: k,
                width: 0,
                height: 0,
                onload: ES5(this.fire, 'bind', true, this, 'render')
            };
            this.process = function() {
                a.innerHTML = '';
                l.root = a.appendChild(document.createElement('span'));
                FB.Content.insertIframe(l);
            };
        }, FB.copy({}, FB.EventProvider));
        FB.provide('XFBML', {
            _renderTimeout: 30000,
            getElements: function(a, b, c) {
                var d = FB.XFBML._getDomElements(a, b, c),
                    e = FB.Dom.getByClass(b + '-' + c, a, 'div');
                d = FB.Array.toArray(d);
                e = FB.Array.toArray(e);
                e = ES5(e, 'filter', true, function(f) {
                    return !f.hasChildNodes() || (f.childNodes.length === 1 && f.childNodes[0].nodeType === 3);
                });
                return FB.Array.merge(d, e);
            },
            parse: function(a, b) {
                a = a || document.body;
                var c = 1,
                    d = function() {
                        c--;
                        if (c === 0) {
                            b && b();
                            FB.Event.fire('xfbml.render');
                        }
                    },
                    e = {};
                if (FB.XFBML._widgetPipeIsEnabled()) ES5(FB.XFBML._tagInfos, 'forEach', true, function(f) {
                    if (f.supportsWidgetPipe) {
                        var g = f.xmlns ? f.xmlns : 'fb',
                            h = FB.XFBML.getElements(a, g, f.localName);
                        e[f.localName] = h;
                        FB.XFBML._widgetPipeEnabledTagCount += h.length;
                    }
                });
                ES5(FB.XFBML._tagInfos, 'forEach', true, function(f) {
                    if (!f.xmlns) f.xmlns = 'fb';
                    var g;
                    if (e[f.localName] !== undefined) {
                        g = e[f.localName];
                    } else g = FB.XFBML.getElements(a, f.xmlns, f.localName);
                    for (var h = 0; h < g.length; h++) {
                        c++;
                        FB.XFBML._processElement(g[h], f, d);
                    }
                });
                FB.Event.fire('xfbml.parse');
                window.setTimeout(function() {
                    if (c > 0) FB.log(c + ' XFBML tags failed to render in ' + FB.XFBML._renderTimeout + 'ms.');
                }, FB.XFBML._renderTimeout);
                d();
            },
            registerTag: function(a) {
                FB.XFBML._tagInfos.push(a);
            },
            shouldUseWidgetPipe: function() {
                if (!FB.XFBML._widgetPipeIsEnabled()) return false;
                var a = FB.XFBML._widgetPipeEnabledTagCount > 1;
                return a;
            },
            getBoolAttr: function(a, b) {
                b = FB.XFBML.getAttr(a, b);
                return (b && ES5(['true', '1', 'yes', 'on'], 'indexOf', true, b.toLowerCase()) > -1);
            },
            getAttr: function(a, b) {
                return (a.getAttribute(b) || a.getAttribute(b.replace(/_/g, '-')) || a.getAttribute(b.replace(/-/g, '_')) || a.getAttribute(b.replace(/-/g, '')) || a.getAttribute(b.replace(/_/g, '')) || a.getAttribute('data-' + b) || a.getAttribute('data-' + b.replace(/_/g, '-')) || a.getAttribute('data-' + b.replace(/-/g, '_')) || a.getAttribute('data-' + b.replace(/-/g, '')) || a.getAttribute('data-' + b.replace(/_/g, '')) || null);
            },
            _processElement: function(a, b, c) {
                var d = a._element;
                if (d) {
                    d.subscribe('render', c);
                    d.process();
                } else {
                    var e = b.localName.replace(/-/g, '_'),
                        f = function() {
                            var g = FB.XFBML.IframePluginTags[e] ? FB.XFBML.IframePlugin : FB.dotAccess(FB, b.className.replace(/^FB\./, ''));
                            d = a._element = new g(a, e);
                            d.subscribe('render', c);
                            d.process();
                        };
                    if (FB.CLASSES[b.className.substr(3)] || FB.XFBML.IframePluginTags[e]) {
                        f();
                    } else FB.log('Tag ' + b.className + ' was not found.');
                }
            },
            _getDomElements: function(a, b, c) {
                var d = b + ':' + c;
                if (FB.UA.firefox()) {
                    return a.getElementsByTagNameNS(document.body.namespaceURI, d);
                } else if (FB.UA.ie() < 9) {
                    try {
                        var f = document.namespaces;
                        if (f && f[b]) {
                            var g = a.getElementsByTagName(c);
                            if (!document.addEventListener || g.length > 0) return g;
                        }
                    } catch (e) {}
                    return a.getElementsByTagName(d);
                } else return a.getElementsByTagName(d);
            },
            _tagInfos: [{
                localName: 'activity',
                className: 'FB.XFBML.Activity'
            }, {
                localName: 'add-profile-tab',
                className: 'FB.XFBML.AddProfileTab'
            }, {
                localName: 'add-to-timeline',
                className: 'FB.XFBML.AddToTimeline'
            }, {
                localName: 'bookmark',
                className: 'FB.XFBML.Bookmark'
            }, {
                localName: 'comments',
                className: 'FB.XFBML.Comments'
            }, {
                localName: 'comments-count',
                className: 'FB.XFBML.CommentsCount'
            }, {
                localName: 'connect-bar',
                className: 'FB.XFBML.ConnectBar'
            }, {
                localName: 'fan',
                className: 'FB.XFBML.Fan'
            }, {
                localName: 'like',
                className: 'FB.XFBML.Like',
                supportsWidgetPipe: true
            }, {
                localName: 'like-box',
                className: 'FB.XFBML.LikeBox'
            }, {
                localName: 'live-stream',
                className: 'FB.XFBML.LiveStream'
            }, {
                localName: 'login',
                className: 'FB.XFBML.Login'
            }, {
                localName: 'login-button',
                className: 'FB.XFBML.LoginButton'
            }, {
                localName: 'facepile',
                className: 'FB.XFBML.Facepile'
            }, {
                localName: 'friendpile',
                className: 'FB.XFBML.Friendpile'
            }, {
                localName: 'name',
                className: 'FB.XFBML.Name'
            }, {
                localName: 'page-events',
                className: 'FB.XFBML.PageEvents'
            }, {
                localName: 'privacy-selector',
                className: 'FB.XFBML.PrivacySelector'
            }, {
                localName: 'profile-pic',
                className: 'FB.XFBML.ProfilePic'
            }, {
                localName: 'recommendations',
                className: 'FB.XFBML.Recommendations'
            }, {
                localName: 'recommendations-bar',
                className: 'FB.XFBML.RecommendationsBar'
            }, {
                localName: 'registration',
                className: 'FB.XFBML.Registration'
            }, {
                localName: 'send',
                className: 'FB.XFBML.Send'
            }, {
                localName: 'share-button',
                className: 'FB.XFBML.ShareButton'
            }, {
                localName: 'social-context',
                className: 'FB.XFBML.SocialContext'
            }, {
                localName: 'subscribe',
                className: 'FB.XFBML.Subscribe'
            }],
            _widgetPipeEnabledTagCount: 0,
            _widgetPipeIsEnabled: function() {
                return FB.widgetPipeEnabledApps && FB.widgetPipeEnabledApps[FB._apiKey] !== undefined;
            }
        });
        (function() {
            try {
                if (document.namespaces && !document.namespaces.item.fb) document.namespaces.add('fb');
            } catch (a) {}
        }());
        FB.provide('XFBML', {
            set: function(a, b, c) {
                FB.log('FB.XFBML.set() has been deprecated.');
                a.innerHTML = b;
                FB.XFBML.parse(a, c);
            }
        });
        FB.subclass('Waitable', 'Obj', function() {}, {
            set: function(a) {
                this.setProperty('value', a);
            },
            error: function(a) {
                this.fire("error", a);
            },
            wait: function(a, b) {
                if (b) this.subscribe('error', b);
                this.monitor('value', ES5(this, 'bind', true, function() {
                    if (this.value !== undefined) {
                        a(this.value);
                        return true;
                    }
                }));
            }
        });
        FB.subclass('Data.Query', 'Waitable', function() {
            if (!FB.Data.Query._c) FB.Data.Query._c = 1;
            this.name = 'v_' + FB.Data.Query._c++;
        }, {
            parse: function(a) {
                var b = FB.String.format.apply(null, a),
                    c = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(b);
                this.fields = this._toFields(c[1]);
                this.table = c[2];
                this.where = this._parseWhere(c[3]);
                for (var d = 1; d < a.length; d++) if (FB.Type.isType(a[d], FB.Data.Query)) a[d].hasDependency = true;
                return this;
            },
            toFql: function() {
                var a = 'select ' + this.fields.join(',') + ' from ' + this.table + ' where ';
                switch (this.where.type) {
                case 'unknown':
                    a += this.where.value;
                    break;
                case 'index':
                    a += this.where.key + '=' + this._encode(this.where.value);
                    break;
                case 'in':
                    if (this.where.value.length == 1) {
                        a += this.where.key + '=' + this._encode(this.where.value[0]);
                    } else a += this.where.key + ' in (' + ES5(this.where.value, 'map', true, this._encode).join(',') + ')';
                    break;
                }
                return a;
            },
            _encode: function(a) {
                return typeof(a) == 'string' ? FB.String.quote(a) : a;
            },
            toString: function() {
                return '#' + this.name;
            },
            _toFields: function(a) {
                return ES5(a.split(','), 'map', true, function(b) {
                    return ES5(b, 'trim', true);
                });
            },
            _parseWhere: function(s) {
                var re = (/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(s),
                    result, value, type = 'unknown';
                if (re) {
                    value = re[2];
                    if (/^(["'])(?:\\?.)*?\1$/.test(value)) {
                        value = eval(value);
                        type = 'index';
                    } else if (/^\d+\.?\d*$/.test(value)) type = 'index';
                }
                if (type == 'index') {
                    result = {
                        type: 'index',
                        key: re[1],
                        value: value
                    };
                } else result = {
                    type: 'unknown',
                    value: s
                };
                return result;
            }
        });
        FB.provide('Data', {
            query: function(a, b) {
                var c = new FB.Data.Query().parse(arguments);
                FB.Data.queue.push(c);
                FB.Data._waitToProcess();
                return c;
            },
            waitOn: function(a, b) {
                var c = new FB.Waitable(),
                    d = a.length;
                if (typeof(b) == 'string') {
                    var e = b;
                    b = function(f) {
                        return FB.safeEval(e);
                    };
                }
                ES5(a, 'forEach', true, function(f) {
                    f.monitor('value', function() {
                        var g = false;
                        if (FB.Data._getValue(f) !== undefined) {
                            d--;
                            g = true;
                        }
                        if (d === 0) {
                            var h = b(ES5(a, 'map', true, FB.Data._getValue));
                            c.set(h !== undefined ? h : true);
                        }
                        return g;
                    });
                });
                return c;
            },
            process: function(a) {
                FB.Data._process(a);
            },
            _getValue: function(a) {
                return FB.Type.isType(a, FB.Waitable) ? a.value : a;
            },
            _selectByIndex: function(a, b, c, d) {
                var e = new FB.Data.Query();
                e.fields = a;
                e.table = b;
                e.where = {
                    type: 'index',
                    key: c,
                    value: d
                };
                FB.Data.queue.push(e);
                FB.Data._waitToProcess();
                return e;
            },
            _waitToProcess: function() {
                if (FB.Data.timer < 0) FB.Data.timer = setTimeout(function() {
                    FB.Data._process();
                }, 10);
            },
            _process: function(a) {
                FB.Data.timer = -1;
                var b = {},
                    c = FB.Data.queue;
                if (!c.length) return;
                FB.Data.queue = [];
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e.where.type == 'index' && !e.hasDependency) {
                        FB.Data._mergeIndexQuery(e, b);
                    } else b[e.name] = e;
                }
                var f = {
                    q: {}
                };
                FB.copy(f.q, b, true, function(g) {
                    return g.toFql();
                });
                f.queries = ES5('JSON', 'stringify', false, f.queries);
                if (a) f.access_token = a;
                FB.api('/fql', 'GET', f, function(g) {
                    if (g.error) {
                        ES5(ES5('Object', 'keys', false, b), 'forEach', true, function(h) {
                            b[h].error(new Error(g.error.message));
                        });
                    } else ES5(g.data, 'forEach', true, function(h) {
                        b[h.name].set(h.fql_result_set);
                    });
                });
            },
            _mergeIndexQuery: function(a, b) {
                var c = a.where.key,
                    d = a.where.value,
                    e = 'index_' + a.table + '_' + c,
                    f = b[e];
                if (!f) {
                    f = b[e] = new FB.Data.Query();
                    f.fields = [c];
                    f.table = a.table;
                    f.where = {
                        type: 'in',
                        key: c,
                        value: []
                    };
                }
                FB.Array.merge(f.fields, a.fields);
                FB.Array.merge(f.where.value, [d]);
                f.wait(function(g) {
                    a.set(ES5(g, 'filter', true, function(h) {
                        return h[c] == d;
                    }));
                });
            },
            timer: -1,
            queue: []
        });
        window.setTimeout(function() {
            var a = /(connect.facebook.net|facebook.com\/assets.php).*?#(.*)/;
            ES5(FB.Array.toArray(document.getElementsByTagName('script')), 'forEach', true, function(b) {
                if (b.src) {
                    var c = a.exec(b.src);
                    if (c) {
                        var d = FB.QS.decode(c[2]);
                        ES5(FB.Array, 'forEach', true, d, function(e, f) {
                            if (e == '0') d[f] = 0;
                        });
                        FB.init(d);
                    }
                }
            });
            if (window.fbAsyncInit && !window.fbAsyncInit.hasRun) {
                window.fbAsyncInit.hasRun = true;
                fbAsyncInit();
            }
        }, 0);
        FB.provide('Native', {
            NATIVE_READY_EVENT: 'fbNativeReady',
            onready: function(a) {
                if (!FB.UA.nativeApp()) {
                    FB.log('FB.Native.onready only works when the page is rendered ' + 'in a WebView of the native Facebook app. Test if this is the ' + 'case calling FB.UA.nativeApp()');
                    return;
                }
                if (window.__fbNative && !this.nativeReady) FB.provide('Native', window.__fbNative);
                if (this.nativeReady) {
                    a();
                } else {
                    var b = function(c) {
                            window.removeEventListener(FB.Native.NATIVE_READY_EVENT, b);
                            FB.Native.onready(a);
                        };
                    window.addEventListener(FB.Native.NATIVE_READY_EVENT, b, false);
                }
            }
        });
        FB.provide('UIServer.Methods', {
            'pay.prompt': {
                transform: function(a) {
                    var b = FB.XD.handler(function(c) {
                        a.cb(ES5('JSON', 'parse', false, c.response));
                    }, 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                    a.params.channel = b;
                    FB.Arbiter.inform('Pay.Prompt', a.params);
                    return false;
                }
            }
        });
        FB.provide('UIServer.Methods', {
            pay: {
                size: {
                    width: 555,
                    height: 120
                },
                noHttps: true,
                connectDisplay: 'popup',
                transform: function(a) {
                    if (!FB._inCanvas) {
                        a.params.order_info = ES5('JSON', 'stringify', false, a.params.order_info);
                        return a;
                    }
                    var b = FB.XD.handler(function(c) {
                        a.cb(c.response ? ES5('JSON', 'parse', false, c.response) : null);
                    }, 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                    a.params.channel = b;
                    a.params.uiserver = true;
                    FB.Arbiter.inform('Pay.Prompt', a.params);
                    return false;
                }
            }
        });
        FB.provide('Helper', {
            isUser: function(a) {
                return a < 2.2e+09 || (a >= 1e+14 && a <= 100099999989999) || (a >= 8.9e+13 && a <= 89999999999999);
            },
            getLoggedInUser: function() {
                return FB.getUserID();
            },
            upperCaseFirstChar: function(a) {
                if (a.length > 0) {
                    return a.substr(0, 1).toUpperCase() + a.substr(1);
                } else return a;
            },
            getProfileLink: function(a, b, c) {
                c = c || (a ? FB.getDomain('www') + 'profile.php?id=' + a.uid : null);
                if (c) b = '<a class="fb_link" href="' + c + '">' + b + '</a>';
                return b;
            },
            invokeHandler: function(a, b, c) {
                if (a) if (typeof a === 'string') {
                    FB.safeEval(a);
                } else if (a.apply) a.apply(b, c || []);
            },
            fireEvent: function(a, b) {
                var c = b._attr.href;
                b.fire(a, c);
                FB.Event.fire(a, c, b);
            },
            executeFunctionByName: function(a) {
                var b = Array.prototype.slice.call(arguments, 1),
                    c = a.split("."),
                    d = c.pop(),
                    e = window;
                for (var f = 0; f < c.length; f++) e = e[c[f]];
                return e[d].apply(this, b);
            }
        });
        FB.provide('TemplateData', {
            _initialized: false,
            _version: 0,
            _response: null,
            _localStorageTimeout: 60 * 60 * 24,
            _enabled: true,
            enabled: function() {
                return FB.TemplateData._enabled && FB.TemplateData._initialized && FB.TemplateData.supportsLocalStorage() && FB._userStatus == 'connected' && FB.TemplateData.getResponse();
            },
            supportsLocalStorage: function() {
                try {
                    return 'localStorage' in window && window.localStorage !== null;
                } catch (a) {
                    return false;
                }
            },
            _isStale: function(a) {
                if (!a || !a.version || a.version != FB.TemplateData._version || a.currentUserID != FB.getUserID()) return true;
                var b = Math.round((new Date()).getTime());
                return (b - a.setAt) / 1000 > FB.TemplateData._localStorageTimeout;
            },
            getResponse: function() {
                var a = FB.TemplateData;
                try {
                    a._response = a._response || (a.supportsLocalStorage() && ES5('JSON', 'parse', false, localStorage.FB_templateDataResponse || "null"));
                } catch (b) {
                    a._response = null;
                }
                if (a._isStale(a._response)) a.saveResponse(null);
                return a._response;
            },
            saveResponse: function(a) {
                FB.TemplateData._response = a;
                if (FB.TemplateData.supportsLocalStorage()) localStorage.FB_templateDataResponse = ES5('JSON', 'stringify', false, a);
            },
            getData: function() {
                var a = FB.TemplateData.getResponse();
                return a ? a.data : {};
            },
            init: function(a) {
                if (!a) return;
                FB.TemplateData._initialized = true;
                FB.TemplateData._version = a;
                if (FB.TemplateData.supportsLocalStorage() && !('FB_templateDataResponse' in localStorage)) FB.TemplateData.clear();
            },
            clear: function() {
                FB.TemplateData.saveResponse(null);
            },
            update: function(a) {
                if (FB._userStatus != 'connected') FB.TemplateData.clear();
                if (FB._userStatus == 'connected' && !FB.TemplateData.getResponse()) FB.api({
                    method: 'dialog.template_data'
                }, function(b) {
                    if ('error_code' in b) return;
                    var c = {
                        data: b,
                        currentUserID: FB.getUserID(),
                        setAt: (new Date()).getTime(),
                        version: FB.TemplateData._version
                    };
                    FB.TemplateData.saveResponse(c);
                });
            }
        });
        FB.subclass('TemplateUI', 'Obj', function(a, b) {
            this.method = a;
            var c = FB.UA.nativeApp() ? 0 : 1,
                d = {
                    display: 'touch',
                    preview_template: 1,
                    in_iframe: c,
                    locale: FB._locale,
                    v: FB.TemplateUI._version,
                    user_agent: navigator.userAgent
                };
            if (window.devicePixelRatio) d.m_pixel_ratio = window.devicePixelRatio;
            var e = FB.QS.encode(d);
            this.cachedCall = {
                url: FB.getDomain('staticfb') + 'dialog/' + a + '?' + e,
                frameName: FB.guid(),
                id: FB.guid(),
                size: FB.UIServer.getDefaultSize(),
                hideLoader: true
            };
            FB.XD.handler(ES5(this, 'bind', true, function(g) {
                if (g.type == 'getParams') this.setProperty('getParamsCb', g.returnCb);
            }), 'parent', true, this.cachedCall.frameName);
            if (c) {
                FB.UIServer.iframe(this.cachedCall);
                FB.Dialog.hide(this.cachedCall.root);
            } else if (b && !FB.TemplateUI._preloads[this.cachedCall.url]) {
                var f = document.createElement('div');
                FB.TemplateUI._preloads[this.cachedCall.url] = {
                    container: f
                };
                FB.Content.insertIframe({
                    url: this.cachedCall.url,
                    root: FB.Content.appendHidden(f)
                });
            }
        }, {
            use: function(a) {
                if (!this.cachedCall.root) {
                    FB.UIServer.touch(this.cachedCall);
                    var b = FB.TemplateUI._preloads[this.cachedCall.url];
                    if (b && b.container) {
                        b.container.parentNode.removeChild(b.container);
                        delete b.container;
                    }
                }
                a.ui_created = true;
                a.root = this.cachedCall.root;
                FB.UIServer.setLoadedNode(a, FB.UIServer.getLoadedNode(this.cachedCall.id));
                delete FB.UIServer._loadedNodes[this.cachedCall.id];
                var c = FB.Dialog._dialogs[a.id];
                FB.Dialog._dialogs[this.cachedCall.id] = c;
                c.id = this.cachedCall.id;
                delete FB.Dialog._dialogs[a.id];
                FB.UIServer.getLoadedNode(a).fbCallID = this.cachedCall.id;
                this.cachedCall.id = a.id;
                var d = {};
                FB.copy(d, a.params);
                FB.copy(d, FB.TemplateData.getData()[this.method]);
                d.frictionless = FB.TemplateUI.isFrictionlessAppRequest(this.method, d);
                d.common = FB.TemplateData.getData().common;
                d.method = this.method;
                this.setParams(d);
                if (FB.UA.nativeApp()) FB.UIServer._popupMonitor();
            },
            setParams: function(a) {
                this.monitor('getParamsCb', ES5(this, 'bind', true, function() {
                    if (this.getParamsCb) {
                        var b = frames[this.cachedCall.frameName] || FB.UIServer.getLoadedNode(this.cachedCall);
                        b.postMessage(ES5('JSON', 'stringify', false, {
                            params: a,
                            cb: this.getParamsCb
                        }), '*');
                        return true;
                    }
                }));
            }
        });
        FB.provide('TemplateUI', {
            _timer: null,
            _cache: {},
            _preloads: {},
            _version: 0,
            init: function() {
                FB.TemplateData.init(FB.TemplateUI._version);
                FB.TemplateUI.initCache();
            },
            useCachedUI: function(a, b) {
                try {
                    FB.TemplateUI.populateCache();
                    cache = FB.TemplateUI._cache[a];
                    delete FB.TemplateUI._cache[a];
                    cache.use(b);
                } catch (c) {
                    FB.TemplateData.clear();
                }
            },
            populateCache: function(a) {
                if (!FB.TemplateData.enabled() || !FB.UA.mobile()) return;
                clearInterval(FB.TemplateUI._timer);
                var b = {
                    feed: true,
                    apprequests: true
                };
                for (var c in b) if (!(c in FB.TemplateUI._cache)) FB.TemplateUI._cache[c] = new FB.TemplateUI(c, a);
            },
            initCache: function() {
                FB.TemplateUI._timer = setInterval(function() {
                    FB.TemplateUI.populateCache(true);
                }, 2000);
            },
            supportsTemplate: function(a, b) {
                return FB.TemplateData.enabled() && FB.TemplateUI.paramsAllowTemplate(a, b.params) && b.params.display === 'touch' && FB.UA.mobile();
            },
            paramsAllowTemplate: function(a, b) {
                var c = {
                    feed: {
                        to: 1,
                        attachment: 1,
                        source: 1
                    },
                    apprequests: {}
                };
                if (!(a in c)) return false;
                for (var d in c[a]) if (b[d]) return false;
                return !FB.TemplateUI.willWriteOnGet(a, b);
            },
            isFrictionlessAppRequest: function(a, b) {
                return a === 'apprequests' && FB.Frictionless && FB.Frictionless._useFrictionless;
            },
            willWriteOnGet: function(a, b) {
                return FB.TemplateUI.isFrictionlessAppRequest(a, b) && b.to && FB.Frictionless.isAllowed(b.to);
            }
        });
        FB.Class('XFBML.Element', function(a, b) {
            this.dom = a;
        }, FB.copy({
            getAttribute: function(a, b, c) {
                var d = FB.XFBML.getAttr(this.dom, a);
                return d ? (c ? c(d) : d) : b;
            },
            _getBoolAttribute: function(a, b) {
                if (FB.XFBML.getAttr(this.dom, a) === null) return b;
                return FB.XFBML.getBoolAttr(this.dom, a);
            },
            _getPxAttribute: function(a, b) {
                return this.getAttribute(a, b, function(c) {
                    var d = parseInt(c.replace('px', ''), 10);
                    if (isNaN(d)) {
                        return b;
                    } else return d;
                });
            },
            _getAttributeFromList: function(a, b, c) {
                return this.getAttribute(a, b, function(d) {
                    d = d.toLowerCase();
                    if (ES5(c, 'indexOf', true, d) > -1) {
                        return d;
                    } else return b;
                });
            },
            isValid: function() {
                for (var a = this.dom; a; a = a.parentNode) if (a == document.body) return true;
            },
            clear: function() {
                this.dom.innerHTML = '';
            }
        }, FB.EventProvider));
        FB.subclass('XFBML.IframeWidget', 'XFBML.Element', null, {
            _iframeName: null,
            _showLoader: true,
            _refreshOnAuthChange: false,
            _allowReProcess: false,
            _fetchPreCachedLoader: false,
            _visibleAfter: 'load',
            _widgetPipeEnabled: false,
            _borderReset: false,
            getUrlBits: function() {
                throw new Error('Inheriting class needs to implement getUrlBits().');
            },
            setupAndValidate: function() {
                return true;
            },
            oneTimeSetup: function() {},
            getSize: function() {},
            getIframeName: function() {
                if (!this._iframeName && this._widgetPipeEnabled && FB.XFBML.shouldUseWidgetPipe()) {
                    this._iframeName = this.generateWidgetPipeIframeName();
                    FB.XFBML.IframeWidget.allWidgetPipeIframes[this._iframeName] = this;
                    if (FB.XFBML.IframeWidget.masterWidgetPipeIframe === null) FB.XFBML.IframeWidget.masterWidgetPipeIframe = this;
                }
                return this._iframeName;
            },
            getIframeTitle: function() {},
            getChannelUrl: function() {
                if (!this._channelUrl) {
                    var a = this;
                    this._channelUrl = FB.XD.handler(function(b) {
                        a.fire('xd.' + b.type, b);
                    }, 'parent.parent', true);
                }
                return this._channelUrl;
            },
            getIframeNode: function() {
                return this.dom.getElementsByTagName('iframe')[0];
            },
            arbiterInform: function(event, a, b) {
                FB.XD.sendToFacebook(this.getIframeName(), {
                    method: event,
                    params: ES5('JSON', 'stringify', false, a || {}),
                    behavior: b || FB.Arbiter.BEHAVIOR_PERSISTENT
                });
            },
            _arbiterInform: function(event, a, b) {
                var c = 'parent.frames["' + this.getIframeNode().name + '"]';
                FB.Arbiter.inform(event, a, c, b);
            },
            getDefaultWebDomain: function() {
                return 'www';
            },
            getDefaultStaticDomain: function() {
                return 'cdn';
            },
            process: function(a) {
                if (this._done) {
                    if (!this._allowReProcess && !a) return;
                    this.clear();
                } else this._oneTimeSetup();
                this._done = true;
                this._iframeName = this._iframeName || FB.guid();
                if (!this.setupAndValidate()) {
                    this.fire('render');
                    return;
                }
                if (this._showLoader) this._addLoader();
                FB.Dom.addCss(this.dom, 'fb_iframe_widget');
                if (this._visibleAfter != 'immediate') {
                    FB.Dom.addCss(this.dom, 'fb_hide_iframes');
                } else this.subscribe('iframe.onload', ES5(this.fire, 'bind', true, this, 'render'));
                var b = this.getSize() || {},
                    c = this.getFullyQualifiedURL();
                if (b.width == '100%') FB.Dom.addCss(this.dom, 'fb_iframe_widget_fluid');
                FB.Content.insertIframe({
                    url: c,
                    root: this.dom.appendChild(document.createElement('span')),
                    name: this.getIframeName(),
                    title: this.getIframeTitle(),
                    className: FB._localeIsRtl ? 'fb_rtl' : 'fb_ltr',
                    height: b.height,
                    width: b.width,
                    onload: ES5(this.fire, 'bind', true, this, 'iframe.onload')
                });
                this._resizeFlow(b);
                this.loaded = false;
                this.subscribe('iframe.onload', ES5(function() {
                    this.loaded = true;
                }, 'bind', true, this));
            },
            generateWidgetPipeIframeName: function() {
                FB.XFBML.IframeWidget.widgetPipeIframeCount++;
                return 'fb_iframe_' + FB.XFBML.IframeWidget.widgetPipeIframeCount;
            },
            getFullyQualifiedURL: function() {
                if (FB.XFBML.shouldUseWidgetPipe() && this._widgetPipeEnabled) return this._getWidgetPipeShell();
                var a = this._getURL();
                if (!this._fetchPreCachedLoader) a += '?' + FB.QS.encode(this._getQS());
                if (a.length > 2000) {
                    a = 'about:blank';
                    var b = ES5(function() {
                        this._postRequest();
                        this.unsubscribe('iframe.onload', b);
                    }, 'bind', true, this);
                    this.subscribe('iframe.onload', b);
                }
                return a;
            },
            _getWidgetPipeShell: function() {
                return FB.getDomain('www') + 'common/widget_pipe_shell.php';
            },
            _oneTimeSetup: function() {
                this.subscribe('xd.resize', ES5(this._handleResizeMsg, 'bind', true, this));
                this.subscribe('xd.resize', ES5(this._bubbleResizeEvent, 'bind', true, this));
                this.subscribe('xd.resize.iframe', ES5(this._resizeIframe, 'bind', true, this));
                this.subscribe('xd.resize.flow', ES5(this._resizeFlow, 'bind', true, this));
                this.subscribe('xd.resize.flow', ES5(this._bubbleResizeEvent, 'bind', true, this));
                if (FB.getLoginStatus) {
                    this.subscribe('xd.refreshLoginStatus', ES5(FB.getLoginStatus, 'bind', true, FB, function() {}, true));
                    this.subscribe('xd.logout', ES5(FB.logout, 'bind', true, FB, function() {}));
                }
                if (this._refreshOnAuthChange) this._setupAuthRefresh();
                if (this._visibleAfter == 'load') this.subscribe('iframe.onload', ES5(this._makeVisible, 'bind', true, this));
                this.subscribe('xd.verify', ES5(function(a) {
                    this.arbiterInform('xd/verify', a.token);
                }, 'bind', true, this));
                this.oneTimeSetup();
            },
            _makeVisible: function() {
                this._removeLoader();
                FB.Dom.removeCss(this.dom, 'fb_hide_iframes');
                this.fire('render');
            },
            _setupAuthRefresh: function() {
                FB.getLoginStatus(ES5(function(a) {
                    var b = a.status;
                    FB.Event.subscribe('auth.statusChange', ES5(function(c) {
                        if (!this.isValid()) return;
                        if (b == 'unknown' || c.status == 'unknown') this.process(true);
                        b = c.status;
                    }, 'bind', true, this));
                }, 'bind', true, this));
            },
            _handleResizeMsg: function(a) {
                if (!this.isValid()) return;
                this._resizeIframe(a);
                this._resizeFlow(a);
                if (!this._borderReset) {
                    this.getIframeNode().style.border = 'none';
                    this._borderReset = true;
                }
                this._makeVisible();
            },
            _bubbleResizeEvent: function(a) {
                var b = {
                    height: a.height,
                    width: a.width,
                    pluginID: this.getAttribute('plugin-id')
                };
                FB.Event.fire('xfbml.resize', b);
            },
            _resizeIframe: function(a) {
                var b = this.getIframeNode();
                a.height && (b.style.height = a.height + 'px');
                a.width && (b.style.width = a.width + 'px');
                this._updateIframeZIndex();
            },
            _resizeFlow: function(a) {
                var b = this.dom.getElementsByTagName('span')[0];
                a.height && (b.style.height = a.height + 'px');
                a.width && (b.style.width = a.width + 'px');
                this._updateIframeZIndex();
            },
            _updateIframeZIndex: function() {
                var a = this.dom.getElementsByTagName('span')[0],
                    b = this.getIframeNode(),
                    c = b.style.height === a.style.height && b.style.width === a.style.width,
                    d = c ? 'removeCss' : 'addCss';
                FB.Dom[d](b, 'fb_iframe_widget_lift');
            },
            _addLoader: function() {
                if (!this._loaderDiv) {
                    FB.Dom.addCss(this.dom, 'fb_iframe_widget_loader');
                    this._loaderDiv = document.createElement('div');
                    this._loaderDiv.className = 'FB_Loader';
                    this.dom.appendChild(this._loaderDiv);
                }
            },
            _removeLoader: function() {
                if (this._loaderDiv) {
                    FB.Dom.removeCss(this.dom, 'fb_iframe_widget_loader');
                    if (this._loaderDiv.parentNode) this._loaderDiv.parentNode.removeChild(this._loaderDiv);
                    this._loaderDiv = null;
                }
            },
            _getQS: function() {
                return FB.copy({
                    api_key: FB._apiKey,
                    locale: FB._locale,
                    sdk: 'joey',
                    ref: this.getAttribute('ref')
                }, this.getUrlBits().params);
            },
            _getURL: function() {
                var a = this.getDefaultWebDomain(),
                    b = '';
                if (this._fetchPreCachedLoader) {
                    a = this.getDefaultStaticDomain();
                    b = 'static/';
                }
                return FB.getDomain(a) + 'plugins/' + b + this.getUrlBits().name + '.php';
            },
            _postRequest: function() {
                FB.Content.submitToTarget({
                    url: this._getURL(),
                    target: this.getIframeNode().name,
                    params: this._getQS()
                });
            }
        });
        FB.provide('XFBML.IframeWidget', {
            widgetPipeIframeCount: 0,
            masterWidgetPipeIframe: null,
            allWidgetPipeIframes: {},
            batchWidgetPipeRequests: function() {
                if (!FB.XFBML.IframeWidget.masterWidgetPipeIframe) return;
                var a = FB.XFBML.IframeWidget._groupWidgetPipeDescriptions(),
                    b = {
                        widget_pipe: ES5('JSON', 'stringify', false, a),
                        href: window.location,
                        site: location.hostname,
                        channel: FB.XFBML.IframeWidget.masterWidgetPipeIframe.getChannelUrl(),
                        api_key: FB._apiKey,
                        locale: FB._locale,
                        sdk: 'joey'
                    },
                    c = FB.guid(),
                    d = FB.XFBML.IframeWidget.masterWidgetPipeIframe.dom,
                    e = d.appendChild(document.createElement('span'));
                FB.Content.insertIframe({
                    url: 'about:blank',
                    root: e,
                    name: c,
                    className: 'fb_hidden fb_invisible',
                    onload: function() {
                        FB.Content.submitToTarget({
                            url: FB._domain.www + 'widget_pipe.php?widget_pipe=1',
                            target: c,
                            params: b
                        });
                    }
                });
            },
            _groupWidgetPipeDescriptions: function() {
                var a = {};
                for (var b in FB.XFBML.IframeWidget.allWidgetPipeIframes) {
                    var c = FB.XFBML.IframeWidget.allWidgetPipeIframes[b],
                        d = c.getUrlBits(),
                        e = {
                            widget: d.name
                        };
                    FB.copy(e, d.params);
                    a[b] = e;
                }
                return a;
            }
        });
        FB.subclass('XFBML.Activity', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            _refreshOnAuthChange: true,
            setupAndValidate: function() {
                this._attr = {
                    border_color: this.getAttribute('border-color'),
                    colorscheme: this.getAttribute('color-scheme'),
                    filter: this.getAttribute('filter'),
                    action: this.getAttribute('action'),
                    max_age: this.getAttribute('max_age'),
                    font: this.getAttribute('font'),
                    linktarget: this.getAttribute('linktarget', '_blank'),
                    header: this._getBoolAttribute('header'),
                    height: this._getPxAttribute('height', 300),
                    recommendations: this._getBoolAttribute('recommendations'),
                    site: this.getAttribute('site', location.hostname),
                    width: this._getPxAttribute('width', 300)
                };
                return true;
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function() {
                return {
                    name: 'activity',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.ButtonElement', 'XFBML.Element', null, {
            _allowedSizes: ['icon', 'small', 'medium', 'large', 'xlarge'],
            onClick: function() {
                throw new Error('Inheriting class needs to implement onClick().');
            },
            setupAndValidate: function() {
                return true;
            },
            getButtonMarkup: function() {
                return this.getOriginalHTML();
            },
            getOriginalHTML: function() {
                return this._originalHTML;
            },
            process: function() {
                if (!('_originalHTML' in this)) this._originalHTML = ES5(this.dom.innerHTML, 'trim', true);
                if (!this.setupAndValidate()) {
                    this.fire('render');
                    return;
                }
                var a = this._getAttributeFromList('size', 'medium', this._allowedSizes),
                    b = '',
                    c = '';
                if (a == 'icon') {
                    b = 'fb_button_simple';
                } else {
                    var d = FB._localeIsRtl ? '_rtl' : '';
                    c = this.getButtonMarkup();
                    b = 'fb_button' + d + ' fb_button_' + a + d;
                }
                if (c !== '') {
                    this.dom.innerHTML = ('<a class="' + b + '">' + '<span class="fb_button_text">' + c + '</span>' + '</a>');
                    this.dom.firstChild.onclick = ES5(this.onClick, 'bind', true, this);
                }
                this.fire('render');
            }
        });
        FB.subclass('XFBML.AddProfileTab', 'XFBML.ButtonElement', null, {
            getButtonMarkup: function() {
                return FB.Intl.tx._("Add Profile Tab on Facebook");
            },
            onClick: function() {
                FB.ui({
                    method: 'profile.addtab'
                }, ES5(this, 'bind', true, function(a) {
                    if (a.tab_added) FB.Helper.invokeHandler(this.getAttribute('on-add'), this);
                }));
            }
        });
        FB.subclass('XFBML.Facepile', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function() {
                this._attr = {
                    channel: this.getChannelUrl(),
                    colorscheme: this.getAttribute('colorscheme'),
                    font: this.getAttribute('font'),
                    href: this.getAttribute('href'),
                    width: this._getPxAttribute('width'),
                    max_rows: this.getAttribute('max-rows'),
                    action: this.getAttribute('action'),
                    size: this.getAttribute('size')
                };
                return true;
            },
            getSize: function() {
                if (this._attr.size == 'large') return {
                    width: this._attr.width,
                    height: 90
                };
                return {
                    width: this._attr.width,
                    height: 70
                };
            },
            getUrlBits: function() {
                return {
                    name: 'facepile',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.AddToTimeline', 'XFBML.Facepile', null, {
            _visibleAfter: 'load',
            getSize: function() {
                return {
                    width: 300,
                    height: 250
                };
            },
            getUrlBits: function() {
                return {
                    name: 'add_to_timeline',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.Bookmark', 'XFBML.ButtonElement', null, {
            getButtonMarkup: function() {
                return FB.Intl.tx._("Bookmark on Facebook");
            },
            onClick: function() {
                FB.ui({
                    method: 'bookmark.add'
                }, ES5(this, 'bind', true, function(a) {
                    if (a.bookmarked) FB.Helper.invokeHandler(this.getAttribute('on-add'), this);
                }));
            }
        });
        FB.subclass('XFBML.Comments', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'immediate',
            _refreshOnAuthChange: true,
            setupAndValidate: function() {
                var a = {
                    channel_url: this.getChannelUrl(),
                    colorscheme: this.getAttribute('colorscheme'),
                    numposts: this.getAttribute('num-posts', 10),
                    width: this._getPxAttribute('width', 550),
                    href: this.getAttribute('href'),
                    permalink: this.getAttribute('permalink'),
                    publish_feed: this.getAttribute('publish_feed'),
                    order_by: this.getAttribute('order_by'),
                    mobile: this._getBoolAttribute('mobile')
                };
                if (FB.initSitevars.enableMobileComments && FB.UA.mobile() && a.mobile !== false) {
                    a.mobile = true;
                    delete a.width;
                }
                if (!a.href) {
                    a.migrated = this.getAttribute('migrated');
                    a.xid = this.getAttribute('xid');
                    a.title = this.getAttribute('title', document.title);
                    a.url = this.getAttribute('url', document.URL);
                    a.quiet = this.getAttribute('quiet');
                    a.reverse = this.getAttribute('reverse');
                    a.simple = this.getAttribute('simple');
                    a.css = this.getAttribute('css');
                    a.notify = this.getAttribute('notify');
                    if (!a.xid) {
                        var b = ES5(document.URL, 'indexOf', true, '#');
                        if (b > 0) {
                            a.xid = encodeURIComponent(document.URL.substring(0, b));
                        } else a.xid = encodeURIComponent(document.URL);
                    }
                    if (a.migrated) a.href = 'http://www.facebook.com/plugins/comments_v1.php?' + 'app_id=' + FB._apiKey + '&xid=' + encodeURIComponent(a.xid) + '&url=' + encodeURIComponent(a.url);
                } else {
                    var c = this.getAttribute('fb_comment_id');
                    if (!c) {
                        c = FB.QS.decode(document.URL.substring(ES5(document.URL, 'indexOf', true, '?') + 1)).fb_comment_id;
                        if (c && ES5(c, 'indexOf', true, '#') > 0) c = c.substring(0, ES5(c, 'indexOf', true, '#'));
                    }
                    if (c) {
                        a.fb_comment_id = c;
                        this.subscribe('render', ES5(function() {
                            if (!window.location.hash) window.location.hash = this.getIframeNode().id;
                        }, 'bind', true, this));
                    }
                }
                this._attr = a;
                return true;
            },
            oneTimeSetup: function() {
                this.subscribe('xd.addComment', ES5(this._handleCommentMsg, 'bind', true, this));
                this.subscribe('xd.commentCreated', ES5(this._handleCommentCreatedMsg, 'bind', true, this));
                this.subscribe('xd.commentRemoved', ES5(this._handleCommentRemovedMsg, 'bind', true, this));
            },
            getSize: function() {
                if (this._attr.mobile) return {
                    width: '100%',
                    height: 160
                };
                return {
                    width: this._attr.width,
                    height: 160
                };
            },
            getUrlBits: function() {
                return {
                    name: 'comments',
                    params: this._attr
                };
            },
            getDefaultWebDomain: function() {
                if (this._attr.mobile) {
                    return 'https_m';
                } else return 'https_www';
            },
            _handleCommentMsg: function(a) {
                if (!this.isValid()) return;
                FB.Event.fire('comments.add', {
                    post: a.post,
                    user: a.user,
                    widget: this
                });
            },
            _handleCommentCreatedMsg: function(a) {
                if (!this.isValid()) return;
                var b = {
                    href: a.href,
                    commentID: a.commentID,
                    parentCommentID: a.parentCommentID
                };
                FB.Event.fire('comment.create', b);
            },
            _handleCommentRemovedMsg: function(a) {
                if (!this.isValid()) return;
                var b = {
                    href: a.href,
                    commentID: a.commentID
                };
                FB.Event.fire('comment.remove', b);
            }
        });
        FB.subclass('XFBML.CommentsCount', 'XFBML.Element', null, {
            process: function() {
                this._href = this.getAttribute('href', window.location.href);
                this._count = FB.Data._selectByIndex(['commentsbox_count'], 'link_stat', 'url', this._href);
                FB.Dom.addCss(this.dom, 'fb_comments_count_zero');
                this._count.wait(ES5(function() {
                    var a = this._count.value[0].commentsbox_count;
                    this.dom.innerHTML = FB.String.format('<span class="fb_comments_count">{0}</span>', a);
                    if (a > 0) FB.Dom.removeCss(this.dom, 'fb_comments_count_zero');
                    this.fire('render');
                }, 'bind', true, this));
            }
        });
        FB.provide('Anim', {
            ate: function(a, b, c, d) {
                c = !isNaN(parseFloat(c)) && c >= 0 ? c : 750;
                var e = 40,
                    f = {},
                    g = {},
                    h = null,
                    i = a.style,
                    j = setInterval(ES5(function() {
                        if (!h) h = new Date().getTime();
                        var k = 1;
                        if (c != 0) k = Math.min((new Date().getTime() - h) / c, 1);
                        ES5(FB.Array, 'forEach', true, b, ES5(function(l, m) {
                            if (!f[m]) {
                                var n = FB.Dom.getStyle(a, m);
                                if (n === false) return;
                                f[m] = this._parseCSS(n + '');
                            }
                            if (!g[m]) g[m] = this._parseCSS(l.toString());
                            var o = '';
                            ES5(FB.Array, 'forEach', true, f[m], function(p, q) {
                                if (isNaN(g[m][q].numPart) && g[m][q].textPart == '?') {
                                    o = p.numPart + p.textPart;
                                } else if (isNaN(p.numPart)) {
                                    o = p.textPart;
                                } else o += (p.numPart + Math.ceil((g[m][q].numPart - p.numPart) * Math.sin(Math.PI / 2 * k))) + g[m][q].textPart + ' ';
                            });
                            FB.Dom.setStyle(a, m, o);
                        }, 'bind', true, this));
                        if (k == 1) {
                            clearInterval(j);
                            if (d) d(a);
                        }
                    }, 'bind', true, this), e);
            },
            _parseCSS: function(a) {
                var b = [];
                ES5(a.split(' '), 'forEach', true, function(c) {
                    var d = parseInt(c, 10);
                    b.push({
                        numPart: d,
                        textPart: c.replace(d, '')
                    });
                });
                return b;
            }
        });
        FB.provide('Insights', {
            impression: function(a, b) {
                var c = FB.guid(),
                    d = FB.getDomain(location.protocol == 'https:' ? 'https_www' : 'www') + "impression.php/" + c + "/",
                    e = new Image(1, 1),
                    f = [];
                if (!a.api_key && FB._apiKey) a.api_key = FB._apiKey;
                a = FB.JSON.flatten(a);
                for (var g in a) f.push(encodeURIComponent(g) + '=' + encodeURIComponent(a[g]));
                d += '?' + f.join('&');
                if (b) e.onload = b;
                e.src = d;
            }
        });
        FB.subclass('XFBML.ConnectBar', 'XFBML.Element', null, {
            _initialHeight: null,
            _initTopMargin: 0,
            _picFieldName: 'pic_square',
            _page: null,
            _displayed: false,
            _notDisplayed: false,
            _container: null,
            _animationSpeed: 0,
            process: function() {
                FB.getLoginStatus(ES5(this, 'bind', true, function(a) {
                    FB.Event.monitor('auth.statusChange', ES5(this, 'bind', true, function() {
                        if (this.isValid() && FB._userStatus == 'connected') {
                            this._uid = FB.Helper.getLoggedInUser();
                            FB.api({
                                method: 'Connect.shouldShowConnectBar'
                            }, ES5(this, 'bind', true, function(b) {
                                if (b != 2) {
                                    this._animationSpeed = (b == 0) ? 750 : 0;
                                    this._showBar();
                                } else this._noRender();
                            }));
                        } else this._noRender();
                        return false;
                    }));
                }));
            },
            _showBar: function() {
                var a = FB.Data._selectByIndex(['first_name', 'profile_url', this._picFieldName], 'user', 'uid', this._uid),
                    b = FB.Data._selectByIndex(['display_name'], 'application', 'api_key', FB._apiKey);
                FB.Data.waitOn([a, b], ES5(function(c) {
                    c[0][0].site_name = c[1][0].display_name;
                    if (!this._displayed) {
                        this._displayed = true;
                        this._notDisplayed = false;
                        this._renderConnectBar(c[0][0]);
                        this.fire('render');
                        FB.Insights.impression({
                            lid: 104,
                            name: 'widget_load'
                        });
                        this.fire('connectbar.ondisplay');
                        FB.Event.fire('connectbar.ondisplay', this);
                        FB.Helper.invokeHandler(this.getAttribute('on-display'), this);
                    }
                }, 'bind', true, this));
            },
            _noRender: function() {
                if (this._displayed) {
                    this._displayed = false;
                    this._closeConnectBar();
                }
                if (!this._notDisplayed) {
                    this._notDisplayed = true;
                    this.fire('render');
                    this.fire('connectbar.onnotdisplay');
                    FB.Event.fire('connectbar.onnotdisplay', this);
                    FB.Helper.invokeHandler(this.getAttribute('on-not-display'), this);
                }
            },
            _renderConnectBar: function(a) {
                var b = document.createElement('div'),
                    c = document.createElement('div');
                b.className = 'fb_connect_bar';
                c.className = 'fb_reset fb_connect_bar_container';
                c.appendChild(b);
                document.body.appendChild(c);
                this._container = c;
                this._initialHeight = Math.round(parseFloat(FB.Dom.getStyle(c, 'height')) + parseFloat(FB.Dom.getStyle(c, 'borderBottomWidth')));
                b.innerHTML = FB.String.format('<div class="fb_buttons">' + '<a href="#" class="fb_bar_close">' + '<img src="{1}" alt="{2}" title="{2}"/>' + '</a>' + '</div>' + '<a href="{7}" class="fb_profile" target="_blank">' + '<img src="{3}" alt="{4}" title="{4}"/>' + '</a>' + '{5}' + ' <span>' + '<a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; ' + '<a href="#" class="fb_no_thanks">{0}</a>' + '</span>', FB.Intl.tx._("No Thanks"), FB.getDomain('cdn') + FB.XFBML.ConnectBar.imgs.buttonUrl, FB.Intl.tx._("Close"), a[this._picFieldName] || FB.getDomain('cdn') + FB.XFBML.ConnectBar.imgs.missingProfileUrl, FB.String.escapeHTML(a.first_name), FB.Intl.tx._("Hi {firstName}. \u003Cstrong>{siteName}\u003C\/strong> is using Facebook to personalize your experience.", {
                    firstName: FB.String.escapeHTML(a.first_name),
                    siteName: FB.String.escapeHTML(a.site_name)
                }), FB.Intl.tx._("Learn More"), a.profile_url, FB.getDomain('www') + 'sitetour/connect.php');
                var d = this;
                ES5(FB.Array.toArray(b.getElementsByTagName('a')), 'forEach', true, function(g) {
                    g.onclick = ES5(d._clickHandler, 'bind', true, d);
                });
                this._page = document.body;
                var e = 0;
                if (this._page.parentNode) {
                    e = Math.round((parseFloat(FB.Dom.getStyle(this._page.parentNode, 'height')) - parseFloat(FB.Dom.getStyle(this._page, 'height'))) / 2);
                } else e = parseInt(FB.Dom.getStyle(this._page, 'marginTop'), 10);
                e = isNaN(e) ? 0 : e;
                this._initTopMargin = e;
                if (!window.XMLHttpRequest) {
                    c.className += " fb_connect_bar_container_ie6";
                } else {
                    c.style.top = (-1 * this._initialHeight) + 'px';
                    FB.Anim.ate(c, {
                        top: '0px'
                    }, this._animationSpeed);
                }
                var f = {
                    marginTop: this._initTopMargin + this._initialHeight + 'px'
                };
                if (FB.UA.ie()) {
                    f.backgroundPositionY = this._initialHeight + 'px';
                } else f.backgroundPosition = '? ' + this._initialHeight + 'px';
                FB.Anim.ate(this._page, f, this._animationSpeed);
            },
            _clickHandler: function(a) {
                a = a || window.event;
                var b = a.target || a.srcElement;
                while (b.nodeName != 'A') b = b.parentNode;
                switch (b.className) {
                case 'fb_bar_close':
                    FB.api({
                        method: 'Connect.connectBarMarkAcknowledged'
                    });
                    FB.Insights.impression({
                        lid: 104,
                        name: 'widget_user_closed'
                    });
                    this._closeConnectBar();
                    break;
                case 'fb_learn_more':
                case 'fb_profile':
                    window.open(b.href);
                    break;
                case 'fb_no_thanks':
                    this._closeConnectBar();
                    FB.api({
                        method: 'Connect.connectBarMarkAcknowledged'
                    });
                    FB.Insights.impression({
                        lid: 104,
                        name: 'widget_user_no_thanks'
                    });
                    FB.api({
                        method: 'auth.revokeAuthorization',
                        block: true
                    }, ES5(this, 'bind', true, function() {
                        this.fire('connectbar.ondeauth');
                        FB.Event.fire('connectbar.ondeauth', this);
                        FB.Helper.invokeHandler(this.getAttribute('on-deauth'), this);
                        if (this._getBoolAttribute('auto-refresh', true)) window.location.reload();
                    }));
                    break;
                }
                return false;
            },
            _closeConnectBar: function() {
                this._notDisplayed = true;
                var a = {
                    marginTop: this._initTopMargin + 'px'
                };
                if (FB.UA.ie()) {
                    a.backgroundPositionY = '0px';
                } else a.backgroundPosition = '? 0px';
                var b = (this._animationSpeed == 0) ? 0 : 300;
                FB.Anim.ate(this._page, a, b);
                FB.Anim.ate(this._container, {
                    top: (-1 * this._initialHeight) + 'px'
                }, b, function(c) {
                    c.parentNode.removeChild(c);
                });
                this.fire('connectbar.onclose');
                FB.Event.fire('connectbar.onclose', this);
                FB.Helper.invokeHandler(this.getAttribute('on-close'), this);
            }
        });
        FB.provide('XFBML.ConnectBar', {
            imgs: {
                buttonUrl: 'images/facebook-widgets/close_btn.png',
                missingProfileUrl: 'pics/q_silhouette.gif'
            }
        });
        FB.subclass('XFBML.Fan', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function() {
                this._attr = {
                    api_key: FB._apiKey,
                    connections: this.getAttribute('connections', '10'),
                    css: this.getAttribute('css'),
                    height: this._getPxAttribute('height'),
                    id: this.getAttribute('profile-id'),
                    logobar: this._getBoolAttribute('logo-bar'),
                    name: this.getAttribute('name'),
                    stream: this._getBoolAttribute('stream', true),
                    width: this._getPxAttribute('width', 300)
                };
                if (!this._attr.id && !this._attr.name) {
                    FB.log('<fb:fan> requires one of the "id" or "name" attributes.');
                    return false;
                }
                var a = this._attr.height;
                if (!a) if ((!this._attr.connections || this._attr.connections === '0') && !this._attr.stream) {
                    a = 65;
                } else if (!this._attr.connections || this._attr.connections === '0') {
                    a = 375;
                } else if (!this._attr.stream) {
                    a = 250;
                } else a = 550;
                if (this._attr.logobar) a += 25;
                this._attr.height = a;
                return true;
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function() {
                return {
                    name: 'fan',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.Friendpile', 'XFBML.Facepile', null, {});
        FB.subclass('XFBML.EdgeCommentWidget', 'XFBML.IframeWidget', function(a) {
            this._iframeWidth = a.width + 1;
            this._iframeHeight = a.height;
            this._attr = {
                master_frame_name: a.masterFrameName,
                offsetX: a.relativeWidthOffset - a.paddingLeft
            };
            this.dom = a.commentNode;
            this.dom.style.top = a.relativeHeightOffset + 'px';
            this.dom.style.left = a.relativeWidthOffset + 'px';
            this.dom.style.zIndex = FB.XFBML.EdgeCommentWidget.NextZIndex++;
            FB.Dom.addCss(this.dom, 'fb_edge_comment_widget');
        }, {
            _visibleAfter: 'load',
            _showLoader: false,
            getSize: function() {
                return {
                    width: this._iframeWidth,
                    height: this._iframeHeight
                };
            },
            getUrlBits: function() {
                return {
                    name: 'comment_widget_shell',
                    params: this._attr
                };
            }
        });
        FB.provide('XFBML.EdgeCommentWidget', {
            NextZIndex: 10000
        });
        FB.subclass('XFBML.EdgeWidget', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'immediate',
            _showLoader: false,
            _rootPadding: null,
            setupAndValidate: function() {
                FB.Dom.addCss(this.dom, 'fb_edge_widget_with_comment');
                this._attr = {
                    channel_url: this.getChannelUrl(),
                    debug: this._getBoolAttribute('debug'),
                    href: this.getAttribute('href', window.location.href),
                    is_permalink: this._getBoolAttribute('is-permalink'),
                    node_type: this.getAttribute('node-type', 'link'),
                    width: this._getWidgetWidth(),
                    font: this.getAttribute('font'),
                    layout: this._getLayout(),
                    colorscheme: this.getAttribute('color-scheme'),
                    action: this.getAttribute('action'),
                    ref: this.getAttribute('ref'),
                    show_faces: this._shouldShowFaces(),
                    no_resize: this._getBoolAttribute('no_resize'),
                    send: this._getBoolAttribute('send'),
                    url_map: this.getAttribute('url_map'),
                    extended_social_context: this._getBoolAttribute('extended_social_context', false)
                };
                this._rootPadding = {
                    left: parseFloat(FB.Dom.getStyle(this.dom, 'paddingLeft')),
                    top: parseFloat(FB.Dom.getStyle(this.dom, 'paddingTop'))
                };
                return true;
            },
            oneTimeSetup: function() {
                this.subscribe('xd.authPrompted', ES5(this._onAuthPrompt, 'bind', true, this));
                this.subscribe('xd.edgeCreated', ES5(this._onEdgeCreate, 'bind', true, this));
                this.subscribe('xd.edgeRemoved', ES5(this._onEdgeRemove, 'bind', true, this));
                this.subscribe('xd.presentEdgeCommentDialog', ES5(this._handleEdgeCommentDialogPresentation, 'bind', true, this));
                this.subscribe('xd.dismissEdgeCommentDialog', ES5(this._handleEdgeCommentDialogDismissal, 'bind', true, this));
                this.subscribe('xd.hideEdgeCommentDialog', ES5(this._handleEdgeCommentDialogHide, 'bind', true, this));
                this.subscribe('xd.showEdgeCommentDialog', ES5(this._handleEdgeCommentDialogShow, 'bind', true, this));
            },
            getSize: function() {
                return {
                    width: this._getWidgetWidth(),
                    height: this._getWidgetHeight()
                };
            },
            _getWidgetHeight: function() {
                var a = this._getLayout(),
                    b = this._shouldShowFaces() ? 'show' : 'hide',
                    c = this._getBoolAttribute('send'),
                    d = 65 + (c ? 25 : 0),
                    e = {
                        standard: {
                            show: 80,
                            hide: 35
                        },
                        box_count: {
                            show: d,
                            hide: d
                        },
                        button_count: {
                            show: 21,
                            hide: 21
                        },
                        simple: {
                            show: 20,
                            hide: 20
                        }
                    };
                return e[a][b];
            },
            _getWidgetWidth: function() {
                var a = this._getLayout(),
                    b = this._getBoolAttribute('send'),
                    c = this._shouldShowFaces() ? 'show' : 'hide',
                    d = (this.getAttribute('action') === 'recommend'),
                    e = (d ? 265 : 225) + (b ? 60 : 0),
                    f = (d ? 130 : 90) + (b ? 60 : 0),
                    g = this.getAttribute('action') === 'recommend' ? 100 : 55,
                    h = this.getAttribute('action') === 'recommend' ? 90 : 50,
                    i = {
                        standard: {
                            show: 450,
                            hide: 450
                        },
                        box_count: {
                            show: g,
                            hide: g
                        },
                        button_count: {
                            show: f,
                            hide: f
                        },
                        simple: {
                            show: h,
                            hide: h
                        }
                    },
                    j = i[a][c],
                    k = this._getPxAttribute('width', j),
                    l = {
                        standard: {
                            min: e,
                            max: 900
                        },
                        box_count: {
                            min: g,
                            max: 900
                        },
                        button_count: {
                            min: f,
                            max: 900
                        },
                        simple: {
                            min: 49,
                            max: 900
                        }
                    };
                if (k < l[a].min) {
                    k = l[a].min;
                } else if (k > l[a].max) k = l[a].max;
                return k;
            },
            _getLayout: function() {
                return this._getAttributeFromList('layout', 'standard', ['standard', 'button_count', 'box_count', 'simple']);
            },
            _shouldShowFaces: function() {
                return this._getLayout() === 'standard' && this._getBoolAttribute('show-faces', true);
            },
            _handleEdgeCommentDialogPresentation: function(a) {
                if (!this.isValid()) return;
                var b = document.createElement('span');
                this._commentSlave = this._createEdgeCommentWidget(a, b);
                this.dom.appendChild(b);
                this._commentSlave.process();
                this._commentWidgetNode = b;
            },
            _createEdgeCommentWidget: function(a, b) {
                var c = {
                    commentNode: b,
                    externalUrl: a.externalURL,
                    masterFrameName: a.masterFrameName,
                    layout: this._getLayout(),
                    relativeHeightOffset: this._getHeightOffset(a),
                    relativeWidthOffset: this._getWidthOffset(a),
                    anchorTargetX: parseFloat(a['query[anchorTargetX]']) + this._rootPadding.left,
                    anchorTargetY: parseFloat(a['query[anchorTargetY]']) + this._rootPadding.top,
                    width: parseFloat(a.width),
                    height: parseFloat(a.height),
                    paddingLeft: this._rootPadding.left
                };
                return new FB.XFBML.EdgeCommentWidget(c);
            },
            _getHeightOffset: function(a) {
                return parseFloat(a['anchorGeometry[y]']) + parseFloat(a['anchorPosition[y]']) + this._rootPadding.top;
            },
            _getWidthOffset: function(a) {
                var b = parseFloat(a['anchorPosition[x]']) + this._rootPadding.left,
                    c = FB.Dom.getPosition(this.dom).x,
                    d = this.dom.offsetWidth,
                    e = FB.Dom.getViewportInfo().width,
                    f = parseFloat(a.width),
                    g = false;
                if (FB._localeIsRtl) {
                    g = f < c;
                } else if ((c + f) > e) g = true;
                if (g) b += parseFloat(a['anchorGeometry[x]']) - f;
                return b;
            },
            _getCommonEdgeCommentWidgetOpts: function(a, b) {
                return {
                    colorscheme: this._attr.colorscheme,
                    commentNode: b,
                    controllerID: a.controllerID,
                    nodeImageURL: a.nodeImageURL,
                    nodeRef: this._attr.ref,
                    nodeTitle: a.nodeTitle,
                    nodeURL: a.nodeURL,
                    nodeSummary: a.nodeSummary,
                    width: parseFloat(a.width),
                    height: parseFloat(a.height),
                    relativeHeightOffset: this._getHeightOffset(a),
                    relativeWidthOffset: this._getWidthOffset(a),
                    error: a.error,
                    siderender: a.siderender,
                    extended_social_context: a.extended_social_context,
                    anchorTargetX: parseFloat(a['query[anchorTargetX]']) + this._rootPadding.left,
                    anchorTargetY: parseFloat(a['query[anchorTargetY]']) + this._rootPadding.top
                };
            },
            _handleEdgeCommentDialogDismissal: function(a) {
                if (this._commentWidgetNode) {
                    this.dom.removeChild(this._commentWidgetNode);
                    delete this._commentWidgetNode;
                }
            },
            _handleEdgeCommentDialogHide: function() {
                if (this._commentWidgetNode) this._commentWidgetNode.style.display = "none";
            },
            _handleEdgeCommentDialogShow: function() {
                if (this._commentWidgetNode) this._commentWidgetNode.style.display = "block";
            },
            _fireEventAndInvokeHandler: function(a, b) {
                FB.Helper.fireEvent(a, this);
                FB.Helper.invokeHandler(this.getAttribute(b), this, [this._attr.href]);
            },
            _onEdgeCreate: function() {
                this._fireEventAndInvokeHandler('edge.create', 'on-create');
            },
            _onEdgeRemove: function() {
                this._fireEventAndInvokeHandler('edge.remove', 'on-remove');
            },
            _onAuthPrompt: function() {
                this._fireEventAndInvokeHandler('auth.prompt', 'on-prompt');
            }
        });
        FB.subclass('XFBML.SendButtonFormWidget', 'XFBML.EdgeCommentWidget', function(a) {
            this._base(a);
            FB.Dom.addCss(this.dom, 'fb_send_button_form_widget');
            FB.Dom.addCss(this.dom, a.colorscheme);
            FB.Dom.addCss(this.dom, (typeof a.siderender != 'undefined' && a.siderender) ? 'siderender' : '');
            this._attr.nodeImageURL = a.nodeImageURL;
            this._attr.nodeRef = a.nodeRef;
            this._attr.nodeTitle = a.nodeTitle;
            this._attr.nodeURL = a.nodeURL;
            this._attr.nodeSummary = a.nodeSummary;
            this._attr.offsetX = a.relativeWidthOffset;
            this._attr.offsetY = a.relativeHeightOffset;
            this._attr.anchorTargetX = a.anchorTargetX;
            this._attr.anchorTargetY = a.anchorTargetY;
            this._attr.channel = this.getChannelUrl();
            this._attr.controllerID = a.controllerID;
            this._attr.colorscheme = a.colorscheme;
            this._attr.error = a.error;
            this._attr.siderender = a.siderender;
            this._attr.extended_social_context = a.extended_social_context;
        }, {
            _showLoader: true,
            getUrlBits: function() {
                return {
                    name: 'send_button_form_shell',
                    params: this._attr
                };
            },
            oneTimeSetup: function() {
                this.subscribe('xd.messageSent', ES5(this._onMessageSent, 'bind', true, this));
            },
            _onMessageSent: function() {
                FB.Event.fire('message.send', this._attr.nodeURL, this);
            }
        });
        FB.subclass('XFBML.Send', 'XFBML.EdgeWidget', null, {
            setupAndValidate: function() {
                FB.Dom.addCss(this.dom, 'fb_edge_widget_with_comment');
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    font: this.getAttribute('font'),
                    colorscheme: this.getAttribute('colorscheme', 'light'),
                    href: this.getAttribute('href', window.location.href),
                    ref: this.getAttribute('ref'),
                    extended_social_context: this.getAttribute('extended_social_context', false)
                };
                this._rootPadding = {
                    left: parseFloat(FB.Dom.getStyle(this.dom, 'paddingLeft')),
                    top: parseFloat(FB.Dom.getStyle(this.dom, 'paddingTop'))
                };
                return true;
            },
            getUrlBits: function() {
                return {
                    name: 'send',
                    params: this._attr
                };
            },
            _createEdgeCommentWidget: function(a, b) {
                var c = this._getCommonEdgeCommentWidgetOpts(a, b);
                return new FB.XFBML.SendButtonFormWidget(c);
            },
            getSize: function() {
                return {
                    width: FB.XFBML.Send.Dimensions.width,
                    height: FB.XFBML.Send.Dimensions.height
                };
            }
        });
        FB.provide('XFBML.Send', {
            Dimensions: {
                width: 80,
                height: 25
            }
        });
        FB.subclass('XFBML.Like', 'XFBML.EdgeWidget', null, {
            _widgetPipeEnabled: true,
            getUrlBits: function() {
                return {
                    name: 'like',
                    params: this._attr
                };
            },
            _createEdgeCommentWidget: function(a, b) {
                if ('send' in this._attr && 'widget_type' in a && a.widget_type == 'send') {
                    var c = this._getCommonEdgeCommentWidgetOpts(a, b);
                    return new FB.XFBML.SendButtonFormWidget(c);
                } else return this._callBase("_createEdgeCommentWidget", a, b);
            },
            getIframeTitle: function() {
                return 'Like this content on Facebook.';
            }
        });
        FB.subclass('XFBML.LikeBox', 'XFBML.EdgeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function() {
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    connections: this.getAttribute('connections'),
                    css: this.getAttribute('css'),
                    height: this.getAttribute('height'),
                    id: this.getAttribute('profile-id'),
                    header: this._getBoolAttribute('header', true),
                    name: this.getAttribute('name'),
                    show_faces: this._getBoolAttribute('show-faces', true),
                    stream: this._getBoolAttribute('stream', true),
                    width: this._getPxAttribute('width', 300),
                    href: this.getAttribute('href'),
                    colorscheme: this.getAttribute('colorscheme', 'light'),
                    border_color: this.getAttribute('border_color')
                };
                if (this._getBoolAttribute('force_wall', false)) this._attr.force_wall = true;
                if (this._attr.connections === '0') {
                    this._attr.show_faces = false;
                } else if (this._attr.connections) this._attr.show_faces = true;
                if (!this._attr.id && !this._attr.name && !this._attr.href) {
                    FB.log('<fb:like-box> requires one of the "id" or "name" attributes.');
                    return false;
                }
                var a = this._attr.height;
                if (!a) if (!this._attr.show_faces && !this._attr.stream) {
                    a = 62;
                } else {
                    a = 95;
                    if (this._attr.show_faces) a += 163;
                    if (this._attr.stream) a += 300;
                    if (this._attr.header && this._attr.header !== '0') a += 32;
                }
                this._attr.height = a;
                this.subscribe('xd.likeboxLiked', ES5(this._onLiked, 'bind', true, this));
                this.subscribe('xd.likeboxUnliked', ES5(this._onUnliked, 'bind', true, this));
                return true;
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function() {
                return {
                    name: 'likebox',
                    params: this._attr
                };
            },
            _onLiked: function() {
                FB.Helper.fireEvent('edge.create', this);
            },
            _onUnliked: function() {
                FB.Helper.fireEvent('edge.remove', this);
            }
        });
        FB.subclass('XFBML.LiveStream', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function() {
                this._attr = {
                    app_id: this.getAttribute('event-app-id'),
                    href: this.getAttribute('href', window.location.href),
                    height: this._getPxAttribute('height', 500),
                    hideFriendsTab: this.getAttribute('hide-friends-tab'),
                    redesigned: this._getBoolAttribute('redesigned-stream'),
                    width: this._getPxAttribute('width', 400),
                    xid: this.getAttribute('xid', 'default'),
                    always_post_to_friends: this._getBoolAttribute('always-post-to-friends'),
                    via_url: this.getAttribute('via_url')
                };
                return true;
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function() {
                var a = this._attr.redesigned ? 'live_stream_box' : 'livefeed';
                if (this._getBoolAttribute('modern', false)) a = 'live_stream';
                return {
                    name: a,
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.LoginButton', 'XFBML.IframeWidget', null, {
            _showLoader: false,
            setupAndValidate: function() {
                var a = this.getAttribute('registration-url');
                this._attr = {
                    channel: this.getChannelUrl(),
                    colorscheme: this.getAttribute('colorscheme'),
                    max_rows: this.getAttribute('max-rows'),
                    width: this._getPxAttribute('width'),
                    show_faces: this._getBoolAttribute('show-faces'),
                    show_login_face: this._getBoolAttribute('show-login-face'),
                    size: this.getAttribute('size'),
                    login_text: this.dom.textContent || this.dom.innerText,
                    registration_url: a ? FB.URI.resolve(a) : null,
                    one_click: this.getAttribute('one-click'),
                    scope: this.getAttribute('scope') || this.getAttribute('perms'),
                    auto_logout_link: this._getBoolAttribute('auto-logout-link')
                };
                this.clear();
                var b = this.getAttribute('on-login');
                if (b) this.subscribe('xd.refreshLoginStatus', ES5(function() {
                    FB.getLoginStatus(ES5(function(c) {
                        FB.Helper.invokeHandler(b, this, [c]);
                    }, 'bind', true, this));
                }, 'bind', true, this));
                return true;
            },
            oneTimeSetup: function() {
                var a = FB._userStatus;
                FB.Event.subscribe('auth.statusChange', ES5(function(b) {
                    if (a == 'connected' || b.status == 'connected') this.process(true);
                    a = b.status;
                }, 'bind', true, this));
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: 94
                };
            },
            getUrlBits: function() {
                return {
                    name: 'login_button',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.Name', 'XFBML.Element', null, {
            process: function() {
                FB.copy(this, {
                    _uid: this.getAttribute('uid'),
                    _firstnameonly: this._getBoolAttribute('first-name-only'),
                    _lastnameonly: this._getBoolAttribute('last-name-only'),
                    _possessive: this._getBoolAttribute('possessive'),
                    _reflexive: this._getBoolAttribute('reflexive'),
                    _objective: this._getBoolAttribute('objective'),
                    _linked: this._getBoolAttribute('linked', true),
                    _subjectId: this.getAttribute('subject-id')
                });
                if (!this._uid) {
                    FB.log('"uid" is a required attribute for <fb:name>');
                    this.fire('render');
                    return;
                }
                var a = [];
                if (this._firstnameonly) {
                    a.push('first_name');
                } else if (this._lastnameonly) {
                    a.push('last_name');
                } else a.push('name');
                if (this._subjectId) {
                    a.push('sex');
                    if (this._subjectId == FB.Helper.getLoggedInUser()) this._reflexive = true;
                }
                var b;
                FB.Event.monitor('auth.statusChange', ES5(this, 'bind', true, function() {
                    if (!this.isValid()) {
                        this.fire('render');
                        return true;
                    }
                    if (!this._uid || this._uid == 'loggedinuser') this._uid = FB.Helper.getLoggedInUser();
                    if (!this._uid) return;
                    if (FB.Helper.isUser(this._uid)) {
                        b = FB.Data._selectByIndex(a, 'user', 'uid', this._uid);
                    } else b = FB.Data._selectByIndex(['name', 'id'], 'profile', 'id', this._uid);
                    b.wait(ES5(this, 'bind', true, function(c) {
                        if (this._subjectId == this._uid) {
                            this._renderPronoun(c[0]);
                        } else this._renderOther(c[0]);
                        this.fire('render');
                    }));
                }));
            },
            _renderPronoun: function(a) {
                var b = '',
                    c = this._objective;
                if (this._subjectId) {
                    c = true;
                    if (this._subjectId === this._uid) this._reflexive = true;
                }
                if (this._uid == FB.Connect.get_loggedInUser() && this._getBoolAttribute('use-you', true)) {
                    if (this._possessive) {
                        if (this._reflexive) {
                            b = 'your own';
                        } else b = 'your';
                    } else if (this._reflexive) {
                        b = 'yourself';
                    } else b = 'you';
                } else switch (a.sex) {
                case 'male':
                    if (this._possessive) {
                        b = this._reflexive ? 'his own' : 'his';
                    } else if (this._reflexive) {
                        b = 'himself';
                    } else if (c) {
                        b = 'him';
                    } else b = 'he';
                    break;
                case 'female':
                    if (this._possessive) {
                        b = this._reflexive ? 'her own' : 'her';
                    } else if (this._reflexive) {
                        b = 'herself';
                    } else if (c) {
                        b = 'her';
                    } else b = 'she';
                    break;
                default:
                    if (this._getBoolAttribute('use-they', true)) {
                        if (this._possessive) {
                            if (this._reflexive) {
                                b = 'their own';
                            } else b = 'their';
                        } else if (this._reflexive) {
                            b = 'themselves';
                        } else if (c) {
                            b = 'them';
                        } else b = 'they';
                    } else if (this._possessive) {
                        if (this._reflexive) {
                            b = 'his/her own';
                        } else b = 'his/her';
                    } else if (this._reflexive) {
                        b = 'himself/herself';
                    } else if (c) {
                        b = 'him/her';
                    } else b = 'he/she';
                    break;
                }
                if (this._getBoolAttribute('capitalize', false)) b = FB.Helper.upperCaseFirstChar(b);
                this.dom.innerHTML = b;
            },
            _renderOther: function(a) {
                var b = '',
                    c = '';
                if (this._uid == FB.Helper.getLoggedInUser() && this._getBoolAttribute('use-you', true)) {
                    if (this._reflexive) {
                        if (this._possessive) {
                            b = 'your own';
                        } else b = 'yourself';
                    } else if (this._possessive) {
                        b = 'your';
                    } else b = 'you';
                } else if (a) {
                    if (null === a.first_name) a.first_name = '';
                    if (null === a.last_name) a.last_name = '';
                    if (this._firstnameonly && a.first_name !== undefined) {
                        b = FB.String.escapeHTML(a.first_name);
                    } else if (this._lastnameonly && a.last_name !== undefined) b = FB.String.escapeHTML(a.last_name);
                    if (!b) b = FB.String.escapeHTML(a.name);
                    if (b !== '' && this._possessive) b += '\'s';
                }
                if (!b) b = FB.String.escapeHTML(this.getAttribute('if-cant-see', 'Facebook User'));
                if (b) {
                    if (this._getBoolAttribute('capitalize', false)) b = FB.Helper.upperCaseFirstChar(b);
                    if (a && this._linked) {
                        c = FB.Helper.getProfileLink(a, b, this.getAttribute('href', null));
                    } else c = b;
                }
                this.dom.innerHTML = c;
            }
        });
        FB.subclass('XFBML.PageEvents', 'XFBML.IframeWidget', null, {
            setupAndValidate: function() {
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    font: this.getAttribute('font'),
                    colorscheme: this.getAttribute('colorscheme'),
                    href: this.getAttribute('href')
                };
                return true;
            },
            getUrlBits: function() {
                return {
                    name: 'page_events',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.ProfilePic', 'XFBML.Element', null, {
            process: function() {
                var a = this.getAttribute('size', 'thumb'),
                    b = FB.XFBML.ProfilePic._sizeToPicFieldMap[a],
                    c = this._getPxAttribute('width'),
                    d = this._getPxAttribute('height'),
                    e = this.dom.style,
                    f = this.getAttribute('uid');
                if (this._getBoolAttribute('facebook-logo')) b += '_with_logo';
                if (c) {
                    c = c + 'px';
                    e.width = c;
                }
                if (d) {
                    d = d + 'px';
                    e.height = d;
                }
                var g = ES5(this, 'bind', true, function(h) {
                    var i = h ? h[0] : null,
                        j = i ? i[b] : null;
                    if (!j) j = FB.getDomain('cdn') + FB.XFBML.ProfilePic._defPicMap[b];
                    var k = ((c ? 'width:' + c + ';' : '') + (d ? 'height:' + c + ';' : '')),
                        l = FB.String.format('<img src="{0}" alt="{1}" title="{1}" style="{2}" class="{3}" />', j, i ? FB.String.escapeHTML(i.name) : '', k, this.dom.className);
                    if (this._getBoolAttribute('linked', true)) l = FB.Helper.getProfileLink(i, l, this.getAttribute('href', null));
                    this.dom.innerHTML = l;
                    FB.Dom.addCss(this.dom, 'fb_profile_pic_rendered');
                    this.fire('render');
                });
                FB.Event.monitor('auth.statusChange', ES5(this, 'bind', true, function() {
                    if (!this.isValid()) {
                        this.fire('render');
                        return true;
                    }
                    if (this.getAttribute('uid', null) == 'loggedinuser') f = FB.Helper.getLoggedInUser();
                    if (FB._userStatus && f) {
                        FB.Data._selectByIndex(['name', b], FB.Helper.isUser(f) ? 'user' : 'profile', FB.Helper.isUser(f) ? 'uid' : 'id', f).wait(g);
                    } else g();
                }));
            }
        });
        FB.provide('XFBML.ProfilePic', {
            _defPicMap: {
                pic: 'pics/s_silhouette.jpg',
                pic_big: 'pics/d_silhouette.gif',
                pic_big_with_logo: 'pics/d_silhouette_logo.gif',
                pic_small: 'pics/t_silhouette.jpg',
                pic_small_with_logo: 'pics/t_silhouette_logo.gif',
                pic_square: 'pics/q_silhouette.gif',
                pic_square_with_logo: 'pics/q_silhouette_logo.gif',
                pic_with_logo: 'pics/s_silhouette_logo.gif'
            },
            _sizeToPicFieldMap: {
                n: 'pic_big',
                normal: 'pic_big',
                q: 'pic_square',
                s: 'pic',
                small: 'pic',
                square: 'pic_square',
                t: 'pic_small',
                thumb: 'pic_small'
            }
        });
        FB.subclass('XFBML.Recommendations', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            _refreshOnAuthChange: true,
            setupAndValidate: function() {
                this._attr = {
                    border_color: this.getAttribute('border-color'),
                    colorscheme: this.getAttribute('color-scheme'),
                    filter: this.getAttribute('filter'),
                    font: this.getAttribute('font'),
                    action: this.getAttribute('action'),
                    linktarget: this.getAttribute('linktarget', '_blank'),
                    max_age: this.getAttribute('max_age'),
                    header: this._getBoolAttribute('header'),
                    height: this._getPxAttribute('height', 300),
                    site: this.getAttribute('site', location.hostname),
                    width: this._getPxAttribute('width', 300)
                };
                return true;
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function() {
                return {
                    name: 'recommendations',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.RecommendationsBar', 'XFBML.IframeWidget', null, {
            getUrlBits: function() {
                return {
                    name: 'recommendations_bar',
                    params: this._attr
                };
            },
            setupAndValidate: function() {
                function a(j, k) {
                    var l = 0,
                        m = null;

                    function n() {
                        k();
                        m = null;
                        l = (new Date()).getTime();
                    }
                    return function() {
                        if (!m) {
                            var o = (new Date()).getTime();
                            if (o - l < j) {
                                m = window.setTimeout(n, j - (o - l));
                            } else n();
                        }
                        return true;
                    };
                }
                function b(j) {
                    if (j.match(/^\d+(?:\.\d+)?%$/)) {
                        var k = Math.min(Math.max(parseInt(j, 10), 0), 100);
                        j = k / 100;
                    } else if (j != 'manual' && j != 'onvisible') j = 'onvisible';
                    return j;
                }
                function c(j) {
                    return Math.max(parseInt(j, 10) || 30, 10);
                }
                function d(j) {
                    if (j == 'left' || j == 'right') return j;
                    return FB._localeIsRtl ? 'left' : 'right';
                }
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    font: this.getAttribute('font'),
                    colorscheme: this.getAttribute('colorscheme'),
                    href: FB.URI.resolve(this.getAttribute('href')),
                    side: d(this.getAttribute('side')),
                    site: this.getAttribute('site'),
                    action: this.getAttribute('action'),
                    ref: this.getAttribute('ref'),
                    max_age: this.getAttribute('max_age'),
                    trigger: b(this.getAttribute('trigger', '')),
                    read_time: c(this.getAttribute('read_time')),
                    num_recommendations: parseInt(this.getAttribute('num_recommendations'), 10) || 2
                };
                FB._inPlugin = true;
                this._showLoader = false;
                this.subscribe('iframe.onload', ES5(function() {
                    var j = this.dom.children[0];
                    j.className = 'fbpluginrecommendationsbar' + this._attr.side;
                }, 'bind', true, this));
                var e = ES5(function() {
                    FB.Event.unlisten(window, 'scroll', e);
                    FB.Event.unlisten(document.documentElement, 'click', e);
                    FB.Event.unlisten(document.documentElement, 'mousemove', e);
                    window.setTimeout(ES5(this.arbiterInform, 'bind', true, this, 'platform/plugins/recommendations_bar/action', null, FB.Arbiter.BEHAVIOR_STATE), this._attr.read_time * 1000);
                    return true;
                }, 'bind', true, this);
                FB.Event.listen(window, 'scroll', e);
                FB.Event.listen(document.documentElement, 'click', e);
                FB.Event.listen(document.documentElement, 'mousemove', e);
                if (this._attr.trigger == "manual") {
                    var f = ES5(function(j) {
                        if (j == this._attr.href) {
                            FB.Event.unsubscribe('xfbml.recommendationsbar.read', f);
                            this.arbiterInform('platform/plugins/recommendations_bar/trigger', null, FB.Arbiter.BEHAVIOR_STATE);
                        }
                        return true;
                    }, 'bind', true, this);
                    FB.Event.subscribe('xfbml.recommendationsbar.read', f);
                } else {
                    var g = a(500, ES5(function() {
                        if (this.calculateVisibility()) {
                            FB.Event.unlisten(window, 'scroll', g);
                            FB.Event.unlisten(window, 'resize', g);
                            this.arbiterInform('platform/plugins/recommendations_bar/trigger', null, FB.Arbiter.BEHAVIOR_STATE);
                        }
                        return true;
                    }, 'bind', true, this));
                    FB.Event.listen(window, 'scroll', g);
                    FB.Event.listen(window, 'resize', g);
                    g();
                }
                this.visible = false;
                var h = a(500, ES5(function() {
                    if (!this.visible && this.calculateVisibility()) {
                        this.visible = true;
                        this.arbiterInform('platform/plugins/recommendations_bar/visible');
                    } else if (this.visible && !this.calculateVisibility()) {
                        this.visible = false;
                        this.arbiterInform('platform/plugins/recommendations_bar/invisible');
                    }
                    return true;
                }, 'bind', true, this));
                FB.Event.listen(window, 'scroll', h);
                FB.Event.listen(window, 'resize', h);
                h();
                this.focused = true;
                var i = ES5(function() {
                    this.focused = !this.focused;
                    return true;
                }, 'bind', true, this);
                FB.Event.listen(window, 'blur', i);
                FB.Event.listen(window, 'focus', i);
                this.resize_running = false;
                this.animate = false;
                this.subscribe('xd.signal_animation', ES5(function() {
                    this.animate = true;
                }, 'bind', true, this));
                return true;
            },
            getSize: function() {
                return {
                    height: 25,
                    width: (this._attr.action == 'recommend' ? 140 : 96)
                };
            },
            calculateVisibility: function() {
                var a = document.documentElement.clientHeight;
                if (!this.focused && window.console && window.console.firebug) return this.visible;
                switch (this._attr.trigger) {
                case "manual":
                    return false;
                case "onvisible":
                    var b = this.dom.getBoundingClientRect().top;
                    return b <= a;
                default:
                    var c = window.pageYOffset || document.body.scrollTop,
                        d = document.documentElement.scrollHeight;
                    return (c + a) / d >= this._attr.trigger;
                }
            }
        });
        FB.XFBML.RecommendationsBar.markRead = function(a) {
            FB.Event.fire('xfbml.recommendationsbar.read', a || window.location.href);
        };
        FB.subclass('XFBML.Registration', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'immediate',
            _baseHeight: 167,
            _fieldHeight: 28,
            _skinnyWidth: 520,
            _skinnyBaseHeight: 173,
            _skinnyFieldHeight: 52,
            setupAndValidate: function() {
                this._attr = {
                    action: this.getAttribute('action'),
                    border_color: this.getAttribute('border-color'),
                    channel_url: this.getChannelUrl(),
                    client_id: FB._apiKey,
                    fb_only: this._getBoolAttribute('fb-only', false),
                    fb_register: this._getBoolAttribute('fb-register', false),
                    fields: this.getAttribute('fields'),
                    height: this._getPxAttribute('height'),
                    redirect_uri: this.getAttribute('redirect-uri', window.location.href),
                    no_footer: this._getBoolAttribute('no-footer'),
                    no_header: this._getBoolAttribute('no-header'),
                    onvalidate: this.getAttribute('onvalidate'),
                    width: this._getPxAttribute('width', 600),
                    target: this.getAttribute('target')
                };
                if (this._attr.onvalidate) this.subscribe('xd.validate', ES5(this, 'bind', true, function(a) {
                    var b = ES5('JSON', 'parse', false, a.value),
                        c = ES5(function(e) {
                            this.arbiterInform('Registration.Validation', {
                                errors: e,
                                id: a.id
                            });
                        }, 'bind', true, this),
                        d = FB.Helper.executeFunctionByName(this._attr.onvalidate, b, c);
                    if (d) c(d);
                }));
                this.subscribe('xd.authLogin', ES5(this._onAuthLogin, 'bind', true, this));
                this.subscribe('xd.authLogout', ES5(this._onAuthLogout, 'bind', true, this));
                return true;
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: this._getHeight()
                };
            },
            _getHeight: function() {
                if (this._attr.height) return this._attr.height;
                var a;
                if (!this._attr.fields) {
                    a = ['name'];
                } else try {
                    a = ES5('JSON', 'parse', false, this._attr.fields);
                } catch (b) {
                    a = this._attr.fields.split(/,/);
                }
                if (this._attr.width < this._skinnyWidth) {
                    return this._skinnyBaseHeight + a.length * this._skinnyFieldHeight;
                } else return this._baseHeight + a.length * this._fieldHeight;
            },
            getUrlBits: function() {
                return {
                    name: 'registration',
                    params: this._attr
                };
            },
            getDefaultWebDomain: function() {
                return 'https_www';
            },
            _onAuthLogin: function() {
                if (!FB.getAuthResponse()) FB.getLoginStatus();
                FB.Helper.fireEvent('auth.login', this);
            },
            _onAuthLogout: function() {
                if (!FB.getAuthResponse()) FB.getLoginStatus();
                FB.Helper.fireEvent('auth.logout', this);
            }
        });
        FB.subclass('XFBML.ShareButton', 'XFBML.IframeWidget', null, {
            setupAndValidate: function() {
                this._attr = {
                    channel: this.getChannelUrl(),
                    href: FB.URI.resolve(this.getAttribute('href')),
                    type: this.getAttribute('type')
                };
                return true;
            },
            getUrlBits: function() {
                return {
                    name: 'share_button',
                    params: this._attr
                };
            },
            getSize: function() {
                return {
                    height: 60,
                    width: 200
                };
            }
        });
        FB.subclass('XFBML.SocialContext', 'XFBML.IframeWidget', null, {
            setupAndValidate: function() {
                var a = this.getAttribute('size', 'small');
                this._attr = {
                    channel: this.getChannelUrl(),
                    width: this._getPxAttribute('width', 400),
                    height: this._getPxAttribute('height', 100),
                    ref: this.getAttribute('ref'),
                    size: this.getAttribute('size'),
                    keywords: this.getAttribute('keywords'),
                    urls: this.getAttribute('urls'),
                    object_id: this.getAttribute('object_id')
                };
                this.subscribe('xd.social_context_stats', ES5(this._bubbleSocialContextStats, 'bind', true, this));
                return true;
            },
            _bubbleSocialContextStats: function(a) {
                var b = {
                    pluginID: this.getAttribute('plugin-id'),
                    socialContextPageIDs: ES5('JSON', 'parse', false, a.social_context_page_ids)
                };
                FB.Event.fire('xfbml.social_context_stats', b);
            },
            getSize: function() {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function() {
                return {
                    name: 'social_context',
                    params: this._attr
                };
            }
        });
        void(0);;
    }).call(FB);
})()


FB.provide("", {
    "_domain": {
        "api": "https:\/\/api.facebook.com\/",
        "api_read": "https:\/\/api-read.facebook.com\/",
        "cdn": "https:\/\/s-static.ak.fbcdn.net\/",
        "cdn_foreign": "https:\/\/connect.facebook.net\/",
        "graph": "https:\/\/graph.facebook.com\/",
        "https_cdn": "https:\/\/s-static.ak.fbcdn.net\/",
        "https_staticfb": "https:\/\/s-static.ak.facebook.com\/",
        "https_www": "https:\/\/www.facebook.com\/",
        "staticfb": "http:\/\/static.ak.facebook.com\/",
        "www": "https:\/\/www.facebook.com\/",
        "m": "https:\/\/m.facebook.com\/",
        "https_m": "https:\/\/m.facebook.com\/"
    },
    "_locale": "en_US",
    "_localeIsRtl": false
}, true);
FB.provide("Arbiter", {
    "_canvasProxyUrl": "connect\/canvas_proxy.php?version=9"
}, true);
FB.provide('Auth', {
    "_xdStorePath": "xd_localstorage\/v2"
}, true);
FB.provide("Canvas.Prefetcher", {
    "_appIdsBlacklist": [144959615576466],
    "_sampleRate": 500
}, true);
FB.provide('', {
    "initSitevars": {
        "parseXFBMLBeforeDomReady": false,
        "computeContentSizeVersion": 0,
        "enableMobile": 1,
        "enableMobileComments": 1,
        "forceSecureXdProxy": 1,
        "useAsync": 0,
        "rpc": 1,
        "iframePermissions": {
            "read_stream": false,
            "manage_mailbox": false,
            "manage_friendlists": false,
            "read_mailbox": false,
            "publish_checkins": true,
            "status_update": true,
            "photo_upload": true,
            "video_upload": true,
            "sms": false,
            "create_event": true,
            "rsvp_event": true,
            "offline_access": true,
            "email": true,
            "xmpp_login": false,
            "create_note": true,
            "share_item": true,
            "export_stream": false,
            "publish_stream": true,
            "publish_likes": true,
            "ads_management": false,
            "contact_email": true,
            "access_private_data": false,
            "read_insights": false,
            "read_requests": false,
            "read_friendlists": true,
            "manage_pages": false,
            "physical_login": false,
            "manage_groups": false,
            "read_deals": false
        }
    },
    "widgetPipeEnabledApps": {
        "111476658864976": 1,
        "cca6477272fc5cb805f85a84f20fca1d": 1,
        "179150165472010": 1
    },
    "widgetPipeTagCountThreshold": 4
});
FB.provide("TemplateData", {
    "_enabled": 0
}, true);
FB.provide("TemplateUI", {
    "_version": 19
}, true);
FB.provide("XFBML.ConnectBar", {
    "imgs": {
        "buttonUrl": "rsrc.php\/v2\/yY\/r\/h_Y6u1wrZPW.png",
        "missingProfileUrl": "rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif"
    }
}, true);
FB.provide("XFBML.ProfilePic", {
    "_defPicMap": {
        "pic": "rsrc.php\/v1\/yh\/r\/C5yt7Cqf3zU.jpg",
        "pic_big": "rsrc.php\/v2\/yL\/r\/HsTZSDw4avx.gif",
        "pic_big_with_logo": "rsrc.php\/v2\/y5\/r\/SRDCaeCL7hM.gif",
        "pic_small": "rsrc.php\/v1\/yi\/r\/odA9sNLrE86.jpg",
        "pic_small_with_logo": "rsrc.php\/v2\/yD\/r\/k1xiRXKnlGd.gif",
        "pic_square": "rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif",
        "pic_square_with_logo": "rsrc.php\/v2\/yX\/r\/9dYJBPDHXwZ.gif",
        "pic_with_logo": "rsrc.php\/v2\/yu\/r\/fPPR9f2FJ3t.gif"
    }
}, true);
if (FB.Dom && FB.Dom.addCssRules) {
    FB.Dom.addCssRules(".fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_invisible{display:none}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\\9;right:7px\\9}\n.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}\n.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}\n.fb_dialog_close_icon:hover{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_close_icon:active{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n.fb_dialog_top_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}\n.fb_dialog_top_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}\n.fb_dialog_bottom_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n.fb_dialog_bottom_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100\u0025}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100\u0025;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}\n.fb_dialog_content .dialog_title > span{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yd\/r\/Cou7n-nqK52.gif)\nno-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}\nbody.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100\u0025\n}\n.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/ya\/r\/3rhSv5V8j3o.gif)\nwhite no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}\n.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}\n#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}\n#fb-root #fb_dialog_ipad_overlay.hidden{display:none}\n.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}\n.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}\n.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025\n}\n.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#4966A6),\ncolor-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,\nrgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}\n.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}\n.fb_dialog_content .dialog_content{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}\n.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}\n#fb_dialog_loader_close{float:left}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}\n.fb_iframe_widget iframe{position:absolute}\n.fb_iframe_widget_lift{z-index:1}\n.fb_iframe_widget span{position:relative;display:inline-block;vertical-align:text-bottom;text-align:justify}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_fluid{display:inline}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_button_simple,\n.fb_button_simple_rtl{background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yH\/r\/eIpbnVKI9lR.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}\n.fb_button_simple_rtl{background-position:right 0}\n.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}\n.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}\na.fb_button_simple:hover .fb_button_text,\na.fb_button_simple_rtl:hover .fb_button_text,\n.fb_button_simple:hover .fb_button_text,\n.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}\n.fb_button,\n.fb_button_rtl{background:#29447e url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/FGFbc80dUKj.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}\n.fb_button .fb_button_text,\n.fb_button_rtl .fb_button_text{background:#5f78ab url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/FGFbc80dUKj.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:\"lucida grande\",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}\na.fb_button,\na.fb_button_rtl,\n.fb_button,\n.fb_button_rtl{text-decoration:none}\na.fb_button:active .fb_button_text,\na.fb_button_rtl:active .fb_button_text,\n.fb_button:active .fb_button_text,\n.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}\n.fb_button_xlarge,\n.fb_button_xlarge_rtl{background-position:left -60px;font-size:24px;line-height:30px}\n.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}\na.fb_button_xlarge:active{background-position:left -99px}\n.fb_button_xlarge_rtl{background-position:right -268px}\n.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}\na.fb_button_xlarge_rtl:active{background-position:right -307px}\n.fb_button_large,\n.fb_button_large_rtl{background-position:left -138px;font-size:13px;line-height:16px}\n.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}\na.fb_button_large:active{background-position:left -163px}\n.fb_button_large_rtl{background-position:right -346px}\n.fb_button_large_rtl .fb_button_text{margin-right:25px}\na.fb_button_large_rtl:active{background-position:right -371px}\n.fb_button_medium,\n.fb_button_medium_rtl{background-position:left -188px;font-size:11px;line-height:14px}\na.fb_button_medium:active{background-position:left -210px}\n.fb_button_medium_rtl{background-position:right -396px}\n.fb_button_text_rtl,\n.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}\na.fb_button_medium_rtl:active{background-position:right -418px}\n.fb_button_small,\n.fb_button_small_rtl{background-position:left -232px;font-size:10px;line-height:10px}\n.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}\na.fb_button_small:active,\n.fb_button_small:active{background-position:left -250px}\n.fb_button_small_rtl{background-position:right -440px}\n.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}\na.fb_button_small_rtl:active{background-position:right -458px}\n.fb_share_count_wrapper{position:relative;float:left}\n.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;text-align:center}\n.fb_share_count_inner{background:#e8ebf2;display:block}\n.fb_share_count_right{margin-left:-1px;display:inline-block}\n.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size:10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}\n.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size:22px;border:solid 1px #b0b9ec}\n.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yU\/r\/bSOHtKbCGYI.png)}\n.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yX\/r\/i_oIVTKMYsL.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}\n.fb_share_no_count{display:none}\n.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size:10px}\n.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size:11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}\n.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size:13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}\n.fb_share_count_hidden .fb_share_count_nub_top,\n.fb_share_count_hidden .fb_share_count_top,\n.fb_share_count_hidden .fb_share_count_nub_right,\n.fb_share_count_hidden .fb_share_count_right{visibility:hidden}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}\n.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50\u0025 50\u0025;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender\n.FB_Loader{margin-top:0}\n.fbpluginrecommendationsbarleft,\n.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarleft{left:10px}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarright{right:10px}\n", ["fb.css.base", "fb.css.dialog", "fb.css.iframewidget", "fb.css.button", "fb.css.sharebutton", "fb.css.connectbarwidget", "fb.css.edgecommentwidget", "fb.css.sendbuttonformwidget", "fb.css.plugin.recommendationsbar"]);
}
