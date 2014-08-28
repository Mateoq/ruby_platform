/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
  var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = '1.10.2', d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
      return new x.fn.init(e, t, r);
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
      return t.toUpperCase();
    }, q = function (e) {
      (a.addEventListener || 'load' === e.type || 'complete' === a.readyState) && (_(), x.ready());
    }, _ = function () {
      a.addEventListener ? (a.removeEventListener('DOMContentLoaded', q, !1), e.removeEventListener('load', q, !1)) : (a.detachEvent('onreadystatechange', q), e.detachEvent('onload', q));
    };
  x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function (e, n, r) {
      var i, o;
      if (!e)
        return this;
      if ('string' == typeof e) {
        if (i = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3 ? [
            null,
            e,
            null
          ] : N.exec(e), !i || !i[1] && n)
          return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
            for (i in n)
              x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this;
        }
        if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2])
            return r.find(e);
          this.length = 1, this[0] = o;
        }
        return this.context = a, this.selector = e, this;
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: '',
    length: 0,
    toArray: function () {
      return g.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function (e, t) {
      return x.each(this, e, t);
    },
    ready: function (e) {
      return x.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(g.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function (e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
    for ('boolean' == typeof s && (c = s, s = arguments[1] || {}, l = 2), 'object' == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
      if (null != (o = arguments[l]))
        for (i in o)
          e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
    return s;
  }, x.extend({
    expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
    noConflict: function (t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function (e) {
      if (e === !0 ? !--x.readyWait : !x.isReady) {
        if (!a.body)
          return setTimeout(x.ready);
        x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger('ready').off('ready'));
      }
    },
    isFunction: function (e) {
      return 'function' === x.type(e);
    },
    isArray: Array.isArray || function (e) {
      return 'array' === x.type(e);
    },
    isWindow: function (e) {
      return null != e && e == e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? c[y.call(e)] || 'object' : typeof e;
    },
    isPlainObject: function (e) {
      var n;
      if (!e || 'object' !== x.type(e) || e.nodeType || x.isWindow(e))
        return !1;
      try {
        if (e.constructor && !v.call(e, 'constructor') && !v.call(e.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (r) {
        return !1;
      }
      if (x.support.ownLast)
        for (n in e)
          return v.call(e, n);
      for (n in e);
      return n === t || v.call(e, n);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e)
        return !1;
      return !0;
    },
    error: function (e) {
      throw Error(e);
    },
    parseHTML: function (e, t, n) {
      if (!e || 'string' != typeof e)
        return null;
      'boolean' == typeof t && (n = t, t = !1), t = t || a;
      var r = k.exec(e), i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : 'string' == typeof n && (n = x.trim(n), n && E.test(n.replace(A, '@').replace(j, ']').replace(S, ''))) ? Function('return ' + n)() : (x.error('Invalid JSON: ' + n), t);
    },
    parseXML: function (n) {
      var r, i;
      if (!n || 'string' != typeof n)
        return null;
      try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, 'text/xml')) : (r = new ActiveXObject('Microsoft.XMLDOM'), r.async = 'false', r.loadXML(n));
      } catch (o) {
        r = t;
      }
      return r && r.documentElement && !r.getElementsByTagName('parsererror').length || x.error('Invalid XML: ' + n), r;
    },
    noop: function () {
    },
    globalEval: function (t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function (e) {
      return e.replace(D, 'ms-').replace(L, H);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var r, i = 0, o = e.length, a = M(e);
      if (n) {
        if (a) {
          for (; o > i; i++)
            if (r = t.apply(e[i], n), r === !1)
              break;
        } else
          for (i in e)
            if (r = t.apply(e[i], n), r === !1)
              break;
      } else if (a) {
        for (; o > i; i++)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      } else
        for (i in e)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      return e;
    },
    trim: b && !b.call('\ufeff\xa0') ? function (e) {
      return null == e ? '' : b.call(e);
    } : function (e) {
      return null == e ? '' : (e + '').replace(C, '');
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (M(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      var r;
      if (t) {
        if (m)
          return m.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
          if (n in t && t[n] === e)
            return n;
      }
      return -1;
    },
    merge: function (e, n) {
      var r = n.length, i = e.length, o = 0;
      if ('number' == typeof r)
        for (; r > o; o++)
          e[i++] = n[o];
      else
        while (n[o] !== t)
          e[i++] = n[o++];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      var r, i = [], o = 0, a = e.length;
      for (n = !!n; a > o; o++)
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i;
    },
    map: function (e, t, n) {
      var r, i = 0, o = e.length, a = M(e), s = [];
      if (a)
        for (; o > i; i++)
          r = t(e[i], i, n), null != r && (s[s.length] = r);
      else
        for (i in e)
          r = t(e[i], i, n), null != r && (s[s.length] = r);
      return d.apply([], s);
    },
    guid: 1,
    proxy: function (e, n) {
      var r, i, o;
      return 'string' == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : t;
    },
    access: function (e, n, r, i, o, a, s) {
      var l = 0, u = e.length, c = null == r;
      if ('object' === x.type(r)) {
        o = !0;
        for (l in r)
          x.access(e, n, l, r[l], !0, a, s);
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
          return c.call(x(e), n);
        })), n))
        for (; u > l; l++)
          n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    },
    now: function () {
      return new Date().getTime();
    },
    swap: function (e, t, n, r) {
      var i, o, a = {};
      for (o in t)
        a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
        e.style[o] = a[o];
      return i;
    }
  }), x.ready.promise = function (t) {
    if (!n)
      if (n = x.Deferred(), 'complete' === a.readyState)
        setTimeout(x.ready);
      else if (a.addEventListener)
        a.addEventListener('DOMContentLoaded', q, !1), e.addEventListener('load', q, !1);
      else {
        a.attachEvent('onreadystatechange', q), e.attachEvent('onload', q);
        var r = !1;
        try {
          r = null == e.frameElement && a.documentElement;
        } catch (i) {
        }
        r && r.doScroll && function o() {
          if (!x.isReady) {
            try {
              r.doScroll('left');
            } catch (e) {
              return setTimeout(o, 50);
            }
            _(), x.ready();
          }
        }();
      }
    return n.promise(t);
  }, x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    c['[object ' + t + ']'] = t.toLowerCase();
  });
  function M(e) {
    var t = e.length, n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : 'array' === n || 'function' !== n && (0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }
  r = x(a), function (e, t) {
    var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = 'sizzle' + -new Date(), w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
        return e === t ? (S = !0, 0) : 0;
      }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
        var t = 0, n = this.length;
        for (; n > t; t++)
          if (this[t] === e)
            return t;
        return -1;
      }, B = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', P = '[\\x20\\t\\r\\n\\f]', R = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', W = R.replace('w', 'w#'), $ = '\\[' + P + '*(' + R + ')' + P + '*(?:([*^$|!~]?=)' + P + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + W + ')|)|)' + P + '*\\]', I = ':(' + R + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + $.replace(3, 8) + ')*)|.*)\\)|)', z = RegExp('^' + P + '+|((?:^|[^\\\\])(?:\\\\.)*)' + P + '+$', 'g'), X = RegExp('^' + P + '*,' + P + '*'), U = RegExp('^' + P + '*([>+~]|' + P + ')' + P + '*'), V = RegExp(P + '*[+~]'), Y = RegExp('=' + P + '*([^\\]\'"]*)' + P + '*\\]', 'g'), J = RegExp(I), G = RegExp('^' + W + '$'), Q = {
        ID: RegExp('^#(' + R + ')'),
        CLASS: RegExp('^\\.(' + R + ')'),
        TAG: RegExp('^(' + R.replace('w', 'w*') + ')'),
        ATTR: RegExp('^' + $),
        PSEUDO: RegExp('^' + I),
        CHILD: RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + P + '*(even|odd|(([+-]|)(\\d*)n|)' + P + '*(?:([+-]|)' + P + '*(\\d+)|))' + P + '*\\)|)', 'i'),
        bool: RegExp('^(?:' + B + ')$', 'i'),
        needsContext: RegExp('^' + P + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + P + '*((?:-\\d)?\\d*)' + P + '*\\)|)(?=[^-]|$)', 'i')
      }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp('\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)', 'ig'), it = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
      };
    try {
      M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = {
        apply: H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length, r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    function at(e, t, n, i) {
      var o, a, s, l, u, c, d, m, y, x;
      if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || 'string' != typeof e)
        return n;
      if (1 !== (l = t.nodeType) && 9 !== l)
        return [];
      if (h && !i) {
        if (o = Z.exec(e))
          if (s = o[1]) {
            if (9 === l) {
              if (a = t.getElementById(s), !a || !a.parentNode)
                return n;
              if (a.id === s)
                return n.push(a), n;
            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)
              return n.push(a), n;
          } else {
            if (o[2])
              return M.apply(n, t.getElementsByTagName(e)), n;
            if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)
              return M.apply(n, t.getElementsByClassName(s)), n;
          }
        if (r.qsa && (!g || !g.test(e))) {
          if (m = d = b, y = t, x = 9 === l && e, 1 === l && 'object' !== t.nodeName.toLowerCase()) {
            c = mt(e), (d = t.getAttribute('id')) ? m = d.replace(nt, '\\$&') : t.setAttribute('id', m), m = '[id=\'' + m + '\'] ', u = c.length;
            while (u--)
              c[u] = m + yt(c[u]);
            y = V.test(e) && t.parentNode || t, x = c.join(',');
          }
          if (x)
            try {
              return M.apply(n, y.querySelectorAll(x)), n;
            } catch (T) {
            } finally {
              d || t.removeAttribute('id');
            }
        }
      }
      return kt(e.replace(z, '$1'), t, n, i);
    }
    function st() {
      var e = [];
      function t(n, r) {
        return e.push(n += ' ') > o.cacheLength && delete t[e.shift()], t[n] = r;
      }
      return t;
    }
    function lt(e) {
      return e[b] = !0, e;
    }
    function ut(e) {
      var t = f.createElement('div');
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function ct(e, t) {
      var n = e.split('|'), r = e.length;
      while (r--)
        o.attrHandle[n[r]] = t;
    }
    function pt(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r)
        return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t)
            return -1;
      return e ? 1 : -1;
    }
    function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return 'input' === n && t.type === e;
      };
    }
    function dt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ht(e) {
      return lt(function (t) {
        return t = +t, lt(function (n, r) {
          var i, o = e([], n.length, t), a = o.length;
          while (a--)
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    s = at.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? 'HTML' !== t.nodeName : !1;
    }, r = at.support = {}, p = at.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w, i = n.defaultView;
      return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent('onbeforeunload', function () {
        p();
      }), r.attributes = ut(function (e) {
        return e.className = 'i', !e.getAttribute('className');
      }), r.getElementsByTagName = ut(function (e) {
        return e.appendChild(n.createComment('')), !e.getElementsByTagName('*').length;
      }), r.getElementsByClassName = ut(function (e) {
        return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', 2 === e.getElementsByClassName('i').length;
      }), r.getById = ut(function (e) {
        return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
      }), r.getById ? (o.find.ID = function (e, t) {
        if (typeof t.getElementById !== j && h) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete o.find.ID, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          var n = typeof e.getAttributeNode !== j && e.getAttributeNode('id');
          return n && n.value === t;
        };
      }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
        return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ('*' === e) {
          while (n = o[i++])
            1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
        return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t;
      }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = '<select><option selected=\'\'></option></select>', e.querySelectorAll('[selected]').length || g.push('\\[' + P + '*(?:value|' + B + ')'), e.querySelectorAll(':checked').length || g.push(':checked');
      }), ut(function (e) {
        var t = n.createElement('input');
        t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('t', ''), e.querySelectorAll('[t^=\'\']').length && g.push('[*^$]=' + P + '*(?:\'\'|"")'), e.querySelectorAll(':enabled').length || g.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), g.push(',.*:');
      })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
        r.disconnectedMatch = y.call(e, 'div'), y.call(e, '[s!=\'\']:x'), m.push('!=', I);
      }), g = g.length && RegExp(g.join('|')), m = m.length && RegExp(m.join('|')), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t)
          while (t = t.parentNode)
            if (t === e)
              return !0;
        return !1;
      }, A = d.compareDocumentPosition ? function (e, t) {
        if (e === t)
          return S = !0, 0;
        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
        return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
        if (e === t)
          return S = !0, 0;
        if (!o || !a)
          return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
        if (o === a)
          return pt(e, t);
        r = e;
        while (r = r.parentNode)
          s.unshift(r);
        r = t;
        while (r = r.parentNode)
          l.unshift(r);
        while (s[i] === l[i])
          i++;
        return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, n) : f;
    }, at.matches = function (e, t) {
      return at(e, null, null, t);
    }, at.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, '=\'$1\']'), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))
        try {
          var n = y.call(e, t);
          if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)
            return n;
        } catch (i) {
        }
      return at(t, f, null, [e]).length > 0;
    }, at.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, at.attr = function (e, n) {
      (e.ownerDocument || e) !== f && p(e);
      var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
      return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
    }, at.error = function (e) {
      throw Error('Syntax error, unrecognized expression: ' + e);
    }, at.uniqueSort = function (e) {
      var t, n = [], i = 0, o = 0;
      if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
        while (t = e[o++])
          t === e[o] && (i = n.push(o));
        while (i--)
          e.splice(n[i], 1);
      }
      return e;
    }, a = at.getText = function (e) {
      var t, n = '', r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent)
            return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            n += a(e);
        } else if (3 === i || 4 === i)
          return e.nodeValue;
      } else
        for (; t = e[r]; r++)
          n += a(t);
      return n;
    }, o = at.selectors = {
      cacheLength: 50,
      createPseudo: lt,
      match: Q,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || '').replace(rt, it), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && at.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var n, r = !e[5] && e[2];
          return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(')', r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(rt, it).toLowerCase();
          return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = N[e + ' '];
          return t || (t = RegExp('(^|' + P + ')' + e + '(' + P + '|$)')) && N(e, function (e) {
            return t.test('string' == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute('class') || '');
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = at.attr(r, e);
            return null == i ? '!=' === t : t ? (i += '', '=' === t ? i === n : '!=' === t ? i !== n : '^=' === t ? n && 0 === i.indexOf(n) : '*=' === t ? n && i.indexOf(n) > -1 : '$=' === t ? n && i.slice(-n.length) === n : '~=' === t ? (' ' + i + ' ').indexOf(n) > -1 : '|=' === t ? i === n || i.slice(0, n.length + 1) === n + '-' : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3), a = 'last' !== e.slice(-4), s = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u, c, p, f, d, h, g = o !== a ? 'nextSibling' : 'previousSibling', m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
            if (m) {
              if (o) {
                while (g) {
                  p = t;
                  while (p = p[g])
                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                      return !1;
                  h = g = 'only' === e && !h && 'nextSibling';
                }
                return !0;
              }
              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [
                      T,
                      d,
                      f
                    ];
                    break;
                  }
              } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)
                f = u[1];
              else
                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                  if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [
                      T,
                      f
                    ]), p === t))
                    break;
              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error('unsupported pseudo: ' + e);
          return r[b] ? r(t) : r.length > 1 ? (n = [
            e,
            e,
            '',
            t
          ], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
            var i, o = r(e, t), a = o.length;
            while (a--)
              i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: lt(function (e) {
          var t = [], n = [], r = l(e.replace(z, '$1'));
          return r[b] ? lt(function (e, t, n, i) {
            var o, a = r(e, null, i, []), s = e.length;
            while (s--)
              (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: lt(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }),
        contains: lt(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }),
        lang: lt(function (e) {
          return G.test(e || '') || at.error('unsupported lang: ' + e), e = e.replace(rt, it).toLowerCase(), function (t) {
            var n;
            do
              if (n = h ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === d;
        },
        focus: function (e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType)
              return !1;
          return !0;
        },
        parent: function (e) {
          return !o.pseudos.empty(e);
        },
        header: function (e) {
          return tt.test(e.nodeName);
        },
        input: function (e) {
          return et.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t;
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type);
        },
        first: ht(function () {
          return [0];
        }),
        last: ht(function (e, t) {
          return [t - 1];
        }),
        eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: ht(function (e, t) {
          var n = 0;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        odd: ht(function (e, t) {
          var n = 1;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; --r >= 0;)
            e.push(r);
          return e;
        }),
        gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; t > ++r;)
            e.push(r);
          return e;
        })
      }
    }, o.pseudos.nth = o.pseudos.eq;
    for (n in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      o.pseudos[n] = ft(n);
    for (n in {
        submit: !0,
        reset: !0
      })
      o.pseudos[n] = dt(n);
    function gt() {
    }
    gt.prototype = o.filters = o.pseudos, o.setFilters = new gt();
    function mt(e, t) {
      var n, r, i, a, s, l, u, c = k[e + ' '];
      if (c)
        return t ? 0 : c.slice(0);
      s = e, l = [], u = o.preFilter;
      while (s) {
        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(z, ' ')
        }), s = s.slice(n.length));
        for (a in o.filter)
          !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
            value: n,
            type: a,
            matches: r
          }), s = s.slice(n.length));
        if (!n)
          break;
      }
      return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }
    function yt(e) {
      var t = 0, n = e.length, r = '';
      for (; n > t; t++)
        r += e[t].value;
      return r;
    }
    function vt(e, t, n) {
      var r = t.dir, o = n && 'parentNode' === r, a = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r])
          if (1 === t.nodeType || o)
            return e(t, n, i);
      } : function (t, n, s) {
        var l, u, c, p = T + ' ' + a;
        if (s) {
          while (t = t[r])
            if ((1 === t.nodeType || o) && e(t, n, s))
              return !0;
        } else
          while (t = t[r])
            if (1 === t.nodeType || o)
              if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                if ((l = u[1]) === !0 || l === i)
                  return l === !0;
              } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)
                return !0;
      };
    }
    function bt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;
        while (i--)
          if (!e[i](t, n, r))
            return !1;
        return !0;
      } : e[0];
    }
    function xt(e, t, n, r, i) {
      var o, a = [], s = 0, l = e.length, u = null != t;
      for (; l > s; s++)
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      return a;
    }
    function wt(e, t, n, r, i, o) {
      return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
        var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || '*', s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
        if (n && n(m, y, s, l), r) {
          u = xt(y, d), r(u, [], s, l), c = u.length;
          while (c--)
            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
        }
        if (o) {
          if (i || e) {
            if (i) {
              u = [], c = y.length;
              while (c--)
                (p = y[c]) && u.push(m[c] = p);
              i(null, y = [], u, l);
            }
            c = y.length;
            while (c--)
              (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
          }
        } else
          y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }
    function Tt(e) {
      var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[' '], l = a ? 1 : 0, c = vt(function (e) {
          return e === t;
        }, s, !0), p = vt(function (e) {
          return F.call(t, e) > -1;
        }, s, !0), f = [function (e, n, r) {
            return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
          }];
      for (; i > l; l++)
        if (n = o.relative[e[l].type])
          f = [vt(bt(f), n)];
        else {
          if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
            for (r = ++l; i > r; r++)
              if (o.relative[e[r].type])
                break;
            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(z, '$1'), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
          }
          f.push(n);
        }
      return bt(f);
    }
    function Ct(e, t) {
      var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
          var h, g, m, y = [], v = 0, b = '0', x = s && [], w = null != d, C = u, N = s || a && o.find.TAG('*', d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || 0.1;
          for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
            if (a && h) {
              g = 0;
              while (m = e[g++])
                if (m(h, l, c)) {
                  p.push(h);
                  break;
                }
              w && (T = k, i = ++n);
            }
            r && ((h = !m && h) && v--, s && x.push(h));
          }
          if (v += b, r && b !== v) {
            g = 0;
            while (m = t[g++])
              m(x, y, l, c);
            if (s) {
              if (v > 0)
                while (b--)
                  x[b] || y[b] || (y[b] = q.call(p));
              y = xt(y);
            }
            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
          }
          return w && (T = k, u = C), x;
        };
      return r ? lt(s) : s;
    }
    l = at.compile = function (e, t) {
      var n, r = [], i = [], o = E[e + ' '];
      if (!o) {
        t || (t = mt(e)), n = t.length;
        while (n--)
          o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
        o = E(e, Ct(i, r));
      }
      return o;
    };
    function Nt(e, t, n) {
      var r = 0, i = t.length;
      for (; i > r; r++)
        at(e, t[r], n);
      return n;
    }
    function kt(e, t, n, i) {
      var a, s, u, c, p, f = mt(e);
      if (!i && 1 === f.length) {
        if (s = f[0] = f[0].slice(0), s.length > 2 && 'ID' === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
          if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)
            return n;
          e = e.slice(s.shift().value.length);
        }
        a = Q.needsContext.test(e) ? 0 : s.length;
        while (a--) {
          if (u = s[a], o.relative[c = u.type])
            break;
          if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
            if (s.splice(a, 1), e = i.length && yt(s), !e)
              return M.apply(n, i), n;
            break;
          }
        }
      }
      return l(e, f)(i, t, !h, n, V.test(e)), n;
    }
    r.sortStable = b.split('').sort(A).join('') === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement('div'));
    }), ut(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
    }) || ct('type|href|height|width', function (e, n, r) {
      return r ? t : e.getAttribute(n, 'type' === n.toLowerCase() ? 1 : 2);
    }), r.attributes && ut(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
    }) || ct('value', function (e, n, r) {
      return r || 'input' !== e.nodeName.toLowerCase() ? t : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute('disabled');
    }) || ct(B, function (e, n, r) {
      var i;
      return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), x.find = at, x.expr = at.selectors, x.expr[':'] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
  }(e);
  var O = {};
  function F(e) {
    var t = O[e] = {};
    return x.each(e.match(T) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }
  x.Callbacks = function (e) {
    e = 'string' == typeof e ? O[e] || F(e) : x.extend({}, e);
    var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
        for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
          if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            r = !1;
            break;
          }
        n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
      }, p = {
        add: function () {
          if (l) {
            var t = l.length;
            (function i(t) {
              x.each(t, function (t, n) {
                var r = x.type(n);
                'function' === r ? e.unique && p.has(n) || l.push(n) : n && n.length && 'string' !== r && i(n);
              });
            }(arguments), n ? o = l.length : r && (s = t, c(r)));
          }
          return this;
        },
        remove: function () {
          return l && x.each(arguments, function (e, t) {
            var r;
            while ((r = x.inArray(t, l, r)) > -1)
              l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }), this;
        },
        has: function (e) {
          return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return l = [], o = 0, this;
        },
        disable: function () {
          return l = u = r = t, this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return u = t, r || p.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return !l || i && !u || (t = t || [], t = [
            e,
            t.slice ? t.slice() : t
          ], n ? u.push(t) : c(t)), this;
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        }
      };
    return p;
  }, x.extend({
    Deferred: function (e) {
      var t = [
          [
            'resolve',
            'done',
            x.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            x.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            x.Callbacks('memory')
          ]
        ], n = 'pending', r = {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return x.Deferred(function (n) {
              x.each(t, function (t, o) {
                var a = o[0], s = x.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + 'With'](this === r ? n.promise() : this, s ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          promise: function (e) {
            return null != e ? x.extend(e, r) : r;
          }
        }, i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var a = o[2], s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this;
        }, i[o[0] + 'With'] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
          return function (r) {
            t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
          };
        }, s, l, u;
      if (r > 1)
        for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)
          n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      return i || o.resolveWith(u, n), o.promise();
    }
  }), x.support = function (t) {
    var n, r, o, s, l, u, c, p, f, d = a.createElement('div');
    if (d.setAttribute('className', 't'), d.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', n = d.getElementsByTagName('*') || [], r = d.getElementsByTagName('a')[0], !r || !r.style || !n.length)
      return t;
    s = a.createElement('select'), u = s.appendChild(a.createElement('option')), o = d.getElementsByTagName('input')[0], r.style.cssText = 'top:1px;float:left;opacity:.5', t.getSetAttribute = 't' !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName('tbody').length, t.htmlSerialize = !!d.getElementsByTagName('link').length, t.style = /top/.test(r.getAttribute('style')), t.hrefNormalized = '/a' === r.getAttribute('href'), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement('form').enctype, t.html5Clone = '<:nav></:nav>' !== a.createElement('nav').cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }
    o = a.createElement('input'), o.setAttribute('value', ''), t.input = '' === o.getAttribute('value'), o.value = 't', o.setAttribute('type', 'radio'), t.radioValue = 't' === o.value, o.setAttribute('checked', 't'), o.setAttribute('name', 't'), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent('onclick', function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());
    for (f in {
        submit: !0,
        change: !0,
        focusin: !0
      })
      d.setAttribute(c = 'on' + f, 't'), t[f + 'Bubbles'] = c in e || d.attributes[c].expando === !1;
    d.style.backgroundClip = 'content-box', d.cloneNode(!0).style.backgroundClip = '', t.clearCloneStyle = 'content-box' === d.style.backgroundClip;
    for (f in x(t))
      break;
    return t.ownLast = '0' !== f, x(function () {
      var n, r, o, s = 'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;', l = a.getElementsByTagName('body')[0];
      l && (n = a.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', l.appendChild(n).appendChild(d), d.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', o = d.getElementsByTagName('td'), o[0].style.cssText = 'padding:0;margin:0;border:0;display:none', p = 0 === o[0].offsetHeight, o[0].style.display = '', o[1].style.display = 'none', t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = '', d.style.cssText = 'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;', x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === d.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = '1%' !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = '4px' === (e.getComputedStyle(d, null) || { width: '4px' }).width, r = d.appendChild(a.createElement('div')), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = '0', d.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = '', d.style.cssText = s + 'width:1px;padding:1px;display:inline;zoom:1', t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = 'block', d.innerHTML = '<div></div>', d.firstChild.style.width = '5px', t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
    }), n = s = l = u = r = o = null, t;
  }({});
  var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
  function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
      if (c && u[c] && (i || u[c].data) || r !== t || 'string' != typeof n)
        return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ('object' == typeof n || 'function' == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), 'string' == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o;
    }
  }
  function W(e, t, n) {
    if (x.acceptData(e)) {
      var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(' ')), i = t.length;
          while (i--)
            delete r[t[i]];
          if (n ? !I(r) : !x.isEmptyObject(r))
            return;
        }
        (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
      }
    }
  }
  x.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
    },
    data: function (e, t, n) {
      return R(e, t, n);
    },
    removeData: function (e, t) {
      return W(e, t);
    },
    _data: function (e, t, n) {
      return R(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return W(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
        return !1;
      var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute('classid') === t;
    }
  }), x.fn.extend({
    data: function (e, n) {
      var r, i, o = null, a = 0, s = this[0];
      if (e === t) {
        if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, 'parsedAttrs'))) {
          for (r = s.attributes; r.length > a; a++)
            i = r[a].name, 0 === i.indexOf('data-') && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
          x._data(s, 'parsedAttrs', !0);
        }
        return o;
      }
      return 'object' == typeof e ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    },
    removeData: function (e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    }
  });
  function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = 'data-' + n.replace(P, '-$1').toLowerCase();
      if (r = e.getAttribute(i), 'string' == typeof r) {
        try {
          r = 'true' === r ? !0 : 'false' === r ? !1 : 'null' === r ? null : +r + '' === r ? +r : B.test(r) ? x.parseJSON(r) : r;
        } catch (o) {
        }
        x.data(e, n, r);
      } else
        r = t;
    }
    return r;
  }
  function I(e) {
    var t;
    for (t in e)
      if (('data' !== t || !x.isEmptyObject(e[t])) && 'toJSON' !== t)
        return !1;
    return !0;
  }
  x.extend({
    queue: function (e, n, r) {
      var i;
      return e ? (n = (n || 'fx') + 'queue', i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
          x.dequeue(e, t);
        };
      'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return x._data(e, n) || x._data(e, n, {
        empty: x.Callbacks('once memory').add(function () {
          x._removeData(e, t + 'queue'), x._removeData(e, n);
        })
      });
    }
  }), x.fn.extend({
    queue: function (e, n) {
      var r = 2;
      return 'string' != typeof e && (n = e, e = 'fx', r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = x.queue(this, e, n);
        x._queueHooks(this, e), 'fx' === e && 'inprogress' !== t[0] && x.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', []);
    },
    promise: function (e, n) {
      var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
          --i || o.resolveWith(a, [a]);
        };
      'string' != typeof e && (n = e, e = t), e = e || 'fx';
      while (s--)
        r = x._data(a[s], e + 'queueHooks'), r && r.empty && (i++, r.empty.add(l));
      return l(), o.promise(n);
    }
  });
  var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
  x.fn.extend({
    attr: function (e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return e = x.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {
        }
      });
    },
    addClass: function (e) {
      var t, n, r, i, o, a = 0, s = this.length, l = 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).addClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || '').match(T) || []; s > a; a++)
          if (n = this[a], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(U, ' ') : ' ')) {
            o = 0;
            while (i = t[o++])
              0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
            n.className = x.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).removeClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || '').match(T) || []; s > a; a++)
          if (n = this[a], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(U, ' ') : '')) {
            o = 0;
            while (i = t[o++])
              while (r.indexOf(' ' + i + ' ') >= 0)
                r = r.replace(' ' + i + ' ', ' ');
            n.className = e ? x.trim(r) : '';
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ('string' === n) {
          var t, r = 0, o = x(this), a = e.match(T) || [];
          while (t = a[r++])
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else
          (n === i || 'boolean' === n) && (this.className && x._data(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : x._data(this, '__className__') || '');
      });
    },
    hasClass: function (e) {
      var t = ' ' + e + ' ', n = 0, r = this.length;
      for (; r > n; n++)
        if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(U, ' ').indexOf(t) >= 0)
          return !0;
      return !1;
    },
    val: function (e) {
      var n, r, i, o = this[0];
      {
        if (arguments.length)
          return i = x.isFunction(e), this.each(function (n) {
            var o;
            1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = '' : 'number' == typeof o ? o += '' : x.isArray(o) && (o = x.map(o, function (e) {
              return null == e ? '' : e + '';
            })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && 'set' in r && r.set(this, o, 'value') !== t || (this.value = o));
          });
        if (o)
          return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && 'get' in r && (n = r.get(o, 'value')) !== t ? n : (n = o.value, 'string' == typeof n ? n.replace(V, '') : null == n ? '' : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = x.find.attr(e, 'value');
          return null != t ? t : e.text;
        }
      },
      select: {
        get: function (e) {
          var t, n, r = e.options, i = e.selectedIndex, o = 'select-one' === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
          for (; s > l; l++)
            if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) || n.parentNode.disabled && x.nodeName(n.parentNode, 'optgroup'))) {
              if (t = x(n).val(), o)
                return t;
              a.push(t);
            }
          return a;
        },
        set: function (e, t) {
          var n, r, i = e.options, o = x.makeArray(t), a = i.length;
          while (a--)
            r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function (e, n, r) {
      var o, a, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && 'get' in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && 'set' in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ''), r) : (x.removeAttr(e, n), t));
    },
    removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(T);
      if (o && 1 === e.nodeType)
        while (n = o[i++])
          r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase('default-' + n)] = e[r] = !1 : x.attr(e, n, ''), e.removeAttribute(Q ? n : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!x.support.radioValue && 'radio' === t && x.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (e, n, r) {
      var i, o, a, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && 'set' in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && 'get' in o && null !== (i = o.get(e, n)) ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = x.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    }
  }), X = {
    set: function (e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase('default-' + n)] = e[n] = !0, n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;
    x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
      var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
      return x.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase('default-' + n)] ? n.toLowerCase() : null;
    };
  }), K && Q || (x.attrHooks.value = {
    set: function (e, n, r) {
      return x.nodeName(e, 'input') ? (e.defaultValue = n, t) : z && z.set(e, n, r);
    }
  }), Q || (z = {
    set: function (e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += '', 'value' === r || n === e.getAttribute(r) ? n : t;
    }
  }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
    var i;
    return r ? t : (i = e.getAttributeNode(n)) && '' !== i.value ? i.value : null;
  }, x.valHooks.button = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t;
    },
    set: z.set
  }, x.attrHooks.contenteditable = {
    set: function (e, t, n) {
      z.set(e, '' === t ? !1 : t, n);
    }
  }, x.each([
    'width',
    'height'
  ], function (e, n) {
    x.attrHooks[n] = {
      set: function (e, r) {
        return '' === r ? (e.setAttribute(n, 'auto'), r) : t;
      }
    };
  })), x.support.hrefNormalized || x.each([
    'href',
    'src'
  ], function (e, t) {
    x.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4);
      }
    };
  }), x.support.style || (x.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || t;
    },
    set: function (e, t) {
      return e.style.cssText = t + '';
    }
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), x.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.support.enctype || (x.propFix.enctype = 'encoding'), x.each([
    'radio',
    'checkbox'
  ], function () {
    x.valHooks[this] = {
      set: function (e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });
  var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
  function it() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function at() {
    try {
      return a.activeElement;
    } catch (e) {
    }
  }
  x.event = {
    global: {},
    add: function (e, n, r, o, a) {
      var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || '').match(T) || [''], u = n.length;
        while (u--)
          s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || '').split('.').sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
            type: g,
            origType: y,
            data: o,
            handler: r,
            guid: r.guid,
            selector: a,
            needsContext: a && x.expr.match.needsContext.test(a),
            namespace: m.join('.')
          }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent('on' + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
      if (m && (c = m.events)) {
        t = (t || '').match(T) || [''], u = t.length;
        while (u--)
          if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || '').split('.').sort(), d) {
            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), l = o = f.length;
            while (o--)
              a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ('**' !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
          } else
            for (d in c)
              x.event.remove(e, d + t[u], n, r, !0);
        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, 'events'));
      }
    },
    trigger: function (n, r, i, o) {
      var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, 'type') ? n.type : n, m = v.call(n, 'namespace') ? n.namespace.split('.') : [];
      if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf('.') >= 0 && (m = g.split('.'), g = m.shift(), m.sort()), l = 0 > g.indexOf(':') && 'on' + g, n = n[x.expando] ? n : new x.Event(g, 'object' == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join('.'), n.namespace_re = n.namespace ? RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
            h.push(u), f = u;
          f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }
        d = 0;
        while ((u = h[d++]) && !n.isPropagationStopped())
          n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, 'events') || {})[n.type] && x._data(u, 'handle'), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;
          try {
            i[g]();
          } catch (y) {
          }
          x.event.triggered = t, f && (i[l] = f);
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = x.event.fix(e);
      var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, 'events') || {})[e.type] || [], c = x.event.special[e.type] || {};
      if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;
        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;
          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
      if (l && u.nodeType && (!e.button || 'click' !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || 'click' !== e.type)) {
            for (o = [], a = 0; l > a; a++)
              i = n[a], r = i.selector + ' ', o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
            o.length && s.push({
              elem: u,
              handlers: o
            });
          }
      return n.length > l && s.push({
        elem: this,
        handlers: n.slice(l)
      }), s;
    },
    fix: function (e) {
      if (e[x.expando])
        return e;
      var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
      while (t--)
        n = r[t], e[n] = o[n];
      return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, n) {
        var r, i, o, s = n.button, l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== at() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {
            }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return x.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1) : t;
        },
        _default: function (e) {
          return x.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = 'on' + t;
    e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
  }, x.Event = function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
  }, x.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    }
  }, x.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.submitBubbles || (x.event.special.submit = {
    setup: function () {
      return x.nodeName(this, 'form') ? !1 : (x.event.add(this, 'click._submit keypress._submit', function (e) {
        var n = e.target, r = x.nodeName(n, 'input') || x.nodeName(n, 'button') ? n.form : t;
        r && !x._data(r, 'submitBubbles') && (x.event.add(r, 'submit._submit', function (e) {
          e._submit_bubble = !0;
        }), x._data(r, 'submitBubbles', !0));
      }), t);
    },
    postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate('submit', this.parentNode, e, !0));
    },
    teardown: function () {
      return x.nodeName(this, 'form') ? !1 : (x.event.remove(this, '._submit'), t);
    }
  }), x.support.changeBubbles || (x.event.special.change = {
    setup: function () {
      return Z.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (x.event.add(this, 'propertychange._change', function (e) {
        'checked' === e.originalEvent.propertyName && (this._just_changed = !0);
      }), x.event.add(this, 'click._change', function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate('change', this, e, !0);
      })), !1) : (x.event.add(this, 'beforeactivate._change', function (e) {
        var t = e.target;
        Z.test(t.nodeName) && !x._data(t, 'changeBubbles') && (x.event.add(t, 'change._change', function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate('change', this.parentNode, e, !0);
        }), x._data(t, 'changeBubbles', !0));
      }), t);
    },
    handle: function (e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || 'radio' !== n.type && 'checkbox' !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function () {
      return x.event.remove(this, '._change'), !Z.test(this.nodeName);
    }
  }), x.support.focusinBubbles || x.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = 0, r = function (e) {
        x.event.simulate(t, e.target, x.event.fix(e), !0);
      };
    x.event.special[t] = {
      setup: function () {
        0 === n++ && a.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && a.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function (e, n, r, i, o) {
      var a, s;
      if ('object' == typeof e) {
        'string' != typeof n && (r = r || n, n = t);
        for (a in e)
          this.on(a, n, r, e[a], o);
        return this;
      }
      if (null == r && null == i ? (i = n, r = n = t) : null == i && ('string' == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)
        i = ot;
      else if (!i)
        return this;
      return 1 === o && (s = i, i = function (e) {
        return x().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj)
        return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler), this;
      if ('object' == typeof e) {
        for (o in e)
          this.off(o, n, e[o]);
        return this;
      }
      return (n === !1 || 'function' == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, n) {
      var r = this[0];
      return r ? x.event.trigger(e, n, r, !0) : t;
    }
  });
  var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  x.fn.extend({
    find: function (e) {
      var t, n = [], r = this, i = r.length;
      if ('string' != typeof e)
        return this.pushStack(x(e).filter(function () {
          for (t = 0; i > t; t++)
            if (x.contains(r[t], this))
              return !0;
        }));
      for (t = 0; i > t; t++)
        x.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n;
    },
    has: function (e) {
      var t, n = x(e, this), r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++)
          if (x.contains(this, n[t]))
            return !0;
      });
    },
    not: function (e) {
      return this.pushStack(ft(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(ft(this, e || [], !1));
    },
    is: function (e) {
      return !!ft(this, 'string' == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], a = ut.test(e) || 'string' != typeof e ? x(e, t || this.context) : 0;
      for (; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function (e) {
      return e ? 'string' == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = 'string' == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function pt(e, t) {
    do
      e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }
  x.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return x.dir(e, 'parentNode');
    },
    parentsUntil: function (e, t, n) {
      return x.dir(e, 'parentNode', n);
    },
    next: function (e) {
      return pt(e, 'nextSibling');
    },
    prev: function (e) {
      return pt(e, 'previousSibling');
    },
    nextAll: function (e) {
      return x.dir(e, 'nextSibling');
    },
    prevAll: function (e) {
      return x.dir(e, 'previousSibling');
    },
    nextUntil: function (e, t, n) {
      return x.dir(e, 'nextSibling', n);
    },
    prevUntil: function (e, t, n) {
      return x.dir(e, 'previousSibling', n);
    },
    siblings: function (e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return x.sibling(e.firstChild);
    },
    contents: function (e) {
      return x.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), x.extend({
    filter: function (e, t, n) {
      var r = t[0];
      return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function (e, n, r) {
      var i = [], o = e[n];
      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))
        1 === o.nodeType && i.push(o), o = o[n];
      return i;
    },
    sibling: function (e, t) {
      var n = [];
      for (; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  });
  function ft(e, t, n) {
    if (x.isFunction(t))
      return x.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return x.grep(e, function (e) {
        return e === t !== n;
      });
    if ('string' == typeof t) {
      if (st.test(t))
        return x.filter(t, e, n);
      t = x.filter(t, e);
    }
    return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }
  function dt(e) {
    var t = ht.split('|'), n = e.createDocumentFragment();
    if (n.createElement)
      while (t.length)
        n.createElement(t.pop());
    return n;
  }
  var ht = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp('<(?:' + ht + ')[\\s/>]', 'i'), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      legend: [
        1,
        '<fieldset>',
        '</fieldset>'
      ],
      area: [
        1,
        '<map>',
        '</map>'
      ],
      param: [
        1,
        '<object>',
        '</object>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      col: [
        2,
        '<table><tbody></tbody><colgroup>',
        '</colgroup></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: x.support.htmlSerialize ? [
        0,
        '',
        ''
      ] : [
        1,
        'X<div>',
        '</div>'
      ]
    }, jt = dt(a), Dt = jt.appendChild(a.createElement('div'));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
    text: function (e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      var n, r = e ? x.filter(e, this) : this, i = 0;
      for (; null != (n = r[i]); i++)
        t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, 'script')), n.parentNode.removeChild(n));
      return this;
    },
    empty: function () {
      var e, t = 0;
      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));
        while (e.firstChild)
          e.removeChild(e.firstChild);
        e.options && x.nodeName(e, 'select') && (e.options.length = 0);
      }
      return this;
    },
    clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function (e) {
      return x.access(this, function (e) {
        var n = this[0] || {}, r = 0, i = this.length;
        if (e === t)
          return 1 === n.nodeType ? n.innerHTML.replace(gt, '') : t;
        if (!('string' != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || [
            '',
            ''
          ])[1].toLowerCase()])) {
          e = e.replace(vt, '<$1></$2>');
          try {
            for (; i > r; r++)
              n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
            n = 0;
          } catch (o) {
          }
        }
        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = x.map(this, function (e) {
          return [
            e.nextSibling,
            e.parentNode
          ];
        }), t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++], i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t, n) {
      e = d.apply([], e);
      var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
      if (g || !(1 >= c || 'string' != typeof h || x.support.checkClone) && Nt.test(h))
        return this.each(function (r) {
          var i = p.eq(r);
          g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
        });
      if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (a = x.map(Ft(l, 'script'), Ht), o = a.length; c > u; u++)
          i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, 'script'))), t.call(this[u], i, u);
        if (o)
          for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)
            i = a[u], kt.test(i.type || '') && !x._data(i, 'globalEval') && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || '').replace(St, '')));
        l = r = null;
      }
      return this;
    }
  });
  function Lt(e, t) {
    return x.nodeName(e, 'table') && x.nodeName(1 === t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }
  function Ht(e) {
    return e.type = (null !== x.find.attr(e, 'type')) + '/' + e.type, e;
  }
  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }
  function _t(e, t) {
    var n, r = 0;
    for (; null != (n = e[r]); r++)
      x._data(n, 'globalEval', !t || x._data(t[r], 'globalEval'));
  }
  function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s)
          for (r = 0, i = s[n].length; i > r; r++)
            x.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = x.extend({}, a.data));
    }
  }
  function Ot(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);
        for (r in i.events)
          x.removeEvent(t, r, i.handle);
        t.removeAttribute(x.expando);
      }
      'script' === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : 'object' === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : 'input' === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : 'option' === n ? t.defaultSelected = t.selected = e.defaultSelected : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
    }
  }
  x.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n, r = 0, i = [], o = x(e), a = o.length - 1;
      for (; a >= r; r++)
        n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
      return this.pushStack(i);
    };
  });
  function Ft(e, n) {
    var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || '*') : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || '*') : t;
    if (!s)
      for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)
        !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }
  function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }
  x.extend({
    clone: function (e, t, n) {
      var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
      if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test('<' + e.nodeName + '>') ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
        for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)
          r[a] && Ot(i, r[a]);
      if (t)
        if (n)
          for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)
            Mt(i, r[a]);
        else
          Mt(e, o);
      return r = Ft(o, 'script'), r.length > 0 && _t(r, !l && Ft(e, 'script')), r = s = i = null, o;
    },
    buildFragment: function (e, t, n, r) {
      var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
      for (; p > h; h++)
        if (o = e[h], o || 0 === o)
          if ('object' === x.type(o))
            x.merge(d, o.nodeType ? [o] : o);
          else if (wt.test(o)) {
            s = s || f.appendChild(t.createElement('div')), l = (bt.exec(o) || [
              '',
              ''
            ])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, '<$1></$2>') + c[2], i = c[0];
            while (i--)
              s = s.lastChild;
            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
              o = 'table' !== l || xt.test(o) ? '<table>' !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
              while (i--)
                x.nodeName(u = o.childNodes[i], 'tbody') && !u.childNodes.length && o.removeChild(u);
            }
            x.merge(d, s.childNodes), s.textContent = '';
            while (s.firstChild)
              s.removeChild(s.firstChild);
            s = f.lastChild;
          } else
            d.push(t.createTextNode(o));
      s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, 'input'), Bt), h = 0;
      while (o = d[h++])
        if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), 'script'), a && _t(s), n)) {
          i = 0;
          while (o = s[i++])
            kt.test(o.type || '') && n.push(o);
        }
      return s = null, f;
    },
    cleanData: function (e, t) {
      var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
      for (; null != (n = e[s]); s++)
        if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
          if (a.events)
            for (r in a.events)
              f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
        }
    },
    _evalUrl: function (e) {
      return x.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        'throws': !0
      });
    }
  }), x.fn.extend({
    wrapAll: function (e) {
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).wrapAll(e.call(this, t));
        });
      if (this[0]) {
        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;
          while (e.firstChild && 1 === e.firstChild.nodeType)
            e = e.firstChild;
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        x.nodeName(this, 'body') || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp('^(' + w + ')(.*)$', 'i'), Yt = RegExp('^(' + w + ')(?!px)[a-z%]+$', 'i'), Jt = RegExp('^([+-])=(' + w + ')', 'i'), Gt = { BODY: 'block' }, Qt = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, Kt = {
      letterSpacing: 0,
      fontWeight: 400
    }, Zt = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], en = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function tn(e, t) {
    if (t in e)
      return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
    while (i--)
      if (t = en[i] + n, t in e)
        return t;
    return r;
  }
  function nn(e, t) {
    return e = t || e, 'none' === x.css(e, 'display') || !x.contains(e.ownerDocument, e);
  }
  function rn(e, t) {
    var n, r, i, o = [], a = 0, s = e.length;
    for (; s > a; a++)
      r = e[a], r.style && (o[a] = x._data(r, 'olddisplay'), n = r.style.display, t ? (o[a] || 'none' !== n || (r.style.display = ''), '' === r.style.display && nn(r) && (o[a] = x._data(r, 'olddisplay', ln(r.nodeName)))) : o[a] || (i = nn(r), (n && 'none' !== n || !i) && x._data(r, 'olddisplay', i ? n : x.css(r, 'display'))));
    for (a = 0; s > a; a++)
      r = e[a], r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? o[a] || '' : 'none'));
    return e;
  }
  x.fn.extend({
    css: function (e, n) {
      return x.access(this, function (e, n, r) {
        var i, o, a = {}, s = 0;
        if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++)
            a[n[s]] = x.css(e, n[s], !1, o);
          return a;
        }
        return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function () {
      return rn(this, !0);
    },
    hide: function () {
      return rn(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        nn(this) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Wt(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { 'float': x.support.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, a, s, l = x.camelCase(n), u = e.style;
        if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)
          return s && 'get' in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
        if (a = typeof r, 'string' === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = 'number'), !(null == r || 'number' === a && isNaN(r) || ('number' !== a || x.cssNumber[l] || (r += 'px'), x.support.clearCloneStyle || '' !== r || 0 !== n.indexOf('background') || (u[n] = 'inherit'), s && 'set' in s && (r = s.set(e, r, i)) === t)))
          try {
            u[n] = r;
          } catch (c) {
          }
      }
    },
    css: function (e, n, r, i) {
      var o, a, s, l = x.camelCase(n);
      return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && 'get' in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), 'normal' === a && n in Kt && (a = Kt[n]), '' === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    }
  }), e.getComputedStyle ? (Rt = function (t) {
    return e.getComputedStyle(t, null);
  }, Wt = function (e, n, r) {
    var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
    return s && ('' !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : a.documentElement.currentStyle && (Rt = function (e) {
    return e.currentStyle;
  }, Wt = function (e, n, r) {
    var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
    return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = 'fontSize' === n ? '1em' : l, l = u.pixelLeft + 'px', u.left = i, a && (o.left = a)), '' === l ? 'auto' : l;
  });
  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }
  function an(e, t, n, r, i) {
    var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, a = 0;
    for (; 4 > o; o += 2)
      'margin' === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ('content' === n && (a -= x.css(e, 'padding' + Zt[o], !0, i)), 'margin' !== n && (a -= x.css(e, 'border' + Zt[o] + 'Width', !0, i))) : (a += x.css(e, 'padding' + Zt[o], !0, i), 'padding' !== n && (a += x.css(e, 'border' + Zt[o] + 'Width', !0, i)));
    return a;
  }
  function sn(e, t, n) {
    var r = !0, i = 'width' === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, o);
    if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))
        return i;
      r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }
    return i + an(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
  }
  function ln(e) {
    var t = a, n = Gt[e];
    return n || (n = un(e, t), 'none' !== n && n || (Pt = (Pt || x('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
  }
  function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], 'display');
    return n.remove(), r;
  }
  x.each([
    'height',
    'width'
  ], function (e, n) {
    x.cssHooks[n] = {
      get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, 'display')) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      },
      set: function (e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, i), i) : 0);
      }
    };
  }), x.support.opacity || (x.cssHooks.opacity = {
    get: function (e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : t ? '1' : '';
    },
    set: function (e, t) {
      var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '', o = r && r.filter || n.filter || '';
      n.zoom = 1, (t >= 1 || '' === t) && '' === x.trim(o.replace($t, '')) && n.removeAttribute && (n.removeAttribute('filter'), '' === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + ' ' + i);
    }
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function (e, n) {
        return n ? x.swap(e, { display: 'inline-block' }, Wt, [
          e,
          'marginRight'
        ]) : t;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each([
      'top',
      'left'
    ], function (e, n) {
      x.cssHooks[n] = {
        get: function (e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + 'px' : r) : t;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && 'none' === (e.style && e.style.display || x.css(e, 'display'));
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
        for (; 4 > r; r++)
          i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, Ut.test(e) || (x.cssHooks[e + t].set = on);
  });
  var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function () {
      return x.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = x.prop(this, 'elements');
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(':disabled') && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(fn, '\r\n')
          };
        }) : {
          name: t.name,
          value: n.replace(fn, '\r\n')
        };
      }).get();
    }
  }), x.param = function (e, n) {
    var r, i = [], o = function (e, t) {
        t = x.isFunction(t) ? t() : null == t ? '' : t, i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
      };
    if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))
      x.each(e, function () {
        o(this.name, this.value);
      });
    else
      for (r in e)
        gn(r, e[r], n, o);
    return i.join('&').replace(cn, '+');
  };
  function gn(e, t, n, r) {
    var i;
    if (x.isArray(t))
      x.each(t, function (t, i) {
        n || pn.test(e) ? r(e, i) : gn(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== x.type(t))
      r(e, t);
    else
      for (i in t)
        gn(e + '[' + i + ']', t[i], n, r);
  }
  x.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
    }
  });
  var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = '*/'.concat('*');
  try {
    yn = o.href;
  } catch (Ln) {
    yn = a.createElement('a'), yn.href = '', yn = yn.href;
  }
  mn = En.exec(yn.toLowerCase()) || [];
  function Hn(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r, i = 0, o = t.toLowerCase().match(T) || [];
      if (x.isFunction(n))
        while (r = o[i++])
          '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function qn(e, n, r, i) {
    var o = {}, a = e === jn;
    function s(l) {
      var u;
      return o[l] = !0, x.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);
        return 'string' != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }
    return s(n.dataTypes[0]) || !o['*'] && s('*');
  }
  function _n(e, n) {
    var r, i, o = x.ajaxSettings.flatOptions || {};
    for (i in n)
      n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    return r && x.extend(!0, e, r), e;
  }
  x.fn.load = function (e, n, r) {
    if ('string' != typeof e && Sn)
      return Sn.apply(this, arguments);
    var i, o, a, s = this, l = e.indexOf(' ');
    return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && 'object' == typeof n && (a = 'POST'), s.length > 0 && x.ajax({
      url: e,
      type: a,
      dataType: 'html',
      data: n
    }).done(function (e) {
      o = arguments, s.html(i ? x('<div>').append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [
        e.responseText,
        t,
        e
      ]);
    }), this;
  }, x.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: 'GET',
      isLocal: Cn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Dn,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': x.parseJSON,
        'text xml': x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function (e, n) {
      'object' == typeof e && (n = e, e = t), n = n || {};
      var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks('once memory'), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = 'canceled', C = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!c) {
                c = {};
                while (t = Tn.exec(a))
                  c[t[1].toLowerCase()] = t[2];
              }
              t = c[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === b ? a : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (e = v[n] = v[n] || e, y[e] = t), this;
          },
          overrideMimeType: function (e) {
            return b || (p.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > b)
                for (t in e)
                  m[t] = [
                    m[t],
                    e[t]
                  ];
              else
                C.always(e[C.status]);
            return this;
          },
          abort: function (e) {
            var t = e || w;
            return u && u.abort(t), k(0, t), this;
          }
        };
      if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + '').replace(xn, '').replace(kn, mn[1] + '//'), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || '*').toLowerCase().match(T) || [''], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ('http:' === r[1] ? '80' : '443')) === (mn[3] || ('http:' === mn[1] ? '80' : '443')))), p.data && p.processData && 'string' != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)
        return C;
      l = p.global, l && 0 === x.active++ && x.event.trigger('ajaxStart'), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? '&' : '?') + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, '$1_=' + vn++) : o + (bn.test(o) ? '&' : '?') + '_=' + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader('If-Modified-Since', x.lastModified[o]), x.etag[o] && C.setRequestHeader('If-None-Match', x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader('Content-Type', p.contentType), C.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Dn + '; q=0.01' : '') : p.accepts['*']);
      for (i in p.headers)
        C.setRequestHeader(i, p.headers[i]);
      if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))
        return C.abort();
      w = 'abort';
      for (i in {
          success: 1,
          error: 1,
          complete: 1
        })
        C[i](p[i]);
      if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger('ajaxSend', [
          C,
          p
        ]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          C.abort('timeout');
        }, p.timeout));
        try {
          b = 1, u.send(y, k);
        } catch (N) {
          if (!(2 > b))
            throw N;
          k(-1, N);
        }
      } else
        k(-1, 'No Transport');
      function k(e, n, r, i) {
        var c, y, v, w, T, N = n;
        2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || '', C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader('Last-Modified'), T && (x.lastModified[o] = T), T = C.getResponseHeader('etag'), T && (x.etag[o] = T)), 204 === e || 'HEAD' === p.type ? N = 'nocontent' : 304 === e ? N = 'notmodified' : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = 'error', 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + '', c ? h.resolveWith(f, [
          y,
          N,
          C
        ]) : h.rejectWith(f, [
          C,
          N,
          v
        ]), C.statusCode(m), m = t, l && d.trigger(c ? 'ajaxSuccess' : 'ajaxError', [
          C,
          p,
          c ? y : v
        ]), g.fireWith(f, [
          C,
          N
        ]), l && (d.trigger('ajaxComplete', [
          C,
          p
        ]), --x.active || x.event.trigger('ajaxStop')));
      }
      return C;
    },
    getJSON: function (e, t, n) {
      return x.get(e, t, n, 'json');
    },
    getScript: function (e, n) {
      return x.get(e, t, n, 'script');
    }
  }), x.each([
    'get',
    'post'
  ], function (e, n) {
    x[n] = function (e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      });
    };
  });
  function Mn(e, n, r) {
    var i, o, a, s, l = e.contents, u = e.dataTypes;
    while ('*' === u[0])
      u.shift(), o === t && (o = e.mimeType || n.getResponseHeader('Content-Type'));
    if (o)
      for (s in l)
        if (l[s] && l[s].test(o)) {
          u.unshift(s);
          break;
        }
    if (u[0] in r)
      a = u[0];
    else {
      for (s in r) {
        if (!u[0] || e.converters[s + ' ' + u[0]]) {
          a = s;
          break;
        }
        i || (i = s);
      }
      a = a || i;
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }
  function On(e, t, n, r) {
    var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters)
        u[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
        if ('*' === o)
          o = l;
        else if ('*' !== l && l !== o) {
          if (a = u[l + ' ' + o] || u['* ' + o], !a)
            for (i in u)
              if (s = i.split(' '), s[1] === o && (a = u[l + ' ' + s[0]] || u['* ' + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break;
              }
          if (a !== !0)
            if (a && e['throws'])
              t = a(t);
            else
              try {
                t = a(t);
              } catch (p) {
                return {
                  state: 'parsererror',
                  error: a ? p : 'No conversion from ' + l + ' to ' + o
                };
              }
        }
    return {
      state: 'success',
      data: t
    };
  }
  x.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter('script', function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = 'GET', e.global = !1);
  }), x.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var n, r = a.head || x('head')[0] || a.documentElement;
      return {
        send: function (t, i) {
          n = a.createElement('script'), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, 'success'));
          }, r.insertBefore(n, r.firstChild);
        },
        abort: function () {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Fn.pop() || x.expando + '_' + vn++;
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter('json jsonp', function (n, r, i) {
    var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? 'url' : 'string' == typeof n.data && !(n.contentType || '').indexOf('application/x-www-form-urlencoded') && Bn.test(n.data) && 'data');
    return l || 'jsonp' === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, '$1' + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? '&' : '?') + n.jsonp + '=' + o), n.converters['script json'] = function () {
      return s || x.error(o + ' was not called'), s[0];
    }, n.dataTypes[0] = 'json', a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
    }), 'script') : t;
  });
  var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
      var e;
      for (e in Pn)
        Pn[e](t, !0);
    };
  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {
    }
  }
  function zn() {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP');
    } catch (t) {
    }
  }
  x.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && 'withCredentials' in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var r;
      return {
        send: function (i, o) {
          var a, s, l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
            for (s in n.xhrFields)
              l[s] = n.xhrFields[s];
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
          try {
            for (s in i)
              l.setRequestHeader(s, i[s]);
          } catch (u) {
          }
          l.send(n.hasContent && n.data || null), r = function (e, i) {
            var s, u, c, p;
            try {
              if (r && (i || 4 === l.readyState))
                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)
                  4 !== l.readyState && l.abort();
                else {
                  p = {}, s = l.status, u = l.getAllResponseHeaders(), 'string' == typeof l.responseText && (p.text = l.responseText);
                  try {
                    c = l.statusText;
                  } catch (f) {
                    c = '';
                  }
                  s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
                }
            } catch (d) {
              i || o(-1, d);
            }
            p && o(s, c, p, u);
          }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r();
        },
        abort: function () {
          r && r(t, !0);
        }
      };
    }
  });
  var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp('^(?:([+-])=|)(' + w + ')([a-z%]*)$', 'i'), Jn = /queueHooks$/, Gn = [nr], Qn = {
      '*': [function (e, t) {
          var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? '' : 'px'), a = (x.cssNumber[e] || 'px' !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
          if (a && a[3] !== o) {
            o = o || a[3], i = i || [], a = +r || 1;
            do
              s = s || '.5', a /= s, x.style(n.elem, e, a + o);
            while (s !== (s = n.cur() / r) && 1 !== s && --l);
          }
          return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
        }]
    };
  function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = x.now();
  }
  function Zn(e, t, n) {
    var r, i = (Qn[t] || []).concat(Qn['*']), o = 0, a = i.length;
    for (; a > o; o++)
      if (r = i[o].call(n, t, e))
        return r;
  }
  function er(e, t, n) {
    var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
        delete l.elem;
      }), l = function () {
        if (i)
          return !1;
        var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
        for (; l > a; a++)
          u.tweens[a].run(o);
        return s.notifyWith(e, [
          u,
          o,
          n
        ]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
      }, u = s.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Xn || Kn(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0, r = t ? u.tweens.length : 0;
          if (i)
            return this;
          for (i = !0; r > n; n++)
            u.tweens[n].run(1);
          return t ? s.resolveWith(e, [
            u,
            t
          ]) : s.rejectWith(e, [
            u,
            t
          ]), this;
        }
      }), c = u.props;
    for (tr(c, u.opts.specialEasing); a > o; o++)
      if (r = Gn[o].call(u, e, c, u.opts))
        return r;
    return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }
  function tr(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && 'expand' in a) {
        o = a.expand(o), delete e[r];
        for (n in o)
          n in e || (e[n] = o[n], t[n] = i);
      } else
        t[r] = i;
  }
  x.Animation = x.extend(er, {
    tweener: function (e, t) {
      x.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' ');
      var n, r = 0, i = e.length;
      for (; i > r; r++)
        n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    }
  });
  function nr(e, t, n) {
    var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, 'fxshow');
    n.queue || (s = x._queueHooks(e, 'fx'), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, 'fx').length || s.empty.fire();
      });
    })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [
      p.overflow,
      p.overflowX,
      p.overflowY
    ], 'inline' === x.css(e, 'display') && 'none' === x.css(e, 'float') && (x.support.inlineBlockNeedsLayout && 'inline' !== ln(e.nodeName) ? p.zoom = 1 : p.display = 'inline-block')), n.overflow && (p.overflow = 'hidden', x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));
    for (r in t)
      if (i = t[r], Vn.exec(i)) {
        if (delete t[r], o = o || 'toggle' === i, i === (f ? 'hide' : 'show'))
          continue;
        c[r] = d && d[r] || x.style(e, r);
      }
    if (!x.isEmptyObject(c)) {
      d ? 'hidden' in d && (f = d.hidden) : d = x._data(e, 'fxshow', {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;
        x._removeData(e, 'fxshow');
        for (t in c)
          x.style(e, t, c[t]);
      });
      for (r in c)
        a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = 'width' === r || 'height' === r ? 1 : 0));
    }
  }
  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }
  x.Tween = rr, rr.prototype = {
    constructor: rr,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? '' : 'px');
    },
    cur: function () {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    },
    run: function (e) {
      var t, n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each([
    'toggle',
    'show',
    'hide'
  ], function (e, t) {
    var n = x.fn[t];
    x.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(nn).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
          var t = er(this, x.extend({}, e), o);
          (i || x._data(this, 'finish')) && t.stop(!0);
        };
      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, n, r) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(r);
      };
      return 'string' != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || 'fx', []), this.each(function () {
        var t = !0, n = null != e && e + 'queueHooks', o = x.timers, a = x._data(this);
        if (n)
          a[n] && a[n].stop && i(a[n]);
        else
          for (n in a)
            a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        for (n = o.length; n--;)
          o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        (t || !r) && x.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = e || 'fx'), this.each(function () {
        var t, n = x._data(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = x.timers, a = r ? r.length : 0;
        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; a > t; t++)
          r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  });
  function ir(e, t) {
    var n, r = { height: e }, i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      n = Zt[i], r['margin' + n] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  x.each({
    slideDown: ir('show'),
    slideUp: ir('hide'),
    slideToggle: ir('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? x.extend({}, e) : {
        complete: n || !n && t || x.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !x.isFunction(t) && t
      };
    return r.duration = x.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
    var e, n = x.timers, r = 0;
    for (Xn = x.now(); n.length > r; r++)
      e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    n.length || x.fx.stop(), Xn = t;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length)
      return e === t ? this : this.each(function (t) {
        x.offset.setOffset(this, e, t);
      });
    var n, r, o = {
        top: 0,
        left: 0
      }, a = this[0], s = a && a.ownerDocument;
    if (s)
      return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
        top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
        left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
      }) : o;
  }, x.offset = {
    setOffset: function (e, t, n) {
      var r = x.css(e, 'position');
      'static' === r && (e.style.position = 'relative');
      var i = x(e), o = i.offset(), a = x.css(e, 'top'), s = x.css(e, 'left'), l = ('absolute' === r || 'fixed' === r) && x.inArray('auto', [
          a,
          s
        ]) > -1, u = {}, c = {}, p, f;
      l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), 'using' in t ? t.using.call(e, u) : i.css(u);
    }
  }, x.fn.extend({
    position: function () {
      if (this[0]) {
        var e, t, n = {
            top: 0,
            left: 0
          }, r = this[0];
        return 'fixed' === x.css(r, 'position') ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], 'html') || (n = e.offset()), n.top += x.css(e[0], 'borderTopWidth', !0), n.left += x.css(e[0], 'borderLeftWidth', !0)), {
          top: t.top - n.top - x.css(r, 'marginTop', !0),
          left: t.left - n.left - x.css(r, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent || s;
        while (e && !x.nodeName(e, 'html') && 'static' === x.css(e, 'position'))
          e = e.offsetParent;
        return e || s;
      });
    }
  }), x.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (e, n) {
    var r = /Y/.test(n);
    x.fn[e] = function (i) {
      return x.access(this, function (e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });
  function or(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }
  x.each({
    Height: 'height',
    Width: 'width'
  }, function (e, n) {
    x.each({
      padding: 'inner' + e,
      content: n,
      '': 'outer' + e
    }, function (r, i) {
      x.fn[i] = function (i, o) {
        var a = arguments.length && (r || 'boolean' != typeof i), s = r || (i === !0 || o === !0 ? 'margin' : 'border');
        return x.access(this, function (n, r, i) {
          var o;
          return x.isWindow(n) ? n.document.documentElement['client' + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body['scroll' + e], o['scroll' + e], n.body['offset' + e], o['offset' + e], o['client' + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, 'object' == typeof module && module && 'object' == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, 'function' == typeof define && define.amd && define('jquery', [], function () {
    return x;
  }));
}(window));
/*! jQuery UI - v1.10.4 - 2014-04-02
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function (e, t) {
  function i(t, i) {
    var s, a, o, r = t.nodeName.toLowerCase();
    return 'area' === r ? (s = t.parentNode, a = s.name, t.href && a && 'map' === s.nodeName.toLowerCase() ? (o = e('img[usemap=#' + a + ']')[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : 'a' === r ? t.href || i : i) && n(t);
  }
  function n(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return 'hidden' === e.css(this, 'visibility');
    }).length;
  }
  var s = 0, a = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: '1.10.4',
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    focus: function (t) {
      return function (i, n) {
        return 'number' == typeof i ? this.each(function () {
          var t = this;
          setTimeout(function () {
            e(t).focus(), n && n.call(t);
          }, i);
        }) : t.apply(this, arguments);
      };
    }(e.fn.focus),
    scrollParent: function () {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css('position')) || /absolute/.test(this.css('position')) ? this.parents().filter(function () {
        return /(relative|absolute|fixed)/.test(e.css(this, 'position')) && /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'));
      }).eq(0) : this.parents().filter(function () {
        return /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'));
      }).eq(0), /fixed/.test(this.css('position')) || !t.length ? e(document) : t;
    },
    zIndex: function (i) {
      if (i !== t)
        return this.css('zIndex', i);
      if (this.length)
        for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
          if (n = a.css('position'), ('absolute' === n || 'relative' === n || 'fixed' === n) && (s = parseInt(a.css('zIndex'), 10), !isNaN(s) && 0 !== s))
            return s;
          a = a.parent();
        }
      return 0;
    },
    uniqueId: function () {
      return this.each(function () {
        this.id || (this.id = 'ui-id-' + ++s);
      });
    },
    removeUniqueId: function () {
      return this.each(function () {
        a.test(this.id) && e(this).removeAttr('id');
      });
    }
  }), e.extend(e.expr[':'], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t);
      };
    }) : function (t, i, n) {
      return !!e.data(t, n[3]);
    },
    focusable: function (t) {
      return i(t, !isNaN(e.attr(t, 'tabindex')));
    },
    tabbable: function (t) {
      var n = e.attr(t, 'tabindex'), s = isNaN(n);
      return (s || n >= 0) && i(t, !s);
    }
  }), e('<a>').outerWidth(1).jquery || e.each([
    'Width',
    'Height'
  ], function (i, n) {
    function s(t, i, n, s) {
      return e.each(a, function () {
        i -= parseFloat(e.css(t, 'padding' + this)) || 0, n && (i -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0), s && (i -= parseFloat(e.css(t, 'margin' + this)) || 0);
      }), i;
    }
    var a = 'Width' === n ? [
        'Left',
        'Right'
      ] : [
        'Top',
        'Bottom'
      ], o = n.toLowerCase(), r = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
    e.fn['inner' + n] = function (i) {
      return i === t ? r['inner' + n].call(this) : this.each(function () {
        e(this).css(o, s(this, i) + 'px');
      });
    }, e.fn['outer' + n] = function (t, i) {
      return 'number' != typeof t ? r['outer' + n].call(this, t) : this.each(function () {
        e(this).css(o, s(this, t, !0, i) + 'px');
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }), e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
    };
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = 'onselectstart' in document.createElement('div'), e.fn.extend({
    disableSelection: function () {
      return this.bind((e.support.selectstart ? 'selectstart' : 'mousedown') + '.ui-disableSelection', function (e) {
        e.preventDefault();
      });
    },
    enableSelection: function () {
      return this.unbind('.ui-disableSelection');
    }
  }), e.extend(e.ui, {
    plugin: {
      add: function (t, i, n) {
        var s, a = e.ui[t].prototype;
        for (s in n)
          a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([
            i,
            n[s]
          ]);
      },
      call: function (e, t, i) {
        var n, s = e.plugins[t];
        if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
          for (n = 0; s.length > n; n++)
            e.options[s[n][0]] && s[n][1].apply(e.element, i);
      }
    },
    hasScroll: function (t, i) {
      if ('hidden' === e(t).css('overflow'))
        return !1;
      var n = i && 'left' === i ? 'scrollLeft' : 'scrollTop', s = !1;
      return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s);
    }
  });
}(jQuery));
(function (t, e) {
  var i = 0, s = Array.prototype.slice, n = t.cleanData;
  t.cleanData = function (e) {
    for (var i, s = 0; null != (i = e[s]); s++)
      try {
        t(i).triggerHandler('remove');
      } catch (o) {
      }
    n(e);
  }, t.widget = function (i, s, n) {
    var o, a, r, h, l = {}, c = i.split('.')[0];
    i = i.split('.')[1], o = c + '-' + i, n || (n = s, s = t.Widget), t.expr[':'][o.toLowerCase()] = function (e) {
      return !!t.data(e, o);
    }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
      return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i);
    }, t.extend(r, a, {
      version: n.version,
      _proto: t.extend({}, n),
      _childConstructors: []
    }), h = new s(), h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
      return t.isFunction(n) ? (l[i] = function () {
        var t = function () {
            return s.prototype[i].apply(this, arguments);
          }, e = function (t) {
            return s.prototype[i].apply(this, t);
          };
        return function () {
          var i, s = this._super, o = this._superApply;
          return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i;
        };
      }(), e) : (l[i] = n, e);
    }), r.prototype = t.widget.extend(h, { widgetEventPrefix: a ? h.widgetEventPrefix || i : i }, l, {
      constructor: r,
      namespace: c,
      widgetName: i,
      widgetFullName: o
    }), a ? (t.each(a._childConstructors, function (e, i) {
      var s = i.prototype;
      t.widget(s.namespace + '.' + s.widgetName, r, i._proto);
    }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r);
  }, t.widget.extend = function (i) {
    for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
      for (n in a[r])
        o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
    return i;
  }, t.widget.bridge = function (i, n) {
    var o = n.prototype.widgetFullName || i;
    t.fn[i] = function (a) {
      var r = 'string' == typeof a, h = s.call(arguments, 1), l = this;
      return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
        var s, n = t.data(this, o);
        return n ? t.isFunction(n[a]) && '_' !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error('no such method \'' + a + '\' for ' + i + ' widget instance') : t.error('cannot call methods on ' + i + ' prior to initialization; ' + 'attempted to call method \'' + a + '\'');
      }) : this.each(function () {
        var e = t.data(this, o);
        e ? e.option(a || {})._init() : t.data(this, o, new n(a, this));
      }), l;
    };
  }, t.Widget = function () {
  }, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: 'widget',
    widgetEventPrefix: '',
    defaultElement: '<div>',
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function (e, s) {
      s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = '.' + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (t) {
          t.target === s && this.destroy();
        }
      }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger('create', null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: t.noop,
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function () {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ' + 'ui-state-disabled'), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus');
    },
    _destroy: t.noop,
    widget: function () {
      return this.element;
    },
    option: function (i, s) {
      var n, o, a, r = i;
      if (0 === arguments.length)
        return t.widget.extend({}, this.options);
      if ('string' == typeof i)
        if (r = {}, n = i.split('.'), i = n.shift(), n.length) {
          for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)
            o[n[a]] = o[n[a]] || {}, o = o[n[a]];
          if (i = n.pop(), 1 === arguments.length)
            return o[i] === e ? null : o[i];
          o[i] = s;
        } else {
          if (1 === arguments.length)
            return this.options[i] === e ? null : this.options[i];
          r[i] = s;
        }
      return this._setOptions(r), this;
    },
    _setOptions: function (t) {
      var e;
      for (e in t)
        this._setOption(e, t[e]);
      return this;
    },
    _setOption: function (t, e) {
      return this.options[t] = e, 'disabled' === t && (this.widget().toggleClass(this.widgetFullName + '-disabled ui-state-disabled', !!e).attr('aria-disabled', e), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus')), this;
    },
    enable: function () {
      return this._setOption('disabled', !1);
    },
    disable: function () {
      return this._setOption('disabled', !0);
    },
    _on: function (i, s, n) {
      var o, a = this;
      'boolean' != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
        function h() {
          return i || a.options.disabled !== !0 && !t(this).hasClass('ui-state-disabled') ? ('string' == typeof r ? a[r] : r).apply(a, arguments) : e;
        }
        'string' != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
        var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
        u ? o.delegate(u, c, h) : s.bind(c, h);
      });
    },
    _off: function (t, e) {
      e = (e || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace, t.unbind(e).undelegate(e);
    },
    _delay: function (t, e) {
      function i() {
        return ('string' == typeof t ? s[t] : t).apply(s, arguments);
      }
      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable: function (e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function (e) {
          t(e.currentTarget).addClass('ui-state-hover');
        },
        mouseleave: function (e) {
          t(e.currentTarget).removeClass('ui-state-hover');
        }
      });
    },
    _focusable: function (e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function (e) {
          t(e.currentTarget).addClass('ui-state-focus');
        },
        focusout: function (e) {
          t(e.currentTarget).removeClass('ui-state-focus');
        }
      });
    },
    _trigger: function (e, i, s) {
      var n, o, a = this.options[e];
      if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
        for (n in o)
          n in i || (i[n] = o[n]);
      return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, t.each({
    show: 'fadeIn',
    hide: 'fadeOut'
  }, function (e, i) {
    t.Widget.prototype['_' + e] = function (s, n, o) {
      'string' == typeof n && (n = { effect: n });
      var a, r = n ? n === !0 || 'number' == typeof n ? i : n.effect || i : e;
      n = n || {}, 'number' == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  });
}(jQuery));
(function (t) {
  var e = !1;
  t(document).mouseup(function () {
    e = !1;
  }), t.widget('ui.mouse', {
    version: '1.10.4',
    options: {
      cancel: 'input,textarea,button,select,option',
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var e = this;
      this.element.bind('mousedown.' + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).bind('click.' + this.widgetName, function (i) {
        return !0 === t.data(i.target, e.widgetName + '.preventClickEvent') ? (t.removeData(i.target, e.widgetName + '.preventClickEvent'), i.stopImmediatePropagation(), !1) : undefined;
      }), this.started = !1;
    },
    _mouseDestroy: function () {
      this.element.unbind('.' + this.widgetName), this._mouseMoveDelegate && t(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function (i) {
      if (!e) {
        this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
        var s = this, n = 1 === i.which, a = 'string' == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
        return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          s.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + '.preventClickEvent') && t.removeData(i.target, this.widgetName + '.preventClickEvent'), this._mouseMoveDelegate = function (t) {
          return s._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return s._mouseUp(t);
        }, t(document).bind('mousemove.' + this.widgetName, this._mouseMoveDelegate).bind('mouseup.' + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0;
      }
    },
    _mouseMove: function (e) {
      return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    },
    _mouseUp: function (e) {
      return t(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(e)), !1;
    },
    _mouseDistanceMet: function (t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet;
    },
    _mouseStart: function () {
    },
    _mouseDrag: function () {
    },
    _mouseStop: function () {
    },
    _mouseCapture: function () {
      return !0;
    }
  });
}(jQuery));
(function (t, e) {
  function i(t, e, i) {
    return [
      parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)
    ];
  }
  function s(e, i) {
    return parseInt(t.css(e, i), 10) || 0;
  }
  function n(e) {
    var i = e[0];
    return 9 === i.nodeType ? {
      width: e.width(),
      height: e.height(),
      offset: {
        top: 0,
        left: 0
      }
    } : t.isWindow(i) ? {
      width: e.width(),
      height: e.height(),
      offset: {
        top: e.scrollTop(),
        left: e.scrollLeft()
      }
    } : i.preventDefault ? {
      width: 0,
      height: 0,
      offset: {
        top: i.pageY,
        left: i.pageX
      }
    } : {
      width: e.outerWidth(),
      height: e.outerHeight(),
      offset: e.offset()
    };
  }
  t.ui = t.ui || {};
  var a, o = Math.max, r = Math.abs, l = Math.round, h = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
  t.position = {
    scrollbarWidth: function () {
      if (a !== e)
        return a;
      var i, s, n = t('<div style=\'display:block;position:absolute;width:50px;height:50px;overflow:hidden;\'><div style=\'height:100px;width:auto;\'></div></div>'), o = n.children()[0];
      return t('body').append(n), i = o.offsetWidth, n.css('overflow', 'scroll'), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s;
    },
    getScrollInfo: function (e) {
      var i = e.isWindow || e.isDocument ? '' : e.element.css('overflow-x'), s = e.isWindow || e.isDocument ? '' : e.element.css('overflow-y'), n = 'scroll' === i || 'auto' === i && e.width < e.element[0].scrollWidth, a = 'scroll' === s || 'auto' === s && e.height < e.element[0].scrollHeight;
      return {
        width: a ? t.position.scrollbarWidth() : 0,
        height: n ? t.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function (e) {
      var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
      return {
        element: i,
        isWindow: s,
        isDocument: n,
        offset: i.offset() || {
          left: 0,
          top: 0
        },
        scrollLeft: i.scrollLeft(),
        scrollTop: i.scrollTop(),
        width: s ? i.width() : i.outerWidth(),
        height: s ? i.height() : i.outerHeight()
      };
    }
  }, t.fn.position = function (e) {
    if (!e || !e.of)
      return f.apply(this, arguments);
    e = t.extend({}, e);
    var a, p, g, m, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), k = t.position.getScrollInfo(y), w = (e.collision || 'flip').split(' '), D = {};
    return _ = n(b), b[0].preventDefault && (e.at = 'left top'), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each([
      'my',
      'at'
    ], function () {
      var t, i, s = (e[this] || '').split(' ');
      1 === s.length && (s = h.test(s[0]) ? s.concat(['center']) : c.test(s[0]) ? ['center'].concat(s) : [
        'center',
        'center'
      ]), s[0] = h.test(s[0]) ? s[0] : 'center', s[1] = c.test(s[1]) ? s[1] : 'center', t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [
        t ? t[0] : 0,
        i ? i[0] : 0
      ], e[this] = [
        d.exec(s[0])[0],
        d.exec(s[1])[0]
      ];
    }), 1 === w.length && (w[1] = w[0]), 'right' === e.at[0] ? v.left += p : 'center' === e.at[0] && (v.left += p / 2), 'bottom' === e.at[1] ? v.top += g : 'center' === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function () {
      var n, h, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, 'marginLeft'), _ = s(this, 'marginTop'), x = u + f + s(this, 'marginRight') + k.width, C = d + _ + s(this, 'marginBottom') + k.height, M = t.extend({}, v), T = i(D.my, c.outerWidth(), c.outerHeight());
      'right' === e.my[0] ? M.left -= u : 'center' === e.my[0] && (M.left -= u / 2), 'bottom' === e.my[1] ? M.top -= d : 'center' === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {
        marginLeft: f,
        marginTop: _
      }, t.each([
        'left',
        'top'
      ], function (i, s) {
        t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {
          targetWidth: p,
          targetHeight: g,
          elemWidth: u,
          elemHeight: d,
          collisionPosition: n,
          collisionWidth: x,
          collisionHeight: C,
          offset: [
            a[0] + T[0],
            a[1] + T[1]
          ],
          my: e.my,
          at: e.at,
          within: y,
          elem: c
        });
      }), e.using && (h = function (t) {
        var i = m.left - M.left, s = i + p - u, n = m.top - M.top, a = n + g - d, l = {
            target: {
              element: b,
              left: m.left,
              top: m.top,
              width: p,
              height: g
            },
            element: {
              element: c,
              left: M.left,
              top: M.top,
              width: u,
              height: d
            },
            horizontal: 0 > s ? 'left' : i > 0 ? 'right' : 'center',
            vertical: 0 > a ? 'top' : n > 0 ? 'bottom' : 'middle'
          };
        u > p && p > r(i + s) && (l.horizontal = 'center'), d > g && g > r(n + a) && (l.vertical = 'middle'), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? 'horizontal' : 'vertical', e.using.call(this, t, l);
      }), c.offset(t.extend(M, { using: h }));
    });
  }, t.ui.position = {
    fit: {
      left: function (t, e) {
        var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
        e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left);
      },
      top: function (t, e) {
        var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
        e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top);
      }
    },
    flip: {
      left: function (t, e) {
        var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - o - l, d = 'left' === e.my[0] ? -e.elemWidth : 'right' === e.my[0] ? e.elemWidth : 0, p = 'left' === e.at[0] ? e.targetWidth : 'right' === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
        0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f));
      },
      top: function (t, e) {
        var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - o - l, d = 'top' === e.my[1], p = d ? -e.elemHeight : 'bottom' === e.my[1] ? e.elemHeight : 0, f = 'top' === e.at[1] ? e.targetHeight : 'bottom' === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
        0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g));
      }
    },
    flipfit: {
      left: function () {
        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
      },
      top: function () {
        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
      }
    }
  }, function () {
    var e, i, s, n, a, o = document.getElementsByTagName('body')[0], r = document.createElement('div');
    e = document.createElement(o ? 'div' : 'body'), s = {
      visibility: 'hidden',
      width: 0,
      height: 0,
      border: 0,
      margin: 0,
      background: 'none'
    }, o && t.extend(s, {
      position: 'absolute',
      left: '-1000px',
      top: '-1000px'
    });
    for (a in s)
      e.style[a] = s[a];
    e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = 'position: absolute; left: 10.7432222px;', n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = '', i.removeChild(e);
  }();
}(jQuery));
(function (e) {
  var t = 0, i = {}, a = {};
  i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = 'hide', a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = 'show', e.widget('ui.accordion', {
    version: '1.10.4',
    options: {
      active: 0,
      animate: {},
      collapsible: !1,
      event: 'click',
      header: '> li > :first-child,> :not(li):even',
      heightStyle: 'auto',
      icons: {
        activeHeader: 'ui-icon-triangle-1-s',
        header: 'ui-icon-triangle-1-e'
      },
      activate: null,
      beforeActivate: null
    },
    _create: function () {
      var t = this.options;
      this.prevShow = this.prevHide = e(), this.element.addClass('ui-accordion ui-widget ui-helper-reset').attr('role', 'tablist'), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function () {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : e(),
        content: this.active.length ? this.active.next() : e()
      };
    },
    _createIcons: function () {
      var t = this.options.icons;
      t && (e('<span>').addClass('ui-accordion-header-icon ui-icon ' + t.header).prependTo(this.headers), this.active.children('.ui-accordion-header-icon').removeClass(t.header).addClass(t.activeHeader), this.headers.addClass('ui-accordion-icons'));
    },
    _destroyIcons: function () {
      this.headers.removeClass('ui-accordion-icons').children('.ui-accordion-header-icon').remove();
    },
    _destroy: function () {
      var e;
      this.element.removeClass('ui-accordion ui-widget ui-helper-reset').removeAttr('role'), this.headers.removeClass('ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top').removeAttr('role').removeAttr('aria-expanded').removeAttr('aria-selected').removeAttr('aria-controls').removeAttr('tabIndex').each(function () {
        /^ui-accordion/.test(this.id) && this.removeAttribute('id');
      }), this._destroyIcons(), e = this.headers.next().css('display', '').removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby').removeClass('ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled').each(function () {
        /^ui-accordion/.test(this.id) && this.removeAttribute('id');
      }), 'content' !== this.options.heightStyle && e.css('height', '');
    },
    _setOption: function (e, t) {
      return 'active' === e ? (this._activate(t), undefined) : ('event' === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), 'collapsible' !== e || t || this.options.active !== !1 || this._activate(0), 'icons' === e && (this._destroyIcons(), t && this._createIcons()), 'disabled' === e && this.headers.add(this.headers.next()).toggleClass('ui-state-disabled', !!t), undefined);
    },
    _keydown: function (t) {
      if (!t.altKey && !t.ctrlKey) {
        var i = e.ui.keyCode, a = this.headers.length, s = this.headers.index(t.target), n = !1;
        switch (t.keyCode) {
        case i.RIGHT:
        case i.DOWN:
          n = this.headers[(s + 1) % a];
          break;
        case i.LEFT:
        case i.UP:
          n = this.headers[(s - 1 + a) % a];
          break;
        case i.SPACE:
        case i.ENTER:
          this._eventHandler(t);
          break;
        case i.HOME:
          n = this.headers[0];
          break;
        case i.END:
          n = this.headers[a - 1];
        }
        n && (e(t.target).attr('tabIndex', -1), e(n).attr('tabIndex', 0), n.focus(), t.preventDefault());
      }
    },
    _panelKeyDown: function (t) {
      t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus();
    },
    refresh: function () {
      var t = this.options;
      this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find('.ui-state-disabled').length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    },
    _processPanels: function () {
      this.headers = this.element.find(this.options.header).addClass('ui-accordion-header ui-helper-reset ui-state-default ui-corner-all'), this.headers.next().addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom').filter(':not(.ui-accordion-content-active)').hide();
    },
    _refresh: function () {
      var i, a = this.options, s = a.heightStyle, n = this.element.parent(), r = this.accordionId = 'ui-accordion-' + (this.element.attr('id') || ++t);
      this.active = this._findActive(a.active).addClass('ui-accordion-header-active ui-state-active ui-corner-top').removeClass('ui-corner-all'), this.active.next().addClass('ui-accordion-content-active').show(), this.headers.attr('role', 'tab').each(function (t) {
        var i = e(this), a = i.attr('id'), s = i.next(), n = s.attr('id');
        a || (a = r + '-header-' + t, i.attr('id', a)), n || (n = r + '-panel-' + t, s.attr('id', n)), i.attr('aria-controls', n), s.attr('aria-labelledby', a);
      }).next().attr('role', 'tabpanel'), this.headers.not(this.active).attr({
        'aria-selected': 'false',
        'aria-expanded': 'false',
        tabIndex: -1
      }).next().attr({ 'aria-hidden': 'true' }).hide(), this.active.length ? this.active.attr({
        'aria-selected': 'true',
        'aria-expanded': 'true',
        tabIndex: 0
      }).next().attr({ 'aria-hidden': 'false' }) : this.headers.eq(0).attr('tabIndex', 0), this._createIcons(), this._setupEvents(a.event), 'fill' === s ? (i = n.height(), this.element.siblings(':visible').each(function () {
        var t = e(this), a = t.css('position');
        'absolute' !== a && 'fixed' !== a && (i -= t.outerHeight(!0));
      }), this.headers.each(function () {
        i -= e(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()));
      }).css('overflow', 'auto')) : 'auto' === s && (i = 0, this.headers.next().each(function () {
        i = Math.max(i, e(this).css('height', '').height());
      }).height(i));
    },
    _activate: function (t) {
      var i = this._findActive(t)[0];
      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: e.noop
      }));
    },
    _findActive: function (t) {
      return 'number' == typeof t ? this.headers.eq(t) : e();
    },
    _setupEvents: function (t) {
      var i = { keydown: '_keydown' };
      t && e.each(t.split(' '), function (e, t) {
        i[t] = '_eventHandler';
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: '_panelKeyDown' }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function (t) {
      var i = this.options, a = this.active, s = e(t.currentTarget), n = s[0] === a[0], r = n && i.collapsible, o = r ? e() : s.next(), h = a.next(), d = {
          oldHeader: a,
          oldPanel: h,
          newHeader: r ? e() : s,
          newPanel: o
        };
      t.preventDefault(), n && !i.collapsible || this._trigger('beforeActivate', t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = n ? e() : s, this._toggle(d), a.removeClass('ui-accordion-header-active ui-state-active'), i.icons && a.children('.ui-accordion-header-icon').removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (s.removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top'), i.icons && s.children('.ui-accordion-header-icon').removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass('ui-accordion-content-active')));
    },
    _toggle: function (t) {
      var i = t.newPanel, a = this.prevShow.length ? this.prevShow : t.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({ 'aria-hidden': 'true' }), a.prev().attr('aria-selected', 'false'), i.length && a.length ? a.prev().attr({
        tabIndex: -1,
        'aria-expanded': 'false'
      }) : i.length && this.headers.filter(function () {
        return 0 === e(this).attr('tabIndex');
      }).attr('tabIndex', -1), i.attr('aria-hidden', 'false').prev().attr({
        'aria-selected': 'true',
        tabIndex: 0,
        'aria-expanded': 'true'
      });
    },
    _animate: function (e, t, s) {
      var n, r, o, h = this, d = 0, c = e.length && (!t.length || e.index() < t.index()), l = this.options.animate || {}, u = c && l.down || l, v = function () {
          h._toggleComplete(s);
        };
      return 'number' == typeof u && (o = u), 'string' == typeof u && (r = u), r = r || u.easing || l.easing, o = o || u.duration || l.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {
        duration: o,
        easing: r,
        step: function (e, t) {
          t.now = Math.round(e);
        }
      }), e.hide().animate(a, {
        duration: o,
        easing: r,
        complete: v,
        step: function (e, i) {
          i.now = Math.round(e), 'height' !== i.prop ? d += i.now : 'content' !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - d), d = 0);
        }
      }), undefined) : t.animate(i, o, r, v) : e.animate(a, o, r, v);
    },
    _toggleComplete: function (e) {
      var t = e.oldPanel;
      t.removeClass('ui-accordion-content-active').prev().removeClass('ui-corner-top').addClass('ui-corner-all'), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger('activate', null, e);
    }
  });
}(jQuery));
(function (e) {
  e.widget('ui.autocomplete', {
    version: '1.10.4',
    defaultElement: '<input>',
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: 'left top',
        at: 'left bottom',
        collision: 'none'
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function () {
      var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = 'textarea' === n, o = 'input' === n;
      this.isMultiLine = a ? !0 : o ? !1 : this.element.prop('isContentEditable'), this.valueMethod = this.element[a || o ? 'val' : 'text'], this.isNewMenu = !0, this.element.addClass('ui-autocomplete-input').attr('autocomplete', 'off'), this._on(this.element, {
        keydown: function (n) {
          if (this.element.prop('readOnly'))
            return t = !0, s = !0, i = !0, undefined;
          t = !1, s = !1, i = !1;
          var a = e.ui.keyCode;
          switch (n.keyCode) {
          case a.PAGE_UP:
            t = !0, this._move('previousPage', n);
            break;
          case a.PAGE_DOWN:
            t = !0, this._move('nextPage', n);
            break;
          case a.UP:
            t = !0, this._keyEvent('previous', n);
            break;
          case a.DOWN:
            t = !0, this._keyEvent('next', n);
            break;
          case a.ENTER:
          case a.NUMPAD_ENTER:
            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
            break;
          case a.TAB:
            this.menu.active && this.menu.select(n);
            break;
          case a.ESCAPE:
            this.menu.element.is(':visible') && (this._value(this.term), this.close(n), n.preventDefault());
            break;
          default:
            i = !0, this._searchTimeout(n);
          }
        },
        keypress: function (s) {
          if (t)
            return t = !1, (!this.isMultiLine || this.menu.element.is(':visible')) && s.preventDefault(), undefined;
          if (!i) {
            var n = e.ui.keyCode;
            switch (s.keyCode) {
            case n.PAGE_UP:
              this._move('previousPage', s);
              break;
            case n.PAGE_DOWN:
              this._move('nextPage', s);
              break;
            case n.UP:
              this._keyEvent('previous', s);
              break;
            case n.DOWN:
              this._keyEvent('next', s);
            }
          }
        },
        input: function (e) {
          return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined);
        },
        focus: function () {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function (e) {
          return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined);
        }
      }), this._initSource(), this.menu = e('<ul>').addClass('ui-autocomplete ui-front').appendTo(this._appendTo()).menu({ role: null }).hide().data('ui-menu'), this._on(this.menu.element, {
        mousedown: function (t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur;
          });
          var i = this.menu.element[0];
          e(t.target).closest('.ui-menu-item').length || this._delay(function () {
            var t = this;
            this.document.one('mousedown', function (s) {
              s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close();
            });
          });
        },
        menufocus: function (t, i) {
          if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)))
            return this.menu.blur(), this.document.one('mousemove', function () {
              e(t.target).trigger(t.originalEvent);
            }), undefined;
          var s = i.item.data('ui-autocomplete-item');
          !1 !== this._trigger('focus', t, { item: s }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value);
        },
        menuselect: function (e, t) {
          var i = t.item.data('ui-autocomplete-item'), s = this.previous;
          this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
            this.previous = s, this.selectedItem = i;
          })), !1 !== this._trigger('select', e, { item: i }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
        }
      }), this.liveRegion = e('<span>', {
        role: 'status',
        'aria-live': 'polite'
      }).addClass('ui-helper-hidden-accessible').insertBefore(this.element), this._on(this.window, {
        beforeunload: function () {
          this.element.removeAttr('autocomplete');
        }
      });
    },
    _destroy: function () {
      clearTimeout(this.searching), this.element.removeClass('ui-autocomplete-input').removeAttr('autocomplete'), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function (e, t) {
      this._super(e, t), 'source' === e && this._initSource(), 'appendTo' === e && this.menu.element.appendTo(this._appendTo()), 'disabled' === e && t && this.xhr && this.xhr.abort();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest('.ui-front')), t.length || (t = this.document[0].body), t;
    },
    _initSource: function () {
      var t, i, s = this;
      e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
        s(e.ui.autocomplete.filter(t, i.term));
      }) : 'string' == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
        s.xhr && s.xhr.abort(), s.xhr = e.ajax({
          url: i,
          data: t,
          dataType: 'json',
          success: function (e) {
            n(e);
          },
          error: function () {
            n([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function (e) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        this.term !== this._value() && (this.selectedItem = null, this.search(null, e));
      }, this.options.delay);
    },
    search: function (e, t) {
      return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger('search', t) !== !1 ? this._search(e) : undefined;
    },
    _search: function (e) {
      this.pending++, this.element.addClass('ui-autocomplete-loading'), this.cancelSearch = !1, this.source({ term: e }, this._response());
    },
    _response: function () {
      var t = ++this.requestIndex;
      return e.proxy(function (e) {
        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass('ui-autocomplete-loading');
      }, this);
    },
    __response: function (e) {
      e && (e = this._normalize(e)), this._trigger('response', null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger('open')) : this._close();
    },
    close: function (e) {
      this.cancelSearch = !0, this._close(e);
    },
    _close: function (e) {
      this.menu.element.is(':visible') && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger('close', e));
    },
    _change: function (e) {
      this.previous !== this._value() && this._trigger('change', e, { item: this.selectedItem });
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
        return 'string' == typeof t ? {
          label: t,
          value: t
        } : e.extend({
          label: t.label || t.value,
          value: t.value || t.label
        }, t);
      });
    },
    _suggest: function (t) {
      var i = this.menu.element.empty();
      this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next();
    },
    _resizeMenu: function () {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width('').outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function (t, i) {
      var s = this;
      e.each(i, function (e, i) {
        s._renderItemData(t, i);
      });
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data('ui-autocomplete-item', t);
    },
    _renderItem: function (t, i) {
      return e('<li>').append(e('<a>').text(i.label)).appendTo(t);
    },
    _move: function (e, t) {
      return this.menu.element.is(':visible') ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (e, t) {
      (!this.isMultiLine || this.menu.element.is(':visible')) && (this._move(e, t), t.preventDefault());
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex: function (e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
    },
    filter: function (t, i) {
      var s = RegExp(e.ui.autocomplete.escapeRegex(i), 'i');
      return e.grep(t, function (e) {
        return s.test(e.label || e.value || e);
      });
    }
  }), e.widget('ui.autocomplete', e.ui.autocomplete, {
    options: {
      messages: {
        noResults: 'No search results.',
        results: function (e) {
          return e + (e > 1 ? ' results are' : ' result is') + ' available, use up and down arrow keys to navigate.';
        }
      }
    },
    __response: function (e) {
      var t;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t));
    }
  });
}(jQuery));
(function (e) {
  var t, i = 'ui-button ui-widget ui-state-default ui-corner-all', n = 'ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only', s = function () {
      var t = e(this);
      setTimeout(function () {
        t.find(':ui-button').button('refresh');
      }, 1);
    }, a = function (t) {
      var i = t.name, n = t.form, s = e([]);
      return i && (i = i.replace(/'/g, '\\\''), s = n ? e(n).find('[name=\'' + i + '\']') : e('[name=\'' + i + '\']', t.ownerDocument).filter(function () {
        return !this.form;
      })), s;
    };
  e.widget('ui.button', {
    version: '1.10.4',
    defaultElement: '<button>',
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function () {
      this.element.closest('form').unbind('reset' + this.eventNamespace).bind('reset' + this.eventNamespace, s), 'boolean' != typeof this.options.disabled ? this.options.disabled = !!this.element.prop('disabled') : this.element.prop('disabled', this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr('title');
      var n = this, o = this.options, r = 'checkbox' === this.type || 'radio' === this.type, h = r ? '' : 'ui-state-active';
      null === o.label && (o.label = 'input' === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr('role', 'button').bind('mouseenter' + this.eventNamespace, function () {
        o.disabled || this === t && e(this).addClass('ui-state-active');
      }).bind('mouseleave' + this.eventNamespace, function () {
        o.disabled || e(this).removeClass(h);
      }).bind('click' + this.eventNamespace, function (e) {
        o.disabled && (e.preventDefault(), e.stopImmediatePropagation());
      }), this._on({
        focus: function () {
          this.buttonElement.addClass('ui-state-focus');
        },
        blur: function () {
          this.buttonElement.removeClass('ui-state-focus');
        }
      }), r && this.element.bind('change' + this.eventNamespace, function () {
        n.refresh();
      }), 'checkbox' === this.type ? this.buttonElement.bind('click' + this.eventNamespace, function () {
        return o.disabled ? !1 : undefined;
      }) : 'radio' === this.type ? this.buttonElement.bind('click' + this.eventNamespace, function () {
        if (o.disabled)
          return !1;
        e(this).addClass('ui-state-active'), n.buttonElement.attr('aria-pressed', 'true');
        var t = n.element[0];
        a(t).not(t).map(function () {
          return e(this).button('widget')[0];
        }).removeClass('ui-state-active').attr('aria-pressed', 'false');
      }) : (this.buttonElement.bind('mousedown' + this.eventNamespace, function () {
        return o.disabled ? !1 : (e(this).addClass('ui-state-active'), t = this, n.document.one('mouseup', function () {
          t = null;
        }), undefined);
      }).bind('mouseup' + this.eventNamespace, function () {
        return o.disabled ? !1 : (e(this).removeClass('ui-state-active'), undefined);
      }).bind('keydown' + this.eventNamespace, function (t) {
        return o.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass('ui-state-active'), undefined);
      }).bind('keyup' + this.eventNamespace + ' blur' + this.eventNamespace, function () {
        e(this).removeClass('ui-state-active');
      }), this.buttonElement.is('a') && this.buttonElement.keyup(function (t) {
        t.keyCode === e.ui.keyCode.SPACE && e(this).click();
      })), this._setOption('disabled', o.disabled), this._resetButton();
    },
    _determineButtonType: function () {
      var e, t, i;
      this.type = this.element.is('[type=checkbox]') ? 'checkbox' : this.element.is('[type=radio]') ? 'radio' : this.element.is('input') ? 'input' : 'button', 'checkbox' === this.type || 'radio' === this.type ? (e = this.element.parents().last(), t = 'label[for=\'' + this.element.attr('id') + '\']', this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass('ui-helper-hidden-accessible'), i = this.element.is(':checked'), i && this.buttonElement.addClass('ui-state-active'), this.buttonElement.prop('aria-pressed', i)) : this.buttonElement = this.element;
    },
    widget: function () {
      return this.buttonElement;
    },
    _destroy: function () {
      this.element.removeClass('ui-helper-hidden-accessible'), this.buttonElement.removeClass(i + ' ui-state-active ' + n).removeAttr('role').removeAttr('aria-pressed').html(this.buttonElement.find('.ui-button-text').html()), this.hasTitle || this.buttonElement.removeAttr('title');
    },
    _setOption: function (e, t) {
      return this._super(e, t), 'disabled' === e ? (this.element.prop('disabled', !!t), t && this.buttonElement.removeClass('ui-state-focus'), undefined) : (this._resetButton(), undefined);
    },
    refresh: function () {
      var t = this.element.is('input, button') ? this.element.is(':disabled') : this.element.hasClass('ui-button-disabled');
      t !== this.options.disabled && this._setOption('disabled', t), 'radio' === this.type ? a(this.element[0]).each(function () {
        e(this).is(':checked') ? e(this).button('widget').addClass('ui-state-active').attr('aria-pressed', 'true') : e(this).button('widget').removeClass('ui-state-active').attr('aria-pressed', 'false');
      }) : 'checkbox' === this.type && (this.element.is(':checked') ? this.buttonElement.addClass('ui-state-active').attr('aria-pressed', 'true') : this.buttonElement.removeClass('ui-state-active').attr('aria-pressed', 'false'));
    },
    _resetButton: function () {
      if ('input' === this.type)
        return this.options.label && this.element.val(this.options.label), undefined;
      var t = this.buttonElement.removeClass(n), i = e('<span></span>', this.document[0]).addClass('ui-button-text').html(this.options.label).appendTo(t.empty()).text(), s = this.options.icons, a = s.primary && s.secondary, o = [];
      s.primary || s.secondary ? (this.options.text && o.push('ui-button-text-icon' + (a ? 's' : s.primary ? '-primary' : '-secondary')), s.primary && t.prepend('<span class=\'ui-button-icon-primary ui-icon ' + s.primary + '\'></span>'), s.secondary && t.append('<span class=\'ui-button-icon-secondary ui-icon ' + s.secondary + '\'></span>'), this.options.text || (o.push(a ? 'ui-button-icons-only' : 'ui-button-icon-only'), this.hasTitle || t.attr('title', e.trim(i)))) : o.push('ui-button-text-only'), t.addClass(o.join(' '));
    }
  }), e.widget('ui.buttonset', {
    version: '1.10.4',
    options: { items: 'button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)' },
    _create: function () {
      this.element.addClass('ui-buttonset');
    },
    _init: function () {
      this.refresh();
    },
    _setOption: function (e, t) {
      'disabled' === e && this.buttons.button('option', e, t), this._super(e, t);
    },
    refresh: function () {
      var t = 'rtl' === this.element.css('direction');
      this.buttons = this.element.find(this.options.items).filter(':ui-button').button('refresh').end().not(':ui-button').button().end().map(function () {
        return e(this).button('widget')[0];
      }).removeClass('ui-corner-all ui-corner-left ui-corner-right').filter(':first').addClass(t ? 'ui-corner-right' : 'ui-corner-left').end().filter(':last').addClass(t ? 'ui-corner-left' : 'ui-corner-right').end().end();
    },
    _destroy: function () {
      this.element.removeClass('ui-buttonset'), this.buttons.map(function () {
        return e(this).button('widget')[0];
      }).removeClass('ui-corner-left ui-corner-right').end().button('destroy');
    }
  });
}(jQuery));
(function (e, t) {
  function i() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = 'ui-datepicker-div', this._inlineClass = 'ui-datepicker-inline', this._appendClass = 'ui-datepicker-append', this._triggerClass = 'ui-datepicker-trigger', this._dialogClass = 'ui-datepicker-dialog', this._disableClass = 'ui-datepicker-disabled', this._unselectableClass = 'ui-datepicker-unselectable', this._currentClass = 'ui-datepicker-current-day', this._dayOverClass = 'ui-datepicker-days-cell-over', this.regional = [], this.regional[''] = {
      closeText: 'Done',
      prevText: 'Prev',
      nextText: 'Next',
      currentText: 'Today',
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      dayNamesShort: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
      dayNamesMin: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
      ],
      weekHeader: 'Wk',
      dateFormat: 'mm/dd/yy',
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ''
    }, this._defaults = {
      showOn: 'focus',
      showAnim: 'fadeIn',
      showOptions: {},
      defaultDate: null,
      appendText: '',
      buttonText: '...',
      buttonImage: '',
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: 'c-10:c+10',
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: '+10',
      minDate: null,
      maxDate: null,
      duration: 'fast',
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: '',
      altFormat: '',
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, e.extend(this._defaults, this.regional['']), this.dpDiv = a(e('<div id=\'' + this._mainDivId + '\' class=\'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'));
  }
  function a(t) {
    var i = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
    return t.delegate(i, 'mouseout', function () {
      e(this).removeClass('ui-state-hover'), -1 !== this.className.indexOf('ui-datepicker-prev') && e(this).removeClass('ui-datepicker-prev-hover'), -1 !== this.className.indexOf('ui-datepicker-next') && e(this).removeClass('ui-datepicker-next-hover');
    }).delegate(i, 'mouseover', function () {
      e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'), e(this).addClass('ui-state-hover'), -1 !== this.className.indexOf('ui-datepicker-prev') && e(this).addClass('ui-datepicker-prev-hover'), -1 !== this.className.indexOf('ui-datepicker-next') && e(this).addClass('ui-datepicker-next-hover'));
    });
  }
  function s(t, i) {
    e.extend(t, i);
    for (var a in i)
      null == i[a] && (t[a] = i[a]);
    return t;
  }
  e.extend(e.ui, { datepicker: { version: '1.10.4' } });
  var n, r = 'datepicker';
  e.extend(i.prototype, {
    markerClassName: 'hasDatepicker',
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (e) {
      return s(this._defaults, e || {}), this;
    },
    _attachDatepicker: function (t, i) {
      var a, s, n;
      a = t.nodeName.toLowerCase(), s = 'div' === a || 'span' === a, t.id || (this.uuid += 1, t.id = 'dp' + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), 'input' === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n);
    },
    _newInst: function (t, i) {
      var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
      return {
        id: s,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? a(e('<div class=\'' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>')) : this.dpDiv
      };
    },
    _connectDatepicker: function (t, i) {
      var a = e(t);
      i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t));
    },
    _attachments: function (t, i) {
      var a, s, n, r = this._get(i, 'appendText'), o = this._get(i, 'isRTL');
      i.append && i.append.remove(), r && (i.append = e('<span class=\'' + this._appendClass + '\'>' + r + '</span>'), t[o ? 'before' : 'after'](i.append)), t.unbind('focus', this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, 'showOn'), ('focus' === a || 'both' === a) && t.focus(this._showDatepicker), ('button' === a || 'both' === a) && (s = this._get(i, 'buttonText'), n = this._get(i, 'buttonImage'), i.trigger = e(this._get(i, 'buttonImageOnly') ? e('<img/>').addClass(this._triggerClass).attr({
        src: n,
        alt: s,
        title: s
      }) : e('<button type=\'button\'></button>').addClass(this._triggerClass).html(n ? e('<img/>').attr({
        src: n,
        alt: s,
        title: s
      }) : s)), t[o ? 'before' : 'after'](i.trigger), i.trigger.click(function () {
        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
      }));
    },
    _autoSize: function (e) {
      if (this._get(e, 'autoSize') && !e.inline) {
        var t, i, a, s, n = new Date(2009, 11, 20), r = this._get(e, 'dateFormat');
        r.match(/[DM]/) && (t = function (e) {
          for (i = 0, a = 0, s = 0; e.length > s; s++)
            e[s].length > i && (i = e[s].length, a = s);
          return a;
        }, n.setMonth(t(this._get(e, r.match(/MM/) ? 'monthNames' : 'monthNamesShort'))), n.setDate(t(this._get(e, r.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - n.getDay())), e.input.attr('size', this._formatDate(e, n).length);
      }
    },
    _inlineDatepicker: function (t, i) {
      var a = e(t);
      a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css('display', 'block'));
    },
    _dialogDatepicker: function (t, i, a, n, o) {
      var u, c, h, l, d, p = this._dialogInst;
      return p || (this.uuid += 1, u = 'dp' + this.uuid, this._dialogInput = e('<input type=\'text\' id=\'' + u + '\' style=\'position: absolute; top: -100px; width: 0px;\'/>'), this._dialogInput.keydown(this._doKeyDown), e('body').append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [
        o.pageX,
        o.pageY
      ] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [
        c / 2 - 100 + l,
        h / 2 - 150 + d
      ]), this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this;
    },
    _destroyDatepicker: function (t) {
      var i, a = e(t), s = e.data(t, r);
      a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), 'input' === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind('focus', this._showDatepicker).unbind('keydown', this._doKeyDown).unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp)) : ('div' === i || 'span' === i) && a.removeClass(this.markerClassName).empty());
    },
    _enableDatepicker: function (t) {
      var i, a, s = e(t), n = e.data(t, r);
      s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), 'input' === i ? (t.disabled = !1, n.trigger.filter('button').each(function () {
        this.disabled = !1;
      }).end().filter('img').css({
        opacity: '1.0',
        cursor: ''
      })) : ('div' === i || 'span' === i) && (a = s.children('.' + this._inlineClass), a.children().removeClass('ui-state-disabled'), a.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }));
    },
    _disableDatepicker: function (t) {
      var i, a, s = e(t), n = e.data(t, r);
      s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), 'input' === i ? (t.disabled = !0, n.trigger.filter('button').each(function () {
        this.disabled = !0;
      }).end().filter('img').css({
        opacity: '0.5',
        cursor: 'default'
      })) : ('div' === i || 'span' === i) && (a = s.children('.' + this._inlineClass), a.children().addClass('ui-state-disabled'), a.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }), this._disabledInputs[this._disabledInputs.length] = t);
    },
    _isDisabledDatepicker: function (e) {
      if (!e)
        return !1;
      for (var t = 0; this._disabledInputs.length > t; t++)
        if (this._disabledInputs[t] === e)
          return !0;
      return !1;
    },
    _getInst: function (t) {
      try {
        return e.data(t, r);
      } catch (i) {
        throw 'Missing instance data for this datepicker';
      }
    },
    _optionDatepicker: function (i, a, n) {
      var r, o, u, c, h = this._getInst(i);
      return 2 === arguments.length && 'string' == typeof a ? 'defaults' === a ? e.extend({}, e.datepicker._defaults) : h ? 'all' === a ? e.extend({}, h.settings) : this._get(h, a) : null : (r = a || {}, 'string' == typeof a && (r = {}, r[a] = n), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(h, 'min'), c = this._getMinMaxDate(h, 'max'), s(h.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (h.settings.minDate = this._formatDate(h, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (h.settings.maxDate = this._formatDate(h, c)), 'disabled' in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), t);
    },
    _changeDatepicker: function (e, t, i) {
      this._optionDatepicker(e, t, i);
    },
    _refreshDatepicker: function (e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t);
    },
    _setDateDatepicker: function (e, t) {
      var i = this._getInst(e);
      i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function (e, t) {
      var i = this._getInst(e);
      return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
    },
    _doKeyDown: function (t) {
      var i, a, s, n = e.datepicker._getInst(t.target), r = !0, o = n.dpDiv.is('.ui-datepicker-rtl');
      if (n._keyEvent = !0, e.datepicker._datepickerShowing)
        switch (t.keyCode) {
        case 9:
          e.datepicker._hideDatepicker(), r = !1;
          break;
        case 13:
          return s = e('td.' + e.datepicker._dayOverClass + ':not(.' + e.datepicker._currentClass + ')', n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, 'onSelect'), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [
            a,
            n
          ])) : e.datepicker._hideDatepicker(), !1;
        case 27:
          e.datepicker._hideDatepicker();
          break;
        case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, 'stepBigMonths') : -e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, 'stepBigMonths') : +e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
          break;
        case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
          break;
        case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, 'D'), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, 'stepBigMonths') : -e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, 'D'), r = t.ctrlKey || t.metaKey;
          break;
        case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, 'D'), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, 'stepBigMonths') : +e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, 'D'), r = t.ctrlKey || t.metaKey;
          break;
        default:
          r = !1;
        }
      else
        36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
      r && (t.preventDefault(), t.stopPropagation());
    },
    _doKeyPress: function (i) {
      var a, s, n = e.datepicker._getInst(i.target);
      return e.datepicker._get(n, 'constrainInput') ? (a = e.datepicker._possibleChars(e.datepicker._get(n, 'dateFormat')), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || ' ' > s || !a || a.indexOf(s) > -1) : t;
    },
    _doKeyUp: function (t) {
      var i, a = e.datepicker._getInst(t.target);
      if (a.input.val() !== a.lastVal)
        try {
          i = e.datepicker.parseDate(e.datepicker._get(a, 'dateFormat'), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a));
        } catch (s) {
        }
      return !0;
    },
    _showDatepicker: function (t) {
      if (t = t.target || t, 'input' !== t.nodeName.toLowerCase() && (t = e('input', t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
        var i, a, n, r, o, u, c;
        i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, 'beforeShow'), n = a ? a.apply(t, [
          t,
          i
        ]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ''), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
          return r |= 'fixed' === e(this).css('position'), !r;
        }), o = {
          left: e.datepicker._pos[0],
          top: e.datepicker._pos[1]
        }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
          position: 'absolute',
          display: 'block',
          top: '-1000px'
        }), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({
          position: e.datepicker._inDialog && e.blockUI ? 'static' : r ? 'fixed' : 'absolute',
          display: 'none',
          left: o.left + 'px',
          top: o.top + 'px'
        }), i.inline || (u = e.datepicker._get(i, 'showAnim'), c = e.datepicker._get(i, 'duration'), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, 'showOptions'), c) : i.dpDiv[u || 'show'](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i));
      }
    },
    _updateDatepicker: function (t) {
      this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
      var i, a = this._getNumberOfMonths(t), s = a[1], r = 17;
      t.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''), s > 1 && t.dpDiv.addClass('ui-datepicker-multi-' + s).css('width', r * s + 'em'), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'), t.dpDiv[(this._get(t, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
        i === t.yearshtml && t.yearshtml && t.dpDiv.find('select.ui-datepicker-year:first').replaceWith(t.yearshtml), i = t.yearshtml = null;
      }, 0));
    },
    _shouldFocusInput: function (e) {
      return e.input && e.input.is(':visible') && !e.input.is(':disabled') && !e.input.is(':focus');
    },
    _checkOffset: function (t, i, a) {
      var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()), c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
      return i.left -= this._get(t, 'isRTL') ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i;
    },
    _findPos: function (t) {
      for (var i, a = this._getInst(t), s = this._get(a, 'isRTL'); t && ('hidden' === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)
        t = t[s ? 'previousSibling' : 'nextSibling'];
      return i = e(t).offset(), [
        i.left,
        i.top
      ];
    },
    _hideDatepicker: function (t) {
      var i, a, s, n, o = this._curInst;
      !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, 'showAnim'), a = this._get(o, 'duration'), s = function () {
        e.datepicker._tidyDialog(o);
      }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, 'showOptions'), a, s) : o.dpDiv['slideDown' === i ? 'slideUp' : 'fadeIn' === i ? 'fadeOut' : 'hide'](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, 'onClose'), n && n.apply(o.input ? o.input[0] : null, [
        o.input ? o.input.val() : '',
        o
      ]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: 'absolute',
        left: '0',
        top: '-100px'
      }), e.blockUI && (e.unblockUI(), e('body').append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function (e) {
      e.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
    },
    _checkExternalClick: function (t) {
      if (e.datepicker._curInst) {
        var i = e(t.target), a = e.datepicker._getInst(i[0]);
        (i[0].id !== e.datepicker._mainDivId && 0 === i.parents('#' + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest('.' + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (t, i, a) {
      var s = e(t), n = this._getInst(s[0]);
      this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ('M' === a ? this._get(n, 'showCurrentAtPos') : 0), a), this._updateDatepicker(n));
    },
    _gotoToday: function (t) {
      var i, a = e(t), s = this._getInst(a[0]);
      this._get(s, 'gotoCurrent') && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date(), s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a);
    },
    _selectMonthYear: function (t, i, a) {
      var s = e(t), n = this._getInst(s[0]);
      n['selected' + ('M' === a ? 'Month' : 'Year')] = n['draw' + ('M' === a ? 'Month' : 'Year')] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s);
    },
    _selectDay: function (t, i, a, s) {
      var n, r = e(t);
      e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e('a', s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
    },
    _clearDate: function (t) {
      var i = e(t);
      this._selectDate(i, '');
    },
    _selectDate: function (t, i) {
      var a, s = e(t), n = this._getInst(s[0]);
      i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, 'onSelect'), a ? a.apply(n.input ? n.input[0] : null, [
        i,
        n
      ]) : n.input && n.input.trigger('change'), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], 'object' != typeof n.input[0] && n.input.focus(), this._lastInput = null);
    },
    _updateAlternate: function (t) {
      var i, a, s, n = this._get(t, 'altField');
      n && (i = this._get(t, 'altFormat') || this._get(t, 'dateFormat'), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function () {
        e(this).val(s);
      }));
    },
    noWeekends: function (e) {
      var t = e.getDay();
      return [
        t > 0 && 6 > t,
        ''
      ];
    },
    iso8601Week: function (e) {
      var t, i = new Date(e.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 86400000) / 7) + 1;
    },
    parseDate: function (i, a, s) {
      if (null == i || null == a)
        throw 'Invalid arguments';
      if (a = 'object' == typeof a ? '' + a : a + '', '' === a)
        return null;
      var n, r, o, u, c = 0, h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = 'string' != typeof h ? h : new Date().getFullYear() % 100 + parseInt(h, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, p = (s ? s.dayNames : null) || this._defaults.dayNames, g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, m = (s ? s.monthNames : null) || this._defaults.monthNames, f = -1, _ = -1, v = -1, k = -1, y = !1, b = function (e) {
          var t = i.length > n + 1 && i.charAt(n + 1) === e;
          return t && n++, t;
        }, D = function (e) {
          var t = b(e), i = '@' === e ? 14 : '!' === e ? 20 : 'y' === e && t ? 4 : 'o' === e ? 3 : 2, s = RegExp('^\\d{1,' + i + '}'), n = a.substring(c).match(s);
          if (!n)
            throw 'Missing number at position ' + c;
          return c += n[0].length, parseInt(n[0], 10);
        }, w = function (i, s, n) {
          var r = -1, o = e.map(b(i) ? n : s, function (e, t) {
              return [[
                  t,
                  e
                ]];
            }).sort(function (e, t) {
              return -(e[1].length - t[1].length);
            });
          if (e.each(o, function (e, i) {
              var s = i[1];
              return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t;
            }), -1 !== r)
            return r + 1;
          throw 'Unknown name at position ' + c;
        }, M = function () {
          if (a.charAt(c) !== i.charAt(n))
            throw 'Unexpected literal at position ' + c;
          c++;
        };
      for (n = 0; i.length > n; n++)
        if (y)
          '\'' !== i.charAt(n) || b('\'') ? M() : y = !1;
        else
          switch (i.charAt(n)) {
          case 'd':
            v = D('d');
            break;
          case 'D':
            w('D', d, p);
            break;
          case 'o':
            k = D('o');
            break;
          case 'm':
            _ = D('m');
            break;
          case 'M':
            _ = w('M', g, m);
            break;
          case 'y':
            f = D('y');
            break;
          case '@':
            u = new Date(D('@')), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
            break;
          case '!':
            u = new Date((D('!') - this._ticksTo1970) / 10000), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
            break;
          case '\'':
            b('\'') ? M() : y = !0;
            break;
          default:
            M();
          }
      if (a.length > c && (o = a.substr(c), !/^\s+/.test(o)))
        throw 'Extra/unparsed characters found in date: ' + o;
      if (-1 === f ? f = new Date().getFullYear() : 100 > f && (f += new Date().getFullYear() - new Date().getFullYear() % 100 + (l >= f ? 0 : -100)), k > -1)
        for (_ = 1, v = k;;) {
          if (r = this._getDaysInMonth(f, _ - 1), r >= v)
            break;
          _++, v -= r;
        }
      if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v)
        throw 'Invalid date';
      return u;
    },
    ATOM: 'yy-mm-dd',
    COOKIE: 'D, dd M yy',
    ISO_8601: 'yy-mm-dd',
    RFC_822: 'D, d M y',
    RFC_850: 'DD, dd-M-y',
    RFC_1036: 'D, d M y',
    RFC_1123: 'D, d M yy',
    RFC_2822: 'D, d M yy',
    RSS: 'D, d M y',
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yy-mm-dd',
    _ticksTo1970: 10000000 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (e, t, i) {
      if (!t)
        return '';
      var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, n = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, u = function (t) {
          var i = e.length > a + 1 && e.charAt(a + 1) === t;
          return i && a++, i;
        }, c = function (e, t, i) {
          var a = '' + t;
          if (u(e))
            for (; i > a.length;)
              a = '0' + a;
          return a;
        }, h = function (e, t, i, a) {
          return u(e) ? a[t] : i[t];
        }, l = '', d = !1;
      if (t)
        for (a = 0; e.length > a; a++)
          if (d)
            '\'' !== e.charAt(a) || u('\'') ? l += e.charAt(a) : d = !1;
          else
            switch (e.charAt(a)) {
            case 'd':
              l += c('d', t.getDate(), 2);
              break;
            case 'D':
              l += h('D', t.getDay(), s, n);
              break;
            case 'o':
              l += c('o', Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 86400000), 3);
              break;
            case 'm':
              l += c('m', t.getMonth() + 1, 2);
              break;
            case 'M':
              l += h('M', t.getMonth(), r, o);
              break;
            case 'y':
              l += u('y') ? t.getFullYear() : (10 > t.getYear() % 100 ? '0' : '') + t.getYear() % 100;
              break;
            case '@':
              l += t.getTime();
              break;
            case '!':
              l += 10000 * t.getTime() + this._ticksTo1970;
              break;
            case '\'':
              u('\'') ? l += '\'' : d = !0;
              break;
            default:
              l += e.charAt(a);
            }
      return l;
    },
    _possibleChars: function (e) {
      var t, i = '', a = !1, s = function (i) {
          var a = e.length > t + 1 && e.charAt(t + 1) === i;
          return a && t++, a;
        };
      for (t = 0; e.length > t; t++)
        if (a)
          '\'' !== e.charAt(t) || s('\'') ? i += e.charAt(t) : a = !1;
        else
          switch (e.charAt(t)) {
          case 'd':
          case 'm':
          case 'y':
          case '@':
            i += '0123456789';
            break;
          case 'D':
          case 'M':
            return null;
          case '\'':
            s('\'') ? i += '\'' : a = !0;
            break;
          default:
            i += e.charAt(t);
          }
      return i;
    },
    _get: function (e, i) {
      return e.settings[i] !== t ? e.settings[i] : this._defaults[i];
    },
    _setDateFromField: function (e, t) {
      if (e.input.val() !== e.lastVal) {
        var i = this._get(e, 'dateFormat'), a = e.lastVal = e.input ? e.input.val() : null, s = this._getDefaultDate(e), n = s, r = this._getFormatConfig(e);
        try {
          n = this.parseDate(i, a, r) || s;
        } catch (o) {
          a = t ? '' : a;
        }
        e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e);
      }
    },
    _getDefaultDate: function (e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, 'defaultDate'), new Date()));
    },
    _determineDate: function (t, i, a) {
      var s = function (e) {
          var t = new Date();
          return t.setDate(t.getDate() + e), t;
        }, n = function (i) {
          try {
            return e.datepicker.parseDate(e.datepicker._get(t, 'dateFormat'), i, e.datepicker._getFormatConfig(t));
          } catch (a) {
          }
          for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date(), n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c;) {
            switch (c[2] || 'd') {
            case 'd':
            case 'D':
              o += parseInt(c[1], 10);
              break;
            case 'w':
            case 'W':
              o += 7 * parseInt(c[1], 10);
              break;
            case 'm':
            case 'M':
              r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
              break;
            case 'y':
            case 'Y':
              n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
            }
            c = u.exec(i);
          }
          return new Date(n, r, o);
        }, r = null == i || '' === i ? a : 'string' == typeof i ? n(i) : 'number' == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
      return r = r && 'Invalid Date' == '' + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r);
    },
    _daylightSavingAdjust: function (e) {
      return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
    },
    _setDate: function (e, t, i) {
      var a = !t, s = e.selectedMonth, n = e.selectedYear, r = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
      e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? '' : this._formatDate(e));
    },
    _getDate: function (e) {
      var t = !e.currentYear || e.input && '' === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return t;
    },
    _attachHandlers: function (t) {
      var i = this._get(t, 'stepMonths'), a = '#' + t.id.replace(/\\\\/g, '\\');
      t.dpDiv.find('[data-handler]').map(function () {
        var t = {
            prev: function () {
              e.datepicker._adjustDate(a, -i, 'M');
            },
            next: function () {
              e.datepicker._adjustDate(a, +i, 'M');
            },
            hide: function () {
              e.datepicker._hideDatepicker();
            },
            today: function () {
              e.datepicker._gotoToday(a);
            },
            selectDay: function () {
              return e.datepicker._selectDay(a, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this), !1;
            },
            selectMonth: function () {
              return e.datepicker._selectMonthYear(a, this, 'M'), !1;
            },
            selectYear: function () {
              return e.datepicker._selectMonthYear(a, this, 'Y'), !1;
            }
          };
        e(this).bind(this.getAttribute('data-event'), t[this.getAttribute('data-handler')]);
      });
    },
    _generateHTML: function (e) {
      var t, i, a, s, n, r, o, u, c, h, l, d, p, g, m, f, _, v, k, y, b, D, w, M, C, x, I, N, T, A, E, S, Y, F, P, O, j, K, R, H = new Date(), W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())), L = this._get(e, 'isRTL'), U = this._get(e, 'showButtonPanel'), B = this._get(e, 'hideIfNoPrevNext'), z = this._get(e, 'navigationAsDateFormat'), q = this._getNumberOfMonths(e), G = this._get(e, 'showCurrentAtPos'), J = this._get(e, 'stepMonths'), Q = 1 !== q[0] || 1 !== q[1], V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), $ = this._getMinMaxDate(e, 'min'), X = this._getMinMaxDate(e, 'max'), Z = e.drawMonth - G, et = e.drawYear;
      if (0 > Z && (Z += 12, et--), X)
        for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)
          Z--, 0 > Z && (Z = 11, et--);
      for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, 'prevText'), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? '<a class=\'ui-datepicker-prev ui-corner-all\' data-handler=\'prev\' data-event=\'click\' title=\'' + i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (L ? 'e' : 'w') + '\'>' + i + '</span></a>' : B ? '' : '<a class=\'ui-datepicker-prev ui-corner-all ui-state-disabled\' title=\'' + i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (L ? 'e' : 'w') + '\'>' + i + '</span></a>', s = this._get(e, 'nextText'), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? '<a class=\'ui-datepicker-next ui-corner-all\' data-handler=\'next\' data-event=\'click\' title=\'' + s + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (L ? 'w' : 'e') + '\'>' + s + '</span></a>' : B ? '' : '<a class=\'ui-datepicker-next ui-corner-all ui-state-disabled\' title=\'' + s + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (L ? 'w' : 'e') + '\'>' + s + '</span></a>', r = this._get(e, 'currentText'), o = this._get(e, 'gotoCurrent') && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? '' : '<button type=\'button\' class=\'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\' data-handler=\'hide\' data-event=\'click\'>' + this._get(e, 'closeText') + '</button>', c = U ? '<div class=\'ui-datepicker-buttonpane ui-widget-content\'>' + (L ? u : '') + (this._isInRange(e, o) ? '<button type=\'button\' class=\'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\' data-handler=\'today\' data-event=\'click\'>' + r + '</button>' : '') + (L ? '' : u) + '</div>' : '', h = parseInt(this._get(e, 'firstDay'), 10), h = isNaN(h) ? 0 : h, l = this._get(e, 'showWeek'), d = this._get(e, 'dayNames'), p = this._get(e, 'dayNamesMin'), g = this._get(e, 'monthNames'), m = this._get(e, 'monthNamesShort'), f = this._get(e, 'beforeShowDay'), _ = this._get(e, 'showOtherMonths'), v = this._get(e, 'selectOtherMonths'), k = this._getDefaultDate(e), y = '', D = 0; q[0] > D; D++) {
        for (w = '', this.maxRows = 4, M = 0; q[1] > M; M++) {
          if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = ' ui-corner-all', I = '', Q) {
            if (I += '<div class=\'ui-datepicker-group', q[1] > 1)
              switch (M) {
              case 0:
                I += ' ui-datepicker-group-first', x = ' ui-corner-' + (L ? 'right' : 'left');
                break;
              case q[1] - 1:
                I += ' ui-datepicker-group-last', x = ' ui-corner-' + (L ? 'left' : 'right');
                break;
              default:
                I += ' ui-datepicker-group-middle', x = '';
              }
            I += '\'>';
          }
          for (I += '<div class=\'ui-datepicker-header ui-widget-header ui-helper-clearfix' + x + '\'>' + (/all|left/.test(x) && 0 === D ? L ? n : a : '') + (/all|right/.test(x) && 0 === D ? L ? a : n : '') + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + '</div><table class=\'ui-datepicker-calendar\'><thead>' + '<tr>', N = l ? '<th class=\'ui-datepicker-week-col\'>' + this._get(e, 'weekHeader') + '</th>' : '', b = 0; 7 > b; b++)
            T = (b + h) % 7, N += '<th' + ((b + h + 6) % 7 >= 5 ? ' class=\'ui-datepicker-week-end\'' : '') + '>' + '<span title=\'' + d[T] + '\'>' + p[T] + '</span></th>';
          for (I += N + '</tr></thead><tbody>', A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
            for (I += '<tr>', O = l ? '<td class=\'ui-datepicker-week-col\'>' + this._get(e, 'calculateWeek')(F) + '</td>' : '', b = 0; 7 > b; b++)
              j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [
                !0,
                ''
              ], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += '<td class=\'' + ((b + h + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + (K ? ' ui-datepicker-other-month' : '') + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? ' ' + this._dayOverClass : '') + (R ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') + (K && !_ ? '' : ' ' + j[1] + (F.getTime() === V.getTime() ? ' ' + this._currentClass : '') + (F.getTime() === W.getTime() ? ' ui-datepicker-today' : '')) + '\'' + (K && !_ || !j[2] ? '' : ' title=\'' + j[2].replace(/'/g, '&#39;') + '\'') + (R ? '' : ' data-handler=\'selectDay\' data-event=\'click\' data-month=\'' + F.getMonth() + '\' data-year=\'' + F.getFullYear() + '\'') + '>' + (K && !_ ? '&#xa0;' : R ? '<span class=\'ui-state-default\'>' + F.getDate() + '</span>' : '<a class=\'ui-state-default' + (F.getTime() === W.getTime() ? ' ui-state-highlight' : '') + (F.getTime() === V.getTime() ? ' ui-state-active' : '') + (K ? ' ui-priority-secondary' : '') + '\' href=\'#\'>' + F.getDate() + '</a>') + '</td>', F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
            I += O + '</tr>';
          }
          Z++, Z > 11 && (Z = 0, et++), I += '</tbody></table>' + (Q ? '</div>' + (q[0] > 0 && M === q[1] - 1 ? '<div class=\'ui-datepicker-row-break\'></div>' : '') : ''), w += I;
        }
        y += w;
      }
      return y += c, e._keyEvent = !1, y;
    },
    _generateMonthYearHeader: function (e, t, i, a, s, n, r, o) {
      var u, c, h, l, d, p, g, m, f = this._get(e, 'changeMonth'), _ = this._get(e, 'changeYear'), v = this._get(e, 'showMonthAfterYear'), k = '<div class=\'ui-datepicker-title\'>', y = '';
      if (n || !f)
        y += '<span class=\'ui-datepicker-month\'>' + r[t] + '</span>';
      else {
        for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, y += '<select class=\'ui-datepicker-month\' data-handler=\'selectMonth\' data-event=\'change\'>', h = 0; 12 > h; h++)
          (!u || h >= a.getMonth()) && (!c || s.getMonth() >= h) && (y += '<option value=\'' + h + '\'' + (h === t ? ' selected=\'selected\'' : '') + '>' + o[h] + '</option>');
        y += '</select>';
      }
      if (v || (k += y + (!n && f && _ ? '' : '&#xa0;')), !e.yearshtml)
        if (e.yearshtml = '', n || !_)
          k += '<span class=\'ui-datepicker-year\'>' + i + '</span>';
        else {
          for (l = this._get(e, 'yearRange').split(':'), d = new Date().getFullYear(), p = function (e) {
              var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
              return isNaN(t) ? d : t;
            }, g = p(l[0]), m = Math.max(g, p(l[1] || '')), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += '<select class=\'ui-datepicker-year\' data-handler=\'selectYear\' data-event=\'change\'>'; m >= g; g++)
            e.yearshtml += '<option value=\'' + g + '\'' + (g === i ? ' selected=\'selected\'' : '') + '>' + g + '</option>';
          e.yearshtml += '</select>', k += e.yearshtml, e.yearshtml = null;
        }
      return k += this._get(e, 'yearSuffix'), v && (k += (!n && f && _ ? '' : '&#xa0;') + y), k += '</div>';
    },
    _adjustInstDate: function (e, t, i) {
      var a = e.drawYear + ('Y' === i ? t : 0), s = e.drawMonth + ('M' === i ? t : 0), n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ('D' === i ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
      e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ('M' === i || 'Y' === i) && this._notifyChange(e);
    },
    _restrictMinMax: function (e, t) {
      var i = this._getMinMaxDate(e, 'min'), a = this._getMinMaxDate(e, 'max'), s = i && i > t ? i : t;
      return a && s > a ? a : s;
    },
    _notifyChange: function (e) {
      var t = this._get(e, 'onChangeMonthYear');
      t && t.apply(e.input ? e.input[0] : null, [
        e.selectedYear,
        e.selectedMonth + 1,
        e
      ]);
    },
    _getNumberOfMonths: function (e) {
      var t = this._get(e, 'numberOfMonths');
      return null == t ? [
        1,
        1
      ] : 'number' == typeof t ? [
        1,
        t
      ] : t;
    },
    _getMinMaxDate: function (e, t) {
      return this._determineDate(e, this._get(e, t + 'Date'), null);
    },
    _getDaysInMonth: function (e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    },
    _getFirstDayOfMonth: function (e, t) {
      return new Date(e, t, 1).getDay();
    },
    _canAdjustMonth: function (e, t, i, a) {
      var s = this._getNumberOfMonths(e), n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
      return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n);
    },
    _isInRange: function (e, t) {
      var i, a, s = this._getMinMaxDate(e, 'min'), n = this._getMinMaxDate(e, 'max'), r = null, o = null, u = this._get(e, 'yearRange');
      return u && (i = u.split(':'), a = new Date().getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear());
    },
    _getFormatConfig: function (e) {
      var t = this._get(e, 'shortYearCutoff');
      return t = 'string' != typeof t ? t : new Date().getFullYear() % 100 + parseInt(t, 10), {
        shortYearCutoff: t,
        dayNamesShort: this._get(e, 'dayNamesShort'),
        dayNames: this._get(e, 'dayNames'),
        monthNamesShort: this._get(e, 'monthNamesShort'),
        monthNames: this._get(e, 'monthNames')
      };
    },
    _formatDate: function (e, t, i, a) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
      var s = t ? 'object' == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return this.formatDate(this._get(e, 'dateFormat'), s, this._getFormatConfig(e));
    }
  }), e.fn.datepicker = function (t) {
    if (!this.length)
      return this;
    e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e('#' + e.datepicker._mainDivId).length && e('body').append(e.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return 'string' != typeof t || 'isDisabled' !== t && 'getDate' !== t && 'widget' !== t ? 'option' === t && 2 === arguments.length && 'string' == typeof arguments[1] ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
      'string' == typeof t ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t);
    }) : e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [this[0]].concat(i));
  }, e.datepicker = new i(), e.datepicker.initialized = !1, e.datepicker.uuid = new Date().getTime(), e.datepicker.version = '1.10.4';
}(jQuery));
(function (e) {
  var t = {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    }, i = {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    };
  e.widget('ui.dialog', {
    version: '1.10.4',
    options: {
      appendTo: 'body',
      autoOpen: !0,
      buttons: [],
      closeOnEscape: !0,
      closeText: 'close',
      dialogClass: '',
      draggable: !0,
      hide: null,
      height: 'auto',
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: 'center',
        at: 'center',
        of: window,
        collision: 'fit',
        using: function (t) {
          var i = e(this).css(t).offset().top;
          0 > i && e(this).css('top', t.top - i);
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    _create: function () {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr('title'), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr('title').addClass('ui-dialog-content ui-widget-content').appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1;
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || 'body').eq(0);
    },
    _destroy: function () {
      var e, t = this.originalPosition;
      this._destroyOverlay(), this.element.removeUniqueId().removeClass('ui-dialog-content ui-widget-content').css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr('title', this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: e.noop,
    enable: e.noop,
    close: function (t) {
      var i, a = this;
      if (this._isOpen && this._trigger('beforeClose', t) !== !1) {
        if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(':focusable').focus().length)
          try {
            i = this.document[0].activeElement, i && 'body' !== i.nodeName.toLowerCase() && e(i).blur();
          } catch (s) {
          }
        this._hide(this.uiDialog, this.options.hide, function () {
          a._trigger('close', t);
        });
      }
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (e, t) {
      var i = !!this.uiDialog.nextAll(':visible').insertBefore(this.uiDialog).length;
      return i && !t && this._trigger('focus', e), i;
    },
    open: function () {
      var t = this;
      return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
        t._focusTabbable(), t._trigger('focus');
      }), this._trigger('open'), undefined);
    },
    _focusTabbable: function () {
      var e = this.element.find('[autofocus]');
      e.length || (e = this.element.find(':tabbable')), e.length || (e = this.uiDialogButtonPane.find(':tabbable')), e.length || (e = this.uiDialogTitlebarClose.filter(':tabbable')), e.length || (e = this.uiDialog), e.eq(0).focus();
    },
    _keepFocus: function (t) {
      function i() {
        var t = this.document[0].activeElement, i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
        i || this._focusTabbable();
      }
      t.preventDefault(), i.call(this), this._delay(i);
    },
    _createWrapper: function () {
      this.uiDialog = e('<div>').addClass('ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ' + this.options.dialogClass).hide().attr({
        tabIndex: -1,
        role: 'dialog'
      }).appendTo(this._appendTo()), this._on(this.uiDialog, {
        keydown: function (t) {
          if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE)
            return t.preventDefault(), this.close(t), undefined;
          if (t.keyCode === e.ui.keyCode.TAB) {
            var i = this.uiDialog.find(':tabbable'), a = i.filter(':first'), s = i.filter(':last');
            t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== a[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (s.focus(1), t.preventDefault()) : (a.focus(1), t.preventDefault());
          }
        },
        mousedown: function (e) {
          this._moveToTop(e) && this._focusTabbable();
        }
      }), this.element.find('[aria-describedby]').length || this.uiDialog.attr({ 'aria-describedby': this.element.uniqueId().attr('id') });
    },
    _createTitlebar: function () {
      var t;
      this.uiDialogTitlebar = e('<div>').addClass('ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix').prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
        mousedown: function (t) {
          e(t.target).closest('.ui-dialog-titlebar-close') || this.uiDialog.focus();
        }
      }), this.uiDialogTitlebarClose = e('<button type=\'button\'></button>').button({
        label: this.options.closeText,
        icons: { primary: 'ui-icon-closethick' },
        text: !1
      }).addClass('ui-dialog-titlebar-close').appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
        click: function (e) {
          e.preventDefault(), this.close(e);
        }
      }), t = e('<span>').uniqueId().addClass('ui-dialog-title').prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ 'aria-labelledby': t.attr('id') });
    },
    _title: function (e) {
      this.options.title || e.html('&#160;'), e.text(this.options.title);
    },
    _createButtonPane: function () {
      this.uiDialogButtonPane = e('<div>').addClass('ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'), this.uiButtonSet = e('<div>').addClass('ui-dialog-buttonset').appendTo(this.uiDialogButtonPane), this._createButtons();
    },
    _createButtons: function () {
      var t = this, i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass('ui-dialog-buttons'), undefined) : (e.each(i, function (i, a) {
        var s, n;
        a = e.isFunction(a) ? {
          click: a,
          text: i
        } : a, a = e.extend({ type: 'button' }, a), s = a.click, a.click = function () {
          s.apply(t.element[0], arguments);
        }, n = {
          icons: a.icons,
          text: a.showText
        }, delete a.icons, delete a.showText, e('<button></button>', a).button(n).appendTo(t.uiButtonSet);
      }), this.uiDialog.addClass('ui-dialog-buttons'), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined);
    },
    _makeDraggable: function () {
      function t(e) {
        return {
          position: e.position,
          offset: e.offset
        };
      }
      var i = this, a = this.options;
      this.uiDialog.draggable({
        cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
        handle: '.ui-dialog-titlebar',
        containment: 'document',
        start: function (a, s) {
          e(this).addClass('ui-dialog-dragging'), i._blockFrames(), i._trigger('dragStart', a, t(s));
        },
        drag: function (e, a) {
          i._trigger('drag', e, t(a));
        },
        stop: function (s, n) {
          a.position = [
            n.position.left - i.document.scrollLeft(),
            n.position.top - i.document.scrollTop()
          ], e(this).removeClass('ui-dialog-dragging'), i._unblockFrames(), i._trigger('dragStop', s, t(n));
        }
      });
    },
    _makeResizable: function () {
      function t(e) {
        return {
          originalPosition: e.originalPosition,
          originalSize: e.originalSize,
          position: e.position,
          size: e.size
        };
      }
      var i = this, a = this.options, s = a.resizable, n = this.uiDialog.css('position'), r = 'string' == typeof s ? s : 'n,e,s,w,se,sw,ne,nw';
      this.uiDialog.resizable({
        cancel: '.ui-dialog-content',
        containment: 'document',
        alsoResize: this.element,
        maxWidth: a.maxWidth,
        maxHeight: a.maxHeight,
        minWidth: a.minWidth,
        minHeight: this._minHeight(),
        handles: r,
        start: function (a, s) {
          e(this).addClass('ui-dialog-resizing'), i._blockFrames(), i._trigger('resizeStart', a, t(s));
        },
        resize: function (e, a) {
          i._trigger('resize', e, t(a));
        },
        stop: function (s, n) {
          a.height = e(this).height(), a.width = e(this).width(), e(this).removeClass('ui-dialog-resizing'), i._unblockFrames(), i._trigger('resizeStop', s, t(n));
        }
      }).css('position', n);
    },
    _minHeight: function () {
      var e = this.options;
      return 'auto' === e.height ? e.minHeight : Math.min(e.minHeight, e.height);
    },
    _position: function () {
      var e = this.uiDialog.is(':visible');
      e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide();
    },
    _setOptions: function (a) {
      var s = this, n = !1, r = {};
      e.each(a, function (e, a) {
        s._setOption(e, a), e in t && (n = !0), e in i && (r[e] = a);
      }), n && (this._size(), this._position()), this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', r);
    },
    _setOption: function (e, t) {
      var i, a, s = this.uiDialog;
      'dialogClass' === e && s.removeClass(this.options.dialogClass).addClass(t), 'disabled' !== e && (this._super(e, t), 'appendTo' === e && this.uiDialog.appendTo(this._appendTo()), 'buttons' === e && this._createButtons(), 'closeText' === e && this.uiDialogTitlebarClose.button({ label: '' + t }), 'draggable' === e && (i = s.is(':data(ui-draggable)'), i && !t && s.draggable('destroy'), !i && t && this._makeDraggable()), 'position' === e && this._position(), 'resizable' === e && (a = s.is(':data(ui-resizable)'), a && !t && s.resizable('destroy'), a && 'string' == typeof t && s.resizable('option', 'handles', t), a || t === !1 || this._makeResizable()), 'title' === e && this._title(this.uiDialogTitlebar.find('.ui-dialog-title')));
    },
    _size: function () {
      var e, t, i, a = this.options;
      this.element.show().css({
        width: 'auto',
        minHeight: 0,
        maxHeight: 'none',
        height: 0
      }), a.minWidth > a.width && (a.width = a.minWidth), e = this.uiDialog.css({
        height: 'auto',
        width: a.width
      }).outerHeight(), t = Math.max(0, a.minHeight - e), i = 'number' == typeof a.maxHeight ? Math.max(0, a.maxHeight - e) : 'none', 'auto' === a.height ? this.element.css({
        minHeight: t,
        maxHeight: i,
        height: 'auto'
      }) : this.element.height(Math.max(0, a.height - e)), this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', 'minHeight', this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find('iframe').map(function () {
        var t = e(this);
        return e('<div>').css({
          position: 'absolute',
          width: t.outerWidth(),
          height: t.outerHeight()
        }).appendTo(t.parent()).offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function (t) {
      return e(t.target).closest('.ui-dialog').length ? !0 : !!e(t.target).closest('.ui-datepicker').length;
    },
    _createOverlay: function () {
      if (this.options.modal) {
        var t = this, i = this.widgetFullName;
        e.ui.dialog.overlayInstances || this._delay(function () {
          e.ui.dialog.overlayInstances && this.document.bind('focusin.dialog', function (a) {
            t._allowInteraction(a) || (a.preventDefault(), e('.ui-dialog:visible:last .ui-dialog-content').data(i)._focusTabbable());
          });
        }), this.overlay = e('<div>').addClass('ui-widget-overlay ui-front').appendTo(this._appendTo()), this._on(this.overlay, { mousedown: '_keepFocus' }), e.ui.dialog.overlayInstances++;
      }
    },
    _destroyOverlay: function () {
      this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind('focusin.dialog'), this.overlay.remove(), this.overlay = null);
    }
  }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget('ui.dialog', e.ui.dialog, {
    _position: function () {
      var t, i = this.options.position, a = [], s = [
          0,
          0
        ];
      i ? (('string' == typeof i || 'object' == typeof i && '0' in i) && (a = i.split ? i.split(' ') : [
        i[0],
        i[1]
      ], 1 === a.length && (a[1] = a[0]), e.each([
        'left',
        'top'
      ], function (e, t) {
        +a[e] === a[e] && (s[e] = a[e], a[e] = t);
      }), i = {
        my: a[0] + (0 > s[0] ? s[0] : '+' + s[0]) + ' ' + a[1] + (0 > s[1] ? s[1] : '+' + s[1]),
        at: a.join(' ')
      }), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(':visible'), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide();
    }
  });
}(jQuery));
(function (t) {
  t.widget('ui.draggable', t.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'drag',
    options: {
      addClasses: !0,
      appendTo: 'parent',
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: 'default',
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: 'both',
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function () {
      'original' !== this.options.helper || /^(?:r|a|f)/.test(this.element.css('position')) || (this.element[0].style.position = 'relative'), this.options.addClasses && this.element.addClass('ui-draggable'), this.options.disabled && this.element.addClass('ui-draggable-disabled'), this._mouseInit();
    },
    _destroy: function () {
      this.element.removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled'), this._mouseDestroy();
    },
    _mouseCapture: function (e) {
      var i = this.options;
      return this.helper || i.disabled || t(e.target).closest('.ui-resizable-handle').length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? 'iframe' : i.iframeFix).each(function () {
        t('<div class=\'ui-draggable-iframeFix\' style=\'background: #fff;\'></div>').css({
          width: this.offsetWidth + 'px',
          height: this.offsetHeight + 'px',
          position: 'absolute',
          opacity: '0.001',
          zIndex: 1000
        }).css(t(this).offset()).appendTo('body');
      }), !0) : !1);
    },
    _mouseStart: function (e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this.helper.addClass('ui-draggable-dragging'), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css('position'), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css('position'), this.offset = this.positionAbs = this.element.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, this.offset.scroll = !1, t.extend(this.offset, {
        click: {
          left: e.pageX - this.offset.left,
          top: e.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger('start', e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
    },
    _mouseDrag: function (e, i) {
      if ('fixed' === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo('absolute'), !i) {
        var s = this._uiHash();
        if (this._trigger('drag', e, s) === !1)
          return this._mouseUp({}), !1;
        this.position = s.position;
      }
      return this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'), this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
    },
    _mouseStop: function (e) {
      var i = this, s = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), 'original' !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ('invalid' === this.options.revert && !s || 'valid' === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger('stop', e) !== !1 && i._clear();
      }) : this._trigger('stop', e) !== !1 && this._clear(), !1) : !1;
    },
    _mouseUp: function (e) {
      return t('div.ui-draggable-iframeFix').each(function () {
        this.parentNode.removeChild(this);
      }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e);
    },
    cancel: function () {
      return this.helper.is('.ui-draggable-dragging') ? this._mouseUp({}) : this._clear(), this;
    },
    _getHandle: function (e) {
      return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
    },
    _createHelper: function (e) {
      var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : 'clone' === i.helper ? this.element.clone().removeAttr('id') : this.element;
      return s.parents('body').length || s.appendTo('parent' === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css('position')) || s.css('position', 'absolute'), s;
    },
    _adjustOffsetFromHelper: function (e) {
      'string' == typeof e && (e = e.split(' ')), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), 'left' in e && (this.offset.click.left = e.left + this.margins.left), 'right' in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 'top' in e && (this.offset.click.top = e.top + this.margins.top), 'bottom' in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      var e = this.offsetParent.offset();
      return 'absolute' === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
      };
    },
    _getRelativeOffset: function () {
      if ('relative' === this.cssPosition) {
        var t = this.element.position();
        return {
          top: t.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css('marginLeft'), 10) || 0,
        top: parseInt(this.element.css('marginTop'), 10) || 0,
        right: parseInt(this.element.css('marginRight'), 10) || 0,
        bottom: parseInt(this.element.css('marginBottom'), 10) || 0
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function () {
      var e, i, s, n = this.options;
      return n.containment ? 'window' === n.containment ? (this.containment = [
        t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
        t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
        t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left,
        t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
      ], undefined) : 'document' === n.containment ? (this.containment = [
        0,
        0,
        t(document).width() - this.helperProportions.width - this.margins.left,
        (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
      ], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ('parent' === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = 'hidden' !== i.css('overflow'), this.containment = [
        (parseInt(i.css('borderLeftWidth'), 10) || 0) + (parseInt(i.css('paddingLeft'), 10) || 0),
        (parseInt(i.css('borderTopWidth'), 10) || 0) + (parseInt(i.css('paddingTop'), 10) || 0),
        (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css('borderRightWidth'), 10) || 0) - (parseInt(i.css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
        (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css('borderBottomWidth'), 10) || 0) - (parseInt(i.css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom
      ], this.relative_container = i), undefined) : (this.containment = null, undefined);
    },
    _convertPositionTo: function (e, i) {
      i || (i = this.position);
      var s = 'absolute' === e ? 1 : -1, n = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
      return this.offset.scroll || (this.offset.scroll = {
        top: n.scrollTop(),
        left: n.scrollLeft()
      }), {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
      };
    },
    _generatePosition: function (e) {
      var i, s, n, a, o = this.options, r = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = e.pageX, h = e.pageY;
      return this.offset.scroll || (this.offset.scroll = {
        top: r.scrollTop(),
        left: r.scrollLeft()
      }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [
        this.containment[0] + s.left,
        this.containment[1] + s.top,
        this.containment[2] + s.left,
        this.containment[3] + s.top
      ]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
      };
    },
    _clear: function () {
      this.helper.removeClass('ui-draggable-dragging'), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
    },
    _trigger: function (e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [
        i,
        s
      ]), 'drag' === e && (this.positionAbs = this._convertPositionTo('absolute')), t.Widget.prototype._trigger.call(this, e, i, s);
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), t.ui.plugin.add('draggable', 'connectToSortable', {
    start: function (e, i) {
      var s = t(this).data('ui-draggable'), n = s.options, a = t.extend({}, i, { item: s.element });
      s.sortables = [], t(n.connectToSortable).each(function () {
        var i = t.data(this, 'ui-sortable');
        i && !i.options.disabled && (s.sortables.push({
          instance: i,
          shouldRevert: i.options.revert
        }), i.refreshPositions(), i._trigger('activate', e, a));
      });
    },
    stop: function (e, i) {
      var s = t(this).data('ui-draggable'), n = t.extend({}, i, { item: s.element });
      t.each(s.sortables, function () {
        this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, 'original' === s.options.helper && this.instance.currentItem.css({
          top: 'auto',
          left: 'auto'
        })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger('deactivate', e, n));
      });
    },
    drag: function (e, i) {
      var s = t(this).data('ui-draggable'), n = this;
      t.each(s.sortables, function () {
        var a = !1, o = this;
        this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function () {
          return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a;
        })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr('id').appendTo(this.instance.element).data('ui-sortable-item', !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
          return i.helper[0];
        }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger('toSortable', e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger('out', e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger('fromSortable', e), s.dropped = !1);
      });
    }
  }), t.ui.plugin.add('draggable', 'cursor', {
    start: function () {
      var e = t('body'), i = t(this).data('ui-draggable').options;
      e.css('cursor') && (i._cursor = e.css('cursor')), e.css('cursor', i.cursor);
    },
    stop: function () {
      var e = t(this).data('ui-draggable').options;
      e._cursor && t('body').css('cursor', e._cursor);
    }
  }), t.ui.plugin.add('draggable', 'opacity', {
    start: function (e, i) {
      var s = t(i.helper), n = t(this).data('ui-draggable').options;
      s.css('opacity') && (n._opacity = s.css('opacity')), s.css('opacity', n.opacity);
    },
    stop: function (e, i) {
      var s = t(this).data('ui-draggable').options;
      s._opacity && t(i.helper).css('opacity', s._opacity);
    }
  }), t.ui.plugin.add('draggable', 'scroll', {
    start: function () {
      var e = t(this).data('ui-draggable');
      e.scrollParent[0] !== document && 'HTML' !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset());
    },
    drag: function (e) {
      var i = t(this).data('ui-draggable'), s = i.options, n = !1;
      i.scrollParent[0] !== document && 'HTML' !== i.scrollParent[0].tagName ? (s.axis && 'x' === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && 'y' === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && 'x' === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && 'y' === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e);
    }
  }), t.ui.plugin.add('draggable', 'snap', {
    start: function () {
      var e = t(this).data('ui-draggable'), i = e.options;
      e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ':data(ui-draggable)' : i.snap).each(function () {
        var i = t(this), s = i.offset();
        this !== e.element[0] && e.snapElements.push({
          item: this,
          width: i.outerWidth(),
          height: i.outerHeight(),
          top: s.top,
          left: s.left
        });
      });
    },
    drag: function (e, i) {
      var s, n, a, o, r, l, h, c, u, d, p = t(this).data('ui-draggable'), g = p.options, f = g.snapTolerance, m = i.offset.left, _ = m + p.helperProportions.width, v = i.offset.top, b = v + p.helperProportions.height;
      for (u = p.snapElements.length - 1; u >= 0; u--)
        r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), { snapItem: p.snapElements[u].item })), p.snapElements[u].snapping = !1) : ('inner' !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo('relative', {
          top: h - p.helperProportions.height,
          left: 0
        }).top - p.margins.top), n && (i.position.top = p._convertPositionTo('relative', {
          top: c,
          left: 0
        }).top - p.margins.top), a && (i.position.left = p._convertPositionTo('relative', {
          top: 0,
          left: r - p.helperProportions.width
        }).left - p.margins.left), o && (i.position.left = p._convertPositionTo('relative', {
          top: 0,
          left: l
        }).left - p.margins.left)), d = s || n || a || o, 'outer' !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo('relative', {
          top: h,
          left: 0
        }).top - p.margins.top), n && (i.position.top = p._convertPositionTo('relative', {
          top: c - p.helperProportions.height,
          left: 0
        }).top - p.margins.top), a && (i.position.left = p._convertPositionTo('relative', {
          top: 0,
          left: r
        }).left - p.margins.left), o && (i.position.left = p._convertPositionTo('relative', {
          top: 0,
          left: l - p.helperProportions.width
        }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), { snapItem: p.snapElements[u].item })), p.snapElements[u].snapping = s || n || a || o || d);
    }
  }), t.ui.plugin.add('draggable', 'stack', {
    start: function () {
      var e, i = this.data('ui-draggable').options, s = t.makeArray(t(i.stack)).sort(function (e, i) {
          return (parseInt(t(e).css('zIndex'), 10) || 0) - (parseInt(t(i).css('zIndex'), 10) || 0);
        });
      s.length && (e = parseInt(t(s[0]).css('zIndex'), 10) || 0, t(s).each(function (i) {
        t(this).css('zIndex', e + i);
      }), this.css('zIndex', e + s.length));
    }
  }), t.ui.plugin.add('draggable', 'zIndex', {
    start: function (e, i) {
      var s = t(i.helper), n = t(this).data('ui-draggable').options;
      s.css('zIndex') && (n._zIndex = s.css('zIndex')), s.css('zIndex', n.zIndex);
    },
    stop: function (e, i) {
      var s = t(this).data('ui-draggable').options;
      s._zIndex && t(i.helper).css('zIndex', s._zIndex);
    }
  });
}(jQuery));
(function (t) {
  function e(t, e, i) {
    return t > e && e + i > t;
  }
  t.widget('ui.droppable', {
    version: '1.10.4',
    widgetEventPrefix: 'drop',
    options: {
      accept: '*',
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: 'default',
      tolerance: 'intersect',
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function () {
      var e, i = this.options, s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
        return t.is(s);
      }, this.proportions = function () {
        return arguments.length ? (e = arguments[0], undefined) : e ? e : e = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        };
      }, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass('ui-droppable');
    },
    _destroy: function () {
      for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)
        i[e] === this && i.splice(e, 1);
      this.element.removeClass('ui-droppable ui-droppable-disabled');
    },
    _setOption: function (e, i) {
      'accept' === e && (this.accept = t.isFunction(i) ? i : function (t) {
        return t.is(i);
      }), t.Widget.prototype._setOption.apply(this, arguments);
    },
    _activate: function (e) {
      var i = t.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger('activate', e, this.ui(i));
    },
    _deactivate: function (e) {
      var i = t.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger('deactivate', e, this.ui(i));
    },
    _over: function (e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger('over', e, this.ui(i)));
    },
    _out: function (e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('out', e, this.ui(i)));
    },
    _drop: function (e, i) {
      var s = i || t.ui.ddmanager.current, n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(':data(ui-droppable)').not('.ui-draggable-dragging').each(function () {
        var e = t.data(this, 'ui-droppable');
        return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, { offset: e.element.offset() }), e.options.tolerance) ? (n = !0, !1) : undefined;
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('drop', e, this.ui(s)), this.element) : !1) : !1;
    },
    ui: function (t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs
      };
    }
  }), t.ui.intersect = function (t, i, s) {
    if (!i.offset)
      return !1;
    var n, a, o = (t.positionAbs || t.position.absolute).left, r = (t.positionAbs || t.position.absolute).top, l = o + t.helperProportions.width, h = r + t.helperProportions.height, c = i.offset.left, u = i.offset.top, d = c + i.proportions().width, p = u + i.proportions().height;
    switch (s) {
    case 'fit':
      return o >= c && d >= l && r >= u && p >= h;
    case 'intersect':
      return o + t.helperProportions.width / 2 > c && d > l - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > h - t.helperProportions.height / 2;
    case 'pointer':
      return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, a = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(a, u, i.proportions().height) && e(n, c, i.proportions().width);
    case 'touch':
      return (r >= u && p >= r || h >= u && p >= h || u > r && h > p) && (o >= c && d >= o || l >= c && d >= l || c > o && l > d);
    default:
      return !1;
    }
  }, t.ui.ddmanager = {
    current: null,
    droppables: { 'default': [] },
    prepareOffsets: function (e, i) {
      var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [], o = i ? i.type : null, r = (e.currentItem || e.element).find(':data(ui-droppable)').addBack();
      t:
        for (s = 0; a.length > s; s++)
          if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
            for (n = 0; r.length > n; n++)
              if (r[n] === a[s].element[0]) {
                a[s].proportions().height = 0;
                continue t;
              }
            a[s].visible = 'none' !== a[s].element.css('display'), a[s].visible && ('mousedown' === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
              width: a[s].element[0].offsetWidth,
              height: a[s].element[0].offsetHeight
            }));
          }
    },
    drop: function (e, i) {
      var s = !1;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
      }), s;
    },
    dragStart: function (e, i) {
      e.element.parentsUntil('body').bind('scroll.droppable', function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    },
    drag: function (e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance), r = !o && this.isover ? 'isout' : o && !this.isover ? 'isover' : null;
          r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(':data(ui-droppable)').filter(function () {
            return t.data(this, 'ui-droppable').options.scope === n;
          }), a.length && (s = t.data(a[0], 'ui-droppable'), s.greedyChild = 'isover' === r)), s && 'isover' === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this['isout' === r ? 'isover' : 'isout'] = !1, this['isover' === r ? '_over' : '_out'].call(this, i), s && 'isout' === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
        }
      });
    },
    dragStop: function (e, i) {
      e.element.parentsUntil('body').unbind('scroll.droppable'), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    }
  };
}(jQuery));
(function (t, e) {
  var i = 'ui-effects-';
  t.effects = { effect: {} }, function (t, e) {
    function i(t, e, i) {
      var s = u[e.type] || {};
      return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
    }
    function s(i) {
      var s = h(), n = s._rgba = [];
      return i = i.toLowerCase(), f(l, function (t, a) {
        var o, r = a.re.exec(i), l = r && a.parse(r), h = a.space || 'rgba';
        return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e;
      }), n.length ? ('0,0,0,0' === n.join() && t.extend(n, a.transparent), s) : a[i];
    }
    function n(t, e, i) {
      return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
    }
    var a, o = 'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor', r = /^([\-+])=\s*(\d+\.?\d*)/, l = [
        {
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (t) {
            return [
              t[1],
              t[2],
              t[3],
              t[4]
            ];
          }
        },
        {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (t) {
            return [
              2.55 * t[1],
              2.55 * t[2],
              2.55 * t[3],
              t[4]
            ];
          }
        },
        {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function (t) {
            return [
              parseInt(t[1], 16),
              parseInt(t[2], 16),
              parseInt(t[3], 16)
            ];
          }
        },
        {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function (t) {
            return [
              parseInt(t[1] + t[1], 16),
              parseInt(t[2] + t[2], 16),
              parseInt(t[3] + t[3], 16)
            ];
          }
        },
        {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: 'hsla',
          parse: function (t) {
            return [
              t[1],
              t[2] / 100,
              t[3] / 100,
              t[4]
            ];
          }
        }
      ], h = t.Color = function (e, i, s, n) {
        return new t.Color.fn.parse(e, i, s, n);
      }, c = {
        rgba: {
          props: {
            red: {
              idx: 0,
              type: 'byte'
            },
            green: {
              idx: 1,
              type: 'byte'
            },
            blue: {
              idx: 2,
              type: 'byte'
            }
          }
        },
        hsla: {
          props: {
            hue: {
              idx: 0,
              type: 'degrees'
            },
            saturation: {
              idx: 1,
              type: 'percent'
            },
            lightness: {
              idx: 2,
              type: 'percent'
            }
          }
        }
      }, u = {
        'byte': {
          floor: !0,
          max: 255
        },
        percent: { max: 1 },
        degrees: {
          mod: 360,
          floor: !0
        }
      }, d = h.support = {}, p = t('<p>')[0], f = t.each;
    p.style.cssText = 'background-color:rgba(1,1,1,.5)', d.rgba = p.style.backgroundColor.indexOf('rgba') > -1, f(c, function (t, e) {
      e.cache = '_' + t, e.props.alpha = {
        idx: 3,
        type: 'percent',
        def: 1
      };
    }), h.fn = t.extend(h.prototype, {
      parse: function (n, o, r, l) {
        if (n === e)
          return this._rgba = [
            null,
            null,
            null,
            null
          ], this;
        (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
        var u = this, d = t.type(n), p = this._rgba = [];
        return o !== e && (n = [
          n,
          o,
          r,
          l
        ], d = 'array'), 'string' === d ? this.parse(s(n) || a._default) : 'array' === d ? (f(c.rgba.props, function (t, e) {
          p[e.idx] = i(n[e.idx], e);
        }), this) : 'object' === d ? (n instanceof h ? f(c, function (t, e) {
          n[e.cache] && (u[e.cache] = n[e.cache].slice());
        }) : f(c, function (e, s) {
          var a = s.cache;
          f(s.props, function (t, e) {
            if (!u[a] && s.to) {
              if ('alpha' === t || null == n[t])
                return;
              u[a] = s.to(u._rgba);
            }
            u[a][e.idx] = i(n[t], e, !0);
          }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])));
        }), this) : e;
      },
      is: function (t) {
        var i = h(t), s = !0, n = this;
        return f(c, function (t, a) {
          var o, r = i[a.cache];
          return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e;
          })), s;
        }), s;
      },
      _space: function () {
        var t = [], e = this;
        return f(c, function (i, s) {
          e[s.cache] && t.push(i);
        }), t.pop();
      },
      transition: function (t, e) {
        var s = h(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? h('transparent') : this, r = o[a.cache] || a.to(o._rgba), l = r.slice();
        return s = s[a.cache], f(a.props, function (t, n) {
          var a = n.idx, o = r[a], h = s[a], c = u[n.type] || {};
          null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)));
        }), this[n](l);
      },
      blend: function (e) {
        if (1 === this._rgba[3])
          return this;
        var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
        return h(t.map(i, function (t, e) {
          return (1 - s) * n[e] + s * t;
        }));
      },
      toRgbaString: function () {
        var e = 'rgba(', i = t.map(this._rgba, function (t, e) {
            return null == t ? e > 2 ? 1 : 0 : t;
          });
        return 1 === i[3] && (i.pop(), e = 'rgb('), e + i.join() + ')';
      },
      toHslaString: function () {
        var e = 'hsla(', i = t.map(this.hsla(), function (t, e) {
            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + '%'), t;
          });
        return 1 === i[3] && (i.pop(), e = 'hsl('), e + i.join() + ')';
      },
      toHexString: function (e) {
        var i = this._rgba.slice(), s = i.pop();
        return e && i.push(~~(255 * s)), '#' + t.map(i, function (t) {
          return t = (t || 0).toString(16), 1 === t.length ? '0' + t : t;
        }).join('');
      },
      toString: function () {
        return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString();
      }
    }), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [
          null,
          null,
          null,
          t[3]
        ];
      var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), l = Math.min(s, n, a), h = r - l, c = r + l, u = 0.5 * c;
      return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : 0.5 >= u ? h / c : h / (2 - c), [
        Math.round(e) % 360,
        i,
        u,
        null == o ? 1 : o
      ];
    }, c.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [
          null,
          null,
          null,
          t[3]
        ];
      var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = 0.5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
      return [
        Math.round(255 * n(r, o, e + 1 / 3)),
        Math.round(255 * n(r, o, e)),
        Math.round(255 * n(r, o, e - 1 / 3)),
        a
      ];
    }, f(c, function (s, n) {
      var a = n.props, o = n.cache, l = n.to, c = n.from;
      h.fn[s] = function (s) {
        if (l && !this[o] && (this[o] = l(this._rgba)), s === e)
          return this[o].slice();
        var n, r = t.type(s), u = 'array' === r || 'object' === r ? s : arguments, d = this[o].slice();
        return f(a, function (t, e) {
          var s = u['object' === r ? t : e.idx];
          null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
        }), c ? (n = h(c(d)), n[o] = d, n) : h(d);
      }, f(a, function (e, i) {
        h.fn[e] || (h.fn[e] = function (n) {
          var a, o = t.type(n), l = 'alpha' === e ? this._hsla ? 'hsla' : 'rgba' : s, h = this[l](), c = h[i.idx];
          return 'undefined' === o ? c : ('function' === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ('string' === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ('+' === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)));
        });
      });
    }), h.hook = function (e) {
      var i = e.split(' ');
      f(i, function (e, i) {
        t.cssHooks[i] = {
          set: function (e, n) {
            var a, o, r = '';
            if ('transparent' !== n && ('string' !== t.type(n) || (a = s(n)))) {
              if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                for (o = 'backgroundColor' === i ? e.parentNode : e; ('' === r || 'transparent' === r) && o && o.style;)
                  try {
                    r = t.css(o, 'backgroundColor'), o = o.parentNode;
                  } catch (l) {
                  }
                n = n.blend(r && 'transparent' !== r ? r : '_default');
              }
              n = n.toRgbaString();
            }
            try {
              e.style[i] = n;
            } catch (l) {
            }
          }
        }, t.fx.step[i] = function (e) {
          e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
        };
      });
    }, h.hook(o), t.cssHooks.borderColor = {
      expand: function (t) {
        var e = {};
        return f([
          'Top',
          'Right',
          'Bottom',
          'Left'
        ], function (i, s) {
          e['border' + s + 'Color'] = t;
        }), e;
      }
    }, a = t.Color.names = {
      aqua: '#00ffff',
      black: '#000000',
      blue: '#0000ff',
      fuchsia: '#ff00ff',
      gray: '#808080',
      green: '#008000',
      lime: '#00ff00',
      maroon: '#800000',
      navy: '#000080',
      olive: '#808000',
      purple: '#800080',
      red: '#ff0000',
      silver: '#c0c0c0',
      teal: '#008080',
      white: '#ffffff',
      yellow: '#ffff00',
      transparent: [
        null,
        null,
        null,
        0
      ],
      _default: '#ffffff'
    };
  }(jQuery), function () {
    function i(e) {
      var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
      if (n && n.length && n[0] && n[n[0]])
        for (s = n.length; s--;)
          i = n[s], 'string' == typeof n[i] && (a[t.camelCase(i)] = n[i]);
      else
        for (i in n)
          'string' == typeof n[i] && (a[i] = n[i]);
      return a;
    }
    function s(e, i) {
      var s, n, o = {};
      for (s in i)
        n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
      return o;
    }
    var n = [
        'add',
        'remove',
        'toggle'
      ], a = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
      };
    t.each([
      'borderLeftStyle',
      'borderRightStyle',
      'borderBottomStyle',
      'borderTopStyle'
    ], function (e, i) {
      t.fx.step[i] = function (t) {
        ('none' !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0);
      };
    }), t.fn.addBack || (t.fn.addBack = function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.effects.animateClass = function (e, a, o, r) {
      var l = t.speed(a, o, r);
      return this.queue(function () {
        var a, o = t(this), r = o.attr('class') || '', h = l.children ? o.find('*').addBack() : o;
        h = h.map(function () {
          var e = t(this);
          return {
            el: e,
            start: i(this)
          };
        }), a = function () {
          t.each(n, function (t, i) {
            e[i] && o[i + 'Class'](e[i]);
          });
        }, a(), h = h.map(function () {
          return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this;
        }), o.attr('class', r), h = h.map(function () {
          var e = this, i = t.Deferred(), s = t.extend({}, l, {
              queue: !1,
              complete: function () {
                i.resolve(e);
              }
            });
          return this.el.animate(this.diff, s), i.promise();
        }), t.when.apply(t, h.get()).done(function () {
          a(), t.each(arguments, function () {
            var e = this.el;
            t.each(this.diff, function (t) {
              e.css(t, '');
            });
          }), l.complete.call(o[0]);
        });
      });
    }, t.fn.extend({
      addClass: function (e) {
        return function (i, s, n, a) {
          return s ? t.effects.animateClass.call(this, { add: i }, s, n, a) : e.apply(this, arguments);
        };
      }(t.fn.addClass),
      removeClass: function (e) {
        return function (i, s, n, a) {
          return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, a) : e.apply(this, arguments);
        };
      }(t.fn.removeClass),
      toggleClass: function (i) {
        return function (s, n, a, o, r) {
          return 'boolean' == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? { add: s } : { remove: s }, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: s }, n, a, o);
        };
      }(t.fn.toggleClass),
      switchClass: function (e, i, s, n, a) {
        return t.effects.animateClass.call(this, {
          add: i,
          remove: e
        }, s, n, a);
      }
    });
  }(), function () {
    function s(e, i, s, n) {
      return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ('number' == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : 'number' == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e;
    }
    function n(e) {
      return !e || 'number' == typeof e || t.fx.speeds[e] ? !0 : 'string' != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : 'object' != typeof e || e.effect ? !1 : !0 : !0;
    }
    t.extend(t.effects, {
      version: '1.10.4',
      save: function (t, e) {
        for (var s = 0; e.length > s; s++)
          null !== e[s] && t.data(i + e[s], t[0].style[e[s]]);
      },
      restore: function (t, s) {
        var n, a;
        for (a = 0; s.length > a; a++)
          null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ''), t.css(s[a], n));
      },
      setMode: function (t, e) {
        return 'toggle' === e && (e = t.is(':hidden') ? 'show' : 'hide'), e;
      },
      getBaseline: function (t, e) {
        var i, s;
        switch (t[0]) {
        case 'top':
          i = 0;
          break;
        case 'middle':
          i = 0.5;
          break;
        case 'bottom':
          i = 1;
          break;
        default:
          i = t[0] / e.height;
        }
        switch (t[1]) {
        case 'left':
          s = 0;
          break;
        case 'center':
          s = 0.5;
          break;
        case 'right':
          s = 1;
          break;
        default:
          s = t[1] / e.width;
        }
        return {
          x: s,
          y: i
        };
      },
      createWrapper: function (e) {
        if (e.parent().is('.ui-effects-wrapper'))
          return e.parent();
        var i = {
            width: e.outerWidth(!0),
            height: e.outerHeight(!0),
            'float': e.css('float')
          }, s = t('<div></div>').addClass('ui-effects-wrapper').css({
            fontSize: '100%',
            background: 'transparent',
            border: 'none',
            margin: 0,
            padding: 0
          }), n = {
            width: e.width(),
            height: e.height()
          }, a = document.activeElement;
        try {
          a.id;
        } catch (o) {
          a = document.body;
        }
        return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), 'static' === e.css('position') ? (s.css({ position: 'relative' }), e.css({ position: 'relative' })) : (t.extend(i, {
          position: e.css('position'),
          zIndex: e.css('z-index')
        }), t.each([
          'top',
          'left',
          'bottom',
          'right'
        ], function (t, s) {
          i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = 'auto');
        }), e.css({
          position: 'relative',
          top: 0,
          left: 0,
          right: 'auto',
          bottom: 'auto'
        })), e.css(n), s.css(i).show();
      },
      removeWrapper: function (e) {
        var i = document.activeElement;
        return e.parent().is('.ui-effects-wrapper') && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e;
      },
      setTransition: function (e, i, s, n) {
        return n = n || {}, t.each(i, function (t, i) {
          var a = e.cssUnit(i);
          a[0] > 0 && (n[i] = a[0] * s + a[1]);
        }), n;
      }
    }), t.fn.extend({
      effect: function () {
        function e(e) {
          function s() {
            t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e();
          }
          var n = t(this), a = i.complete, r = i.mode;
          (n.is(':hidden') ? 'hide' === r : 'show' === r) ? (n[r](), s()) : o.call(n[0], i, s);
        }
        var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect];
        return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
          i.complete && i.complete.call(this);
        }) : a === !1 ? this.each(e) : this.queue(a || 'fx', e);
      },
      show: function (t) {
        return function (e) {
          if (n(e))
            return t.apply(this, arguments);
          var i = s.apply(this, arguments);
          return i.mode = 'show', this.effect.call(this, i);
        };
      }(t.fn.show),
      hide: function (t) {
        return function (e) {
          if (n(e))
            return t.apply(this, arguments);
          var i = s.apply(this, arguments);
          return i.mode = 'hide', this.effect.call(this, i);
        };
      }(t.fn.hide),
      toggle: function (t) {
        return function (e) {
          if (n(e) || 'boolean' == typeof e)
            return t.apply(this, arguments);
          var i = s.apply(this, arguments);
          return i.mode = 'toggle', this.effect.call(this, i);
        };
      }(t.fn.toggle),
      cssUnit: function (e) {
        var i = this.css(e), s = [];
        return t.each([
          'em',
          'px',
          '%',
          'pt'
        ], function (t, e) {
          i.indexOf(e) > 0 && (s = [
            parseFloat(i),
            e
          ]);
        }), s;
      }
    });
  }(), function () {
    var e = {};
    t.each([
      'Quad',
      'Cubic',
      'Quart',
      'Quint',
      'Expo'
    ], function (t, i) {
      e[i] = function (e) {
        return Math.pow(e, t + 2);
      };
    }), t.extend(e, {
      Sine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      },
      Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function (t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
      },
      Back: function (t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function (t) {
        for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);
        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
      }
    }), t.each(e, function (e, i) {
      t.easing['easeIn' + e] = i, t.easing['easeOut' + e] = function (t) {
        return 1 - i(1 - t);
      }, t.easing['easeInOut' + e] = function (t) {
        return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
      };
    });
  }();
}(jQuery));
(function (t) {
  var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
  t.effects.effect.blind = function (s, n) {
    var a, o, r, l = t(this), h = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'height',
        'width'
      ], c = t.effects.setMode(l, s.mode || 'hide'), u = s.direction || 'up', d = e.test(u), p = d ? 'height' : 'width', f = d ? 'top' : 'left', g = i.test(u), m = {}, v = 'show' === c;
    l.parent().is('.ui-effects-wrapper') ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({ overflow: 'hidden' }), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(d ? 'bottom' : 'right', 0).css(d ? 'top' : 'left', 'auto').css({ position: 'absolute' }), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {
      duration: s.duration,
      easing: s.easing,
      queue: !1,
      complete: function () {
        'hide' === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n();
      }
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.bounce = function (e, i) {
    var s, n, a, o = t(this), r = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'height',
        'width'
      ], l = t.effects.setMode(o, e.mode || 'effect'), h = 'hide' === l, c = 'show' === l, u = e.direction || 'up', d = e.distance, p = e.times || 5, f = 2 * p + (c || h ? 1 : 0), g = e.duration / f, m = e.easing, v = 'up' === u || 'down' === u ? 'top' : 'left', _ = 'up' === u || 'left' === u, b = o.queue(), y = b.length;
    for ((c || h) && r.push('opacity'), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o['top' === v ? 'outerHeight' : 'outerWidth']() / 3), c && (a = { opacity: 1 }, a[v] = 0, o.css('opacity', 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)
      n = {}, n[v] = (_ ? '-=' : '+=') + d, o.animate(n, g, m).animate(a, g, m), d = h ? 2 * d : d / 2;
    h && (n = { opacity: 0 }, n[v] = (_ ? '-=' : '+=') + d, o.animate(n, g, m)), o.queue(function () {
      h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i();
    }), y > 1 && b.splice.apply(b, [
      1,
      0
    ].concat(b.splice(y, f + 1))), o.dequeue();
  };
}(jQuery));
(function (t) {
  t.effects.effect.clip = function (e, i) {
    var s, n, a, o = t(this), r = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'height',
        'width'
      ], l = t.effects.setMode(o, e.mode || 'hide'), h = 'show' === l, c = e.direction || 'vertical', u = 'vertical' === c, d = u ? 'height' : 'width', p = u ? 'top' : 'left', f = {};
    t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({ overflow: 'hidden' }), n = 'IMG' === o[0].tagName ? s : o, a = n[d](), h && (n.css(d, 0), n.css(p, a / 2)), f[d] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function () {
        h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i();
      }
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.drop = function (e, i) {
    var s, n = t(this), a = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'opacity',
        'height',
        'width'
      ], o = t.effects.setMode(n, e.mode || 'hide'), r = 'show' === o, l = e.direction || 'left', h = 'up' === l || 'down' === l ? 'top' : 'left', c = 'up' === l || 'left' === l ? 'pos' : 'neg', u = { opacity: r ? 1 : 0 };
    t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n['top' === h ? 'outerHeight' : 'outerWidth'](!0) / 2, r && n.css('opacity', 0).css(h, 'pos' === c ? -s : s), u[h] = (r ? 'pos' === c ? '+=' : '-=' : 'pos' === c ? '-=' : '+=') + s, n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function () {
        'hide' === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i();
      }
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.explode = function (e, i) {
    function s() {
      b.push(this), b.length === u * d && n();
    }
    function n() {
      p.css({ visibility: 'visible' }), t(b).remove(), g || p.hide(), i();
    }
    var a, o, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = t.effects.setMode(p, e.mode || 'hide'), g = 'show' === f, m = p.show().css('visibility', 'hidden').offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = [];
    for (a = 0; u > a; a++)
      for (l = m.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++)
        r = m.left + o * v, h = o - (d - 1) / 2, p.clone().appendTo('body').wrap('<div></div>').css({
          position: 'absolute',
          visibility: 'visible',
          left: -o * v,
          top: -a * _
        }).parent().addClass('ui-effects-explode').css({
          position: 'absolute',
          overflow: 'hidden',
          width: v,
          height: _,
          left: r + (g ? h * v : 0),
          top: l + (g ? c * _ : 0),
          opacity: g ? 0 : 1
        }).animate({
          left: r + (g ? 0 : h * v),
          top: l + (g ? 0 : c * _),
          opacity: g ? 1 : 0
        }, e.duration || 500, e.easing, s);
  };
}(jQuery));
(function (t) {
  t.effects.effect.fade = function (e, i) {
    var s = t(this), n = t.effects.setMode(s, e.mode || 'toggle');
    s.animate({ opacity: n }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.fold = function (e, i) {
    var s, n, a = t(this), o = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'height',
        'width'
      ], r = t.effects.setMode(a, e.mode || 'hide'), l = 'show' === r, h = 'hide' === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = l !== d, f = p ? [
        'width',
        'height'
      ] : [
        'height',
        'width'
      ], g = e.duration / 2, m = {}, v = {};
    t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({ overflow: 'hidden' }), n = p ? [
      s.width(),
      s.height()
    ] : [
      s.height(),
      s.width()
    ], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {
      height: 0,
      width: c
    } : {
      height: c,
      width: 0
    }), m[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
      h && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i();
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.highlight = function (e, i) {
    var s = t(this), n = [
        'backgroundImage',
        'backgroundColor',
        'opacity'
      ], a = t.effects.setMode(s, e.mode || 'show'), o = { backgroundColor: s.css('backgroundColor') };
    'hide' === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
      backgroundImage: 'none',
      backgroundColor: e.color || '#ffff99'
    }).animate(o, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function () {
        'hide' === a && s.hide(), t.effects.restore(s, n), i();
      }
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.pulsate = function (e, i) {
    var s, n = t(this), a = t.effects.setMode(n, e.mode || 'show'), o = 'show' === a, r = 'hide' === a, l = o || 'hide' === a, h = 2 * (e.times || 5) + (l ? 1 : 0), c = e.duration / h, u = 0, d = n.queue(), p = d.length;
    for ((o || !n.is(':visible')) && (n.css('opacity', 0).show(), u = 1), s = 1; h > s; s++)
      n.animate({ opacity: u }, c, e.easing), u = 1 - u;
    n.animate({ opacity: u }, c, e.easing), n.queue(function () {
      r && n.hide(), i();
    }), p > 1 && d.splice.apply(d, [
      1,
      0
    ].concat(d.splice(p, h + 1))), n.dequeue();
  };
}(jQuery));
(function (t) {
  t.effects.effect.puff = function (e, i) {
    var s = t(this), n = t.effects.setMode(s, e.mode || 'hide'), a = 'hide' === n, o = parseInt(e.percent, 10) || 150, r = o / 100, l = {
        height: s.height(),
        width: s.width(),
        outerHeight: s.outerHeight(),
        outerWidth: s.outerWidth()
      };
    t.extend(e, {
      effect: 'scale',
      queue: !1,
      fade: !0,
      mode: n,
      complete: i,
      percent: a ? o : 100,
      from: a ? l : {
        height: l.height * r,
        width: l.width * r,
        outerHeight: l.outerHeight * r,
        outerWidth: l.outerWidth * r
      }
    }), s.effect(e);
  }, t.effects.effect.scale = function (e, i) {
    var s = t(this), n = t.extend(!0, {}, e), a = t.effects.setMode(s, e.mode || 'effect'), o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : 'hide' === a ? 0 : 100), r = e.direction || 'both', l = e.origin, h = {
        height: s.height(),
        width: s.width(),
        outerHeight: s.outerHeight(),
        outerWidth: s.outerWidth()
      }, c = {
        y: 'horizontal' !== r ? o / 100 : 1,
        x: 'vertical' !== r ? o / 100 : 1
      };
    n.effect = 'size', n.queue = !1, n.complete = i, 'effect' !== a && (n.origin = l || [
      'middle',
      'center'
    ], n.restore = !0), n.from = e.from || ('show' === a ? {
      height: 0,
      width: 0,
      outerHeight: 0,
      outerWidth: 0
    } : h), n.to = {
      height: h.height * c.y,
      width: h.width * c.x,
      outerHeight: h.outerHeight * c.y,
      outerWidth: h.outerWidth * c.x
    }, n.fade && ('show' === a && (n.from.opacity = 0, n.to.opacity = 1), 'hide' === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n);
  }, t.effects.effect.size = function (e, i) {
    var s, n, a, o = t(this), r = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'width',
        'height',
        'overflow',
        'opacity'
      ], l = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'overflow',
        'opacity'
      ], h = [
        'width',
        'height',
        'overflow'
      ], c = ['fontSize'], u = [
        'borderTopWidth',
        'borderBottomWidth',
        'paddingTop',
        'paddingBottom'
      ], d = [
        'borderLeftWidth',
        'borderRightWidth',
        'paddingLeft',
        'paddingRight'
      ], p = t.effects.setMode(o, e.mode || 'effect'), f = e.restore || 'effect' !== p, g = e.scale || 'both', m = e.origin || [
        'middle',
        'center'
      ], v = o.css('position'), _ = f ? r : l, b = {
        height: 0,
        width: 0,
        outerHeight: 0,
        outerWidth: 0
      };
    'show' === p && o.show(), s = {
      height: o.height(),
      width: o.width(),
      outerHeight: o.outerHeight(),
      outerWidth: o.outerWidth()
    }, 'toggle' === e.mode && 'show' === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ('show' === p ? b : s), o.to = e.to || ('hide' === p ? b : s)), a = {
      from: {
        y: o.from.height / s.height,
        x: o.from.width / s.width
      },
      to: {
        y: o.to.height / s.height,
        x: o.to.width / s.width
      }
    }, ('box' === g || 'both' === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ('content' === g || 'both' === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css('overflow', 'hidden').css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ('content' === g || 'both' === g) && (u = u.concat([
      'marginTop',
      'marginBottom'
    ]).concat(c), d = d.concat([
      'marginLeft',
      'marginRight'
    ]), h = r.concat(u).concat(d), o.find('*[width]').each(function () {
      var i = t(this), s = {
          height: i.height(),
          width: i.width(),
          outerHeight: i.outerHeight(),
          outerWidth: i.outerWidth()
        };
      f && t.effects.save(i, h), i.from = {
        height: s.height * a.from.y,
        width: s.width * a.from.x,
        outerHeight: s.outerHeight * a.from.y,
        outerWidth: s.outerWidth * a.from.x
      }, i.to = {
        height: s.height * a.to.y,
        width: s.width * a.to.x,
        outerHeight: s.height * a.to.y,
        outerWidth: s.width * a.to.x
      }, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
        f && t.effects.restore(i, h);
      });
    })), o.animate(o.to, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function () {
        0 === o.to.opacity && o.css('opacity', o.from.opacity), 'hide' === p && o.hide(), t.effects.restore(o, _), f || ('static' === v ? o.css({
          position: 'relative',
          top: o.to.top,
          left: o.to.left
        }) : t.each([
          'top',
          'left'
        ], function (t, e) {
          o.css(e, function (e, i) {
            var s = parseInt(i, 10), n = t ? o.to.left : o.to.top;
            return 'auto' === i ? n + 'px' : s + n + 'px';
          });
        })), t.effects.removeWrapper(o), i();
      }
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.shake = function (e, i) {
    var s, n = t(this), a = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'height',
        'width'
      ], o = t.effects.setMode(n, e.mode || 'effect'), r = e.direction || 'left', l = e.distance || 20, h = e.times || 3, c = 2 * h + 1, u = Math.round(e.duration / c), d = 'up' === r || 'down' === r ? 'top' : 'left', p = 'up' === r || 'left' === r, f = {}, g = {}, m = {}, v = n.queue(), _ = v.length;
    for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? '-=' : '+=') + l, g[d] = (p ? '+=' : '-=') + 2 * l, m[d] = (p ? '-=' : '+=') + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++)
      n.animate(g, u, e.easing).animate(m, u, e.easing);
    n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
      'hide' === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i();
    }), _ > 1 && v.splice.apply(v, [
      1,
      0
    ].concat(v.splice(_, c + 1))), n.dequeue();
  };
}(jQuery));
(function (t) {
  t.effects.effect.slide = function (e, i) {
    var s, n = t(this), a = [
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'width',
        'height'
      ], o = t.effects.setMode(n, e.mode || 'show'), r = 'show' === o, l = e.direction || 'left', h = 'up' === l || 'down' === l ? 'top' : 'left', c = 'up' === l || 'left' === l, u = {};
    t.effects.save(n, a), n.show(), s = e.distance || n['top' === h ? 'outerHeight' : 'outerWidth'](!0), t.effects.createWrapper(n).css({ overflow: 'hidden' }), r && n.css(h, c ? isNaN(s) ? '-' + s : -s : s), u[h] = (r ? c ? '+=' : '-=' : c ? '-=' : '+=') + s, n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function () {
        'hide' === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i();
      }
    });
  };
}(jQuery));
(function (t) {
  t.effects.effect.transfer = function (e, i) {
    var s = t(this), n = t(e.to), a = 'fixed' === n.css('position'), o = t('body'), r = a ? o.scrollTop() : 0, l = a ? o.scrollLeft() : 0, h = n.offset(), c = {
        top: h.top - r,
        left: h.left - l,
        height: n.innerHeight(),
        width: n.innerWidth()
      }, u = s.offset(), d = t('<div class=\'ui-effects-transfer\'></div>').appendTo(document.body).addClass(e.className).css({
        top: u.top - r,
        left: u.left - l,
        height: s.innerHeight(),
        width: s.innerWidth(),
        position: a ? 'fixed' : 'absolute'
      }).animate(c, e.duration, e.easing, function () {
        d.remove(), i();
      });
  };
}(jQuery));
(function (t) {
  t.widget('ui.menu', {
    version: '1.10.4',
    defaultElement: '<ul>',
    delay: 300,
    options: {
      icons: { submenu: 'ui-icon-carat-1-e' },
      menus: 'ul',
      position: {
        my: 'left top',
        at: 'right top'
      },
      role: 'menu',
      blur: null,
      focus: null,
      select: null
    },
    _create: function () {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass('ui-menu ui-widget ui-widget-content ui-corner-all').toggleClass('ui-menu-icons', !!this.element.find('.ui-icon').length).attr({
        role: this.options.role,
        tabIndex: 0
      }).bind('click' + this.eventNamespace, t.proxy(function (t) {
        this.options.disabled && t.preventDefault();
      }, this)), this.options.disabled && this.element.addClass('ui-state-disabled').attr('aria-disabled', 'true'), this._on({
        'mousedown .ui-menu-item > a': function (t) {
          t.preventDefault();
        },
        'click .ui-state-disabled > a': function (t) {
          t.preventDefault();
        },
        'click .ui-menu-item:has(a)': function (e) {
          var i = t(e.target).closest('.ui-menu-item');
          !this.mouseHandled && i.not('.ui-state-disabled').length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has('.ui-menu').length ? this.expand(e) : !this.element.is(':focus') && t(this.document[0].activeElement).closest('.ui-menu').length && (this.element.trigger('focus', [!0]), this.active && 1 === this.active.parents('.ui-menu').length && clearTimeout(this.timer)));
        },
        'mouseenter .ui-menu-item': function (e) {
          var i = t(e.currentTarget);
          i.siblings().children('.ui-state-active').removeClass('ui-state-active'), this.focus(e, i);
        },
        mouseleave: 'collapseAll',
        'mouseleave .ui-menu': 'collapseAll',
        focus: function (t, e) {
          var i = this.active || this.element.children('.ui-menu-item').eq(0);
          e || this.focus(t, i);
        },
        blur: function (e) {
          this._delay(function () {
            t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e);
          });
        },
        keydown: '_keydown'
      }), this.refresh(), this._on(this.document, {
        click: function (e) {
          t(e.target).closest('.ui-menu').length || this.collapseAll(e), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function () {
      this.element.removeAttr('aria-activedescendant').find('.ui-menu').addBack().removeClass('ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons').removeAttr('role').removeAttr('tabIndex').removeAttr('aria-labelledby').removeAttr('aria-expanded').removeAttr('aria-hidden').removeAttr('aria-disabled').removeUniqueId().show(), this.element.find('.ui-menu-item').removeClass('ui-menu-item').removeAttr('role').removeAttr('aria-disabled').children('a').removeUniqueId().removeClass('ui-corner-all ui-state-hover').removeAttr('tabIndex').removeAttr('role').removeAttr('aria-haspopup').children().each(function () {
        var e = t(this);
        e.data('ui-menu-submenu-carat') && e.remove();
      }), this.element.find('.ui-menu-divider').removeClass('ui-menu-divider ui-widget-content');
    },
    _keydown: function (e) {
      function i(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      }
      var s, n, a, o, r, l = !0;
      switch (e.keyCode) {
      case t.ui.keyCode.PAGE_UP:
        this.previousPage(e);
        break;
      case t.ui.keyCode.PAGE_DOWN:
        this.nextPage(e);
        break;
      case t.ui.keyCode.HOME:
        this._move('first', 'first', e);
        break;
      case t.ui.keyCode.END:
        this._move('last', 'last', e);
        break;
      case t.ui.keyCode.UP:
        this.previous(e);
        break;
      case t.ui.keyCode.DOWN:
        this.next(e);
        break;
      case t.ui.keyCode.LEFT:
        this.collapse(e);
        break;
      case t.ui.keyCode.RIGHT:
        this.active && !this.active.is('.ui-state-disabled') && this.expand(e);
        break;
      case t.ui.keyCode.ENTER:
      case t.ui.keyCode.SPACE:
        this._activate(e);
        break;
      case t.ui.keyCode.ESCAPE:
        this.collapse(e);
        break;
      default:
        l = !1, n = this.previousFilter || '', a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp('^' + i(a), 'i'), s = this.activeMenu.children('.ui-menu-item').filter(function () {
          return r.test(t(this).children('a').text());
        }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll('.ui-menu-item') : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp('^' + i(a), 'i'), s = this.activeMenu.children('.ui-menu-item').filter(function () {
          return r.test(t(this).children('a').text());
        })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
          delete this.previousFilter;
        }, 1000)) : delete this.previousFilter) : delete this.previousFilter;
      }
      l && e.preventDefault();
    },
    _activate: function (t) {
      this.active.is('.ui-state-disabled') || (this.active.children('a[aria-haspopup=\'true\']').length ? this.expand(t) : this.select(t));
    },
    refresh: function () {
      var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
      this.element.toggleClass('ui-menu-icons', !!this.element.find('.ui-icon').length), s.filter(':not(.ui-menu)').addClass('ui-menu ui-widget ui-widget-content ui-corner-all').hide().attr({
        role: this.options.role,
        'aria-hidden': 'true',
        'aria-expanded': 'false'
      }).each(function () {
        var e = t(this), s = e.prev('a'), n = t('<span>').addClass('ui-menu-icon ui-icon ' + i).data('ui-menu-submenu-carat', !0);
        s.attr('aria-haspopup', 'true').prepend(n), e.attr('aria-labelledby', s.attr('id'));
      }), e = s.add(this.element), e.children(':not(.ui-menu-item):has(a)').addClass('ui-menu-item').attr('role', 'presentation').children('a').uniqueId().addClass('ui-corner-all').attr({
        tabIndex: -1,
        role: this._itemRole()
      }), e.children(':not(.ui-menu-item)').each(function () {
        var e = t(this);
        /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass('ui-widget-content ui-menu-divider');
      }), e.children('.ui-state-disabled').attr('aria-disabled', 'true'), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function () {
      return {
        menu: 'menuitem',
        listbox: 'option'
      }[this.options.role];
    },
    _setOption: function (t, e) {
      'icons' === t && this.element.find('.ui-menu-icon').removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e);
    },
    focus: function (t, e) {
      var i, s;
      this.blur(t, t && 'focus' === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children('a').addClass('ui-state-focus'), this.options.role && this.element.attr('aria-activedescendant', s.attr('id')), this.active.parent().closest('.ui-menu-item').children('a:first').addClass('ui-state-active'), t && 'keydown' === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = e.children('.ui-menu'), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger('focus', t, { item: e });
    },
    _scrollIntoView: function (e) {
      var i, s, n, a, o, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], 'borderTopWidth')) || 0, s = parseFloat(t.css(this.activeMenu[0], 'paddingTop')) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r));
    },
    blur: function (t, e) {
      e || clearTimeout(this.timer), this.active && (this.active.children('a').removeClass('ui-state-focus'), this.active = null, this._trigger('blur', t, { item: this.active }));
    },
    _startOpening: function (t) {
      clearTimeout(this.timer), 'true' === t.attr('aria-hidden') && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    },
    _open: function (e) {
      var i = t.extend({ of: this.active }, this.options.position);
      clearTimeout(this.timer), this.element.find('.ui-menu').not(e.parents('.ui-menu')).hide().attr('aria-hidden', 'true'), e.show().removeAttr('aria-hidden').attr('aria-expanded', 'true').position(i);
    },
    collapseAll: function (e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : t(e && e.target).closest(this.element.find('.ui-menu'));
        s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s;
      }, this.delay);
    },
    _close: function (t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find('.ui-menu').hide().attr('aria-hidden', 'true').attr('aria-expanded', 'false').end().find('a.ui-state-active').removeClass('ui-state-active');
    },
    collapse: function (t) {
      var e = this.active && this.active.parent().closest('.ui-menu-item', this.element);
      e && e.length && (this._close(), this.focus(t, e));
    },
    expand: function (t) {
      var e = this.active && this.active.children('.ui-menu ').children('.ui-menu-item').first();
      e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    },
    next: function (t) {
      this._move('next', 'first', t);
    },
    previous: function (t) {
      this._move('prev', 'last', t);
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll('.ui-menu-item').length;
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll('.ui-menu-item').length;
    },
    _move: function (t, e, i) {
      var s;
      this.active && (s = 'first' === t || 'last' === t ? this.active['first' === t ? 'prevAll' : 'nextAll']('.ui-menu-item').eq(-1) : this.active[t + 'All']('.ui-menu-item').eq(0)), s && s.length && this.active || (s = this.activeMenu.children('.ui-menu-item')[e]()), this.focus(i, s);
    },
    nextPage: function (e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll('.ui-menu-item').each(function () {
        return i = t(this), 0 > i.offset().top - s - n;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.children('.ui-menu-item')[this.active ? 'last' : 'first']())), undefined) : (this.next(e), undefined);
    },
    previousPage: function (e) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll('.ui-menu-item').each(function () {
        return i = t(this), i.offset().top - s + n > 0;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.children('.ui-menu-item').first())), undefined) : (this.next(e), undefined);
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop('scrollHeight');
    },
    select: function (e) {
      this.active = this.active || t(e.target).closest('.ui-menu-item');
      var i = { item: this.active };
      this.active.has('.ui-menu').length || this.collapseAll(e, !0), this._trigger('select', e, i);
    }
  });
}(jQuery));
(function (t, e) {
  t.widget('ui.progressbar', {
    version: '1.10.4',
    options: {
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function () {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').attr({
        role: 'progressbar',
        'aria-valuemin': this.min
      }), this.valueDiv = t('<div class=\'ui-progressbar-value ui-widget-header ui-corner-left\'></div>').appendTo(this.element), this._refreshValue();
    },
    _destroy: function () {
      this.element.removeClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').removeAttr('role').removeAttr('aria-valuemin').removeAttr('aria-valuemax').removeAttr('aria-valuenow'), this.valueDiv.remove();
    },
    value: function (t) {
      return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e);
    },
    _constrainedValue: function (t) {
      return t === e && (t = this.options.value), this.indeterminate = t === !1, 'number' != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t));
    },
    _setOptions: function (t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue();
    },
    _setOption: function (t, e) {
      'max' === t && (e = Math.max(this.min, e)), this._super(t, e);
    },
    _percentage: function () {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    },
    _refreshValue: function () {
      var e = this.options.value, i = this._percentage();
      this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass('ui-corner-right', e === this.options.max).width(i.toFixed(0) + '%'), this.element.toggleClass('ui-progressbar-indeterminate', this.indeterminate), this.indeterminate ? (this.element.removeAttr('aria-valuenow'), this.overlayDiv || (this.overlayDiv = t('<div class=\'ui-progressbar-overlay\'></div>').appendTo(this.valueDiv))) : (this.element.attr({
        'aria-valuemax': this.options.max,
        'aria-valuenow': e
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger('change')), e === this.options.max && this._trigger('complete');
    }
  });
}(jQuery));
(function (t) {
  function e(t) {
    return parseInt(t, 10) || 0;
  }
  function i(t) {
    return !isNaN(parseInt(t, 10));
  }
  t.widget('ui.resizable', t.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'resize',
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: 'slow',
      animateEasing: 'swing',
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: 'e,s,se',
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _create: function () {
      var e, i, s, n, a, o = this, r = this.options;
      if (this.element.addClass('ui-resizable'), t.extend(this, {
          _aspectRatio: !!r.aspectRatio,
          aspectRatio: r.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: r.helper || r.ghost || r.animate ? r.helper || 'ui-resizable-helper' : null
        }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class=\'ui-wrapper\' style=\'overflow: hidden;\'></div>').css({
          position: this.element.css('position'),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css('top'),
          left: this.element.css('left')
        })), this.element = this.element.parent().data('ui-resizable', this.element.data('ui-resizable')), this.elementIsWrapper = !0, this.element.css({
          marginLeft: this.originalElement.css('marginLeft'),
          marginTop: this.originalElement.css('marginTop'),
          marginRight: this.originalElement.css('marginRight'),
          marginBottom: this.originalElement.css('marginBottom')
        }), this.originalElement.css({
          marginLeft: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0
        }), this.originalResizeStyle = this.originalElement.css('resize'), this.originalElement.css('resize', 'none'), this._proportionallyResizeElements.push(this.originalElement.css({
          position: 'static',
          zoom: 1,
          display: 'block'
        })), this.originalElement.css({ margin: this.originalElement.css('margin') }), this._proportionallyResize()), this.handles = r.handles || (t('.ui-resizable-handle', this.element).length ? {
          n: '.ui-resizable-n',
          e: '.ui-resizable-e',
          s: '.ui-resizable-s',
          w: '.ui-resizable-w',
          se: '.ui-resizable-se',
          sw: '.ui-resizable-sw',
          ne: '.ui-resizable-ne',
          nw: '.ui-resizable-nw'
        } : 'e,s,se'), this.handles.constructor === String)
        for ('all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'), e = this.handles.split(','), this.handles = {}, i = 0; e.length > i; i++)
          s = t.trim(e[i]), a = 'ui-resizable-' + s, n = t('<div class=\'ui-resizable-handle ' + a + '\'></div>'), n.css({ zIndex: r.zIndex }), 'se' === s && n.addClass('ui-icon ui-icon-gripsmall-diagonal-se'), this.handles[s] = '.ui-resizable-' + s, this.element.append(n);
      this._renderAxis = function (e) {
        var i, s, n, a;
        e = e || this.element;
        for (i in this.handles)
          this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = [
            'padding',
            /ne|nw|n/.test(i) ? 'Top' : /se|sw|s/.test(i) ? 'Bottom' : /^e$/.test(i) ? 'Right' : 'Left'
          ].join(''), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length;
      }, this._renderAxis(this.element), this._handles = t('.ui-resizable-handle', this.element).disableSelection(), this._handles.mouseover(function () {
        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : 'se');
      }), r.autoHide && (this._handles.hide(), t(this.element).addClass('ui-resizable-autohide').mouseenter(function () {
        r.disabled || (t(this).removeClass('ui-resizable-autohide'), o._handles.show());
      }).mouseleave(function () {
        r.disabled || o.resizing || (t(this).addClass('ui-resizable-autohide'), o._handles.hide());
      })), this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy();
      var e, i = function (e) {
          t(e).removeClass('ui-resizable ui-resizable-disabled ui-resizable-resizing').removeData('resizable').removeData('ui-resizable').unbind('.resizable').find('.ui-resizable-handle').remove();
        };
      return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
        position: e.css('position'),
        width: e.outerWidth(),
        height: e.outerHeight(),
        top: e.css('top'),
        left: e.css('left')
      }).insertAfter(e), e.remove()), this.originalElement.css('resize', this.originalResizeStyle), i(this.originalElement), this;
    },
    _mouseCapture: function (e) {
      var i, s, n = !1;
      for (i in this.handles)
        s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
      return !this.options.disabled && n;
    },
    _mouseStart: function (i) {
      var s, n, a, o = this.options, r = this.element.position(), h = this.element;
      return this.resizing = !0, /absolute/.test(h.css('position')) ? h.css({
        position: 'absolute',
        top: h.css('top'),
        left: h.css('left')
      }) : h.is('.ui-draggable') && h.css({
        position: 'absolute',
        top: r.top,
        left: r.left
      }), this._renderProxy(), s = e(this.helper.css('left')), n = e(this.helper.css('top')), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: s,
        top: n
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: h.width(),
        height: h.height()
      }, this.originalSize = this._helper ? {
        width: h.outerWidth(),
        height: h.outerHeight()
      } : {
        width: h.width(),
        height: h.height()
      }, this.originalPosition = {
        left: s,
        top: n
      }, this.sizeDiff = {
        width: h.outerWidth() - h.width(),
        height: h.outerHeight() - h.height()
      }, this.originalMousePosition = {
        left: i.pageX,
        top: i.pageY
      }, this.aspectRatio = 'number' == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t('.ui-resizable-' + this.axis).css('cursor'), t('body').css('cursor', 'auto' === a ? this.axis + '-resize' : a), h.addClass('ui-resizable-resizing'), this._propagate('start', i), !0;
    },
    _mouseDrag: function (e) {
      var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, c = this.size.height, u = e.pageX - a.left || 0, d = e.pageY - a.top || 0, p = this._change[o];
      return p ? (i = p.apply(this, [
        e,
        u,
        d
      ]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate('resize', e), this.position.top !== r && (n.top = this.position.top + 'px'), this.position.left !== h && (n.left = this.position.left + 'px'), this.size.width !== l && (n.width = this.size.width + 'px'), this.size.height !== c && (n.height = this.size.height + 'px'), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger('resize', e, this.ui()), !1) : !1;
    },
    _mouseStop: function (e) {
      this.resizing = !1;
      var i, s, n, a, o, r, h, l = this.options, c = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], 'left') ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {
        width: c.helper.width() - a,
        height: c.helper.height() - n
      }, r = parseInt(c.element.css('left'), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css('top'), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {
        top: h,
        left: r
      })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t('body').css('cursor', 'auto'), this.element.removeClass('ui-resizable-resizing'), this._propagate('stop', e), this._helper && this.helper.remove(), !1;
    },
    _updateVirtualBoundaries: function (t) {
      var e, s, n, a, o, r = this.options;
      o = {
        minWidth: i(r.minWidth) ? r.minWidth : 0,
        maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
        minHeight: i(r.minHeight) ? r.minHeight : 0,
        maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
      }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o;
    },
    _updateCache: function (t) {
      this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width);
    },
    _updateRatio: function (t) {
      var e = this.position, s = this.size, n = this.axis;
      return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), 'sw' === n && (t.left = e.left + (s.width - t.width), t.top = null), 'nw' === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t;
    },
    _respectSize: function (t) {
      var e = this._vBoundaries, s = this.axis, n = i(t.width) && e.maxWidth && e.maxWidth < t.width, a = i(t.height) && e.maxHeight && e.maxHeight < t.height, o = i(t.width) && e.minWidth && e.minWidth > t.width, r = i(t.height) && e.minHeight && e.minHeight > t.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, c = /sw|nw|w/.test(s), u = /nw|ne|n/.test(s);
      return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t;
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length) {
        var t, e, i, s, n, a = this.helper || this.element;
        for (t = 0; this._proportionallyResizeElements.length > t; t++) {
          if (n = this._proportionallyResizeElements[t], !this.borderDif)
            for (this.borderDif = [], i = [
                n.css('borderTopWidth'),
                n.css('borderRightWidth'),
                n.css('borderBottomWidth'),
                n.css('borderLeftWidth')
              ], s = [
                n.css('paddingTop'),
                n.css('paddingRight'),
                n.css('paddingBottom'),
                n.css('paddingLeft')
              ], e = 0; i.length > e; e++)
              this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
          n.css({
            height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
            width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
          });
        }
      }
    },
    _renderProxy: function () {
      var e = this.element, i = this.options;
      this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t('<div style=\'overflow:hidden;\'></div>'), this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() - 1,
        height: this.element.outerHeight() - 1,
        position: 'absolute',
        left: this.elementOffset.left + 'px',
        top: this.elementOffset.top + 'px',
        zIndex: ++i.zIndex
      }), this.helper.appendTo('body').disableSelection()) : this.helper = this.element;
    },
    _change: {
      e: function (t, e) {
        return { width: this.originalSize.width + e };
      },
      w: function (t, e) {
        var i = this.originalSize, s = this.originalPosition;
        return {
          left: s.left + e,
          width: i.width - e
        };
      },
      n: function (t, e, i) {
        var s = this.originalSize, n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i
        };
      },
      s: function (t, e, i) {
        return { height: this.originalSize.height + i };
      },
      se: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [
          e,
          i,
          s
        ]));
      },
      sw: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [
          e,
          i,
          s
        ]));
      },
      ne: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [
          e,
          i,
          s
        ]));
      },
      nw: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [
          e,
          i,
          s
        ]));
      }
    },
    _propagate: function (e, i) {
      t.ui.plugin.call(this, e, [
        i,
        this.ui()
      ]), 'resize' !== e && this._trigger(e, i, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), t.ui.plugin.add('resizable', 'animate', {
    stop: function (e) {
      var i = t(this).data('ui-resizable'), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && t.ui.hasScroll(n[0], 'left') ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {
          width: i.size.width - r,
          height: i.size.height - o
        }, l = parseInt(i.element.css('left'), 10) + (i.position.left - i.originalPosition.left) || null, c = parseInt(i.element.css('top'), 10) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(h, c && l ? {
        top: c,
        left: l
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function () {
          var s = {
              width: parseInt(i.element.css('width'), 10),
              height: parseInt(i.element.css('height'), 10),
              top: parseInt(i.element.css('top'), 10),
              left: parseInt(i.element.css('left'), 10)
            };
          n && n.length && t(n[0]).css({
            width: s.width,
            height: s.height
          }), i._updateCache(s), i._propagate('resize', e);
        }
      });
    }
  }), t.ui.plugin.add('resizable', 'containment', {
    start: function () {
      var i, s, n, a, o, r, h, l = t(this).data('ui-resizable'), c = l.options, u = l.element, d = c.containment, p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
      p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
        left: 0,
        top: 0
      }, l.containerPosition = {
        left: 0,
        top: 0
      }, l.parentData = {
        element: t(document),
        left: 0,
        top: 0,
        width: t(document).width(),
        height: t(document).height() || document.body.parentNode.scrollHeight
      }) : (i = t(p), s = [], t([
        'Top',
        'Right',
        'Left',
        'Bottom'
      ]).each(function (t, n) {
        s[t] = e(i.css('padding' + n));
      }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
        height: i.innerHeight() - s[3],
        width: i.innerWidth() - s[1]
      }, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, 'left') ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
        element: p,
        left: n.left,
        top: n.top,
        width: r,
        height: h
      }));
    },
    resize: function (e) {
      var i, s, n, a, o = t(this).data('ui-resizable'), r = o.options, h = o.containerOffset, l = o.position, c = o._aspectRatio || e.shiftKey, u = {
          top: 0,
          left: 0
        }, d = o.containerElement;
      d[0] !== document && /static/.test(d.css('position')) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css('position')), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio));
    },
    stop: function () {
      var e = t(this).data('ui-resizable'), i = e.options, s = e.containerOffset, n = e.containerPosition, a = e.containerElement, o = t(e.helper), r = o.offset(), h = o.outerWidth() - e.sizeDiff.width, l = o.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(a.css('position')) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), e._helper && !i.animate && /static/.test(a.css('position')) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      });
    }
  }), t.ui.plugin.add('resizable', 'alsoResize', {
    start: function () {
      var e = t(this).data('ui-resizable'), i = e.options, s = function (e) {
          t(e).each(function () {
            var e = t(this);
            e.data('ui-resizable-alsoresize', {
              width: parseInt(e.width(), 10),
              height: parseInt(e.height(), 10),
              left: parseInt(e.css('left'), 10),
              top: parseInt(e.css('top'), 10)
            });
          });
        };
      'object' != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
        s(t);
      });
    },
    resize: function (e, i) {
      var s = t(this).data('ui-resizable'), n = s.options, a = s.originalSize, o = s.originalPosition, r = {
          height: s.size.height - a.height || 0,
          width: s.size.width - a.width || 0,
          top: s.position.top - o.top || 0,
          left: s.position.left - o.left || 0
        }, h = function (e, s) {
          t(e).each(function () {
            var e = t(this), n = t(this).data('ui-resizable-alsoresize'), a = {}, o = s && s.length ? s : e.parents(i.originalElement[0]).length ? [
                'width',
                'height'
              ] : [
                'width',
                'height',
                'top',
                'left'
              ];
            t.each(o, function (t, e) {
              var i = (n[e] || 0) + (r[e] || 0);
              i && i >= 0 && (a[e] = i || null);
            }), e.css(a);
          });
        };
      'object' != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
        h(t, e);
      });
    },
    stop: function () {
      t(this).removeData('resizable-alsoresize');
    }
  }), t.ui.plugin.add('resizable', 'ghost', {
    start: function () {
      var e = t(this).data('ui-resizable'), i = e.options, s = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({
        opacity: 0.25,
        display: 'block',
        position: 'relative',
        height: s.height,
        width: s.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass('ui-resizable-ghost').addClass('string' == typeof i.ghost ? i.ghost : ''), e.ghost.appendTo(e.helper);
    },
    resize: function () {
      var e = t(this).data('ui-resizable');
      e.ghost && e.ghost.css({
        position: 'relative',
        height: e.size.height,
        width: e.size.width
      });
    },
    stop: function () {
      var e = t(this).data('ui-resizable');
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
    }
  }), t.ui.plugin.add('resizable', 'grid', {
    resize: function () {
      var e = t(this).data('ui-resizable'), i = e.options, s = e.size, n = e.originalSize, a = e.originalPosition, o = e.axis, r = 'number' == typeof i.grid ? [
          i.grid,
          i.grid
        ] : i.grid, h = r[0] || 1, l = r[1] || 1, c = Math.round((s.width - n.width) / h) * h, u = Math.round((s.height - n.height) / l) * l, d = n.width + c, p = n.height + u, f = i.maxWidth && d > i.maxWidth, g = i.maxHeight && p > i.maxHeight, m = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
      i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h));
    }
  });
}(jQuery));
(function (t) {
  t.widget('ui.selectable', t.ui.mouse, {
    version: '1.10.4',
    options: {
      appendTo: 'body',
      autoRefresh: !0,
      distance: 0,
      filter: '*',
      tolerance: 'touch',
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function () {
      var e, i = this;
      this.element.addClass('ui-selectable'), this.dragged = !1, this.refresh = function () {
        e = t(i.options.filter, i.element[0]), e.addClass('ui-selectee'), e.each(function () {
          var e = t(this), i = e.offset();
          t.data(this, 'selectable-item', {
            element: this,
            $element: e,
            left: i.left,
            top: i.top,
            right: i.left + e.outerWidth(),
            bottom: i.top + e.outerHeight(),
            startselected: !1,
            selected: e.hasClass('ui-selected'),
            selecting: e.hasClass('ui-selecting'),
            unselecting: e.hasClass('ui-unselecting')
          });
        });
      }, this.refresh(), this.selectees = e.addClass('ui-selectee'), this._mouseInit(), this.helper = t('<div class=\'ui-selectable-helper\'></div>');
    },
    _destroy: function () {
      this.selectees.removeClass('ui-selectee').removeData('selectable-item'), this.element.removeClass('ui-selectable ui-selectable-disabled'), this._mouseDestroy();
    },
    _mouseStart: function (e) {
      var i = this, s = this.options;
      this.opos = [
        e.pageX,
        e.pageY
      ], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger('start', e), t(s.appendTo).append(this.helper), this.helper.css({
        left: e.pageX,
        top: e.pageY,
        width: 0,
        height: 0
      }), s.autoRefresh && this.refresh(), this.selectees.filter('.ui-selected').each(function () {
        var s = t.data(this, 'selectable-item');
        s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass('ui-selected'), s.selected = !1, s.$element.addClass('ui-unselecting'), s.unselecting = !0, i._trigger('unselecting', e, { unselecting: s.element }));
      }), t(e.target).parents().addBack().each(function () {
        var s, n = t.data(this, 'selectable-item');
        return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass('ui-selected'), n.$element.removeClass(s ? 'ui-unselecting' : 'ui-selected').addClass(s ? 'ui-selecting' : 'ui-unselecting'), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger('selecting', e, { selecting: n.element }) : i._trigger('unselecting', e, { unselecting: n.element }), !1) : undefined;
      }));
    },
    _mouseDrag: function (e) {
      if (this.dragged = !0, !this.options.disabled) {
        var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = e.pageX, l = e.pageY;
        return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({
          left: a,
          top: o,
          width: r - a,
          height: l - o
        }), this.selectees.each(function () {
          var i = t.data(this, 'selectable-item'), h = !1;
          i && i.element !== s.element[0] && ('touch' === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : 'fit' === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass('ui-selected'), i.selected = !1), i.unselecting && (i.$element.removeClass('ui-unselecting'), i.unselecting = !1), i.selecting || (i.$element.addClass('ui-selecting'), i.selecting = !0, s._trigger('selecting', e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass('ui-selecting'), i.selecting = !1, i.$element.addClass('ui-selected'), i.selected = !0) : (i.$element.removeClass('ui-selecting'), i.selecting = !1, i.startselected && (i.$element.addClass('ui-unselecting'), i.unselecting = !0), s._trigger('unselecting', e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass('ui-selected'), i.selected = !1, i.$element.addClass('ui-unselecting'), i.unselecting = !0, s._trigger('unselecting', e, { unselecting: i.element })))));
        }), !1;
      }
    },
    _mouseStop: function (e) {
      var i = this;
      return this.dragged = !1, t('.ui-unselecting', this.element[0]).each(function () {
        var s = t.data(this, 'selectable-item');
        s.$element.removeClass('ui-unselecting'), s.unselecting = !1, s.startselected = !1, i._trigger('unselected', e, { unselected: s.element });
      }), t('.ui-selecting', this.element[0]).each(function () {
        var s = t.data(this, 'selectable-item');
        s.$element.removeClass('ui-selecting').addClass('ui-selected'), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger('selected', e, { selected: s.element });
      }), this._trigger('stop', e), this.helper.remove(), !1;
    }
  });
}(jQuery));
(function (t) {
  var e = 5;
  t.widget('ui.slider', t.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'slide',
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: 'horizontal',
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    _create: function () {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass('ui-slider ui-slider-' + this.orientation + ' ui-widget' + ' ui-widget-content' + ' ui-corner-all'), this._refresh(), this._setOption('disabled', this.options.disabled), this._animateOff = !1;
    },
    _refresh: function () {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function () {
      var e, i, s = this.options, n = this.element.find('.ui-slider-handle').addClass('ui-state-default ui-corner-all'), a = '<a class=\'ui-slider-handle ui-state-default ui-corner-all\' href=\'#\'></a>', o = [];
      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)
        o.push(a);
      this.handles = n.add(t(o.join('')).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
        t(this).data('ui-slider-handle-index', e);
      });
    },
    _createRange: function () {
      var e = this.options, i = '';
      e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [
        e.values[0],
        e.values[0]
      ] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [
        this._valueMin(),
        this._valueMin()
      ]), this.range && this.range.length ? this.range.removeClass('ui-slider-range-min ui-slider-range-max').css({
        left: '',
        bottom: ''
      }) : (this.range = t('<div></div>').appendTo(this.element), i = 'ui-slider-range ui-widget-header ui-corner-all'), this.range.addClass(i + ('min' === e.range || 'max' === e.range ? ' ui-slider-range-' + e.range : ''))) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function () {
      var t = this.handles.add(this.range).filter('a');
      this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t);
    },
    _destroy: function () {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass('ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all'), this._mouseDestroy();
    },
    _mouseCapture: function (e) {
      var i, s, n, a, o, r, l, h, u = this, c = this.options;
      return c.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: e.pageX,
        y: e.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
        var i = Math.abs(s - u.values(e));
        (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e);
      }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass('ui-state-active').focus(), l = a.offset(), h = !t(e.target).parents().addBack().is('.ui-slider-handle'), this._clickOffset = h ? {
        left: 0,
        top: 0
      } : {
        left: e.pageX - l.left - a.width() / 2,
        top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css('borderTopWidth'), 10) || 0) - (parseInt(a.css('borderBottomWidth'), 10) || 0) + (parseInt(a.css('marginTop'), 10) || 0)
      }, this.handles.hasClass('ui-state-hover') || this._slide(e, o, s), this._animateOff = !0, !0));
    },
    _mouseStart: function () {
      return !0;
    },
    _mouseDrag: function (t) {
      var e = {
          x: t.pageX,
          y: t.pageY
        }, i = this._normValueFromMouse(e);
      return this._slide(t, this._handleIndex, i), !1;
    },
    _mouseStop: function (t) {
      return this.handles.removeClass('ui-state-active'), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function () {
      this.orientation = 'vertical' === this.options.orientation ? 'vertical' : 'horizontal';
    },
    _normValueFromMouse: function (t) {
      var e, i, s, n, a;
      return 'horizontal' === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), 'vertical' === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a);
    },
    _start: function (t, e) {
      var i = {
          handle: this.handles[e],
          value: this.value()
        };
      return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger('start', t, i);
    },
    _slide: function (t, e, i) {
      var s, n, a;
      this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger('slide', t, {
        handle: this.handles[e],
        value: i,
        values: n
      }), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger('slide', t, {
        handle: this.handles[e],
        value: i
      }), a !== !1 && this.value(i));
    },
    _stop: function (t, e) {
      var i = {
          handle: this.handles[e],
          value: this.value()
        };
      this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger('stop', t, i);
    },
    _change: function (t, e) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = {
            handle: this.handles[e],
            value: this.value()
          };
        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger('change', t, i);
      }
    },
    value: function (t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value();
    },
    values: function (e, i) {
      var s, n, a;
      if (arguments.length > 1)
        return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
      if (!arguments.length)
        return this._values();
      if (!t.isArray(arguments[0]))
        return this.options.values && this.options.values.length ? this._values(e) : this.value();
      for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)
        s[a] = this._trimAlignValue(n[a]), this._change(null, a);
      this._refreshValue();
    },
    _setOption: function (e, i) {
      var s, n = 0;
      switch ('range' === e && this.options.range === !0 && ('min' === i ? (this.options.value = this._values(0), this.options.values = null) : 'max' === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
      case 'orientation':
        this._detectOrientation(), this.element.removeClass('ui-slider-horizontal ui-slider-vertical').addClass('ui-slider-' + this.orientation), this._refreshValue();
        break;
      case 'value':
        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
        break;
      case 'values':
        for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)
          this._change(null, s);
        this._animateOff = !1;
        break;
      case 'min':
      case 'max':
        this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
        break;
      case 'range':
        this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _value: function () {
      var t = this.options.value;
      return t = this._trimAlignValue(t);
    },
    _values: function (t) {
      var e, i, s;
      if (arguments.length)
        return e = this.options.values[t], e = this._trimAlignValue(e);
      if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
          i[s] = this._trimAlignValue(i[s]);
        return i;
      }
      return [];
    },
    _trimAlignValue: function (t) {
      if (this._valueMin() >= t)
        return this._valueMin();
      if (t >= this._valueMax())
        return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
      return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
    },
    _valueMin: function () {
      return this.options.min;
    },
    _valueMax: function () {
      return this.options.max;
    },
    _refreshValue: function () {
      var e, i, s, n, a, o = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, u = {};
      this.options.values && this.options.values.length ? this.handles.each(function (s) {
        i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u['horizontal' === l.orientation ? 'left' : 'bottom'] = i + '%', t(this).stop(1, 1)[h ? 'animate' : 'css'](u, r.animate), l.options.range === !0 && ('horizontal' === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? 'animate' : 'css']({ left: i + '%' }, r.animate), 1 === s && l.range[h ? 'animate' : 'css']({ width: i - e + '%' }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && l.range.stop(1, 1)[h ? 'animate' : 'css']({ bottom: i + '%' }, r.animate), 1 === s && l.range[h ? 'animate' : 'css']({ height: i - e + '%' }, {
          queue: !1,
          duration: r.animate
        }))), e = i;
      }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u['horizontal' === this.orientation ? 'left' : 'bottom'] = i + '%', this.handle.stop(1, 1)[h ? 'animate' : 'css'](u, r.animate), 'min' === o && 'horizontal' === this.orientation && this.range.stop(1, 1)[h ? 'animate' : 'css']({ width: i + '%' }, r.animate), 'max' === o && 'horizontal' === this.orientation && this.range[h ? 'animate' : 'css']({ width: 100 - i + '%' }, {
        queue: !1,
        duration: r.animate
      }), 'min' === o && 'vertical' === this.orientation && this.range.stop(1, 1)[h ? 'animate' : 'css']({ height: i + '%' }, r.animate), 'max' === o && 'vertical' === this.orientation && this.range[h ? 'animate' : 'css']({ height: 100 - i + '%' }, {
        queue: !1,
        duration: r.animate
      }));
    },
    _handleEvents: {
      keydown: function (i) {
        var s, n, a, o, r = t(i.target).data('ui-slider-handle-index');
        switch (i.keyCode) {
        case t.ui.keyCode.HOME:
        case t.ui.keyCode.END:
        case t.ui.keyCode.PAGE_UP:
        case t.ui.keyCode.PAGE_DOWN:
        case t.ui.keyCode.UP:
        case t.ui.keyCode.RIGHT:
        case t.ui.keyCode.DOWN:
        case t.ui.keyCode.LEFT:
          if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass('ui-state-active'), s = this._start(i, r), s === !1))
            return;
        }
        switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
        case t.ui.keyCode.HOME:
          a = this._valueMin();
          break;
        case t.ui.keyCode.END:
          a = this._valueMax();
          break;
        case t.ui.keyCode.PAGE_UP:
          a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
          break;
        case t.ui.keyCode.PAGE_DOWN:
          a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
          break;
        case t.ui.keyCode.UP:
        case t.ui.keyCode.RIGHT:
          if (n === this._valueMax())
            return;
          a = this._trimAlignValue(n + o);
          break;
        case t.ui.keyCode.DOWN:
        case t.ui.keyCode.LEFT:
          if (n === this._valueMin())
            return;
          a = this._trimAlignValue(n - o);
        }
        this._slide(i, r, a);
      },
      click: function (t) {
        t.preventDefault();
      },
      keyup: function (e) {
        var i = t(e.target).data('ui-slider-handle-index');
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass('ui-state-active'));
      }
    }
  });
}(jQuery));
(function (t) {
  function e(t, e, i) {
    return t > e && e + i > t;
  }
  function i(t) {
    return /left|right/.test(t.css('float')) || /inline|table-cell/.test(t.css('display'));
  }
  t.widget('ui.sortable', t.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'sort',
    ready: !1,
    options: {
      appendTo: 'parent',
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      items: '> *',
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: 'default',
      tolerance: 'intersect',
      zIndex: 1000,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _create: function () {
      var t = this.options;
      this.containerCache = {}, this.element.addClass('ui-sortable'), this.refresh(), this.floating = this.items.length ? 'x' === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
    },
    _destroy: function () {
      this.element.removeClass('ui-sortable ui-sortable-disabled'), this._mouseDestroy();
      for (var t = this.items.length - 1; t >= 0; t--)
        this.items[t].item.removeData(this.widgetName + '-item');
      return this;
    },
    _setOption: function (e, i) {
      'disabled' === e ? (this.options[e] = i, this.widget().toggleClass('ui-sortable-disabled', !!i)) : t.Widget.prototype._setOption.apply(this, arguments);
    },
    _mouseCapture: function (e, i) {
      var s = null, n = !1, o = this;
      return this.reverting ? !1 : this.options.disabled || 'static' === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
        return t.data(this, o.widgetName + '-item') === o ? (s = t(this), !1) : undefined;
      }), t.data(e.target, o.widgetName + '-item') === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find('*').addBack().each(function () {
        this === e.target && (n = !0);
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
    },
    _mouseStart: function (e, i, s) {
      var n, o, a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left
        }, t.extend(this.offset, {
          click: {
            left: e.pageX - this.offset.left,
            top: e.pageY - this.offset.top
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }), this.helper.css('position', 'absolute'), this.cssPosition = this.helper.css('position'), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0]
        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && 'auto' !== a.cursor && (o = this.document.find('body'), this.storedCursor = o.css('cursor'), o.css('cursor', a.cursor), this.storedStylesheet = t('<style>*{ cursor: ' + a.cursor + ' !important; }</style>').appendTo(o)), a.opacity && (this.helper.css('opacity') && (this._storedOpacity = this.helper.css('opacity')), this.helper.css('opacity', a.opacity)), a.zIndex && (this.helper.css('zIndex') && (this._storedZIndex = this.helper.css('zIndex')), this.helper.css('zIndex', a.zIndex)), this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger('start', e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
        for (n = this.containers.length - 1; n >= 0; n--)
          this.containers[n]._trigger('activate', e, this._uiHash(this));
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass('ui-sortable-helper'), this._mouseDrag(e), !0;
    },
    _mouseDrag: function (e) {
      var i, s, n, o, a = this.options, r = !1;
      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo('absolute'), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo('absolute'), this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'), this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'), i = this.items.length - 1; i >= 0; i--)
        if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? 'next' : 'prev']()[0] !== n && !t.contains(this.placeholder[0], n) && ('semi-dynamic' === this.options.type ? !t.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === o ? 'down' : 'up', 'pointer' !== this.options.tolerance && !this._intersectsWithSides(s))
            break;
          this._rearrange(e, s), this._trigger('change', e, this._uiHash());
          break;
        }
      return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger('sort', e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function (e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
          o && 'x' !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && 'y' !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(e);
          });
        } else
          this._clear(e, i);
        return !1;
      }
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp({ target: null }), 'original' === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper') : this.currentItem.show();
        for (var e = this.containers.length - 1; e >= 0; e--)
          this.containers[e]._trigger('deactivate', null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger('out', null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 'original' !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function (e) {
      var i = this._getItemsAsjQuery(e && e.connected), s = [];
      return e = e || {}, t(i).each(function () {
        var i = (t(e.item || this).attr(e.attribute || 'id') || '').match(e.expression || /(.+)[\-=_](.+)/);
        i && s.push((e.key || i[1] + '[]') + '=' + (e.key && e.expression ? i[1] : i[2]));
      }), !s.length && e.key && s.push(e.key + '='), s.join('&');
    },
    toArray: function (e) {
      var i = this._getItemsAsjQuery(e && e.connected), s = [];
      return e = e || {}, i.each(function () {
        s.push(t(e.item || this).attr(e.attribute || 'id') || '');
      }), s;
    },
    _intersectsWith: function (t) {
      var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = 'x' === this.options.axis || s + l > r && h > s + l, d = 'y' === this.options.axis || e + c > o && a > e + c, p = u && d;
      return 'pointer' === this.options.tolerance || this.options.forcePointerForContainers || 'pointer' !== this.options.tolerance && this.helperProportions[this.floating ? 'width' : 'height'] > t[this.floating ? 'width' : 'height'] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function (t) {
      var i = 'x' === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = 'y' === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = i && s, o = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
      return n ? this.floating ? a && 'right' === a || 'down' === o ? 2 : 1 : o && ('down' === o ? 2 : 1) : !1;
    },
    _intersectsWithSides: function (t) {
      var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
      return this.floating && o ? 'right' === o && s || 'left' === o && !s : n && ('down' === n && i || 'up' === n && !i);
    },
    _getDragVerticalDirection: function () {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? 'down' : 'up');
    },
    _getDragHorizontalDirection: function () {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? 'right' : 'left');
    },
    refresh: function (t) {
      return this._refreshItems(t), this.refreshPositions(), this;
    },
    _connectWith: function () {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
    },
    _getItemsAsjQuery: function (e) {
      function i() {
        r.push(this);
      }
      var s, n, o, a, r = [], h = [], l = this._connectWith();
      if (l && e)
        for (s = l.length - 1; s >= 0; s--)
          for (o = t(l[s]), n = o.length - 1; n >= 0; n--)
            a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([
              t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
              a
            ]);
      for (h.push([
          t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
            options: this.options,
            item: this.currentItem
          }) : t(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
          this
        ]), s = h.length - 1; s >= 0; s--)
        h[s][0].each(i);
      return t(r);
    },
    _removeCurrentsFromItems: function () {
      var e = this.currentItem.find(':data(' + this.widgetName + '-item)');
      this.items = t.grep(this.items, function (t) {
        for (var i = 0; e.length > i; i++)
          if (e[i] === t.item[0])
            return !1;
        return !0;
      });
    },
    _refreshItems: function (e) {
      this.items = [], this.containers = [this];
      var i, s, n, o, a, r, h, l, c = this.items, u = [[
            t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element),
            this
          ]], d = this._connectWith();
      if (d && this.ready)
        for (i = d.length - 1; i >= 0; i--)
          for (n = t(d[i]), s = n.length - 1; s >= 0; s--)
            o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([
              t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element),
              o
            ]), this.containers.push(o));
      for (i = u.length - 1; i >= 0; i--)
        for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
          h = t(r[s]), h.data(this.widgetName + '-item', a), c.push({
            item: h,
            instance: a,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
    },
    refreshPositions: function (e) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, o;
      for (i = this.items.length - 1; i >= 0; i--)
        s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
      if (this.options.custom && this.options.custom.refreshContainers)
        this.options.custom.refreshContainers.call(this);
      else
        for (i = this.containers.length - 1; i >= 0; i--)
          o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this;
    },
    _createPlaceholder: function (e) {
      e = e || this;
      var i, s = e.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function () {
          var s = e.currentItem[0].nodeName.toLowerCase(), n = t('<' + s + '>', e.document[0]).addClass(i || e.currentItem[0].className + ' ui-sortable-placeholder').removeClass('ui-sortable-helper');
          return 'tr' === s ? e.currentItem.children().each(function () {
            t('<td>&#160;</td>', e.document[0]).attr('colspan', t(this).attr('colspan') || 1).appendTo(n);
          }) : 'img' === s && n.attr('src', e.currentItem.attr('src')), i || n.css('visibility', 'hidden'), n;
        },
        update: function (t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css('paddingTop') || 0, 10) - parseInt(e.currentItem.css('paddingBottom') || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css('paddingLeft') || 0, 10) - parseInt(e.currentItem.css('paddingRight') || 0, 10)));
        }
      }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder);
    },
    _contactContainers: function (s) {
      var n, o, a, r, h, l, c, u, d, p, f = null, g = null;
      for (n = this.containers.length - 1; n >= 0; n--)
        if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
          if (this._intersectsWith(this.containers[n].containerCache)) {
            if (f && t.contains(this.containers[n].element[0], f.element[0]))
              continue;
            f = this.containers[n], g = n;
          } else
            this.containers[n].containerCache.over && (this.containers[n]._trigger('out', s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
      if (f)
        if (1 === this.containers.length)
          this.containers[g].containerCache.over || (this.containers[g]._trigger('over', s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
        else {
          for (a = 10000, r = null, p = f.floating || i(this.currentItem), h = p ? 'left' : 'top', l = p ? 'width' : 'height', c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)
            t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? 'up' : 'down'));
          if (!r && !this.options.dropOnEmpty)
            return;
          if (this.currentContainer === this.containers[g])
            return;
          r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger('change', s, this._uiHash()), this.containers[g]._trigger('change', s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger('over', s, this._uiHash(this)), this.containers[g].containerCache.over = 1;
        }
    },
    _createHelper: function (e) {
      var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [
          e,
          this.currentItem
        ])) : 'clone' === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents('body').length || t('parent' !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css('position'),
        top: this.currentItem.css('top'),
        left: this.currentItem.css('left')
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
    },
    _adjustOffsetFromHelper: function (e) {
      'string' == typeof e && (e = e.split(' ')), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), 'left' in e && (this.offset.click.left = e.left + this.margins.left), 'right' in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 'top' in e && (this.offset.click.top = e.top + this.margins.top), 'bottom' in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return 'absolute' === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
      };
    },
    _getRelativeOffset: function () {
      if ('relative' === this.cssPosition) {
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
        top: parseInt(this.currentItem.css('marginTop'), 10) || 0
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function () {
      var e, i, s, n = this.options;
      'parent' === n.containment && (n.containment = this.helper[0].parentNode), ('document' === n.containment || 'window' === n.containment) && (this.containment = [
        0 - this.offset.relative.left - this.offset.parent.left,
        0 - this.offset.relative.top - this.offset.parent.top,
        t('document' === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left,
        (t('document' === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
      ]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = 'hidden' !== t(e).css('overflow'), this.containment = [
        i.left + (parseInt(t(e).css('borderLeftWidth'), 10) || 0) + (parseInt(t(e).css('paddingLeft'), 10) || 0) - this.margins.left,
        i.top + (parseInt(t(e).css('borderTopWidth'), 10) || 0) + (parseInt(t(e).css('paddingTop'), 10) || 0) - this.margins.top,
        i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css('borderLeftWidth'), 10) || 0) - (parseInt(t(e).css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left,
        i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css('borderTopWidth'), 10) || 0) - (parseInt(t(e).css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top
      ]);
    },
    _convertPositionTo: function (e, i) {
      i || (i = this.position);
      var s = 'absolute' === e ? 1 : -1, n = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
      };
    },
    _generatePosition: function (e) {
      var i, s, n = this.options, o = e.pageX, a = e.pageY, r = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
      return 'relative' !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      };
    },
    _rearrange: function (t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], 'down' === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;
      this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function (t, e) {
      function i(t, e, i) {
        return function (s) {
          i._trigger(t, s, e._uiHash(e));
        };
      }
      this.reverting = !1;
      var s, n = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS)
          ('auto' === this._storedCSS[s] || 'static' === this._storedCSS[s]) && (this._storedCSS[s] = '');
        this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper');
      } else
        this.currentItem.show();
      for (this.fromOutside && !e && n.push(function (t) {
          this._trigger('receive', t, this._uiHash(this.fromOutside));
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not('.ui-sortable-helper')[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
          this._trigger('update', t, this._uiHash());
        }), this !== this.currentContainer && (e || (n.push(function (t) {
          this._trigger('remove', t, this._uiHash());
        }), n.push(function (t) {
          return function (e) {
            t._trigger('receive', e, this._uiHash(this));
          };
        }.call(this, this.currentContainer)), n.push(function (t) {
          return function (e) {
            t._trigger('update', e, this._uiHash(this));
          };
        }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)
        e || n.push(i('deactivate', this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i('out', this, this.containers[s])), this.containers[s].containerCache.over = 0);
      if (this.storedCursor && (this.document.find('body').css('cursor', this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css('opacity', this._storedOpacity), this._storedZIndex && this.helper.css('zIndex', 'auto' === this._storedZIndex ? '' : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
        if (!e) {
          for (this._trigger('beforeStop', t, this._uiHash()), s = 0; n.length > s; s++)
            n[s].call(this, t);
          this._trigger('stop', t, this._uiHash());
        }
        return this.fromOutside = !1, !1;
      }
      if (e || this._trigger('beforeStop', t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
        for (s = 0; n.length > s; s++)
          n[s].call(this, t);
        this._trigger('stop', t, this._uiHash());
      }
      return this.fromOutside = !1, !0;
    },
    _trigger: function () {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function (e) {
      var i = e || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || t([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: e ? e.element : null
      };
    }
  });
}(jQuery));
(function (t) {
  function e(t) {
    return function () {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger('change');
    };
  }
  t.widget('ui.spinner', {
    version: '1.10.4',
    defaultElement: '<input>',
    widgetEventPrefix: 'spin',
    options: {
      culture: null,
      icons: {
        down: 'ui-icon-triangle-1-s',
        up: 'ui-icon-triangle-1-n'
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function () {
      this._setOption('max', this.options.max), this._setOption('min', this.options.min), this._setOption('step', this.options.step), '' !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
        beforeunload: function () {
          this.element.removeAttr('autocomplete');
        }
      });
    },
    _getCreateOptions: function () {
      var e = {}, i = this.element;
      return t.each([
        'min',
        'max',
        'step'
      ], function (t, s) {
        var n = i.attr(s);
        void 0 !== n && n.length && (e[s] = n);
      }), e;
    },
    _events: {
      keydown: function (t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: '_stop',
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (t) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger('change', t), void 0);
      },
      mousewheel: function (t, e) {
        if (e) {
          if (!this.spinning && !this._start(t))
            return !1;
          this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(t);
          }, 100), t.preventDefault();
        }
      },
      'mousedown .ui-spinner-button': function (e) {
        function i() {
          var t = this.element[0] === this.document[0].activeElement;
          t || (this.element.focus(), this.previous = s, this._delay(function () {
            this.previous = s;
          }));
        }
        var s;
        s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, i.call(this);
        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, e);
      },
      'mouseup .ui-spinner-button': '_stop',
      'mouseenter .ui-spinner-button': function (e) {
        return t(e.currentTarget).hasClass('ui-state-active') ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, e), void 0) : void 0;
      },
      'mouseleave .ui-spinner-button': '_stop'
    },
    _draw: function () {
      var t = this.uiSpinner = this.element.addClass('ui-spinner-input').attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
      this.element.attr('role', 'spinbutton'), this.buttons = t.find('.ui-spinner-button').attr('tabIndex', -1).button().removeClass('ui-corner-all'), this.buttons.height() > Math.ceil(0.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable();
    },
    _keydown: function (e) {
      var i = this.options, s = t.ui.keyCode;
      switch (e.keyCode) {
      case s.UP:
        return this._repeat(null, 1, e), !0;
      case s.DOWN:
        return this._repeat(null, -1, e), !0;
      case s.PAGE_UP:
        return this._repeat(null, i.page, e), !0;
      case s.PAGE_DOWN:
        return this._repeat(null, -i.page, e), !0;
      }
      return !1;
    },
    _uiSpinnerHtml: function () {
      return '<span class=\'ui-spinner ui-widget ui-widget-content ui-corner-all\'></span>';
    },
    _buttonHtml: function () {
      return '<a class=\'ui-spinner-button ui-spinner-up ui-corner-tr\'><span class=\'ui-icon ' + this.options.icons.up + '\'>&#9650;</span>' + '</a>' + '<a class=\'ui-spinner-button ui-spinner-down ui-corner-br\'>' + '<span class=\'ui-icon ' + this.options.icons.down + '\'>&#9660;</span>' + '</a>';
    },
    _start: function (t) {
      return this.spinning || this._trigger('start', t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
    },
    _repeat: function (t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, e, i);
      }, t), this._spin(e * this.options.step, i);
    },
    _spin: function (t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger('spin', e, { value: i }) === !1 || (this._value(i), this.counter++);
    },
    _increment: function (e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 50000 - e * e / 500 + 17 * e / 200 + 1) : 1;
    },
    _precision: function () {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function (t) {
      var e = '' + t, i = e.indexOf('.');
      return -1 === i ? 0 : e.length - i - 1;
    },
    _adjustValue: function (t) {
      var e, i, s = this.options;
      return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t;
    },
    _stop: function (t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger('stop', t));
    },
    _setOption: function (t, e) {
      if ('culture' === t || 'numberFormat' === t) {
        var i = this._parse(this.element.val());
        return this.options[t] = e, this.element.val(this._format(i)), void 0;
      }
      ('max' === t || 'min' === t || 'step' === t) && 'string' == typeof e && (e = this._parse(e)), 'icons' === t && (this.buttons.first().find('.ui-icon').removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find('.ui-icon').removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), 'disabled' === t && (e ? (this.element.prop('disabled', !0), this.buttons.button('disable')) : (this.element.prop('disabled', !1), this.buttons.button('enable')));
    },
    _setOptions: e(function (t) {
      this._super(t), this._value(this.element.val());
    }),
    _parse: function (t) {
      return 'string' == typeof t && '' !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), '' === t || isNaN(t) ? null : t;
    },
    _format: function (t) {
      return '' === t ? '' : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
    },
    _refresh: function () {
      this.element.attr({
        'aria-valuemin': this.options.min,
        'aria-valuemax': this.options.max,
        'aria-valuenow': this._parse(this.element.val())
      });
    },
    _value: function (t, e) {
      var i;
      '' !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh();
    },
    _destroy: function () {
      this.element.removeClass('ui-spinner-input').prop('disabled', !1).removeAttr('autocomplete').removeAttr('role').removeAttr('aria-valuemin').removeAttr('aria-valuemax').removeAttr('aria-valuenow'), this.uiSpinner.replaceWith(this.element);
    },
    stepUp: e(function (t) {
      this._stepUp(t);
    }),
    _stepUp: function (t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: e(function (t) {
      this._stepDown(t);
    }),
    _stepDown: function (t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: e(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: e(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function (t) {
      return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val());
    },
    widget: function () {
      return this.uiSpinner;
    }
  });
}(jQuery));
(function (t, e) {
  function i() {
    return ++n;
  }
  function s(t) {
    return t = t.cloneNode(!1), t.hash.length > 1 && decodeURIComponent(t.href.replace(a, '')) === decodeURIComponent(location.href.replace(a, ''));
  }
  var n = 0, a = /#.*$/;
  t.widget('ui.tabs', {
    version: '1.10.4',
    delay: 300,
    options: {
      active: null,
      collapsible: !1,
      event: 'click',
      heightStyle: 'content',
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _create: function () {
      var e = this, i = this.options;
      this.running = !1, this.element.addClass('ui-tabs ui-widget ui-widget-content ui-corner-all').toggleClass('ui-tabs-collapsible', i.collapsible).delegate('.ui-tabs-nav > li', 'mousedown' + this.eventNamespace, function (e) {
        t(this).is('.ui-state-disabled') && e.preventDefault();
      }).delegate('.ui-tabs-anchor', 'focus' + this.eventNamespace, function () {
        t(this).closest('li').is('.ui-state-disabled') && this.blur();
      }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter('.ui-state-disabled'), function (t) {
        return e.tabs.index(t);
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
    },
    _initialActive: function () {
      var i = this.options.active, s = this.options.collapsible, n = location.hash.substring(1);
      return null === i && (n && this.tabs.each(function (s, a) {
        return t(a).attr('aria-controls') === n ? (i = s, !1) : e;
      }), null === i && (i = this.tabs.index(this.tabs.filter('.ui-tabs-active'))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i;
    },
    _getCreateEventData: function () {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : t()
      };
    },
    _tabKeydown: function (i) {
      var s = t(this.document[0].activeElement).closest('li'), n = this.tabs.index(s), a = !0;
      if (!this._handlePageNav(i)) {
        switch (i.keyCode) {
        case t.ui.keyCode.RIGHT:
        case t.ui.keyCode.DOWN:
          n++;
          break;
        case t.ui.keyCode.UP:
        case t.ui.keyCode.LEFT:
          a = !1, n--;
          break;
        case t.ui.keyCode.END:
          n = this.anchors.length - 1;
          break;
        case t.ui.keyCode.HOME:
          n = 0;
          break;
        case t.ui.keyCode.SPACE:
          return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
        case t.ui.keyCode.ENTER:
          return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
        default:
          return;
        }
        i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr('aria-selected', 'false'), this.tabs.eq(n).attr('aria-selected', 'true'), this.activating = this._delay(function () {
          this.option('active', n);
        }, this.delay));
      }
    },
    _panelKeydown: function (e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus());
    },
    _handlePageNav: function (i) {
      return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e;
    },
    _findNextTab: function (e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e;
      }
      for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);)
        e = i ? e + 1 : e - 1;
      return e;
    },
    _focusNextTab: function (t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t;
    },
    _setOption: function (t, i) {
      return 'active' === t ? (this._activate(i), e) : 'disabled' === t ? (this._setupDisabled(i), e) : (this._super(t, i), 'collapsible' === t && (this.element.toggleClass('ui-tabs-collapsible', i), i || this.options.active !== !1 || this._activate(0)), 'event' === t && this._setupEvents(i), 'heightStyle' === t && this._setupHeightStyle(i), e);
    },
    _tabId: function (t) {
      return t.attr('aria-controls') || 'ui-tabs-' + i();
    },
    _sanitizeSelector: function (t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&') : '';
    },
    refresh: function () {
      var e = this.options, i = this.tablist.children(':has(a[href])');
      e.disabled = t.map(i.filter('.ui-state-disabled'), function (t) {
        return i.index(t);
      }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh();
    },
    _refresh: function () {
      this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        'aria-selected': 'false',
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        'aria-expanded': 'false',
        'aria-hidden': 'true'
      }), this.active.length ? (this.active.addClass('ui-tabs-active ui-state-active').attr({
        'aria-selected': 'true',
        tabIndex: 0
      }), this._getPanelForTab(this.active).show().attr({
        'aria-expanded': 'true',
        'aria-hidden': 'false'
      })) : this.tabs.eq(0).attr('tabIndex', 0);
    },
    _processTabs: function () {
      var e = this;
      this.tablist = this._getList().addClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').attr('role', 'tablist'), this.tabs = this.tablist.find('> li:has(a[href])').addClass('ui-state-default ui-corner-top').attr({
        role: 'tab',
        tabIndex: -1
      }), this.anchors = this.tabs.map(function () {
        return t('a', this)[0];
      }).addClass('ui-tabs-anchor').attr({
        role: 'presentation',
        tabIndex: -1
      }), this.panels = t(), this.anchors.each(function (i, n) {
        var a, o, r, h = t(n).uniqueId().attr('id'), l = t(n).closest('li'), c = l.attr('aria-controls');
        s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = '#' + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr('aria-live', 'polite')), o.length && (e.panels = e.panels.add(o)), c && l.data('ui-tabs-aria-controls', c), l.attr({
          'aria-controls': a.substring(1),
          'aria-labelledby': h
        }), o.attr('aria-labelledby', h);
      }), this.panels.addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').attr('role', 'tabpanel');
    },
    _getList: function () {
      return this.tablist || this.element.find('ol,ul').eq(0);
    },
    _createPanel: function (e) {
      return t('<div>').attr('id', e).addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').data('ui-tabs-destroy', !0);
    },
    _setupDisabled: function (e) {
      t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
      for (var i, s = 0; i = this.tabs[s]; s++)
        e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass('ui-state-disabled').attr('aria-disabled', 'true') : t(i).removeClass('ui-state-disabled').removeAttr('aria-disabled');
      this.options.disabled = e;
    },
    _setupEvents: function (e) {
      var i = {
          click: function (t) {
            t.preventDefault();
          }
        };
      e && t.each(e.split(' '), function (t, e) {
        i[e] = '_eventHandler';
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, { keydown: '_tabKeydown' }), this._on(this.panels, { keydown: '_panelKeydown' }), this._focusable(this.tabs), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (e) {
      var i, s = this.element.parent();
      'fill' === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(':visible').each(function () {
        var e = t(this), s = e.css('position');
        'absolute' !== s && 'fixed' !== s && (i -= e.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= t(this).outerHeight(!0);
      }), this.panels.each(function () {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
      }).css('overflow', 'auto')) : 'auto' === e && (i = 0, this.panels.each(function () {
        i = Math.max(i, t(this).height('').height());
      }).height(i));
    },
    _eventHandler: function (e) {
      var i = this.options, s = this.active, n = t(e.currentTarget), a = n.closest('li'), o = a[0] === s[0], r = o && i.collapsible, h = r ? t() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : t(), c = {
          oldTab: s,
          oldPanel: l,
          newTab: r ? t() : a,
          newPanel: h
        };
      e.preventDefault(), a.hasClass('ui-state-disabled') || a.hasClass('ui-tabs-loading') || this.running || o && !i.collapsible || this._trigger('beforeActivate', e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error('jQuery UI Tabs: Mismatching fragment identifier.'), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c));
    },
    _toggle: function (e, i) {
      function s() {
        a.running = !1, a._trigger('activate', e, i);
      }
      function n() {
        i.newTab.closest('li').addClass('ui-tabs-active ui-state-active'), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s());
      }
      var a = this, o = i.newPanel, r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
        i.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'), n();
      }) : (i.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'), r.hide(), n()), r.attr({
        'aria-expanded': 'false',
        'aria-hidden': 'true'
      }), i.oldTab.attr('aria-selected', 'false'), o.length && r.length ? i.oldTab.attr('tabIndex', -1) : o.length && this.tabs.filter(function () {
        return 0 === t(this).attr('tabIndex');
      }).attr('tabIndex', -1), o.attr({
        'aria-expanded': 'true',
        'aria-hidden': 'false'
      }), i.newTab.attr({
        'aria-selected': 'true',
        tabIndex: 0
      });
    },
    _activate: function (e) {
      var i, s = this._findActive(e);
      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find('.ui-tabs-anchor')[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }));
    },
    _findActive: function (e) {
      return e === !1 ? t() : this.tabs.eq(e);
    },
    _getIndex: function (t) {
      return 'string' == typeof t && (t = this.anchors.index(this.anchors.filter('[href$=\'' + t + '\']'))), t;
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(), this.element.removeClass('ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible'), this.tablist.removeClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').removeAttr('role'), this.anchors.removeClass('ui-tabs-anchor').removeAttr('role').removeAttr('tabIndex').removeUniqueId(), this.tabs.add(this.panels).each(function () {
        t.data(this, 'ui-tabs-destroy') ? t(this).remove() : t(this).removeClass('ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel').removeAttr('tabIndex').removeAttr('aria-live').removeAttr('aria-busy').removeAttr('aria-selected').removeAttr('aria-labelledby').removeAttr('aria-hidden').removeAttr('aria-expanded').removeAttr('role');
      }), this.tabs.each(function () {
        var e = t(this), i = e.data('ui-tabs-aria-controls');
        i ? e.attr('aria-controls', i).removeData('ui-tabs-aria-controls') : e.removeAttr('aria-controls');
      }), this.panels.show(), 'content' !== this.options.heightStyle && this.panels.css('height', '');
    },
    enable: function (i) {
      var s = this.options.disabled;
      s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
        return t !== i ? t : null;
      }) : t.map(this.tabs, function (t, e) {
        return e !== i ? e : null;
      })), this._setupDisabled(s));
    },
    disable: function (i) {
      var s = this.options.disabled;
      if (s !== !0) {
        if (i === e)
          s = !0;
        else {
          if (i = this._getIndex(i), -1 !== t.inArray(i, s))
            return;
          s = t.isArray(s) ? t.merge([i], s).sort() : [i];
        }
        this._setupDisabled(s);
      }
    },
    load: function (e, i) {
      e = this._getIndex(e);
      var n = this, a = this.tabs.eq(e), o = a.find('.ui-tabs-anchor'), r = this._getPanelForTab(a), h = {
          tab: a,
          panel: r
        };
      s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && 'canceled' !== this.xhr.statusText && (a.addClass('ui-tabs-loading'), r.attr('aria-busy', 'true'), this.xhr.success(function (t) {
        setTimeout(function () {
          r.html(t), n._trigger('load', i, h);
        }, 1);
      }).complete(function (t, e) {
        setTimeout(function () {
          'abort' === e && n.panels.stop(!1, !0), a.removeClass('ui-tabs-loading'), r.removeAttr('aria-busy'), t === n.xhr && delete n.xhr;
        }, 1);
      })));
    },
    _ajaxSettings: function (e, i, s) {
      var n = this;
      return {
        url: e.attr('href'),
        beforeSend: function (e, a) {
          return n._trigger('beforeLoad', i, t.extend({
            jqXHR: e,
            ajaxSettings: a
          }, s));
        }
      };
    },
    _getPanelForTab: function (e) {
      var i = t(e).attr('aria-controls');
      return this.element.find(this._sanitizeSelector('#' + i));
    }
  });
}(jQuery));
(function (t) {
  function e(e, i) {
    var s = (e.attr('aria-describedby') || '').split(/\s+/);
    s.push(i), e.data('ui-tooltip-id', i).attr('aria-describedby', t.trim(s.join(' ')));
  }
  function i(e) {
    var i = e.data('ui-tooltip-id'), s = (e.attr('aria-describedby') || '').split(/\s+/), n = t.inArray(i, s);
    -1 !== n && s.splice(n, 1), e.removeData('ui-tooltip-id'), s = t.trim(s.join(' ')), s ? e.attr('aria-describedby', s) : e.removeAttr('aria-describedby');
  }
  var s = 0;
  t.widget('ui.tooltip', {
    version: '1.10.4',
    options: {
      content: function () {
        var e = t(this).attr('title') || '';
        return t('<a>').text(e).html();
      },
      hide: !0,
      items: '[title]:not([disabled])',
      position: {
        my: 'left top+15',
        at: 'left bottom',
        collision: 'flipfit flip'
      },
      show: !0,
      tooltipClass: null,
      track: !1,
      close: null,
      open: null
    },
    _create: function () {
      this._on({
        mouseover: 'open',
        focusin: 'open'
      }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable();
    },
    _setOption: function (e, i) {
      var s = this;
      return 'disabled' === e ? (this[i ? '_disable' : '_enable'](), this.options[e] = i, void 0) : (this._super(e, i), 'content' === e && t.each(this.tooltips, function (t, e) {
        s._updateContent(e);
      }), void 0);
    },
    _disable: function () {
      var e = this;
      t.each(this.tooltips, function (i, s) {
        var n = t.Event('blur');
        n.target = n.currentTarget = s[0], e.close(n, !0);
      }), this.element.find(this.options.items).addBack().each(function () {
        var e = t(this);
        e.is('[title]') && e.data('ui-tooltip-title', e.attr('title')).attr('title', '');
      });
    },
    _enable: function () {
      this.element.find(this.options.items).addBack().each(function () {
        var e = t(this);
        e.data('ui-tooltip-title') && e.attr('title', e.data('ui-tooltip-title'));
      });
    },
    open: function (e) {
      var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
      s.length && !s.data('ui-tooltip-id') && (s.attr('title') && s.data('ui-tooltip-title', s.attr('title')), s.data('ui-tooltip-open', !0), e && 'mouseover' === e.type && s.parents().each(function () {
        var e, s = t(this);
        s.data('ui-tooltip-open') && (e = t.Event('blur'), e.target = e.currentTarget = this, i.close(e, !0)), s.attr('title') && (s.uniqueId(), i.parents[this.id] = {
          element: this,
          title: s.attr('title')
        }, s.attr('title', ''));
      }), this._updateContent(s, e));
    },
    _updateContent: function (t, e) {
      var i, s = this.options.content, n = this, o = e ? e.type : null;
      return 'string' == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
        t.data('ui-tooltip-open') && n._delay(function () {
          e && (e.type = o), this._open(e, t, i);
        });
      }), i && this._open(e, t, i), void 0);
    },
    _open: function (i, s, n) {
      function o(t) {
        l.of = t, a.is(':hidden') || a.position(l);
      }
      var a, r, h, l = t.extend({}, this.options.position);
      if (n) {
        if (a = this._find(s), a.length)
          return a.find('.ui-tooltip-content').html(n), void 0;
        s.is('[title]') && (i && 'mouseover' === i.type ? s.attr('title', '') : s.removeAttr('title')), a = this._tooltip(s), e(s, a.attr('id')), a.find('.ui-tooltip-content').html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, { mousemove: o }), o(i)) : a.position(t.extend({ of: s }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
          a.is(':visible') && (o(l.of), clearInterval(h));
        }, t.fx.interval)), this._trigger('open', i, { tooltip: a }), r = {
          keyup: function (e) {
            if (e.keyCode === t.ui.keyCode.ESCAPE) {
              var i = t.Event(e);
              i.currentTarget = s[0], this.close(i, !0);
            }
          },
          remove: function () {
            this._removeTooltip(a);
          }
        }, i && 'mouseover' !== i.type || (r.mouseleave = 'close'), i && 'focusin' !== i.type || (r.focusout = 'close'), this._on(!0, s, r);
      }
    },
    close: function (e) {
      var s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
      this.closing || (clearInterval(this.delayedShow), n.data('ui-tooltip-title') && n.attr('title', n.data('ui-tooltip-title')), i(n), o.stop(!0), this._hide(o, this.options.hide, function () {
        s._removeTooltip(t(this));
      }), n.removeData('ui-tooltip-open'), this._off(n, 'mouseleave focusout keyup'), n[0] !== this.element[0] && this._off(n, 'remove'), this._off(this.document, 'mousemove'), e && 'mouseleave' === e.type && t.each(this.parents, function (e, i) {
        t(i.element).attr('title', i.title), delete s.parents[e];
      }), this.closing = !0, this._trigger('close', e, { tooltip: o }), this.closing = !1);
    },
    _tooltip: function (e) {
      var i = 'ui-tooltip-' + s++, n = t('<div>').attr({
          id: i,
          role: 'tooltip'
        }).addClass('ui-tooltip ui-widget ui-corner-all ui-widget-content ' + (this.options.tooltipClass || ''));
      return t('<div>').addClass('ui-tooltip-content').appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n;
    },
    _find: function (e) {
      var i = e.data('ui-tooltip-id');
      return i ? t('#' + i) : t();
    },
    _removeTooltip: function (t) {
      t.remove(), delete this.tooltips[t.attr('id')];
    },
    _destroy: function () {
      var e = this;
      t.each(this.tooltips, function (i, s) {
        var n = t.Event('blur');
        n.target = n.currentTarget = s[0], e.close(n, !0), t('#' + i).remove(), s.data('ui-tooltip-title') && (s.attr('title', s.data('ui-tooltip-title')), s.removeData('ui-tooltip-title'));
      });
    }
  });
}(jQuery));
(function () {
  var event = jQuery.event,
    //helper that finds handlers by type and calls back a function, this is basically handle
    // events - the events object
    // types - an array of event types to look for
    // callback(type, handlerFunc, selector) - a callback
    // selector - an optional selector to filter with, if there, matches by selector
    //     if null, matches anything, otherwise, matches with no selector
    findHelper = function (events, types, callback, selector) {
      var t, type, typeHandlers, all, h, handle, namespaces, namespace, match;
      for (t = 0; t < types.length; t++) {
        type = types[t];
        all = type.indexOf('.') < 0;
        if (!all) {
          namespaces = type.split('.');
          type = namespaces.shift();
          namespace = new RegExp('(^|\\.)' + namespaces.slice(0).sort().join('\\.(?:.*\\.)?') + '(\\.|$)');
        }
        typeHandlers = (events[type] || []).slice(0);
        for (h = 0; h < typeHandlers.length; h++) {
          handle = typeHandlers[h];
          match = all || namespace.test(handle.namespace);
          if (match) {
            if (selector) {
              if (handle.selector === selector) {
                callback(type, handle.origHandler || handle.handler);
              }
            } else if (selector === null) {
              callback(type, handle.origHandler || handle.handler, handle.selector);
            } else if (!handle.selector) {
              callback(type, handle.origHandler || handle.handler);
            }
          }
        }
      }
    };
  /**
	 * Finds event handlers of a given type on an element.
	 * @param {HTMLElement} el
	 * @param {Array} types an array of event names
	 * @param {String} [selector] optional selector
	 * @return {Array} an array of event handlers
	 */
  event.find = function (el, types, selector) {
    var events = ($._data(el) || {}).events, handlers = [], t, liver, live;
    if (!events) {
      return handlers;
    }
    findHelper(events, types, function (type, handler) {
      handlers.push(handler);
    }, selector);
    return handlers;
  };
  /**
	 * Finds all events.  Group by selector.
	 * @param {HTMLElement} el the element
	 * @param {Array} types event types
	 */
  event.findBySelector = function (el, types) {
    var events = $._data(el).events, selectors = {},
      //adds a handler for a given selector and event
      add = function (selector, event, handler) {
        var select = selectors[selector] || (selectors[selector] = {}), events = select[event] || (select[event] = []);
        events.push(handler);
      };
    if (!events) {
      return selectors;
    }
    //first check live:
    /*$.each(events.live || [], function( i, live ) {
			if ( $.inArray(live.origType, types) !== -1 ) {
				add(live.selector, live.origType, live.origHandler || live.handler);
			}
		});*/
    //then check straight binds
    findHelper(events, types, function (type, handler, selector) {
      add(selector || '', type, handler);
    }, null);
    return selectors;
  };
  event.supportTouch = 'ontouchend' in document;
  $.fn.respondsTo = function (events) {
    if (!this.length) {
      return false;
    } else {
      //add default ?
      return event.find(this[0], $.isArray(events) ? events : [events]).length > 0;
    }
  };
  $.fn.triggerHandled = function (event, data) {
    event = typeof event == 'string' ? $.Event(event) : event;
    this.trigger(event, data);
    return event.handled;
  };
  /**
	 * Only attaches one event handler for all types ...
	 * @param {Array} types llist of types that will delegate here
	 * @param {Object} startingEvent the first event to start listening to
	 * @param {Object} onFirst a function to call 
	 */
  event.setupHelper = function (types, startingEvent, onFirst) {
    if (!onFirst) {
      onFirst = startingEvent;
      startingEvent = null;
    }
    var add = function (handleObj) {
        var bySelector, selector = handleObj.selector || '';
        if (selector) {
          bySelector = event.find(this, types, selector);
          if (!bySelector.length) {
            $(this).delegate(selector, startingEvent, onFirst);
          }
        } else {
          //var bySelector = event.find(this, types, selector);
          if (!event.find(this, types, selector).length) {
            event.add(this, startingEvent, onFirst, {
              selector: selector,
              delegate: this
            });
          }
        }
      }, remove = function (handleObj) {
        var bySelector, selector = handleObj.selector || '';
        if (selector) {
          bySelector = event.find(this, types, selector);
          if (!bySelector.length) {
            $(this).undelegate(selector, startingEvent, onFirst);
          }
        } else {
          if (!event.find(this, types, selector).length) {
            event.remove(this, startingEvent, onFirst, {
              selector: selector,
              delegate: this
            });
          }
        }
      };
    $.each(types, function () {
      event.special[this] = {
        add: add,
        remove: remove,
        setup: function () {
        },
        teardown: function () {
        }
      };
    });
  };
}(jQuery));
(function ($) {
  var isPhantom = /Phantom/.test(navigator.userAgent), supportTouch = !isPhantom && 'ontouchend' in document, scrollEvent = 'touchmove scroll',
    // Use touch events or map it to mouse events
    touchStartEvent = supportTouch ? 'touchstart' : 'mousedown', touchStopEvent = supportTouch ? 'touchend' : 'mouseup', touchMoveEvent = supportTouch ? 'touchmove' : 'mousemove', data = function (event) {
      var d = event.originalEvent.touches ? event.originalEvent.touches[0] : event;
      return {
        time: new Date().getTime(),
        coords: [
          d.pageX,
          d.pageY
        ],
        origin: $(event.target)
      };
    };
  /**
 * @add jQuery.event.swipe
 */
  var swipe = $.event.swipe = {
      delay: 500,
      max: 75,
      min: 30
    };
  $.event.setupHelper([
    'swipe',
    'swipeleft',
    'swiperight',
    'swipeup',
    'swipedown'
  ], touchStartEvent, function (ev) {
    var
      // update with data when the event was started
      start = data(ev), stop, delegate = ev.delegateTarget || ev.currentTarget, selector = ev.handleObj.selector, entered = this;
    function moveHandler(event) {
      if (!start) {
        return;
      }
      // update stop with the data from the current event
      stop = data(event);
      // prevent scrolling
      if (Math.abs(start.coords[0] - stop.coords[0]) > 10) {
        event.preventDefault();
      }
    }
    ;
    // Attach to the touch move events
    $(document.documentElement).bind(touchMoveEvent, moveHandler).one(touchStopEvent, function (event) {
      $(this).unbind(touchMoveEvent, moveHandler);
      // if start and stop contain data figure out if we have a swipe event
      if (start && stop) {
        // calculate the distance between start and stop data
        var deltaX = Math.abs(start.coords[0] - stop.coords[0]), deltaY = Math.abs(start.coords[1] - stop.coords[1]), distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        // check if the delay and distance are matched
        if (stop.time - start.time < swipe.delay && distance >= swipe.min) {
          var events = ['swipe'];
          // check if we moved horizontally
          if (deltaX >= swipe.min && deltaY < swipe.min) {
            // based on the x coordinate check if we moved left or right
            events.push(start.coords[0] > stop.coords[0] ? 'swipeleft' : 'swiperight');
          } else // check if we moved vertically
          if (deltaY >= swipe.min && deltaX < swipe.min) {
            // based on the y coordinate check if we moved up or down
            events.push(start.coords[1] < stop.coords[1] ? 'swipedown' : 'swipeup');
          }
          // trigger swipe events on this guy
          $.each($.event.find(delegate, events, selector), function () {
            this.call(entered, ev, {
              start: start,
              end: stop
            });
          });
        }
      }
      // reset start and stop
      start = stop = undefined;
    });
  });
}(jQuery));
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
}
/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================
  function transitionEnd() {
    var el = document.createElement('bootstrap');
    var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
      };
    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }
    return false;
  }
  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {
      called = true;
    });
    var callback = function () {
      if (!called)
        $($el).trigger($.support.transition.end);
    };
    setTimeout(callback, duration);
    return this;
  };
  $(function () {
    $.support.transition = transitionEnd();
    if (!$.support.transition)
      return;
    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments);
      }
    };
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // ALERT CLASS DEFINITION
  // ======================
  var dismiss = '[data-dismiss="alert"]';
  var Alert = function (el) {
    $(el).on('click', dismiss, this.close);
  };
  Alert.VERSION = '3.2.0';
  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
    }
    var $parent = $(selector);
    if (e)
      e.preventDefault();
    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent();
    }
    $parent.trigger(e = $.Event('close.bs.alert'));
    if (e.isDefaultPrevented())
      return;
    $parent.removeClass('in');
    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }
    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(150) : removeElement();
  };
  // ALERT PLUGIN DEFINITION
  // =======================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');
      if (!data)
        $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string')
        data[option].call($this);
    });
  }
  var old = $.fn.alert;
  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert;
  // ALERT NO CONFLICT
  // =================
  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  };
  // ALERT DATA-API
  // ==============
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================
  var Button = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };
  Button.VERSION = '3.2.0';
  Button.DEFAULTS = { loadingText: 'loading...' };
  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();
    state = state + 'Text';
    if (data.resetText == null)
      $el.data('resetText', $el[val]());
    $el[val](data[state] == null ? this.options[state] : data[state]);
    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d);
      }
    }, this), 0);
  };
  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');
    if ($parent.length) {
      var $input = this.$element.find('input');
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active'))
          changed = false;
        else
          $parent.find('.active').removeClass('active');
      }
      if (changed)
        $input.prop('checked', !this.$element.hasClass('active')).trigger('change');
    }
    if (changed)
      this.$element.toggleClass('active');
  };
  // BUTTON PLUGIN DEFINITION
  // ========================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = typeof option == 'object' && option;
      if (!data)
        $this.data('bs.button', data = new Button(this, options));
      if (option == 'toggle')
        data.toggle();
      else if (option)
        data.setState(option);
    });
  }
  var old = $.fn.button;
  $.fn.button = Plugin;
  $.fn.button.Constructor = Button;
  // BUTTON NO CONFLICT
  // ==================
  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };
  // BUTTON DATA-API
  // ===============
  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target);
    if (!$btn.hasClass('btn'))
      $btn = $btn.closest('.btn');
    Plugin.call($btn, 'toggle');
    e.preventDefault();
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // CAROUSEL CLASS DEFINITION
  // =========================
  var Carousel = function (element, options) {
    this.$element = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this));
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    this.options.pause == 'hover' && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
  };
  Carousel.VERSION = '3.2.0';
  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  };
  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
    case 37:
      this.prev();
      break;
    case 39:
      this.next();
      break;
    default:
      return;
    }
    e.preventDefault();
  };
  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
    return this;
  };
  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item');
    return this.$items.index(item || this.$active);
  };
  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));
    if (pos > this.$items.length - 1 || pos < 0)
      return;
    if (this.sliding)
      return this.$element.one('slid.bs.carousel', function () {
        that.to(pos);
      });
    // yes, "slid"
    if (activeIndex == pos)
      return this.pause().cycle();
    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]));
  };
  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);
    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }
    this.interval = clearInterval(this.interval);
    return this;
  };
  Carousel.prototype.next = function () {
    if (this.sliding)
      return;
    return this.slide('next');
  };
  Carousel.prototype.prev = function () {
    if (this.sliding)
      return;
    return this.slide('prev');
  };
  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || $active[type]();
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var fallback = type == 'next' ? 'first' : 'last';
    var that = this;
    if (!$next.length) {
      if (!this.options.wrap)
        return;
      $next = this.$element.find('.item')[fallback]();
    }
    if ($next.hasClass('active'))
      return this.sliding = false;
    var relatedTarget = $next[0];
    var slideEvent = $.Event('slide.bs.carousel', {
        relatedTarget: relatedTarget,
        direction: direction
      });
    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented())
      return;
    this.sliding = true;
    isCycling && this.pause();
    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
      $nextIndicator && $nextIndicator.addClass('active');
    }
    var slidEvent = $.Event('slid.bs.carousel', {
        relatedTarget: relatedTarget,
        direction: direction
      });
    // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth;
      // force reflow
      $active.addClass(direction);
      $next.addClass(direction);
      $active.one('bsTransitionEnd', function () {
        $next.removeClass([
          type,
          direction
        ].join(' ')).addClass('active');
        $active.removeClass([
          'active',
          direction
        ].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }
    isCycling && this.cycle();
    return this;
  };
  // CAROUSEL PLUGIN DEFINITION
  // ==========================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;
      if (!data)
        $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number')
        data.to(option);
      else if (action)
        data[action]();
      else if (options.interval)
        data.pause().cycle();
    });
  }
  var old = $.fn.carousel;
  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel;
  // CAROUSEL NO CONFLICT
  // ====================
  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  };
  // CAROUSEL DATA-API
  // =================
  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href;
    var $this = $(this);
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''));
    // strip for ie7
    if (!$target.hasClass('carousel'))
      return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex)
      options.interval = false;
    Plugin.call($target, options);
    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex);
    }
    e.preventDefault();
  });
  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================
  var Collapse = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.transitioning = null;
    if (this.options.parent)
      this.$parent = $(this.options.parent);
    if (this.options.toggle)
      this.toggle();
  };
  Collapse.VERSION = '3.2.0';
  Collapse.DEFAULTS = { toggle: true };
  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };
  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in'))
      return;
    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented())
      return;
    var actives = this.$parent && this.$parent.find('> .panel > .in');
    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse');
      if (hasData && hasData.transitioning)
        return;
      Plugin.call(actives, 'hide');
      hasData || actives.data('bs.collapse', null);
    }
    var dimension = this.dimension();
    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);
    this.transitioning = 1;
    var complete = function () {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };
    if (!$.support.transition)
      return complete.call(this);
    var scrollSize = $.camelCase([
        'scroll',
        dimension
      ].join('-'));
    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
  };
  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in'))
      return;
    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented())
      return;
    var dimension = this.dimension();
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
    this.$element.addClass('collapsing').removeClass('collapse').removeClass('in');
    this.transitioning = 1;
    var complete = function () {
      this.transitioning = 0;
      this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');
    };
    if (!$.support.transition)
      return complete.call(this);
    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(350);
  };
  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };
  // COLLAPSE PLUGIN DEFINITION
  // ==========================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);
      if (!data && options.toggle && option == 'show')
        option = !option;
      if (!data)
        $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  }
  var old = $.fn.collapse;
  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;
  // COLLAPSE NO CONFLICT
  // ====================
  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };
  // COLLAPSE DATA-API
  // =================
  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href;
    var $this = $(this);
    var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
    // strip for ie7
    var $target = $(target);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();
    var parent = $this.attr('data-parent');
    var $parent = parent && $(parent);
    if (!data || !data.transitioning) {
      if ($parent)
        $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed');
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed');
    }
    Plugin.call($target, option);
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // DROPDOWN CLASS DEFINITION
  // =========================
  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle="dropdown"]';
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };
  Dropdown.VERSION = '3.2.0';
  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);
    if ($this.is('.disabled, :disabled'))
      return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    clearMenus();
    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
      }
      var relatedTarget = { relatedTarget: this };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented())
        return;
      $this.trigger('focus');
      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
    }
    return false;
  };
  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode))
      return;
    var $this = $(this);
    e.preventDefault();
    e.stopPropagation();
    if ($this.is('.disabled, :disabled'))
      return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    if (!isActive || isActive && e.keyCode == 27) {
      if (e.which == 27)
        $parent.find(toggle).trigger('focus');
      return $this.trigger('click');
    }
    var desc = ' li:not(.divider):visible a';
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
    if (!$items.length)
      return;
    var index = $items.index($items.filter(':focus'));
    if (e.keyCode == 38 && index > 0)
      index--;
    // up
    if (e.keyCode == 40 && index < $items.length - 1)
      index++;
    // down
    if (!~index)
      index = 0;
    $items.eq(index).trigger('focus');
  };
  function clearMenus(e) {
    if (e && e.which === 3)
      return;
    $(backdrop).remove();
    $(toggle).each(function () {
      var $parent = getParent($(this));
      var relatedTarget = { relatedTarget: this };
      if (!$parent.hasClass('open'))
        return;
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented())
        return;
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
    });
  }
  function getParent($this) {
    var selector = $this.attr('data-target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '');
    }
    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  }
  // DROPDOWN PLUGIN DEFINITION
  // ==========================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');
      if (!data)
        $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string')
        data[option].call($this);
    });
  }
  var old = $.fn.dropdown;
  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown;
  // DROPDOWN NO CONFLICT
  // ====================
  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  };
  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================
  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown);
}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // MODAL CLASS DEFINITION
  // ======================
  var Modal = function (element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$backdrop = this.isShown = null;
    this.scrollbarWidth = 0;
    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };
  Modal.VERSION = '3.2.0';
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };
  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };
  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });
    this.$element.trigger(e);
    if (this.isShown || e.isDefaultPrevented())
      return;
    this.isShown = true;
    this.checkScrollbar();
    this.$body.addClass('modal-open');
    this.setScrollbar();
    this.escape();
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');
      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body);
      }
      that.$element.show().scrollTop(0);
      if (transition) {
        that.$element[0].offsetWidth;
      }
      that.$element.addClass('in').attr('aria-hidden', false);
      that.enforceFocus();
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });
      transition ? that.$element.find('.modal-dialog').one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(300) : that.$element.trigger('focus').trigger(e);
    });
  };
  Modal.prototype.hide = function (e) {
    if (e)
      e.preventDefault();
    e = $.Event('hide.bs.modal');
    this.$element.trigger(e);
    if (!this.isShown || e.isDefaultPrevented())
      return;
    this.isShown = false;
    this.$body.removeClass('modal-open');
    this.resetScrollbar();
    this.escape();
    $(document).off('focusin.bs.modal');
    this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal');
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
  };
  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function (e) {
      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };
  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal');
    }
  };
  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal');
    });
  };
  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };
  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body);
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget)
          return;
        this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
      }, this));
      if (doAnimate)
        this.$backdrop[0].offsetWidth;
      // force reflow
      this.$backdrop.addClass('in');
      if (!callback)
        return;
      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(150) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');
      var callbackRemove = function () {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(150) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };
  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth)
      return;
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar();
  };
  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    if (this.scrollbarWidth)
      this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };
  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '');
  };
  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };
  // MODAL PLUGIN DEFINITION
  // =======================
  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
      if (!data)
        $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string')
        data[option](_relatedTarget);
      else if (options.show)
        data.show(_relatedTarget);
    });
  }
  var old = $.fn.modal;
  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;
  // MODAL NO CONFLICT
  // =================
  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };
  // MODAL DATA-API
  // ==============
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, ''));
    // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());
    if ($this.is('a'))
      e.preventDefault();
    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented())
        return;
      // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================
  var Tooltip = function (element, options) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init('tooltip', element, options);
  };
  Tooltip.VERSION = '3.2.0';
  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  };
  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
    var triggers = this.options.trigger.split(' ');
    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];
      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = $.extend({}, this.options, {
      trigger: 'manual',
      selector: ''
    }) : this.fixTitle();
  };
  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };
  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);
    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      };
    }
    return options;
  };
  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();
    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value)
        options[key] = value;
    });
    return options;
  };
  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);
    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }
    clearTimeout(self.timeout);
    self.hoverState = 'in';
    if (!self.options.delay || !self.options.delay.show)
      return self.show();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in')
        self.show();
    }, self.options.delay.show);
  };
  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);
    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }
    clearTimeout(self.timeout);
    self.hoverState = 'out';
    if (!self.options.delay || !self.options.delay.hide)
      return self.hide();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out')
        self.hide();
    }, self.options.delay.hide);
  };
  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var inDom = $.contains(document.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !inDom)
        return;
      var that = this;
      var $tip = this.tip();
      var tipId = this.getUID(this.type);
      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);
      if (this.options.animation)
        $tip.addClass('fade');
      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace)
        placement = placement.replace(autoToken, '') || 'top';
      $tip.detach().css({
        top: 0,
        left: 0,
        display: 'block'
      }).addClass(placement).data('bs.' + this.type, this);
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;
      if (autoPlace) {
        var orgPlacement = placement;
        var $parent = this.$element.parent();
        var parentDim = this.getPosition($parent);
        placement = placement == 'bottom' && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? 'top' : placement == 'top' && pos.top - parentDim.scroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < parentDim.left ? 'right' : placement;
        $tip.removeClass(orgPlacement).addClass(placement);
      }
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);
      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type);
        that.hoverState = null;
      };
      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete();
    }
  };
  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;
    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10);
    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))
      marginTop = 0;
    if (isNaN(marginLeft))
      marginLeft = 0;
    offset.top = offset.top + marginTop;
    offset.left = offset.left + marginLeft;
    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        });
      }
    }, offset), 0);
    $tip.addClass('in');
    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;
    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }
    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
    if (delta.left)
      offset.left += delta.left;
    else
      offset.top += delta.top;
    var arrowDelta = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
    var arrowPosition = delta.left ? 'left' : 'top';
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight';
    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition);
  };
  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + '%' : '');
  };
  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };
  Tooltip.prototype.hide = function () {
    var that = this;
    var $tip = this.tip();
    var e = $.Event('hide.bs.' + this.type);
    this.$element.removeAttr('aria-describedby');
    function complete() {
      if (that.hoverState != 'in')
        $tip.detach();
      that.$element.trigger('hidden.bs.' + that.type);
    }
    this.$element.trigger(e);
    if (e.isDefaultPrevented())
      return;
    $tip.removeClass('in');
    $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete();
    this.hoverState = null;
    return this;
  };
  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };
  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };
  Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;
    var el = $element[0];
    var isBody = el.tagName == 'BODY';
    return $.extend({}, typeof el.getBoundingClientRect == 'function' ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width: isBody ? $(window).width() : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? {
      top: 0,
      left: 0
    } : $element.offset());
  };
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? {
      top: pos.top + pos.height,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'top' ? {
      top: pos.top - actualHeight,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'left' ? {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left - actualWidth
    } : {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left + pos.width
    };
  };
  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = {
        top: 0,
        left: 0
      };
    if (!this.$viewport)
      return delta;
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);
    if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
      if (topEdgeOffset < viewportDimensions.top) {
        // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
        // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
      }
    } else {
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
      if (leftEdgeOffset < viewportDimensions.left) {
        // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else if (rightEdgeOffset > viewportDimensions.width) {
        // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
      }
    }
    return delta;
  };
  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;
    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
    return title;
  };
  Tooltip.prototype.getUID = function (prefix) {
    do
      prefix += ~~(Math.random() * 1000000);
    while (document.getElementById(prefix));
    return prefix;
  };
  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template);
  };
  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };
  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide();
      this.$element = null;
      this.options = null;
    }
  };
  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };
  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };
  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };
  Tooltip.prototype.toggle = function (e) {
    var self = this;
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type);
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
        $(e.currentTarget).data('bs.' + this.type, self);
      }
    }
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
  };
  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout);
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type);
  };
  // TOOLTIP PLUGIN DEFINITION
  // =========================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = typeof option == 'object' && option;
      if (!data && option == 'destroy')
        return;
      if (!data)
        $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  }
  var old = $.fn.tooltip;
  $.fn.tooltip = Plugin;
  $.fn.tooltip.Constructor = Tooltip;
  // TOOLTIP NO CONFLICT
  // ===================
  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };
}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================
  var Popover = function (element, options) {
    this.init('popover', element, options);
  };
  if (!$.fn.tooltip)
    throw new Error('Popover requires tooltip.js');
  Popover.VERSION = '3.2.0';
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });
  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
  Popover.prototype.constructor = Popover;
  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };
  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content').empty()[this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);
    $tip.removeClass('fade top bottom left right in');
    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html())
      $tip.find('.popover-title').hide();
  };
  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };
  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;
    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };
  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  };
  Popover.prototype.tip = function () {
    if (!this.$tip)
      this.$tip = $(this.options.template);
    return this.$tip;
  };
  // POPOVER PLUGIN DEFINITION
  // =========================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = typeof option == 'object' && option;
      if (!data && option == 'destroy')
        return;
      if (!data)
        $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  }
  var old = $.fn.popover;
  $.fn.popover = Plugin;
  $.fn.popover.Constructor = Popover;
  // POPOVER NO CONFLICT
  // ===================
  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };
}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // SCROLLSPY CLASS DEFINITION
  // ==========================
  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this);
    this.$body = $('body');
    this.$scrollElement = $(element).is('body') ? $(window) : $(element);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;
    this.$scrollElement.on('scroll.bs.scrollspy', process);
    this.refresh();
    this.process();
  }
  ScrollSpy.VERSION = '3.2.0';
  ScrollSpy.DEFAULTS = { offset: 10 };
  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };
  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset';
    var offsetBase = 0;
    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position';
      offsetBase = this.$scrollElement.scrollTop();
    }
    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();
    var self = this;
    this.$body.find(this.selector).map(function () {
      var $el = $(this);
      var href = $el.data('target') || $el.attr('href');
      var $href = /^#./.test(href) && $(href);
      return $href && $href.length && $href.is(':visible') && [[
          $href[offsetMethod]().top + offsetBase,
          href
        ]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      self.offsets.push(this[0]);
      self.targets.push(this[1]);
    });
  };
  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;
    if (this.scrollHeight != scrollHeight) {
      this.refresh();
    }
    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }
    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i);
    }
    for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
    }
  };
  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(selector).parents('li').addClass('active');
    if (active.parent('.dropdown-menu').length) {
      active = active.closest('li.dropdown').addClass('active');
    }
    active.trigger('activate.bs.scrollspy');
  };
  // SCROLLSPY PLUGIN DEFINITION
  // ===========================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = typeof option == 'object' && option;
      if (!data)
        $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  }
  var old = $.fn.scrollspy;
  $.fn.scrollspy = Plugin;
  $.fn.scrollspy.Constructor = ScrollSpy;
  // SCROLLSPY NO CONFLICT
  // =====================
  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  };
  // SCROLLSPY DATA-API
  // ==================
  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      Plugin.call($spy, $spy.data());
    });
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // TAB CLASS DEFINITION
  // ====================
  var Tab = function (element) {
    this.element = $(element);
  };
  Tab.VERSION = '3.2.0';
  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
    }
    if ($this.parent('li').hasClass('active'))
      return;
    var previous = $ul.find('.active:last a')[0];
    var e = $.Event('show.bs.tab', { relatedTarget: previous });
    $this.trigger(e);
    if (e.isDefaultPrevented())
      return;
    var $target = $(selector);
    this.activate($this.closest('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      });
    });
  };
  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback && $.support.transition && $active.hasClass('fade');
    function next() {
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active');
      element.addClass('active');
      if (transition) {
        element[0].offsetWidth;
        // reflow for transition
        element.addClass('in');
      } else {
        element.removeClass('fade');
      }
      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active');
      }
      callback && callback();
    }
    transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(150) : next();
    $active.removeClass('in');
  };
  // TAB PLUGIN DEFINITION
  // =====================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');
      if (!data)
        $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string')
        data[option]();
    });
  }
  var old = $.fn.tab;
  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab;
  // TAB NO CONFLICT
  // ===============
  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  };
  // TAB DATA-API
  // ============
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault();
    Plugin.call($(this), 'show');
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';
  // AFFIX CLASS DEFINITION
  // ======================
  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);
    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
    this.$element = $(element);
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition();
  };
  Affix.VERSION = '3.2.0';
  Affix.RESET = 'affix affix-top affix-bottom';
  Affix.DEFAULTS = {
    offset: 0,
    target: window
  };
  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset)
      return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };
  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };
  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible'))
      return;
    var scrollHeight = $(document).height();
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    if (typeof offset != 'object')
      offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function')
      offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function')
      offsetBottom = offset.bottom(this.$element);
    var affix = this.unpin != null && scrollTop + this.unpin <= position.top ? false : offsetBottom != null && position.top + this.$element.height() >= scrollHeight - offsetBottom ? 'bottom' : offsetTop != null && scrollTop <= offsetTop ? 'top' : false;
    if (this.affixed === affix)
      return;
    if (this.unpin != null)
      this.$element.css('top', '');
    var affixType = 'affix' + (affix ? '-' + affix : '');
    var e = $.Event(affixType + '.bs.affix');
    this.$element.trigger(e);
    if (e.isDefaultPrevented())
      return;
    this.affixed = affix;
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;
    this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix', 'affixed')));
    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - this.$element.height() - offsetBottom });
    }
  };
  // AFFIX PLUGIN DEFINITION
  // =======================
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = typeof option == 'object' && option;
      if (!data)
        $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  }
  var old = $.fn.affix;
  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix;
  // AFFIX NO CONFLICT
  // =================
  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  };
  // AFFIX DATA-API
  // ==============
  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();
      data.offset = data.offset || {};
      if (data.offsetBottom)
        data.offset.bottom = data.offsetBottom;
      if (data.offsetTop)
        data.offset.top = data.offsetTop;
      Plugin.call($spy, data);
    });
  });
}(jQuery);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
/*jshint browser: true, strict: true, undef: true */
/*global define: false */
(function (window) {
  'use strict';
  // class helper functions from bonzo https://github.com/ded/bonzo
  function classReg(className) {
    return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
  }
  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;
  if ('classList' in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }
  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }
  var classie = {
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };
  // transport
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie);
  } else {
    // browser global
    window.classie = classie;
  }
}(window));
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is mozilla.org code.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   emk <VYV03354@nifty.ne.jp>
 *   Daniel Glazman <glazman@netscape.com>
 *   L. David Baron <dbaron@dbaron.org>
 *   Boris Zbarsky <bzbarsky@mit.edu>
 *   Mats Palmgren <mats.palmgren@bredband.net>
 *   Christian Biesinger <cbiesinger@web.de>
 *   Jeff Walden <jwalden+code@mit.edu>
 *   Jonathon Jongsma <jonathon.jongsma@collabora.co.uk>, Collabora Ltd.
 *   Siraj Razick <siraj.razick@collabora.co.uk>, Collabora Ltd.
 *   Daniel Glazman <daniel.glazman@disruptive-innovations.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either of the GNU General Public License Version 2 or later (the "GPL"),
 * or the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
;
var kCHARSET_RULE_MISSING_SEMICOLON = 'Missing semicolon at the end of @charset rule';
var kCHARSET_RULE_CHARSET_IS_STRING = 'The charset in the @charset rule should be a string';
var kCHARSET_RULE_MISSING_WS = 'Missing mandatory whitespace after @charset';
var kIMPORT_RULE_MISSING_URL = 'Missing URL in @import rule';
var kURL_EOF = 'Unexpected end of stylesheet';
var kURL_WS_INSIDE = 'Multiple tokens inside a url() notation';
var kVARIABLES_RULE_POSITION = '@variables rule invalid at this position in the stylesheet';
var kIMPORT_RULE_POSITION = '@import rule invalid at this position in the stylesheet';
var kNAMESPACE_RULE_POSITION = '@namespace rule invalid at this position in the stylesheet';
var kCHARSET_RULE_CHARSET_SOF = '@charset rule invalid at this position in the stylesheet';
var kUNKNOWN_AT_RULE = 'Unknow @-rule';
/* FROM http://peter.sh/data/vendor-prefixed-css.php?js=1 */
var kENGINES = [
    'webkit',
    'presto',
    'trident',
    'generic'
  ];
var kCSS_VENDOR_VALUES = {
    '-moz-box': {
      'webkit': '-webkit-box',
      'presto': '',
      'trident': '',
      'generic': 'box'
    },
    '-moz-inline-box': {
      'webkit': '-webkit-inline-box',
      'presto': '',
      'trident': '',
      'generic': 'inline-box'
    },
    '-moz-initial': {
      'webkit': '',
      'presto': '',
      'trident': '',
      'generic': 'initial'
    },
    '-moz-linear-gradient': {
      'webkit20110101': FilterLinearGradientForOutput,
      'webkit': FilterLinearGradientForOutput,
      'presto': '',
      'trident': '',
      'generic': FilterLinearGradientForOutput
    },
    '-moz-radial-gradient': {
      'webkit20110101': FilterRadialGradientForOutput,
      'webkit': FilterRadialGradientForOutput,
      'presto': '',
      'trident': '',
      'generic': FilterRadialGradientForOutput
    },
    '-moz-repeating-linear-gradient': {
      'webkit20110101': '',
      'webkit': FilterRepeatingGradientForOutput,
      'presto': '',
      'trident': '',
      'generic': FilterRepeatingGradientForOutput
    },
    '-moz-repeating-radial-gradient': {
      'webkit20110101': '',
      'webkit': FilterRepeatingGradientForOutput,
      'presto': '',
      'trident': '',
      'generic': FilterRepeatingGradientForOutput
    }
  };
var kCSS_VENDOR_PREFIXES = {
    'lastUpdate': 1304175007,
    'properties': [
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-accelerator',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-wap-accesskey',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-animation',
        'webkit': '-webkit-animation',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-animation-delay',
        'webkit': '-webkit-animation-delay',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-animation-direction',
        'webkit': '-webkit-animation-direction',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-animation-duration',
        'webkit': '-webkit-animation-duration',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-animation-fill-mode',
        'webkit': '-webkit-animation-fill-mode',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-animation-iteration-count',
        'webkit': '-webkit-animation-iteration-count',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-animation-name',
        'webkit': '-webkit-animation-name',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-animation-play-state',
        'webkit': '-webkit-animation-play-state',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-animation-timing-function',
        'webkit': '-webkit-animation-timing-function',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-appearance',
        'webkit': '-webkit-appearance',
        'presto': '',
        'trident': '',
        'status': 'CR'
      },
      {
        'gecko': '',
        'webkit': '-webkit-backface-visibility',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': 'background-clip',
        'webkit': '-webkit-background-clip',
        'presto': 'background-clip',
        'trident': 'background-clip',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-background-composite',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-background-inline-policy',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': 'background-origin',
        'webkit': '-webkit-background-origin',
        'presto': 'background-origin',
        'trident': 'background-origin',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': 'background-position-x',
        'presto': '',
        'trident': '-ms-background-position-x',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': 'background-position-y',
        'presto': '',
        'trident': '-ms-background-position-y',
        'status': ''
      },
      {
        'gecko': 'background-size',
        'webkit': '-webkit-background-size',
        'presto': 'background-size',
        'trident': 'background-size',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-behavior',
        'status': ''
      },
      {
        'gecko': '-moz-binding',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-block-progression',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-after',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-after-color',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-after-style',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-after-width',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-before',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-before-color',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-before-style',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-before-width',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-bottom-colors',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': 'border-bottom-left-radius',
        'webkit': '-webkit-border-bottom-left-radius',
        'presto': 'border-bottom-left-radius',
        'trident': 'border-bottom-left-radius',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-bottom-left-radius = border-bottom-left-radius',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': 'border-bottom-right-radius',
        'webkit': '-webkit-border-bottom-right-radius',
        'presto': 'border-bottom-right-radius',
        'trident': 'border-bottom-right-radius',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-bottom-right-radius = border-bottom-right-radius',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-border-end',
        'webkit': '-webkit-border-end',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-end-color',
        'webkit': '-webkit-border-end-color',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-end-style',
        'webkit': '-webkit-border-end-style',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-end-width',
        'webkit': '-webkit-border-end-width',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-fit',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-horizontal-spacing',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-border-image',
        'webkit': '-webkit-border-image',
        'presto': '-o-border-image',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-border-left-colors',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': 'border-radius',
        'webkit': '-webkit-border-radius',
        'presto': 'border-radius',
        'trident': 'border-radius',
        'status': 'WD'
      },
      {
        'gecko': '-moz-border-right-colors',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-border-start',
        'webkit': '-webkit-border-start',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-start-color',
        'webkit': '-webkit-border-start-color',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-start-style',
        'webkit': '-webkit-border-start-style',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-start-width',
        'webkit': '-webkit-border-start-width',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-border-top-colors',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': 'border-top-left-radius',
        'webkit': '-webkit-border-top-left-radius',
        'presto': 'border-top-left-radius',
        'trident': 'border-top-left-radius',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-top-left-radius = border-top-left-radius',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': 'border-top-right-radius',
        'webkit': '-webkit-border-top-right-radius',
        'presto': 'border-top-right-radius',
        'trident': 'border-top-right-radius',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-top-right-radius = border-top-right-radius',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-border-vertical-spacing',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-box-align',
        'webkit': '-webkit-box-align',
        'presto': '',
        'trident': '-ms-box-align',
        'status': 'WD'
      },
      {
        'gecko': '-moz-box-direction',
        'webkit': '-webkit-box-direction',
        'presto': '',
        'trident': '-ms-box-direction',
        'status': 'WD'
      },
      {
        'gecko': '-moz-box-flex',
        'webkit': '-webkit-box-flex',
        'presto': '',
        'trident': '-ms-box-flex',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-box-flex-group',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-box-line-progression',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-box-lines',
        'presto': '',
        'trident': '-ms-box-lines',
        'status': 'WD'
      },
      {
        'gecko': '-moz-box-ordinal-group',
        'webkit': '-webkit-box-ordinal-group',
        'presto': '',
        'trident': '-ms-box-ordinal-group',
        'status': 'WD'
      },
      {
        'gecko': '-moz-box-orient',
        'webkit': '-webkit-box-orient',
        'presto': '',
        'trident': '-ms-box-orient',
        'status': 'WD'
      },
      {
        'gecko': '-moz-box-pack',
        'webkit': '-webkit-box-pack',
        'presto': '',
        'trident': '-ms-box-pack',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-box-reflect',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': 'box-shadow',
        'webkit': '-webkit-box-shadow',
        'presto': 'box-shadow',
        'trident': 'box-shadow',
        'status': 'WD'
      },
      {
        'gecko': '-moz-box-sizing',
        'webkit': 'box-sizing',
        'presto': 'box-sizing',
        'trident': '',
        'status': 'CR'
      },
      {
        'gecko': '',
        'webkit': '-webkit-box-sizing = box-sizing',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-epub-caption-side = caption-side',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-color-correction',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-column-break-after',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-column-break-before',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-column-break-inside',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-column-count',
        'webkit': '-webkit-column-count',
        'presto': 'column-count',
        'trident': 'column-count',
        'status': 'CR'
      },
      {
        'gecko': '-moz-column-gap',
        'webkit': '-webkit-column-gap',
        'presto': 'column-gap',
        'trident': 'column-gap',
        'status': 'CR'
      },
      {
        'gecko': '-moz-column-rule',
        'webkit': '-webkit-column-rule',
        'presto': 'column-rule',
        'trident': 'column-rule',
        'status': 'CR'
      },
      {
        'gecko': '-moz-column-rule-color',
        'webkit': '-webkit-column-rule-color',
        'presto': 'column-rule-color',
        'trident': 'column-rule-color',
        'status': 'CR'
      },
      {
        'gecko': '-moz-column-rule-style',
        'webkit': '-webkit-column-rule-style',
        'presto': 'column-rule-style',
        'trident': 'column-rule-style',
        'status': 'CR'
      },
      {
        'gecko': '-moz-column-rule-width',
        'webkit': '-webkit-column-rule-width',
        'presto': 'column-rule-width',
        'trident': 'column-rule-width',
        'status': 'CR'
      },
      {
        'gecko': '',
        'webkit': '-webkit-column-span',
        'presto': 'column-span',
        'trident': 'column-span',
        'status': 'CR'
      },
      {
        'gecko': '-moz-column-width',
        'webkit': '-webkit-column-width',
        'presto': 'column-width',
        'trident': 'column-width',
        'status': 'CR'
      },
      {
        'gecko': '',
        'webkit': '-webkit-columns',
        'presto': 'columns',
        'trident': 'columns',
        'status': 'CR'
      },
      {
        'gecko': '',
        'webkit': '-webkit-dashboard-region',
        'presto': '-apple-dashboard-region',
        'trident': '',
        'status': ''
      },
      {
        'gecko': 'filter',
        'webkit': '',
        'presto': 'filter',
        'trident': '-ms-filter',
        'status': ''
      },
      {
        'gecko': '-moz-float-edge',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-o-focus-opacity',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-font-feature-settings',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-font-language-override',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-font-size-delta',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-font-smoothing',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-force-broken-image-icon',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-column',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-column-align',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-column-span',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-columns',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-layer',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-row',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-row-align',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-row-span',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-grid-rows',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-highlight',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-hyphenate-character',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-hyphenate-limit-after',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-hyphenate-limit-before',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-hyphens',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-epub-hyphens = -webkit-hyphens',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-image-region',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': 'ime-mode',
        'webkit': '',
        'presto': '',
        'trident': '-ms-ime-mode',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-wap-input-format',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-wap-input-required',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-interpolation-mode',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-interpret-as',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-layout-flow',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-layout-grid',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-layout-grid-char',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-layout-grid-line',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-layout-grid-mode',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-layout-grid-type',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-line-box-contain',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-line-break',
        'presto': '',
        'trident': '-ms-line-break',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-line-clamp',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-line-grid-mode',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-o-link',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-o-link-source',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-locale',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-logical-height',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-logical-width',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-margin-after',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-margin-after-collapse',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-margin-before',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-margin-before-collapse',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-margin-bottom-collapse',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-margin-collapse',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-margin-end',
        'webkit': '-webkit-margin-end',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-margin-start',
        'webkit': '-webkit-margin-start',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-margin-top-collapse',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-marquee',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-wap-marquee-dir',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-marquee-direction',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-marquee-increment',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-wap-marquee-loop',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-marquee-repetition',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-marquee-speed',
        'presto': '-wap-marquee-speed',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-marquee-style',
        'presto': '-wap-marquee-style',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': 'mask',
        'webkit': '-webkit-mask',
        'presto': 'mask',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-attachment',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-box-image',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-clip',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-composite',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-image',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-origin',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-position',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-position-x',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-position-y',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-repeat',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-repeat-x',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-repeat-y',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-mask-size',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-match-nearest-mail-blockquote-color',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-max-logical-height',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-max-logical-width',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-min-logical-height',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-min-logical-width',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-o-mini-fold',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-nbsp-mode',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-o-object-fit',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-o-object-position',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': 'opacity',
        'webkit': '-webkit-opacity',
        'presto': 'opacity',
        'trident': 'opacity',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-opacity = opacity',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-outline-radius',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-outline-radius-bottomleft',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-outline-radius-bottomright',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-outline-radius-topleft',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-outline-radius-topright',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': 'overflow-x',
        'webkit': 'overflow-x',
        'presto': 'overflow-x',
        'trident': '-ms-overflow-x',
        'status': 'WD'
      },
      {
        'gecko': 'overflow-y',
        'webkit': 'overflow-y',
        'presto': 'overflow-y',
        'trident': '-ms-overflow-y',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-padding-after',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-padding-before',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-padding-end',
        'webkit': '-webkit-padding-end',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '-moz-padding-start',
        'webkit': '-webkit-padding-start',
        'presto': '',
        'trident': '',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-webkit-perspective',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-perspective-origin',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-perspective-origin-x',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-perspective-origin-y',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-phonemes',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-rtl-ordering',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-script-level',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-script-min-size',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-script-size-multiplier',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-3dlight-color',
        'trident': '-ms-scrollbar-3dlight-color',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-arrow-color',
        'trident': '-ms-scrollbar-arrow-color',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-base-color',
        'trident': '-ms-scrollbar-base-color',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-darkshadow-color',
        'trident': '-ms-scrollbar-darkshadow-color',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-face-color',
        'trident': '-ms-scrollbar-face-color',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-highlight-color',
        'trident': '-ms-scrollbar-highlight-color',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-shadow-color',
        'trident': '-ms-scrollbar-shadow-color',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': 'scrollbar-track-color',
        'trident': '-ms-scrollbar-track-color',
        'status': 'P'
      },
      {
        'gecko': '-moz-stack-sizing',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-svg-shadow',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-tab-size',
        'webkit': '',
        'presto': '-o-tab-size',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-o-table-baseline',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-tap-highlight-color',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-text-align-last',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-text-autospace',
        'status': 'WD'
      },
      {
        'gecko': '-moz-text-blink',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-combine',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-epub-text-combine = -webkit-text-combine',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-text-decoration-color',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-text-decoration-line',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-text-decoration-style',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-decorations-in-effect',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-emphasis',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-epub-text-emphasis = -webkit-text-emphasis',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-emphasis-color',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-epub-text-emphasis-color = -webkit-text-emphasis-color',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-emphasis-position',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-emphasis-style',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-epub-text-emphasis-style = -webkit-text-emphasis-style',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-fill-color',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-text-justify',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-text-kashida-space',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-orientation',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-epub-text-orientation = -webkit-text-orientation',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': 'text-overflow',
        'presto': 'text-overflow',
        'trident': '-ms-text-overflow',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-security',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-size-adjust',
        'presto': '',
        'trident': '-ms-text-size-adjust',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-stroke',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-stroke-color',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-text-stroke-width',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-epub-text-transform = text-transform',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '',
        'trident': '-ms-text-underline-position',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-touch-callout',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-transform',
        'webkit': '-webkit-transform',
        'presto': '-o-transform',
        'trident': '-ms-transform',
        'status': 'WD'
      },
      {
        'gecko': '-moz-transform-origin',
        'webkit': '-webkit-transform-origin',
        'presto': '-o-transform-origin',
        'trident': '-ms-transform-origin',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-transform-origin-x',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-transform-origin-y',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-transform-origin-z',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '-webkit-transform-style',
        'presto': '',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-transition',
        'webkit': '-webkit-transition',
        'presto': '-o-transition',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-transition-delay',
        'webkit': '-webkit-transition-delay',
        'presto': '-o-transition-delay',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-transition-duration',
        'webkit': '-webkit-transition-duration',
        'presto': '-o-transition-duration',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-transition-property',
        'webkit': '-webkit-transition-property',
        'presto': '-o-transition-property',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '-moz-transition-timing-function',
        'webkit': '-webkit-transition-timing-function',
        'presto': '-o-transition-timing-function',
        'trident': '',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-user-drag',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-user-focus',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-user-input',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-user-modify',
        'webkit': '-webkit-user-modify',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '-moz-user-select',
        'webkit': '-webkit-user-select',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-voice-balance',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-voice-duration',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-voice-pitch',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-voice-pitch-range',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-voice-rate',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-voice-stress',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': '',
        'presto': '-xv-voice-volume',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '-moz-window-shadow',
        'webkit': '',
        'presto': '',
        'trident': '',
        'status': 'P'
      },
      {
        'gecko': '',
        'webkit': 'word-break',
        'presto': '',
        'trident': '-ms-word-break',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-epub-word-break = word-break',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': 'word-wrap',
        'webkit': 'word-wrap',
        'presto': 'word-wrap',
        'trident': '-ms-word-wrap',
        'status': 'WD'
      },
      {
        'gecko': '',
        'webkit': '-webkit-writing-mode',
        'presto': 'writing-mode',
        'trident': '-ms-writing-mode',
        'status': 'ED'
      },
      {
        'gecko': '',
        'webkit': '-epub-writing-mode = -webkit-writing-mode',
        'presto': '',
        'trident': '',
        'status': ''
      },
      {
        'gecko': '',
        'webkit': 'zoom',
        'presto': '',
        'trident': '-ms-zoom',
        'status': ''
      }
    ]
  };
var kCSS_PREFIXED_VALUE = [{
      'gecko': '-moz-box',
      'webkit': '-moz-box',
      'presto': '',
      'trident': '',
      'generic': 'box'
    }];
var CssInspector = {
    mVENDOR_PREFIXES: null,
    kEXPORTS_FOR_GECKO: true,
    kEXPORTS_FOR_WEBKIT: true,
    kEXPORTS_FOR_PRESTO: true,
    kEXPORTS_FOR_TRIDENT: true,
    cleanPrefixes: function () {
      this.mVENDOR_PREFIXES = null;
    },
    prefixesForProperty: function (aProperty) {
      if (!this.mVENDOR_PREFIXES) {
        this.mVENDOR_PREFIXES = {};
        for (var i = 0; i < kCSS_VENDOR_PREFIXES.properties.length; i++) {
          var p = kCSS_VENDOR_PREFIXES.properties[i];
          if (p.gecko && (p.webkit || p.presto || p.trident)) {
            var o = {};
            if (this.kEXPORTS_FOR_GECKO)
              o[p.gecko] = true;
            if (this.kEXPORTS_FOR_WEBKIT && p.webkit)
              o[p.webkit] = true;
            if (this.kEXPORTS_FOR_PRESTO && p.presto)
              o[p.presto] = true;
            if (this.kEXPORTS_FOR_TRIDENT && p.trident)
              o[p.trident] = true;
            this.mVENDOR_PREFIXES[p.gecko] = [];
            for (var j in o)
              this.mVENDOR_PREFIXES[p.gecko].push(j);
          }
        }
      }
      if (aProperty in this.mVENDOR_PREFIXES)
        return this.mVENDOR_PREFIXES[aProperty].sort();
      return null;
    },
    parseColorStop: function (parser, token) {
      var color = parser.parseColor(token);
      var position = '';
      if (!color)
        return null;
      token = parser.getToken(true, true);
      if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
        position = token.value;
        token = parser.getToken(true, true);
      }
      return {
        color: color,
        position: position
      };
    },
    parseGradient: function (parser, token) {
      var isRadial = false;
      var gradient = { isRepeating: false };
      if (token.isNotNull()) {
        if (token.isFunction('-moz-linear-gradient(') || token.isFunction('-moz-radial-gradient(') || token.isFunction('-moz-repeating-linear-gradient(') || token.isFunction('-moz-repeating-radial-gradient(')) {
          if (token.isFunction('-moz-radial-gradient(') || token.isFunction('-moz-repeating-radial-gradient(')) {
            gradient.isRadial = true;
          }
          if (token.isFunction('-moz-repeating-linear-gradient(') || token.isFunction('-moz-repeating-radial-gradient(')) {
            gradient.isRepeating = true;
          }
          token = parser.getToken(true, true);
          var haveGradientLine = false;
          var foundHorizPosition = false;
          var haveAngle = false;
          if (token.isAngle()) {
            gradient.angle = token.value;
            haveGradientLine = true;
            haveAngle = true;
            token = parser.getToken(true, true);
          }
          if (token.isLength() || token.isIdent('top') || token.isIdent('center') || token.isIdent('bottom') || token.isIdent('left') || token.isIdent('right')) {
            haveGradientLine = true;
            if (token.isLength() || token.isIdent('left') || token.isIdent('right')) {
              foundHorizPosition = true;
            }
            gradient.position = token.value;
            token = parser.getToken(true, true);
          }
          if (haveGradientLine) {
            if (!haveAngle && token.isAngle()) {
              // we have an angle here
              gradient.angle = token.value;
              haveAngle = true;
              token = parser.getToken(true, true);
            } else if (token.isLength() || foundHorizPosition && (token.isIdent('top') || token.isIdent('center') || token.isIdent('bottom')) || !foundHorizPosition && (token.isLength() || token.isIdent('top') || token.isIdent('center') || token.isIdent('bottom') || token.isIdent('left') || token.isIdent('right'))) {
              gradient.position = 'position' in gradient ? gradient.position + ' ' : '';
              gradient.position += token.value;
              token = parser.getToken(true, true);
            }
            if (!haveAngle && token.isAngle()) {
              // we have an angle here
              gradient.angle = token.value;
              haveAngle = true;
              token = parser.getToken(true, true);
            }
            // we must find a comma here
            if (!token.isSymbol(','))
              return null;
            token = parser.getToken(true, true);
          }
          // ok... Let's deal with the rest now
          if (gradient.isRadial) {
            if (token.isIdent('circle') || token.isIdent('ellipse')) {
              gradient.shape = token.value;
              token = parser.getToken(true, true);
            }
            if (token.isIdent('closest-side') || token.isIdent('closest-corner') || token.isIdent('farthest-side') || token.isIdent('farthest-corner') || token.isIdent('contain') || token.isIdent('cover')) {
              gradient.size = token.value;
              token = parser.getToken(true, true);
            }
            if (!('shape' in gradient) && (token.isIdent('circle') || token.isIdent('ellipse'))) {
              // we can still have the second value...
              gradient.shape = token.value;
              token = parser.getToken(true, true);
            }
            if (('shape' in gradient || 'size' in gradient) && !token.isSymbol(','))
              return null;
            else if ('shape' in gradient || 'size' in gradient)
              token = parser.getToken(true, true);
          }
          // now color stops...
          var stop1 = this.parseColorStop(parser, token);
          if (!stop1)
            return null;
          token = parser.currentToken();
          if (!token.isSymbol(','))
            return null;
          token = parser.getToken(true, true);
          var stop2 = this.parseColorStop(parser, token);
          if (!stop2)
            return null;
          token = parser.currentToken();
          if (token.isSymbol(',')) {
            token = parser.getToken(true, true);
          }
          // ok we have at least two color stops
          gradient.stops = [
            stop1,
            stop2
          ];
          while (!token.isSymbol(')')) {
            var colorstop = this.parseColorStop(parser, token);
            if (!colorstop)
              return null;
            token = parser.currentToken();
            if (!token.isSymbol(')') && !token.isSymbol(','))
              return null;
            if (token.isSymbol(','))
              token = parser.getToken(true, true);
            gradient.stops.push(colorstop);
          }
          return gradient;
        }
      }
      return null;
    },
    parseBoxShadows: function (aString) {
      var parser = new CSSParser();
      parser._init();
      parser.mPreserveWS = false;
      parser.mPreserveComments = false;
      parser.mPreservedTokens = [];
      parser.mScanner.init(aString);
      var shadows = [];
      var token = parser.getToken(true, true);
      var color = '', blurRadius = '0px', offsetX = '0px', offsetY = '0px', spreadRadius = '0px';
      var inset = false;
      while (token.isNotNull()) {
        if (token.isIdent('none')) {
          shadows.push({ none: true });
          token = parser.getToken(true, true);
        } else {
          if (token.isIdent('inset')) {
            inset = true;
            token = parser.getToken(true, true);
          }
          if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
            var offsetX = token.value;
            token = parser.getToken(true, true);
          } else
            return [];
          if (!inset && token.isIdent('inset')) {
            inset = true;
            token = parser.getToken(true, true);
          }
          if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
            var offsetX = token.value;
            token = parser.getToken(true, true);
          } else
            return [];
          if (!inset && token.isIdent('inset')) {
            inset = true;
            token = parser.getToken(true, true);
          }
          if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
            var blurRadius = token.value;
            token = parser.getToken(true, true);
          }
          if (!inset && token.isIdent('inset')) {
            inset = true;
            token = parser.getToken(true, true);
          }
          if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
            var spreadRadius = token.value;
            token = parser.getToken(true, true);
          }
          if (!inset && token.isIdent('inset')) {
            inset = true;
            token = parser.getToken(true, true);
          }
          if (token.isFunction('rgb(') || token.isFunction('rgba(') || token.isFunction('hsl(') || token.isFunction('hsla(') || token.isSymbol('#') || token.isIdent()) {
            var color = parser.parseColor(token);
            token = parser.getToken(true, true);
          }
          if (!inset && token.isIdent('inset')) {
            inset = true;
            token = parser.getToken(true, true);
          }
          shadows.push({
            none: false,
            color: color,
            offsetX: offsetX,
            offsetY: offsetY,
            blurRadius: blurRadius,
            spreadRadius: spreadRadius
          });
          if (token.isSymbol(',')) {
            inset = false;
            color = '';
            blurRadius = '0px';
            spreadRadius = '0px';
            offsetX = '0px';
            offsetY = '0px';
            token = parser.getToken(true, true);
          } else if (!token.isNotNull())
            return shadows;
          else
            return [];
        }
      }
      return shadows;
    },
    parseTextShadows: function (aString) {
      var parser = new CSSParser();
      parser._init();
      parser.mPreserveWS = false;
      parser.mPreserveComments = false;
      parser.mPreservedTokens = [];
      parser.mScanner.init(aString);
      var shadows = [];
      var token = parser.getToken(true, true);
      var color = '', blurRadius = '0px', offsetX = '0px', offsetY = '0px';
      while (token.isNotNull()) {
        if (token.isIdent('none')) {
          shadows.push({ none: true });
          token = parser.getToken(true, true);
        } else {
          if (token.isFunction('rgb(') || token.isFunction('rgba(') || token.isFunction('hsl(') || token.isFunction('hsla(') || token.isSymbol('#') || token.isIdent()) {
            var color = parser.parseColor(token);
            token = parser.getToken(true, true);
          }
          if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
            var offsetX = token.value;
            token = parser.getToken(true, true);
          } else
            return [];
          if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
            var offsetY = token.value;
            token = parser.getToken(true, true);
          } else
            return [];
          if (token.isPercentage() || token.isDimensionOfUnit('cm') || token.isDimensionOfUnit('mm') || token.isDimensionOfUnit('in') || token.isDimensionOfUnit('pc') || token.isDimensionOfUnit('px') || token.isDimensionOfUnit('em') || token.isDimensionOfUnit('ex') || token.isDimensionOfUnit('pt')) {
            var blurRadius = token.value;
            token = parser.getToken(true, true);
          }
          if (!color && (token.isFunction('rgb(') || token.isFunction('rgba(') || token.isFunction('hsl(') || token.isFunction('hsla(') || token.isSymbol('#') || token.isIdent())) {
            var color = parser.parseColor(token);
            token = parser.getToken(true, true);
          }
          shadows.push({
            none: false,
            color: color,
            offsetX: offsetX,
            offsetY: offsetY,
            blurRadius: blurRadius
          });
          if (token.isSymbol(',')) {
            color = '';
            blurRadius = '0px';
            offsetX = '0px';
            offsetY = '0px';
            token = parser.getToken(true, true);
          } else if (!token.isNotNull())
            return shadows;
          else
            return [];
        }
      }
      return shadows;
    },
    parseBackgroundImages: function (aString) {
      var parser = new CSSParser();
      parser._init();
      parser.mPreserveWS = false;
      parser.mPreserveComments = false;
      parser.mPreservedTokens = [];
      parser.mScanner.init(aString);
      var backgrounds = [];
      var token = parser.getToken(true, true);
      while (token.isNotNull()) {
        /*if (token.isFunction("rgb(") ||
          token.isFunction("rgba(") ||
          token.isFunction("hsl(") ||
          token.isFunction("hsla(") ||
          token.isSymbol("#") ||
          token.isIdent()) {
        var color = parser.parseColor(token);
        backgrounds.push( { type: "color", value: color });
        token = parser.getToken(true, true);
      }
      else */
        if (token.isFunction('url(')) {
          token = parser.getToken(true, true);
          var urlContent = parser.parseURL(token);
          backgrounds.push({
            type: 'image',
            value: 'url(' + urlContent
          });
          token = parser.getToken(true, true);
        } else if (token.isFunction('-moz-linear-gradient(') || token.isFunction('-moz-radial-gradient(') || token.isFunction('-moz-repeating-linear-gradient(') || token.isFunction('-moz-repeating-radial-gradient(')) {
          var gradient = this.parseGradient(parser, token);
          backgrounds.push({
            type: gradient.isRadial ? 'radial-gradient' : 'linear-gradient',
            value: gradient
          });
          token = parser.getToken(true, true);
        } else
          return null;
        if (token.isSymbol(',')) {
          token = parser.getToken(true, true);
          if (!token.isNotNull())
            return null;
        }
      }
      return backgrounds;
    },
    serializeGradient: function (gradient) {
      var s = gradient.isRadial ? gradient.isRepeating ? '-moz-repeating-radial-gradient(' : '-moz-radial-gradient(' : gradient.isRepeating ? '-moz-repeating-linear-gradient(' : '-moz-linear-gradient(';
      if (gradient.angle || gradient.position)
        s += (gradient.angle ? gradient.angle + ' ' : '') + (gradient.position ? gradient.position : '') + ', ';
      if (gradient.isRadial && (gradient.shape || gradient.size))
        s += (gradient.shape ? gradient.shape : '') + ' ' + (gradient.size ? gradient.size : '') + ', ';
      for (var i = 0; i < gradient.stops.length; i++) {
        var colorstop = gradient.stops[i];
        s += colorstop.color + (colorstop.position ? ' ' + colorstop.position : '');
        if (i != gradient.stops.length - 1)
          s += ', ';
      }
      s += ')';
      return s;
    },
    parseBorderImage: function (aString) {
      var parser = new CSSParser();
      parser._init();
      parser.mPreserveWS = false;
      parser.mPreserveComments = false;
      parser.mPreservedTokens = [];
      parser.mScanner.init(aString);
      var borderImage = {
          url: '',
          offsets: [],
          widths: [],
          sizes: []
        };
      var token = parser.getToken(true, true);
      if (token.isFunction('url(')) {
        token = parser.getToken(true, true);
        var urlContent = parser.parseURL(token);
        if (urlContent) {
          borderImage.url = urlContent.substr(0, urlContent.length - 1).trim();
          if (borderImage.url[0] == '"' && borderImage.url[borderImage.url.length - 1] == '"' || borderImage.url[0] == '\'' && borderImage.url[borderImage.url.length - 1] == '\'')
            borderImage.url = borderImage.url.substr(1, borderImage.url.length - 2);
        } else
          return null;
      } else
        return null;
      token = parser.getToken(true, true);
      if (token.isNumber() || token.isPercentage())
        borderImage.offsets.push(token.value);
      else
        return null;
      var i;
      for (i = 0; i < 3; i++) {
        token = parser.getToken(true, true);
        if (token.isNumber() || token.isPercentage())
          borderImage.offsets.push(token.value);
        else
          break;
      }
      if (i == 3)
        token = parser.getToken(true, true);
      if (token.isSymbol('/')) {
        token = parser.getToken(true, true);
        if (token.isDimension() || token.isNumber('0') || token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES)
          borderImage.widths.push(token.value);
        else
          return null;
        for (var i = 0; i < 3; i++) {
          token = parser.getToken(true, true);
          if (token.isDimension() || token.isNumber('0') || token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES)
            borderImage.widths.push(token.value);
          else
            break;
        }
        if (i == 3)
          token = parser.getToken(true, true);
      }
      for (var i = 0; i < 2; i++) {
        if (token.isIdent('stretch') || token.isIdent('repeat') || token.isIdent('round'))
          borderImage.sizes.push(token.value);
        else if (!token.isNotNull())
          return borderImage;
        else
          return null;
        token = parser.getToken(true, true);
      }
      if (!token.isNotNull())
        return borderImage;
      return null;
    },
    parseMediaQuery: function (aString) {
      var kCONSTRAINTS = {
          'width': true,
          'min-width': true,
          'max-width': true,
          'height': true,
          'min-height': true,
          'max-height': true,
          'device-width': true,
          'min-device-width': true,
          'max-device-width': true,
          'device-height': true,
          'min-device-height': true,
          'max-device-height': true,
          'orientation': true,
          'aspect-ratio': true,
          'min-aspect-ratio': true,
          'max-aspect-ratio': true,
          'device-aspect-ratio': true,
          'min-device-aspect-ratio': true,
          'max-device-aspect-ratio': true,
          'color': true,
          'min-color': true,
          'max-color': true,
          'color-index': true,
          'min-color-index': true,
          'max-color-index': true,
          'monochrome': true,
          'min-monochrome': true,
          'max-monochrome': true,
          'resolution': true,
          'min-resolution': true,
          'max-resolution': true,
          'scan': true,
          'grid': true
        };
      var parser = new CSSParser();
      parser._init();
      parser.mPreserveWS = false;
      parser.mPreserveComments = false;
      parser.mPreservedTokens = [];
      parser.mScanner.init(aString);
      var m = {
          amplifier: '',
          medium: '',
          constraints: []
        };
      var token = parser.getToken(true, true);
      if (token.isIdent('all') || token.isIdent('aural') || token.isIdent('braille') || token.isIdent('handheld') || token.isIdent('print') || token.isIdent('projection') || token.isIdent('screen') || token.isIdent('tty') || token.isIdent('tv')) {
        m.medium = token.value;
        token = parser.getToken(true, true);
      } else if (token.isIdent('not') || token.isIdent('only')) {
        m.amplifier = token.value;
        token = parser.getToken(true, true);
        if (token.isIdent('all') || token.isIdent('aural') || token.isIdent('braille') || token.isIdent('handheld') || token.isIdent('print') || token.isIdent('projection') || token.isIdent('screen') || token.isIdent('tty') || token.isIdent('tv')) {
          m.medium = token.value;
          token = parser.getToken(true, true);
        } else
          return null;
      }
      if (m.medium) {
        if (!token.isNotNull())
          return m;
        if (token.isIdent('and')) {
          token = parser.getToken(true, true);
        } else
          return null;
      }
      while (token.isSymbol('(')) {
        token = parser.getToken(true, true);
        if (token.isIdent() && token.value in kCONSTRAINTS) {
          var constraint = token.value;
          token = parser.getToken(true, true);
          if (token.isSymbol(':')) {
            token = parser.getToken(true, true);
            var values = [];
            while (!token.isSymbol(')')) {
              values.push(token.value);
              token = parser.getToken(true, true);
            }
            if (token.isSymbol(')')) {
              m.constraints.push({
                constraint: constraint,
                value: values
              });
              token = parser.getToken(true, true);
              if (token.isNotNull()) {
                if (token.isIdent('and')) {
                  token = parser.getToken(true, true);
                } else
                  return null;
              } else
                return m;
            } else
              return null;
          } else if (token.isSymbol(')')) {
            m.constraints.push({
              constraint: constraint,
              value: null
            });
            token = parser.getToken(true, true);
            if (token.isNotNull()) {
              if (token.isIdent('and')) {
                token = parser.getToken(true, true);
              } else
                return null;
            } else
              return m;
          } else
            return null;
        } else
          return null;
      }
      return m;
    }
  };
/************************************************************/
/************************** JSCSSP **************************/
/************************************************************/
var CSS_ESCAPE = '\\';
var IS_HEX_DIGIT = 1;
var START_IDENT = 2;
var IS_IDENT = 4;
var IS_WHITESPACE = 8;
var W = IS_WHITESPACE;
var I = IS_IDENT;
var S = START_IDENT;
var SI = IS_IDENT | START_IDENT;
var XI = IS_IDENT | IS_HEX_DIGIT;
var XSI = IS_IDENT | START_IDENT | IS_HEX_DIGIT;
function CSSScanner(aString) {
  this.init(aString);
}
CSSScanner.prototype = {
  kLexTable: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    W,
    W,
    0,
    W,
    W,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    W,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    I,
    0,
    0,
    XI,
    XI,
    XI,
    XI,
    XI,
    XI,
    XI,
    XI,
    XI,
    XI,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    XSI,
    XSI,
    XSI,
    XSI,
    XSI,
    XSI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    0,
    S,
    0,
    0,
    SI,
    0,
    XSI,
    XSI,
    XSI,
    XSI,
    XSI,
    XSI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI,
    SI
  ],
  kHexValues: {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
  },
  mString: '',
  mPos: 0,
  mPreservedPos: [],
  init: function (aString) {
    this.mString = aString;
    this.mPos = 0;
    this.mPreservedPos = [];
  },
  getCurrentPos: function () {
    return this.mPos;
  },
  getAlreadyScanned: function () {
    return this.mString.substr(0, this.mPos);
  },
  preserveState: function () {
    this.mPreservedPos.push(this.mPos);
  },
  restoreState: function () {
    if (this.mPreservedPos.length) {
      this.mPos = this.mPreservedPos.pop();
    }
  },
  forgetState: function () {
    if (this.mPreservedPos.length) {
      this.mPreservedPos.pop();
    }
  },
  read: function () {
    if (this.mPos < this.mString.length)
      return this.mString.charAt(this.mPos++);
    return -1;
  },
  peek: function () {
    if (this.mPos < this.mString.length)
      return this.mString.charAt(this.mPos);
    return -1;
  },
  isHexDigit: function (c) {
    var code = c.charCodeAt(0);
    return code < 256 && (this.kLexTable[code] & IS_HEX_DIGIT) != 0;
  },
  isIdentStart: function (c) {
    var code = c.charCodeAt(0);
    return code >= 256 || (this.kLexTable[code] & START_IDENT) != 0;
  },
  startsWithIdent: function (aFirstChar, aSecondChar) {
    var code = aFirstChar.charCodeAt(0);
    return this.isIdentStart(aFirstChar) || aFirstChar == '-' && this.isIdentStart(aSecondChar);
  },
  isIdent: function (c) {
    var code = c.charCodeAt(0);
    return code >= 256 || (this.kLexTable[code] & IS_IDENT) != 0;
  },
  isSymbol: function (c) {
    var code = c.charCodeAt(0);
    return (this.kLexTable[code] & IS_IDENT) != 1;
  },
  pushback: function () {
    this.mPos--;
  },
  nextHexValue: function () {
    var c = this.read();
    if (c == -1 || !this.isHexDigit(c))
      return new jscsspToken(jscsspToken.NULL_TYPE, null);
    var s = c;
    c = this.read();
    while (c != -1 && this.isHexDigit(c)) {
      s += c;
      c = this.read();
    }
    if (c != -1)
      this.pushback();
    return new jscsspToken(jscsspToken.HEX_TYPE, s);
  },
  gatherEscape: function () {
    var c = this.peek();
    if (c == -1)
      return '';
    if (this.isHexDigit(c)) {
      var code = 0;
      for (var i = 0; i < 6; i++) {
        c = this.read();
        if (this.isHexDigit(c))
          code = code * 16 + this.kHexValues[c.toLowerCase()];
        else if (!this.isHexDigit(c) && !this.isWhiteSpace(c)) {
          this.pushback();
          break;
        } else
          break;
      }
      if (i == 6) {
        c = this.peek();
        if (this.isWhiteSpace(c))
          this.read();
      }
      return String.fromCharCode(code);
    }
    c = this.read();
    if (c != '\n')
      return c;
    return '';
  },
  gatherIdent: function (c) {
    var s = '';
    if (c == CSS_ESCAPE)
      s += this.gatherEscape();
    else
      s += c;
    c = this.read();
    if (!this.mMediaQueryMode) {
      while (c != -1 && (this.isIdent(c) || c == CSS_ESCAPE)) {
        if (c == CSS_ESCAPE)
          s += this.gatherEscape();
        else
          s += c;
        c = this.read();
      }
    } else {
      while (c != -1 && c != '{' && c != ',') {
        s += c;
        c = this.read();
      }
    }
    if (c != -1)
      this.pushback();
    this.mMediaQueryMode = false;
    return s;
  },
  parseIdent: function (c) {
    var value = this.gatherIdent(c);
    var nextChar = this.peek();
    if (nextChar == '(') {
      value += this.read();
      return new jscsspToken(jscsspToken.FUNCTION_TYPE, value);
    }
    return new jscsspToken(jscsspToken.IDENT_TYPE, value);
  },
  isDigit: function (c) {
    return c >= '0' && c <= '9';
  },
  parseComment: function (c) {
    var s = c;
    while ((c = this.read()) != -1) {
      s += c;
      if (c == '*') {
        c = this.read();
        if (c == -1)
          break;
        if (c == '/') {
          s += c;
          break;
        }
        this.pushback();
      }
    }
    return new jscsspToken(jscsspToken.COMMENT_TYPE, s);
  },
  parseNumber: function (c) {
    var s = c;
    var foundDot = false;
    while ((c = this.read()) != -1) {
      if (c == '.') {
        if (foundDot)
          break;
        else {
          s += c;
          foundDot = true;
        }
      } else if (this.isDigit(c))
        s += c;
      else
        break;
    }
    if (c != -1 && this.startsWithIdent(c, this.peek())) {
      // DIMENSION
      var unit = this.gatherIdent(c);
      s += unit;
      return new jscsspToken(jscsspToken.DIMENSION_TYPE, s, unit);
    } else if (c == '%') {
      s += '%';
      return new jscsspToken(jscsspToken.PERCENTAGE_TYPE, s);
    } else if (c != -1)
      this.pushback();
    return new jscsspToken(jscsspToken.NUMBER_TYPE, s);
  },
  parseString: function (aStop) {
    var s = aStop;
    var previousChar = aStop;
    var c;
    while ((c = this.read()) != -1) {
      if (c == aStop && previousChar != CSS_ESCAPE) {
        s += c;
        break;
      } else if (c == CSS_ESCAPE) {
        c = this.peek();
        if (c == -1)
          break;
        else if (c == '\n' || c == '\r' || c == '\f') {
          d = c;
          c = this.read();
          // special for Opera that preserves \r\n...
          if (d == '\r') {
            c = this.peek();
            if (c == '\n')
              c = this.read();
          }
        } else {
          s += this.gatherEscape();
          c = this.peek();
        }
      } else if (c == '\n' || c == '\r' || c == '\f') {
        break;
      } else
        s += c;
      previousChar = c;
    }
    return new jscsspToken(jscsspToken.STRING_TYPE, s);
  },
  isWhiteSpace: function (c) {
    var code = c.charCodeAt(0);
    return code < 256 && (this.kLexTable[code] & IS_WHITESPACE) != 0;
  },
  eatWhiteSpace: function (c) {
    var s = c;
    while ((c = this.read()) != -1) {
      if (!this.isWhiteSpace(c))
        break;
      s += c;
    }
    if (c != -1)
      this.pushback();
    return s;
  },
  parseAtKeyword: function (c) {
    return new jscsspToken(jscsspToken.ATRULE_TYPE, this.gatherIdent(c));
  },
  nextToken: function () {
    var c = this.read();
    if (c == -1)
      return new jscsspToken(jscsspToken.NULL_TYPE, null);
    if (this.startsWithIdent(c, this.peek()))
      return this.parseIdent(c);
    if (c == '@') {
      var nextChar = this.read();
      if (nextChar != -1) {
        var followingChar = this.peek();
        this.pushback();
        if (this.startsWithIdent(nextChar, followingChar))
          return this.parseAtKeyword(c);
      }
    }
    if (c == '.' || c == '+' || c == '-') {
      var nextChar = this.peek();
      if (this.isDigit(nextChar))
        return this.parseNumber(c);
      else if (nextChar == '.' && c != '.') {
        firstChar = this.read();
        var secondChar = this.peek();
        this.pushback();
        if (this.isDigit(secondChar))
          return this.parseNumber(c);
      }
    }
    if (this.isDigit(c)) {
      return this.parseNumber(c);
    }
    if (c == '\'' || c == '"')
      return this.parseString(c);
    if (this.isWhiteSpace(c)) {
      var s = this.eatWhiteSpace(c);
      return new jscsspToken(jscsspToken.WHITESPACE_TYPE, s);
    }
    if (c == '|' || c == '~' || c == '^' || c == '$' || c == '*') {
      var nextChar = this.read();
      if (nextChar == '=') {
        switch (c) {
        case '~':
          return new jscsspToken(jscsspToken.INCLUDES_TYPE, '~=');
        case '|':
          return new jscsspToken(jscsspToken.DASHMATCH_TYPE, '|=');
        case '^':
          return new jscsspToken(jscsspToken.BEGINSMATCH_TYPE, '^=');
        case '$':
          return new jscsspToken(jscsspToken.ENDSMATCH_TYPE, '$=');
        case '*':
          return new jscsspToken(jscsspToken.CONTAINSMATCH_TYPE, '*=');
        default:
          break;
        }
      } else if (nextChar != -1)
        this.pushback();
    }
    if (c == '/' && this.peek() == '*')
      return this.parseComment(c);
    return new jscsspToken(jscsspToken.SYMBOL_TYPE, c);
  }
};
function CSSParser(aString) {
  this.mToken = null;
  this.mLookAhead = null;
  this.mScanner = new CSSScanner(aString);
  this.mPreserveWS = true;
  this.mPreserveComments = true;
  this.mPreservedTokens = [];
  this.mError = null;
}
CSSParser.prototype = {
  _init: function () {
    this.mToken = null;
    this.mLookAhead = null;
    this.mMediaQueryMode = false;
  },
  kINHERIT: 'inherit',
  kBORDER_WIDTH_NAMES: {
    'thin': true,
    'medium': true,
    'thick': true
  },
  kBORDER_STYLE_NAMES: {
    'none': true,
    'hidden': true,
    'dotted': true,
    'dashed': true,
    'solid': true,
    'double': true,
    'groove': true,
    'ridge': true,
    'inset': true,
    'outset': true
  },
  kCOLOR_NAMES: {
    'transparent': true,
    'black': true,
    'silver': true,
    'gray': true,
    'white': true,
    'maroon': true,
    'red': true,
    'purple': true,
    'fuchsia': true,
    'green': true,
    'lime': true,
    'olive': true,
    'yellow': true,
    'navy': true,
    'blue': true,
    'teal': true,
    'aqua': true,
    'aliceblue': true,
    'antiquewhite': true,
    'aqua': true,
    'aquamarine': true,
    'azure': true,
    'beige': true,
    'bisque': true,
    'black': true,
    'blanchedalmond': true,
    'blue': true,
    'blueviolet': true,
    'brown': true,
    'burlywood': true,
    'cadetblue': true,
    'chartreuse': true,
    'chocolate': true,
    'coral': true,
    'cornflowerblue': true,
    'cornsilk': true,
    'crimson': true,
    'cyan': true,
    'darkblue': true,
    'darkcyan': true,
    'darkgoldenrod': true,
    'darkgray': true,
    'darkgreen': true,
    'darkgrey': true,
    'darkkhaki': true,
    'darkmagenta': true,
    'darkolivegreen': true,
    'darkorange': true,
    'darkorchid': true,
    'darkred': true,
    'darksalmon': true,
    'darkseagreen': true,
    'darkslateblue': true,
    'darkslategray': true,
    'darkslategrey': true,
    'darkturquoise': true,
    'darkviolet': true,
    'deeppink': true,
    'deepskyblue': true,
    'dimgray': true,
    'dimgrey': true,
    'dodgerblue': true,
    'firebrick': true,
    'floralwhite': true,
    'forestgreen': true,
    'fuchsia': true,
    'gainsboro': true,
    'ghostwhite': true,
    'gold': true,
    'goldenrod': true,
    'gray': true,
    'green': true,
    'greenyellow': true,
    'grey': true,
    'honeydew': true,
    'hotpink': true,
    'indianred': true,
    'indigo': true,
    'ivory': true,
    'khaki': true,
    'lavender': true,
    'lavenderblush': true,
    'lawngreen': true,
    'lemonchiffon': true,
    'lightblue': true,
    'lightcoral': true,
    'lightcyan': true,
    'lightgoldenrodyellow': true,
    'lightgray': true,
    'lightgreen': true,
    'lightgrey': true,
    'lightpink': true,
    'lightsalmon': true,
    'lightseagreen': true,
    'lightskyblue': true,
    'lightslategray': true,
    'lightslategrey': true,
    'lightsteelblue': true,
    'lightyellow': true,
    'lime': true,
    'limegreen': true,
    'linen': true,
    'magenta': true,
    'maroon': true,
    'mediumaquamarine': true,
    'mediumblue': true,
    'mediumorchid': true,
    'mediumpurple': true,
    'mediumseagreen': true,
    'mediumslateblue': true,
    'mediumspringgreen': true,
    'mediumturquoise': true,
    'mediumvioletred': true,
    'midnightblue': true,
    'mintcream': true,
    'mistyrose': true,
    'moccasin': true,
    'navajowhite': true,
    'navy': true,
    'oldlace': true,
    'olive': true,
    'olivedrab': true,
    'orange': true,
    'orangered': true,
    'orchid': true,
    'palegoldenrod': true,
    'palegreen': true,
    'paleturquoise': true,
    'palevioletred': true,
    'papayawhip': true,
    'peachpuff': true,
    'peru': true,
    'pink': true,
    'plum': true,
    'powderblue': true,
    'purple': true,
    'red': true,
    'rosybrown': true,
    'royalblue': true,
    'saddlebrown': true,
    'salmon': true,
    'sandybrown': true,
    'seagreen': true,
    'seashell': true,
    'sienna': true,
    'silver': true,
    'skyblue': true,
    'slateblue': true,
    'slategray': true,
    'slategrey': true,
    'snow': true,
    'springgreen': true,
    'steelblue': true,
    'tan': true,
    'teal': true,
    'thistle': true,
    'tomato': true,
    'turquoise': true,
    'violet': true,
    'wheat': true,
    'white': true,
    'whitesmoke': true,
    'yellow': true,
    'yellowgreen': true,
    'activeborder': true,
    'activecaption': true,
    'appworkspace': true,
    'background': true,
    'buttonface': true,
    'buttonhighlight': true,
    'buttonshadow': true,
    'buttontext': true,
    'captiontext': true,
    'graytext': true,
    'highlight': true,
    'highlighttext': true,
    'inactiveborder': true,
    'inactivecaption': true,
    'inactivecaptiontext': true,
    'infobackground': true,
    'infotext': true,
    'menu': true,
    'menutext': true,
    'scrollbar': true,
    'threeddarkshadow': true,
    'threedface': true,
    'threedhighlight': true,
    'threedlightshadow': true,
    'threedshadow': true,
    'window': true,
    'windowframe': true,
    'windowtext': true
  },
  kLIST_STYLE_TYPE_NAMES: {
    'decimal': true,
    'decimal-leading-zero': true,
    'lower-roman': true,
    'upper-roman': true,
    'georgian': true,
    'armenian': true,
    'lower-latin': true,
    'lower-alpha': true,
    'upper-latin': true,
    'upper-alpha': true,
    'lower-greek': true,
    'disc': true,
    'circle': true,
    'square': true,
    'none': true,
    'box': true,
    'check': true,
    'diamond': true,
    'hyphen': true,
    'lower-armenian': true,
    'cjk-ideographic': true,
    'ethiopic-numeric': true,
    'hebrew': true,
    'japanese-formal': true,
    'japanese-informal': true,
    'simp-chinese-formal': true,
    'simp-chinese-informal': true,
    'syriac': true,
    'tamil': true,
    'trad-chinese-formal': true,
    'trad-chinese-informal': true,
    'upper-armenian': true,
    'arabic-indic': true,
    'binary': true,
    'bengali': true,
    'cambodian': true,
    'khmer': true,
    'devanagari': true,
    'gujarati': true,
    'gurmukhi': true,
    'kannada': true,
    'lower-hexadecimal': true,
    'lao': true,
    'malayalam': true,
    'mongolian': true,
    'myanmar': true,
    'octal': true,
    'oriya': true,
    'persian': true,
    'urdu': true,
    'telugu': true,
    'tibetan': true,
    'upper-hexadecimal': true,
    'afar': true,
    'ethiopic-halehame-aa-et': true,
    'ethiopic-halehame-am-et': true,
    'amharic-abegede': true,
    'ehiopic-abegede-am-et': true,
    'cjk-earthly-branch': true,
    'cjk-heavenly-stem': true,
    'ethiopic': true,
    'ethiopic-abegede': true,
    'ethiopic-abegede-gez': true,
    'hangul-consonant': true,
    'hangul': true,
    'hiragana-iroha': true,
    'hiragana': true,
    'katakana-iroha': true,
    'katakana': true,
    'lower-norwegian': true,
    'oromo': true,
    'ethiopic-halehame-om-et': true,
    'sidama': true,
    'ethiopic-halehame-sid-et': true,
    'somali': true,
    'ethiopic-halehame-so-et': true,
    'tigre': true,
    'ethiopic-halehame-tig': true,
    'tigrinya-er-abegede': true,
    'ethiopic-abegede-ti-er': true,
    'tigrinya-et': true,
    'ethiopic-halehame-ti-et': true,
    'upper-greek': true,
    'asterisks': true,
    'footnotes': true,
    'circled-decimal': true,
    'circled-lower-latin': true,
    'circled-upper-latin': true,
    'dotted-decimal': true,
    'double-circled-decimal': true,
    'filled-circled-decimal': true,
    'parenthesised-decimal': true,
    'parenthesised-lower-latin': true
  },
  reportError: function (aMsg) {
    this.mError = aMsg;
  },
  consumeError: function () {
    var e = this.mError;
    this.mError = null;
    return e;
  },
  currentToken: function () {
    return this.mToken;
  },
  getHexValue: function () {
    this.mToken = this.mScanner.nextHexValue();
    return this.mToken;
  },
  getToken: function (aSkipWS, aSkipComment) {
    if (this.mLookAhead) {
      this.mToken = this.mLookAhead;
      this.mLookAhead = null;
      return this.mToken;
    }
    this.mToken = this.mScanner.nextToken();
    while (this.mToken && (aSkipWS && this.mToken.isWhiteSpace() || aSkipComment && this.mToken.isComment()))
      this.mToken = this.mScanner.nextToken();
    return this.mToken;
  },
  lookAhead: function (aSkipWS, aSkipComment) {
    var preservedToken = this.mToken;
    this.mScanner.preserveState();
    var token = this.getToken(aSkipWS, aSkipComment);
    this.mScanner.restoreState();
    this.mToken = preservedToken;
    return token;
  },
  ungetToken: function () {
    this.mLookAhead = this.mToken;
  },
  addUnknownAtRule: function (aSheet, aString) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var blocks = [];
    var token = this.getToken(false, false);
    while (token.isNotNull()) {
      aString += token.value;
      if (token.isSymbol(';') && !blocks.length)
        break;
      else if (token.isSymbol('{') || token.isSymbol('(') || token.isSymbol('[') || token.type == 'function') {
        blocks.push(token.isFunction() ? '(' : token.value);
      } else if (token.isSymbol('}') || token.isSymbol(')') || token.isSymbol(']')) {
        if (blocks.length) {
          var ontop = blocks[blocks.length - 1];
          if (token.isSymbol('}') && ontop == '{' || token.isSymbol(')') && ontop == '(' || token.isSymbol(']') && ontop == '[') {
            blocks.pop();
            if (!blocks.length && token.isSymbol('}'))
              break;
          }
        }
      }
      token = this.getToken(false, false);
    }
    this.addUnknownRule(aSheet, aString, currentLine);
  },
  addUnknownRule: function (aSheet, aString, aCurrentLine) {
    var errorMsg = this.consumeError();
    var rule = new jscsspErrorRule(errorMsg);
    rule.currentLine = aCurrentLine;
    rule.parsedCssText = aString;
    rule.parentStyleSheet = aSheet;
    aSheet.cssRules.push(rule);
  },
  addWhitespace: function (aSheet, aString) {
    var rule = new jscsspWhitespace();
    rule.parsedCssText = aString;
    rule.parentStyleSheet = aSheet;
    aSheet.cssRules.push(rule);
  },
  addComment: function (aSheet, aString) {
    var rule = new jscsspComment();
    rule.parsedCssText = aString;
    rule.parentStyleSheet = aSheet;
    aSheet.cssRules.push(rule);
  },
  parseCharsetRule: function (aToken, aSheet) {
    var s = aToken.value;
    var token = this.getToken(false, false);
    s += token.value;
    if (token.isWhiteSpace(' ')) {
      token = this.getToken(false, false);
      s += token.value;
      if (token.isString()) {
        var encoding = token.value;
        token = this.getToken(false, false);
        s += token.value;
        if (token.isSymbol(';')) {
          var rule = new jscsspCharsetRule();
          rule.encoding = encoding;
          rule.parsedCssText = s;
          rule.parentStyleSheet = aSheet;
          aSheet.cssRules.push(rule);
          return true;
        } else
          this.reportError(kCHARSET_RULE_MISSING_SEMICOLON);
      } else
        this.reportError(kCHARSET_RULE_CHARSET_IS_STRING);
    } else
      this.reportError(kCHARSET_RULE_MISSING_WS);
    this.addUnknownAtRule(aSheet, s);
    return false;
  },
  parseImportRule: function (aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    this.preserveState();
    var token = this.getToken(true, true);
    var media = [];
    var href = '';
    if (token.isString()) {
      href = token.value;
      s += ' ' + href;
    } else if (token.isFunction('url(')) {
      token = this.getToken(true, true);
      var urlContent = this.parseURL(token);
      if (urlContent) {
        href = 'url(' + urlContent;
        s += ' ' + href;
      }
    } else
      this.reportError(kIMPORT_RULE_MISSING_URL);
    if (href) {
      token = this.getToken(true, true);
      while (token.isIdent()) {
        s += ' ' + token.value;
        media.push(token.value);
        token = this.getToken(true, true);
        if (!token)
          break;
        if (token.isSymbol(',')) {
          s += ',';
        } else if (token.isSymbol(';')) {
          break;
        } else
          break;
        token = this.getToken(true, true);
      }
      if (!media.length) {
        media.push('all');
      }
      if (token.isSymbol(';')) {
        s += ';';
        this.forgetState();
        var rule = new jscsspImportRule();
        rule.currentLine = currentLine;
        rule.parsedCssText = s;
        rule.href = href;
        rule.media = media;
        rule.parentStyleSheet = aSheet;
        aSheet.cssRules.push(rule);
        return true;
      }
    }
    this.restoreState();
    this.addUnknownAtRule(aSheet, '@import');
    return false;
  },
  parseVariablesRule: function (token, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = token.value;
    var declarations = [];
    var valid = false;
    this.preserveState();
    token = this.getToken(true, true);
    var media = [];
    var foundMedia = false;
    while (token.isNotNull()) {
      if (token.isIdent()) {
        foundMedia = true;
        s += ' ' + token.value;
        media.push(token.value);
        token = this.getToken(true, true);
        if (token.isSymbol(',')) {
          s += ',';
        } else {
          if (token.isSymbol('{'))
            this.ungetToken();
          else {
            // error...
            token.type = jscsspToken.NULL_TYPE;
            break;
          }
        }
      } else if (token.isSymbol('{'))
        break;
      else if (foundMedia) {
        token.type = jscsspToken.NULL_TYPE;
        // not a media list
        break;
      }
      token = this.getToken(true, true);
    }
    if (token.isSymbol('{')) {
      s += ' {';
      token = this.getToken(true, true);
      while (true) {
        if (!token.isNotNull()) {
          valid = true;
          break;
        }
        if (token.isSymbol('}')) {
          s += '}';
          valid = true;
          break;
        } else {
          var d = this.parseDeclaration(token, declarations, true, false, aSheet);
          s += (d && declarations.length ? ' ' : '') + d;
        }
        token = this.getToken(true, false);
      }
    }
    if (valid) {
      this.forgetState();
      var rule = new jscsspVariablesRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.declarations = declarations;
      rule.media = media;
      rule.parentStyleSheet = aSheet;
      aSheet.cssRules.push(rule);
      return true;
    }
    this.restoreState();
    return false;
  },
  parseNamespaceRule: function (aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    this.preserveState();
    var token = this.getToken(true, true);
    if (token.isNotNull()) {
      var prefix = '';
      var url = '';
      if (token.isIdent()) {
        prefix = token.value;
        s += ' ' + prefix;
        token = this.getToken(true, true);
      }
      if (token) {
        var foundURL = false;
        if (token.isString()) {
          foundURL = true;
          url = token.value;
          s += ' ' + url;
        } else if (token.isFunction('url(')) {
          // get a url here...
          token = this.getToken(true, true);
          var urlContent = this.parseURL(token);
          if (urlContent) {
            url += 'url(' + urlContent;
            foundURL = true;
            s += ' ' + urlContent;
          }
        }
      }
      if (foundURL) {
        token = this.getToken(true, true);
        if (token.isSymbol(';')) {
          s += ';';
          this.forgetState();
          var rule = new jscsspNamespaceRule();
          rule.currentLine = currentLine;
          rule.parsedCssText = s;
          rule.prefix = prefix;
          rule.url = url;
          rule.parentStyleSheet = aSheet;
          aSheet.cssRules.push(rule);
          return true;
        }
      }
    }
    this.restoreState();
    this.addUnknownAtRule(aSheet, '@namespace');
    return false;
  },
  parseFontFaceRule: function (aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var descriptors = [];
    this.preserveState();
    var token = this.getToken(true, true);
    if (token.isNotNull()) {
      // expecting block start
      if (token.isSymbol('{')) {
        s += ' ' + token.value;
        var token = this.getToken(true, false);
        while (true) {
          if (token.isSymbol('}')) {
            s += '}';
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, descriptors, false, false, aSheet);
            s += (d && descriptors.length ? ' ' : '') + d;
          }
          token = this.getToken(true, false);
        }
      }
    }
    if (valid) {
      this.forgetState();
      var rule = new jscsspFontFaceRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.descriptors = descriptors;
      rule.parentStyleSheet = aSheet;
      aSheet.cssRules.push(rule);
      return true;
    }
    this.restoreState();
    return false;
  },
  parsePageRule: function (aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var declarations = [];
    this.preserveState();
    var token = this.getToken(true, true);
    var pageSelector = '';
    if (token.isSymbol(':') || token.isIdent()) {
      if (token.isSymbol(':')) {
        pageSelector = ':';
        token = this.getToken(false, false);
      }
      if (token.isIdent()) {
        pageSelector += token.value;
        s += ' ' + pageSelector;
        token = this.getToken(true, true);
      }
    }
    if (token.isNotNull()) {
      // expecting block start
      if (token.isSymbol('{')) {
        s += ' ' + token.value;
        var token = this.getToken(true, false);
        while (true) {
          if (token.isSymbol('}')) {
            s += '}';
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, declarations, true, true, aSheet);
            s += (d && declarations.length ? ' ' : '') + d;
          }
          token = this.getToken(true, false);
        }
      }
    }
    if (valid) {
      this.forgetState();
      var rule = new jscsspPageRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.pageSelector = pageSelector;
      rule.declarations = declarations;
      rule.parentStyleSheet = aSheet;
      aSheet.cssRules.push(rule);
      return true;
    }
    this.restoreState();
    return false;
  },
  parseDefaultPropertyValue: function (token, aDecl, aAcceptPriority, descriptor, aSheet) {
    var valueText = '';
    var blocks = [];
    var foundPriority = false;
    var values = [];
    while (token.isNotNull()) {
      if ((token.isSymbol(';') || token.isSymbol('}') || token.isSymbol('!')) && !blocks.length) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      }
      if (token.isIdent(this.kINHERIT)) {
        if (values.length) {
          return '';
        } else {
          valueText = this.kINHERIT;
          var value = new jscsspVariable(kJscsspINHERIT_VALUE, aSheet);
          values.push(value);
          token = this.getToken(true, true);
          break;
        }
      } else if (token.isSymbol('{') || token.isSymbol('(') || token.isSymbol('[')) {
        blocks.push(token.value);
      } else if (token.isSymbol('}') || token.isSymbol(']')) {
        if (blocks.length) {
          var ontop = blocks[blocks.length - 1];
          if (token.isSymbol('}') && ontop == '{' || token.isSymbol(')') && ontop == '(' || token.isSymbol(']') && ontop == '[') {
            blocks.pop();
          }
        }
      }
      // XXX must find a better way to store individual values
      // probably a |values: []| field holding dimensions, percentages
      // functions, idents, numbers and symbols, in that order.
      if (token.isFunction()) {
        if (token.isFunction('var(')) {
          token = this.getToken(true, true);
          if (token.isIdent()) {
            var name = token.value;
            token = this.getToken(true, true);
            if (token.isSymbol(')')) {
              var value = new jscsspVariable(kJscsspVARIABLE_VALUE, aSheet);
              valueText += 'var(' + name + ')';
              value.name = name;
              values.push(value);
            } else
              return '';
          } else
            return '';
        } else {
          var fn = token.value;
          token = this.getToken(false, true);
          var arg = this.parseFunctionArgument(token);
          if (arg) {
            valueText += fn + arg;
            var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
            value.value = fn + arg;
            values.push(value);
          } else
            return '';
        }
      } else if (token.isSymbol('#')) {
        var color = this.parseColor(token);
        if (color) {
          valueText += color;
          var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
          value.value = color;
          values.push(value);
        } else
          return '';
      } else if (!token.isWhiteSpace() && !token.isSymbol(',')) {
        var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
        value.value = token.value;
        values.push(value);
        valueText += token.value;
      } else
        valueText += token.value;
      token = this.getToken(false, true);
    }
    if (values.length && valueText) {
      this.forgetState();
      aDecl.push(this._createJscsspDeclarationFromValuesArray(descriptor, values, valueText));
      return valueText;
    }
    return '';
  },
  parseMarginOrPaddingShorthand: function (token, aDecl, aAcceptPriority, aProperty) {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;
    var values = [];
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
        token = this.getToken(true, true);
        break;
      } else if (token.isDimension() || token.isNumber('0') || token.isPercentage() || token.isIdent('auto')) {
        values.push(token.value);
      } else
        return '';
      token = this.getToken(true, true);
    }
    var count = values.length;
    switch (count) {
    case 1:
      top = values[0];
      bottom = top;
      left = top;
      right = top;
      break;
    case 2:
      top = values[0];
      bottom = top;
      left = values[1];
      right = left;
      break;
    case 3:
      top = values[0];
      left = values[1];
      right = left;
      bottom = values[2];
      break;
    case 4:
      top = values[0];
      right = values[1];
      bottom = values[2];
      left = values[3];
      break;
    default:
      return '';
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + '-top', top));
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + '-right', right));
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + '-bottom', bottom));
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + '-left', left));
    return top + ' ' + right + ' ' + bottom + ' ' + left;
  },
  parseBorderColorShorthand: function (token, aDecl, aAcceptPriority) {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;
    var values = [];
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
        token = this.getToken(true, true);
        break;
      } else {
        var color = this.parseColor(token);
        if (color)
          values.push(color);
        else
          return '';
      }
      token = this.getToken(true, true);
    }
    var count = values.length;
    switch (count) {
    case 1:
      top = values[0];
      bottom = top;
      left = top;
      right = top;
      break;
    case 2:
      top = values[0];
      bottom = top;
      left = values[1];
      right = left;
      break;
    case 3:
      top = values[0];
      left = values[1];
      right = left;
      bottom = values[2];
      break;
    case 4:
      top = values[0];
      right = values[1];
      bottom = values[2];
      left = values[3];
      break;
    default:
      return '';
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue('border-top-color', top));
    aDecl.push(this._createJscsspDeclarationFromValue('border-right-color', right));
    aDecl.push(this._createJscsspDeclarationFromValue('border-bottom-color', bottom));
    aDecl.push(this._createJscsspDeclarationFromValue('border-left-color', left));
    return top + ' ' + right + ' ' + bottom + ' ' + left;
  },
  parseCueShorthand: function (token, declarations, aAcceptPriority) {
    var before = '';
    var after = '';
    var values = [];
    var values = [];
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      } else if (token.isIdent('none'))
        values.push(token.value);
      else if (token.isFunction('url(')) {
        var token = this.getToken(true, true);
        var urlContent = this.parseURL(token);
        if (urlContent)
          values.push('url(' + urlContent);
        else
          return '';
      } else
        return '';
      token = this.getToken(true, true);
    }
    var count = values.length;
    switch (count) {
    case 1:
      before = values[0];
      after = before;
      break;
    case 2:
      before = values[0];
      after = values[1];
      break;
    default:
      return '';
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue('cue-before', before));
    aDecl.push(this._createJscsspDeclarationFromValue('cue-after', after));
    return before + ' ' + after;
  },
  parsePauseShorthand: function (token, declarations, aAcceptPriority) {
    var before = '';
    var after = '';
    var values = [];
    var values = [];
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      } else if (token.isDimensionOfUnit('ms') || token.isDimensionOfUnit('s') || token.isPercentage() || token.isNumber('0'))
        values.push(token.value);
      else
        return '';
      token = this.getToken(true, true);
    }
    var count = values.length;
    switch (count) {
    case 1:
      before = values[0];
      after = before;
      break;
    case 2:
      before = values[0];
      after = values[1];
      break;
    default:
      return '';
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue('pause-before', before));
    aDecl.push(this._createJscsspDeclarationFromValue('pause-after', after));
    return before + ' ' + after;
  },
  parseBorderWidthShorthand: function (token, aDecl, aAcceptPriority) {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;
    var values = [];
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      } else if (token.isDimension() || token.isNumber('0') || token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES) {
        values.push(token.value);
      } else
        return '';
      token = this.getToken(true, true);
    }
    var count = values.length;
    switch (count) {
    case 1:
      top = values[0];
      bottom = top;
      left = top;
      right = top;
      break;
    case 2:
      top = values[0];
      bottom = top;
      left = values[1];
      right = left;
      break;
    case 3:
      top = values[0];
      left = values[1];
      right = left;
      bottom = values[2];
      break;
    case 4:
      top = values[0];
      right = values[1];
      bottom = values[2];
      left = values[3];
      break;
    default:
      return '';
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue('border-top-width', top));
    aDecl.push(this._createJscsspDeclarationFromValue('border-right-width', right));
    aDecl.push(this._createJscsspDeclarationFromValue('border-bottom-width', bottom));
    aDecl.push(this._createJscsspDeclarationFromValue('border-left-width', left));
    return top + ' ' + right + ' ' + bottom + ' ' + left;
  },
  parseBorderStyleShorthand: function (token, aDecl, aAcceptPriority) {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;
    var values = [];
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      } else if (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES) {
        values.push(token.value);
      } else
        return '';
      token = this.getToken(true, true);
    }
    var count = values.length;
    switch (count) {
    case 1:
      top = values[0];
      bottom = top;
      left = top;
      right = top;
      break;
    case 2:
      top = values[0];
      bottom = top;
      left = values[1];
      right = left;
      break;
    case 3:
      top = values[0];
      left = values[1];
      right = left;
      bottom = values[2];
      break;
    case 4:
      top = values[0];
      right = values[1];
      bottom = values[2];
      left = values[3];
      break;
    default:
      return '';
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue('border-top-style', top));
    aDecl.push(this._createJscsspDeclarationFromValue('border-right-style', right));
    aDecl.push(this._createJscsspDeclarationFromValue('border-bottom-style', bottom));
    aDecl.push(this._createJscsspDeclarationFromValue('border-left-style', left));
    return top + ' ' + right + ' ' + bottom + ' ' + left;
  },
  parseBorderEdgeOrOutlineShorthand: function (token, aDecl, aAcceptPriority, aProperty) {
    var bWidth = null;
    var bStyle = null;
    var bColor = null;
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!bWidth && !bStyle && !bColor && token.isIdent(this.kINHERIT)) {
        bWidth = this.kINHERIT;
        bStyle = this.kINHERIT;
        bColor = this.kINHERIT;
      } else if (!bWidth && (token.isDimension() || token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES || token.isNumber('0'))) {
        bWidth = token.value;
      } else if (!bStyle && (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES)) {
        bStyle = token.value;
      } else {
        var color = aProperty == 'outline' && token.isIdent('invert') ? 'invert' : this.parseColor(token);
        if (!bColor && color)
          bColor = color;
        else
          return '';
      }
      token = this.getToken(true, true);
    }
    // create the declarations
    this.forgetState();
    bWidth = bWidth ? bWidth : 'medium';
    bStyle = bStyle ? bStyle : 'none';
    bColor = bColor ? bColor : '-moz-initial';
    function addPropertyToDecl(aSelf, aDecl, property, w, s, c) {
      aDecl.push(aSelf._createJscsspDeclarationFromValue(property + '-width', w));
      aDecl.push(aSelf._createJscsspDeclarationFromValue(property + '-style', s));
      aDecl.push(aSelf._createJscsspDeclarationFromValue(property + '-color', c));
    }
    if (aProperty == 'border') {
      addPropertyToDecl(this, aDecl, 'border-top', bWidth, bStyle, bColor);
      addPropertyToDecl(this, aDecl, 'border-right', bWidth, bStyle, bColor);
      addPropertyToDecl(this, aDecl, 'border-bottom', bWidth, bStyle, bColor);
      addPropertyToDecl(this, aDecl, 'border-left', bWidth, bStyle, bColor);
    } else
      addPropertyToDecl(this, aDecl, aProperty, bWidth, bStyle, bColor);
    return bWidth + ' ' + bStyle + ' ' + bColor;
  },
  parseBackgroundShorthand: function (token, aDecl, aAcceptPriority) {
    var kHPos = {
        'left': true,
        'right': true
      };
    var kVPos = {
        'top': true,
        'bottom': true
      };
    var kPos = {
        'left': true,
        'right': true,
        'top': true,
        'bottom': true,
        'center': true
      };
    var bgColor = null;
    var bgRepeat = null;
    var bgAttachment = null;
    var bgImage = null;
    var bgPosition = null;
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!bgColor && !bgRepeat && !bgAttachment && !bgImage && !bgPosition && token.isIdent(this.kINHERIT)) {
        bgColor = this.kINHERIT;
        bgRepeat = this.kINHERIT;
        bgAttachment = this.kINHERIT;
        bgImage = this.kINHERIT;
        bgPosition = this.kINHERIT;
      } else {
        if (!bgAttachment && (token.isIdent('scroll') || token.isIdent('fixed'))) {
          bgAttachment = token.value;
        } else if (!bgPosition && (token.isIdent() && token.value in kPos || token.isDimension() || token.isNumber('0') || token.isPercentage())) {
          bgPosition = token.value;
          token = this.getToken(true, true);
          if (token.isDimension() || token.isNumber('0') || token.isPercentage()) {
            bgPosition += ' ' + token.value;
          } else if (token.isIdent() && token.value in kPos) {
            if (bgPosition in kHPos && token.value in kHPos || bgPosition in kVPos && token.value in kVPos)
              return '';
            bgPosition += ' ' + token.value;
          } else {
            this.ungetToken();
            bgPosition += ' center';
          }
        } else if (!bgRepeat && (token.isIdent('repeat') || token.isIdent('repeat-x') || token.isIdent('repeat-y') || token.isIdent('no-repeat'))) {
          bgRepeat = token.value;
        } else if (!bgImage && (token.isFunction('url(') || token.isIdent('none'))) {
          bgImage = token.value;
          if (token.isFunction('url(')) {
            token = this.getToken(true, true);
            var url = this.parseURL(token);
            // TODO
            if (url)
              bgImage += url;
            else
              return '';
          }
        } else if (!bgImage && (token.isFunction('-moz-linear-gradient(') || token.isFunction('-moz-radial-gradient(') || token.isFunction('-moz-repeating-linear-gradient(') || token.isFunction('-moz-repeating-radial-gradient('))) {
          var gradient = CssInspector.parseGradient(this, token);
          if (gradient)
            bgImage = CssInspector.serializeGradient(gradient);
          else
            return '';
        } else {
          var color = this.parseColor(token);
          if (!bgColor && color)
            bgColor = color;
          else
            return '';
        }
      }
      token = this.getToken(true, true);
    }
    // create the declarations
    this.forgetState();
    bgColor = bgColor ? bgColor : 'transparent';
    bgImage = bgImage ? bgImage : 'none';
    bgRepeat = bgRepeat ? bgRepeat : 'repeat';
    bgAttachment = bgAttachment ? bgAttachment : 'scroll';
    bgPosition = bgPosition ? bgPosition : 'top left';
    aDecl.push(this._createJscsspDeclarationFromValue('background-color', bgColor));
    aDecl.push(this._createJscsspDeclarationFromValue('background-image', bgImage));
    aDecl.push(this._createJscsspDeclarationFromValue('background-repeat', bgRepeat));
    aDecl.push(this._createJscsspDeclarationFromValue('background-attachment', bgAttachment));
    aDecl.push(this._createJscsspDeclarationFromValue('background-position', bgPosition));
    return bgColor + ' ' + bgImage + ' ' + bgRepeat + ' ' + bgAttachment + ' ' + bgPosition;
  },
  parseListStyleShorthand: function (token, aDecl, aAcceptPriority) {
    var kPosition = {
        'inside': true,
        'outside': true
      };
    var lType = null;
    var lPosition = null;
    var lImage = null;
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!lType && !lPosition && !lImage && token.isIdent(this.kINHERIT)) {
        lType = this.kINHERIT;
        lPosition = this.kINHERIT;
        lImage = this.kINHERIT;
      } else if (!lType && (token.isIdent() && token.value in this.kLIST_STYLE_TYPE_NAMES)) {
        lType = token.value;
      } else if (!lPosition && (token.isIdent() && token.value in kPosition)) {
        lPosition = token.value;
      } else if (!lImage && token.isFunction('url')) {
        token = this.getToken(true, true);
        var urlContent = this.parseURL(token);
        if (urlContent) {
          lImage = 'url(' + urlContent;
        } else
          return '';
      } else if (!token.isIdent('none'))
        return '';
      token = this.getToken(true, true);
    }
    // create the declarations
    this.forgetState();
    lType = lType ? lType : 'none';
    lImage = lImage ? lImage : 'none';
    lPosition = lPosition ? lPosition : 'outside';
    aDecl.push(this._createJscsspDeclarationFromValue('list-style-type', lType));
    aDecl.push(this._createJscsspDeclarationFromValue('list-style-position', lPosition));
    aDecl.push(this._createJscsspDeclarationFromValue('list-style-image', lImage));
    return lType + ' ' + lPosition + ' ' + lImage;
  },
  parseFontShorthand: function (token, aDecl, aAcceptPriority) {
    var kStyle = {
        'italic': true,
        'oblique': true
      };
    var kVariant = { 'small-caps': true };
    var kWeight = {
        'bold': true,
        'bolder': true,
        'lighter': true,
        '100': true,
        '200': true,
        '300': true,
        '400': true,
        '500': true,
        '600': true,
        '700': true,
        '800': true,
        '900': true
      };
    var kSize = {
        'xx-small': true,
        'x-small': true,
        'small': true,
        'medium': true,
        'large': true,
        'x-large': true,
        'xx-large': true,
        'larger': true,
        'smaller': true
      };
    var kValues = {
        'caption': true,
        'icon': true,
        'menu': true,
        'message-box': true,
        'small-caption': true,
        'status-bar': true
      };
    var kFamily = {
        'serif': true,
        'sans-serif': true,
        'cursive': true,
        'fantasy': true,
        'monospace': true
      };
    var fStyle = null;
    var fVariant = null;
    var fWeight = null;
    var fSize = null;
    var fLineHeight = null;
    var fFamily = '';
    var fSystem = null;
    var fFamilyValues = [];
    var normalCount = 0;
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (!fStyle && !fVariant && !fWeight && !fSize && !fLineHeight && !fFamily && !fSystem && token.isIdent(this.kINHERIT)) {
        fStyle = this.kINHERIT;
        fVariant = this.kINHERIT;
        fWeight = this.kINHERIT;
        fSize = this.kINHERIT;
        fLineHeight = this.kINHERIT;
        fFamily = this.kINHERIT;
        fSystem = this.kINHERIT;
      } else {
        if (!fSystem && (token.isIdent() && token.value in kValues)) {
          fSystem = token.value;
          break;
        } else {
          if (!fStyle && token.isIdent() && token.value in kStyle) {
            fStyle = token.value;
          } else if (!fVariant && token.isIdent() && token.value in kVariant) {
            fVariant = token.value;
          } else if (!fWeight && (token.isIdent() || token.isNumber()) && token.value in kWeight) {
            fWeight = token.value;
          } else if (!fSize && (token.isIdent() && token.value in kSize || token.isDimension() || token.isPercentage())) {
            fSize = token.value;
            var token = this.getToken(false, false);
            if (token.isSymbol('/')) {
              token = this.getToken(false, false);
              if (!fLineHeight && (token.isDimension() || token.isNumber() || token.isPercentage())) {
                fLineHeight = token.value;
              } else
                return '';
            } else
              this.ungetToken();
          } else if (token.isIdent('normal')) {
            normalCount++;
            if (normalCount > 3)
              return '';
          } else if (!fFamily && (token.isString() || token.isIdent())) {
            var lastWasComma = false;
            while (true) {
              if (!token.isNotNull())
                break;
              else if (token.isSymbol(';') || aAcceptPriority && token.isSymbol('!') || token.isSymbol('}')) {
                this.ungetToken();
                break;
              } else if (token.isIdent() && token.value in kFamily) {
                var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                value.value = token.value;
                fFamilyValues.push(value);
                fFamily += token.value;
                break;
              } else if (token.isString() || token.isIdent()) {
                var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                value.value = token.value;
                fFamilyValues.push(value);
                fFamily += token.value;
                lastWasComma = false;
              } else if (!lastWasComma && token.isSymbol(',')) {
                fFamily += ', ';
                lastWasComma = true;
              } else
                return '';
              token = this.getToken(true, true);
            }
          } else {
            return '';
          }
        }
      }
      token = this.getToken(true, true);
    }
    // create the declarations
    this.forgetState();
    if (fSystem) {
      aDecl.push(this._createJscsspDeclarationFromValue('font', fSystem));
      return fSystem;
    }
    fStyle = fStyle ? fStyle : 'normal';
    fVariant = fVariant ? fVariant : 'normal';
    fWeight = fWeight ? fWeight : 'normal';
    fSize = fSize ? fSize : 'medium';
    fLineHeight = fLineHeight ? fLineHeight : 'normal';
    fFamily = fFamily ? fFamily : '-moz-initial';
    aDecl.push(this._createJscsspDeclarationFromValue('font-style', fStyle));
    aDecl.push(this._createJscsspDeclarationFromValue('font-variant', fVariant));
    aDecl.push(this._createJscsspDeclarationFromValue('font-weight', fWeight));
    aDecl.push(this._createJscsspDeclarationFromValue('font-size', fSize));
    aDecl.push(this._createJscsspDeclarationFromValue('line-height', fLineHeight));
    aDecl.push(this._createJscsspDeclarationFromValuesArray('font-family', fFamilyValues, fFamily));
    return fStyle + ' ' + fVariant + ' ' + fWeight + ' ' + fSize + '/' + fLineHeight + ' ' + fFamily;
  },
  _createJscsspDeclaration: function (property, value) {
    var decl = new jscsspDeclaration();
    decl.property = property;
    decl.value = this.trim11(value);
    decl.parsedCssText = property + ': ' + value + ';';
    return decl;
  },
  _createJscsspDeclarationFromValue: function (property, valueText) {
    var decl = new jscsspDeclaration();
    decl.property = property;
    var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
    value.value = valueText;
    decl.values = [value];
    decl.valueText = valueText;
    decl.parsedCssText = property + ': ' + valueText + ';';
    return decl;
  },
  _createJscsspDeclarationFromValuesArray: function (property, values, valueText) {
    var decl = new jscsspDeclaration();
    decl.property = property;
    decl.values = values;
    decl.valueText = valueText;
    decl.parsedCssText = property + ': ' + valueText + ';';
    return decl;
  },
  parseURL: function (token) {
    var value = '';
    if (token.isString()) {
      value += token.value;
      token = this.getToken(true, true);
    } else
      while (true) {
        if (!token.isNotNull()) {
          this.reportError(kURL_EOF);
          return '';
        }
        if (token.isWhiteSpace()) {
          nextToken = this.lookAhead(true, true);
          // if next token is not a closing parenthesis, that's an error
          if (!nextToken.isSymbol(')')) {
            this.reportError(kURL_WS_INSIDE);
            token = this.currentToken();
            break;
          }
        }
        if (token.isSymbol(')')) {
          break;
        }
        value += token.value;
        token = this.getToken(false, false);
      }
    if (token.isSymbol(')')) {
      return value + ')';
    }
    return '';
  },
  parseFunctionArgument: function (token) {
    var value = '';
    if (token.isString()) {
      value += token.value;
      token = this.getToken(true, true);
    } else {
      var parenthesis = 1;
      while (true) {
        if (!token.isNotNull())
          return '';
        if (token.isFunction() || token.isSymbol('('))
          parenthesis++;
        if (token.isSymbol(')')) {
          parenthesis--;
          if (!parenthesis)
            break;
        }
        value += token.value;
        token = this.getToken(false, false);
      }
    }
    if (token.isSymbol(')'))
      return value + ')';
    return '';
  },
  parseColor: function (token) {
    var color = '';
    if (token.isFunction('rgb(') || token.isFunction('rgba(')) {
      color = token.value;
      var isRgba = token.isFunction('rgba(');
      token = this.getToken(true, true);
      if (!token.isNumber() && !token.isPercentage())
        return '';
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(','))
        return '';
      color += ', ';
      token = this.getToken(true, true);
      if (!token.isNumber() && !token.isPercentage())
        return '';
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(','))
        return '';
      color += ', ';
      token = this.getToken(true, true);
      if (!token.isNumber() && !token.isPercentage())
        return '';
      color += token.value;
      if (isRgba) {
        token = this.getToken(true, true);
        if (!token.isSymbol(','))
          return '';
        color += ', ';
        token = this.getToken(true, true);
        if (!token.isNumber())
          return '';
        color += token.value;
      }
      token = this.getToken(true, true);
      if (!token.isSymbol(')'))
        return '';
      color += token.value;
    } else if (token.isFunction('hsl(') || token.isFunction('hsla(')) {
      color = token.value;
      var isHsla = token.isFunction('hsla(');
      token = this.getToken(true, true);
      if (!token.isNumber())
        return '';
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(','))
        return '';
      color += ', ';
      token = this.getToken(true, true);
      if (!token.isPercentage())
        return '';
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(','))
        return '';
      color += ', ';
      token = this.getToken(true, true);
      if (!token.isPercentage())
        return '';
      color += token.value;
      if (isHsla) {
        token = this.getToken(true, true);
        if (!token.isSymbol(','))
          return '';
        color += ', ';
        token = this.getToken(true, true);
        if (!token.isNumber())
          return '';
        color += token.value;
      }
      token = this.getToken(true, true);
      if (!token.isSymbol(')'))
        return '';
      color += token.value;
    } else if (token.isIdent() && token.value in this.kCOLOR_NAMES)
      color = token.value;
    else if (token.isSymbol('#')) {
      token = this.getHexValue();
      if (!token.isHex())
        return '';
      var length = token.value.length;
      if (length != 3 && length != 6)
        return '';
      if (token.value.match(/[a-fA-F0-9]/g).length != length)
        return '';
      color = '#' + token.value;
    }
    return color;
  },
  parseDeclaration: function (aToken, aDecl, aAcceptPriority, aExpandShorthands, aSheet) {
    this.preserveState();
    var blocks = [];
    if (aToken.isIdent()) {
      var descriptor = aToken.value.toLowerCase();
      var token = this.getToken(true, true);
      if (token.isSymbol(':')) {
        var token = this.getToken(true, true);
        var value = '';
        var declarations = [];
        if (aExpandShorthands)
          switch (descriptor) {
          case 'background':
            value = this.parseBackgroundShorthand(token, declarations, aAcceptPriority);
            break;
          case 'margin':
          case 'padding':
            value = this.parseMarginOrPaddingShorthand(token, declarations, aAcceptPriority, descriptor);
            break;
          case 'border-color':
            value = this.parseBorderColorShorthand(token, declarations, aAcceptPriority);
            break;
          case 'border-style':
            value = this.parseBorderStyleShorthand(token, declarations, aAcceptPriority);
            break;
          case 'border-width':
            value = this.parseBorderWidthShorthand(token, declarations, aAcceptPriority);
            break;
          case 'border-top':
          case 'border-right':
          case 'border-bottom':
          case 'border-left':
          case 'border':
          case 'outline':
            value = this.parseBorderEdgeOrOutlineShorthand(token, declarations, aAcceptPriority, descriptor);
            break;
          case 'cue':
            value = this.parseCueShorthand(token, declarations, aAcceptPriority);
            break;
          case 'pause':
            value = this.parsePauseShorthand(token, declarations, aAcceptPriority);
            break;
          case 'font':
            value = this.parseFontShorthand(token, declarations, aAcceptPriority);
            break;
          case 'list-style':
            value = this.parseListStyleShorthand(token, declarations, aAcceptPriority);
            break;
          default:
            value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
            break;
          }
        else
          value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
        token = this.currentToken();
        if (value)
          // no error above
          {
            var priority = false;
            if (token.isSymbol('!')) {
              token = this.getToken(true, true);
              if (token.isIdent('important')) {
                priority = true;
                token = this.getToken(true, true);
                if (token.isSymbol(';') || token.isSymbol('}')) {
                  if (token.isSymbol('}'))
                    this.ungetToken();
                } else
                  return '';
              } else
                return '';
            } else if (token.isNotNull() && !token.isSymbol(';') && !token.isSymbol('}'))
              return '';
            for (var i = 0; i < declarations.length; i++) {
              declarations[i].priority = priority;
              aDecl.push(declarations[i]);
            }
            return descriptor + ': ' + value + ';';
          }
      }
    } else if (aToken.isComment()) {
      if (this.mPreserveComments) {
        this.forgetState();
        var comment = new jscsspComment();
        comment.parsedCssText = aToken.value;
        aDecl.push(comment);
      }
      return aToken.value;
    }
    // we have an error here, let's skip it
    this.restoreState();
    var s = aToken.value;
    blocks = [];
    var token = this.getToken(false, false);
    while (token.isNotNull()) {
      s += token.value;
      if ((token.isSymbol(';') || token.isSymbol('}')) && !blocks.length) {
        if (token.isSymbol('}'))
          this.ungetToken();
        break;
      } else if (token.isSymbol('{') || token.isSymbol('(') || token.isSymbol('[') || token.isFunction()) {
        blocks.push(token.isFunction() ? '(' : token.value);
      } else if (token.isSymbol('}') || token.isSymbol(')') || token.isSymbol(']')) {
        if (blocks.length) {
          var ontop = blocks[blocks.length - 1];
          if (token.isSymbol('}') && ontop == '{' || token.isSymbol(')') && ontop == '(' || token.isSymbol(']') && ontop == '[') {
            blocks.pop();
          }
        }
      }
      token = this.getToken(false, false);
    }
    return '';
  },
  parseKeyframesRule: function (aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var keyframesRule = new jscsspKeyframesRule();
    keyframesRule.currentLine = currentLine;
    this.preserveState();
    var token = this.getToken(true, true);
    var foundName = false;
    while (token.isNotNull()) {
      if (token.isIdent()) {
        // should be the keyframes' name
        foundName = true;
        s += ' ' + token.value;
        keyframesRule.name = token.value;
        token = this.getToken(true, true);
        if (token.isSymbol('{'))
          this.ungetToken();
        else {
          // error...
          token.type = jscsspToken.NULL_TYPE;
          break;
        }
      } else if (token.isSymbol('{')) {
        if (!foundName) {
          token.type = jscsspToken.NULL_TYPE;  // not a valid keyframes at-rule
        }
        break;
      } else {
        token.type = jscsspToken.NULL_TYPE;
        // not a valid keyframes at-rule
        break;
      }
      token = this.getToken(true, true);
    }
    if (token.isSymbol('{') && keyframesRule.name) {
      // ok let's parse keyframe rules now...
      s += ' { ';
      token = this.getToken(true, false);
      while (token.isNotNull()) {
        if (token.isComment() && this.mPreserveComments) {
          s += ' ' + token.value;
          var comment = new jscsspComment();
          comment.parsedCssText = token.value;
          keyframesRule.cssRules.push(comment);
        } else if (token.isSymbol('}')) {
          valid = true;
          break;
        } else {
          var r = this.parseKeyframeRule(token, keyframesRule, true);
          if (r)
            s += r;
        }
        token = this.getToken(true, false);
      }
    }
    if (valid) {
      this.forgetState();
      keyframesRule.currentLine = currentLine;
      keyframesRule.parsedCssText = s;
      aSheet.cssRules.push(keyframesRule);
      return true;
    }
    this.restoreState();
    return false;
  },
  parseKeyframeRule: function (aToken, aOwner) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    this.preserveState();
    var token = aToken;
    // find the keyframe keys
    var key = '';
    while (token.isNotNull()) {
      if (token.isIdent() || token.isPercentage()) {
        if (token.isIdent() && !token.isIdent('from') && !token.isIdent('to')) {
          key = '';
          break;
        }
        key += token.value;
        token = this.getToken(true, true);
        if (token.isSymbol('{')) {
          this.ungetToken();
          break;
        } else if (token.isSymbol(',')) {
          key += ', ';
        } else {
          key = '';
          break;
        }
      } else {
        key = '';
        break;
      }
      token = this.getToken(true, true);
    }
    var valid = false;
    var declarations = [];
    if (key) {
      var s = key;
      token = this.getToken(true, true);
      if (token.isSymbol('{')) {
        s += ' { ';
        token = this.getToken(true, false);
        while (true) {
          if (!token.isNotNull()) {
            valid = true;
            break;
          }
          if (token.isSymbol('}')) {
            s += '}';
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, declarations, true, true, aOwner);
            s += (d && declarations.length ? ' ' : '') + d;
          }
          token = this.getToken(true, false);
        }
      }
    } else {
    }
    if (valid) {
      var rule = new jscsspKeyframeRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.declarations = declarations;
      rule.keyText = key;
      rule.parentRule = aOwner;
      aOwner.cssRules.push(rule);
      return s;
    }
    this.restoreState();
    s = this.currentToken().value;
    this.addUnknownAtRule(aOwner, s);
    return '';
  },
  parseMediaRule: function (aToken, aSheet) {
    this.mScanner.mMediaQueryMode = true;
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var mediaRule = new jscsspMediaRule();
    mediaRule.currentLine = currentLine;
    this.preserveState();
    var token = this.getToken(true, true);
    var foundMedia = false;
    while (token.isNotNull()) {
      if (token.isIdent()) {
        foundMedia = true;
        s += ' ' + token.value;
        mediaRule.media.push(token.value);
        token = this.getToken(true, true);
        if (token.isSymbol(',')) {
          s += ',';
        } else {
          if (token.isSymbol('{'))
            this.ungetToken();
          else {
            // error...
            token.type = jscsspToken.NULL_TYPE;
            break;
          }
        }
      } else if (token.isSymbol('{'))
        break;
      else if (foundMedia) {
        token.type = jscsspToken.NULL_TYPE;
        // not a media list
        break;
      }
      token = this.getToken(true, true);
    }
    if (token.isSymbol('{') && mediaRule.media.length) {
      // ok let's parse style rules now...
      s += ' { ';
      token = this.getToken(true, false);
      while (token.isNotNull()) {
        if (token.isComment() && this.mPreserveComments) {
          s += ' ' + token.value;
          var comment = new jscsspComment();
          comment.parsedCssText = token.value;
          mediaRule.cssRules.push(comment);
        } else if (token.isSymbol('}')) {
          valid = true;
          break;
        } else {
          var r = this.parseStyleRule(token, mediaRule, true);
          if (r)
            s += r;
        }
        token = this.getToken(true, false);
      }
    }
    if (valid) {
      this.forgetState();
      mediaRule.parsedCssText = s;
      aSheet.cssRules.push(mediaRule);
      return true;
    }
    this.restoreState();
    return false;
  },
  trim11: function (str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        // XXX charat
        str = str.substring(0, i + 1);
        break;
      }
    }
    return str;
  },
  parseStyleRule: function (aToken, aOwner, aIsInsideMediaRule) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    this.preserveState();
    // first let's see if we have a selector here...
    var selector = this.parseSelector(aToken, false);
    var valid = false;
    var declarations = [];
    if (selector) {
      selector = this.trim11(selector.selector);
      var s = selector;
      var token = this.getToken(true, true);
      if (token.isSymbol('{')) {
        s += ' { ';
        var token = this.getToken(true, false);
        while (true) {
          if (!token.isNotNull()) {
            valid = true;
            break;
          }
          if (token.isSymbol('}')) {
            s += '}';
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, declarations, true, true, aOwner);
            s += (d && declarations.length ? ' ' : '') + d;
          }
          token = this.getToken(true, false);
        }
      }
    } else {
    }
    if (valid) {
      var rule = new jscsspStyleRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.declarations = declarations;
      rule.mSelectorText = selector;
      if (aIsInsideMediaRule)
        rule.parentRule = aOwner;
      else
        rule.parentStyleSheet = aOwner;
      aOwner.cssRules.push(rule);
      return s;
    }
    this.restoreState();
    s = this.currentToken().value;
    this.addUnknownAtRule(aOwner, s);
    return '';
  },
  parseSelector: function (aToken, aParseSelectorOnly) {
    var s = '';
    var specificity = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
      };
    // CSS 2.1 section 6.4.3
    var isFirstInChain = true;
    var token = aToken;
    var valid = false;
    var combinatorFound = false;
    while (true) {
      if (!token.isNotNull()) {
        if (aParseSelectorOnly)
          return {
            selector: s,
            specificity: specificity
          };
        return '';
      }
      if (!aParseSelectorOnly && token.isSymbol('{')) {
        // end of selector
        valid = !combinatorFound;
        if (valid)
          this.ungetToken();
        break;
      }
      if (token.isSymbol(',')) {
        // group of selectors
        s += token.value;
        isFirstInChain = true;
        combinatorFound = false;
        token = this.getToken(false, true);
        continue;
      }  // now combinators and grouping...
      else if (!combinatorFound && (token.isWhiteSpace() || token.isSymbol('>') || token.isSymbol('+') || token.isSymbol('~'))) {
        if (token.isWhiteSpace()) {
          s += ' ';
          var nextToken = this.lookAhead(true, true);
          if (!nextToken.isNotNull()) {
            if (aParseSelectorOnly)
              return {
                selector: s,
                specificity: specificity
              };
            return '';
          }
          if (nextToken.isSymbol('>') || nextToken.isSymbol('+') || nextToken.isSymbol('~')) {
            token = this.getToken(true, true);
            s += token.value + ' ';
            combinatorFound = true;
          }
        } else {
          s += token.value;
          combinatorFound = true;
        }
        isFirstInChain = true;
        token = this.getToken(true, true);
        continue;
      } else {
        var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, true);
        if (!simpleSelector)
          break;
        // error
        s += simpleSelector.selector;
        specificity.b += simpleSelector.specificity.b;
        specificity.c += simpleSelector.specificity.c;
        specificity.d += simpleSelector.specificity.d;
        isFirstInChain = false;
        combinatorFound = false;
      }
      token = this.getToken(false, true);
    }
    if (valid) {
      return {
        selector: s,
        specificity: specificity
      };
    }
    return '';
  },
  isPseudoElement: function (aIdent) {
    switch (aIdent) {
    case 'first-letter':
    case 'first-line':
    case 'before':
    case 'after':
    case 'marker':
      return true;
      break;
    default:
      return false;
      break;
    }
  },
  parseSimpleSelector: function (token, isFirstInChain, canNegate) {
    var s = '';
    var specificity = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
      };
    // CSS 2.1 section 6.4.3
    if (isFirstInChain && (token.isSymbol('*') || token.isSymbol('|') || token.isIdent())) {
      // type or universal selector
      if (token.isSymbol('*') || token.isIdent()) {
        // we don't know yet if it's a prefix or a universal
        // selector
        s += token.value;
        var isIdent = token.isIdent();
        token = this.getToken(false, true);
        if (token.isSymbol('|')) {
          // it's a prefix
          s += token.value;
          token = this.getToken(false, true);
          if (token.isIdent() || token.isSymbol('*')) {
            // ok we now have a type element or universal
            // selector
            s += token.value;
            if (token.isIdent())
              specificity.d++;
          } else
            // oops that's an error...
            return null;
        } else {
          this.ungetToken();
          if (isIdent)
            specificity.d++;
        }
      } else if (token.isSymbol('|')) {
        s += token.value;
        token = this.getToken(false, true);
        if (token.isIdent() || token.isSymbol('*')) {
          s += token.value;
          if (token.isIdent())
            specificity.d++;
        } else
          // oops that's an error
          return null;
      }
    } else if (token.isSymbol('.') || token.isSymbol('#')) {
      var isClass = token.isSymbol('.');
      s += token.value;
      token = this.getToken(false, true);
      if (token.isIdent()) {
        s += token.value;
        if (isClass)
          specificity.c++;
        else
          specificity.b++;
      } else
        return null;
    } else if (token.isSymbol(':')) {
      s += token.value;
      token = this.getToken(false, true);
      if (token.isSymbol(':')) {
        s += token.value;
        token = this.getToken(false, true);
      }
      if (token.isIdent()) {
        s += token.value;
        if (this.isPseudoElement(token.value))
          specificity.d++;
        else
          specificity.c++;
      } else if (token.isFunction()) {
        s += token.value;
        if (token.isFunction(':not(')) {
          if (!canNegate)
            return null;
          token = this.getToken(true, true);
          var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, false);
          if (!simpleSelector)
            return null;
          else {
            s += simpleSelector.selector;
            token = this.getToken(true, true);
            if (token.isSymbol(')'))
              s += ')';
            else
              return null;
          }
          specificity.c++;
        } else {
          while (true) {
            token = this.getToken(false, true);
            if (token.isSymbol(')')) {
              s += ')';
              break;
            } else
              s += token.value;
          }
          specificity.c++;
        }
      } else
        return null;
    } else if (token.isSymbol('[')) {
      s += '[';
      token = this.getToken(true, true);
      if (token.isIdent() || token.isSymbol('*')) {
        s += token.value;
        var nextToken = this.getToken(true, true);
        if (token.isSymbol('|')) {
          s += '|';
          token = this.getToken(true, true);
          if (token.isIdent())
            s += token.value;
          else
            return null;
        } else
          this.ungetToken();
      } else if (token.isSymbol('|')) {
        s += '|';
        token = this.getToken(true, true);
        if (token.isIdent())
          s += token.value;
        else
          return null;
      } else
        return null;
      // nothing, =, *=, $=, ^=, |=
      token = this.getToken(true, true);
      if (token.isIncludes() || token.isDashmatch() || token.isBeginsmatch() || token.isEndsmatch() || token.isContainsmatch() || token.isSymbol('=')) {
        s += token.value;
        token = this.getToken(true, true);
        if (token.isString() || token.isIdent()) {
          s += token.value;
          token = this.getToken(true, true);
        } else
          return null;
        if (token.isSymbol(']')) {
          s += token.value;
          specificity.c++;
        } else
          return null;
      } else if (token.isSymbol(']')) {
        s += token.value;
        specificity.c++;
      } else
        return null;
    } else if (token.isWhiteSpace()) {
      var t = this.lookAhead(true, true);
      if (t.isSymbol('{'))
        return '';
    }
    if (s)
      return {
        selector: s,
        specificity: specificity
      };
    return null;
  },
  preserveState: function () {
    this.mPreservedTokens.push(this.currentToken());
    this.mScanner.preserveState();
  },
  restoreState: function () {
    if (this.mPreservedTokens.length) {
      this.mScanner.restoreState();
      this.mToken = this.mPreservedTokens.pop();
    }
  },
  forgetState: function () {
    if (this.mPreservedTokens.length) {
      this.mScanner.forgetState();
      this.mPreservedTokens.pop();
    }
  },
  parse: function (aString, aTryToPreserveWhitespaces, aTryToPreserveComments) {
    if (!aString)
      return null;
    // early way out if we can
    this.mPreserveWS = aTryToPreserveWhitespaces;
    this.mPreserveComments = aTryToPreserveComments;
    this.mPreservedTokens = [];
    this.mScanner.init(aString);
    var sheet = new jscsspStylesheet();
    // @charset can only appear at first char of the stylesheet
    var token = this.getToken(false, false);
    if (!token.isNotNull())
      return;
    if (token.isAtRule('@charset')) {
      this.parseCharsetRule(token, sheet);
      token = this.getToken(false, false);
    }
    var foundStyleRules = false;
    var foundImportRules = false;
    var foundNameSpaceRules = false;
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isWhiteSpace()) {
        if (aTryToPreserveWhitespaces)
          this.addWhitespace(sheet, token.value);
      } else if (token.isComment()) {
        if (this.mPreserveComments)
          this.addComment(sheet, token.value);
      } else if (token.isAtRule()) {
        if (token.isAtRule('@variables')) {
          if (!foundImportRules && !foundStyleRules)
            this.parseVariablesRule(token, sheet);
          else {
            this.reportError(kVARIABLES_RULE_POSITION);
            this.addUnknownAtRule(sheet, token.value);
          }
        } else if (token.isAtRule('@import')) {
          // @import rules MUST occur before all style and namespace
          // rules
          if (!foundStyleRules && !foundNameSpaceRules)
            foundImportRules = this.parseImportRule(token, sheet);
          else {
            this.reportError(kIMPORT_RULE_POSITION);
            this.addUnknownAtRule(sheet, token.value);
          }
        } else if (token.isAtRule('@namespace')) {
          // @namespace rules MUST occur before all style rule and
          // after all @import rules
          if (!foundStyleRules)
            foundNameSpaceRules = this.parseNamespaceRule(token, sheet);
          else {
            this.reportError(kNAMESPACE_RULE_POSITION);
            this.addUnknownAtRule(sheet, token.value);
          }
        } else if (token.isAtRule('@font-face')) {
          if (this.parseFontFaceRule(token, sheet))
            foundStyleRules = true;
          else
            this.addUnknownAtRule(sheet, token.value);
        } else if (token.isAtRule('@page')) {
          if (this.parsePageRule(token, sheet))
            foundStyleRules = true;
          else
            this.addUnknownAtRule(sheet, token.value);
        } else if (token.isAtRule('@media')) {
          if (this.parseMediaRule(token, sheet))
            foundStyleRules = true;
          else
            this.addUnknownAtRule(sheet, token.value);
        } else if (token.isAtRule('@keyframes')) {
          if (!this.parseKeyframesRule(token, sheet))
            this.addUnknownAtRule(sheet, token.value);
        } else if (token.isAtRule('@charset')) {
          this.reportError(kCHARSET_RULE_CHARSET_SOF);
          this.addUnknownAtRule(sheet, token.value);
        } else {
          this.reportError(kUNKNOWN_AT_RULE);
          this.addUnknownAtRule(sheet, token.value);
        }
      } else
        // plain style rules
        {
          var ruleText = this.parseStyleRule(token, sheet, false);
          if (ruleText)
            foundStyleRules = true;
        }
      token = this.getToken(false);
    }
    return sheet;
  }
};
function jscsspToken(aType, aValue, aUnit) {
  this.type = aType;
  this.value = aValue;
  this.unit = aUnit;
}
jscsspToken.NULL_TYPE = 0;
jscsspToken.WHITESPACE_TYPE = 1;
jscsspToken.STRING_TYPE = 2;
jscsspToken.COMMENT_TYPE = 3;
jscsspToken.NUMBER_TYPE = 4;
jscsspToken.IDENT_TYPE = 5;
jscsspToken.FUNCTION_TYPE = 6;
jscsspToken.ATRULE_TYPE = 7;
jscsspToken.INCLUDES_TYPE = 8;
jscsspToken.DASHMATCH_TYPE = 9;
jscsspToken.BEGINSMATCH_TYPE = 10;
jscsspToken.ENDSMATCH_TYPE = 11;
jscsspToken.CONTAINSMATCH_TYPE = 12;
jscsspToken.SYMBOL_TYPE = 13;
jscsspToken.DIMENSION_TYPE = 14;
jscsspToken.PERCENTAGE_TYPE = 15;
jscsspToken.HEX_TYPE = 16;
jscsspToken.prototype = {
  isNotNull: function () {
    return this.type;
  },
  _isOfType: function (aType, aValue) {
    return this.type == aType && (!aValue || this.value.toLowerCase() == aValue);
  },
  isWhiteSpace: function (w) {
    return this._isOfType(jscsspToken.WHITESPACE_TYPE, w);
  },
  isString: function () {
    return this._isOfType(jscsspToken.STRING_TYPE);
  },
  isComment: function () {
    return this._isOfType(jscsspToken.COMMENT_TYPE);
  },
  isNumber: function (n) {
    return this._isOfType(jscsspToken.NUMBER_TYPE, n);
  },
  isSymbol: function (c) {
    return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
  },
  isIdent: function (i) {
    return this._isOfType(jscsspToken.IDENT_TYPE, i);
  },
  isFunction: function (f) {
    return this._isOfType(jscsspToken.FUNCTION_TYPE, f);
  },
  isAtRule: function (a) {
    return this._isOfType(jscsspToken.ATRULE_TYPE, a);
  },
  isIncludes: function () {
    return this._isOfType(jscsspToken.INCLUDES_TYPE);
  },
  isDashmatch: function () {
    return this._isOfType(jscsspToken.DASHMATCH_TYPE);
  },
  isBeginsmatch: function () {
    return this._isOfType(jscsspToken.BEGINSMATCH_TYPE);
  },
  isEndsmatch: function () {
    return this._isOfType(jscsspToken.ENDSMATCH_TYPE);
  },
  isContainsmatch: function () {
    return this._isOfType(jscsspToken.CONTAINSMATCH_TYPE);
  },
  isSymbol: function (c) {
    return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
  },
  isDimension: function () {
    return this._isOfType(jscsspToken.DIMENSION_TYPE);
  },
  isPercentage: function () {
    return this._isOfType(jscsspToken.PERCENTAGE_TYPE);
  },
  isHex: function () {
    return this._isOfType(jscsspToken.HEX_TYPE);
  },
  isDimensionOfUnit: function (aUnit) {
    return this.isDimension() && this.unit == aUnit;
  },
  isLength: function () {
    return this.isPercentage() || this.isDimensionOfUnit('cm') || this.isDimensionOfUnit('mm') || this.isDimensionOfUnit('in') || this.isDimensionOfUnit('pc') || this.isDimensionOfUnit('px') || this.isDimensionOfUnit('em') || this.isDimensionOfUnit('ex') || this.isDimensionOfUnit('pt');
  },
  isAngle: function () {
    return this.isDimensionOfUnit('deg') || this.isDimensionOfUnit('rad') || this.isDimensionOfUnit('grad');
  }
};
var kJscsspUNKNOWN_RULE = 0;
var kJscsspSTYLE_RULE = 1;
var kJscsspCHARSET_RULE = 2;
var kJscsspIMPORT_RULE = 3;
var kJscsspMEDIA_RULE = 4;
var kJscsspFONT_FACE_RULE = 5;
var kJscsspPAGE_RULE = 6;
var kJscsspKEYFRAMES_RULE = 7;
var kJscsspKEYFRAME_RULE = 8;
var kJscsspNAMESPACE_RULE = 100;
var kJscsspCOMMENT = 101;
var kJscsspWHITE_SPACE = 102;
var kJscsspVARIABLES_RULE = 200;
var kJscsspSTYLE_DECLARATION = 1000;
var gTABS = '';
function jscsspStylesheet() {
  this.cssRules = [];
  this.variables = {};
}
jscsspStylesheet.prototype = {
  insertRule: function (aRule, aIndex) {
    try {
      this.cssRules.splice(aIndex, 1, aRule);
    } catch (e) {
    }
  },
  deleteRule: function (aIndex) {
    try {
      this.cssRules.splice(aIndex);
    } catch (e) {
    }
  },
  cssText: function () {
    var rv = '';
    for (var i = 0; i < this.cssRules.length; i++)
      rv += this.cssRules[i].cssText() + '\n';
    return rv;
  },
  resolveVariables: function (aMedium) {
    function ItemFoundInArray(aArray, aItem) {
      for (var i = 0; i < aArray.length; i++)
        if (aItem == aArray[i])
          return true;
      return false;
    }
    for (var i = 0; i < this.cssRules.length; i++) {
      var rule = this.cssRules[i];
      if (rule.type == kJscsspSTYLE_RULE || rule.type == kJscsspIMPORT_RULE)
        break;
      else if (rule.type == kJscsspVARIABLES_RULE && (!rule.media.length || ItemFoundInArray(rule.media, aMedium))) {
        for (var j = 0; j < rule.declarations.length; j++) {
          var valueText = '';
          for (var k = 0; k < rule.declarations[j].values.length; k++)
            valueText += (k ? ' ' : '') + rule.declarations[j].values[k].value;
          this.variables[rule.declarations[j].property] = valueText;
        }
      }
    }
  }
};
/* kJscsspCHARSET_RULE */
function jscsspCharsetRule() {
  this.type = kJscsspCHARSET_RULE;
  this.encoding = null;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspCharsetRule.prototype = {
  cssText: function () {
    return '@charset ' + this.encoding + ';';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(false, false);
    if (token.isAtRule('@charset')) {
      if (parser.parseCharsetRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.encoding = newRule.encoding;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspUNKNOWN_RULE */
function jscsspErrorRule(aErrorMsg) {
  this.error = aErrorMsg ? aErrorMsg : 'INVALID';
  this.type = kJscsspUNKNOWN_RULE;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspErrorRule.prototype = {
  cssText: function () {
    return this.parsedCssText;
  }
};
/* kJscsspCOMMENT */
function jscsspComment() {
  this.type = kJscsspCOMMENT;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspComment.prototype = {
  cssText: function () {
    return this.parsedCssText;
  },
  setCssText: function (val) {
    var parser = new CSSParser(val);
    var token = parser.getToken(true, false);
    if (token.isComment())
      this.parsedCssText = token.value;
    else
      throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspWHITE_SPACE */
function jscsspWhitespace() {
  this.type = kJscsspWHITE_SPACE;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspWhitespace.prototype = {
  cssText: function () {
    return this.parsedCssText;
  }
};
/* kJscsspIMPORT_RULE */
function jscsspImportRule() {
  this.type = kJscsspIMPORT_RULE;
  this.parsedCssText = null;
  this.href = null;
  this.media = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspImportRule.prototype = {
  cssText: function () {
    var mediaString = this.media.join(', ');
    return '@import ' + this.href + (mediaString && mediaString != 'all' ? mediaString + ' ' : '') + ';';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule('@import')) {
      if (parser.parseImportRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.href = newRule.href;
        this.media = newRule.media;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspNAMESPACE_RULE */
function jscsspNamespaceRule() {
  this.type = kJscsspNAMESPACE_RULE;
  this.parsedCssText = null;
  this.prefix = null;
  this.url = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspNamespaceRule.prototype = {
  cssText: function () {
    return '@namespace ' + (this.prefix ? this.prefix + ' ' : '') + this.url + ';';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule('@namespace')) {
      if (parser.parseNamespaceRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.url = newRule.url;
        this.prefix = newRule.prefix;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspSTYLE_DECLARATION */
function jscsspDeclaration() {
  this.type = kJscsspSTYLE_DECLARATION;
  this.property = null;
  this.values = [];
  this.valueText = null;
  this.priority = null;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspDeclaration.prototype = {
  kCOMMA_SEPARATED: {
    'cursor': true,
    'font-family': true,
    'voice-family': true,
    'background-image': true
  },
  kUNMODIFIED_COMMA_SEPARATED_PROPERTIES: {
    'text-shadow': true,
    'box-shadow': true,
    '-moz-transition': true,
    '-moz-transition-property': true,
    '-moz-transition-duration': true,
    '-moz-transition-timing-function': true,
    '-moz-transition-delay': true
  },
  cssText: function () {
    var prefixes = CssInspector.prefixesForProperty(this.property);
    if (this.property in this.kUNMODIFIED_COMMA_SEPARATED_PROPERTIES) {
      if (prefixes) {
        var rv = '';
        for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
          var property = prefixes[propertyIndex];
          rv += (propertyIndex ? gTABS : '') + property + ': ';
          rv += this.valueText + (this.priority ? ' !important' : '') + ';';
          rv += prefixes.length > 1 && propertyIndex != prefixes.length - 1 ? '\n' : '';
        }
        return rv;
      }
      return this.property + ': ' + this.valueText + (this.priority ? ' !important' : '') + ';';
    }
    if (prefixes) {
      var rv = '';
      for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
        var property = prefixes[propertyIndex];
        rv += (propertyIndex ? gTABS : '') + property + ': ';
        var separator = property in this.kCOMMA_SEPARATED ? ', ' : ' ';
        for (var i = 0; i < this.values.length; i++)
          if (this.values[i].cssText() != null)
            rv += (i ? separator : '') + this.values[i].cssText();
          else
            return null;
        rv += (this.priority ? ' !important' : '') + ';' + (prefixes.length > 1 && propertyIndex != prefixes.length - 1 ? '\n' : '');
      }
      return rv;
    }
    var rv = this.property + ': ';
    var separator = this.property in this.kCOMMA_SEPARATED ? ', ' : ' ';
    var extras = {
        'webkit': false,
        'presto': false,
        'trident': false,
        'generic': false
      };
    for (var i = 0; i < this.values.length; i++) {
      var v = this.values[i].cssText();
      if (v != null) {
        var paren = v.indexOf('(');
        var kwd = v;
        if (paren != -1)
          kwd = v.substr(0, paren);
        if (kwd in kCSS_VENDOR_VALUES) {
          for (var j in kCSS_VENDOR_VALUES[kwd]) {
            extras[j] = extras[j] || kCSS_VENDOR_VALUES[kwd][j] != '';
          }
        }
        rv += (i ? separator : '') + v;
      } else
        return null;
    }
    rv += (this.priority ? ' !important' : '') + ';';
    for (var j in extras) {
      if (extras[j]) {
        var str = '\n' + gTABS + this.property + ': ';
        for (var i = 0; i < this.values.length; i++) {
          var v = this.values[i].cssText();
          if (v != null) {
            var paren = v.indexOf('(');
            var kwd = v;
            if (paren != -1)
              kwd = v.substr(0, paren);
            if (kwd in kCSS_VENDOR_VALUES) {
              functor = kCSS_VENDOR_VALUES[kwd][j];
              if (functor) {
                v = typeof functor == 'string' ? functor : functor(v, j);
                if (!v) {
                  str = null;
                  break;
                }
              }
            }
            str += (i ? separator : '') + v;
          } else
            return null;
        }
        if (str)
          rv += str + ';';
        else
          rv += '\n' + gTABS + '/* Impossible to translate property ' + this.property + ' for ' + j + ' */';
      }
    }
    return rv;
  },
  setCssText: function (val) {
    var declarations = [];
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (parser.parseDeclaration(token, declarations, true, true, null) && declarations.length && declarations[0].type == kJscsspSTYLE_DECLARATION) {
      var newDecl = declarations.cssRules[0];
      this.property = newDecl.property;
      this.value = newDecl.value;
      this.priority = newDecl.priority;
      this.parsedCssText = newRule.parsedCssText;
      return;
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspFONT_FACE_RULE */
function jscsspFontFaceRule() {
  this.type = kJscsspFONT_FACE_RULE;
  this.parsedCssText = null;
  this.descriptors = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspFontFaceRule.prototype = {
  cssText: function () {
    var rv = gTABS + '@font-face {\n';
    var preservedGTABS = gTABS;
    gTABS += '  ';
    for (var i = 0; i < this.descriptors.length; i++)
      rv += gTABS + this.descriptors[i].cssText() + '\n';
    gTABS = preservedGTABS;
    return rv + gTABS + '}';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule('@font-face')) {
      if (parser.parseFontFaceRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.descriptors = newRule.descriptors;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspKEYFRAMES_RULE */
function jscsspKeyframesRule() {
  this.type = kJscsspKEYFRAMES_RULE;
  this.parsedCssText = null;
  this.cssRules = [];
  this.name = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspKeyframesRule.prototype = {
  cssText: function () {
    var rv = gTABS + '@keyframes ' + this.name + ' {\n';
    var preservedGTABS = gTABS;
    gTABS += '  ';
    for (var i = 0; i < this.cssRules.length; i++)
      rv += gTABS + this.cssRules[i].cssText() + '\n';
    gTABS = preservedGTABS;
    rv += gTABS + '}\n';
    return rv;
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule('@keyframes')) {
      if (parser.parseKeyframesRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.cssRules = newRule.cssRules;
        this.name = newRule.name;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspKEYFRAME_RULE */
function jscsspKeyframeRule() {
  this.type = kJscsspKEYFRAME_RULE;
  this.parsedCssText = null;
  this.declarations = [];
  this.keyText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspKeyframeRule.prototype = {
  cssText: function () {
    var rv = this.keyText + ' {\n';
    var preservedGTABS = gTABS;
    gTABS += '  ';
    for (var i = 0; i < this.declarations.length; i++) {
      var declText = this.declarations[i].cssText();
      if (declText)
        rv += gTABS + this.declarations[i].cssText() + '\n';
    }
    gTABS = preservedGTABS;
    return rv + gTABS + '}';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (!token.isNotNull()) {
      if (parser.parseKeyframeRule(token, sheet, false)) {
        var newRule = sheet.cssRules[0];
        this.keyText = newRule.keyText;
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspMEDIA_RULE */
function jscsspMediaRule() {
  this.type = kJscsspMEDIA_RULE;
  this.parsedCssText = null;
  this.cssRules = [];
  this.media = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspMediaRule.prototype = {
  cssText: function () {
    var rv = gTABS + '@media ' + this.media.join(', ') + ' {\n';
    var preservedGTABS = gTABS;
    gTABS += '  ';
    for (var i = 0; i < this.cssRules.length; i++)
      rv += gTABS + this.cssRules[i].cssText() + '\n';
    gTABS = preservedGTABS;
    return rv + gTABS + '}';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule('@media')) {
      if (parser.parseMediaRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.cssRules = newRule.cssRules;
        this.media = newRule.media;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspSTYLE_RULE */
function jscsspStyleRule() {
  this.type = kJscsspSTYLE_RULE;
  this.parsedCssText = null;
  this.declarations = [];
  this.mSelectorText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspStyleRule.prototype = {
  cssText: function () {
    var rv = this.mSelectorText + ' {\n';
    var preservedGTABS = gTABS;
    gTABS += '  ';
    for (var i = 0; i < this.declarations.length; i++) {
      var declText = this.declarations[i].cssText();
      if (declText)
        rv += gTABS + this.declarations[i].cssText() + '\n';
    }
    gTABS = preservedGTABS;
    return rv + gTABS + '}';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (!token.isNotNull()) {
      if (parser.parseStyleRule(token, sheet, false)) {
        var newRule = sheet.cssRules[0];
        this.mSelectorText = newRule.mSelectorText;
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  },
  selectorText: function () {
    return this.mSelectorText;
  },
  setSelectorText: function (val) {
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (!token.isNotNull()) {
      var s = parser.parseSelector(token, true);
      if (s) {
        this.mSelectorText = s.selector;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspPAGE_RULE */
function jscsspPageRule() {
  this.type = kJscsspPAGE_RULE;
  this.parsedCssText = null;
  this.pageSelector = null;
  this.declarations = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
}
jscsspPageRule.prototype = {
  cssText: function () {
    var rv = gTABS + '@page ' + (this.pageSelector ? this.pageSelector + ' ' : '') + '{\n';
    var preservedGTABS = gTABS;
    gTABS += '  ';
    for (var i = 0; i < this.declarations.length; i++)
      rv += gTABS + this.declarations[i].cssText() + '\n';
    gTABS = preservedGTABS;
    return rv + gTABS + '}';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule('@page')) {
      if (parser.parsePageRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.pageSelector = newRule.pageSelector;
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
/* kJscsspVARIABLES_RULE */
function jscsspVariablesRule() {
  this.type = kJscsspVARIABLES_RULE;
  this.parsedCssText = null;
  this.declarations = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
  this.media = null;
}
jscsspVariablesRule.prototype = {
  cssText: function () {
    var rv = gTABS + '@variables ' + (this.media.length ? this.media.join(', ') + ' ' : '') + '{\n';
    var preservedGTABS = gTABS;
    gTABS += '  ';
    for (var i = 0; i < this.declarations.length; i++)
      rv += gTABS + this.declarations[i].cssText() + '\n';
    gTABS = preservedGTABS;
    return rv + gTABS + '}';
  },
  setCssText: function (val) {
    var sheet = { cssRules: [] };
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule('@variables')) {
      if (parser.parseVariablesRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};
var kJscsspINHERIT_VALUE = 0;
var kJscsspPRIMITIVE_VALUE = 1;
var kJscsspVARIABLE_VALUE = 4;
function jscsspVariable(aType, aSheet) {
  this.value = '';
  this.type = aType;
  this.name = null;
  this.parentRule = null;
  this.parentStyleSheet = aSheet;
}
jscsspVariable.prototype = {
  cssText: function () {
    if (this.type == kJscsspVARIABLE_VALUE)
      return this.resolveVariable(this.name, this.parentRule, this.parentStyleSheet);
    else
      return this.value;
  },
  setCssText: function (val) {
    if (this.type == kJscsspVARIABLE_VALUE)
      throw DOMException.SYNTAX_ERR;
    else
      this.value = val;
  },
  resolveVariable: function (aName, aRule, aSheet) {
    if (aName.toLowerCase() in aSheet.variables)
      return aSheet.variables[aName.toLowerCase()];
    return null;
  }
};
function ParseURL(buffer) {
  var result = {};
  result.protocol = '';
  result.user = '';
  result.password = '';
  result.host = '';
  result.port = '';
  result.path = '';
  result.query = '';
  var section = 'PROTOCOL';
  var start = 0;
  var wasSlash = false;
  while (start < buffer.length) {
    if (section == 'PROTOCOL') {
      if (buffer.charAt(start) == ':') {
        section = 'AFTER_PROTOCOL';
        start++;
      } else if (buffer.charAt(start) == '/' && result.protocol.length() == 0) {
        section = PATH;
      } else {
        result.protocol += buffer.charAt(start++);
      }
    } else if (section == 'AFTER_PROTOCOL') {
      if (buffer.charAt(start) == '/') {
        if (!wasSlash) {
          wasSlash = true;
        } else {
          wasSlash = false;
          section = 'USER';
        }
        start++;
      } else {
        throw new ParseException('Protocol shell be separated with 2 slashes');
      }
    } else if (section == 'USER') {
      if (buffer.charAt(start) == '/') {
        result.host = result.user;
        result.user = '';
        section = 'PATH';
      } else if (buffer.charAt(start) == '?') {
        result.host = result.user;
        result.user = '';
        section = 'QUERY';
        start++;
      } else if (buffer.charAt(start) == ':') {
        section = 'PASSWORD';
        start++;
      } else if (buffer.charAt(start) == '@') {
        section = 'HOST';
        start++;
      } else {
        result.user += buffer.charAt(start++);
      }
    } else if (section == 'PASSWORD') {
      if (buffer.charAt(start) == '/') {
        result.host = result.user;
        result.port = result.password;
        result.user = '';
        result.password = '';
        section = 'PATH';
      } else if (buffer.charAt(start) == '?') {
        result.host = result.user;
        result.port = result.password;
        result.user = '';
        result.password = '';
        section = 'QUERY';
        start++;
      } else if (buffer.charAt(start) == '@') {
        section = 'HOST';
        start++;
      } else {
        result.password += buffer.charAt(start++);
      }
    } else if (section == 'HOST') {
      if (buffer.charAt(start) == '/') {
        section = 'PATH';
      } else if (buffer.charAt(start) == ':') {
        section = 'PORT';
        start++;
      } else if (buffer.charAt(start) == '?') {
        section = 'QUERY';
        start++;
      } else {
        result.host += buffer.charAt(start++);
      }
    } else if (section == 'PORT') {
      if (buffer.charAt(start) == '/') {
        section = 'PATH';
      } else if (buffer.charAt(start) == '?') {
        section = 'QUERY';
        start++;
      } else {
        result.port += buffer.charAt(start++);
      }
    } else if (section == 'PATH') {
      if (buffer.charAt(start) == '?') {
        section = 'QUERY';
        start++;
      } else {
        result.path += buffer.charAt(start++);
      }
    } else if (section == 'QUERY') {
      result.query += buffer.charAt(start++);
    }
  }
  if (section == 'PROTOCOL') {
    result.host = result.protocol;
    result.protocol = 'http';
  } else if (section == 'AFTER_PROTOCOL') {
    throw new ParseException('Invalid url');
  } else if (section == 'USER') {
    result.host = result.user;
    result.user = '';
  } else if (section == 'PASSWORD') {
    result.host = result.user;
    result.port = result.password;
    result.user = '';
    result.password = '';
  }
  return result;
}
function ParseException(description) {
  this.description = description;
}
function CountLF(s) {
  var nCR = s.match(/\n/g);
  return nCR ? nCR.length + 1 : 1;
}
function FilterLinearGradientForOutput(aValue, aEngine) {
  if (aEngine == 'generic')
    return aValue.substr(5);
  if (aEngine == 'webkit')
    return aValue.replace(/\-moz\-/g, '-webkit-');
  if (aEngine != 'webkit20110101')
    return '';
  var g = CssInspector.parseBackgroundImages(aValue)[0];
  var cancelled = false;
  var str = '-webkit-gradient(linear, ';
  var position = 'position' in g.value ? g.value.position.toLowerCase() : '';
  var angle = 'angle' in g.value ? g.value.angle.toLowerCase() : '';
  // normalize angle
  if (angle) {
    var match = angle.match(/^([0-9\-\.\\+]+)([a-z]*)/);
    var angle = parseFloat(match[1]);
    var unit = match[2];
    switch (unit) {
    case 'grad':
      angle = angle * 90 / 100;
      break;
    case 'rad':
      angle = angle * 180 / Math.PI;
      break;
    default:
      break;
    }
    while (angle < 0)
      angle += 360;
    while (angle >= 360)
      angle -= 360;
  }
  // get startpoint w/o keywords
  var startpoint = [];
  var endpoint = [];
  if (position != '') {
    if (position == 'center')
      position = 'center center';
    startpoint = position.split(' ');
    if (angle == '' && angle != 0) {
      // no angle, then we just turn the point 180 degrees around center
      switch (startpoint[0]) {
      case 'left':
        endpoint.push('right');
        break;
      case 'center':
        endpoint.push('center');
        break;
      case 'right':
        endpoint.push('left');
        break;
      default: {
          var match = startpoint[0].match(/^([0-9\-\.\\+]+)([a-z]*)/);
          var v = parseFloat(match[0]);
          var unit = match[1];
          if (unit == '%') {
            endpoint.push(100 - v + '%');
          } else
            cancelled = true;
        }
        break;
      }
      if (!cancelled)
        switch (startpoint[1]) {
        case 'top':
          endpoint.push('bottom');
          break;
        case 'center':
          endpoint.push('center');
          break;
        case 'bottom':
          endpoint.push('top');
          break;
        default: {
            var match = startpoint[1].match(/^([0-9\-\.\\+]+)([a-z]*)/);
            var v = parseFloat(match[0]);
            var unit = match[1];
            if (unit == '%') {
              endpoint.push(100 - v + '%');
            } else
              cancelled = true;
          }
          break;
        }
    } else {
      switch (angle) {
      case 0:
        endpoint.push('right');
        endpoint.push(startpoint[1]);
        break;
      case 90:
        endpoint.push(startpoint[0]);
        endpoint.push('top');
        break;
      case 180:
        endpoint.push('left');
        endpoint.push(startpoint[1]);
        break;
      case 270:
        endpoint.push(startpoint[0]);
        endpoint.push('bottom');
        break;
      default:
        cancelled = true;
        break;
      }
    }
  } else {
    // no position defined, we accept only vertical and horizontal
    if (angle == '')
      angle = 270;
    switch (angle) {
    case 0:
      startpoint = [
        'left',
        'center'
      ];
      endpoint = [
        'right',
        'center'
      ];
      break;
    case 90:
      startpoint = [
        'center',
        'bottom'
      ];
      endpoint = [
        'center',
        'top'
      ];
      break;
    case 180:
      startpoint = [
        'right',
        'center'
      ];
      endpoint = [
        'left',
        'center'
      ];
      break;
    case 270:
      startpoint = [
        'center',
        'top'
      ];
      endpoint = [
        'center',
        'bottom'
      ];
      break;
    default:
      cancelled = true;
      break;
    }
  }
  if (cancelled)
    return '';
  str += startpoint.join(' ') + ', ' + endpoint.join(' ');
  if (!g.value.stops[0].position)
    g.value.stops[0].position = '0%';
  if (!g.value.stops[g.value.stops.length - 1].position)
    g.value.stops[g.value.stops.length - 1].position = '100%';
  var current = 0;
  for (var i = 0; i < g.value.stops.length && !cancelled; i++) {
    var s = g.value.stops[i];
    if (s.position) {
      if (s.position.indexOf('%') == -1) {
        cancelled = true;
        break;
      }
    } else {
      var j = i + 1;
      while (j < g.value.stops.length && !g.value.stops[j].position)
        j++;
      var inc = parseFloat(g.value.stops[j].position) - current;
      for (var k = i; k < j; k++) {
        g.value.stops[k].position = current + inc * (k - i + 1) / (j - i + 1) + '%';
      }
    }
    current = parseFloat(s.position);
    str += ', color-stop(' + parseFloat(current) / 100 + ', ' + s.color + ')';
  }
  if (cancelled)
    return '';
  return str + ')';
}
function FilterRadialGradientForOutput(aValue, aEngine) {
  if (aEngine == 'generic')
    return aValue.substr(5);
  else if (aEngine == 'webkit')
    return aValue.replace(/\-moz\-/g, '-webkit-');
  else if (aEngine != 'webkit20110101')
    return '';
  var g = CssInspector.parseBackgroundImages(aValue)[0];
  var shape = 'shape' in g.value ? g.value.shape : '';
  var size = 'size' in g.value ? g.value.size : '';
  if (shape != 'circle' || size != 'farthest-corner' && size != 'cover')
    return '';
  if (g.value.stops.length < 2 || !('position' in g.value.stops[0]) || !g.value.stops[g.value.stops.length - 1].position || !('position' in g.value.stops[0]) || !g.value.stops[g.value.stops.length - 1].position)
    return '';
  for (var i = 0; i < g.value.stops.length; i++) {
    var s = g.value.stops[i];
    if ('position' in s && s.position && s.position.indexOf('px') == -1)
      return '';
  }
  var str = '-webkit-gradient(radial, ';
  var position = 'position' in g.value ? g.value.position : 'center center';
  str += position + ', ' + parseFloat(g.value.stops[0].position) + ', ';
  str += position + ', ' + parseFloat(g.value.stops[g.value.stops.length - 1].position);
  // at this point we're sure to deal with pixels
  var current = parseFloat(g.value.stops[0].position);
  for (var i = 0; i < g.value.stops.length; i++) {
    var s = g.value.stops[i];
    if (!('position' in s) || !s.position) {
      var j = i + 1;
      while (j < g.value.stops.length && !g.value.stops[j].position)
        j++;
      var inc = parseFloat(g.value.stops[j].position) - current;
      for (var k = i; k < j; k++) {
        g.value.stops[k].position = current + inc * (k - i + 1) / (j - i + 1) + 'px';
      }
    }
    current = parseFloat(s.position);
    var c = (current - parseFloat(g.value.stops[0].position)) / (parseFloat(g.value.stops[g.value.stops.length - 1].position) - parseFloat(g.value.stops[0].position));
    str += ', color-stop(' + c + ', ' + s.color + ')';
  }
  str += ')';
  return str;
}
function FilterRepeatingGradientForOutput(aValue, aEngine) {
  if (aEngine == 'generic')
    return aValue.substr(5);
  else if (aEngine == 'webkit')
    return aValue.replace(/\-moz\-/g, '-webkit-');
  return '';
}
/**
 * jquery.bookblock.js v2.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function ($, window, undefined) {
  'use strict';
  // global
  var $window = $(window), Modernizr = window.Modernizr;
  // https://gist.github.com/edankwan/4389601
  Modernizr.addTest('csstransformspreserve3d', function () {
    var prop = Modernizr.prefixed('transformStyle');
    var val = 'preserve-3d';
    var computedStyle;
    if (!prop)
      return false;
    prop = prop.replace(/([A-Z])/g, function (str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
    Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
      computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
    });
    return computedStyle === val;
  });
  /*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize
	*
	* Copyright 2012 @louis_remi
	* Licensed under the MIT license.
	*
	* This saved you an hour of work? 
	* Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
	*/
  var $event = $.event, $special, resizeTimeout;
  $special = $event.special.debouncedresize = {
    setup: function () {
      $(this).on('resize', $special.handler);
    },
    teardown: function () {
      $(this).off('resize', $special.handler);
    },
    handler: function (event, execAsap) {
      // Save the context
      var context = this, args = arguments, dispatch = function () {
          // set correct event type
          event.type = 'debouncedresize';
          $event.dispatch.apply(context, args);
        };
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
    },
    threshold: 150
  };
  $.BookBlock = function (options, element) {
    this.$el = $(element);
    this._init(options);
  };
  // the options
  $.BookBlock.defaults = {
    orientation: 'vertical',
    direction: 'ltr',
    speed: 1000,
    easing: 'ease-in-out',
    shadows: true,
    shadowSides: 0.2,
    shadowFlip: 0.1,
    circular: false,
    nextEl: '',
    prevEl: '',
    autoplay: false,
    interval: 3000,
    onEndFlip: function (old, page, isLimit) {
      return false;
    },
    onBeforeFlip: function (page) {
      return false;
    }
  };
  $.BookBlock.prototype = {
    _init: function (options) {
      // options
      this.options = $.extend(true, {}, $.BookBlock.defaults, options);
      // orientation class
      this.$el.addClass('bb-' + this.options.orientation);
      // items
      this.$items = this.$el.children('.bb-item').hide();
      // total items
      this.itemsCount = this.$items.length;
      // current item´s index
      this.current = 0;
      // previous item´s index
      this.previous = -1;
      // show first item
      this.$current = this.$items.eq(this.current).show();
      // get width of this.$el
      // this will be necessary to create the flipping layout
      this.elWidth = this.$el.width();
      var transEndEventNames = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'msTransition': 'MSTransitionEnd',
          'transition': 'transitionend'
        };
      this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.bookblock';
      // support css 3d transforms && css transitions && Modernizr.csstransformspreserve3d
      this.support = Modernizr.csstransitions && Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d;
      // initialize/bind some events
      this._initEvents();
      // start slideshow
      if (this.options.autoplay) {
        this.options.circular = true;
        this._startSlideshow();
      }
    },
    _initEvents: function () {
      var self = this;
      if (this.options.nextEl !== '') {
        $(this.options.nextEl).on('click.bookblock touchstart.bookblock', function () {
          self._action('next');
          return false;
        });
      }
      if (this.options.prevEl !== '') {
        $(this.options.prevEl).on('click.bookblock touchstart.bookblock', function () {
          self._action('prev');
          return false;
        });
      }
      $window.on('debouncedresize', function () {
        // update width value
        self.elWidth = self.$el.width();
      });
    },
    _action: function (dir, page) {
      this._stopSlideshow();
      this._navigate(dir, page);
    },
    _navigate: function (dir, page) {
      if (this.isAnimating) {
        return false;
      }
      // callback trigger
      this.options.onBeforeFlip(this.current);
      this.isAnimating = true;
      // update current value
      this.$current = this.$items.eq(this.current);
      if (page !== undefined) {
        this.current = page;
      } else if (dir === 'next' && this.options.direction === 'ltr' || dir === 'prev' && this.options.direction === 'rtl') {
        if (!this.options.circular && this.current === this.itemsCount - 1) {
          this.end = true;
        } else {
          this.previous = this.current;
          this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;
        }
      } else if (dir === 'prev' && this.options.direction === 'ltr' || dir === 'next' && this.options.direction === 'rtl') {
        if (!this.options.circular && this.current === 0) {
          this.end = true;
        } else {
          this.previous = this.current;
          this.current = this.current > 0 ? this.current - 1 : this.itemsCount - 1;
        }
      }
      this.$nextItem = !this.options.circular && this.end ? this.$current : this.$items.eq(this.current);
      if (!this.support) {
        this._layoutNoSupport(dir);
      } else {
        this._layout(dir);
      }
    },
    _layoutNoSupport: function (dir) {
      this.$items.hide();
      this.$nextItem.show();
      this.end = false;
      this.isAnimating = false;
      var isLimit = dir === 'next' && this.current === this.itemsCount - 1 || dir === 'prev' && this.current === 0;
      // callback trigger
      this.options.onEndFlip(this.previous, this.current, isLimit);
    },
    _layout: function (dir) {
      var self = this,
        // basic structure: 1 element for the left side.
        $s_left = this._addSide('left', dir),
        // 1 element for the flipping/middle page
        $s_middle = this._addSide('middle', dir),
        // 1 element for the right side
        $s_right = this._addSide('right', dir),
        // overlays
        $o_left = $s_left.find('div.bb-overlay'), $o_middle_f = $s_middle.find('div.bb-flipoverlay:first'), $o_middle_b = $s_middle.find('div.bb-flipoverlay:last'), $o_right = $s_right.find('div.bb-overlay'), speed = this.end ? 400 : this.options.speed;
      this.$items.hide();
      this.$el.prepend($s_left, $s_middle, $s_right);
      $s_middle.css({
        transitionDuration: speed + 'ms',
        transitionTimingFunction: this.options.easing
      }).on(this.transEndEventName, function (event) {
        if ($(event.target).hasClass('bb-page')) {
          self.$el.children('.bb-page').remove();
          self.$nextItem.show();
          self.end = false;
          self.isAnimating = false;
          var isLimit = dir === 'next' && self.current === self.itemsCount - 1 || dir === 'prev' && self.current === 0;
          // callback trigger
          self.options.onEndFlip(self.previous, self.current, isLimit);
        }
      });
      if (dir === 'prev') {
        $s_middle.addClass('bb-flip-initial');
      }
      // overlays
      if (this.options.shadows && !this.end) {
        var o_left_style = dir === 'next' ? { transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms' } : {
            transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear',
            opacity: this.options.shadowSides
          }, o_middle_f_style = dir === 'next' ? { transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' } : {
            transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms',
            opacity: this.options.shadowFlip
          }, o_middle_b_style = dir === 'next' ? {
            transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms',
            opacity: this.options.shadowFlip
          } : { transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' }, o_right_style = dir === 'next' ? {
            transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear',
            opacity: this.options.shadowSides
          } : { transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms' };
        $o_middle_f.css(o_middle_f_style);
        $o_middle_b.css(o_middle_b_style);
        $o_left.css(o_left_style);
        $o_right.css(o_right_style);
      }
      setTimeout(function () {
        // first && last pages lift slightly up when we can't go further
        $s_middle.addClass(self.end ? 'bb-flip-' + dir + '-end' : 'bb-flip-' + dir);
        // overlays
        if (self.options.shadows && !self.end) {
          $o_middle_f.css({ opacity: dir === 'next' ? self.options.shadowFlip : 0 });
          $o_middle_b.css({ opacity: dir === 'next' ? 0 : self.options.shadowFlip });
          $o_left.css({ opacity: dir === 'next' ? self.options.shadowSides : 0 });
          $o_right.css({ opacity: dir === 'next' ? 0 : self.options.shadowSides });
        }
      }, 25);
    },
    _addSide: function (side, dir) {
      var $side;
      switch (side) {
      case 'left':
        /*
						<div class="bb-page" style="z-index:102;">
							<div class="bb-back">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of current page] : [content of next page]
										</div>
									</div>
									<div class="bb-overlay"></div>
								</div>
							</div>
						</div>
						*/
        $side = $('<div class="bb-page"><div class="bb-back"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + (dir === 'next' ? this.$current.html() : this.$nextItem.html()) + '</div></div><div class="bb-overlay"></div></div></div></div>').css('z-index', 102);
        break;
      case 'middle':
        /*
						<div class="bb-page" style="z-index:103;">
							<div class="bb-front">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of current page] : [content of next page]
										</div>
									</div>
									<div class="bb-flipoverlay"></div>
								</div>
							</div>
							<div class="bb-back">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of next page] : [content of current page]
										</div>
									</div>
									<div class="bb-flipoverlay"></div>
								</div>
							</div>
						</div>
						*/
        $side = $('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + (dir === 'next' ? this.$current.html() : this.$nextItem.html()) + '</div></div><div class="bb-flipoverlay"></div></div></div><div class="bb-back"><div class="bb-outer"><div class="bb-content" style="width:' + this.elWidth + 'px"><div class="bb-inner">' + (dir === 'next' ? this.$nextItem.html() : this.$current.html()) + '</div></div><div class="bb-flipoverlay"></div></div></div></div>').css('z-index', 103);
        break;
      case 'right':
        /*
						<div class="bb-page" style="z-index:101;">
							<div class="bb-front">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of next page] : [content of current page]
										</div>
									</div>
									<div class="bb-overlay"></div>
								</div>
							</div>
						</div>
						*/
        $side = $('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + (dir === 'next' ? this.$nextItem.html() : this.$current.html()) + '</div></div><div class="bb-overlay"></div></div></div></div>').css('z-index', 101);
        break;
      }
      return $side;
    },
    _startSlideshow: function () {
      var self = this;
      this.slideshow = setTimeout(function () {
        self._navigate('next');
        if (self.options.autoplay) {
          self._startSlideshow();
        }
      }, this.options.interval);
    },
    _stopSlideshow: function () {
      if (this.options.autoplay) {
        clearTimeout(this.slideshow);
        this.options.autoplay = false;
      }
    },
    next: function () {
      this._action(this.options.direction === 'ltr' ? 'next' : 'prev');
    },
    prev: function () {
      this._action(this.options.direction === 'ltr' ? 'prev' : 'next');
    },
    jump: function (page) {
      page -= 1;
      if (page === this.current || page >= this.itemsCount || page < 0) {
        return false;
      }
      var dir;
      if (this.options.direction === 'ltr') {
        dir = page > this.current ? 'next' : 'prev';
      } else {
        dir = page > this.current ? 'prev' : 'next';
      }
      this._action(dir, page);
    },
    last: function () {
      this.jump(this.itemsCount);
    },
    first: function () {
      this.jump(1);
    },
    isActive: function () {
      return this.isAnimating;
    },
    update: function () {
      var $currentItem = this.$items.eq(this.current);
      this.$items = this.$el.children('.bb-item');
      this.itemsCount = this.$items.length;
      this.current = $currentItem.index();
    },
    destroy: function () {
      if (this.options.autoplay) {
        this._stopSlideshow();
      }
      this.$el.removeClass('bb-' + this.options.orientation);
      this.$items.show();
      if (this.options.nextEl !== '') {
        $(this.options.nextEl).off('.bookblock');
      }
      if (this.options.prevEl !== '') {
        $(this.options.prevEl).off('.bookblock');
      }
      $window.off('debouncedresize');
    }
  };
  var logError = function (message) {
    if (window.console) {
      window.console.error(message);
    }
  };
  $.fn.bookblock = function (options) {
    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var instance = $.data(this, 'bookblock');
        if (!instance) {
          logError('cannot call methods on bookblock prior to initialization; ' + 'attempted to call method \'' + options + '\'');
          return;
        }
        if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
          logError('no such method \'' + options + '\' for bookblock instance');
          return;
        }
        instance[options].apply(instance, args);
      });
    } else {
      this.each(function () {
        var instance = $.data(this, 'bookblock');
        if (instance) {
          instance._init();
        } else {
          instance = $.data(this, 'bookblock', new $.BookBlock(options, this));
        }
      });
    }
    return this;
  };
}(jQuery, window));
/* == jquery mousewheel plugin == Version: 3.1.11, License: MIT License (MIT) */
!function (a) {
  'function' == typeof define && define.amd ? define(['jquery'], a) : 'object' == typeof exports ? module.exports = a : a(jQuery);
}(function (a) {
  function b(b) {
    var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
    if (b = a.event.fix(g), b.type = 'mousewheel', 'detail' in g && (m = -1 * g.detail), 'wheelDelta' in g && (m = g.wheelDelta), 'wheelDeltaY' in g && (m = g.wheelDeltaY), 'wheelDeltaX' in g && (l = -1 * g.wheelDeltaX), 'axis' in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, 'deltaY' in g && (m = -1 * g.deltaY, j = m), 'deltaX' in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, 'mousewheel-line-height');
        j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, 'mousewheel-page-height');
        j *= r, m *= r, l *= r;
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? 'floor' : 'ceil'](j / f), l = Math[l >= 1 ? 'floor' : 'ceil'](l / f), m = Math[m >= 1 ? 'floor' : 'ceil'](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top;
      }
      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }
  function c() {
    f = null;
  }
  function d(a, b) {
    return k.settings.adjustOldDeltas && 'mousewheel' === a.type && b % 120 === 0;
  }
  var e, f, g = [
      'wheel',
      'mousewheel',
      'DOMMouseScroll',
      'MozMousePixelScroll'
    ], h = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : [
      'mousewheel',
      'DomMouseScroll',
      'MozMousePixelScroll'
    ], i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j;)
      a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = a.event.special.mousewheel = {
      version: '3.1.11',
      setup: function () {
        if (this.addEventListener)
          for (var c = h.length; c;)
            this.addEventListener(h[--c], b, !1);
        else
          this.onmousewheel = b;
        a.data(this, 'mousewheel-line-height', k.getLineHeight(this)), a.data(this, 'mousewheel-page-height', k.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var c = h.length; c;)
            this.removeEventListener(h[--c], b, !1);
        else
          this.onmousewheel = null;
        a.removeData(this, 'mousewheel-line-height'), a.removeData(this, 'mousewheel-page-height');
      },
      getLineHeight: function (b) {
        var c = a(b)['offsetParent' in a.fn ? 'offsetParent' : 'parent']();
        return c.length || (c = a('body')), parseInt(c.css('fontSize'), 10);
      },
      getPageHeight: function (b) {
        return a(b).height();
      },
      settings: {
        adjustOldDeltas: !0,
        normalizeOffset: !0
      }
    };
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind('mousewheel', a) : this.trigger('mousewheel');
    },
    unmousewheel: function (a) {
      return this.unbind('mousewheel', a);
    }
  });
});
/* == malihu jquery custom scrollbar plugin == Version: 3.0.2, License: MIT License (MIT) */
(function (h, l, m, d) {
  var e = 'mCustomScrollbar', a = 'mCS', k = '.mCustomScrollbar', f = {
      setWidth: false,
      setHeight: false,
      setTop: 0,
      setLeft: 0,
      axis: 'y',
      scrollbarPosition: 'inside',
      scrollInertia: 950,
      autoDraggerLength: true,
      autoHideScrollbar: false,
      autoExpandScrollbar: false,
      alwaysShowScrollbar: 0,
      snapAmount: null,
      snapOffset: 0,
      mouseWheel: {
        enable: true,
        scrollAmount: 'auto',
        axis: 'y',
        preventDefault: false,
        deltaFactor: 'auto',
        normalizeDelta: false,
        invert: false,
        disableOver: [
          'select',
          'option',
          'keygen',
          'datalist',
          'textarea'
        ]
      },
      scrollButtons: {
        enable: false,
        scrollType: 'stepless',
        scrollAmount: 'auto'
      },
      keyboard: {
        enable: true,
        scrollType: 'stepless',
        scrollAmount: 'auto'
      },
      contentTouchScroll: 25,
      advanced: {
        autoExpandHorizontalScroll: false,
        autoScrollOnFocus: 'input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable=\'true\']',
        updateOnContentResize: true,
        updateOnImageLoad: true,
        updateOnSelectorChange: false
      },
      theme: 'light',
      callbacks: {
        onScrollStart: false,
        onScroll: false,
        onTotalScroll: false,
        onTotalScrollBack: false,
        whileScrolling: false,
        onTotalScrollOffset: 0,
        onTotalScrollBackOffset: 0,
        alwaysTriggerOffsets: true
      },
      live: false,
      liveSelector: null
    }, j = 0, o = {}, c = function (p) {
      if (o[p]) {
        clearTimeout(o[p]);
        g._delete.call(null, o[p]);
      }
    }, i = l.attachEvent && !l.addEventListener ? 1 : 0, n = false, b = {
      init: function (q) {
        var q = h.extend(true, {}, f, q), p = g._selector.call(this);
        if (q.live) {
          var s = q.liveSelector || this.selector || k, r = h(s);
          if (q.live === 'off') {
            c(s);
            return;
          }
          o[s] = setTimeout(function () {
            r.mCustomScrollbar(q);
            if (q.live === 'once' && r.length) {
              c(s);
            }
          }, 500);
        } else {
          c(s);
        }
        q.setWidth = q.set_width ? q.set_width : q.setWidth;
        q.setHeight = q.set_height ? q.set_height : q.setHeight;
        q.axis = q.horizontalScroll ? 'x' : g._findAxis.call(null, q.axis);
        q.scrollInertia = q.scrollInertia < 17 ? 17 : q.scrollInertia;
        if (typeof q.mouseWheel !== 'object' && q.mouseWheel == true) {
          q.mouseWheel = {
            enable: true,
            scrollAmount: 'auto',
            axis: 'y',
            preventDefault: false,
            deltaFactor: 'auto',
            normalizeDelta: false,
            invert: false
          };
        }
        q.mouseWheel.scrollAmount = !q.mouseWheelPixels ? q.mouseWheel.scrollAmount : q.mouseWheelPixels;
        q.mouseWheel.normalizeDelta = !q.advanced.normalizeMouseWheelDelta ? q.mouseWheel.normalizeDelta : q.advanced.normalizeMouseWheelDelta;
        q.scrollButtons.scrollType = g._findScrollButtonsType.call(null, q.scrollButtons.scrollType);
        g._theme.call(null, q);
        return h(p).each(function () {
          var u = h(this);
          if (!u.data(a)) {
            u.data(a, {
              idx: ++j,
              opt: q,
              scrollRatio: {
                y: null,
                x: null
              },
              overflowed: null,
              bindEvents: false,
              tweenRunning: false,
              sequential: {},
              langDir: u.css('direction'),
              cbOffsets: null,
              trigger: null
            });
            var w = u.data(a).opt, v = u.data('mcs-axis'), t = u.data('mcs-scrollbar-position'), x = u.data('mcs-theme');
            if (v) {
              w.axis = v;
            }
            if (t) {
              w.scrollbarPosition = t;
            }
            if (x) {
              w.theme = x;
              g._theme.call(null, w);
            }
            g._pluginMarkup.call(this);
            b.update.call(null, u);
          }
        });
      },
      update: function (q) {
        var p = q || g._selector.call(this);
        return h(p).each(function () {
          var t = h(this);
          if (t.data(a)) {
            var v = t.data(a), u = v.opt, r = h('#mCSB_' + v.idx + '_container'), s = [
                h('#mCSB_' + v.idx + '_dragger_vertical'),
                h('#mCSB_' + v.idx + '_dragger_horizontal')
              ];
            if (!r.length) {
              return;
            }
            if (v.tweenRunning) {
              g._stop.call(null, t);
            }
            if (t.hasClass('mCS_disabled')) {
              t.removeClass('mCS_disabled');
            }
            if (t.hasClass('mCS_destroyed')) {
              t.removeClass('mCS_destroyed');
            }
            g._maxHeight.call(this);
            g._expandContentHorizontally.call(this);
            if (u.axis !== 'y' && !u.advanced.autoExpandHorizontalScroll) {
              r.css('width', g._contentWidth(r.children()));
            }
            v.overflowed = g._overflowed.call(this);
            g._scrollbarVisibility.call(this);
            if (u.autoDraggerLength) {
              g._setDraggerLength.call(this);
            }
            g._scrollRatio.call(this);
            g._bindEvents.call(this);
            var w = [
                Math.abs(r[0].offsetTop),
                Math.abs(r[0].offsetLeft)
              ];
            if (u.axis !== 'x') {
              if (!v.overflowed[0]) {
                g._resetContentPosition.call(this);
                if (u.axis === 'y') {
                  g._unbindEvents.call(this);
                } else {
                  if (u.axis === 'yx' && v.overflowed[1]) {
                    g._scrollTo.call(this, t, w[1].toString(), {
                      dir: 'x',
                      dur: 0,
                      overwrite: 'none'
                    });
                  }
                }
              } else {
                if (s[0].height() > s[0].parent().height()) {
                  g._resetContentPosition.call(this);
                } else {
                  g._scrollTo.call(this, t, w[0].toString(), {
                    dir: 'y',
                    dur: 0,
                    overwrite: 'none'
                  });
                }
              }
            }
            if (u.axis !== 'y') {
              if (!v.overflowed[1]) {
                g._resetContentPosition.call(this);
                if (u.axis === 'x') {
                  g._unbindEvents.call(this);
                } else {
                  if (u.axis === 'yx' && v.overflowed[0]) {
                    g._scrollTo.call(this, t, w[0].toString(), {
                      dir: 'y',
                      dur: 0,
                      overwrite: 'none'
                    });
                  }
                }
              } else {
                if (s[1].width() > s[1].parent().width()) {
                  g._resetContentPosition.call(this);
                } else {
                  g._scrollTo.call(this, t, w[1].toString(), {
                    dir: 'x',
                    dur: 0,
                    overwrite: 'none'
                  });
                }
              }
            }
            g._autoUpdate.call(this);
          }
        });
      },
      scrollTo: function (r, q) {
        if (typeof r == 'undefined' || r == null) {
          return;
        }
        var p = g._selector.call(this);
        return h(p).each(function () {
          var u = h(this);
          if (u.data(a)) {
            var x = u.data(a), w = x.opt, v = {
                trigger: 'external',
                scrollInertia: w.scrollInertia,
                scrollEasing: 'mcsEaseInOut',
                moveDragger: false,
                callbacks: true,
                onStart: true,
                onUpdate: true,
                onComplete: true
              }, s = h.extend(true, {}, v, q), y = g._arr.call(this, r), t = s.scrollInertia < 17 ? 17 : s.scrollInertia;
            y[0] = g._to.call(this, y[0], 'y');
            y[1] = g._to.call(this, y[1], 'x');
            if (s.moveDragger) {
              y[0] *= x.scrollRatio.y;
              y[1] *= x.scrollRatio.x;
            }
            s.dur = t;
            setTimeout(function () {
              if (y[0] !== null && typeof y[0] !== 'undefined' && w.axis !== 'x' && x.overflowed[0]) {
                s.dir = 'y';
                s.overwrite = 'all';
                g._scrollTo.call(this, u, y[0].toString(), s);
              }
              if (y[1] !== null && typeof y[1] !== 'undefined' && w.axis !== 'y' && x.overflowed[1]) {
                s.dir = 'x';
                s.overwrite = 'none';
                g._scrollTo.call(this, u, y[1].toString(), s);
              }
            }, 60);
          }
        });
      },
      stop: function () {
        var p = g._selector.call(this);
        return h(p).each(function () {
          var q = h(this);
          if (q.data(a)) {
            g._stop.call(null, q);
          }
        });
      },
      disable: function (q) {
        var p = g._selector.call(this);
        return h(p).each(function () {
          var r = h(this);
          if (r.data(a)) {
            var t = r.data(a), s = t.opt;
            g._autoUpdate.call(this, 'remove');
            g._unbindEvents.call(this);
            if (q) {
              g._resetContentPosition.call(this);
            }
            g._scrollbarVisibility.call(this, true);
            r.addClass('mCS_disabled');
          }
        });
      },
      destroy: function () {
        var p = g._selector.call(this);
        return h(p).each(function () {
          var s = h(this);
          if (s.data(a)) {
            var u = s.data(a), t = u.opt, q = h('#mCSB_' + u.idx), r = h('#mCSB_' + u.idx + '_container'), v = h('.mCSB_' + u.idx + '_scrollbar');
            if (t.live) {
              c(p);
            }
            g._autoUpdate.call(this, 'remove');
            g._unbindEvents.call(this);
            g._resetContentPosition.call(this);
            s.removeData(a);
            g._delete.call(null, this.mcs);
            v.remove();
            q.replaceWith(r.contents());
            s.removeClass(e + ' _' + a + '_' + u.idx + ' mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled').addClass('mCS_destroyed');
          }
        });
      }
    }, g = {
      _selector: function () {
        return typeof h(this) !== 'object' || h(this).length < 1 ? k : this;
      },
      _theme: function (s) {
        var r = [
            'rounded',
            'rounded-dark',
            'rounded-dots',
            'rounded-dots-dark'
          ], q = [
            'rounded-dots',
            'rounded-dots-dark',
            '3d',
            '3d-dark',
            '3d-thick',
            '3d-thick-dark',
            'inset',
            'inset-dark',
            'inset-2',
            'inset-2-dark',
            'inset-3',
            'inset-3-dark'
          ], p = [
            'minimal',
            'minimal-dark'
          ], u = [
            'minimal',
            'minimal-dark'
          ], t = [
            'minimal',
            'minimal-dark'
          ];
        s.autoDraggerLength = h.inArray(s.theme, r) > -1 ? false : s.autoDraggerLength;
        s.autoExpandScrollbar = h.inArray(s.theme, q) > -1 ? false : s.autoExpandScrollbar;
        s.scrollButtons.enable = h.inArray(s.theme, p) > -1 ? false : s.scrollButtons.enable;
        s.autoHideScrollbar = h.inArray(s.theme, u) > -1 ? true : s.autoHideScrollbar;
        s.scrollbarPosition = h.inArray(s.theme, t) > -1 ? 'outside' : s.scrollbarPosition;
      },
      _findAxis: function (p) {
        return p === 'yx' || p === 'xy' || p === 'auto' ? 'yx' : p === 'x' || p === 'horizontal' ? 'x' : 'y';
      },
      _findScrollButtonsType: function (p) {
        return p === 'stepped' || p === 'pixels' || p === 'step' || p === 'click' ? 'stepped' : 'stepless';
      },
      _pluginMarkup: function () {
        var y = h(this), x = y.data(a), r = x.opt, t = r.autoExpandScrollbar ? ' mCSB_scrollTools_onDrag_expand' : '', B = [
            '<div id=\'mCSB_' + x.idx + '_scrollbar_vertical\' class=\'mCSB_scrollTools mCSB_' + x.idx + '_scrollbar mCS-' + r.theme + ' mCSB_scrollTools_vertical' + t + '\'><div class=\'mCSB_draggerContainer\'><div id=\'mCSB_' + x.idx + '_dragger_vertical\' class=\'mCSB_dragger\' style=\'position:absolute;\' oncontextmenu=\'return false;\'><div class=\'mCSB_dragger_bar\' /></div><div class=\'mCSB_draggerRail\' /></div></div>',
            '<div id=\'mCSB_' + x.idx + '_scrollbar_horizontal\' class=\'mCSB_scrollTools mCSB_' + x.idx + '_scrollbar mCS-' + r.theme + ' mCSB_scrollTools_horizontal' + t + '\'><div class=\'mCSB_draggerContainer\'><div id=\'mCSB_' + x.idx + '_dragger_horizontal\' class=\'mCSB_dragger\' style=\'position:absolute;\' oncontextmenu=\'return false;\'><div class=\'mCSB_dragger_bar\' /></div><div class=\'mCSB_draggerRail\' /></div></div>'
          ], u = r.axis === 'yx' ? 'mCSB_vertical_horizontal' : r.axis === 'x' ? 'mCSB_horizontal' : 'mCSB_vertical', w = r.axis === 'yx' ? B[0] + B[1] : r.axis === 'x' ? B[1] : B[0], v = r.axis === 'yx' ? '<div id=\'mCSB_' + x.idx + '_container_wrapper\' class=\'mCSB_container_wrapper\' />' : '', s = r.autoHideScrollbar ? ' mCS-autoHide' : '', p = r.axis !== 'x' && x.langDir === 'rtl' ? ' mCS-dir-rtl' : '';
        if (r.setWidth) {
          y.css('width', r.setWidth);
        }
        if (r.setHeight) {
          y.css('height', r.setHeight);
        }
        r.setLeft = r.axis !== 'y' && x.langDir === 'rtl' ? '989999px' : r.setLeft;
        y.addClass(e + ' _' + a + '_' + x.idx + s + p).wrapInner('<div id=\'mCSB_' + x.idx + '\' class=\'mCustomScrollBox mCS-' + r.theme + ' ' + u + '\'><div id=\'mCSB_' + x.idx + '_container\' class=\'mCSB_container\' style=\'position:relative; top:' + r.setTop + '; left:' + r.setLeft + ';\' dir=' + x.langDir + ' /></div>');
        var q = h('#mCSB_' + x.idx), z = h('#mCSB_' + x.idx + '_container');
        if (r.axis !== 'y' && !r.advanced.autoExpandHorizontalScroll) {
          z.css('width', g._contentWidth(z.children()));
        }
        if (r.scrollbarPosition === 'outside') {
          if (y.css('position') === 'static') {
            y.css('position', 'relative');
          }
          y.css('overflow', 'visible');
          q.addClass('mCSB_outside').after(w);
        } else {
          q.addClass('mCSB_inside').append(w);
          z.wrap(v);
        }
        g._scrollButtons.call(this);
        var A = [
            h('#mCSB_' + x.idx + '_dragger_vertical'),
            h('#mCSB_' + x.idx + '_dragger_horizontal')
          ];
        A[0].css('min-height', A[0].height());
        A[1].css('min-width', A[1].width());
      },
      _contentWidth: function (p) {
        return Math.max.apply(Math, p.map(function () {
          return h(this).outerWidth(true);
        }).get());
      },
      _expandContentHorizontally: function () {
        var q = h(this), s = q.data(a), r = s.opt, p = h('#mCSB_' + s.idx + '_container');
        if (r.advanced.autoExpandHorizontalScroll && r.axis !== 'y') {
          p.css({
            position: 'absolute',
            width: 'auto'
          }).wrap('<div class=\'mCSB_h_wrapper\' style=\'position:relative; left:0; width:999999px;\' />').css({
            width: Math.ceil(p[0].getBoundingClientRect().right + 0.4) - Math.floor(p[0].getBoundingClientRect().left),
            position: 'relative'
          }).unwrap();
        }
      },
      _scrollButtons: function () {
        var s = h(this), u = s.data(a), t = u.opt, q = h('.mCSB_' + u.idx + '_scrollbar:first'), r = [
            '<a href=\'#\' class=\'mCSB_buttonUp\' oncontextmenu=\'return false;\' />',
            '<a href=\'#\' class=\'mCSB_buttonDown\' oncontextmenu=\'return false;\' />',
            '<a href=\'#\' class=\'mCSB_buttonLeft\' oncontextmenu=\'return false;\' />',
            '<a href=\'#\' class=\'mCSB_buttonRight\' oncontextmenu=\'return false;\' />'
          ], p = [
            t.axis === 'x' ? r[2] : r[0],
            t.axis === 'x' ? r[3] : r[1],
            r[2],
            r[3]
          ];
        if (t.scrollButtons.enable) {
          q.prepend(p[0]).append(p[1]).next('.mCSB_scrollTools').prepend(p[2]).append(p[3]);
        }
      },
      _maxHeight: function () {
        var t = h(this), w = t.data(a), v = w.opt, r = h('#mCSB_' + w.idx), q = t.css('max-height'), s = q.indexOf('%') !== -1, p = t.css('box-sizing');
        if (q !== 'none') {
          var u = s ? t.parent().height() * parseInt(q) / 100 : parseInt(q);
          if (p === 'border-box') {
            u -= t.innerHeight() - t.height() + (t.outerHeight() - t.innerHeight());
          }
          r.css('max-height', Math.round(u));
        }
      },
      _setDraggerLength: function () {
        var u = h(this), s = u.data(a), p = h('#mCSB_' + s.idx), v = h('#mCSB_' + s.idx + '_container'), y = [
            h('#mCSB_' + s.idx + '_dragger_vertical'),
            h('#mCSB_' + s.idx + '_dragger_horizontal')
          ], t = [
            p.height() / v.outerHeight(false),
            p.width() / v.outerWidth(false)
          ], q = [
            parseInt(y[0].css('min-height')),
            Math.round(t[0] * y[0].parent().height()),
            parseInt(y[1].css('min-width')),
            Math.round(t[1] * y[1].parent().width())
          ], r = i && q[1] < q[0] ? q[0] : q[1], x = i && q[3] < q[2] ? q[2] : q[3];
        y[0].css({
          height: r,
          'max-height': y[0].parent().height() - 10
        }).find('.mCSB_dragger_bar').css({ 'line-height': q[0] + 'px' });
        y[1].css({
          width: x,
          'max-width': y[1].parent().width() - 10
        });
      },
      _scrollRatio: function () {
        var t = h(this), v = t.data(a), q = h('#mCSB_' + v.idx), r = h('#mCSB_' + v.idx + '_container'), s = [
            h('#mCSB_' + v.idx + '_dragger_vertical'),
            h('#mCSB_' + v.idx + '_dragger_horizontal')
          ], u = [
            r.outerHeight(false) - q.height(),
            r.outerWidth(false) - q.width()
          ], p = [
            u[0] / (s[0].parent().height() - s[0].height()),
            u[1] / (s[1].parent().width() - s[1].width())
          ];
        v.scrollRatio = {
          y: p[0],
          x: p[1]
        };
      },
      _onDragClasses: function (r, t, q) {
        var s = q ? 'mCSB_dragger_onDrag_expanded' : '', p = [
            'mCSB_dragger_onDrag',
            'mCSB_scrollTools_onDrag'
          ], u = r.closest('.mCSB_scrollTools');
        if (t === 'active') {
          r.toggleClass(p[0] + ' ' + s);
          u.toggleClass(p[1]);
          r[0]._draggable = r[0]._draggable ? 0 : 1;
        } else {
          if (!r[0]._draggable) {
            if (t === 'hide') {
              r.removeClass(p[0]);
              u.removeClass(p[1]);
            } else {
              r.addClass(p[0]);
              u.addClass(p[1]);
            }
          }
        }
      },
      _overflowed: function () {
        var t = h(this), u = t.data(a), q = h('#mCSB_' + u.idx), s = h('#mCSB_' + u.idx + '_container'), r = u.overflowed == null ? s.height() : s.outerHeight(false), p = u.overflowed == null ? s.width() : s.outerWidth(false);
        return [
          r > q.height(),
          p > q.width()
        ];
      },
      _resetContentPosition: function () {
        var t = h(this), v = t.data(a), u = v.opt, q = h('#mCSB_' + v.idx), r = h('#mCSB_' + v.idx + '_container'), s = [
            h('#mCSB_' + v.idx + '_dragger_vertical'),
            h('#mCSB_' + v.idx + '_dragger_horizontal')
          ];
        g._stop(t);
        if (u.axis !== 'x' && !v.overflowed[0] || u.axis === 'y' && v.overflowed[0]) {
          s[0].add(r).css('top', 0);
        }
        if (u.axis !== 'y' && !v.overflowed[1] || u.axis === 'x' && v.overflowed[1]) {
          var p = dx = 0;
          if (v.langDir === 'rtl') {
            p = q.width() - r.outerWidth(false);
            dx = Math.abs(p / v.scrollRatio.x);
          }
          r.css('left', p);
          s[1].css('left', dx);
        }
      },
      _bindEvents: function () {
        var r = h(this), t = r.data(a), s = t.opt;
        if (!t.bindEvents) {
          g._draggable.call(this);
          if (s.contentTouchScroll) {
            g._contentDraggable.call(this);
          }
          if (s.mouseWheel.enable) {
            function q() {
              p = setTimeout(function () {
                if (!h.event.special.mousewheel) {
                  q();
                } else {
                  clearTimeout(p);
                  g._mousewheel.call(r[0]);
                }
              }, 1000);
            }
            var p;
            q();
          }
          g._draggerRail.call(this);
          g._wrapperScroll.call(this);
          if (s.advanced.autoScrollOnFocus) {
            g._focus.call(this);
          }
          if (s.scrollButtons.enable) {
            g._buttons.call(this);
          }
          if (s.keyboard.enable) {
            g._keyboard.call(this);
          }
          t.bindEvents = true;
        }
      },
      _unbindEvents: function () {
        var s = h(this), t = s.data(a), p = a + '_' + t.idx, u = '.mCSB_' + t.idx + '_scrollbar', r = h('#mCSB_' + t.idx + ',#mCSB_' + t.idx + '_container,#mCSB_' + t.idx + '_container_wrapper,' + u + ' .mCSB_draggerContainer,#mCSB_' + t.idx + '_dragger_vertical,#mCSB_' + t.idx + '_dragger_horizontal,' + u + '>a'), q = h('#mCSB_' + t.idx + '_container');
        if (t.bindEvents) {
          h(m).unbind('.' + p);
          r.each(function () {
            h(this).unbind('.' + p);
          });
          clearTimeout(s[0]._focusTimeout);
          g._delete.call(null, s[0]._focusTimeout);
          clearTimeout(t.sequential.step);
          g._delete.call(null, t.sequential.step);
          clearTimeout(q[0].onCompleteTimeout);
          g._delete.call(null, q[0].onCompleteTimeout);
          t.bindEvents = false;
        }
      },
      _scrollbarVisibility: function (q) {
        var t = h(this), v = t.data(a), u = v.opt, p = h('#mCSB_' + v.idx + '_container_wrapper'), r = p.length ? p : h('#mCSB_' + v.idx + '_container'), w = [
            h('#mCSB_' + v.idx + '_scrollbar_vertical'),
            h('#mCSB_' + v.idx + '_scrollbar_horizontal')
          ], s = [
            w[0].find('.mCSB_dragger'),
            w[1].find('.mCSB_dragger')
          ];
        if (u.axis !== 'x') {
          if (v.overflowed[0] && !q) {
            w[0].add(s[0]).add(w[0].children('a')).css('display', 'block');
            r.removeClass('mCS_no_scrollbar_y mCS_y_hidden');
          } else {
            if (u.alwaysShowScrollbar) {
              if (u.alwaysShowScrollbar !== 2) {
                s[0].add(w[0].children('a')).css('display', 'none');
              }
              r.removeClass('mCS_y_hidden');
            } else {
              w[0].css('display', 'none');
              r.addClass('mCS_y_hidden');
            }
            r.addClass('mCS_no_scrollbar_y');
          }
        }
        if (u.axis !== 'y') {
          if (v.overflowed[1] && !q) {
            w[1].add(s[1]).add(w[1].children('a')).css('display', 'block');
            r.removeClass('mCS_no_scrollbar_x mCS_x_hidden');
          } else {
            if (u.alwaysShowScrollbar) {
              if (u.alwaysShowScrollbar !== 2) {
                s[1].add(w[1].children('a')).css('display', 'none');
              }
              r.removeClass('mCS_x_hidden');
            } else {
              w[1].css('display', 'none');
              r.addClass('mCS_x_hidden');
            }
            r.addClass('mCS_no_scrollbar_x');
          }
        }
        if (!v.overflowed[0] && !v.overflowed[1]) {
          t.addClass('mCS_no_scrollbar');
        } else {
          t.removeClass('mCS_no_scrollbar');
        }
      },
      _coordinates: function (q) {
        var p = q.type;
        switch (p) {
        case 'pointerdown':
        case 'MSPointerDown':
        case 'pointermove':
        case 'MSPointerMove':
        case 'pointerup':
        case 'MSPointerUp':
          return [
            q.originalEvent.pageY,
            q.originalEvent.pageX
          ];
          break;
        case 'touchstart':
        case 'touchmove':
        case 'touchend':
          var r = q.originalEvent.touches[0] || q.originalEvent.changedTouches[0];
          return [
            r.pageY,
            r.pageX
          ];
          break;
        default:
          return [
            q.pageY,
            q.pageX
          ];
        }
      },
      _draggable: function () {
        var u = h(this), s = u.data(a), p = s.opt, r = a + '_' + s.idx, t = [
            'mCSB_' + s.idx + '_dragger_vertical',
            'mCSB_' + s.idx + '_dragger_horizontal'
          ], v = h('#mCSB_' + s.idx + '_container'), w = h('#' + t[0] + ',#' + t[1]), A, y, z;
        w.bind('mousedown.' + r + ' touchstart.' + r + ' pointerdown.' + r + ' MSPointerDown.' + r, function (E) {
          E.stopImmediatePropagation();
          E.preventDefault();
          if (!g._mouseBtnLeft(E)) {
            return;
          }
          n = true;
          if (i) {
            m.onselectstart = function () {
              return false;
            };
          }
          x(false);
          g._stop(u);
          A = h(this);
          var F = A.offset(), G = g._coordinates(E)[0] - F.top, B = g._coordinates(E)[1] - F.left, D = A.height() + F.top, C = A.width() + F.left;
          if (G < D && G > 0 && B < C && B > 0) {
            y = G;
            z = B;
          }
          g._onDragClasses(A, 'active', p.autoExpandScrollbar);
        }).bind('touchmove.' + r, function (C) {
          C.stopImmediatePropagation();
          C.preventDefault();
          var D = A.offset(), E = g._coordinates(C)[0] - D.top, B = g._coordinates(C)[1] - D.left;
          q(y, z, E, B);
        });
        h(m).bind('mousemove.' + r + ' pointermove.' + r + ' MSPointerMove.' + r, function (C) {
          if (A) {
            var D = A.offset(), E = g._coordinates(C)[0] - D.top, B = g._coordinates(C)[1] - D.left;
            if (y === E) {
              return;
            }
            q(y, z, E, B);
          }
        }).add(w).bind('mouseup.' + r + ' touchend.' + r + ' pointerup.' + r + ' MSPointerUp.' + r, function (B) {
          if (A) {
            g._onDragClasses(A, 'active', p.autoExpandScrollbar);
            A = null;
          }
          n = false;
          if (i) {
            m.onselectstart = null;
          }
          x(true);
        });
        function x(B) {
          var C = v.find('iframe');
          if (!C.length) {
            return;
          }
          var D = !B ? 'none' : 'auto';
          C.css('pointer-events', D);
        }
        function q(D, E, G, B) {
          v[0].idleTimer = p.scrollInertia < 233 ? 250 : 0;
          if (A.attr('id') === t[1]) {
            var C = 'x', F = (A[0].offsetLeft - E + B) * s.scrollRatio.x;
          } else {
            var C = 'y', F = (A[0].offsetTop - D + G) * s.scrollRatio.y;
          }
          g._scrollTo(u, F.toString(), {
            dir: C,
            drag: true
          });
        }
      },
      _contentDraggable: function () {
        var y = h(this), K = y.data(a), I = K.opt, F = a + '_' + K.idx, v = h('#mCSB_' + K.idx), z = h('#mCSB_' + K.idx + '_container'), w = [
            h('#mCSB_' + K.idx + '_dragger_vertical'),
            h('#mCSB_' + K.idx + '_dragger_horizontal')
          ], E, G, L, M, C = [], D = [], H, A, u, t, J, x, r = 0, q, s = I.axis === 'yx' ? 'none' : 'all';
        z.bind('touchstart.' + F + ' pointerdown.' + F + ' MSPointerDown.' + F, function (N) {
          if (!g._pointerTouch(N) || n) {
            return;
          }
          var O = z.offset();
          E = g._coordinates(N)[0] - O.top;
          G = g._coordinates(N)[1] - O.left;
        }).bind('touchmove.' + F + ' pointermove.' + F + ' MSPointerMove.' + F, function (Q) {
          if (!g._pointerTouch(Q) || n) {
            return;
          }
          Q.stopImmediatePropagation();
          A = g._getTime();
          var P = v.offset(), S = g._coordinates(Q)[0] - P.top, U = g._coordinates(Q)[1] - P.left, R = 'mcsLinearOut';
          C.push(S);
          D.push(U);
          if (K.overflowed[0]) {
            var O = w[0].parent().height() - w[0].height(), T = E - S > 0 && S - E > -(O * K.scrollRatio.y);
          }
          if (K.overflowed[1]) {
            var N = w[1].parent().width() - w[1].width(), V = G - U > 0 && U - G > -(N * K.scrollRatio.x);
          }
          if (T || V) {
            Q.preventDefault();
          }
          x = I.axis === 'yx' ? [
            E - S,
            G - U
          ] : I.axis === 'x' ? [
            null,
            G - U
          ] : [
            E - S,
            null
          ];
          z[0].idleTimer = 250;
          if (K.overflowed[0]) {
            B(x[0], r, R, 'y', 'all', true);
          }
          if (K.overflowed[1]) {
            B(x[1], r, R, 'x', s, true);
          }
        });
        v.bind('touchstart.' + F + ' pointerdown.' + F + ' MSPointerDown.' + F, function (N) {
          if (!g._pointerTouch(N) || n) {
            return;
          }
          N.stopImmediatePropagation();
          g._stop(y);
          H = g._getTime();
          var O = v.offset();
          L = g._coordinates(N)[0] - O.top;
          M = g._coordinates(N)[1] - O.left;
          C = [];
          D = [];
        }).bind('touchend.' + F + ' pointerup.' + F + ' MSPointerUp.' + F, function (P) {
          if (!g._pointerTouch(P) || n) {
            return;
          }
          P.stopImmediatePropagation();
          u = g._getTime();
          var N = v.offset(), T = g._coordinates(P)[0] - N.top, V = g._coordinates(P)[1] - N.left;
          if (u - A > 30) {
            return;
          }
          J = 1000 / (u - H);
          var Q = 'mcsEaseOut', R = J < 2.5, W = R ? [
              C[C.length - 2],
              D[D.length - 2]
            ] : [
              0,
              0
            ];
          t = R ? [
            T - W[0],
            V - W[1]
          ] : [
            T - L,
            V - M
          ];
          var O = [
              Math.abs(t[0]),
              Math.abs(t[1])
            ];
          J = R ? [
            Math.abs(t[0] / 4),
            Math.abs(t[1] / 4)
          ] : [
            J,
            J
          ];
          var U = [
              Math.abs(z[0].offsetTop) - t[0] * p(O[0] / J[0], J[0]),
              Math.abs(z[0].offsetLeft) - t[1] * p(O[1] / J[1], J[1])
            ];
          x = I.axis === 'yx' ? [
            U[0],
            U[1]
          ] : I.axis === 'x' ? [
            null,
            U[1]
          ] : [
            U[0],
            null
          ];
          q = [
            O[0] * 4 + I.scrollInertia,
            O[1] * 4 + I.scrollInertia
          ];
          var S = parseInt(I.contentTouchScroll) || 0;
          x[0] = O[0] > S ? x[0] : 0;
          x[1] = O[1] > S ? x[1] : 0;
          if (K.overflowed[0]) {
            B(x[0], q[0], Q, 'y', s, false);
          }
          if (K.overflowed[1]) {
            B(x[1], q[1], Q, 'x', s, false);
          }
        });
        function p(P, N) {
          var O = [
              N * 1.5,
              N * 2,
              N / 1.5,
              N / 2
            ];
          if (P > 90) {
            return N > 4 ? O[0] : O[3];
          } else {
            if (P > 60) {
              return N > 3 ? O[3] : O[2];
            } else {
              if (P > 30) {
                return N > 8 ? O[1] : N > 6 ? O[0] : N > 4 ? N : O[2];
              } else {
                return N > 8 ? N : O[3];
              }
            }
          }
        }
        function B(P, R, S, O, N, Q) {
          if (!P) {
            return;
          }
          g._scrollTo(y, P.toString(), {
            dur: R,
            scrollEasing: S,
            dir: O,
            overwrite: N,
            drag: Q
          });
        }
      },
      _mousewheel: function () {
        var s = h(this), u = s.data(a), t = u.opt, q = a + '_' + u.idx, p = h('#mCSB_' + u.idx), r = [
            h('#mCSB_' + u.idx + '_dragger_vertical'),
            h('#mCSB_' + u.idx + '_dragger_horizontal')
          ];
        p.bind('mousewheel.' + q, function (z, D) {
          g._stop(s);
          if (g._disableMousewheel(s, z.target)) {
            return;
          }
          var B = t.mouseWheel.deltaFactor !== 'auto' ? parseInt(t.mouseWheel.deltaFactor) : i && z.deltaFactor < 100 ? 100 : z.deltaFactor < 40 ? 40 : z.deltaFactor || 100;
          if (t.axis === 'x' || t.mouseWheel.axis === 'x') {
            var w = 'x', C = [
                Math.round(B * u.scrollRatio.x),
                parseInt(t.mouseWheel.scrollAmount)
              ], y = t.mouseWheel.scrollAmount !== 'auto' ? C[1] : C[0] >= p.width() ? p.width() * 0.9 : C[0], E = Math.abs(h('#mCSB_' + u.idx + '_container')[0].offsetLeft), A = r[1][0].offsetLeft, x = r[1].parent().width() - r[1].width(), v = z.deltaX || z.deltaY || D;
          } else {
            var w = 'y', C = [
                Math.round(B * u.scrollRatio.y),
                parseInt(t.mouseWheel.scrollAmount)
              ], y = t.mouseWheel.scrollAmount !== 'auto' ? C[1] : C[0] >= p.height() ? p.height() * 0.9 : C[0], E = Math.abs(h('#mCSB_' + u.idx + '_container')[0].offsetTop), A = r[0][0].offsetTop, x = r[0].parent().height() - r[0].height(), v = z.deltaY || D;
          }
          if (w === 'y' && !u.overflowed[0] || w === 'x' && !u.overflowed[1]) {
            return;
          }
          if (t.mouseWheel.invert) {
            v = -v;
          }
          if (t.mouseWheel.normalizeDelta) {
            v = v < 0 ? -1 : 1;
          }
          if (v > 0 && A !== 0 || v < 0 && A !== x || t.mouseWheel.preventDefault) {
            z.stopImmediatePropagation();
            z.preventDefault();
          }
          g._scrollTo(s, (E - v * y).toString(), { dir: w });
        });
      },
      _disableMousewheel: function (r, t) {
        var p = t.nodeName.toLowerCase(), q = r.data(a).opt.mouseWheel.disableOver, s = [
            'select',
            'textarea'
          ];
        return h.inArray(p, q) > -1 && !(h.inArray(p, s) > -1 && !h(t).is(':focus'));
      },
      _draggerRail: function () {
        var s = h(this), t = s.data(a), q = a + '_' + t.idx, r = h('#mCSB_' + t.idx + '_container'), u = r.parent(), p = h('.mCSB_' + t.idx + '_scrollbar .mCSB_draggerContainer');
        p.bind('touchstart.' + q + ' pointerdown.' + q + ' MSPointerDown.' + q, function (v) {
          n = true;
        }).bind('touchend.' + q + ' pointerup.' + q + ' MSPointerUp.' + q, function (v) {
          n = false;
        }).bind('click.' + q, function (z) {
          if (h(z.target).hasClass('mCSB_draggerContainer') || h(z.target).hasClass('mCSB_draggerRail')) {
            g._stop(s);
            var w = h(this), y = w.find('.mCSB_dragger');
            if (w.parent('.mCSB_scrollTools_horizontal').length > 0) {
              if (!t.overflowed[1]) {
                return;
              }
              var v = 'x', x = z.pageX > y.offset().left ? -1 : 1, A = Math.abs(r[0].offsetLeft) - x * (u.width() * 0.9);
            } else {
              if (!t.overflowed[0]) {
                return;
              }
              var v = 'y', x = z.pageY > y.offset().top ? -1 : 1, A = Math.abs(r[0].offsetTop) - x * (u.height() * 0.9);
            }
            g._scrollTo(s, A.toString(), {
              dir: v,
              scrollEasing: 'mcsEaseInOut'
            });
          }
        });
      },
      _focus: function () {
        var r = h(this), t = r.data(a), s = t.opt, p = a + '_' + t.idx, q = h('#mCSB_' + t.idx + '_container'), u = q.parent();
        q.bind('focusin.' + p, function (x) {
          var w = h(m.activeElement), y = q.find('.mCustomScrollBox').length, v = 0;
          if (!w.is(s.advanced.autoScrollOnFocus)) {
            return;
          }
          g._stop(r);
          clearTimeout(r[0]._focusTimeout);
          r[0]._focusTimer = y ? (v + 17) * y : 0;
          r[0]._focusTimeout = setTimeout(function () {
            var C = [
                w.offset().top - q.offset().top,
                w.offset().left - q.offset().left
              ], B = [
                q[0].offsetTop,
                q[0].offsetLeft
              ], z = [
                B[0] + C[0] >= 0 && B[0] + C[0] < u.height() - w.outerHeight(false),
                B[1] + C[1] >= 0 && B[0] + C[1] < u.width() - w.outerWidth(false)
              ], A = s.axis === 'yx' && !z[0] && !z[1] ? 'none' : 'all';
            if (s.axis !== 'x' && !z[0]) {
              g._scrollTo(r, C[0].toString(), {
                dir: 'y',
                scrollEasing: 'mcsEaseInOut',
                overwrite: A,
                dur: v
              });
            }
            if (s.axis !== 'y' && !z[1]) {
              g._scrollTo(r, C[1].toString(), {
                dir: 'x',
                scrollEasing: 'mcsEaseInOut',
                overwrite: A,
                dur: v
              });
            }
          }, r[0]._focusTimer);
        });
      },
      _wrapperScroll: function () {
        var q = h(this), r = q.data(a), p = a + '_' + r.idx, s = h('#mCSB_' + r.idx + '_container').parent();
        s.bind('scroll.' + p, function (t) {
          s.scrollTop(0).scrollLeft(0);
        });
      },
      _buttons: function () {
        var u = h(this), w = u.data(a), v = w.opt, p = w.sequential, r = a + '_' + w.idx, t = h('#mCSB_' + w.idx + '_container'), s = '.mCSB_' + w.idx + '_scrollbar', q = h(s + '>a');
        q.bind('mousedown.' + r + ' touchstart.' + r + ' pointerdown.' + r + ' MSPointerDown.' + r + ' mouseup.' + r + ' touchend.' + r + ' pointerup.' + r + ' MSPointerUp.' + r + ' mouseout.' + r + ' pointerout.' + r + ' MSPointerOut.' + r + ' click.' + r, function (z) {
          z.preventDefault();
          if (!g._mouseBtnLeft(z)) {
            return;
          }
          var y = h(this).attr('class');
          p.type = v.scrollButtons.scrollType;
          switch (z.type) {
          case 'mousedown':
          case 'touchstart':
          case 'pointerdown':
          case 'MSPointerDown':
            if (p.type === 'stepped') {
              return;
            }
            n = true;
            w.tweenRunning = false;
            x('on', y);
            break;
          case 'mouseup':
          case 'touchend':
          case 'pointerup':
          case 'MSPointerUp':
          case 'mouseout':
          case 'pointerout':
          case 'MSPointerOut':
            if (p.type === 'stepped') {
              return;
            }
            n = false;
            if (p.dir) {
              x('off', y);
            }
            break;
          case 'click':
            if (p.type !== 'stepped' || w.tweenRunning) {
              return;
            }
            x('on', y);
            break;
          }
          function x(A, B) {
            p.scrollAmount = v.snapAmount || v.scrollButtons.scrollAmount;
            g._sequentialScroll.call(this, u, A, B);
          }
        });
      },
      _keyboard: function () {
        var u = h(this), t = u.data(a), q = t.opt, x = t.sequential, s = a + '_' + t.idx, r = h('#mCSB_' + t.idx), w = h('#mCSB_' + t.idx + '_container'), p = w.parent(), v = 'input,textarea,select,datalist,keygen,[contenteditable=\'true\']';
        r.attr('tabindex', '0').bind('blur.' + s + ' keydown.' + s + ' keyup.' + s, function (D) {
          switch (D.type) {
          case 'blur':
            if (t.tweenRunning && x.dir) {
              y('off', null);
            }
            break;
          case 'keydown':
          case 'keyup':
            var A = D.keyCode ? D.keyCode : D.which, B = 'on';
            if (q.axis !== 'x' && (A === 38 || A === 40) || q.axis !== 'y' && (A === 37 || A === 39)) {
              if ((A === 38 || A === 40) && !t.overflowed[0] || (A === 37 || A === 39) && !t.overflowed[1]) {
                return;
              }
              if (D.type === 'keyup') {
                B = 'off';
              }
              if (!h(m.activeElement).is(v)) {
                D.preventDefault();
                D.stopImmediatePropagation();
                y(B, A);
              }
            } else {
              if (A === 33 || A === 34) {
                if (t.overflowed[0] || t.overflowed[1]) {
                  D.preventDefault();
                  D.stopImmediatePropagation();
                }
                if (D.type === 'keyup') {
                  g._stop(u);
                  var C = A === 34 ? -1 : 1;
                  if (q.axis === 'x' || q.axis === 'yx' && t.overflowed[1] && !t.overflowed[0]) {
                    var z = 'x', E = Math.abs(w[0].offsetLeft) - C * (p.width() * 0.9);
                  } else {
                    var z = 'y', E = Math.abs(w[0].offsetTop) - C * (p.height() * 0.9);
                  }
                  g._scrollTo(u, E.toString(), {
                    dir: z,
                    scrollEasing: 'mcsEaseInOut'
                  });
                }
              } else {
                if (A === 35 || A === 36) {
                  if (!h(m.activeElement).is(v)) {
                    if (t.overflowed[0] || t.overflowed[1]) {
                      D.preventDefault();
                      D.stopImmediatePropagation();
                    }
                    if (D.type === 'keyup') {
                      if (q.axis === 'x' || q.axis === 'yx' && t.overflowed[1] && !t.overflowed[0]) {
                        var z = 'x', E = A === 35 ? Math.abs(p.width() - w.outerWidth(false)) : 0;
                      } else {
                        var z = 'y', E = A === 35 ? Math.abs(p.height() - w.outerHeight(false)) : 0;
                      }
                      g._scrollTo(u, E.toString(), {
                        dir: z,
                        scrollEasing: 'mcsEaseInOut'
                      });
                    }
                  }
                }
              }
            }
            break;
          }
          function y(F, G) {
            x.type = q.keyboard.scrollType;
            x.scrollAmount = q.snapAmount || q.keyboard.scrollAmount;
            if (x.type === 'stepped' && t.tweenRunning) {
              return;
            }
            g._sequentialScroll.call(this, u, F, G);
          }
        });
      },
      _sequentialScroll: function (r, u, s) {
        var w = r.data(a), q = w.opt, y = w.sequential, x = h('#mCSB_' + w.idx + '_container'), p = y.type === 'stepped' ? true : false;
        switch (u) {
        case 'on':
          y.dir = [
            s === 'mCSB_buttonRight' || s === 'mCSB_buttonLeft' || s === 39 || s === 37 ? 'x' : 'y',
            s === 'mCSB_buttonUp' || s === 'mCSB_buttonLeft' || s === 38 || s === 37 ? -1 : 1
          ];
          g._stop(r);
          if (g._isNumeric(s) && y.type === 'stepped') {
            return;
          }
          t(p);
          break;
        case 'off':
          v();
          if (p || w.tweenRunning && y.dir) {
            t(true);
          }
          break;
        }
        function t(z) {
          var F = y.type !== 'stepped', J = !z ? 1000 / 60 : F ? q.scrollInertia / 1.5 : q.scrollInertia, B = !z ? 2.5 : F ? 7.5 : 40, I = [
              Math.abs(x[0].offsetTop),
              Math.abs(x[0].offsetLeft)
            ], E = [
              w.scrollRatio.y > 10 ? 10 : w.scrollRatio.y,
              w.scrollRatio.x > 10 ? 10 : w.scrollRatio.x
            ], C = y.dir[0] === 'x' ? I[1] + y.dir[1] * (E[1] * B) : I[0] + y.dir[1] * (E[0] * B), H = y.dir[0] === 'x' ? I[1] + y.dir[1] * parseInt(y.scrollAmount) : I[0] + y.dir[1] * parseInt(y.scrollAmount), G = y.scrollAmount !== 'auto' ? H : C, D = !z ? 'mcsLinear' : F ? 'mcsLinearOut' : 'mcsEaseInOut', A = !z ? false : true;
          if (z && J < 17) {
            G = y.dir[0] === 'x' ? I[1] : I[0];
          }
          g._scrollTo(r, G.toString(), {
            dir: y.dir[0],
            scrollEasing: D,
            dur: J,
            onComplete: A
          });
          if (z) {
            y.dir = false;
            return;
          }
          clearTimeout(y.step);
          y.step = setTimeout(function () {
            t();
          }, J);
        }
        function v() {
          clearTimeout(y.step);
          g._stop(r);
        }
      },
      _arr: function (r) {
        var q = h(this).data(a).opt, p = [];
        if (typeof r === 'function') {
          r = r();
        }
        if (!(r instanceof Array)) {
          p[0] = r.y ? r.y : r.x || q.axis === 'x' ? null : r;
          p[1] = r.x ? r.x : r.y || q.axis === 'y' ? null : r;
        } else {
          p = r.length > 1 ? [
            r[0],
            r[1]
          ] : q.axis === 'x' ? [
            null,
            r[0]
          ] : [
            r[0],
            null
          ];
        }
        if (typeof p[0] === 'function') {
          p[0] = p[0]();
        }
        if (typeof p[1] === 'function') {
          p[1] = p[1]();
        }
        return p;
      },
      _to: function (v, w) {
        if (v == null || typeof v == 'undefined') {
          return;
        }
        var C = h(this), B = C.data(a), u = B.opt, D = h('#mCSB_' + B.idx + '_container'), r = D.parent(), F = typeof v;
        if (!w) {
          w = u.axis === 'x' ? 'x' : 'y';
        }
        var q = w === 'x' ? D.outerWidth(false) : D.outerHeight(false), x = w === 'x' ? D.offset().left : D.offset().top, E = w === 'x' ? D[0].offsetLeft : D[0].offsetTop, z = w === 'x' ? 'left' : 'top';
        switch (F) {
        case 'function':
          return v();
          break;
        case 'object':
          if (v.nodeType) {
            var A = w === 'x' ? h(v).offset().left : h(v).offset().top;
          } else {
            if (v.jquery) {
              if (!v.length) {
                return;
              }
              var A = w === 'x' ? v.offset().left : v.offset().top;
            }
          }
          return A - x;
          break;
        case 'string':
        case 'number':
          if (g._isNumeric.call(null, v)) {
            return Math.abs(v);
          } else {
            if (v.indexOf('%') !== -1) {
              return Math.abs(q * parseInt(v) / 100);
            } else {
              if (v.indexOf('-=') !== -1) {
                return Math.abs(E - parseInt(v.split('-=')[1]));
              } else {
                if (v.indexOf('+=') !== -1) {
                  var s = E + parseInt(v.split('+=')[1]);
                  return s >= 0 ? 0 : Math.abs(s);
                } else {
                  if (v.indexOf('px') !== -1 && g._isNumeric.call(null, v.split('px')[0])) {
                    return Math.abs(v.split('px')[0]);
                  } else {
                    if (v === 'top' || v === 'left') {
                      return 0;
                    } else {
                      if (v === 'bottom') {
                        return Math.abs(r.height() - D.outerHeight(false));
                      } else {
                        if (v === 'right') {
                          return Math.abs(r.width() - D.outerWidth(false));
                        } else {
                          if (v === 'first' || v === 'last') {
                            var y = D.find(':' + v), A = w === 'x' ? h(y).offset().left : h(y).offset().top;
                            return A - x;
                          } else {
                            if (h(v).length) {
                              var A = w === 'x' ? h(v).offset().left : h(v).offset().top;
                              return A - x;
                            } else {
                              D.css(z, v);
                              b.update.call(null, C[0]);
                              return;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          break;
        }
      },
      _autoUpdate: function (q) {
        var t = h(this), F = t.data(a), z = F.opt, v = h('#mCSB_' + F.idx + '_container');
        if (q) {
          clearTimeout(v[0].autoUpdate);
          g._delete.call(null, v[0].autoUpdate);
          return;
        }
        var s = v.parent(), p = [
            h('#mCSB_' + F.idx + '_scrollbar_vertical'),
            h('#mCSB_' + F.idx + '_scrollbar_horizontal')
          ], D = function () {
            return [
              p[0].is(':visible') ? p[0].outerHeight(true) : 0,
              p[1].is(':visible') ? p[1].outerWidth(true) : 0
            ];
          }, E = y(), x, u = [
            v.outerHeight(false),
            v.outerWidth(false),
            s.height(),
            s.width(),
            D()[0],
            D()[1]
          ], H, B = G(), w;
        C();
        function C() {
          clearTimeout(v[0].autoUpdate);
          v[0].autoUpdate = setTimeout(function () {
            if (z.advanced.updateOnSelectorChange) {
              x = y();
              if (x !== E) {
                r();
                E = x;
                return;
              }
            }
            if (z.advanced.updateOnContentResize) {
              H = [
                v.outerHeight(false),
                v.outerWidth(false),
                s.height(),
                s.width(),
                D()[0],
                D()[1]
              ];
              if (H[0] !== u[0] || H[1] !== u[1] || H[2] !== u[2] || H[3] !== u[3] || H[4] !== u[4] || H[5] !== u[5]) {
                r();
                u = H;
              }
            }
            if (z.advanced.updateOnImageLoad) {
              w = G();
              if (w !== B) {
                v.find('img').each(function () {
                  A(this.src);
                });
                B = w;
              }
            }
            if (z.advanced.updateOnSelectorChange || z.advanced.updateOnContentResize || z.advanced.updateOnImageLoad) {
              C();
            }
          }, 60);
        }
        function G() {
          var I = 0;
          if (z.advanced.updateOnImageLoad) {
            I = v.find('img').length;
          }
          return I;
        }
        function A(L) {
          var I = new Image();
          function K(M, N) {
            return function () {
              return N.apply(M, arguments);
            };
          }
          function J() {
            this.onload = null;
            r();
          }
          I.onload = K(I, J);
          I.src = L;
        }
        function y() {
          if (z.advanced.updateOnSelectorChange === true) {
            z.advanced.updateOnSelectorChange = '*';
          }
          var I = 0, J = v.find(z.advanced.updateOnSelectorChange);
          if (z.advanced.updateOnSelectorChange && J.length > 0) {
            J.each(function () {
              I += h(this).height() + h(this).width();
            });
          }
          return I;
        }
        function r() {
          clearTimeout(v[0].autoUpdate);
          b.update.call(null, t[0]);
        }
      },
      _snapAmount: function (r, p, q) {
        return Math.round(r / p) * p - q;
      },
      _stop: function (p) {
        var r = p.data(a), q = h('#mCSB_' + r.idx + '_container,#mCSB_' + r.idx + '_container_wrapper,#mCSB_' + r.idx + '_dragger_vertical,#mCSB_' + r.idx + '_dragger_horizontal');
        q.each(function () {
          g._stopTween.call(this);
        });
      },
      _scrollTo: function (q, s, u) {
        var I = q.data(a), E = I.opt, D = {
            trigger: 'internal',
            dir: 'y',
            scrollEasing: 'mcsEaseOut',
            drag: false,
            dur: E.scrollInertia,
            overwrite: 'all',
            callbacks: true,
            onStart: true,
            onUpdate: true,
            onComplete: true
          }, u = h.extend(D, u), G = [
            u.dur,
            u.drag ? 0 : u.dur
          ], v = h('#mCSB_' + I.idx), B = h('#mCSB_' + I.idx + '_container'), K = E.callbacks.onTotalScrollOffset ? g._arr.call(q, E.callbacks.onTotalScrollOffset) : [
            0,
            0
          ], p = E.callbacks.onTotalScrollBackOffset ? g._arr.call(q, E.callbacks.onTotalScrollBackOffset) : [
            0,
            0
          ];
        I.trigger = u.trigger;
        if (E.snapAmount) {
          s = g._snapAmount(s, E.snapAmount, E.snapOffset);
        }
        switch (u.dir) {
        case 'x':
          var x = h('#mCSB_' + I.idx + '_dragger_horizontal'), z = 'left', C = B[0].offsetLeft, H = [
              v.width() - B.outerWidth(false),
              x.parent().width() - x.width()
            ], r = [
              s,
              s / I.scrollRatio.x
            ], L = K[1], J = p[1], A = L > 0 ? L / I.scrollRatio.x : 0, w = J > 0 ? J / I.scrollRatio.x : 0;
          break;
        case 'y':
          var x = h('#mCSB_' + I.idx + '_dragger_vertical'), z = 'top', C = B[0].offsetTop, H = [
              v.height() - B.outerHeight(false),
              x.parent().height() - x.height()
            ], r = [
              s,
              s / I.scrollRatio.y
            ], L = K[0], J = p[0], A = L > 0 ? L / I.scrollRatio.y : 0, w = J > 0 ? J / I.scrollRatio.y : 0;
          break;
        }
        if (r[1] < 0) {
          r = [
            0,
            0
          ];
        } else {
          if (r[1] >= H[1]) {
            r = [
              H[0],
              H[1]
            ];
          } else {
            r[0] = -r[0];
          }
        }
        clearTimeout(B[0].onCompleteTimeout);
        if (!I.tweenRunning && (C === 0 && r[0] >= 0 || C === H[0] && r[0] <= H[0])) {
          return;
        }
        g._tweenTo.call(null, x[0], z, Math.round(r[1]), G[1], u.scrollEasing);
        g._tweenTo.call(null, B[0], z, Math.round(r[0]), G[0], u.scrollEasing, u.overwrite, {
          onStart: function () {
            if (u.callbacks && u.onStart && !I.tweenRunning) {
              if (t('onScrollStart')) {
                F();
                E.callbacks.onScrollStart.call(q[0]);
              }
              I.tweenRunning = true;
              g._onDragClasses(x);
              I.cbOffsets = y();
            }
          },
          onUpdate: function () {
            if (u.callbacks && u.onUpdate) {
              if (t('whileScrolling')) {
                F();
                E.callbacks.whileScrolling.call(q[0]);
              }
            }
          },
          onComplete: function () {
            if (u.callbacks && u.onComplete) {
              if (E.axis === 'yx') {
                clearTimeout(B[0].onCompleteTimeout);
              }
              var M = B[0].idleTimer || 0;
              B[0].onCompleteTimeout = setTimeout(function () {
                if (t('onScroll')) {
                  F();
                  E.callbacks.onScroll.call(q[0]);
                }
                if (t('onTotalScroll') && r[1] >= H[1] - A && I.cbOffsets[0]) {
                  F();
                  E.callbacks.onTotalScroll.call(q[0]);
                }
                if (t('onTotalScrollBack') && r[1] <= w && I.cbOffsets[1]) {
                  F();
                  E.callbacks.onTotalScrollBack.call(q[0]);
                }
                I.tweenRunning = false;
                B[0].idleTimer = 0;
                g._onDragClasses(x, 'hide');
              }, M);
            }
          }
        });
        function t(M) {
          return I && E.callbacks[M] && typeof E.callbacks[M] === 'function';
        }
        function y() {
          return [
            E.callbacks.alwaysTriggerOffsets || C >= H[0] + L,
            E.callbacks.alwaysTriggerOffsets || C <= -J
          ];
        }
        function F() {
          var O = [
              B[0].offsetTop,
              B[0].offsetLeft
            ], P = [
              x[0].offsetTop,
              x[0].offsetLeft
            ], M = [
              B.outerHeight(false),
              B.outerWidth(false)
            ], N = [
              v.height(),
              v.width()
            ];
          q[0].mcs = {
            content: B,
            top: O[0],
            left: O[1],
            draggerTop: P[0],
            draggerLeft: P[1],
            topPct: Math.round(100 * Math.abs(O[0]) / (Math.abs(M[0]) - N[0])),
            leftPct: Math.round(100 * Math.abs(O[1]) / (Math.abs(M[1]) - N[1])),
            direction: u.dir
          };
        }
      },
      _tweenTo: function (r, u, s, q, A, t, J) {
        var J = J || {}, G = J.onStart || function () {
          }, B = J.onUpdate || function () {
          }, H = J.onComplete || function () {
          }, z = g._getTime(), x, v = 0, D = r.offsetTop, E = r.style;
        if (u === 'left') {
          D = r.offsetLeft;
        }
        var y = s - D;
        r._mcsstop = 0;
        if (t !== 'none') {
          C();
        }
        p();
        function I() {
          if (r._mcsstop) {
            return;
          }
          if (!v) {
            G.call();
          }
          v = g._getTime() - z;
          F();
          if (v >= r._mcstime) {
            r._mcstime = v > r._mcstime ? v + x - (v - r._mcstime) : v + x - 1;
            if (r._mcstime < v + 1) {
              r._mcstime = v + 1;
            }
          }
          if (r._mcstime < q) {
            r._mcsid = _request(I);
          } else {
            H.call();
          }
        }
        function F() {
          if (q > 0) {
            r._mcscurrVal = w(r._mcstime, D, y, q, A);
            E[u] = Math.round(r._mcscurrVal) + 'px';
          } else {
            E[u] = s + 'px';
          }
          B.call();
        }
        function p() {
          x = 1000 / 60;
          r._mcstime = v + x;
          _request = !l.requestAnimationFrame ? function (K) {
            F();
            return setTimeout(K, 0.01);
          } : l.requestAnimationFrame;
          r._mcsid = _request(I);
        }
        function C() {
          if (r._mcsid == null) {
            return;
          }
          if (!l.requestAnimationFrame) {
            clearTimeout(r._mcsid);
          } else {
            l.cancelAnimationFrame(r._mcsid);
          }
          r._mcsid = null;
        }
        function w(M, L, Q, P, N) {
          switch (N) {
          case 'linear':
          case 'mcsLinear':
            return Q * M / P + L;
            break;
          case 'mcsLinearOut':
            M /= P;
            M--;
            return Q * Math.sqrt(1 - M * M) + L;
            break;
          case 'easeInOutSmooth':
            M /= P / 2;
            if (M < 1) {
              return Q / 2 * M * M + L;
            }
            M--;
            return -Q / 2 * (M * (M - 2) - 1) + L;
            break;
          case 'easeInOutStrong':
            M /= P / 2;
            if (M < 1) {
              return Q / 2 * Math.pow(2, 10 * (M - 1)) + L;
            }
            M--;
            return Q / 2 * (-Math.pow(2, -10 * M) + 2) + L;
            break;
          case 'easeInOut':
          case 'mcsEaseInOut':
            M /= P / 2;
            if (M < 1) {
              return Q / 2 * M * M * M + L;
            }
            M -= 2;
            return Q / 2 * (M * M * M + 2) + L;
            break;
          case 'easeOutSmooth':
            M /= P;
            M--;
            return -Q * (M * M * M * M - 1) + L;
            break;
          case 'easeOutStrong':
            return Q * (-Math.pow(2, -10 * M / P) + 1) + L;
            break;
          case 'easeOut':
          case 'mcsEaseOut':
          default:
            var O = (M /= P) * M, K = O * M;
            return L + Q * (0.499999999999997 * K * O + -2.5 * O * O + 5.5 * K + -6.5 * O + 4 * M);
          }
        }
      },
      _getTime: function () {
        if (l.performance && l.performance.now) {
          return l.performance.now();
        } else {
          if (l.performance && l.performance.webkitNow) {
            return l.performance.webkitNow();
          } else {
            if (Date.now) {
              return Date.now();
            } else {
              return new Date().getTime();
            }
          }
        }
      },
      _stopTween: function () {
        var p = this;
        if (p._mcsid == null) {
          return;
        }
        if (!l.requestAnimationFrame) {
          clearTimeout(p._mcsid);
        } else {
          l.cancelAnimationFrame(p._mcsid);
        }
        p._mcsid = null;
        p._mcsstop = 1;
      },
      _delete: function (r) {
        try {
          delete r;
        } catch (q) {
          r = null;
        }
      },
      _mouseBtnLeft: function (p) {
        return !(p.which && p.which !== 1);
      },
      _pointerTouch: function (q) {
        var p = q.originalEvent.pointerType;
        return !(p && p !== 'touch' && p !== 2);
      },
      _isNumeric: function (p) {
        return !isNaN(parseFloat(p)) && isFinite(p);
      }
    };
  h.fn[e] = function (p) {
    if (b[p]) {
      return b[p].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      if (typeof p === 'object' || !p) {
        return b.init.apply(this, arguments);
      } else {
        h.error('Method ' + p + ' does not exist');
      }
    }
  };
  h[e] = function (p) {
    if (b[p]) {
      return b[p].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      if (typeof p === 'object' || !p) {
        return b.init.apply(this, arguments);
      } else {
        h.error('Method ' + p + ' does not exist');
      }
    }
  };
  h[e].defaults = f;
  l[e] = true;
  h(l).load(function () {
    h(k)[e]();
  });
}(jQuery, window, document));
//============================================================
//
// The MIT License
//
// Copyright (C) 2014 Matthew Wagerfield - @wagerfield
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
// OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
// AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
//
//============================================================
/**
 * jQuery || Zepto Parallax Plugin
 * @author Matthew Wagerfield - @wagerfield
 * @description Creates a parallax effect between an array of layers,
 *              driving the motion from the gyroscope output of a smartdevice.
 *              If no gyroscope is available, the cursor position is used.
 */
;
(function ($, window, document, undefined) {
  // Strict Mode
  'use strict';
  // Constants
  var NAME = 'parallax';
  var MAGIC_NUMBER = 30;
  var DEFAULTS = {
      relativeInput: false,
      clipRelativeInput: false,
      calibrationThreshold: 100,
      calibrationDelay: 500,
      supportDelay: 500,
      calibrateX: false,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 10,
      scalarY: 10,
      frictionX: 0.1,
      frictionY: 0.1,
      originX: 0.5,
      originY: 0.5
    };
  function Plugin(element, options) {
    // DOM Context
    this.element = element;
    // Selections
    this.$context = $(element).data('api', this);
    this.$layers = this.$context.find('.layer');
    // Data Extraction
    var data = {
        calibrateX: this.$context.data('calibrate-x') || null,
        calibrateY: this.$context.data('calibrate-y') || null,
        invertX: this.$context.data('invert-x') || null,
        invertY: this.$context.data('invert-y') || null,
        limitX: parseFloat(this.$context.data('limit-x')) || null,
        limitY: parseFloat(this.$context.data('limit-y')) || null,
        scalarX: parseFloat(this.$context.data('scalar-x')) || null,
        scalarY: parseFloat(this.$context.data('scalar-y')) || null,
        frictionX: parseFloat(this.$context.data('friction-x')) || null,
        frictionY: parseFloat(this.$context.data('friction-y')) || null,
        originX: parseFloat(this.$context.data('origin-x')) || null,
        originY: parseFloat(this.$context.data('origin-y')) || null
      };
    // Delete Null Data Values
    for (var key in data) {
      if (data[key] === null)
        delete data[key];
    }
    // Compose Settings Object
    $.extend(this, DEFAULTS, options, data);
    // States
    this.calibrationTimer = null;
    this.calibrationFlag = true;
    this.enabled = false;
    this.depths = [];
    this.raf = null;
    // Element Bounds
    this.bounds = null;
    this.ex = 0;
    this.ey = 0;
    this.ew = 0;
    this.eh = 0;
    // Element Center
    this.ecx = 0;
    this.ecy = 0;
    // Element Range
    this.erx = 0;
    this.ery = 0;
    // Calibration
    this.cx = 0;
    this.cy = 0;
    // Input
    this.ix = 0;
    this.iy = 0;
    // Motion
    this.mx = 0;
    this.my = 0;
    // Velocity
    this.vx = 0;
    this.vy = 0;
    // Callbacks
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
    this.onOrientationTimer = this.onOrientationTimer.bind(this);
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
    this.onAnimationFrame = this.onAnimationFrame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    // Initialise
    this.initialise();
  }
  Plugin.prototype.transformSupport = function (value) {
    var element = document.createElement('div');
    var propertySupport = false;
    var propertyValue = null;
    var featureSupport = false;
    var cssProperty = null;
    var jsProperty = null;
    for (var i = 0, l = this.vendors.length; i < l; i++) {
      if (this.vendors[i] !== null) {
        cssProperty = this.vendors[i][0] + 'transform';
        jsProperty = this.vendors[i][1] + 'Transform';
      } else {
        cssProperty = 'transform';
        jsProperty = 'transform';
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true;
        break;
      }
    }
    switch (value) {
    case '2D':
      featureSupport = propertySupport;
      break;
    case '3D':
      if (propertySupport) {
        var body = document.body || document.createElement('body');
        var documentElement = document.documentElement;
        var documentOverflow = documentElement.style.overflow;
        if (!document.body) {
          documentElement.style.overflow = 'hidden';
          documentElement.appendChild(body);
          body.style.overflow = 'hidden';
          body.style.background = '';
        }
        body.appendChild(element);
        element.style[jsProperty] = 'translate3d(1px,1px,1px)';
        propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
        featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
        documentElement.style.overflow = documentOverflow;
        body.removeChild(element);
      }
      break;
    }
    return featureSupport;
  };
  Plugin.prototype.ww = null;
  Plugin.prototype.wh = null;
  Plugin.prototype.wcx = null;
  Plugin.prototype.wcy = null;
  Plugin.prototype.wrx = null;
  Plugin.prototype.wry = null;
  Plugin.prototype.portrait = null;
  Plugin.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
  Plugin.prototype.vendors = [
    null,
    [
      '-webkit-',
      'webkit'
    ],
    [
      '-moz-',
      'Moz'
    ],
    [
      '-o-',
      'O'
    ],
    [
      '-ms-',
      'ms'
    ]
  ];
  Plugin.prototype.motionSupport = !!window.DeviceMotionEvent;
  Plugin.prototype.orientationSupport = !!window.DeviceOrientationEvent;
  Plugin.prototype.orientationStatus = 0;
  Plugin.prototype.transform2DSupport = Plugin.prototype.transformSupport('2D');
  Plugin.prototype.transform3DSupport = Plugin.prototype.transformSupport('3D');
  Plugin.prototype.propertyCache = {};
  Plugin.prototype.initialise = function () {
    // Configure Styles
    if (this.$context.css('position') === 'static') {
      this.$context.css({ position: 'relative' });
    }
    // Hardware Accelerate Context
    this.accelerate(this.$context);
    // Setup
    this.updateLayers();
    this.updateDimensions();
    this.enable();
    this.queueCalibration(this.calibrationDelay);
  };
  Plugin.prototype.updateLayers = function () {
    // Cache Layer Elements
    this.$layers = this.$context.find('.layer');
    this.depths = [];
    // Configure Layer Styles
    this.$layers.css({
      position: 'absolute',
      display: 'block',
      left: 0,
      top: 0
    });
    this.$layers.first().css({ position: 'relative' });
    // Hardware Accelerate Layers
    this.accelerate(this.$layers);
    // Cache Depths
    this.$layers.each($.proxy(function (index, element) {
      this.depths.push($(element).data('depth') || 0);
    }, this));
  };
  Plugin.prototype.updateDimensions = function () {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;
    this.wcx = this.ww * this.originX;
    this.wcy = this.wh * this.originY;
    this.wrx = Math.max(this.wcx, this.ww - this.wcx);
    this.wry = Math.max(this.wcy, this.wh - this.wcy);
  };
  Plugin.prototype.updateBounds = function () {
    this.bounds = this.element.getBoundingClientRect();
    this.ex = this.bounds.left;
    this.ey = this.bounds.top;
    this.ew = this.bounds.width;
    this.eh = this.bounds.height;
    this.ecx = this.ew * this.originX;
    this.ecy = this.eh * this.originY;
    this.erx = Math.max(this.ecx, this.ew - this.ecx);
    this.ery = Math.max(this.ecy, this.eh - this.ecy);
  };
  Plugin.prototype.queueCalibration = function (delay) {
    clearTimeout(this.calibrationTimer);
    this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
  };
  Plugin.prototype.enable = function () {
    if (!this.enabled) {
      this.enabled = true;
      if (this.orientationSupport) {
        this.portrait = null;
        window.addEventListener('deviceorientation', this.onDeviceOrientation);
        setTimeout(this.onOrientationTimer, this.supportDelay);
      } else {
        this.cx = 0;
        this.cy = 0;
        this.portrait = false;
        window.addEventListener('mousemove', this.onMouseMove);
      }
      window.addEventListener('resize', this.onWindowResize);
      this.raf = requestAnimationFrame(this.onAnimationFrame);
    }
  };
  Plugin.prototype.disable = function () {
    if (this.enabled) {
      this.enabled = false;
      if (this.orientationSupport) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation);
      } else {
        window.removeEventListener('mousemove', this.onMouseMove);
      }
      window.removeEventListener('resize', this.onWindowResize);
      cancelAnimationFrame(this.raf);
    }
  };
  Plugin.prototype.calibrate = function (x, y) {
    this.calibrateX = x === undefined ? this.calibrateX : x;
    this.calibrateY = y === undefined ? this.calibrateY : y;
  };
  Plugin.prototype.invert = function (x, y) {
    this.invertX = x === undefined ? this.invertX : x;
    this.invertY = y === undefined ? this.invertY : y;
  };
  Plugin.prototype.friction = function (x, y) {
    this.frictionX = x === undefined ? this.frictionX : x;
    this.frictionY = y === undefined ? this.frictionY : y;
  };
  Plugin.prototype.scalar = function (x, y) {
    this.scalarX = x === undefined ? this.scalarX : x;
    this.scalarY = y === undefined ? this.scalarY : y;
  };
  Plugin.prototype.limit = function (x, y) {
    this.limitX = x === undefined ? this.limitX : x;
    this.limitY = y === undefined ? this.limitY : y;
  };
  Plugin.prototype.origin = function (x, y) {
    this.originX = x === undefined ? this.originX : x;
    this.originY = y === undefined ? this.originY : y;
  };
  Plugin.prototype.clamp = function (value, min, max) {
    value = Math.max(value, min);
    value = Math.min(value, max);
    return value;
  };
  Plugin.prototype.css = function (element, property, value) {
    var jsProperty = this.propertyCache[property];
    if (!jsProperty) {
      for (var i = 0, l = this.vendors.length; i < l; i++) {
        if (this.vendors[i] !== null) {
          jsProperty = $.camelCase(this.vendors[i][1] + '-' + property);
        } else {
          jsProperty = property;
        }
        if (element.style[jsProperty] !== undefined) {
          this.propertyCache[property] = jsProperty;
          break;
        }
      }
    }
    element.style[jsProperty] = value;
  };
  Plugin.prototype.accelerate = function ($element) {
    for (var i = 0, l = $element.length; i < l; i++) {
      var element = $element[i];
      this.css(element, 'transform', 'translate3d(0,0,0)');
      this.css(element, 'transform-style', 'preserve-3d');
      this.css(element, 'backface-visibility', 'hidden');
    }
  };
  Plugin.prototype.setPosition = function (element, x, y) {
    x += 'px';
    y += 'px';
    if (this.transform3DSupport) {
      this.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
    } else if (this.transform2DSupport) {
      this.css(element, 'transform', 'translate(' + x + ',' + y + ')');
    } else {
      element.style.left = x;
      element.style.top = y;
    }
  };
  Plugin.prototype.onOrientationTimer = function (event) {
    if (this.orientationSupport && this.orientationStatus === 0) {
      this.disable();
      this.orientationSupport = false;
      this.enable();
    }
  };
  Plugin.prototype.onCalibrationTimer = function (event) {
    this.calibrationFlag = true;
  };
  Plugin.prototype.onWindowResize = function (event) {
    this.updateDimensions();
  };
  Plugin.prototype.onAnimationFrame = function () {
    this.updateBounds();
    var dx = this.ix - this.cx;
    var dy = this.iy - this.cy;
    if (Math.abs(dx) > this.calibrationThreshold || Math.abs(dy) > this.calibrationThreshold) {
      this.queueCalibration(0);
    }
    if (this.portrait) {
      this.mx = this.calibrateX ? dy : this.iy;
      this.my = this.calibrateY ? dx : this.ix;
    } else {
      this.mx = this.calibrateX ? dx : this.ix;
      this.my = this.calibrateY ? dy : this.iy;
    }
    this.mx *= this.ew * (this.scalarX / 100);
    this.my *= this.eh * (this.scalarY / 100);
    if (!isNaN(parseFloat(this.limitX))) {
      this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
    }
    if (!isNaN(parseFloat(this.limitY))) {
      this.my = this.clamp(this.my, -this.limitY, this.limitY);
    }
    this.vx += (this.mx - this.vx) * this.frictionX;
    this.vy += (this.my - this.vy) * this.frictionY;
    for (var i = 0, l = this.$layers.length; i < l; i++) {
      var depth = this.depths[i];
      var layer = this.$layers[i];
      var xOffset = this.vx * depth * (this.invertX ? -1 : 1);
      var yOffset = this.vy * depth * (this.invertY ? -1 : 1);
      this.setPosition(layer, xOffset, yOffset);
    }
    this.raf = requestAnimationFrame(this.onAnimationFrame);
  };
  Plugin.prototype.onDeviceOrientation = function (event) {
    // Validate environment and event properties.
    if (!this.desktop && event.beta !== null && event.gamma !== null) {
      // Set orientation status.
      this.orientationStatus = 1;
      // Extract Rotation
      var x = (event.beta || 0) / MAGIC_NUMBER;
      //  -90 :: 90
      var y = (event.gamma || 0) / MAGIC_NUMBER;
      // -180 :: 180
      // Detect Orientation Change
      var portrait = window.innerHeight > window.innerWidth;
      if (this.portrait !== portrait) {
        this.portrait = portrait;
        this.calibrationFlag = true;
      }
      // Set Calibration
      if (this.calibrationFlag) {
        this.calibrationFlag = false;
        this.cx = x;
        this.cy = y;
      }
      // Set Input
      this.ix = x;
      this.iy = y;
    }
  };
  Plugin.prototype.onMouseMove = function (event) {
    // Cache mouse coordinates.
    var clientX = event.clientX;
    var clientY = event.clientY;
    // Calculate Mouse Input
    if (!this.orientationSupport && this.relativeInput) {
      // Clip mouse coordinates inside element bounds.
      if (this.clipRelativeInput) {
        clientX = Math.max(clientX, this.ex);
        clientX = Math.min(clientX, this.ex + this.ew);
        clientY = Math.max(clientY, this.ey);
        clientY = Math.min(clientY, this.ey + this.eh);
      }
      // Calculate input relative to the element.
      this.ix = (clientX - this.ex - this.ecx) / this.erx;
      this.iy = (clientY - this.ey - this.ecy) / this.ery;
    } else {
      // Calculate input relative to the window.
      this.ix = (clientX - this.wcx) / this.wrx;
      this.iy = (clientY - this.wcy) / this.wry;
    }
  };
  var API = {
      enable: Plugin.prototype.enable,
      disable: Plugin.prototype.disable,
      updateLayers: Plugin.prototype.updateLayers,
      calibrate: Plugin.prototype.calibrate,
      friction: Plugin.prototype.friction,
      invert: Plugin.prototype.invert,
      scalar: Plugin.prototype.scalar,
      limit: Plugin.prototype.limit,
      origin: Plugin.prototype.origin
    };
  $.fn[NAME] = function (value) {
    var args = arguments;
    return this.each(function () {
      var $this = $(this);
      var plugin = $this.data(NAME);
      if (!plugin) {
        plugin = new Plugin(this, value);
        $this.data(NAME, plugin);
      }
      if (API[value]) {
        plugin[value].apply(plugin, Array.prototype.slice.call(args, 1));
      }
    });
  };
}(window.jQuery || window.Zepto, window, document));
/**
 * Request Animation Frame Polyfill.
 * @author Tino Zijdel
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */
;
(function () {
  var lastTime = 0;
  var vendors = [
      'ms',
      'moz',
      'webkit',
      'o'
    ];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());
/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = function () {
    function init() {
      var overlay = document.querySelector('.md-overlay');
      [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
        var modal = document.querySelector('#' + el.getAttribute('data-modal')), close = modal.querySelector('.md-close');
        function removeModal(hasPerspective) {
          classie.remove(modal, 'md-show');
          if (hasPerspective) {
            classie.remove(document.documentElement, 'md-perspective');
          }
        }
        function removeModalHandler() {
          removeModal(classie.has(el, 'md-setperspective'));
        }
        el.addEventListener('click', function (ev) {
          classie.add(modal, 'md-show');
          overlay.removeEventListener('click', removeModalHandler);
          overlay.addEventListener('click', removeModalHandler);
          if (classie.has(el, 'md-setperspective')) {
            setTimeout(function () {
              classie.add(document.documentElement, 'md-perspective');
            }, 25);
          }
        });
        close.addEventListener('click', function (ev) {
          ev.stopPropagation();
          removeModalHandler();
        });
      });
    }
    init();
  }();
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.0 - 2014-05-01
 * License: MIT
 */
angular.module('ui.bootstrap', [
  'ui.bootstrap.tpls',
  'ui.bootstrap.transition',
  'ui.bootstrap.collapse',
  'ui.bootstrap.accordion',
  'ui.bootstrap.alert',
  'ui.bootstrap.bindHtml',
  'ui.bootstrap.buttons',
  'ui.bootstrap.carousel',
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position',
  'ui.bootstrap.datepicker',
  'ui.bootstrap.dropdown',
  'ui.bootstrap.modal',
  'ui.bootstrap.pagination',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.progressbar',
  'ui.bootstrap.rating',
  'ui.bootstrap.tabs',
  'ui.bootstrap.timepicker',
  'ui.bootstrap.typeahead'
]);
angular.module('ui.bootstrap.tpls', [
  'template/accordion/accordion-group.html',
  'template/accordion/accordion.html',
  'template/alert/alert.html',
  'template/carousel/carousel.html',
  'template/carousel/slide.html',
  'template/datepicker/datepicker.html',
  'template/datepicker/day.html',
  'template/datepicker/month.html',
  'template/datepicker/popup.html',
  'template/datepicker/year.html',
  'template/modal/backdrop.html',
  'template/modal/window.html',
  'template/pagination/pager.html',
  'template/pagination/pagination.html',
  'template/tooltip/tooltip-html-unsafe-popup.html',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html',
  'template/progressbar/bar.html',
  'template/progressbar/progress.html',
  'template/progressbar/progressbar.html',
  'template/rating/rating.html',
  'template/tabs/tab.html',
  'template/tabs/tabset.html',
  'template/timepicker/timepicker.html',
  'template/typeahead/typeahead-match.html',
  'template/typeahead/typeahead-popup.html'
]);
angular.module('ui.bootstrap.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function ($q, $timeout, $rootScope) {
    var $transition = function (element, trigger, options) {
      options = options || {};
      var deferred = $q.defer();
      var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
      var transitionEndHandler = function (event) {
        $rootScope.$apply(function () {
          element.unbind(endEventName, transitionEndHandler);
          deferred.resolve(element);
        });
      };
      if (endEventName) {
        element.bind(endEventName, transitionEndHandler);
      }
      // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
      $timeout(function () {
        if (angular.isString(trigger)) {
          element.addClass(trigger);
        } else if (angular.isFunction(trigger)) {
          trigger(element);
        } else if (angular.isObject(trigger)) {
          element.css(trigger);
        }
        //If browser does not support transitions, instantly resolve
        if (!endEventName) {
          deferred.resolve(element);
        }
      });
      // Add our custom cancel function to the promise that is returned
      // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
      // i.e. it will therefore never raise a transitionEnd event for that transition
      deferred.promise.cancel = function () {
        if (endEventName) {
          element.unbind(endEventName, transitionEndHandler);
        }
        deferred.reject('Transition cancelled');
      };
      return deferred.promise;
    };
    // Work out the name of the transitionEnd event
    var transElement = document.createElement('trans');
    var transitionEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'transition': 'transitionend'
      };
    var animationEndEventNames = {
        'WebkitTransition': 'webkitAnimationEnd',
        'MozTransition': 'animationend',
        'OTransition': 'oAnimationEnd',
        'transition': 'animationend'
      };
    function findEndEventName(endEventNames) {
      for (var name in endEventNames) {
        if (transElement.style[name] !== undefined) {
          return endEventNames[name];
        }
      }
    }
    $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
    $transition.animationEndEventName = findEndEventName(animationEndEventNames);
    return $transition;
  }
]);
angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
  '$transition',
  function ($transition) {
    return {
      link: function (scope, element, attrs) {
        var initialAnimSkip = true;
        var currentTransition;
        function doTransition(change) {
          var newTransition = $transition(element, change);
          if (currentTransition) {
            currentTransition.cancel();
          }
          currentTransition = newTransition;
          newTransition.then(newTransitionDone, newTransitionDone);
          return newTransition;
          function newTransitionDone() {
            // Make sure it's this transition, otherwise, leave it alone.
            if (currentTransition === newTransition) {
              currentTransition = undefined;
            }
          }
        }
        function expand() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            expandDone();
          } else {
            element.removeClass('collapse').addClass('collapsing');
            doTransition({ height: element[0].scrollHeight + 'px' }).then(expandDone);
          }
        }
        function expandDone() {
          element.removeClass('collapsing');
          element.addClass('collapse in');
          element.css({ height: 'auto' });
        }
        function collapse() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            collapseDone();
            element.css({ height: 0 });
          } else {
            // CSS transitions don't work with height: auto, so we have to manually change the height to a specific value
            element.css({ height: element[0].scrollHeight + 'px' });
            //trigger reflow so a browser realizes that height was updated from auto to a specific value
            var x = element[0].offsetWidth;
            element.removeClass('collapse in').addClass('collapsing');
            doTransition({ height: 0 }).then(collapseDone);
          }
        }
        function collapseDone() {
          element.removeClass('collapsing');
          element.addClass('collapse');
        }
        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }
]);
angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: true }).controller('AccordionController', [
  '$scope',
  '$attrs',
  'accordionConfig',
  function ($scope, $attrs, accordionConfig) {
    // This array keeps track of the accordion groups
    this.groups = [];
    // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
    this.closeOthers = function (openGroup) {
      var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
      if (closeOthers) {
        angular.forEach(this.groups, function (group) {
          if (group !== openGroup) {
            group.isOpen = false;
          }
        });
      }
    };
    // This is called from the accordion-group directive to add itself to the accordion
    this.addGroup = function (groupScope) {
      var that = this;
      this.groups.push(groupScope);
      groupScope.$on('$destroy', function (event) {
        that.removeGroup(groupScope);
      });
    };
    // This is called from the accordion-group directive when to remove itself
    this.removeGroup = function (group) {
      var index = this.groups.indexOf(group);
      if (index !== -1) {
        this.groups.splice(index, 1);
      }
    };
  }
]).directive('accordion', function () {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', function () {
  return {
    require: '^accordion',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/accordion/accordion-group.html',
    scope: {
      heading: '@',
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function () {
      this.setHeading = function (element) {
        this.heading = element;
      };
    },
    link: function (scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);
      scope.$watch('isOpen', function (value) {
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });
      scope.toggleOpen = function () {
        if (!scope.isDisabled) {
          scope.isOpen = !scope.isOpen;
          angular.element('.panel').each(function (index, el) {
            angular.element(el).find('.pr-accordion-icon').fadeIn(400);
            angular.element(el).find('.pr-accordion-per').fadeOut(400);
          });
          if (!scope.isOpen) {
            element.find('.pr-accordion-icon').fadeIn(400);
            element.find('.pr-accordion-per').fadeOut(400);
          } else {
            element.find('.pr-accordion-icon').fadeOut(400);
            element.find('.pr-accordion-per').fadeIn(400);
          }
        }
      };
    }
  };
}).directive('accordionHeading', function () {
  return {
    restrict: 'EA',
    transclude: true,
    template: '',
    replace: true,
    require: '^accordionGroup',
    link: function (scope, element, attr, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, function () {
      }));
    }
  };
}).directive('accordionTransclude', function () {
  return {
    require: '^accordionGroup',
    link: function (scope, element, attr, controller) {
      scope.$watch(function () {
        return controller[attr.accordionTransclude];
      }, function (heading) {
        if (heading) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
});
angular.module('ui.bootstrap.alert', []).controller('AlertController', [
  '$scope',
  '$attrs',
  function ($scope, $attrs) {
    $scope.closeable = 'close' in $attrs;
  }
]).directive('alert', function () {
  return {
    restrict: 'EA',
    controller: 'AlertController',
    templateUrl: 'template/alert/alert.html',
    transclude: true,
    replace: true,
    scope: {
      type: '@',
      close: '&'
    }
  };
});
angular.module('ui.bootstrap.bindHtml', []).directive('bindHtmlUnsafe', function () {
  return function (scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
});
angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('ButtonsController', [
  'buttonConfig',
  function (buttonConfig) {
    this.activeClass = buttonConfig.activeClass || 'active';
    this.toggleEvent = buttonConfig.toggleEvent || 'click';
  }
]).directive('btnRadio', function () {
  return {
    require: [
      'btnRadio',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };
      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        var isActive = element.hasClass(buttonsCtrl.activeClass);
        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
}).directive('btnCheckbox', function () {
  return {
    require: [
      'btnCheckbox',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }
      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }
      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }
      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };
      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});
/**
* @ngdoc overview
* @name ui.bootstrap.carousel
*
* @description
* AngularJS version of an image carousel.
*
*/
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
  '$scope',
  '$timeout',
  '$transition',
  function ($scope, $timeout, $transition) {
    var self = this, slides = self.slides = $scope.slides = [], currentIndex = -1, currentTimeout, isPlaying;
    self.currentSlide = null;
    var destroyed = false;
    /* direction: "prev" or "next" */
    self.select = $scope.select = function (nextSlide, direction) {
      var nextIndex = slides.indexOf(nextSlide);
      //Decide direction if it's not given
      if (direction === undefined) {
        direction = nextIndex > currentIndex ? 'next' : 'prev';
      }
      if (nextSlide && nextSlide !== self.currentSlide) {
        if ($scope.$currentTransition) {
          $scope.$currentTransition.cancel();
          //Timeout so ng-class in template has time to fix classes for finished slide
          $timeout(goNext);
        } else {
          goNext();
        }
      }
      function goNext() {
        // Scope has been destroyed, stop here.
        if (destroyed) {
          return;
        }
        //If we have a slide to transition from and we have a transition type and we're allowed, go
        if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
          //We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime
          nextSlide.$element.addClass(direction);
          var reflow = nextSlide.$element[0].offsetWidth;
          //force reflow
          //Set all other slides to stop doing their stuff for the new transition
          angular.forEach(slides, function (slide) {
            angular.extend(slide, {
              direction: '',
              entering: false,
              leaving: false,
              active: false
            });
          });
          angular.extend(nextSlide, {
            direction: direction,
            active: true,
            entering: true
          });
          angular.extend(self.currentSlide || {}, {
            direction: direction,
            leaving: true
          });
          $scope.$currentTransition = $transition(nextSlide.$element, {});
          //We have to create new pointers inside a closure since next & current will change
          (function (next, current) {
            $scope.$currentTransition.then(function () {
              transitionDone(next, current);
            }, function () {
              transitionDone(next, current);
            });
          }(nextSlide, self.currentSlide));
        } else {
          transitionDone(nextSlide, self.currentSlide);
        }
        self.currentSlide = nextSlide;
        currentIndex = nextIndex;
        //every time you change slides, reset the timer
        restartTimer();
      }
      function transitionDone(next, current) {
        angular.extend(next, {
          direction: '',
          active: true,
          leaving: false,
          entering: false
        });
        angular.extend(current || {}, {
          direction: '',
          active: false,
          leaving: false,
          entering: false
        });
        $scope.$currentTransition = null;
      }
    };
    $scope.$on('$destroy', function () {
      destroyed = true;
    });
    /* Allow outside people to call indexOf on slides array */
    self.indexOfSlide = function (slide) {
      return slides.indexOf(slide);
    };
    $scope.next = function () {
      var newIndex = (currentIndex + 1) % slides.length;
      //Prevent this user-triggered transition from occurring if there is already one in progress
      if (!$scope.$currentTransition) {
        return self.select(slides[newIndex], 'next');
      }
    };
    $scope.prev = function () {
      var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
      //Prevent this user-triggered transition from occurring if there is already one in progress
      if (!$scope.$currentTransition) {
        return self.select(slides[newIndex], 'prev');
      }
    };
    $scope.isActive = function (slide) {
      return self.currentSlide === slide;
    };
    $scope.$watch('interval', restartTimer);
    $scope.$on('$destroy', resetTimer);
    function restartTimer() {
      resetTimer();
      var interval = +$scope.interval;
      if (!isNaN(interval) && interval >= 0) {
        currentTimeout = $timeout(timerFn, interval);
      }
    }
    function resetTimer() {
      if (currentTimeout) {
        $timeout.cancel(currentTimeout);
        currentTimeout = null;
      }
    }
    function timerFn() {
      if (isPlaying) {
        $scope.next();
        restartTimer();
      } else {
        $scope.pause();
      }
    }
    $scope.play = function () {
      if (!isPlaying) {
        isPlaying = true;
        restartTimer();
      }
    };
    $scope.pause = function () {
      if (!$scope.noPause) {
        isPlaying = false;
        resetTimer();
      }
    };
    self.addSlide = function (slide, element) {
      slide.$element = element;
      slides.push(slide);
      //if this is the first slide or the slide is set to active, select it
      if (slides.length === 1 || slide.active) {
        self.select(slides[slides.length - 1]);
        if (slides.length == 1) {
          $scope.play();
        }
      } else {
        slide.active = false;
      }
    };
    self.removeSlide = function (slide) {
      //get the index of the slide inside the carousel
      var index = slides.indexOf(slide);
      slides.splice(index, 1);
      if (slides.length > 0 && slide.active) {
        if (index >= slides.length) {
          self.select(slides[index - 1]);
        } else {
          self.select(slides[index]);
        }
      } else if (currentIndex > index) {
        currentIndex--;
      }
    };
  }
]).directive('carousel', [function () {
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      controller: 'CarouselController',
      require: 'carousel',
      templateUrl: 'template/carousel/carousel.html',
      scope: {
        interval: '=',
        noTransition: '=',
        noPause: '='
      }
    };
  }]).directive('slide', function () {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: { active: '=?' },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function () {
        carouselCtrl.removeSlide(scope);
      });
      scope.$watch('active', function (active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
});
angular.module('ui.bootstrap.dateparser', []).service('dateParser', [
  '$locale',
  'orderByFilter',
  function ($locale, orderByFilter) {
    this.parsers = {};
    var formatCodeToRegex = {
        'yyyy': {
          regex: '\\d{4}',
          apply: function (value) {
            this.year = +value;
          }
        },
        'yy': {
          regex: '\\d{2}',
          apply: function (value) {
            this.year = +value + 2000;
          }
        },
        'y': {
          regex: '\\d{1,4}',
          apply: function (value) {
            this.year = +value;
          }
        },
        'MMMM': {
          regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
          apply: function (value) {
            this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value);
          }
        },
        'MMM': {
          regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
          apply: function (value) {
            this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value);
          }
        },
        'MM': {
          regex: '0[1-9]|1[0-2]',
          apply: function (value) {
            this.month = value - 1;
          }
        },
        'M': {
          regex: '[1-9]|1[0-2]',
          apply: function (value) {
            this.month = value - 1;
          }
        },
        'dd': {
          regex: '[0-2][0-9]{1}|3[0-1]{1}',
          apply: function (value) {
            this.date = +value;
          }
        },
        'd': {
          regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
          apply: function (value) {
            this.date = +value;
          }
        },
        'EEEE': { regex: $locale.DATETIME_FORMATS.DAY.join('|') },
        'EEE': { regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|') }
      };
    this.createParser = function (format) {
      var map = [], regex = format.split('');
      angular.forEach(formatCodeToRegex, function (data, code) {
        var index = format.indexOf(code);
        if (index > -1) {
          format = format.split('');
          regex[index] = '(' + data.regex + ')';
          format[index] = '$';
          // Custom symbol to define consumed part of format
          for (var i = index + 1, n = index + code.length; i < n; i++) {
            regex[i] = '';
            format[i] = '$';
          }
          format = format.join('');
          map.push({
            index: index,
            apply: data.apply
          });
        }
      });
      return {
        regex: new RegExp('^' + regex.join('') + '$'),
        map: orderByFilter(map, 'index')
      };
    };
    this.parse = function (input, format) {
      if (!angular.isString(input)) {
        return input;
      }
      format = $locale.DATETIME_FORMATS[format] || format;
      if (!this.parsers[format]) {
        this.parsers[format] = this.createParser(format);
      }
      var parser = this.parsers[format], regex = parser.regex, map = parser.map, results = input.match(regex);
      if (results && results.length) {
        var fields = {
            year: 1900,
            month: 0,
            date: 1,
            hours: 0
          }, dt;
        for (var i = 1, n = results.length; i < n; i++) {
          var mapper = map[i - 1];
          if (mapper.apply) {
            mapper.apply.call(fields, results[i]);
          }
        }
        if (isValid(fields.year, fields.month, fields.date)) {
          dt = new Date(fields.year, fields.month, fields.date, fields.hours);
        }
        return dt;
      }
    };
    // Check if date is valid for specific month (and year for February).
    // Month: 0 = Jan, 1 = Feb, etc
    function isValid(year, month, date) {
      if (month === 1 && date > 28) {
        return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
      }
      if (month === 3 || month === 5 || month === 8 || month === 10) {
        return date < 31;
      }
      return true;
    }
  }
]);
angular.module('ui.bootstrap.position', []).factory('$position', [
  '$document',
  '$window',
  function ($document, $window) {
    function getStyle(el, cssprop) {
      if (el.currentStyle) {
        //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }
    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static') === 'static';
    }
    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };
    return {
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = {
            top: 0,
            left: 0
          };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';
        var hostElPos, targetElWidth, targetElHeight, targetElPos;
        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');
        var shiftWidth = {
            center: function () {
              return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
              return hostElPos.left;
            },
            right: function () {
              return hostElPos.left + hostElPos.width;
            }
          };
        var shiftHeight = {
            center: function () {
              return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
              return hostElPos.top;
            },
            bottom: function () {
              return hostElPos.top + hostElPos.height;
            }
          };
        switch (pos0) {
        case 'right':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: shiftWidth[pos0]()
          };
          break;
        case 'left':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: hostElPos.left - targetElWidth
          };
          break;
        case 'bottom':
          targetElPos = {
            top: shiftHeight[pos0](),
            left: shiftWidth[pos1]()
          };
          break;
        default:
          targetElPos = {
            top: hostElPos.top - targetElHeight,
            left: shiftWidth[pos1]()
          };
          break;
        }
        return targetElPos;
      }
    };
  }
]);
angular.module('ui.bootstrap.datepicker', [
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position'
]).constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
}).controller('DatepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$interpolate',
  '$timeout',
  '$log',
  'dateFilter',
  'datepickerConfig',
  function ($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
    var self = this, ngModelCtrl = { $setViewValue: angular.noop };
    // nullModelCtrl;
    // Modes chain
    this.modes = [
      'day',
      'month',
      'year'
    ];
    // Configuration attributes
    angular.forEach([
      'formatDay',
      'formatMonth',
      'formatYear',
      'formatDayHeader',
      'formatDayTitle',
      'formatMonthTitle',
      'minMode',
      'maxMode',
      'showWeeks',
      'startingDay',
      'yearRange'
    ], function (key, index) {
      self[key] = angular.isDefined($attrs[key]) ? index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key]) : datepickerConfig[key];
    });
    // Watchable attributes
    angular.forEach([
      'minDate',
      'maxDate'
    ], function (key) {
      if ($attrs[key]) {
        $scope.$parent.$watch($parse($attrs[key]), function (value) {
          self[key] = value ? new Date(value) : null;
          self.refreshView();
        });
      } else {
        self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
      }
    });
    $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
    $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
    this.activeDate = angular.isDefined($attrs.initDate) ? $scope.$parent.$eval($attrs.initDate) : new Date();
    $scope.isActive = function (dateObject) {
      if (self.compare(dateObject.date, self.activeDate) === 0) {
        $scope.activeDateId = dateObject.uid;
        return true;
      }
      return false;
    };
    this.init = function (ngModelCtrl_) {
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = function () {
        self.render();
      };
    };
    this.render = function () {
      if (ngModelCtrl.$modelValue) {
        var date = new Date(ngModelCtrl.$modelValue), isValid = !isNaN(date);
        if (isValid) {
          this.activeDate = date;
        } else {
          $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        }
        ngModelCtrl.$setValidity('date', isValid);
      }
      this.refreshView();
    };
    this.refreshView = function () {
      if (this.element) {
        this._refreshView();
        var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
        ngModelCtrl.$setValidity('date-disabled', !date || this.element && !this.isDisabled(date));
      }
    };
    this.createDateObject = function (date, format) {
      var model = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
      return {
        date: date,
        label: dateFilter(date, format),
        selected: model && this.compare(date, model) === 0,
        disabled: this.isDisabled(date),
        current: this.compare(date, new Date()) === 0
      };
    };
    this.isDisabled = function (date) {
      return this.minDate && this.compare(date, this.minDate) < 0 || this.maxDate && this.compare(date, this.maxDate) > 0 || $attrs.dateDisabled && $scope.dateDisabled({
        date: date,
        mode: $scope.datepickerMode
      });
    };
    // Split array into smaller arrays
    this.split = function (arr, size) {
      var arrays = [];
      while (arr.length > 0) {
        arrays.push(arr.splice(0, size));
      }
      return arrays;
    };
    $scope.select = function (date) {
      if ($scope.datepickerMode === self.minMode) {
        var dt = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
        dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        ngModelCtrl.$setViewValue(dt);
        ngModelCtrl.$render();
      } else {
        self.activeDate = date;
        $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
      }
    };
    $scope.move = function (direction) {
      var year = self.activeDate.getFullYear() + direction * (self.step.years || 0), month = self.activeDate.getMonth() + direction * (self.step.months || 0);
      self.activeDate.setFullYear(year, month, 1);
      self.refreshView();
    };
    $scope.toggleMode = function (direction) {
      direction = direction || 1;
      if ($scope.datepickerMode === self.maxMode && direction === 1 || $scope.datepickerMode === self.minMode && direction === -1) {
        return;
      }
      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
    };
    // Key event mapper
    $scope.keys = {
      13: 'enter',
      32: 'space',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    var focusElement = function () {
      $timeout(function () {
        self.element[0].focus();
      }, 0, false);
    };
    // Listen for focus requests from popup directive
    $scope.$on('datepicker.focus', focusElement);
    $scope.keydown = function (evt) {
      var key = $scope.keys[evt.which];
      if (!key || evt.shiftKey || evt.altKey) {
        return;
      }
      evt.preventDefault();
      evt.stopPropagation();
      if (key === 'enter' || key === 'space') {
        if (self.isDisabled(self.activeDate)) {
          return;  // do nothing
        }
        $scope.select(self.activeDate);
        focusElement();
      } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
        $scope.toggleMode(key === 'up' ? 1 : -1);
        focusElement();
      } else {
        self.handleKeyDown(key, evt);
        self.refreshView();
      }
    };
  }
]).directive('datepicker', function () {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&'
    },
    require: [
      'datepicker',
      '?^ngModel'
    ],
    controller: 'DatepickerController',
    link: function (scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        datepickerCtrl.init(ngModelCtrl);
      }
    }
  };
}).directive('daypicker', [
  'dateFilter',
  function (dateFilter) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/datepicker/day.html',
      require: '^datepicker',
      link: function (scope, element, attrs, ctrl) {
        scope.showWeeks = ctrl.showWeeks;
        ctrl.step = { months: 1 };
        ctrl.element = element;
        var DAYS_IN_MONTH = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
          ];
        function getDaysInMonth(year, month) {
          return month === 1 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
        }
        function getDates(startDate, n) {
          var dates = new Array(n), current = new Date(startDate), i = 0;
          current.setHours(12);
          // Prevent repeated dates because of timezone bug
          while (i < n) {
            dates[i++] = new Date(current);
            current.setDate(current.getDate() + 1);
          }
          return dates;
        }
        ctrl._refreshView = function () {
          var year = ctrl.activeDate.getFullYear(), month = ctrl.activeDate.getMonth(), firstDayOfMonth = new Date(year, month, 1), difference = ctrl.startingDay - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference, firstDate = new Date(firstDayOfMonth);
          if (numDisplayedFromPreviousMonth > 0) {
            firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
          }
          // 42 is the number of days on a six-month calendar
          var days = getDates(firstDate, 42);
          for (var i = 0; i < 42; i++) {
            days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
              secondary: days[i].getMonth() !== month,
              uid: scope.uniqueId + '-' + i
            });
          }
          scope.labels = new Array(7);
          for (var j = 0; j < 7; j++) {
            scope.labels[j] = {
              abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
              full: dateFilter(days[j].date, 'EEEE')
            };
          }
          scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
          scope.rows = ctrl.split(days, 7);
          if (scope.showWeeks) {
            scope.weekNumbers = [];
            var weekNumber = getISO8601WeekNumber(scope.rows[0][0].date), numWeeks = scope.rows.length;
            while (scope.weekNumbers.push(weekNumber++) < numWeeks) {
            }
          }
        };
        ctrl.compare = function (date1, date2) {
          return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        };
        function getISO8601WeekNumber(date) {
          var checkDate = new Date(date);
          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
          // Thursday
          var time = checkDate.getTime();
          checkDate.setMonth(0);
          // Compare with Jan 1
          checkDate.setDate(1);
          return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        }
        ctrl.handleKeyDown = function (key, evt) {
          var date = ctrl.activeDate.getDate();
          if (key === 'left') {
            date = date - 1;  // up
          } else if (key === 'up') {
            date = date - 7;  // down
          } else if (key === 'right') {
            date = date + 1;  // down
          } else if (key === 'down') {
            date = date + 7;
          } else if (key === 'pageup' || key === 'pagedown') {
            var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
            ctrl.activeDate.setMonth(month, 1);
            date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
          } else if (key === 'home') {
            date = 1;
          } else if (key === 'end') {
            date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
          }
          ctrl.activeDate.setDate(date);
        };
        ctrl.refreshView();
      }
    };
  }
]).directive('monthpicker', [
  'dateFilter',
  function (dateFilter) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/datepicker/month.html',
      require: '^datepicker',
      link: function (scope, element, attrs, ctrl) {
        ctrl.step = { years: 1 };
        ctrl.element = element;
        ctrl._refreshView = function () {
          var months = new Array(12), year = ctrl.activeDate.getFullYear();
          for (var i = 0; i < 12; i++) {
            months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), { uid: scope.uniqueId + '-' + i });
          }
          scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
          scope.rows = ctrl.split(months, 3);
        };
        ctrl.compare = function (date1, date2) {
          return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
        };
        ctrl.handleKeyDown = function (key, evt) {
          var date = ctrl.activeDate.getMonth();
          if (key === 'left') {
            date = date - 1;  // up
          } else if (key === 'up') {
            date = date - 3;  // down
          } else if (key === 'right') {
            date = date + 1;  // down
          } else if (key === 'down') {
            date = date + 3;
          } else if (key === 'pageup' || key === 'pagedown') {
            var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? -1 : 1);
            ctrl.activeDate.setFullYear(year);
          } else if (key === 'home') {
            date = 0;
          } else if (key === 'end') {
            date = 11;
          }
          ctrl.activeDate.setMonth(date);
        };
        ctrl.refreshView();
      }
    };
  }
]).directive('yearpicker', [
  'dateFilter',
  function (dateFilter) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/datepicker/year.html',
      require: '^datepicker',
      link: function (scope, element, attrs, ctrl) {
        var range = ctrl.yearRange;
        ctrl.step = { years: range };
        ctrl.element = element;
        function getStartingYear(year) {
          return parseInt((year - 1) / range, 10) * range + 1;
        }
        ctrl._refreshView = function () {
          var years = new Array(range);
          for (var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++) {
            years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), { uid: scope.uniqueId + '-' + i });
          }
          scope.title = [
            years[0].label,
            years[range - 1].label
          ].join(' - ');
          scope.rows = ctrl.split(years, 5);
        };
        ctrl.compare = function (date1, date2) {
          return date1.getFullYear() - date2.getFullYear();
        };
        ctrl.handleKeyDown = function (key, evt) {
          var date = ctrl.activeDate.getFullYear();
          if (key === 'left') {
            date = date - 1;  // up
          } else if (key === 'up') {
            date = date - 5;  // down
          } else if (key === 'right') {
            date = date + 1;  // down
          } else if (key === 'down') {
            date = date + 5;
          } else if (key === 'pageup' || key === 'pagedown') {
            date += (key === 'pageup' ? -1 : 1) * ctrl.step.years;
          } else if (key === 'home') {
            date = getStartingYear(ctrl.activeDate.getFullYear());
          } else if (key === 'end') {
            date = getStartingYear(ctrl.activeDate.getFullYear()) + range - 1;
          }
          ctrl.activeDate.setFullYear(date);
        };
        ctrl.refreshView();
      }
    };
  }
]).constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false,
  showButtonBar: true
}).directive('datepickerPopup', [
  '$compile',
  '$parse',
  '$document',
  '$position',
  'dateFilter',
  'dateParser',
  'datepickerPopupConfig',
  function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        isOpen: '=?',
        currentText: '@',
        clearText: '@',
        closeText: '@',
        dateDisabled: '&'
      },
      link: function (scope, element, attrs, ngModel) {
        var dateFormat, closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection, appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
        scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
        scope.getText = function (key) {
          return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
        };
        attrs.$observe('datepickerPopup', function (value) {
          dateFormat = value || datepickerPopupConfig.datepickerPopup;
          ngModel.$render();
        });
        // popup element used to display calendar
        var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
        popupEl.attr({
          'ng-model': 'date',
          'ng-change': 'dateSelection()'
        });
        function cameltoDash(string) {
          return string.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }
        // datepicker element
        var datepickerEl = angular.element(popupEl.children()[0]);
        if (attrs.datepickerOptions) {
          angular.forEach(scope.$parent.$eval(attrs.datepickerOptions), function (value, option) {
            datepickerEl.attr(cameltoDash(option), value);
          });
        }
        angular.forEach([
          'minDate',
          'maxDate'
        ], function (key) {
          if (attrs[key]) {
            scope.$parent.$watch($parse(attrs[key]), function (value) {
              scope[key] = value;
            });
            datepickerEl.attr(cameltoDash(key), key);
          }
        });
        if (attrs.dateDisabled) {
          datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
        }
        function parseDate(viewValue) {
          if (!viewValue) {
            ngModel.$setValidity('date', true);
            return null;
          } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
            ngModel.$setValidity('date', true);
            return viewValue;
          } else if (angular.isString(viewValue)) {
            var date = dateParser.parse(viewValue, dateFormat) || new Date(viewValue);
            if (isNaN(date)) {
              ngModel.$setValidity('date', false);
              return undefined;
            } else {
              ngModel.$setValidity('date', true);
              return date;
            }
          } else {
            ngModel.$setValidity('date', false);
            return undefined;
          }
        }
        ngModel.$parsers.unshift(parseDate);
        // Inner change
        scope.dateSelection = function (dt) {
          if (angular.isDefined(dt)) {
            scope.date = dt;
          }
          ngModel.$setViewValue(scope.date);
          ngModel.$render();
          if (closeOnDateSelection) {
            scope.isOpen = false;
            element[0].focus();
          }
        };
        element.bind('input change keyup', function () {
          scope.$apply(function () {
            scope.date = ngModel.$modelValue;
          });
        });
        // Outter change
        ngModel.$render = function () {
          var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
          element.val(date);
          scope.date = parseDate(ngModel.$modelValue);
        };
        var documentClickBind = function (event) {
          if (scope.isOpen && event.target !== element[0]) {
            scope.$apply(function () {
              scope.isOpen = false;
            });
          }
        };
        var keydown = function (evt, noApply) {
          scope.keydown(evt);
        };
        element.bind('keydown', keydown);
        scope.keydown = function (evt) {
          if (evt.which === 27) {
            evt.preventDefault();
            evt.stopPropagation();
            scope.close();
          } else if (evt.which === 40 && !scope.isOpen) {
            scope.isOpen = true;
          }
        };
        scope.$watch('isOpen', function (value) {
          if (value) {
            scope.$broadcast('datepicker.focus');
            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
            scope.position.top = scope.position.top + element.prop('offsetHeight');
            $document.bind('click', documentClickBind);
          } else {
            $document.unbind('click', documentClickBind);
          }
        });
        scope.select = function (date) {
          if (date === 'today') {
            var today = new Date();
            if (angular.isDate(ngModel.$modelValue)) {
              date = new Date(ngModel.$modelValue);
              date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
            } else {
              date = new Date(today.setHours(0, 0, 0, 0));
            }
          }
          scope.dateSelection(date);
        };
        scope.close = function () {
          scope.isOpen = false;
          element[0].focus();
        };
        var $popup = $compile(popupEl)(scope);
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
        scope.$on('$destroy', function () {
          $popup.remove();
          element.unbind('keydown', keydown);
          $document.unbind('click', documentClickBind);
        });
      }
    };
  }
]).directive('datepickerPopupWrap', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link: function (scope, element, attrs) {
      element.bind('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});
angular.module('ui.bootstrap.dropdown', []).constant('dropdownConfig', { openClass: 'open' }).service('dropdownService', [
  '$document',
  function ($document) {
    var openScope = null;
    this.open = function (dropdownScope) {
      if (!openScope) {
        $document.bind('click', closeDropdown);
        $document.bind('keydown', escapeKeyBind);
      }
      if (openScope && openScope !== dropdownScope) {
        openScope.isOpen = false;
      }
      openScope = dropdownScope;
    };
    this.close = function (dropdownScope) {
      if (openScope === dropdownScope) {
        openScope = null;
        $document.unbind('click', closeDropdown);
        $document.unbind('keydown', escapeKeyBind);
      }
    };
    var closeDropdown = function (evt) {
      if (evt && evt.isDefaultPrevented()) {
        return;
      }
      openScope.$apply(function () {
        openScope.isOpen = false;
      });
    };
    var escapeKeyBind = function (evt) {
      if (evt.which === 27) {
        openScope.focusToggleElement();
        closeDropdown();
      }
    };
  }
]).controller('DropdownController', [
  '$scope',
  '$attrs',
  '$parse',
  'dropdownConfig',
  'dropdownService',
  '$animate',
  function ($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
    var self = this, scope = $scope.$new(),
      // create a child scope so we are not polluting original one
      openClass = dropdownConfig.openClass, getIsOpen, setIsOpen = angular.noop, toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
    this.init = function (element) {
      self.$element = element;
      if ($attrs.isOpen) {
        getIsOpen = $parse($attrs.isOpen);
        setIsOpen = getIsOpen.assign;
        $scope.$watch(getIsOpen, function (value) {
          scope.isOpen = !!value;
        });
      }
    };
    this.toggle = function (open) {
      return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    };
    // Allow other directives to watch status
    this.isOpen = function () {
      return scope.isOpen;
    };
    scope.focusToggleElement = function () {
      if (self.toggleElement) {
        self.toggleElement[0].focus();
      }
    };
    scope.$watch('isOpen', function (isOpen, wasOpen) {
      $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);
      if (isOpen) {
        scope.focusToggleElement();
        dropdownService.open(scope);
      } else {
        dropdownService.close(scope);
      }
      setIsOpen($scope, isOpen);
      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
        toggleInvoker($scope, { open: !!isOpen });
      }
    });
    $scope.$on('$locationChangeSuccess', function () {
      scope.isOpen = false;
    });
    $scope.$on('$destroy', function () {
      scope.$destroy();
    });
  }
]).directive('dropdown', function () {
  return {
    restrict: 'CA',
    controller: 'DropdownController',
    link: function (scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init(element);
    }
  };
}).directive('dropdownToggle', function () {
  return {
    restrict: 'CA',
    require: '?^dropdown',
    link: function (scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }
      dropdownCtrl.toggleElement = element;
      var toggleDropdown = function (event) {
        event.preventDefault();
        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function () {
            dropdownCtrl.toggle();
          });
        }
      };
      element.bind('click', toggleDropdown);
      // WAI-ARIA
      element.attr({
        'aria-haspopup': true,
        'aria-expanded': false
      });
      scope.$watch(dropdownCtrl.isOpen, function (isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });
      scope.$on('$destroy', function () {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});
angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition']).factory('$$stackedMap', function () {
  return {
    createNew: function () {
      var stack = [];
      return {
        add: function (key, value) {
          stack.push({
            key: key,
            value: value
          });
        },
        get: function (key) {
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              return stack[i];
            }
          }
        },
        keys: function () {
          var keys = [];
          for (var i = 0; i < stack.length; i++) {
            keys.push(stack[i].key);
          }
          return keys;
        },
        top: function () {
          return stack[stack.length - 1];
        },
        remove: function (key) {
          var idx = -1;
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              idx = i;
              break;
            }
          }
          return stack.splice(idx, 1)[0];
        },
        removeTop: function () {
          return stack.splice(stack.length - 1, 1)[0];
        },
        length: function () {
          return stack.length;
        }
      };
    }
  };
}).directive('modalBackdrop', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      link: function (scope) {
        scope.animate = false;
        //trigger CSS transitions
        $timeout(function () {
          scope.animate = true;
        });
      }
    };
  }
]).directive('modalWindow', [
  '$modalStack',
  '$timeout',
  function ($modalStack, $timeout) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: true,
      transclude: true,
      templateUrl: function (tElement, tAttrs) {
        return tAttrs.templateUrl || 'template/modal/window.html';
      },
      link: function (scope, element, attrs) {
        element.addClass(attrs.windowClass || '');
        scope.size = attrs.size;
        $timeout(function () {
          // trigger CSS transitions
          scope.animate = true;
          // focus a freshly-opened modal
          element[0].focus();
        });
        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };
      }
    };
  }
]).factory('$modalStack', [
  '$transition',
  '$timeout',
  '$document',
  '$compile',
  '$rootScope',
  '$$stackedMap',
  function ($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
    var OPENED_MODAL_CLASS = 'modal-open';
    var backdropDomEl, backdropScope;
    var openedWindows = $$stackedMap.createNew();
    var $modalStack = {};
    function backdropIndex() {
      var topBackdropIndex = -1;
      var opened = openedWindows.keys();
      for (var i = 0; i < opened.length; i++) {
        if (openedWindows.get(opened[i]).value.backdrop) {
          topBackdropIndex = i;
        }
      }
      return topBackdropIndex;
    }
    $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
      if (backdropScope) {
        backdropScope.index = newBackdropIndex;
      }
    });
    function removeModalWindow(modalInstance) {
      var body = $document.find('body').eq(0);
      var modalWindow = openedWindows.get(modalInstance).value;
      //clean up the stack
      openedWindows.remove(modalInstance);
      //remove window DOM element
      removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, function () {
        modalWindow.modalScope.$destroy();
        body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
        checkRemoveBackdrop();
      });
    }
    function checkRemoveBackdrop() {
      //remove backdrop if no longer needed
      if (backdropDomEl && backdropIndex() == -1) {
        var backdropScopeRef = backdropScope;
        removeAfterAnimate(backdropDomEl, backdropScope, 150, function () {
          backdropScopeRef.$destroy();
          backdropScopeRef = null;
        });
        backdropDomEl = undefined;
        backdropScope = undefined;
      }
    }
    function removeAfterAnimate(domEl, scope, emulateTime, done) {
      // Closing animation
      scope.animate = false;
      var transitionEndEventName = $transition.transitionEndEventName;
      if (transitionEndEventName) {
        // transition out
        var timeout = $timeout(afterAnimating, emulateTime);
        domEl.bind(transitionEndEventName, function () {
          $timeout.cancel(timeout);
          afterAnimating();
          scope.$apply();
        });
      } else {
        // Ensure this call is async
        $timeout(afterAnimating, 0);
      }
      function afterAnimating() {
        if (afterAnimating.done) {
          return;
        }
        afterAnimating.done = true;
        domEl.remove();
        if (done) {
          done();
        }
      }
    }
    $document.bind('keydown', function (evt) {
      var modal;
      if (evt.which === 27) {
        modal = openedWindows.top();
        if (modal && modal.value.keyboard) {
          evt.preventDefault();
          $rootScope.$apply(function () {
            $modalStack.dismiss(modal.key, 'escape key press');
          });
        }
      }
    });
    $modalStack.open = function (modalInstance, modal) {
      openedWindows.add(modalInstance, {
        deferred: modal.deferred,
        modalScope: modal.scope,
        backdrop: modal.backdrop,
        keyboard: modal.keyboard
      });
      var body = $document.find('body').eq(0), currBackdropIndex = backdropIndex();
      if (currBackdropIndex >= 0 && !backdropDomEl) {
        backdropScope = $rootScope.$new(true);
        backdropScope.index = currBackdropIndex;
        backdropDomEl = $compile('<div modal-backdrop></div>')(backdropScope);
        body.append(backdropDomEl);
      }
      var angularDomEl = angular.element('<div modal-window></div>');
      angularDomEl.attr({
        'template-url': modal.windowTemplateUrl,
        'window-class': modal.windowClass,
        'size': modal.size,
        'index': openedWindows.length() - 1,
        'animate': 'animate'
      }).html(modal.content);
      var modalDomEl = $compile(angularDomEl)(modal.scope);
      openedWindows.top().value.modalDomEl = modalDomEl;
      body.append(modalDomEl);
      body.addClass(OPENED_MODAL_CLASS);
    };
    $modalStack.close = function (modalInstance, result) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.resolve(result);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismiss = function (modalInstance, reason) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.reject(reason);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismissAll = function (reason) {
      var topModal = this.getTop();
      while (topModal) {
        this.dismiss(topModal.key, reason);
        topModal = this.getTop();
      }
    };
    $modalStack.getTop = function () {
      return openedWindows.top();
    };
    return $modalStack;
  }
]).provider('$modal', function () {
  var $modalProvider = {
      options: {
        backdrop: true,
        keyboard: true
      },
      $get: [
        '$injector',
        '$rootScope',
        '$q',
        '$http',
        '$templateCache',
        '$controller',
        '$modalStack',
        function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
          var $modal = {};
          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) : $http.get(options.templateUrl, { cache: $templateCache }).then(function (result) {
              return result.data;
            });
          }
          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }
          $modal.open = function (modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
                result: modalResultDeferred.promise,
                opened: modalOpenedDeferred.promise,
                close: function (result) {
                  $modalStack.close(modalInstance, result);
                },
                dismiss: function (reason) {
                  $modalStack.dismiss(modalInstance, reason);
                }
              };
            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }
            var templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;
              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;
              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });
                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
              }
              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size
              });
            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });
            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function () {
              modalOpenedDeferred.reject(false);
            });
            return modalInstance;
          };
          return $modal;
        }
      ]
    };
  return $modalProvider;
});
angular.module('ui.bootstrap.pagination', []).controller('PaginationController', [
  '$scope',
  '$attrs',
  '$parse',
  function ($scope, $attrs, $parse) {
    var self = this, ngModelCtrl = { $setViewValue: angular.noop },
      // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
    this.init = function (ngModelCtrl_, config) {
      ngModelCtrl = ngModelCtrl_;
      this.config = config;
      ngModelCtrl.$render = function () {
        self.render();
      };
      if ($attrs.itemsPerPage) {
        $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
          self.itemsPerPage = parseInt(value, 10);
          $scope.totalPages = self.calculateTotalPages();
        });
      } else {
        this.itemsPerPage = config.itemsPerPage;
      }
    };
    this.calculateTotalPages = function () {
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    };
    this.render = function () {
      $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
    };
    $scope.selectPage = function (page) {
      if ($scope.page !== page && page > 0 && page <= $scope.totalPages) {
        ngModelCtrl.$setViewValue(page);
        ngModelCtrl.$render();
      }
    };
    $scope.getText = function (key) {
      return $scope[key + 'Text'] || self.config[key + 'Text'];
    };
    $scope.noPrevious = function () {
      return $scope.page === 1;
    };
    $scope.noNext = function () {
      return $scope.page === $scope.totalPages;
    };
    $scope.$watch('totalItems', function () {
      $scope.totalPages = self.calculateTotalPages();
    });
    $scope.$watch('totalPages', function (value) {
      setNumPages($scope.$parent, value);
      // Readonly variable
      if ($scope.page > value) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  }
]).constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
}).directive('pagination', [
  '$parse',
  'paginationConfig',
  function ($parse, paginationConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        firstText: '@',
        previousText: '@',
        nextText: '@',
        lastText: '@'
      },
      require: [
        'pagination',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pagination.html',
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
        if (!ngModelCtrl) {
          return;  // do nothing if no ng-model
        }
        // Setup configuration parameters
        var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize, rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
        scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
        scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;
        paginationCtrl.init(ngModelCtrl, paginationConfig);
        if (attrs.maxSize) {
          scope.$parent.$watch($parse(attrs.maxSize), function (value) {
            maxSize = parseInt(value, 10);
            paginationCtrl.render();
          });
        }
        // Create page object used in template
        function makePage(number, text, isActive) {
          return {
            number: number,
            text: text,
            active: isActive
          };
        }
        function getPages(currentPage, totalPages) {
          var pages = [];
          // Default page limits
          var startPage = 1, endPage = totalPages;
          var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;
          // recompute if maxSize
          if (isMaxSized) {
            if (rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
              endPage = startPage + maxSize - 1;
              // Adjust if limit is exceeded
              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;
              // Adjust last page if limit is exceeded
              endPage = Math.min(startPage + maxSize - 1, totalPages);
            }
          }
          // Add page number links
          for (var number = startPage; number <= endPage; number++) {
            var page = makePage(number, number, number === currentPage);
            pages.push(page);
          }
          // Add links to move between page sets
          if (isMaxSized && !rotate) {
            if (startPage > 1) {
              var previousPageSet = makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
              var nextPageSet = makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }
          return pages;
        }
        var originalRender = paginationCtrl.render;
        paginationCtrl.render = function () {
          originalRender();
          if (scope.page > 0 && scope.page <= scope.totalPages) {
            scope.pages = getPages(scope.page, scope.totalPages);
          }
        };
      }
    };
  }
]).constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '\xab Previous',
  nextText: 'Next \xbb',
  align: true
}).directive('pager', [
  'pagerConfig',
  function (pagerConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        previousText: '@',
        nextText: '@'
      },
      require: [
        'pager',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pager.html',
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
        if (!ngModelCtrl) {
          return;  // do nothing if no ng-model
        }
        scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
        paginationCtrl.init(ngModelCtrl, pagerConfig);
      }
    };
  }
]);
/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).provider('$tooltip', function () {
  // The default options tooltip and popover.
  var defaultOptions = {
      placement: 'top',
      animation: true,
      popupDelay: 0
    };
  // Default hide triggers for each show trigger
  var triggerMap = {
      'mouseenter': 'mouseleave',
      'click': 'click',
      'focus': 'blur'
    };
  // The options specified to the provider globally.
  var globalOptions = {};
  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
  this.options = function (value) {
    angular.extend(globalOptions, value);
  };
  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
   */
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };
  /**
   * This is a helper function for translating camel-case to snake-case.
   */
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$parse',
    '$document',
    '$position',
    '$interpolate',
    function ($window, $compile, $timeout, $parse, $document, $position, $interpolate) {
      return function $tooltip(type, prefix, defaultTriggerShow) {
        var options = angular.extend({}, defaultOptions, globalOptions);
        /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
        function getTriggers(trigger) {
          var show = trigger || options.trigger || defaultTriggerShow;
          var hide = triggerMap[show] || show;
          return {
            show: show,
            hide: hide
          };
        }
        var directiveName = snake_case(type);
        var startSym = $interpolate.startSymbol();
        var endSym = $interpolate.endSymbol();
        var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'tt_title' + endSym + '" ' + 'content="' + startSym + 'tt_content' + endSym + '" ' + 'placement="' + startSym + 'tt_placement' + endSym + '" ' + 'animation="tt_animation" ' + 'is-open="tt_isOpen"' + '>' + '</div>';
        return {
          restrict: 'EA',
          scope: true,
          compile: function (tElem, tAttrs) {
            var tooltipLinker = $compile(template);
            return function link(scope, element, attrs) {
              var tooltip;
              var transitionTimeout;
              var popupTimeout;
              var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
              var triggers = getTriggers(undefined);
              var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
              var positionTooltip = function () {
                var ttPosition = $position.positionElements(element, tooltip, scope.tt_placement, appendToBody);
                ttPosition.top += 'px';
                ttPosition.left += 'px';
                // Now set the calculated positioning.
                tooltip.css(ttPosition);
              };
              // By default, the tooltip is not open.
              // TODO add ability to start tooltip opened
              scope.tt_isOpen = false;
              function toggleTooltipBind() {
                if (!scope.tt_isOpen) {
                  showTooltipBind();
                } else {
                  hideTooltipBind();
                }
              }
              // Show the tooltip with delay if specified, otherwise show it immediately
              function showTooltipBind() {
                if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                  return;
                }
                if (scope.tt_popupDelay) {
                  // Do nothing if the tooltip was already scheduled to pop-up.
                  // This happens if show is triggered multiple times before any hide is triggered.
                  if (!popupTimeout) {
                    popupTimeout = $timeout(show, scope.tt_popupDelay, false);
                    popupTimeout.then(function (reposition) {
                      reposition();
                    });
                  }
                } else {
                  show()();
                }
              }
              function hideTooltipBind() {
                scope.$apply(function () {
                  hide();
                });
              }
              // Show the tooltip popup element.
              function show() {
                popupTimeout = null;
                // If there is a pending remove transition, we must cancel it, lest the
                // tooltip be mysteriously removed.
                if (transitionTimeout) {
                  $timeout.cancel(transitionTimeout);
                  transitionTimeout = null;
                }
                // Don't show empty tooltips.
                if (!scope.tt_content) {
                  return angular.noop;
                }
                createTooltip();
                // Set the initial positioning.
                tooltip.css({
                  top: 0,
                  left: 0,
                  display: 'block'
                });
                // Now we add it to the DOM because need some info about it. But it's not 
                // visible yet anyway.
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
                positionTooltip();
                // And show the tooltip.
                scope.tt_isOpen = true;
                scope.$digest();
                // digest required as $apply is not called
                // Return positioning function as promise callback for correct
                // positioning after draw.
                return positionTooltip;
              }
              // Hide the tooltip popup element.
              function hide() {
                // First things first: we don't show it anymore.
                scope.tt_isOpen = false;
                //if tooltip is going to be shown after delay, we must cancel this
                $timeout.cancel(popupTimeout);
                popupTimeout = null;
                // And now we remove it from the DOM. However, if we have animation, we 
                // need to wait for it to expire beforehand.
                // FIXME: this is a placeholder for a port of the transitions library.
                if (scope.tt_animation) {
                  if (!transitionTimeout) {
                    transitionTimeout = $timeout(removeTooltip, 500);
                  }
                } else {
                  removeTooltip();
                }
              }
              function createTooltip() {
                // There can only be one tooltip element per directive shown at once.
                if (tooltip) {
                  removeTooltip();
                }
                tooltip = tooltipLinker(scope, function () {
                });
                // Get contents rendered into the tooltip
                scope.$digest();
              }
              function removeTooltip() {
                transitionTimeout = null;
                if (tooltip) {
                  tooltip.remove();
                  tooltip = null;
                }
              }
              /**
             * Observe the relevant attributes.
             */
              attrs.$observe(type, function (val) {
                scope.tt_content = val;
                if (!val && scope.tt_isOpen) {
                  hide();
                }
              });
              attrs.$observe(prefix + 'Title', function (val) {
                scope.tt_title = val;
              });
              attrs.$observe(prefix + 'Placement', function (val) {
                scope.tt_placement = angular.isDefined(val) ? val : options.placement;
              });
              attrs.$observe(prefix + 'PopupDelay', function (val) {
                var delay = parseInt(val, 10);
                scope.tt_popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              });
              var unregisterTriggers = function () {
                element.unbind(triggers.show, showTooltipBind);
                element.unbind(triggers.hide, hideTooltipBind);
              };
              attrs.$observe(prefix + 'Trigger', function (val) {
                unregisterTriggers();
                triggers = getTriggers(val);
                if (triggers.show === triggers.hide) {
                  element.bind(triggers.show, toggleTooltipBind);
                } else {
                  element.bind(triggers.show, showTooltipBind);
                  element.bind(triggers.hide, hideTooltipBind);
                }
              });
              var animation = scope.$eval(attrs[prefix + 'Animation']);
              scope.tt_animation = angular.isDefined(animation) ? !!animation : options.animation;
              attrs.$observe(prefix + 'AppendToBody', function (val) {
                appendToBody = angular.isDefined(val) ? $parse(val)(scope) : appendToBody;
              });
              // if a tooltip is attached to <body> we need to remove it on
              // location change as its parent scope will probably not be destroyed
              // by the change.
              if (appendToBody) {
                scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                  if (scope.tt_isOpen) {
                    hide();
                  }
                });
              }
              // Make sure tooltip is destroyed and removed.
              scope.$on('$destroy', function onDestroyTooltip() {
                $timeout.cancel(transitionTimeout);
                $timeout.cancel(popupTimeout);
                unregisterTriggers();
                removeTooltip();
              });
            };
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]);
/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('popover', 'popover', 'click');
  }
]);
angular.module('ui.bootstrap.progressbar', []).constant('progressConfig', {
  animate: true,
  max: 100
}).controller('ProgressController', [
  '$scope',
  '$attrs',
  'progressConfig',
  function ($scope, $attrs, progressConfig) {
    var self = this, animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
    this.bars = [];
    $scope.max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max;
    this.addBar = function (bar, element) {
      if (!animate) {
        element.css({ 'transition': 'none' });
      }
      this.bars.push(bar);
      bar.$watch('value', function (value) {
        bar.percent = +(100 * value / $scope.max).toFixed(2);
      });
      bar.$on('$destroy', function () {
        element = null;
        self.removeBar(bar);
      });
    };
    this.removeBar = function (bar) {
      this.bars.splice(this.bars.indexOf(bar), 1);
    };
  }
]).directive('progress', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    require: 'progress',
    scope: {},
    templateUrl: 'template/progressbar/progress.html'
  };
}).directive('bar', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    require: '^progress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/bar.html',
    link: function (scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element);
    }
  };
}).directive('progressbar', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/progressbar.html',
    link: function (scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]));
    }
  };
});
angular.module('ui.bootstrap.rating', []).constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
}).controller('RatingController', [
  '$scope',
  '$attrs',
  'ratingConfig',
  function ($scope, $attrs, ratingConfig) {
    var ngModelCtrl = { $setViewValue: angular.noop };
    this.init = function (ngModelCtrl_) {
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = this.render;
      this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
      this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
      var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
      $scope.range = this.buildTemplateObjects(ratingStates);
    };
    this.buildTemplateObjects = function (states) {
      for (var i = 0, n = states.length; i < n; i++) {
        states[i] = angular.extend({ index: i }, {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        }, states[i]);
      }
      return states;
    };
    $scope.rate = function (value) {
      if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
        ngModelCtrl.$setViewValue(value);
        ngModelCtrl.$render();
      }
    };
    $scope.enter = function (value) {
      if (!$scope.readonly) {
        $scope.value = value;
      }
      $scope.onHover({ value: value });
    };
    $scope.reset = function () {
      $scope.value = ngModelCtrl.$viewValue;
      $scope.onLeave();
    };
    $scope.onKeydown = function (evt) {
      if (/(37|38|39|40)/.test(evt.which)) {
        evt.preventDefault();
        evt.stopPropagation();
        $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
      }
    };
    this.render = function () {
      $scope.value = ngModelCtrl.$viewValue;
    };
  }
]).directive('rating', function () {
  return {
    restrict: 'EA',
    require: [
      'rating',
      'ngModel'
    ],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true,
    link: function (scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        ratingCtrl.init(ngModelCtrl);
      }
    }
  };
});
/**
 * @ngdoc overview
 * @name ui.bootstrap.tabs
 *
 * @description
 * AngularJS version of the tabs directive.
 */
angular.module('ui.bootstrap.tabs', []).controller('TabsetController', [
  '$scope',
  function TabsetCtrl($scope) {
    var ctrl = this, tabs = ctrl.tabs = $scope.tabs = [];
    ctrl.select = function (selectedTab) {
      angular.forEach(tabs, function (tab) {
        if (tab.active && tab !== selectedTab) {
          tab.active = false;
          tab.onDeselect();
        }
      });
      selectedTab.active = true;
      selectedTab.onSelect();
    };
    ctrl.addTab = function addTab(tab) {
      tabs.push(tab);
      // we can't run the select function on the first tab
      // since that would select it twice
      if (tabs.length === 1) {
        tab.active = true;
      } else if (tab.active) {
        ctrl.select(tab);
      }
    };
    ctrl.removeTab = function removeTab(tab) {
      var index = tabs.indexOf(tab);
      //Select a new tab if the tab to be removed is selected
      if (tab.active && tabs.length > 1) {
        //If this is the last tab, select the previous tab. else, the next tab.
        var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
        ctrl.select(tabs[newActiveIndex]);
      }
      tabs.splice(index, 1);
    };
  }
]).directive('tabset', function () {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: { type: '@' },
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function (scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
}).directive('tab', [
  '$parse',
  function ($parse) {
    return {
      require: '^tabset',
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/tabs/tab.html',
      transclude: true,
      scope: {
        active: '=?',
        heading: '@',
        onSelect: '&select',
        onDeselect: '&deselect'
      },
      controller: function () {
      },
      compile: function (elm, attrs, transclude) {
        return function postLink(scope, elm, attrs, tabsetCtrl) {
          scope.$watch('active', function (active) {
            if (active) {
              tabsetCtrl.select(scope);
            }
          });
          scope.disabled = false;
          if (attrs.disabled) {
            scope.$parent.$watch($parse(attrs.disabled), function (value) {
              scope.disabled = !!value;
            });
          }
          scope.select = function () {
            if (!scope.disabled) {
              scope.active = true;
            }
          };
          tabsetCtrl.addTab(scope);
          scope.$on('$destroy', function () {
            tabsetCtrl.removeTab(scope);
          });
          //We need to transclude later, once the content container is ready.
          //when this link happens, we're inside a tab heading.
          scope.$transcludeFn = transclude;
        };
      }
    };
  }
]).directive('tabHeadingTransclude', [function () {
    return {
      restrict: 'A',
      require: '^tab',
      link: function (scope, elm, attrs, tabCtrl) {
        scope.$watch('headingElement', function updateHeadingElement(heading) {
          if (heading) {
            elm.html('');
            elm.append(heading);
          }
        });
      }
    };
  }]).directive('tabContentTransclude', function () {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function (scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);
      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function (contents) {
        angular.forEach(contents, function (node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName && (node.hasAttribute('tab-heading') || node.hasAttribute('data-tab-heading') || node.tagName.toLowerCase() === 'tab-heading' || node.tagName.toLowerCase() === 'data-tab-heading');
  }
});
;
angular.module('ui.bootstrap.timepicker', []).constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: null,
  readonlyInput: false,
  mousewheel: true
}).controller('TimepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$log',
  '$locale',
  'timepickerConfig',
  function ($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
    var selected = new Date(), ngModelCtrl = { $setViewValue: angular.noop },
      // nullModelCtrl
      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
    this.init = function (ngModelCtrl_, inputs) {
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = this.render;
      var hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1);
      var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
      if (mousewheel) {
        this.setupMousewheelEvents(hoursInputEl, minutesInputEl);
      }
      $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
      this.setupInputEvents(hoursInputEl, minutesInputEl);
    };
    var hourStep = timepickerConfig.hourStep;
    if ($attrs.hourStep) {
      $scope.$parent.$watch($parse($attrs.hourStep), function (value) {
        hourStep = parseInt(value, 10);
      });
    }
    var minuteStep = timepickerConfig.minuteStep;
    if ($attrs.minuteStep) {
      $scope.$parent.$watch($parse($attrs.minuteStep), function (value) {
        minuteStep = parseInt(value, 10);
      });
    }
    // 12H / 24H mode
    $scope.showMeridian = timepickerConfig.showMeridian;
    if ($attrs.showMeridian) {
      $scope.$parent.$watch($parse($attrs.showMeridian), function (value) {
        $scope.showMeridian = !!value;
        if (ngModelCtrl.$error.time) {
          // Evaluate from template
          var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
          if (angular.isDefined(hours) && angular.isDefined(minutes)) {
            selected.setHours(hours);
            refresh();
          }
        } else {
          updateTemplate();
        }
      });
    }
    // Get $scope.hours in 24H mode if valid
    function getHoursFromTemplate() {
      var hours = parseInt($scope.hours, 10);
      var valid = $scope.showMeridian ? hours > 0 && hours < 13 : hours >= 0 && hours < 24;
      if (!valid) {
        return undefined;
      }
      if ($scope.showMeridian) {
        if (hours === 12) {
          hours = 0;
        }
        if ($scope.meridian === meridians[1]) {
          hours = hours + 12;
        }
      }
      return hours;
    }
    function getMinutesFromTemplate() {
      var minutes = parseInt($scope.minutes, 10);
      return minutes >= 0 && minutes < 60 ? minutes : undefined;
    }
    function pad(value) {
      return angular.isDefined(value) && value.toString().length < 2 ? '0' + value : value;
    }
    // Respond on mousewheel spin
    this.setupMousewheelEvents = function (hoursInputEl, minutesInputEl) {
      var isScrollingUp = function (e) {
        if (e.originalEvent) {
          e = e.originalEvent;
        }
        //pick correct delta variable depending on event
        var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
        return e.detail || delta > 0;
      };
      hoursInputEl.bind('mousewheel wheel', function (e) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
        e.preventDefault();
      });
      minutesInputEl.bind('mousewheel wheel', function (e) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
        e.preventDefault();
      });
    };
    this.setupInputEvents = function (hoursInputEl, minutesInputEl) {
      if ($scope.readonlyInput) {
        $scope.updateHours = angular.noop;
        $scope.updateMinutes = angular.noop;
        return;
      }
      var invalidate = function (invalidHours, invalidMinutes) {
        ngModelCtrl.$setViewValue(null);
        ngModelCtrl.$setValidity('time', false);
        if (angular.isDefined(invalidHours)) {
          $scope.invalidHours = invalidHours;
        }
        if (angular.isDefined(invalidMinutes)) {
          $scope.invalidMinutes = invalidMinutes;
        }
      };
      $scope.updateHours = function () {
        var hours = getHoursFromTemplate();
        if (angular.isDefined(hours)) {
          selected.setHours(hours);
          refresh('h');
        } else {
          invalidate(true);
        }
      };
      hoursInputEl.bind('blur', function (e) {
        if (!$scope.invalidHours && $scope.hours < 10) {
          $scope.$apply(function () {
            $scope.hours = pad($scope.hours);
          });
        }
      });
      $scope.updateMinutes = function () {
        var minutes = getMinutesFromTemplate();
        if (angular.isDefined(minutes)) {
          selected.setMinutes(minutes);
          refresh('m');
        } else {
          invalidate(undefined, true);
        }
      };
      minutesInputEl.bind('blur', function (e) {
        if (!$scope.invalidMinutes && $scope.minutes < 10) {
          $scope.$apply(function () {
            $scope.minutes = pad($scope.minutes);
          });
        }
      });
    };
    this.render = function () {
      var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
      if (isNaN(date)) {
        ngModelCtrl.$setValidity('time', false);
        $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
      } else {
        if (date) {
          selected = date;
        }
        makeValid();
        updateTemplate();
      }
    };
    // Call internally when we know that model is valid.
    function refresh(keyboardChange) {
      makeValid();
      ngModelCtrl.$setViewValue(new Date(selected));
      updateTemplate(keyboardChange);
    }
    function makeValid() {
      ngModelCtrl.$setValidity('time', true);
      $scope.invalidHours = false;
      $scope.invalidMinutes = false;
    }
    function updateTemplate(keyboardChange) {
      var hours = selected.getHours(), minutes = selected.getMinutes();
      if ($scope.showMeridian) {
        hours = hours === 0 || hours === 12 ? 12 : hours % 12;  // Convert 24 to 12 hour system
      }
      $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
      $scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
    function addMinutes(minutes) {
      var dt = new Date(selected.getTime() + minutes * 60000);
      selected.setHours(dt.getHours(), dt.getMinutes());
      refresh();
    }
    $scope.incrementHours = function () {
      addMinutes(hourStep * 60);
    };
    $scope.decrementHours = function () {
      addMinutes(-hourStep * 60);
    };
    $scope.incrementMinutes = function () {
      addMinutes(minuteStep);
    };
    $scope.decrementMinutes = function () {
      addMinutes(-minuteStep);
    };
    $scope.toggleMeridian = function () {
      addMinutes(12 * 60 * (selected.getHours() < 12 ? 1 : -1));
    };
  }
]).directive('timepicker', function () {
  return {
    restrict: 'EA',
    require: [
      'timepicker',
      '?^ngModel'
    ],
    controller: 'TimepickerController',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function (scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
});
angular.module('ui.bootstrap.typeahead', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).factory('typeaheadParser', [
  '$parse',
  function ($parse) {
    //                      00000111000000000000022200000000000000003333333333333330000000000044000
    var TYPEAHEAD_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
      parse: function (input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' + ' but got "' + input + '".');
        }
        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$timeout',
  '$document',
  '$position',
  'typeaheadParser',
  function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {
    var HOT_KEYS = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (originalScope, element, attrs, modelCtrl) {
        //SUPPORTED ATTRIBUTES (OPTIONS)
        //minimal no of characters that needs to be entered before typeahead kicks-in
        var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
        //minimal wait time after last character typed before typehead kicks-in
        var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
        //should it restrict model values to the ones selected from the popup only?
        var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
        //binding to a variable that indicates if matches are being retrieved asynchronously
        var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
        //a callback executed when a match is selected
        var onSelectCallback = $parse(attrs.typeaheadOnSelect);
        var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
        var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
        //INTERNAL VARIABLES
        //model setter executed upon match selection
        var $setModelValue = $parse(attrs.ngModel).assign;
        //expressions used by typeahead
        var parserResult = typeaheadParser.parse(attrs.typeahead);
        var hasFocus;
        //create a child scope for the typeahead directive so we are not polluting original scope
        //with typeahead-specific data (matches, query etc.)
        var scope = originalScope.$new();
        originalScope.$on('$destroy', function () {
          scope.$destroy();
        });
        // WAI-ARIA
        var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
        element.attr({
          'aria-autocomplete': 'list',
          'aria-expanded': false,
          'aria-owns': popupId
        });
        //pop-up element used to display matches
        var popUpEl = angular.element('<div typeahead-popup></div>');
        popUpEl.attr({
          id: popupId,
          matches: 'matches',
          active: 'activeIdx',
          select: 'select(activeIdx)',
          query: 'query',
          position: 'position'
        });
        //custom item template
        if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
          popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
        }
        var resetMatches = function () {
          scope.matches = [];
          scope.activeIdx = -1;
          element.attr('aria-expanded', false);
        };
        var getMatchId = function (index) {
          return popupId + '-option-' + index;
        };
        // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
        // This attribute is added or removed automatically when the `activeIdx` changes.
        scope.$watch('activeIdx', function (index) {
          if (index < 0) {
            element.removeAttr('aria-activedescendant');
          } else {
            element.attr('aria-activedescendant', getMatchId(index));
          }
        });
        var getMatchesAsync = function (inputValue) {
          var locals = { $viewValue: inputValue };
          isLoadingSetter(originalScope, true);
          $q.when(parserResult.source(originalScope, locals)).then(function (matches) {
            //it might happen that several async queries were in progress if a user were typing fast
            //but we are interested only in responses that correspond to the current view value
            var onCurrentRequest = inputValue === modelCtrl.$viewValue;
            if (onCurrentRequest && hasFocus) {
              if (matches.length > 0) {
                scope.activeIdx = 0;
                scope.matches.length = 0;
                //transform labels
                for (var i = 0; i < matches.length; i++) {
                  locals[parserResult.itemName] = matches[i];
                  scope.matches.push({
                    id: getMatchId(i),
                    label: parserResult.viewMapper(scope, locals),
                    model: matches[i]
                  });
                }
                scope.query = inputValue;
                //position pop-up with matches - we need to re-calculate its position each time we are opening a window
                //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
                //due to other elements being rendered
                scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                scope.position.top = scope.position.top + element.prop('offsetHeight');
                element.attr('aria-expanded', true);
              } else {
                resetMatches();
              }
            }
            if (onCurrentRequest) {
              isLoadingSetter(originalScope, false);
            }
          }, function () {
            resetMatches();
            isLoadingSetter(originalScope, false);
          });
        };
        resetMatches();
        //we need to propagate user's query so we can higlight matches
        scope.query = undefined;
        //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later 
        var timeoutPromise;
        //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
        //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
        modelCtrl.$parsers.unshift(function (inputValue) {
          hasFocus = true;
          if (inputValue && inputValue.length >= minSearch) {
            if (waitTime > 0) {
              if (timeoutPromise) {
                $timeout.cancel(timeoutPromise);  //cancel previous timeout
              }
              timeoutPromise = $timeout(function () {
                getMatchesAsync(inputValue);
              }, waitTime);
            } else {
              getMatchesAsync(inputValue);
            }
          } else {
            isLoadingSetter(originalScope, false);
            resetMatches();
          }
          if (isEditable) {
            return inputValue;
          } else {
            if (!inputValue) {
              // Reset in case user had typed something previously.
              modelCtrl.$setValidity('editable', true);
              return inputValue;
            } else {
              modelCtrl.$setValidity('editable', false);
              return undefined;
            }
          }
        });
        modelCtrl.$formatters.push(function (modelValue) {
          var candidateViewValue, emptyViewValue;
          var locals = {};
          if (inputFormatter) {
            locals['$model'] = modelValue;
            return inputFormatter(originalScope, locals);
          } else {
            //it might happen that we don't have enough info to properly render input value
            //we need to check for this situation and simply return model value if we can't apply custom formatting
            locals[parserResult.itemName] = modelValue;
            candidateViewValue = parserResult.viewMapper(originalScope, locals);
            locals[parserResult.itemName] = undefined;
            emptyViewValue = parserResult.viewMapper(originalScope, locals);
            return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
          }
        });
        scope.select = function (activeIdx) {
          //called from within the $digest() cycle
          var locals = {};
          var model, item;
          locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
          model = parserResult.modelMapper(originalScope, locals);
          $setModelValue(originalScope, model);
          modelCtrl.$setValidity('editable', true);
          onSelectCallback(originalScope, {
            $item: item,
            $model: model,
            $label: parserResult.viewMapper(originalScope, locals)
          });
          resetMatches();
          //return focus to the input element if a match was selected via a mouse click event
          // use timeout to avoid $rootScope:inprog error
          $timeout(function () {
            element[0].focus();
          }, 0, false);
        };
        //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
        element.bind('keydown', function (evt) {
          //typeahead is open and an "interesting" key was pressed
          if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
            return;
          }
          evt.preventDefault();
          if (evt.which === 40) {
            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
            scope.$digest();
          } else if (evt.which === 38) {
            scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
            scope.$digest();
          } else if (evt.which === 13 || evt.which === 9) {
            scope.$apply(function () {
              scope.select(scope.activeIdx);
            });
          } else if (evt.which === 27) {
            evt.stopPropagation();
            resetMatches();
            scope.$digest();
          }
        });
        element.bind('blur', function (evt) {
          hasFocus = false;
        });
        // Keep reference to click handler to unbind it.
        var dismissClickHandler = function (evt) {
          if (element[0] !== evt.target) {
            resetMatches();
            scope.$digest();
          }
        };
        $document.bind('click', dismissClickHandler);
        originalScope.$on('$destroy', function () {
          $document.unbind('click', dismissClickHandler);
        });
        var $popup = $compile(popUpEl)(scope);
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: true,
    templateUrl: 'template/typeahead/typeahead-popup.html',
    link: function (scope, element, attrs) {
      scope.templateUrl = attrs.templateUrl;
      scope.isOpen = function () {
        return scope.matches.length > 0;
      };
      scope.isActive = function (matchIdx) {
        return scope.active == matchIdx;
      };
      scope.selectActive = function (matchIdx) {
        scope.active = matchIdx;
      };
      scope.selectMatch = function (activeIdx) {
        scope.select({ activeIdx: activeIdx });
      };
    }
  };
}).directive('typeaheadMatch', [
  '$http',
  '$templateCache',
  '$compile',
  '$parse',
  function ($http, $templateCache, $compile, $parse) {
    return {
      restrict: 'EA',
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $http.get(tplUrl, { cache: $templateCache }).success(function (tplContent) {
          element.replaceWith($compile(tplContent.trim())(scope));
        });
      }
    };
  }
]).filter('typeaheadHighlight', function () {
  function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (matchItem, query) {
    return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
  };
});
angular.module('template/accordion/accordion-group.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/accordion/accordion-group.html', '<div class="panel panel-default">\n' + '  <div class="panel-heading">\n' + '    <h4 class="panel-title">\n' + '      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n' + '    </h4>\n' + '  </div>\n' + '  <div class="panel-collapse" collapse="!isOpen">\n' + '\t  <div ng-custom-scroll class="panel-body" ng-transclude></div>\n' + '  </div>\n' + '</div>');
  }
]);
angular.module('template/accordion/accordion.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/accordion/accordion.html', '<div class="panel-group" ng-transclude></div>');
  }
]);
angular.module('template/alert/alert.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/alert/alert.html', '<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n' + '    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n' + '        <span aria-hidden="true">&times;</span>\n' + '        <span class="sr-only">Close</span>\n' + '    </button>\n' + '    <div ng-transclude></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/carousel/carousel.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/carousel/carousel.html', '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n' + '    <ol class="carousel-indicators" ng-show="slides.length > 1">\n' + '        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n' + '    </ol>\n' + '    <div class="carousel-inner" ng-transclude></div>\n' + '    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n' + '    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n' + '</div>\n' + '');
  }
]);
angular.module('template/carousel/slide.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/carousel/slide.html', '<div ng-class="{\n' + '    \'active\': leaving || (active && !entering),\n' + '    \'prev\': (next || active) && direction==\'prev\',\n' + '    \'next\': (next || active) && direction==\'next\',\n' + '    \'right\': direction==\'prev\',\n' + '    \'left\': direction==\'next\'\n' + '  }" class="item text-center" ng-transclude></div>\n' + '');
  }
]);
angular.module('template/datepicker/datepicker.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/datepicker.html', '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n' + '  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n' + '  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n' + '  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n' + '</div>');
  }
]);
angular.module('template/datepicker/day.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/day.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + '  <thead>\n' + '    <tr>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + '    </tr>\n' + '    <tr>\n' + '      <th ng-show="showWeeks" class="text-center"></th>\n' + '      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n' + '    </tr>\n' + '  </thead>\n' + '  <tbody>\n' + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n' + '      </td>\n' + '    </tr>\n' + '  </tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/datepicker/month.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/month.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + '  <thead>\n' + '    <tr>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + '    </tr>\n' + '  </thead>\n' + '  <tbody>\n' + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n' + '      </td>\n' + '    </tr>\n' + '  </tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/datepicker/popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/popup.html', '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n' + '\t<li ng-transclude></li>\n' + '\t<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n' + '\t\t<span class="btn-group">\n' + '\t\t\t<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n' + '\t\t\t<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n' + '\t\t</span>\n' + '\t\t<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n' + '\t</li>\n' + '</ul>\n' + '');
  }
]);
angular.module('template/datepicker/year.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/year.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + '  <thead>\n' + '    <tr>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + '    </tr>\n' + '  </thead>\n' + '  <tbody>\n' + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n' + '      </td>\n' + '    </tr>\n' + '  </tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/modal/backdrop.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/backdrop.html', '<div class="modal-backdrop fade"\n' + '     ng-class="{in: animate}"\n' + '     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n' + '></div>\n' + '');
  }
]);
angular.module('template/modal/window.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/window.html', '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n' + '    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n' + '</div>');
  }
]);
angular.module('template/pagination/pager.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/pagination/pager.html', '<ul class="pager">\n' + '  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n' + '  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n' + '</ul>');
  }
]);
angular.module('template/pagination/pagination.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/pagination/pagination.html', '<ul class="pagination">\n' + '  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n' + '  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n' + '  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n' + '  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n' + '  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n' + '</ul>');
  }
]);
angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" ng-bind="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/popover/popover.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/popover/popover.html', '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="arrow"></div>\n' + '\n' + '  <div class="popover-inner">\n' + '      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n' + '      <div class="popover-content" ng-bind="content"></div>\n' + '  </div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/progressbar/bar.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/bar.html', '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>');
  }
]);
angular.module('template/progressbar/progress.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/progress.html', '<div class="progress" ng-transclude></div>');
  }
]);
angular.module('template/progressbar/progressbar.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/progressbar.html', '<div class="progress">\n' + '  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n' + '</div>');
  }
]);
angular.module('template/rating/rating.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/rating/rating.html', '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n' + '    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n' + '        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n' + '    </i>\n' + '</span>');
  }
]);
angular.module('template/tabs/tab.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tab.html', '<li ng-class="{active: active, disabled: disabled}">\n' + '  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n' + '</li>\n' + '');
  }
]);
angular.module('template/tabs/tabset-titles.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tabset-titles.html', '<ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical}">\n' + '</ul>\n' + '');
  }
]);
angular.module('template/tabs/tabset.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tabset.html', '\n' + '<div>\n' + '  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n' + '  <div class="tab-content">\n' + '    <div class="tab-pane" \n' + '         ng-repeat="tab in tabs" \n' + '         ng-class="{active: tab.active}"\n' + '         tab-content-transclude="tab">\n' + '    </div>\n' + '  </div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/timepicker/timepicker.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/timepicker/timepicker.html', '<table>\n' + '\t<tbody>\n' + '\t\t<tr class="text-center">\n' + '\t\t\t<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n' + '\t\t\t<td>&nbsp;</td>\n' + '\t\t\t<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n' + '\t\t\t<td ng-show="showMeridian"></td>\n' + '\t\t</tr>\n' + '\t\t<tr>\n' + '\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n' + '\t\t\t\t<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n' + '\t\t\t</td>\n' + '\t\t\t<td>:</td>\n' + '\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n' + '\t\t\t\t<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n' + '\t\t\t</td>\n' + '\t\t\t<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n' + '\t\t</tr>\n' + '\t\t<tr class="text-center">\n' + '\t\t\t<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n' + '\t\t\t<td>&nbsp;</td>\n' + '\t\t\t<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n' + '\t\t\t<td ng-show="showMeridian"></td>\n' + '\t\t</tr>\n' + '\t</tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/typeahead/typeahead-match.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-match.html', '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
  }
]);
angular.module('template/typeahead/typeahead-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-popup.html', '<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n' + '    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n' + '        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n' + '    </li>\n' + '</ul>');
  }
]);