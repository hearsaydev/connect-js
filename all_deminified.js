/*1353081428,180679471,JIT Construction: v673046,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
    window.FB || (function(window) {
        var self = window,
            document = window.document;
        var __DEV__ = 0;

        function emptyFunction() {};


        var require, __d;
        (function(a) {
            var b = {},
                c = {},
                d = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
            require = function(e, f) {
                if (c.hasOwnProperty(e)) return c[e];
                if (!b.hasOwnProperty(e)) {
                    if (f) return null;
                    throw new Error('Module ' + e + ' has not been defined');
                }
                var g = b[e],
                    h = g.deps,
                    i = h.length,
                    j, k = [];
                for (var l = 0; l < i; l++) {
                    switch (h[l]) {
                    case 'module':
                        j = g;
                        break;
                    case 'exports':
                        j = g.exports;
                        break;
                    case 'global':
                        j = a;
                        break;
                    case 'require':
                        j = require;
                        break;
                    case 'requireDynamic':
                        j = require;
                        break;
                    case 'requireLazy':
                        j = null;
                        break;
                    default:
                        j = require(h[l]);
                    }
                    k.push(j);
                }
                g.factory.apply(a, k);
                c[e] = g.exports;
                return g.exports;
            };
            __d = function(e, f, g, h) {
                if (typeof g === 'function') {
                    b[e] = {
                        factory: g,
                        deps: d.concat(f),
                        exports: {}
                    };
                    if (h === 3) require(e);
                } else c[e] = g;
            };
        })(this);

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
                 *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
                 */
                __d("JSON3", [], function(a, b, c, d, e, f) {
                    (function() {
                        var g = {}.toString,
                            h, i, j, k = e.exports = {},
                            l = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',
                            m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba = new Date(-3509827334573292),
                            ca, da, ea;
                        try {
                            ba = ba.getUTCFullYear() == -109252 && ba.getUTCMonth() === 0 && ba.getUTCDate() == 1 && ba.getUTCHours() == 10 && ba.getUTCMinutes() == 37 && ba.getUTCSeconds() == 6 && ba.getUTCMilliseconds() == 708;
                        } catch (fa) {}
                        if (!ba) {
                            ca = Math.floor;
                            da = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                            ea = function(ga, ha) {
                                return da[ha] + 365 * (ga - 1970) + ca((ga - 1969 + (ha = +(ha > 1))) / 4) - ca((ga - 1901 + ha) / 100) + ca((ga - 1601 + ha) / 400);
                            };
                        }
                        if (typeof JSON == "object" && JSON) {
                            k.stringify = JSON.stringify;
                            k.parse = JSON.parse;
                        }
                        if ((m = typeof k.stringify == "function" && !ea)) {
                            (ba = function() {
                                return 1;
                            }).toJSON = ba;
                            try {
                                m = k.stringify(0) === "0" && k.stringify(new Number()) === "0" && k.stringify(new String()) == '""' && k.stringify(g) === j && k.stringify(j) === j && k.stringify() === j && k.stringify(ba) === "1" && k.stringify([ba]) == "[1]" && k.stringify([j]) == "[null]" && k.stringify(null) == "null" && k.stringify([j, g, null]) == "[null,null,null]" && k.stringify({
                                    result: [ba, true, false, null, "\0\b\n\f\r\t"]
                                }) == l && k.stringify(null, ba) === "1" && k.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && k.stringify(new Date(-8.64e+15)) == '"-271821-04-20T00:00:00.000Z"' && k.stringify(new Date(8.64e+15)) == '"+275760-09-13T00:00:00.000Z"' && k.stringify(new Date(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && k.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                            } catch (fa) {
                                m = false;
                            }
                        }
                        if (typeof k.parse == "function") try {
                            if (k.parse("0") === 0 && !k.parse(false)) {
                                ba = k.parse(l);
                                if ((r = ba.A.length == 5 && ba.A[0] == 1)) {
                                    try {
                                        r = !k.parse('"\t"');
                                    } catch (fa) {}
                                    if (r) try {
                                        r = k.parse("01") != 1;
                                    } catch (fa) {}
                                }
                            }
                        } catch (fa) {
                            r = false;
                        }
                        ba = l = null;
                        if (!m || !r) {
                            if (!(h = {}.hasOwnProperty)) h = function(ga) {
                                var ha = {},
                                    ia;
                                if ((ha.__proto__ = null, ha.__proto__ = {
                                    toString: 1
                                }, ha).toString != g) {
                                    h = function(ja) {
                                        var ka = this.__proto__,
                                            la = ja in (this.__proto__ = null, this);
                                        this.__proto__ = ka;
                                        return la;
                                    };
                                } else {
                                    ia = ha.constructor;
                                    h = function(ja) {
                                        var ka = (this.constructor || ia).prototype;
                                        return ja in this && !(ja in ka && this[ja] === ka[ja]);
                                    };
                                }
                                ha = null;
                                return h.call(this, ga);
                            };
                            i = function(ga, ha) {
                                var ia = 0,
                                    ja, ka, la, ma;
                                (ja = function() {
                                    this.valueOf = 0;
                                }).prototype.valueOf = 0;
                                ka = new ja();
                                for (la in ka) if (h.call(ka, la)) ia++;
                                ja = ka = null;
                                if (!ia) {
                                    ka = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                    ma = function(na, oa) {
                                        var pa = g.call(na) == "[object Function]",
                                            qa, ra;
                                        for (qa in na) if (!(pa && qa == "prototype") && h.call(na, qa)) oa(qa);
                                        for (ra = ka.length; qa = ka[--ra]; h.call(na, qa) && oa(qa));
                                    };
                                } else if (ia == 2) {
                                    ma = function(na, oa) {
                                        var pa = {},
                                            qa = g.call(na) == "[object Function]",
                                            ra;
                                        for (ra in na) if (!(qa && ra == "prototype") && !h.call(pa, ra) && (pa[ra] = 1) && h.call(na, ra)) oa(ra);
                                    };
                                } else ma = function(na, oa) {
                                    var pa = g.call(na) == "[object Function]",
                                        qa, ra;
                                    for (qa in na) if (!(pa && qa == "prototype") && h.call(na, qa) && !(ra = qa === "constructor")) oa(qa);
                                    if (ra || h.call(na, (qa = "constructor"))) oa(qa);
                                };
                                return ma(ga, ha);
                            };
                            if (!m) {
                                n = {
                                    "\\": "\\\\",
                                    '"': '\\"',
                                    "\b": "\\b",
                                    "\f": "\\f",
                                    "\n": "\\n",
                                    "\r": "\\r",
                                    "\t": "\\t"
                                };
                                o = function(ga, ha) {
                                    return ("000000" + (ha || 0)).slice(-ga);
                                };
                                p = function(ga) {
                                    var ha = '"',
                                        ia = 0,
                                        ja;
                                    for (; ja = ga.charAt(ia); ia++) ha += '\\"\b\f\n\r\t'.indexOf(ja) > -1 ? n[ja] : ja < " " ? "\\u00" + o(2, ja.charCodeAt(0).toString(16)) : ja;
                                    return ha + '"';
                                };
                                q = function(ga, ha, ia, ja, ka, la, ma) {
                                    var na = ha[ga],
                                        oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb;
                                    if (typeof na == "object" && na) {
                                        oa = g.call(na);
                                        if (oa == "[object Date]" && !h.call(na, "toJSON")) {
                                            if (na > -1 / 0 && na < 1 / 0) {
                                                if (ea) {
                                                    ra = ca(na / 86400000);
                                                    for (pa = ca(ra / 365.2425) + 1970 - 1; ea(pa + 1, 0) <= ra; pa++);
                                                    for (qa = ca((ra - ea(pa, 0)) / 30.42); ea(pa, qa + 1) <= ra; qa++);
                                                    ra = 1 + ra - ea(pa, qa);
                                                    sa = (na % 86400000 + 86400000) % 86400000;
                                                    ta = ca(sa / 3600000) % 24;
                                                    ua = ca(sa / 60000) % 60;
                                                    va = ca(sa / 1000) % 60;
                                                    wa = sa % 1000;
                                                } else {
                                                    pa = na.getUTCFullYear();
                                                    qa = na.getUTCMonth();
                                                    ra = na.getUTCDate();
                                                    ta = na.getUTCHours();
                                                    ua = na.getUTCMinutes();
                                                    va = na.getUTCSeconds();
                                                    wa = na.getUTCMilliseconds();
                                                }
                                                na = (pa <= 0 || pa >= 10000 ? (pa < 0 ? "-" : "+") + o(6, pa < 0 ? -pa : pa) : o(4, pa)) + "-" + o(2, qa + 1) + "-" + o(2, ra) + "T" + o(2, ta) + ":" + o(2, ua) + ":" + o(2, va) + "." + o(3, wa) + "Z";
                                            } else na = null;
                                        } else if (typeof na.toJSON == "function" && ((oa != "[object Number]" && oa != "[object String]" && oa != "[object Array]") || h.call(na, "toJSON"))) na = na.toJSON(ga);
                                    }
                                    if (ia) na = ia.call(ha, ga, na);
                                    if (na === null) return "null";
                                    oa = g.call(na);
                                    if (oa == "[object Boolean]") {
                                        return "" + na;
                                    } else if (oa == "[object Number]") {
                                        return na > -1 / 0 && na < 1 / 0 ? "" + na : "null";
                                    } else if (oa == "[object String]") return p(na);
                                    if (typeof na == "object") {
                                        for (ab = ma.length; ab--;) if (ma[ab] === na) throw TypeError();
                                        ma.push(na);
                                        xa = [];
                                        bb = la;
                                        la += ka;
                                        if (oa == "[object Array]") {
                                            for (za = 0, ab = na.length; za < ab; cb || (cb = true), za++) {
                                                ya = q(za, na, ia, ja, ka, la, ma);
                                                xa.push(ya === j ? "null" : ya);
                                            }
                                            return cb ? (ka ? "[\n" + la + xa.join(",\n" + la) + "\n" + bb + "]" : ("[" + xa.join(",") + "]")) : "[]";
                                        } else {
                                            i(ja || na, function(db) {
                                                var eb = q(db, na, ia, ja, ka, la, ma);
                                                if (eb !== j) xa.push(p(db) + ":" + (ka ? " " : "") + eb);
                                                cb || (cb = true);
                                            });
                                            return cb ? (ka ? "{\n" + la + xa.join(",\n" + la) + "\n" + bb + "}" : ("{" + xa.join(",") + "}")) : "{}";
                                        }
                                        ma.pop();
                                    }
                                };
                                k.stringify = function(ga, ha, ia) {
                                    var ja, ka, la, ma, na, oa;
                                    if (typeof ha == "function" || typeof ha == "object" && ha) if (g.call(ha) == "[object Function]") {
                                        ka = ha;
                                    } else if (g.call(ha) == "[object Array]") {
                                        la = {};
                                        for (ma = 0, na = ha.length; ma < na; oa = ha[ma++], ((g.call(oa) == "[object String]" || g.call(oa) == "[object Number]") && (la[oa] = 1)));
                                    }
                                    if (ia) if (g.call(ia) == "[object Number]") {
                                        if ((ia -= ia % 1) > 0) for (ja = "", ia > 10 && (ia = 10); ja.length < ia; ja += " ");
                                    } else if (g.call(ia) == "[object String]") ja = ia.length <= 10 ? ia : ia.slice(0, 10);
                                    return q("", (oa = {}, oa[""] = ga, oa), ka, la, ja, "", []);
                                };
                            }
                            if (!r) {
                                s = String.fromCharCode;
                                t = {
                                    "\\": "\\",
                                    '"': '"',
                                    "/": "/",
                                    b: "\b",
                                    t: "\t",
                                    n: "\n",
                                    f: "\f",
                                    r: "\r"
                                };
                                u = function() {
                                    z = aa = null;
                                    throw SyntaxError();
                                };
                                v = function() {
                                    var ga = aa,
                                        ha = ga.length,
                                        ia, ja, ka, la, ma;
                                    while (z < ha) {
                                        ia = ga.charAt(z);
                                        if ("\t\r\n ".indexOf(ia) > -1) {
                                            z++;
                                        } else if ("{}[]:,".indexOf(ia) > -1) {
                                            z++;
                                            return ia;
                                        } else if (ia == '"') {
                                            for (ja = "@", z++; z < ha;) {
                                                ia = ga.charAt(z);
                                                if (ia < " ") {
                                                    u();
                                                } else if (ia == "\\") {
                                                    ia = ga.charAt(++z);
                                                    if ('\\"/btnfr'.indexOf(ia) > -1) {
                                                        ja += t[ia];
                                                        z++;
                                                    } else if (ia == "u") {
                                                        ka = ++z;
                                                        for (la = z + 4; z < la; z++) {
                                                            ia = ga.charAt(z);
                                                            if (!(ia >= "0" && ia <= "9" || ia >= "a" && ia <= "f" || ia >= "A" && ia <= "F")) u();
                                                        }
                                                        ja += s("0x" + ga.slice(ka, z));
                                                    } else u();
                                                } else {
                                                    if (ia == '"') break;
                                                    ja += ia;
                                                    z++;
                                                }
                                            }
                                            if (ga.charAt(z) == '"') {
                                                z++;
                                                return ja;
                                            }
                                            u();
                                        } else {
                                            ka = z;
                                            if (ia == "-") {
                                                ma = true;
                                                ia = ga.charAt(++z);
                                            }
                                            if (ia >= "0" && ia <= "9") {
                                                if (ia == "0" && (ia = ga.charAt(z + 1), ia >= "0" && ia <= "9")) u();
                                                ma = false;
                                                for (; z < ha && (ia = ga.charAt(z), ia >= "0" && ia <= "9"); z++);
                                                if (ga.charAt(z) == ".") {
                                                    la = ++z;
                                                    for (; la < ha && (ia = ga.charAt(la), ia >= "0" && ia <= "9"); la++);
                                                    if (la == z) u();
                                                    z = la;
                                                }
                                                ia = ga.charAt(z);
                                                if (ia == "e" || ia == "E") {
                                                    ia = ga.charAt(++z);
                                                    if (ia == "+" || ia == "-") z++;
                                                    for (la = z; la < ha && (ia = ga.charAt(la), ia >= "0" && ia <= "9"); la++);
                                                    if (la == z) u();
                                                    z = la;
                                                }
                                                return +ga.slice(ka, z);
                                            }
                                            if (ma) u();
                                            if (ga.slice(z, z + 4) == "true") {
                                                z += 4;
                                                return true;
                                            } else if (ga.slice(z, z + 5) == "false") {
                                                z += 5;
                                                return false;
                                            } else if (ga.slice(z, z + 4) == "null") {
                                                z += 4;
                                                return null;
                                            }
                                            u();
                                        }
                                    }
                                    return "$";
                                };
                                w = function(ga) {
                                    var ha, ia, ja;
                                    if (ga == "$") u();
                                    if (typeof ga == "string") {
                                        if (ga.charAt(0) == "@") return ga.slice(1);
                                        if (ga == "[") {
                                            ha = [];
                                            for (;; ia || (ia = true)) {
                                                ga = v();
                                                if (ga == "]") break;
                                                if (ia) if (ga == ",") {
                                                    ga = v();
                                                    if (ga == "]") u();
                                                } else u();
                                                if (ga == ",") u();
                                                ha.push(w(ga));
                                            }
                                            return ha;
                                        } else if (ga == "{") {
                                            ha = {};
                                            for (;; ia || (ia = true)) {
                                                ga = v();
                                                if (ga == "}") break;
                                                if (ia) if (ga == ",") {
                                                    ga = v();
                                                    if (ga == "}") u();
                                                } else u();
                                                if (ga == "," || typeof ga != "string" || ga.charAt(0) != "@" || v() != ":") u();
                                                ha[ga.slice(1)] = w(v());
                                            }
                                            return ha;
                                        }
                                        u();
                                    }
                                    return ga;
                                };
                                y = function(ga, ha, ia) {
                                    var ja = x(ga, ha, ia);
                                    if (ja === j) {
                                        delete ga[ha];
                                    } else ga[ha] = ja;
                                };
                                x = function(ga, ha, ia) {
                                    var ja = ga[ha],
                                        ka;
                                    if (typeof ja == "object" && ja) if (g.call(ja) == "[object Array]") {
                                        for (ka = ja.length; ka--;) y(ja, ka, ia);
                                    } else i(ja, function(la) {
                                        y(ja, la, ia);
                                    });
                                    return ia.call(ga, ha, ja);
                                };
                                k.parse = function(ga, ha) {
                                    z = 0;
                                    aa = ga;
                                    var ia = w(v());
                                    if (v() != "$") u();
                                    z = aa = null;
                                    return ha && g.call(ha) == "[object Function]" ? x((ba = {}, ba[""] = ia, ba), "", ha) : ia;
                                };
                            }
                        }
                    }).call(this);
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
                        p = {
                            'JSON.stringify': m.stringify,
                            'JSON.parse': m.parse
                        },
                        q = {
                            array: g,
                            'function': h,
                            string: i,
                            Object: k,
                            Array: j,
                            Date: l
                        };
                    for (var r in q) {
                        if (!q.hasOwnProperty(r)) continue;
                        var s = q[r],
                            t = r === r.toLowerCase() ? window[r.replace(/^\w/, function(x) {
                                return x.toUpperCase();
                            })].prototype : window[r];
                        for (var u in s) {
                            if (!s.hasOwnProperty(u)) continue;
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
            };

        __d("sdk.RuntimeConfig", [], {
            "locale": "en_US",
            "rtl": false
        });
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
        __d("XDConfig", [], {
            "XdUrl": "connect\/xd_arbiter.php?version=17",
            "Flash": {
                "path": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/ys\/r\/WON-TVLCpDP.swf"
            },
            "useCdn": true
        });
        __d("SDKConfig", [], {
            "bustCache": true,
            "tagCountLogRate": 0.01,
            "errorHandling": {
                "rate": 4
            },
            "api": {
                "mode": "warn",
                "whitelist": ["Arbiter", "Arbiter.inform", "Canvas", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Data", "Data.query", "Data.waitOn", "Dom", "Dom.addCssRules", "Event", "Event.subscribe", "Event.unsubscribe", "Insights", "Insights.impression", "Music", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.init", "Payment.setSize", "UA", "UA.nativeApp", "XD", "XD.onMessage", "XFBML", "XFBML.parse", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "ui", "ThirdPartyProvider", "ThirdPartyProvider.sendData", "ThirdPartyProvider.init", "ui:subscribe", "Data.query:wait", "Data.waitOn:wait", "Frictionless.isAllowed", "XFBML.RecommendationsBar", "XFBML.RecommendationsBar.markRead"]
            },
            "initSitevars": {
                "enableMobileComments": 1,
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
            }
        });
        __d("CssConfig", [], {
            "rules": ".fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_invisible{display:none}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yA\/x\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y6\/x\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\\9;right:7px\\9}\n.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}\n.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}\n.fb_dialog_close_icon:hover{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yA\/x\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y6\/x\/s816eWC-2sl.gif)}\n.fb_dialog_close_icon:active{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yA\/x\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y6\/x\/s816eWC-2sl.gif)}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n\/* \u0040noflip *\/\n.fb_dialog_top_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}\n\/* \u0040noflip *\/\n.fb_dialog_top_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}\n\/* \u0040noflip *\/\n.fb_dialog_bottom_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n\/* \u0040noflip *\/\n.fb_dialog_bottom_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100\u0025}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100\u0025;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}\n.fb_dialog_content .dialog_title > span{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yD\/x\/Cou7n-nqK52.gif)\nno-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}\nbody.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100\u0025\n}\n.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yc\/x\/3rhSv5V8j3o.gif)\nwhite no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}\n.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}\n#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}\n#fb-root #fb_dialog_ipad_overlay.hidden{display:none}\n.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}\n.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}\n.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025\n}\n.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#4966A6),\ncolor-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,\nrgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}\n.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}\n.fb_dialog_content .dialog_content{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yJ\/x\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}\n.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}\n#fb_dialog_loader_close{float:left}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}\n.fb_iframe_widget iframe{position:absolute}\n.fb_iframe_widget_lift{z-index:1}\n.fb_iframe_widget span{position:relative;display:inline-block;vertical-align:text-bottom;text-align:justify}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_fluid{display:inline}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yJ\/x\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_button_simple,\n.fb_button_simple_rtl{background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yH\/x\/eIpbnVKI9lR.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}\n.fb_button_simple_rtl{background-position:right 0}\n.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}\n.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}\na.fb_button_simple:hover .fb_button_text,\na.fb_button_simple_rtl:hover .fb_button_text,\n.fb_button_simple:hover .fb_button_text,\n.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}\n.fb_button,\n.fb_button_rtl{background:#29447e url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yl\/x\/FGFbc80dUKj.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}\n.fb_button .fb_button_text,\n.fb_button_rtl .fb_button_text{background:#5f78ab url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yl\/x\/FGFbc80dUKj.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:\"lucida grande\",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}\na.fb_button,\na.fb_button_rtl,\n.fb_button,\n.fb_button_rtl{text-decoration:none}\na.fb_button:active .fb_button_text,\na.fb_button_rtl:active .fb_button_text,\n.fb_button:active .fb_button_text,\n.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}\n.fb_button_xlarge,\n.fb_button_xlarge_rtl{background-position:left -60px;font-size:24px;line-height:30px}\n.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}\na.fb_button_xlarge:active{background-position:left -99px}\n.fb_button_xlarge_rtl{background-position:right -268px}\n.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}\na.fb_button_xlarge_rtl:active{background-position:right -307px}\n.fb_button_large,\n.fb_button_large_rtl{background-position:left -138px;font-size:13px;line-height:16px}\n.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}\na.fb_button_large:active{background-position:left -163px}\n.fb_button_large_rtl{background-position:right -346px}\n.fb_button_large_rtl .fb_button_text{margin-right:25px}\na.fb_button_large_rtl:active{background-position:right -371px}\n.fb_button_medium,\n.fb_button_medium_rtl{background-position:left -188px;font-size:11px;line-height:14px}\na.fb_button_medium:active{background-position:left -210px}\n.fb_button_medium_rtl{background-position:right -396px}\n.fb_button_text_rtl,\n.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}\na.fb_button_medium_rtl:active{background-position:right -418px}\n.fb_button_small,\n.fb_button_small_rtl{background-position:left -232px;font-size:10px;line-height:10px}\n.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}\na.fb_button_small:active,\n.fb_button_small:active{background-position:left -250px}\n.fb_button_small_rtl{background-position:right -440px}\n.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}\na.fb_button_small_rtl:active{background-position:right -458px}\n.fb_share_count_wrapper{position:relative;float:left}\n.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;text-align:center}\n.fb_share_count_inner{background:#e8ebf2;display:block}\n.fb_share_count_right{margin-left:-1px;display:inline-block}\n.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size:10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}\n.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size:22px;border:solid 1px #b0b9ec}\n.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yP\/x\/bSOHtKbCGYI.png)}\n.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/x\/i_oIVTKMYsL.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}\n.fb_share_no_count{display:none}\n.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size:10px}\n.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size:11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}\n.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size:13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}\n.fb_share_count_hidden .fb_share_count_nub_top,\n.fb_share_count_hidden .fb_share_count_top,\n.fb_share_count_hidden .fb_share_count_nub_right,\n.fb_share_count_hidden .fb_share_count_right{visibility:hidden}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}\n.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50\u0025 50\u0025;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender\n.FB_Loader{margin-top:0}\n.fbpluginrecommendationsbarleft,\n.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarleft{left:10px}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarright{right:10px}\n",
            "components": ["fb.css.base", "fb.css.dialog", "fb.css.iframewidget", "fb.css.button", "fb.css.sharebutton", "fb.css.connectbarwidget", "fb.css.edgecommentwidget", "fb.css.sendbuttonformwidget", "fb.css.plugin.recommendationsbar"]
        });
        __d("ApiClientConfig", [], {
            "FlashRequest": {
                "swfUrl": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/y5\/r\/SrnvQJBTxo-.swf"
            }
        });
        __d("CanvasPrefetcherConfig", [], {
            "blacklist": [144959615576466],
            "sampleRate": 500
        });
        __d("PluginPipeConfig", [], {
            "threshold": 0,
            "enabledApps": {
                "111476658864976": 1,
                "cca6477272fc5cb805f85a84f20fca1d": 1,
                "179150165472010": 1
            }
        });
        __d("ConnectBarConfig", [], {
            "imgs": {
                "buttonUrl": "rsrc.php\/v2\/yY\/r\/h_Y6u1wrZPW.png",
                "missingProfileUrl": "rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif"
            }
        });
        __d("ProfilePicConfig", [], {
            "defPicMap": {
                "pic": "rsrc.php\/v1\/yh\/r\/C5yt7Cqf3zU.jpg",
                "pic_big": "rsrc.php\/v2\/yL\/r\/HsTZSDw4avx.gif",
                "pic_big_with_logo": "rsrc.php\/v2\/y5\/r\/SRDCaeCL7hM.gif",
                "pic_small": "rsrc.php\/v1\/yi\/r\/odA9sNLrE86.jpg",
                "pic_small_with_logo": "rsrc.php\/v2\/yD\/r\/k1xiRXKnlGd.gif",
                "pic_square": "rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif",
                "pic_square_with_logo": "rsrc.php\/v2\/yX\/r\/9dYJBPDHXwZ.gif",
                "pic_with_logo": "rsrc.php\/v2\/yu\/r\/fPPR9f2FJ3t.gif"
            }
        });
        __d("QueryString", [], function(a, b, c, d, e, f) {
            function g(k) {
                var l = [];
                ES5(ES5('Object', 'keys', false, k), 'forEach', true, function(m) {
                    var n = k[m];
                    if (typeof n === 'undefined') return;
                    if (n === null) {
                        l.push(m);
                        return;
                    }
                    l.push(encodeURIComponent(m) + '=' + encodeURIComponent(n));
                });
                return l.join('&');
            }
            function h(k, l) {
                var m = {};
                if (k === '') return m;
                var n = k.split('&');
                for (var o = 0; o < n.length; o++) {
                    var p = n[o].split('=', 2),
                        q = decodeURIComponent(p[0]);
                    if (l && m.hasOwnProperty(q)) throw new URIError('Duplicate key: ' + q);
                    m[q] = p.length === 2 ? decodeURIComponent(p[1]) : null;
                }
                return m;
            }
            function i(k, l) {
                return k + (~ES5(k, 'indexOf', true, '?') ? '&' : '?') + (typeof l === 'string' ? l : j.encode(l));
            }
            var j = {
                encode: g,
                decode: h,
                appendToUrl: i
            };
            e.exports = j;
        });
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
        __d("ManagedError", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                Error.prototype.constructor.call(this, h);
                this.message = h;
                this.innerError = i;
            }
            g.prototype = new Error();
            g.prototype.constructor = g;
            e.exports = g;
        });
        __d("AssertionError", ["ManagedError"], function(a, b, c, d, e, f) {
            var g = b('ManagedError');

            function h(i) {
                g.prototype.constructor.apply(this, arguments);
            }
            h.prototype = new g();
            h.prototype.constructor = h;
            e.exports = h;
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
        __d("Assert", ["AssertionError", "sprintf"], function(a, b, c, d, e, f) {
            var g = b('AssertionError'),
                h = b('sprintf');

            function i(n, o) {
                if (!n) throw new g(o);
                return n;
            }
            function j(n, o, p) {
                var q;
                if (o === undefined) {
                    q = 'undefined';
                } else if (o === null) {
                    q = 'null';
                } else {
                    var r = Object.prototype.toString.call(o);
                    q = /\s(\w*)/.exec(r)[1].toLowerCase();
                }
                i(ES5(n, 'indexOf', true, q) !== -1, p || h('Expression is of type %s, not %s', q, n));
                return o;
            }
            function k(n, o, p) {
                i(o instanceof n, p || 'Expression not instance of type');
                return o;
            }
            function l(n, o) {
                m['is' + n] = o;
                m['maybe' + n] = function(p, q) {
                    if (p != null) o(p, q);
                };
            }
            var m = {
                isInstanceOf: k,
                isTrue: i,
                type: j,
                define: function(n, o) {
                    n = n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase();
                    l(n, function(p, q) {
                        i(o(p), q);
                    });
                }
            };
            ES5(['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'Regexp', 'String', 'Undefined'], 'forEach', true, function(n) {
                l(n, ES5(j, 'bind', true, null, n.toLowerCase()));
            });
            e.exports = m;
        });
        __d("Type", ["copyProperties", "Assert"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('Assert');

            function i() {
                var m = this.__mixins;
                if (m) for (var n = 0; n < m.length; n++) m[n].apply(this, arguments);
            }
            function j(m, n) {
                if (n instanceof m) return true;
                if (n instanceof i) for (var o = 0; o < n.__mixins.length; o++) if (n.__mixins[o] == m) return true;
                return false;
            }
            function k(m, n) {
                var o = m.prototype;
                if (!ES5('Array', 'isArray', false, n)) n = [n];
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    if (typeof q == 'function') {
                        o.__mixins.push(q);
                        q = q.prototype;
                    }
                    ES5(ES5('Object', 'keys', false, q), 'forEach', true, function(r) {
                        o[r] = q[r];
                    });
                }
            }
            function l(m, n, o) {
                var p = n && n.hasOwnProperty('constructor') ? n.constructor : function() {
                        this.parent.apply(this, arguments);
                    };
                h.isFunction(p);
                if (m && m.prototype instanceof i === false) throw new Error('parent type does not inherit from Type');
                m = m || i;
                var q = new Function();
                q.prototype = m.prototype;
                p.prototype = new q();
                g(p.prototype, n);
                p.prototype.__mixins = m.prototype.__mixins ? Array.prototype.slice.call(m.prototype.__mixins) : [];
                if (o) k(p, o);
                p.prototype.parent = function() {
                    this.parent = m.prototype.parent;
                    m.apply(this, arguments);
                };
                p.prototype.parentCall = function(r) {
                    return m.prototype[r].apply(this, Array.prototype.slice.call(arguments, 1));
                };
                p.extend = function(r, s) {
                    return l(this, r, s);
                };
                return p;
            }
            g(i.prototype, {
                instanceOf: function(m) {
                    return j(m, this);
                }
            });
            g(i, {
                extend: function(m, n) {
                    return typeof m === 'function' ? l.apply(null, arguments) : l(null, m, n);
                },
                instanceOf: j
            });
            e.exports = i;
        });
        __d("ObservableMixin", [], function(a, b, c, d, e, f) {
            function g() {
                this.__observableEvents = {};
            }
            g.prototype = {
                inform: function(h) {
                    var i = Array.prototype.slice.call(arguments, 1),
                        j = Array.prototype.slice.call(this.getSubscribers(h));
                    for (var k = 0; k < j.length; k++) {
                        if (j[k] === null) continue;
                        try {
                            j[k].apply(this, i);
                        } catch (l) {
                            setTimeout(function() {
                                throw l;
                            }, 0);
                        }
                    }
                    return this;
                },
                getSubscribers: function(h) {
                    return this.__observableEvents[h] || (this.__observableEvents[h] = []);
                },
                clearSubscribers: function(h) {
                    if (h) this.__observableEvents[h] = [];
                    return this;
                },
                clearAllSubscribers: function() {
                    this.__observableEvents = {};
                    return this;
                },
                subscribe: function(h, i) {
                    var j = this.getSubscribers(h);
                    j.push(i);
                    return this;
                },
                unsubscribe: function(h, i) {
                    var j = this.getSubscribers(h);
                    for (var k = 0; k < j.length; k++) if (j[k] === i) {
                        j.splice(k, 1);
                        break;
                    }
                    return this;
                },
                monitor: function(h, i) {
                    if (!i()) {
                        var j = ES5(function(k) {
                            if (i.apply(i, arguments)) this.unsubscribe(h, j);
                        }, 'bind', true, this);
                        this.subscribe(h, j);
                    }
                    return this;
                }
            };
            e.exports = g;
        });
        __d("sdk.Model", ["Type", "ObservableMixin"], function(a, b, c, d, e, f) {
            var g = b('Type'),
                h = b('ObservableMixin'),
                i = g.extend({
                    constructor: function(j) {
                        this.parent();
                        var k = {},
                            l = this;
                        ES5(ES5('Object', 'keys', false, j), 'forEach', true, function(m) {
                            k[m] = j[m];
                            l['set' + m] = function(n) {
                                if (n === k[m]) return this;
                                k[m] = n;
                                l.inform(m + '.change', n);
                                return l;
                            };
                            l['get' + m] = function() {
                                return k[m];
                            };
                        });
                    }
                }, h);
            e.exports = i;
        });
        __d("sdk.Runtime", ["sdk.Model", "copyProperties", "sdk.RuntimeConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.Model'),
                h = b('copyProperties'),
                i = c('sdk.RuntimeConfig'),
                j = {
                    UNKNOWN: 0,
                    PAGETAB: 1,
                    CANVAS: 2,
                    PLATFORM: 4
                },
                k = new g({
                    AccessToken: '',
                    ClientID: '',
                    Environment: j.UNKNOWN,
                    Initialized: false,
                    Locale: i.locale,
                    LoginStatus: undefined,
                    Rtl: i.rtl,
                    Scope: undefined,
                    Secure: undefined,
                    UseCookie: false,
                    UserID: 0
                });
            h(k, {
                ENVIRONMENTS: j,
                isEnvironment: function(l) {
                    var m = this.getEnvironment();
                    return (l | m) === m;
                }
            });
            (function() {
                var l = /app_runner/.test(window.name) ? j.PAGETAB : /iframe_canvas/.test(window.name) ? j.CANVAS : j.UNKNOWN;
                if ((l | j.PAGETAB) === l) l = l | j.CANVAS;
                k.setEnvironment(l);
            })();
            e.exports = k;
        });
        __d("sdk.Cookie", ["QueryString", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('QueryString'),
                h = b('sdk.Runtime'),
                i = null;

            function j(m, n, o) {
                m = m + h.getClientID();
                var p = i && i !== '.';
                if (p) {
                    document.cookie = m + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                    document.cookie = m + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
                }
                var q = new Date(o).toGMTString();
                document.cookie = m + '=' + n + (n && o === 0 ? '' : '; expires=' + q) + '; path=/' + (p ? '; domain=' + i : '');
            }
            function k(m) {
                m = m + h.getClientID();
                var n = new RegExp('\\b' + m + '=([^;]*)\\b');
                return n.test(document.cookie) ? RegExp.$1 : null;
            }
            var l = {
                setDomain: function(m) {
                    i = m;
                    var n = g.encode({
                        base_domain: i && i !== '.' ? i : ''
                    }),
                        o = new Date();
                    o.setFullYear(o.getFullYear() + 1);
                    j('fbm_', n, o.getTime());
                },
                getDomain: function() {
                    return i;
                },
                loadMeta: function() {
                    var m = k('fbm_');
                    if (m) {
                        var n = g.decode(m);
                        if (!i) i = n.base_domain;
                        return n;
                    }
                },
                loadSignedRequest: function() {
                    return k('fbsr_');
                },
                setSignedRequestCookie: function(m, n) {
                    if (!m) throw new Error('Value passed to Cookie.setSignedRequestCookie ' + 'was empty.');
                    j('fbsr_', m, n);
                },
                clearSignedRequestCookie: function() {
                    j('fbsr_', '', 0);
                },
                setRaw: j
            };
            e.exports = l;
        });
        __d("guid", [], function(a, b, c, d, e, f) {
            function g() {
                return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
            }
            e.exports = g;
        });
        __d("sdk.createIframe", ["copyProperties", "guid"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('guid'),
                i = function() {
                    var k = document.createElement("form"),
                        l = k.appendChild(document.createElement("input")),
                        m;
                    l.name = h();
                    m = l !== k.elements[l.name];
                    k = l = null;
                    i = function() {
                        return m;
                    };
                    return m;
                };

            function j(k) {
                var l = i() ? document.createElement('<iframe name="' + k.name + '"/>') : document.createElement("iframe");
                if (k.style) g(l.style, k.style);
                l.name = l.id = k.name;
                l.src = "javascript:false";
                k.root.appendChild(l);
                l.src = k.url;
                return l;
            }
            e.exports = j;
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
                    return h || self;
                }
            };
            e.exports = i;
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
        __d("sdk.getContextType", ["UserAgent", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('UserAgent'),
                h = b('sdk.Runtime');

            function i() {
                if (g.nativeApp()) return 3;
                if (g.mobile()) return 2;
                if (h.isEnvironment(h.ENVIRONMENTS.CANVAS)) return 5;
                return 1;
            }
            e.exports = i;
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
                    n = g.apply(null, m),
                    o = window.console;
                if (o && j.level >= k) o[l in o ? l : 'log'](n);
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
        __d("Base64", [], function(a, b, c, d, e, f) {
            var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

            function h(l) {
                l = (l.charCodeAt(0) << 16) | (l.charCodeAt(1) << 8) | l.charCodeAt(2);
                return String.fromCharCode(g.charCodeAt(l >>> 18), g.charCodeAt((l >>> 12) & 63), g.charCodeAt((l >>> 6) & 63), g.charCodeAt(l & 63));
            }
            var i = '>___?456789:;<=_______' + '\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31' + '______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';

            function j(l) {
                l = (i.charCodeAt(l.charCodeAt(0) - 43) << 18) | (i.charCodeAt(l.charCodeAt(1) - 43) << 12) | (i.charCodeAt(l.charCodeAt(2) - 43) << 6) | i.charCodeAt(l.charCodeAt(3) - 43);
                return String.fromCharCode(l >>> 16, (l >>> 8) & 255, l & 255);
            }
            var k = {
                encode: function(l) {
                    l = unescape(encodeURI(l));
                    var m = (l.length + 2) % 3;
                    l = (l + '\0\0'.slice(m)).replace(/[\s\S]{3}/g, h);
                    return l.slice(0, l.length + m - 2) + '=='.slice(m);
                },
                decode: function(l) {
                    l = l.replace(/[^A-Za-z0-9+\/]/g, '');
                    var m = (l.length + 3) & 3;
                    l = (l + 'AAA'.slice(m)).replace(/..../g, j);
                    l = l.slice(0, l.length + m - 3);
                    try {
                        return decodeURIComponent(escape(l));
                    } catch (n) {
                        throw new Error('Not valid UTF-8');
                    }
                },
                encodeObject: function(l) {
                    return k.encode(ES5('JSON', 'stringify', false, l));
                },
                decodeObject: function(l) {
                    return ES5('JSON', 'parse', false, k.decode(l));
                },
                encodeNums: function(l) {
                    return String.fromCharCode.apply(String, ES5(l, 'map', true, function(m) {
                        return g.charCodeAt((m | -(m > 63)) & -(m > 0) & 63);
                    }));
                }
            };
            e.exports = k;
        });
        __d("sdk.SignedRequest", ["Base64"], function(a, b, c, d, e, f) {
            var g = b('Base64');

            function h(j) {
                if (!j) return null;
                var k = j.split('.', 2)[1].replace(/\-/g, '+').replace(/\_/g, '/');
                return g.decodeObject(k);
            }
            var i = {
                parse: h
            };
            e.exports = i;
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
        __d("URL", ["Assert", "copyProperties", "QueryString", "Log"], function(a, b, c, d, e, f) {
            var g = b('Assert'),
                h = b('copyProperties'),
                i = b('QueryString'),
                j = b('Log'),
                k = new RegExp('(' + '(((\\w+):)?//)' + '(.*?@)?' + '([^~/?#:]+)' + '(:(\\d+))?' + ')?' + '([^\\?$#]+)?' + '(\\?([^$#]+))?' + '(#([^$]+))?'),
                l = /[\0\\]/,
                m = /[^\w\-\.,;\/?:@=&%#$~+!*'\[\]()]+/g,
                n = /^[a-z0-9.][a-z0-9\-\.]+[a-z0-9.]$/,
                o = /\.facebook\.com$/;

            function p(q) {
                g.isString(q, 'The passed argument was of invalid type.');
                if (l.test(q)) throw new URIError('The passed argument could not be parsed as a url.');
                if (this instanceof p === false) return new p(q);
                var r = q.replace(m, function(t) {
                    j.warn('Escaping unescaped character \\x%s from "%s"', t.charCodeAt(0).toString(16), q);
                    return encodeURIComponent(t);
                }).match(k);
                if (!q || !r) throw new URIError('The passed argument could not be parsed as a url.');
                var s = !! location.hostname;
                this.setProtocol(r[4] || (s ? location.protocol.replace(/:/, '') : ''));
                this.setDomain(r[6] || location.hostname);
                this.setPort(r[8] || (s && !r[6] ? location.port : ''));
                this.setPath(r[9] || '');
                this.setSearch(r[11] || '');
                this.setFragment(r[13] || '');
                if (this._path.substring(0, 1) != '/') this._path = '/' + this._path;
                if (this._domain && !n.test(decodeURIComponent(this._domain.toLowerCase()))) {
                    j.error('Invalid characters found in domain name: %s', this._domain);
                    throw new URIError('Domain contained invalid characters.');
                }
            }
            h(p.prototype, {
                constructor: p,
                getProtocol: function() {
                    return this._protocol;
                },
                setProtocol: function(q) {
                    this._protocol = q;
                    return this;
                },
                getDomain: function() {
                    return this._domain;
                },
                setDomain: function(q) {
                    this._domain = q;
                    return this;
                },
                getPort: function() {
                    return this._port;
                },
                setPort: function(q) {
                    this._port = q;
                    return this;
                },
                getPath: function() {
                    return this._path;
                },
                setPath: function(q) {
                    this._path = q;
                    return this;
                },
                getSearch: function() {
                    return this._search;
                },
                setSearch: function(q) {
                    this._search = q;
                    return this;
                },
                getFragment: function() {
                    return this._fragment;
                },
                setFragment: function(q) {
                    this._fragment = q;
                    return this;
                },
                getParsedSearch: function() {
                    return i.decode(this._search);
                },
                getParsedFragment: function() {
                    return i.decode(this._fragment);
                },
                isFacebookURL: function() {
                    return o.test(this._domain);
                },
                toString: function() {
                    return (this._protocol ? this._protocol + ':' : '') + (this._domain ? '//' + this._domain : '') + (this._port ? ':' + this._port : '') + this._path + (this._search ? '?' + this._search : '') + (this._fragment ? '#' + this._fragment : '');
                },
                valueOf: function() {
                    return this.toString();
                }
            });
            h(p, {
                getCurrent: function() {
                    return new p(location.href);
                },
                getReferrer: function() {
                    return document.referrer ? new p(document.referrer) : null;
                }
            });
            e.exports = p;
        });
        __d("sdk.domReady", [], function(a, b, c, d, e, f) {
            var g, h = "readyState" in document ? /loaded|complete/.test(document.readyState) : !! document.body;

            function i() {
                if (!g) return;
                var l;
                while (l = g.shift()) l();
                g = null;
            }
            function j(l) {
                if (g) {
                    g.push(l);
                    return;
                } else l();
            }
            if (!h) {
                g = [];
                if (document.addEventListener) {
                    document.addEventListener('DOMContentLoaded', i, false);
                    window.addEventListener('load', i, false);
                } else if (document.attachEvent) {
                    document.attachEvent('onreadystatechange', i);
                    window.attachEvent('onload', i);
                }
                if (document.documentElement.doScroll && window == window.top) {
                    var k = function() {
                            try {
                                document.documentElement.doScroll('left');
                            } catch (l) {
                                setTimeout(k, 0);
                                return;
                            }
                            i();
                        };
                    k();
                }
            }
            e.exports = j;
        }, 3);
        __d("sdk.Content", ["sdk.domReady", "Log", "UserAgent"], function(a, b, c, d, e, f) {
            var g = b('sdk.domReady'),
                h = b('Log'),
                i = b('UserAgent'),
                j, k, l = {
                    append: function(m, n) {
                        if (!n) if (!j) {
                            j = n = document.getElementById('fb-root');
                            if (!n) {
                                h.warn('The "fb-root" div has not been created, auto-creating');
                                j = n = document.createElement('div');
                                n.id = 'fb-root';
                                if (i.ie() || !document.body) {
                                    g(function() {
                                        document.body.appendChild(n);
                                    });
                                } else document.body.appendChild(n);
                            }
                            n.className += ' fb_reset';
                        } else n = j;
                        if (typeof m == 'string') {
                            var o = document.createElement('div');
                            n.appendChild(o).innerHTML = m;
                            return o;
                        } else return n.appendChild(m);
                    },
                    appendHidden: function(m) {
                        if (!n) {
                            var n = document.createElement('div'),
                                o = n.style;
                            o.position = 'absolute';
                            o.top = '-10000px';
                            o.width = o.height = 0;
                            n = l.append(n);
                        }
                        return l.append(m, n);
                    },
                    submitToTarget: function(m, n) {
                        var o = document.createElement('form');
                        o.action = m.url;
                        o.target = m.target;
                        o.method = (n) ? 'GET' : 'POST';
                        l.appendHidden(o);
                        for (var p in m.params) if (m.params.hasOwnProperty(p)) {
                            var q = m.params[p];
                            if (q !== null && q !== undefined) {
                                var r = document.createElement('input');
                                r.name = p;
                                r.value = q;
                                o.appendChild(r);
                            }
                        }
                        o.submit();
                        o.parentNode.removeChild(o);
                    }
                };
            e.exports = l;
        });
        __d("wrapFunction", [], function(a, b, c, d, e, f) {
            var g = {};

            function h(i, j, k) {
                j = j || 'default';
                return function() {
                    var l = j in g ? g[j](i, k) : i;
                    return l.apply(this, arguments);
                };
            }
            h.setWrapper = function(i, j) {
                j = j || 'default';
                g[j] = i;
            };
            e.exports = h;
        });
        __d("sdk.Event", ["wrapFunction"], function(a, b, c, d, e, f) {
            var g = b('wrapFunction'),
                h = {
                    subscribers: function() {
                        if (!this._subscribersMap) this._subscribersMap = {};
                        return this._subscribersMap;
                    },
                    subscribe: function(i, j) {
                        var k = this.subscribers();
                        if (!k[i]) {
                            k[i] = [j];
                        } else k[i].push(j);
                    },
                    unsubscribe: function(i, j) {
                        var k = this.subscribers()[i];
                        if (k) ES5(k, 'forEach', true, function(l, m) {
                            if (l == j) k[m] = null;
                        });
                    },
                    monitor: function(i, j) {
                        if (!j()) {
                            var k = this,
                                l = function() {
                                    if (j.apply(j, arguments)) k.unsubscribe(i, l);
                                };
                            this.subscribe(i, l);
                        }
                    },
                    clear: function(i) {
                        delete this.subscribers()[i];
                    },
                    fire: function() {
                        var i = Array.prototype.slice.call(arguments),
                            j = i.shift(),
                            k = this.subscribers()[j];
                        if (k) ES5(k, 'forEach', true, function(l) {
                            if (l) l.apply(this, i);
                        });
                    }
                };
            e.exports = h;
        });
        __d("Queue", ["copyProperties"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = {};

            function i(j) {
                this._opts = g({
                    interval: 0,
                    processor: null
                }, j);
                this._queue = [];
                this._stopped = true;
            }
            g(i.prototype, {
                _dispatch: function(j) {
                    if (this._stopped || this._queue.length === 0) return;
                    if (!this._opts.processor) {
                        this._stopped = true;
                        throw new Error('No processor available');
                    }
                    if (this._opts.interval) {
                        this._opts.processor.call(this, this._queue.shift());
                        this._timeout = setTimeout(ES5(this._dispatch, 'bind', true, this), this._opts.interval);
                    } else while (this._queue.length) this._opts.processor.call(this, this._queue.shift());
                },
                enqueue: function(j) {
                    if (this._opts.processor && !this._stopped) {
                        this._opts.processor.call(this, j);
                    } else this._queue.push(j);
                    return this;
                },
                start: function(j) {
                    if (j) this._opts.processor = j;
                    this._stopped = false;
                    this._dispatch();
                    return this;
                },
                dispatch: function() {
                    this._dispatch(true);
                },
                stop: function(j) {
                    this._stopped = true;
                    if (j) clearTimeout(this._timeout);
                    return this;
                },
                merge: function(j, k) {
                    this._queue[k ? 'unshift' : 'push'].apply(this._queue, j._queue);
                    j._queue = [];
                    this._dispatch();
                    return this;
                },
                getLength: function() {
                    return this._queue.length;
                }
            });
            g(i, {
                get: function(j, k) {
                    var l;
                    if (j in h) {
                        l = h[j];
                    } else l = h[j] = new i(k);
                    return l;
                },
                exists: function(j) {
                    return j in h;
                },
                remove: function(j) {
                    return delete h[j];
                }
            });
            e.exports = i;
        });
        __d("resolveURI", [], function(a, b, c, d, e, f) {
            function g(h) {
                if (!h) return window.location.href;
                var i = document.createElement('div');
                i.innerHTML = '<a href="' + h.replace(/"/g, '&quot;') + '"></a>';
                return i.firstChild.href;
            }
            e.exports = g;
        });
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
                                o._write(ES5('JSON', 'stringify', false, v), k);
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
                        var s = p.apply(k || null, l.params);
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
        __d("sdk.RPC", ["Assert", "JSONRPC", "Queue"], function(a, b, c, d, e, f) {
            var g = b('Assert'),
                h = b('JSONRPC'),
                i = b('Queue'),
                j = new i(),
                k = new h(function(m) {
                    j.enqueue(m);
                }),
                l = {
                    local: k.local,
                    remote: k.remote,
                    stub: ES5(k.stub, 'bind', true, k),
                    setInQueue: function(m) {
                        g.isInstanceOf(i, m);
                        m.start(function(n) {
                            k.read(n);
                        });
                    },
                    getOutQueue: function() {
                        return j;
                    }
                };
            e.exports = l;
        });
        __d("DOMEventListener", ["wrapFunction"], function(a, b, c, d, e, f) {
            var g = b('wrapFunction'),
                h, i;
            if (window.addEventListener) {
                h = function(k, l, m) {
                    m.wrapper = g(m, 'entry', k + ':' + l);
                    k.addEventListener(l, m.wrapper, false);
                };
                i = function(k, l, m) {
                    k.removeEventListener(l, m.wrapper, false);
                };
            } else if (window.attachEvent) {
                h = function(k, l, m) {
                    m.wrapper = g(m, 'entry', k + ':' + l);
                    k.attachEvent('on' + l, m.wrapper);
                };
                i = function(k, l, m) {
                    k.detachEvent('on' + l, m.wrapper);
                };
            }
            var j = {
                add: function(k, l, m) {
                    h(k, l, m);
                    return {
                        remove: function() {
                            i(k, l, m);
                            k = null;
                        }
                    };
                },
                remove: i
            };
            e.exports = j;
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
        __d("emptyFunction", ["copyProperties"], function(a, b, c, d, e, f) {
            var g = b('copyProperties');

            function h(j) {
                return function() {
                    return j;
                };
            }
            function i() {}
            g(i, {
                thatReturns: h,
                thatReturnsFalse: h(false),
                thatReturnsTrue: h(true),
                thatReturnsNull: h(null),
                thatReturnsThis: function() {
                    return this;
                },
                thatReturnsArgument: function(j) {
                    return j;
                }
            });
            e.exports = i;
        });
        __d("XDM", ["DOMEventListener", "DOMWrapper", "Flash", "Log", "UserAgent", "emptyFunction", "guid"], function(a, b, c, d, e, f) {
            var g = b('DOMEventListener'),
                h = b('DOMWrapper'),
                i = b('Flash'),
                j = b('Log'),
                k = b('UserAgent'),
                l = b('emptyFunction'),
                m = b('guid'),
                n = {},
                o = {
                    transports: []
                },
                p = h.getWindow();

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
                    j.debug('Registering %s as XDM provider', s);
                    o.transports.push(s);
                    n[s] = t;
                },
                create: function(s) {
                    if (!s.whenReady && !s.onMessage) {
                        j.error('An instance without whenReady or onMessage makes no sense');
                        throw new Error('An instance without whenReady or ' + 'onMessage makes no sense');
                    }
                    if (!s.channel) {
                        j.warn('Missing channel name, selecting at random');
                        s.channel = m();
                    }
                    if (!s.whenReady) s.whenReady = l;
                    if (!s.onMessage) s.onMessage = l;
                    var t = s.transport || q(s.blacklist || []),
                        u = n[t];
                    if (u && u.isAvailable()) {
                        j.debug('%s is available', t);
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
                    var y = g.add(x, 'load', function() {
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
                        j.debug('init fragment');
                        var x = {
                            send: function(y, z, aa, ba) {
                                j.debug('sending to: %s (%s)', z + w.channelPath, ba);
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
                        return i.checkMinVersion('8.0.24');
                    },
                    init: function(y) {
                        j.debug('init flash: ' + y.channel);
                        var z = {
                            send: function(ca, da, ea, fa) {
                                j.debug('sending to: %s (%s)', da, fa);
                                t.postMessage(ca, da, fa);
                            }
                        };
                        if (s) {
                            y.whenReady(z);
                            return;
                        }
                        var aa = y.root.appendChild(p.document.createElement('div')),
                            ba = m();
                        u[ba] = function() {
                            clearTimeout(x);
                            j.info('xdm.swf called the callback');
                            delete u[ba];
                            ba = m();
                            u[ba] = function(ca, da) {
                                ca = decodeURIComponent(ca);
                                j.debug('received message %s from %s', ca, da);
                                y.onMessage(ca, da);
                            };
                            t.init(y.channel, 'FB_XDM_CALLBACKS.' + ba);
                            y.whenReady(z);
                        };
                        p.FB_XDM_CALLBACKS = u;
                        t = i.embed(y.flashUrl, aa, null, {
                            protocol: location.protocol.replace(':', ''),
                            host: location.host,
                            callback: 'FB_XDM_CALLBACKS.' + ba,
                            log: v
                        });
                        x = setTimeout(function() {
                            j.warn('The Flash component did not load within %s ms - ' + 'verify that the container is not set to hidden or invisible ' + 'using CSS as this will cause some browsers to not load ' + 'the components', w);
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
                        j.debug('init postMessage: ' + t.channel);
                        var u = '_FB_' + t.channel,
                            v = {
                                send: function(w, x, y, z) {
                                    if (p === y) {
                                        j.error('Invalid windowref, equal to window (self)');
                                        throw new Error();
                                    }
                                    j.debug('sending to: %s (%s)', x, z);
                                    var aa = function() {
                                            y.postMessage('_FB_' + z + w, x);
                                        };
                                    if (k.ie() == 8) {
                                        setTimeout(aa, 0);
                                    } else aa();
                                }
                            };
                        if (s) {
                            t.whenReady(v);
                            return;
                        }
                        g.add(p, 'message', function(event) {
                            var w = event.data,
                                x = event.origin || 'native';
                            if (typeof w != 'string') {
                                j.warn('Received message of type %s from %s, expected a string', typeof w, x);
                                return;
                            }
                            j.debug('received message %s from %s', w, x);
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
        __d("sdk.XD", ["sdk.Content", "sdk.createIframe", "sdk.Event", "guid", "Log", "QueryString", "Queue", "resolveURI", "resolveWindow", "sdk.RPC", "sdk.Runtime", "UrlMap", "URL", "wrapFunction", "XDM", "XDConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.Content'),
                h = b('sdk.createIframe'),
                i = b('sdk.Event'),
                j = b('guid'),
                k = b('Log'),
                l = b('QueryString'),
                m = b('Queue'),
                n = b('resolveURI'),
                o = b('resolveWindow'),
                p = b('sdk.RPC'),
                q = b('sdk.Runtime'),
                r = b('UrlMap'),
                s = b('URL'),
                t = b('wrapFunction'),
                u = c('XDConfig'),
                v = b('XDM'),
                w = new m(),
                x = new m(),
                y = new m(),
                z, aa, ba = j(),
                ca = j(),
                da = location.protocol + '//' + location.host,
                ea, fa = false,
                ga = {},
                ha = new m();
            p.setInQueue(ha);

            function ia(oa) {
                k.info('Remote XD can talk to facebook.com (%s)', oa);
                q.setEnvironment(oa === 'canvas' ? q.ENVIRONMENTS.CANVAS : q.ENVIRONMENTS.PAGETAB);
            }
            function ja(oa, pa) {
                if (!pa) {
                    k.error('No senderOrigin');
                    throw new Error();
                }
                var qa = /^https?/.exec(pa)[0];
                switch (oa.xd_action) {
                case 'proxy_ready':
                    var ra, sa;
                    if (qa == 'https') {
                        ra = y;
                        sa = aa;
                    } else {
                        ra = x;
                        sa = z;
                    }
                    if (oa.registered) {
                        ia(oa.registered);
                        w = ra.merge(w);
                    }
                    k.info('Proxy ready, starting queue %s containing %s messages', qa + 'ProxyQueue', ra.getLength());
                    ra.start(function(ua) {
                        ea.send(typeof ua === 'string' ? ua : l.encode(ua), pa, sa.contentWindow, ca + '_' + qa);
                    });
                    break;
                case 'plugin_ready':
                    k.info('Plugin %s ready, protocol: %s', oa.name, qa);
                    ga[oa.name] = {
                        protocol: qa
                    };
                    if (m.exists(oa.name)) {
                        var ta = m.get(oa.name);
                        k.debug('Enqueuing %s messages for %s in %s', ta.getLength(), oa.name, qa + 'ProxyQueue');
                        (qa == 'https' ? y : x).merge(ta);
                    }
                    break;
                }
                if (oa.data) ka(oa.data, pa);
            }
            function ka(oa, pa) {
                if (pa && pa !== 'native' && !s(pa).isFacebookURL()) return;
                if (typeof oa == 'string') {
                    if (/^FB_RPC:/.test(oa)) {
                        ha.enqueue(oa.substring(7));
                        return;
                    }
                    if (oa.substring(0, 1) == '{') {
                        try {
                            oa = ES5('JSON', 'parse', false, oa);
                        } catch (qa) {
                            k.warn('Failed to decode %s as JSON', oa);
                            return;
                        }
                    } else oa = l.decode(oa);
                }
                if (!pa) if (oa.xd_sig == ba) pa = oa.xd_origin;
                if (oa.xd_action) {
                    ja(oa, pa);
                    return;
                }
                if (oa.access_token) q.setSecure(/^https/.test(da));
                if (oa.cb) {
                    var ra = na._callbacks[oa.cb];
                    if (!na._forever[oa.cb]) delete na._callbacks[oa.cb];
                    if (ra) ra(oa);
                }
            }
            function la(oa, pa) {
                if (oa == 'facebook') {
                    pa.relation = 'parent.parent';
                    w.enqueue(pa);
                } else {
                    pa.relation = 'parent.frames["' + oa + '"]';
                    var qa = ga[oa];
                    if (qa) {
                        k.debug('Enqueuing message for plugin %s in %s', oa, qa.protocol + 'ProxyQueue');
                        (qa.protocol == 'https' ? y : x).enqueue(pa);
                    } else {
                        k.debug('Buffering message for plugin %s', oa);
                        m.get(oa).enqueue(pa);
                    }
                }
            }
            p.getOutQueue().start(function(oa) {
                la('facebook', 'FB_RPC:' + oa);
            });

            function ma(oa, pa) {
                if (fa) return;
                var qa = oa ? /\/\/.*?(\/[^#]*)/.exec(oa)[1] : location.pathname + location.search;
                qa += (~ES5(qa, 'indexOf', true, '?') ? '&' : '?') + 'fb_xd_fragment#xd_sig=' + ba + '&';
                var ra = g.appendHidden(document.createElement('div')),
                    sa = v.create({
                        root: ra,
                        channel: ca,
                        channelPath: '/' + u.XdUrl + '#',
                        flashUrl: u.Flash.path,
                        whenReady: function(ta) {
                            ea = ta;
                            var ua = {
                                channel: ca,
                                origin: location.protocol + '//' + location.host,
                                channel_path: qa,
                                transport: sa,
                                xd_name: pa
                            },
                                va = '/' + u.XdUrl + '#' + l.encode(ua),
                                wa = u.useCdn ? r.resolve('cdn', false) : 'http://www.facebook.com',
                                xa = u.useCdn ? r.resolve('cdn', true) : 'https://www.facebook.com';
                            if (q.getSecure() !== true) z = h({
                                url: wa + va,
                                name: 'fb_xdm_frame_http',
                                root: ra
                            });
                            aa = h({
                                url: xa + va,
                                name: 'fb_xdm_frame_https',
                                root: ra
                            });
                        },
                        onMessage: t(ka, 'entry', 'XD:message')
                    });
                if (sa === 'fragment') window.FB_XD_onMessage = t(ka, 'entry', 'XD:fragment');
                fa = true;
            }
            var na = {
                rpc: p,
                _callbacks: {},
                _forever: {},
                _channel: ca,
                _origin: da,
                onMessage: ka,
                recv: ka,
                init: ma,
                sendToFacebook: la,
                inform: function(oa, pa, qa, ra) {
                    la('facebook', {
                        method: oa,
                        params: ES5('JSON', 'stringify', false, pa || {}),
                        behavior: ra || 'p',
                        relation: qa
                    });
                },
                handler: function(oa, pa, qa, ra) {
                    var sa = u.useCdn ? r.resolve('cdn', location.protocol == 'https:') : location.protocol + '//www.facebook.com';
                    return sa + '/' + u.XdUrl + '#' + l.encode({
                        cb: this.registerCallback(oa, qa, ra),
                        origin: da + '/' + ca,
                        domain: location.hostname,
                        relation: pa || 'opener'
                    });
                },
                registerCallback: function(oa, pa, qa) {
                    qa = qa || j();
                    if (pa) na._forever[qa] = true;
                    na._callbacks[qa] = oa;
                    return qa;
                }
            };
            (function() {
                var oa = location.href.match(/[?&]fb_xd_fragment#(.*)$/);
                if (oa) {
                    document.documentElement.style.display = 'none';
                    var pa = l.decode(oa[1]),
                        qa = o(pa.xd_rel);
                    k.debug('Passing fragment based message: %s', oa[1]);
                    qa.FB_XD_onMessage(pa);
                    document.open();
                    document.close();
                }
            })();
            i.subscribe('init:post', function(oa) {
                ma(oa.channelUrl ? n(oa.channelUrl) : null, oa.xdProxyName);
            });
            e.exports = na;
        });
        __d("sdk.Auth", ["sdk.Cookie", "copyProperties", "sdk.createIframe", "DOMWrapper", "sdk.getContextType", "guid", "Log", "ObservableMixin", "QueryString", "sdk.Runtime", "sdk.SignedRequest", "UrlMap", "URL", "sdk.XD"], function(a, b, c, d, e, f) {
            var g = b('sdk.Cookie'),
                h = b('copyProperties'),
                i = b('sdk.createIframe'),
                j = b('DOMWrapper'),
                k = b('sdk.getContextType'),
                l = b('guid'),
                m = b('Log'),
                n = b('ObservableMixin'),
                o = b('QueryString'),
                p = b('sdk.Runtime'),
                q = b('sdk.SignedRequest'),
                r = b('UrlMap'),
                s = b('URL'),
                t = b('sdk.XD'),
                u, v, w = new n();

            function x(da, ea) {
                var fa = p.getUserID(),
                    ga = 0;
                if (da) if (da.userID) {
                    ga = da.userID;
                } else if (da.signedRequest) {
                    var ha = q.parse(da.signedRequest);
                    if (ha && ha.user_id) ga = ha.user_id;
                }
                var ia = !fa && da,
                    ja = fa && !da,
                    ka = da && fa && fa != ga,
                    la = da != u,
                    ma = ea != (p.getLoginStatus() || 'unknown');
                p.setLoginStatus(ea);
                p.setAccessToken(da && da.accessToken || null);
                p.setUserID(ga);
                u = da;
                var na = {
                    authResponse: da,
                    status: ea
                };
                if (ja || ka) w.inform('logout', na);
                if (ia || ka) w.inform('login', na);
                if (la) w.inform('authresponse.change', na);
                if (ma) w.inform('status.change', na);
                return na;
            }
            function y() {
                return u;
            }
            function z(da, ea, fa) {
                return function(ga) {
                    var ha;
                    if (ga && ga.access_token) {
                        var ia = q.parse(ga.signed_request);
                        ea = {
                            accessToken: ga.access_token,
                            userID: ia.user_id,
                            expiresIn: parseInt(ga.expires_in, 10),
                            signedRequest: ga.signed_request
                        };
                        if (p.getUseCookie()) {
                            var ja = ea.expiresIn === 0 ? 0 : ES5('Date', 'now', false) + ea.expiresIn * 1000,
                                ka = g.getDomain();
                            if (!ka && ga.base_domain) g.setDomain('.' + ga.base_domain);
                            g.setSignedRequestCookie(ga.signed_request, ja);
                        }
                        ha = 'connected';
                        x(ea, ha);
                    } else if (fa === 'logout' || fa === 'login_status') {
                        if (ga.error && ga.error === 'not_authorized') {
                            ha = 'not_authorized';
                        } else ha = 'unknown';
                        x(null, ha);
                        if (p.getUseCookie()) g.clearSignedRequestCookie();
                    }
                    if (ga && ga.https == 1) p.setSecure(true);
                    if (da) da({
                        authResponse: ea,
                        status: p.getLoginStatus()
                    });
                    return ea;
                };
            }
            function aa(da) {
                var ea;
                if (v) {
                    clearTimeout(v);
                    v = null;
                }
                var fa = z(da, u, 'login_status'),
                    ga = s(r.resolve('www', true) + '/dialog/oauth').setSearch(o.encode({
                        client_id: p.getClientID(),
                        response_type: 'token,signed_request,code',
                        display: 'none',
                        domain: location.hostname,
                        origin: k(),
                        redirect_uri: t.handler(function(ha) {
                            ea.parentNode.removeChild(ea);
                            if (fa(ha)) v = setTimeout(function() {
                                aa(function() {});
                            }, 1200000);
                        }, 'parent'),
                        sdk: 'joey'
                    }));
                ea = i({
                    root: j.getRoot(),
                    name: l(),
                    url: ga.toString(),
                    style: {
                        display: 'none'
                    }
                });
            }
            var ba;

            function ca(da, ea) {
                if (!p.getClientID()) {
                    m.warn('FB.getLoginStatus() called before calling FB.init().');
                    return;
                }
                if (da) if (!ea && ba == 'loaded') {
                    da({
                        status: p.getLoginStatus(),
                        authResponse: y()
                    });
                    return;
                } else w.subscribe('FB.loginStatus', da);
                if (!ea && ba == 'loading') return;
                ba = 'loading';
                var fa = function(ga) {
                        ba = 'loaded';
                        w.inform('FB.loginStatus', ga);
                        w.clearSubscribers('FB.loginStatus');
                    };
                aa(fa);
            }
            h(w, {
                getLoginStatus: ca,
                fetchLoginStatus: aa,
                setAuthResponse: x,
                getAuthResponse: y,
                parseSignedRequest: q.parse,
                xdResponseWrapper: z
            });
            e.exports = w;
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
        __d("hasArrayNature", [], function(a, b, c, d, e, f) {
            function g(h) {
                return ( !! h && (typeof h == 'object' || typeof h == 'function') && ('length' in h) && !('setInterval' in h) && (Object.prototype.toString.call(h) === "[object Array]" || ('callee' in h) || ('item' in h)));
            }
            e.exports = g;
        });
        __d("createArrayFrom", ["hasArrayNature"], function(a, b, c, d, e, f) {
            var g = b('hasArrayNature');

            function h(i) {
                if (!g(i)) return [i];
                if (i.item) {
                    var j = i.length,
                        k = new Array(j);
                    while (j--) k[j] = i[j];
                    return k;
                }
                return Array.prototype.slice.call(i);
            }
            e.exports = h;
        });
        __d("sdk.DOM", ["Assert", "createArrayFrom", "DOMEventListener", "sdk.domReady", "UserAgent"], function(a, b, c, d, e, f) {
            var g = b('Assert'),
                h = b('createArrayFrom'),
                i = b('DOMEventListener'),
                j = b('sdk.domReady'),
                k = b('UserAgent'),
                l = {};

            function m(aa, ba) {
                var ca = (aa.getAttribute(ba) || aa.getAttribute(ba.replace(/_/g, '-')) || aa.getAttribute(ba.replace(/-/g, '_')) || aa.getAttribute(ba.replace(/-/g, '')) || aa.getAttribute(ba.replace(/_/g, '')) || aa.getAttribute('data-' + ba) || aa.getAttribute('data-' + ba.replace(/_/g, '-')) || aa.getAttribute('data-' + ba.replace(/-/g, '_')) || aa.getAttribute('data-' + ba.replace(/-/g, '')) || aa.getAttribute('data-' + ba.replace(/_/g, '')));
                return ca ? String(ca) : null;
            }
            function n(aa, ba) {
                var ca = m(aa, ba);
                return ca ? /^(true|1|yes|on)$/.test(ca) : null;
            }
            function o(aa, ba) {
                g.isTrue( !! aa, 'element not specified');
                g.isString(ba);
                try {
                    return String(aa[ba]);
                } catch (ca) {
                    throw new Error('Could not read property ' + ba + ' : ' + ca.message);
                }
            }
            function p(aa, ba) {
                g.isTrue( !! aa, 'element not specified');
                g.isString(ba);
                try {
                    aa.innerHTML = ba;
                } catch (ca) {
                    throw new Error('Could not set innerHTML : ' + ca.message);
                }
            }
            function q(aa, ba) {
                g.isTrue( !! aa, 'element not specified');
                g.isString(ba);
                var ca = ' ' + o(aa, 'className') + ' ';
                return ES5(ca, 'indexOf', true, ' ' + ba + ' ') >= 0;
            }
            function r(aa, ba) {
                g.isTrue( !! aa, 'element not specified');
                g.isString(ba);
                if (!q(aa, ba)) aa.className = o(aa, 'className') + ' ' + ba;
            }
            function s(aa, ba) {
                g.isTrue( !! aa, 'element not specified');
                g.isString(ba);
                var ca = new RegExp('\\s*' + ba, 'g');
                aa.className = ES5(o(aa, 'className').replace(ca, ''), 'trim', true);
            }
            function t(aa, ba, ca) {
                g.isString(aa);
                ba = ba || document.body;
                ca = ca || '*';
                if (ba.querySelectorAll) return h(ba.querySelectorAll(ca + '.' + aa));
                var da = ba.getElementsByTagName(ca),
                    ea = [];
                for (var fa = 0, ga = da.length; fa < ga; fa++) if (q(da[fa], aa)) ea[ea.length] = da[fa];
                return ea;
            }
            function u(aa, ba) {
                g.isTrue( !! aa, 'element not specified');
                g.isString(ba);
                ba = ba.replace(/-(\w)/g, function(ea, fa) {
                    return fa.toUpperCase();
                });
                var ca = aa.currentStyle || document.defaultView.getComputedStyle(aa, null),
                    da = ca[ba];
                if (/backgroundPosition?/.test(ba) && /top|left/.test(da)) da = '0%';
                return da;
            }
            function v(aa, ba, ca) {
                g.isTrue( !! aa, 'element not specified');
                g.isString(ba);
                ba = ba.replace(/-(\w)/g, function(da, ea) {
                    return ea.toUpperCase();
                });
                aa.style[ba] = ca;
            }
            function w(aa, ba) {
                var ca = true;
                for (var da = 0, ea; ea = ba[da++];) if (!(ea in l)) {
                    ca = false;
                    l[ea] = true;
                }
                if (ca) return;
                if (!k.ie()) {
                    var fa = document.createElement('style');
                    fa.type = 'text/css';
                    fa.textContent = aa;
                    document.getElementsByTagName('head')[0].appendChild(fa);
                } else try {
                    document.createStyleSheet().cssText = aa;
                } catch (ga) {
                    if (document.styleSheets[0]) document.styleSheets[0].cssText += aa;
                }
            }
            function x() {
                var aa = (document.documentElement && document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;
                return {
                    scrollTop: aa.scrollTop || document.body.scrollTop,
                    scrollLeft: aa.scrollLeft || document.body.scrollLeft,
                    width: window.innerWidth ? window.innerWidth : aa.clientWidth,
                    height: window.innerHeight ? window.innerHeight : aa.clientHeight
                };
            }
            function y(aa) {
                g.isTrue( !! aa, 'element not specified');
                var ba = 0,
                    ca = 0;
                do {
                    ba += aa.offsetLeft;
                    ca += aa.offsetTop;
                } while (aa = aa.offsetParent);
                return {
                    x: ba,
                    y: ca
                };
            }
            var z = {
                containsCss: q,
                addCss: r,
                removeCss: s,
                getByClass: t,
                getStyle: u,
                setStyle: v,
                getAttr: m,
                getBoolAttr: n,
                getProp: o,
                html: p,
                addCssRules: w,
                getViewportInfo: x,
                getPosition: y,
                ready: j
            };
            e.exports = z;
        });
        __d("sdk.Scribe", ["UrlMap", "QueryString"], function(a, b, c, d, e, f) {
            var g = b('UrlMap'),
                h = b('QueryString');

            function i(k, l) {
                (new Image()).src = h.appendToUrl(g.resolve('www', true) + '/common/scribe_endpoint.php', {
                    c: k,
                    m: ES5('JSON', 'stringify', false, l)
                });
            }
            var j = {
                log: i
            };
            e.exports = j;
        });
        __d("sdk.ErrorHandling", ["UserAgent", "sdk.Scribe", "sdk.Runtime", "wrapFunction", "ManagedError", "SDKConfig"], function(a, b, c, d, e, f) {
            var g = b('UserAgent'),
                h = b('sdk.Scribe'),
                i = c('SDKConfig'),
                j = b('sdk.Runtime'),
                k = b('wrapFunction'),
                l = b('ManagedError'),
                m = false;

            function n(t) {
                var u = t._originalError;
                delete t._originalError;
                h.log('jssdk_error', {
                    appId: j.getClientID(),
                    error: t.name || t.message,
                    extra: t
                });
                throw u;
            }
            function o(t) {
                var u = {
                    line: t.lineNumber || t.line,
                    message: t.message,
                    name: t.name,
                    script: t.fileName || t.sourceURL || t.script,
                    stack: t.stackTrace || t.stack
                };
                u._originalError = t;
                if (g.chrome() && /([\w:\.\/]+\.js):(\d+)/.test(t.stack)) {
                    u.script = RegExp.$1;
                    u.line = parseInt(RegExp.$2, 10);
                }
                for (var v in u)(u[v] == null && delete u[v]);
                return u;
            }
            function p(t, u) {
                return function() {
                    if (!m) return t.apply(this, arguments);
                    try {
                        return t.apply(this, arguments);
                    } catch (v) {
                        if (v instanceof l) throw v;
                        var w = o(v);
                        w.entry = u;
                        var x = ES5(Array.prototype.slice.call(arguments), 'map', true, function(y) {
                            var z = Object.prototype.toString.call(y);
                            return (/^\[object (String|Number|Boolean|Object|Date)\]$/).test(z) ? y : y.toString();
                        });
                        w.args = ES5('JSON', 'stringify', false, x).substring(0, 200);
                        n(w);
                    }
                };
            }
            function q(t) {
                if (!t.__wrapper) t.__wrapper = function() {
                    try {
                        return t.apply(this, arguments);
                    } catch (u) {
                        setTimeout(function() {
                            throw u;
                        }, 0);
                        return false;
                    }
                };
                return t.__wrapper;
            }
            var r = i.errorHandling.rate;
            if (r && Math.floor(Math.random() * 100) + 1 <= r) m = true;
            if (m) k.setWrapper(p, 'entry');
            var s = {
                guard: p,
                unguard: q
            };
            e.exports = s;
        });
        __d("GlobalCallback", ["wrapFunction", "dotAccess"], function(a, b, c, d, e, f) {
            var g = b('wrapFunction'),
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
                        i[n] = g(m, 'entry', 'GlobalCallback');
                        return j + '.' + n;
                    },
                    remove: function(m) {
                        var n = m.substring(j.length + 1);
                        delete i[n];
                    }
                };
            e.exports = l;
        });
        __d("sdk.Impressions", ["guid", "QueryString", "sdk.Runtime", "UrlMap"], function(a, b, c, d, e, f) {
            var g = b('guid'),
                h = b('QueryString'),
                i = b('sdk.Runtime'),
                j = b('UrlMap');

            function k(m) {
                var n = i.getClientID();
                if (!m.api_key && n) m.api_key = n;
                var o = new Image();
                o.src = h.appendToUrl(j.resolve('www', true) + '/impression.php/' + g() + '/', m);
            }
            var l = {
                log: function(m, n) {
                    if (!n.source) n.source = 'jssdk';
                    k({
                        lid: m,
                        payload: ES5('JSON', 'stringify', false, n)
                    });
                },
                impression: k
            };
            e.exports = l;
        });
        __d("sdk.Insights", ["sdk.Impressions"], function(a, b, c, d, e, f) {
            var g = b('sdk.Impressions'),
                h = {
                    TYPE: {
                        NOTICE: 'notice',
                        WARNING: 'warn',
                        ERROR: 'error'
                    },
                    CATEGORY: {
                        DEPRECATED: 'deprecated',
                        APIERROR: 'apierror'
                    },
                    log: function(i, j, k) {
                        var l = {
                            source: 'jssdk',
                            type: i,
                            category: j,
                            payload: k
                        };
                        g.log(113, l);
                    },
                    impression: g.impression
                };
            e.exports = h;
        });
        __d("FB", ["sdk.Auth", "copyProperties", "dotAccess", "sdk.domReady", "sdk.DOM", "sdk.ErrorHandling", "sdk.Content", "DOMWrapper", "GlobalCallback", "sdk.Insights", "Log", "sdk.Runtime", "sdk.Scribe", "CssConfig", "SDKConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.Auth'),
                h = b('copyProperties'),
                i = c('CssConfig'),
                j = b('dotAccess'),
                k = b('sdk.domReady'),
                l = b('sdk.DOM'),
                m = b('sdk.ErrorHandling'),
                n = b('sdk.Content'),
                o = b('DOMWrapper'),
                p = b('GlobalCallback'),
                q = b('sdk.Insights'),
                r = b('Log'),
                s = b('sdk.Runtime'),
                t = b('sdk.Scribe'),
                u = c('SDKConfig'),
                v, w, x = j(u, 'api.mode'),
                y = {};
            v = window.FB = {};
            var z = {};
            r.level = 1;
            p.setPrefix('FB._callbacks');
            var aa = document.createElement('div');
            o.setRoot(aa);
            k(function() {
                r.info('domReady');
                n.appendHidden(aa);
                if (i.rules) l.addCssRules(i.rules, i.components);
            });
            s.subscribe('AccessToken.change', function(da) {
                if (!da && s.getLoginStatus() === 'connected') g.getLoginStatus(null, true);
            });
            if (j(u, 'api.whitelist.length')) {
                w = {};
                ES5(u.api.whitelist, 'forEach', true, function(da) {
                    w[da] = 1;
                });
            }
            function ba(da, ea, fa, ga) {
                var ha;
                if (/^_/.test(fa)) {
                    ha = 'hide';
                } else if (w && !w[ea]) ha = x;
                switch (ha) {
                case 'hide':
                    return;
                case 'stub':
                    return function() {
                        r.warn('The method FB.%s has been removed from the JS SDK.', ea);
                    };
                    break;
                default:
                    return m.guard(function() {
                        if (ha === 'warn') {
                            r.warn('The method FB.%s is not officially supported by ' + 'Facebook and access to it will soon be removed.', ea);
                            if (!y.hasOwnProperty(ea)) {
                                q.log(q.TYPE.WARNING, q.CATEGORY.DEPRECATED, 'FB.' + ea);
                                t.log('jssdk_error', {
                                    appId: s.getClientID(),
                                    error: 'Private method used',
                                    extra: {
                                        args: ea
                                    }
                                });
                                y[ea] = true;
                            }
                        }
                        function ia(qa) {
                            if (ES5('Array', 'isArray', false, qa)) return ES5(qa, 'map', true, ia);
                            if (qa && typeof qa === 'object' && qa.__wrapped) return qa.__wrapped;
                            return typeof qa === 'function' && /^function/.test(qa.toString()) ? m.unguard(qa) : qa;
                        }
                        var ja = ES5(Array.prototype.slice.call(arguments), 'map', true, ia),
                            ka = da.apply(ga, ja),
                            la, ma = true;
                        if (ka && typeof ka === 'object') {
                            var na = Function();
                            na.prototype = ka;
                            la = new na();
                            la.__wrapped = ka;
                            for (var oa in ka) {
                                var pa = ka[oa];
                                if (typeof pa !== 'function' || oa === 'constructor') continue;
                                ma = false;
                                la[oa] = ba(pa, ea + ':' + oa, oa, ka);
                            }
                        }
                        if (!ma) return la;
                        return ma ? ka : la;
                    }, ea);
                }
            }
            function ca(da, ea) {
                var fa = da ? j(v, da, true) : v;
                ES5(ES5('Object', 'keys', false, ea), 'forEach', true, function(ga) {
                    var ha = ea[ga];
                    if (typeof ha === 'function') {
                        var ia = (da ? da + '.' : '') + ga,
                            ja = ba(ha, ia, ga, ea);
                        if (ja) fa[ga] = ja;
                    }
                });
            }
            s.setSecure((function() {
                var da = /iframe_canvas|app_runner/.test(window.name),
                    ea = /dialog/.test(window.name);
                if (location.protocol == 'https:' && (window == top || !(da || ea))) return true;
                if (/_fb_https?/.test(window.name)) return ES5(window.name, 'indexOf', true, '_fb_https') != -1;
            })());
            h(z, {
                provide: ca
            });
            e.exports = z;
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
        __d("CORSRequest", ["wrapFunction", "QueryString"], function(a, b, c, d, e, f) {
            var g = b('wrapFunction'),
                h = b('QueryString');

            function i(l, m) {
                if (!self.XMLHttpRequest) return null;
                var n = new XMLHttpRequest(),
                    o = function() {};
                if ('withCredentials' in n) {
                    n.open(l, m, true);
                    n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                } else if (self.XDomainRequest) {
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
                    r = g(function() {
                        r = o;
                        if ('onload' in q) q.onload(n);
                    }, 'entry', 'XMLHttpRequest:load'),
                    s = g(function() {
                        s = o;
                        if ('onerror' in q) q.onerror(n);
                    }, 'entry', 'XMLHttpRequest:error');
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
        __d("ArgumentError", ["ManagedError"], function(a, b, c, d, e, f) {
            var g = b('ManagedError');

            function h(i, j) {
                g.prototype.constructor.apply(this, arguments);
            }
            h.prototype = new g();
            h.prototype.constructor = h;
            e.exports = h;
        });
        __d("ApiClient", ["copyProperties", "flattenObject", "sprintf", "CORSRequest", "FlashRequest", "JSONPRequest", "Log", "UrlMap", "URL", "ArgumentError", "Assert", "ApiClientConfig"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('flattenObject'),
                i = b('sprintf'),
                j = b('CORSRequest'),
                k = b('FlashRequest'),
                l = b('JSONPRequest'),
                m = b('Log'),
                n = b('UrlMap'),
                o = b('URL'),
                p = b('ArgumentError'),
                q = b('Assert'),
                r = c('ApiClientConfig'),
                s, t, u, v, w = {
                    get: true,
                    post: true,
                    'delete': true,
                    put: true
                },
                x = {
                    fql_query: true,
                    fql_multiquery: true,
                    friends_get: true,
                    notifications_get: true,
                    stream_get: true,
                    users_getinfo: true
                };

            function y(ca, da, ea, fa) {
                if (!ea.access_token) ea.access_token = s;
                ea.pretty = 0;
                if (v) g(ea, v);
                ea = h(ea);
                if (!fa) {
                    m.warn('No callback passed to the ApiClient for %s', ca);
                    fa = function() {};
                }
                var ga = {
                    jsonp: l,
                    cors: j,
                    flash: k
                },
                    ha;
                if (ea.transport) {
                    ha = [ea.transport];
                    delete ea.transport;
                } else ha = ['jsonp', 'cors', 'flash'];
                var ia = function(ma) {
                        var na = false;
                        if (t && ma && typeof ma == 'object') {
                            if (ma.error) {
                                if (ma.error == 'invalid_token' || (ma.error.type == 'OAuthException' && ma.error.code == 190)) na = true;
                            } else if (ma.error_code) if (ma.error_code == '190') na = true;
                            if (na) t();
                        }
                        fa(ma);
                    };
                for (var ja = 0; ja < ha.length; ja++) {
                    var ka = ga[ha[ja]],
                        la = g({}, ea);
                    if (ka.execute(ca, da, la, ia)) return;
                }
                fa({
                    error: {
                        type: 'no-transport',
                        message: 'Could not find a usable transport for request'
                    }
                });
            }
            function z(ca) {
                q.isString(ca, 'Invalid path');
                var da, ea = {};
                try {
                    da = new o(ca);
                } catch (fa) {
                    throw new p(fa.message, fa);
                }
                ES5(Array.prototype.slice.call(arguments, 1), 'forEach', true, function(ja) {
                    ea[typeof ja] = ja;
                });
                var ga = (ea.string || 'get').toLowerCase(),
                    ha = g(ea.object || {}, da.getParsedSearch()),
                    ia = ea['function'];
                q.isTrue(ga in w, i('Invalid method passed to ApiClient: %s', ga));
                ha.method = ga;
                da = n.resolve('graph') + da.getPath();
                y(da, ga == 'get' ? 'get' : 'post', ha, ia);
            }
            function aa(ca, da) {
                q.isObject(ca);
                q.isString(ca.method, 'method missing');
                var ea = ca.method.toLowerCase().replace('.', '_');
                ca.format = 'json-strings';
                ca.api_key = u;
                var fa = ea in x ? 'api_read' : 'api',
                    ga = n.resolve(fa) + '/restserver.php';
                y(ga, 'get', ca, da);
            }
            var ba = {
                setAccessToken: function(ca) {
                    s = ca;
                },
                setInvalidAccessTokenHandler: function(ca) {
                    t = ca;
                },
                setClientID: function(ca) {
                    u = ca;
                },
                setDefaultParams: function(ca) {
                    v = ca;
                },
                rest: aa,
                graph: z
            };
            k.setSwfUrl(r.FlashRequest.swfUrl);
            e.exports = ba;
        });
        __d("sdk.api", ["ApiClient", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('ApiClient'),
                h = b('sdk.Runtime'),
                i;
            h.subscribe('ClientID.change', function(k) {
                g.setClientID(k);
            });
            h.subscribe('AccessToken.change', function(k) {
                i = k;
                g.setAccessToken(k);
            });
            g.setDefaultParams({
                sdk: 'joey'
            });
            g.setInvalidAccessTokenHandler(function() {
                if (i === h.getAccessToken()) h.setAccessToken(null);
            });

            function j() {
                if (typeof arguments[0] === 'string') {
                    g.graph.apply(g, arguments);
                } else g.rest.apply(g, arguments);
            }
            e.exports = j;
        });
        __d("legacy:fb.api", ["FB", "sdk.api"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('sdk.api');
            e.provide('', {
                api: f
            });
        }, 3);
        __d("sdk.Canvas.Environment", ["sdk.Runtime", "Log", "sdk.RPC"], function(a, b, c, d, e, f) {
            var g = b('sdk.Runtime'),
                h = b('Log'),
                i = b('sdk.RPC');

            function j(m) {
                if (typeof m !== 'function') {
                    h.error('FB.Canvas.getPageInfo called without a callback');
                    return;
                }
                if (!g.getInitialized()) h.warn('FB.init is required for getPageInfo to take effect');
                i.remote.getPageInfo(function(n) {
                    m(n.result);
                });
            }
            function k(m, n) {
                if (!g.getInitialized()) h.warn('FB.init is required for scrollTo to take effect');
                i.remote.scrollTo({
                    x: m || 0,
                    y: n || 0
                });
            }
            i.stub('getPageInfo');
            i.stub('scrollTo');
            var l = {
                getPageInfo: j,
                scrollTo: k
            };
            e.exports = l;
        });
        __d("sdk.Intl", ["Log"], function(a, b, c, d, e, f) {
            var g = b('Log'),
                h = ('[' + '.!?' + '\u3002' + '\uFF01' + '\uFF1F' + '\u0964' + '\u2026' + '\u0EAF' + '\u1801' + '\u0E2F' + '\uFF0E' + ']');

            function i(l) {
                if (typeof l != 'string') return false;
                return !!l.match(new RegExp(h + '[' + ')"' + "'" + '\u00BB' + '\u0F3B' + '\u0F3D' + '\u2019' + '\u201D' + '\u203A' + '\u3009' + '\u300B' + '\u300D' + '\u300F' + '\u3011' + '\u3015' + '\u3017' + '\u3019' + '\u301B' + '\u301E' + '\u301F' + '\uFD3F' + '\uFF07' + '\uFF09' + '\uFF3D' + '\\s' + ']*$'));
            }
            function j(l, m) {
                if (m !== undefined) if (typeof m != 'object') {
                    g.error('The second arg to FB.Intl.tx() must be an Object for ' + 'FB.Intl.tx(' + l + ', ...)');
                } else {
                    var n;
                    for (var o in m) if (m.hasOwnProperty(o)) {
                        if (i(m[o])) {
                            n = new RegExp('\\{' + o + '\\}' + h + '*', 'g');
                        } else n = new RegExp('\\{' + o + '\\}', 'g');
                        l = l.replace(n, m[o]);
                    }
                }
                return l;
            }
            function k() {
                throw new Error('Placeholder function');
            }
            k._ = j;
            e.exports = {
                tx: k
            };
        });
        __d("sdk.Dialog", ["sdk.Canvas.Environment", "sdk.Content", "sdk.DOM", "DOMEventListener", "sdk.Event", "sdk.Intl", "ObservableMixin", "sdk.Runtime", "Type", "UserAgent"], function(a, b, c, d, e, f) {
            var g = b('sdk.Canvas.Environment'),
                h = b('sdk.Content'),
                i = b('sdk.DOM'),
                j = b('DOMEventListener'),
                k = b('sdk.Event'),
                l = b('sdk.Intl'),
                m = b('ObservableMixin'),
                n = b('sdk.Runtime'),
                o = b('Type'),
                p = b('UserAgent'),
                q = o.extend({
                    constructor: function(s, t) {
                        this.parent();
                        this.id = s;
                        this.display = t;
                        if (!r._dialogs) {
                            r._dialogs = {};
                            r._addOrientationHandler();
                        }
                        r._dialogs[s] = this;
                    }
                }, m),
                r = {
                    newInstance: function(s, t) {
                        return new q(s, t);
                    },
                    _dialogs: null,
                    _lastYOffset: 0,
                    _loaderEl: null,
                    _overlayEl: null,
                    _stack: [],
                    _active: null,
                    get: function(s) {
                        return r._dialogs[s];
                    },
                    _findRoot: function(s) {
                        while (s) {
                            if (i.containsCss(s, 'fb_dialog')) return s;
                            s = s.parentNode;
                        }
                    },
                    _createWWWLoader: function(s) {
                        s = s ? s : 460;
                        return r.create({
                            content: ('<div class="dialog_title">' + '  <a id="fb_dialog_loader_close">' + '    <div class="fb_dialog_close_icon"></div>' + '  </a>' + '  <span>Facebook</span>' + '  <div style="clear:both;"></div>' + '</div>' + '<div class="dialog_content"></div>' + '<div class="dialog_footer"></div>'),
                            width: s
                        });
                    },
                    _createMobileLoader: function() {
                        var s = p.nativeApp() ? '' : ('<table>' + '  <tbody>' + '    <tr>' + '      <td class="header_left">' + '        <label class="touchable_button">' + '          <input type="submit" value="' + l.tx._("Cancel") + '"' + '            id="fb_dialog_loader_close"/>' + '        </label>' + '      </td>' + '      <td class="header_center">' + '        <div>' + l.tx._("Loading...") + '</div>' + '      </td>' + '      <td class="header_right">' + '      </td>' + '    </tr>' + '  </tbody>' + '</table>');
                        return r.create({
                            classes: 'loading' + (p.ipad() ? ' centered' : ''),
                            content: ('<div class="dialog_header">' + s + '</div>')
                        });
                    },
                    _restoreBodyPosition: function() {
                        if (!p.ipad()) {
                            var s = document.getElementsByTagName('body')[0];
                            i.removeCss(s, 'fb_hidden');
                        }
                    },
                    _showIPadOverlay: function() {
                        if (!p.ipad()) return;
                        if (!r._overlayEl) {
                            r._overlayEl = document.createElement('div');
                            r._overlayEl.setAttribute('id', 'fb_dialog_ipad_overlay');
                            h.append(r._overlayEl, null);
                        }
                        r._overlayEl.className = '';
                    },
                    _hideIPadOverlay: function() {
                        if (p.ipad()) r._overlayEl.className = 'hidden';
                    },
                    showLoader: function(s, t) {
                        r._showIPadOverlay();
                        if (!r._loaderEl) r._loaderEl = r._findRoot(p.mobile() ? r._createMobileLoader() : r._createWWWLoader(t));
                        if (!s) s = function() {};
                        var u = document.getElementById('fb_dialog_loader_close');
                        i.removeCss(u, 'fb_hidden');
                        u.onclick = function() {
                            r._hideLoader();
                            r._restoreBodyPosition();
                            r._hideIPadOverlay();
                            s();
                        };
                        var v = document.getElementById('fb_dialog_ipad_overlay');
                        if (v) v.ontouchstart = u.onclick;
                        r._makeActive(r._loaderEl);
                    },
                    _hideLoader: function() {
                        if (r._loaderEl && r._loaderEl == r._active) r._loaderEl.style.top = '-10000px';
                    },
                    _makeActive: function(s) {
                        r._setDialogSizes();
                        r._lowerActive();
                        r._active = s;
                        if (n.isEnvironment(n.ENVIRONMENTS.CANVAS)) g.getPageInfo(function(t) {
                            r._centerActive(t);
                        });
                        r._centerActive();
                    },
                    _lowerActive: function() {
                        if (!r._active) return;
                        r._active.style.top = '-10000px';
                        r._active = null;
                    },
                    _removeStacked: function(s) {
                        r._stack = ES5(r._stack, 'filter', true, function(t) {
                            return t != s;
                        });
                    },
                    _centerActive: function(s) {
                        var t = r._active;
                        if (!t) return;
                        var u = i.getViewportInfo(),
                            v = parseInt(t.offsetWidth, 10),
                            w = parseInt(t.offsetHeight, 10),
                            x = u.scrollLeft + (u.width - v) / 2,
                            y = (u.height - w) / 2.5;
                        if (x < y) y = x;
                        var z = u.height - w - y,
                            aa = (u.height - w) / 2;
                        if (s) aa = s.scrollTop - s.offsetTop + (s.clientHeight - w) / 2;
                        if (aa < y) {
                            aa = y;
                        } else if (aa > z) aa = z;
                        aa += u.scrollTop;
                        if (p.mobile()) {
                            var ba = 100;
                            if (p.ipad()) {
                                ba += (u.height - w) / 2;
                            } else {
                                var ca = document.getElementsByTagName('body')[0];
                                i.addCss(ca, 'fb_hidden');
                                x = 10000;
                                aa = 10000;
                            }
                            var da = i.getByClass('fb_dialog_padding', t);
                            if (da.length) da[0].style.height = ba + 'px';
                        }
                        t.style.left = (x > 0 ? x : 0) + 'px';
                        t.style.top = (aa > 0 ? aa : 0) + 'px';
                    },
                    _setDialogSizes: function() {
                        if (!p.mobile() || p.ipad()) return;
                        for (var s in r._dialogs) if (r._dialogs.hasOwnProperty(s)) {
                            var t = document.getElementById(s);
                            if (t) {
                                t.style.width = r.getDefaultSize().width + 'px';
                                t.style.height = r.getDefaultSize().height + 'px';
                            }
                        }
                    },
                    getDefaultSize: function() {
                        if (p.mobile()) if (p.ipad()) {
                            return {
                                width: 500,
                                height: 590
                            };
                        } else if (p.android()) {
                            return {
                                width: screen.availWidth,
                                height: screen.availHeight
                            };
                        } else {
                            var s = window.innerWidth,
                                t = window.innerHeight,
                                u = s / t > 1.2;
                            return {
                                width: s,
                                height: Math.max(t, (u ? screen.width : screen.height))
                            };
                        }
                        return {
                            width: 575,
                            height: 240
                        };
                    },
                    _handleOrientationChange: function(s) {
                        if (p.android() && screen.availWidth == r._availScreenWidth) {
                            setTimeout(r._handleOrientationChange, 50);
                            return;
                        }
                        r._availScreenWidth = screen.availWidth;
                        if (p.ipad()) {
                            r._centerActive();
                        } else {
                            var t = r.getDefaultSize().width;
                            for (var u in r._dialogs) if (r._dialogs.hasOwnProperty(u)) {
                                var v = document.getElementById(u);
                                if (v) v.style.width = t + 'px';
                            }
                        }
                    },
                    _addOrientationHandler: function() {
                        if (!p.mobile()) return;
                        var s = "onorientationchange" in window ? 'orientationchange' : 'resize';
                        r._availScreenWidth = screen.availWidth;
                        j.add(window, s, r._handleOrientationChange);
                    },
                    create: function(s) {
                        s = s || {};
                        var t = document.createElement('div'),
                            u = document.createElement('div'),
                            v = 'fb_dialog';
                        if (s.closeIcon && s.onClose) {
                            var w = document.createElement('a');
                            w.className = 'fb_dialog_close_icon';
                            w.onclick = s.onClose;
                            t.appendChild(w);
                        }
                        v += ' ' + (s.classes || '');
                        if (p.ie()) {
                            v += ' fb_dialog_legacy';
                            ES5(['vert_left', 'vert_right', 'horiz_top', 'horiz_bottom', 'top_left', 'top_right', 'bottom_left', 'bottom_right'], 'forEach', true, function(z) {
                                var aa = document.createElement('span');
                                aa.className = 'fb_dialog_' + z;
                                t.appendChild(aa);
                            });
                        } else v += p.mobile() ? ' fb_dialog_mobile' : ' fb_dialog_advanced';
                        if (s.content) h.append(s.content, u);
                        t.className = v;
                        var x = parseInt(s.width, 10);
                        if (!isNaN(x)) t.style.width = x + 'px';
                        u.className = 'fb_dialog_content';
                        t.appendChild(u);
                        if (p.mobile()) {
                            var y = document.createElement('div');
                            y.className = 'fb_dialog_padding';
                            t.appendChild(y);
                        }
                        h.append(t);
                        if (s.visible) r.show(t);
                        return u;
                    },
                    show: function(s) {
                        var t = r._findRoot(s);
                        if (t) {
                            r._removeStacked(t);
                            r._hideLoader();
                            r._makeActive(t);
                            r._stack.push(t);
                            if ('fbCallID' in s) r.get(s.fbCallID).inform('iframe_show');
                        }
                    },
                    hide: function(s) {
                        var t = r._findRoot(s);
                        if (t == r._active) {
                            r._lowerActive();
                            r._restoreBodyPosition();
                            r._hideIPadOverlay();
                            if ('fbCallID' in s) r.get(s.fbCallID).inform('iframe_hide');
                        }
                    },
                    remove: function(s) {
                        s = r._findRoot(s);
                        if (s) {
                            var t = r._active == s;
                            r._removeStacked(s);
                            if (t) {
                                r._hideLoader();
                                if (r._stack.length > 0) {
                                    r.show(r._stack.pop());
                                } else {
                                    r._lowerActive();
                                    r._restoreBodyPosition();
                                    r._hideIPadOverlay();
                                }
                            } else if (r._active === null && r._stack.length > 0) r.show(r._stack.pop());
                            setTimeout(function() {
                                s.parentNode.removeChild(s);
                            }, 3000);
                        }
                    },
                    isActive: function(s) {
                        var t = r._findRoot(s);
                        return t && t === r._active;
                    }
                };
            e.exports = r;
        });
        __d("sdk.Frictionless", ["sdk.Auth", "sdk.api", "sdk.Event", "sdk.Dialog"], function(a, b, c, d, e, f) {
            var g = b('sdk.Auth'),
                h = b('sdk.api'),
                i = b('sdk.Event'),
                j = b('sdk.Dialog'),
                k = {
                    _allowedRecipients: {},
                    _useFrictionless: false,
                    _updateRecipients: function() {
                        k._allowedRecipients = {};
                        h('/me/apprequestformerrecipients', function(l) {
                            if (!l || l.error) return;
                            ES5(l.data, 'forEach', true, function(m) {
                                k._allowedRecipients[m.recipient_id] = true;
                            });
                        });
                    },
                    init: function() {
                        k._useFrictionless = true;
                        g.getLoginStatus(function(l) {
                            if (l.status == 'connected') k._updateRecipients();
                        });
                        i.subscribe('auth.login', function(l) {
                            if (l.authResponse) k._updateRecipients();
                        });
                    },
                    _processRequestResponse: function(l, m) {
                        return function(n) {
                            var o = n && n.updated_frictionless;
                            if (k._useFrictionless && o) k._updateRecipients();
                            if (n) {
                                if (!m && n.frictionless) {
                                    j._hideLoader();
                                    j._restoreBodyPosition();
                                    j._hideIPadOverlay();
                                }
                                delete n.frictionless;
                                delete n.updated_frictionless;
                            }
                            l && l(n);
                        };
                    },
                    isAllowed: function(l) {
                        if (!l) return false;
                        if (typeof l === 'number') return l in k._allowedRecipients;
                        if (typeof l === 'string') l = l.split(',');
                        l = ES5(l, 'map', true, function(o) {
                            return ES5(String(o), 'trim', true);
                        });
                        var m = true,
                            n = false;
                        ES5(l, 'forEach', true, function(o) {
                            m = m && o in k._allowedRecipients;
                            n = true;
                        });
                        return m && n;
                    }
                };
            i.subscribe('init:post', function(l) {
                if (l.frictionlessRequests) k.init();
            });
            e.exports = k;
        });
        __d("insertIframe", ["guid", "GlobalCallback"], function(a, b, c, d, e, f) {
            var g = b('guid'),
                h = b('GlobalCallback');

            function i(j) {
                j.id = j.id || g();
                j.name = j.name || g();
                var k = false,
                    l = false,
                    m = function() {
                        if (k && !l) {
                            l = true;
                            j.onload && j.onload(j.root.firstChild);
                        }
                    },
                    n = h.create(m);
                if (document.attachEvent) {
                    var o = ('<iframe' + ' id="' + j.id + '"' + ' name="' + j.name + '"' + (j.title ? ' title="' + j.title + '"' : '') + (j.className ? ' class="' + j.className + '"' : '') + ' style="border:none;' + (j.width ? 'width:' + j.width + 'px;' : '') + (j.height ? 'height:' + j.height + 'px;' : '') + '"' + ' src="javascript:false;"' + ' frameborder="0"' + ' scrolling="no"' + ' allowtransparency="true"' + ' onload="' + n + '()"' + '></iframe>');
                    j.root.innerHTML = ('<iframe src="javascript:false"' + ' frameborder="0"' + ' scrolling="no"' + ' style="height:1px"></iframe>');
                    k = true;
                    window.setTimeout(function() {
                        j.root.innerHTML = o;
                        j.root.firstChild.src = j.url;
                        j.onInsert && j.onInsert(j.root.firstChild);
                    }, 0);
                } else {
                    var p = document.createElement('iframe');
                    p.id = j.id;
                    p.name = j.name;
                    p.onload = m;
                    p.scrolling = 'no';
                    p.style.border = 'none';
                    p.style.overflow = 'hidden';
                    if (j.title) p.title = j.title;
                    if (j.className) p.className = j.className;
                    if (j.height !== undefined) p.style.height = j.height + 'px';
                    if (j.width !== undefined) if (j.width == '100%') {
                        p.style.width = j.width;
                    } else p.style.width = j.width + 'px';
                    j.root.appendChild(p);
                    k = true;
                    p.src = j.url;
                    j.onInsert && j.onInsert(p);
                }
            }
            e.exports = i;
        });
        __d("sdk.Native", ["copyProperties", "Log", "UserAgent"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('Log'),
                i = b('UserAgent'),
                j = 'fbNativeReady',
                k = {
                    onready: function(l) {
                        if (!i.nativeApp()) {
                            h.error('FB.Native.onready only works when the page is rendered ' + 'in a WebView of the native Facebook app. Test if this is the ' + 'case calling FB.UA.nativeApp()');
                            return;
                        }
                        if (window.__fbNative && !this.nativeReady) g(this, window.__fbNative);
                        if (this.nativeReady) {
                            l();
                        } else {
                            var m = function(n) {
                                    window.removeEventListener(j, m);
                                    this.onready(l);
                                };
                            window.addEventListener(j, m, false);
                        }
                    }
                };
            e.exports = k;
        });
        __d("sdk.UIServer", ["sdk.Auth", "sdk.Content", "copyProperties", "sdk.Dialog", "sdk.DOM", "sdk.Event", "flattenObject", "sdk.Frictionless", "sdk.getContextType", "guid", "insertIframe", "Log", "sdk.Native", "QueryString", "resolveURI", "sdk.RPC", "sdk.Runtime", "UrlMap", "UserAgent", "sdk.XD"], function(a, b, c, d, e, f) {
            var g = b('sdk.Auth'),
                h = b('sdk.Content'),
                i = b('copyProperties'),
                j = b('sdk.Dialog'),
                k = b('sdk.DOM'),
                l = b('sdk.Event'),
                m = b('flattenObject'),
                n = b('sdk.Frictionless'),
                o = b('sdk.getContextType'),
                p = b('guid'),
                q = b('insertIframe'),
                r = b('Log'),
                s = b('sdk.Native'),
                t = b('QueryString'),
                u = b('resolveURI'),
                v = b('sdk.RPC'),
                w = b('sdk.Runtime'),
                x = b('UrlMap'),
                y = b('UserAgent'),
                z = b('sdk.XD'),
                aa = {
                    transform: function(da) {
                        if (da.params.display === 'touch' && da.params.access_token && window.postMessage) {
                            da.params.channel = ca._xdChannelHandler(da.id, 'parent');
                            if (!y.nativeApp()) da.params.in_iframe = 1;
                            return da;
                        } else return ca.genericTransform(da);
                    },
                    getXdRelation: function(da) {
                        var ea = da.display;
                        if (ea === 'touch' && window.postMessage && da.in_iframe) return 'parent';
                        return ca.getXdRelation(da);
                    }
                },
                ba = {
                    'stream.share': {
                        size: {
                            width: 670,
                            height: 340
                        },
                        url: 'sharer.php',
                        transform: function(da) {
                            if (!da.params.u) da.params.u = window.location.toString();
                            da.params.display = 'popup';
                            return da;
                        }
                    },
                    'auth.logintofacebook': {
                        size: {
                            width: 530,
                            height: 287
                        },
                        url: 'login.php',
                        transform: function(da) {
                            da.params.skip_api_login = 1;
                            var ea = ca.getXdRelation(da.params),
                                fa = ca._xdResult(da.cb, da.id, ea, true);
                            da.params.next = x.resolve('www') + '/login.php?' + t.encode({
                                api_key: w.getClientID(),
                                next: fa,
                                skip_api_login: 1
                            });
                            return da;
                        }
                    },
                    apprequests: {
                        transform: function(da) {
                            da = aa.transform(da);
                            da.params.frictionless = n && n._useFrictionless;
                            if (da.params.frictionless) {
                                if (n.isAllowed(da.params.to)) {
                                    da.params.display = 'iframe';
                                    da.params.in_iframe = true;
                                    da.hideLoader = true;
                                }
                                da.cb = n._processRequestResponse(da.cb, da.hideLoader);
                            }
                            return da;
                        },
                        getXdRelation: aa.getXdRelation
                    },
                    feed: aa,
                    'permissions.oauth': {
                        url: 'dialog/oauth',
                        size: {
                            width: (y.mobile() ? null : 627),
                            height: (y.mobile() ? null : 326)
                        },
                        transform: function(da) {
                            if (!w.getClientID()) {
                                r.error('FB.login() called before FB.init().');
                                return;
                            }
                            if (g.getAuthResponse() && !da.params.scope) {
                                r.error('FB.login() called when user is already connected.');
                                da.cb && da.cb({
                                    status: w.getLoginStatus(),
                                    authResponse: g.getAuthResponse()
                                });
                                return;
                            }
                            var ea = da.cb,
                                fa = da.id;
                            delete da.cb;
                            if (da.params.display === 'async') {
                                i(da.params, {
                                    client_id: w.getClientID(),
                                    origin: o(),
                                    response_type: 'token,signed_request',
                                    domain: location.hostname
                                });
                                da.cb = g.xdResponseWrapper(ea, g.getAuthResponse(), 'permissions.oauth');
                            } else i(da.params, {
                                client_id: w.getClientID(),
                                redirect_uri: u(ca.xdHandler(ea, fa, 'opener', g.getAuthResponse(), 'permissions.oauth')),
                                origin: o(),
                                response_type: 'token,signed_request',
                                domain: location.hostname
                            });
                            return da;
                        }
                    },
                    'auth.logout': {
                        url: 'logout.php',
                        transform: function(da) {
                            if (!w.getClientID()) {
                                r.error('Log.errorout() called before calling FB.init().');
                            } else if (!g.getAuthResponse()) {
                                r.error('Log.errorout() called without an access token.');
                            } else {
                                da.params.next = ca.xdHandler(da.cb, da.id, 'parent', g.getAuthResponse(), 'logout');
                                return da;
                            }
                        }
                    },
                    'login.status': {
                        url: 'dialog/oauth',
                        transform: function(da) {
                            var ea = da.cb,
                                fa = da.id;
                            delete da.cb;
                            i(da.params, {
                                client_id: w.getClientID(),
                                redirect_uri: ca.xdHandler(ea, fa, 'parent', g.getAuthResponse(), 'login_status'),
                                origin: o(),
                                response_type: 'token,signed_request,code',
                                domain: location.hostname
                            });
                            return da;
                        }
                    }
                },
                ca = {
                    Methods: ba,
                    _loadedNodes: {},
                    _defaultCb: {},
                    _resultToken: '"xxRESULTTOKENxx"',
                    genericTransform: function(da) {
                        if (da.params.display == 'dialog' || da.params.display == 'iframe') i(da.params, {
                            display: 'iframe',
                            channel: ca._xdChannelHandler(da.id, 'parent.parent')
                        }, true);
                        return da;
                    },
                    prepareCall: function(da, ea) {
                        var fa = da.method.toLowerCase(),
                            ga = i({}, ca.Methods[fa]),
                            ha = p(),
                            ia = (ga.noHttps !== true) && (w.getSecure() || (fa !== 'auth.status' && fa != 'login.status'));
                        i(da, {
                            api_key: w.getClientID(),
                            app_id: w.getClientID(),
                            locale: w.getLocale(),
                            sdk: 'joey',
                            access_token: ia && w.getAccessToken() || undefined
                        });
                        da.display = ca.getDisplayMode(ga, da);
                        if (!ga.url) ga.url = 'dialog/' + fa;
                        var ja = {
                            cb: ea,
                            id: ha,
                            size: ga.size || ca.getDefaultSize(),
                            url: x.resolve('www', ia) + '/' + ga.url,
                            forceHTTPS: ia,
                            params: da,
                            name: fa,
                            dialog: j.newInstance(ha, da.display)
                        },
                            ka = ga.transform ? ga.transform : ca.genericTransform;
                        if (ka) {
                            ja = ka(ja);
                            if (!ja) return;
                        }
                        var la = ga.getXdRelation || ca.getXdRelation,
                            ma = la(ja.params);
                        if (!(ja.id in ca._defaultCb) && !('next' in ja.params) && !('redirect_uri' in ja.params)) ja.params.next = ca._xdResult(ja.cb, ja.id, ma, true);
                        if (ma === 'parent') i(ja.params, {
                            channel_url: ca._xdChannelHandler(ha, 'parent.parent')
                        }, true);
                        ja = ca.prepareParams(ja);
                        return ja;
                    },
                    prepareParams: function(da) {
                        var ea = da.params.method;
                        if (da.params.display !== 'async') delete da.params.method;
                        da.params = m(da.params);
                        var fa = t.encode(da.params);
                        if (!y.nativeApp() && ca.urlTooLongForIE(da.url + '?' + fa)) {
                            da.post = true;
                        } else if (fa) da.url += '?' + fa;
                        return da;
                    },
                    urlTooLongForIE: function(da) {
                        return da.length > 2000;
                    },
                    getDisplayMode: function(da, ea) {
                        if (ea.display === 'hidden' || ea.display === 'none') return ea.display;
                        var fa = w.isEnvironment(w.ENVIRONMENTS.CANVAS) || w.isEnvironment(w.ENVIRONMENTS.PAGETAB);
                        if (fa && !ea.display) return 'async';
                        if (y.mobile() || ea.display === 'touch') return 'touch';
                        if (!w.getAccessToken() && ea.display == 'dialog' && !da.loggedOutIframe) {
                            r.error('"dialog" mode can only be used when the user is connected.');
                            return 'popup';
                        }
                        if (da.connectDisplay && !fa) return da.connectDisplay;
                        return ea.display || (w.getAccessToken() ? 'dialog' : 'popup');
                    },
                    getXdRelation: function(da) {
                        var ea = da.display;
                        if (ea === 'popup' || ea === 'touch') return 'opener';
                        if (ea === 'dialog' || ea === 'iframe' || ea === 'hidden' || ea === 'none') return 'parent';
                        if (ea === 'async') return 'parent.frames[' + window.name + ']';
                    },
                    popup: function(da) {
                        var ea = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
                            fa = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
                            ga = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.documentElement.clientWidth,
                            ha = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.documentElement.clientHeight - 22),
                            ia = y.mobile() ? null : da.size.width,
                            ja = y.mobile() ? null : da.size.height,
                            ka = (ea < 0) ? window.screen.width + ea : ea,
                            la = parseInt(ka + ((ga - ia) / 2), 10),
                            ma = parseInt(fa + ((ha - ja) / 2.5), 10),
                            na = [];
                        if (ia !== null) na.push('width=' + ia);
                        if (ja !== null) na.push('height=' + ja);
                        na.push('left=' + la);
                        na.push('top=' + ma);
                        na.push('scrollbars=1');
                        if (da.name == 'permissions.request' || da.name == 'permissions.oauth') na.push('location=1,toolbar=0');
                        na = na.join(',');
                        var oa;
                        if (da.post) {
                            oa = window.open('about:blank', da.id, na);
                            if (oa) {
                                ca.setLoadedNode(da, oa, 'popup');
                                h.submitToTarget({
                                    url: da.url,
                                    target: da.id,
                                    params: da.params
                                });
                            }
                        } else {
                            oa = window.open(da.url, da.id, na);
                            if (oa) ca.setLoadedNode(da, oa, 'popup');
                        }
                        if (!oa) return;
                        if (da.id in ca._defaultCb) ca._popupMonitor();
                    },
                    setLoadedNode: function(da, ea, fa) {
                        if (da.params && da.params.display != 'popup') ea.fbCallID = da.id;
                        ea = {
                            node: ea,
                            type: fa,
                            fbCallID: da.id
                        };
                        ca._loadedNodes[da.id] = ea;
                    },
                    getLoadedNode: function(da) {
                        var ea = typeof da == 'object' ? da.id : da,
                            fa = ca._loadedNodes[ea];
                        return fa ? fa.node : null;
                    },
                    hidden: function(da) {
                        da.className = 'FB_UI_Hidden';
                        da.root = h.appendHidden('');
                        ca._insertIframe(da);
                    },
                    iframe: function(da) {
                        da.className = 'FB_UI_Dialog';
                        var ea = function() {
                                ca._triggerDefault(da.id);
                            };
                        da.root = j.create({
                            onClose: ea,
                            closeIcon: true,
                            classes: (y.ipad() ? 'centered' : '')
                        });
                        if (!da.hideLoader) j.showLoader(ea, da.size.width);
                        k.addCss(da.root, 'fb_dialog_iframe');
                        ca._insertIframe(da);
                    },
                    touch: function(da) {
                        if (da.params && da.params.in_iframe) {
                            if (da.ui_created) {
                                j.showLoader(function() {
                                    ca._triggerDefault(da.id);
                                }, 0);
                            } else ca.iframe(da);
                        } else if (y.nativeApp() && !da.ui_created) {
                            da.frame = da.id;
                            s.onready(function() {
                                ca.setLoadedNode(da, s.open(da.url + '#cb=' + da.frameName), 'native');
                            });
                            ca._popupMonitor();
                        } else if (!da.ui_created) ca.popup(da);
                    },
                    async: function(da) {
                        da.params.redirect_uri = location.protocol + '//' + location.host + location.pathname;
                        v.remote.showDialog(da.params, function(ea) {
                            da.cb(ea.result);
                        });
                    },
                    getDefaultSize: function() {
                        return j.getDefaultSize();
                    },
                    _insertIframe: function(da) {
                        ca._loadedNodes[da.id] = false;
                        var ea = function(fa) {
                                if (da.id in ca._loadedNodes) ca.setLoadedNode(da, fa, 'iframe');
                            };
                        if (da.post) {
                            q({
                                url: 'about:blank',
                                root: da.root,
                                className: da.className,
                                width: da.size.width,
                                height: da.size.height,
                                id: da.id,
                                onInsert: ea,
                                onload: function(fa) {
                                    h.submitToTarget({
                                        url: da.url,
                                        target: fa.name,
                                        params: da.params
                                    });
                                }
                            });
                        } else q({
                            url: da.url,
                            root: da.root,
                            className: da.className,
                            width: da.size.width,
                            height: da.size.height,
                            id: da.id,
                            name: da.frameName,
                            onInsert: ea
                        });
                    },
                    _handleResizeMessage: function(da, ea) {
                        var fa = ca.getLoadedNode(da);
                        if (!fa) return;
                        if (ea.height) fa.style.height = ea.height + 'px';
                        if (ea.width) fa.style.width = ea.width + 'px';
                        z.inform('resize.ack', ea || {}, 'parent.frames[' + fa.name + ']');
                        if (!j.isActive(fa)) j.show(fa);
                    },
                    _triggerDefault: function(da) {
                        ca._xdRecv({
                            frame: da
                        }, ca._defaultCb[da] ||
                        function() {});
                    },
                    _popupMonitor: function() {
                        var da;
                        for (var ea in ca._loadedNodes) if (ca._loadedNodes.hasOwnProperty(ea) && ea in ca._defaultCb) {
                            var fa = ca._loadedNodes[ea];
                            if (fa.type != 'popup' && fa.type != 'native') continue;
                            var ga = fa.node;
                            try {
                                if (ga.closed) {
                                    ca._triggerDefault(ea);
                                } else da = true;
                            } catch (ha) {}
                        }
                        if (da && !ca._popupInterval) {
                            ca._popupInterval = setInterval(ca._popupMonitor, 100);
                        } else if (!da && ca._popupInterval) {
                            clearInterval(ca._popupInterval);
                            ca._popupInterval = null;
                        }
                    },
                    _xdChannelHandler: function(da, ea) {
                        return z.handler(function(fa) {
                            var ga = ca.getLoadedNode(da);
                            if (!ga) return;
                            if (fa.type == 'resize') {
                                ca._handleResizeMessage(da, fa);
                            } else if (fa.type == 'hide') {
                                j.hide(ga);
                            } else if (fa.type == 'rendered') {
                                var ha = j._findRoot(ga);
                                j.show(ha);
                            } else if (fa.type == 'fireevent') l.fire(fa.event);
                        }, ea, true, null);
                    },
                    _xdNextHandler: function(da, ea, fa, ga) {
                        if (ga) ca._defaultCb[ea] = da;
                        return z.handler(function(ha) {
                            ca._xdRecv(ha, da);
                        }, fa) + '&frame=' + ea;
                    },
                    _xdRecv: function(da, ea) {
                        var fa = ca.getLoadedNode(da.frame);
                        if (fa) {
                            try {
                                if (k.containsCss(fa, 'FB_UI_Hidden')) {
                                    setTimeout(function() {
                                        fa.parentNode.parentNode.removeChild(fa.parentNode);
                                    }, 3000);
                                } else if (k.containsCss(fa, 'FB_UI_Dialog')) j.remove(fa);
                            } catch (ga) {}
                            try {
                                if (fa.close) {
                                    fa.close();
                                    ca._popupCount--;
                                }
                            } catch (ha) {}
                        }
                        delete ca._loadedNodes[da.frame];
                        delete ca._defaultCb[da.frame];
                        ea(da);
                    },
                    _xdResult: function(da, ea, fa, ga) {
                        return (ca._xdNextHandler(function(ha) {
                            da && da(ha.result && ha.result != ca._resultToken && ES5('JSON', 'parse', false, ha.result));
                        }, ea, fa, ga) + '&result=' + encodeURIComponent(ca._resultToken));
                    },
                    xdHandler: function(da, ea, fa, ga, ha) {
                        return ca._xdNextHandler(g.xdResponseWrapper(da, ga, ha), ea, fa, true);
                    }
                };
            e.exports = ca;
        });
        __d("sdk.ui", ["Assert", "copyProperties", "Log", "sdk.Runtime", "sdk.UIServer", "SDKConfig"], function(a, b, c, d, e, f) {
            var g = b('Assert'),
                h = b('copyProperties'),
                i = b('Log'),
                j = b('sdk.Runtime'),
                k = c('SDKConfig'),
                l = b('sdk.UIServer');

            function m(n, o) {
                g.isObject(n);
                g.maybeFunction(o);
                n = h({}, n);
                if (!n.method) {
                    i.error('"method" is a required parameter for FB.ui().');
                    return null;
                }
                if ((n.method == 'permissions.request' || n.method == 'permissions.oauth') && (n.display == 'iframe' || n.display == 'dialog')) {
                    var p = 'scope' in n ? n.scope : j.getScope();
                    if (p) {
                        var q = p.split(/\s|,/g);
                        for (var r = 0; r < q.length; r++) {
                            var s = ES5(q[r], 'trim', true);
                            if (s && !k.initSitevars.iframePermissions[s]) {
                                n.display = 'popup';
                                break;
                            }
                        }
                    }
                }
                var t = l.prepareCall(n, o ||
                function() {});
                if (!t) return null;
                var u = t.params.display;
                if (u === 'dialog') {
                    u = 'iframe';
                } else if (u === 'none') u = 'hidden';
                var v = l[u];
                if (!v) {
                    i.error('"display" must be one of "popup", ' + '"dialog", "iframe", "touch", "async", "hidden", or "none"');
                    return null;
                }
                v(t);
                return t.dialog;
            }
            e.exports = m;
        });
        __d("legacy:fb.auth", ["sdk.Auth", "sdk.Cookie", "copyProperties", "sdk.Event", "FB", "Log", "sdk.Runtime", "sdk.SignedRequest", "sdk.ui"], function(a, b, c, d) {
            var e = b('sdk.Auth'),
                f = b('sdk.Cookie'),
                g = b('copyProperties'),
                h = b('sdk.Event'),
                i = b('FB'),
                j = b('Log'),
                k = b('sdk.Runtime'),
                l = b('sdk.SignedRequest'),
                m = b('sdk.ui');
            i.provide('', {
                getLoginStatus: function() {
                    return e.getLoginStatus.apply(e, arguments);
                },
                getAuthResponse: function() {
                    return e.getAuthResponse();
                },
                getAccessToken: function() {
                    return k.getAccessToken() || null;
                },
                getUserID: function() {
                    return k.getUserID();
                },
                login: function(n, o) {
                    if (o && o.perms && !o.scope) {
                        o.scope = o.perms;
                        delete o.perms;
                        j.warn('OAuth2 specification states that \'perms\' ' + 'should now be called \'scope\'.  Please update.');
                    }
                    var p = k.isEnvironment(k.ENVIRONMENTS.CANVAS) || k.isEnvironment(k.ENVIRONMENTS.PAGETAB);
                    m(g({
                        method: 'permissions.oauth',
                        display: p ? 'async' : 'popup',
                        domain: location.hostname
                    }, o || {}), n);
                },
                logout: function(n) {
                    m({
                        method: 'auth.logout',
                        display: 'hidden'
                    }, n);
                }
            });
            i.provide('Auth', e);
            e.subscribe('logout', ES5(h.fire, 'bind', true, h, 'auth.logout'));
            e.subscribe('login', ES5(h.fire, 'bind', true, h, 'auth.login'));
            e.subscribe('authresponse.change', ES5(h.fire, 'bind', true, h, 'auth.authResponseChange'));
            e.subscribe('status.change', ES5(h.fire, 'bind', true, h, 'auth.statusChange'));
            h.subscribe('init:post', function(n) {
                if (n.status) e.getLoginStatus();
                if (k.getClientID()) if (n.authResponse) {
                    e.setAuthResponse(n.authResponse, 'connected');
                } else if (k.getUseCookie()) {
                    var o = f.loadSignedRequest();
                    try {
                        var q = l.parse(o);
                        k.setUserID(q.user_id || 0);
                    } catch (p) {
                        f.clearSignedRequestCookie();
                    }
                    f.loadMeta();
                }
            });
        }, 3);
        __d("sdk.Canvas.IframeHandling", ["DOMWrapper", "Log", "sdk.RPC", "sdk.Runtime", "wrapFunction"], function(a, b, c, d, e, f) {
            var g = b('DOMWrapper'),
                h = b('Log'),
                i = b('sdk.RPC'),
                j = b('sdk.Runtime'),
                k = b('wrapFunction'),
                l = null,
                m;

            function n() {
                var r = g.getWindow().document,
                    s = r.body,
                    t = r.documentElement,
                    u = Math.max(s.offsetTop, 0),
                    v = Math.max(t.offsetTop, 0),
                    w = s.scrollHeight + u,
                    x = s.offsetHeight + u,
                    y = t.scrollHeight + v,
                    z = t.offsetHeight + v;
                return Math.max(w, x, y, z);
            }
            function o(r) {
                if (!j.getInitialized() && arguments.callee.caller != p) h.warn('FB.init is required for setSize to take effect');
                if (typeof r != 'object') r = {};
                var s = 0,
                    t = 0;
                if (!r.height) {
                    r.height = n();
                    s = 16;
                    t = 4;
                }
                if (!r.frame) r.frame = window.name || 'iframe_canvas';
                if (m) {
                    var u = m.height,
                        v = r.height - u;
                    if (v <= t && v >= -s) return false;
                }
                m = r;
                i.remote.setSize(r);
                return true;
            }
            function p(r, s) {
                if (!j.getInitialized()) h.warn('FB.init is required for setAutoGrow to take effect');
                if (s === undefined && typeof r === 'number') {
                    s = r;
                    r = true;
                }
                if (r || r === undefined) {
                    if (l === null) l = setInterval(k(function() {
                        o();
                    }, 'entry', 'setAutoGrow:setTimeout'), s || 100);
                    o();
                } else if (l !== null) {
                    clearInterval(l);
                    l = null;
                }
            }
            i.stub('setSize');
            var q = {
                setSize: o,
                setAutoGrow: p
            };
            e.exports = q;
        });
        __d("sdk.Canvas.Tti", ["sdk.RPC", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('sdk.RPC'),
                h = b('sdk.Runtime');

            function i(n, o) {
                var p = {
                    appId: h.getClientID(),
                    time: ES5('Date', 'now', false),
                    name: o
                },
                    q = [p];
                if (n) q.push(function(r) {
                    n(r.result);
                });
                g.remote.logTtiMessage.apply(null, q);
            }
            function j() {
                i(null, 'StartIframeAppTtiTimer');
            }
            function k(n) {
                i(n, 'StopIframeAppTtiTimer');
            }
            function l(n) {
                i(n, 'RecordIframeAppTti');
            }
            g.stub('logTtiMessage');
            var m = {
                setDoneLoading: l,
                startTimer: j,
                stopTimer: k
            };
            e.exports = m;
        });
        __d("sdk.Canvas.Flash", ["sdk.api", "sdk.RPC", "Log", "sdk.Runtime", "createArrayFrom"], function(a, b, c, d, e, f) {
            var g = b('sdk.api'),
                h = b('sdk.RPC'),
                i = b('Log'),
                j = b('sdk.Runtime'),
                k = b('createArrayFrom'),
                l = 'CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000',
                m = null;

            function n(r) {
                r.style.visibility = 'hidden';
            }
            function o(r) {
                r.style.visibility = '';
            }
            function p(r) {
                i.info('hideFlashCallback called with %s', r.state);
                var s = window.document.getElementsByTagName('object');
                ES5(k(s), 'forEach', true, function(t) {
                    if (t.type.toLowerCase() != "application/x-shockwave-flash" && (!t.classid || t.classid.toUpperCase() != l)) return;
                    for (var u = 0; u < t.childNodes.length; u++) {
                        var v = t.childNodes[u];
                        if (/param/i.test(v.nodeName) && /wmode/i.test(v.name) && /opaque|transparent/i.test(v.value)) return;
                    }
                    if (m) {
                        i.info('Calling developer specified callback');
                        var w = {
                            state: r.state,
                            elem: t
                        };
                        m(w);
                        setTimeout(function() {
                            if (w.state == 'opened') {
                                n(t);
                            } else o(t);
                        }, 200);
                    } else if (r.state == 'opened') {
                        t._old_visibility = t.style.visibility;
                        t.style.visibility = 'hidden';
                    } else if (r.state == 'closed') {
                        t.style.visibility = t._old_visibility || '';
                        delete t._old_visibility;
                    }
                    if (Math.random() <= 1 / 1000) g(j.getClientID() + '/occludespopups', 'post', {});
                });
            }
            h.local.hideFlashObjects = function() {
                p({
                    state: 'opened'
                });
            };
            h.local.showFlashObjects = function() {
                p({
                    state: 'closed'
                });
            };
            var q = {
                _setHideFlashCallback: function(r) {
                    m = r;
                },
                hideFlashElement: n,
                showFlashElement: o
            };
            e.exports = q;
        });
        __d("sdk.Canvas.Navigation", ["Assert", "sdk.RPC", "Log", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('Assert'),
                h = b('sdk.RPC'),
                i = b('Log'),
                j = b('sdk.Runtime');

            function k(o) {
                g.isString(o, 'FB.Canvas.setHash must have a String as argument');
                o = o.replace(/[{}<\[\]>#%"]/, encodeURIComponent);
                h.remote.setHash(o);
            }
            function l(o) {
                g.isFunction(o, 'FB.Canvas.getHash called without a callback');
                h.remote.getHash(function(p) {
                    o(p.result);
                });
            }
            function m(o) {
                if (!j.getInitialized()) i.warn('FB.init is required for setUrlHandler to take effect');
                h.local.navigate = function(p) {
                    o({
                        path: p
                    });
                };
                h.remote.setNavigationEnabled(true);
            }
            h.stub('setNavigationEnabled');
            h.stub('getHash');
            h.stub('setHash');
            var n = {
                getHash: l,
                setHash: k,
                setUrlHandler: m
            };
            e.exports = n;
        });
        __d("sdk.Canvas", ["copyProperties", "sdk.RPC", "sdk.Runtime", "sdk.Canvas.IframeHandling", "sdk.Canvas.Environment", "sdk.Canvas.Tti", "sdk.Canvas.Flash", "sdk.Canvas.Navigation"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('sdk.RPC'),
                i = b('sdk.Runtime'),
                j = b('sdk.Canvas.IframeHandling'),
                k = b('sdk.Canvas.Environment'),
                l = b('sdk.Canvas.Tti'),
                m = b('sdk.Canvas.Flash'),
                n = b('sdk.Canvas.Navigation');
            h.stub('showDialog');
            var o = {};
            g(o, j);
            g(o, k);
            g(o, l);
            g(o, m);
            g(o, n);
            e.exports = o;
        });
        __d("legacy:fb.canvas", ["sdk.Canvas", "sdk.Event", "FB", "sdk.Runtime"], function(a, b, c, d) {
            var e = b('sdk.Canvas'),
                f = b('sdk.Event'),
                g = b('FB'),
                h = b('sdk.Runtime');
            g.provide('Canvas', e);
            g.provide('CanvasInsights', {
                setDoneLoading: e.setDoneLoading
            });
            f.subscribe('init:post', function(i) {
                if (h.isEnvironment(h.ENVIRONMENTS.CANVAS)) e._setHideFlashCallback(i.hideFlashCallback);
            });
        }, 3);
        __d("sdk.Canvas.Prefetcher", ["sdk.api", "createArrayFrom", "sdk.Runtime", "CanvasPrefetcherConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.api'),
                h = b('createArrayFrom'),
                i = c('CanvasPrefetcherConfig'),
                j = b('sdk.Runtime'),
                k = {
                    AUTOMATIC: 0,
                    MANUAL: 1
                },
                l = i.sampleRate,
                m = i.blacklist,
                n = k.AUTOMATIC,
                o = [];

            function p() {
                var u = {
                    object: 'data',
                    link: 'href',
                    script: 'src'
                };
                if (n == k.AUTOMATIC) ES5(ES5('Object', 'keys', false, u), 'forEach', true, function(v) {
                    var w = u[v];
                    ES5(h(document.getElementsByTagName(v)), 'forEach', true, function(x) {
                        if (x[w]) o.push(x[w]);
                    });
                });
                if (o.length === 0) return;
                g(j.getClientID() + '/staticresources', 'post', {
                    urls: ES5('JSON', 'stringify', false, o),
                    is_https: location.protocol === 'https:'
                });
                o = [];
            }
            function q() {
                if (!j.isEnvironment(j.ENVIRONMENTS.CANVAS) || !j.getClientID() || !l) return;
                if (Math.random() > 1 / l || m == '*' || ~ES5(m, 'indexOf', true, j.getClientID())) return;
                setTimeout(p, 30000);
            }
            function r(u) {
                n = u;
            }
            function s(u) {
                o.push(u);
            }
            var t = {
                COLLECT_AUTOMATIC: k.AUTOMATIC,
                COLLECT_MANUAL: k.MANUAL,
                addStaticResource: s,
                setCollectionMode: r,
                _maybeSample: q
            };
            e.exports = t;
        });
        __d("legacy:fb.canvas.prefetcher", ["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('sdk.Canvas.Prefetcher'),
                g = b('sdk.Event'),
                h = b('sdk.Runtime');
            e.provide('Canvas.Prefetcher', f);
            g.subscribe('init:post', function(i) {
                if (h.isEnvironment(h.ENVIRONMENTS.CANVAS)) f._maybeSample();
            });
        }, 3);
        __d("legacy:fb.compat.ui", ["copyProperties", "FB", "Log", "sdk.ui", "sdk.UIServer"], function(a, b, c, d) {
            var e = b('copyProperties'),
                f = b('FB'),
                g = b('Log'),
                h = b('sdk.ui'),
                i = b('sdk.UIServer');
            f.provide('', {
                share: function(j) {
                    g.error('share() has been deprecated. Please use FB.ui() instead.');
                    h({
                        display: 'popup',
                        method: 'stream.share',
                        u: j
                    });
                },
                publish: function(j, k) {
                    g.error('publish() has been deprecated. Please use FB.ui() instead.');
                    j = j || {};
                    h(e({
                        display: 'popup',
                        method: 'stream.publish',
                        preview: 1
                    }, j || {}), k);
                },
                addFriend: function(j, k) {
                    g.error('addFriend() has been deprecated. Please use FB.ui() instead.');
                    h({
                        display: 'popup',
                        id: j,
                        method: 'friend.add'
                    }, k);
                }
            });
            i.Methods['auth.login'] = i.Methods['permissions.request'];
        }, 3);
        __d("mergeArrays", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) if (ES5(h, 'indexOf', true, i[j]) < 0) h.push(i[j]);
                return h;
            }
            e.exports = g;
        });
        __d("format", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                i = Array.prototype.slice.call(arguments, 1);
                return h.replace(/\{(\d+)\}/g, function(j, k) {
                    var l = i[Number(k)];
                    return (l === null || l === undefined) ? '' : l.toString();
                });
            }
            e.exports = g;
        });
        __d("safeEval", [], function(a, b, c, d, e, f) {
            function g(h) {
                if (h === null || typeof h === 'undefined') return;
                if (typeof h !== 'string') return h;
                return Function('return eval("' + h.replace(/"/g, '\\"') + '");')();
            }
            e.exports = g;
        });
        __d("sdk.Waitable", ["copyProperties", "sdk.Model"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('sdk.Model'),
                i = h.extend({
                    constructor: function() {
                        this.parent({
                            Value: undefined
                        });
                    },
                    error: function(j) {
                        this.inform("error", j);
                    },
                    wait: function(j, k) {
                        if (k) this.subscribe('error', k);
                        this.monitor('Value.change', ES5(function() {
                            var l = this.getValue();
                            if (l !== undefined) {
                                this.value = l;
                                j(l);
                                return true;
                            }
                        }, 'bind', true, this));
                    }
                });
            e.exports = i;
        });
        __d("sdk.Query", ["format", "safeEval", "Type", "sdk.Waitable"], function(a, b, c, d, e, f) {
            var g = b('format'),
                h = b('safeEval'),
                i = b('Type'),
                j = b('sdk.Waitable');

            function k(p) {
                return ES5(p.split(','), 'map', true, function(q) {
                    return ES5(q, 'trim', true);
                });
            }
            function l(p) {
                var q = (/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(p),
                    r, s, t = 'unknown';
                if (q) {
                    s = q[2];
                    if (/^(["'])(?:\\?.)*?\1$/.test(s)) {
                        s = h(s);
                        t = 'index';
                    } else if (/^\d+\.?\d*$/.test(s)) t = 'index';
                }
                if (t == 'index') {
                    r = {
                        type: 'index',
                        key: q[1],
                        value: s
                    };
                } else r = {
                    type: 'unknown',
                    value: p
                };
                return r;
            }
            function m(p) {
                return typeof p === 'string' ? ES5('JSON', 'stringify', false, p) : p;
            }
            var n = 1,
                o = j.extend({
                    constructor: function() {
                        this.parent();
                        this.name = 'v_' + n++;
                    },
                    hasDependency: function(p) {
                        if (arguments.length) this._hasDependency = p;
                        return !!this._hasDependency;
                    },
                    parse: function(p) {
                        var q = g.apply(null, p),
                            r = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(q);
                        this.fields = k(r[1]);
                        this.table = r[2];
                        this.where = l(r[3]);
                        for (var s = 1; s < p.length; s++) if (i.instanceOf(o, p[s])) p[s].hasDependency(true);
                        return this;
                    },
                    toFql: function() {
                        var p = 'select ' + this.fields.join(',') + ' from ' + this.table + ' where ';
                        switch (this.where.type) {
                        case 'unknown':
                            p += this.where.value;
                            break;
                        case 'index':
                            p += this.where.key + '=' + m(this.where.value);
                            break;
                        case 'in':
                            if (this.where.value.length == 1) {
                                p += this.where.key + '=' + m(this.where.value[0]);
                            } else p += this.where.key + ' in (' + ES5(this.where.value, 'map', true, m).join(',') + ')';
                            break;
                        }
                        return p;
                    },
                    toString: function() {
                        return '#' + this.name;
                    }
                });
            e.exports = o;
        });
        __d("sdk.Data", ["sdk.api", "sdk.ErrorHandling", "mergeArrays", "sdk.Query", "safeEval", "Type", "sdk.Waitable"], function(a, b, c, d, e, f) {
            var g = b('sdk.api'),
                h = b('sdk.ErrorHandling'),
                i = b('mergeArrays'),
                j = b('sdk.Query'),
                k = b('safeEval'),
                l = b('Type'),
                m = b('sdk.Waitable'),
                n = {
                    query: function(o, p) {
                        var q = new j().parse(arguments);
                        n.queue.push(q);
                        n._waitToProcess();
                        return q;
                    },
                    waitOn: function(o, p) {
                        var q = new m(),
                            r = o.length;
                        if (typeof(p) == 'string') {
                            var s = p;
                            p = h.unguard(function() {
                                return k(s);
                            });
                        }
                        ES5(o, 'forEach', true, function(t) {
                            t.monitor('Value.change', function() {
                                var u = false;
                                if (n._getValue(t) !== undefined) {
                                    t.value = t.getValue();
                                    r--;
                                    u = true;
                                }
                                if (r === 0) {
                                    var v = p(ES5(o, 'map', true, n._getValue));
                                    q.setValue(v !== undefined ? v : true);
                                }
                                return u;
                            });
                        });
                        return q;
                    },
                    process: function(o) {
                        n._process(o);
                    },
                    _getValue: function(o) {
                        return o instanceof m ? o.getValue() : o;
                    },
                    _selectByIndex: function(o, p, q, r) {
                        var s = new j();
                        s.fields = o;
                        s.table = p;
                        s.where = {
                            type: 'index',
                            key: q,
                            value: r
                        };
                        n.queue.push(s);
                        n._waitToProcess();
                        return s;
                    },
                    _waitToProcess: function() {
                        if (n.timer < 0) n.timer = setTimeout(function() {
                            n._process();
                        }, 10);
                    },
                    _process: function(o) {
                        n.timer = -1;
                        var p = {},
                            q = n.queue;
                        if (!q.length) return;
                        n.queue = [];
                        for (var r = 0; r < q.length; r++) {
                            var s = q[r];
                            if (s.where.type == 'index' && !s.hasDependency()) {
                                n._mergeIndexQuery(s, p);
                            } else p[s.name] = s;
                        }
                        var t = {
                            q: {}
                        };
                        for (var u in p) if (p.hasOwnProperty(u)) t.q[u] = p[u].toFql();
                        if (o) t.access_token = o;
                        g('/fql', 'GET', t, function(v) {
                            if (v.error) {
                                ES5(ES5('Object', 'keys', false, p), 'forEach', true, function(w) {
                                    p[w].error(new Error(v.error.message));
                                });
                            } else ES5(v.data, 'forEach', true, function(w) {
                                p[w.name].setValue(w.fql_result_set);
                            });
                        });
                    },
                    _mergeIndexQuery: function(o, p) {
                        var q = o.where.key,
                            r = o.where.value,
                            s = 'index_' + o.table + '_' + q,
                            t = p[s];
                        if (!t) {
                            t = p[s] = new j();
                            t.fields = [q];
                            t.table = o.table;
                            t.where = {
                                type: 'in',
                                key: q,
                                value: []
                            };
                        }
                        i(t.fields, o.fields);
                        i(t.where.value, [r]);
                        t.wait(function(u) {
                            o.setValue(ES5(u, 'filter', true, function(v) {
                                return v[q] == r;
                            }));
                        });
                    },
                    timer: -1,
                    queue: []
                };
            e.exports = n;
        });
        __d("legacy:fb.data", ["FB", "sdk.Data"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('sdk.Data');
            e.provide('Data', f);
        }, 3);
        __d("legacy:fb.event", ["FB", "sdk.Event"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('sdk.Event');
            e.provide('Event', f);
            e.provide('EventProvider', f);
        }, 3);
        __d("legacy:fb.frictionless", ["FB", "sdk.Frictionless"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('sdk.Frictionless');
            e.provide('Frictionless', f);
        }, 3);
        __d("sdk.init", ["sdk.Cookie", "copyProperties", "createArrayFrom", "sdk.ErrorHandling", "sdk.Event", "Log", "QueryString", "sdk.Runtime", "wrapFunction"], function(a, b, c, d, e, f) {
            var g = b('sdk.Cookie'),
                h = b('copyProperties'),
                i = b('createArrayFrom'),
                j = b('sdk.ErrorHandling'),
                k = b('sdk.Event'),
                l = b('Log'),
                m = b('QueryString'),
                n = b('sdk.Runtime'),
                o = b('wrapFunction');

            function p(q) {
                if (n.getInitialized()) l.warn('FB.init has already been called - this could indicate a problem');
                if (/number|string/.test(typeof q)) {
                    l.warn('FB.init called with invalid parameters');
                    q = {
                        apiKey: q
                    };
                }
                q = h({
                    logging: true,
                    status: true
                }, q || {});
                var r = q.appId || q.apiKey;
                if (/number|string/.test(typeof r)) n.setClientID(r.toString());
                if ('scope' in q) n.setScope(q.scope);
                if (q.cookie) {
                    n.setUseCookie(true);
                    if (typeof q.cookie === 'string') g.setDomain(q.cookie);
                }
                n.setInitialized(true);
                k.fire('init:post', q);
            }
            setTimeout(o(function() {
                var q = /(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;
                ES5(i(document.getElementsByTagName('script')), 'forEach', true, function(r) {
                    if (r.src) {
                        var s = q.exec(r.src);
                        if (s) {
                            var t = m.decode(s[2]);
                            for (var u in t) if (t.hasOwnProperty(u)) {
                                var v = t[u];
                                if (v == '0') t[u] = 0;
                            }
                            p(t);
                        }
                    }
                });
                if (window.fbAsyncInit && !window.fbAsyncInit.hasRun) {
                    window.fbAsyncInit.hasRun = true;
                    j.unguard(window.fbAsyncInit)();
                }
            }, 'entry', 'init:helper'), 0);
            e.exports = p;
        });
        __d("legacy:fb.init", ["FB", "sdk.init"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('sdk.init');
            e.provide('', {
                init: f
            });
        }, 3);
        __d("legacy:fb.json", ["FB", "ManagedError"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('ManagedError');
            e.provide('JSON', {
                stringify: function(g) {
                    try {
                        return ES5('JSON', 'stringify', false, g);
                    } catch (h) {
                        throw new f(h.message, h);
                    }
                },
                parse: function(g) {
                    try {
                        return ES5('JSON', 'parse', false, g);
                    } catch (h) {
                        throw new f(h.message, h);
                    }
                }
            });
        }, 3);
        __d("legacy:fb.pay", ["copyProperties", "FB", "sdk.Runtime", "sdk.UIServer", "sdk.XD"], function(a, b, c, d) {
            var e = b('copyProperties'),
                f = b('FB'),
                g = b('sdk.Runtime'),
                h = b('sdk.UIServer'),
                i = b('sdk.XD'),
                j = {
                    error_code: 1383001,
                    error_message: 'An unknown error caused the dialog to be closed'
                },
                k = function(l) {
                    return function(m) {
                        l(m && m.response ? ES5('JSON', 'parse', false, m.response) : j);
                    };
                };
            e(h.Methods, {
                'pay.prompt': {
                    transform: function(l) {
                        var m = i.handler(k(l.cb), 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                        l.params.channel = m;
                        i.inform('Pay.Prompt', l.params);
                    }
                },
                pay: {
                    size: {
                        width: 555,
                        height: 120
                    },
                    connectDisplay: 'popup',
                    transform: function(l) {
                        l.cb = k(l.cb);
                        if (!g.isEnvironment(g.ENVIRONMENTS.CANVAS)) {
                            l.params.order_info = ES5('JSON', 'stringify', false, l.params.order_info);
                            return l;
                        }
                        var m = i.handler(l.cb, 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                        l.params.channel = m;
                        l.params.uiserver = true;
                        i.inform('Pay.Prompt', l.params);
                    }
                }
            });
        }, 3);
        __d("legacy:fb.ua", ["FB", "UserAgent"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('UserAgent');
            e.provide('UA', {
                nativeApp: f.nativeApp
            });
        }, 3);
        __d("legacy:fb.ui", ["FB", "sdk.ui"], function(a, b, c, d) {
            var e = b('FB'),
                f = b('sdk.ui');
            e.provide('', {
                ui: f
            });
        }, 3);
        __d("Miny", [], function(a, b, c, d, e, f) {
            var g = 'Miny1',
                h = {
                    encode: [],
                    decode: {}
                },
                i = 'wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('');

            function j(n) {
                for (var o = h.encode.length; o < n; o++) {
                    var p = o.toString(32).split('');
                    p[p.length - 1] = i[parseInt(p[p.length - 1], 32)];
                    p = p.join('');
                    h.encode[o] = p;
                    h.decode[p] = o;
                }
                return h;
            }
            function k(n) {
                var o = n.match(/\w+|\W+/g),
                    p = {};
                for (var q = 0; q < o.length; q++) p[o[q]] = (p[o[q]] || 0) + 1;
                var r = ES5('Object', 'keys', false, p);
                r.sort(function(u, v) {
                    return p[u] < p[v] ? 1 : (p[v] < p[u] ? -1 : 0);
                });
                var s = j(r.length).encode;
                for (q = 0; q < r.length; q++) p[r[q]] = s[q];
                var t = [];
                for (q = 0; q < o.length; q++) t[q] = p[o[q]];
                for (q = 0; q < r.length; q++) r[q] = r[q].replace(/'~'/g, '\\~');
                return [g, r.length].concat(r).concat(t.join('')).join('~');
            }
            function l(n) {
                var o = n.split('~');
                if (o.shift() != g) throw new Error('Not a Miny stream');
                var p = parseInt(o.shift(), 10),
                    q = o.pop();
                q = q.match(/[0-9a-v]*[\-w-zA-Z_]/g);
                var r = o,
                    s = j(p).decode,
                    t = [];
                for (var u = 0; u < q.length; u++) t[u] = r[s[q[u]]];
                return t.join('');
            }
            var m = {
                encode: k,
                decode: l
            };
            e.exports = m;
        });
        __d("runOnce", [], function(a, b, c, d, e, f) {
            function g(h) {
                var i, j;
                return function() {
                    if (!i) {
                        i = true;
                        j = h();
                    }
                    return j;
                };
            }
            e.exports = g;
        });
        __d("XFBML", ["Assert", "copyProperties", "createArrayFrom", "dotAccess", "FB", "sdk.Impressions", "Log", "ObservableMixin", "runOnce", "wrapFunction", "SDKConfig"], function(a, b, c, d, e, f) {
            var g = b('Assert'),
                h = b('copyProperties'),
                i = b('createArrayFrom'),
                j = b('dotAccess'),
                k = b('FB'),
                l = b('sdk.Impressions'),
                m = b('Log'),
                n = b('ObservableMixin'),
                o = b('runOnce'),
                p = c('SDKConfig'),
                q = b('wrapFunction'),
                r = {},
                s = {},
                t = 0,
                u = new n();

            function v(ca, da) {
                return ca[da] + '';
            }
            function w(ca) {
                return ca.scopeName ? (ca.scopeName + ':' + ca.nodeName) : '';
            }
            function x(ca) {
                return r[v(ca, 'nodeName').toLowerCase()] || r[w(ca).toLowerCase()];
            }
            function y(ca) {
                var da = ES5(ES5(v(ca, 'className'), 'trim', true).split(/\s+/), 'filter', true, function(ea) {
                    return s.hasOwnProperty(ea);
                });
                if (da.length === 0) return undefined;
                if (!ca.childNodes || ca.childNodes.length === 0 || (ca.childNodes.length == 1 && ca.childNodes[0].nodeType == 3) || ca.getAttribute('fb-xfbml-state')) return s[da[0]];
            }
            function z(ca) {
                var da = {};
                ES5(i(ca.attributes), 'forEach', true, function(ea) {
                    da[v(ea, 'name')] = v(ea, 'value');
                });
                return da;
            }
            function aa(ca, da, ea) {
                g.isTrue(ca && ca.nodeType && ca.nodeType === 1 && !! ca.getElementsByTagName, 'Invalid DOM node passed to FB.XFBML.parse()');
                g.isFunction(da, 'Invalid callback passed to FB.XFBML.parse()');
                var fa = ++t;
                m.info('XFBML Parsing Start %s', fa);
                var ga = 1,
                    ha = 0,
                    ia = function() {
                        ga--;
                        if (ga === 0) {
                            m.info('XFBML Parsing Finish %s, %s tags found', fa, ha);
                            da();
                            u.inform('render', fa, ha);
                        }
                        g.isTrue(ga >= 0, 'onrender() has been called too many times');
                    };
                ES5(i(ca.getElementsByTagName('*')), 'forEach', true, function(ka) {
                    if (!ea && ka.getAttribute('fb-xfbml-state')) return;
                    var la = x(ka) || y(ka);
                    if (!la) return;
                    ga++;
                    ha++;
                    var ma = new la.ctor(ka, la.xmlns, la.localName, z(ka));
                    ma.subscribe('render', o(function() {
                        ka.setAttribute('fb-xfbml-state', 'rendered');
                        ia();
                    }));
                    var na = function() {
                            if (ka.getAttribute('fb-xfbml-state') == 'parsed') {
                                u.subscribe('render.queue', na);
                            } else {
                                ka.setAttribute('fb-xfbml-state', 'parsed');
                                ma.process();
                            }
                        };
                    na();
                });
                u.inform('parse', fa, ha);
                var ja = 30000;
                window.setTimeout(function() {
                    if (ga > 0) m.warn('%s tags failed to render in %s ms', ga, ja);
                }, ja);
                ia();
            }
            u.subscribe('render', function() {
                var ca = u.getSubscribers('render.queue');
                u.clearSubscribers('render.queue');
                ES5(ca, 'forEach', true, function(da) {
                    da();
                });
            });
            h(u, {
                registerTag: function(ca) {
                    var da = ca.xmlns + ':' + ca.localName;
                    g.isUndefined(r[da], da + ' already registered');
                    r[da] = ca;
                    s[ca.xmlns + '-' + ca.localName] = ca;
                },
                parse: function(ca, da) {
                    aa(ca || document.body, da ||
                    function() {}, true);
                },
                parseNew: function() {
                    aa(document.body, function() {}, false);
                }
            });
            var ba = function(ca, da) {
                    if (Math.random() < p.tagCountLogRate) setTimeout(q(ES5(l.log, 'bind', true, null, 102, {
                        tag_count: da
                    }), 'entry', 'xfbml-insights-log'), 5000);
                    u.unsubscribe('parse', ba);
                };
            u.subscribe('parse', ba);
            e.exports = u;
        });
        __d("PluginPipe", ["sdk.Content", "copyProperties", "guid", "insertIframe", "Miny", "ObservableMixin", "QueryString", "sdk.Runtime", "UrlMap", "UserAgent", "XFBML", "PluginPipeConfig", "SDKConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.Content'),
                h = b('copyProperties'),
                i = b('guid'),
                j = b('insertIframe'),
                k = b('Miny'),
                l = b('ObservableMixin'),
                m = c('PluginPipeConfig'),
                n = b('QueryString'),
                o = b('sdk.Runtime'),
                p = c('SDKConfig'),
                q = b('UrlMap'),
                r = b('UserAgent'),
                s = b('XFBML'),
                t = new l(),
                u = m.threshold,
                v = [];

            function w() {
                return !!(p.usePluginPipe && (r.chrome() || r.firefox()) && m.enabledApps[o.getClientID()]);
            }
            function x() {
                var z = v;
                v = [];
                if (z.length <= u) {
                    ES5(z, 'forEach', true, function(ca) {
                        j(ca.config);
                    });
                    return;
                }
                var aa = z.length + 1;

                function ba() {
                    aa--;
                    if (aa === 0) y(z);
                }
                ES5(z, 'forEach', true, function(ca) {
                    var da = {};
                    for (var ea in ca.config) da[ea] = ca.config[ea];
                    da.url = q.resolve('www') + '/plugins/plugin_pipe_shell.php';
                    da.onload = ba;
                    j(da);
                });
                ba();
            }
            s.subscribe('parse', x);

            function y(z) {
                var aa = document.createElement('span');
                g.appendHidden(aa);
                var ba = {};
                ES5(z, 'forEach', true, function(fa) {
                    ba[fa.config.name] = {
                        plugin: fa.tag,
                        params: fa.params
                    };
                });
                var ca = ES5('JSON', 'stringify', false, ba),
                    da = k.encode(ca),
                    ea = n.encode({
                        plugins: da.length < ca.length ? da : ca
                    });
                ES5(z, 'forEach', true, function(fa) {
                    var ga = document.getElementsByName(fa.config.name)[0];
                    ga.onload = fa.config.onload;
                });
                j({
                    url: q.resolve('www') + '/plugins/pipe/?' + ea,
                    root: aa,
                    name: i(),
                    className: 'fb_hidden fb_invisible'
                });
            }
            h(t, {
                add: function(z) {
                    var aa = w();
                    aa && v.push({
                        config: z._config,
                        tag: z._tag,
                        params: z._params
                    });
                    return aa;
                }
            });
            e.exports = t;
        });
        __d("IframePlugin", ["sdk.Auth", "sdk.DOM", "sdk.Event", "ObservableMixin", "PluginPipe", "QueryString", "sdk.Runtime", "Type", "UrlMap", "sdk.XD", "guid", "insertIframe", "resolveURI"], function(a, b, c, d, e, f) {
            var g = b('sdk.Auth'),
                h = b('sdk.DOM'),
                i = b('sdk.Event'),
                j = b('ObservableMixin'),
                k = b('PluginPipe'),
                l = b('QueryString'),
                m = b('sdk.Runtime'),
                n = b('Type'),
                o = b('UrlMap'),
                p = b('sdk.XD'),
                q = b('guid'),
                r = b('insertIframe'),
                s = b('resolveURI'),
                t = {
                    skin: 'string',
                    font: 'string',
                    width: 'px',
                    height: 'px',
                    ref: 'string',
                    color_scheme: 'string'
                };

            function u(aa, ba) {
                return function(ca) {
                    var da = aa.getElementsByTagName(ba)[0];
                    ca.width && (da.style.width = ca.width + 'px');
                    ca.height && (da.style.height = ca.height + 'px');
                    var ea = aa.getElementsByTagName('span')[0],
                        fa = aa.getElementsByTagName('iframe')[0],
                        ga = fa.style.height === ea.style.height && fa.style.width === ea.style.width,
                        ha = ga ? 'removeCss' : 'addCss';
                    h[ha](fa, 'fb_iframe_widget_lift');
                };
            }
            function v(aa) {
                return function(ba) {
                    var ca = {
                        width: ba.width,
                        height: ba.height,
                        pluginID: aa
                    };
                    i.fire('xfbml.resize', ca);
                };
            }
            var w = {
                string: function(aa) {
                    return aa;
                },
                bool: function(aa) {
                    return aa ? (/^(?:true|1|yes|on)$/i).test(aa) : undefined;
                },
                url: function(aa) {
                    return s(aa);
                },
                url_maybe: function(aa) {
                    return aa ? s(aa) : aa;
                },
                hostname: function(aa) {
                    return aa || window.location.hostname;
                },
                px: function(aa) {
                    return (/^(\d+)(?:px)?$/).test(aa) ? parseInt(RegExp.$1, 10) : undefined;
                },
                text: function(aa) {
                    return aa;
                }
            };

            function x(aa, ba) {
                var ca = aa[ba] || aa[ba.replace(/_/g, '-')] || aa[ba.replace(/_/g, '')] || aa['data-' + ba] || aa['data-' + ba.replace(/_/g, '-')] || aa['data-' + ba.replace(/_/g, '')] || undefined;
                return ca;
            }
            function y(aa, ba, ca, da) {
                ES5(ES5('Object', 'keys', false, aa), 'forEach', true, function(ea) {
                    if (aa[ea] == 'text' && !ca[ea]) {
                        ca[ea] = ba.textContent || ba.innerText || '';
                        ba.setAttribute(ea, ca[ea]);
                    }
                    da[ea] = w[aa[ea]](x(ca, ea));
                });
            }
            var z = n.extend({
                constructor: function(aa, ba, ca, da) {
                    this.parent();
                    ca = ca.replace(/-/g, '_');
                    var ea = x(da, 'plugin_id');
                    this.subscribe('xd.resize', u(aa, 'span'));
                    this.subscribe('xd.resize', u(aa, 'iframe'));
                    this.subscribe('xd.resize', v(ea));
                    this.subscribe('xd.resize.flow', u(aa, 'span'));
                    this.subscribe('xd.resize.flow', v(ea));
                    this.subscribe('xd.resize.iframe', u(aa, 'iframe'));
                    var fa = m.getSecure() || window.location.protocol == 'https:',
                        ga = o.resolve('www', fa) + '/plugins/' + ca + '.php?',
                        ha = {};
                    y(this.getParams(), aa, da, ha);
                    y(t, aa, da, ha);
                    ha.app_id = m.getClientID();
                    ha.locale = m.getLocale();
                    ha.sdk = 'joey';
                    var ia = ES5(function(la) {
                        this.inform('xd.' + la.type, la);
                    }, 'bind', true, this);
                    ha.channel = p.handler(ia, 'parent.parent', true);
                    h.addCss(aa, 'fb_iframe_widget');
                    var ja = q();
                    this.subscribe('xd.verify', function(la) {
                        p.sendToFacebook(ja, {
                            method: 'xd/verify',
                            params: ES5('JSON', 'stringify', false, la.token)
                        });
                    });
                    this.subscribe('xd.refreshLoginStatus', ES5(g.getLoginStatus, 'bind', true, g, ES5(this.inform, 'bind', true, this, 'login.status'), true));
                    var ka = document.createElement('span');
                    ka.style.width = '0px';
                    ka.style.height = '0px';
                    this._element = aa;
                    this._tag = ca;
                    this._params = ha;
                    this._config = {
                        root: ka,
                        url: ga + l.encode(ha),
                        name: ja,
                        width: ha.width || 1000,
                        height: ha.height || 1000,
                        onload: ES5(this.inform, 'bind', true, this, 'render')
                    };
                },
                process: function() {
                    this._element.innerHTML = '';
                    this._element.appendChild(this._config.root);
                    if (!k.add(this)) r(this._config);
                }
            }, j);
            z.getVal = x;
            z.withParams = function(aa) {
                return z.extend({
                    getParams: function() {
                        return aa;
                    }
                });
            };
            e.exports = z;
        });
        __d("PluginTags", [], function(a, b, c, d, e, f) {
            var g = {
                activity: {
                    border_color: 'string',
                    filter: 'string',
                    action: 'string',
                    max_age: 'string',
                    linktarget: 'string',
                    header: 'bool',
                    recommendations: 'bool',
                    site: 'hostname'
                },
                create_event_button: {},
                degrees: {
                    href: 'url'
                },
                facepile: {
                    href: 'string',
                    action: 'string',
                    size: 'string',
                    max_rows: 'string'
                },
                friendpile: {
                    href: 'string',
                    action: 'string',
                    size: 'string',
                    max_rows: 'string'
                },
                page_events: {
                    href: 'url'
                },
                privacy_selector: {},
                recommendations: {
                    border_color: 'string',
                    filter: 'string',
                    action: 'string',
                    max_age: 'string',
                    linktarget: 'string',
                    header: 'bool',
                    site: 'hostname'
                },
                share_button: {
                    href: 'url',
                    type: 'string'
                },
                shared_activity: {
                    header: 'bool'
                },
                send_to_mobile: {
                    max_rows: 'string',
                    show_faces: 'bool',
                    size: 'string'
                },
                subscribe: {
                    href: 'url',
                    layout: 'string',
                    show_faces: 'bool'
                },
                want: {
                    href: 'url',
                    layout: 'string',
                    show_faces: 'bool'
                }
            };
            e.exports = g;
        });
        __d("sdk.Arbiter", [], function(a, b, c, d, e, f) {
            var g = {
                BEHAVIOR_EVENT: 'e',
                BEHAVIOR_PERSISTENT: 'p',
                BEHAVIOR_STATE: 's'
            };
            e.exports = g;
        });
        __d("sdk.XFBML.Element", ["sdk.DOM", "sdk.Event", "Type", "ObservableMixin"], function(a, b, c, d, e, f) {
            var g = b('sdk.DOM'),
                h = b('sdk.Event'),
                i = b('Type'),
                j = b('ObservableMixin'),
                k = i.extend({
                    constructor: function(l) {
                        this.parent();
                        this.dom = l;
                    },
                    fire: function() {
                        this.inform.apply(this, arguments);
                    },
                    getAttribute: function(l, m, n) {
                        var o = g.getAttr(this.dom, l);
                        return o ? n ? n(o) : o : m;
                    },
                    _getBoolAttribute: function(l, m) {
                        var n = g.getBoolAttr(this.dom, l);
                        return n === null ? m : n;
                    },
                    _getPxAttribute: function(l, m) {
                        return this.getAttribute(l, m, function(n) {
                            var o = parseInt(n.replace('px', ''), 10);
                            if (isNaN(o)) {
                                return m;
                            } else return o;
                        });
                    },
                    _getAttributeFromList: function(l, m, n) {
                        return this.getAttribute(l, m, function(o) {
                            o = o.toLowerCase();
                            return (ES5(n, 'indexOf', true, o) > -1) ? o : m;
                        });
                    },
                    isValid: function() {
                        for (var l = this.dom; l; l = l.parentNode) if (l == document.body) return true;
                    },
                    clear: function() {
                        g.html(this.dom, '');
                    }
                }, j);
            e.exports = k;
        });
        __d("sdk.XFBML.IframeWidget", ["sdk.Arbiter", "sdk.Auth", "sdk.Content", "copyProperties", "sdk.DOM", "sdk.Event", "sdk.XFBML.Element", "guid", "insertIframe", "QueryString", "sdk.Runtime", "sdk.ui", "UrlMap", "sdk.XD"], function(a, b, c, d, e, f) {
            var g = b('sdk.Arbiter'),
                h = b('sdk.Auth'),
                i = b('sdk.Content'),
                j = b('copyProperties'),
                k = b('sdk.DOM'),
                l = b('sdk.Event'),
                m = b('sdk.XFBML.Element'),
                n = b('guid'),
                o = b('insertIframe'),
                p = b('QueryString'),
                q = b('sdk.Runtime'),
                r = b('sdk.ui'),
                s = b('UrlMap'),
                t = b('sdk.XD'),
                u = m.extend({
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
                        return this._iframeName;
                    },
                    getIframeTitle: function() {},
                    getChannelUrl: function() {
                        if (!this._channelUrl) {
                            var aa = this;
                            this._channelUrl = t.handler(function(ba) {
                                aa.fire('xd.' + ba.type, ba);
                            }, 'parent.parent', true);
                        }
                        return this._channelUrl;
                    },
                    getIframeNode: function() {
                        return this.dom.getElementsByTagName('iframe')[0];
                    },
                    arbiterInform: function(event, aa, ba) {
                        t.sendToFacebook(this.getIframeName(), {
                            method: event,
                            params: ES5('JSON', 'stringify', false, aa || {}),
                            behavior: ba || g.BEHAVIOR_PERSISTENT
                        });
                    },
                    _arbiterInform: function(event, aa, ba) {
                        var ca = 'parent.frames["' + this.getIframeNode().name + '"]';
                        t.inform(event, aa, ca, ba);
                    },
                    getDefaultWebDomain: function() {
                        return s.resolve('www');
                    },
                    process: function(aa) {
                        if (this._done) {
                            if (!this._allowReProcess && !aa) return;
                            this.clear();
                        } else this._oneTimeSetup();
                        this._done = true;
                        this._iframeName = this.getIframeName() || this._iframeName || n();
                        if (!this.setupAndValidate()) {
                            this.fire('render');
                            return;
                        }
                        if (this._showLoader) this._addLoader();
                        k.addCss(this.dom, 'fb_iframe_widget');
                        if (this._visibleAfter != 'immediate') {
                            k.addCss(this.dom, 'fb_hide_iframes');
                        } else this.subscribe('iframe.onload', ES5(this.fire, 'bind', true, this, 'render'));
                        var ba = this.getSize() || {},
                            ca = this.getFullyQualifiedURL();
                        if (ba.width == '100%') k.addCss(this.dom, 'fb_iframe_widget_fluid');
                        this.clear();
                        o({
                            url: ca,
                            root: this.dom.appendChild(document.createElement('span')),
                            name: this._iframeName,
                            title: this.getIframeTitle(),
                            className: q.getRtl() ? 'fb_rtl' : 'fb_ltr',
                            height: ba.height,
                            width: ba.width,
                            onload: ES5(this.fire, 'bind', true, this, 'iframe.onload')
                        });
                        this._resizeFlow(ba);
                        this.loaded = false;
                        this.subscribe('iframe.onload', ES5(function() {
                            this.loaded = true;
                        }, 'bind', true, this));
                    },
                    generateWidgetPipeIframeName: function() {
                        v++;
                        return 'fb_iframe_' + v;
                    },
                    getFullyQualifiedURL: function() {
                        var aa = this._getURL();
                        aa += '?' + p.encode(this._getQS());
                        if (aa.length > 2000) {
                            aa = 'about:blank';
                            var ba = ES5(function() {
                                this._postRequest();
                                this.unsubscribe('iframe.onload', ba);
                            }, 'bind', true, this);
                            this.subscribe('iframe.onload', ba);
                        }
                        return aa;
                    },
                    _getWidgetPipeShell: function() {
                        return s.resolve('www') + '/common/widget_pipe_shell.php';
                    },
                    _oneTimeSetup: function() {
                        this.subscribe('xd.resize', ES5(this._handleResizeMsg, 'bind', true, this));
                        this.subscribe('xd.resize', ES5(this._bubbleResizeEvent, 'bind', true, this));
                        this.subscribe('xd.resize.iframe', ES5(this._resizeIframe, 'bind', true, this));
                        this.subscribe('xd.resize.flow', ES5(this._resizeFlow, 'bind', true, this));
                        this.subscribe('xd.resize.flow', ES5(this._bubbleResizeEvent, 'bind', true, this));
                        this.subscribe('xd.refreshLoginStatus', function() {
                            h.getLoginStatus(function() {}, true);
                        });
                        this.subscribe('xd.logout', function() {
                            r({
                                method: 'auth.logout',
                                display: 'hidden'
                            }, function() {});
                        });
                        if (this._refreshOnAuthChange) this._setupAuthRefresh();
                        if (this._visibleAfter == 'load') this.subscribe('iframe.onload', ES5(this._makeVisible, 'bind', true, this));
                        this.subscribe('xd.verify', ES5(function(aa) {
                            this.arbiterInform('xd/verify', aa.token);
                        }, 'bind', true, this));
                        this.oneTimeSetup();
                    },
                    _makeVisible: function() {
                        this._removeLoader();
                        k.removeCss(this.dom, 'fb_hide_iframes');
                        this.fire('render');
                    },
                    _setupAuthRefresh: function() {
                        h.getLoginStatus(ES5(function(aa) {
                            var ba = aa.status;
                            l.subscribe('auth.statusChange', ES5(function(ca) {
                                if (!this.isValid()) return;
                                if (ba == 'unknown' || ca.status == 'unknown') this.process(true);
                                ba = ca.status;
                            }, 'bind', true, this));
                        }, 'bind', true, this));
                    },
                    _handleResizeMsg: function(aa) {
                        if (!this.isValid()) return;
                        this._resizeIframe(aa);
                        this._resizeFlow(aa);
                        if (!this._borderReset) {
                            this.getIframeNode().style.border = 'none';
                            this._borderReset = true;
                        }
                        this._makeVisible();
                    },
                    _bubbleResizeEvent: function(aa) {
                        var ba = {
                            height: aa.height,
                            width: aa.width,
                            pluginID: this.getAttribute('plugin-id')
                        };
                        l.fire('xfbml.resize', ba);
                    },
                    _resizeIframe: function(aa) {
                        var ba = this.getIframeNode();
                        aa.height && (ba.style.height = aa.height + 'px');
                        aa.width && (ba.style.width = aa.width + 'px');
                        this._updateIframeZIndex();
                    },
                    _resizeFlow: function(aa) {
                        var ba = this.dom.getElementsByTagName('span')[0];
                        aa.height && (ba.style.height = aa.height + 'px');
                        aa.width && (ba.style.width = aa.width + 'px');
                        this._updateIframeZIndex();
                    },
                    _updateIframeZIndex: function() {
                        var aa = this.dom.getElementsByTagName('span')[0],
                            ba = this.getIframeNode(),
                            ca = ba.style.height === aa.style.height && ba.style.width === aa.style.width,
                            da = ca ? 'removeCss' : 'addCss';
                        k[da](ba, 'fb_iframe_widget_lift');
                    },
                    _addLoader: function() {
                        if (!this._loaderDiv) {
                            k.addCss(this.dom, 'fb_iframe_widget_loader');
                            this._loaderDiv = document.createElement('div');
                            this._loaderDiv.className = 'FB_Loader';
                            this.dom.appendChild(this._loaderDiv);
                        }
                    },
                    _removeLoader: function() {
                        if (this._loaderDiv) {
                            k.removeCss(this.dom, 'fb_iframe_widget_loader');
                            if (this._loaderDiv.parentNode) this._loaderDiv.parentNode.removeChild(this._loaderDiv);
                            this._loaderDiv = null;
                        }
                    },
                    _getQS: function() {
                        return j({
                            api_key: q.getClientID(),
                            locale: q.getLocale(),
                            sdk: 'joey',
                            ref: this.getAttribute('ref')
                        }, this.getUrlBits().params);
                    },
                    _getURL: function() {
                        var aa = this.getDefaultWebDomain(),
                            ba = '';
                        return aa + '/plugins/' + ba + this.getUrlBits().name + '.php';
                    },
                    _postRequest: function() {
                        i.submitToTarget({
                            url: this._getURL(),
                            target: this.getIframeNode().name,
                            params: this._getQS()
                        });
                    }
                }),
                v = 0,
                w = null,
                x = {};

            function y() {
                var aa = {};
                for (var ba in x) {
                    var ca = x[ba];
                    aa[ba] = {
                        widget: ca.getUrlBits().name,
                        params: ca._getQS()
                    };
                }
                return aa;
            }
            function z() {
                if (!w) return;
                var aa = y(),
                    ba = {
                        widget_pipe: ES5('JSON', 'stringify', false, aa),
                        href: window.location,
                        site: location.hostname,
                        channel: w.getChannelUrl(),
                        api_key: q.getClientID(),
                        locale: q.getLocale(),
                        sdk: 'joey'
                    },
                    ca = n(),
                    da = w.dom,
                    ea = da.appendChild(document.createElement('span'));
                o({
                    url: 'about:blank',
                    root: ea,
                    name: ca,
                    className: 'fb_hidden fb_invisible',
                    onload: function() {
                        i.submitToTarget({
                            url: s.resolve('www') + 'plugins/pipe/',
                            target: ca,
                            params: ba
                        }, 1);
                    }
                });
            }
            e.exports = u;
        });
        __d("sdk.XFBML.Comments", ["sdk.Event", "sdk.XFBML.IframeWidget", "QueryString", "sdk.Runtime", "UrlMap", "UserAgent", "SDKConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.Event'),
                h = b('sdk.XFBML.IframeWidget'),
                i = b('QueryString'),
                j = b('sdk.Runtime'),
                k = c('SDKConfig'),
                l = b('UrlMap'),
                m = b('UserAgent'),
                n = h.extend({
                    _visibleAfter: 'immediate',
                    _refreshOnAuthChange: true,
                    setupAndValidate: function() {
                        var o = {
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
                        if (k.initSitevars.enableMobileComments && m.mobile() && o.mobile !== false) {
                            o.mobile = true;
                            delete o.width;
                        }
                        if (!o.href) {
                            o.migrated = this.getAttribute('migrated');
                            o.xid = this.getAttribute('xid');
                            o.title = this.getAttribute('title', document.title);
                            o.url = this.getAttribute('url', document.URL);
                            o.quiet = this.getAttribute('quiet');
                            o.reverse = this.getAttribute('reverse');
                            o.simple = this.getAttribute('simple');
                            o.css = this.getAttribute('css');
                            o.notify = this.getAttribute('notify');
                            if (!o.xid) {
                                var p = ES5(document.URL, 'indexOf', true, '#');
                                if (p > 0) {
                                    o.xid = encodeURIComponent(document.URL.substring(0, p));
                                } else o.xid = encodeURIComponent(document.URL);
                            }
                            if (o.migrated) o.href = l.resolve('www') + '/plugins/comments_v1.php?' + 'app_id=' + j.getClientID() + '&xid=' + encodeURIComponent(o.xid) + '&url=' + encodeURIComponent(o.url);
                        } else {
                            var q = this.getAttribute('fb_comment_id');
                            if (!q) {
                                q = i.decode(document.URL.substring(ES5(document.URL, 'indexOf', true, '?') + 1)).fb_comment_id;
                                if (q && ES5(q, 'indexOf', true, '#') > 0) q = q.substring(0, ES5(q, 'indexOf', true, '#'));
                            }
                            if (q) {
                                o.fb_comment_id = q;
                                this.subscribe('render', ES5(function() {
                                    if (!window.location.hash) window.location.hash = this.getIframeNode().id;
                                }, 'bind', true, this));
                            }
                        }
                        this._attr = o;
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
                        return l.resolve(this._attr.mobile ? 'm' : 'www', true);
                    },
                    _handleCommentMsg: function(o) {
                        if (!this.isValid()) return;
                        g.fire('comments.add', {
                            post: o.post,
                            user: o.user,
                            widget: this
                        });
                    },
                    _handleCommentCreatedMsg: function(o) {
                        if (!this.isValid()) return;
                        var p = {
                            href: o.href,
                            commentID: o.commentID,
                            parentCommentID: o.parentCommentID
                        };
                        g.fire('comment.create', p);
                    },
                    _handleCommentRemovedMsg: function(o) {
                        if (!this.isValid()) return;
                        var p = {
                            href: o.href,
                            commentID: o.commentID
                        };
                        g.fire('comment.remove', p);
                    }
                });
            e.exports = n;
        });
        __d("sdk.XFBML.CommentsCount", ["sdk.Data", "sdk.DOM", "sdk.XFBML.Element", "sprintf"], function(a, b, c, d, e, f) {
            var g = b('sdk.Data'),
                h = b('sdk.DOM'),
                i = b('sdk.XFBML.Element'),
                j = b('sprintf'),
                k = i.extend({
                    process: function() {
                        h.addCss(this.dom, 'fb_comments_count_zero');
                        var l = this.getAttribute('href', window.location.href);
                        g._selectByIndex(['commentsbox_count'], 'link_stat', 'url', l).wait(ES5(function(m) {
                            var n = m[0].commentsbox_count;
                            h.html(this.dom, j('<span class="fb_comments_count">%s</span>', n));
                            if (n > 0) h.removeCss(this.dom, 'fb_comments_count_zero');
                            this.fire('render');
                        }, 'bind', true, this));
                    }
                });
            e.exports = k;
        });
        __d("sdk.Anim", ["sdk.DOM"], function(a, b, c, d, e, f) {
            var g = b('sdk.DOM'),
                h = {
                    ate: function(i, j, k, l) {
                        k = !isNaN(parseFloat(k)) && k >= 0 ? k : 750;
                        var m = 40,
                            n = {},
                            o = {},
                            p = null,
                            q = setInterval(ES5(function() {
                                if (!p) p = ES5('Date', 'now', false);
                                var r = 1;
                                if (k != 0) r = Math.min((ES5('Date', 'now', false) - p) / k, 1);
                                for (var s in j) if (j.hasOwnProperty(s)) {
                                    var t = j[s];
                                    if (!n[s]) {
                                        var u = g.getStyle(i, s);
                                        if (u === false) return;
                                        n[s] = this._parseCSS(u + '');
                                    }
                                    if (!o[s]) o[s] = this._parseCSS(t.toString());
                                    var v = '';
                                    ES5(n[s], 'forEach', true, function(w, x) {
                                        if (isNaN(o[s][x].numPart) && o[s][x].textPart == '?') {
                                            v = w.numPart + w.textPart;
                                        } else if (isNaN(w.numPart)) {
                                            v = w.textPart;
                                        } else v += (w.numPart + Math.ceil((o[s][x].numPart - w.numPart) * Math.sin(Math.PI / 2 * r))) + o[s][x].textPart + ' ';
                                    });
                                    g.setStyle(i, s, v);
                                }
                                if (r == 1) {
                                    clearInterval(q);
                                    if (l) l(i);
                                }
                            }, 'bind', true, this), m);
                    },
                    _parseCSS: function(i) {
                        var j = [];
                        ES5(i.split(' '), 'forEach', true, function(k) {
                            var l = parseInt(k, 10);
                            j.push({
                                numPart: l,
                                textPart: k.replace(l, '')
                            });
                        });
                        return j;
                    }
                };
            e.exports = h;
        });
        __d("escapeHTML", [], function(a, b, c, d, e, f) {
            var g = /[&<>"'\/]/g,
                h = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#039;',
                    '/': '&#x2F;'
                };

            function i(j) {
                return j.replace(g, function(k) {
                    return h[k];
                });
            }
            e.exports = i;
        });
        __d("sdk.Helper", ["sdk.ErrorHandling", "sdk.Event", "FB", "sdk.Runtime", "safeEval", "UrlMap"], function(a, b, c, d, e, f) {
            var g = b('sdk.ErrorHandling'),
                h = b('sdk.Event'),
                i = b('FB'),
                j = b('sdk.Runtime'),
                k = b('safeEval'),
                l = b('UrlMap'),
                m = {
                    isUser: function(n) {
                        return n < 2.2e+09 || (n >= 1e+14 && n <= 100099999989999) || (n >= 8.9e+13 && n <= 89999999999999);
                    },
                    upperCaseFirstChar: function(n) {
                        if (n.length > 0) {
                            return n.substr(0, 1).toUpperCase() + n.substr(1);
                        } else return n;
                    },
                    getProfileLink: function(n, o, p) {
                        p = p || (n ? l.resolve('www') + '/profile.php?id=' + n.uid : null);
                        if (p) o = '<a class="fb_link" href="' + p + '">' + o + '</a>';
                        return o;
                    },
                    invokeHandler: function(n, o, p) {
                        if (n) if (typeof n === 'string') {
                            g.unguard(k)(n);
                        } else if (n.apply) g.unguard(n).apply(o, p || []);
                    },
                    fireEvent: function(n, o) {
                        var p = o._attr.href;
                        o.fire(n, p);
                        h.fire(n, p, o);
                    },
                    executeFunctionByName: function(n) {
                        var o = Array.prototype.slice.call(arguments, 1),
                            p = n.split("."),
                            q = p.pop(),
                            r = window;
                        for (var s = 0; s < p.length; s++) r = r[p[s]];
                        return r[q].apply(this, o);
                    }
                };
            e.exports = m;
        });
        __d("sdk.XFBML.ConnectBar", ["sdk.Anim", "sdk.api", "sdk.Auth", "createArrayFrom", "sdk.Data", "sdk.DOM", "sdk.XFBML.Element", "escapeHTML", "sdk.Event", "format", "sdk.Helper", "sdk.Insights", "sdk.Intl", "sdk.Runtime", "UrlMap", "UserAgent", "ConnectBarConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.Anim'),
                h = b('sdk.api'),
                i = b('sdk.Auth'),
                j = b('createArrayFrom'),
                k = c('ConnectBarConfig'),
                l = b('sdk.Data'),
                m = b('sdk.DOM'),
                n = b('sdk.XFBML.Element'),
                o = b('escapeHTML'),
                p = b('sdk.Event'),
                q = b('format'),
                r = b('sdk.Helper'),
                s = b('sdk.Insights'),
                t = b('sdk.Intl'),
                u = b('sdk.Runtime'),
                v = b('UrlMap'),
                w = b('UserAgent'),
                x = n.extend({
                    _initialHeight: null,
                    _initTopMargin: 0,
                    _picFieldName: 'pic_square',
                    _page: null,
                    _displayed: false,
                    _notDisplayed: false,
                    _container: null,
                    _animationSpeed: 0,
                    process: function() {
                        i.getLoginStatus(ES5(function(y) {
                            p.monitor('auth.statusChange', ES5(function() {
                                if (this.isValid() && u.getLoginStatus() == 'connected') {
                                    this._uid = u.getUserID();
                                    h({
                                        method: 'Connect.shouldShowConnectBar'
                                    }, ES5(function(z) {
                                        if (z != 2) {
                                            this._animationSpeed = (z == 0) ? 750 : 0;
                                            this._showBar();
                                        } else this._noRender();
                                    }, 'bind', true, this));
                                } else this._noRender();
                                return false;
                            }, 'bind', true, this));
                        }, 'bind', true, this));
                    },
                    _showBar: function() {
                        var y = l._selectByIndex(['first_name', 'profile_url', this._picFieldName], 'user', 'uid', this._uid),
                            z = l._selectByIndex(['display_name'], 'application', 'api_key', u.getClientID());
                        l.waitOn([y, z], ES5(function(aa) {
                            aa[0][0].site_name = aa[1][0].display_name;
                            if (!this._displayed) {
                                this._displayed = true;
                                this._notDisplayed = false;
                                this._renderConnectBar(aa[0][0]);
                                this.fire('render');
                                s.impression({
                                    lid: 104,
                                    name: 'widget_load'
                                });
                                this.fire('connectbar.ondisplay');
                                p.fire('connectbar.ondisplay', this);
                                r.invokeHandler(this.getAttribute('on-display'), this);
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
                            p.fire('connectbar.onnotdisplay', this);
                            r.invokeHandler(this.getAttribute('on-not-display'), this);
                        }
                    },
                    _renderConnectBar: function(y) {
                        var z = document.createElement('div'),
                            aa = document.createElement('div');
                        z.className = 'fb_connect_bar';
                        aa.className = 'fb_reset fb_connect_bar_container';
                        aa.appendChild(z);
                        document.body.appendChild(aa);
                        this._container = aa;
                        this._initialHeight = Math.round(parseFloat(m.getStyle(aa, 'height')) + parseFloat(m.getStyle(aa, 'borderBottomWidth')));
                        m.html(z, q('<div class="fb_buttons">' + '<a href="#" class="fb_bar_close">' + '<img src="{1}" alt="{2}" title="{2}"/>' + '</a>' + '</div>' + '<a href="{7}" class="fb_profile" target="_blank">' + '<img src="{3}" alt="{4}" title="{4}"/>' + '</a>' + '{5}' + ' <span>' + '<a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; ' + '<a href="#" class="fb_no_thanks">{0}</a>' + '</span>', t.tx._("No Thanks"), v.resolve('fbcdn') + '/' + k.imgs.buttonUrl, t.tx._("Close"), y[this._picFieldName] || v.resolve('fbcdn') + '/' + k.imgs.missingProfileUrl, o(y.first_name), t.tx._("Hi {firstName}. \u003Cstrong>{siteName}\u003C\/strong> is using Facebook to personalize your experience.", {
                            firstName: o(y.first_name),
                            siteName: o(y.site_name)
                        }), t.tx._("Learn More"), y.profile_url, v.resolve('www') + '/sitetour/connect.php'));
                        ES5(j(z.getElementsByTagName('a')), 'forEach', true, function(da) {
                            da.onclick = ES5(this._clickHandler, 'bind', true, this);
                        }, this);
                        this._page = document.body;
                        var ba = 0;
                        if (this._page.parentNode) {
                            ba = Math.round((parseFloat(m.getStyle(this._page.parentNode, 'height')) - parseFloat(m.getStyle(this._page, 'height'))) / 2);
                        } else ba = parseInt(m.getStyle(this._page, 'marginTop'), 10);
                        ba = isNaN(ba) ? 0 : ba;
                        this._initTopMargin = ba;
                        if (!window.XMLHttpRequest) {
                            aa.className += " fb_connect_bar_container_ie6";
                        } else {
                            aa.style.top = (-1 * this._initialHeight) + 'px';
                            g.ate(aa, {
                                top: '0px'
                            }, this._animationSpeed);
                        }
                        var ca = {
                            marginTop: this._initTopMargin + this._initialHeight + 'px'
                        };
                        if (w.ie()) {
                            ca.backgroundPositionY = this._initialHeight + 'px';
                        } else ca.backgroundPosition = '? ' + this._initialHeight + 'px';
                        g.ate(this._page, ca, this._animationSpeed);
                    },
                    _clickHandler: function(y) {
                        y = y || window.event;
                        var z = y.target || y.srcElement;
                        while (z.nodeName != 'A') z = z.parentNode;
                        switch (z.className) {
                        case 'fb_bar_close':
                            h({
                                method: 'Connect.connectBarMarkAcknowledged'
                            });
                            s.impression({
                                lid: 104,
                                name: 'widget_user_closed'
                            });
                            this._closeConnectBar();
                            break;
                        case 'fb_learn_more':
                        case 'fb_profile':
                            window.open(z.href);
                            break;
                        case 'fb_no_thanks':
                            this._closeConnectBar();
                            h({
                                method: 'Connect.connectBarMarkAcknowledged'
                            });
                            s.impression({
                                lid: 104,
                                name: 'widget_user_no_thanks'
                            });
                            h({
                                method: 'auth.revokeAuthorization',
                                block: true
                            }, ES5(function() {
                                this.fire('connectbar.ondeauth');
                                p.fire('connectbar.ondeauth', this);
                                r.invokeHandler(this.getAttribute('on-deauth'), this);
                                if (this._getBoolAttribute('auto-refresh', true)) window.location.reload();
                            }, 'bind', true, this));
                            break;
                        }
                        return false;
                    },
                    _closeConnectBar: function() {
                        this._notDisplayed = true;
                        var y = {
                            marginTop: this._initTopMargin + 'px'
                        };
                        if (w.ie()) {
                            y.backgroundPositionY = '0px';
                        } else y.backgroundPosition = '? 0px';
                        var z = (this._animationSpeed == 0) ? 0 : 300;
                        g.ate(this._page, y, z);
                        g.ate(this._container, {
                            top: (-1 * this._initialHeight) + 'px'
                        }, z, function(aa) {
                            aa.parentNode.removeChild(aa);
                        });
                        this.fire('connectbar.onclose');
                        p.fire('connectbar.onclose', this);
                        r.invokeHandler(this.getAttribute('on-close'), this);
                    }
                });
            e.exports = x;
        });
        __d("sdk.XFBML.Fan", ["sdk.XFBML.IframeWidget", "sdk.Runtime", "Log"], function(a, b, c, d, e, f) {
            var g = b('sdk.XFBML.IframeWidget'),
                h = b('sdk.Runtime'),
                i = b('Log'),
                j = g.extend({
                    _visibleAfter: 'load',
                    setupAndValidate: function() {
                        this._attr = {
                            api_key: h.getClientID(),
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
                            i.error('<fb:fan> requires one of the "id" or "name" attributes.');
                            return false;
                        }
                        var k = this._attr.height;
                        if (!k) if ((!this._attr.connections || this._attr.connections === '0') && !this._attr.stream) {
                            k = 65;
                        } else if (!this._attr.connections || this._attr.connections === '0') {
                            k = 375;
                        } else if (!this._attr.stream) {
                            k = 250;
                        } else k = 550;
                        if (this._attr.logobar) k += 25;
                        this._attr.height = k;
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
            e.exports = j;
        });
        __d("sdk.XFBML.EdgeCommentWidget", ["sdk.XFBML.IframeWidget", "sdk.DOM"], function(a, b, c, d, e, f) {
            var g = b('sdk.XFBML.IframeWidget'),
                h = b('sdk.DOM'),
                i = 10000,
                j = g.extend({
                    constructor: function(k) {
                        this.parent(k.commentNode);
                        this._iframeWidth = k.width + 1;
                        this._iframeHeight = k.height;
                        this._attr = {
                            master_frame_name: k.masterFrameName,
                            offsetX: k.relativeWidthOffset - k.paddingLeft
                        };
                        this.dom = k.commentNode;
                        this.dom.style.top = k.relativeHeightOffset + 'px';
                        this.dom.style.left = k.relativeWidthOffset + 'px';
                        this.dom.style.zIndex = i++;
                        h.addCss(this.dom, 'fb_edge_comment_widget');
                    },
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
            e.exports = j;
        });
        __d("sdk.XFBML.EdgeWidget", ["sdk.XFBML.IframeWidget", "sdk.XFBML.EdgeCommentWidget", "sdk.DOM", "sdk.Helper", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('sdk.XFBML.IframeWidget'),
                h = b('sdk.XFBML.EdgeCommentWidget'),
                i = b('sdk.DOM'),
                j = b('sdk.Helper'),
                k = b('sdk.Runtime'),
                l = g.extend({
                    _visibleAfter: 'immediate',
                    _showLoader: false,
                    _rootPadding: null,
                    setupAndValidate: function() {
                        i.addCss(this.dom, 'fb_edge_widget_with_comment');
                        this._attr = {
                            channel_url: this.getChannelUrl(),
                            debug: this._getBoolAttribute('debug'),
                            href: this.getAttribute('href', window.location.href),
                            is_permalink: this._getBoolAttribute('is-permalink'),
                            node_type: this.getAttribute('node-type', 'link'),
                            width: this._getWidgetWidth(),
                            font: this.getAttribute('font'),
                            layout: this._getLayout(),
                            colorscheme: this.getAttribute('color-scheme', 'light'),
                            action: this.getAttribute('action'),
                            ref: this.getAttribute('ref'),
                            show_faces: this._shouldShowFaces(),
                            no_resize: this._getBoolAttribute('no_resize'),
                            send: this._getBoolAttribute('send'),
                            url_map: this.getAttribute('url_map'),
                            extended_social_context: this._getBoolAttribute('extended_social_context', false)
                        };
                        this._rootPadding = {
                            left: parseFloat(i.getStyle(this.dom, 'paddingLeft')),
                            top: parseFloat(i.getStyle(this.dom, 'paddingTop'))
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
                        var m = this._getLayout(),
                            n = this._shouldShowFaces() ? 'show' : 'hide',
                            o = this._getBoolAttribute('send'),
                            p = 65 + (o ? 25 : 0),
                            q = {
                                standard: {
                                    show: 80,
                                    hide: 35
                                },
                                box_count: {
                                    show: p,
                                    hide: p
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
                        return q[m][n];
                    },
                    _getWidgetWidth: function() {
                        var m = this._getLayout(),
                            n = this._getBoolAttribute('send'),
                            o = this._shouldShowFaces() ? 'show' : 'hide',
                            p = (this.getAttribute('action') === 'recommend'),
                            q = (p ? 265 : 225) + (n ? 60 : 0),
                            r = (p ? 130 : 90) + (n ? 60 : 0),
                            s = this.getAttribute('action') === 'recommend' ? 100 : 55,
                            t = this.getAttribute('action') === 'recommend' ? 90 : 50,
                            u = {
                                standard: {
                                    show: 450,
                                    hide: 450
                                },
                                box_count: {
                                    show: s,
                                    hide: s
                                },
                                button_count: {
                                    show: r,
                                    hide: r
                                },
                                simple: {
                                    show: t,
                                    hide: t
                                }
                            },
                            v = u[m][o],
                            w = this._getPxAttribute('width', v),
                            x = {
                                standard: {
                                    min: q,
                                    max: 900
                                },
                                box_count: {
                                    min: s,
                                    max: 900
                                },
                                button_count: {
                                    min: r,
                                    max: 900
                                },
                                simple: {
                                    min: 49,
                                    max: 900
                                }
                            };
                        if (w < x[m].min) {
                            w = x[m].min;
                        } else if (w > x[m].max) w = x[m].max;
                        return w;
                    },
                    _getLayout: function() {
                        return this._getAttributeFromList('layout', 'standard', ['standard', 'button_count', 'box_count', 'simple']);
                    },
                    _shouldShowFaces: function() {
                        return this._getLayout() === 'standard' && this._getBoolAttribute('show-faces', true);
                    },
                    _handleEdgeCommentDialogPresentation: function(m) {
                        if (!this.isValid()) return;
                        var n = document.createElement('span');
                        this._commentSlave = this._createEdgeCommentWidget(m, n);
                        this.dom.appendChild(n);
                        this._commentSlave.process();
                        this._commentWidgetNode = n;
                    },
                    _createEdgeCommentWidget: function(m, n) {
                        var o = {
                            commentNode: n,
                            externalUrl: m.externalURL,
                            masterFrameName: m.masterFrameName,
                            layout: this._getLayout(),
                            relativeHeightOffset: this._getHeightOffset(m),
                            relativeWidthOffset: this._getWidthOffset(m),
                            anchorTargetX: parseFloat(m['query[anchorTargetX]']) + this._rootPadding.left,
                            anchorTargetY: parseFloat(m['query[anchorTargetY]']) + this._rootPadding.top,
                            width: parseFloat(m.width),
                            height: parseFloat(m.height),
                            paddingLeft: this._rootPadding.left
                        };
                        return new h(o);
                    },
                    _getHeightOffset: function(m) {
                        return parseFloat(m['anchorGeometry[y]']) + parseFloat(m['anchorPosition[y]']) + this._rootPadding.top;
                    },
                    _getWidthOffset: function(m) {
                        var n = parseFloat(m['anchorPosition[x]']) + this._rootPadding.left,
                            o = i.getPosition(this.dom).x,
                            p = this.dom.offsetWidth,
                            q = i.getViewportInfo().width,
                            r = parseFloat(m.width),
                            s = false;
                        if (k.getRtl()) {
                            s = r < o;
                        } else if ((o + r) > q) s = true;
                        if (s) n += parseFloat(m['anchorGeometry[x]']) - r;
                        return n;
                    },
                    _getCommonEdgeCommentWidgetOpts: function(m, n) {
                        return {
                            colorscheme: this._attr.colorscheme,
                            commentNode: n,
                            controllerID: m.controllerID,
                            nodeImageURL: m.nodeImageURL,
                            nodeRef: this._attr.ref,
                            nodeTitle: m.nodeTitle,
                            nodeURL: m.nodeURL,
                            nodeSummary: m.nodeSummary,
                            width: parseFloat(m.width),
                            height: parseFloat(m.height),
                            relativeHeightOffset: this._getHeightOffset(m),
                            relativeWidthOffset: this._getWidthOffset(m),
                            error: m.error,
                            siderender: m.siderender,
                            extended_social_context: m.extended_social_context,
                            anchorTargetX: parseFloat(m['query[anchorTargetX]']) + this._rootPadding.left,
                            anchorTargetY: parseFloat(m['query[anchorTargetY]']) + this._rootPadding.top
                        };
                    },
                    _handleEdgeCommentDialogDismissal: function(m) {
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
                    _fireEventAndInvokeHandler: function(m, n) {
                        j.fireEvent(m, this);
                        j.invokeHandler(this.getAttribute(n), this, [this._attr.href]);
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
            e.exports = l;
        });
        __d("sdk.XFBML.SendButtonFormWidget", ["sdk.XFBML.EdgeCommentWidget", "sdk.DOM", "sdk.Event"], function(a, b, c, d, e, f) {
            var g = b('sdk.XFBML.EdgeCommentWidget'),
                h = b('sdk.DOM'),
                i = b('sdk.Event'),
                j = g.extend({
                    constructor: function(k) {
                        this.parent(k);
                        h.addCss(this.dom, 'fb_send_button_form_widget');
                        h.addCss(this.dom, k.colorscheme);
                        h.addCss(this.dom, (typeof k.siderender != 'undefined' && k.siderender) ? 'siderender' : '');
                        this._attr.nodeImageURL = k.nodeImageURL;
                        this._attr.nodeRef = k.nodeRef;
                        this._attr.nodeTitle = k.nodeTitle;
                        this._attr.nodeURL = k.nodeURL;
                        this._attr.nodeSummary = k.nodeSummary;
                        this._attr.offsetX = k.relativeWidthOffset;
                        this._attr.offsetY = k.relativeHeightOffset;
                        this._attr.anchorTargetX = k.anchorTargetX;
                        this._attr.anchorTargetY = k.anchorTargetY;
                        this._attr.channel = this.getChannelUrl();
                        this._attr.controllerID = k.controllerID;
                        this._attr.colorscheme = k.colorscheme;
                        this._attr.error = k.error;
                        this._attr.siderender = k.siderender;
                        this._attr.extended_social_context = k.extended_social_context;
                    },
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
                        i.fire('message.send', this._attr.nodeURL, this);
                    }
                });
            e.exports = j;
        });
        __d("sdk.XFBML.Like", ["sdk.XFBML.EdgeWidget", "sdk.XFBML.SendButtonFormWidget", "XFBML"], function(a, b, c, d, e, f) {
            var g = b('sdk.XFBML.EdgeWidget'),
                h = b('sdk.XFBML.SendButtonFormWidget'),
                i = b('XFBML'),
                j = g.extend({
                    getUrlBits: function() {
                        return {
                            name: 'like',
                            params: this._attr
                        };
                    },
                    _createEdgeCommentWidget: function(k, l) {
                        if ('send' in this._attr && 'widget_type' in k && k.widget_type == 'send') {
                            var m = this._getCommonEdgeCommentWidgetOpts(k, l);
                            return new h(m);
                        } else return this.parentCall("_createEdgeCommentWidget", k, l);
                    },
                    getIframeTitle: function() {
                        return 'Like this content on Facebook.';
                    }
                });
            e.exports = j;
        });
        __d("sdk.XFBML.LikeBox", ["sdk.XFBML.EdgeWidget", "sdk.Helper", "Log", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('sdk.XFBML.EdgeWidget'),
                h = b('sdk.Helper'),
                i = b('Log'),
                j = b('sdk.Runtime'),
                k = g.extend({
                    _visibleAfter: 'load',
                    setupAndValidate: function() {
                        this._attr = {
                            channel: this.getChannelUrl(),
                            api_key: j.getClientID(),
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
                            i.error('<fb:like-box> requires one of the "id" or "name" attributes.');
                            return false;
                        }
                        var l = this._attr.height;
                        if (!l) if (!this._attr.show_faces && !this._attr.stream) {
                            l = 62;
                        } else {
                            l = 95;
                            if (this._attr.show_faces) l += 163;
                            if (this._attr.stream) l += 300;
                            if (this._attr.header && this._attr.header !== '0') l += 32;
                        }
                        this._attr.height = l;
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
                        h.fireEvent('edge.create', this);
                    },
                    _onUnliked: function() {
                        h.fireEvent('edge.remove', this);
                    }
                });
            e.exports = k;
        });
        __d("sdk.XFBML.LiveStream", ["sdk.XFBML.IframeWidget", "XFBML"], function(a, b, c, d, e, f) {
            var g = b('sdk.XFBML.IframeWidget'),
                h = b('XFBML'),
                i = g.extend({
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
                        var j = this._attr.redesigned ? 'live_stream_box' : 'livefeed';
                        if (this._getBoolAttribute('modern', false)) j = 'live_stream';
                        return {
                            name: j,
                            params: this._attr
                        };
                    }
                });
            e.exports = i;
        });
        __d("sdk.XFBML.LoginButton", ["sdk.Helper", "IframePlugin"], function(a, b, c, d, e, f) {
            var g = b('sdk.Helper'),
                h = b('IframePlugin'),
                i = h.extend({
                    constructor: function(j, k, l, m) {
                        this.parent(j, k, l, m);
                        var n = h.getVal(m, 'on_login');
                        if (n) this.subscribe('login.status', function(o) {
                            g.invokeHandler(n, null, [o]);
                        });
                    },
                    getParams: function() {
                        return {
                            scope: 'string',
                            perms: 'string',
                            size: 'string',
                            login_text: 'text',
                            show_faces: 'bool',
                            max_rows: 'string',
                            show_login_face: 'bool',
                            registration_url: 'url_maybe',
                            auto_logout_link: 'bool',
                            one_click: 'bool'
                        };
                    }
                });
            e.exports = i;
        });
        __d("sdk.XFBML.Name", ["copyProperties", "sdk.Data", "escapeHTML", "sdk.Event", "sdk.XFBML.Element", "FB", "sdk.Helper", "Log", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('copyProperties'),
                h = b('sdk.Data'),
                i = b('escapeHTML'),
                j = b('sdk.Event'),
                k = b('sdk.XFBML.Element'),
                l = b('FB'),
                m = b('sdk.Helper'),
                n = b('Log'),
                o = b('sdk.Runtime'),
                p = k.extend({
                    process: function() {
                        g(this, {
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
                            n.error('"uid" is a required attribute for <fb:name>');
                            this.fire('render');
                            return;
                        }
                        var q = [];
                        if (this._firstnameonly) {
                            q.push('first_name');
                        } else if (this._lastnameonly) {
                            q.push('last_name');
                        } else q.push('name');
                        if (this._subjectId) {
                            q.push('sex');
                            if (this._subjectId == o.getUserID()) this._reflexive = true;
                        }
                        var r;
                        j.monitor('auth.statusChange', ES5(function() {
                            if (!this.isValid()) {
                                this.fire('render');
                                return true;
                            }
                            if (!this._uid || this._uid == 'loggedinuser') this._uid = o.getUserID();
                            if (!this._uid) return;
                            if (m.isUser(this._uid)) {
                                r = h._selectByIndex(q, 'user', 'uid', this._uid);
                            } else r = h._selectByIndex(['name', 'id'], 'profile', 'id', this._uid);
                            r.wait(ES5(function(s) {
                                if (this._subjectId == this._uid) {
                                    this._renderPronoun(s[0]);
                                } else this._renderOther(s[0]);
                                this.fire('render');
                            }, 'bind', true, this));
                        }, 'bind', true, this));
                    },
                    _renderPronoun: function(q) {
                        var r = '',
                            s = this._objective;
                        if (this._subjectId) {
                            s = true;
                            if (this._subjectId === this._uid) this._reflexive = true;
                        }
                        if (this._uid == o.getUserID() && this._getBoolAttribute('use-you', true)) {
                            if (this._possessive) {
                                if (this._reflexive) {
                                    r = 'your own';
                                } else r = 'your';
                            } else if (this._reflexive) {
                                r = 'yourself';
                            } else r = 'you';
                        } else switch (q.sex) {
                        case 'male':
                            if (this._possessive) {
                                r = this._reflexive ? 'his own' : 'his';
                            } else if (this._reflexive) {
                                r = 'himself';
                            } else if (s) {
                                r = 'him';
                            } else r = 'he';
                            break;
                        case 'female':
                            if (this._possessive) {
                                r = this._reflexive ? 'her own' : 'her';
                            } else if (this._reflexive) {
                                r = 'herself';
                            } else if (s) {
                                r = 'her';
                            } else r = 'she';
                            break;
                        default:
                            if (this._getBoolAttribute('use-they', true)) {
                                if (this._possessive) {
                                    if (this._reflexive) {
                                        r = 'their own';
                                    } else r = 'their';
                                } else if (this._reflexive) {
                                    r = 'themselves';
                                } else if (s) {
                                    r = 'them';
                                } else r = 'they';
                            } else if (this._possessive) {
                                if (this._reflexive) {
                                    r = 'his/her own';
                                } else r = 'his/her';
                            } else if (this._reflexive) {
                                r = 'himself/herself';
                            } else if (s) {
                                r = 'him/her';
                            } else r = 'he/she';
                            break;
                        }
                        if (this._getBoolAttribute('capitalize', false)) r = m.upperCaseFirstChar(r);
                        this.dom.innerHTML = r;
                    },
                    _renderOther: function(q) {
                        var r = '',
                            s = '';
                        if (this._uid == o.getUserID() && this._getBoolAttribute('use-you', true)) {
                            if (this._reflexive) {
                                if (this._possessive) {
                                    r = 'your own';
                                } else r = 'yourself';
                            } else if (this._possessive) {
                                r = 'your';
                            } else r = 'you';
                        } else if (q) {
                            if (null === q.first_name) q.first_name = '';
                            if (null === q.last_name) q.last_name = '';
                            if (this._firstnameonly && q.first_name !== undefined) {
                                r = i(q.first_name);
                            } else if (this._lastnameonly && q.last_name !== undefined) r = i(q.last_name);
                            if (!r) r = i(q.name);
                            if (r !== '' && this._possessive) r += '\'s';
                        }
                        if (!r) r = i(this.getAttribute('if-cant-see', 'Facebook User'));
                        if (r) {
                            if (this._getBoolAttribute('capitalize', false)) r = m.upperCaseFirstChar(r);
                            if (q && this._linked) {
                                s = m.getProfileLink(q, r, this.getAttribute('href', null));
                            } else s = r;
                        }
                        this.dom.innerHTML = s;
                    }
                });
            e.exports = p;
        });
        __d("sdk.XFBML.ProfilePic", ["sdk.Data", "sdk.DOM", "escapeHTML", "sdk.XFBML.Element", "sdk.Event", "format", "sdk.Helper", "sdk.Runtime", "UrlMap", "ProfilePicConfig"], function(a, b, c, d, e, f) {
            var g = b('sdk.Data'),
                h = b('sdk.DOM'),
                i = b('escapeHTML'),
                j = c('ProfilePicConfig'),
                k = b('sdk.XFBML.Element'),
                l = b('sdk.Event'),
                m = b('format'),
                n = b('sdk.Helper'),
                o = b('sdk.Runtime'),
                p = b('UrlMap'),
                q = {
                    n: 'pic_big',
                    normal: 'pic_big',
                    q: 'pic_square',
                    s: 'pic',
                    small: 'pic',
                    square: 'pic_square',
                    t: 'pic_small',
                    thumb: 'pic_small'
                },
                r = k.extend({
                    process: function() {
                        var s = this.getAttribute('size', 'thumb'),
                            t = q[s],
                            u = this._getPxAttribute('width'),
                            v = this._getPxAttribute('height'),
                            w = this.dom.style,
                            x = this.getAttribute('uid');
                        if (this._getBoolAttribute('facebook-logo')) t += '_with_logo';
                        if (u) {
                            u = u + 'px';
                            w.width = u;
                        }
                        if (v) {
                            v = v + 'px';
                            w.height = v;
                        }
                        var y = ES5(function(z) {
                            var aa = z ? z[0] : null,
                                ba = aa ? aa[t] : null;
                            if (!ba) ba = p.resolve('fbcdn') + j.defPicMap[t];
                            var ca = ((u ? 'width:' + u + ';' : '') + (v ? 'height:' + u + ';' : '')),
                                da = m('<img src="{0}" alt="{1}" title="{1}" style="{2}" class="{3}" />', ba, aa ? i(aa.name) : '', ca, this.dom.className);
                            if (this._getBoolAttribute('linked', true)) da = n.getProfileLink(aa, da, this.getAttribute('href', null));
                            this.dom.innerHTML = da;
                            h.addCss(this.dom, 'fb_profile_pic_rendered');
                            this.fire('render');
                        }, 'bind', true, this);
                        l.monitor('auth.statusChange', ES5(function() {
                            if (!this.isValid()) {
                                this.fire('render');
                                return true;
                            }
                            if (this.getAttribute('uid', null) == 'loggedinuser') x = o.getUserID();
                            if (o.getLoginStatus() !== 'unknown' && x) {
                                g._selectByIndex(['name', t], n.isUser(x) ? 'user' : 'profile', n.isUser(x) ? 'uid' : 'id', x).wait(y);
                            } else y();
                        }, 'bind', true, this));
                    }
                });
            e.exports = r;
        });
        __d("sdk.XFBML.RecommendationsBar", ["sdk.Arbiter", "DOMEventListener", "sdk.Event", "sdk.XFBML.IframeWidget", "resolveURI", "sdk.Runtime"], function(a, b, c, d, e, f) {
            var g = b('sdk.Arbiter'),
                h = b('DOMEventListener'),
                i = b('sdk.Event'),
                j = b('sdk.XFBML.IframeWidget'),
                k = b('resolveURI'),
                l = b('sdk.Runtime'),
                m = j.extend({
                    getUrlBits: function() {
                        return {
                            name: 'recommendations_bar',
                            params: this._attr
                        };
                    },
                    setupAndValidate: function() {
                        function n(w, x) {
                            var y = 0,
                                z = null;

                            function aa() {
                                x();
                                z = null;
                                y = ES5('Date', 'now', false);
                            }
                            return function() {
                                if (!z) {
                                    var ba = ES5('Date', 'now', false);
                                    if (ba - y < w) {
                                        z = setTimeout(aa, w - (ba - y));
                                    } else aa();
                                }
                                return true;
                            };
                        }
                        function o(w) {
                            if (w.match(/^\d+(?:\.\d+)?%$/)) {
                                var x = Math.min(Math.max(parseInt(w, 10), 0), 100);
                                w = x / 100;
                            } else if (w != 'manual' && w != 'onvisible') w = 'onvisible';
                            return w;
                        }
                        function p(w) {
                            return Math.max(parseInt(w, 10) || 30, 10);
                        }
                        function q(w) {
                            if (w == 'left' || w == 'right') return w;
                            return l.getRtl() ? 'left' : 'right';
                        }
                        this._attr = {
                            channel: this.getChannelUrl(),
                            api_key: l.getClientID(),
                            font: this.getAttribute('font'),
                            colorscheme: this.getAttribute('colorscheme'),
                            href: k(this.getAttribute('href')),
                            side: q(this.getAttribute('side')),
                            site: this.getAttribute('site'),
                            action: this.getAttribute('action'),
                            ref: this.getAttribute('ref'),
                            max_age: this.getAttribute('max_age'),
                            trigger: o(this.getAttribute('trigger', '')),
                            read_time: p(this.getAttribute('read_time')),
                            num_recommendations: parseInt(this.getAttribute('num_recommendations'), 10) || 2
                        };
                        this._showLoader = false;
                        this.subscribe('iframe.onload', ES5(function() {
                            var w = this.dom.children[0];
                            w.className = 'fbpluginrecommendationsbar' + this._attr.side;
                        }, 'bind', true, this));
                        var r = ES5(function() {
                            h.remove(window, 'scroll', r);
                            h.remove(document.documentElement, 'click', r);
                            h.remove(document.documentElement, 'mousemove', r);
                            setTimeout(ES5(this.arbiterInform, 'bind', true, this, 'platform/plugins/recommendations_bar/action', null, g.BEHAVIOR_STATE), this._attr.read_time * 1000);
                            return true;
                        }, 'bind', true, this);
                        h.add(window, 'scroll', r);
                        h.add(document.documentElement, 'click', r);
                        h.add(document.documentElement, 'mousemove', r);
                        if (this._attr.trigger == "manual") {
                            var s = ES5(function(w) {
                                if (w == this._attr.href) {
                                    i.unsubscribe('xfbml.recommendationsbar.read', s);
                                    this.arbiterInform('platform/plugins/recommendations_bar/trigger', null, g.BEHAVIOR_STATE);
                                }
                                return true;
                            }, 'bind', true, this);
                            i.subscribe('xfbml.recommendationsbar.read', s);
                        } else {
                            var t = n(500, ES5(function() {
                                if (this.calculateVisibility()) {
                                    h.remove(window, 'scroll', t);
                                    h.remove(window, 'resize', t);
                                    this.arbiterInform('platform/plugins/recommendations_bar/trigger', null, g.BEHAVIOR_STATE);
                                }
                                return true;
                            }, 'bind', true, this));
                            h.add(window, 'scroll', t);
                            h.add(window, 'resize', t);
                            t();
                        }
                        this.visible = false;
                        var u = n(500, ES5(function() {
                            if (!this.visible && this.calculateVisibility()) {
                                this.visible = true;
                                this.arbiterInform('platform/plugins/recommendations_bar/visible');
                            } else if (this.visible && !this.calculateVisibility()) {
                                this.visible = false;
                                this.arbiterInform('platform/plugins/recommendations_bar/invisible');
                            }
                            return true;
                        }, 'bind', true, this));
                        h.add(window, 'scroll', u);
                        h.add(window, 'resize', u);
                        u();
                        this.focused = true;
                        var v = ES5(function() {
                            this.focused = !this.focused;
                            return true;
                        }, 'bind', true, this);
                        h.add(window, 'blur', v);
                        h.add(window, 'focus', v);
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
                        var n = document.documentElement.clientHeight;
                        if (!this.focused && window.console && window.console.firebug) return this.visible;
                        switch (this._attr.trigger) {
                        case "manual":
                            return false;
                        case "onvisible":
                            var o = this.dom.getBoundingClientRect().top;
                            return o <= n;
                        default:
                            var p = window.pageYOffset || document.body.scrollTop,
                                q = document.documentElement.scrollHeight;
                            return (p + n) / q >= this._attr.trigger;
                        }
                    }
                });
            e.exports = m;
        });
        __d("sdk.XFBML.Registration", ["sdk.Auth", "sdk.Helper", "sdk.XFBML.IframeWidget", "sdk.Runtime", "UrlMap"], function(a, b, c, d, e, f) {
            var g = b('sdk.Auth'),
                h = b('sdk.Helper'),
                i = b('sdk.XFBML.IframeWidget'),
                j = b('sdk.Runtime'),
                k = b('UrlMap'),
                l = i.extend({
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
                            client_id: j.getClientID(),
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
                        if (this._attr.onvalidate) this.subscribe('xd.validate', ES5(function(m) {
                            var n = ES5('JSON', 'parse', false, m.value),
                                o = ES5(function(q) {
                                    this.arbiterInform('Registration.Validation', {
                                        errors: q,
                                        id: m.id
                                    });
                                }, 'bind', true, this),
                                p = h.executeFunctionByName(this._attr.onvalidate, n, o);
                            if (p) o(p);
                        }, 'bind', true, this));
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
                        var m;
                        if (!this._attr.fields) {
                            m = ['name'];
                        } else try {
                            m = ES5('JSON', 'parse', false, this._attr.fields);
                        } catch (n) {
                            m = this._attr.fields.split(/,/);
                        }
                        if (this._attr.width < this._skinnyWidth) {
                            return this._skinnyBaseHeight + m.length * this._skinnyFieldHeight;
                        } else return this._baseHeight + m.length * this._fieldHeight;
                    },
                    getUrlBits: function() {
                        return {
                            name: 'registration',
                            params: this._attr
                        };
                    },
                    getDefaultWebDomain: function() {
                        return k.resolve('www', true);
                    },
                    _onAuthLogin: function() {
                        if (!g.getAuthResponse()) g.getLoginStatus();
                        h.fireEvent('auth.login', this);
                    },
                    _onAuthLogout: function() {
                        if (!g.getAuthResponse()) g.getLoginStatus();
                        h.fireEvent('auth.logout', this);
                    }
                });
            e.exports = l;
        });
        __d("sdk.XFBML.Send", ["sdk.DOM", "sdk.XFBML.EdgeWidget", "sdk.Runtime", "sdk.XFBML.SendButtonFormWidget"], function(a, b, c, d, e, f) {
            var g = b('sdk.DOM'),
                h = b('sdk.XFBML.EdgeWidget'),
                i = b('sdk.Runtime'),
                j = b('sdk.XFBML.SendButtonFormWidget'),
                k = h.extend({
                    setupAndValidate: function() {
                        g.addCss(this.dom, 'fb_edge_widget_with_comment');
                        this._attr = {
                            channel: this.getChannelUrl(),
                            api_key: i.getClientID(),
                            font: this.getAttribute('font'),
                            colorscheme: this.getAttribute('colorscheme', 'light'),
                            href: this.getAttribute('href', window.location.href),
                            ref: this.getAttribute('ref'),
                            extended_social_context: this.getAttribute('extended_social_context', false)
                        };
                        this._rootPadding = {
                            left: parseFloat(g.getStyle(this.dom, 'paddingLeft')),
                            top: parseFloat(g.getStyle(this.dom, 'paddingTop'))
                        };
                        return true;
                    },
                    getUrlBits: function() {
                        return {
                            name: 'send',
                            params: this._attr
                        };
                    },
                    _createEdgeCommentWidget: function(l, m) {
                        var n = this._getCommonEdgeCommentWidgetOpts(l, m);
                        return new j(n);
                    },
                    getSize: function() {
                        return {
                            width: 80,
                            height: 25
                        };
                    }
                });
            e.exports = k;
        });
        __d("sdk.XFBML.SocialContext", ["sdk.Event", "sdk.XFBML.IframeWidget"], function(a, b, c, d, e, f) {
            var g = b('sdk.Event'),
                h = b('sdk.XFBML.IframeWidget'),
                i = h.extend({
                    setupAndValidate: function() {
                        var j = this.getAttribute('size', 'small');
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
                    _bubbleSocialContextStats: function(j) {
                        var k = {
                            pluginID: this.getAttribute('plugin-id'),
                            socialContextPageIDs: ES5('JSON', 'parse', false, j.social_context_page_ids)
                        };
                        g.fire('xfbml.social_context_stats', k);
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
            e.exports = i;
        });
        __d("legacy:fb.xfbml", ["sdk.domReady", "sdk.Event", "FB", "IframePlugin", "PluginTags", "wrapFunction", "XFBML", "sdk.XFBML.Comments", "sdk.XFBML.CommentsCount", "sdk.XFBML.ConnectBar", "sdk.XFBML.Fan", "sdk.XFBML.Like", "sdk.XFBML.LikeBox", "sdk.XFBML.LiveStream", "sdk.XFBML.LoginButton", "sdk.XFBML.Name", "sdk.XFBML.ProfilePic", "sdk.XFBML.RecommendationsBar", "sdk.XFBML.Registration", "sdk.XFBML.Send", "sdk.XFBML.SocialContext"], function(a, b, c, d) {
            var e = b('sdk.domReady'),
                f = b('sdk.Event'),
                g = b('FB'),
                h = b('IframePlugin'),
                i = b('PluginTags'),
                j = b('wrapFunction'),
                k = b('XFBML'),
                l = {
                    comments: b('sdk.XFBML.Comments'),
                    comments_count: b('sdk.XFBML.CommentsCount'),
                    connect_bar: b('sdk.XFBML.ConnectBar'),
                    fan: b('sdk.XFBML.Fan'),
                    like: b('sdk.XFBML.Like'),
                    like_box: b('sdk.XFBML.LikeBox'),
                    live_stream: b('sdk.XFBML.LiveStream'),
                    login_button: b('sdk.XFBML.LoginButton'),
                    name: b('sdk.XFBML.Name'),
                    profile_pic: b('sdk.XFBML.ProfilePic'),
                    recommendations_bar: b('sdk.XFBML.RecommendationsBar'),
                    registration: b('sdk.XFBML.Registration'),
                    send: b('sdk.XFBML.Send'),
                    social_context: b('sdk.XFBML.SocialContext')
                };
            ES5(ES5('Object', 'keys', false, i), 'forEach', true, function(n) {
                k.registerTag({
                    xmlns: 'fb',
                    localName: n.replace(/_/g, '-'),
                    ctor: h.withParams(i[n])
                });
            });
            ES5(ES5('Object', 'keys', false, l), 'forEach', true, function(n) {
                k.registerTag({
                    xmlns: 'fb',
                    localName: n.replace(/_/g, '-'),
                    ctor: l[n]
                });
            });
            g.provide('XFBML', {
                parse: k.parse
            });
            g.provide('XFBML.RecommendationsBar', {
                markRead: function(n) {
                    f.fire('xfbml.recommendationsbar.read', n || window.location.href);
                }
            });
            k.subscribe('parse', ES5(f.fire, 'bind', true, f, 'xfbml.parse'));
            k.subscribe('render', ES5(f.fire, 'bind', true, f, 'xfbml.render'));
            f.subscribe('init:post', function(n) {
                if (n.xfbml) setTimeout(j(ES5(e, 'bind', true, null, k.parse), 'entry', 'init:post:xfbml.parse'), 0);
            });
            try {
                if (document.namespaces && !document.namespaces.item.fb) document.namespaces.add('fb');
            } catch (m) {}
        }, 3);
        void(0);

    }).call({}, window.inDapIF ? parent.window : window);
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","message":"' + e.message + '"}}');
}
