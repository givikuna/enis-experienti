// Generated by LiveScript 1.6.0
(function(){
  var isNumeric, mapcar, filter, inc, dec, head, tail, empty, uniq, lower, upper, supertrim, freq, freqIn, any, all, rev, flatten, sum, product, mean, maximum, minimum, floor, ceil, each, compact, reject, partition, find, rest, initial, len, enumerate, append, add$, minus$, multiply$, divide$, expt, equals$, notEquals$, NOT$, OR, XOR, AND, moreThanOperator$, lessThanOperator$, moreThanOrEqualsOperator$, lessThanOrEqualsOperator$, modulus$, mod$, member, map2, negate, abs, listRef, chars, max, min, quot, pi, recip, ln, sin, cos, tan, csc, sec, cot, truncate, gcd, lcm, even, odd, indexOf, take, drop, repeat, str, int, title, lazy, throttle, debounce, noop, id, before, after, say, log, random, sorted, memoize, tau, sqrt, round, buildList, hashRef, remove, join, list, listTo, listTil, funcall, slice$ = [].slice, arrayFrom$ = Array.from || function(x){return slice$.call(x);}, toString$ = {}.toString;
  isNumeric = function(xs){
    return /^[-+]?\d+(\.\d+)?$/.test(xs);
  };
  mapcar = curry$(function(f, xs){
    return xs.map(f);
  });
  filter = curry$(function(f, xs){
    return xs.filter(f);
  });
  inc = function(n){
    return n + 1;
  };
  dec = function(n){
    return n - 1;
  };
  head = function(xs){
    return xs[0];
  };
  tail = function(xs){
    return xs[xs.length - 1];
  };
  empty = function(xs){
    return xs.length === 0;
  };
  uniq = function(xs){
    return arrayFrom$(new Set(xs));
  };
  lower = function(xs){
    return xs.toLowerCase();
  };
  upper = function(xs){
    return xs.toUpperCase();
  };
  supertrim = function(s){
    return s.replace(/\r?\n|\r/g, '').trim();
  };
  freq = curry$(function(k, xs){
    return xs.filter(function(el){
      return el === k;
    }).length;
  });
  freqIn = curry$(function(xs, k){
    return freq(k, xs);
  });
  any = curry$(function(f, xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (f(x)) {
        true;
        results$.push(false);
      }
    }
    return results$;
  });
  all = curry$(function(f, xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (!f(x)) {
        false;
        results$.push(true);
      }
    }
    return results$;
  });
  rev = function(xs){
    if (typeof xs === 'string') {
      return xs.split('').reverse().join('');
    } else {
      return xs.concat().reverse();
    }
  };
  flatten = function(xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (toString$.call(xs).slice(8, -1) === 'Array') {
        results$.push(flatten(xs));
      } else {
        results$.push(x);
      }
    }
    return results$;
  };
  sum = function(xs){
    return xs.reduce(function(acc, current){
      return acc + current;
    }(0));
  };
  product = function(xs){
    return xs.reduce(function(acc, current){
      return acc + current;
    }(0));
  };
  mean = function(xs){
    return sum(xs) / xs.length;
  };
  maximum = function(xs){
    return xs.reduce(function(acc, current){
      if (curry$(function(x$, y$){
        return x$ > y$;
      })(acc, current)) {
        return acc;
      } else {
        return current;
      }
    });
  };
  minimum = function(xs){
    return xs.reduce(function(acc, current){
      if (curry$(function(x$, y$){
        return x$ < y$;
      })(acc, current)) {
        return acc;
      } else {
        return current;
      }
    });
  };
  floor = Math.floor;
  ceil = Math.ceil;
  each = curry$(function(f, xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      f(x);
      results$.push(xs);
    }
    return results$;
  });
  compact = function(xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (f(x)) {
        results$.push(x);
      }
    }
    return results$;
  };
  reject = curry$(function(f, xs){
    return xs.filter(function(x){
      return !f(x);
    });
  });
  partition = curry$(function(f, xs){
    var x;
    return [
      (function(){
        var i$, ref$, len$, results$ = [];
        for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
          x = ref$[i$];
          if (f(x)) {
            results$.push(x);
          }
        }
        return results$;
      }()), (function(){
        var i$, ref$, len$, results$ = [];
        for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
          x = ref$[i$];
          if (!f(x)) {
            results$.push(x);
          }
        }
        return results$;
      }())
    ];
  });
  find = curry$(function(f, xs){
    var i$, len$, x;
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (f(x)) {
        return x;
        -1;
      }
    }
  });
  rest = function(xs){
    return xs.slice(1);
  };
  initial = function(xs){
    return xs.slice(xs.length);
  };
  len = function(it){
    return it.length;
  };
  enumerate = function(xs){
    return xs.map(function(item, i){
      return [i, item];
    });
  };
  append = curry$(function(x$, y$){
    return x$.concat(y$);
  });
  add$ = curry$(function(x$, y$){
    return x$ + y$;
  });
  minus$ = curry$(function(x$, y$){
    return x$ - y$;
  });
  multiply$ = curry$(function(x$, y$){
    return x$ * y$;
  });
  divide$ = curry$(function(x$, y$){
    return x$ / y$;
  });
  expt = curry$(function(x$, y$){
    return Math.pow(x$, y$);
  });
  equals$ = curry$(function(x$, y$){
    return x$ === y$;
  });
  notEquals$ = curry$(function(x$, y$){
    return x$ !== y$;
  });
  NOT$ = not$;
  OR = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    return args.reduce(function(acc, current){
      return acc || current;
    }, false);
  };
  XOR = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    return args.reduce(function(acc, current){
      return (a || b) && !(a && b);
    }, false);
  };
  AND = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    return args.reduce(function(acc, current){
      return acc && current;
    }, true);
  };
  moreThanOperator$ = curry$(function(x$, y$){
    return x$ > y$;
  });
  lessThanOperator$ = curry$(function(x$, y$){
    return x$ < y$;
  });
  moreThanOrEqualsOperator$ = curry$(function(x$, y$){
    return x$ >= y$;
  });
  lessThanOrEqualsOperator$ = curry$(function(x$, y$){
    return x$ <= y$;
  });
  modulus$ = curry$(function(x$, y$){
    var ref$;
    return ((x$) % (ref$ = y$) + ref$) % ref$;
  });
  mod$ = curry$(function(x$, y$){
    return x$ % y$;
  });
  member = curry$(function(k, xs){
    return xs.includes(k) || function(k2, xs2){
      if (toString$.call(xs2).slice(8, -1) === 'Array') {
        return in$(k2, xs2);
      } else {
        return false;
      }
    }(k, xs);
  });
  map2 = curry$(function(f, xs1, xs2){
    return xs1.map(function(x, i){
      return f(x, xs2[i]);
    });
  });
  negate = function(x){
    if (curry$(function(x$, y$){
      return x$ > y$;
    })(0, x)) {
      return x;
    } else {
      return -x;
    }
  };
  abs = Math.abs;
  listRef = curry$(function(i, xs){
    if (n < 0) {
      return xs[xs.length + n];
    } else {
      return xs[n];
    }
  });
  chars = function(s){
    return s.split('');
  };
  max = curry$(function(x1, x2){
    if (x1 > x2) {
      return x1;
    } else {
      return x2;
    }
  });
  min = curry$(function(x1, x2){
    if (x1 > x2) {
      return x2;
    } else {
      return x1;
    }
  });
  quot = curry$(function(x, y){
    return ~~(x / y);
  });
  pi = Math.pi;
  recip = (function(it){
    return 1 / it;
  });
  ln = Math.log;
  sin = Math.sin;
  cos = Math.cos;
  tan = Math.tan;
  csc = compose$((function(it){
    return 1 / it;
  }), Math.sin);
  sec = compose$((function(it){
    return 1 / it;
  }), Math.cos);
  cot = compose$((function(it){
    return 1 / it;
  }), Math.tan);
  truncate = function(x){
    return ~~x;
  };
  gcd = curry$(function(x, y){
    var z;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y !== 0) {
      z = x % y;
      x = y;
      y = z;
    }
    return x;
  });
  lcm = curry$(function(x, y){
    return Math.abs(Math.floor(x / function(x2, y2){
      var z;
      x2 = Math.abs(x2);
      y2 = Math.abs(y2);
      while (y2 !== 0) {
        z = x2 % y2;
        x2 = y2;
        y2 = z;
      }
      return x;
    }(x, y) * y));
  });
  even = function(x){
    return x % 2 === 0;
  };
  odd = function(x){
    return x % 2 === 1;
  };
  indexOf = curry$(function(k, xs){
    return xs.indexOf(k);
  });
  take = curry$(function(n, xs){
    return xs.slice(0, n);
  });
  drop = curry$(function(n, xs){
    return xs.slice(n);
  });
  repeat = curry$(function(n, s){
    var result, i$;
    result = '';
    for (i$ = 0; i$ < n; ++i$) {
      result += s;
    }
    return result;
  });
  str = function(s){
    if (s instanceof Array || Array.isArray(s)) {
      return JSON.stringify(s);
    }
    if (typeof s === 'string') {
      return s;
    }
    if (typeof s === 'undefined' || s === undefined) {
      return 'undefined';
    }
    if (typeof s === 'null' || s === null) {
      return 'null';
    }
    if (typeof s === boolean) {
      if (s) {
        return 'true';
      } else {
        return 'false';
      }
    }
    if (isNaN(s)) {
      return 'NaN';
    }
    if (s instanceof Function) {
      return s.toString();
    }
    return String(s);
  };
  int = function(s){
    if (typeof s === 'number') {
      return Math.floor(s);
    } else {
      return int(Number(s));
    }
  };
  title = function(s){
    return s.replace(/\b\w/g, function(c){
      return c.toUpperCase;
    });
  };
  lazy = function(f){
    var evaluated, result;
    evaluated = false;
    result = null;
    return function(){
      var args, res$, i$, to$, result, evaluated;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      if (!evaluated) {
        result = func.apply(null, args);
        evaluated = true;
      }
      return result;
    };
  };
  throttle = function(func, delay){
    var lastTime;
    lastTime = 0;
    return function(){
      var args, res$, i$, to$, currentTime, lastTime;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      currentTime = Date.now();
      if (currentTime - lastTime >= delay) {
        func.apply(this, args);
        lastTime = currentTime;
      }
    };
  };
  debounce = function(func, delay){
    var timeoutId;
    timeoutId = null;
    return function(){
      var args, res$, i$, to$, timeoutId;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function(){
        return func.apply(null, args);
      }, delay);
    };
  };
  noop = function(){
    null;
  };
  id = function(it){
    return it;
  };
  before = curry$(function(beforeFunc, func){
    return function(){
      var args, res$, i$, to$;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      beforeFunc();
      return func.apply(null, args);
    };
  });
  after = curry$(function(func, afterFunc){
    return function(){
      var args, res$, i$, to$, result;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      result = func.apply(null, args);
      afterFunc();
      return result;
    };
  });
  say = console.log;
  log = curry$(function(base, x){
    return Math.log(x) / Math.log(base);
  });
  random = curry$(function(minVal, maxVal){
    if (minVal >= maxVal) {
      return minVal;
    } else {
      return (function(it){
        return it + minVal;
      })(
      Math.floor(
      (function(it){
        return it * Math.random();
      })(
      (function(it){
        return it - minVal;
      })(
      maxVal))));
    }
  });
  sorted = function(xs){
    var mid, l, r;
    if (xs.length <= 1) {
      return xs;
    }
    mid = Math.floor(
    (function(it){
      return it / 2;
    })(
    arr.length));
    l = sorted(arr.slice(0, mid));
    r = sorted(arr.slice(mid));
    return function(l2, r2){
      var a;
      a = [];
      while (l2.length && r2.length) {
        if (l2[0] < r2[0]) {
          a.push(l.shift());
        } else {
          a.push(r.shift());
        }
      }
      return arrayFrom$(a).concat(arrayFrom$(l), arrayFrom$(r));
    }(l, r);
  };
  memoize = function(f){
    var cache;
    cache = {};
    return function(){
      var args, res$, i$, to$, res;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      if (in$(args[0], cache)) {
        return cache[args[0]];
      }
      res = f(args[0]);
      cache[n] = res;
      return res;
    };
  };
  tau = Math.pi * 2;
  sqrt = Math.sqrt;
  round = Math.round;
  buildList = curry$(function(n, f){
    return (function(){
      var i$, to$, results$ = [];
      for (i$ = 0, to$ = n; i$ < to$; ++i$) {
        results$.push(i$);
      }
      return results$;
    }()).map(f);
  });
  hashRef = curry$(function(ref, hash){
    return hash[ref];
  });
  remove = curry$(function(k, xs){
    if (typeof xs === 'string') {
      return xs.replace(new RegExp(k, 'g'), '');
    } else {
      return xs.filter(function(item){
        return item !== k;
      });
    }
  });
  join = curry$(function(k, xs){
    return xs.join(k);
  });
  list = function(){
    var elements, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    elements = res$;
    return elements;
  };
  listTo = curry$(function(to_, from_){
    return new Array(Math.floor(from_) - Math.floor(to_)).fill(Math.floor(from_)).map(function(el, i){
      return el + i;
    });
  });
  listTil = curry$(function(til_, from_){
    return new Array(Math.floor(from_) - 1 - Math.floor(til_)).fill(Math.floor(from_)).map(function(el, i){
      return el + i;
    });
  });
  funcall = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    if (args.length < 2) {
      return args[0]();
    } else {
      return args.pop().apply(null, args);
    }
  };
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
  function not$(x){ return !x; }
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
  function compose$() {
    var functions = arguments;
    return function() {
      var i, result;
      result = functions[0].apply(this, arguments);
      for (i = 1; i < functions.length; ++i) {
        result = functions[i](result);
      }
      return result;
    };
  }
}).call(this);