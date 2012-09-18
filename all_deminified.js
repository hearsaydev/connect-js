/*1347998099,172028719,JIT Construction: v628839,en_US*/

window.FB || (function(window) {
    var document = window.document;
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
        __d("SDKConfig", [], {
            "xfbmlUseLegacy": true,
            "migrate": true,
            "errorHandling": {
                "rate": 4
            },
            "api": {
                "mode": "warn",
                "whitelist": ["Arbiter", "Arbiter.inform", "Canvas", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Data", "Data.query", "Data.waitOn", "Dom", "Dom.addCssRules", "Event", "Event.subscribe", "Event.unsubscribe", "Insights", "Insights.impression", "Music", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.init", "Payment.setSize", "UA", "UA.nativeApp", "XD", "XD.onMessage", "XFBML", "XFBML.parse", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "ui"]
            }
        });
        __d("ApiClientConfig", [], {
            "FlashRequest": {
                "swfUrl": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/y5\/r\/SrnvQJBTxo-.swf"
            }
        });
        __d("XDConfig", [], {
            "XdUrl": "connect\/xd_arbiter.php?version=11",
            "Flash": {
                "path": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/ys\/r\/WON-TVLCpDP.swf"
            },
            "useCdn": true
        });
        __d("CanvasPrefetcherConfig", [], {
            "blacklist": [144959615576466],
            "sampleRate": 500
        });
    }(function() {
        (function(a) {
            if (a.require) return;
            var b = Object.prototype.toString,
                c = {},
                d = {},
                e = {},
                f = 0,
                g = 1,
                h = 2,
                i = Object.prototype.hasOwnProperty;

            function j(u) {
                if (a.ErrorUtils && !a.ErrorUtils.inGuard()) return ErrorUtils.applyWithGuard(j, this, arguments);
                var v = c[u],
                    w, x, y;
                if (!c[u]) {
                    y = 'Requiring unknown module "' + u + '"';
                    throw new Error(y);
                }
                if (v.waiting && v.special & h) m();
                if (v.waiting) {
                    y = 'Requiring module "' + u + '" with unresolved dependencies';
                    throw new Error(y);
                }
                if (!v.exports) {
                    var z = v.exports = {},
                        aa = v.factory;
                    if (typeof aa === 'string') {
                        var ba = '(' + aa + ')';
                        aa = eval.apply(window, [ba]);
                    }
                    if (b.call(aa) === '[object Function]') {
                        var ca = [],
                            da = v.dependencies,
                            ea = da.length;
                        if (v.special & h) ea = Math.min(ea, aa.length);
                        for (x = 0; x < ea; x++) {
                            w = da[x];
                            ca.push(w === 'module' ? v : (w === 'exports' ? z : j(w)));
                        }
                        var fa = aa.apply(v.context || a, ca);
                        if (fa) v.exports = fa;
                    } else v.exports = aa;
                }
                if (v.refcount-- === 1) delete c[u];
                return v.exports;
            }
            function k(u, v, w, x, y, z) {
                if (v === undefined) {
                    v = [];
                    w = u;
                    u = o();
                } else if (w === undefined) {
                    w = v;
                    if (b.call(u) === '[object Array]') {
                        v = u;
                        u = o();
                    } else v = [];
                }
                var aa = c[u];
                if (aa) {
                    if (z) aa.refcount += z;
                    return;
                } else if (!v && !w && z) {
                    e[u] = (e[u] || 0) + z;
                    return;
                } else {
                    aa = {
                        id: u
                    };
                    aa.refcount = (e[u] || 0) + (z || 0);
                    delete e[u];
                }
                aa.factory = w;
                aa.dependencies = v;
                aa.context = y;
                aa.special = x;
                c[u] = aa;
                p(u);
            }
            function l(u, v, w) {
                k(u, v, undefined, g, w, 1);
            }
            function m() {
                var u = {},
                    v;
                for (v in d) if (i.call(d, v)) if (c[v] && !u[v] && c[v].special & h) n({}, v, u);
            }
            function n(u, v, w) {
                w[v] = 1;
                var x = d[v],
                    y;
                if (!x) return;
                u[v] = 1;
                for (y in x) if (i.call(x, y)) {
                    if (!c[y] || !c[y].special & h) continue;
                    if (u[y]) {
                        delete x[y];
                        c[y].waiting--;
                        if (!c[y].waiting) q(y);
                    } else n(u, y, w);
                }
                u[v] = 0;
            }
            function o() {
                return '__mod__' + f++;
            }
            function p(u) {
                var v = c[u],
                    w = 0;
                for (var x = 0; x < v.dependencies.length; x++) {
                    var y = v.dependencies[x];
                    if (!c[y] || c[y].waiting) {
                        d[y] || (d[y] = {});
                        if (!d[y][u]) w++;
                        d[y][u] = 1;
                    }
                }
                v.waiting = w;
                if (!w) q(u);
            }
            function q(u) {
                var v = c[u];
                if (v.special & g) j(u);
                var w = d[u],
                    x = [];
                if (w) {
                    delete d[u];
                    for (var y in w) if (i.call(w, y)) if (!--c[y].waiting) x.push(y);
                }
                for (var z = 0; z < x.length; z++) q(x[z]);
            }
            function r(u, v) {
                c[u] = {
                    id: u
                };
                c[u].exports = v;
            }
            r('module', 0);
            r('exports', 0);
            r('define', k);
            r('global', a);
            r('require', j);
            r('requireDynamic', j);
            r('requireLazy', l);
            k.amd = {};
            a.define = k;
            a.require = j;
            a.requireDynamic = j;
            a.requireLazy = l;
            j.__debug = {
                modules: c,
                deps: d
            };
            var s = false,
                t = function(u, v, w, x) {
                    k(u, v, w, x || h);
                    if (c[u].waiting && !s) s = setTimeout(function() {
                        m();
                        s = false;
                    }, 9);
                };
            a.__d = function(u, v, w, x) {
                v = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'].concat(v);
                t(u, v, w, x);
            };
            a.__e = a.__d;
        })(this);
    }).call(FB);
    var require = FB.require;
    var requireLazy = FB.requireLazy;
    var define = FB.define;
    var __d = FB.__d;
    __d("guid", [], function(a, b, c, d, e, f) {
        function g() {
            return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
        }
        e.exports = g;
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
    __d("safeEval", [], function(a, b, c, d, e, f) {
        function g(h) {
            if (h === null || typeof h === 'undefined') return;
            if (typeof h !== 'string') return h;
            return Function('return eval("' + h.replace(/"/g, '\\"') + '");')();
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

        function i(q) {
            return ES5(q, 'bind', true, null, Array.prototype.slice.call(arguments, 1));
        }
        function j(q, r) {
            if (!q) throw new g(r);
            return q;
        }
        function k(q, r, s) {
            var t = Object.prototype.toString.call(r),
                u = /\s(\w*)/.exec(t)[1].toLowerCase();
            j(~ES5(q, 'indexOf', true, u), s || h('Expression is of type %s, not %s', u, q));
            return r;
        }
        function l(q, r, s) {
            j(r instanceof q, s || 'Expression not instance of type');
            return r;
        }
        var m = {
            isInstanceOf: l,
            isTrue: j,
            type: k
        },
            n = ['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'Regexp', 'String', 'Undefined'],
            o = n.length;
        while (o--) {
            var p = n[o];
            m['is' + p] = i(k, p.toLowerCase());
        }
        e.exports = m;
    });
    __d("wrapFunction", ["Assert"], function(a, b, c, d, e, f) {
        var g = b('Assert'),
            h = {};

        function i(j, k, l) {
            g.isFunction(j);
            k = k || 'default';
            return function() {
                var m = k in h ? h[k](j, l) : j;
                return m.apply(this, arguments);
            };
        }
        i.setWrapper = function(j, k) {
            g.isFunction(j);
            k = k || 'default';
            h[k] = j;
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
    __d("Type", ["copyProperties", "Assert"], function(a, b, c, d, e, f) {
        var g = b('copyProperties'),
            h = b('Assert');

        function i() {
            var m = this.__mixins;
            if (m) for (var n = 0; n < m.length; n++) m[n].apply(this, arguments);
        }
        function j(m, n) {
            h.isObject(n);
            h.isFunction(m);
            if (n instanceof m) return true;
            if (n instanceof i) for (var o = 0; o < n.__mixins.length; o++) if (n.__mixins[o] == m) return true;
            return false;
        }
        function k(m, n) {
            var o = m.prototype;
            if (Object.prototype.toString.call(n) != '[object Array]') n = [n];
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
    __d("ObservableMixin", ["Assert"], function(a, b, c, d, e, f) {
        var g = b('Assert');

        function h() {
            this.__observableEvents = {};
        }
        h.prototype = {
            inform: function(i) {
                g.isString(i);
                var j = Array.prototype.slice.call(arguments, 1),
                    k = this.getSubscribers(i);
                for (var l = 0; l < k.length; l++) try {
                    k[l].apply(this, j);
                } catch (m) {
                    setTimeout(function() {
                        throw m;
                    }, 0);
                }
                return this;
            },
            getSubscribers: function(i) {
                g.isString(i);
                return this.__observableEvents[i] || (this.__observableEvents[i] = []);
            },
            clearSubscribers: function(i) {
                g.isString(i);
                if (i) this.__observableEvents[i] = [];
                return this;
            },
            clearAllSubscribers: function() {
                this.__observableEvents = {};
                return this;
            },
            subscribe: function(i, j) {
                g.isString(i);
                g.isFunction(j);
                var k = this.getSubscribers(i);
                k.push(j);
                return this;
            },
            unsubscribe: function(i, j) {
                g.isString(i);
                g.isFunction(j);
                var k = this.getSubscribers(i);
                for (var l = 0; l < k.length; l++) if (k[l] == j) {
                    k.splice(l, 1);
                    break;
                }
                return this;
            }
        };
        e.exports = h;
    });
    __d("sdk.Model", ["Assert", "Type", "ObservableMixin"], function(a, b, c, d, e, f) {
        var g = b('Assert'),
            h = b('Type'),
            i = b('ObservableMixin'),
            j = h.extend({
                constructor: function(k) {
                    g.isObject(k);
                    this.parent();
                    var l = {},
                        m = this;
                    ES5(ES5('Object', 'keys', false, k), 'forEach', true, function(n) {
                        l[n] = k[n];
                        m['set' + n] = function(o) {
                            if (o === l[n]) return this;
                            l[n] = o;
                            m.inform(n + '.change', o);
                            return m;
                        };
                        m['get' + n] = function() {
                            return l[n];
                        };
                    });
                }
            }, i);
        e.exports = j;
    });
    __d("sdk.Runtime", ["sdk.Model", "copyProperties"], function(a, b, c, d, e, f) {
        var g = b('sdk.Model'),
            h = b('copyProperties'),
            i = {
                UNKNOWN: 0,
                PAGETAB: 1,
                CANVAS: 2,
                PLATFORM: 4
            },
            j = new g({
                AccessToken: '',
                UserID: 0,
                ClientID: '',
                Initialized: false,
                LoginStatus: 'unknown',
                Environment: i.UNKNOWN,
                Secure: undefined,
                UseCookie: false
            });
        h(j, {
            ENVIRONMENTS: i,
            isEnvironment: function(k) {
                var l = this.getEnvironment();
                return (k | l) === l;
            }
        });
        (function() {
            var k = /app_runner/.test(window.name) ? i.PAGETAB : /iframe_canvas/.test(window.name) ? i.CANVAS : i.UNKNOWN;
            if ((k | i.PAGETAB) === k) k = k | i.CANVAS;
            j.setEnvironment(k);
        })();
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
    __d("sdk.Insights", ["guid", "QueryString", "sdk.Runtime", "UrlMap"], function(a, b, c, d, e, f) {
        var g = b('guid'),
            h = b('QueryString'),
            i = b('sdk.Runtime'),
            j = b('UrlMap');

        function k(m, n) {
            var o = i.getClientID();
            if (!m.api_key && o) m.api_key = o;
            var p = new Image();
            if (n) p.onload = n;
            p.src = h.appendToUrl(j.resolve('www', true) + '/impression.php/' + g() + '/', m);
        }
        var l = {
            TYPE: {
                NOTICE: 'notice',
                WARNING: 'warn',
                ERROR: 'error'
            },
            CATEGORY: {
                DEPRECATED: 'deprecated',
                APIERROR: 'apierror'
            },
            log: function(m, n, o) {
                k({
                    lid: 113,
                    payload: ES5('JSON', 'stringify', false, {
                        source: 'jssdk',
                        type: m,
                        category: n,
                        payload: o
                    })
                });
            },
            impression: function(m, n) {
                k(m, n);
            }
        };
        e.exports = l;
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
    __d("FB", ["guid", "dotAccess", "copyProperties", "safeEval", "wrapFunction", "sdk.ErrorHandling", "GlobalCallback", "sdk.Insights", "Log", "sdk.Scribe", "sdk.Runtime", "SDKConfig"], function(a, b, c, d, e, f) {
        var g = c('SDKConfig'),
            h = b('guid'),
            i = b('dotAccess'),
            j = b('copyProperties'),
            k = b('safeEval'),
            l = b('wrapFunction'),
            m = b('sdk.ErrorHandling'),
            n = b('GlobalCallback'),
            o = b('sdk.Insights'),
            p = b('Log'),
            q = b('sdk.Scribe'),
            r = b('sdk.Runtime'),
            s, t, u, v = i(g, 'api.mode'),
            w = {};
        s = FB;
        t = window.FB = {};
        n.setPrefix('FB._callbacks');
        if (i(g, 'api.whitelist.length')) {
            u = {};
            ES5(g.api.whitelist, 'forEach', true, function(ca) {
                u[ca] = 1;
            });
        }
        function x(ca, da, ea, fa) {
            var ga;
            if (/^_/.test(ea)) {
                ga = 'hide';
            } else if (u && !u[da]) ga = v;
            switch (ga) {
            case 'hide':
                return;
            case 'stub':
                return function() {
                    p.warn('The method FB.%s has been removed from the JS SDK.', da);
                };
                break;
            default:
                return m.guard(function() {
                    if (ga === 'warn') {
                        p.warn('The method FB.%s is not officially supported by ' + 'Facebook and access to it will soon be removed.', da);
                        if (!w.hasOwnProperty(da)) {
                            o.log(o.TYPE.WARNING, o.CATEGORY.DEPRECATED, 'FB.' + da);
                            q.log('jssdk_error', {
                                appId: s._apiKey,
                                error: 'Private method used',
                                extra: {
                                    args: da
                                }
                            });
                            w[da] = true;
                        }
                    }
                    var ha = ES5(Array.prototype.slice.call(arguments), 'map', true, function(oa) {
                        return typeof oa === 'function' && /^function/.test(oa.toString()) ? m.unguard(oa) : oa;
                    }),
                        ia = ca.apply(fa, ha),
                        ja, ka = true;
                    if (ia && typeof ia === 'object') {
                        var la = Function();
                        la.prototype = ia;
                        ja = new la();
                        for (var ma in ia) {
                            var na = ia[ma];
                            if (typeof na !== 'function' || ma === 'constructor') continue;
                            ka = false;
                            ja[ma] = x(na, da + ':' + ma, ma, ia);
                        }
                    }
                    if (!ka) return ja;
                    return ka ? ia : ja;
                }, da);
            }
        }
        function y(ca, da) {
            var ea = ca ? i(s, ca, true) : s,
                fa = ca ? i(t, ca, true) : t;
            ES5(ES5('Object', 'keys', false, da), 'forEach', true, function(ga) {
                var ha = da[ga];
                ea[ga] = ha;
                if (typeof ha === 'function') {
                    var ia = (ca ? ca + '.' : '') + ga,
                        ja = x(ha, ia, ga, ea);
                    if (ja) fa[ga] = ja;
                }
            });
        }
        var z = /iframe_canvas|app_runner/.test(window.name),
            aa = /dialog/.test(window.name);
        r.setSecure((function() {
            if (location.protocol == 'https:' && (window == top || !(z || aa))) return true;
            if (/_fb_https?/.test(window.name)) return ES5(window.name, 'indexOf', true, '_fb_https') != -1;
        })());

        function ba(ca, da, ea, fa) {
            for (var ga in da) if (ea || typeof ca[ga] === 'undefined') ca[ga] = fa ? fa(da[ga]) : da[ga];
            return ca;
        }
        j(s, {
            _apiKey: null,
            _authResponse: null,
            _logging: true,
            _inCanvas: z,
            onlyUseHttps: function() {
                return r.getSecure() === true;
            },
            onlyUseHttp: function() {
                return r.setSecure() === false && location.protocol == 'http:';
            },
            _locale: null,
            _localeIsRtl: false,
            getDomain: function(ca, da) {
                var ea = !da && (window.location.protocol == 'https:' || r.getSecure());
                switch (ca) {
                case 'api':
                    return s._domain.api;
                case 'api_read':
                    return s._domain.api_read;
                case 'cdn':
                    return ea ? s._domain.https_cdn : s._domain.cdn;
                case 'cdn_foreign':
                    return s._domain.cdn_foreign;
                case 'https_cdn':
                    return s._domain.https_cdn;
                case 'graph':
                    return s._domain.graph;
                case 'staticfb':
                    return ea ? s._domain.https_staticfb : s._domain.staticfb;
                case 'https_staticfb':
                    return s._domain.https_staticfb;
                case 'www':
                    return ea ? s._domain.https_www : s._domain.www;
                case 'https_www':
                    return s._domain.https_www;
                case 'm':
                    return ea ? s._domain.https_m : s._domain.m;
                case 'https_m':
                    return s._domain.https_m;
                }
            },
            copy: ba,
            create: function(ca, da) {
                var ea = ca.split('.');
                ca = ea.pop();
                var fa = ea.length ? i(s, ea.join('.'), true) : s;
                return ca in fa ? fa[ca] : fa[ca] = (da || {});
            },
            provide: y,
            guid: h,
            log: function(ca) {
                if (s._logging) if (window.Debug && window.Debug.writeln) {
                    window.Debug.writeln(ca);
                } else if (window.console) window.console.log(ca);
                if (s.Event) s.Event.fire('fb.log', ca);
            },
            $: function(ca) {
                return document.getElementById(ca);
            },
            dotAccess: i,
            Runtime: r,
            guard: m.guard,
            unguard: m.unguard,
            wrapFunction: l,
            safeEval: k
        });
        if (t) j(t, {
            provide: function() {
                p.error('FB.provide is no longer supported');
                if (!w.hasOwnProperty('provide')) {
                    o.log(o.TYPE.ERROR, o.CATEGORY.DEPRECATED, 'FB.provide');
                    q.log('jssdk_error', {
                        appId: s._apiKey,
                        error: 'Private method used',
                        extra: {
                            args: 'provide'
                        }
                    });
                    w.provide = true;
                }
            }
        });
        e.exports = s;
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
            q.isTrue(w[ga], i('Invalid method passed to ApiClient: %s', ga));
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
            b.wrapper = FB.wrapFunction(b, 'entry', a + ':' + event);
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
    __d("sdk.computeContentSize", ["DOMWrapper", "createArrayFrom"], function(a, b, c, d, e, f) {
        var g = b('DOMWrapper'),
            h = b('createArrayFrom');

        function i() {
            var j = g.getWindow().document,
                k = j.body,
                l = j.documentElement,
                m = 0,
                n = Math.max(k.offsetTop, 0),
                o = Math.max(l.offsetTop, 0),
                p = k.scrollHeight + n,
                q = k.offsetHeight + n,
                r = l.scrollHeight + o,
                s = l.offsetHeight + o,
                t = Math.max(p, q, r, s);
            if (k.offsetWidth < k.scrollWidth) {
                m = k.scrollWidth + k.offsetLeft;
            } else ES5(h(k.childNodes), 'forEach', true, function(u) {
                var v = u.offsetWidth + u.offsetLeft;
                if (v > m) m = v;
            });
            if (l.clientLeft > 0) m += (l.clientLeft * 2);
            if (l.clientTop > 0) t += (l.clientTop * 2);
            return {
                height: t,
                width: m
            };
        }
        e.exports = i;
    });
    __d("sdk.Canvas.IframeHandling", ["sdk.Runtime", "Log", "sdk.RPC", "sdk.computeContentSize"], function(a, b, c, d, e, f) {
        var g = b('sdk.Runtime'),
            h = b('Log'),
            i = b('sdk.RPC'),
            j = b('sdk.computeContentSize'),
            k = null,
            l;

        function m(p) {
            if (!g.getInitialized() && arguments.callee.caller != n) h.warn('FB.init is required for setSize to take effect');
            if (typeof p != 'object') p = {};
            var q = 0,
                r = 0;
            if (!p.height) {
                p.height = j().height;
                q = 16;
                r = 4;
            }
            if (!p.frame) p.frame = window.name || 'iframe_canvas';
            if (l) {
                var s = l.height,
                    t = p.height - s;
                if (t <= r && t >= -q) return false;
            }
            l = p;
            i.remote.setSize(p);
            return true;
        }
        function n(p, q) {
            if (!g.getInitialized()) h.warn('FB.init is required for setAutoGrow to take effect');
            if (q === undefined && typeof p === 'number') {
                q = p;
                p = true;
            }
            if (p || p === undefined) {
                if (k === null) k = setInterval(m, q || 100);
                m();
            } else if (k !== null) {
                clearInterval(k);
                k = null;
            }
        }
        i.stub('setSize');
        var o = {
            setSize: m,
            setAutoGrow: n
        };
        e.exports = o;
    });
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
    __d("sdk.Canvas.Tti", ["sdk.RPC", "sdk.Runtime"], function(a, b, c, d, e, f) {
        var g = b('sdk.RPC'),
            h = b('sdk.Runtime');

        function i(n, o) {
            var p = {
                appId: h.getClientID(),
                time: (new Date()).getTime(),
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
                    t.style.visibility = t._old_visibility || 'auto';
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
    __d("sdk.Canvas.Navigation", ["sdk.RPC", "Log", "sdk.Runtime"], function(a, b, c, d, e, f) {
        var g = b('sdk.RPC'),
            h = b('Log'),
            i = b('sdk.Runtime');

        function j(n) {
            if (typeof n !== 'string') {
                h.error('FB.Canvas.setHash must have a String as argument');
                return;
            }
            n = n.replace(/[{}<\[\]>#%"]/, encodeURIComponent);
            g.remote.setHash(n);
        }
        function k(n) {
            if (typeof n !== 'function') {
                h.error('FB.Canvas.getHash called without a callback');
                return;
            }
            g.remote.getHash(function(o) {
                n(o.result);
            });
        }
        function l(n) {
            if (!i.getInitialized()) h.warn('FB.init is required for setUrlHandler to take effect');
            g.local.navigate = function(o) {
                h.info('navigate %s', o);
                n({
                    path: o
                });
            };
            g.remote.setNavigationEnabled(true);
        }
        g.stub('setNavigationEnabled');
        g.stub('getHash');
        g.stub('setHash');
        var m = {
            getHash: k,
            setHash: j,
            setUrlHandler: l
        };
        e.exports = m;
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
        var o = {
            isTabIframe: function() {
                return i.isEnvironment(i.ENVIRONMENTS.PAGETAB);
            }
        };
        g(o, j);
        g(o, k);
        g(o, l);
        g(o, m);
        g(o, n);
        e.exports = o;
    });
    __d("legacy:fb.canvas", ["FB", "sdk.Canvas"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('sdk.Canvas');
        e.provide('Canvas', f);
        e.provide('CanvasInsights', {
            setDoneLoading: f.setDoneLoading
        });
    }, 3);
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
    __d("legacy:insertIframe", ["FB", "insertIframe"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('insertIframe');
        e.provide('Content', {
            insertIframe: f
        });
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
    __d("XDM", ["guid", "DOMEventListener", "DOMWrapper", "Flash", "Log", "UserAgent"], function(a, b, c, d, e, f) {
        var g = b('guid'),
            h = b('DOMEventListener'),
            i = b('DOMWrapper'),
            j = b('Flash'),
            k = b('Log'),
            l = b('UserAgent'),
            m = {},
            n = {
                transports: []
            },
            o = i.getWindow();

        function p(r) {
            var s = {},
                t = r.length,
                u = n.transports;
            while (t--) s[r[t]] = 1;
            t = u.length;
            while (t--) {
                var v = u[t],
                    w = m[v];
                if (!s[v] && w.isAvailable()) return v;
            }
        }
        var q = {
            register: function(r, s) {
                k.debug('Registering %s as XDM provider', r);
                n.transports.push(r);
                m[r] = s;
            },
            create: function(r) {
                if (!r.whenReady && !r.onMessage) {
                    k.error('An instance without whenReady or onMessage makes no sense');
                    throw new Error('An instance without whenReady or ' + 'onMessage makes no sense');
                }
                if (!r.channel) {
                    k.warn('Missing channel name, selecting at random');
                    r.channel = g();
                }
                if (!r.whenReady) r.whenReady = bagofholding;
                if (!r.onMessage) r.onMessage = bagofholding;
                var s = r.transport || p(r.blacklist || []),
                    t = m[s];
                if (t && t.isAvailable()) {
                    k.debug('%s is available', s);
                    t.init(r);
                    return s;
                }
            }
        };
        q.register('fragment', (function() {
            var r = false,
                s, t = location.protocol + '//' + location.host;

            function u(v) {
                var w = document.createElement('iframe');
                w.src = 'javascript:false';
                var x = h.add(w, 'load', function() {
                    x.remove();
                    setTimeout(function() {
                        w.parentNode.removeChild(w);
                    }, 5000);
                });
                s.appendChild(w);
                w.src = v;
            }
            return {
                isAvailable: function() {
                    return true;
                },
                init: function(v) {
                    k.debug('init fragment');
                    var w = {
                        send: function(x, y, z, aa) {
                            k.debug('sending to: %s (%s)', y + v.channelPath, aa);
                            u(y + v.channelPath + x + '&xd_rel=parent.parent&relation=parent.parent&xd_origin=' + encodeURIComponent(t));
                        }
                    };
                    if (r) {
                        v.whenReady(w);
                        return;
                    }
                    s = v.root;
                    r = true;
                    v.whenReady(w);
                }
            };
        })());
        q.register('flash', (function() {
            var r = false,
                s, t = {},
                u = false,
                v = 15000,
                w;
            return {
                isAvailable: function() {
                    return j.checkMinVersion('8.0.24');
                },
                init: function(x) {
                    k.debug('init flash: ' + x.channel);
                    var y = {
                        send: function(ba, ca, da, ea) {
                            k.debug('sending to: %s (%s)', ca, ea);
                            s.postMessage(ba, ca, ea);
                        }
                    };
                    if (r) {
                        x.whenReady(y);
                        return;
                    }
                    var z = x.root.appendChild(o.document.createElement('div')),
                        aa = g();
                    t[aa] = function() {
                        clearTimeout(w);
                        k.info('xdm.swf called the callback');
                        delete t[aa];
                        aa = g();
                        t[aa] = function(ba, ca) {
                            ba = decodeURIComponent(ba);
                            k.debug('received message %s from %s', ba, ca);
                            x.onMessage(ba, ca);
                        };
                        s.init(x.channel, 'FB_XDM_CALLBACKS.' + aa);
                        x.whenReady(y);
                    };
                    o.FB_XDM_CALLBACKS = t;
                    s = j.embed(x.flashUrl, z, null, {
                        protocol: location.protocol.replace(':', ''),
                        host: location.host,
                        callback: 'FB_XDM_CALLBACKS.' + aa,
                        log: u
                    });
                    w = setTimeout(function() {
                        k.warn('The Flash component did not load within %s ms - ' + 'verify that the container is not set to hidden or invisible ' + 'using CSS as this will cause some browsers to not load ' + 'the components', v);
                    }, v);
                    r = true;
                }
            };
        })());
        q.register('postmessage', (function() {
            var r = false;
            return {
                isAvailable: function() {
                    return !!o.postMessage;
                },
                init: function(s) {
                    k.debug('init postMessage: ' + s.channel);
                    var t = '_FB_' + s.channel,
                        u = {
                            send: function(v, w, x, y) {
                                if (o === x) {
                                    k.error('Invalid windowref, equal to window (self)');
                                    throw new Error();
                                }
                                k.debug('sending to: %s (%s)', w, y);
                                var z = function() {
                                        x.postMessage('_FB_' + y + v, w);
                                    };
                                if (l.ie() == 8) {
                                    setTimeout(z, 0);
                                } else z();
                            }
                        };
                    if (r) {
                        s.whenReady(u);
                        return;
                    }
                    h.add(o, 'message', function(event) {
                        var v = event.data,
                            w = event.origin || 'native';
                        if (typeof v != 'string') {
                            k.warn('Received message of type %s from %s, expected a string', typeof v, w);
                            return;
                        }
                        k.debug('received message %s from %s', v, w);
                        if (v.substring(0, t.length) == t) v = v.substring(t.length);
                        s.onMessage(v, w);
                    });
                    s.whenReady(u);
                    r = true;
                }
            };
        })());
        e.exports = q;
    });
    __d("sdk.XD", ["guid", "resolveWindow", "wrapFunction", "sdk.createIframe", "FB", "XDM", "Log", "QueryString", "Queue", "URL", "sdk.RPC", "sdk.Runtime", "XDConfig"], function(a, b, c, d, e, f) {
        var g = c('XDConfig'),
            h = b('guid'),
            i = b('resolveWindow'),
            j = b('wrapFunction'),
            k = b('sdk.createIframe'),
            l = b('FB'),
            m = b('XDM'),
            n = b('Log'),
            o = b('QueryString'),
            p = b('Queue'),
            q = b('URL'),
            r = b('sdk.RPC'),
            s = b('sdk.Runtime'),
            t = new p(),
            u = new p(),
            v = new p(),
            w, x, y = h(),
            z = h(),
            aa = location.protocol + '//' + location.host,
            ba, ca = false,
            da = {},
            ea = new p();
        r.setInQueue(ea);

        function fa(ka) {
            n.info('Remote XD can talk to facebook.com (%s)', ka);
            if (ka == 'canvas') {
                s.setEnvironment(s.ENVIRONMENTS.CANVAS);
                l._inCanvas = true;
            } else {
                s.setEnvironment(s.ENVIRONMENTS.PAGETAB);
                l.Canvas._isTabIframe = true;
            }
        }
        function ga(ka, la) {
            if (!la) {
                n.error('No senderOrigin');
                throw new Error();
            }
            var ma = /^https?/.exec(la)[0];
            switch (ka.xd_action) {
            case 'proxy_ready':
                var na, oa;
                if (ma == 'https') {
                    na = v;
                    oa = x;
                } else {
                    na = u;
                    oa = w;
                }
                if (ka.registered) {
                    fa(ka.registered);
                    t = na.merge(t);
                }
                n.info('Proxy ready, starting queue %s containing %s messages', ma + 'ProxyQueue', na.getLength());
                na.start(function(qa) {
                    ba.send(typeof qa === 'string' ? qa : o.encode(qa), la, oa.contentWindow, z + '_' + ma);
                });
                break;
            case 'plugin_ready':
                n.info('Plugin %s ready, protocol: %s', ka.name, ma);
                da[ka.name] = {
                    protocol: ma
                };
                if (p.exists(ka.name)) {
                    var pa = p.get(ka.name);
                    n.debug('Enqueuing %s messages for %s in %s', pa.getLength(), ka.name, ma + 'ProxyQueue');
                    (ma == 'https' ? v : u).merge(pa);
                }
                break;
            }
            if (ka.data) ha(ka.data, la);
        }
        function ha(ka, la) {
            if (la && la !== 'native' && !q(la).isFacebookURL()) return;
            if (typeof ka == 'string') {
                if (/^FB_RPC:/.test(ka)) {
                    ea.enqueue(ka.substring(7));
                    return;
                }
                if (ka.substring(0, 1) == '{') {
                    try {
                        ka = ES5('JSON', 'parse', false, ka);
                    } catch (ma) {
                        n.warn('Failed to decode %s as JSON', ka);
                        return;
                    }
                } else ka = o.decode(ka);
            }
            if (!la) if (ka.xd_sig == y) la = ka.xd_origin;
            if (ka.xd_action) {
                ga(ka, la);
                return;
            }
            if (ka.access_token) s.setSecure(/^https/.test(aa));
            if (ka.cb) {
                var na = ja._callbacks[ka.cb];
                if (!l.XD._forever[ka.cb]) delete ja._callbacks[ka.cb];
                if (na) na(ka);
            }
        }
        function ia(ka, la) {
            if (ka == 'facebook') {
                la.relation = 'parent.parent';
                t.enqueue(la);
            } else {
                la.relation = 'parent.frames["' + ka + '"]';
                var ma = da[ka];
                if (ma) {
                    n.debug('Enqueuing message for plugin %s in %s', ka, ma.protocol + 'ProxyQueue');
                    (ma.protocol == 'https' ? v : u).enqueue(la);
                } else {
                    n.debug('Buffering message for plugin %s', ka);
                    p.get(ka).enqueue(la);
                }
            }
        }
        r.getOutQueue().start(function(ka) {
            ia('facebook', 'FB_RPC:' + ka);
        });
        var ja = {
            rpc: r,
            _callbacks: {},
            _forever: {},
            _channel: z,
            _origin: aa,
            onMessage: ha,
            recv: ha,
            init: function(ka, la) {
                if (ca) return;
                var ma = ka ? /\/\/.*?(\/[^#]*)/.exec(ka)[1] : location.pathname + location.search;
                ma += (~ES5(ma, 'indexOf', true, '?') ? '&' : '?') + 'fb_xd_fragment#xd_sig=' + y + '&';
                var na = l.Content.appendHidden(document.createElement('div')),
                    oa = m.create({
                        root: na,
                        channel: z,
                        channelPath: '/' + g.XdUrl + '#',
                        flashUrl: g.Flash.path,
                        whenReady: function(pa) {
                            ba = pa;
                            var qa = {
                                channel: z,
                                origin: location.protocol + '//' + location.host,
                                channel_path: ma,
                                transport: oa,
                                xd_name: la
                            },
                                ra = g.XdUrl + '#' + o.encode(qa),
                                sa = g.useCdn ? l._domain.staticfb : 'http://www.facebook.com/',
                                ta = g.useCdn ? l._domain.https_staticfb : 'https://www.facebook.com/';
                            if (!l.onlyUseHttps()) w = k({
                                url: sa + ra,
                                name: 'fb_xdm_frame_http',
                                root: na
                            });
                            x = k({
                                url: ta + ra,
                                name: 'fb_xdm_frame_https',
                                root: na
                            });
                        },
                        onMessage: j(ha, 'entry', 'XD:message')
                    });
                ca = true;
            },
            sendToFacebook: ia,
            inform: function(ka, la, ma, na, oa) {
                ia('facebook', {
                    method: ka,
                    params: ES5('JSON', 'stringify', false, la || {}),
                    behavior: oa || 'p',
                    relation: ma
                });
            },
            handler: function(ka, la, ma, na) {
                var oa = location.protocol == 'https:' ? l._domain.https_staticfb : l._domain.staticfb,
                    pa = g.useCdn ? oa : location.protocol + '//www.facebook.com/';
                return pa + g.XdUrl + '#' + o.encode({
                    cb: this.registerCallback(ka, ma, na),
                    origin: aa + '/' + z,
                    domain: location.hostname,
                    relation: la || 'opener'
                });
            },
            registerCallback: function(ka, la, ma) {
                ma = ma || h();
                if (la) ja._forever[ma] = true;
                ja._callbacks[ma] = ka;
                return ma;
            }
        };
        (function() {
            var ka = location.href.match(/[?&]fb_xd_fragment#(.*)$/);
            if (ka) {
                document.documentElement.style.display = 'none';
                var la = o.decode(ka[1]),
                    ma = i(la.xd_rel);
                n.debug('Passing fragment based message: %s', ka[1]);
                ma.FB.XD.onMessage(la);
                document.open();
                document.close();
            }
        })();
        e.exports = ja;
    });
    __d("legacy:fb.arbiter", ["FB", "sdk.XD"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('sdk.XD');
        e.provide('Arbiter', {
            inform: f.inform
        });
    }, 3);
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
            } else a = a._base || a.constructor.prototype._base;
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
    __d("legacy:fb.xd", ["FB", "sdk.XD"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('sdk.XD');
        e.provide('XD', f);
    }, 3);
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
    __d("legacy:fb.json", ["flattenObject", "FB", "ManagedError"], function(a, b, c, d) {
        var e = b('flattenObject'),
            f = b('FB'),
            g = b('ManagedError');
        f.provide('JSON', {
            stringify: function(h) {
                try {
                    return ES5('JSON', 'stringify', false, h);
                } catch (i) {
                    throw new g(i.message, i);
                }
            },
            parse: function(h) {
                try {
                    return ES5('JSON', 'parse', false, h);
                } catch (i) {
                    throw new g(i.message, i);
                }
            },
            flatten: e
        });
    }, 3);
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
            var g = FB.UIServer.prepareCall(a, b ||
            function() {});
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
                f = (d.noHttps !== true) && (FB.Runtime.getSecure() || (c !== 'auth.status' && c != 'login.status'));
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
            var b = a.params.method;
            if (a.params.display !== 'async') delete a.params.method;
            if (FB.TemplateUI && FB.TemplateUI.supportsTemplate(b, a)) {
                FB.TemplateUI.useCachedUI(b, a);
            } else {
                a.params = FB.JSON.flatten(a.params);
                var c = FB.QS.encode(a.params);
                if (!FB.UA.nativeApp() && FB.UIServer.urlTooLongForIE(a.url + '?' + c)) {
                    a.post = true;
                } else if (c) a.url += '?' + c;
            }
            return a;
        },
        urlTooLongForIE: function(a) {
            return a.length > 2000;
        },
        getDisplayMode: function(a, b) {
            if (b.display === 'hidden' || b.display === 'none') return b.display;
            var c = FB.require('SDKConfig').useAsync ? FB._inCanvas : FB.Canvas.isTabIframe();
            if (c && !b.display) return 'async';
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
            a.params.redirect_uri = location.protocol + '//' + location.host + location.pathname;
            FB.XD.rpc.remote.showDialog(a.params, function(b) {
                a.cb(b.result);
            });
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
        },
        xdHandler: function(a, b, c, d, e) {
            return FB.UIServer._xdNextHandler(FB.Auth.xdResponseWrapper(a, d, e), b, c, true);
        }
    });
    __d("sdk.Cookie", ["QueryString", "sdk.Runtime"], function(a, b, c, d, e, f) {
        var g = b('QueryString'),
            h = b('sdk.Runtime'),
            i = null;

        function j(m, n, o) {
            m = m + h.getClientID();
            if (i) {
                document.cookie = m + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                document.cookie = m + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
            }
            var p = new Date(o).toGMTString();
            document.cookie = m + '=' + n + (n && o === 0 ? '' : '; expires=' + p) + '; path=/' + (i ? '; domain=' + i : '');
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
                    base_domain: i
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
    __d("sdk.Auth", ["sdk.Cookie", "copyProperties", "sdk.createIframe", "DOMWrapper", "sdk.getContextType", "guid", "ObservableMixin", "QueryString", "sdk.Runtime", "sdk.SignedRequest", "UrlMap", "URL", "sdk.XD"], function(a, b, c, d, e, f) {
        var g = b('sdk.Cookie'),
            h = b('copyProperties'),
            i = b('sdk.createIframe'),
            j = b('DOMWrapper'),
            k = b('sdk.getContextType'),
            l = b('guid'),
            m = b('ObservableMixin'),
            n = b('QueryString'),
            o = b('sdk.Runtime'),
            p = b('sdk.SignedRequest'),
            q = b('UrlMap'),
            r = b('URL'),
            s = b('sdk.XD'),
            t, u, v = new m();

        function w(aa, ba) {
            var ca = o.getUserID(),
                da = 0;
            if (aa) if (aa.userID) {
                da = aa.userID;
            } else if (aa.signedRequest) {
                var ea = p.parse(aa.signedRequest);
                if (ea && ea.user_id) da = ea.user_id;
            }
            var fa = !ca && aa,
                ga = ca && !aa,
                ha = aa && ca && ca != da,
                ia = aa != t,
                ja = ba != o.getLoginStatus();
            o.setLoginStatus(ba);
            o.setAccessToken(aa && aa.accessToken || null);
            o.setUserID(da);
            t = aa;
            var ka = {
                authResponse: aa,
                status: ba
            };
            if (ga || ha) v.inform('logout', ka);
            if (fa || ha) v.inform('login', ka);
            if (ia) v.inform('authresponse.change', ka);
            if (ja) v.inform('status.change', ka);
            return ka;
        }
        function x() {
            return t;
        }
        function y(aa, ba, ca) {
            return function(da) {
                var ea;
                if (da && da.access_token) {
                    var fa = p.parse(da.signed_request);
                    ba = {
                        accessToken: da.access_token,
                        userID: fa.user_id,
                        expiresIn: parseInt(da.expires_in, 10),
                        signedRequest: da.signed_request
                    };
                    if (o.getUseCookie()) {
                        var ga = ba.expiresIn === 0 ? 0 : (new Date()).getTime() + ba.expiresIn * 1000,
                            ha = g.getDomain();
                        if (!ha && da.base_domain) g.setDomain('.' + da.base_domain);
                        g.setSignedRequestCookie(da.signed_request, ga);
                    }
                    ea = 'connected';
                    w(ba, ea);
                } else if (ca === 'logout' || ca === 'login_status') {
                    if (da.error && da.error === 'not_authorized') {
                        ea = 'not_authorized';
                    } else ea = 'unknown';
                    w(null, ea);
                    if (o.getUseCookie()) g.clearSignedRequestCookie();
                }
                if (da && da.https == 1) o.setSecure(true);
                if (aa) aa({
                    authResponse: ba,
                    status: o.getLoginStatus()
                });
                return ba;
            };
        }
        function z(aa) {
            var ba;
            if (u) {
                clearTimeout(u);
                u = null;
            }
            var ca = y(aa, t, 'login_status'),
                da = r(q.resolve('www', true) + '/dialog/oauth/').setSearch(n.encode({
                    client_id: o.getClientID(),
                    response_type: 'token,signed_request,code',
                    display: 'none',
                    domain: location.hostname,
                    origin: k(),
                    redirect_uri: s.handler(function(ea) {
                        ba.parentNode.removeChild(ba);
                        if (ca(ea)) u = setTimeout(function() {
                            z();
                        }, 1200000);
                    }, 'parent'),
                    sdk: 'joey'
                }));
            ba = i({
                root: j.getRoot(),
                name: l(),
                url: da.toString(),
                style: {
                    display: 'none'
                }
            });
        }
        h(v, {
            fetchLoginStatus: z,
            setAuthResponse: w,
            getAuthResponse: x,
            parseSignedRequest: p.parse,
            xdResponseWrapper: y
        });
        e.exports = v;
    });
    __d("legacy:fb.auth", ["sdk.Auth", "copyProperties", "FB", "sdk.getContextType", "guid", "Log", "sdk.Runtime", "sdk.SignedRequest", "UrlMap", "UserAgent", "sdk.XD", "SDKConfig"], function(a, b, c, d) {
        var e = b('sdk.Auth'),
            f = b('copyProperties'),
            g = b('FB'),
            h = b('sdk.getContextType'),
            i = b('guid'),
            j = b('Log'),
            k = b('sdk.Runtime'),
            l = c('SDKConfig'),
            m = b('sdk.SignedRequest'),
            n = b('UrlMap'),
            o = b('UserAgent'),
            p = b('sdk.XD');
        g.provide('', {
            _getContextType: h,
            getLoginStatus: function(q, r) {
                if (!k.getClientID()) {
                    j.warn('FB.getLoginStatus() called before calling FB.init().');
                    return;
                }
                if (q) if (!r && g.Auth._loadState == 'loaded') {
                    q({
                        status: k.getLoginStatus(),
                        authResponse: g.getAuthResponse()
                    });
                    return;
                } else g.Event.subscribe('FB.loginStatus', q);
                if (!r && g.Auth._loadState == 'loading') return;
                g.Auth._loadState = 'loading';
                var s = function(t) {
                        g.Auth._loadState = 'loaded';
                        g.Event.fire('FB.loginStatus', t);
                        g.Event.clear('FB.loginStatus');
                    };
                g.Auth.fetchLoginStatus(s);
            },
            getAuthResponse: function() {
                return g.Auth.getAuthResponse();
            },
            getAccessToken: function() {
                return k.getAccessToken() || null;
            },
            getUserID: function() {
                return k.getUserID();
            },
            login: function(q, r) {
                if (r && r.perms && !r.scope) {
                    r.scope = r.perms;
                    delete r.perms;
                    j.warn('OAuth2 specification states that \'perms\' ' + 'should now be called \'scope\'.  Please update.');
                }
                g.ui(f({
                    method: 'permissions.oauth',
                    display: l.useAsync && g._inCanvas ? 'async' : 'popup',
                    domain: location.hostname
                }, r || {}), q);
            },
            logout: function(q) {
                g.ui({
                    method: 'auth.logout',
                    display: 'hidden'
                }, q);
            }
        });
        if (l.migrate) {
            g.provide('Auth', e);
            e.subscribe('logout', ES5(g.Event.fire, 'bind', true, g.Event, 'auth.logout'));
            e.subscribe('login', ES5(g.Event.fire, 'bind', true, g.Event, 'auth.login'));
            e.subscribe('authresponse.change', ES5(g.Event.fire, 'bind', true, g.Event, 'auth.authResponseChange'));
            e.subscribe('status.change', ES5(g.Event.fire, 'bind', true, g.Event, 'auth.statusChange'));
        } else g.provide('Auth', {
            _callbacks: [],
            _xdStorePath: 'xd_localstorage/',
            fetchLoginStatus: function(q) {
                if (o.mobile() && window.postMessage && window.localStorage) {
                    g.Auth.staticAuthCheck(q);
                } else g.ui({
                    method: 'login.status',
                    display: 'none',
                    domain: location.hostname
                }, q);
            },
            staticAuthCheck: function(q) {
                var r = n.resolve('cdn', true);
                g.Content.insertIframe({
                    root: g.Content.appendHidden(''),
                    className: 'FB_UI_Hidden',
                    url: r + '/' + g.Auth._xdStorePath,
                    onload: function(s) {
                        var t = frames[s.name],
                            u = i(),
                            v = false,
                            w = function(x) {
                                if (!v) {
                                    v = true;
                                    g.Auth._staticAuthHandler(q, x);
                                }
                            };
                        p.handler(w, 'parent', true, u);
                        setTimeout(w, 500);
                        t.postMessage(ES5('JSON', 'stringify', false, {
                            method: 'getItem',
                            params: ['LoginInfo_' + k.getClientID(), true],
                            returnCb: u
                        }), r);
                    }
                });
            },
            _staticAuthHandler: function(q, r) {
                if (r && r.data && r.data.status && r.data.status == 'connected') {
                    var s, t = r.data.status;
                    if (r.data.https == 1) k.setSecure(true);
                    var u = r.data.authResponse || null;
                    s = g.Auth.setAuthResponse(u, t);
                    q && q(s);
                }
                g.ui({
                    method: 'login.status',
                    display: 'none'
                }, q);
            },
            setAuthResponse: function(q, r) {
                var s = k.getUserID(),
                    t = 0;
                if (q) if (q.userID) {
                    t = q.userID;
                } else if (q.signedRequest) {
                    var u = m.parse(q.signedRequest);
                    if (u && u.user_id) t = u.user_id;
                }
                var v = !s && q,
                    w = s && !q,
                    x = q && s != t,
                    y = q != g._authResponse,
                    z = r != k.getLoginStatus(),
                    aa = {
                        authResponse: q,
                        status: r
                    };
                k.setLoginStatus(r);
                k.setAccessToken(q && q.accessToken || null);
                k.setUserID(t);
                g._authResponse = q;
                if (w || x) g.Event.fire('auth.logout', aa);
                if (v || x) g.Event.fire('auth.login', aa);
                if (y) g.Event.fire('auth.authResponseChange', aa);
                if (z) g.Event.fire('auth.statusChange', aa);
                if (g.Auth._refreshTimer) {
                    clearTimeout(g.Auth._refreshTimer);
                    delete g.Auth._refreshTimer;
                }
                if (g.Auth._loadState && q) g.Auth._refreshTimer = setTimeout(function() {
                    g.getLoginStatus(null, true);
                }, 1200000);
                return aa;
            },
            getAuthResponse: function() {
                return g._authResponse;
            },
            xdResponseWrapper: function(q, r, s) {
                return function(t) {
                    if (t && t.access_token) {
                        var u = m.parse(t.signed_request);
                        r = {
                            accessToken: t.access_token,
                            userID: u.user_id,
                            expiresIn: parseInt(t.expires_in, 10),
                            signedRequest: t.signed_request
                        };
                        if (k.getUseCookie()) {
                            var v = r.expiresIn === 0 ? 0 : (new Date()).getTime() + r.expiresIn * 1000,
                                w = g.Cookie.getDomain();
                            if (!w && t.base_domain) g.Cookie.setDomain('.' + t.base_domain);
                            g.Cookie.setSignedRequestCookie(t.signed_request, v);
                        }
                        g.Auth.setAuthResponse(r, 'connected');
                    } else if (!g._authResponse && r) {
                        g.Auth.setAuthResponse(r, 'connected');
                    } else if (s === 'logout' || s === 'login_status') {
                        var x;
                        if (t.error && t.error === 'not_authorized') {
                            x = 'not_authorized';
                        } else x = 'unknown';
                        g.Auth.setAuthResponse(null, x);
                        if (k.getUseCookie()) g.Cookie.clearSignedRequestCookie();
                    }
                    if (t && t.https == 1) k.setSecure(true);
                    var y = {
                        authResponse: g._authResponse,
                        status: k.getLoginStatus()
                    };
                    q && q(y);
                };
            },
            parseSignedRequest: m.parse
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
    __d("legacy:fb.canvas.prefetcher", ["FB", "sdk.Canvas.Prefetcher"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('sdk.Canvas.Prefetcher');
        e.provide('Canvas.Prefetcher', f);
    }, 3);
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
                a.params.next = FB.getDomain(FB.Runtime.getSecure() ? 'https_www' : 'www') + "login.php?" + FB.QS.encode({
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
        feed: FB.UIServer.MobileIframableMethod,
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
                if (FB.getAuthResponse() && !a.params.scope) {
                    FB.log('FB.login() called when user is already connected.');
                    a.cb && a.cb({
                        status: FB.Runtime.getLoginStatus(),
                        authResponse: FB.getAuthResponse()
                    });
                    return;
                }
                var b = a.cb,
                    c = a.id;
                delete a.cb;
                if (a.params.display === 'async') {
                    FB.copy(a.params, {
                        client_id: FB._apiKey,
                        origin: FB._getContextType(),
                        response_type: 'token,signed_request',
                        domain: location.hostname
                    });
                    a.cb = FB.Auth.xdResponseWrapper(b, FB.getAuthResponse(), 'permissions.oauth');
                } else FB.copy(a.params, {
                    client_id: FB._apiKey,
                    redirect_uri: FB.URI.resolve(FB.UIServer.xdHandler(b, c, 'opener', FB.getAuthResponse(), 'permissions.oauth')),
                    origin: FB._getContextType(),
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
                } else if (!FB.getAuthResponse()) {
                    FB.log('FB.logout() called without an access token.');
                } else {
                    a.params.next = FB.UIServer.xdHandler(a.cb, a.id, 'parent', FB.getAuthResponse(), 'logout');
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
                    redirect_uri: FB.UIServer.xdHandler(b, c, 'parent', FB.getAuthResponse(), 'login_status'),
                    origin: FB._getContextType(),
                    response_type: 'token,signed_request,code',
                    domain: location.hostname
                });
                return a;
            }
        }
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
    __d("resolveURI", [], function(a, b, c, d, e, f) {
        function g(h) {
            if (!h) return window.location.href;
            var i = document.createElement('div');
            i.innerHTML = '<a href="' + h.replace(/"/g, '&quot;') + '"></a>';
            return i.firstChild.href;
        }
        e.exports = g;
    });
    __d("legacy:fb.uri", ["FB", "resolveURI"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('resolveURI');
        e.provide('URI', {
            resolve: f
        });
    }, 3);
    __d("PluginTags", [], function(a, b, c, d, e, f) {
        var g = {
            shared_activity: {},
            privacy_selector: {},
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
    __d("legacy:fb.xfbml.iframeplugintags", ["FB", "PluginTags"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('PluginTags');
        e.create('XFBML.IframePluginTags', f);
    }, 3);
    FB.provide('XFBML', {
        _renderTimeout: 30000,
        _widgetPipeThreshold: 0,
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
            var a = FB.XFBML._widgetPipeEnabledTagCount > this._widgetPipeThreshold;
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
                        d = a._element = new g(a, b.xmlns, e);
                        d.subscribe('render', c);
                        d.process();
                    };
                if (FB.XFBML.IframePluginTags[e] || FB.CLASSES[b.className.substr(3)]) {
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
            localName: 'shared-activity',
            className: 'FB.XFBML.SharedActivity'
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
            localName: 'create-event-button',
            className: 'FB.XFBML.CreateEventButton'
        }, {
            localName: 'fan',
            className: 'FB.XFBML.Fan'
        }, {
            localName: 'like',
            className: 'FB.XFBML.Like'
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
            localName: 'privacy-selector'
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
            localName: 'rectangle',
            className: 'FB.XFBML.Rectangle',
            supportsWidgetPipe: true
        }, {
            localName: 'registration',
            className: 'FB.XFBML.Registration'
        }, {
            localName: 'send',
            className: 'FB.XFBML.Send'
        }, {
            localName: 'send-to-mobile'
        }, {
            localName: 'share-button',
            className: 'FB.XFBML.ShareButton'
        }, {
            localName: 'social-context',
            className: 'FB.XFBML.SocialContext'
        }, {
            localName: 'subscribe'
        }, {
            localName: 'want'
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
    __d("XFBML", ["Assert", "FB", "Log", "ObservableMixin", "copyProperties", "createArrayFrom", "dotAccess"], function(a, b, c, d, e, f) {
        var g = b('Assert'),
            h = b('FB'),
            i = b('Log'),
            j = b('ObservableMixin'),
            k = b('copyProperties'),
            l = b('createArrayFrom'),
            m = b('dotAccess'),
            n = {},
            o = {},
            p = 0,
            q = new j();

        function r(w) {
            return w.scopeName ? (w.scopeName + ':' + w.nodeName) : '';
        }
        function s(w) {
            return n[w.nodeName.toLowerCase()] || n[r(w).toLowerCase()];
        }
        function t(w) {
            var x = ES5(w.className, 'trim', true);
            if (!o[x]) return undefined;
            if (!w.childNodes || w.childNodes.length === 0 || (w.childNodes.length == 1 && w.childNodes[0].nodeType == 3) || w.getAttribute('fb-xfbml-state')) return o[x];
        }
        function u(w) {
            var x = {};
            ES5(l(w.attributes), 'forEach', true, function(y) {
                x[y.name] = y.value;
            });
            return x;
        }
        function v(w, x, y) {
            var z = ++p;
            i.info('XFBML Parsing Start %s', z);
            var aa = 1,
                ba = 0,
                ca = function() {
                    aa--;
                    if (aa === 0) {
                        i.info('XFBML Parsing Finish %s, %s tags found', z, ba);
                        x();
                        q.inform('render', z, ba);
                    }
                    g.isTrue(aa >= 0, 'onrender() has been called too many times');
                };
            ES5(l(w.getElementsByTagName('*')), 'forEach', true, function(ea) {
                if (!y && ea.getAttribute('fb-xfbml-state')) return;
                var fa = s(ea) || t(ea);
                if (!fa) return;
                aa++;
                ba++;
                var ga = fa.ctor || m(h, fa.className.substr(3)),
                    ha = new ga(ea, fa.xmlns, fa.localName, u(ea));
                ha.subscribe('render', function ja() {
                    ha.unsubscribe('render', ja);
                    ea.setAttribute('fb-xfbml-state', 'rendered');
                    ca();
                });
                var ia = function() {
                        if (ea.getAttribute('fb-xfbml-state') == 'parsed') {
                            q.subscribe('render.queue', ia);
                        } else {
                            ea.setAttribute('fb-xfbml-state', 'parsed');
                            ha.process();
                        }
                    };
                ia();
            });
            q.inform('parse', z, ba);
            var da = 30000;
            window.setTimeout(function() {
                if (aa > 0) i.warn('%s tags failed to render in %s ms', aa, da);
            }, da);
            ca();
        }
        q.subscribe('render', function() {
            var w = q.getSubscribers('render.queue');
            q.clearSubscribers('render.queue');
            ES5(w, 'forEach', true, function(x) {
                x();
            });
        });
        k(q, {
            registerTag: function(w) {
                n[w.xmlns + ':' + w.localName] = w;
                o[w.xmlns + '-' + w.localName] = w;
            },
            parse: function(w, x) {
                v(w || document.body, x ||
                function() {}, true);
            },
            parseNew: function() {
                v(document.body, function() {}, false);
            }
        });
        e.exports = q;
    });
    __d("PluginCustomClass", [], function(a, b, c, d, e, f) {
        var g = ['activity', 'add-profile-tab', 'add-to-timeline', 'bookmark', 'comments', 'comments-count', 'connect-bar', 'fan', 'like', 'like-box', 'login', 'login-button', 'facepile', 'friendpile', 'name', 'page-events', 'profile-pic', 'recommendations', 'recommendations-bar', 'registration', 'send', 'share-button', 'social-context'];
        e.exports = g;
    });
    __d("RegisterTags", ["XFBML", "PluginCustomClass", "PluginTags"], function(a, b, c, d, e, f) {
        var g = b('XFBML'),
            h = b('PluginCustomClass'),
            i = b('PluginTags');

        function j(k) {
            return k.length > 0 ? k.charAt(0).toUpperCase() + k.substr(1) : '';
        }
        ES5(ES5('Object', 'keys', false, i), 'forEach', true, function(k) {
            g.registerTag({
                xmlns: 'fb',
                localName: k.replace(/_/g, '-'),
                className: 'FB.XFBML.IframePlugin'
            });
        });
        ES5(h, 'forEach', true, function(k) {
            g.registerTag({
                xmlns: 'fb',
                localName: k,
                className: 'FB.XFBML.' + ES5(k.split('-'), 'map', true, j).join('')
            });
        });
    });
    FB.Class('XFBML.IframePlugin', function(a, b, c) {
        c = c.replace(/-/g, '_');

        function d(n) {
            return function(o) {
                var p = a.getElementsByTagName(n)[0];
                o.height && (p.style.height = o.height + 'px');
                o.width && (p.style.width = o.width + 'px');
                var q = a.getElementsByTagName('span')[0],
                    r = a.getElementsByTagName('iframe')[0],
                    s = r.style.height === q.style.height && r.style.width === q.style.width,
                    t = s ? 'removeCss' : 'addCss';
                FB.Dom[t](r, 'fb_iframe_widget_lift');
            };
        }
        function e(n) {
            FB.Event.fire('xfbml.resize', {
                width: n.width,
                height: n.height,
                pluginID: FB.XFBML.getAttr(a, 'plugin-id')
            });
        }
        var f = {
            string: function(n) {
                return n;
            },
            bool: function(n) {
                return (/^(?:true|1|yes|on)$/i).test(n);
            },
            url: function(n) {
                return FB.URI.resolve(n);
            },
            px: function(n) {
                return (/^(\d+)(?:px)?$/).test(n) ? parseInt(RegExp.$1, 10) : undefined;
            }
        };

        function g(n, o) {
            ES5(ES5('Object', 'keys', false, n), 'forEach', true, function(p) {
                var q = f[n[p]];
                o[p] = q(FB.XFBML.getAttr(a, p));
            });
        }
        var h = {
            skin: 'string',
            font: 'string',
            width: 'px',
            height: 'px',
            ref: 'string',
            color_scheme: 'string'
        };
        FB.Dom.addCss(a, 'fb_iframe_widget');
        this.subscribe('xd.resize', d('span'));
        this.subscribe('xd.resize', d('iframe'));
        this.subscribe('xd.resize', e);
        this.subscribe('xd.resize.flow', d('span'));
        this.subscribe('xd.resize.iframe', d('iframe'));
        this.subscribe('xd.resize.flow', e);
        var i = FB.getDomain('www') + 'plugins/' + c + '?',
            j = {};
        g(FB.XFBML.IframePluginTags[c], j);
        g(h, j);
        j.app_id = FB._apiKey;
        j.locale = FB._locale;
        j.sdk = 'joey';
        var k = ES5(function(n) {
            this.fire('xd.' + n.type, n);
        }, 'bind', true, this);
        j.channel = FB.XD.handler(k, 'parent.parent', true);
        var l = FB.guid();
        this.subscribe('xd.verify', function(n) {
            FB.XD.sendToFacebook(l, {
                method: 'xd/verify',
                params: ES5('JSON', 'stringify', false, n.token),
                behavior: FB.Arbiter.BEHAVIOR_PERSISTENT
            });
        });
        var m = {
            url: i + FB.QS.encode(j),
            name: l,
            onload: ES5(this.fire, 'bind', true, this, 'render'),
            width: j.width || 400,
            height: j.height || 400
        };
        this.process = function() {
            a.innerHTML = '';
            var n = document.createElement('span');
            n.style.cssText = 'width: 0px; height: 0px';
            m.root = a.appendChild(n);
            FB.Content.insertIframe(m);
        };
    }, FB.copy({}, FB.EventProvider));
    ES5(ES5('Object', 'keys', false, FB.XFBML.IframePluginTags), 'forEach', true, function(a) {
        FB.XFBML.registerTag({
            xmlns: 'fb',
            localName: a.replace(/_/g, '-'),
            className: 'FB.XFBML.IframePlugin'
        });
    });
    __d("legacy:fb.xfbml", ["FB", "Log", "RegisterTags", "XFBML", "SDKConfig"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('Log'),
            g = b('RegisterTags'),
            h = c('SDKConfig'),
            i = b('XFBML');
        if (!h.xfbmlUseLegacy) {
            f.info('Using new XFBML implementation');
            (function() {})(g);
            e.provide('XFBML', i);
            i.subscribe('parse', ES5(e.Event.fire, 'bind', true, e.Event, 'xfbml.parse'));
            i.subscribe('render', ES5(e.Event.fire, 'bind', true, e.Event, 'xfbml.render'));
        }
    }, 3);
    FB.provide('XFBML', {
        set: function(a, b, c) {
            FB.log('FB.XFBML.set() has been deprecated.');
            a.innerHTML = b;
            FB.XFBML.parse(a, c);
        }
    });
    FB.Class('XFBML.Element', function(a, b, c) {
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
            if (this._widgetPipeEnabled && FB.XFBML.shouldUseWidgetPipe()) {
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
            this._iframeName = this.getIframeName() || this._iframeName || FB.guid();
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
            this.clear();
            FB.Content.insertIframe({
                url: c,
                root: this.dom.appendChild(document.createElement('span')),
                name: this._iframeName,
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
                        url: FB._domain.www + 'plugins/pipe/',
                        target: c,
                        params: b
                    }, 1);
                }
            });
        },
        _groupWidgetPipeDescriptions: function() {
            var a = {};
            for (var b in FB.XFBML.IframeWidget.allWidgetPipeIframes) {
                var c = FB.XFBML.IframeWidget.allWidgetPipeIframes[b],
                    d = {
                        widget: c.getUrlBits().name,
                        params: c._getQS()
                    };
                a[b] = d;
            }
            return a;
        }
    });
    FB.subclass('XFBML.CreateEventButton', 'XFBML.IframeWidget', null, {
        setupAndValidate: function() {
            this._attr = {
                channel: this.getChannelUrl(),
                api_key: FB._apiKey,
                font: this.getAttribute('font'),
                colorscheme: this.getAttribute('colorscheme'),
                href: this.getAttribute('href'),
                ref: this.getAttribute('ref')
            };
            return true;
        },
        getUrlBits: function() {
            return {
                name: 'create_event_button',
                params: this._attr
            };
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
            if (b) this.subscribe('error', FB.unguard(b));
            this.monitor('value', ES5(this, 'bind', true, function() {
                if (this.value !== undefined) {
                    FB.unguard(a)(this.value);
                    return true;
                }
            }));
        }
    });
    FB.subclass('Data.Query', 'Waitable', function() {
        if (!FB.Data.Query._c) FB.Data.Query._c = 1;
        this.name = 'v_' + FB.Data.Query._c++;
    }, {
        hasDependency: function(a) {
            if (arguments.length) this._hasDependency = a;
            return this._hasDependency;
        },
        parse: function(a) {
            var b = FB.String.format.apply(null, a),
                c = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(b);
            this.fields = this._toFields(c[1]);
            this.table = c[2];
            this.where = this._parseWhere(c[3]);
            for (var d = 1; d < a.length; d++) if (FB.Type.isType(a[d], FB.Data.Query)) a[d].hasDependency(true);
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
                if (e.where.type == 'index' && !e.hasDependency()) {
                    FB.Data._mergeIndexQuery(e, b);
                } else b[e.name] = e;
            }
            var f = {
                q: {}
            };
            FB.copy(f.q, b, true, function(g) {
                return g.toFql();
            });
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
    __d("legacy:fb.cookie", ["sdk.Cookie", "FB", "QueryString", "sdk.Runtime", "SDKConfig"], function(a, b, c, d) {
        var e = b('sdk.Cookie'),
            f = b('FB'),
            g = b('QueryString'),
            h = b('sdk.Runtime'),
            i = c('SDKConfig');
        if (i.migrate) {
            f.provide('Cookie', e);
        } else f.provide('Cookie', {
            _domain: null,
            _enabled: false,
            setEnabled: function(j) {
                f.Cookie._enabled = !! j;
                if (typeof j == 'string') f.Cookie._domain = j;
            },
            getEnabled: function() {
                return h.getUseCookie();
            },
            setDomain: function(j) {
                f.Cookie._domain = j;
                var k = g.encode({
                    base_domain: f.Cookie._domain
                }),
                    l = new Date();
                l.setFullYear(l.getFullYear() + 1);
                f.Cookie.setRaw('fbm_', k, l.getTime());
            },
            getDomain: function() {
                return f.Cookie._domain;
            },
            loadMeta: function() {
                var j = document.cookie.match('\\bfbm_' + f._apiKey + '=([^;]*)\\b'),
                    k;
                if (j) {
                    k = g.decode(j[1]);
                    if (!f.Cookie._domain) f.Cookie._domain = k.base_domain;
                }
                return k;
            },
            loadSignedRequest: function() {
                var j = document.cookie.match('\\bfbsr_' + f._apiKey + '=([^;]*)\\b');
                if (!j) return null;
                return j[1];
            },
            setSignedRequestCookie: function(j, k) {
                if (!j) throw new Error('Value passed to FB.Cookie.setSignedRequestCookie ' + 'was empty.');
                if (!h.getUseCookie()) return;
                f.Cookie.setRaw('fbsr_', j, k);
            },
            clearSignedRequestCookie: function() {
                if (!h.getUseCookie()) return;
                f.Cookie.setRaw('fbsr_', '', 0);
            },
            setRaw: function(j, k, l) {
                var m = f.Cookie._domain;
                if (m) {
                    document.cookie = j + f._apiKey + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                    document.cookie = j + f._apiKey + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
                }
                var n = new Date(l).toGMTString();
                document.cookie = j + f._apiKey + '=' + k + (k && l === 0 ? '' : '; expires=' + n) + '; path=/' + (m ? '; domain=' + m : '');
            }
        });
    }, 3);
    (function() {
        var a = document.createElement('div');
        FB.require('DOMWrapper').setRoot(a);
        FB.Dom.ready(function() {
            FB.Content.appendHidden(a);
        });
    })();
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
            if (!a.logging && ES5(window.location.toString(), 'indexOf', true, 'fb_debug=1') < 0) FB._logging = false;
            if ('appId' in a || 'apiKey' in a) {
                FB._apiKey = a.appId || a.apiKey;
                FB.Runtime.setClientID(FB._apiKey);
            }
            if ('scope' in a) FB._scope = a.scope;
            if (!FB._initialized) {
                FB.XD.init(a.channelUrl ? FB.URI.resolve(a.channelUrl) : null, a.xdProxyName);
                if (FB.UA.mobile() && FB.TemplateUI && FB.TemplateData && FB.TemplateData._enabled && a.useCachedDialogs !== false) {
                    FB.TemplateUI.init();
                    FB.Event.subscribe('auth.statusChange', FB.TemplateData.update);
                }
            }
            if (a.cookie) {
                FB.Runtime.setUseCookie(true);
                if (typeof a.cookie === 'string') FB.Cookie.setDomain(a.cookie);
            }
            if (FB._apiKey) {
                if (a.authResponse) {
                    FB.Auth.setAuthResponse(a.authResponse, 'connected');
                } else if (FB.Runtime.getUseCookie()) {
                    var b = FB.Cookie.loadSignedRequest();
                    try {
                        var d = FB.Auth.parseSignedRequest(b);
                        FB.Runtime.setUserID(d.user_id || 0);
                    } catch (c) {
                        FB.Cookie.clearSignedRequestCookie();
                    }
                    FB.Cookie.loadMeta();
                }
                if (a.status) FB.getLoginStatus();
            }
            if (FB.Canvas && FB._inCanvas) {
                FB.Canvas._setHideFlashCallback(a.hideFlashCallback);
                if (FB.Canvas.Prefetcher) FB.Canvas.Prefetcher._maybeSample();
            }
            if (FB.XFBML && a.xfbml) {
                if (FB.XFBML.IframeWidget) FB.Event.subscribe('xfbml.parse', function() {
                    FB.XFBML.IframeWidget.batchWidgetPipeRequests();
                });
                window.setTimeout(function() {
                    if (FB.initSitevars.parseXFBMLBeforeDomReady) {
                        FB.XFBML.parse();
                        var e = window.setInterval(function() {
                            FB.XFBML.parse();
                        }, 100);
                        FB.Dom.ready(function() {
                            window.clearInterval(e);
                            FB.XFBML.parse();
                        });
                    } else FB.Dom.ready(FB.XFBML.parse);
                }, 0);
            }
            if (!FB._initialized) {
                FB._initialized = true;
                FB.Runtime.setInitialized(true);
                FB.Runtime.subscribe('AccessToken.change', function(e) {
                    if (!e && FB.Runtime.getLoginStatus() === 'connected') FB.getLoginStatus(null, true);
                });
            }
            if (a.frictionlessRequests) FB.Frictionless.init();
        }
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
            window.fbAsyncInit();
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
    __d("legacy:fb.pay", ["FB", "sdk.XD", "sdk.Runtime"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('sdk.XD'),
            g = b('sdk.Runtime'),
            h = {
                error_code: 1383001,
                error_message: 'An unknown error caused the dialog to be closed'
            },
            i = function(j) {
                return function(k) {
                    j(k && k.response ? ES5('JSON', 'parse', false, k.response) : h);
                };
            };
        e.provide('UIServer.Methods', {
            'pay.prompt': {
                transform: function(j) {
                    var k = f.handler(i(j.cb), 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                    j.params.channel = k;
                    f.inform('Pay.Prompt', j.params);
                    return false;
                }
            }
        });
        e.provide('UIServer.Methods', {
            pay: {
                size: {
                    width: 555,
                    height: 120
                },
                noHttps: true,
                connectDisplay: 'popup',
                transform: function(j) {
                    j.cb = i(j.cb);
                    if (!g.isEnvironment(g.ENVIRONMENTS.CANVAS)) {
                        j.params.order_info = ES5('JSON', 'stringify', false, j.params.order_info);
                        return j;
                    }
                    var k = f.handler(j.cb, 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                    j.params.channel = k;
                    j.params.uiserver = true;
                    f.inform('Pay.Prompt', j.params);
                    return false;
                }
            }
        });
    }, 3);
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
            return FB.TemplateData._enabled && FB.TemplateData._initialized && FB.TemplateData.supportsLocalStorage() && FB.Runtime.getLoginStatus() == 'connected' && FB.TemplateData.getResponse();
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
            var b = FB.Runtime.getLoginStatus();
            if (b != 'connected') FB.TemplateData.clear();
            if (b == 'connected' && !FB.TemplateData.getResponse()) FB.api({
                method: 'dialog.template_data'
            }, function(c) {
                if ('error_code' in c) return;
                var d = {
                    data: c,
                    currentUserID: FB.getUserID(),
                    setAt: (new Date()).getTime(),
                    version: FB.TemplateData._version
                };
                FB.TemplateData.saveResponse(d);
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
    __d("legacy:fb.insights", ["FB", "sdk.Insights"], function(a, b, c, d) {
        var e = b('FB'),
            f = b('sdk.Insights');
        e.provide('Insights', {
            impression: f.impression
        });
    }, 3);
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
                    if (this.isValid() && FB.Runtime.getLoginStatus() == 'connected') {
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
    FB.subclass('XFBML.Degrees', 'XFBML.IframeWidget', null, {
        _showLoader: false,
        setupAndValidate: function() {
            this._attr = {
                api_key: FB._apiKey,
                channel_url: this.getChannelUrl(),
                font: this.getAttribute('font'),
                href: this.getAttribute('href'),
                colorscheme: this.getAttribute('color-scheme')
            };
            return true;
        },
        getSize: function() {
            return {
                width: 500,
                height: 25
            };
        },
        getUrlBits: function() {
            return {
                name: 'degrees',
                params: this._attr
            };
        }
    });
    FB.XFBML._tagInfos.push({
        localName: 'degrees',
        className: 'FB.XFBML.Degrees'
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
        _widgetPipeEnabled: false,
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
            var a = FB.Runtime.getLoginStatus();
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
                if (FB.Runtime.getLoginStatus() !== 'unknown' && f) {
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
    FB.subclass('XFBML.Rectangle', 'XFBML.IframeWidget', null, {
        _widgetPipeEnabled: true,
        setupAndValidate: function() {
            this._attr = {
                channel: this.getChannelUrl(),
                api_key: FB._apiKey,
                color: this.getAttribute('color'),
                render_time: this.getAttribute('render_time'),
                height: this._getPxAttribute('height', 50),
                width: this._getPxAttribute('width', 200)
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
                name: 'test_rectangle',
                params: this._attr
            };
        }
    });
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
    void(0);

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
    FB.provide('Auth', {
        "_xdStorePath": "xd_localstorage\/v2"
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
        FB.Dom.addCssRules(".fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_invisible{display:none}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yA\/x\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y6\/x\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\\9;right:7px\\9}\n.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}\n.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}\n.fb_dialog_close_icon:hover{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yA\/x\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y6\/x\/s816eWC-2sl.gif)}\n.fb_dialog_close_icon:active{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yA\/x\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/y6\/x\/s816eWC-2sl.gif)}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n.fb_dialog_top_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}\n.fb_dialog_top_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}\n.fb_dialog_bottom_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n.fb_dialog_bottom_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yR\/x\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100\u0025}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100\u0025;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}\n.fb_dialog_content .dialog_title > span{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yD\/x\/Cou7n-nqK52.gif)\nno-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}\nbody.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100\u0025\n}\n.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yc\/x\/3rhSv5V8j3o.gif)\nwhite no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}\n.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}\n#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}\n#fb-root #fb_dialog_ipad_overlay.hidden{display:none}\n.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}\n.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}\n.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025\n}\n.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#4966A6),\ncolor-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,\nrgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}\n.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}\n.fb_dialog_content .dialog_content{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yJ\/x\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}\n.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}\n#fb_dialog_loader_close{float:left}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}\n.fb_iframe_widget iframe{position:absolute}\n.fb_iframe_widget_lift{z-index:1}\n.fb_iframe_widget span{position:relative;display:inline-block;vertical-align:text-bottom;text-align:justify}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_fluid{display:inline}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yJ\/x\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_button_simple,\n.fb_button_simple_rtl{background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yH\/x\/eIpbnVKI9lR.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}\n.fb_button_simple_rtl{background-position:right 0}\n.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}\n.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}\na.fb_button_simple:hover .fb_button_text,\na.fb_button_simple_rtl:hover .fb_button_text,\n.fb_button_simple:hover .fb_button_text,\n.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}\n.fb_button,\n.fb_button_rtl{background:#29447e url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yl\/x\/FGFbc80dUKj.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}\n.fb_button .fb_button_text,\n.fb_button_rtl .fb_button_text{background:#5f78ab url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yl\/x\/FGFbc80dUKj.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:\"lucida grande\",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}\na.fb_button,\na.fb_button_rtl,\n.fb_button,\n.fb_button_rtl{text-decoration:none}\na.fb_button:active .fb_button_text,\na.fb_button_rtl:active .fb_button_text,\n.fb_button:active .fb_button_text,\n.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}\n.fb_button_xlarge,\n.fb_button_xlarge_rtl{background-position:left -60px;font-size:24px;line-height:30px}\n.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}\na.fb_button_xlarge:active{background-position:left -99px}\n.fb_button_xlarge_rtl{background-position:right -268px}\n.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}\na.fb_button_xlarge_rtl:active{background-position:right -307px}\n.fb_button_large,\n.fb_button_large_rtl{background-position:left -138px;font-size:13px;line-height:16px}\n.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}\na.fb_button_large:active{background-position:left -163px}\n.fb_button_large_rtl{background-position:right -346px}\n.fb_button_large_rtl .fb_button_text{margin-right:25px}\na.fb_button_large_rtl:active{background-position:right -371px}\n.fb_button_medium,\n.fb_button_medium_rtl{background-position:left -188px;font-size:11px;line-height:14px}\na.fb_button_medium:active{background-position:left -210px}\n.fb_button_medium_rtl{background-position:right -396px}\n.fb_button_text_rtl,\n.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}\na.fb_button_medium_rtl:active{background-position:right -418px}\n.fb_button_small,\n.fb_button_small_rtl{background-position:left -232px;font-size:10px;line-height:10px}\n.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}\na.fb_button_small:active,\n.fb_button_small:active{background-position:left -250px}\n.fb_button_small_rtl{background-position:right -440px}\n.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}\na.fb_button_small_rtl:active{background-position:right -458px}\n.fb_share_count_wrapper{position:relative;float:left}\n.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;text-align:center}\n.fb_share_count_inner{background:#e8ebf2;display:block}\n.fb_share_count_right{margin-left:-1px;display:inline-block}\n.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size:10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}\n.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size:22px;border:solid 1px #b0b9ec}\n.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yP\/x\/bSOHtKbCGYI.png)}\n.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/x\/i_oIVTKMYsL.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}\n.fb_share_no_count{display:none}\n.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size:10px}\n.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size:11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}\n.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size:13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}\n.fb_share_count_hidden .fb_share_count_nub_top,\n.fb_share_count_hidden .fb_share_count_top,\n.fb_share_count_hidden .fb_share_count_nub_right,\n.fb_share_count_hidden .fb_share_count_right{visibility:hidden}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}\n.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50\u0025 50\u0025;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender\n.FB_Loader{margin-top:0}\n.fbpluginrecommendationsbarleft,\n.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarleft{left:10px}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarright{right:10px}\n", ["fb.css.base", "fb.css.dialog", "fb.css.iframewidget", "fb.css.button", "fb.css.sharebutton", "fb.css.connectbarwidget", "fb.css.edgecommentwidget", "fb.css.sendbuttonformwidget", "fb.css.plugin.recommendationsbar"]);
    }
    if (FB.resolveSoft) FB.resolveSoft();
})(window.inDapIF ? parent.window : window);
