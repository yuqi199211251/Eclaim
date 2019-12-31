/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */
(function(e, t) {
    if (typeof define === "function" && define.amd) {
        define(t)
    } else if (typeof exports === "object") {
        module.exports = t()
    } else {
        e.returnExports = t()
    }
})(this, function() {
    var e = Function.prototype.call;
    var t = Object.prototype;
    var r = e.bind(t.hasOwnProperty);
    var n;
    var o;
    var i;
    var c;
    var f = r(t, "__defineGetter__");
    if (f) {
        n = e.bind(t.__defineGetter__);
        o = e.bind(t.__defineSetter__);
        i = e.bind(t.__lookupGetter__);
        c = e.bind(t.__lookupSetter__)
    }
    if (!Object.getPrototypeOf) {
        Object.getPrototypeOf = function g(e) {
            var r = e.__proto__;
            if (r || r === null) {
                return r
            } else if (e.constructor) {
                return e.constructor.prototype
            } else {
                return t
            }
        }
    }

    function u(e) {
        try {
            e.sentinel = 0;
            return Object.getOwnPropertyDescriptor(e, "sentinel").value === 0
        } catch (t) {}
    }
    if (Object.defineProperty) {
        var p = u({});
        var a = typeof document === "undefined" || u(document.createElement("div"));
        if (!a || !p) {
            var l = Object.getOwnPropertyDescriptor
        }
    }
    if (!Object.getOwnPropertyDescriptor || l) {
        var b = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function E(e, n) {
            if (typeof e !== "object" && typeof e !== "function" || e === null) {
                throw new TypeError(b + e)
            }
            if (l) {
                try {
                    return l.call(Object, e, n)
                } catch (o) {}
            }
            if (!r(e, n)) {
                return
            }
            var u = {
                enumerable: true,
                configurable: true
            };
            if (f) {
                var p = e.__proto__;
                var a = e !== t;
                if (a) {
                    e.__proto__ = t
                }
                var _ = i(e, n);
                var s = c(e, n);
                if (a) {
                    e.__proto__ = p
                }
                if (_ || s) {
                    if (_) {
                        u.get = _
                    }
                    if (s) {
                        u.set = s
                    }
                    return u
                }
            }
            u.value = e[n];
            u.writable = true;
            return u
        }
    }
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function x(e) {
            return Object.keys(e)
        }
    }
    if (!Object.create) {
        var _;
        var s = !({
                __proto__: null
            }
            instanceof Object);
        if (s || typeof document === "undefined") {
            _ = function() {
                return {
                    __proto__: null
                }
            }
        } else {
            _ = function() {
                var e = document.createElement("iframe");
                var t = document.body || document.documentElement;
                e.style.display = "none";
                t.appendChild(e);
                e.src = "javascript:";
                var r = e.contentWindow.Object.prototype;
                t.removeChild(e);
                e = null;
                delete r.constructor;
                delete r.hasOwnProperty;
                delete r.propertyIsEnumerable;
                delete r.isPrototypeOf;
                delete r.toLocaleString;
                delete r.toString;
                delete r.valueOf;
                r.__proto__ = null;

                function n() {}
                n.prototype = r;
                _ = function() {
                    return new n
                };
                return new n
            }
        }
        Object.create = function z(e, t) {
            var r;

            function n() {}
            if (e === null) {
                r = _()
            } else {
                if (typeof e !== "object" && typeof e !== "function") {
                    throw new TypeError("Object prototype may only be an Object or null")
                }
                n.prototype = e;
                r = new n;
                r.__proto__ = e
            }
            if (t !== void 0) {
                Object.defineProperties(r, t)
            }
            return r
        }
    }

    function d(e) {
        try {
            Object.defineProperty(e, "sentinel", {});
            return "sentinel" in e
        } catch (t) {}
    }
    if (Object.defineProperty) {
        var y = d({});
        var O = typeof document === "undefined" || d(document.createElement("div"));
        if (!y || !O) {
            var j = Object.defineProperty,
                v = Object.defineProperties
        }
    }
    if (!Object.defineProperty || j) {
        var w = "Property description must be an object: ";
        var P = "Object.defineProperty called on non-object: ";
        var m = "getters & setters can not be defined " + "on this javascript engine";
        Object.defineProperty = function S(e, u, p) {
            if (typeof e !== "object" && typeof e !== "function" || e === null) {
                throw new TypeError(P + e)
            }
            if (typeof p !== "object" && typeof p !== "function" || p === null) {
                throw new TypeError(w + p)
            }
            if (j) {
                try {
                    return j.call(Object, e, u, p)
                } catch (a) {}
            }
            if (r(p, "value")) {
                if (f && (i(e, u) || c(e, u))) {
                    var l = e.__proto__;
                    e.__proto__ = t;
                    delete e[u];
                    e[u] = p.value;
                    e.__proto__ = l
                } else {
                    e[u] = p.value
                }
            } else {
                if (!f) {
                    throw new TypeError(m)
                }
                if (r(p, "get")) {
                    n(e, u, p.get)
                }
                if (r(p, "set")) {
                    o(e, u, p.set)
                }
            }
            return e
        }
    }
    if (!Object.defineProperties || v) {
        Object.defineProperties = function T(e, t) {
            if (v) {
                try {
                    return v.call(Object, e, t)
                } catch (n) {}
            }
            for (var o in t) {
                if (r(t, o) && o !== "__proto__") {
                    Object.defineProperty(e, o, t[o])
                }
            }
            return e
        }
    }
    if (!Object.seal) {
        Object.seal = function D(e) {
            return e
        }
    }
    if (!Object.freeze) {
        Object.freeze = function k(e) {
            return e
        }
    }
    try {
        Object.freeze(function() {})
    } catch (h) {
        Object.freeze = function F(e) {
            return function t(r) {
                if (typeof r === "function") {
                    return r
                } else {
                    return e(r)
                }
            }
        }(Object.freeze)
    }
    if (!Object.preventExtensions) {
        Object.preventExtensions = function G(e) {
            return e
        }
    }
    if (!Object.isSealed) {
        Object.isSealed = function C(e) {
            return false
        }
    }
    if (!Object.isFrozen) {
        Object.isFrozen = function N(e) {
            return false
        }
    }
    if (!Object.isExtensible) {
        Object.isExtensible = function I(e) {
            if (Object(e) !== e) {
                throw new TypeError
            }
            var t = "";
            while (r(e, t)) {
                t += "?"
            }
            e[t] = true;
            var n = r(e, t);
            delete e[t];
            return n
        }
    }
});